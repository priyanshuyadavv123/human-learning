import { describe, it, expect } from 'vitest';
import { LESSON_SLOW_WAVE_SLEEP_REPLAY } from '../data/lesson6_1Data.ts';
import { ALL_LESSONS, PRIMARY_COURSE } from '../data/courseData.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { createDefaultConceptState } from '../services/memoryStorage.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';

describe('Lesson 6.1: Slow-Wave Sleep & Neural Replay Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_SLOW_WAVE_SLEEP_REPLAY.id).toBe('slow-wave-sleep-replay');
    expect(LESSON_SLOW_WAVE_SLEEP_REPLAY.chapterId).toBe('ch-6-sleep-replay');
    expect(LESSON_SLOW_WAVE_SLEEP_REPLAY.number).toBe('6.1');
    expect(LESSON_SLOW_WAVE_SLEEP_REPLAY.title).toBe('Slow-Wave Sleep & Neural Replay');
    expect(LESSON_SLOW_WAVE_SLEEP_REPLAY.readingTimeMinutes).toBeGreaterThanOrEqual(14);
    expect(LESSON_SLOW_WAVE_SLEEP_REPLAY.isAvailable).toBe(true);
  });

  it('should have a high-salience curiosity question with empirical citations', () => {
    const { curiosityQuestion } = LESSON_SLOW_WAVE_SLEEP_REPLAY;
    expect(curiosityQuestion.headline).toContain('2:00 AM');
    expect(curiosityQuestion.teaser).toContain('10x to 20x');
    expect(curiosityQuestion.hookNote).toContain('Matthew Wilson and Bruce McNaughton');
    expect(curiosityQuestion.hookNote).toContain('Sharp-Wave Ripples');
    expect(curiosityQuestion.hookNote).toContain('150–250 Hz');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_SLOW_WAVE_SLEEP_REPLAY;
    expect(prediction.options.length).toBe(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-compressed-swr-replay');
    expect(prediction.outcome.explanation).toContain('Spike-Timing-Dependent Plasticity');
    expect(prediction.outcome.explanation).toContain('10x–20x compression');
    expect(prediction.outcome.optionFeedback['opt-passive-inhibition']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-slow-replay']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-compressed-swr-replay']).toBeDefined();
    expect(prediction.outcome.comparisons.length).toBe(3);
    expect(prediction.outcome.evidenceDistinction).toBeTruthy();
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_SLOW_WAVE_SLEEP_REPLAY;
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

  it('should provide a 4-stage interactive consolidation diagram', () => {
    const { diagram } = LESSON_SLOW_WAVE_SLEEP_REPLAY;
    expect(diagram.stages.length).toBe(4);
    expect(diagram.stages[0].id).toBe('stage-wake-encoding');
    expect(diagram.stages[1].id).toBe('stage-sws-slow-oscillation');
    expect(diagram.stages[2].id).toBe('stage-thalamic-spindle');
    expect(diagram.stages[3].id).toBe('stage-hippocampal-swr-replay');
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_SLOW_WAVE_SLEEP_REPLAY;
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
    const { quiz } = LESSON_SLOW_WAVE_SLEEP_REPLAY;
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
    const { practicalTask } = LESSON_SLOW_WAVE_SLEEP_REPLAY;
    expect(practicalTask.steps.length).toBe(3);
    expect(practicalTask.steps[0].title).toContain('High-SWS');
    expect(practicalTask.steps[1].title).toContain('Spindle & Slow-Wave');
    expect(practicalTask.steps[2].title).toContain('Wakeful Rest');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE', () => {
    expect(ALL_LESSONS['slow-wave-sleep-replay']).toBeDefined();
    const ch6 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-6-sleep-replay');
    expect(ch6).toBeDefined();
    const lesson = ch6?.lessons.find(l => l.id === 'slow-wave-sleep-replay');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });

  it('should register canonical concept review prompts in conceptRegistry', () => {
    const c1 = CONCEPT_REGISTRY['concept:neural_replay_temporal_compression'];
    expect(c1).toBeDefined();
    expect(c1.title).toContain('Neural Replay');
    expect(c1.keyCriteria.length).toBeGreaterThanOrEqual(3);

    const c2 = CONCEPT_REGISTRY['concept:triple_phase_locking_consolidation'];
    expect(c2).toBeDefined();
    expect(c2.title).toContain('Triple Phase-Coupling');

    const c3 = CONCEPT_REGISTRY['concept:synaptic_homeostasis_downscaling'];
    expect(c3).toBeDefined();
    expect(c3.title).toContain('Synaptic Homeostasis');
  });

  it('should map concept states to Lesson 6.1 in memoryStorage', () => {
    const nowIso = new Date().toISOString();
    const state = createDefaultConceptState('concept:neural_replay_temporal_compression', nowIso);
    expect(state.lessonId).toBe('slow-wave-sleep-replay');
    expect(state.chapterId).toBe('ch-6-sleep-replay');
  });

  it('should resolve grounding anchors and tutor instructions for Lesson 6.1', () => {
    expect(resolveValidSection('wilson place cell replay')).toBe(
      'Lesson 6.1 • Section 1: Wilson & McNaughton (1994) & Sharp-Wave Ripples'
    );
    expect(resolveValidSection('triple phase sleep spindle coupling')).toBe(
      'Lesson 6.1 • Section 2: The Triple Phase-Coupling Mechanism'
    );
    expect(resolveValidSection('synaptic homeostasis downscaling tononi cirelli')).toBe(
      'Lesson 6.1 • Section 3: Synaptic Homeostasis Hypothesis vs Active Systems Consolidation'
    );

    const instruction = getTutorSystemInstruction('slow-wave-sleep-replay');
    expect(instruction).toContain('Wilson & McNaughton');
    expect(instruction).toContain('Sharp-Wave Ripples');
    expect(instruction).toContain('Synaptic Homeostasis Hypothesis');

    const fallbackAns = findTutorAnswer('tell me about place cell replay in sleep');
    expect(fallbackAns.title).toContain('Wilson & McNaughton');
  });
});
