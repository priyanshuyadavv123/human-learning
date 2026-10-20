import { describe, it, expect } from 'vitest';
import { LESSON_MEANS_END_WORKING_BACKWARD } from '../data/lesson17_1Data.ts';
import { ALL_LESSONS, PRIMARY_COURSE } from '../data/courseData.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';

describe('Lesson 17.1: Working Backward & Means-End Analysis Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_MEANS_END_WORKING_BACKWARD.id).toBe('means-end-working-backward');
    expect(LESSON_MEANS_END_WORKING_BACKWARD.chapterId).toBe('ch-17-heuristics');
    expect(LESSON_MEANS_END_WORKING_BACKWARD.number).toBe('17.1');
    expect(LESSON_MEANS_END_WORKING_BACKWARD.title).toBe('Working Backward & Means-End Analysis');
    expect(LESSON_MEANS_END_WORKING_BACKWARD.readingTimeMinutes).toBeGreaterThanOrEqual(14);
    expect(LESSON_MEANS_END_WORKING_BACKWARD.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_MEANS_END_WORKING_BACKWARD;
    expect(curiosityQuestion.headline).toContain('90%');
    expect(curiosityQuestion.teaser).toContain('combinatorial fan-out');
    expect(curiosityQuestion.hookNote).toContain('George Pólya');
    expect(curiosityQuestion.hookNote).toContain('Newell');
    expect(curiosityQuestion.hookNote).toContain('Means-Ends Analysis');
    expect(curiosityQuestion.hookNote).toContain('frontopolar');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_MEANS_END_WORKING_BACKWARD;
    expect(prediction.options.length).toBe(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-architect-b-means-ends-backward');
    expect(prediction.outcome.headline).toContain('Working Backward Neutralizes Combinatorial Explosion');
    expect(prediction.outcome.explanation).toContain('Newell & Simon’s (1972)');
    expect(prediction.outcome.optionFeedback['opt-architect-a-forward-exploration']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-architect-b-means-ends-backward']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-equivalent-planning-outcomes']).toBeDefined();
    expect(prediction.outcome.comparisons.length).toBe(2);
    expect(prediction.outcome.evidenceDistinction).toBeTruthy();
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_MEANS_END_WORKING_BACKWARD;
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

  it('should provide a 4-stage interactive decomposition engine simulator diagram', () => {
    const { diagram } = LESSON_MEANS_END_WORKING_BACKWARD;
    expect(diagram.stages.length).toBe(4);
    expect(diagram.stages[0].id).toBe('stage-goal-state-specification');
    expect(diagram.stages[1].id).toBe('stage-regressive-difference-reduction');
    expect(diagram.stages[2].id).toBe('stage-hierarchical-subgoal-stacking');
    expect(diagram.stages[3].id).toBe('stage-forward-execution-dopaminergic-drive');
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_MEANS_END_WORKING_BACKWARD;
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
    const { quiz } = LESSON_MEANS_END_WORKING_BACKWARD;
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
    const { practicalTask } = LESSON_MEANS_END_WORKING_BACKWARD;
    expect(practicalTask.steps.length).toBe(3);
    expect(practicalTask.steps[0].title).toContain('Exact Goal State Invariants');
    expect(practicalTask.steps[1].title).toContain('Backward Regression Chain');
    expect(practicalTask.steps[2].title).toContain('Directed Acyclic Graph');
  });

  it('should register all Lesson 17.1 concepts in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:newell_simon_means_ends_analysis_problem_space',
      'concept:polya_working_backward_regressus_heuristic',
      'concept:frontopolar_cortex_ba10_subgoal_branching',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const entry = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(entry.keyCriteria.length).toBeGreaterThanOrEqual(3);
      expect(entry.canonicalAnswer.length).toBeGreaterThan(50);
      expect(entry.lessonSectionAnchor).toContain('Lesson 17.1');
    });
  });

  it('should register all Lesson 17.1 misconceptions in KNOWN_MISCONCEPTIONS', () => {
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:forward_trial_and_error_is_most_natural_and_efficient');
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:hill_climbing_always_leads_to_global_optimum');
  });

  it('should provide accurate offline tutor knowledge base answers for Lesson 17.1 queries', () => {
    const q1 = findTutorAnswer('what is newell and simon means-ends analysis and problem space?');
    expect(q1.referencedSection).toContain('Lesson 17.1');
    expect(q1.detailedResponse).toContain('Simon');

    const q2 = findTutorAnswer('how does george polya working backward regressus heuristic collapse branching trees?');
    expect(q2.referencedSection).toContain('Lesson 17.1');
    expect(q2.detailedResponse).toContain('Pólya');

    const q3 = findTutorAnswer('what is frontopolar prefrontal cortex ba10 cognitive branching and sub-goaling?');
    expect(q3.referencedSection).toContain('Lesson 17.1');
    expect(q3.detailedResponse).toContain('Koechlin');
  });

  it('should resolve grounding anchors correctly for Lesson 17.1 topics', () => {
    expect(resolveValidSection('newell simon means-ends analysis difference reduction gps')).toBe(
      'Lesson 17.1 • Section 1: Newell & Simon (1972): Problem Spaces & Means-Ends Analysis'
    );
    expect(resolveValidSection('george polya working backward regressus heuristic branching factor')).toBe(
      'Lesson 17.1 • Section 2: George Pólya (1945): The Working Backward Heuristic'
    );
    expect(resolveValidSection('frontopolar prefrontal cortex ba10 cognitive branching koechlin')).toBe(
      'Lesson 17.1 • Section 3: The Neurobiology of Sub-Goaling & Frontopolar Cortex (BA 10)'
    );
  });

  it('should return TUTOR_SYSTEM_INSTRUCTION_LESSON_17_1 for means-end-working-backward', () => {
    const instruction = getTutorSystemInstruction('means-end-working-backward');
    expect(instruction).toContain('Lesson 17.1: "Working Backward & Means-End Analysis');
    expect(instruction).toContain('Newell & Simon');
    expect(instruction).toContain('Pólya');
    expect(instruction).toContain('Koechlin');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE', () => {
    expect(ALL_LESSONS['means-end-working-backward']).toBeDefined();
    const ch17 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-17-heuristics');
    expect(ch17).toBeDefined();
    const lesson = ch17?.lessons.find(l => l.id === 'means-end-working-backward');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
