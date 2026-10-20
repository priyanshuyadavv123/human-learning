import { describe, it, expect } from 'vitest';
import { LESSON_CHUNKING_MECHANICS } from '../data/lesson8_1Data.ts';
import { ALL_LESSONS, PRIMARY_COURSE } from '../data/courseData.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { createDefaultConceptState } from '../services/memoryStorage.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';

describe('Lesson 8.1: The Mechanics of Chunking Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_CHUNKING_MECHANICS.id).toBe('chunking-mechanics');
    expect(LESSON_CHUNKING_MECHANICS.chapterId).toBe('ch-8-chunking-schemas');
    expect(LESSON_CHUNKING_MECHANICS.number).toBe('8.1');
    expect(LESSON_CHUNKING_MECHANICS.title).toBe('The Mechanics of Chunking');
    expect(LESSON_CHUNKING_MECHANICS.readingTimeMinutes).toBeGreaterThanOrEqual(15);
    expect(LESSON_CHUNKING_MECHANICS.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_CHUNKING_MECHANICS;
    expect(curiosityQuestion.headline).toContain('moving pieces in mind simultaneously');
    expect(curiosityQuestion.teaser).toContain('4-slot scratchpad');
    expect(curiosityQuestion.hookNote).toContain('Adriaan de Groot');
    expect(curiosityQuestion.hookNote).toContain('William G. Chase');
    expect(curiosityQuestion.hookNote).toContain('Herbert A. Simon');
    expect(curiosityQuestion.hookNote).toContain('50,000');
    expect(curiosityQuestion.hookNote).toContain('Ericsson');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_CHUNKING_MECHANICS;
    expect(prediction.options.length).toBe(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-schema-conditional-chunking');
    expect(prediction.outcome.explanation).toContain('Expertise does not upgrade the brain’s biological hardware');
    expect(prediction.outcome.explanation).toContain('Condition 1');
    expect(prediction.outcome.optionFeedback['opt-hardware-superiority']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-schema-conditional-chunking']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-beginner-freshness']).toBeDefined();
    expect(prediction.outcome.comparisons.length).toBe(3);
    expect(prediction.outcome.evidenceDistinction).toBeTruthy();
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_CHUNKING_MECHANICS;
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

  it('should provide a 4-stage interactive chunking & LTWM diagram', () => {
    const { diagram } = LESSON_CHUNKING_MECHANICS;
    expect(diagram.stages.length).toBe(4);
    expect(diagram.stages[0].id).toBe('stage-fragmented-novice-state');
    expect(diagram.stages[1].id).toBe('stage-relational-chunk-binding');
    expect(diagram.stages[2].id).toBe('stage-template-formation');
    expect(diagram.stages[3].id).toBe('stage-long-term-working-memory-indexing');
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_CHUNKING_MECHANICS;
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
    const { quiz } = LESSON_CHUNKING_MECHANICS;
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
    const { practicalTask } = LESSON_CHUNKING_MECHANICS;
    expect(practicalTask.steps.length).toBe(3);
    expect(practicalTask.steps[0].title).toContain('Cluster');
    expect(practicalTask.steps[1].title).toContain('Template');
    expect(practicalTask.steps[2].title).toContain('Long-Term Working Memory');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE', () => {
    expect(ALL_LESSONS['chunking-mechanics']).toBeDefined();
    const ch8 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-8-chunking-schemas');
    expect(ch8).toBeDefined();
    const lesson = ch8?.lessons.find(l => l.id === 'chunking-mechanics');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });

  it('should register canonical concept review prompts in conceptRegistry', () => {
    const c1 = CONCEPT_REGISTRY['concept:chunking_mechanics_relational_compression'];
    expect(c1).toBeDefined();
    expect(c1.title).toContain('Chunking Mechanics');
    expect(c1.keyCriteria.length).toBeGreaterThanOrEqual(3);

    const c2 = CONCEPT_REGISTRY['concept:template_theory_cores_slots_gobet'];
    expect(c2).toBeDefined();
    expect(c2.title).toContain('Template Theory');

    const c3 = CONCEPT_REGISTRY['concept:long_term_working_memory_retrieval_structures'];
    expect(c3).toBeDefined();
    expect(c3.title).toContain('Long-Term Working Memory');
  });

  it('should map concept states to Lesson 8.1 in memoryStorage', () => {
    const nowIso = new Date().toISOString();
    const state = createDefaultConceptState('concept:chunking_mechanics_relational_compression', nowIso);
    expect(state.lessonId).toBe('chunking-mechanics');
    expect(state.chapterId).toBe('ch-8-chunking-schemas');
  });

  it('should resolve grounding anchors and tutor instructions for Lesson 8.1', () => {
    expect(resolveValidSection('de groot chase simon chunking mechanics relational compression')).toBe(
      'Lesson 8.1 • Section 1: De Groot, Chase & Simon: The Empirical Foundations of Chunking'
    );
    expect(resolveValidSection('gobet template theory invariant core variable slots')).toBe(
      'Lesson 8.1 • Section 2: Gobet & Simon’s Template Theory: Slots, Cores & Rapid Adaptability'
    );
    expect(resolveValidSection('ericsson kintsch ltwm long-term working memory retrieval structure')).toBe(
      'Lesson 8.1 • Section 3: Ericsson & Kintsch: Long-Term Working Memory (LTWM)'
    );

    const instruction = getTutorSystemInstruction('chunking-mechanics');
    expect(instruction).toContain('De Groot');
    expect(instruction).toContain('Chase & Simon');
    expect(instruction).toContain('Template Theory');

    const fallbackAns = findTutorAnswer('tell me about de groot and chase simon chess chunking');
    expect(fallbackAns.title).toContain('De Groot');
  });
});
