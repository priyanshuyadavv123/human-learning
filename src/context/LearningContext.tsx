/* oxlint-disable react/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';
import type { 
  UserProgress, 
  LessonProgressState, 
  ExerciseCategory,
  Lesson 
} from '../types/learning.ts';
import type { 
  LearnerMemoryStoreV2, 
  ConceptId, 
  EvaluatedOutcome, 
  LearnerSelfRating, 
  ExplicitConfidence, 
  DelayedReviewEvent, 
  BaselineLessonEvidence,
  CognitiveMisconceptionId 
} from '../types/memory.ts';
import { 
  loadLearnerMemory, 
  saveLearnerMemory, 
  resetLearnerMemory, 
  exportLearnerMemoryJson, 
  validateMemoryStoreSchema 
} from '../services/memoryStorage.ts';
import { scheduleNextReview } from '../services/spacedRetrieval.ts';
import { getLessonById } from '../data/courseData.ts';

interface LessonConceptMapping {
  predictionConceptId: ConceptId;
  predictionMisconceptionId: CognitiveMisconceptionId;
  quizConceptMapping: Record<string, ConceptId>;
}

export const LESSON_CONCEPT_MAPPINGS: Record<string, LessonConceptMapping> = {
  'how-learning-actually-works': {
    predictionConceptId: 'concept:testing_effect_retrieval_strength',
    predictionMisconceptionId: 'misconception:rereading_fluency_illusion',
    quizConceptMapping: {
      'q1': 'concept:attention_serial_bottleneck',
      'q2': 'concept:working_memory_capacity_limits',
      'q3': 'concept:testing_effect_retrieval_strength',
      'q4': 'concept:calibrated_feedback_prediction_error',
    },
  },
  'illusion-of-competence': {
    predictionConceptId: 'concept:fluency_illusion_recognition',
    predictionMisconceptionId: 'misconception:recognition_equals_mastery',
    quizConceptMapping: {
      'q1-fluency-driver': 'concept:fluency_illusion_recognition',
      'q2-desirable-difficulty': 'concept:generation_effect_reconstruction',
      'q3-delayed-jol': 'concept:delayed_judgment_of_learning',
      'q4-blank-sheet': 'concept:generation_effect_reconstruction',
    },
  },
  'cognitive-load-schema': {
    predictionConceptId: 'concept:worked_example_faded_scaffolding',
    predictionMisconceptionId: 'misconception:unguided_struggle_always_superior',
    quizConceptMapping: {
      'q1-tripartite-balance': 'concept:cognitive_load_tripartite',
      'q2-worked-example-mechanism': 'concept:worked_example_faded_scaffolding',
      'q3-expertise-reversal': 'concept:expertise_reversal_schema_automation',
      'q4-chunking-architecture': 'concept:schema_chunking_consolidation',
    },
  },
  'testing-effect-mechanics': {
    predictionConceptId: 'concept:testing_effect_retrieval_strength',
    predictionMisconceptionId: 'misconception:testing_is_only_for_grading',
    quizConceptMapping: {
      'q1-roediger-karpicke-findings': 'concept:testing_effect_retrieval_strength',
      'q2-bjork-storage-retrieval-strength': 'concept:storage_vs_retrieval_strength',
      'q3-desirable-difficulty-criterion': 'concept:desirable_difficulty_framework',
      'q4-reconsolidation-neurobiology': 'concept:reconsolidation_trace_updating',
    },
  },
  'spaced-repetition-scheduling': {
    predictionConceptId: 'concept:spaced_scheduling_stability_expansion',
    predictionMisconceptionId: 'misconception:cramming_is_efficient_for_long_term',
    quizConceptMapping: {
      'q1-ebbinghaus-kinetics': 'concept:ebbinghaus_forgetting_curve',
      'q2-fsrs-stability-expansion': 'concept:spaced_scheduling_stability_expansion',
      'q3-cepeda-optimal-lag': 'concept:optimal_retention_lag_ratio',
      'q4-lapse-reset-rule': 'concept:spaced_scheduling_stability_expansion',
    },
  },
  'calibrated-error-signals': {
    predictionConceptId: 'concept:reward_prediction_error_signaling',
    predictionMisconceptionId: 'misconception:errors_should_be_avoided_at_all_costs',
    quizConceptMapping: {
      'q1-schultz-dopamine-rpe': 'concept:reward_prediction_error_signaling',
      'q2-butterfield-hypercorrection': 'concept:hypercorrection_effect_high_confidence',
      'q3-hattie-feedback-levels': 'concept:calibrated_feedback_triad',
      'q4-pre-commitment-necessity': 'concept:reward_prediction_error_signaling',
    },
  },
  'personal-learning-operating-system': {
    predictionConceptId: 'concept:deliberate_practice_reps',
    predictionMisconceptionId: 'misconception:experience_equals_expertise',
    quizConceptMapping: {
      'q1-ericsson-deliberate-practice': 'concept:deliberate_practice_reps',
      'q2-zimmerman-phases': 'concept:autonomous_learning_operating_system',
      'q3-metacognitive-calibration': 'concept:metacognitive_monitoring_calibration',
      'q4-process-vs-outcome-goals': 'concept:deliberate_practice_reps',
    },
  },
  'attention-serial-control': {
    predictionConceptId: 'concept:task_switching_attention_residue',
    predictionMisconceptionId: 'misconception:multitasking_is_efficient',
    quizConceptMapping: {
      'q1-broadbent-filter-bottleneck': 'concept:attentional_serial_filter_gating',
      'q2-leroy-attention-residue': 'concept:task_switching_attention_residue',
      'q3-posner-acc-executive': 'concept:attentional_serial_filter_gating',
      'q4-miller-cohen-biased-competition': 'concept:executive_control_depletion_restoration',
    },
  },
  'distraction-economics': {
    predictionConceptId: 'concept:deep_work_chamber_architecture',
    predictionMisconceptionId: 'misconception:instant_availability_equals_high_performance',
    quizConceptMapping: {
      'q1-gloria-mark-recovery-latency': 'concept:distraction_recovery_latency',
      'q2-newport-rhythmic-deep-work': 'concept:deep_work_chamber_architecture',
      'q3-crawford-attentional-commons': 'concept:attentional_commons_environmental_design',
      'q4-shutdown-ritual-psychology': 'concept:deep_work_chamber_architecture',
    },
  },
  'ltp-synaptic-plasticity': {
    predictionConceptId: 'concept:early_vs_late_ltp_consolidation',
    predictionMisconceptionId: 'misconception:cramming_creates_permanent_synaptic_change',
    quizConceptMapping: {
      'q1-nmda-coincidence-detection': 'concept:nmda_receptor_coincidence_detection',
      'q2-early-vs-late-ltp-switch': 'concept:early_vs_late_ltp_consolidation',
      'q3-hebbian-bliss-lomo-origins': 'concept:hebbian_synaptic_plasticity',
      'q4-synaptic-tagging-capture': 'concept:early_vs_late_ltp_consolidation',
    },
  },
  'hippocampal-neocortical-dialogue': {
    predictionConceptId: 'concept:complementary_learning_systems_interleaved_integration',
    predictionMisconceptionId: 'misconception:fast_direct_cortical_learning',
    quizConceptMapping: {
      'q1-patient-hm-temporal-gradient': 'concept:standard_consolidation_vs_multiple_trace',
      'q2-cls-catastrophic-interference': 'concept:complementary_learning_systems_interleaved_integration',
      'q3-hippocampal-indexing-theory': 'concept:hippocampal_index_model',
      'q4-transformation-theory-schemas': 'concept:standard_consolidation_vs_multiple_trace',
    },
  },
  'slow-wave-sleep-replay': {
    predictionConceptId: 'concept:neural_replay_temporal_compression',
    predictionMisconceptionId: 'misconception:sleep_is_passive_quiescence',
    quizConceptMapping: {
      'q1-replay-compression-stdp': 'concept:neural_replay_temporal_compression',
      'q2-triple-phase-coupling-hierarchy': 'concept:triple_phase_locking_consolidation',
      'q3-girardeau-causality-experiment': 'concept:neural_replay_temporal_compression',
      'q4-shy-synaptic-homeostasis': 'concept:synaptic_homeostasis_downscaling',
    },
  },
  'targeted-memory-reactivation': {
    predictionConceptId: 'concept:targeted_memory_reactivation_cueing',
    predictionMisconceptionId: 'misconception:hypnopedia_sleep_learning_works',
    quizConceptMapping: {
      'q1-rasch-tmr-olfactory-finding': 'concept:targeted_memory_reactivation_cueing',
      'q2-dewar-wakeful-rest-mechanism': 'concept:wakeful_rest_awake_replay',
      'q3-tmr-limitation-hypnopedia': 'concept:targeted_memory_reactivation_cueing',
      'q4-brac-ultradian-rhythm': 'concept:ultradian_basic_rest_activity_cycle',
    },
  },
  'proactive-retroactive-interference': {
    predictionConceptId: 'concept:proactive_vs_retroactive_interference',
    predictionMisconceptionId: 'misconception:forgetting_is_passive_trace_decay',
    quizConceptMapping: {
      'q1-mcgeoch-interference-origins': 'concept:proactive_vs_retroactive_interference',
      'q2-cue-overload-fan-effect': 'concept:cue_overload_fan_effect',
      'q3-wickens-release-from-pi': 'concept:contextual_cue_discrimination_wickens',
      'q4-wixted-consolidation-retroactive': 'concept:proactive_vs_retroactive_interference',
    },
  },
  'reconsolidation-updating': {
    predictionConceptId: 'concept:memory_reconsolidation_labilization',
    predictionMisconceptionId: 'misconception:retrieved_memories_are_immutable',
    quizConceptMapping: {
      'q1-nader-reconsolidation-discovery': 'concept:memory_reconsolidation_labilization',
      'q2-pedreira-prediction-error-boundary': 'concept:boundary_conditions_prediction_error_reconsolidation',
      'q3-temporal-window-schiller-monfils': 'concept:schema_updating_updating_window',
      'q4-reconsolidation-vs-extinction-distinction': 'concept:memory_reconsolidation_labilization',
    },
  },
  'chunking-mechanics': {
    predictionConceptId: 'concept:chunking_mechanics_relational_compression',
    predictionMisconceptionId: 'misconception:expertise_enlarges_raw_working_memory_hardware',
    quizConceptMapping: {
      'q1-de-groot-chase-simon-finding': 'concept:chunking_mechanics_relational_compression',
      'q2-simon-chunk-count-estimate': 'concept:chunking_mechanics_relational_compression',
      'q3-gobet-template-theory-structure': 'concept:template_theory_cores_slots_gobet',
      'q4-ericsson-ltwm-interruption-resilience': 'concept:long_term_working_memory_retrieval_structures',
    },
  },
  'hierarchical-knowledge-representation': {
    predictionConceptId: 'concept:collins_quillian_hierarchical_network_model',
    predictionMisconceptionId: 'misconception:flat_facts_equal_deep_expertise',
    quizConceptMapping: {
      'q1-collins-quillian-cognitive-economy': 'concept:collins_quillian_hierarchical_network_model',
      'q2-rosch-basic-level-primacy': 'concept:rosch_basic_level_categories_primacy',
      'q3-chi-expert-categorization': 'concept:chi_expert_deep_structure_categorization',
      'q4-tanaka-taylor-expert-shift': 'concept:rosch_basic_level_categories_primacy',
    },
  },
  'structure-mapping-analogy': {
    predictionConceptId: 'concept:analogical_encoding_mutual_alignment',
    predictionMisconceptionId: 'misconception:single_example_sufficient_for_transfer',
    quizConceptMapping: {
      'q1-gentner-systematicity-principle': 'concept:gentner_structure_mapping_systematicity',
      'q2-gick-holyoak-spontaneous-transfer-findings': 'concept:gick_holyoak_analogical_retrieval_transfer',
      'q3-analogical-encoding-mutual-alignment': 'concept:analogical_encoding_mutual_alignment',
      'q4-analogy-negative-boundary-conditions': 'concept:gentner_structure_mapping_systematicity',
    },
  },
  'abstraction-ladders': {
    predictionConceptId: 'concept:hayakawa_abstraction_ladder_vertical_mobility',
    predictionMisconceptionId: 'misconception:theory_alone_creates_operational_mastery',
    quizConceptMapping: {
      'q1-hayakawa-ladder-pathology': 'concept:hayakawa_abstraction_ladder_vertical_mobility',
      'q2-craik-internal-mental-model-simulation': 'concept:craik_johnson_laird_mental_models_simulation',
      'q3-johnson-laird-principle-of-truth': 'concept:craik_johnson_laird_mental_models_simulation',
      'q4-bret-victor-ladder-coupling': 'concept:bret_victor_dynamic_abstraction_coupling',
    },
  },
  'paivio-dual-coding': {
    predictionConceptId: 'concept:paivio_dual_coding_logogens_imagens',
    predictionMisconceptionId: 'misconception:learning_styles_neuromyth_visual_verbal',
    quizConceptMapping: {
      'q1-paivio-logogens-imagens-distinction': 'concept:paivio_dual_coding_logogens_imagens',
      'q2-mayer-spatial-contiguity-split-attention': 'concept:mayer_multimedia_spatial_contiguity_modality',
      'q3-mayer-modality-principle-mechanism': 'concept:mayer_multimedia_spatial_contiguity_modality',
      'q4-goldstone-concreteness-fading': 'concept:concreteness_fading_grounding_schematics',
    },
  },
  'diagrammatic-reasoning': {
    predictionConceptId: 'concept:larkin_simon_diagrammatic_computational_equivalence',
    predictionMisconceptionId: 'misconception:informational_equivalence_implies_computational_equivalence',
    quizConceptMapping: {
      'q1-larkin-simon-computational-equivalence': 'concept:larkin_simon_diagrammatic_computational_equivalence',
      'q2-kirsh-maglio-epistemic-action-nature': 'concept:kirsh_maglio_epistemic_actions_external_buffers',
      'q3-tversky-spatial-schema-alignment': 'concept:tversky_spatial_schemas_graphic_cartography',
      'q4-external-memory-buffer-mechanism': 'concept:kirsh_maglio_epistemic_actions_external_buffers',
    },
  },
};

interface LearningContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  activeLessonId: string;
  setActiveLessonId: (id: string) => void;
  currentLesson: Lesson;
  isLessonCompleted: (lessonId: string) => boolean;
  lessonState: LessonProgressState;
  isLeftSidebarOpen: boolean;
  toggleLeftSidebar: () => void;
  setLeftSidebarOpen: (open: boolean) => void;
  isTutorOpen: boolean;
  toggleTutor: () => void;
  setTutorOpen: (open: boolean) => void;
  
  // Lesson Actions
  submitPrediction: (optionId: string) => void;
  setExplanationTab: (tabId: string) => void;
  inspectDiagramStage: (stageId: string) => void;
  setExerciseAnswer: (scenarioId: string, category: ExerciseCategory) => void;
  submitExercise: () => void;
  resetExercise: () => void;
  setQuizAnswer: (questionId: string, optionId: string) => void;
  submitQuiz: () => { score: number; passed: boolean };
  retakeQuiz: () => void;
  setPracticalAnswer: (stepId: string, text: string) => void;
  completePracticalTask: () => void;
  completeLesson: () => void;
  // Metrics
  progressPercent: number;

  // Learner Memory & Spaced Review (Phase 3B)
  learnerMemory: LearnerMemoryStoreV2;
  dueReviewsCount: number;
  isReviewModalOpen: boolean;
  setReviewModalOpen: (open: boolean) => void;
  recordDelayedReview: (input: {
    conceptId: ConceptId;
    evaluatedOutcome: EvaluatedOutcome;
    learnerSelfRating?: LearnerSelfRating;
    explicitConfidence?: ExplicitConfidence;
    discrepancyAcknowledged?: boolean;
  }) => void;
  resetMemory: () => void;
  exportMemoryJson: () => string;
  importMemoryJson: (json: string) => { success: boolean; error?: string };
}

const STORAGE_KEY = 'human_learning_platform_progress_v1';
const THEME_STORAGE_KEY = 'human_learning_platform_theme_v1';

const defaultLessonState: LessonProgressState = {
  predictionAnswer: undefined,
  predictionSubmitted: false,
  activeExplanationTab: 'attention',
  inspectedDiagramStages: [],
  exerciseAnswers: {},
  exerciseSubmitted: false,
  quizAnswers: {},
  quizSubmitted: false,
  quizScore: undefined,
  practicalAnswers: {},
  practicalCompleted: false,
  isCompleted: false,
  completedAt: undefined,
};

const LearningContext = createContext<LearningContextType | undefined>(undefined);

export const LearningProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme state
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  // Active lesson ID
  const [activeLessonId, setActiveLessonId] = useState<string>('how-learning-actually-works');

  // UI Drawer states (responsive)
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState<boolean>(true);
  const [isTutorOpen, setTutorOpen] = useState<boolean>(true);

  // Learner Memory & Review Modal State (Phase 3B)
  const [learnerMemory, setLearnerMemory] = useState<LearnerMemoryStoreV2>(() => loadLearnerMemory());
  const [isReviewModalOpen, setReviewModalOpen] = useState<boolean>(false);

  const [mountTime] = useState(() => Date.now());

  useEffect(() => {
    saveLearnerMemory(learnerMemory);
  }, [learnerMemory]);

  const dueReviewsCount = Object.values(learnerMemory.conceptStates).filter(c => {
    const dueMs = Date.parse(c.nextReviewDueAt);
    return !Number.isNaN(dueMs) && dueMs <= mountTime;
  }).length;

  const recordDelayedReview = (input: {
    conceptId: ConceptId;
    evaluatedOutcome: EvaluatedOutcome;
    learnerSelfRating?: LearnerSelfRating;
    explicitConfidence?: ExplicitConfidence;
    discrepancyAcknowledged?: boolean;
  }) => {
    const currentState = learnerMemory.conceptStates[input.conceptId];
    if (!currentState) return;

    const nowIso = new Date().toISOString();
    const scheduleResult = scheduleNextReview({
      currentState,
      evaluatedOutcome: input.evaluatedOutcome,
      learnerSelfRating: input.learnerSelfRating,
      explicitConfidence: input.explicitConfidence,
      discrepancyAcknowledged: input.discrepancyAcknowledged,
      identifiedMisconception: currentState.activeMisconceptions[0],
      nowIso,
    });

    const delayedReviewEvent: DelayedReviewEvent = {
      id: `delayed-rev-${Date.now()}-${input.conceptId}`,
      conceptId: input.conceptId,
      reviewedAt: nowIso,
      elapsedDaysSinceLastReview: scheduleResult.elapsedDays,
      evaluatedOutcome: input.evaluatedOutcome,
      learnerSelfRating: input.learnerSelfRating,
      explicitConfidence: input.explicitConfidence,
      discrepancyAcknowledged: input.discrepancyAcknowledged,
      previousIntervalDays: currentState.reviewIntervalDays,
      newIntervalDays: scheduleResult.updatedState.reviewIntervalDays,
      isDelayedRetrieval: true, // STRICT
    };

    setLearnerMemory(prev => ({
      ...prev,
      lastActiveAt: nowIso,
      delayedReviews: [...prev.delayedReviews, delayedReviewEvent],
      conceptStates: {
        ...prev.conceptStates,
        [input.conceptId]: scheduleResult.updatedState,
      },
    }));
  };

  const resetMemory = () => {
    const fresh = resetLearnerMemory();
    setLearnerMemory(fresh);
  };

  const exportMemoryJson = () => exportLearnerMemoryJson(learnerMemory);

  const importMemoryJson = (jsonStr: string): { success: boolean; error?: string } => {
    try {
      const parsed = JSON.parse(jsonStr);
      const validation = validateMemoryStoreSchema(parsed);
      if (!validation.valid || !validation.store) {
        return { success: false, error: validation.error || 'Invalid backup data' };
      }
      saveLearnerMemory(validation.store);
      setLearnerMemory(validation.store);
      return { success: true };
    } catch {
      return { success: false, error: 'Malformed JSON string' };
    }
  };

  // Lesson state storage
  const [userProgress, setUserProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          theme: parsed.theme || 'light',
          activeLessonId: parsed.activeLessonId || 'how-learning-actually-works',
          lessonStates: parsed.lessonStates || {
            'how-learning-actually-works': { ...defaultLessonState },
          },
        };
      }
    } catch (e) {
      console.warn('Failed to load saved progress:', e);
    }
    return {
      theme: 'light',
      activeLessonId: 'how-learning-actually-works',
      lessonStates: {
        'how-learning-actually-works': { ...defaultLessonState },
      },
    };
  });

  // Apply theme to HTML root
  useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // ignore storage quota
    }
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Persist userProgress to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userProgress));
    } catch (e) {
      console.warn('Failed to save progress to localStorage:', e);
    }
  }, [userProgress]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const currentLesson = getLessonById(activeLessonId);

  const currentLessonState: LessonProgressState = 
    userProgress.lessonStates[activeLessonId] || { ...defaultLessonState };

  const updateCurrentLessonState = (updater: (prev: LessonProgressState) => LessonProgressState) => {
    setUserProgress(prev => {
      const existing = prev.lessonStates[activeLessonId] || { ...defaultLessonState };
      const updated = updater(existing);
      return {
        ...prev,
        lessonStates: {
          ...prev.lessonStates,
          [activeLessonId]: updated,
        },
      };
    });
  };

  const submitPrediction = (optionId: string) => {
    updateCurrentLessonState(prev => ({
      ...prev,
      predictionAnswer: optionId,
      predictionSubmitted: true,
    }));

    const winningOptionId = currentLesson.prediction.outcome.winningOptionId;
    const isEmpiricalWinner = optionId === winningOptionId;
    const mapping = LESSON_CONCEPT_MAPPINGS[activeLessonId] || LESSON_CONCEPT_MAPPINGS['how-learning-actually-works'];

    setLearnerMemory(prev => {
      const existing = prev.baselineEvidence.find(
        b => b.sourceType === 'prediction' && b.conceptId === mapping.predictionConceptId
      );
      if (existing) return prev;

      const newEv: BaselineLessonEvidence = {
        id: `baseline-pred-${activeLessonId}-${optionId}`,
        conceptId: mapping.predictionConceptId,
        recordedAt: new Date().toISOString(),
        sourceType: 'prediction',
        sourceItemId: `${activeLessonId}:${optionId}`,
        outcome: isEmpiricalWinner ? 'correct' : 'incorrect',
        explicitConfidence: isEmpiricalWinner ? 'medium' : 'high',
        identifiedMisconception: isEmpiricalWinner ? undefined : mapping.predictionMisconceptionId,
        isDelayedRetrieval: false,
      };

      const retrievalConcept = prev.conceptStates[mapping.predictionConceptId];
      if (!retrievalConcept) {
        return {
          ...prev,
          baselineEvidence: [...prev.baselineEvidence, newEv],
        };
      }

      const activeMisconceptions = isEmpiricalWinner
        ? retrievalConcept.activeMisconceptions
        : (retrievalConcept.activeMisconceptions.includes(mapping.predictionMisconceptionId)
            ? retrievalConcept.activeMisconceptions
            : [...retrievalConcept.activeMisconceptions, mapping.predictionMisconceptionId]);

      return {
        ...prev,
        baselineEvidence: [...prev.baselineEvidence, newEv],
        conceptStates: {
          ...prev.conceptStates,
          [mapping.predictionConceptId]: {
            ...retrievalConcept,
            stage: isEmpiricalWinner ? retrievalConcept.stage : 'reinforcing',
            hypercorrectionPending: !isEmpiricalWinner,
            activeMisconceptions,
          },
        },
      };
    });
  };

  const setExplanationTab = (tabId: string) => {
    updateCurrentLessonState(prev => ({
      ...prev,
      activeExplanationTab: tabId,
    }));
  };

  const inspectDiagramStage = (stageId: string) => {
    updateCurrentLessonState(prev => {
      const current = prev.inspectedDiagramStages || [];
      if (current.includes(stageId)) return prev;
      return {
        ...prev,
        inspectedDiagramStages: [...current, stageId],
      };
    });
  };

  const setExerciseAnswer = (scenarioId: string, category: ExerciseCategory) => {
    updateCurrentLessonState(prev => ({
      ...prev,
      exerciseAnswers: {
        ...(prev.exerciseAnswers || {}),
        [scenarioId]: category,
      },
    }));
  };

  const submitExercise = () => {
    updateCurrentLessonState(prev => ({
      ...prev,
      exerciseSubmitted: true,
    }));
  };

  const resetExercise = () => {
    updateCurrentLessonState(prev => ({
      ...prev,
      exerciseAnswers: {},
      exerciseSubmitted: false,
    }));
  };

  const setQuizAnswer = (questionId: string, optionId: string) => {
    updateCurrentLessonState(prev => ({
      ...prev,
      quizAnswers: {
        ...(prev.quizAnswers || {}),
        [questionId]: optionId,
      },
    }));
  };

  const submitQuiz = () => {
    const questions = currentLesson.quiz.questions;
    const currentAnswers = currentLessonState.quizAnswers || {};
    
    let correctCount = 0;
    questions.forEach(q => {
      if (currentAnswers[q.id] === q.correctOptionId) {
        correctCount += 1;
      }
    });

    const scorePercent = Math.round((correctCount / questions.length) * 100);
    const passed = scorePercent >= currentLesson.quiz.passingScorePercent;

    updateCurrentLessonState(prev => ({
      ...prev,
      quizSubmitted: true,
      quizScore: scorePercent,
    }));

    setLearnerMemory(prev => {
      const newEvidence: BaselineLessonEvidence[] = [];
      const nowIso = new Date().toISOString();
      const mapping = LESSON_CONCEPT_MAPPINGS[activeLessonId] || LESSON_CONCEPT_MAPPINGS['how-learning-actually-works'];

      questions.forEach(q => {
        const userOpt = currentAnswers[q.id];
        const isCorrect = userOpt === q.correctOptionId;
        const targetConceptId: ConceptId = mapping.quizConceptMapping[q.id] || 'concept:working_memory_capacity_limits';

        newEvidence.push({
          id: `baseline-quiz-${q.id}-${Date.now()}`,
          conceptId: targetConceptId,
          recordedAt: nowIso,
          sourceType: 'quiz_question',
          sourceItemId: `${q.id}:${userOpt || 'unanswered'}`,
          outcome: isCorrect ? 'correct' : 'incorrect',
          isDelayedRetrieval: false,
        });
      });

      return {
        ...prev,
        baselineEvidence: [...prev.baselineEvidence, ...newEvidence],
      };
    });

    return { score: scorePercent, passed };
  };

  const retakeQuiz = () => {
    updateCurrentLessonState(prev => ({
      ...prev,
      quizAnswers: {},
      quizSubmitted: false,
      quizScore: undefined,
    }));
  };

  const setPracticalAnswer = (stepId: string, text: string) => {
    updateCurrentLessonState(prev => ({
      ...prev,
      practicalAnswers: {
        ...(prev.practicalAnswers || {}),
        [stepId]: text,
      },
    }));
  };

  const completePracticalTask = () => {
    updateCurrentLessonState(prev => ({
      ...prev,
      practicalCompleted: true,
    }));
  };

  const completeLesson = () => {
    updateCurrentLessonState(prev => ({
      ...prev,
      isCompleted: true,
      completedAt: prev.completedAt || new Date().toISOString(),
    }));
  };

  // Calculate overall progress through this lesson
  const calculateProgress = (): number => {
    let score = 0;
    const maxPoints = 5;

    // 1. Prediction (1 pt)
    if (currentLessonState.predictionSubmitted) score += 1;
    // 2. Diagram explored at least 2 stages (1 pt)
    if ((currentLessonState.inspectedDiagramStages?.length || 0) >= 2) score += 1;
    // 3. Exercise submitted (1 pt)
    if (currentLessonState.exerciseSubmitted) score += 1;
    // 4. Quiz submitted (1 pt)
    if (currentLessonState.quizSubmitted) score += 1;
    // 5. Practical task completed (1 pt)
    if (currentLessonState.practicalCompleted) score += 1;

    return Math.round((score / maxPoints) * 100);
  };

  return (
    <LearningContext.Provider
      value={{
        theme,
        toggleTheme,
        activeLessonId,
        setActiveLessonId,
        currentLesson,
        isLessonCompleted: (lessonId: string) => !!userProgress.lessonStates[lessonId]?.isCompleted,
        lessonState: currentLessonState,
        isLeftSidebarOpen,
        toggleLeftSidebar: () => setLeftSidebarOpen(p => !p),
        setLeftSidebarOpen,
        isTutorOpen,
        toggleTutor: () => setTutorOpen(p => !p),
        setTutorOpen,
        submitPrediction,
        setExplanationTab,
        inspectDiagramStage,
        setExerciseAnswer,
        submitExercise,
        resetExercise,
        setQuizAnswer,
        submitQuiz,
        retakeQuiz,
        setPracticalAnswer,
        completePracticalTask,
        completeLesson,
        progressPercent: calculateProgress(),
        learnerMemory,
        dueReviewsCount,
        isReviewModalOpen,
        setReviewModalOpen,
        recordDelayedReview,
        resetMemory,
        exportMemoryJson,
        importMemoryJson,
      }}
    >
      {children}
    </LearningContext.Provider>
  );
};

export const useLearning = () => {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
};
