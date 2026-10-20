import { describe, it, expect } from 'vitest';
import { LESSON_HIERARCHICAL_KNOWLEDGE } from '../data/lesson8_2Data.ts';
import { ALL_LESSONS, PRIMARY_COURSE } from '../data/courseData.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';

describe('Lesson 8.2: Hierarchical Knowledge Representation Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_HIERARCHICAL_KNOWLEDGE.id).toBe('hierarchical-knowledge-representation');
    expect(LESSON_HIERARCHICAL_KNOWLEDGE.chapterId).toBe('ch-8-chunking-schemas');
    expect(LESSON_HIERARCHICAL_KNOWLEDGE.number).toBe('8.2');
    expect(LESSON_HIERARCHICAL_KNOWLEDGE.title).toBe('Hierarchical Knowledge Representation');
    expect(LESSON_HIERARCHICAL_KNOWLEDGE.readingTimeMinutes).toBeGreaterThanOrEqual(15);
    expect(LESSON_HIERARCHICAL_KNOWLEDGE.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_HIERARCHICAL_KNOWLEDGE;
    expect(curiosityQuestion.headline).toContain('isolated flashcards');
    expect(curiosityQuestion.teaser).toContain('hierarchically');
    expect(curiosityQuestion.hookNote).toContain('Allan M. Collins');
    expect(curiosityQuestion.hookNote).toContain('M. Ross Quillian');
    expect(curiosityQuestion.hookNote).toContain('Eleanor Rosch');
    expect(curiosityQuestion.hookNote).toContain('Michelene Chi');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_HIERARCHICAL_KNOWLEDGE;
    expect(prediction.options.length).toBe(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-hierarchical-traversal-superiority');
    expect(prediction.outcome.headline).toContain('Collins & Quillian, 1969');
    expect(prediction.outcome.explanation).toContain('hierarchical taxonomy');
    expect(prediction.outcome.optionFeedback['opt-flat-search-identical']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-hierarchical-traversal-superiority']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-flat-flexibility-boost']).toBeDefined();
    expect(prediction.outcome.comparisons.length).toBe(3);
    expect(prediction.outcome.evidenceDistinction).toBeTruthy();
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_HIERARCHICAL_KNOWLEDGE;
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

  it('should provide a 4-stage interactive hierarchical knowledge architecture diagram', () => {
    const { diagram } = LESSON_HIERARCHICAL_KNOWLEDGE;
    expect(diagram.stages.length).toBe(4);
    expect(diagram.stages[0].id).toBe('stage-superordinate-root-abstraction');
    expect(diagram.stages[1].id).toBe('stage-basic-level-conceptual-anchors');
    expect(diagram.stages[2].id).toBe('stage-subordinate-specialization-nodes');
    expect(diagram.stages[3].id).toBe('stage-lateral-cross-hierarchy-links');
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_HIERARCHICAL_KNOWLEDGE;
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
    const { quiz } = LESSON_HIERARCHICAL_KNOWLEDGE;
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
    const { practicalTask } = LESSON_HIERARCHICAL_KNOWLEDGE;
    expect(practicalTask.steps.length).toBe(3);
    expect(practicalTask.steps[0].title).toContain('3-Tier');
    expect(practicalTask.steps[1].title).toContain('Cognitive Economy');
    expect(practicalTask.steps[2].title).toContain('Diagnostic Fault Tree');
  });

  it('should register all Lesson 8.2 concepts in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:collins_quillian_hierarchical_network_model',
      'concept:rosch_basic_level_categories_primacy',
      'concept:chi_expert_deep_structure_categorization',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const entry = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(entry.keyCriteria.length).toBeGreaterThanOrEqual(3);
      expect(entry.canonicalAnswer.length).toBeGreaterThan(50);
      expect(entry.lessonSectionAnchor).toContain('Lesson 8.2');
    });
  });

  it('should register all Lesson 8.2 misconceptions in KNOWN_MISCONCEPTIONS', () => {
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:flat_facts_equal_deep_expertise');
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:surface_features_guide_correct_triage');
  });

  it('should provide accurate offline tutor knowledge base answers for Lesson 8.2 queries', () => {
    const q1 = findTutorAnswer('How did Collins and Quillian demonstrate cognitive economy and semantic networks?');
    expect(q1.referencedSection).toContain('Lesson 8.2');
    expect(q1.detailedResponse).toContain('Collins');

    const q2 = findTutorAnswer('Why are Eleanor Rosch basic-level categories cognitively privileged?');
    expect(q2.referencedSection).toContain('Lesson 8.2');
    expect(q2.detailedResponse).toContain('Rosch');

    const q3 = findTutorAnswer('How did Michelene Chi demonstrate that physics experts categorize by deep structure?');
    expect(q3.referencedSection).toContain('Lesson 8.2');
    expect(q3.detailedResponse).toContain('Chi');
  });

  it('should resolve grounding anchors correctly for Lesson 8.2 topics', () => {
    expect(resolveValidSection('collins quillian cognitive economy')).toBe(
      'Lesson 8.2 • Section 1: Collins & Quillian: Hierarchical Network Model & Cognitive Economy'
    );
    expect(resolveValidSection('eleanor rosch basic level categories')).toBe(
      'Lesson 8.2 • Section 2: Eleanor Rosch: Basic-Level Categories & The Cognitive Default'
    );
    expect(resolveValidSection('michelene chi deep structure physics')).toBe(
      'Lesson 8.2 • Section 3: Michelene Chi: Deep Structure vs Surface Features in Problem Representation'
    );
  });

  it('should return TUTOR_SYSTEM_INSTRUCTION_LESSON_8_2 for hierarchical-knowledge-representation', () => {
    const instruction = getTutorSystemInstruction('hierarchical-knowledge-representation');
    expect(instruction).toContain('Lesson 8.2: "Hierarchical Knowledge Representation');
    expect(instruction).toContain('Collins & Quillian');
    expect(instruction).toContain('Eleanor Rosch');
    expect(instruction).toContain('Michelene Chi');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE', () => {
    expect(ALL_LESSONS['hierarchical-knowledge-representation']).toBeDefined();
    const ch8 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-8-chunking-schemas');
    expect(ch8).toBeDefined();
    const lesson = ch8?.lessons.find(l => l.id === 'hierarchical-knowledge-representation');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
