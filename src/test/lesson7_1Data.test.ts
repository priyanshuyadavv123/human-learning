import { describe, it, expect } from 'vitest';
import { LESSON_INTERFERENCE_FORGETTING } from '../data/lesson7_1Data.ts';
import { ALL_LESSONS, PRIMARY_COURSE } from '../data/courseData.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { createDefaultConceptState } from '../services/memoryStorage.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';

describe('Lesson 7.1: Proactive and Retroactive Interference Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_INTERFERENCE_FORGETTING.id).toBe('proactive-retroactive-interference');
    expect(LESSON_INTERFERENCE_FORGETTING.chapterId).toBe('ch-7-interference-reconsolidation');
    expect(LESSON_INTERFERENCE_FORGETTING.number).toBe('7.1');
    expect(LESSON_INTERFERENCE_FORGETTING.title).toBe('Proactive and Retroactive Interference');
    expect(LESSON_INTERFERENCE_FORGETTING.readingTimeMinutes).toBeGreaterThanOrEqual(15);
    expect(LESSON_INTERFERENCE_FORGETTING.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_INTERFERENCE_FORGETTING;
    expect(curiosityQuestion.headline).toContain('new framework syntax');
    expect(curiosityQuestion.teaser).toContain('cue overload');
    expect(curiosityQuestion.hookNote).toContain('John McGeoch');
    expect(curiosityQuestion.hookNote).toContain('John R. Anderson');
    expect(curiosityQuestion.hookNote).toContain('Colin Neely');
    expect(curiosityQuestion.hookNote).toContain('Fan Effect');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_INTERFERENCE_FORGETTING;
    expect(prediction.options.length).toBe(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-retroactive-collapse');
    expect(prediction.outcome.explanation).toContain('Forgetting is primarily driven by interference');
    expect(prediction.outcome.explanation).toContain('Cue Overload');
    expect(prediction.outcome.optionFeedback['opt-decay-identical']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-retroactive-collapse']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-synergy-boost']).toBeDefined();
    expect(prediction.outcome.comparisons.length).toBe(3);
    expect(prediction.outcome.evidenceDistinction).toBeTruthy();
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_INTERFERENCE_FORGETTING;
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

  it('should provide a 4-stage interactive interference & cue competition diagram', () => {
    const { diagram } = LESSON_INTERFERENCE_FORGETTING;
    expect(diagram.stages.length).toBe(4);
    expect(diagram.stages[0].id).toBe('stage-cue-overload-collision');
    expect(diagram.stages[1].id).toBe('stage-proactive-interference-blocking');
    expect(diagram.stages[2].id).toBe('stage-retroactive-interference-washout');
    expect(diagram.stages[3].id).toBe('stage-discriminative-schema-insulation');
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_INTERFERENCE_FORGETTING;
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
    const { quiz } = LESSON_INTERFERENCE_FORGETTING;
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
    const { practicalTask } = LESSON_INTERFERENCE_FORGETTING;
    expect(practicalTask.steps.length).toBe(3);
    expect(practicalTask.steps[0].title).toContain('Audit');
    expect(practicalTask.steps[1].title).toContain('Contrastive');
    expect(practicalTask.steps[2].title).toContain('Wickens');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE', () => {
    expect(ALL_LESSONS['proactive-retroactive-interference']).toBeDefined();
    const ch7 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-7-interference-reconsolidation');
    expect(ch7).toBeDefined();
    const lesson = ch7?.lessons.find(l => l.id === 'proactive-retroactive-interference');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });

  it('should register canonical concept review prompts in conceptRegistry', () => {
    const c1 = CONCEPT_REGISTRY['concept:proactive_vs_retroactive_interference'];
    expect(c1).toBeDefined();
    expect(c1.title).toContain('Proactive vs Retroactive Interference');
    expect(c1.keyCriteria.length).toBeGreaterThanOrEqual(3);

    const c2 = CONCEPT_REGISTRY['concept:cue_overload_fan_effect'];
    expect(c2).toBeDefined();
    expect(c2.title).toContain('Cue Overload');

    const c3 = CONCEPT_REGISTRY['concept:contextual_cue_discrimination_wickens'];
    expect(c3).toBeDefined();
    expect(c3.title).toContain('Contextual Cue Discrimination');
  });

  it('should map concept states to Lesson 7.1 in memoryStorage', () => {
    const nowIso = new Date().toISOString();
    const state = createDefaultConceptState('concept:proactive_vs_retroactive_interference', nowIso);
    expect(state.lessonId).toBe('proactive-retroactive-interference');
    expect(state.chapterId).toBe('ch-7-interference-reconsolidation');
  });

  it('should resolve grounding anchors and tutor instructions for Lesson 7.1', () => {
    expect(resolveValidSection('mcgeoch underwood retroactive interference trace decay')).toBe(
      'Lesson 7.1 • Section 1: McGeoch & Underwood: Proactive vs Retroactive Interference'
    );
    expect(resolveValidSection('anderson neely cue overload fan effect spreading activation')).toBe(
      'Lesson 7.1 • Section 2: Cue Overload Principle & The Fan Effect (Anderson & Neely)'
    );
    expect(resolveValidSection('delos wickens release from proactive inhibition category shift')).toBe(
      'Lesson 7.1 • Section 3: Contextual Cue Discrimination & Release from Proactive Inhibition'
    );

    const instruction = getTutorSystemInstruction('proactive-retroactive-interference');
    expect(instruction).toContain('McGeoch');
    expect(instruction).toContain('Fan Effect');
    expect(instruction).toContain('Wickens');

    const fallbackAns = findTutorAnswer('tell me about mcgeoch and underwood interference decay');
    expect(fallbackAns.title).toContain('McGeoch & Underwood');
  });
});
