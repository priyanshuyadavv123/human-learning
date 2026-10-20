import { describe, it, expect } from 'vitest';
import { LESSON_PROTOTYPES_VS_EXEMPLARS } from '../data/lesson11_1Data.ts';
import { ALL_LESSONS, PRIMARY_COURSE } from '../data/courseData.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';

describe('Lesson 11.1: Prototypes vs. Exemplars Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_PROTOTYPES_VS_EXEMPLARS.id).toBe('prototypes-vs-exemplars');
    expect(LESSON_PROTOTYPES_VS_EXEMPLARS.chapterId).toBe('ch-11-categorization');
    expect(LESSON_PROTOTYPES_VS_EXEMPLARS.number).toBe('11.1');
    expect(LESSON_PROTOTYPES_VS_EXEMPLARS.title).toBe('Prototypes vs. Exemplars');
    expect(LESSON_PROTOTYPES_VS_EXEMPLARS.readingTimeMinutes).toBeGreaterThanOrEqual(14);
    expect(LESSON_PROTOTYPES_VS_EXEMPLARS.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_PROTOTYPES_VS_EXEMPLARS;
    expect(curiosityQuestion.headline).toContain('production outage');
    expect(curiosityQuestion.teaser).toContain('statistical prototypes');
    expect(curiosityQuestion.teaser).toContain('episodic exemplars');
    expect(curiosityQuestion.hookNote).toContain('Eleanor Rosch');
    expect(curiosityQuestion.hookNote).toContain('Douglas Medin');
    expect(curiosityQuestion.hookNote).toContain('Robert Nosofsky');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_PROTOTYPES_VS_EXEMPLARS;
    expect(prediction.options.length).toBe(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-exemplar-context-density');
    expect(prediction.outcome.headline).toContain('Medin & Schaffer, 1978');
    expect(prediction.outcome.explanation).toContain('Generalized Context Model');
    expect(prediction.outcome.optionFeedback['opt-abstract-prototype-cleanliness']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-exemplar-context-density']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-strict-rule-equivalence']).toBeDefined();
    expect(prediction.outcome.comparisons.length).toBe(2);
    expect(prediction.outcome.evidenceDistinction).toBeTruthy();
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_PROTOTYPES_VS_EXEMPLARS;
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

  it('should provide a 4-stage interactive multidimensional categorization diagram', () => {
    const { diagram } = LESSON_PROTOTYPES_VS_EXEMPLARS;
    expect(diagram.stages.length).toBe(4);
    expect(diagram.stages[0].id).toBe('stage-multidimensional-probe-intake');
    expect(diagram.stages[1].id).toBe('stage-prototype-centroid-comparison');
    expect(diagram.stages[2].id).toBe('stage-exemplar-memory-retrieval');
    expect(diagram.stages[3].id).toBe('stage-rulex-arbitration-decision');
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_PROTOTYPES_VS_EXEMPLARS;
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
    const { quiz } = LESSON_PROTOTYPES_VS_EXEMPLARS;
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
    const { practicalTask } = LESSON_PROTOTYPES_VS_EXEMPLARS;
    expect(practicalTask.steps.length).toBe(3);
    expect(practicalTask.steps[0].title).toContain('Exemplar Library');
    expect(practicalTask.steps[1].title).toContain('Feature Vectors');
    expect(practicalTask.steps[2].title).toContain('Rule-Plus-Exception');
  });

  it('should register all Lesson 11.1 concepts in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:rosch_prototype_theory_typicality_gradients',
      'concept:medin_schaffer_nosofsky_exemplar_gcm',
      'concept:ashby_covis_dual_system_categorization',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const entry = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(entry.keyCriteria.length).toBeGreaterThanOrEqual(3);
      expect(entry.canonicalAnswer.length).toBeGreaterThan(50);
      expect(entry.lessonSectionAnchor).toContain('Lesson 11.1');
    });
  });

  it('should register all Lesson 11.1 misconceptions in KNOWN_MISCONCEPTIONS', () => {
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:categories_are_classical_boolean_checklists');
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:single_prototypes_preserve_feature_correlations');
  });

  it('should provide accurate offline tutor knowledge base answers for Lesson 11.1 queries', () => {
    const q1 = findTutorAnswer('How did Eleanor Rosch Prototype Theory discover typicality gradients?');
    expect(q1.referencedSection).toContain('Lesson 11.1');
    expect(q1.detailedResponse).toContain('Rosch');

    const q2 = findTutorAnswer('Why does Medin Schaffer and Nosofsky GCM exemplar model preserve correlated features?');
    expect(q2.referencedSection).toContain('Lesson 11.1');
    expect(q2.detailedResponse).toContain('Nosofsky');

    const q3 = findTutorAnswer('What are the explicit and implicit networks in Ashby COVIS dual-system categorization?');
    expect(q3.referencedSection).toContain('Lesson 11.1');
    expect(q3.detailedResponse).toContain('COVIS');
  });

  it('should resolve grounding anchors correctly for Lesson 11.1 topics', () => {
    expect(resolveValidSection('eleanor rosch prototype theory typicality gradient statistical centroid')).toBe(
      'Lesson 11.1 • Section 1: Eleanor Rosch: Prototype Theory & The Death of Classical Categories'
    );
    expect(resolveValidSection('douglas medin schaffer nosofsky gcm exemplar theory correlated features')).toBe(
      'Lesson 11.1 • Section 2: Medin, Schaffer & Nosofsky: Exemplar Theory & GCM'
    );
    expect(resolveValidSection('ashby covis rulex rule-plus-exception dual-system categorization striatum')).toBe(
      'Lesson 11.1 • Section 3: Dual-System Categorization: COVIS & Rule-plus-Exception Architectures'
    );
  });

  it('should return TUTOR_SYSTEM_INSTRUCTION_LESSON_11_1 for prototypes-vs-exemplars', () => {
    const instruction = getTutorSystemInstruction('prototypes-vs-exemplars');
    expect(instruction).toContain('Lesson 11.1: "Prototypes vs. Exemplars');
    expect(instruction).toContain('Eleanor Rosch');
    expect(instruction).toContain('Douglas Medin');
    expect(instruction).toContain('Robert Nosofsky');
    expect(instruction).toContain('Ashby');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE', () => {
    expect(ALL_LESSONS['prototypes-vs-exemplars']).toBeDefined();
    const ch11 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-11-categorization');
    expect(ch11).toBeDefined();
    const lesson = ch11?.lessons.find(l => l.id === 'prototypes-vs-exemplars');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
