import { describe, it, expect } from 'vitest';
import { LESSON_PROTEGE_EFFECT_TEACHING } from '../data/lesson25_1Data.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';
import { PRIMARY_COURSE, ALL_LESSONS } from '../data/courseData.ts';

describe('Lesson 25.1: The Protégé Effect: Learning by Teaching Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_PROTEGE_EFFECT_TEACHING.id).toBe('protege-effect-teaching');
    expect(LESSON_PROTEGE_EFFECT_TEACHING.chapterId).toBe('ch-25-social-protege');
    expect(LESSON_PROTEGE_EFFECT_TEACHING.number).toBe('25.1');
    expect(LESSON_PROTEGE_EFFECT_TEACHING.title).toBe('The Protégé Effect: Learning by Teaching');
    expect(LESSON_PROTEGE_EFFECT_TEACHING.subtitle).toContain('Why preparing to teach forces rigorous structural reconciliation');
    expect(LESSON_PROTEGE_EFFECT_TEACHING.readingTimeMinutes).toBeGreaterThanOrEqual(15);
    expect(LESSON_PROTEGE_EFFECT_TEACHING.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_PROTEGE_EFFECT_TEACHING;
    expect(curiosityQuestion.headline).toContain('teaching assistants');
    expect(curiosityQuestion.hookNote).toContain('Catherine Chase');
    expect(curiosityQuestion.hookNote).toContain('Daniel Schwartz');
    expect(curiosityQuestion.hookNote).toContain('Betty’s Brain');
    expect(curiosityQuestion.hookNote).toContain('Richard Feynman');
    expect(curiosityQuestion.hookNote).toContain('John Nestojko');
    expect(curiosityQuestion.hookNote).toContain('Robert Bjork');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_PROTEGE_EFFECT_TEACHING;
    expect(prediction.options).toHaveLength(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-condition-c-protege-feynman');
    expect(prediction.outcome.explanation).toContain('Chase');
    expect(prediction.outcome.explanation).toContain('Feynman');
    expect(prediction.outcome.explanation).toContain('Nestojko');
    expect(prediction.outcome.explanation).toContain('Bjork');
    expect(prediction.outcome.comparisons.length).toBeGreaterThanOrEqual(3);
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_PROTEGE_EFFECT_TEACHING;
    expect(coreExplanations).toHaveLength(3);

    // Module 1: Chase & Schwartz Teachable Agents
    expect(coreExplanations[0].id).toBe('protege-effect-teachable-agents-chase-schwartz');
    expect(coreExplanations[0].title).toContain('Catherine Chase & Daniel Schwartz');
    expect(coreExplanations[0].scientificStatus).toBe('empirical-consensus');
    expect(coreExplanations[0].mechanisms.length).toBeGreaterThanOrEqual(3);
    expect(coreExplanations[0].keyInsight).toContain('altruistic responsibility');

    // Module 2: Feynman Technique & Chi Self-Explanation
    expect(coreExplanations[1].id).toBe('feynman-technique-jargon-deconstruction-chi');
    expect(coreExplanations[1].title).toContain('Richard Feynman & Michelene Chi');
    expect(coreExplanations[1].scientificStatus).toBe('cognitive-model');
    expect(coreExplanations[1].mechanisms.length).toBeGreaterThanOrEqual(3);
    expect(coreExplanations[1].keyInsight).toContain('12-year-old');

    // Module 3: Nestojko & Bjork Expecting to Teach
    expect(coreExplanations[2].id).toBe('expecting-to-teach-schema-restructuring-bjork');
    expect(coreExplanations[2].title).toContain('John Nestojko & Robert Bjork');
    expect(coreExplanations[2].scientificStatus).toBe('empirical-consensus');
    expect(coreExplanations[2].mechanisms.length).toBeGreaterThanOrEqual(3);
    expect(coreExplanations[2].keyInsight).toContain('study as if you must teach');
  });

  it('should provide an interactive diagram modeling the 5-stage Protégé & Feynman cycle', () => {
    const { diagram } = LESSON_PROTEGE_EFFECT_TEACHING;
    expect(diagram.title).toBe('The Protégé Effect & Feynman Deconstruction Funnel');
    expect(diagram.stages).toHaveLength(5);
    expect(diagram.stages[0].name).toContain('Expectation-to-Teach Priming');
    expect(diagram.stages[1].name).toContain('Jargon-Free Plain Language');
    expect(diagram.stages[2].name).toContain('Explanatory Breakdown Localization');
    expect(diagram.stages[3].name).toContain('Primary Invariant Source');
    expect(diagram.stages[4].name).toContain('Protégé Transmission');
    expect(diagram.feedbackLoopDescription.length).toBeGreaterThan(20);
  });

  it('should provide a 4-scenario exercise diagnosing pedagogical traps', () => {
    const { exercise } = LESSON_PROTEGE_EFFECT_TEACHING;
    expect(exercise.scenarios).toHaveLength(4);
    expect(exercise.categories).toHaveLength(4);

    exercise.scenarios.forEach(scenario => {
      expect(exercise.categories.map(c => c.id)).toContain(scenario.correctCategory);
      expect(scenario.mechanismExplanation.length).toBeGreaterThan(40);
      expect(scenario.evidenceBasedFix.length).toBeGreaterThan(20);
    });
  });

  it('should provide a 4-question verification quiz with empirical rationales', () => {
    const { quiz } = LESSON_PROTEGE_EFFECT_TEACHING;
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

  it('should present a 3-step practical task for Protégé & Feynman protocol execution', () => {
    const { practicalTask } = LESSON_PROTEGE_EFFECT_TEACHING;
    expect(practicalTask.steps).toHaveLength(3);
    expect(practicalTask.steps[0].title).toContain('Identify Your Protégé & Prime the Expectation-to-Teach Mindset');
    expect(practicalTask.steps[1].title).toContain('Deliver the 12-Year-Old Feynman Explanation');
    expect(practicalTask.steps[2].title).toContain('Deconstruct the Missing Invariant');
  });

  it('should have all concepts registered in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:protege_effect_teachable_agents_chase_schwartz',
      'concept:feynman_technique_jargon_deconstruction_chi',
      'concept:expecting_to_teach_schema_restructuring_bjork',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const prompt = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(prompt.keyCriteria.length).toBeGreaterThanOrEqual(4);
      expect(prompt.canonicalAnswer.length).toBeGreaterThan(100);
      expect(prompt.lessonSectionAnchor).toContain('Lesson 25.1');
    });
  });

  it('should have all misconceptions registered in KNOWN_MISCONCEPTIONS', () => {
    const expectedMisconceptions = [
      'misconception:using_complex_jargon_demonstrates_deep_understanding',
      'misconception:teaching_is_only_beneficial_once_mastery_is_complete',
    ];

    expectedMisconceptions.forEach(m => {
      expect(KNOWN_MISCONCEPTIONS).toContain(m);
    });
  });

  it('should retrieve accurate tutor knowledge entries for Lesson 25.1 queries', () => {
    const answer1 = findTutorAnswer('what did catherine chase and daniel schwartz discover about teachable agents and the protege effect');
    expect(answer1.title).toContain('Catherine Chase');
    expect(answer1.detailedResponse).toContain('Protégé Effect');

    const answer2 = findTutorAnswer('how does richard feynman technique strip away jargon crutches and use michelene chi self explanation');
    expect(answer2.title).toContain('Richard Feynman');
    expect(answer2.detailedResponse).toContain('Feynman Technique');

    const answer3 = findTutorAnswer('explain john nestojko and robert bjork expecting to teach schema restructuring');
    expect(answer3.title).toContain('John Nestojko');
    expect(answer3.detailedResponse.toLowerCase()).toContain('expecting to teach');
  });

  it('should resolve grounding anchors for Lesson 25.1 correctly', () => {
    expect(resolveValidSection('explain catherine chase and daniel schwartz teachable agents and the protege effect')).toBe(
      'Lesson 25.1 • Section 1: Catherine Chase & Daniel Schwartz (2009): The Protégé Effect & Teachable Agents'
    );
    expect(resolveValidSection('tell me about richard feynman technique jargon deconstruction and michelene chi 1989 self explanation')).toBe(
      'Lesson 25.1 • Section 2: Richard Feynman & Michelene Chi: Jargon Deconstruction & The Self-Explanation Effect'
    );
    expect(resolveValidSection('what is john nestojko and robert bjork expecting to teach schema restructuring')).toBe(
      'Lesson 25.1 • Section 3: John Nestojko & Robert Bjork (2014): Expecting to Teach & Category Restructuring'
    );
  });

  it('should return specialized tutor system instruction for protege-effect-teaching', () => {
    const instruction = getTutorSystemInstruction('protege-effect-teaching');
    expect(instruction).toContain('Chase');
    expect(instruction).toContain('Schwartz');
    expect(instruction).toContain('Feynman');
    expect(instruction).toContain('Nestojko');
  });

  it('should be properly wired in courseData registry', () => {
    expect(ALL_LESSONS['protege-effect-teaching']).toBeDefined();
    const ch25 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-25-social-protege');
    expect(ch25).toBeDefined();
    const lesson = ch25?.lessons.find(l => l.id === 'protege-effect-teaching');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
