import { describe, it, expect } from 'vitest';
import { LESSON_SPACED_SCHEDULING } from '../data/lesson2_2Data.ts';
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

describe('Lesson 2.2 Data Integrity & Quality Standard Suite', () => {
  it('1. satisfies lesson metadata invariants', () => {
    expect(LESSON_SPACED_SCHEDULING.id).toBe('spaced-repetition-scheduling');
    expect(LESSON_SPACED_SCHEDULING.chapterId).toBe('ch-2-retrieval-spacing');
    expect(LESSON_SPACED_SCHEDULING.number).toBe('2.2');
    expect(LESSON_SPACED_SCHEDULING.title).toBe('Spaced Scheduling Algorithms');
    expect(LESSON_SPACED_SCHEDULING.readingTimeMinutes).toBeGreaterThanOrEqual(15);
    expect(LESSON_SPACED_SCHEDULING.isAvailable).toBe(true);
    expect(ALL_LESSONS['spaced-repetition-scheduling']).toBeDefined();
  });

  it('2. provides an authentic, literature-grounded curiosity hook', () => {
    const hook = LESSON_SPACED_SCHEDULING.curiosityQuestion;
    expect(hook.headline).toContain('two students who spend the exact same 10 hours');
    expect(hook.teaser).toBeTruthy();
    expect(hook.hookNote).toContain('Ebbinghaus');
    expect(hook.hookNote).toContain('Wozniak');
  });

  it('3. implements an empirical prediction interaction with 3 options and verified outcome', () => {
    const pred = LESSON_SPACED_SCHEDULING.prediction;
    expect(pred.options.length).toBe(3);
    expect(pred.outcome.winningOptionId).toBe('opt-expanding');
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
    expect(winnerComparison?.label).toContain('Expanding Spaced');
  });

  it('4. provides 3 scientifically grounded core explanations with mechanisms and caveats', () => {
    const core = LESSON_SPACED_SCHEDULING.coreExplanations;
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
    expect(core[0].mechanisms.some(m => m.label.includes('Exponential Decay') || m.label.includes('Equation'))).toBe(true);
    expect(core[1].mechanisms.some(m => m.label.includes('Stability Expansion') || m.label.includes('Multiplier'))).toBe(true);
    expect(core[2].mechanisms.some(m => m.label.includes('10%–20%') || m.label.includes('Optimal Lag'))).toBe(true);
  });

  it('5. provides a 4-stage interactive spaced scheduling & stability engine diagram', () => {
    const diag = LESSON_SPACED_SCHEDULING.diagram;
    expect(diag.stages.length).toBe(4);
    expect(diag.title).toContain('Spaced Scheduling & Stability Expansion Engine');
    
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
    const ex = LESSON_SPACED_SCHEDULING.exercise;
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
    const quiz = LESSON_SPACED_SCHEDULING.quiz;
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
    expect(quiz.questions.some(q => q.evidenceNote?.includes('Ebbinghaus'))).toBe(true);
    expect(quiz.questions.some(q => q.evidenceNote?.includes('Wozniak') || q.evidenceNote?.includes('Ye'))).toBe(true);
    expect(quiz.questions.some(q => q.evidenceNote?.includes('Cepeda'))).toBe(true);
  });

  it('8. provides an actionable 3-step practical protocol', () => {
    const task = LESSON_SPACED_SCHEDULING.practicalTask;
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
    const mapping = LESSON_CONCEPT_MAPPINGS['spaced-repetition-scheduling'];
    expect(mapping).toBeDefined();
    expect(KNOWN_CONCEPTS.includes(mapping.predictionConceptId)).toBe(true);
    expect(KNOWN_MISCONCEPTIONS.includes(mapping.predictionMisconceptionId)).toBe(true);

    for (const q of LESSON_SPACED_SCHEDULING.quiz.questions) {
      const mappedConcept = mapping.quizConceptMapping[q.id];
      expect(mappedConcept).toBeDefined();
      expect(KNOWN_CONCEPTS.includes(mappedConcept)).toBe(true);
    }
  });

  it('10. integrates all canonical anchors into server grounding context', () => {
    const anchors = [
      'Lesson 2.2 • Section 1: The Ebbinghaus Decay Curve & Mathematical Kinetics',
      'Lesson 2.2 • Section 2: Expanding Interval Algorithms & Stability Multipliers',
      'Lesson 2.2 • Section 3: The Spacing Effect & Empirical Lag Ratios',
      'Lesson 2.2 • Spaced Scheduling & Stability Engine Diagram',
    ];

    for (const anchor of anchors) {
      expect(KNOWN_LESSON_SECTIONS.includes(anchor as any)).toBe(true);
    }

    // Anchor resolution tests
    expect(resolveValidSection('ebbinghaus forgetting curve decay')).toBe(
      'Lesson 2.2 • Section 1: The Ebbinghaus Decay Curve & Mathematical Kinetics'
    );
    expect(resolveValidSection('fsrs stability multiplier wozniak')).toBe(
      'Lesson 2.2 • Section 2: Expanding Interval Algorithms & Stability Multipliers'
    );
    expect(resolveValidSection('cepeda optimal lag ratio')).toBe(
      'Lesson 2.2 • Section 3: The Spacing Effect & Empirical Lag Ratios'
    );
  });

  it('11. provides lesson-specific system instruction for the AI tutor', () => {
    const instruction = getTutorSystemInstruction('spaced-repetition-scheduling');
    expect(instruction).toContain('Spaced Scheduling Algorithms');
    expect(instruction).toContain('Ebbinghaus');
    expect(instruction).toContain('SM-2');
    expect(instruction).toContain('Cepeda');
  });

  it('12. matches local fallback tutor knowledge base for Lesson 2.2 inquiries', () => {
    const answer1 = findTutorAnswer('What did Ebbinghaus discover about the forgetting curve?');
    expect(answer1.title).toContain('The Ebbinghaus Forgetting Curve & Decay Kinetics');
    expect(answer1.referencedSection).toContain('Lesson 2.2');

    const answer2 = findTutorAnswer('How does spaced repetition stability expansion work in FSRS?');
    expect(answer2.title).toContain('Spaced Scheduling Algorithms & Stability Expansion');
    expect(answer2.referencedSection).toContain('Lesson 2.2');
  });
});
