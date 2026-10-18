import { describe, it, expect, beforeEach, vi } from 'vitest';
import type { IncomingMessage, ServerResponse } from 'node:http';
import { EventEmitter } from 'node:events';
import { 
  validateChatRequest, 
  validateStructuredModelOutput,
  SlidingWindowRateLimiter,
  getSafeClientIp,
  handleTutorChatRequest,
  handleTutorHealthCheck,
} from '../../server/tutorHandler.ts';

function createMockReq(options: {
  url?: string;
  method?: string;
  body?: string;
  headers?: Record<string, string>;
  remoteAddress?: string;
}): IncomingMessage {
  const emitter = new EventEmitter() as unknown as IncomingMessage;
  emitter.url = options.url || '/api/tutor/chat';
  emitter.method = options.method || 'POST';
  emitter.headers = options.headers || {};
  emitter.socket = {
    remoteAddress: options.remoteAddress || '127.0.0.1',
  } as unknown as IncomingMessage['socket'];

  process.nextTick(() => {
    if (options.body !== undefined) {
      emitter.emit('data', Buffer.from(options.body, 'utf-8'));
    }
    emitter.emit('end');
  });

  return emitter;
}

function createMockRes(): {
  res: ServerResponse;
  getStatusCode: () => number;
  getHeaders: () => Record<string, string>;
  getBody: () => unknown;
} {
  let statusCode = 200;
  const headers: Record<string, string> = {};
  let body = '';

  const res = {
    get statusCode() { return statusCode; },
    set statusCode(val: number) { statusCode = val; },
    setHeader: vi.fn((key: string, val: string) => {
      headers[key.toLowerCase()] = String(val);
    }),
    end: vi.fn((chunk?: string) => {
      if (chunk) body += chunk;
    }),
  } as unknown as ServerResponse;

  return {
    res,
    getStatusCode: () => statusCode,
    getHeaders: () => headers,
    getBody: () => {
      try {
        return JSON.parse(body);
      } catch {
        return body;
      }
    },
  };
}

