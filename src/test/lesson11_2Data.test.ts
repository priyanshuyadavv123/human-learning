import { describe, it, expect } from 'vitest';
import { LESSON_BOUNDARY_CASES_ISOLATION } from '../data/lesson11_2Data.ts';
import { ALL_LESSONS, PRIMARY_COURSE } from '../data/courseData.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';

describe('Lesson 11.2: Feature Isolation & Boundary Testing Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_BOUNDARY_CASES_ISOLATION.id).toBe('boundary-cases-isolation');
    expect(LESSON_BOUNDARY_CASES_ISOLATION.chapterId).toBe('ch-11-categorization');
    expect(LESSON_BOUNDARY_CASES_ISOLATION.number).toBe('11.2');
    expect(LESSON_BOUNDARY_CASES_ISOLATION.title).toBe('Feature Isolation & Boundary Testing');
    expect(LESSON_BOUNDARY_CASES_ISOLATION.readingTimeMinutes).toBeGreaterThanOrEqual(14);
    expect(LESSON_BOUNDARY_CASES_ISOLATION.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_BOUNDARY_CASES_ISOLATION;
    expect(curiosityQuestion.headline).toContain('borderline case');
    expect(curiosityQuestion.teaser).toContain('decision boundary');
    expect(curiosityQuestion.hookNote).toContain('Peter Wason');
    expect(curiosityQuestion.hookNote).toContain('Patrick Winston');
    expect(curiosityQuestion.hookNote).toContain('Vapnik');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_BOUNDARY_CASES_ISOLATION;
    expect(prediction.options.length).toBe(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-boundary-near-miss-calibration');
    expect(prediction.outcome.headline).toContain('Winston, 1970');
    expect(prediction.outcome.explanation).toContain('Support Vector');
    expect(prediction.outcome.optionFeedback['opt-typical-volume-mastery']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-boundary-near-miss-calibration']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-equal-distribution-invariance']).toBeDefined();
    expect(prediction.outcome.comparisons.length).toBe(2);
    expect(prediction.outcome.evidenceDistinction).toBeTruthy();
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_BOUNDARY_CASES_ISOLATION;
    expect(coreExplanations.length).toBe(3);

    for (const exp of coreExplanations) {
      expect(exp.title).toBeTruthy();
      expect(exp.tagline).toBeTruthy();
      expect(exp.summary.length).toBeGreaterThan(50);
      expect(exp.mechanisms.length).toBeGreaterThanOrEqual(3);
      for (const m of exp.mechanisms) {
        expect(m.label).toBeTruthy();
        expect(m.description.length).toBeGreaterThan(30);
      }
      expect(exp.keyInsight).toBeTruthy();
      expect(exp.simplifiedModelCaveat).toBeTruthy();
    }
  });

  it('should provide a 4-stage interactive decision boundary calibration diagram', () => {
    const { diagram } = LESSON_BOUNDARY_CASES_ISOLATION;
    expect(diagram.stages.length).toBe(4);
    expect(diagram.stages[0].id).toBe('stage-uncalibrated-interior-assumption');
    expect(diagram.stages[1].id).toBe('stage-wason-confirmation-trap');
    expect(diagram.stages[2].id).toBe('stage-near-miss-feature-isolation');
    expect(diagram.stages[3].id).toBe('stage-support-vector-margin-maximization');
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_BOUNDARY_CASES_ISOLATION;
    expect(exercise.categories.length).toBe(4);
    expect(exercise.scenarios.length).toBe(4);
    for (const scen of exercise.scenarios) {
      expect(scen.realWorldContext).toBeTruthy();
      expect(scen.scenario.length).toBeGreaterThan(40);
      expect(scen.mechanismExplanation.length).toBeGreaterThan(30);
      expect(scen.evidenceBasedFix.length).toBeGreaterThan(20);
    }
  });

  it('should define 4 rigorous formative quiz questions with literature citations', () => {
    const { quiz } = LESSON_BOUNDARY_CASES_ISOLATION;
    expect(quiz.questions.length).toBe(4);
    for (const q of quiz.questions) {
      expect(q.options.length).toBe(4);
      expect(q.options.some(o => o.id === q.correctOptionId)).toBe(true);
      expect(q.explanation.length).toBeGreaterThan(20);
      expect(q.pedagogicalRationale).toBeTruthy();
      expect(q.evidenceNote).toBeTruthy();
    }
  });

  it('should define a practical protocol translating cognitive science into action', () => {
    const { practicalTask } = LESSON_BOUNDARY_CASES_ISOLATION;
    expect(practicalTask.steps.length).toBe(3);
    expect(practicalTask.steps[0].title).toContain('Happy-Path');
    expect(practicalTask.steps[1].title).toContain('Minimal-Pair Near-Miss');
    expect(practicalTask.steps[2].title).toContain('Support Vectors');
  });

  it('should register all Lesson 11.2 concepts in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:wason_246_falsification_confirmation_bias',
      'concept:winston_near_misses_feature_isolation',
      'concept:vapnik_support_vectors_decision_margin',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const entry = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(entry.keyCriteria.length).toBeGreaterThanOrEqual(3);
      expect(entry.canonicalAnswer.length).toBeGreaterThan(50);
      expect(entry.lessonSectionAnchor).toContain('Lesson 11.2');
    });
  });

  it('should register all Lesson 11.2 misconceptions in KNOWN_MISCONCEPTIONS', () => {
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:positive_instances_prove_mental_model');
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:interior_examples_calibrate_boundaries');
  });

  it('should provide accurate offline tutor knowledge base answers for Lesson 11.2 queries', () => {
    const q1 = findTutorAnswer('How did Peter Wason 2-4-6 task discover confirmation bias and positive testing?');
    expect(q1.referencedSection).toContain('Lesson 11.2');
    expect(q1.detailedResponse).toContain('Wason');

    const q2 = findTutorAnswer('What is Patrick Winston near-miss learning and minimal pair feature isolation?');
    expect(q2.referencedSection).toContain('Lesson 11.2');
    expect(q2.detailedResponse).toContain('Winston');

    const q3 = findTutorAnswer('Why do Vladimir Vapnik support vectors define the entire classification margin?');
    expect(q3.referencedSection).toContain('Lesson 11.2');
    expect(q3.detailedResponse).toContain('Vapnik');
  });

  it('should resolve grounding anchors correctly for Lesson 11.2 topics', () => {
    expect(resolveValidSection('peter wason 2-4-6 task confirmation bias positive test strategy')).toBe(
      'Lesson 11.2 • Section 1: Peter Wason: The 2-4-6 Task & The Asymmetry of Falsification'
    );
    expect(resolveValidSection('patrick winston near-miss minimal pair feature isolation')).toBe(
      'Lesson 11.2 • Section 2: Patrick Winston: Near-Miss Learning & Single-Feature Isolation'
    );
    expect(resolveValidSection('vladimir vapnik support vector machine decision margin hyperplane')).toBe(
      'Lesson 11.2 • Section 3: Vapnik’s Support Vectors & The Optimal Decision Margin'
    );
  });

  it('should return TUTOR_SYSTEM_INSTRUCTION_LESSON_11_2 for boundary-cases-isolation', () => {
    const instruction = getTutorSystemInstruction('boundary-cases-isolation');
    expect(instruction).toContain('Lesson 11.2: "Feature Isolation & Boundary Testing');
    expect(instruction).toContain('Peter Wason');
    expect(instruction).toContain('Patrick Winston');
    expect(instruction).toContain('Vladimir Vapnik');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE', () => {
    expect(ALL_LESSONS['boundary-cases-isolation']).toBeDefined();
    const ch11 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-11-categorization');
    expect(ch11).toBeDefined();
    const lesson = ch11?.lessons.find(l => l.id === 'boundary-cases-isolation');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
