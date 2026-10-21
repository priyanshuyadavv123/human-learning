import { describe, it, expect } from 'vitest';
import { LESSON_LONGITUDINAL_SPACED_SCHEDULING } from '../data/lesson26_1Data.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';
import { PRIMARY_COURSE, ALL_LESSONS } from '../data/courseData.ts';

describe('Lesson 26.1: Longitudinal Spaced Scheduling over Decades Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_LONGITUDINAL_SPACED_SCHEDULING.id).toBe('longitudinal-spaced-scheduling');
    expect(LESSON_LONGITUDINAL_SPACED_SCHEDULING.chapterId).toBe('ch-26-lifetime-architecture');
    expect(LESSON_LONGITUDINAL_SPACED_SCHEDULING.number).toBe('26.1');
    expect(LESSON_LONGITUDINAL_SPACED_SCHEDULING.title).toBe('Longitudinal Spaced Scheduling over Decades');
    expect(LESSON_LONGITUDINAL_SPACED_SCHEDULING.subtitle).toContain('Managing knowledge retention intervals extending to 10+ years');
    expect(LESSON_LONGITUDINAL_SPACED_SCHEDULING.readingTimeMinutes).toBeGreaterThanOrEqual(15);
    expect(LESSON_LONGITUDINAL_SPACED_SCHEDULING.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_LONGITUDINAL_SPACED_SCHEDULING;
    expect(curiosityQuestion.headline).toContain('80-year-old mathematician');
    expect(curiosityQuestion.hookNote).toContain('Harry P. Bahrick');
    expect(curiosityQuestion.hookNote).toContain('Permastore');
    expect(curiosityQuestion.hookNote).toContain('Nicholas Cepeda');
    expect(curiosityQuestion.hookNote).toContain('Harold Pashler');
    expect(curiosityQuestion.hookNote).toContain('Doug Rohrer');
    expect(curiosityQuestion.hookNote).toContain('Piotr Wozniak');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_LONGITUDINAL_SPACED_SCHEDULING;
    expect(prediction.options).toHaveLength(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-condition-c-decadal-permastore');
    expect(prediction.outcome.explanation).toContain('Bahrick');
    expect(prediction.outcome.explanation).toContain('Cepeda');
    expect(prediction.outcome.explanation).toContain('Pashler');
    expect(prediction.outcome.explanation).toContain('Wozniak');
    expect(prediction.outcome.explanation).toContain('Permastore');
    expect(prediction.outcome.comparisons.length).toBeGreaterThanOrEqual(3);
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_LONGITUDINAL_SPACED_SCHEDULING;
    expect(coreExplanations).toHaveLength(3);

    // Module 1: Harry Bahrick Permastore
    expect(coreExplanations[0].id).toBe('bahrick-permastore-fifty-year-retention');
    expect(coreExplanations[0].title).toContain('Harry Bahrick');
    expect(coreExplanations[0].scientificStatus).toBe('empirical-consensus');
    expect(coreExplanations[0].mechanisms.length).toBeGreaterThanOrEqual(4);
    expect(coreExplanations[0].keyInsight).toContain('permastore');

    // Module 2: Cepeda, Pashler & Rohrer Optimal Spacing
    expect(coreExplanations[1].id).toBe('cepeda-pashler-optimal-spacing-ratio-decades');
    expect(coreExplanations[1].title).toContain('Cepeda, Pashler & Rohrer');
    expect(coreExplanations[1].scientificStatus).toBe('empirical-consensus');
    expect(coreExplanations[1].mechanisms.length).toBeGreaterThanOrEqual(4);
    expect(coreExplanations[1].keyInsight).toContain('1 to 2 years');

    // Module 3: Wozniak Two-Component Model
    expect(coreExplanations[2].id).toBe('wozniak-two-component-memory-stability-retrievability');
    expect(coreExplanations[2].title).toContain('Piotr Wozniak');
    expect(coreExplanations[2].scientificStatus).toBe('cognitive-model');
    expect(coreExplanations[2].mechanisms.length).toBeGreaterThanOrEqual(4);
    expect(coreExplanations[2].keyInsight).toContain('Stability');
  });

  it('should provide an interactive diagram modeling the 5-stage Permastore & Stability Engine', () => {
    const { diagram } = LESSON_LONGITUDINAL_SPACED_SCHEDULING;
    expect(diagram.title).toBe('The Longitudinal Permastore & Stability Expansion Engine');
    expect(diagram.stages).toHaveLength(5);
    expect(diagram.stages[0].name).toContain('Initial Acquisition');
    expect(diagram.stages[1].name).toContain('Intermediate Expansion');
    expect(diagram.stages[2].name).toContain('Long-Range Spacing');
    expect(diagram.stages[3].name).toContain('Permastore Stabilization');
    expect(diagram.stages[4].name).toContain('Lifelong Retrievability');
    expect(diagram.feedbackLoopDescription.length).toBeGreaterThan(20);
  });

  it('should provide a 4-scenario exercise diagnosing decadal review pathologies', () => {
    const { exercise } = LESSON_LONGITUDINAL_SPACED_SCHEDULING;
    expect(exercise.scenarios).toHaveLength(4);
    expect(exercise.categories).toHaveLength(4);

    exercise.scenarios.forEach(scenario => {
      expect(exercise.categories.map(c => c.id)).toContain(scenario.correctCategory);
      expect(scenario.mechanismExplanation.length).toBeGreaterThan(40);
      expect(scenario.evidenceBasedFix.length).toBeGreaterThan(20);
    });
  });

  it('should provide a 4-question verification quiz with empirical rationales', () => {
    const { quiz } = LESSON_LONGITUDINAL_SPACED_SCHEDULING;
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

  it('should present a 3-step practical task for decadal spacing protocol execution', () => {
    const { practicalTask } = LESSON_LONGITUDINAL_SPACED_SCHEDULING;
    expect(practicalTask.steps).toHaveLength(3);
    expect(practicalTask.steps[0].title).toContain('Calculate Your 10–20% Macro-Spacing Schedule');
    expect(practicalTask.steps[1].title).toContain('Audit Review Debt & Execute Aggressive Queue Pruning');
    expect(practicalTask.steps[2].title).toContain('Establish an Annual Permastore Checkpoint');
  });

  it('should have all concepts registered in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:bahrick_permastore_fifty_year_retention',
      'concept:cepeda_pashler_optimal_spacing_ratio_decades',
      'concept:wozniak_two_component_memory_stability_retrievability',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const prompt = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(prompt.keyCriteria.length).toBeGreaterThanOrEqual(4);
      expect(prompt.canonicalAnswer.length).toBeGreaterThan(100);
      expect(prompt.lessonSectionAnchor).toContain('Lesson 26.1');
    });
  });

  it('should have all misconceptions registered in KNOWN_MISCONCEPTIONS', () => {
    const expectedMisconceptions = [
      'misconception:knowledge_is_inevitably_forgotten_without_daily_weekly_review',
      'misconception:all_memories_decay_at_the_same_exponential_rate',
    ];

    expectedMisconceptions.forEach(m => {
      expect(KNOWN_MISCONCEPTIONS).toContain(m);
    });
  });

  it('should retrieve accurate tutor knowledge entries for Lesson 26.1 queries', () => {
    const answer1 = findTutorAnswer('what did harry bahrick discover about permastore and fifty years of memory retention');
    expect(answer1.title).toContain('Harry Bahrick');
    expect(answer1.detailedResponse).toContain('Permastore');

    const answer2 = findTutorAnswer('explain nicholas cepeda and harold pashler optimal spacing ratio and the 10-20% rule for decades');
    expect(answer2.title).toContain('Cepeda, Pashler & Rohrer');
    expect(answer2.detailedResponse).toContain('Inter-Study Interval');

    const answer3 = findTutorAnswer('what is piotr wozniak two-component model of memory stability retrievability and queue pruning');
    expect(answer3.title).toContain('Piotr Wozniak');
    expect(answer3.detailedResponse).toContain('Stability');
  });

  it('should resolve grounding anchors for Lesson 26.1 correctly', () => {
    expect(resolveValidSection('explain harry bahrick permastore phenomenon and 50-year retention')).toBe(
      'Lesson 26.1 • Section 1: Harry Bahrick (1984, 1993): The Permastore Phenomenon & 50-Year Retention'
    );
    expect(resolveValidSection('tell me about nicholas cepeda and harold pashler optimal spacing ratio and the 10-20% rule')).toBe(
      'Lesson 26.1 • Section 2: Cepeda, Pashler & Rohrer: Optimal Spacing Ratios & The 10–20% Rule'
    );
    expect(resolveValidSection('what is piotr wozniak two-component model of memory and flashcard bankruptcy queue pruning')).toBe(
      'Lesson 26.1 • Section 3: Piotr Wozniak: The Two-Component Model (Stability vs Retrievability) & Queue Pruning'
    );
  });

  it('should return specialized tutor system instruction for longitudinal-spaced-scheduling', () => {
    const instruction = getTutorSystemInstruction('longitudinal-spaced-scheduling');
    expect(instruction).toContain('Bahrick');
    expect(instruction).toContain('Cepeda');
    expect(instruction).toContain('Pashler');
    expect(instruction).toContain('Wozniak');
  });

  it('should be properly wired in courseData registry', () => {
    expect(ALL_LESSONS['longitudinal-spaced-scheduling']).toBeDefined();
    const ch26 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-26-lifetime-architecture');
    expect(ch26).toBeDefined();
    const lesson = ch26?.lessons.find(l => l.id === 'longitudinal-spaced-scheduling');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
