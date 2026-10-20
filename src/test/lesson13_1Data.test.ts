import { describe, it, expect } from 'vitest';
import { LESSON_FITTS_POSNER_STAGES } from '../data/lesson13_1Data.ts';
import { ALL_LESSONS, PRIMARY_COURSE } from '../data/courseData.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';

describe('Lesson 13.1: The Three Stages of Skill Acquisition Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_FITTS_POSNER_STAGES.id).toBe('fitts-posner-stages');
    expect(LESSON_FITTS_POSNER_STAGES.chapterId).toBe('ch-13-automaticity');
    expect(LESSON_FITTS_POSNER_STAGES.number).toBe('13.1');
    expect(LESSON_FITTS_POSNER_STAGES.title).toBe('The Three Stages of Skill Acquisition');
    expect(LESSON_FITTS_POSNER_STAGES.readingTimeMinutes).toBeGreaterThanOrEqual(14);
    expect(LESSON_FITTS_POSNER_STAGES.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_FITTS_POSNER_STAGES;
    expect(curiosityQuestion.headline).toContain('manual transmission');
    expect(curiosityQuestion.teaser).toContain('Proceduralization');
    expect(curiosityQuestion.hookNote).toContain('Paul Fitts and Michael Posner');
    expect(curiosityQuestion.hookNote).toContain('Anderson');
    expect(curiosityQuestion.hookNote).toContain('Power Law of Practice');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_FITTS_POSNER_STAGES;
    expect(prediction.options.length).toBe(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-proceduralization-attentional-handover');
    expect(prediction.outcome.headline).toContain('Fitts & Posner, 1967');
    expect(prediction.outcome.explanation).toContain('Cognitive Stage');
    expect(prediction.outcome.optionFeedback['opt-equal-multitasking-capacity']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-proceduralization-attentional-handover']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-cognitive-stage-superiority']).toBeDefined();
    expect(prediction.outcome.comparisons.length).toBe(2);
    expect(prediction.outcome.evidenceDistinction).toBeTruthy();
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_FITTS_POSNER_STAGES;
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

  it('should provide a 4-stage interactive proceduralization engine diagram', () => {
    const { diagram } = LESSON_FITTS_POSNER_STAGES;
    expect(diagram.stages.length).toBe(4);
    expect(diagram.stages[0].id).toBe('stage-cognitive-declarative-encoding');
    expect(diagram.stages[1].id).toBe('stage-associative-rule-composition');
    expect(diagram.stages[2].id).toBe('stage-autonomous-striatal-execution');
    expect(diagram.stages[3].id).toBe('stage-metacognitive-executive-supervision');
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_FITTS_POSNER_STAGES;
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
    const { quiz } = LESSON_FITTS_POSNER_STAGES;
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
    const { practicalTask } = LESSON_FITTS_POSNER_STAGES;
    expect(practicalTask.steps.length).toBe(3);
    expect(practicalTask.steps[0].title).toContain('Cognitive Stage');
    expect(practicalTask.steps[1].title).toContain('Associative Stage');
    expect(practicalTask.steps[2].title).toContain('Autonomous Stage');
  });

  it('should register all Lesson 13.1 concepts in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:fitts_posner_tripartite_progression',
      'concept:anderson_actr_knowledge_compilation',
      'concept:prefrontal_to_striatal_neuroanatomical_handover',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const entry = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(entry.keyCriteria.length).toBeGreaterThanOrEqual(3);
      expect(entry.canonicalAnswer.length).toBeGreaterThan(50);
      expect(entry.lessonSectionAnchor).toContain('Lesson 13.1');
    });
  });

  it('should register all Lesson 13.1 misconceptions in KNOWN_MISCONCEPTIONS', () => {
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:multitasking_possible_in_early_learning');
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:automaticity_means_greater_conscious_control');
  });

  it('should provide accurate offline tutor knowledge base answers for Lesson 13.1 queries', () => {
    const q1 = findTutorAnswer('What are the Fitts and Posner three stages of skill acquisition?');
    expect(q1.referencedSection).toContain('Lesson 13.1');
    expect(q1.detailedResponse).toContain('Fitts and Michael Posner');

    const q2 = findTutorAnswer('How does Anderson ACT-R knowledge compilation and production composition work?');
    expect(q2.referencedSection).toContain('Lesson 13.1');
    expect(q2.detailedResponse).toContain('ACT-R');

    const q3 = findTutorAnswer('What is the prefrontal to striatal handover and basal ganglia automaticity?');
    expect(q3.referencedSection).toContain('Lesson 13.1');
    expect(q3.detailedResponse).toContain('dorsal striatum');
  });

  it('should resolve grounding anchors correctly for Lesson 13.1 topics', () => {
    expect(resolveValidSection('fitts & posner (1967) tripartite progression cognitive associative autonomous stage')).toBe(
      'Lesson 13.1 • Section 1: Fitts & Posner (1967): The Tripartite Progression of Skill Acquisition'
    );
    expect(resolveValidSection('anderson act-r knowledge compilation production rules power law of practice')).toBe(
      'Lesson 13.1 • Section 2: Anderson’s ACT-R: Knowledge Compilation & Production Rules'
    );
    expect(resolveValidSection('neurobiology prefrontal-to-striatal dorsal striatum putamen basal ganglia automaticity')).toBe(
      'Lesson 13.1 • Section 3: Neurobiology of Automaticity: The Prefrontal-to-Striatal Shift'
    );
  });

  it('should return TUTOR_SYSTEM_INSTRUCTION_LESSON_13_1 for fitts-posner-stages', () => {
    const instruction = getTutorSystemInstruction('fitts-posner-stages');
    expect(instruction).toContain('Lesson 13.1: "The Three Stages of Skill Acquisition');
    expect(instruction).toContain('Paul Fitts & Michael Posner');
    expect(instruction).toContain('John R. Anderson');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE', () => {
    expect(ALL_LESSONS['fitts-posner-stages']).toBeDefined();
    const ch13 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-13-automaticity');
    expect(ch13).toBeDefined();
    const lesson = ch13?.lessons.find(l => l.id === 'fitts-posner-stages');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
