import { describe, it, expect } from 'vitest';
import { LESSON_STRUCTURE_MAPPING_ANALOGY } from '../data/lesson9_1Data.ts';
import { ALL_LESSONS, PRIMARY_COURSE } from '../data/courseData.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';

describe('Lesson 9.1: Structure-Mapping & Analogical Transfer Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_STRUCTURE_MAPPING_ANALOGY.id).toBe('structure-mapping-analogy');
    expect(LESSON_STRUCTURE_MAPPING_ANALOGY.chapterId).toBe('ch-9-analogy-bridging');
    expect(LESSON_STRUCTURE_MAPPING_ANALOGY.number).toBe('9.1');
    expect(LESSON_STRUCTURE_MAPPING_ANALOGY.title).toBe('Structure-Mapping & Analogical Transfer');
    expect(LESSON_STRUCTURE_MAPPING_ANALOGY.readingTimeMinutes).toBeGreaterThanOrEqual(15);
    expect(LESSON_STRUCTURE_MAPPING_ANALOGY.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_STRUCTURE_MAPPING_ANALOGY;
    expect(curiosityQuestion.headline).toContain('medical tumor problem');
    expect(curiosityQuestion.teaser).toContain('Structure-Mapping');
    expect(curiosityQuestion.hookNote).toContain('Mary Gick');
    expect(curiosityQuestion.hookNote).toContain('Keith Holyoak');
    expect(curiosityQuestion.hookNote).toContain('Karl Duncker');
    expect(curiosityQuestion.hookNote).toContain('Dedre Gentner');
    expect(curiosityQuestion.hookNote).toContain('Systematicity');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_STRUCTURE_MAPPING_ANALOGY;
    expect(prediction.options.length).toBe(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-analogical-schema-induction');
    expect(prediction.outcome.headline).toContain('Gick & Holyoak, 1983');
    expect(prediction.outcome.explanation).toContain('Analogical Encoding');
    expect(prediction.outcome.optionFeedback['opt-technical-focus-superiority']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-analogical-schema-induction']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-uniform-transfer-failure']).toBeDefined();
    expect(prediction.outcome.comparisons.length).toBe(3);
    expect(prediction.outcome.evidenceDistinction).toBeTruthy();
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_STRUCTURE_MAPPING_ANALOGY;
    expect(coreExplanations.length).toBe(3);

    for (const exp of coreExplanations) {
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
  });

  it('should provide a 4-stage interactive structure-mapping engine diagram', () => {
    const { diagram } = LESSON_STRUCTURE_MAPPING_ANALOGY;
    expect(diagram.stages.length).toBe(4);
    expect(diagram.stages[0].id).toBe('stage-surface-domain-entrapment');
    expect(diagram.stages[1].id).toBe('stage-predicate-structural-alignment');
    expect(diagram.stages[2].id).toBe('stage-relational-schema-induction');
    expect(diagram.stages[3].id).toBe('stage-far-analogical-transfer');
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_STRUCTURE_MAPPING_ANALOGY;
    expect(exercise.categories.length).toBe(4);
    expect(exercise.scenarios.length).toBe(4);
    for (const scen of exercise.scenarios) {
      expect(scen.realWorldContext).toBeTruthy();
      expect(scen.scenario.length).toBeGreaterThan(40);
      expect(scen.mechanismExplanation.length).toBeGreaterThan(30);
      expect(scen.evidenceBasedFix.length).toBeGreaterThan(20);
    }
  });

  it('should define 4 rigorous formative quiz questions with literature citations', () => {
    const { quiz } = LESSON_STRUCTURE_MAPPING_ANALOGY;
    expect(quiz.questions.length).toBe(4);
    for (const q of quiz.questions) {
      expect(q.options.length).toBe(4);
      expect(q.options.some(o => o.id === q.correctOptionId)).toBe(true);
      expect(q.explanation.length).toBeGreaterThan(20);
      expect(q.pedagogicalRationale).toBeTruthy();
      expect(q.evidenceNote).toBeTruthy();
    }
  });

  it('should define a practical protocol translating cognitive science into action', () => {
    const { practicalTask } = LESSON_STRUCTURE_MAPPING_ANALOGY;
    expect(practicalTask.steps.length).toBe(3);
    expect(practicalTask.steps[0].title).toContain('Relational Predicates');
    expect(practicalTask.steps[1].title).toContain('Cross-Domain Analog');
    expect(practicalTask.steps[2].title).toContain('Negative Boundary Conditions');
  });

  it('should register all Lesson 9.1 concepts in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:gentner_structure_mapping_systematicity',
      'concept:gick_holyoak_analogical_retrieval_transfer',
      'concept:analogical_encoding_mutual_alignment',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const entry = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(entry.keyCriteria.length).toBeGreaterThanOrEqual(3);
      expect(entry.canonicalAnswer.length).toBeGreaterThan(50);
      expect(entry.lessonSectionAnchor).toContain('Lesson 9.1');
    });
  });

  it('should register all Lesson 9.1 misconceptions in KNOWN_MISCONCEPTIONS', () => {
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:single_example_sufficient_for_transfer');
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:analogies_are_literal_identities');
  });

  it('should provide accurate offline tutor knowledge base answers for Lesson 9.1 queries', () => {
    const q1 = findTutorAnswer('How does Dedre Gentner structure mapping theory define systematicity?');
    expect(q1.referencedSection).toContain('Lesson 9.1');
    expect(q1.detailedResponse).toContain('Gentner');

    const q2 = findTutorAnswer('Why did subjects fail spontaneous transfer in Gick and Holyoak radiation problem?');
    expect(q2.referencedSection).toContain('Lesson 9.1');
    expect(q2.detailedResponse).toContain('Gick');

    const q3 = findTutorAnswer('What is analogical encoding and mutual alignment in Gentner Loewenstein?');
    expect(q3.referencedSection).toContain('Lesson 9.1');
    expect(q3.detailedResponse).toContain('Gentner');
  });

  it('should resolve grounding anchors correctly for Lesson 9.1 topics', () => {
    expect(resolveValidSection('dedre gentner structure mapping systematicity')).toBe(
      'Lesson 9.1 • Section 1: Dedre Gentner: Structure-Mapping Theory & The Systematicity Principle'
    );
    expect(resolveValidSection('gick holyoak radiation problem fortress')).toBe(
      'Lesson 9.1 • Section 2: Gick & Holyoak: The Radiation Problem & Spontaneous Transfer Failure'
    );
    expect(resolveValidSection('analogical encoding mutual alignment loewenstein')).toBe(
      'Lesson 9.1 • Section 3: Analogical Encoding: Mutual Alignment & Relational Schema Induction'
    );
  });

  it('should return TUTOR_SYSTEM_INSTRUCTION_LESSON_9_1 for structure-mapping-analogy', () => {
    const instruction = getTutorSystemInstruction('structure-mapping-analogy');
    expect(instruction).toContain('Lesson 9.1: "Structure-Mapping & Analogical Transfer');
    expect(instruction).toContain('Dedre Gentner');
    expect(instruction).toContain('Gick & Keith Holyoak');
    expect(instruction).toContain('Analogical Encoding');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE', () => {
    expect(ALL_LESSONS['structure-mapping-analogy']).toBeDefined();
    const ch9 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-9-analogy-bridging');
    expect(ch9).toBeDefined();
    const lesson = ch9?.lessons.find(l => l.id === 'structure-mapping-analogy');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
