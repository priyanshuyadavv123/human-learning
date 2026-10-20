import { describe, it, expect } from 'vitest';
import { LESSON_HIPPOCAMPAL_NEOCORTICAL_DIALOGUE } from '../data/lesson5_2Data.ts';
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

describe('Lesson 5.2 Data Integrity & Quality Standard Suite', () => {
  it('1. satisfies lesson metadata invariants', () => {
    expect(LESSON_HIPPOCAMPAL_NEOCORTICAL_DIALOGUE.id).toBe('hippocampal-neocortical-dialogue');
    expect(LESSON_HIPPOCAMPAL_NEOCORTICAL_DIALOGUE.chapterId).toBe('ch-5-consolidation');
    expect(LESSON_HIPPOCAMPAL_NEOCORTICAL_DIALOGUE.number).toBe('5.2');
    expect(LESSON_HIPPOCAMPAL_NEOCORTICAL_DIALOGUE.title).toBe('Hippocampal-Neocortical Dialogue');
    expect(LESSON_HIPPOCAMPAL_NEOCORTICAL_DIALOGUE.readingTimeMinutes).toBeGreaterThanOrEqual(15);
    expect(LESSON_HIPPOCAMPAL_NEOCORTICAL_DIALOGUE.isAvailable).toBe(true);
    expect(ALL_LESSONS['hippocampal-neocortical-dialogue']).toBeDefined();
  });

  it('2. provides an authentic, literature-grounded curiosity hook', () => {
    const hook = LESSON_HIPPOCAMPAL_NEOCORTICAL_DIALOGUE.curiosityQuestion;
    expect(hook.headline).toContain('Henry Molaison');
    expect(hook.teaser).toBeTruthy();
    expect(hook.hookNote).toContain('Scoville');
    expect(hook.hookNote).toContain('Milner');
    expect(hook.hookNote).toContain('McClelland');
  });

  it('3. implements an empirical prediction interaction with 3 options and verified outcome', () => {
    const pred = LESSON_HIPPOCAMPAL_NEOCORTICAL_DIALOGUE.prediction;
    expect(pred.options.length).toBe(3);
    expect(pred.outcome.winningOptionId).toBe('opt-catastrophic-interference-cls');
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
    expect(winnerComparison?.label).toContain('Complementary Dual System');
  });

  it('4. provides 3 scientifically grounded core explanations with mechanisms and caveats', () => {
    const core = LESSON_HIPPOCAMPAL_NEOCORTICAL_DIALOGUE.coreExplanations;
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
    expect(core[0].mechanisms.some(m => m.label.includes('Anterograde') || m.label.includes('Ribot'))).toBe(true);
    expect(core[1].mechanisms.some(m => m.label.includes('Indexing') || m.label.includes('McClelland'))).toBe(true);
    expect(core[2].mechanisms.some(m => m.label.includes('Standard Consolidation') || m.label.includes('Multiple Trace'))).toBe(true);
  });

  it('5. provides a 4-stage interactive systems consolidation diagram', () => {
    const diag = LESSON_HIPPOCAMPAL_NEOCORTICAL_DIALOGUE.diagram;
    expect(diag.stages.length).toBe(4);
    expect(diag.title).toContain('Systems Consolidation');
    
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
    const ex = LESSON_HIPPOCAMPAL_NEOCORTICAL_DIALOGUE.exercise;
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
    const quiz = LESSON_HIPPOCAMPAL_NEOCORTICAL_DIALOGUE.quiz;
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
    expect(quiz.questions.some(q => q.evidenceNote?.includes('Milner'))).toBe(true);
    expect(quiz.questions.some(q => q.evidenceNote?.includes('McClelland'))).toBe(true);
    expect(quiz.questions.some(q => q.evidenceNote?.includes('Teyler'))).toBe(true);
    expect(quiz.questions.some(q => q.evidenceNote?.includes('Winocur'))).toBe(true);
  });

  it('8. provides an actionable 3-step practical protocol', () => {
    const task = LESSON_HIPPOCAMPAL_NEOCORTICAL_DIALOGUE.practicalTask;
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
    const mapping = LESSON_CONCEPT_MAPPINGS['hippocampal-neocortical-dialogue'];
    expect(mapping).toBeDefined();
    expect(KNOWN_CONCEPTS.includes(mapping.predictionConceptId)).toBe(true);
    expect(KNOWN_MISCONCEPTIONS.includes(mapping.predictionMisconceptionId)).toBe(true);

    for (const q of LESSON_HIPPOCAMPAL_NEOCORTICAL_DIALOGUE.quiz.questions) {
      const mappedConcept = mapping.quizConceptMapping[q.id];
      expect(mappedConcept).toBeDefined();
      expect(KNOWN_CONCEPTS.includes(mappedConcept)).toBe(true);
    }
  });

  it('10. integrates all canonical anchors into server grounding context', () => {
    const anchors = [
      'Lesson 5.2 • Section 1: Scoville & Milner’s Patient H.M. & Temporally Graded Retrograde Amnesia',
      'Lesson 5.2 • Section 2: The Hippocampal Indexing Theory & Complementary Learning Systems',
      'Lesson 5.2 • Section 3: Standard Consolidation Theory vs Multiple Trace & Transformation Theory',
      'Lesson 5.2 • Hippocampal-Neocortical Systems Consolidation Pipeline Diagram',
    ];

    for (const anchor of anchors) {
      expect(KNOWN_LESSON_SECTIONS.includes(anchor as any)).toBe(true);
    }

    // Anchor resolution tests
    expect(resolveValidSection('scoville milner patient hm retrograde amnesia')).toBe(
      'Lesson 5.2 • Section 1: Scoville & Milner’s Patient H.M. & Temporally Graded Retrograde Amnesia'
    );
    expect(resolveValidSection('hippocampal index model teyler discenna complementary learning systems cls')).toBe(
      'Lesson 5.2 • Section 2: The Hippocampal Indexing Theory & Complementary Learning Systems'
    );
    expect(resolveValidSection('standard consolidation vs multiple trace transformation theory semantic gist')).toBe(
      'Lesson 5.2 • Section 3: Standard Consolidation Theory vs Multiple Trace & Transformation Theory'
    );
  });

  it('11. provides lesson-specific system instruction for the AI tutor', () => {
    const instruction = getTutorSystemInstruction('hippocampal-neocortical-dialogue');
    expect(instruction).toContain('Hippocampal-Neocortical Dialogue');
    expect(instruction).toContain('Milner');
    expect(instruction).toContain('McClelland');
    expect(instruction).toContain('Teyler');
  });

  it('12. matches local fallback tutor knowledge base for Lesson 5.2 inquiries', () => {
    const answer1 = findTutorAnswer('What did Brenda Milner discover about Patient H.M. and retrograde amnesia?');
    expect(answer1.title).toContain('Scoville & Milner’s Patient H.M. & Temporally Graded Retrograde Amnesia');
    expect(answer1.referencedSection).toContain('Lesson 5.2');

    const answer2 = findTutorAnswer('How does Teyler & DiScenna hippocampal indexing theory work?');
    expect(answer2.title).toContain('The Hippocampal Indexing Theory (Teyler & DiScenna)');
    expect(answer2.referencedSection).toContain('Lesson 5.2');

    const answer3 = findTutorAnswer('What is McClelland complementary learning systems and catastrophic interference?');
    expect(answer3.title).toContain('Complementary Learning Systems & Catastrophic Interference');
    expect(answer3.referencedSection).toContain('Lesson 5.2');
  });
});
