import { describe, it, expect } from 'vitest';
import { LESSON_PREMORTEM_ERROR_JOURNALING } from '../data/lesson15_2Data.ts';
import { ALL_LESSONS, PRIMARY_COURSE } from '../data/courseData.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';

describe('Lesson 15.2: The Pre-Mortem & Error Journaling Protocols Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_PREMORTEM_ERROR_JOURNALING.id).toBe('error-journaling-protocols');
    expect(LESSON_PREMORTEM_ERROR_JOURNALING.chapterId).toBe('ch-15-error-driven');
    expect(LESSON_PREMORTEM_ERROR_JOURNALING.number).toBe('15.2');
    expect(LESSON_PREMORTEM_ERROR_JOURNALING.title).toBe('The Pre-Mortem & Error Journaling Protocols');
    expect(LESSON_PREMORTEM_ERROR_JOURNALING.readingTimeMinutes).toBeGreaterThanOrEqual(16);
    expect(LESSON_PREMORTEM_ERROR_JOURNALING.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_PREMORTEM_ERROR_JOURNALING;
    expect(curiosityQuestion.headline).toContain('prospective hindsight');
    expect(curiosityQuestion.teaser).toContain('Black Box');
    expect(curiosityQuestion.hookNote).toContain('prospective hindsight');
    expect(curiosityQuestion.hookNote).toContain('Mitchell');
    expect(curiosityQuestion.hookNote).toContain('Gary Klein');
    expect(curiosityQuestion.hookNote).toContain('Matthew Syed');
    expect(curiosityQuestion.hookNote).toContain('Amy Edmondson');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_PREMORTEM_ERROR_JOURNALING;
    expect(prediction.options.length).toBe(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-team-b-premortem-prospective-hindsight');
    expect(prediction.outcome.headline).toContain('Prospective Hindsight Triumphed');
    expect(prediction.outcome.explanation).toContain('Klein, 2007');
    expect(prediction.outcome.optionFeedback['opt-team-a-optimism-superiority']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-team-b-premortem-prospective-hindsight']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-equivalent-risk-identification']).toBeDefined();
    expect(prediction.outcome.comparisons.length).toBe(2);
    expect(prediction.outcome.evidenceDistinction).toBeTruthy();
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_PREMORTEM_ERROR_JOURNALING;
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

  it('should provide a 4-stage interactive forensic pipeline simulator diagram', () => {
    const { diagram } = LESSON_PREMORTEM_ERROR_JOURNALING;
    expect(diagram.stages.length).toBe(4);
    expect(diagram.stages[0].id).toBe('stage-prospective-hindsight');
    expect(diagram.stages[1].id).toBe('stage-latent-vulnerability-mapping');
    expect(diagram.stages[2].id).toBe('stage-blameless-black-box-investigation');
    expect(diagram.stages[3].id).toBe('stage-systemic-error-journal-patching');
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_PREMORTEM_ERROR_JOURNALING;
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
    const { quiz } = LESSON_PREMORTEM_ERROR_JOURNALING;
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
    const { practicalTask } = LESSON_PREMORTEM_ERROR_JOURNALING;
    expect(practicalTask.steps.length).toBe(3);
    expect(practicalTask.steps[0].title).toContain('Prospective Hindsight Pre-Mortem');
    expect(practicalTask.steps[1].title).toContain('Edmondson’s Taxonomy');
    expect(practicalTask.steps[2].title).toContain('Cognitive Bug Ledger');
  });

  it('should register all Lesson 15.2 concepts in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:klein_premortem_prospective_hindsight',
      'concept:syed_black_box_blameless_root_cause',
      'concept:edmondson_failure_taxonomy_intelligent_failure',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const entry = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(entry.keyCriteria.length).toBeGreaterThanOrEqual(3);
      expect(entry.canonicalAnswer.length).toBeGreaterThan(50);
      expect(entry.lessonSectionAnchor).toContain('Lesson 15.2');
    });
  });

  it('should register all Lesson 15.2 misconceptions in KNOWN_MISCONCEPTIONS', () => {
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:post_mortems_require_assigning_human_blame');
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:premortems_induce_paralyzing_pessimism');
  });

  it('should provide accurate offline tutor knowledge base answers for Lesson 15.2 queries', () => {
    const q1 = findTutorAnswer('what is gary klein prospective hindsight premortem protocol?');
    expect(q1.referencedSection).toContain('Lesson 15.2');
    expect(q1.detailedResponse).toContain('Klein');

    const q2 = findTutorAnswer('how does matthew syed black box thinking and blameless postmortem work?');
    expect(q2.referencedSection).toContain('Lesson 15.2');
    expect(q2.detailedResponse).toContain('Syed');

    const q3 = findTutorAnswer('what is amy edmondson failure taxonomy and error journaling?');
    expect(q3.referencedSection).toContain('Lesson 15.2');
    expect(q3.detailedResponse).toContain('Edmondson');
  });

  it('should resolve grounding anchors correctly for Lesson 15.2 topics', () => {
    expect(resolveValidSection('gary klein prospective hindsight premortem protocol planning fallacy')).toBe(
      'Lesson 15.2 • Section 1: Gary Klein (2007): The Pre-Mortem & Prospective Hindsight'
    );
    expect(resolveValidSection('matthew syed black box thinking blameless post-mortem swiss cheese model')).toBe(
      'Lesson 15.2 • Section 2: Matthew Syed (2015): Black Box Thinking & Blameless Root Causes'
    );
    expect(resolveValidSection('amy edmondson intelligent failure preventable failure error journaling protocol')).toBe(
      'Lesson 15.2 • Section 3: Amy Edmondson (2011): The Failure Spectrum & The Error Journaling Protocol'
    );
  });

  it('should return TUTOR_SYSTEM_INSTRUCTION_LESSON_15_2 for error-journaling-protocols', () => {
    const instruction = getTutorSystemInstruction('error-journaling-protocols');
    expect(instruction).toContain('Lesson 15.2: "The Pre-Mortem & Error Journaling Protocols');
    expect(instruction).toContain('Klein');
    expect(instruction).toContain('Syed');
    expect(instruction).toContain('Edmondson');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE', () => {
    expect(ALL_LESSONS['error-journaling-protocols']).toBeDefined();
    const ch15 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-15-error-driven');
    expect(ch15).toBeDefined();
    const lesson = ch15?.lessons.find(l => l.id === 'error-journaling-protocols');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
