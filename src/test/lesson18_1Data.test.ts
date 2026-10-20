import { describe, it, expect } from 'vitest';
import { LESSON_OVERCONFIDENCE_EPISTEMIC_CALIBRATION } from '../data/lesson18_1Data.ts';
import { ALL_LESSONS, PRIMARY_COURSE } from '../data/courseData.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';

describe('Lesson 18.1: Overconfidence & Epistemic Calibration Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_OVERCONFIDENCE_EPISTEMIC_CALIBRATION.id).toBe('dunning-kruger-calibration');
    expect(LESSON_OVERCONFIDENCE_EPISTEMIC_CALIBRATION.chapterId).toBe('ch-18-biases-epistemic');
    expect(LESSON_OVERCONFIDENCE_EPISTEMIC_CALIBRATION.number).toBe('18.1');
    expect(LESSON_OVERCONFIDENCE_EPISTEMIC_CALIBRATION.title).toBe('Overconfidence & Epistemic Calibration');
    expect(LESSON_OVERCONFIDENCE_EPISTEMIC_CALIBRATION.readingTimeMinutes).toBeGreaterThanOrEqual(14);
    expect(LESSON_OVERCONFIDENCE_EPISTEMIC_CALIBRATION.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_OVERCONFIDENCE_EPISTEMIC_CALIBRATION;
    expect(curiosityQuestion.headline).toContain('90% certain');
    expect(curiosityQuestion.teaser).toContain('feeling of knowing');
    expect(curiosityQuestion.hookNote).toContain('Justin Kruger');
    expect(curiosityQuestion.hookNote).toContain('David Dunning');
    expect(curiosityQuestion.hookNote).toContain('Dual Burden of Incompetence');
    expect(curiosityQuestion.hookNote).toContain('Brier');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_OVERCONFIDENCE_EPISTEMIC_CALIBRATION;
    expect(prediction.options.length).toBe(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-format-b-calibration-mirror');
    expect(prediction.outcome.headline).toContain('Objective Calibration Mirrors Puncture Overconfidence');
    expect(prediction.outcome.explanation).toContain('Dunning-Kruger');
    expect(prediction.outcome.optionFeedback['opt-format-a-supportive-confidence']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-format-b-calibration-mirror']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-equivalent-epistemic-calibration']).toBeDefined();
    expect(prediction.outcome.comparisons.length).toBe(2);
    expect(prediction.outcome.evidenceDistinction).toBeTruthy();
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_OVERCONFIDENCE_EPISTEMIC_CALIBRATION;
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

  it('should provide a 4-stage interactive calibration engine simulator diagram', () => {
    const { diagram } = LESSON_OVERCONFIDENCE_EPISTEMIC_CALIBRATION;
    expect(diagram.stages.length).toBe(4);
    expect(diagram.stages[0].id).toBe('stage-novice-dual-burden');
    expect(diagram.stages[1].id).toBe('stage-valley-of-despair');
    expect(diagram.stages[2].id).toBe('stage-calibration-mirror-training');
    expect(diagram.stages[3].id).toBe('stage-epistemic-superforecaster');
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_OVERCONFIDENCE_EPISTEMIC_CALIBRATION;
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
    const { quiz } = LESSON_OVERCONFIDENCE_EPISTEMIC_CALIBRATION;
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
    const { practicalTask } = LESSON_OVERCONFIDENCE_EPISTEMIC_CALIBRATION;
    expect(practicalTask.steps.length).toBe(3);
    expect(practicalTask.steps[0].title).toContain('Technical Predictions');
    expect(practicalTask.steps[1].title).toContain('Considering the Opposite');
    expect(practicalTask.steps[2].title).toContain('Brier Score');
  });

  it('should register all Lesson 18.1 concepts in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:dunning_kruger_metacognitive_dual_burden',
      'concept:brier_score_epistemic_calibration_curve',
      'concept:objective_calibration_mirror_debiasing',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const entry = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(entry.keyCriteria.length).toBeGreaterThanOrEqual(3);
      expect(entry.canonicalAnswer.length).toBeGreaterThan(50);
      expect(entry.lessonSectionAnchor).toContain('Lesson 18.1');
    });
  });

  it('should register all Lesson 18.1 misconceptions in KNOWN_MISCONCEPTIONS', () => {
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:high_confidence_indicates_high_accuracy');
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:dunning_kruger_only_affects_unintelligent_people');
  });

  it('should provide accurate offline tutor knowledge base answers for Lesson 18.1 queries', () => {
    const q1 = findTutorAnswer('what is justin kruger and david dunning dual burden of incompetence?');
    expect(q1.referencedSection).toContain('Lesson 18.1');
    expect(q1.detailedResponse).toContain('Dunning');

    const q2 = findTutorAnswer('what is epistemic calibration curves brier score decomposition and overconfidence bias?');
    expect(q2.referencedSection).toContain('Lesson 18.1');
    expect(q2.detailedResponse).toContain('Brier');

    const q3 = findTutorAnswer('how does considering the opposite debiasing and calibration mirrors work tetlock lord?');
    expect(q3.referencedSection).toContain('Lesson 18.1');
    expect(q3.detailedResponse).toContain('Lord');
  });

  it('should resolve grounding anchors correctly for Lesson 18.1 topics', () => {
    expect(resolveValidSection('justin kruger david dunning dual burden of incompetence')).toBe(
      'Lesson 18.1 • Section 1: Kruger & Dunning (1999): The Dual Burden of Incompetence'
    );
    expect(resolveValidSection('epistemic calibration curves brier score identity line overconfidence bias')).toBe(
      'Lesson 18.1 • Section 2: Epistemic Calibration Curves & Brier Score Decomposition'
    );
    expect(resolveValidSection('considering the opposite debiasing calibration mirrors tetlock superforecasting')).toBe(
      'Lesson 18.1 • Section 3: Constructing Calibration Mirrors & Debiasing Protocols'
    );
  });

  it('should return TUTOR_SYSTEM_INSTRUCTION_LESSON_18_1 for dunning-kruger-calibration', () => {
    const instruction = getTutorSystemInstruction('dunning-kruger-calibration');
    expect(instruction).toContain('Lesson 18.1: "Overconfidence & Epistemic Calibration');
    expect(instruction).toContain('Kruger');
    expect(instruction).toContain('Brier');
    expect(instruction).toContain('Considering the Opposite');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE', () => {
    expect(ALL_LESSONS['dunning-kruger-calibration']).toBeDefined();
    const ch18 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-18-biases-epistemic');
    expect(ch18).toBeDefined();
    const lesson = ch18?.lessons.find(l => l.id === 'dunning-kruger-calibration');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
