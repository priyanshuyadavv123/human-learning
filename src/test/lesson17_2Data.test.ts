import { describe, it, expect } from 'vitest';
import { LESSON_SUBGOAL_LABELING_SCAFFOLDING } from '../data/lesson17_2Data.ts';
import { ALL_LESSONS, PRIMARY_COURSE } from '../data/courseData.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';

describe('Lesson 17.2: Sub-Goal Labeling & Scaffolding Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_SUBGOAL_LABELING_SCAFFOLDING.id).toBe('subgoal-labeling-scaffolding');
    expect(LESSON_SUBGOAL_LABELING_SCAFFOLDING.chapterId).toBe('ch-17-heuristics');
    expect(LESSON_SUBGOAL_LABELING_SCAFFOLDING.number).toBe('17.2');
    expect(LESSON_SUBGOAL_LABELING_SCAFFOLDING.title).toBe('Sub-Goal Labeling & Scaffolding');
    expect(LESSON_SUBGOAL_LABELING_SCAFFOLDING.readingTimeMinutes).toBeGreaterThanOrEqual(14);
    expect(LESSON_SUBGOAL_LABELING_SCAFFOLDING.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_SUBGOAL_LABELING_SCAFFOLDING;
    expect(curiosityQuestion.headline).toContain('tutorial');
    expect(curiosityQuestion.teaser).toContain('linear action sequences');
    expect(curiosityQuestion.hookNote).toContain('Richard Catrambone');
    expect(curiosityQuestion.hookNote).toContain('Lauren Margulieux');
    expect(curiosityQuestion.hookNote).toContain('Renkl');
    expect(curiosityQuestion.hookNote).toContain('Backward Fading');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_SUBGOAL_LABELING_SCAFFOLDING;
    expect(prediction.options.length).toBe(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-team-beta-subgoal-chunking');
    expect(prediction.outcome.headline).toContain('Functional Sub-Goal Labels Drive Schema Chunking');
    expect(prediction.outcome.explanation).toContain('Catrambone’s sub-goal labels');
    expect(prediction.outcome.optionFeedback['opt-team-alpha-linear-speed']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-team-beta-subgoal-chunking']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-equivalent-procedural-transfer']).toBeDefined();
    expect(prediction.outcome.comparisons.length).toBe(2);
    expect(prediction.outcome.evidenceDistinction).toBeTruthy();
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_SUBGOAL_LABELING_SCAFFOLDING;
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

  it('should provide a 4-stage interactive chunking & fading architecture diagram', () => {
    const { diagram } = LESSON_SUBGOAL_LABELING_SCAFFOLDING;
    expect(diagram.stages.length).toBe(4);
    expect(diagram.stages[0].id).toBe('stage-linear-unorganized');
    expect(diagram.stages[1].id).toBe('stage-subgoal-chunked');
    expect(diagram.stages[2].id).toBe('stage-backward-faded');
    expect(diagram.stages[3].id).toBe('stage-autonomous-transfer');
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_SUBGOAL_LABELING_SCAFFOLDING;
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
    const { quiz } = LESSON_SUBGOAL_LABELING_SCAFFOLDING;
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
    const { practicalTask } = LESSON_SUBGOAL_LABELING_SCAFFOLDING;
    expect(practicalTask.steps.length).toBe(3);
    expect(practicalTask.steps[0].title).toContain('Opaque Linear Procedure');
    expect(practicalTask.steps[1].title).toContain('Functional Sub-Goal Labels');
    expect(practicalTask.steps[2].title).toContain('Backward-Fading Matrix');
  });

  it('should register all Lesson 17.2 concepts in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:catrambone_subgoal_labeling_schema',
      'concept:margulieux_faded_subgoal_scaffolding',
      'concept:sweller_renkl_worked_example_fading',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const entry = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(entry.keyCriteria.length).toBeGreaterThanOrEqual(3);
      expect(entry.canonicalAnswer.length).toBeGreaterThan(50);
      expect(entry.lessonSectionAnchor).toContain('Lesson 17.2');
    });
  });

  it('should register all Lesson 17.2 misconceptions in KNOWN_MISCONCEPTIONS', () => {
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:linear_step_memorization_equals_problem_solving');
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:unassisted_discovery_surpasses_scaffolded_examples');
  });

  it('should provide accurate offline tutor knowledge base answers for Lesson 17.2 queries', () => {
    const q1 = findTutorAnswer('what is richard catrambone subgoal learning model and worked examples?');
    expect(q1.referencedSection).toContain('Lesson 17.2');
    expect(q1.detailedResponse).toContain('Catrambone');

    const q2 = findTutorAnswer('how does lauren margulieux subgoal labeling in stem and coding reduce extraneous load?');
    expect(q2.referencedSection).toContain('Lesson 17.2');
    expect(q2.detailedResponse).toContain('Margulieux');

    const q3 = findTutorAnswer('what is renkl atkinson backward fading and expertise reversal effect?');
    expect(q3.referencedSection).toContain('Lesson 17.2');
    expect(q3.detailedResponse).toContain('Renkl');
  });

  it('should resolve grounding anchors correctly for Lesson 17.2 topics', () => {
    expect(resolveValidSection('richard catrambone subgoal learning model action sequences')).toBe(
      'Lesson 17.2 • Section 1: Catrambone’s Sub-Goal Learning Model: Chunking Action Sequences'
    );
    expect(resolveValidSection('lauren margulieux subgoal labeling across technical domains coding stem')).toBe(
      'Lesson 17.2 • Section 2: Margulieux et al.: Subgoal Labeling Across Technical Domains & Coding'
    );
    expect(resolveValidSection('renkl atkinson backward fading scaffolding architecture expertise reversal')).toBe(
      'Lesson 17.2 • Section 3: Renkl & Atkinson (2002): The Backward Fading Scaffolding Architecture'
    );
  });

  it('should return TUTOR_SYSTEM_INSTRUCTION_LESSON_17_2 for subgoal-labeling-scaffolding', () => {
    const instruction = getTutorSystemInstruction('subgoal-labeling-scaffolding');
    expect(instruction).toContain('Lesson 17.2: "Sub-Goal Labeling & Scaffolding');
    expect(instruction).toContain('Catrambone');
    expect(instruction).toContain('Margulieux');
    expect(instruction).toContain('Renkl');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE', () => {
    expect(ALL_LESSONS['subgoal-labeling-scaffolding']).toBeDefined();
    const ch17 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-17-heuristics');
    expect(ch17).toBeDefined();
    const lesson = ch17?.lessons.find(l => l.id === 'subgoal-labeling-scaffolding');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
