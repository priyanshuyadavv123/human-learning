import type { IncomingMessage, ServerResponse } from 'node:http';
import { GoogleGenAI, Type } from '@google/genai';
import { TUTOR_SYSTEM_INSTRUCTION, resolveValidSection } from './groundingContext.ts';

export interface ChatHistoryTurn {
  role: 'user' | 'model';
  text: string;
}

export interface TutorChatRequestBody {
  message: string;
  history?: ChatHistoryTurn[];
  lessonId?: string;
}

export interface StructuredTutorResponse {
  title: string;
  takeaway: string;
  detailedResponse: string;
  socraticChallenge: string;
  referencedSection: string;
}

export interface TutorSuccessResponse {
  mode: 'live';
  model: string;
  payload: StructuredTutorResponse;
}

export interface TutorFallbackResponse {
  mode: 'fallback';
  reason: 'MISSING_API_KEY' | 'RATE_LIMITED' | 'PROVIDER_ERROR' | 'INVALID_MODEL_OUTPUT' | 'TIMEOUT';
  error?: string;
  message: string;
}

export type TutorApiResponse = TutorSuccessResponse | TutorFallbackResponse;

/**
 * In-memory sliding window rate limiter
 */
export class SlidingWindowRateLimiter {
  private requests: Map<string, number[]> = new Map();
  private maxRequests: number;
  private windowMs: number;

