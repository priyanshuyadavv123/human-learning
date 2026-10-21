import { 
  type LearnerMemoryStoreV2, 
  type ConceptReviewState, 
  type BaselineLessonEvidence,
  type DelayedReviewEvent,
  KNOWN_CONCEPTS,
  type ConceptId,
} from '../types/memory.ts';
import type { UserProgress } from '../types/learning.ts';
import { calculateNextDueTimestamp } from './spacedRetrieval.ts';

export const MEMORY_STORAGE_KEY_V2 = 'human_learning_memory_v2';
export const LEGACY_STORAGE_KEY_V1 = 'human_learning_platform_progress_v1';
export const BACKUP_STORAGE_KEY_V1 = 'human_learning_progress_v1_backup';

export function createDefaultConceptState(conceptId: ConceptId, nowIso: string): ConceptReviewState {
  let lessonId = 'how-learning-actually-works';
  let chapterId = 'ch-1-architecture';

  if (
    conceptId.startsWith('concept:fluency_') || 
    conceptId.startsWith('concept:generation_') || 
    conceptId.startsWith('concept:delayed_judgment')
  ) {
    lessonId = 'illusion-of-competence';
    chapterId = 'ch-1-architecture';
  } else if (
    conceptId.startsWith('concept:cognitive_load_') || 
    conceptId.startsWith('concept:worked_example_') || 
    conceptId.startsWith('concept:expertise_reversal_')
  ) {
    lessonId = 'cognitive-load-schema';
    chapterId = 'ch-1-architecture';
  } else if (
    conceptId.startsWith('concept:storage_vs_retrieval_') ||
    conceptId.startsWith('concept:desirable_difficulty_') ||
    conceptId.startsWith('concept:reconsolidation_') ||
    conceptId === 'concept:testing_effect_retrieval_strength'
  ) {
    lessonId = 'testing-effect-mechanics';
    chapterId = 'ch-2-retrieval-spacing';
  } else if (
    conceptId.startsWith('concept:ebbinghaus_') ||
    conceptId.startsWith('concept:spaced_scheduling_') ||
    conceptId.startsWith('concept:optimal_retention_')
  ) {
    lessonId = 'spaced-repetition-scheduling';
    chapterId = 'ch-2-retrieval-spacing';
  } else if (
    conceptId.startsWith('concept:reward_prediction_') ||
    conceptId.startsWith('concept:hypercorrection_') ||
    conceptId.startsWith('concept:calibrated_feedback_triad') ||
    conceptId === 'concept:calibrated_feedback_prediction_error'
  ) {
    lessonId = 'calibrated-error-signals';
    chapterId = 'ch-3-deliberate-practice';
  } else if (
    conceptId.startsWith('concept:deliberate_practice_') ||
    conceptId.startsWith('concept:metacognitive_monitoring_') ||
    conceptId.startsWith('concept:autonomous_learning_')
  ) {
    lessonId = 'personal-learning-operating-system';
    chapterId = 'ch-3-deliberate-practice';
  } else if (
    conceptId.startsWith('concept:attentional_serial_') ||
    conceptId.startsWith('concept:task_switching_') ||
    conceptId.startsWith('concept:executive_control_') ||
    conceptId === 'concept:attention_serial_bottleneck'
  ) {
    lessonId = 'attention-serial-control';
    chapterId = 'ch-4-attention-executive';
  } else if (
    conceptId.startsWith('concept:distraction_recovery_') ||
    conceptId.startsWith('concept:deep_work_chamber_') ||
    conceptId.startsWith('concept:attentional_commons_')
  ) {
    lessonId = 'distraction-economics';
    chapterId = 'ch-4-attention-executive';
  } else if (
    conceptId.startsWith('concept:hebbian_') ||
    conceptId.startsWith('concept:nmda_receptor_') ||
    conceptId.startsWith('concept:early_vs_late_ltp_')
  ) {
    lessonId = 'ltp-synaptic-plasticity';
    chapterId = 'ch-5-consolidation';
  } else if (
    conceptId.startsWith('concept:hippocampal_index_') ||
    conceptId.startsWith('concept:standard_consolidation_') ||
    conceptId.startsWith('concept:complementary_learning_')
  ) {
    lessonId = 'hippocampal-neocortical-dialogue';
    chapterId = 'ch-5-consolidation';
  } else if (
    conceptId.startsWith('concept:neural_replay_') ||
    conceptId.startsWith('concept:triple_phase_locking_') ||
    conceptId.startsWith('concept:synaptic_homeostasis_')
  ) {
    lessonId = 'slow-wave-sleep-replay';
    chapterId = 'ch-6-sleep-replay';
  } else if (
    conceptId.startsWith('concept:targeted_memory_') ||
    conceptId.startsWith('concept:wakeful_rest_') ||
    conceptId.startsWith('concept:ultradian_')
  ) {
    lessonId = 'targeted-memory-reactivation';
    chapterId = 'ch-6-sleep-replay';
  } else if (
    conceptId.startsWith('concept:proactive_vs_') ||
    conceptId.startsWith('concept:cue_overload_') ||
    conceptId.startsWith('concept:contextual_cue_')
  ) {
    lessonId = 'proactive-retroactive-interference';
    chapterId = 'ch-7-interference-reconsolidation';
  } else if (
    conceptId.startsWith('concept:memory_reconsolidation_') ||
    conceptId.startsWith('concept:boundary_conditions_') ||
    conceptId.startsWith('concept:schema_updating_')
  ) {
    lessonId = 'reconsolidation-updating';
    chapterId = 'ch-7-interference-reconsolidation';
  } else if (
    conceptId.startsWith('concept:chunking_mechanics_') ||
    conceptId.startsWith('concept:template_theory_') ||
    conceptId.startsWith('concept:long_term_working_memory_')
  ) {
    lessonId = 'chunking-mechanics';
    chapterId = 'ch-8-chunking-schemas';
  } else if (
    conceptId.startsWith('concept:collins_quillian_') ||
    conceptId.startsWith('concept:rosch_basic_') ||
    conceptId.startsWith('concept:chi_expert_')
  ) {
    lessonId = 'hierarchical-knowledge-representation';
    chapterId = 'ch-8-chunking-schemas';
  } else if (
    conceptId.startsWith('concept:gentner_structure_') ||
    conceptId.startsWith('concept:gick_holyoak_') ||
    conceptId.startsWith('concept:analogical_encoding_')
  ) {
    lessonId = 'structure-mapping-analogy';
    chapterId = 'ch-9-analogy-bridging';
  } else if (
    conceptId.startsWith('concept:hayakawa_abstraction_') ||
    conceptId.startsWith('concept:craik_johnson_') ||
    conceptId.startsWith('concept:bret_victor_')
  ) {
    lessonId = 'abstraction-ladders';
    chapterId = 'ch-9-analogy-bridging';
  } else if (
    conceptId.startsWith('concept:paivio_dual_') ||
    conceptId.startsWith('concept:mayer_multimedia_') ||
    conceptId.startsWith('concept:concreteness_fading_')
  ) {
    lessonId = 'paivio-dual-coding';
    chapterId = 'ch-10-dual-coding';
  } else if (
    conceptId.startsWith('concept:larkin_simon_') ||
    conceptId.startsWith('concept:kirsh_maglio_') ||
    conceptId.startsWith('concept:tversky_spatial_')
  ) {
    lessonId = 'diagrammatic-reasoning';
    chapterId = 'ch-10-dual-coding';
  } else if (
    conceptId.startsWith('concept:rosch_prototype_theory_') ||
    conceptId.startsWith('concept:medin_schaffer_') ||
    conceptId.startsWith('concept:ashby_covis_')
  ) {
    lessonId = 'prototypes-vs-exemplars';
    chapterId = 'ch-11-categorization';
  } else if (
    conceptId.startsWith('concept:wason_246_') ||
    conceptId.startsWith('concept:winston_near_') ||
    conceptId.startsWith('concept:vapnik_support_')
  ) {
    lessonId = 'boundary-cases-isolation';
    chapterId = 'ch-11-categorization';
  } else if (
    conceptId.startsWith('concept:ericsson_deliberate_') ||
    conceptId.startsWith('concept:fitts_posner_') ||
    conceptId.startsWith('concept:wilson_85_')
  ) {
    lessonId = 'edge-of-ability-feedback';
    chapterId = 'ch-12-deliberate-practice';
  } else if (
    conceptId.startsWith('concept:chase_simon_') ||
    conceptId.startsWith('concept:klein_recognition_') ||
    conceptId.startsWith('concept:ericsson_internal_')
  ) {
    lessonId = 'expert-mental-representations';
    chapterId = 'ch-12-deliberate-practice';
  } else if (
    conceptId.startsWith('concept:fitts_posner_tripartite_') ||
    conceptId.startsWith('concept:anderson_actr_') ||
    conceptId.startsWith('concept:prefrontal_to_striatal_')
  ) {
    lessonId = 'fitts-posner-stages';
    chapterId = 'ch-13-automaticity';
  } else if (
    conceptId.startsWith('concept:bainbridge_ironies_') ||
    conceptId.startsWith('concept:luchins_einstellung_') ||
    conceptId.startsWith('concept:endsley_situational_')
  ) {
    lessonId = 'paradox-of-automation';
    chapterId = 'ch-13-automaticity';
  } else if (
    conceptId.startsWith('concept:shea_morgan_') ||
    conceptId.startsWith('concept:bjork_discriminative_') ||
    conceptId.startsWith('concept:rohrer_category_')
  ) {
    lessonId = 'blocked-vs-interleaved-practice';
    chapterId = 'ch-14-interleaving';
  } else if (
    conceptId.startsWith('concept:schmidt_schema_') ||
    conceptId.startsWith('concept:kerr_booth_') ||
    conceptId.startsWith('concept:encoding_variability_')
  ) {
    lessonId = 'varied-practice-transfer';
    chapterId = 'ch-14-interleaving';
  } else if (
    conceptId.startsWith('concept:kapur_productive_') ||
    conceptId.startsWith('concept:bjork_pretesting_') ||
    conceptId.startsWith('concept:metcalfe_hypercorrection_')
  ) {
    lessonId = 'productive-failure-generation';
    chapterId = 'ch-15-error-driven';
  } else if (
    conceptId.startsWith('concept:klein_premortem_') ||
    conceptId.startsWith('concept:syed_black_box_') ||
    conceptId.startsWith('concept:edmondson_failure_')
  ) {
    lessonId = 'error-journaling-protocols';
    chapterId = 'ch-15-error-driven';
  } else if (
    conceptId.startsWith('concept:thorndike_identical_') ||
    conceptId.startsWith('concept:barnett_ceci_') ||
    conceptId.startsWith('concept:brain_training_myth_')
  ) {
    lessonId = 'specificity-of-transfer';
    chapterId = 'ch-16-transfer';
  } else if (
    conceptId.startsWith('concept:gick_holyoak_schema_') ||
    conceptId.startsWith('concept:gentner_analogical_') ||
    conceptId.startsWith('concept:bransford_schwartz_')
  ) {
    lessonId = 'conditions-for-far-transfer';
    chapterId = 'ch-16-transfer';
  } else if (
    conceptId.startsWith('concept:newell_simon_means_') ||
    conceptId.startsWith('concept:polya_working_') ||
    conceptId.startsWith('concept:frontopolar_cortex_')
  ) {
    lessonId = 'means-end-working-backward';
    chapterId = 'ch-17-heuristics';
  } else if (
    conceptId.startsWith('concept:catrambone_subgoal_') ||
    conceptId.startsWith('concept:margulieux_faded_') ||
    conceptId.startsWith('concept:sweller_renkl_')
  ) {
    lessonId = 'subgoal-labeling-scaffolding';
    chapterId = 'ch-17-heuristics';
  } else if (
    conceptId.startsWith('concept:dunning_kruger_') ||
    conceptId.startsWith('concept:brier_score_') ||
    conceptId.startsWith('concept:objective_calibration_')
  ) {
    lessonId = 'dunning-kruger-calibration';
    chapterId = 'ch-18-biases-epistemic';
  } else if (
    conceptId.startsWith('concept:wason_nickerson_') ||
    conceptId.startsWith('concept:arkes_blumer_') ||
    conceptId.startsWith('concept:cognitive_dissonance_')
  ) {
    lessonId = 'sunk-cost-study-biases';
    chapterId = 'ch-18-biases-epistemic';
  } else if (
    conceptId.startsWith('concept:default_mode_network_') ||
    conceptId.startsWith('concept:unconscious_associative_') ||
    conceptId.startsWith('concept:cognitive_fixation_')
  ) {
    lessonId = 'incubation-default-mode';
    chapterId = 'ch-19-creative-insight';
  } else if (
    conceptId.startsWith('concept:koestler_bisociation_') ||
    conceptId.startsWith('concept:mednick_flat_') ||
    conceptId.startsWith('concept:jacob_evolutionary_')
  ) {
    lessonId = 'combinatorial-play-synthesis';
    chapterId = 'ch-19-creative-insight';
  } else if (
    conceptId.startsWith('concept:schultz_reward_prediction_') ||
    conceptId.startsWith('concept:temporal_difference_') ||
    conceptId.startsWith('concept:tonic_vs_phasic_dopamine_')
  ) {
    lessonId = 'dopamine-reward-prediction';
    chapterId = 'ch-20-motivation-drive';
  } else if (
    conceptId.startsWith('concept:deci_ryan_') ||
    conceptId.startsWith('concept:organismic_integration_') ||
    conceptId.startsWith('concept:lepper_overjustification_')
  ) {
    lessonId = 'self-determination-theory';
    chapterId = 'ch-20-motivation-drive';
  } else if (
    conceptId.startsWith('concept:yerkes_dodson_') ||
    conceptId.startsWith('concept:arnsten_pfc_') ||
    conceptId.startsWith('concept:glucocorticoid_hippocampal_')
  ) {
    lessonId = 'yerkes-dodson-cortisol';
    chapterId = 'ch-21-stress-performance';
  } else if (
    conceptId.startsWith('concept:jamieson_biopsychosocial_') ||
    conceptId.startsWith('concept:brooks_anxiety_') ||
    conceptId.startsWith('concept:gross_reappraisal_')
  ) {
    lessonId = 'emotion-appraisal-regulation';
    chapterId = 'ch-21-stress-performance';
  } else if (
    conceptId.startsWith('concept:bandura_self_efficacy_') ||
    conceptId.startsWith('concept:schunk_proximal_goal_') ||
    conceptId.startsWith('concept:dweck_implicit_theories_')
  ) {
    lessonId = 'bandura-self-efficacy';
    chapterId = 'ch-22-identity-mindset';
  } else if (
    conceptId.startsWith('concept:weiner_attribution_') ||
    conceptId.startsWith('concept:perry_attribution_') ||
    conceptId.startsWith('concept:mueller_dweck_')
  ) {
    lessonId = 'attribution-retraining-mindset';
    chapterId = 'ch-22-identity-mindset';
  } else if (
    conceptId.startsWith('concept:chi_expert_') ||
    conceptId.startsWith('concept:ausubel_progressive_') ||
    conceptId.startsWith('concept:simon_chase_')
  ) {
    lessonId = 'first-principles-domain-mapping';
    chapterId = 'ch-23-syllabus-engineering';
  } else if (
    conceptId.startsWith('concept:gagne_learning_') ||
    conceptId.startsWith('concept:falmagne_doignon_') ||
    conceptId.startsWith('concept:dag_topological_')
  ) {
    lessonId = 'dependency-graph-sequencing';
    chapterId = 'ch-23-syllabus-engineering';
  } else if (
    conceptId.startsWith('concept:clark_chalmers_') ||
    conceptId.startsWith('concept:luhmann_zettelkasten_') ||
    conceptId.startsWith('concept:collectors_fallacy_')
  ) {
    lessonId = 'extended-mind-zettelkasten';
    chapterId = 'ch-24-external-scaffolding';
  } else if (
    conceptId.startsWith('concept:risko_gilbert_') ||
    conceptId.startsWith('concept:engelbart_bush_') ||
    conceptId.startsWith('concept:synthesis_over_storage_')
  ) {
    lessonId = 'digital-tooling-without-hoarding';
    chapterId = 'ch-24-external-scaffolding';
  } else if (
    conceptId.startsWith('concept:protege_effect_') ||
    conceptId.startsWith('concept:feynman_technique_') ||
    conceptId.startsWith('concept:expecting_to_teach_')
  ) {
    lessonId = 'protege-effect-teaching';
    chapterId = 'ch-25-social-protege';
  } else if (
    conceptId.startsWith('concept:adversarial_collaboration_') ||
    conceptId.startsWith('concept:argumentative_theory_') ||
    conceptId.startsWith('concept:peer_calibration_')
  ) {
    lessonId = 'adversarial-peer-review';
    chapterId = 'ch-25-social-protege';
  } else if (
    conceptId.startsWith('concept:bahrick_permastore_') ||
    conceptId.startsWith('concept:cepeda_pashler_') ||
    conceptId.startsWith('concept:wozniak_two_component_')
  ) {
    lessonId = 'longitudinal-spaced-scheduling';
    chapterId = 'ch-26-lifetime-architecture';
  } else if (
    conceptId.startsWith('concept:zimmerman_cyclical_') ||
    conceptId.startsWith('concept:ericsson_engelbart_') ||
    conceptId.startsWith('concept:unified_cognitive_architecture_')
  ) {
    lessonId = 'personal-mastery-synthesis';
    chapterId = 'ch-26-lifetime-architecture';
  }

  return {
    conceptId,
    lessonId,
    chapterId,
    stage: 'untested',
    reviewIntervalDays: 1,
    easeFactor: 2.0,
    totalAttempts: 0,
    consecutiveSuccesses: 0,
    nextReviewDueAt: calculateNextDueTimestamp(nowIso, 1),
    activeMisconceptions: [],
    hypercorrectionPending: false,
  };
}

