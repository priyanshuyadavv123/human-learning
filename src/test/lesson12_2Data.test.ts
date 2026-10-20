import { describe, it, expect } from 'vitest';
import { LESSON_EXPERT_MENTAL_REPRESENTATIONS } from '../data/lesson12_2Data.ts';
import { ALL_LESSONS, PRIMARY_COURSE } from '../data/courseData.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';

describe('Lesson 12.2: Mental Representations in Expert Performance Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_EXPERT_MENTAL_REPRESENTATIONS.id).toBe('expert-mental-representations');
    expect(LESSON_EXPERT_MENTAL_REPRESENTATIONS.chapterId).toBe('ch-12-deliberate-practice');
    expect(LESSON_EXPERT_MENTAL_REPRESENTATIONS.number).toBe('12.2');
    expect(LESSON_EXPERT_MENTAL_REPRESENTATIONS.title).toBe('Mental Representations in Expert Performance');
    expect(LESSON_EXPERT_MENTAL_REPRESENTATIONS.readingTimeMinutes).toBeGreaterThanOrEqual(14);
    expect(LESSON_EXPERT_MENTAL_REPRESENTATIONS.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_EXPERT_MENTAL_REPRESENTATIONS;
    expect(curiosityQuestion.headline).toContain('grandmaster');
    expect(curiosityQuestion.teaser).toContain('functional constellations');
    expect(curiosityQuestion.hookNote).toContain('Chase and Herbert Simon');
    expect(curiosityQuestion.hookNote).toContain('Gary Klein');
    expect(curiosityQuestion.hookNote).toContain('Mental Representations');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_EXPERT_MENTAL_REPRESENTATIONS;
    expect(prediction.options.length).toBe(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-representation-dependence-collapse');
    expect(prediction.outcome.headline).toContain('Chase & Simon, 1973');
    expect(prediction.outcome.explanation).toContain('mental representations');
    expect(prediction.outcome.optionFeedback['opt-general-intelligence-advantage']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-representation-dependence-collapse']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-junior-speed-superiority']).toBeDefined();
    expect(prediction.outcome.comparisons.length).toBe(2);
    expect(prediction.outcome.evidenceDistinction).toBeTruthy();
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_EXPERT_MENTAL_REPRESENTATIONS;
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

  it('should provide a 4-stage interactive mental representation architecture diagram', () => {
    const { diagram } = LESSON_EXPERT_MENTAL_REPRESENTATIONS;
    expect(diagram.stages.length).toBe(4);
    expect(diagram.stages[0].id).toBe('stage-perceptual-cue-clustering');
    expect(diagram.stages[1].id).toBe('stage-prototypical-schema-activation');
    expect(diagram.stages[2].id).toBe('stage-mental-forward-simulation');
    expect(diagram.stages[3].id).toBe('stage-closed-loop-self-monitoring');
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_EXPERT_MENTAL_REPRESENTATIONS;
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
    const { quiz } = LESSON_EXPERT_MENTAL_REPRESENTATIONS;
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
    const { practicalTask } = LESSON_EXPERT_MENTAL_REPRESENTATIONS;
    expect(practicalTask.steps.length).toBe(3);
    expect(practicalTask.steps[0].title).toContain('Strip Surface Features');
    expect(practicalTask.steps[1].title).toContain('Forward Mental Simulation');
    expect(practicalTask.steps[2].title).toContain('Internal Reference Standard');
  });

  it('should register all Lesson 12.2 concepts in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:chase_simon_domain_specific_representations',
      'concept:klein_recognition_primed_decision_simulation',
      'concept:ericsson_internal_reference_self_monitoring',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const entry = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(entry.keyCriteria.length).toBeGreaterThanOrEqual(3);
      expect(entry.canonicalAnswer.length).toBeGreaterThan(50);
      expect(entry.lessonSectionAnchor).toContain('Lesson 12.2');
    });
  });

  it('should register all Lesson 12.2 misconceptions in KNOWN_MISCONCEPTIONS', () => {
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:expert_genius_is_general_hardware');
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:surface_features_define_domain_problems');
  });

  it('should provide accurate offline tutor knowledge base answers for Lesson 12.2 queries', () => {
    const q1 = findTutorAnswer('How did Chase and Simon random board experiments prove mental representations?');
    expect(q1.referencedSection).toContain('Lesson 12.2');
    expect(q1.detailedResponse).toContain('Chase and Herbert Simon');

    const q2 = findTutorAnswer('What is Gary Klein recognition-primed decision RPD and forward mental simulation?');
    expect(q2.referencedSection).toContain('Lesson 12.2');
    expect(q2.detailedResponse).toContain('Klein');

    const q3 = findTutorAnswer('Why is an internal reference standard essential for self-monitoring according to Ericsson 2016?');
    expect(q3.referencedSection).toContain('Lesson 12.2');
    expect(q3.detailedResponse).toContain('Ericsson');
  });

  it('should resolve grounding anchors correctly for Lesson 12.2 topics', () => {
    expect(resolveValidSection('chase simon random board piece layout randomization asymmetry')).toBe(
      'Lesson 12.2 • Section 1: Chase & Simon (1973): The Structural Nature of Expert Representations'
    );
    expect(resolveValidSection('gary klein rpd recognition-primed decision forward mental simulation fireground')).toBe(
      'Lesson 12.2 • Section 2: Gary Klein’s RPD Model: Intuitive Simulation Under Extreme Pressure'
    );
    expect(resolveValidSection('ericsson 2016 peak internal reference standard self-monitoring discrepancy detection')).toBe(
      'Lesson 12.2 • Section 3: Self-Monitoring & Real-Time Error Correction (Ericsson, 2016)'
    );
  });

  it('should return TUTOR_SYSTEM_INSTRUCTION_LESSON_12_2 for expert-mental-representations', () => {
    const instruction = getTutorSystemInstruction('expert-mental-representations');
    expect(instruction).toContain('Lesson 12.2: "Mental Representations in Expert Performance');
    expect(instruction).toContain('William Chase & Herbert Simon');
    expect(instruction).toContain('Gary Klein');
    expect(instruction).toContain('K. Anders Ericsson');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE', () => {
    expect(ALL_LESSONS['expert-mental-representations']).toBeDefined();
    const ch12 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-12-deliberate-practice');
    expect(ch12).toBeDefined();
    const lesson = ch12?.lessons.find(l => l.id === 'expert-mental-representations');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
