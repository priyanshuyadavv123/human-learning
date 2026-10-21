import { describe, it, expect } from 'vitest';
import { LESSON_BANDURA_SELF_EFFICACY } from '../data/lesson22_1Data.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';
import { PRIMARY_COURSE, ALL_LESSONS } from '../data/courseData.ts';

describe('Lesson 22.1: Bandura\'s Self-Efficacy Mechanisms Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_BANDURA_SELF_EFFICACY.id).toBe('bandura-self-efficacy');
    expect(LESSON_BANDURA_SELF_EFFICACY.chapterId).toBe('ch-22-identity-mindset');
    expect(LESSON_BANDURA_SELF_EFFICACY.number).toBe('22.1');
    expect(LESSON_BANDURA_SELF_EFFICACY.title).toBe("Bandura's Self-Efficacy Mechanisms");
    expect(LESSON_BANDURA_SELF_EFFICACY.subtitle).toContain('Mastery experiences, vicarious modeling, and emotional regulation');
    expect(LESSON_BANDURA_SELF_EFFICACY.readingTimeMinutes).toBeGreaterThanOrEqual(15);
    expect(LESSON_BANDURA_SELF_EFFICACY.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_BANDURA_SELF_EFFICACY;
    expect(curiosityQuestion.headline).toContain('raw intellectual talent');
    expect(curiosityQuestion.hookNote).toContain('Albert Bandura');
    expect(curiosityQuestion.hookNote).toContain('Enactive Mastery Experiences');
    expect(curiosityQuestion.hookNote).toContain('Dale Schunk');
    expect(curiosityQuestion.hookNote).toContain('Jennifer Mangels');
    expect(curiosityQuestion.hookNote).toContain('Carol Dweck');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_BANDURA_SELF_EFFICACY;
    expect(prediction.options).toHaveLength(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-cohort-c-proximal-coping');
    expect(prediction.outcome.explanation).toContain('Bandura');
    expect(prediction.outcome.explanation).toContain('Schunk');
    expect(prediction.outcome.explanation).toContain('Coping Models');
    expect(prediction.outcome.comparisons.length).toBeGreaterThanOrEqual(3);
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_BANDURA_SELF_EFFICACY;
    expect(coreExplanations).toHaveLength(3);

    // Module 1: Bandura Four Sources of Efficacy
    expect(coreExplanations[0].id).toBe('bandura-four-sources-efficacy');
    expect(coreExplanations[0].title).toContain('Albert Bandura');
    expect(coreExplanations[0].scientificStatus).toBe('empirical-consensus');
    expect(coreExplanations[0].mechanisms.length).toBeGreaterThanOrEqual(4);
    expect(coreExplanations[0].keyInsight).toContain('domain-specific');

    // Module 2: Dale Schunk Proximal Goals & Calibration
    expect(coreExplanations[1].id).toBe('schunk-proximal-goals-progress');
    expect(coreExplanations[1].title).toContain('Dale Schunk');
    expect(coreExplanations[1].scientificStatus).toBe('cognitive-model');
    expect(coreExplanations[1].mechanisms.length).toBeGreaterThanOrEqual(3);
    expect(coreExplanations[1].keyInsight).toContain('proximal milestones');

    // Module 3: Dweck & Steele Mindset ERP Neurobiology & Identity Safety
    expect(coreExplanations[2].id).toBe('dweck-steele-implicit-theories-identity-safety');
    expect(coreExplanations[2].title).toContain('Carol Dweck & Claude Steele');
    expect(coreExplanations[2].scientificStatus).toBe('neurobiological-mechanism');
    expect(coreExplanations[2].mechanisms.length).toBeGreaterThanOrEqual(3);
    expect(coreExplanations[2].keyInsight).toContain('corrective feedback');
  });

  it('should provide an interactive diagram modeling the 5-stage self-efficacy architecture', () => {
    const { diagram } = LESSON_BANDURA_SELF_EFFICACY;
    expect(diagram.title).toBe("Bandura's Self-Efficacy Engine & Attribution Regulation Architecture");
    expect(diagram.stages).toHaveLength(5);
    expect(diagram.stages[0].name).toContain('Proximal Task Scaffolding');
    expect(diagram.stages[1].name).toContain('Enactive Mastery Win');
    expect(diagram.stages[2].name).toContain('Vicarious Coping Modeling');
    expect(diagram.stages[3].name).toContain('Neural Mindset');
    expect(diagram.stages[4].name).toContain('Resilient Self-Efficacy');
    expect(diagram.feedbackLoopDescription).toContain('subsequent encounters');
  });

  it('should deliver an interactive sorting exercise with 4 scenarios', () => {
    const { exercise } = LESSON_BANDURA_SELF_EFFICACY;
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
    const { quiz } = LESSON_BANDURA_SELF_EFFICACY;
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

  it('should present a 3-step practical task for scaffolding self-efficacy', () => {
    const { practicalTask } = LESSON_BANDURA_SELF_EFFICACY;
    expect(practicalTask.steps).toHaveLength(3);
    expect(practicalTask.steps[0].title).toContain('Proximal Milestones');
    expect(practicalTask.steps[1].title).toContain('Recruit Peer Coping Models');
    expect(practicalTask.steps[2].title).toContain('Audit Attributions');
  });

  it('should have all concepts registered in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:bandura_self_efficacy_four_sources',
      'concept:schunk_proximal_goal_efficacy_calibration',
      'concept:dweck_implicit_theories_neurobiology',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const prompt = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(prompt.keyCriteria.length).toBeGreaterThanOrEqual(4);
      expect(prompt.canonicalAnswer.length).toBeGreaterThan(100);
      expect(prompt.lessonSectionAnchor).toContain('Lesson 22.1');
    });
  });

  it('should have all misconceptions registered in KNOWN_MISCONCEPTIONS', () => {
    const expectedMisconceptions = [
      'misconception:self_efficacy_is_general_uncalibrated_self_esteem',
      'misconception:talent_is_fixed_innate_entity',
    ];

    expectedMisconceptions.forEach(m => {
      expect(KNOWN_MISCONCEPTIONS).toContain(m);
    });
  });

  it('should retrieve accurate tutor knowledge entries for Lesson 22.1 queries', () => {
    const answer1 = findTutorAnswer('tell me about albert bandura and the four sources of self-efficacy');
    expect(answer1.title).toContain('Albert Bandura');
    expect(answer1.detailedResponse).toContain('Enactive Mastery Experiences');

    const answer2 = findTutorAnswer('what did dale schunk discover about proximal goals vs distal goals');
    expect(answer2.title).toContain('Dale Schunk');
    expect(answer2.detailedResponse).toContain('Proximal Subgoals');

    const answer3 = findTutorAnswer('how do implicit theories of intelligence and erp p3 waveforms relate in carol dweck research');
    expect(answer3.title).toContain('Carol Dweck');
    expect(answer3.detailedResponse).toContain('Mangels');
  });

  it('should resolve grounding anchors for Lesson 22.1 correctly', () => {
    expect(resolveValidSection('tell me about bandura four sources of efficacy')).toBe(
      'Lesson 22.1 • Section 1: Albert Bandura (1977, 1997): The Four Sources of Efficacy Beliefs'
    );
    expect(resolveValidSection('explain dale schunk proximal goals and progress feedback')).toBe(
      'Lesson 22.1 • Section 2: Dale Schunk (1981, 1991): Proximal Goals, Progress Feedback & Efficacy Calibration'
    );
    expect(resolveValidSection('what did jennifer mangels find about erp p3 and implicit theories of intelligence')).toBe(
      'Lesson 22.1 • Section 3: Carol Dweck & Claude Steele: Implicit Theories of Intelligence & Identity Safety'
    );
  });

  it('should return specialized tutor system instruction for bandura-self-efficacy', () => {
    const instruction = getTutorSystemInstruction('bandura-self-efficacy');
    expect(instruction).toContain('Albert Bandura');
    expect(instruction).toContain('Dale Schunk');
    expect(instruction).toContain('Jennifer Mangels');
  });

  it('should be properly wired in courseData registry', () => {
    expect(ALL_LESSONS['bandura-self-efficacy']).toBeDefined();
    const ch22 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-22-identity-mindset');
    expect(ch22).toBeDefined();
    const lesson = ch22?.lessons.find(l => l.id === 'bandura-self-efficacy');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
