import { describe, it, expect } from 'vitest';
import { LESSON_EDGE_OF_ABILITY_FEEDBACK } from '../data/lesson12_1Data.ts';
import { ALL_LESSONS, PRIMARY_COURSE } from '../data/courseData.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';

describe('Lesson 12.1: The Edge of Ability & Immediate Feedback Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_EDGE_OF_ABILITY_FEEDBACK.id).toBe('edge-of-ability-feedback');
    expect(LESSON_EDGE_OF_ABILITY_FEEDBACK.chapterId).toBe('ch-12-deliberate-practice');
    expect(LESSON_EDGE_OF_ABILITY_FEEDBACK.number).toBe('12.1');
    expect(LESSON_EDGE_OF_ABILITY_FEEDBACK.title).toBe('The Edge of Ability & Immediate Feedback');
    expect(LESSON_EDGE_OF_ABILITY_FEEDBACK.readingTimeMinutes).toBeGreaterThanOrEqual(14);
    expect(LESSON_EDGE_OF_ABILITY_FEEDBACK.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_EDGE_OF_ABILITY_FEEDBACK;
    expect(curiosityQuestion.headline).toContain('plateau');
    expect(curiosityQuestion.teaser).toContain('edge of ability');
    expect(curiosityQuestion.hookNote).toContain('Ericsson');
    expect(curiosityQuestion.hookNote).toContain('Fitts & Posner');
    expect(curiosityQuestion.hookNote).toContain('Desirable Difficulties');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_EDGE_OF_ABILITY_FEEDBACK;
    expect(prediction.options.length).toBe(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-deliberate-practice-acceleration');
    expect(prediction.outcome.headline).toContain('Ericsson et al., 1993');
    expect(prediction.outcome.explanation).toContain('autonomous stage');
    expect(prediction.outcome.optionFeedback['opt-volume-workplace-experience']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-deliberate-practice-acceleration']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-innate-talent-predominance']).toBeDefined();
    expect(prediction.outcome.comparisons.length).toBe(2);
    expect(prediction.outcome.evidenceDistinction).toBeTruthy();
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_EDGE_OF_ABILITY_FEEDBACK;
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

  it('should provide a 4-stage interactive deliberate practice neuro-adaptive loop diagram', () => {
    const { diagram } = LESSON_EDGE_OF_ABILITY_FEEDBACK;
    expect(diagram.stages.length).toBe(4);
    expect(diagram.stages[0].id).toBe('stage-subskill-isolation-targeting');
    expect(diagram.stages[1].id).toBe('stage-edge-of-ability-strain');
    expect(diagram.stages[2].id).toBe('stage-instantaneous-feedback-discrepancy');
    expect(diagram.stages[3].id).toBe('stage-repetition-with-representation-updating');
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_EDGE_OF_ABILITY_FEEDBACK;
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
    const { quiz } = LESSON_EDGE_OF_ABILITY_FEEDBACK;
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
    const { practicalTask } = LESSON_EDGE_OF_ABILITY_FEEDBACK;
    expect(practicalTask.steps.length).toBe(3);
    expect(practicalTask.steps[0].title).toContain('Atomic Sub-Skills');
    expect(practicalTask.steps[1].title).toContain('Instantaneous Feedback');
    expect(practicalTask.steps[2].title).toContain('85% Edge of Ability');
  });

  it('should register all Lesson 12.1 concepts in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:ericsson_deliberate_practice_four_pillars',
      'concept:fitts_posner_autonomous_stage_plateau',
      'concept:wilson_85_percent_rule_optimal_learning',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const entry = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(entry.keyCriteria.length).toBeGreaterThanOrEqual(3);
      expect(entry.canonicalAnswer.length).toBeGreaterThan(50);
      expect(entry.lessonSectionAnchor).toContain('Lesson 12.1');
    });
  });

  it('should register all Lesson 12.1 misconceptions in KNOWN_MISCONCEPTIONS', () => {
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:experience_equals_expert_performance');
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:error_free_practice_indicates_optimal_learning');
  });

  it('should provide accurate offline tutor knowledge base answers for Lesson 12.1 queries', () => {
    const q1 = findTutorAnswer('How does K Anders Ericsson deliberate practice disrupt the autonomous stage?');
    expect(q1.referencedSection).toContain('Lesson 12.1');
    expect(q1.detailedResponse).toContain('Ericsson');

    const q2 = findTutorAnswer('Why does feedback latency and delayed feedback harm credit assignment?');
    expect(q2.referencedSection).toContain('Lesson 12.1');
    expect(q2.detailedResponse).toContain('Credit Assignment Problem');

    const q3 = findTutorAnswer('What is the Wilson 85% rule and edge of ability error rate?');
    expect(q3.referencedSection).toContain('Lesson 12.1');
    expect(q3.detailedResponse).toContain('Wilson');
  });

  it('should resolve grounding anchors correctly for Lesson 12.1 topics', () => {
    expect(resolveValidSection('k anders ericsson deliberate practice four pillars homeostasis')).toBe(
      'Lesson 12.1 • Section 1: K. Anders Ericsson: The Anatomy of Deliberate Practice'
    );
    expect(resolveValidSection('feedback latency delayed feedback sub-second feedback credit assignment problem')).toBe(
      'Lesson 12.1 • Section 2: Feedback Latency & The Temporal Dynamics of Error Correction'
    );
    expect(resolveValidSection('edge of ability 85% rule wilson yerkes-dodson 15% error')).toBe(
      'Lesson 12.1 • Section 3: The Edge of Ability: Yerkes-Dodson & Desirable Difficulties'
    );
  });

  it('should return TUTOR_SYSTEM_INSTRUCTION_LESSON_12_1 for edge-of-ability-feedback', () => {
    const instruction = getTutorSystemInstruction('edge-of-ability-feedback');
    expect(instruction).toContain('Lesson 12.1: "The Edge of Ability & Immediate Feedback');
    expect(instruction).toContain('K. Anders Ericsson');
    expect(instruction).toContain('Fitts and Posner');
    expect(instruction).toContain('Wilson et al.');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE', () => {
    expect(ALL_LESSONS['edge-of-ability-feedback']).toBeDefined();
    const ch12 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-12-deliberate-practice');
    expect(ch12).toBeDefined();
    const lesson = ch12?.lessons.find(l => l.id === 'edge-of-ability-feedback');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
