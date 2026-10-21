import { describe, it, expect } from 'vitest';
import { LESSON_DOPAMINE_REWARD_PREDICTION } from '../data/lesson20_1Data.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';
import { PRIMARY_COURSE, ALL_LESSONS } from '../data/courseData.ts';

describe('Lesson 20.1: Reward Prediction Errors in Motivation Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_DOPAMINE_REWARD_PREDICTION.id).toBe('dopamine-reward-prediction');
    expect(LESSON_DOPAMINE_REWARD_PREDICTION.chapterId).toBe('ch-20-motivation-drive');
    expect(LESSON_DOPAMINE_REWARD_PREDICTION.number).toBe('20.1');
    expect(LESSON_DOPAMINE_REWARD_PREDICTION.title).toBe('Reward Prediction Errors in Motivation');
    expect(LESSON_DOPAMINE_REWARD_PREDICTION.subtitle).toContain('How the brain calibrates drive');
    expect(LESSON_DOPAMINE_REWARD_PREDICTION.readingTimeMinutes).toBeGreaterThanOrEqual(14);
    expect(LESSON_DOPAMINE_REWARD_PREDICTION.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_DOPAMINE_REWARD_PREDICTION;
    expect(curiosityQuestion.headline).toContain('anticlimactic');
    expect(curiosityQuestion.hookNote).toContain('Wolfram Schultz');
    expect(curiosityQuestion.hookNote).toContain('Reward Prediction Errors');
    expect(curiosityQuestion.hookNote).toContain('Temporal Difference');
    expect(curiosityQuestion.hookNote).toContain('Peter Dayan');
    expect(curiosityQuestion.hookNote).toContain('P. Read Montague');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_DOPAMINE_REWARD_PREDICTION;
    expect(prediction.options).toHaveLength(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-condition-c-calibrated-rpe-velocity');
    expect(prediction.outcome.explanation).toContain('Schultz');
    expect(prediction.outcome.explanation).toContain('Wilson et al.');
    expect(prediction.outcome.comparisons.length).toBeGreaterThanOrEqual(2);
    expect(prediction.outcome.comparisons.some(c => c.isEmpiricalWinner)).toBe(true);
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_DOPAMINE_REWARD_PREDICTION;
    expect(coreExplanations).toHaveLength(3);

    // Module 1: Schultz RPE
    expect(coreExplanations[0].id).toBe('schultz-rpe-phasic-dopamine');
    expect(coreExplanations[0].title).toContain('Wolfram Schultz (1997)');
    expect(coreExplanations[0].scientificStatus).toBe('neurobiological-mechanism');
    expect(coreExplanations[0].mechanisms.length).toBeGreaterThanOrEqual(3);
    expect(coreExplanations[0].keyInsight).toContain('update delta between expectation and reality');
    expect(coreExplanations[0].simplifiedModelCaveat).toBeDefined();

    // Module 2: Temporal Difference Learning
    expect(coreExplanations[1].id).toBe('temporal-difference-learning-montague');
    expect(coreExplanations[1].title).toContain('Temporal Difference (TD) Learning');
    expect(coreExplanations[1].scientificStatus).toBe('cognitive-model');
    expect(coreExplanations[1].mechanisms.some(m => m.label.includes('Retrograde Temporal Migration'))).toBe(true);
    expect(coreExplanations[1].mechanisms.some(m => m.label.includes('Habituation Trap'))).toBe(true);

    // Module 3: Tonic Vigor & Effort
    expect(coreExplanations[2].id).toBe('tonic-vigor-effort-allocation');
    expect(coreExplanations[2].title).toContain('Salamone & Niv: Tonic Dopamine');
    expect(coreExplanations[2].scientificStatus).toBe('neurobiological-mechanism');
    expect(coreExplanations[2].mechanisms.some(m => m.label.includes('Phasic Bursts vs Tonic Baseline'))).toBe(true);
    expect(coreExplanations[2].mechanisms.some(m => m.label.includes('85% Sweet Spot'))).toBe(true);
  });

  it('should define a 6-stage diagram illustrating the TD & RPE signaling funnel', () => {
    const { diagram } = LESSON_DOPAMINE_REWARD_PREDICTION;
    expect(diagram.title).toContain('Temporal Difference & Reward Prediction Error');
    expect(diagram.stages).toHaveLength(6);
    expect(diagram.stages[0].name).toContain('Unpredicted Reward');
    expect(diagram.stages[1].name).toContain('Predictive Cue Pairing');
    expect(diagram.stages[2].name).toContain('Retrograde Dopamine Migration');
    expect(diagram.stages[3].name).toContain('Fully Predicted Execution');
    expect(diagram.stages[4].name).toContain('Omission Dip');
    expect(diagram.stages[5].name).toContain('Calibrated Velocity Tuning');
    expect(diagram.feedbackLoopDescription).toBeDefined();
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_DOPAMINE_REWARD_PREDICTION;
    expect(exercise.categories).toHaveLength(4);
    expect(exercise.scenarios).toHaveLength(4);

    const s1 = exercise.scenarios[0];
    expect(s1.realWorldContext).toContain('Medical Board Exam');
    expect(s1.mechanismExplanation).toContain('Zero-Delta Habituation');

    const s2 = exercise.scenarios[1];
    expect(s2.realWorldContext).toContain('Technical Skill Acquisition');
    expect(s2.mechanismExplanation).toContain('Chronic Negative Prediction Error');

    const s3 = exercise.scenarios[2];
    expect(s3.realWorldContext).toContain('Executive Cognitive Control');
    expect(s3.mechanismExplanation).toContain('Tonic Dopamine Depletion');

    const s4 = exercise.scenarios[3];
    expect(s4.realWorldContext).toContain('Longitudinal Deliberate Practice');
    expect(s4.mechanismExplanation).toContain('Calibrated RPE Engine');
  });

  it('should define 4 rigorous formative quiz questions with literature citations', () => {
    const { quiz } = LESSON_DOPAMINE_REWARD_PREDICTION;
    expect(quiz.questions).toHaveLength(4);
    expect(quiz.questions[0].explanation).toContain('Schultz');
    expect(quiz.questions[1].explanation).toContain('Montague');
    expect(quiz.questions[2].explanation).toContain('Salamone');
    expect(quiz.questions[3].explanation).toContain('Wilson et al.');
  });

  it('should define a 3-step practical protocol translating cognitive science into action', () => {
    const { practicalTask } = LESSON_DOPAMINE_REWARD_PREDICTION;
    expect(practicalTask.title).toContain('3-Phase RPE-Calibrated Motivation Engine');
    expect(practicalTask.steps).toHaveLength(3);
    expect(practicalTask.steps[0].title).toContain('Baseline Expectation');
    expect(practicalTask.steps[1].title).toContain('85% Difficulty Gate');
    expect(practicalTask.steps[2].title).toContain('Progress Velocity');
  });

  it('should register all Lesson 20.1 concepts in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const lesson20_1Concepts = [
      'concept:schultz_reward_prediction_error_phasic_dopamine',
      'concept:temporal_difference_learning_montague_dayan',
      'concept:tonic_vs_phasic_dopamine_motivational_vigor',
    ] as const;

    for (const c of lesson20_1Concepts) {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c]).toBeDefined();
      expect(CONCEPT_REGISTRY[c].conceptId).toBe(c);
      expect(CONCEPT_REGISTRY[c].keyCriteria.length).toBeGreaterThanOrEqual(4);
      expect(CONCEPT_REGISTRY[c].canonicalAnswer).toBeDefined();
      expect(CONCEPT_REGISTRY[c].lessonSectionAnchor).toContain('Lesson 20.1');
    }
  });

  it('should register all Lesson 20.1 misconceptions in KNOWN_MISCONCEPTIONS', () => {
    const lesson20_1Misconceptions = [
      'misconception:dopamine_is_the_molecule_of_pleasure_reward',
      'misconception:motivation_requires_guaranteed_predictable_outcomes',
    ] as const;

    for (const m of lesson20_1Misconceptions) {
      expect(KNOWN_MISCONCEPTIONS).toContain(m);
    }
  });

  it('should provide accurate offline tutor knowledge base answers for Lesson 20.1 queries', () => {
    const ans1 = findTutorAnswer('How does Wolfram Schultz explain reward prediction errors in motivation and anticipation?');
    expect(ans1.referencedSection).toContain('Lesson 20.1');
    expect(ans1.detailedResponse).toContain('Wolfram Schultz');

    const ans2 = findTutorAnswer('What is temporal difference td learning and retrograde shift according to Montague and Dayan?');
    expect(ans2.referencedSection).toContain('Lesson 20.1');
    expect(ans2.detailedResponse).toContain('Montague');

    const ans3 = findTutorAnswer('What is the difference between tonic dopamine and motivational vigor in Salamone and Yael Niv?');
    expect(ans3.referencedSection).toContain('Lesson 20.1');
    expect(ans3.detailedResponse).toContain('Salamone');
  });

  it('should resolve grounding anchors correctly for Lesson 20.1 topics', () => {
    expect(resolveValidSection('schultz reward prediction error rpe dopamine dynamics delta = r - v')).toBe(
      'Lesson 20.1 • Section 1: Wolfram Schultz (1997): Reward Prediction Errors & Dopamine Dynamics'
    );
    expect(resolveValidSection('temporal difference td learning montague dayan sutton barto')).toBe(
      'Lesson 20.1 • Section 2: Montague, Dayan & Sutton: Temporal Difference (TD) Learning'
    );
    expect(resolveValidSection('salamone correa yael niv tonic dopamine motivational vigor 85% rule')).toBe(
      'Lesson 20.1 • Section 3: Salamone & Niv: Tonic Dopamine, Motivational Vigor & Effort'
    );
  });

  it('should return TUTOR_SYSTEM_INSTRUCTION_LESSON_20_1 for dopamine-reward-prediction', () => {
    const prompt = getTutorSystemInstruction('dopamine-reward-prediction');
    expect(prompt).toContain('Lesson 20.1');
    expect(prompt).toContain('Wolfram Schultz');
    expect(prompt).toContain('Temporal Difference');
    expect(prompt).toContain('Salamone & Niv');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE with isAvailable true', () => {
    expect(ALL_LESSONS['dopamine-reward-prediction']).toBeDefined();
    expect(ALL_LESSONS['dopamine-reward-prediction'].id).toBe('dopamine-reward-prediction');

    const ch20 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-20-motivation-drive');
    expect(ch20).toBeDefined();
    const l201 = ch20?.lessons.find(l => l.id === 'dopamine-reward-prediction');
    expect(l201).toBeDefined();
    expect(l201?.isAvailable).toBe(true);
  });
});
