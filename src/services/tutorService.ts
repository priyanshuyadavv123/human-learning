import { findTutorAnswer, type TutorKnowledgeEntry } from '../data/tutorKnowledge.ts';
import type { ConceptId, CognitiveMisconceptionId, EvaluatedOutcome } from '../types/memory.ts';

export interface ChatHistoryItem {
  role: 'user' | 'model';
  text: string;
}

export interface TutorLearnerContext {
  activeMisconceptions?: CognitiveMisconceptionId[];
  dueConceptIds?: ConceptId[];
  recentOutcome?: EvaluatedOutcome;
}

export interface TutorServiceResult {
  mode: 'live' | 'fallback';
  entry: TutorKnowledgeEntry;
  model?: string;
  reason?: string;
  notice?: string;
}

export interface TutorHealthStatus {
  online: boolean;
  hasKey: boolean;
  model: string;
  mode: 'live' | 'fallback';
}

/**
 * Checks server health and API key readiness.
 */
export async function checkTutorHealth(): Promise<TutorHealthStatus> {
  try {
    const res = await fetch('/api/tutor/health', {
      method: 'GET',
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) {
      return { online: false, hasKey: false, model: '', mode: 'fallback' };
    }
    const data = await res.json();
    return {
      online: true,
      hasKey: !!data.hasKey,
      model: data.model || 'openai/gpt-oss-120b',
      mode: data.mode === 'live' ? 'live' : 'fallback',
    };
  } catch {
    return { online: false, hasKey: false, model: '', mode: 'fallback' };
  }
}

/**
 * Dispatches a tutor inquiry. Attempts the live Groq API endpoint first,
 * and seamlessly falls back to the deterministic local knowledge engine if
 * credentials are missing, quota is exceeded, or the network is offline.
 */
export async function queryTutor(
  message: string,
  history: ChatHistoryItem[] = [],
  lessonId = 'how-learning-actually-works',
  learnerContext?: TutorLearnerContext,
  language: 'en' | 'hinglish' = 'en'
): Promise<TutorServiceResult> {
  const trimmed = message.trim();
  if (!trimmed) {
    const local = findTutorAnswer('', language);
    return {
      mode: 'fallback',
      entry: local,
      reason: 'EMPTY_QUERY',
    };
  }

  try {
    const res = await fetch('/api/tutor/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        message: trimmed,
        history,
        lessonId,
        learnerContext,
        language,
      }),
    });

    if (!res.ok) {
      // If server returned 429, 413, 500, etc., fall back cleanly
      const local = findTutorAnswer(trimmed, language);
      const isRateLimited = res.status === 429;
      return {
        mode: 'fallback',
        entry: local,
        reason: isRateLimited ? 'RATE_LIMITED' : 'SERVER_ERROR',
        notice: isRateLimited 
          ? 'Rate limit reached. Serving from local deterministic knowledge base.'
          : 'Server returned error status. Serving from local deterministic knowledge base.',
      };
    }

    const data = await res.json();

    if (data.mode === 'live' && data.payload) {
      return {
        mode: 'live',
        entry: {
          keywords: [],
          title: data.payload.title,
          summary: data.payload.takeaway,
          takeaway: data.payload.takeaway,
          detailedResponse: data.payload.detailedResponse,
          socraticChallenge: data.payload.socraticChallenge,
          referencedSection: data.payload.referencedSection,
        },
        model: data.model,
      };
    }

    // Server instructed fallback (e.g. missing API key or invalid output)
    const local = findTutorAnswer(trimmed, language);
    return {
      mode: 'fallback',
      entry: local,
      reason: data.reason || 'SERVER_FALLBACK',
      notice: data.message || 'Serving from local deterministic knowledge base.',
    };
  } catch {
    // Network failure / offline
    const local = findTutorAnswer(trimmed, language);
    return {
      mode: 'fallback',
      entry: local,
      reason: 'NETWORK_OFFLINE',
      notice: 'Network offline or unreachable. Serving from local deterministic knowledge base.',
    };
  }
}
