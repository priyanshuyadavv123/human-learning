import { describe, it, expect } from 'vitest';
import { LESSON_CONDITIONS_FOR_FAR_TRANSFER } from '../data/lesson16_2Data.ts';
import { ALL_LESSONS, PRIMARY_COURSE } from '../data/courseData.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';

describe('Lesson 16.2: Conditions for Far Transfer Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_CONDITIONS_FOR_FAR_TRANSFER.id).toBe('conditions-for-far-transfer');
    expect(LESSON_CONDITIONS_FOR_FAR_TRANSFER.chapterId).toBe('ch-16-transfer');
    expect(LESSON_CONDITIONS_FOR_FAR_TRANSFER.number).toBe('16.2');
    expect(LESSON_CONDITIONS_FOR_FAR_TRANSFER.title).toBe('Conditions for Far Transfer');
    expect(LESSON_CONDITIONS_FOR_FAR_TRANSFER.readingTimeMinutes).toBeGreaterThanOrEqual(16);
    expect(LESSON_CONDITIONS_FOR_FAR_TRANSFER.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_CONDITIONS_FOR_FAR_TRANSFER;
    expect(curiosityQuestion.headline).toContain('80%');
    expect(curiosityQuestion.teaser).toContain('surface noise');
    expect(curiosityQuestion.hookNote).toContain('Gick and Keith Holyoak');
    expect(curiosityQuestion.hookNote).toContain('Radiation Problem');
    expect(curiosityQuestion.hookNote).toContain('Dedre Gentner');
    expect(curiosityQuestion.hookNote).toContain('Bransford');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_CONDITIONS_FOR_FAR_TRANSFER;
    expect(prediction.options.length).toBe(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-academy-b-schema-induction-far-transfer');
    expect(prediction.outcome.headline).toContain('Schema Induction Unlocks Far Transfer');
    expect(prediction.outcome.explanation).toContain('Gick & Holyoak, 1983');
    expect(prediction.outcome.optionFeedback['opt-academy-a-deep-domain-superior']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-academy-b-schema-induction-far-transfer']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-equivalent-technical-capacity']).toBeDefined();
    expect(prediction.outcome.comparisons.length).toBe(2);
    expect(prediction.outcome.evidenceDistinction).toBeTruthy();
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_CONDITIONS_FOR_FAR_TRANSFER;
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

  it('should provide a 4-stage interactive analogical schema induction simulator diagram', () => {
    const { diagram } = LESSON_CONDITIONS_FOR_FAR_TRANSFER;
    expect(diagram.stages.length).toBe(4);
    expect(diagram.stages[0].id).toBe('stage-case-presentation-alignment');
    expect(diagram.stages[1].id).toBe('stage-surface-noise-filtering');
    expect(diagram.stages[2].id).toBe('stage-abstract-schema-induction');
    expect(diagram.stages[3].id).toBe('stage-far-transfer-execution');
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_CONDITIONS_FOR_FAR_TRANSFER;
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
    const { quiz } = LESSON_CONDITIONS_FOR_FAR_TRANSFER;
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
    const { practicalTask } = LESSON_CONDITIONS_FOR_FAR_TRANSFER;
    expect(practicalTask.steps.length).toBe(3);
    expect(practicalTask.steps[0].title).toContain('Contrasting Analogs');
    expect(practicalTask.steps[1].title).toContain('Mutual Structural Alignment');
    expect(practicalTask.steps[2].title).toContain('Jargon-Free Law');
  });

  it('should register all Lesson 16.2 concepts in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:gick_holyoak_schema_induction_dual_analog',
      'concept:gentner_analogical_encoding_mutual_alignment',
      'concept:bransford_schwartz_preparation_for_future_learning',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const entry = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(entry.keyCriteria.length).toBeGreaterThanOrEqual(3);
      expect(entry.canonicalAnswer.length).toBeGreaterThan(50);
      expect(entry.lessonSectionAnchor).toContain('Lesson 16.2');
    });
  });

  it('should register all Lesson 16.2 misconceptions in KNOWN_MISCONCEPTIONS', () => {
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:single_deep_example_sufficient_for_far_transfer');
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:direct_sequestered_testing_equals_true_adaptive_capacity');
  });

  it('should provide accurate offline tutor knowledge base answers for Lesson 16.2 queries', () => {
    const q1 = findTutorAnswer('how does mary gick and keith holyoak schema induction dual analog work?');
    expect(q1.referencedSection).toContain('Lesson 16.2');
    expect(q1.detailedResponse).toContain('Gick');

    const q2 = findTutorAnswer('what is dedre gentner analogical encoding and mutual structural alignment?');
    expect(q2.referencedSection).toContain('Lesson 16.2');
    expect(q2.detailedResponse).toContain('Gentner');

    const q3 = findTutorAnswer('what is bransford and schwartz preparation for future learning pfl framework?');
    expect(q3.referencedSection).toContain('Lesson 16.2');
    expect(q3.detailedResponse).toContain('Bransford');
  });

  it('should resolve grounding anchors correctly for Lesson 16.2 topics', () => {
    expect(resolveValidSection('mary gick keith holyoak schema induction dual analog radiation problem')).toBe(
      'Lesson 16.2 • Section 1: Gick & Holyoak (1980, 1983): The Architecture of Schema Induction'
    );
    expect(resolveValidSection('dedre gentner analogical encoding mutual alignment relational roles')).toBe(
      'Lesson 16.2 • Section 2: Dedre Gentner (2003): Analogical Encoding & Mutual Alignment'
    );
    expect(resolveValidSection('john bransford daniel schwartz preparation for future learning pfl sequestration')).toBe(
      'Lesson 16.2 • Section 3: Bransford & Schwartz (1999): Preparation for Future Learning (PFL)'
    );
  });

  it('should return TUTOR_SYSTEM_INSTRUCTION_LESSON_16_2 for conditions-for-far-transfer', () => {
    const instruction = getTutorSystemInstruction('conditions-for-far-transfer');
    expect(instruction).toContain('Lesson 16.2: "Conditions for Far Transfer');
    expect(instruction).toContain('Gick');
    expect(instruction).toContain('Gentner');
    expect(instruction).toContain('Bransford');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE', () => {
    expect(ALL_LESSONS['conditions-for-far-transfer']).toBeDefined();
    const ch16 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-16-transfer');
    expect(ch16).toBeDefined();
    const lesson = ch16?.lessons.find(l => l.id === 'conditions-for-far-transfer');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