export function createInitialMemoryStore(nowIso = new Date().toISOString()): LearnerMemoryStoreV2 {
  const conceptStates: Record<ConceptId, ConceptReviewState> = {} as Record<ConceptId, ConceptReviewState>;
  for (const c of KNOWN_CONCEPTS) {
    conceptStates[c] = createDefaultConceptState(c, nowIso);
  }

  return {
    schemaVersion: 2,
    lastActiveAt: nowIso,
    baselineEvidence: [],
    delayedReviews: [],
    conceptStates,
  };
}

/**
 * Maps legacy lesson progress into baseline evidence without claiming delayed review.
 */
export function migrateV1ToV2(v1Data: UserProgress, nowIso = new Date().toISOString()): LearnerMemoryStoreV2 {
  const store = createInitialMemoryStore(nowIso);
  const lesson1 = v1Data.lessonStates?.['how-learning-actually-works'];
  if (!lesson1) {
    return store;
  }

  const baselineEvidence: BaselineLessonEvidence[] = [];

  // 1. Initial prediction
  if (lesson1.predictionSubmitted && lesson1.predictionAnswer) {
    const isEmpiricalWinner = lesson1.predictionAnswer === 'opt-retrieval';
    baselineEvidence.push({
      id: `baseline-pred-${lesson1.predictionAnswer}`,
      conceptId: 'concept:testing_effect_retrieval_strength',
      recordedAt: nowIso,
      sourceType: 'prediction',
      sourceItemId: lesson1.predictionAnswer,
      outcome: isEmpiricalWinner ? 'correct' : 'incorrect',
      explicitConfidence: isEmpiricalWinner ? 'medium' : 'high',
      identifiedMisconception: isEmpiricalWinner ? undefined : 'misconception:rereading_fluency_illusion',
      isDelayedRetrieval: false, // STRICT: baseline evidence only
    });

    if (!isEmpiricalWinner) {
      store.conceptStates['concept:testing_effect_retrieval_strength'].activeMisconceptions.push('misconception:rereading_fluency_illusion');
      store.conceptStates['concept:testing_effect_retrieval_strength'].hypercorrectionPending = true;
      store.conceptStates['concept:testing_effect_retrieval_strength'].stage = 'reinforcing';
    }
  }

  // 2. Exercise scenarios
  if (lesson1.exerciseSubmitted && lesson1.exerciseAnswers) {
    for (const [scenarioId, cat] of Object.entries(lesson1.exerciseAnswers)) {
      let targetConcept: ConceptId = 'concept:attention_serial_bottleneck';
      if (cat === 'working-memory-overload') targetConcept = 'concept:working_memory_capacity_limits';
      if (cat === 'schema-consolidation') targetConcept = 'concept:schema_chunking_consolidation';
      if (cat === 'illusion-of-competence') targetConcept = 'concept:testing_effect_retrieval_strength';

      baselineEvidence.push({
        id: `baseline-exercise-${scenarioId}`,
        conceptId: targetConcept,
        recordedAt: nowIso,
        sourceType: 'exercise_scenario',
        sourceItemId: scenarioId,
        outcome: 'correct',
        isDelayedRetrieval: false,
      });
    }
  }

  // 3. Quiz answers
  if (lesson1.quizSubmitted && lesson1.quizAnswers) {
    for (const [qId, optId] of Object.entries(lesson1.quizAnswers)) {
      baselineEvidence.push({
        id: `baseline-quiz-${qId}`,
        conceptId: 'concept:working_memory_capacity_limits',
        recordedAt: nowIso,
        sourceType: 'quiz_question',
        sourceItemId: `${qId}:${optId}`,
        outcome: 'correct',
        isDelayedRetrieval: false,
      });
    }
  }

  store.baselineEvidence = baselineEvidence;
  return store;
}

