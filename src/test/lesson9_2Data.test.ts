import { describe, it, expect } from 'vitest';
import { LESSON_ABSTRACTION_LADDERS } from '../data/lesson9_2Data.ts';
import { ALL_LESSONS, PRIMARY_COURSE } from '../data/courseData.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';

describe('Lesson 9.2: Abstraction Ladders & Mental Models Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_ABSTRACTION_LADDERS.id).toBe('abstraction-ladders');
    expect(LESSON_ABSTRACTION_LADDERS.chapterId).toBe('ch-9-analogy-bridging');
    expect(LESSON_ABSTRACTION_LADDERS.number).toBe('9.2');
    expect(LESSON_ABSTRACTION_LADDERS.title).toBe('Abstraction Ladders & Mental Models');
    expect(LESSON_ABSTRACTION_LADDERS.readingTimeMinutes).toBeGreaterThanOrEqual(14);
    expect(LESSON_ABSTRACTION_LADDERS.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_ABSTRACTION_LADDERS;
    expect(curiosityQuestion.headline).toContain('mathematical theorists');
    expect(curiosityQuestion.teaser).toContain('Ladder of Abstraction');
    expect(curiosityQuestion.hookNote).toContain('S.I. Hayakawa');
    expect(curiosityQuestion.hookNote).toContain('Kenneth Craik');
    expect(curiosityQuestion.hookNote).toContain('Philip Johnson-Laird');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_ABSTRACTION_LADDERS;
    expect(prediction.options.length).toBe(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-bidirectional-ladder-primacy');
    expect(prediction.outcome.headline).toContain('Hayakawa, 1939');
    expect(prediction.outcome.explanation).toContain('bi-directional');
    expect(prediction.outcome.optionFeedback['opt-pure-formal-superiority']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-bidirectional-ladder-primacy']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-concrete-only-sufficiency']).toBeDefined();
    expect(prediction.outcome.comparisons.length).toBe(3);
    expect(prediction.outcome.evidenceDistinction).toBeTruthy();
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_ABSTRACTION_LADDERS;
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

  it('should provide a 4-stage interactive vertical abstraction ladder diagram', () => {
    const { diagram } = LESSON_ABSTRACTION_LADDERS;
    expect(diagram.stages.length).toBe(4);
    expect(diagram.stages[0].id).toBe('stage-rung-zero-physical-ground');
    expect(diagram.stages[1].id).toBe('stage-rung-one-operational-primitives');
    expect(diagram.stages[2].id).toBe('stage-rung-two-architectural-schemas');
    expect(diagram.stages[3].id).toBe('stage-rung-three-universal-invariants');
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_ABSTRACTION_LADDERS;
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
    const { quiz } = LESSON_ABSTRACTION_LADDERS;
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
    const { practicalTask } = LESSON_ABSTRACTION_LADDERS;
    expect(practicalTask.steps.length).toBe(3);
    expect(practicalTask.steps[0].title).toContain('4-Tier Abstraction Ladder');
    expect(practicalTask.steps[1].title).toContain('Counterfactual Simulation');
    expect(practicalTask.steps[2].title).toContain('Principle-of-Truth Blindness');
  });

  it('should register all Lesson 9.2 concepts in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:hayakawa_abstraction_ladder_vertical_mobility',
      'concept:craik_johnson_laird_mental_models_simulation',
      'concept:bret_victor_dynamic_abstraction_coupling',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const entry = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(entry.keyCriteria.length).toBeGreaterThanOrEqual(3);
      expect(entry.canonicalAnswer.length).toBeGreaterThan(50);
      expect(entry.lessonSectionAnchor).toContain('Lesson 9.2');
    });
  });

  it('should register all Lesson 9.2 misconceptions in KNOWN_MISCONCEPTIONS', () => {
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:theory_alone_creates_operational_mastery');
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:mental_models_are_passive_definitions');
  });

  it('should provide accurate offline tutor knowledge base answers for Lesson 9.2 queries', () => {
    const q1 = findTutorAnswer('How does Hayakawa define dead-level abstracting and the ladder of abstraction?');
    expect(q1.referencedSection).toContain('Lesson 9.2');
    expect(q1.detailedResponse).toContain('Hayakawa');

    const q2 = findTutorAnswer('How do Kenneth Craik and Johnson-Laird describe mental models and the principle of truth?');
    expect(q2.referencedSection).toContain('Lesson 9.2');
    expect(q2.detailedResponse).toContain('Craik');

    const q3 = findTutorAnswer('What is Bret Victor dynamic abstraction coupling and parameter sweeping?');
    expect(q3.referencedSection).toContain('Lesson 9.2');
    expect(q3.detailedResponse).toContain('Victor');
  });

  it('should resolve grounding anchors correctly for Lesson 9.2 topics', () => {
    expect(resolveValidSection('si hayakawa ladder of abstraction')).toBe(
      'Lesson 9.2 • Section 1: S.I. Hayakawa: The Ladder of Abstraction & Vertical Mobility'
    );
    expect(resolveValidSection('kenneth craik johnson-laird mental models simulation')).toBe(
      'Lesson 9.2 • Section 2: Craik & Johnson-Laird: Mental Models as Internal Simulation Engines'
    );
    expect(resolveValidSection('bret victor parameter sweep dynamic abstraction')).toBe(
      'Lesson 9.2 • Section 3: Bret Victor: Up and Down the Ladder of Abstraction in Systems Design'
    );
  });

  it('should return TUTOR_SYSTEM_INSTRUCTION_LESSON_9_2 for abstraction-ladders', () => {
    const instruction = getTutorSystemInstruction('abstraction-ladders');
    expect(instruction).toContain('Lesson 9.2: "Abstraction Ladders & Mental Models');
    expect(instruction).toContain('S.I. Hayakawa');
    expect(instruction).toContain('Kenneth Craik');
    expect(instruction).toContain('Bret Victor');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE', () => {
    expect(ALL_LESSONS['abstraction-ladders']).toBeDefined();
    const ch9 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-9-analogy-bridging');
    expect(ch9).toBeDefined();
    const lesson = ch9?.lessons.find(l => l.id === 'abstraction-ladders');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
