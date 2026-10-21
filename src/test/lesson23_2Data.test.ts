import { describe, it, expect } from 'vitest';
import { LESSON_DEPENDENCY_GRAPH_SEQUENCING } from '../data/lesson23_2Data.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';
import { PRIMARY_COURSE, ALL_LESSONS } from '../data/courseData.ts';

describe('Lesson 23.2: Prerequisite Dependency Graphs Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_DEPENDENCY_GRAPH_SEQUENCING.id).toBe('dependency-graph-sequencing');
    expect(LESSON_DEPENDENCY_GRAPH_SEQUENCING.chapterId).toBe('ch-23-syllabus-engineering');
    expect(LESSON_DEPENDENCY_GRAPH_SEQUENCING.number).toBe('23.2');
    expect(LESSON_DEPENDENCY_GRAPH_SEQUENCING.title).toBe('Prerequisite Dependency Graphs');
    expect(LESSON_DEPENDENCY_GRAPH_SEQUENCING.subtitle).toContain('Gagné Hierarchies, Knowledge Space Theory & DAG Topological Sort');
    expect(LESSON_DEPENDENCY_GRAPH_SEQUENCING.readingTimeMinutes).toBeGreaterThanOrEqual(16);
    expect(LESSON_DEPENDENCY_GRAPH_SEQUENCING.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_DEPENDENCY_GRAPH_SEQUENCING;
    expect(curiosityQuestion.headline).toContain('Chapter 4');
    expect(curiosityQuestion.hookNote).toContain('Robert Gagné');
    expect(curiosityQuestion.hookNote).toContain('Knowledge Space Theory');
    expect(curiosityQuestion.hookNote).toContain('Jean-Paul Doignon');
    expect(curiosityQuestion.hookNote).toContain('Jean-Claude Falmagne');
    expect(curiosityQuestion.hookNote).toContain('Outer Fringe');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_DEPENDENCY_GRAPH_SEQUENCING;
    expect(prediction.options).toHaveLength(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-condition-c-dag-kst');
    expect(prediction.outcome.explanation).toContain('Gagné');
    expect(prediction.outcome.explanation).toContain('Falmagne');
    expect(prediction.outcome.explanation).toContain('Outer Fringe');
    expect(prediction.outcome.comparisons.length).toBeGreaterThanOrEqual(3);
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_DEPENDENCY_GRAPH_SEQUENCING;
    expect(coreExplanations).toHaveLength(3);

    // Module 1: Gagné Cumulative Learning Hierarchies
    expect(coreExplanations[0].id).toBe('gagne-cumulative-learning-hierarchies');
    expect(coreExplanations[0].title).toContain('Robert Gagné');
    expect(coreExplanations[0].scientificStatus).toBe('empirical-consensus');
    expect(coreExplanations[0].mechanisms.length).toBeGreaterThanOrEqual(3);
    expect(coreExplanations[0].keyInsight).toContain('subordinate prerequisites');

    // Module 2: Falmagne & Doignon Knowledge Space Theory
    expect(coreExplanations[1].id).toBe('falmagne-doignon-knowledge-space-theory');
    expect(coreExplanations[1].title).toContain('Falmagne & Doignon');
    expect(coreExplanations[1].scientificStatus).toBe('cognitive-model');
    expect(coreExplanations[1].mechanisms.length).toBeGreaterThanOrEqual(3);
    expect(coreExplanations[1].keyInsight).toContain('Outer Fringe');

    // Module 3: DAG Topological Sort & Transitive Reduction
    expect(coreExplanations[2].id).toBe('dag-topological-sort-transitive-reduction');
    expect(coreExplanations[2].title).toContain('DAG Topological Sorting');
    expect(coreExplanations[2].scientificStatus).toBe('neurobiological-mechanism');
    expect(coreExplanations[2].mechanisms.length).toBeGreaterThanOrEqual(3);
    expect(coreExplanations[2].keyInsight).toContain('Directed Acyclic Graphs');
  });

  it('should provide an interactive diagram modeling the 5-stage dependency funnel', () => {
    const { diagram } = LESSON_DEPENDENCY_GRAPH_SEQUENCING;
    expect(diagram.title).toBe('The Curriculum Dependency Graph & Topological Sequencing Funnel');
    expect(diagram.stages).toHaveLength(5);
    expect(diagram.stages[0].name).toContain('Atomic Concept Disaggregation');
    expect(diagram.stages[1].name).toContain('Prerequisite Surmise Extraction');
    expect(diagram.stages[2].name).toContain('Cycle Elimination & Transitive Reduction');
    expect(diagram.stages[3].name).toContain('Kahn’s Topological Sort');
    expect(diagram.stages[4].name).toContain('Dynamic Outer Fringe Traversal');
    expect(diagram.feedbackLoopDescription).toContain('Diagnostic assessment failures');
  });

  it('should deliver an interactive sorting exercise with 4 scenarios', () => {
    const { exercise } = LESSON_DEPENDENCY_GRAPH_SEQUENCING;
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
    const { quiz } = LESSON_DEPENDENCY_GRAPH_SEQUENCING;
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

  it('should present a 3-step practical task for prerequisite DAG sequencing', () => {
    const { practicalTask } = LESSON_DEPENDENCY_GRAPH_SEQUENCING;
    expect(practicalTask.steps).toHaveLength(3);
    expect(practicalTask.steps[0].title).toContain('Atomic Knowledge Components');
    expect(practicalTask.steps[1].title).toContain('Transitive Reduction');
    expect(practicalTask.steps[2].title).toContain('Active Outer Fringe');
  });

  it('should have all concepts registered in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:gagne_learning_hierarchies_cumulative',
      'concept:falmagne_doignon_knowledge_space_theory',
      'concept:dag_topological_sort_transitive_reduction',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const prompt = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(prompt.keyCriteria.length).toBeGreaterThanOrEqual(4);
      expect(prompt.canonicalAnswer.length).toBeGreaterThan(100);
      expect(prompt.lessonSectionAnchor).toContain('Lesson 23.2');
    });
  });

  it('should have all misconceptions registered in KNOWN_MISCONCEPTIONS', () => {
    const expectedMisconceptions = [
      'misconception:linear_textbook_order_is_optimal_learning_sequence',
      'misconception:advanced_concepts_can_be_mastered_with_leaky_prerequisites',
    ];

    expectedMisconceptions.forEach(m => {
      expect(KNOWN_MISCONCEPTIONS).toContain(m);
    });
  });

  it('should retrieve accurate tutor knowledge entries for Lesson 23.2 queries', () => {
    const answer1 = findTutorAnswer('what did robert gagne find about cumulative learning hierarchies and prerequisite mastery');
    expect(answer1.title).toContain('Robert Gagné');
    expect(answer1.detailedResponse).toContain('Cumulative Learning Theory');

    const answer2 = findTutorAnswer('explain jean-paul doignon and jean-claude falmagne knowledge space theory and outer fringe');
    expect(answer2.title).toContain('Knowledge Space Theory');
    expect(answer2.detailedResponse).toContain('Outer Fringe');

    const answer3 = findTutorAnswer('how does directed acyclic graph topological sort kahns algorithm and transitive reduction apply to curriculum');
    expect(answer3.title).toContain('Topological Sorting');
    expect(answer3.detailedResponse).toContain('Aho, Garey, & Ullman');
  });

  it('should resolve grounding anchors for Lesson 23.2 correctly', () => {
    expect(resolveValidSection('explain robert gagne cumulative learning theory and prerequisite cascade')).toBe(
      'Lesson 23.2 • Section 1: Robert Gagné (1968): Cumulative Learning & Hierarchy Cascades'
    );
    expect(resolveValidSection('tell me about falmagne and doignon knowledge space theory and surmise relation outer fringe')).toBe(
      'Lesson 23.2 • Section 2: Falmagne & Doignon: Knowledge Space Theory & Surmise Relations'
    );
    expect(resolveValidSection('what does dag topological sorting and transitive reduction do in curriculum engineering')).toBe(
      'Lesson 23.2 • Section 3: DAG Topological Sorting & Transitive Reduction in Curriculum Engineering'
    );
  });

  it('should return specialized tutor system instruction for dependency-graph-sequencing', () => {
    const instruction = getTutorSystemInstruction('dependency-graph-sequencing');
    expect(instruction).toContain('Robert Gagné');
    expect(instruction).toContain('Knowledge Space Theory');
    expect(instruction).toContain('Topological Sort');
  });

  it('should be properly wired in courseData registry', () => {
    expect(ALL_LESSONS['dependency-graph-sequencing']).toBeDefined();
    const ch23 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-23-syllabus-engineering');
    expect(ch23).toBeDefined();
    const lesson = ch23?.lessons.find(l => l.id === 'dependency-graph-sequencing');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
