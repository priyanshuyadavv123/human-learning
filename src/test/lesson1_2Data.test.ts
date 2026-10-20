import { describe, it, expect } from 'vitest';
import { LESSON_ILLUSION_OF_COMPETENCE } from '../data/lesson1_2Data.ts';
import { PRIMARY_COURSE, ALL_LESSONS, getLessonById, LESSON_HOW_LEARNING_WORKS } from '../data/courseData.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { KNOWN_LESSON_SECTIONS, resolveValidSection } from '../../server/groundingContext.ts';

describe('Lesson 1.2 & Dynamic Curriculum Validation', () => {
  describe('Curriculum Architecture Invariant (26 Chapters / 7 Parts)', () => {
    it('contains exactly 26 registered chapters across 7 parts', () => {
      expect(PRIMARY_COURSE.chapters).toHaveLength(26);
      
      const numbers = PRIMARY_COURSE.chapters.map(c => c.number);
      for (let i = 1; i <= 26; i++) {
        expect(numbers).toContain(i);
      }
    });

    it('registers Lesson 1.2 as available and correctly titled', () => {
      const ch1 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-1-architecture');
      expect(ch1).toBeDefined();
      
      const lesson1_2 = ch1?.lessons.find(l => l.id === 'illusion-of-competence');
      expect(lesson1_2).toBeDefined();
      expect(lesson1_2?.isAvailable).toBe(true);
      expect(lesson1_2?.number).toBe('1.2');
      expect(lesson1_2?.title).toBe('The Illusion of Competence');
    });

    it('resolves Lesson 1.1 and Lesson 1.2 via getLessonById and ALL_LESSONS', () => {
      expect(ALL_LESSONS['how-learning-actually-works']).toBe(LESSON_HOW_LEARNING_WORKS);
      expect(ALL_LESSONS['illusion-of-competence']).toBe(LESSON_ILLUSION_OF_COMPETENCE);
      expect(getLessonById('illusion-of-competence')).toBe(LESSON_ILLUSION_OF_COMPETENCE);
      expect(getLessonById('unknown-id')).toBe(LESSON_HOW_LEARNING_WORKS);
    });
  });

  describe('15-Point Lesson Quality Standard for Lesson 1.2', () => {
    it('fulfills Point 1 & 2: Curiosity Hook with substantive cognitive rationale', () => {
      expect(LESSON_ILLUSION_OF_COMPETENCE.curiosityQuestion.headline).toBeTruthy();
      expect(LESSON_ILLUSION_OF_COMPETENCE.curiosityQuestion.teaser).toBeTruthy();
      expect(LESSON_ILLUSION_OF_COMPETENCE.curiosityQuestion.hookNote).toBeTruthy();
      expect(LESSON_ILLUSION_OF_COMPETENCE.curiosityQuestion.hookNote).toContain('perceptual fluency');
    });

    it('fulfills Point 3, 4 & 5: Prediction Calibration with options, outcome and empirical comparison', () => {
      const pred = LESSON_ILLUSION_OF_COMPETENCE.prediction;
      expect(pred.options).toHaveLength(3);
      expect(pred.outcome.winningOptionId).toBe('opt-blank-reconstruction');
      expect(pred.outcome.headline).toContain('Blank-Sheet Generative Reconstruction');
      expect(pred.outcome.explanation).toBeTruthy();
      
      // All options have specific feedback
      for (const opt of pred.options) {
        expect(pred.outcome.optionFeedback[opt.id]).toBeDefined();
        expect(pred.outcome.optionFeedback[opt.id].title).toBeTruthy();
        expect(pred.outcome.optionFeedback[opt.id].verdict).toBeTruthy();
        expect(pred.outcome.optionFeedback[opt.id].analysis).toBeTruthy();
      }

      // Empirical comparison matrix
      expect(pred.outcome.comparisons).toHaveLength(3);
      const winner = pred.outcome.comparisons.find(c => c.isEmpiricalWinner);
      expect(winner).toBeDefined();
      expect(winner?.label).toContain('Blank-Sheet');
      expect(pred.outcome.evidenceDistinction).toContain('Empirical Evidence Distinction');
    });

    it('fulfills Point 6 & 7: Core Explanations with scientific status and mechanisms', () => {
      const explanations = LESSON_ILLUSION_OF_COMPETENCE.coreExplanations;
      expect(explanations).toHaveLength(3);

      const exp1 = explanations[0];
      expect(exp1.id).toBe('perceptual-fluency-trap');
      expect(exp1.scientificStatus).toBe('empirical-consensus');
      expect(exp1.mechanisms.length).toBeGreaterThanOrEqual(2);
      expect(exp1.keyInsight).toBeTruthy();
      expect(exp1.simplifiedModelCaveat).toBeTruthy();

      const exp2 = explanations[1];
      expect(exp2.id).toBe('generation-effect-mechanics');
      expect(exp2.scientificStatus).toBe('empirical-consensus');
      expect(exp2.mechanisms[0].label).toContain('Slamecka & Graf');

      const exp3 = explanations[2];
      expect(exp3.id).toBe('metacognitive-monitoring-jol');
      expect(exp3.scientificStatus).toBe('neurobiological-mechanism');
      expect(exp3.mechanisms[0].label).toContain('Nelson & Dunlosky');
    });

    it('fulfills Point 8 & 9: Metacognitive Calibration Pipeline Diagram', () => {
      const diagram = LESSON_ILLUSION_OF_COMPETENCE.diagram;
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
      const exercise = LESSON_ILLUSION_OF_COMPETENCE.exercise;
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
      const quiz = LESSON_ILLUSION_OF_COMPETENCE.quiz;
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

    it('fulfills Point 14 & 15: Actionable Blank-Sheet Practical Protocol', () => {
      const task = LESSON_ILLUSION_OF_COMPETENCE.practicalTask;
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
    it('registers recall prompts and discrepancy prompts for all Lesson 1.2 concepts', () => {
      const concepts = [
        'concept:fluency_illusion_recognition',
        'concept:generation_effect_reconstruction',
        'concept:delayed_judgment_of_learning',
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

    it('maps Lesson 1.2 section anchors accurately in server grounding resolver', () => {
      expect(KNOWN_LESSON_SECTIONS).toContain('Lesson 1.2 • Section 1: The Perceptual Fluency Trap');
      expect(KNOWN_LESSON_SECTIONS).toContain('Lesson 1.2 • Section 2: The Generation Effect & Desirable Difficulty');
      expect(KNOWN_LESSON_SECTIONS).toContain('Lesson 1.2 • Section 3: Metacognitive Calibration & Delayed JOLs');
      expect(KNOWN_LESSON_SECTIONS).toContain('Lesson 1.2 • The Blank-Sheet Audit Protocol');

      expect(resolveValidSection('generation effect')).toBe('Lesson 1.2 • Section 2: The Generation Effect & Desirable Difficulty');
      expect(resolveValidSection('delayed JOL')).toBe('Lesson 1.2 • Section 3: Metacognitive Calibration & Delayed JOLs');
      expect(resolveValidSection('blank sheet protocol')).toBe('Lesson 1.2 • The Blank-Sheet Audit Protocol');
    });
  });
});
