import { describe, it, expect } from 'vitest';
import { LESSON_DIAGRAMMATIC_REASONING } from '../data/lesson10_2Data.ts';
import { ALL_LESSONS, PRIMARY_COURSE } from '../data/courseData.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';

describe('Lesson 10.2: Spatial and Diagrammatic Reasoning Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_DIAGRAMMATIC_REASONING.id).toBe('diagrammatic-reasoning');
    expect(LESSON_DIAGRAMMATIC_REASONING.chapterId).toBe('ch-10-dual-coding');
    expect(LESSON_DIAGRAMMATIC_REASONING.number).toBe('10.2');
    expect(LESSON_DIAGRAMMATIC_REASONING.title).toBe('Spatial and Diagrammatic Reasoning');
    expect(LESSON_DIAGRAMMATIC_REASONING.readingTimeMinutes).toBeGreaterThanOrEqual(14);
    expect(LESSON_DIAGRAMMATIC_REASONING.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_DIAGRAMMATIC_REASONING;
    expect(curiosityQuestion.headline).toContain('architectural dependency graph');
    expect(curiosityQuestion.teaser).toContain('external computing device');
    expect(curiosityQuestion.hookNote).toContain('Jill H. Larkin');
    expect(curiosityQuestion.hookNote).toContain('Herbert A. Simon');
    expect(curiosityQuestion.hookNote).toContain('1987');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_DIAGRAMMATIC_REASONING;
    expect(prediction.options.length).toBe(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-diagrammatic-computational-advantage');
    expect(prediction.outcome.headline).toContain('Larkin & Simon, 1987');
    expect(prediction.outcome.explanation).toContain('Informational Equivalence');
    expect(prediction.outcome.explanation).toContain('Computational Equivalence');
    expect(prediction.outcome.optionFeedback['opt-sentential-codebase-precision']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-diagrammatic-computational-advantage']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-diagram-ambiguity-penalty']).toBeDefined();
    expect(prediction.outcome.comparisons.length).toBe(2);
    expect(prediction.outcome.evidenceDistinction).toBeTruthy();
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_DIAGRAMMATIC_REASONING;
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

  it('should provide a 4-stage interactive diagrammatic advantage simulator', () => {
    const { diagram } = LESSON_DIAGRAMMATIC_REASONING;
    expect(diagram.stages.length).toBe(4);
    expect(diagram.stages[0].id).toBe('stage-sentential-linear-search');
    expect(diagram.stages[1].id).toBe('stage-spatial-perceptual-indexing');
    expect(diagram.stages[2].id).toBe('stage-preattentive-inference-operators');
    expect(diagram.stages[3].id).toBe('stage-epistemic-external-buffer');
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_DIAGRAMMATIC_REASONING;
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
    const { quiz } = LESSON_DIAGRAMMATIC_REASONING;
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
    const { practicalTask } = LESSON_DIAGRAMMATIC_REASONING;
    expect(practicalTask.steps.length).toBe(3);
    expect(practicalTask.steps[0].title).toContain('Spatial Locality');
    expect(practicalTask.steps[1].title).toContain('Tversky Congruence');
    expect(practicalTask.steps[2].title).toContain('Epistemic Action');
  });

  it('should register all Lesson 10.2 concepts in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:larkin_simon_diagrammatic_computational_equivalence',
      'concept:kirsh_maglio_epistemic_actions_external_buffers',
      'concept:tversky_spatial_schemas_graphic_cartography',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const entry = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(entry.keyCriteria.length).toBeGreaterThanOrEqual(3);
      expect(entry.canonicalAnswer.length).toBeGreaterThan(50);
      expect(entry.lessonSectionAnchor).toContain('Lesson 10.2');
    });
  });

  it('should register all Lesson 10.2 misconceptions in KNOWN_MISCONCEPTIONS', () => {
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:informational_equivalence_implies_computational_equivalence');
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:thinking_is_purely_internal_to_the_skull');
  });

  it('should provide accurate offline tutor knowledge base answers for Lesson 10.2 queries', () => {
    const q1 = findTutorAnswer('How did Larkin and Simon define informational versus computational equivalence in diagrams?');
    expect(q1.referencedSection).toContain('Lesson 10.2');
    expect(q1.detailedResponse).toContain('Larkin');

    const q2 = findTutorAnswer('What are epistemic actions in Kirsh and Maglio and how do external memory buffers work?');
    expect(q2.referencedSection).toContain('Lesson 10.2');
    expect(q2.detailedResponse).toContain('Kirsh');

    const q3 = findTutorAnswer('How does Barbara Tversky spatial schemas and principle of congruence guide diagrams?');
    expect(q3.referencedSection).toContain('Lesson 10.2');
    expect(q3.detailedResponse).toContain('Tversky');
  });

  it('should resolve grounding anchors correctly for Lesson 10.2 topics', () => {
    expect(resolveValidSection('larkin and herbert simon computational equivalence perceptual indexing')).toBe(
      'Lesson 10.2 • Section 1: Larkin & Simon: Informational vs Computational Equivalence'
    );
    expect(resolveValidSection('kirsh maglio epistemic action external memory buffer distributed cognition')).toBe(
      'Lesson 10.2 • Section 2: Kirsh & Maglio: Epistemic Actions & External Memory Buffers'
    );
    expect(resolveValidSection('barbara tversky spatial schema principle of congruence apprehension')).toBe(
      'Lesson 10.2 • Section 3: Barbara Tversky: Spatial Schemas & Graphic Cartography'
    );
  });

  it('should return TUTOR_SYSTEM_INSTRUCTION_LESSON_10_2 for diagrammatic-reasoning', () => {
    const instruction = getTutorSystemInstruction('diagrammatic-reasoning');
    expect(instruction).toContain('Lesson 10.2: "Spatial and Diagrammatic Reasoning');
    expect(instruction).toContain('Jill H. Larkin');
    expect(instruction).toContain('David Kirsh');
    expect(instruction).toContain('Barbara Tversky');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE', () => {
    expect(ALL_LESSONS['diagrammatic-reasoning']).toBeDefined();
    const ch10 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-10-dual-coding');
    expect(ch10).toBeDefined();
    const lesson = ch10?.lessons.find(l => l.id === 'diagrammatic-reasoning');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
