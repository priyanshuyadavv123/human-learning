import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { checkTutorHealth, queryTutor } from '../services/tutorService.ts';

describe('Client Tutor Service Suite', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('checkTutorHealth', () => {
    it('returns live mode when server hasKey is true', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ status: 'ok', hasKey: true, model: 'gemini-3.8-flash', mode: 'live' }),
      });

      const health = await checkTutorHealth();
      expect(health.online).toBe(true);
      expect(health.hasKey).toBe(true);
      expect(health.mode).toBe('live');
      expect(health.model).toBe('gemini-3.8-flash');
    });

    it('returns fallback mode when server hasKey is false', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ status: 'ok', hasKey: false, model: 'gemini-3.8-flash', mode: 'fallback' }),
      });

      const health = await checkTutorHealth();
      expect(health.online).toBe(true);
      expect(health.hasKey).toBe(false);
      expect(health.mode).toBe('fallback');
    });

    it('returns fallback mode when fetch rejects with a network error', async () => {
      global.fetch = vi.fn().mockRejectedValue(new Error('Network offline'));

      const health = await checkTutorHealth();
      expect(health.online).toBe(false);
      expect(health.hasKey).toBe(false);
      expect(health.mode).toBe('fallback');
    });
  });

  describe('queryTutor', () => {
    it('returns live AI response when server returns live payload', async () => {
      const mockPayload = {
        title: 'Working Memory Load',
        takeaway: 'Working memory capacity is strictly bounded.',
        detailedResponse: 'Conscious manipulation handles roughly 3-4 elements.',
        socraticChallenge: 'How does chunking overcome this limit?',
        referencedSection: 'Lesson 1.1 • Section 2: Working Memory Scratchpad',
      };

      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          mode: 'live',
          model: 'gemini-3.8-flash',
          payload: mockPayload,
        }),
      });

      const result = await queryTutor('How does working memory work?');
      expect(result.mode).toBe('live');
      expect(result.entry.title).toBe('Working Memory Load');
      expect(result.entry.takeaway).toBe('Working memory capacity is strictly bounded.');
      expect(result.model).toBe('gemini-3.8-flash');
    });

    it('falls back to local knowledge base when server instructs fallback (e.g. missing API key)', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          mode: 'fallback',
          reason: 'MISSING_API_KEY',
          message: 'GEMINI_API_KEY is not configured on the server.',
        }),
      });

      const result = await queryTutor('Why does rereading feel like mastery?');
      expect(result.mode).toBe('fallback');
      expect(result.reason).toBe('MISSING_API_KEY');
      expect(result.entry.title).toContain('Illusion of Competence');
      expect(result.entry.takeaway).toBeTruthy();
    });

    it('falls back to local knowledge base when server returns HTTP 429 rate limit', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
        status: 429,
        json: async () => ({ mode: 'fallback', reason: 'RATE_LIMITED' }),
      });

      const result = await queryTutor('What is retrieval practice?');
      expect(result.mode).toBe('fallback');
      expect(result.reason).toBe('RATE_LIMITED');
      expect(result.entry.title).toContain('Testing Effect');
    });

    it('falls back to local knowledge base when network fetch throws', async () => {
      global.fetch = vi.fn().mockRejectedValue(new Error('Fetch failed'));

      const result = await queryTutor('How does attention act as a filter?');
      expect(result.mode).toBe('fallback');
      expect(result.reason).toBe('NETWORK_OFFLINE');
      expect(result.entry.title).toContain('Attention');
    });
  });
});
