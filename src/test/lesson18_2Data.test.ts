import { describe, it, expect } from 'vitest';
import { LESSON_CONFIRMATION_BIAS_SUNK_COST_STUDY } from '../data/lesson18_2Data.ts';
import { ALL_LESSONS, PRIMARY_COURSE } from '../data/courseData.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';

describe('Lesson 18.2: Confirmation Bias & Sunk Cost in Study Methods Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_CONFIRMATION_BIAS_SUNK_COST_STUDY.id).toBe('sunk-cost-study-biases');
    expect(LESSON_CONFIRMATION_BIAS_SUNK_COST_STUDY.chapterId).toBe('ch-18-biases-epistemic');
    expect(LESSON_CONFIRMATION_BIAS_SUNK_COST_STUDY.number).toBe('18.2');
    expect(LESSON_CONFIRMATION_BIAS_SUNK_COST_STUDY.title).toBe('Confirmation Bias & Sunk Cost in Study Methods');
    expect(LESSON_CONFIRMATION_BIAS_SUNK_COST_STUDY.readingTimeMinutes).toBeGreaterThanOrEqual(13);
    expect(LESSON_CONFIRMATION_BIAS_SUNK_COST_STUDY.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_CONFIRMATION_BIAS_SUNK_COST_STUDY;
    expect(curiosityQuestion.headline).toContain('highlighting');
    expect(curiosityQuestion.teaser).toContain('Confirmation bias');
    expect(curiosityQuestion.hookNote).toContain('John Dunlosky');
    expect(curiosityQuestion.hookNote).toContain('Peter Wason');
    expect(curiosityQuestion.hookNote).toContain('Hal Arkes');
    expect(curiosityQuestion.hookNote).toContain('Leon Festinger');
    expect(curiosityQuestion.hookNote).toContain('Annie Duke');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_CONFIRMATION_BIAS_SUNK_COST_STUDY;
    expect(prediction.options.length).toBe(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-resist-sunk-cost-rationalization');
    expect(prediction.outcome.headline).toContain('Cognitive Dissonance and Sunk Cost Drive Escalation');
    expect(prediction.outcome.explanation).toContain('Arkes & Blumer');
    expect(prediction.outcome.optionFeedback['opt-rational-pivot-immediate']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-resist-sunk-cost-rationalization']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-secretly-effective-notes']).toBeDefined();
    expect(prediction.outcome.comparisons.length).toBe(2);
    expect(prediction.outcome.evidenceDistinction).toBeTruthy();
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_CONFIRMATION_BIAS_SUNK_COST_STUDY;
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

  it('should provide a 4-stage interactive confirmation bias & sunk cost cycle diagram', () => {
    const { diagram } = LESSON_CONFIRMATION_BIAS_SUNK_COST_STUDY;
    expect(diagram.stages.length).toBe(4);
    expect(diagram.stages[0].id).toBe('stage-bankrupt-ritual-investment');
    expect(diagram.stages[1].id).toBe('stage-disconfirming-shock');
    expect(diagram.stages[2].id).toBe('stage-dissonance-and-rationalization');
    expect(diagram.stages[3].id).toBe('stage-precommitted-sunsetting');
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_CONFIRMATION_BIAS_SUNK_COST_STUDY;
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
    const { quiz } = LESSON_CONFIRMATION_BIAS_SUNK_COST_STUDY;
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
    const { practicalTask } = LESSON_CONFIRMATION_BIAS_SUNK_COST_STUDY;
    expect(practicalTask.steps.length).toBe(3);
    expect(practicalTask.steps[0].title).toContain('Forensic Audit');
    expect(practicalTask.steps[1].title).toContain('Sunk Cost Write-Off');
    expect(practicalTask.steps[2].title).toContain('Kill Criteria');
  });

  it('should register all Lesson 18.2 concepts in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:wason_nickerson_confirmation_bias_study_rituals',
      'concept:arkes_blumer_sunk_cost_learning_escalation',
      'concept:cognitive_dissonance_discrepancy_sunsetting',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const entry = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(entry.keyCriteria.length).toBeGreaterThanOrEqual(3);
      expect(entry.canonicalAnswer.length).toBeGreaterThan(50);
      expect(entry.lessonSectionAnchor).toContain('Lesson 18.2');
    });
  });

  it('should register all Lesson 18.2 misconceptions in KNOWN_MISCONCEPTIONS', () => {
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:highlighting_and_rereading_are_effective_because_they_feel_productive');
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:abandoning_a_study_habit_means_wasting_prior_effort');
  });

  it('should provide accurate offline tutor knowledge base answers for Lesson 18.2 queries', () => {
    const q1 = findTutorAnswer('what is wason and nickerson confirmation bias in study rituals positive test strategy?');
    expect(q1.referencedSection).toContain('Lesson 18.2');
    expect(q1.detailedResponse).toContain('Nickerson');

    const q2 = findTutorAnswer('how does arkes and blumer sunk cost fallacy apply to learning systems and notion notes?');
    expect(q2.referencedSection).toContain('Lesson 18.2');
    expect(q2.detailedResponse).toContain('Arkes');

    const q3 = findTutorAnswer('what is festinger cognitive dissonance and annie duke kill criteria habit sunsetting?');
    expect(q3.referencedSection).toContain('Lesson 18.2');
    expect(q3.detailedResponse).toContain('Duke');
  });

  it('should resolve grounding anchors correctly for Lesson 18.2 topics', () => {
    expect(resolveValidSection('raymond nickerson wason confirmation bias study rituals positive test strategy')).toBe(
      'Lesson 18.2 • Section 1: Wason & Nickerson: Confirmation Bias in Study Rituals'
    );
    expect(resolveValidSection('hal arkes catherine blumer sunk cost fallacy learning systems study escalation')).toBe(
      'Lesson 18.2 • Section 2: Arkes & Blumer (1985): The Sunk Cost Fallacy in Learning Systems'
    );
    expect(resolveValidSection('leon festinger cognitive dissonance annie duke kill criteria habit sunsetting 18.2')).toBe(
      'Lesson 18.2 • Section 3: Festinger & Annie Duke: Cognitive Dissonance & Habit Sunsetting'
    );
  });

  it('should return TUTOR_SYSTEM_INSTRUCTION_LESSON_18_2 for sunk-cost-study-biases', () => {
    const instruction = getTutorSystemInstruction('sunk-cost-study-biases');
    expect(instruction).toContain('Lesson 18.2: "Confirmation Bias & Sunk Cost in Study Methods');
    expect(instruction).toContain('Wason');
    expect(instruction).toContain('Arkes');
    expect(instruction).toContain('Duke');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE', () => {
    expect(ALL_LESSONS['sunk-cost-study-biases']).toBeDefined();
    const ch18 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-18-biases-epistemic');
    expect(ch18).toBeDefined();
    const lesson = ch18?.lessons.find(l => l.id === 'sunk-cost-study-biases');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
