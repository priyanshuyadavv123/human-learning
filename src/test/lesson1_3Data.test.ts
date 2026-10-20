import { describe, it, expect } from 'vitest';
import { LESSON_COGNITIVE_LOAD_SCHEMA } from '../data/lesson1_3Data.ts';
import { PRIMARY_COURSE, ALL_LESSONS, getLessonById, LESSON_HOW_LEARNING_WORKS } from '../data/courseData.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { KNOWN_LESSON_SECTIONS, resolveValidSection } from '../../server/groundingContext.ts';

describe('Lesson 1.3 & Cognitive Load Architecture Validation', () => {
  describe('Curriculum Integration (Chapter 1 Complete: 3/3 Lessons)', () => {
    it('contains exactly 26 registered chapters across 7 parts', () => {
      expect(PRIMARY_COURSE.chapters).toHaveLength(26);
    });

    it('registers Lesson 1.3 as available and correctly titled in Chapter 1', () => {
      const ch1 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-1-architecture');
      expect(ch1).toBeDefined();
      
      const lesson1_3 = ch1?.lessons.find(l => l.id === 'cognitive-load-schema');
      expect(lesson1_3).toBeDefined();
      expect(lesson1_3?.isAvailable).toBe(true);
      expect(lesson1_3?.number).toBe('1.3');
      expect(lesson1_3?.title).toBe('Cognitive Load & Schema Construction');
    });

    it('resolves Lesson 1.3 via getLessonById and ALL_LESSONS', () => {
      expect(ALL_LESSONS['cognitive-load-schema']).toBe(LESSON_COGNITIVE_LOAD_SCHEMA);
      expect(getLessonById('cognitive-load-schema')).toBe(LESSON_COGNITIVE_LOAD_SCHEMA);
      expect(getLessonById('unknown-id')).toBe(LESSON_HOW_LEARNING_WORKS);
    });
  });

  describe('15-Point Lesson Quality Standard for Lesson 1.3', () => {
    it('fulfills Point 1 & 2: Curiosity Hook with substantive cognitive rationale', () => {
      expect(LESSON_COGNITIVE_LOAD_SCHEMA.curiosityQuestion.headline).toBeTruthy();
      expect(LESSON_COGNITIVE_LOAD_SCHEMA.curiosityQuestion.teaser).toBeTruthy();
      expect(LESSON_COGNITIVE_LOAD_SCHEMA.curiosityQuestion.hookNote).toBeTruthy();
      expect(LESSON_COGNITIVE_LOAD_SCHEMA.curiosityQuestion.hookNote).toContain('Cowan, 2001');
      expect(LESSON_COGNITIVE_LOAD_SCHEMA.curiosityQuestion.hookNote).toContain('Sweller, 1988');
    });

    it('fulfills Point 3, 4 & 5: Prediction Calibration with options, outcome and empirical comparison', () => {
      const pred = LESSON_COGNITIVE_LOAD_SCHEMA.prediction;
      expect(pred.options).toHaveLength(3);
      expect(pred.outcome.winningOptionId).toBe('opt-worked-faded');
      expect(pred.outcome.headline).toContain('The Worked Example Effect');
      expect(pred.outcome.explanation).toBeTruthy();
      
      for (const opt of pred.options) {
        expect(pred.outcome.optionFeedback[opt.id]).toBeDefined();
        expect(pred.outcome.optionFeedback[opt.id].title).toBeTruthy();
        expect(pred.outcome.optionFeedback[opt.id].verdict).toBeTruthy();
        expect(pred.outcome.optionFeedback[opt.id].analysis).toBeTruthy();
      }

      expect(pred.outcome.comparisons).toHaveLength(3);
      const winner = pred.outcome.comparisons.find(c => c.isEmpiricalWinner);
      expect(winner).toBeDefined();
      expect(winner?.label).toContain('Worked Examples');
      expect(pred.outcome.evidenceDistinction).toContain('Empirical Evidence Distinction');
    });

    it('fulfills Point 6 & 7: Core Explanations with scientific status and mechanisms', () => {
      const explanations = LESSON_COGNITIVE_LOAD_SCHEMA.coreExplanations;
      expect(explanations).toHaveLength(3);

      const exp1 = explanations[0];
      expect(exp1.id).toBe('tripartite-cognitive-load');
      expect(exp1.scientificStatus).toBe('cognitive-model');
      expect(exp1.mechanisms.length).toBeGreaterThanOrEqual(3);
      expect(exp1.keyInsight).toBeTruthy();
      expect(exp1.simplifiedModelCaveat).toBeTruthy();

      const exp2 = explanations[1];
      expect(exp2.id).toBe('worked-example-split-attention');
      expect(exp2.scientificStatus).toBe('empirical-consensus');
      expect(exp2.summary).toContain('Worked Example Effect');
      expect(exp2.mechanisms[0].label).toContain('Sweller');

      const exp3 = explanations[2];
      expect(exp3.id).toBe('expertise-reversal-schema-automation');
      expect(exp3.scientificStatus).toBe('empirical-consensus');
      expect(exp3.summary).toContain('Kalyuga');
      expect(exp3.mechanisms[0].label).toContain('Chase & Simon');
    });

    it('fulfills Point 8 & 9: Cognitive Load Allocator Pipeline Diagram', () => {
      const diagram = LESSON_COGNITIVE_LOAD_SCHEMA.diagram;
      expect(diagram.title).toBeTruthy();
      expect(diagram.stages).toHaveLength(4);

      for (const stage of diagram.stages) {
        expect(stage.id).toBeTruthy();
        expect(stage.name).toBeTruthy();
        expect(stage.capacity).toBeTruthy();
        expect(stage.duration).toBeTruthy();
        expect(stage.role).toBeTruthy();
        expect(stage.failureMode).toBeTruthy();
        expect(stage.evidenceType).toBeTruthy();
        expect(stage.practicalFix).toBeTruthy();
      }

      expect(diagram.feedbackLoopDescription).toBeTruthy();
    });

    it('fulfills Point 10 & 11: Clinical Diagnostic Scenarios with evidence-based fixes', () => {
      const exercise = LESSON_COGNITIVE_LOAD_SCHEMA.exercise;
      expect(exercise.categories).toHaveLength(4);
      expect(exercise.scenarios).toHaveLength(4);

      for (const scen of exercise.scenarios) {
        expect(scen.id).toBeTruthy();
        expect(scen.realWorldContext).toBeTruthy();
        expect(scen.scenario).toBeTruthy();
        expect(scen.correctCategory).toBeTruthy();
        expect(scen.mechanismExplanation).toBeTruthy();
        expect(scen.evidenceBasedFix).toBeTruthy();
      }
    });

    it('fulfills Point 12 & 13: Formative Quiz Assessment with pedagogical rationales', () => {
      const quiz = LESSON_COGNITIVE_LOAD_SCHEMA.quiz;
      expect(quiz.passingScorePercent).toBe(75);
      expect(quiz.questions).toHaveLength(4);

      for (const q of quiz.questions) {
        expect(q.id).toBeTruthy();
        expect(q.options).toHaveLength(4);
        expect(q.options.some(o => o.id === q.correctOptionId)).toBe(true);
        expect(q.explanation).toBeTruthy();
        expect(q.pedagogicalRationale).toBeTruthy();
        expect(q.evidenceNote).toBeTruthy();
      }
    });

    it('fulfills Point 14 & 15: Actionable Faded Scaffolding Practical Protocol', () => {
      const task = LESSON_COGNITIVE_LOAD_SCHEMA.practicalTask;
      expect(task.title).toBeTruthy();
      expect(task.steps).toHaveLength(3);

      for (const step of task.steps) {
        expect(step.id).toBeTruthy();
        expect(step.number).toBeGreaterThan(0);
        expect(step.title).toBeTruthy();
        expect(step.prompt).toBeTruthy();
        expect(step.placeholder).toBeTruthy();
        expect(step.example).toBeTruthy();
        expect(step.cognitiveRationale).toBeTruthy();
      }
    });
  });

  describe('Memory Concept Registry & Section Grounding Integration', () => {
    it('registers recall prompts and discrepancy prompts for all Lesson 1.3 concepts', () => {
      const concepts = [
        'concept:cognitive_load_tripartite',
        'concept:worked_example_faded_scaffolding',
        'concept:expertise_reversal_schema_automation',
      ] as const;

      for (const cId of concepts) {
        const entry = CONCEPT_REGISTRY[cId];
        expect(entry).toBeDefined();
        expect(entry.prompt).toBeTruthy();
        expect(entry.keyCriteria.length).toBeGreaterThanOrEqual(3);
        expect(entry.canonicalAnswer).toBeTruthy();
        expect(entry.discrepancyPrompt).toBeTruthy();
      }
    });

    it('maps Lesson 1.3 section anchors accurately in server grounding resolver', () => {
      expect(KNOWN_LESSON_SECTIONS).toContain('Lesson 1.3 • Section 1: The Tripartite Model of Cognitive Load');
      expect(KNOWN_LESSON_SECTIONS).toContain('Lesson 1.3 • Section 2: The Worked Example & Split-Attention Effects');
      expect(KNOWN_LESSON_SECTIONS).toContain('Lesson 1.3 • Section 3: The Expertise Reversal Effect & Schema Automation');
      expect(KNOWN_LESSON_SECTIONS).toContain('Lesson 1.3 • Faded Scaffolding Protocol');

      expect(resolveValidSection('tripartite cognitive load')).toBe('Lesson 1.3 • Section 1: The Tripartite Model of Cognitive Load');
      expect(resolveValidSection('worked example effect')).toBe('Lesson 1.3 • Section 2: The Worked Example & Split-Attention Effects');
      expect(resolveValidSection('expertise reversal effect')).toBe('Lesson 1.3 • Section 3: The Expertise Reversal Effect & Schema Automation');
      expect(resolveValidSection('cognitive load allocator')).toBe('Lesson 1.3 • Cognitive Load Allocator Pipeline');
    });
  });
});