/**
 * Loads learner memory store from localStorage with automatic migration and backup.
 */
export function loadLearnerMemory(nowIso = new Date().toISOString()): LearnerMemoryStoreV2 {
  try {
    const rawV2 = localStorage.getItem(MEMORY_STORAGE_KEY_V2);
    if (rawV2) {
      const parsed = JSON.parse(rawV2);
      // Auto-backfill any newly introduced curriculum concepts into existing V2 stores
      if (parsed && parsed.schemaVersion === 2 && parsed.conceptStates && typeof parsed.conceptStates === 'object') {
        let missingFound = false;
        for (const cKey of KNOWN_CONCEPTS) {
          if (!parsed.conceptStates[cKey]) {
            parsed.conceptStates[cKey] = createDefaultConceptState(cKey, parsed.lastActiveAt || nowIso);
            missingFound = true;
          }
        }
        if (missingFound) {
          saveLearnerMemory(parsed);
        }
      }

      const validation = validateMemoryStoreSchema(parsed);
      if (validation.valid && validation.store) {
        return validation.store;
      }
      console.warn('[Memory Storage] Corrupted or invalid V2 store found, attempting backup and recovery.');
    }

    // Attempt migration from V1 if present
    const rawV1 = localStorage.getItem(LEGACY_STORAGE_KEY_V1);
    if (rawV1) {
      // Save safety backup of original V1 before doing anything
      try {
        localStorage.setItem(BACKUP_STORAGE_KEY_V1, rawV1);
      } catch {}

      const parsedV1 = JSON.parse(rawV1) as UserProgress;
      const migrated = migrateV1ToV2(parsedV1, nowIso);
      saveLearnerMemory(migrated);
      return migrated;
    }
  } catch (err) {
    console.warn('[Memory Storage] Error during storage load, returning safe initial store:', err);
  }

  const initial = createInitialMemoryStore(nowIso);
  saveLearnerMemory(initial);
  return initial;
}