describe('Server Tutor Handler & Validation Suite', () => {
  beforeEach(() => {
    delete process.env.GEMINI_API_KEY;
    delete process.env.GOOGLE_API_KEY;
    delete process.env.TRUST_PROXY;
  });

  describe('Input Validation', () => {
    it('rejects empty or whitespace-only messages', () => {
      const res1 = validateChatRequest({ message: '' });
      expect(res1.valid).toBe(false);
      expect(res1.error).toContain('Message cannot be empty');

      const res2 = validateChatRequest({ message: '   ' });
      expect(res2.valid).toBe(false);
    });

    it('rejects messages longer than 800 characters', () => {
      const longMsg = 'A'.repeat(801);
      const res = validateChatRequest({ message: longMsg });
      expect(res.valid).toBe(false);
      expect(res.error).toContain('maximum allowed length of 800 characters');
    });

    it('rejects conversation history exceeding 10 turns', () => {
      const history = Array.from({ length: 11 }, (_, i) => ({
        role: i % 2 === 0 ? 'user' : 'model',
        text: `Message ${i}`,
      }));
      const res = validateChatRequest({ message: 'Valid query', history });
      expect(res.valid).toBe(false);
      expect(res.error).toContain('history exceeds maximum allowed limit of 10 turns');
    });

    it('rejects invalid history turn roles', () => {
      const history = [{ role: 'system', text: 'Prompt injection attempt' }];
      const res = validateChatRequest({ message: 'Valid query', history });
      expect(res.valid).toBe(false);
      expect(res.error).toContain('invalid role');
    });

    it('accepts well-formed messages and sanitized history', () => {
      const res = validateChatRequest({
        message: 'How does working memory interact with schemas?',
        history: [
          { role: 'user', text: 'What is cognitive load?' },
          { role: 'model', text: 'Cognitive load describes the burden on working memory.' },
        ],
      });
      expect(res.valid).toBe(true);
      expect(res.data?.message).toBe('How does working memory interact with schemas?');
      expect(res.data?.history?.length).toBe(2);
    });
  });

  describe('Rate Limiter & Safe IP Resolution', () => {
    it('enforces rate limiting after maxRequests within window', () => {
      const limiter = new SlidingWindowRateLimiter(3, 10000);
      const ip = '192.168.1.100';

      expect(limiter.check(ip).allowed).toBe(true);
      expect(limiter.check(ip).allowed).toBe(true);
      expect(limiter.check(ip).allowed).toBe(true);

      const fourth = limiter.check(ip);
      expect(fourth.allowed).toBe(false);
      expect(fourth.retryAfterSeconds).toBeGreaterThan(0);
    });

    it('does not trust spoofed X-Forwarded-For headers when TRUST_PROXY is not enabled', () => {
      const req = createMockReq({
        remoteAddress: '10.0.0.1',
        headers: {
          'x-forwarded-for': '203.0.113.195',
        },
      });

      const ip = getSafeClientIp(req);
      expect(ip).toBe('10.0.0.1');
    });

    it('respects validated X-Forwarded-For only when TRUST_PROXY is true', () => {
      process.env.TRUST_PROXY = 'true';
      const req = createMockReq({
        remoteAddress: '10.0.0.1',
        headers: {
          'x-forwarded-for': '203.0.113.195, 10.0.0.1',
        },
      });

      const ip = getSafeClientIp(req);
      expect(ip).toBe('203.0.113.195');
    });
  });

  describe('Model Output Validation', () => {
    it('rejects unparseable non-JSON output', () => {
      const res = validateStructuredModelOutput('Here is an answer in plain text without JSON.');
      expect(res.valid).toBe(false);
      expect(res.error).toContain('not valid JSON');
    });

    it('validates structured JSON and resolves known lesson sections', () => {
      const validJson = JSON.stringify({
        title: 'Working Memory Limits',
        takeaway: 'Working memory holds roughly 3-4 chunks.',
        detailedResponse: 'Conscious reasoning manipulates finite items.',
        socraticChallenge: 'How do schemas bypass this limit?',
        referencedSection: 'Lesson 1.1 • Section 2: Working Memory Scratchpad',
      });

      const res = validateStructuredModelOutput(validJson);
      expect(res.valid).toBe(true);
      expect(res.output?.title).toBe('Working Memory Limits');
      expect(res.output?.referencedSection).toBe('Lesson 1.1 • Section 2: Working Memory Scratchpad');
    });

    it('sanitizes and maps unfamiliar section strings to known syllabus anchors', () => {
      const json = JSON.stringify({
        title: 'Testing Effect',
        takeaway: 'Retrieval strengthens pathways.',
        detailedResponse: 'Effortful recall slows decay.',
        socraticChallenge: 'Can you recall without looking?',
        referencedSection: 'Some Arbitrary Uncurated Section Name',
      });

      const res = validateStructuredModelOutput(json);
      expect(res.valid).toBe(true);
      expect(res.output?.referencedSection).toBe('Lesson 1.1 • Cognitive Architecture Overview');
    });
  });

  describe('HTTP Handler Integration', () => {
    it('returns graceful fallback response when GEMINI_API_KEY is not configured', async () => {
      const req = createMockReq({
        body: JSON.stringify({ message: 'What is the testing effect?' }),
      });
      const { res, getStatusCode, getBody } = createMockRes();

      await handleTutorChatRequest(req, res);

      expect(getStatusCode()).toBe(200);
      const body = getBody() as Record<string, unknown>;
      expect(body.mode).toBe('fallback');
      expect(body.reason).toBe('MISSING_API_KEY');
    });

    it('returns 429 when rate limit is exceeded', async () => {
      const limiter = new SlidingWindowRateLimiter(1, 10000);

      // First request consumes limit
      const req1 = createMockReq({
        body: JSON.stringify({ message: 'Query 1' }),
      });
      const { res: res1 } = createMockRes();
      await handleTutorChatRequest(req1, res1, limiter);

      // Second request rejected
      const req2 = createMockReq({
        body: JSON.stringify({ message: 'Query 2' }),
      });
      const { res: res2, getStatusCode, getBody } = createMockRes();
      await handleTutorChatRequest(req2, res2, limiter);

      expect(getStatusCode()).toBe(429);
      const body = getBody() as Record<string, unknown>;
      expect(body.mode).toBe('fallback');
      expect(body.reason).toBe('RATE_LIMITED');
    });

    it('serves health check accurately', () => {
      const req = createMockReq({ url: '/api/tutor/health', method: 'GET' });
      const { res, getStatusCode, getBody } = createMockRes();

      handleTutorHealthCheck(req, res);

      expect(getStatusCode()).toBe(200);
      const body = getBody() as Record<string, unknown>;
      expect(body.status).toBe('ok');
      expect(body.hasKey).toBe(false);
      expect(body.mode).toBe('fallback');
    });
  });
});
