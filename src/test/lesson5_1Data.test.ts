import { describe, it, expect } from 'vitest';
import { LESSON_LTP_SYNAPTIC_PLASTICITY } from '../data/lesson5_1Data.ts';
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

describe('Lesson 5.1 Data Integrity & Quality Standard Suite', () => {
  it('1. satisfies lesson metadata invariants', () => {
    expect(LESSON_LTP_SYNAPTIC_PLASTICITY.id).toBe('ltp-synaptic-plasticity');
    expect(LESSON_LTP_SYNAPTIC_PLASTICITY.chapterId).toBe('ch-5-consolidation');
    expect(LESSON_LTP_SYNAPTIC_PLASTICITY.number).toBe('5.1');
    expect(LESSON_LTP_SYNAPTIC_PLASTICITY.title).toBe('Long-Term Potentiation & Synaptic Plasticity');
    expect(LESSON_LTP_SYNAPTIC_PLASTICITY.readingTimeMinutes).toBeGreaterThanOrEqual(15);
    expect(LESSON_LTP_SYNAPTIC_PLASTICITY.isAvailable).toBe(true);
    expect(ALL_LESSONS['ltp-synaptic-plasticity']).toBeDefined();
  });

  it('2. provides an authentic, literature-grounded curiosity hook', () => {
    const hook = LESSON_LTP_SYNAPTIC_PLASTICITY.curiosityQuestion;
    expect(hook.headline).toContain('500 medical terms');
    expect(hook.teaser).toBeTruthy();
    expect(hook.hookNote).toContain('Lømo');
    expect(hook.hookNote).toContain('Bliss');
    expect(hook.hookNote).toContain('Kandel');
  });

  it('3. implements an empirical prediction interaction with 3 options and verified outcome', () => {
    const pred = LESSON_LTP_SYNAPTIC_PLASTICITY.prediction;
    expect(pred.options.length).toBe(3);
    expect(pred.outcome.winningOptionId).toBe('opt-spaced-creb-transcription');
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
    expect(winnerComparison?.label).toContain('Spaced Induction');
  });

  it('4. provides 3 scientifically grounded core explanations with mechanisms and caveats', () => {
    const core = LESSON_LTP_SYNAPTIC_PLASTICITY.coreExplanations;
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
    expect(core[0].mechanisms.some(m => m.label.includes('Hebbian') || m.label.includes('Bliss'))).toBe(true);
    expect(core[1].mechanisms.some(m => m.label.includes('NMDA') || m.label.includes('Magnesium'))).toBe(true);
    expect(core[2].mechanisms.some(m => m.label.includes('Early-LTP') || m.label.includes('CREB'))).toBe(true);
  });

  it('5. provides a 4-stage interactive synaptic plasticity diagram', () => {
    const diag = LESSON_LTP_SYNAPTIC_PLASTICITY.diagram;
    expect(diag.stages.length).toBe(4);
    expect(diag.title).toContain('Synaptic Plasticity');
    
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
    const ex = LESSON_LTP_SYNAPTIC_PLASTICITY.exercise;
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
    const quiz = LESSON_LTP_SYNAPTIC_PLASTICITY.quiz;
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
    expect(quiz.questions.some(q => q.evidenceNote?.includes('Collingridge'))).toBe(true);
    expect(quiz.questions.some(q => q.evidenceNote?.includes('Kandel'))).toBe(true);
    expect(quiz.questions.some(q => q.evidenceNote?.includes('Bliss, T. V., & Lømo, T.'))).toBe(true);
    expect(quiz.questions.some(q => q.evidenceNote?.includes('Frey'))).toBe(true);
  });

  it('8. provides an actionable 3-step practical protocol', () => {
    const task = LESSON_LTP_SYNAPTIC_PLASTICITY.practicalTask;
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
    const mapping = LESSON_CONCEPT_MAPPINGS['ltp-synaptic-plasticity'];
    expect(mapping).toBeDefined();
    expect(KNOWN_CONCEPTS.includes(mapping.predictionConceptId)).toBe(true);
    expect(KNOWN_MISCONCEPTIONS.includes(mapping.predictionMisconceptionId)).toBe(true);

    for (const q of LESSON_LTP_SYNAPTIC_PLASTICITY.quiz.questions) {
      const mappedConcept = mapping.quizConceptMapping[q.id];
      expect(mappedConcept).toBeDefined();
      expect(KNOWN_CONCEPTS.includes(mappedConcept)).toBe(true);
    }
  });

  it('10. integrates all canonical anchors into server grounding context', () => {
    const anchors = [
      'Lesson 5.1 • Section 1: Donald Hebb & Bliss & Lømo’s Discovery of LTP',
      'Lesson 5.1 • Section 2: The NMDA Receptor as a Molecular Coincidence Detector',
      'Lesson 5.1 • Section 3: Early-LTP vs Late-LTP: The Molecular Boundary of Permanent Mastery',
      'Lesson 5.1 • Synaptic Plasticity & LTP Induction Pipeline Diagram',
    ];

    for (const anchor of anchors) {
      expect(KNOWN_LESSON_SECTIONS.includes(anchor as any)).toBe(true);
    }

    // Anchor resolution tests
    expect(resolveValidSection('bliss and lomo discovery of ltp')).toBe(
      'Lesson 5.1 • Section 1: Donald Hebb & Bliss & Lømo’s Discovery of LTP'
    );
    expect(resolveValidSection('nmda receptor coincidence detector magnesium camkii')).toBe(
      'Lesson 5.1 • Section 2: The NMDA Receptor as a Molecular Coincidence Detector'
    );
    expect(resolveValidSection('early-ltp vs late-ltp creb synaptic tag mushroom spine')).toBe(
      'Lesson 5.1 • Section 3: Early-LTP vs Late-LTP: The Molecular Boundary of Permanent Mastery'
    );
  });

  it('11. provides lesson-specific system instruction for the AI tutor', () => {
    const instruction = getTutorSystemInstruction('ltp-synaptic-plasticity');
    expect(instruction).toContain('Long-Term Potentiation & Synaptic Plasticity');
    expect(instruction).toContain('Bliss');
    expect(instruction).toContain('NMDA');
    expect(instruction).toContain('CREB');
  });

  it('12. matches local fallback tutor knowledge base for Lesson 5.1 inquiries', () => {
    const answer1 = findTutorAnswer('What did Bliss & Lømo discover about Long-Term Potentiation?');
    expect(answer1.title).toContain('Donald Hebb & Bliss & Lømo’s Long-Term Potentiation');
    expect(answer1.referencedSection).toContain('Lesson 5.1');

    const answer2 = findTutorAnswer('How does NMDA receptor coincidence detector and magnesium plug work?');
    expect(answer2.title).toContain('The NMDA Receptor as a Molecular Coincidence Detector');
    expect(answer2.referencedSection).toContain('Lesson 5.1');

    const answer3 = findTutorAnswer('What is Early-LTP vs Late-LTP and CREB synaptic tagging?');
    expect(answer3.title).toContain('Early-LTP vs Late-LTP & The Synaptic Tagging Hypothesis');
    expect(answer3.referencedSection).toContain('Lesson 5.1');
  });
});
