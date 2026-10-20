import { describe, it, expect } from 'vitest';
import { LESSON_PERSONAL_LEARNING_OS } from '../data/lesson3_2Data.ts';
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

describe('Lesson 3.2 Data Integrity & Quality Standard Suite', () => {
  it('1. satisfies lesson metadata invariants', () => {
    expect(LESSON_PERSONAL_LEARNING_OS.id).toBe('personal-learning-operating-system');
    expect(LESSON_PERSONAL_LEARNING_OS.chapterId).toBe('ch-3-deliberate-practice');
    expect(LESSON_PERSONAL_LEARNING_OS.number).toBe('3.2');
    expect(LESSON_PERSONAL_LEARNING_OS.title).toBe('The Personal Learning Operating System');
    expect(LESSON_PERSONAL_LEARNING_OS.readingTimeMinutes).toBeGreaterThanOrEqual(15);
    expect(LESSON_PERSONAL_LEARNING_OS.isAvailable).toBe(true);
    expect(ALL_LESSONS['personal-learning-operating-system']).toBeDefined();
  });

  it('2. provides an authentic, literature-grounded curiosity hook', () => {
    const hook = LESSON_PERSONAL_LEARNING_OS.curiosityQuestion;
    expect(hook.headline).toContain('10 years of routine professional experience');
    expect(hook.teaser).toBeTruthy();
    expect(hook.hookNote).toContain('Ericsson');
    expect(hook.hookNote).toContain('Zimmerman');
  });

  it('3. implements an empirical prediction interaction with 3 options and verified outcome', () => {
    const pred = LESSON_PERSONAL_LEARNING_OS.prediction;
    expect(pred.options.length).toBe(3);
    expect(pred.outcome.winningOptionId).toBe('opt-deliberate-practice-os');
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
    expect(winnerComparison?.label).toContain('Deliberate Practice OS');
  });

  it('4. provides 3 scientifically grounded core explanations with mechanisms and caveats', () => {
    const core = LESSON_PERSONAL_LEARNING_OS.coreExplanations;
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
    expect(core[0].mechanisms.some(m => m.label.includes('Naive Practice') || m.label.includes('Dichotomy'))).toBe(true);
    expect(core[1].mechanisms.some(m => m.label.includes('Forethought') || m.label.includes('Phase 1'))).toBe(true);
    expect(core[2].mechanisms.some(m => m.label.includes('Calibration') || m.label.includes('Stack'))).toBe(true);
  });

  it('5. provides a 4-stage interactive personal learning operating system diagram', () => {
    const diag = LESSON_PERSONAL_LEARNING_OS.diagram;
    expect(diag.stages.length).toBe(4);
    expect(diag.title).toContain('Personal Learning Operating System');
    
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
    const ex = LESSON_PERSONAL_LEARNING_OS.exercise;
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
    const quiz = LESSON_PERSONAL_LEARNING_OS.quiz;
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
    expect(quiz.questions.some(q => q.evidenceNote?.includes('Ericsson'))).toBe(true);
    expect(quiz.questions.some(q => q.evidenceNote?.includes('Zimmerman'))).toBe(true);
    expect(quiz.questions.some(q => q.evidenceNote?.includes('Dunlosky'))).toBe(true);
  });

  it('8. provides an actionable 3-step practical protocol', () => {
    const task = LESSON_PERSONAL_LEARNING_OS.practicalTask;
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
    const mapping = LESSON_CONCEPT_MAPPINGS['personal-learning-operating-system'];
    expect(mapping).toBeDefined();
    expect(KNOWN_CONCEPTS.includes(mapping.predictionConceptId)).toBe(true);
    expect(KNOWN_MISCONCEPTIONS.includes(mapping.predictionMisconceptionId)).toBe(true);

    for (const q of LESSON_PERSONAL_LEARNING_OS.quiz.questions) {
      const mappedConcept = mapping.quizConceptMapping[q.id];
      expect(mappedConcept).toBeDefined();
      expect(KNOWN_CONCEPTS.includes(mappedConcept)).toBe(true);
    }
  });

  it('10. integrates all canonical anchors into server grounding context', () => {
    const anchors = [
      'Lesson 3.2 • Section 1: Ericsson’s Deliberate Practice Framework',
      'Lesson 3.2 • Section 2: Zimmerman’s Cybernetic Self-Regulated Learning Architecture',
      'Lesson 3.2 • Section 3: Metacognitive Calibration & The Personal Learning Stack',
      'Lesson 3.2 • Personal Learning Operating System Diagram',
    ];

    for (const anchor of anchors) {
      expect(KNOWN_LESSON_SECTIONS.includes(anchor as any)).toBe(true);
    }

    // Anchor resolution tests
    expect(resolveValidSection('ericsson deliberate practice 10,000 hour')).toBe(
      'Lesson 3.2 • Section 1: Ericsson’s Deliberate Practice Framework'
    );
    expect(resolveValidSection('zimmerman self-regulated learning forethought process goal')).toBe(
      'Lesson 3.2 • Section 2: Zimmerman’s Cybernetic Self-Regulated Learning Architecture'
    );
    expect(resolveValidSection('dunlosky metacognitive calibration curve learning operating system')).toBe(
      'Lesson 3.2 • Section 3: Metacognitive Calibration & The Personal Learning Stack'
    );
  });

  it('11. provides lesson-specific system instruction for the AI tutor', () => {
    const instruction = getTutorSystemInstruction('personal-learning-operating-system');
    expect(instruction).toContain('The Personal Learning Operating System');
    expect(instruction).toContain('Ericsson');
    expect(instruction).toContain('Zimmerman');
    expect(instruction).toContain('Dunlosky');
  });

  it('12. matches local fallback tutor knowledge base for Lesson 3.2 inquiries', () => {
    const answer1 = findTutorAnswer('How does deliberate practice differ from routine work experience according to Ericsson?');
    expect(answer1.title).toContain('Deliberate Practice');
    expect(answer1.referencedSection).toContain('Lesson 3.2');

    const answer2 = findTutorAnswer('What are the three phases of Zimmerman self-regulated learning?');
    expect(answer2.title).toContain('Zimmerman');
    expect(answer2.referencedSection).toContain('Lesson 3.2');

    const answer3 = findTutorAnswer('How does metacognitive calibration eliminate illusions in the personal learning operating system?');
    expect(answer3.title).toContain('Metacognitive Calibration');
    expect(answer3.referencedSection).toContain('Lesson 3.2');
  });
});
