import { describe, it, expect } from 'vitest';
import { LESSON_PRODUCTIVE_FAILURE_GENERATION } from '../data/lesson15_1Data.ts';
import { ALL_LESSONS, PRIMARY_COURSE } from '../data/courseData.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';

describe('Lesson 15.1: Productive Failure & Generation Effects Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_PRODUCTIVE_FAILURE_GENERATION.id).toBe('productive-failure-generation');
    expect(LESSON_PRODUCTIVE_FAILURE_GENERATION.chapterId).toBe('ch-15-error-driven');
    expect(LESSON_PRODUCTIVE_FAILURE_GENERATION.number).toBe('15.1');
    expect(LESSON_PRODUCTIVE_FAILURE_GENERATION.title).toBe('Productive Failure & Generation Effects');
    expect(LESSON_PRODUCTIVE_FAILURE_GENERATION.readingTimeMinutes).toBeGreaterThanOrEqual(14);
    expect(LESSON_PRODUCTIVE_FAILURE_GENERATION.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_PRODUCTIVE_FAILURE_GENERATION;
    expect(curiosityQuestion.headline).toContain('struggle and fail');
    expect(curiosityQuestion.teaser).toContain('canonical instruction');
    expect(curiosityQuestion.hookNote).toContain('errorless learning');
    expect(curiosityQuestion.hookNote).toContain('Manu Kapur');
    expect(curiosityQuestion.hookNote).toContain('Bjork');
    expect(curiosityQuestion.hookNote).toContain('Janet Metcalfe');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_PRODUCTIVE_FAILURE_GENERATION;
    expect(prediction.options.length).toBe(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-group-b-productive-failure-transfer');
    expect(prediction.outcome.headline).toContain('The Productive Failure Effect');
    expect(prediction.outcome.explanation).toContain('Kapur, 2012');
    expect(prediction.outcome.optionFeedback['opt-group-a-direct-instruction-superior']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-group-b-productive-failure-transfer']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-equivalent-knowledge-delivery']).toBeDefined();
    expect(prediction.outcome.comparisons.length).toBe(2);
    expect(prediction.outcome.evidenceDistinction).toBeTruthy();
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_PRODUCTIVE_FAILURE_GENERATION;
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

  it('should provide a 4-stage interactive productive failure simulator diagram', () => {
    const { diagram } = LESSON_PRODUCTIVE_FAILURE_GENERATION;
    expect(diagram.stages.length).toBe(4);
    expect(diagram.stages[0].id).toBe('stage-exploratory-struggle');
    expect(diagram.stages[1].id).toBe('stage-knowledge-gap-awareness');
    expect(diagram.stages[2].id).toBe('stage-canonical-consolidation');
    expect(diagram.stages[3].id).toBe('stage-hypercorrection-transfer');
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_PRODUCTIVE_FAILURE_GENERATION;
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
    const { quiz } = LESSON_PRODUCTIVE_FAILURE_GENERATION;
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
    const { practicalTask } = LESSON_PRODUCTIVE_FAILURE_GENERATION;
    expect(practicalTask.steps.length).toBe(3);
    expect(practicalTask.steps[0].title).toContain('Invert the Instructional Sequence');
    expect(practicalTask.steps[1].title).toContain('Explicit Pre-Test Betting');
    expect(practicalTask.steps[2].title).toContain('Canonical Contrastive Synthesis');
  });

  it('should register all Lesson 15.1 concepts in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:kapur_productive_failure_schema_priming',
      'concept:bjork_pretesting_generation_gap_activation',
      'concept:metcalfe_hypercorrection_epistemic_curiosity',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const entry = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(entry.keyCriteria.length).toBeGreaterThanOrEqual(3);
      expect(entry.canonicalAnswer.length).toBeGreaterThan(50);
      expect(entry.lessonSectionAnchor).toContain('Lesson 15.1');
    });
  });

  it('should register all Lesson 15.1 misconceptions in KNOWN_MISCONCEPTIONS', () => {
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:errors_in_early_learning_ingrain_destructive_bad_habits');
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:direct_instruction_first_is_always_more_efficient');
  });

  it('should provide accurate offline tutor knowledge base answers for Lesson 15.1 queries', () => {
    const q1 = findTutorAnswer('what is manu kapur productive failure and canonical consolidation?');
    expect(q1.referencedSection).toContain('Lesson 15.1');
    expect(q1.detailedResponse).toContain('Kapur');

    const q2 = findTutorAnswer('how does bjork pretesting effect and generation gap work with wrong guesses?');
    expect(q2.referencedSection).toContain('Lesson 15.1');
    expect(q2.detailedResponse).toContain('Bjork');

    const q3 = findTutorAnswer('what is janet metcalfe hypercorrection effect and p300 prediction error?');
    expect(q3.referencedSection).toContain('Lesson 15.1');
    expect(q3.detailedResponse).toContain('Metcalfe');
  });

  it('should resolve grounding anchors correctly for Lesson 15.1 topics', () => {
    expect(resolveValidSection('manu kapur productive failure canonical consolidation unguided exploration')).toBe(
      'Lesson 15.1 • Section 1: Manu Kapur (2008, 2012): The Architecture of Productive Failure'
    );
    expect(resolveValidSection('elizabeth robert bjork pretesting effect generation gap spreading activation')).toBe(
      'Lesson 15.1 • Section 2: Elizabeth & Robert Bjork (2011): The Pre-Testing & Generation Gap Effect'
    );
    expect(resolveValidSection('janet metcalfe hypercorrection effect high confidence error prediction error p300')).toBe(
      'Lesson 15.1 • Section 3: Janet Metcalfe (2017): Error-Driven Learning & The Hypercorrection Effect'
    );
  });

  it('should return TUTOR_SYSTEM_INSTRUCTION_LESSON_15_1 for productive-failure-generation', () => {
    const instruction = getTutorSystemInstruction('productive-failure-generation');
    expect(instruction).toContain('Lesson 15.1: "Productive Failure & Generation Effects');
    expect(instruction).toContain('Kapur');
    expect(instruction).toContain('Bjork');
    expect(instruction).toContain('Metcalfe');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE', () => {
    expect(ALL_LESSONS['productive-failure-generation']).toBeDefined();
    const ch15 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-15-error-driven');
    expect(ch15).toBeDefined();
    const lesson = ch15?.lessons.find(l => l.id === 'productive-failure-generation');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
