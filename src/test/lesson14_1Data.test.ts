import { describe, it, expect } from 'vitest';
import { LESSON_BLOCKED_VS_INTERLEAVED_PRACTICE } from '../data/lesson14_1Data.ts';
import { ALL_LESSONS, PRIMARY_COURSE } from '../data/courseData.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';

describe('Lesson 14.1: Blocked vs. Interleaved Practice Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_BLOCKED_VS_INTERLEAVED_PRACTICE.id).toBe('blocked-vs-interleaved-practice');
    expect(LESSON_BLOCKED_VS_INTERLEAVED_PRACTICE.chapterId).toBe('ch-14-interleaving');
    expect(LESSON_BLOCKED_VS_INTERLEAVED_PRACTICE.number).toBe('14.1');
    expect(LESSON_BLOCKED_VS_INTERLEAVED_PRACTICE.title).toBe('Blocked vs. Interleaved Practice');
    expect(LESSON_BLOCKED_VS_INTERLEAVED_PRACTICE.readingTimeMinutes).toBeGreaterThanOrEqual(14);
    expect(LESSON_BLOCKED_VS_INTERLEAVED_PRACTICE.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_BLOCKED_VS_INTERLEAVED_PRACTICE;
    expect(curiosityQuestion.headline).toContain('practice schedule');
    expect(curiosityQuestion.teaser).toContain('strategy selection');
    expect(curiosityQuestion.hookNote).toContain('Robert Bjork');
    expect(curiosityQuestion.hookNote).toContain('Nate Kornell');
    expect(curiosityQuestion.hookNote).toMatch(/Shea|Morgan/);
    expect(curiosityQuestion.hookNote).toMatch(/Rohrer|Taylor/);
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_BLOCKED_VS_INTERLEAVED_PRACTICE;
    expect(prediction.options.length).toBe(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-interleaved-superior-metacognitive-reversal');
    expect(prediction.outcome.headline).toContain('Contextual Interference Effect');
    expect(prediction.outcome.explanation).toContain('working memory buffer');
    expect(prediction.outcome.optionFeedback['opt-blocked-superior-schema-consolidation']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-interleaved-superior-accurate-metacognition']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-interleaved-superior-metacognitive-reversal']).toBeDefined();
    expect(prediction.outcome.comparisons.length).toBe(2);
    expect(prediction.outcome.evidenceDistinction).toBeTruthy();
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_BLOCKED_VS_INTERLEAVED_PRACTICE;
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

  it('should provide a 4-stage interactive interleaving simulator diagram', () => {
    const { diagram } = LESSON_BLOCKED_VS_INTERLEAVED_PRACTICE;
    expect(diagram.stages.length).toBe(4);
    expect(diagram.stages[0].id).toBe('stage-blocked-acquisition');
    expect(diagram.stages[1].id).toBe('stage-blocked-delayed-test');
    expect(diagram.stages[2].id).toBe('stage-interleaved-acquisition');
    expect(diagram.stages[3].id).toBe('stage-interleaved-delayed-test');
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_BLOCKED_VS_INTERLEAVED_PRACTICE;
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
    const { quiz } = LESSON_BLOCKED_VS_INTERLEAVED_PRACTICE;
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
    const { practicalTask } = LESSON_BLOCKED_VS_INTERLEAVED_PRACTICE;
    expect(practicalTask.steps.length).toBe(3);
    expect(practicalTask.steps[0].title).toContain('Cluster Confusable Categories');
    expect(practicalTask.steps[1].title).toContain('Problem Shuffling');
    expect(practicalTask.steps[2].title).toContain('Discriminative Boundaries');
  });

  it('should register all Lesson 14.1 concepts in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:shea_morgan_contextual_interference_effect',
      'concept:bjork_discriminative_contrast_hypothesis',
      'concept:rohrer_category_selection_retrieval_effort',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const entry = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(entry.keyCriteria.length).toBeGreaterThanOrEqual(3);
      expect(entry.canonicalAnswer.length).toBeGreaterThan(50);
      expect(entry.lessonSectionAnchor).toContain('Lesson 14.1');
    });
  });

  it('should register all Lesson 14.1 misconceptions in KNOWN_MISCONCEPTIONS', () => {
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:blocked_practice_yields_superior_retention');
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:interleaving_causes_destructive_interference');
  });

  it('should provide accurate offline tutor knowledge base answers for Lesson 14.1 queries', () => {
    const q1 = findTutorAnswer('what did shea and morgan find about contextual interference in random schedules?');
    expect(q1.referencedSection).toContain('Lesson 14.1');
    expect(q1.detailedResponse).toContain('Shea');

    const q2 = findTutorAnswer('how does bjork and kornell discriminative contrast hypothesis explain painting styles?');
    expect(q2.referencedSection).toContain('Lesson 14.1');
    expect(q2.detailedResponse).toContain('Kornell');

    const q3 = findTutorAnswer('why does category selection and execution in rohrer and taylor mathematics matter?');
    expect(q3.referencedSection).toContain('Lesson 14.1');
    expect(q3.detailedResponse).toContain('Rohrer');
  });

  it('should resolve grounding anchors correctly for Lesson 14.1 topics', () => {
    expect(resolveValidSection('john shea richard morgan contextual interference random schedule')).toBe(
      'Lesson 14.1 • Section 1: The Contextual Interference Effect: Performance vs. Learning'
    );
    expect(resolveValidSection('discriminative contrast kornell bjork painting styles')).toBe(
      'Lesson 14.1 • Section 2: The Discriminative Contrast Hypothesis: Learning What Makes Categories Different'
    );
    expect(resolveValidSection('doug rohrer kelli taylor category selection mathematics problem shuffling')).toBe(
      'Lesson 14.1 • Section 3: Category Selection vs. Execution: The Mathematics & Problem-Solving Deficit'
    );
  });

  it('should return TUTOR_SYSTEM_INSTRUCTION_LESSON_14_1 for blocked-vs-interleaved-practice', () => {
    const instruction = getTutorSystemInstruction('blocked-vs-interleaved-practice');
    expect(instruction).toContain('Lesson 14.1: "Blocked vs. Interleaved Practice');
    expect(instruction).toContain('Shea');
    expect(instruction).toContain('Kornell');
    expect(instruction).toContain('Rohrer');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE', () => {
    expect(ALL_LESSONS['blocked-vs-interleaved-practice']).toBeDefined();
    const ch14 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-14-interleaving');
    expect(ch14).toBeDefined();
    const lesson = ch14?.lessons.find(l => l.id === 'blocked-vs-interleaved-practice');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
