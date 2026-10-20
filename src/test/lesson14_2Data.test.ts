import { describe, it, expect } from 'vitest';
import { LESSON_VARIED_PRACTICE_TRANSFER } from '../data/lesson14_2Data.ts';
import { ALL_LESSONS, PRIMARY_COURSE } from '../data/courseData.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';

describe('Lesson 14.2: Varied Practice & Structural Invariance Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_VARIED_PRACTICE_TRANSFER.id).toBe('varied-practice-transfer');
    expect(LESSON_VARIED_PRACTICE_TRANSFER.chapterId).toBe('ch-14-interleaving');
    expect(LESSON_VARIED_PRACTICE_TRANSFER.number).toBe('14.2');
    expect(LESSON_VARIED_PRACTICE_TRANSFER.title).toBe('Varied Practice & Structural Invariance');
    expect(LESSON_VARIED_PRACTICE_TRANSFER.readingTimeMinutes).toBeGreaterThanOrEqual(14);
    expect(LESSON_VARIED_PRACTICE_TRANSFER.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_VARIED_PRACTICE_TRANSFER;
    expect(curiosityQuestion.headline).toContain('beanbags');
    expect(curiosityQuestion.teaser).toContain('structural invariants');
    expect(curiosityQuestion.hookNote).toContain('Robert Kerr');
    expect(curiosityQuestion.hookNote).toContain('Bernard Booth');
    expect(curiosityQuestion.hookNote).toContain('Richard Schmidt');
    expect(curiosityQuestion.hookNote).toContain('Smith, Glenberg & Bjork');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_VARIED_PRACTICE_TRANSFER;
    expect(prediction.options.length).toBe(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-sofia-varied-invariant-abstraction');
    expect(prediction.outcome.headline).toContain('The Varied Practice Paradox');
    expect(prediction.outcome.explanation).toContain('Schmidt, 1975');
    expect(prediction.outcome.optionFeedback['opt-daniel-constant-groove-superior']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-sofia-varied-invariant-abstraction']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-equal-hardware-equivalence']).toBeDefined();
    expect(prediction.outcome.comparisons.length).toBe(2);
    expect(prediction.outcome.evidenceDistinction).toBeTruthy();
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_VARIED_PRACTICE_TRANSFER;
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

  it('should provide a 4-stage interactive parameter invariance simulator diagram', () => {
    const { diagram } = LESSON_VARIED_PRACTICE_TRANSFER;
    expect(diagram.stages.length).toBe(4);
    expect(diagram.stages[0].id).toBe('stage-constant-overfitting');
    expect(diagram.stages[1].id).toBe('stage-varied-parameter-perturbation');
    expect(diagram.stages[2].id).toBe('stage-schema-abstraction-interpolation');
    expect(diagram.stages[3].id).toBe('stage-multi-context-robustness');
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_VARIED_PRACTICE_TRANSFER;
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
    const { quiz } = LESSON_VARIED_PRACTICE_TRANSFER;
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
    const { practicalTask } = LESSON_VARIED_PRACTICE_TRANSFER;
    expect(practicalTask.steps.length).toBe(3);
    expect(practicalTask.steps[0].title).toContain('Structural Invariants vs. Mutable Parameters');
    expect(practicalTask.steps[1].title).toContain('Boundary-Bracketing Drills');
    expect(practicalTask.steps[2].title).toContain('Environmental Scaffolding');
  });

  it('should register all Lesson 14.2 concepts in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:schmidt_schema_theory_generalized_motor_program',
      'concept:kerr_booth_variable_practice_interpolation',
      'concept:encoding_variability_multi_context_robustness',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const entry = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(entry.keyCriteria.length).toBeGreaterThanOrEqual(3);
      expect(entry.canonicalAnswer.length).toBeGreaterThan(50);
      expect(entry.lessonSectionAnchor).toContain('Lesson 14.2');
    });
  });

  it('should register all Lesson 14.2 misconceptions in KNOWN_MISCONCEPTIONS', () => {
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:constant_practice_builds_narrow_grooves_for_exact_targets');
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:environmental_consistency_optimizes_generalized_retrieval');
  });

  it('should provide accurate offline tutor knowledge base answers for Lesson 14.2 queries', () => {
    const q1 = findTutorAnswer('what is schmidt schema theory and generalized motor programs?');
    expect(q1.referencedSection).toContain('Lesson 14.2');
    expect(q1.detailedResponse).toContain('Schmidt');

    const q2 = findTutorAnswer('how did kerr and booth prove target interpolation with beanbag tosses?');
    expect(q2.referencedSection).toContain('Lesson 14.2');
    expect(q2.detailedResponse).toContain('Kerr');

    const q3 = findTutorAnswer('how does smith glenberg and bjork multi-context encoding variability work?');
    expect(q3.referencedSection).toContain('Lesson 14.2');
    expect(q3.detailedResponse).toContain('Smith');
  });

  it('should resolve grounding anchors correctly for Lesson 14.2 topics', () => {
    expect(resolveValidSection('richard schmidt 1975 schema theory generalized motor programs invariants parameters')).toBe(
      'Lesson 14.2 • Section 1: Richard Schmidt (1975): Schema Theory & Generalized Motor Programs'
    );
    expect(resolveValidSection('kerr booth target interpolation beanbag 3-foot 5-foot')).toBe(
      'Lesson 14.2 • Section 2: Kerr & Booth (1978): The Target Interpolation Effect'
    );
    expect(resolveValidSection('smith glenberg bjork multi-context encoding variability room-dependent')).toBe(
      'Lesson 14.2 • Section 3: Smith, Glenberg & Bjork (1978): Encoding Variability & Multi-Context Robustness'
    );
  });

  it('should return TUTOR_SYSTEM_INSTRUCTION_LESSON_14_2 for varied-practice-transfer', () => {
    const instruction = getTutorSystemInstruction('varied-practice-transfer');
    expect(instruction).toContain('Lesson 14.2: "Varied Practice & Structural Invariance');
    expect(instruction).toContain('Schmidt');
    expect(instruction).toContain('Kerr');
    expect(instruction).toContain('Smith');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE', () => {
    expect(ALL_LESSONS['varied-practice-transfer']).toBeDefined();
    const ch14 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-14-interleaving');
    expect(ch14).toBeDefined();
    const lesson = ch14?.lessons.find(l => l.id === 'varied-practice-transfer');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
