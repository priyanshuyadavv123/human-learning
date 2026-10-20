/**
 * Evidence-Based Learner Memory & Spaced Retrieval Types
 * Grounded in empirical cognitive science (Bjork, Roediger & Karpicke, Butterfield & Metcalfe)
 */

export const KNOWN_CONCEPTS = [
  'concept:attention_serial_bottleneck',
  'concept:working_memory_capacity_limits',
  'concept:schema_chunking_consolidation',
  'concept:testing_effect_retrieval_strength',
  'concept:calibrated_feedback_prediction_error',
  'concept:fluency_illusion_recognition',
  'concept:generation_effect_reconstruction',
  'concept:delayed_judgment_of_learning',
  // Lesson 1.3 Concepts
  'concept:cognitive_load_tripartite',
  'concept:worked_example_faded_scaffolding',
  'concept:expertise_reversal_schema_automation',
  // Lesson 2.1 Concepts
  'concept:storage_vs_retrieval_strength',
  'concept:desirable_difficulty_framework',
  'concept:reconsolidation_trace_updating',
  // Lesson 2.2 Concepts
  'concept:ebbinghaus_forgetting_curve',
  'concept:spaced_scheduling_stability_expansion',
  'concept:optimal_retention_lag_ratio',
  // Lesson 3.1 Concepts
  'concept:reward_prediction_error_signaling',
  'concept:hypercorrection_effect_high_confidence',
  'concept:calibrated_feedback_triad',
  // Lesson 3.2 Concepts
  'concept:deliberate_practice_reps',
  'concept:metacognitive_monitoring_calibration',
  'concept:autonomous_learning_operating_system',
] as const;

export type ConceptId = typeof KNOWN_CONCEPTS[number];

export const KNOWN_MISCONCEPTIONS = [
  'misconception:multitasking_parallel_myth',
  'misconception:working_memory_unlimited_illusion',
  'misconception:video_recorder_memory_myth',
  'misconception:rereading_fluency_illusion',
  'misconception:feedback_avoidance_confirmation_bias',
  'misconception:recognition_equals_mastery',
  'misconception:ease_of_processing_heuristic',
  // Lesson 1.3 Misconceptions
  'misconception:unguided_struggle_always_superior',
  'misconception:more_information_always_helps',
  // Lesson 2.1 Misconceptions
  'misconception:testing_is_only_for_grading',
  'misconception:current_performance_equals_learning',
  'misconception:struggle_means_poor_learning',
  // Lesson 2.2 Misconceptions
  'misconception:cramming_is_efficient_for_long_term',
  'misconception:linear_review_intervals',
  // Lesson 3.1 Misconceptions
  'misconception:errors_should_be_avoided_at_all_costs',
  'misconception:immediate_praise_enhances_learning',
  // Lesson 3.2 Misconceptions
  'misconception:experience_equals_expertise',
  'misconception:talent_is_fixed_innate',
] as const;

export type CognitiveMisconceptionId = typeof KNOWN_MISCONCEPTIONS[number];

export type MemoryStage = 'untested' | 'reinforcing' | 'consolidating' | 'stabilized';

export type LearnerSelfRating = 'effortful' | 'fluent' | 'forgot_or_hint';

export type EvaluatedOutcome = 'correct' | 'partially_correct' | 'incorrect';

export type ExplicitConfidence = 'low' | 'medium' | 'high';

/**
 * Baseline evidence recorded during initial lesson completion.
 * Explicitly marked as NOT a delayed retrieval event.
 */
export interface BaselineLessonEvidence {
  id: string;
  conceptId: ConceptId;
  recordedAt: string;             // ISO 8601
  sourceType: 'prediction' | 'exercise_scenario' | 'quiz_question' | 'practical_step';
  sourceItemId: string;          // e.g. 'q1', 'scenario-2'
  outcome: EvaluatedOutcome;
  explicitConfidence?: ExplicitConfidence;
  identifiedMisconception?: CognitiveMisconceptionId;
  isDelayedRetrieval: false;     // STRICT: Never fabricated as delayed recall
}

/**
 * Spaced retrieval review event conducted after initial study.
 */
export interface DelayedReviewEvent {
  id: string;
  conceptId: ConceptId;
  reviewedAt: string;             // ISO 8601
  elapsedDaysSinceLastReview: number;
  evaluatedOutcome: EvaluatedOutcome;
  learnerSelfRating?: LearnerSelfRating;
  explicitConfidence?: ExplicitConfidence;
  identifiedMisconception?: CognitiveMisconceptionId;
  discrepancyAcknowledged?: boolean;
  previousIntervalDays: number;
  newIntervalDays: number;
  isDelayedRetrieval: true;      // STRICT: True delayed retrieval
}

export interface ConceptReviewState {
  conceptId: ConceptId;
  lessonId: string;
  chapterId: string;
  stage: MemoryStage;
  reviewIntervalDays: number;     // Scheduled interval in days
  easeFactor: number;             // Multiplier in [1.3, 2.5], default 2.0
  totalAttempts: number;          // Total delayed review attempts
  consecutiveSuccesses: number;
  lastReviewedAt?: string;        // ISO 8601
  nextReviewDueAt: string;        // ISO 8601
  activeMisconceptions: CognitiveMisconceptionId[];
  hypercorrectionPending?: boolean;
  discrepancyNote?: string;
}

export interface LearnerMemoryStoreV2 {
  schemaVersion: 2;
  lastActiveAt: string;
  baselineEvidence: BaselineLessonEvidence[];
  delayedReviews: DelayedReviewEvent[];
  conceptStates: Record<ConceptId, ConceptReviewState>;
}

export interface ReviewPromptData {
  conceptId: ConceptId;
  title: string;
  prompt: string;
  keyCriteria: string[];
  canonicalAnswer: string;
  lessonSectionAnchor: string;
  relatedMisconception?: CognitiveMisconceptionId;
  discrepancyPrompt?: string;
}
