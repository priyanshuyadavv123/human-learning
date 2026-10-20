import type { 
  ConceptReviewState, 
  EvaluatedOutcome, 
  ExplicitConfidence, 
  LearnerSelfRating,
  CognitiveMisconceptionId,
  MemoryStage,
} from '../types/memory.ts';

export interface SpacedScheduleInput {
  currentState: ConceptReviewState;
  evaluatedOutcome: EvaluatedOutcome;
  learnerSelfRating?: LearnerSelfRating;
  explicitConfidence?: ExplicitConfidence;
  discrepancyAcknowledged?: boolean;
  identifiedMisconception?: CognitiveMisconceptionId;
  nowIso?: string; // Defaults to new Date().toISOString()
}

export interface SpacedScheduleResult {
  updatedState: ConceptReviewState;
  elapsedDays: number;
  isOverdue: boolean;
  hypercorrectionBonusApplied: boolean;
  misconceptionResolved: boolean;
}

/**
 * Calculates elapsed days safely, clamping negative time and handling invalid timestamps.
 */
export function calculateElapsedDays(
  nowIso: string, 
  lastReviewedIso: string | undefined, 
  fallbackIntervalDays: number
): number {
  if (!lastReviewedIso) {
    return fallbackIntervalDays;
  }
  const nowMs = Date.parse(nowIso);
  const lastMs = Date.parse(lastReviewedIso);

  if (Number.isNaN(nowMs) || Number.isNaN(lastMs)) {
    return Math.max(0, fallbackIntervalDays);
  }

  const deltaMs = nowMs - lastMs;
  if (deltaMs < 0) {
    // Clock moved backwards or invalid relative sequence: clamp to 0
    return 0;
  }

  return deltaMs / (1000 * 60 * 60 * 24);
}

/**
 * Calculates the exact next review due ISO string given an interval in days.
 */
export function calculateNextDueTimestamp(nowIso: string, intervalDays: number): string {
  const nowMs = Date.parse(nowIso);
  const validNowMs = Number.isNaN(nowMs) ? Date.now() : nowMs;
  const safeDays = Math.max(1, Math.round(intervalDays));
  const dueMs = validNowMs + safeDays * 24 * 60 * 60 * 1000;
  return new Date(dueMs).toISOString();
}

/**
 * Determines memory stage based on consecutive successes and review interval.
 */
export function determineMemoryStage(
  totalAttempts: number,
  consecutiveSuccesses: number,
  reviewIntervalDays: number,
  lastOutcome: EvaluatedOutcome,
  hypercorrectionPending: boolean
): MemoryStage {
  if (totalAttempts === 0) {
    return 'untested';
  }
  if (lastOutcome === 'incorrect' || hypercorrectionPending) {
    return 'reinforcing';
  }
  if (reviewIntervalDays >= 7 && consecutiveSuccesses >= 2) {
    return 'stabilized';
  }
  return 'consolidating';
}

/**
 * Core deterministic spaced scheduling engine.
 * Pure function with zero external state or side effects.
 */
