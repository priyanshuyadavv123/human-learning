import { describe, it, expect } from 'vitest';
import { LESSON_DISTRACTION_ECONOMICS } from '../data/lesson4_2Data.ts';
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

describe('Lesson 4.2 Data Integrity & Quality Standard Suite', () => {
  it('1. satisfies lesson metadata invariants', () => {
    expect(LESSON_DISTRACTION_ECONOMICS.id).toBe('distraction-economics');
    expect(LESSON_DISTRACTION_ECONOMICS.chapterId).toBe('ch-4-attention-executive');
    expect(LESSON_DISTRACTION_ECONOMICS.number).toBe('4.2');
    expect(LESSON_DISTRACTION_ECONOMICS.title).toBe('Distraction Economics & Deep Work Protocols');
    expect(LESSON_DISTRACTION_ECONOMICS.readingTimeMinutes).toBeGreaterThanOrEqual(15);
    expect(LESSON_DISTRACTION_ECONOMICS.isAvailable).toBe(true);
    expect(ALL_LESSONS['distraction-economics']).toBeDefined();
  });

  it('2. provides an authentic, literature-grounded curiosity hook', () => {
    const hook = LESSON_DISTRACTION_ECONOMICS.curiosityQuestion;
    expect(hook.headline).toContain('47 seconds');
    expect(hook.teaser).toBeTruthy();
    expect(hook.hookNote).toContain('Mark');
    expect(hook.hookNote).toContain('Newport');
  });

  it('3. implements an empirical prediction interaction with 3 options and verified outcome', () => {
    const pred = LESSON_DISTRACTION_ECONOMICS.prediction;
    expect(pred.options.length).toBe(3);
    expect(pred.outcome.winningOptionId).toBe('opt-synchronized-deep-work');
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
    expect(winnerComparison?.label).toContain('Synchronized Deep Work');
  });

  it('4. provides 3 scientifically grounded core explanations with mechanisms and caveats', () => {
    const core = LESSON_DISTRACTION_ECONOMICS.coreExplanations;
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
    expect(core[0].mechanisms.some(m => m.label.includes('23-Minute') || m.label.includes('Mark'))).toBe(true);
    expect(core[1].mechanisms.some(m => m.label.includes('Deep Work') || m.label.includes('Newport'))).toBe(true);
    expect(core[2].mechanisms.some(m => m.label.includes('Attentional Commons') || m.label.includes('Crawford'))).toBe(true);
  });

  it('5. provides a 4-stage interactive deep work architecture diagram', () => {
    const diag = LESSON_DISTRACTION_ECONOMICS.diagram;
    expect(diag.stages.length).toBe(4);
    expect(diag.title).toContain('Deep Work Architecture');
    
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
    const ex = LESSON_DISTRACTION_ECONOMICS.exercise;
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
    const quiz = LESSON_DISTRACTION_ECONOMICS.quiz;
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
    expect(quiz.questions.some(q => q.evidenceNote?.includes('Mark'))).toBe(true);
    expect(quiz.questions.some(q => q.evidenceNote?.includes('Newport'))).toBe(true);
    expect(quiz.questions.some(q => q.evidenceNote?.includes('Crawford'))).toBe(true);
    expect(quiz.questions.some(q => q.explanation.includes('Zeigarnik'))).toBe(true);
  });

  it('8. provides an actionable 3-step practical protocol', () => {
    const task = LESSON_DISTRACTION_ECONOMICS.practicalTask;
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
    const mapping = LESSON_CONCEPT_MAPPINGS['distraction-economics'];
    expect(mapping).toBeDefined();
    expect(KNOWN_CONCEPTS.includes(mapping.predictionConceptId)).toBe(true);
    expect(KNOWN_MISCONCEPTIONS.includes(mapping.predictionMisconceptionId)).toBe(true);

    for (const q of LESSON_DISTRACTION_ECONOMICS.quiz.questions) {
      const mappedConcept = mapping.quizConceptMapping[q.id];
      expect(mappedConcept).toBeDefined();
      expect(KNOWN_CONCEPTS.includes(mappedConcept)).toBe(true);
    }
  });

  it('10. integrates all canonical anchors into server grounding context', () => {
    const anchors = [
      'Lesson 4.2 • Section 1: The 23-Minute Recovery Latency (Gloria Mark)',
      'Lesson 4.2 • Section 2: Deep Work Architecture & Scheduling Philosophies (Cal Newport)',
      'Lesson 4.2 • Section 3: The Attentional Commons & Choice Architecture (Matthew Crawford)',
      'Lesson 4.2 • Deep Work Architecture & Interruption Defense System Diagram',
    ];

    for (const anchor of anchors) {
      expect(KNOWN_LESSON_SECTIONS.includes(anchor as any)).toBe(true);
    }

    // Anchor resolution tests
    expect(resolveValidSection('gloria mark 23 minute resumption latency')).toBe(
      'Lesson 4.2 • Section 1: The 23-Minute Recovery Latency (Gloria Mark)'
    );
    expect(resolveValidSection('cal newport deep work rhythmic bimodal shutdown ritual')).toBe(
      'Lesson 4.2 • Section 2: Deep Work Architecture & Scheduling Philosophies (Cal Newport)'
    );
    expect(resolveValidSection('matthew crawford attentional commons asymmetric friction')).toBe(
      'Lesson 4.2 • Section 3: The Attentional Commons & Choice Architecture (Matthew Crawford)'
    );
  });

  it('11. provides lesson-specific system instruction for the AI tutor', () => {
    const instruction = getTutorSystemInstruction('distraction-economics');
    expect(instruction).toContain('Distraction Economics & Deep Work Protocols');
    expect(instruction).toContain('Mark');
    expect(instruction).toContain('Newport');
    expect(instruction).toContain('Crawford');
  });

  it('12. matches local fallback tutor knowledge base for Lesson 4.2 inquiries', () => {
    const answer1 = findTutorAnswer('What is Gloria Mark 23 minute resumption latency?');
    expect(answer1.title).toContain('Gloria Mark’s Interruption Dynamics & The 23-Minute Resumption Cost');
    expect(answer1.referencedSection).toContain('Lesson 4.2');

    const answer2 = findTutorAnswer('How does Cal Newport deep work rhythmic philosophy and shutdown ritual work?');
    expect(answer2.title).toContain('Cal Newport’s Deep Work Architecture & The Four Scheduling Philosophies');
    expect(answer2.referencedSection).toContain('Lesson 4.2');

    const answer3 = findTutorAnswer('What is Matthew Crawford attentional commons and asymmetric friction?');
    expect(answer3.title).toContain('Defending the Attentional Commons & Behavioral Choice Architecture');
    expect(answer3.referencedSection).toContain('Lesson 4.2');
  });
});
