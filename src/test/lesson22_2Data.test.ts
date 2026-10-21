import { describe, it, expect } from 'vitest';
import { LESSON_ATTRIBUTION_RETRAINING_MINDSET } from '../data/lesson22_2Data.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';
import { PRIMARY_COURSE, ALL_LESSONS } from '../data/courseData.ts';

describe('Lesson 22.2: Attribution Retraining & Belief Systems Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_ATTRIBUTION_RETRAINING_MINDSET.id).toBe('attribution-retraining-mindset');
    expect(LESSON_ATTRIBUTION_RETRAINING_MINDSET.chapterId).toBe('ch-22-identity-mindset');
    expect(LESSON_ATTRIBUTION_RETRAINING_MINDSET.number).toBe('22.2');
    expect(LESSON_ATTRIBUTION_RETRAINING_MINDSET.title).toBe('Attribution Retraining & Belief Systems');
    expect(LESSON_ATTRIBUTION_RETRAINING_MINDSET.subtitle).toContain('Attributing struggle to strategy and effort rather than fixed talent');
    expect(LESSON_ATTRIBUTION_RETRAINING_MINDSET.readingTimeMinutes).toBeGreaterThanOrEqual(14);
    expect(LESSON_ATTRIBUTION_RETRAINING_MINDSET.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_ATTRIBUTION_RETRAINING_MINDSET;
    expect(curiosityQuestion.headline).toContain('natural genius');
    expect(curiosityQuestion.hookNote).toContain('Claudia Mueller');
    expect(curiosityQuestion.hookNote).toContain('Carol Dweck');
    expect(curiosityQuestion.hookNote).toContain('Bernard Weiner');
    expect(curiosityQuestion.hookNote).toContain('Raymond Perry');
    expect(curiosityQuestion.hookNote).toContain('David Yeager');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_ATTRIBUTION_RETRAINING_MINDSET;
    expect(prediction.options).toHaveLength(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-condition-c-attribution-retraining');
    expect(prediction.outcome.explanation).toContain('Weiner');
    expect(prediction.outcome.explanation).toContain('Mueller');
    expect(prediction.outcome.explanation).toContain('Attribution Retraining');
    expect(prediction.outcome.comparisons.length).toBeGreaterThanOrEqual(3);
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_ATTRIBUTION_RETRAINING_MINDSET;
    expect(coreExplanations).toHaveLength(3);

    // Module 1: Bernard Weiner 3 Dimensions of Attribution
    expect(coreExplanations[0].id).toBe('weiner-three-dimensions-attribution');
    expect(coreExplanations[0].title).toContain('Bernard Weiner');
    expect(coreExplanations[0].scientificStatus).toBe('empirical-consensus');
    expect(coreExplanations[0].mechanisms.length).toBeGreaterThanOrEqual(4);
    expect(coreExplanations[0].keyInsight).toContain('controllable strategy bug');

    // Module 2: Mueller & Dweck Intelligence Praise Paradox
    expect(coreExplanations[1].id).toBe('mueller-dweck-intelligence-praise-paradox');
    expect(coreExplanations[1].title).toContain('Mueller & Dweck');
    expect(coreExplanations[1].scientificStatus).toBe('empirical-consensus');
    expect(coreExplanations[1].mechanisms.length).toBeGreaterThanOrEqual(3);
    expect(coreExplanations[1].keyInsight).toContain('process');

    // Module 3: Raymond Perry & David Yeager Attribution Retraining
    expect(coreExplanations[2].id).toBe('perry-yeager-attribution-retraining-nature');
    expect(coreExplanations[2].title).toContain('Raymond Perry & David Yeager');
    expect(coreExplanations[2].scientificStatus).toBe('empirical-consensus');
    expect(coreExplanations[2].mechanisms.length).toBeGreaterThanOrEqual(3);
    expect(coreExplanations[2].keyInsight).toContain('academic and professional trajectory');
  });

  it('should provide an interactive diagram modeling the 5-stage attribution retraining funnel', () => {
    const { diagram } = LESSON_ATTRIBUTION_RETRAINING_MINDSET;
    expect(diagram.title).toBe('The Attribution Retraining & Cognitive Reframing Funnel');
    expect(diagram.stages).toHaveLength(5);
    expect(diagram.stages[0].name).toContain('Intellectual Setback');
    expect(diagram.stages[1].name).toContain('Weiner Causal Classification Audit');
    expect(diagram.stages[2].name).toContain('Process-Oriented De-escalation');
    expect(diagram.stages[3].name).toContain('Attribution Retraining & Strategy Diagnostic');
    expect(diagram.stages[4].name).toContain('Iterative Mastery Re-engagement');
    expect(diagram.feedbackLoopDescription).toContain('undeniable enactive proof');
  });

  it('should deliver an interactive sorting exercise with 4 scenarios', () => {
    const { exercise } = LESSON_ATTRIBUTION_RETRAINING_MINDSET;
    expect(exercise.categories).toHaveLength(4);
    expect(exercise.scenarios).toHaveLength(4);

    const categoryIds = exercise.categories.map(c => c.id);
    exercise.scenarios.forEach(scenario => {
      expect(categoryIds).toContain(scenario.correctCategory);
      expect(scenario.mechanismExplanation.length).toBeGreaterThan(40);
      expect(scenario.evidenceBasedFix.length).toBeGreaterThan(20);
    });
  });

  it('should provide a 4-question verification quiz with empirical rationales', () => {
    const { quiz } = LESSON_ATTRIBUTION_RETRAINING_MINDSET;
    expect(quiz.questions).toHaveLength(4);
    expect(quiz.passingScorePercent).toBe(100);

    quiz.questions.forEach(q => {
      expect(q.options.length).toBe(4);
      expect(q.options.some(o => o.id === q.correctOptionId)).toBe(true);
      expect(q.explanation.length).toBeGreaterThan(50);
      expect(q.pedagogicalRationale.length).toBeGreaterThan(20);
      expect(q.evidenceNote).toBeDefined();
    });
  });

  it('should present a 3-step practical task for attribution retraining and strategy auditing', () => {
    const { practicalTask } = LESSON_ATTRIBUTION_RETRAINING_MINDSET;
    expect(practicalTask.steps).toHaveLength(3);
    expect(practicalTask.steps[0].title).toContain('Weiner 3-Dimensional Attribution Audit');
    expect(practicalTask.steps[1].title).toContain('Purge Person Praise');
    expect(practicalTask.steps[2].title).toContain('3-Tactic Strategy Replacement Plan');
  });

  it('should have all concepts registered in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:weiner_attribution_three_dimensions',
      'concept:perry_attribution_retraining_strategy',
      'concept:mueller_dweck_praise_paradox_effort_vs_ability',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const prompt = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(prompt.keyCriteria.length).toBeGreaterThanOrEqual(4);
      expect(prompt.canonicalAnswer.length).toBeGreaterThan(100);
      expect(prompt.lessonSectionAnchor).toContain('Lesson 22.2');
    });
  });

  it('should have all misconceptions registered in KNOWN_MISCONCEPTIONS', () => {
    const expectedMisconceptions = [
      'misconception:praising_innate_intelligence_boosts_confidence_and_grit',
      'misconception:failure_is_an_irreversible_signal_of_fixed_limitation',
    ];

    expectedMisconceptions.forEach(m => {
      expect(KNOWN_MISCONCEPTIONS).toContain(m);
    });
  });

  it('should retrieve accurate tutor knowledge entries for Lesson 22.2 queries', () => {
    const answer1 = findTutorAnswer('what is bernard weiner attribution theory and the three dimensions of attribution');
    expect(answer1.title).toContain('Bernard Weiner');
    expect(answer1.detailedResponse).toContain('Locus of Causality');

    const answer2 = findTutorAnswer('explain the intelligence praise paradox discovered by claudia mueller and carol dweck');
    expect(answer2.title).toContain('Mueller & Dweck');
    expect(answer2.detailedResponse.toLowerCase()).toContain('process praise');

    const answer3 = findTutorAnswer('how does raymond perry attribution retraining work in higher education');
    expect(answer3.title).toContain('Raymond Perry');
    expect(answer3.detailedResponse).toContain('Attribution Retraining');
  });

  it('should resolve grounding anchors for Lesson 22.2 correctly', () => {
    expect(resolveValidSection('explain bernard weiner three dimensions of causal attribution')).toBe(
      'Lesson 22.2 • Section 1: Bernard Weiner (1985): The 3 Dimensions of Causal Attribution'
    );
    expect(resolveValidSection('tell me about the intelligence praise paradox in mueller and dweck')).toBe(
      'Lesson 22.2 • Section 2: Mueller & Dweck (1998): The Intelligence Praise Paradox'
    );
    expect(resolveValidSection('what did raymond perry and david yeager find in longitudinal attribution retraining')).toBe(
      'Lesson 22.2 • Section 3: Raymond Perry & David Yeager: Longitudinal Attribution Retraining'
    );
  });

  it('should return specialized tutor system instruction for attribution-retraining-mindset', () => {
    const instruction = getTutorSystemInstruction('attribution-retraining-mindset');
    expect(instruction).toContain('Bernard Weiner');
    expect(instruction).toContain('Claudia Mueller');
    expect(instruction).toContain('Raymond Perry');
  });

  it('should be properly wired in courseData registry', () => {
    expect(ALL_LESSONS['attribution-retraining-mindset']).toBeDefined();
    const ch22 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-22-identity-mindset');
    expect(ch22).toBeDefined();
    const lesson = ch22?.lessons.find(l => l.id === 'attribution-retraining-mindset');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
