import { describe, it, expect } from 'vitest';
import { LESSON_FIRST_PRINCIPLES_DOMAIN_MAPPING } from '../data/lesson23_1Data.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';
import { PRIMARY_COURSE, ALL_LESSONS } from '../data/courseData.ts';

describe('Lesson 23.1: First-Principles Domain Mapping Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_FIRST_PRINCIPLES_DOMAIN_MAPPING.id).toBe('first-principles-domain-mapping');
    expect(LESSON_FIRST_PRINCIPLES_DOMAIN_MAPPING.chapterId).toBe('ch-23-syllabus-engineering');
    expect(LESSON_FIRST_PRINCIPLES_DOMAIN_MAPPING.number).toBe('23.1');
    expect(LESSON_FIRST_PRINCIPLES_DOMAIN_MAPPING.title).toBe('First-Principles Domain Mapping');
    expect(LESSON_FIRST_PRINCIPLES_DOMAIN_MAPPING.subtitle).toContain('Extracting irreducible core concepts from noisy industry documentation');
    expect(LESSON_FIRST_PRINCIPLES_DOMAIN_MAPPING.readingTimeMinutes).toBeGreaterThanOrEqual(16);
    expect(LESSON_FIRST_PRINCIPLES_DOMAIN_MAPPING.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_FIRST_PRINCIPLES_DOMAIN_MAPPING;
    expect(curiosityQuestion.headline).toContain('framework APIs');
    expect(curiosityQuestion.hookNote).toContain('Michelene Chi');
    expect(curiosityQuestion.hookNote).toContain('Herbert Simon');
    expect(curiosityQuestion.hookNote).toContain('David Ausubel');
    expect(curiosityQuestion.hookNote).toContain('Joseph Novak');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_FIRST_PRINCIPLES_DOMAIN_MAPPING;
    expect(prediction.options).toHaveLength(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-condition-c-first-principles');
    expect(prediction.outcome.explanation).toContain('Chi');
    expect(prediction.outcome.explanation).toContain('Simon');
    expect(prediction.outcome.explanation).toContain('First-Principles');
    expect(prediction.outcome.comparisons.length).toBeGreaterThanOrEqual(3);
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_FIRST_PRINCIPLES_DOMAIN_MAPPING;
    expect(coreExplanations).toHaveLength(3);

    // Module 1: Chi, Feltovich & Glaser Deep Structure vs Surface Features
    expect(coreExplanations[0].id).toBe('chi-deep-structure-vs-surface-features');
    expect(coreExplanations[0].title).toContain('Chi, Feltovich & Glaser');
    expect(coreExplanations[0].scientificStatus).toBe('empirical-consensus');
    expect(coreExplanations[0].mechanisms.length).toBeGreaterThanOrEqual(3);
    expect(coreExplanations[0].keyInsight).toContain('Conservation of Energy');

    // Module 2: Ausubel & Novak Progressive Differentiation
    expect(coreExplanations[1].id).toBe('ausubel-novak-progressive-differentiation');
    expect(coreExplanations[1].title).toContain('David Ausubel & Joseph Novak');
    expect(coreExplanations[1].scientificStatus).toBe('cognitive-model');
    expect(coreExplanations[1].mechanisms.length).toBeGreaterThanOrEqual(3);
    expect(coreExplanations[1].keyInsight).toContain('subsuming principles');

    // Module 3: Herbert Simon Nearly-Decomposable Hierarchies
    expect(coreExplanations[2].id).toBe('simon-chase-nearly-decomposable-hierarchies');
    expect(coreExplanations[2].title).toContain('Herbert Simon');
    expect(coreExplanations[2].scientificStatus).toBe('empirical-consensus');
    expect(coreExplanations[2].mechanisms.length).toBeGreaterThanOrEqual(3);
    expect(coreExplanations[2].keyInsight).toContain('irreducible primitives');
  });

  it('should provide an interactive diagram modeling the 5-stage knowledge extraction funnel', () => {
    const { diagram } = LESSON_FIRST_PRINCIPLES_DOMAIN_MAPPING;
    expect(diagram.title).toBe('The First-Principles Knowledge Extraction & Hierarchy Funnel');
    expect(diagram.stages).toHaveLength(5);
    expect(diagram.stages[0].name).toContain('Industry Documentation Ingestion');
    expect(diagram.stages[1].name).toContain('Irreducible Primitive Extraction');
    expect(diagram.stages[2].name).toContain('Progressive Differentiation Graphing');
    expect(diagram.stages[3].name).toContain('Cross-Branch Integrative Reconciliation');
    expect(diagram.stages[4].name).toContain('Expert Schema Automation');
    expect(diagram.feedbackLoopDescription).toContain('novel anomalous system behavior');
  });

  it('should deliver an interactive sorting exercise with 4 scenarios', () => {
    const { exercise } = LESSON_FIRST_PRINCIPLES_DOMAIN_MAPPING;
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
    const { quiz } = LESSON_FIRST_PRINCIPLES_DOMAIN_MAPPING;
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

  it('should present a 3-step practical task for first-principles domain mapping', () => {
    const { practicalTask } = LESSON_FIRST_PRINCIPLES_DOMAIN_MAPPING;
    expect(practicalTask.steps).toHaveLength(3);
    expect(practicalTask.steps[0].title).toContain('Strip Surface Tooling Noise');
    expect(practicalTask.steps[1].title).toContain('Progressive Differentiation Graph');
    expect(practicalTask.steps[2].title).toContain('Integrative Reconciliation');
  });

  it('should have all concepts registered in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:chi_expert_deep_structure_first_principles',
      'concept:ausubel_progressive_differentiation_concept_mapping',
      'concept:simon_chase_hierarchical_abstraction_chunking',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const prompt = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(prompt.keyCriteria.length).toBeGreaterThanOrEqual(4);
      expect(prompt.canonicalAnswer.length).toBeGreaterThan(100);
      expect(prompt.lessonSectionAnchor).toContain('Lesson 23.1');
    });
  });

  it('should have all misconceptions registered in KNOWN_MISCONCEPTIONS', () => {
    const expectedMisconceptions = [
      'misconception:reasoning_by_analogy_is_first_principles_understanding',
      'misconception:surface_features_define_domain_difficulty',
    ];

    expectedMisconceptions.forEach(m => {
      expect(KNOWN_MISCONCEPTIONS).toContain(m);
    });
  });

  it('should retrieve accurate tutor knowledge entries for Lesson 23.1 queries', () => {
    const answer1 = findTutorAnswer('what did michelene chi find about deep structure vs surface features in physics');
    expect(answer1.title).toContain('Michelene Chi');
    expect(answer1.detailedResponse).toContain('Conservation of Energy');

    const answer2 = findTutorAnswer('explain david ausubel progressive differentiation and joseph novak concept mapping');
    expect(answer2.title).toContain('David Ausubel');
    expect(answer2.detailedResponse).toContain('Progressive Differentiation');

    const answer3 = findTutorAnswer('how does herbert simon nearly-decomposable hierarchies relate to chunking and irreducible primitives');
    expect(answer3.title).toContain('Herbert Simon');
    expect(answer3.detailedResponse).toContain('Nearly-Decomposable');
  });

  it('should resolve grounding anchors for Lesson 23.1 correctly', () => {
    expect(resolveValidSection('explain michelene chi and paul feltovich deep structure vs surface features')).toBe(
      'Lesson 23.1 • Section 1: Chi, Feltovich & Glaser (1981): Deep Structure vs Surface Features'
    );
    expect(resolveValidSection('tell me about david ausubel progressive differentiation and integrative reconciliation')).toBe(
      'Lesson 23.1 • Section 2: David Ausubel & Joseph Novak: Progressive Differentiation & Concept Mapping'
    );
    expect(resolveValidSection('what did herbert simon discover about nearly-decomposable hierarchies and irreducible primitives')).toBe(
      'Lesson 23.1 • Section 3: Herbert Simon: Irreducible Primitives & Abstraction Hierarchies'
    );
  });

  it('should return specialized tutor system instruction for first-principles-domain-mapping', () => {
    const instruction = getTutorSystemInstruction('first-principles-domain-mapping');
    expect(instruction).toContain('Michelene Chi');
    expect(instruction).toContain('David Ausubel');
    expect(instruction).toContain('Herbert Simon');
  });

  it('should be properly wired in courseData registry', () => {
    expect(ALL_LESSONS['first-principles-domain-mapping']).toBeDefined();
    const ch23 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-23-syllabus-engineering');
    expect(ch23).toBeDefined();
    const lesson = ch23?.lessons.find(l => l.id === 'first-principles-domain-mapping');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
