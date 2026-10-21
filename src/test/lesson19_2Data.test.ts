import { describe, it, expect } from 'vitest';
import { LESSON_COMBINATORIAL_PLAY_SYNTHESIS } from '../data/lesson19_2Data.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';
import { PRIMARY_COURSE, ALL_LESSONS } from '../data/courseData.ts';

describe('Lesson 19.2: Associative Combinatorics & Lateral Synthesis Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_COMBINATORIAL_PLAY_SYNTHESIS.id).toBe('combinatorial-play-synthesis');
    expect(LESSON_COMBINATORIAL_PLAY_SYNTHESIS.chapterId).toBe('ch-19-creative-insight');
    expect(LESSON_COMBINATORIAL_PLAY_SYNTHESIS.number).toBe('19.2');
    expect(LESSON_COMBINATORIAL_PLAY_SYNTHESIS.title).toBe('Associative Combinatorics & Lateral Synthesis');
    expect(LESSON_COMBINATORIAL_PLAY_SYNTHESIS.subtitle).toContain('Cross-pollinating disparate mental models');
    expect(LESSON_COMBINATORIAL_PLAY_SYNTHESIS.readingTimeMinutes).toBeGreaterThanOrEqual(16);
    expect(LESSON_COMBINATORIAL_PLAY_SYNTHESIS.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_COMBINATORIAL_PLAY_SYNTHESIS;
    expect(curiosityQuestion.headline).toContain('incompatible fields');
    expect(curiosityQuestion.hookNote).toContain('Arthur Koestler');
    expect(curiosityQuestion.hookNote).toContain('bisociation');
    expect(curiosityQuestion.hookNote).toContain('Sarnoff Mednick');
    expect(curiosityQuestion.hookNote).toContain('François Jacob');
    expect(curiosityQuestion.hookNote).toContain('bricolage');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_COMBINATORIAL_PLAY_SYNTHESIS;
    expect(prediction.options).toHaveLength(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-condition-c-bisociative-bricolage');
    expect(prediction.outcome.explanation).toContain('Koestler');
    expect(prediction.outcome.explanation).toContain('Jacob');
    expect(prediction.outcome.explanation).toContain('Mednick');
    expect(prediction.outcome.comparisons.length).toBeGreaterThanOrEqual(2);
    expect(prediction.outcome.comparisons.some(c => c.isEmpiricalWinner)).toBe(true);
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_COMBINATORIAL_PLAY_SYNTHESIS;
    expect(coreExplanations).toHaveLength(3);

    // Module 1: Koestler Bisociation
    expect(coreExplanations[0].id).toBe('koestler-bisociation-matrices');
    expect(coreExplanations[0].title).toContain('Arthur Koestler (1964): Bisociation');
    expect(coreExplanations[0].scientificStatus).toBe('cognitive-model');
    expect(coreExplanations[0].mechanisms.length).toBeGreaterThanOrEqual(3);
    expect(coreExplanations[0].keyInsight).toContain('bisociates two incompatible matrices');
    expect(coreExplanations[0].simplifiedModelCaveat).toBeDefined();

    // Module 2: Mednick Associative Hierarchies & RAT
    expect(coreExplanations[1].id).toBe('mednick-associative-hierarchies');
    expect(coreExplanations[1].title).toContain('Sarnoff Mednick (1962): Associative Hierarchies');
    expect(coreExplanations[1].scientificStatus).toBe('empirical-consensus');
    expect(coreExplanations[1].mechanisms.some(m => m.label.includes('Steep vs Flat'))).toBe(true);
    expect(coreExplanations[1].mechanisms.some(m => m.label.includes('Remote Associates'))).toBe(true);

    // Module 3: François Jacob Evolutionary Bricolage
    expect(coreExplanations[2].id).toBe('jacob-evolutionary-bricolage');
    expect(coreExplanations[2].title).toContain('François Jacob (1977): Evolutionary Bricolage');
    expect(coreExplanations[2].scientificStatus).toBe('empirical-consensus');
    expect(coreExplanations[2].mechanisms.some(m => m.label.includes('Bricolage vs Engineering Ex Nihilo'))).toBe(true);
    expect(coreExplanations[2].mechanisms.some(m => m.label.includes('3-Step Lateral Synthesis Protocol'))).toBe(true);
  });

  it('should define a 6-stage diagram illustrating the combinatorics & bricolage funnel', () => {
    const { diagram } = LESSON_COMBINATORIAL_PLAY_SYNTHESIS;
    expect(diagram.title).toContain('Associative Combinatorics');
    expect(diagram.stages).toHaveLength(6);
    expect(diagram.stages[0].name).toContain('Unimodal');
    expect(diagram.stages[1].name).toContain('Local Optimum');
    expect(diagram.stages[2].name).toContain('Orthogonal');
    expect(diagram.stages[3].name).toContain('Bisociative Collision');
    expect(diagram.stages[4].name).toContain('Jacobian Bricolage');
    expect(diagram.stages[5].name).toContain('Emergent Synthetic Artifact');
    expect(diagram.feedbackLoopDescription).toBeDefined();
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_COMBINATORIAL_PLAY_SYNTHESIS;
    expect(exercise.categories.length).toBe(4);
    expect(exercise.scenarios).toHaveLength(4);

    const s1 = exercise.scenarios[0];
    expect(s1.realWorldContext).toContain('Distributed Database');
    expect(s1.mechanismExplanation).toContain('Mono-Matrix Fixation');

    const s2 = exercise.scenarios[1];
    expect(s2.realWorldContext).toContain('Fintech');
    expect(s2.mechanismExplanation).toContain('Ungrounded Chaotic Divergence');

    const s3 = exercise.scenarios[2];
    expect(s3.realWorldContext).toContain('Deep Learning Optimization');
    expect(s3.mechanismExplanation).toContain('Steep Hierarchy');

    const s4 = exercise.scenarios[3];
    expect(s4.realWorldContext).toContain('Biomedical Microfluidics');
    expect(s4.mechanismExplanation).toContain('Bisociative Bricolage');
  });

  it('should define 4 rigorous formative quiz questions with literature citations', () => {
    const { quiz } = LESSON_COMBINATORIAL_PLAY_SYNTHESIS;
    expect(quiz.questions).toHaveLength(4);
    expect(quiz.questions[0].explanation).toContain('Koestler');
    expect(quiz.questions[1].explanation).toContain('Mednick');
    expect(quiz.questions[2].explanation).toContain('Jacob');
    expect(quiz.questions[3].explanation).toContain('Brodmann Area 10');
  });

  it('should define a 3-step practical protocol translating cognitive science into action', () => {
    const { practicalTask } = LESSON_COMBINATORIAL_PLAY_SYNTHESIS;
    expect(practicalTask.title).toContain('3-Step Lateral Synthesis & Bisociative Bricolage Protocol');
    expect(practicalTask.steps.length).toBe(3);
    expect(practicalTask.steps[0].title).toContain('Structural Invariant Extraction');
    expect(practicalTask.steps[1].title).toContain('Orthogonal Matrix Foraging');
    expect(practicalTask.steps[2].title).toContain('Jacobian Bricolage');
  });

  it('should register all Lesson 19.2 concepts in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const lesson19_2Concepts = [
      'concept:koestler_bisociation_matrices',
      'concept:mednick_flat_associative_hierarchy',
      'concept:jacob_evolutionary_bricolage_synthesis',
    ] as const;

    for (const c of lesson19_2Concepts) {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c]).toBeDefined();
      expect(CONCEPT_REGISTRY[c].conceptId).toBe(c);
      expect(CONCEPT_REGISTRY[c].keyCriteria.length).toBeGreaterThanOrEqual(4);
      expect(CONCEPT_REGISTRY[c].canonicalAnswer).toBeDefined();
      expect(CONCEPT_REGISTRY[c].lessonSectionAnchor).toContain('Lesson 19.2');
    }
  });

  it('should register all Lesson 19.2 misconceptions in KNOWN_MISCONCEPTIONS', () => {
    const lesson19_2Misconceptions = [
      'misconception:creativity_is_mystical_creation_ex_nihilo',
      'misconception:steep_specialized_hierarchies_suffice_for_breakthrough_innovation',
    ] as const;

    for (const m of lesson19_2Misconceptions) {
      expect(KNOWN_MISCONCEPTIONS).toContain(m);
    }
  });

  it('should provide accurate offline tutor knowledge base answers for Lesson 19.2 queries', () => {
    const ans1 = findTutorAnswer('How does Arthur Koestler explain bisociation and incompatible matrices of thought?');
    expect(ans1.referencedSection).toContain('Lesson 19.2');
    expect(ans1.detailedResponse).toContain('Koestler');

    const ans2 = findTutorAnswer('What is the difference between a flat hierarchy and a steep hierarchy in Mednick Remote Associates Test?');
    expect(ans2.referencedSection).toContain('Lesson 19.2');
    expect(ans2.detailedResponse).toContain('Mednick');

    const ans3 = findTutorAnswer('How does Francois Jacob explain evolutionary bricolage and lateral synthesis?');
    expect(ans3.referencedSection).toContain('Lesson 19.2');
    expect(ans3.detailedResponse).toContain('François Jacob');
  });

  it('should resolve grounding anchors correctly for Lesson 19.2 topics', () => {
    expect(resolveValidSection('koestler bisociation incompatible matrices of thought')).toBe(
      'Lesson 19.2 • Section 1: Arthur Koestler (1964): Bisociation & Incompatible Matrices'
    );
    expect(resolveValidSection('mednick remote associates test flat associative hierarchy')).toBe(
      'Lesson 19.2 • Section 2: Sarnoff Mednick (1962): Associative Hierarchies & The RAT'
    );
    expect(resolveValidSection('francois jacob evolutionary bricolage tinkering lateral synthesis protocol')).toBe(
      'Lesson 19.2 • Section 3: François Jacob (1977): Evolutionary Bricolage & Lateral Synthesis'
    );
  });

  it('should return TUTOR_SYSTEM_INSTRUCTION_LESSON_19_2 for combinatorial-play-synthesis', () => {
    const prompt = getTutorSystemInstruction('combinatorial-play-synthesis');
    expect(prompt).toContain('Lesson 19.2');
    expect(prompt).toContain('Koestler');
    expect(prompt).toContain('Mednick');
    expect(prompt).toContain('François Jacob');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE with isAvailable true', () => {
    expect(ALL_LESSONS['combinatorial-play-synthesis']).toBeDefined();
    expect(ALL_LESSONS['combinatorial-play-synthesis'].id).toBe('combinatorial-play-synthesis');

    const ch19 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-19-creative-insight');
    expect(ch19).toBeDefined();
    const l192 = ch19?.lessons.find(l => l.id === 'combinatorial-play-synthesis');
    expect(l192).toBeDefined();
    expect(l192?.isAvailable).toBe(true);
  });
});
