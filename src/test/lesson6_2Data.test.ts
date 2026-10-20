import { describe, it, expect } from 'vitest';
import { LESSON_TARGETED_MEMORY_REACTIVATION } from '../data/lesson6_2Data.ts';
import { ALL_LESSONS, PRIMARY_COURSE } from '../data/courseData.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { createDefaultConceptState } from '../services/memoryStorage.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';

describe('Lesson 6.2: Targeted Memory Reactivation & Rest Cycles Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_TARGETED_MEMORY_REACTIVATION.id).toBe('targeted-memory-reactivation');
    expect(LESSON_TARGETED_MEMORY_REACTIVATION.chapterId).toBe('ch-6-sleep-replay');
    expect(LESSON_TARGETED_MEMORY_REACTIVATION.number).toBe('6.2');
    expect(LESSON_TARGETED_MEMORY_REACTIVATION.title).toBe('Targeted Memory Reactivation & Rest Cycles');
    expect(LESSON_TARGETED_MEMORY_REACTIVATION.readingTimeMinutes).toBeGreaterThanOrEqual(14);
    expect(LESSON_TARGETED_MEMORY_REACTIVATION.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_TARGETED_MEMORY_REACTIVATION;
    expect(curiosityQuestion.headline).toContain('without ever waking up');
    expect(curiosityQuestion.teaser).toContain('double retention');
    expect(curiosityQuestion.hookNote).toContain('Björn Rasch');
    expect(curiosityQuestion.hookNote).toContain('Jan Born');
    expect(curiosityQuestion.hookNote).toContain('Rudoy');
    expect(curiosityQuestion.hookNote).toContain('Dewar');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_TARGETED_MEMORY_REACTIVATION;
    expect(prediction.options.length).toBe(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-tmr-selective-strengthening');
    expect(prediction.outcome.explanation).toContain('Targeted Memory Reactivation');
    expect(prediction.outcome.explanation).toContain('Slow-Wave Sleep');
    expect(prediction.outcome.optionFeedback['opt-tmr-no-effect']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-tmr-selective-strengthening']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-tmr-arousal-decay']).toBeDefined();
    expect(prediction.outcome.comparisons.length).toBe(3);
    expect(prediction.outcome.evidenceDistinction).toBeTruthy();
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_TARGETED_MEMORY_REACTIVATION;
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

  it('should provide a 4-stage interactive reactivation & rest diagram', () => {
    const { diagram } = LESSON_TARGETED_MEMORY_REACTIVATION;
    expect(diagram.stages.length).toBe(4);
    expect(diagram.stages[0].id).toBe('stage-encoding-cue-tagging');
    expect(diagram.stages[1].id).toBe('stage-wakeful-rest-immediate-replay');
    expect(diagram.stages[2].id).toBe('stage-sws-tmr-cue-delivery');
    expect(diagram.stages[3].id).toBe('stage-neocortical-stabilization');
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_TARGETED_MEMORY_REACTIVATION;
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
    const { quiz } = LESSON_TARGETED_MEMORY_REACTIVATION;
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
    const { practicalTask } = LESSON_TARGETED_MEMORY_REACTIVATION;
    expect(practicalTask.steps.length).toBe(3);
    expect(practicalTask.steps[0].title).toContain('Acoustic Anchor');
    expect(practicalTask.steps[1].title).toContain('Dewar');
    expect(practicalTask.steps[2].title).toContain('TMR');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE', () => {
    expect(ALL_LESSONS['targeted-memory-reactivation']).toBeDefined();
    const ch6 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-6-sleep-replay');
    expect(ch6).toBeDefined();
    const lesson = ch6?.lessons.find(l => l.id === 'targeted-memory-reactivation');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });

  it('should register canonical concept review prompts in conceptRegistry', () => {
    const c1 = CONCEPT_REGISTRY['concept:targeted_memory_reactivation_cueing'];
    expect(c1).toBeDefined();
    expect(c1.title).toContain('Targeted Memory Reactivation');
    expect(c1.keyCriteria.length).toBeGreaterThanOrEqual(3);

    const c2 = CONCEPT_REGISTRY['concept:wakeful_rest_awake_replay'];
    expect(c2).toBeDefined();
    expect(c2.title).toContain('Wakeful Rest');

    const c3 = CONCEPT_REGISTRY['concept:ultradian_basic_rest_activity_cycle'];
    expect(c3).toBeDefined();
    expect(c3.title).toContain('Ultradian Rest Cycles');
  });

  it('should map concept states to Lesson 6.2 in memoryStorage', () => {
    const nowIso = new Date().toISOString();
    const state = createDefaultConceptState('concept:targeted_memory_reactivation_cueing', nowIso);
    expect(state.lessonId).toBe('targeted-memory-reactivation');
    expect(state.chapterId).toBe('ch-6-sleep-replay');
  });

  it('should resolve grounding anchors and tutor instructions for Lesson 6.2', () => {
    expect(resolveValidSection('rasch rudoy targeted memory reactivation cueing')).toBe(
      'Lesson 6.2 • Section 1: Targeted Memory Reactivation (TMR): The Science of Cued Replay'
    );
    expect(resolveValidSection('michaela dewar wakeful rest awake sharp-wave ripple')).toBe(
      'Lesson 6.2 • Section 2: Wakeful Rest & Awake Sharp-Wave Ripples'
    );
    expect(resolveValidSection('kleitman ultradian basic rest activity cycle 90 minute')).toBe(
      'Lesson 6.2 • Section 3: Ultradian Rest Cycles & The Basic Rest-Activity Cycle (BRAC)'
    );

    const instruction = getTutorSystemInstruction('targeted-memory-reactivation');
    expect(instruction).toContain('Rasch');
    expect(instruction).toContain('Dewar');
    expect(instruction).toContain('Basic Rest-Activity Cycle');

    const fallbackAns = findTutorAnswer('tell me about dewar wakeful rest and phone distraction');
    expect(fallbackAns.title).toContain('Wakeful Rest');
  });
});
