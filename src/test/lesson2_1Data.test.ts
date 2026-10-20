import { describe, it, expect } from 'vitest';
import { LESSON_TESTING_EFFECT_DESIRABLE_DIFFICULTY } from '../data/lesson2_1Data.ts';
import { ALL_LESSONS } from '../data/courseData.ts';
import { LESSON_CONCEPT_MAPPINGS } from '../context/LearningContext.tsx';
import { 
  KNOWN_CONCEPTS, 
  KNOWN_MISCONCEPTIONS 
} from '../types/memory.ts';
import { 
  KNOWN_LESSON_SECTIONS, 
  resolveValidSection,
  getTutorSystemInstruction 
} from '../../server/groundingContext.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';

describe('Lesson 2.1 Data Integrity & Quality Standard Suite', () => {
  it('1. satisfies lesson metadata invariants', () => {
    expect(LESSON_TESTING_EFFECT_DESIRABLE_DIFFICULTY.id).toBe('testing-effect-mechanics');
    expect(LESSON_TESTING_EFFECT_DESIRABLE_DIFFICULTY.chapterId).toBe('ch-2-retrieval-spacing');
    expect(LESSON_TESTING_EFFECT_DESIRABLE_DIFFICULTY.number).toBe('2.1');
    expect(LESSON_TESTING_EFFECT_DESIRABLE_DIFFICULTY.title).toBe('The Testing Effect & Desirable Difficulty');
    expect(LESSON_TESTING_EFFECT_DESIRABLE_DIFFICULTY.readingTimeMinutes).toBeGreaterThanOrEqual(12);
    expect(LESSON_TESTING_EFFECT_DESIRABLE_DIFFICULTY.isAvailable).toBe(true);
    expect(ALL_LESSONS['testing-effect-mechanics']).toBeDefined();
  });

  it('2. provides an authentic, literature-grounded curiosity hook', () => {
    const hook = LESSON_TESTING_EFFECT_DESIRABLE_DIFFICULTY.curiosityQuestion;
    expect(hook.headline).toContain('2006 study');
    expect(hook.teaser).toBeTruthy();
    expect(hook.hookNote).toContain('Roediger & Karpicke');
    expect(hook.hookNote).toContain('Bjork');
  });

  it('3. implements an empirical prediction interaction with 3 options and verified outcome', () => {
    const pred = LESSON_TESTING_EFFECT_DESIRABLE_DIFFICULTY.prediction;
    expect(pred.options.length).toBe(3);
    expect(pred.outcome.winningOptionId).toBe('opt-sttt');
    expect(pred.outcome.comparisons.length).toBe(3);
    
    // Every option must have feedback
    for (const opt of pred.options) {
      expect(pred.outcome.optionFeedback[opt.id]).toBeDefined();
      expect(pred.outcome.optionFeedback[opt.id].title).toBeTruthy();
      expect(pred.outcome.optionFeedback[opt.id].verdict).toBeTruthy();
      expect(pred.outcome.optionFeedback[opt.id].analysis).toBeTruthy();
    }

    const winnerComparison = pred.outcome.comparisons.find(c => c.isEmpiricalWinner);
    expect(winnerComparison).toBeDefined();
    expect(winnerComparison?.label).toContain('Repeated Retrieval');
  });

  it('4. provides 3 scientifically grounded core explanations with mechanisms and caveats', () => {
    const core = LESSON_TESTING_EFFECT_DESIRABLE_DIFFICULTY.coreExplanations;
    expect(core.length).toBe(3);

    for (const exp of core) {
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

    // Specific mechanisms present
    expect(core[0].mechanisms.some(m => m.label.includes('Modifier'))).toBe(true);
    expect(core[1].mechanisms.some(m => m.label.includes('Storage Strength'))).toBe(true);
    expect(core[2].mechanisms.some(m => m.label.includes('Reconsolidation') || m.label.includes('Destabilization'))).toBe(true);
  });

  it('5. provides a 4-stage interactive memory modification engine diagram', () => {
    const diag = LESSON_TESTING_EFFECT_DESIRABLE_DIFFICULTY.diagram;
    expect(diag.stages.length).toBe(4);
    expect(diag.title).toContain('Retrieval & Memory Modification Engine');
    
    for (const s of diag.stages) {
      expect(s.name).toBeTruthy();
      expect(s.capacity).toBeTruthy();
      expect(s.duration).toBeTruthy();
      expect(s.role.length).toBeGreaterThan(20);
      expect(s.failureMode).toBeTruthy();
      expect(s.practicalFix).toBeTruthy();
    }

    expect(diag.feedbackLoopDescription).toBeTruthy();
  });

  it('6. provides a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const ex = LESSON_TESTING_EFFECT_DESIRABLE_DIFFICULTY.exercise;
    expect(ex.categories.length).toBe(4);
    expect(ex.scenarios.length).toBe(4);

    for (const scen of ex.scenarios) {
      expect(scen.realWorldContext).toBeTruthy();
      expect(scen.scenario.length).toBeGreaterThan(40);
      expect(ex.categories.some(c => c.id === scen.correctCategory)).toBe(true);
      expect(scen.mechanismExplanation.length).toBeGreaterThan(30);
      expect(scen.evidenceBasedFix.length).toBeGreaterThan(20);
    }
  });

  it('7. provides a 4-question formative quiz with rationales and literature citations', () => {
    const quiz = LESSON_TESTING_EFFECT_DESIRABLE_DIFFICULTY.quiz;
    expect(quiz.passingScorePercent).toBe(75);
    expect(quiz.questions.length).toBe(4);

    for (const q of quiz.questions) {
      expect(q.options.length).toBeGreaterThanOrEqual(4);
      expect(q.options.some(o => o.id === q.correctOptionId)).toBe(true);
      expect(q.explanation.length).toBeGreaterThan(40);
      expect(q.pedagogicalRationale).toBeTruthy();
      expect(q.evidenceNote).toBeTruthy();
    }

    // Specific citations tested
    expect(quiz.questions.some(q => q.evidenceNote?.includes('Roediger'))).toBe(true);
    expect(quiz.questions.some(q => q.evidenceNote?.includes('Bjork'))).toBe(true);
    expect(quiz.questions.some(q => q.evidenceNote?.includes('Nader') || q.evidenceNote?.includes('Dudai'))).toBe(true);
  });

  it('8. provides an actionable 3-step practical protocol', () => {
    const task = LESSON_TESTING_EFFECT_DESIRABLE_DIFFICULTY.practicalTask;
    expect(task.title).toContain('Protocol');
    expect(task.steps.length).toBe(3);

    for (const s of task.steps) {
      expect(s.title).toBeTruthy();
      expect(s.prompt).toBeTruthy();
      expect(s.example).toBeTruthy();
      expect(s.cognitiveRationale).toBeTruthy();
    }
  });

  it('9. integrates cleanly with memory storage concept mapping', () => {
    const mapping = LESSON_CONCEPT_MAPPINGS['testing-effect-mechanics'];
    expect(mapping).toBeDefined();
    expect(KNOWN_CONCEPTS.includes(mapping.predictionConceptId)).toBe(true);
    expect(KNOWN_MISCONCEPTIONS.includes(mapping.predictionMisconceptionId)).toBe(true);

    for (const q of LESSON_TESTING_EFFECT_DESIRABLE_DIFFICULTY.quiz.questions) {
      const mappedConcept = mapping.quizConceptMapping[q.id];
      expect(mappedConcept).toBeDefined();
      expect(KNOWN_CONCEPTS.includes(mappedConcept)).toBe(true);
    }
  });

  it('10. integrates all canonical anchors into server grounding context', () => {
    const anchors = [
      'Lesson 2.1 • Section 1: The Testing Effect & Memory Modification',
      'Lesson 2.1 • Section 2: Storage vs. Retrieval Strength',
      'Lesson 2.1 • Section 3: Desirable Difficulties & Synaptic Reconsolidation',
      'Lesson 2.1 • Retrieval & Modification Engine Diagram',
    ];

    for (const anchor of anchors) {
      expect(KNOWN_LESSON_SECTIONS.includes(anchor as any)).toBe(true);
    }

    // Anchor resolution tests
    expect(resolveValidSection('roediger testing effect')).toBe(
      'Lesson 2.1 • Section 1: The Testing Effect & Memory Modification'
    );
    expect(resolveValidSection('storage strength bjork')).toBe(
      'Lesson 2.1 • Section 2: Storage vs. Retrieval Strength'
    );
    expect(resolveValidSection('reconsolidation protein synthesis')).toBe(
      'Lesson 2.1 • Section 3: Desirable Difficulties & Synaptic Reconsolidation'
    );
  });

  it('11. provides lesson-specific system instruction for the AI tutor', () => {
    const instruction = getTutorSystemInstruction('testing-effect-mechanics');
    expect(instruction).toContain('The Testing Effect & Desirable Difficulty');
    expect(instruction).toContain('Roediger & Karpicke');
    expect(instruction).toContain('Bjork');
    expect(instruction).toContain('Reconsolidation');
  });

  it('12. matches local fallback tutor knowledge base for Lesson 2.1 inquiries', () => {
    const answer1 = findTutorAnswer('What did Roediger & Karpicke prove about repeated testing vs study?');
    expect(answer1.title).toContain('The Testing Effect & Memory Modification');
    expect(answer1.referencedSection).toContain('Lesson 2.1');

    const answer2 = findTutorAnswer('What is the difference between storage strength and retrieval strength?');
    expect(answer2.title).toContain('Storage Strength vs. Retrieval Strength');
    expect(answer2.referencedSection).toContain('Lesson 2.1');

    const answer3 = findTutorAnswer('Why is synaptic reconsolidation related to desirable difficulty?');
    expect(answer3.title).toContain('Desirable Difficulties & Synaptic Reconsolidation');
    expect(answer3.referencedSection).toContain('Lesson 2.1');
  });
});