  constructor(maxRequests = 15, windowMs = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  public check(ip: string): { allowed: boolean; retryAfterSeconds?: number } {
    const now = Date.now();
    const windowStart = now - this.windowMs;

    const timestamps = (this.requests.get(ip) || []).filter(t => t > windowStart);

    if (timestamps.length >= this.maxRequests) {
      const oldestInWindow = timestamps[0];
      const retryAfterSeconds = Math.ceil((oldestInWindow + this.windowMs - now) / 1000);
      return { allowed: false, retryAfterSeconds: Math.max(1, retryAfterSeconds) };
    }

    timestamps.push(now);
    this.requests.set(ip, timestamps);
    return { allowed: true };
  }

  public cleanup(): void {
    const windowStart = Date.now() - this.windowMs;
    for (const [ip, timestamps] of this.requests.entries()) {
      const active = timestamps.filter(t => t > windowStart);
      if (active.length === 0) {
        this.requests.delete(ip);
      } else {
        this.requests.set(ip, active);
      }
    }
  }

  public reset(): void {
    this.requests.clear();
  }
}

export const defaultRateLimiter = new SlidingWindowRateLimiter(15, 60000);

/**
 * Safely resolves client IP without trusting arbitrary unverified headers.
 */
export function getSafeClientIp(req: IncomingMessage): string {
  if (process.env.TRUST_PROXY === 'true') {
    const xff = req.headers['x-forwarded-for'];
    if (typeof xff === 'string' && xff.trim().length > 0) {
      const parts = xff.split(',').map(s => s.trim());
      // Take the first validated IP token
      if (parts[0] && parts[0].length <= 45) {
        return parts[0];
      }
    }
  }
  return req.socket.remoteAddress || '127.0.0.1';
}

/**
 * Reads request body safely with payload size cap (default 32KB).
 */
export async function readJsonBody<T>(req: IncomingMessage, maxBytes = 32768): Promise<T> {
  return new Promise((resolve, reject) => {
    let body = '';
    let bytesReceived = 0;

    req.on('data', (chunk: Buffer) => {
      bytesReceived += chunk.length;
      if (bytesReceived > maxBytes) {
        if (typeof req.pause === 'function') {
          req.pause();
        }
        req.removeAllListeners('data');
        reject(new Error('PAYLOAD_TOO_LARGE'));
        return;
      }
      body += chunk.toString('utf-8');
    });

    req.on('end', () => {
      if (!body.trim()) {
        reject(new Error('EMPTY_BODY'));
        return;
      }
      try {
        const parsed = JSON.parse(body);
        resolve(parsed as T);
      } catch {
        reject(new Error('INVALID_JSON'));
      }
    });

    req.on('error', (err) => {
      reject(err);
    });
  });
}

/**
 * Validates request schema and constraints.
 */
export function validateChatRequest(body: unknown): {
  valid: boolean;
  error?: string;
  data?: TutorChatRequestBody;
} {
  if (!body || typeof body !== 'object') {
    return { valid: false, error: 'Request body must be a JSON object.' };
  }

  const b = body as Record<string, unknown>;

  if (typeof b.message !== 'string') {
    return { valid: false, error: 'Field "message" is required and must be a string.' };
  }

  const trimmedMessage = b.message.trim();
  if (trimmedMessage.length === 0) {
    return { valid: false, error: 'Message cannot be empty.' };
  }

  if (trimmedMessage.length > 800) {
    return { valid: false, error: 'Message exceeds maximum allowed length of 800 characters.' };
  }

  let sanitizedHistory: ChatHistoryTurn[] = [];
  if (b.history !== undefined) {
    if (!Array.isArray(b.history)) {
      return { valid: false, error: 'Field "history" must be an array.' };
    }

    if (b.history.length > 10) {
      return { valid: false, error: 'Conversation history exceeds maximum allowed limit of 10 turns.' };
    }

    for (let i = 0; i < b.history.length; i++) {
      const turn = b.history[i];
      if (!turn || typeof turn !== 'object') {
        return { valid: false, error: `History turn [${i}] must be an object.` };
      }
      const t = turn as Record<string, unknown>;
      if (t.role !== 'user' && t.role !== 'model') {
        return { valid: false, error: `History turn [${i}] has invalid role. Must be 'user' or 'model'.` };
      }
      if (typeof t.text !== 'string' || t.text.length > 1000) {
        return { valid: false, error: `History turn [${i}] text must be a string of at most 1000 characters.` };
      }
      sanitizedHistory.push({
        role: t.role,
        text: t.text.trim(),
      });
    }
  }

  return {
    valid: true,
    data: {
      message: trimmedMessage,
      history: sanitizedHistory,
      lessonId: typeof b.lessonId === 'string' ? b.lessonId : 'how-learning-actually-works',
    },
  };
}

/**
 * Validates and normalizes structured model output.
 */
export function validateStructuredModelOutput(rawText: string | undefined): {
  valid: boolean;
  output?: StructuredTutorResponse;
  error?: string;
} {
  if (!rawText || !rawText.trim()) {
    return { valid: false, error: 'Model returned empty response.' };
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(rawText.trim());
  } catch {
    return { valid: false, error: 'Model output was not valid JSON.' };
  }

  if (!parsed || typeof parsed !== 'object') {
    return { valid: false, error: 'Parsed model output is not an object.' };
  }

  const p = parsed as Record<string, unknown>;

  const title = typeof p.title === 'string' && p.title.trim().length > 0 
    ? p.title.trim().slice(0, 100) 
    : 'Cognitive Science Guidance';

  const takeaway = typeof p.takeaway === 'string' && p.takeaway.trim().length > 0
    ? p.takeaway.trim().slice(0, 300)
    : 'Grounded in Lesson 1.1 cognitive science architecture.';

  const detailedResponse = typeof p.detailedResponse === 'string' && p.detailedResponse.trim().length > 0
    ? p.detailedResponse.trim().slice(0, 2000)
    : 'No explanation was generated.';

  const socraticChallenge = typeof p.socraticChallenge === 'string' && p.socraticChallenge.trim().length > 0
    ? p.socraticChallenge.trim().slice(0, 500)
    : 'How does this concept connect to Attention, Working Memory, Schemas, Retrieval, or Feedback?';

  const referencedSection = resolveValidSection(
    typeof p.referencedSection === 'string' ? p.referencedSection : undefined
  );

  return {
    valid: true,
    output: {
      title,
      takeaway,
      detailedResponse,
      socraticChallenge,
      referencedSection,
    },
  };
}

/**
 * Core tutor request handler shared across Vite dev server and standalone Node server.
 */
export async function handleTutorChatRequest(
  req: IncomingMessage,
  res: ServerResponse,
  rateLimiter: SlidingWindowRateLimiter = defaultRateLimiter
): Promise<void> {
  const sendJson = (statusCode: number, data: unknown) => {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
    res.end(JSON.stringify(data));
  };

  // 1. Rate Limiting Check
  const clientIp = getSafeClientIp(req);
  const rateLimitResult = rateLimiter.check(clientIp);
  if (!rateLimitResult.allowed) {
    res.setHeader('Retry-After', String(rateLimitResult.retryAfterSeconds || 60));
    sendJson(429, {
      mode: 'fallback',
      reason: 'RATE_LIMITED',
      message: `Rate limit exceeded. Please wait ${rateLimitResult.retryAfterSeconds || 60} seconds before retrying.`,
    } satisfies TutorFallbackResponse);
    return;
  }

  // 2. Read Request Body with size cap
  let rawBody: unknown;
  try {
    rawBody = await readJsonBody(req);
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Bad Request';
    if (errorMsg === 'PAYLOAD_TOO_LARGE') {
      sendJson(413, {
        mode: 'fallback',
        reason: 'PROVIDER_ERROR',
        message: 'Payload size exceeds the 32 KB limit.',
      } satisfies TutorFallbackResponse);
      return;
    }
    sendJson(400, {
      mode: 'fallback',
      reason: 'PROVIDER_ERROR',
      message: `Malformed request: ${errorMsg}`,
    } satisfies TutorFallbackResponse);
    return;
  }

  // 3. Validate Request Parameters
  const validation = validateChatRequest(rawBody);
  if (!validation.valid || !validation.data) {
    sendJson(400, {
      mode: 'fallback',
      reason: 'PROVIDER_ERROR',
      message: validation.error || 'Invalid request payload.',
    } satisfies TutorFallbackResponse);
    return;
  }

  const { message, history } = validation.data;

  // 4. Check API Key Presence (Graceful fallback if unconfigured)
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (!apiKey || !apiKey.trim()) {
    sendJson(200, {
      mode: 'fallback',
      reason: 'MISSING_API_KEY',
      message: 'GEMINI_API_KEY is not configured on the server. Serving from local deterministic knowledge base.',
    } satisfies TutorFallbackResponse);
    return;
  }

  // 5. Call Gemini API via official @google/genai SDK
  const preferredModel = process.env.GEMINI_MODEL || 'gemini-3.8-flash';
  const ai = new GoogleGenAI({ apiKey: apiKey.trim() });

  // Assemble contents array: previous turns + current user message
  const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

  if (history && history.length > 0) {
    for (const turn of history) {
      contents.push({
        role: turn.role,
        parts: [{ text: turn.text }],
      });
    }
  }

  contents.push({
    role: 'user',
    parts: [{ text: message }],
  });

  try {
    const generatePromise = ai.models.generateContent({
      model: preferredModel,
      contents,
      config: {
        systemInstruction: TUTOR_SYSTEM_INSTRUCTION,
        temperature: 0.3,
        maxOutputTokens: 1200,
        responseMimeType: 'application/json',
        responseJsonSchema: {
          type: Type.OBJECT,
          properties: {
            title: {
              type: Type.STRING,
              description: 'A concise 2-5 word concept headline',
            },
            takeaway: {
              type: Type.STRING,
              description: 'One crisp, high-impact key takeaway sentence',
            },
            detailedResponse: {
              type: Type.STRING,
              description: 'Socratic pedagogical explanation explaining cognitive mechanisms. Use markdown bullet points where helpful.',
            },
            socraticChallenge: {
              type: Type.STRING,
              description: 'A calibrating reflective question prompting the learner to retrieve or apply the concept',
            },
            referencedSection: {
              type: Type.STRING,
              description: 'The exact matching section name from Lesson 1.1 syllabus list',
            },
          },
          required: ['title', 'takeaway', 'detailedResponse', 'socraticChallenge', 'referencedSection'],
        },
      },
    });

    // 15-second timeout safeguard
    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error('TIMEOUT')), 15000);
    });

    const response = await Promise.race([generatePromise, timeoutPromise]);

    // 6. Validate and parse model structured output
    const outputValidation = validateStructuredModelOutput(response.text);

    if (!outputValidation.valid || !outputValidation.output) {
      sendJson(200, {
        mode: 'fallback',
        reason: 'INVALID_MODEL_OUTPUT',
        error: outputValidation.error,
        message: 'The AI model output could not be formatted. Falling back to local knowledge base.',
      } satisfies TutorFallbackResponse);
      return;
    }

    sendJson(200, {
      mode: 'live',
      model: preferredModel,
      payload: outputValidation.output,
    } satisfies TutorSuccessResponse);

  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown provider error';

    if (errorMsg === 'TIMEOUT') {
      sendJson(200, {
        mode: 'fallback',
        reason: 'TIMEOUT',
        message: 'AI response timed out (15s limit). Serving from local deterministic knowledge base.',
      } satisfies TutorFallbackResponse);
      return;
    }

    // Safe error logging without sensitive tokens
    console.error(`[Tutor API] Provider error with model ${preferredModel}: ${errorMsg.slice(0, 120)}`);

    sendJson(200, {
      mode: 'fallback',
      reason: 'PROVIDER_ERROR',
      error: errorMsg.slice(0, 100),
      message: 'Upstream Gemini provider error occurred. Serving from local deterministic knowledge base.',
    } satisfies TutorFallbackResponse);
  }
}

/**
 * Health check handler for /api/tutor/health
 */
export function handleTutorHealthCheck(_req: IncomingMessage, res: ServerResponse): void {
  const hasKey = !!(process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY);
  const model = process.env.GEMINI_MODEL || 'gemini-3.8-flash';

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.end(JSON.stringify({
    status: 'ok',
    hasKey,
    model,
    mode: hasKey ? 'live' : 'fallback',
  }));
}
