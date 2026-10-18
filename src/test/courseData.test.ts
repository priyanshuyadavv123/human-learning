import { describe, it, expect } from 'vitest';
import { PRIMARY_COURSE, LESSON_HOW_LEARNING_WORKS } from '../data/courseData.ts';

describe('Course and Lesson Data Integrity', () => {
  it('defines the primary course structure correctly', () => {
    expect(PRIMARY_COURSE.id).toBe('foundations-of-cognition');
    expect(PRIMARY_COURSE.chapters.length).toBeGreaterThanOrEqual(3);
    expect(PRIMARY_COURSE.chapters[0].lessons.length).toBeGreaterThanOrEqual(1);
  });

  it('contains Lesson 1.1 with complete pedagogical structure', () => {
    const lesson = LESSON_HOW_LEARNING_WORKS;
    expect(lesson.id).toBe('how-learning-actually-works');
    expect(lesson.title).toBe('How Learning Actually Works');
    expect(lesson.readingTimeMinutes).toBeGreaterThan(0);

    // 1. Curiosity Hook
    expect(lesson.curiosityQuestion.headline).toBeTruthy();
    expect(lesson.curiosityQuestion.teaser).toBeTruthy();

    // 2. Prediction Interaction
    expect(lesson.prediction.options.length).toBe(3);
    expect(lesson.prediction.outcome.winningOptionId).toBe('opt-retrieval');
    expect(lesson.prediction.outcome.comparisons.length).toBe(3);
    expect(lesson.prediction.outcome.evidenceDistinction).toContain('Empirical Evidence');

    // 3. Core Explanations (5 mechanisms)
    expect(lesson.coreExplanations.length).toBe(5);
    const explanationIds = lesson.coreExplanations.map(e => e.id);
    expect(explanationIds).toContain('attention');
    expect(explanationIds).toContain('working-memory');
    expect(explanationIds).toContain('long-term-memory');
    expect(explanationIds).toContain('retrieval-practice');
    expect(explanationIds).toContain('calibrated-feedback');

    // 4. Diagram
    expect(lesson.diagram.stages.length).toBe(4);
    expect(lesson.diagram.feedbackLoopDescription).toBeTruthy();

    // 5. Interactive Exercise
    expect(lesson.exercise.categories.length).toBe(4);
    expect(lesson.exercise.scenarios.length).toBe(4);
    lesson.exercise.scenarios.forEach(s => {
      expect(s.scenario).toBeTruthy();
      expect(s.mechanismExplanation).toBeTruthy();
      expect(s.evidenceBasedFix).toBeTruthy();
    });

    // 6. Quiz with locked answers
    expect(lesson.quiz.questions.length).toBe(4);
    lesson.quiz.questions.forEach(q => {
      expect(q.options.length).toBe(4);
      expect(q.correctOptionId).toBeTruthy();
      expect(q.explanation).toBeTruthy();
      expect(q.pedagogicalRationale).toBeTruthy();
      expect(q.evidenceNote).toBeTruthy();
    });

    // 7. Practical Task
    expect(lesson.practicalTask.steps.length).toBe(3);
  });
});
