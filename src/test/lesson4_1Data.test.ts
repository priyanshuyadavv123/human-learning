import { describe, it, expect } from 'vitest';
import { LESSON_ATTENTION_SERIAL_CONTROL } from '../data/lesson4_1Data.ts';
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

describe('Lesson 4.1 Data Integrity & Quality Standard Suite', () => {
  it('1. satisfies lesson metadata invariants', () => {
    expect(LESSON_ATTENTION_SERIAL_CONTROL.id).toBe('attention-serial-control');
    expect(LESSON_ATTENTION_SERIAL_CONTROL.chapterId).toBe('ch-4-attention-executive');
    expect(LESSON_ATTENTION_SERIAL_CONTROL.number).toBe('4.1');
    expect(LESSON_ATTENTION_SERIAL_CONTROL.title).toBe('The Serial Bottleneck & Attentional Control');
    expect(LESSON_ATTENTION_SERIAL_CONTROL.readingTimeMinutes).toBeGreaterThanOrEqual(15);
    expect(LESSON_ATTENTION_SERIAL_CONTROL.isAvailable).toBe(true);
    expect(ALL_LESSONS['attention-serial-control']).toBeDefined();
  });

  it('2. provides an authentic, literature-grounded curiosity hook', () => {
    const hook = LESSON_ATTENTION_SERIAL_CONTROL.curiosityQuestion;
    expect(hook.headline).toContain('exhausted at 5:00 PM');
    expect(hook.teaser).toBeTruthy();
    expect(hook.hookNote).toContain('Broadbent');
    expect(hook.hookNote).toContain('Leroy');
  });

  it('3. implements an empirical prediction interaction with 3 options and verified outcome', () => {
    const pred = LESSON_ATTENTION_SERIAL_CONTROL.prediction;
    expect(pred.options.length).toBe(3);
    expect(pred.outcome.winningOptionId).toBe('opt-shielded-monotask');
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
    expect(winnerComparison?.label).toContain('Residue-Shielded Monotask');
  });

  it('4. provides 3 scientifically grounded core explanations with mechanisms and caveats', () => {
    const core = LESSON_ATTENTION_SERIAL_CONTROL.coreExplanations;
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
    expect(core[0].mechanisms.some(m => m.label.includes('Broadbent') || m.label.includes('Filter'))).toBe(true);
    expect(core[1].mechanisms.some(m => m.label.includes('Attention Residue') || m.label.includes('Leroy'))).toBe(true);
    expect(core[2].mechanisms.some(m => m.label.includes('Biased Competition') || m.label.includes('Miller'))).toBe(true);
  });

  it('5. provides a 4-stage interactive attentional filter & executive control diagram', () => {
    const diag = LESSON_ATTENTION_SERIAL_CONTROL.diagram;
    expect(diag.stages.length).toBe(4);
    expect(diag.title).toContain('Attentional Filter & Executive Control Pipeline');
    
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
    const ex = LESSON_ATTENTION_SERIAL_CONTROL.exercise;
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
    const quiz = LESSON_ATTENTION_SERIAL_CONTROL.quiz;
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
    expect(quiz.questions.some(q => q.evidenceNote?.includes('Broadbent'))).toBe(true);
    expect(quiz.questions.some(q => q.evidenceNote?.includes('Leroy'))).toBe(true);
    expect(quiz.questions.some(q => q.evidenceNote?.includes('Posner'))).toBe(true);
    expect(quiz.questions.some(q => q.evidenceNote?.includes('Miller'))).toBe(true);
  });

  it('8. provides an actionable 3-step practical protocol', () => {
    const task = LESSON_ATTENTION_SERIAL_CONTROL.practicalTask;
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
    const mapping = LESSON_CONCEPT_MAPPINGS['attention-serial-control'];
    expect(mapping).toBeDefined();
    expect(KNOWN_CONCEPTS.includes(mapping.predictionConceptId)).toBe(true);
    expect(KNOWN_MISCONCEPTIONS.includes(mapping.predictionMisconceptionId)).toBe(true);

    for (const q of LESSON_ATTENTION_SERIAL_CONTROL.quiz.questions) {
      const mappedConcept = mapping.quizConceptMapping[q.id];
      expect(mappedConcept).toBeDefined();
      expect(KNOWN_CONCEPTS.includes(mappedConcept)).toBe(true);
    }
  });

  it('10. integrates all canonical anchors into server grounding context', () => {
    const anchors = [
      'Lesson 4.1 • Section 1: Broadbent’s Filter & Posner’s Tripartite Attentional Networks',
      'Lesson 4.1 • Section 2: Sophie Leroy’s Attention Residue & Task-Switching Economics',
      'Lesson 4.1 • Section 3: Prefrontal Biased Competition & Executive Energy Recovery',
      'Lesson 4.1 • Attentional Filter & Executive Control Diagram',
    ];

    for (const anchor of anchors) {
      expect(KNOWN_LESSON_SECTIONS.includes(anchor as any)).toBe(true);
    }

    // Anchor resolution tests
    expect(resolveValidSection('broadbent filter model posner attentional networks')).toBe(
      'Lesson 4.1 • Section 1: Broadbent’s Filter & Posner’s Tripartite Attentional Networks'
    );
    expect(resolveValidSection('sophie leroy attention residue task-switching')).toBe(
      'Lesson 4.1 • Section 2: Sophie Leroy’s Attention Residue & Task-Switching Economics'
    );
    expect(resolveValidSection('prefrontal biased competition miller cohen glycogen central fatigue')).toBe(
      'Lesson 4.1 • Section 3: Prefrontal Biased Competition & Executive Energy Recovery'
    );
  });

  it('11. provides lesson-specific system instruction for the AI tutor', () => {
    const instruction = getTutorSystemInstruction('attention-serial-control');
    expect(instruction).toContain('The Serial Bottleneck & Attentional Control');
    expect(instruction).toContain('Broadbent');
    expect(instruction).toContain('Leroy');
    expect(instruction).toContain('Posner');
  });

  it('12. matches local fallback tutor knowledge base for Lesson 4.1 inquiries', () => {
    const answer1 = findTutorAnswer('What is Broadbent filter model and Posner attentional networks?');
    expect(answer1.title).toContain('Broadbent’s Filter & Posner’s Tripartite Attentional Networks');
    expect(answer1.referencedSection).toContain('Lesson 4.1');

    const answer2 = findTutorAnswer('How does Sophie Leroy attention residue and task switching impair programming?');
    expect(answer2.title).toContain('Sophie Leroy’s Attention Residue & Task-Switching Economics');
    expect(answer2.referencedSection).toContain('Lesson 4.1');

    const answer3 = findTutorAnswer('What is Miller and Cohen prefrontal biased competition and central fatigue?');
    expect(answer3.title).toContain('Prefrontal Biased Competition & Executive Energy Recovery');
    expect(answer3.referencedSection).toContain('Lesson 4.1');
  });
});
