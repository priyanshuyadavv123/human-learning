import { describe, it, expect } from 'vitest';
import { LESSON_PARADOX_OF_AUTOMATION } from '../data/lesson13_2Data.ts';
import { ALL_LESSONS, PRIMARY_COURSE } from '../data/courseData.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';

describe('Lesson 13.2: The Paradox of Automation Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_PARADOX_OF_AUTOMATION.id).toBe('paradox-of-automation');
    expect(LESSON_PARADOX_OF_AUTOMATION.chapterId).toBe('ch-13-automaticity');
    expect(LESSON_PARADOX_OF_AUTOMATION.number).toBe('13.2');
    expect(LESSON_PARADOX_OF_AUTOMATION.title).toBe('The Paradox of Automation');
    expect(LESSON_PARADOX_OF_AUTOMATION.readingTimeMinutes).toBeGreaterThanOrEqual(14);
    expect(LESSON_PARADOX_OF_AUTOMATION.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_PARADOX_OF_AUTOMATION;
    expect(curiosityQuestion.headline).toContain('automated flight control');
    expect(curiosityQuestion.teaser).toContain('situational awareness');
    expect(curiosityQuestion.hookNote).toContain('Lisanne Bainbridge');
    expect(curiosityQuestion.hookNote).toContain('Luchins');
    expect(curiosityQuestion.hookNote).toContain('Endsley');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_PARADOX_OF_AUTOMATION;
    expect(prediction.options.length).toBe(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-bainbridge-out-of-the-loop-collapse');
    expect(prediction.outcome.headline).toContain('Bainbridge, 1983');
    expect(prediction.outcome.explanation).toContain('situational awareness');
    expect(prediction.outcome.optionFeedback['opt-automation-preserves-mental-energy']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-bainbridge-out-of-the-loop-collapse']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-identical-crisis-response']).toBeDefined();
    expect(prediction.outcome.comparisons.length).toBe(2);
    expect(prediction.outcome.evidenceDistinction).toBeTruthy();
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_PARADOX_OF_AUTOMATION;
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

  it('should provide a 4-stage interactive automation paradox diagram', () => {
    const { diagram } = LESSON_PARADOX_OF_AUTOMATION;
    expect(diagram.stages.length).toBe(4);
    expect(diagram.stages[0].id).toBe('stage-hyper-automation-routine');
    expect(diagram.stages[1].id).toBe('stage-passive-monitoring-deskilling');
    expect(diagram.stages[2].id).toBe('stage-unprecedented-edge-case-anomaly');
    expect(diagram.stages[3].id).toBe('stage-einstellung-mechanized-collapse');
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_PARADOX_OF_AUTOMATION;
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
    const { quiz } = LESSON_PARADOX_OF_AUTOMATION;
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
    const { practicalTask } = LESSON_PARADOX_OF_AUTOMATION;
    expect(practicalTask.steps.length).toBe(3);
    expect(practicalTask.steps[0].title).toContain('Hyper-Automated');
    expect(practicalTask.steps[1].title).toContain('Manual Reversion Drill');
    expect(practicalTask.steps[2].title).toContain('Einstellung Circuit Breaker');
  });

  it('should register all Lesson 13.2 concepts in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:bainbridge_ironies_of_automation_deskilling',
      'concept:luchins_einstellung_effect_cognitive_entrenchment',
      'concept:endsley_situational_awareness_de_automation',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const entry = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(entry.keyCriteria.length).toBeGreaterThanOrEqual(3);
      expect(entry.canonicalAnswer.length).toBeGreaterThan(50);
      expect(entry.lessonSectionAnchor).toContain('Lesson 13.2');
    });
  });

  it('should register all Lesson 13.2 misconceptions in KNOWN_MISCONCEPTIONS', () => {
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:automation_eliminates_need_for_human_expertise');
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:automated_routines_always_generalize_to_novel_crises');
  });

  it('should provide accurate offline tutor knowledge base answers for Lesson 13.2 queries', () => {
    const q1 = findTutorAnswer('What are Lisanne Bainbridge ironies of automation and cognitive deskilling?');
    expect(q1.referencedSection).toContain('Lesson 13.2');
    expect(q1.detailedResponse).toContain('Bainbridge');

    const q2 = findTutorAnswer('How does the Luchins Einstellung effect create mechanized mental sets in experts?');
    expect(q2.referencedSection).toContain('Lesson 13.2');
    expect(q2.detailedResponse).toContain('Luchins');

    const q3 = findTutorAnswer('What is deliberate de-automation and Endsley situational awareness?');
    expect(q3.referencedSection).toContain('Lesson 13.2');
    expect(q3.detailedResponse).toContain('Endsley');
  });

  it('should resolve grounding anchors correctly for Lesson 13.2 topics', () => {
    expect(resolveValidSection('lisanne bainbridge ironies of automation cognitive deskilling out-of-the-loop')).toBe(
      'Lesson 13.2 • Section 1: Lisanne Bainbridge (1983): The Ironies of Automation'
    );
    expect(resolveValidSection('abraham luchins einstellung effect mechanized mental set water jar')).toBe(
      'Lesson 13.2 • Section 2: The Einstellung Effect: Mechanized Habits and Blind Spots'
    );
    expect(resolveValidSection('deliberate de-automation mica endsley situational awareness chaos drill')).toBe(
      'Lesson 13.2 • Section 3: Deliberate De-Automation: Designing Cognitive Friction for Resilience'
    );
  });

  it('should return TUTOR_SYSTEM_INSTRUCTION_LESSON_13_2 for paradox-of-automation', () => {
    const instruction = getTutorSystemInstruction('paradox-of-automation');
    expect(instruction).toContain('Lesson 13.2: "The Paradox of Automation');
    expect(instruction).toContain('Lisanne Bainbridge');
    expect(instruction).toContain('Abraham Luchins');
    expect(instruction).toContain('Mica Endsley');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE', () => {
    expect(ALL_LESSONS['paradox-of-automation']).toBeDefined();
    const ch13 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-13-automaticity');
    expect(ch13).toBeDefined();
    const lesson = ch13?.lessons.find(l => l.id === 'paradox-of-automation');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
