import { describe, it, expect } from 'vitest';
import { LESSON_ADVERSARIAL_PEER_REVIEW } from '../data/lesson25_2Data.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';
import { PRIMARY_COURSE, ALL_LESSONS } from '../data/courseData.ts';

describe('Lesson 25.2: Adversarial Collaboration & Peer Calibration Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_ADVERSARIAL_PEER_REVIEW.id).toBe('adversarial-peer-review');
    expect(LESSON_ADVERSARIAL_PEER_REVIEW.chapterId).toBe('ch-25-social-protege');
    expect(LESSON_ADVERSARIAL_PEER_REVIEW.number).toBe('25.2');
    expect(LESSON_ADVERSARIAL_PEER_REVIEW.title).toBe('Adversarial Collaboration & Peer Calibration');
    expect(LESSON_ADVERSARIAL_PEER_REVIEW.subtitle).toContain('Using peer review and debate to shatter shared illusions of competence');
    expect(LESSON_ADVERSARIAL_PEER_REVIEW.readingTimeMinutes).toBeGreaterThanOrEqual(15);
    expect(LESSON_ADVERSARIAL_PEER_REVIEW.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_ADVERSARIAL_PEER_REVIEW;
    expect(curiosityQuestion.headline).toContain('intellectual enemies');
    expect(curiosityQuestion.hookNote).toContain('Daniel Kahneman');
    expect(curiosityQuestion.hookNote).toContain('Gary Klein');
    expect(curiosityQuestion.hookNote).toContain('American Psychologist');
    expect(curiosityQuestion.hookNote).toContain('Hugo Mercier');
    expect(curiosityQuestion.hookNote).toContain('Dan Sperber');
    expect(curiosityQuestion.hookNote).toContain('Philip Tetlock');
    expect(curiosityQuestion.hookNote).toContain('Superforecasters');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_ADVERSARIAL_PEER_REVIEW;
    expect(prediction.options).toHaveLength(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-condition-c-adversarial-red-team');
    expect(prediction.outcome.explanation).toContain('Kahneman');
    expect(prediction.outcome.explanation).toContain('Klein');
    expect(prediction.outcome.explanation).toContain('Mercier');
    expect(prediction.outcome.explanation).toContain('Sperber');
    expect(prediction.outcome.explanation).toContain('Tetlock');
    expect(prediction.outcome.explanation).toContain('Decoupled Dissent');
    expect(prediction.outcome.comparisons.length).toBeGreaterThanOrEqual(3);
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_ADVERSARIAL_PEER_REVIEW;
    expect(coreExplanations).toHaveLength(3);

    // Module 1: Kahneman & Klein Adversarial Collaboration
    expect(coreExplanations[0].id).toBe('kahneman-klein-adversarial-collaboration-boundary-testing');
    expect(coreExplanations[0].title).toContain('Daniel Kahneman & Gary Klein');
    expect(coreExplanations[0].scientificStatus).toBe('empirical-consensus');
    expect(coreExplanations[0].mechanisms.length).toBeGreaterThanOrEqual(4);
    expect(coreExplanations[0].keyInsight).toContain('high-validity environments');

    // Module 2: Mercier & Sperber Argumentative Theory of Reasoning
    expect(coreExplanations[1].id).toBe('mercier-sperber-argumentative-theory-reasoning');
    expect(coreExplanations[1].title).toContain('Hugo Mercier & Dan Sperber');
    expect(coreExplanations[1].scientificStatus).toBe('cognitive-model');
    expect(coreExplanations[1].mechanisms.length).toBeGreaterThanOrEqual(4);
    expect(coreExplanations[1].keyInsight).toContain('defense attorney');

    // Module 3: Tetlock Superforecasting & Red Teaming
    expect(coreExplanations[2].id).toBe('tetlock-red-teaming-peer-calibration-decoupled-dissent');
    expect(coreExplanations[2].title).toContain('Philip Tetlock & Red Teaming');
    expect(coreExplanations[2].scientificStatus).toBe('empirical-consensus');
    expect(coreExplanations[2].mechanisms.length).toBeGreaterThanOrEqual(4);
    expect(coreExplanations[2].keyInsight).toContain('Polite consensus is an epistemic hazard');
  });

  it('should provide an interactive diagram modeling the 5-stage Adversarial & Calibration Funnel', () => {
    const { diagram } = LESSON_ADVERSARIAL_PEER_REVIEW;
    expect(diagram.title).toBe('The Adversarial Collaboration & Peer Calibration Funnel');
    expect(diagram.stages).toHaveLength(5);
    expect(diagram.stages[0].name).toContain('Disagreement Registration');
    expect(diagram.stages[1].name).toContain('Empirical Boundary');
    expect(diagram.stages[2].name).toContain('Red Team Dialectical');
    expect(diagram.stages[3].name).toContain('Epistemic Calibration');
    expect(diagram.stages[4].name).toContain('Joint Synthesis');
    expect(diagram.feedbackLoopDescription.length).toBeGreaterThan(20);
  });

  it('should provide a 4-scenario exercise diagnosing epistemic peer review breakdowns', () => {
    const { exercise } = LESSON_ADVERSARIAL_PEER_REVIEW;
    expect(exercise.scenarios).toHaveLength(4);
    expect(exercise.categories).toHaveLength(4);

    exercise.scenarios.forEach(scenario => {
      expect(exercise.categories.map(c => c.id)).toContain(scenario.correctCategory);
      expect(scenario.mechanismExplanation.length).toBeGreaterThan(40);
      expect(scenario.evidenceBasedFix.length).toBeGreaterThan(20);
    });
  });

  it('should provide a 4-question verification quiz with empirical rationales', () => {
    const { quiz } = LESSON_ADVERSARIAL_PEER_REVIEW;
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

  it('should present a 3-step practical task for adversarial peer review execution', () => {
    const { practicalTask } = LESSON_ADVERSARIAL_PEER_REVIEW;
    expect(practicalTask.steps).toHaveLength(3);
    expect(practicalTask.steps[0].title).toContain('Pre-Register an Adversarial Hypothesis');
    expect(practicalTask.steps[1].title).toContain('Convene a Red Team Review');
    expect(practicalTask.steps[2].title).toContain('Score Brier Calibration');
  });

  it('should have all concepts registered in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:adversarial_collaboration_kahneman_klein_boundary_testing',
      'concept:argumentative_theory_reasoning_mercier_sperber',
      'concept:peer_calibration_red_teaming_tetlock',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const prompt = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(prompt.keyCriteria.length).toBeGreaterThanOrEqual(4);
      expect(prompt.canonicalAnswer.length).toBeGreaterThan(100);
      expect(prompt.lessonSectionAnchor).toContain('Lesson 25.2');
    });
  });

  it('should have all misconceptions registered in KNOWN_MISCONCEPTIONS', () => {
    const expectedMisconceptions = [
      'misconception:polite_consensus_signifies_high_quality_collective_learning',
      'misconception:solitary_introspection_can_eliminate_all_cognitive_biases',
    ];

    expectedMisconceptions.forEach(m => {
      expect(KNOWN_MISCONCEPTIONS).toContain(m);
    });
  });

  it('should retrieve accurate tutor knowledge entries for Lesson 25.2 queries', () => {
    const answer1 = findTutorAnswer('what did daniel kahneman and gary klein conclude about conditions for intuitive expertise in adversarial collaboration');
    expect(answer1.title).toContain('Daniel Kahneman & Gary Klein');
    expect(answer1.detailedResponse).toContain('High-Validity Environment');

    const answer2 = findTutorAnswer('how does hugo mercier and dan sperber argumentative theory of reasoning explain myside bias and evaluative vigilance');
    expect(answer2.title).toContain('Hugo Mercier & Dan Sperber');
    expect(answer2.title).toContain('Argumentative Theory of Reasoning');
    expect(answer2.detailedResponse).toContain('myside bias');
    expect(answer2.detailedResponse).toContain('evaluative vigilance');

    const answer3 = findTutorAnswer('explain philip tetlock superforecasting red teaming decoupled dissent and brier score calibration');
    expect(answer3.title).toContain('Philip Tetlock & Red Teaming');
    expect(answer3.detailedResponse).toContain('Decoupled Dissent');
  });

  it('should resolve grounding anchors for Lesson 25.2 correctly', () => {
    expect(resolveValidSection('explain daniel kahneman and gary klein adversarial collaboration and boundary testing')).toBe(
      'Lesson 25.2 • Section 1: Daniel Kahneman & Gary Klein (2009): Adversarial Collaboration & Boundary Testing'
    );
    expect(resolveValidSection('tell me about hugo mercier and dan sperber argumentative theory of reasoning and enigma of reason')).toBe(
      'Lesson 25.2 • Section 2: Hugo Mercier & Dan Sperber (2011): The Argumentative Theory of Reasoning'
    );
    expect(resolveValidSection('what is philip tetlock superforecasting red teaming and decoupled dissent')).toBe(
      'Lesson 25.2 • Section 3: Philip Tetlock & Red Teaming: Peer Calibration & Decoupled Dissent'
    );
  });

  it('should return specialized tutor system instruction for adversarial-peer-review', () => {
    const instruction = getTutorSystemInstruction('adversarial-peer-review');
    expect(instruction).toContain('Kahneman');
    expect(instruction).toContain('Klein');
    expect(instruction).toContain('Mercier');
    expect(instruction).toContain('Tetlock');
  });

  it('should be properly wired in courseData registry', () => {
    expect(ALL_LESSONS['adversarial-peer-review']).toBeDefined();
    const ch25 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-25-social-protege');
    expect(ch25).toBeDefined();
    const lesson = ch25?.lessons.find(l => l.id === 'adversarial-peer-review');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