/**
 * Saves learner memory store to localStorage.
 */
export function saveLearnerMemory(store: LearnerMemoryStoreV2): boolean {
  try {
    localStorage.setItem(MEMORY_STORAGE_KEY_V2, JSON.stringify(store));
    return true;
  } catch (err) {
    console.warn('[Memory Storage] Failed to save memory store to localStorage:', err);
    return false;
  }
}

/**
 * Resets memory store while preserving legacy progress and theme.
 */
export function resetLearnerMemory(nowIso = new Date().toISOString()): LearnerMemoryStoreV2 {
  const fresh = createInitialMemoryStore(nowIso);
  try {
    localStorage.removeItem(MEMORY_STORAGE_KEY_V2);
    saveLearnerMemory(fresh);
  } catch {}
  return fresh;
}

/**
 * Exports memory store to a formatted JSON string for learner download.
 */
export function exportLearnerMemoryJson(store: LearnerMemoryStoreV2): string {
  return JSON.stringify(store, null, 2);
}

/**
 * Strictly validates an imported memory store JSON structure before applying it.
 */
export function validateMemoryStoreSchema(data: unknown): {
  valid: boolean;
  error?: string;
  store?: LearnerMemoryStoreV2;
} {
  if (!data || typeof data !== 'object') {
    return { valid: false, error: 'Backup data must be a JSON object.' };
  }

  const s = data as Record<string, unknown>;

  if (s.schemaVersion !== 2) {
    return { valid: false, error: `Unsupported schema version: ${s.schemaVersion}. Expected 2.` };
  }

  if (!Array.isArray(s.baselineEvidence)) {
    return { valid: false, error: 'Field "baselineEvidence" must be an array.' };
  }

  for (const b of s.baselineEvidence) {
    if (!b || typeof b !== 'object' || (b as BaselineLessonEvidence).isDelayedRetrieval !== false) {
      return { valid: false, error: 'Baseline evidence must have isDelayedRetrieval set to false.' };
    }
  }

  if (!Array.isArray(s.delayedReviews)) {
    return { valid: false, error: 'Field "delayedReviews" must be an array.' };
  }

  for (const r of s.delayedReviews) {
    if (!r || typeof r !== 'object' || (r as DelayedReviewEvent).isDelayedRetrieval !== true) {
      return { valid: false, error: 'Delayed reviews must have isDelayedRetrieval set to true.' };
    }
  }

  if (!s.conceptStates || typeof s.conceptStates !== 'object') {
    return { valid: false, error: 'Field "conceptStates" must be an object.' };
  }

  const concepts = s.conceptStates as Record<string, unknown>;
  for (const key of KNOWN_CONCEPTS) {
    const c = concepts[key] as Record<string, unknown> | undefined;
    if (!c) {
      return { valid: false, error: `Missing required concept state for ${key}.` };
    }
    if (typeof c.reviewIntervalDays !== 'number' || c.reviewIntervalDays < 1) {
      return { valid: false, error: `Invalid reviewIntervalDays for concept ${key}. Must be >= 1.` };
    }
    if (typeof c.easeFactor !== 'number' || c.easeFactor < 1.3 || c.easeFactor > 2.5) {
      return { valid: false, error: `Invalid easeFactor for concept ${key}. Must be in [1.3, 2.5].` };
    }
    if (typeof c.nextReviewDueAt !== 'string') {
      return { valid: false, error: `Missing nextReviewDueAt for concept ${key}.` };
    }
  }

  return {
    valid: true,
    store: data as LearnerMemoryStoreV2,
  };
}
