import { describe, it, expect } from 'vitest';
import { 
  scheduleNextReview, 
  calculateElapsedDays, 
  calculateNextDueTimestamp 
} from '../services/spacedRetrieval.ts';
import type { ConceptReviewState } from '../types/memory.ts';

function createMockState(overrides: Partial<ConceptReviewState> = {}): ConceptReviewState {
  return {
    conceptId: 'concept:working_memory_capacity_limits',
    lessonId: 'how-learning-actually-works',
    chapterId: 'ch-1-architecture',
    stage: 'untested',
    reviewIntervalDays: 1,
    easeFactor: 2.0,
    totalAttempts: 0,
    consecutiveSuccesses: 0,
    lastReviewedAt: '2026-10-18T00:00:00.000Z',
    nextReviewDueAt: '2026-10-19T00:00:00.000Z',
    activeMisconceptions: [],
    hypercorrectionPending: false,
    ...overrides,
  };
}

describe('Spaced Retrieval Scheduling Engine', () => {
  describe('calculateElapsedDays & Clock Safety', () => {
    it('calculates exact positive elapsed days', () => {
      const now = '2026-10-21T00:00:00.000Z';
      const last = '2026-10-18T00:00:00.000Z';
      const days = calculateElapsedDays(now, last, 1);
      expect(days).toBe(3);
    });

    it('clamps negative elapsed time to 0 when system clock moved backwards', () => {
      const now = '2026-10-17T00:00:00.000Z'; // Clock is before last review!
      const last = '2026-10-18T00:00:00.000Z';
      const days = calculateElapsedDays(now, last, 1);
      expect(days).toBe(0);
    });

    it('handles invalid or unparseable timestamps gracefully without NaN', () => {
      const days = calculateElapsedDays('invalid-date', 'not-a-timestamp', 5);
      expect(days).toBe(5);
      expect(Number.isNaN(days)).toBe(false);
    });

    it('returns fallback interval if lastReviewedAt is undefined', () => {
      const days = calculateElapsedDays('2026-10-19T00:00:00.000Z', undefined, 4);
      expect(days).toBe(4);
    });
  });

  describe('calculateNextDueTimestamp', () => {
    it('calculates the exact future due timestamp in ISO format', () => {
      const now = '2026-10-19T00:00:00.000Z';
      const due = calculateNextDueTimestamp(now, 3);
      expect(due).toBe('2026-10-22T00:00:00.000Z');
    });

    it('enforces a minimum of 1 day interval for next due date', () => {
      const now = '2026-10-19T00:00:00.000Z';
      const due = calculateNextDueTimestamp(now, 0);
      expect(due).toBe('2026-10-20T00:00:00.000Z');
    });
  });

  describe('Rule 1: Correct Evaluated Response', () => {
    it('schedules initial review from 1 day to 3 days', () => {
      const current = createMockState({ reviewIntervalDays: 1, easeFactor: 2.0 });
      const result = scheduleNextReview({
        currentState: current,
        evaluatedOutcome: 'correct',
        nowIso: '2026-10-19T00:00:00.000Z',
      });

      expect(result.updatedState.reviewIntervalDays).toBe(3);
      expect(result.updatedState.consecutiveSuccesses).toBe(1);
      expect(result.updatedState.stage).toBe('consolidating');
    });

    it('scales subsequent correct intervals by ease factor (3d -> 6d -> 12d)', () => {
      const current = createMockState({ 
        reviewIntervalDays: 3, 
        easeFactor: 2.0, 
        consecutiveSuccesses: 1,
        totalAttempts: 1,
        lastReviewedAt: '2026-10-19T00:00:00.000Z',
      });

      const res1 = scheduleNextReview({
        currentState: current,
        evaluatedOutcome: 'correct',
        nowIso: '2026-10-22T00:00:00.000Z', // 3 days later
      });

      expect(res1.updatedState.reviewIntervalDays).toBe(6);
      expect(res1.updatedState.consecutiveSuccesses).toBe(2);

      const res2 = scheduleNextReview({
        currentState: res1.updatedState,
        evaluatedOutcome: 'correct',
        nowIso: '2026-10-28T00:00:00.000Z', // 6 days later
      });

      expect(res2.updatedState.reviewIntervalDays).toBe(12);
      expect(res2.updatedState.stage).toBe('stabilized');
    });

    it('modulates interval slightly when confidence is explicitly low or high', () => {
      const baseState = createMockState({ 
        reviewIntervalDays: 4, 
        easeFactor: 2.0, 
        totalAttempts: 2,
        lastReviewedAt: '2026-10-19T00:00:00.000Z',
      });

      // Low confidence (effortful recall): grows modestly
      const lowResult = scheduleNextReview({
        currentState: baseState,
        evaluatedOutcome: 'correct',
        explicitConfidence: 'low',
        nowIso: '2026-10-23T00:00:00.000Z', // 4 days later (on-time)
      });
      // 4 * 2.0 = 8; 8 * 0.9 = 7.2 -> 7
      expect(lowResult.updatedState.reviewIntervalDays).toBe(7);

      // High confidence (fluent recall): bonus extension and ease factor increase
      const highResult = scheduleNextReview({
        currentState: baseState,
        evaluatedOutcome: 'correct',
        explicitConfidence: 'high',
        nowIso: '2026-10-23T00:00:00.000Z', // 4 days later (on-time)
      });
      // 4 * 2.0 = 8; 8 * 1.15 = 9.2 -> 9
      expect(highResult.updatedState.reviewIntervalDays).toBe(9);
      expect(highResult.updatedState.easeFactor).toBe(2.1);
    });

    it('resolves active misconception after 2 consecutive correct answers', () => {
      const stateWithMisconception = createMockState({
        consecutiveSuccesses: 1,
        activeMisconceptions: ['misconception:working_memory_unlimited_illusion'],
      });

      const result = scheduleNextReview({
        currentState: stateWithMisconception,
        evaluatedOutcome: 'correct',
        identifiedMisconception: 'misconception:working_memory_unlimited_illusion',
      });

      expect(result.updatedState.consecutiveSuccesses).toBe(2);
      expect(result.misconceptionResolved).toBe(true);
      expect(result.updatedState.activeMisconceptions).not.toContain('misconception:working_memory_unlimited_illusion');
    });
  });

  describe('Rule 2: Partially Correct Evaluated Response', () => {
    it('scales interval conservatively (1.2x), decreases ease factor, and preserves successes', () => {
      const current = createMockState({
        reviewIntervalDays: 5,
        easeFactor: 2.0,
        consecutiveSuccesses: 2,
        totalAttempts: 2,
        lastReviewedAt: '2026-10-19T00:00:00.000Z',
        activeMisconceptions: ['misconception:multitasking_parallel_myth'],
      });

      const result = scheduleNextReview({
        currentState: current,
        evaluatedOutcome: 'partially_correct',
        nowIso: '2026-10-24T00:00:00.000Z', // 5 days later (on-time)
      });

      // 5 * 1.2 = 6
      expect(result.updatedState.reviewIntervalDays).toBe(6);
      expect(result.updatedState.easeFactor).toBe(1.95);
      // Consecutive successes hold steady (not reset, not incremented)
      expect(result.updatedState.consecutiveSuccesses).toBe(2);
      // Misconceptions are NOT removed on partial answers
      expect(result.updatedState.activeMisconceptions).toContain('misconception:multitasking_parallel_myth');
      expect(result.misconceptionResolved).toBe(false);
    });
  });

  describe('Rule 3 & 4: Incorrect Response & Confidence Safeguards', () => {
    it('strictly resets interval to 1 day and zeroes consecutive successes on incorrect answer', () => {
      const current = createMockState({
        reviewIntervalDays: 14,
        easeFactor: 2.2,
        consecutiveSuccesses: 4,
        stage: 'stabilized',
      });

      const result = scheduleNextReview({
        currentState: current,
        evaluatedOutcome: 'incorrect',
        identifiedMisconception: 'misconception:rereading_fluency_illusion',
      });

      expect(result.updatedState.reviewIntervalDays).toBe(1);
      expect(result.updatedState.consecutiveSuccesses).toBe(0);
      expect(result.updatedState.easeFactor).toBe(2.0); // 2.2 - 0.2
      expect(result.updatedState.stage).toBe('reinforcing');
      expect(result.updatedState.activeMisconceptions).toContain('misconception:rereading_fluency_illusion');
    });

    it('NEVER extends interval when confidence is high but answer is incorrect', () => {
      const current = createMockState({
        reviewIntervalDays: 10,
        consecutiveSuccesses: 3,
      });

      const result = scheduleNextReview({
        currentState: current,
        evaluatedOutcome: 'incorrect',
        explicitConfidence: 'high', // Learner was overly confident!
      });

      expect(result.updatedState.reviewIntervalDays).toBe(1); // STRICT 1 day!
      expect(result.updatedState.consecutiveSuccesses).toBe(0);
      expect(result.updatedState.hypercorrectionPending).toBe(true);
    });

    it('requires BOTH correct answer AND explicit discrepancy acknowledgement for hypercorrection bonus', () => {
      const stateWithPendingBonus = createMockState({
        reviewIntervalDays: 1,
        easeFactor: 1.8,
        hypercorrectionPending: true,
      });

      // Case A: Correct answer but discrepancy NOT acknowledged -> bonus withheld
      const resNoAck = scheduleNextReview({
        currentState: stateWithPendingBonus,
        evaluatedOutcome: 'correct',
        discrepancyAcknowledged: false,
      });
      expect(resNoAck.hypercorrectionBonusApplied).toBe(false);
      expect(resNoAck.updatedState.hypercorrectionPending).toBe(true);
      expect(resNoAck.updatedState.easeFactor).toBe(1.8);

      // Case B: Correct answer AND discrepancy acknowledged -> +0.15 recovery bonus
      const resWithAck = scheduleNextReview({
        currentState: stateWithPendingBonus,
        evaluatedOutcome: 'correct',
        discrepancyAcknowledged: true,
      });
      expect(resWithAck.hypercorrectionBonusApplied).toBe(true);
      expect(resWithAck.updatedState.hypercorrectionPending).toBe(false);
      expect(resWithAck.updatedState.easeFactor).toBe(1.95); // 1.8 + 0.15
    });
  });

  describe('Rule 5: Overdue Reviews', () => {
    it('applies damped credit for overdue delays when response is correct', () => {
      // Scheduled for 3 days, but learner returned 12 days later (extra 9 days)
      const current = createMockState({
        reviewIntervalDays: 3,
        easeFactor: 2.0,
        lastReviewedAt: '2026-10-07T00:00:00.000Z',
      });

      const result = scheduleNextReview({
        currentState: current,
        evaluatedOutcome: 'correct',
        nowIso: '2026-10-19T00:00:00.000Z', // 12 days elapsed
      });

      expect(result.isOverdue).toBe(true);
      expect(result.elapsedDays).toBe(12);
      // Effective interval: 3 + round(sqrt(9)) = 3 + 3 = 6
      // New interval: 6 * 2.0 = 12
      expect(result.updatedState.reviewIntervalDays).toBe(12);
    });

    it('does NOT add extra penalty beyond 1-day reset when overdue review is incorrect', () => {
      const current = createMockState({
        reviewIntervalDays: 3,
        easeFactor: 2.0,
        lastReviewedAt: '2026-10-01T00:00:00.000Z', // 18 days elapsed
      });

      const result = scheduleNextReview({
        currentState: current,
        evaluatedOutcome: 'incorrect',
        nowIso: '2026-10-19T00:00:00.000Z',
      });

      expect(result.isOverdue).toBe(true);
      expect(result.updatedState.reviewIntervalDays).toBe(1); // Standard 1 day reset
      expect(result.updatedState.consecutiveSuccesses).toBe(0);
    });
  });
});
