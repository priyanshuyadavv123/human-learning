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
  'prototypes-vs-exemplars': {
    predictionConceptId: 'concept:medin_schaffer_nosofsky_exemplar_gcm',
    predictionMisconceptionId: 'misconception:single_prototypes_preserve_feature_correlations',
    quizConceptMapping: {
      'q1-rosch-typicality-gradient-evidence': 'concept:rosch_prototype_theory_typicality_gradients',
      'q2-medin-schaffer-correlated-features-advantage': 'concept:medin_schaffer_nosofsky_exemplar_gcm',
      'q3-nosofsky-gcm-similarity-metric': 'concept:medin_schaffer_nosofsky_exemplar_gcm',
      'q4-covis-dual-process-neurobiology': 'concept:ashby_covis_dual_system_categorization',
    },
  },
  'boundary-cases-isolation': {
    predictionConceptId: 'concept:winston_near_misses_feature_isolation',
    predictionMisconceptionId: 'misconception:interior_examples_calibrate_boundaries',
    quizConceptMapping: {
      'q1-wason-246-task-confirmation-bias': 'concept:wason_246_falsification_confirmation_bias',
      'q2-winston-near-miss-definition-power': 'concept:winston_near_misses_feature_isolation',
      'q3-vapnik-support-vectors-diagnostic-weight': 'concept:vapnik_support_vectors_decision_margin',
      'q4-klayman-ha-positive-test-strategy': 'concept:wason_246_falsification_confirmation_bias',
    },
  },
  'edge-of-ability-feedback': {
    predictionConceptId: 'concept:ericsson_deliberate_practice_four_pillars',
    predictionMisconceptionId: 'misconception:experience_equals_expert_performance',
    quizConceptMapping: {
      'q1-ericsson-deliberate-practice-definition': 'concept:ericsson_deliberate_practice_four_pillars',
      'q2-fitts-posner-autonomous-plateau': 'concept:fitts_posner_autonomous_stage_plateau',
      'q3-wilson-85-percent-rule-learning-rate': 'concept:wilson_85_percent_rule_optimal_learning',
      'q4-immediate-feedback-credit-assignment': 'concept:ericsson_deliberate_practice_four_pillars',
    },
  },
  'expert-mental-representations': {
    predictionConceptId: 'concept:chase_simon_domain_specific_representations',
    predictionMisconceptionId: 'misconception:expert_genius_is_general_hardware',
    quizConceptMapping: {
      'q1-chase-simon-random-position-finding': 'concept:chase_simon_domain_specific_representations',
      'q2-klein-rpd-mental-simulation': 'concept:klein_recognition_primed_decision_simulation',
      'q3-chi-expert-physics-categorization': 'concept:chase_simon_domain_specific_representations',
      'q4-ericsson-mental-representation-self-monitoring': 'concept:ericsson_internal_reference_self_monitoring',
    },
  },
  'fitts-posner-stages': {
    predictionConceptId: 'concept:fitts_posner_tripartite_progression',
    predictionMisconceptionId: 'misconception:multitasking_possible_in_early_learning',
    quizConceptMapping: {
      'q1-fitts-posner-tripartite-characteristics': 'concept:fitts_posner_tripartite_progression',
      'q2-anderson-actr-production-composition': 'concept:anderson_actr_knowledge_compilation',
      'q3-neuroanatomy-prefrontal-to-striatal-shift': 'concept:prefrontal_to_striatal_neuroanatomical_handover',
      'q4-power-law-of-practice-newell-rosenbloom': 'concept:anderson_actr_knowledge_compilation',
    },
  },
  'paradox-of-automation': {
    predictionConceptId: 'concept:bainbridge_ironies_of_automation_deskilling',
    predictionMisconceptionId: 'misconception:automation_eliminates_need_for_human_expertise',
    quizConceptMapping: {
      'q1-bainbridge-ironies-of-automation-core-paradox': 'concept:bainbridge_ironies_of_automation_deskilling',
      'q2-einstellung-effect-mechanism': 'concept:luchins_einstellung_effect_cognitive_entrenchment',
      'q3-endsley-situational-awareness-levels': 'concept:endsley_situational_awareness_de_automation',
      'q4-deliberate-de-automation-remedy': 'concept:endsley_situational_awareness_de_automation',
      'q1': 'concept:bainbridge_ironies_of_automation_deskilling',
      'q2': 'concept:luchins_einstellung_effect_cognitive_entrenchment',
      'q3': 'concept:endsley_situational_awareness_de_automation',
      'q4': 'concept:endsley_situational_awareness_de_automation',
    },
  },
  'blocked-vs-interleaved-practice': {
    predictionConceptId: 'concept:shea_morgan_contextual_interference_effect',
    predictionMisconceptionId: 'misconception:blocked_practice_yields_superior_retention',
    quizConceptMapping: {
      'q1-shea-morgan-contextual-interference': 'concept:shea_morgan_contextual_interference_effect',
      'q2-bjork-discriminative-contrast': 'concept:bjork_discriminative_contrast_hypothesis',
      'q3-rohrer-category-selection-vs-execution': 'concept:rohrer_category_selection_retrieval_effort',
      'q4-metacognitive-illusion-of-fluency': 'concept:shea_morgan_contextual_interference_effect',
      'q1': 'concept:shea_morgan_contextual_interference_effect',
      'q2': 'concept:bjork_discriminative_contrast_hypothesis',
      'q3': 'concept:rohrer_category_selection_retrieval_effort',
      'q4': 'concept:shea_morgan_contextual_interference_effect',
    },
  },
  'varied-practice-transfer': {
    predictionConceptId: 'concept:schmidt_schema_theory_generalized_motor_program',
    predictionMisconceptionId: 'misconception:constant_practice_builds_narrow_grooves_for_exact_targets',
    quizConceptMapping: {
      'q1-schmidt-schema-theory-invariants-parameters': 'concept:schmidt_schema_theory_generalized_motor_program',
      'q2-kerr-booth-target-interpolation-finding': 'concept:kerr_booth_variable_practice_interpolation',
      'q3-smith-glenberg-bjork-encoding-variability': 'concept:encoding_variability_multi_context_robustness',
      'q4-overfitting-remedy-in-cognitive-domains': 'concept:schmidt_schema_theory_generalized_motor_program',
      'q1': 'concept:schmidt_schema_theory_generalized_motor_program',
      'q2': 'concept:kerr_booth_variable_practice_interpolation',
      'q3': 'concept:encoding_variability_multi_context_robustness',
      'q4': 'concept:schmidt_schema_theory_generalized_motor_program',
    },
  },
  'productive-failure-generation': {
    predictionConceptId: 'concept:kapur_productive_failure_schema_priming',
    predictionMisconceptionId: 'misconception:direct_instruction_first_is_always_more_efficient',
    quizConceptMapping: {
      'q1-kapur-productive-failure-core-architecture': 'concept:kapur_productive_failure_schema_priming',
      'q2-bjork-pretesting-effect-mechanism': 'concept:bjork_pretesting_generation_gap_activation',
      'q3-metcalfe-hypercorrection-effect': 'concept:metcalfe_hypercorrection_epistemic_curiosity',
      'q4-productive-vs-unproductive-failure': 'concept:kapur_productive_failure_schema_priming',
      'q1': 'concept:kapur_productive_failure_schema_priming',
      'q2': 'concept:bjork_pretesting_generation_gap_activation',
      'q3': 'concept:metcalfe_hypercorrection_epistemic_curiosity',
      'q4': 'concept:kapur_productive_failure_schema_priming',
    },
  },
  'error-journaling-protocols': {
    predictionConceptId: 'concept:klein_premortem_prospective_hindsight',
    predictionMisconceptionId: 'misconception:premortems_induce_paralyzing_pessimism',
    quizConceptMapping: {
      'q1-klein-prospective-hindsight-mechanism': 'concept:klein_premortem_prospective_hindsight',
      'q2-syed-black-box-blameless-culture': 'concept:syed_black_box_blameless_root_cause',
      'q3-edmondson-failure-taxonomy-distinction': 'concept:edmondson_failure_taxonomy_intelligent_failure',
      'q4-error-journal-root-cause-protocol': 'concept:syed_black_box_blameless_root_cause',
      'q1': 'concept:klein_premortem_prospective_hindsight',
      'q2': 'concept:syed_black_box_blameless_root_cause',
      'q3': 'concept:edmondson_failure_taxonomy_intelligent_failure',
      'q4': 'concept:syed_black_box_blameless_root_cause',
    },
  },
  'specificity-of-transfer': {
    predictionConceptId: 'concept:thorndike_identical_elements_theory',
    predictionMisconceptionId: 'misconception:doctrine_of_formal_discipline_brain_gym',
    quizConceptMapping: {
      'q1-thorndike-theory-of-identical-elements': 'concept:thorndike_identical_elements_theory',
      'q2-doctrine-of-formal-discipline-myth': 'concept:thorndike_identical_elements_theory',
      'q3-barnett-ceci-dimensions-of-transfer': 'concept:barnett_ceci_multi_dimensional_transfer_taxonomy',
      'q4-chess-master-random-board-finding': 'concept:brain_training_myth_domain_specific_expertise',
      'q1': 'concept:thorndike_identical_elements_theory',
      'q2': 'concept:thorndike_identical_elements_theory',
      'q3': 'concept:barnett_ceci_multi_dimensional_transfer_taxonomy',
      'q4': 'concept:brain_training_myth_domain_specific_expertise',
    },
  },
  'conditions-for-far-transfer': {
    predictionConceptId: 'concept:gick_holyoak_schema_induction_dual_analog',
    predictionMisconceptionId: 'misconception:single_deep_example_sufficient_for_far_transfer',
    quizConceptMapping: {
      'q1-gick-holyoak-schema-induction-condition': 'concept:gick_holyoak_schema_induction_dual_analog',
      'q2-gentner-analogical-encoding-mechanism': 'concept:gentner_analogical_encoding_mutual_alignment',
      'q3-bransford-schwartz-pfl-concept': 'concept:bransford_schwartz_preparation_for_future_learning',
      'q4-surface-vs-structural-transfer-obstacle': 'concept:gick_holyoak_schema_induction_dual_analog',
      'q1': 'concept:gick_holyoak_schema_induction_dual_analog',
      'q2': 'concept:gentner_analogical_encoding_mutual_alignment',
      'q3': 'concept:bransford_schwartz_preparation_for_future_learning',
      'q4': 'concept:gick_holyoak_schema_induction_dual_analog',
    },
  },
  'means-end-working-backward': {
    predictionConceptId: 'concept:newell_simon_means_ends_analysis_problem_space',
    predictionMisconceptionId: 'misconception:forward_trial_and_error_is_most_natural_and_efficient',
    quizConceptMapping: {
      'q1-newell-simon-means-ends-analysis-core': 'concept:newell_simon_means_ends_analysis_problem_space',
      'q2-polya-working-backward-branching-advantage': 'concept:polya_working_backward_regressus_heuristic',
      'q3-hill-climbing-vs-means-ends-distinction': 'concept:newell_simon_means_ends_analysis_problem_space',
      'q4-frontopolar-prefrontal-cortex-role': 'concept:frontopolar_cortex_ba10_subgoal_branching',
      'q1': 'concept:newell_simon_means_ends_analysis_problem_space',
      'q2': 'concept:polya_working_backward_regressus_heuristic',
      'q3': 'concept:newell_simon_means_ends_analysis_problem_space',
      'q4': 'concept:frontopolar_cortex_ba10_subgoal_branching',
    },
  },
  'subgoal-labeling-scaffolding': {
    predictionConceptId: 'concept:catrambone_subgoal_labeling_schema',
    predictionMisconceptionId: 'misconception:linear_step_memorization_equals_problem_solving',
    quizConceptMapping: {
      'q1-catrambone-subgoal-learning-model': 'concept:catrambone_subgoal_labeling_schema',
      'q2-margulieux-subgoal-scaffolding-stem': 'concept:margulieux_faded_subgoal_scaffolding',
      'q3-sweller-renkl-backward-fading-architecture': 'concept:sweller_renkl_worked_example_fading',
      'q4-expertise-reversal-and-scaffolding-fade': 'concept:sweller_renkl_worked_example_fading',
      'q1': 'concept:catrambone_subgoal_labeling_schema',
      'q2': 'concept:margulieux_faded_subgoal_scaffolding',
      'q3': 'concept:sweller_renkl_worked_example_fading',
      'q4': 'concept:sweller_renkl_worked_example_fading',
    },
  },
  'dunning-kruger-calibration': {
    predictionConceptId: 'concept:dunning_kruger_metacognitive_dual_burden',
    predictionMisconceptionId: 'misconception:high_confidence_indicates_high_accuracy',
    quizConceptMapping: {
      'q1-kruger-dunning-dual-burden': 'concept:dunning_kruger_metacognitive_dual_burden',
      'q2-brier-score-calibration-curve': 'concept:brier_score_epistemic_calibration_curve',
      'q3-considering-opposite-debiasing': 'concept:objective_calibration_mirror_debiasing',
      'q4-expert-false-consensus-underconfidence': 'concept:dunning_kruger_metacognitive_dual_burden',
      'q1': 'concept:dunning_kruger_metacognitive_dual_burden',
      'q2': 'concept:brier_score_epistemic_calibration_curve',
      'q3': 'concept:objective_calibration_mirror_debiasing',
      'q4': 'concept:dunning_kruger_metacognitive_dual_burden',
    },
  },
  'sunk-cost-study-biases': {
    predictionConceptId: 'concept:wason_nickerson_confirmation_bias_study_rituals',
    predictionMisconceptionId: 'misconception:highlighting_and_rereading_are_effective_because_they_feel_productive',
    quizConceptMapping: {
      'q1-wason-nickerson-confirmation-bias-rituals': 'concept:wason_nickerson_confirmation_bias_study_rituals',
      'q2-arkes-blumer-sunk-cost-learning-systems': 'concept:arkes_blumer_sunk_cost_learning_escalation',
      'q3-festinger-cognitive-dissonance-learning-styles': 'concept:cognitive_dissonance_discrepancy_sunsetting',
      'q4-annie-duke-kill-criteria-sunsetting': 'concept:cognitive_dissonance_discrepancy_sunsetting',
      'q1': 'concept:wason_nickerson_confirmation_bias_study_rituals',
      'q2': 'concept:arkes_blumer_sunk_cost_learning_escalation',
      'q3': 'concept:cognitive_dissonance_discrepancy_sunsetting',
      'q4': 'concept:cognitive_dissonance_discrepancy_sunsetting',
    },
  },
  'incubation-default-mode': {
    predictionConceptId: 'concept:default_mode_network_incubation',
    predictionMisconceptionId: 'misconception:unbroken_hyper_focused_grinding_maximizes_breakthrough_insights',
    quizConceptMapping: {
      'q1-dmn-vs-ecn': 'concept:default_mode_network_incubation',
      'q2-baird-low-load-finding': 'concept:cognitive_fixation_release_baird_smallwood',
      'q3-spreading-activation-decay': 'concept:unconscious_associative_search_spreading_activation',
      'q4-rstg-gamma-signature': 'concept:unconscious_associative_search_spreading_activation',
      'q1': 'concept:default_mode_network_incubation',
      'q2': 'concept:cognitive_fixation_release_baird_smallwood',
      'q3': 'concept:unconscious_associative_search_spreading_activation',
      'q4': 'concept:unconscious_associative_search_spreading_activation',
    },
  },
  'combinatorial-play-synthesis': {
    predictionConceptId: 'concept:koestler_bisociation_matrices',
    predictionMisconceptionId: 'misconception:creativity_is_mystical_creation_ex_nihilo',
    quizConceptMapping: {
      'q1-koestler-bisociation-matrices': 'concept:koestler_bisociation_matrices',
      'q2-mednick-associative-hierarchies': 'concept:mednick_flat_associative_hierarchy',
      'q3-jacob-evolutionary-bricolage': 'concept:jacob_evolutionary_bricolage_synthesis',
      'q4-neurobiology-frontopolar-ba10': 'concept:koestler_bisociation_matrices',
      'q1': 'concept:koestler_bisociation_matrices',
      'q2': 'concept:mednick_flat_associative_hierarchy',
      'q3': 'concept:jacob_evolutionary_bricolage_synthesis',
      'q4': 'concept:koestler_bisociation_matrices',
    },
  },
  'dopamine-reward-prediction': {
    predictionConceptId: 'concept:schultz_reward_prediction_error_phasic_dopamine',
    predictionMisconceptionId: 'misconception:dopamine_is_the_molecule_of_pleasure_reward',
    quizConceptMapping: {
      'q1-schultz-rpe-definition': 'concept:schultz_reward_prediction_error_phasic_dopamine',
      'q2-temporal-difference-retrograde-shift': 'concept:temporal_difference_learning_montague_dayan',
      'q3-phasic-vs-tonic-dopamine': 'concept:tonic_vs_phasic_dopamine_motivational_vigor',
      'q4-wilson-85-percent-rule': 'concept:schultz_reward_prediction_error_phasic_dopamine',
      'q1': 'concept:schultz_reward_prediction_error_phasic_dopamine',
      'q2': 'concept:temporal_difference_learning_montague_dayan',
      'q3': 'concept:tonic_vs_phasic_dopamine_motivational_vigor',
      'q4': 'concept:schultz_reward_prediction_error_phasic_dopamine',
    },
  },
  'self-determination-theory': {
    predictionConceptId: 'concept:deci_ryan_self_determination_triad',
    predictionMisconceptionId: 'misconception:extrinsic_incentives_always_boost_performance',
    quizConceptMapping: {
      'q1-sdt-needs-triad': 'concept:deci_ryan_self_determination_triad',
      'q2-overjustification-undermining-effect': 'concept:lepper_overjustification_undermining_effect',
      'q3-oit-introjected-vs-integrated': 'concept:organismic_integration_continuum',
      'q4-murayama-neurobiology-undermining': 'concept:lepper_overjustification_undermining_effect',
      'q1': 'concept:deci_ryan_self_determination_triad',
      'q2': 'concept:lepper_overjustification_undermining_effect',
      'q3': 'concept:organismic_integration_continuum',
      'q4': 'concept:lepper_overjustification_undermining_effect',
    },
  },
  'yerkes-dodson-cortisol': {
    predictionConceptId: 'concept:yerkes_dodson_inverted_u_law',
    predictionMisconceptionId: 'misconception:stress_is_always_catastrophic_for_learning',
    quizConceptMapping: {
      'q1-yerkes-dodson-task-difficulty': 'concept:yerkes_dodson_inverted_u_law',
      'q2-arnsten-pfc-potassium-channels': 'concept:arnsten_pfc_catecholamine_detachment',
      'q3-mcewen-lupien-mr-vs-gr': 'concept:glucocorticoid_hippocampal_ltp_disruption',
      'q4-autonomic-down-regulation': 'concept:yerkes_dodson_inverted_u_law',
      'q1': 'concept:yerkes_dodson_inverted_u_law',
      'q2': 'concept:arnsten_pfc_catecholamine_detachment',
      'q3': 'concept:glucocorticoid_hippocampal_ltp_disruption',
      'q4': 'concept:yerkes_dodson_inverted_u_law',
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
