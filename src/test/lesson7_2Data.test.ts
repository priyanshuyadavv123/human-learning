import { describe, it, expect } from 'vitest';
import { LESSON_RECONSOLIDATION_UPDATING } from '../data/lesson7_2Data.ts';
import { ALL_LESSONS, PRIMARY_COURSE } from '../data/courseData.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { createDefaultConceptState } from '../services/memoryStorage.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';

describe('Lesson 7.2: Memory Reconsolidation & Updating Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_RECONSOLIDATION_UPDATING.id).toBe('reconsolidation-updating');
    expect(LESSON_RECONSOLIDATION_UPDATING.chapterId).toBe('ch-7-interference-reconsolidation');
    expect(LESSON_RECONSOLIDATION_UPDATING.number).toBe('7.2');
    expect(LESSON_RECONSOLIDATION_UPDATING.title).toBe('Memory Reconsolidation & Updating');
    expect(LESSON_RECONSOLIDATION_UPDATING.readingTimeMinutes).toBeGreaterThanOrEqual(16);
    expect(LESSON_RECONSOLIDATION_UPDATING.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_RECONSOLIDATION_UPDATING;
    expect(curiosityQuestion.headline).toContain('modified, updated, or rewritten');
    expect(curiosityQuestion.teaser).toContain('malleable state');
    expect(curiosityQuestion.hookNote).toContain('Karim Nader');
    expect(curiosityQuestion.hookNote).toContain('Glenn Schafe');
    expect(curiosityQuestion.hookNote).toContain('Joseph LeDoux');
    expect(curiosityQuestion.hookNote).toContain('Pedreira');
    expect(curiosityQuestion.hookNote).toContain('Schiller');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_RECONSOLIDATION_UPDATING;
    expect(prediction.options.length).toBe(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-reconsolidation-destabilization');
    expect(prediction.outcome.explanation).toContain('Consolidated memory traces are not immutable files');
    expect(prediction.outcome.explanation).toContain('Prediction Error');
    expect(prediction.outcome.optionFeedback['opt-passive-identical']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-reconsolidation-destabilization']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-backfire-entrenchment']).toBeDefined();
    expect(prediction.outcome.comparisons.length).toBe(3);
    expect(prediction.outcome.evidenceDistinction).toBeTruthy();
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_RECONSOLIDATION_UPDATING;
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

  it('should provide a 4-stage interactive reconsolidation & updating diagram', () => {
    const { diagram } = LESSON_RECONSOLIDATION_UPDATING;
    expect(diagram.stages.length).toBe(4);
    expect(diagram.stages[0].id).toBe('stage-consolidated-trace-locked');
    expect(diagram.stages[1].id).toBe('stage-retrieval-prediction-error-labilization');
    expect(diagram.stages[2].id).toBe('stage-corrective-incorporation-window');
    expect(diagram.stages[3].id).toBe('stage-protein-synthesis-reconsolidation');
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_RECONSOLIDATION_UPDATING;
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
    const { quiz } = LESSON_RECONSOLIDATION_UPDATING;
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
    const { practicalTask } = LESSON_RECONSOLIDATION_UPDATING;
    expect(practicalTask.steps.length).toBe(3);
    expect(practicalTask.steps[0].title).toContain('High-Confidence');
    expect(practicalTask.steps[1].title).toContain('Prediction Error');
    expect(practicalTask.steps[2].title).toContain('4-Hour');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE', () => {
    expect(ALL_LESSONS['reconsolidation-updating']).toBeDefined();
    const ch7 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-7-interference-reconsolidation');
    expect(ch7).toBeDefined();
    const lesson = ch7?.lessons.find(l => l.id === 'reconsolidation-updating');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });

  it('should register canonical concept review prompts in conceptRegistry', () => {
    const c1 = CONCEPT_REGISTRY['concept:memory_reconsolidation_labilization'];
    expect(c1).toBeDefined();
    expect(c1.title).toContain('Reconsolidation');
    expect(c1.keyCriteria.length).toBeGreaterThanOrEqual(3);

    const c2 = CONCEPT_REGISTRY['concept:boundary_conditions_prediction_error_reconsolidation'];
    expect(c2).toBeDefined();
    expect(c2.title).toContain('Boundary Conditions');

    const c3 = CONCEPT_REGISTRY['concept:schema_updating_updating_window'];
    expect(c3).toBeDefined();
    expect(c3.title).toContain('Schema Updating');
  });

  it('should map concept states to Lesson 7.2 in memoryStorage', () => {
    const nowIso = new Date().toISOString();
    const state = createDefaultConceptState('concept:memory_reconsolidation_labilization', nowIso);
    expect(state.lessonId).toBe('reconsolidation-updating');
    expect(state.chapterId).toBe('ch-7-interference-reconsolidation');
  });

  it('should resolve grounding anchors and tutor instructions for Lesson 7.2', () => {
    expect(resolveValidSection('karim nader synaptic destabilization reconsolidation labilization')).toBe(
      'Lesson 7.2 • Section 1: Nader et al. (2000) & Synaptic Destabilization'
    );
    expect(resolveValidSection('pedreira exton-mcguinness prediction error boundary conditions')).toBe(
      'Lesson 7.2 • Section 2: Boundary Conditions & Prediction Errors (Pedreira et al., 2004)'
    );
    expect(resolveValidSection('schiller monfils 4-hour opportunity window overwriting outdated schemas')).toBe(
      'Lesson 7.2 • Section 3: The 4-Hour Opportunity Window: Overwriting Outdated Schemas'
    );

    const instruction = getTutorSystemInstruction('reconsolidation-updating');
    expect(instruction).toContain('Nader');
    expect(instruction).toContain('Pedreira');
    expect(instruction).toContain('Schiller');

    const fallbackAns = findTutorAnswer('tell me about nader reconsolidation and protein synthesis');
    expect(fallbackAns.title).toContain('Nader');
  });
});