export function scheduleNextReview(input: SpacedScheduleInput): SpacedScheduleResult {
  const now = input.nowIso || new Date().toISOString();
  const current = input.currentState;

  const previousInterval = Math.max(1, Math.round(current.reviewIntervalDays || 1));
  let easeFactor = Math.min(2.5, Math.max(1.3, current.easeFactor || 2.0));
  
  // 1. Calculate elapsed days and check if overdue
  const elapsedDays = calculateElapsedDays(now, current.lastReviewedAt, previousInterval);
  const isOverdue = elapsedDays > previousInterval;

  let newIntervalDays = 1;
  let newConsecutiveSuccesses = current.consecutiveSuccesses || 0;
  let hypercorrectionBonusApplied = false;
  let misconceptionResolved = false;
  let hypercorrectionPending = !!current.hypercorrectionPending;
  let activeMisconceptions = [...current.activeMisconceptions];

  // 2. Branch strictly on Evaluated Outcome (Objective truth signal)
  switch (input.evaluatedOutcome) {
    case 'correct': {
      // Overdue damping: if delayed beyond scheduled interval, credit square-root of overdue delay
      let effectiveInterval = previousInterval;
      if (isOverdue) {
        const extraDays = elapsedDays - previousInterval;
        effectiveInterval = previousInterval + Math.round(Math.sqrt(Math.max(0, extraDays)));
      }

      // Base progression
      if (effectiveInterval <= 1) {
        newIntervalDays = 3;
      } else {
        newIntervalDays = Math.round(effectiveInterval * easeFactor);
      }

      // Confidence modulation (ONLY applies to correct answers)
      if (input.explicitConfidence === 'low') {
        // Effortful retrieval: interval grows modestly
        newIntervalDays = Math.max(previousInterval + 1, Math.round(newIntervalDays * 0.9));
      } else if (input.explicitConfidence === 'high') {
        // Fluent clean retrieval: interval grows slightly more, ease factor recovers
        newIntervalDays = Math.round(newIntervalDays * 1.15);
        easeFactor = Math.min(2.5, easeFactor + 0.1);
      }

      newConsecutiveSuccesses += 1;

      // Misconception resolution: requires 2 consecutive correct retrievals
      if (newConsecutiveSuccesses >= 2 && activeMisconceptions.length > 0) {
        if (input.identifiedMisconception) {
          activeMisconceptions = activeMisconceptions.filter(m => m !== input.identifiedMisconception);
        } else {
          // Resolve most recent active misconception
          activeMisconceptions.shift();
        }
        misconceptionResolved = true;
      }

      // Hypercorrection Recovery Bonus:
      // Applied ONLY after successful retrieval AND explicit acknowledgement of the discrepancy
      if (hypercorrectionPending) {
        if (input.discrepancyAcknowledged === true) {
          easeFactor = Math.min(2.5, easeFactor + 0.15);
          hypercorrectionPending = false;
          hypercorrectionBonusApplied = true;
        }
        // If discrepancy was not acknowledged, bonus is withheld and flag remains
      }
      break;
    }

    case 'partially_correct': {
      // Modest progression: scale by 1.2
      let effectiveInterval = previousInterval;
      if (isOverdue) {
        const extraDays = elapsedDays - previousInterval;
        effectiveInterval = previousInterval + Math.round(Math.sqrt(Math.max(0, extraDays)));
      }

      newIntervalDays = Math.max(1, Math.round(effectiveInterval * 1.2));
      easeFactor = Math.max(1.3, easeFactor - 0.05);

      // Consecutive successes hold steady (not incremented, not reset to 0)
      // Misconceptions are RETAINED on partial answers
      if (input.identifiedMisconception && !activeMisconceptions.includes(input.identifiedMisconception)) {
        activeMisconceptions.push(input.identifiedMisconception);
      }
      break;
    }

    case 'incorrect': {
      // Strict reset to 1 day
      newIntervalDays = 1;
      newConsecutiveSuccesses = 0;
      easeFactor = Math.max(1.3, easeFactor - 0.2);

      // Confidence does NOT extend interval after an incorrect answer!
      if (input.explicitConfidence === 'high') {
        // High-confidence error triggers Hypercorrection Protocol
        hypercorrectionPending = true;
      }

      // Record identified misconception
      if (input.identifiedMisconception && !activeMisconceptions.includes(input.identifiedMisconception)) {
        activeMisconceptions.push(input.identifiedMisconception);
      }
      break;
    }
  }

  // Ensure minimum interval is at least 1 day
  newIntervalDays = Math.max(1, Math.round(newIntervalDays));

  const totalAttempts = (current.totalAttempts || 0) + 1;
  const stage = determineMemoryStage(
    totalAttempts,
    newConsecutiveSuccesses,
    newIntervalDays,
    input.evaluatedOutcome,
    hypercorrectionPending
  );

  const nextReviewDueAt = calculateNextDueTimestamp(now, newIntervalDays);

  const updatedState: ConceptReviewState = {
    ...current,
    stage,
    reviewIntervalDays: newIntervalDays,
    easeFactor,
    totalAttempts,
    consecutiveSuccesses: newConsecutiveSuccesses,
    lastReviewedAt: now,
    nextReviewDueAt,
    activeMisconceptions,
    hypercorrectionPending,
    discrepancyNote: input.identifiedMisconception || current.discrepancyNote,
  };

  return {
    updatedState,
    elapsedDays,
    isOverdue,
    hypercorrectionBonusApplied,
    misconceptionResolved,
  };
}
