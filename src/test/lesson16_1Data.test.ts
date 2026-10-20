import { describe, it, expect } from 'vitest';
import { LESSON_SPECIFICITY_OF_TRANSFER } from '../data/lesson16_1Data.ts';
import { ALL_LESSONS, PRIMARY_COURSE } from '../data/courseData.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';

describe('Lesson 16.1: The Specificity of Transfer Problem Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_SPECIFICITY_OF_TRANSFER.id).toBe('specificity-of-transfer');
    expect(LESSON_SPECIFICITY_OF_TRANSFER.chapterId).toBe('ch-16-transfer');
    expect(LESSON_SPECIFICITY_OF_TRANSFER.number).toBe('16.1');
    expect(LESSON_SPECIFICITY_OF_TRANSFER.title).toBe('The Specificity of Transfer Problem');
    expect(LESSON_SPECIFICITY_OF_TRANSFER.readingTimeMinutes).toBeGreaterThanOrEqual(14);
    expect(LESSON_SPECIFICITY_OF_TRANSFER.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_SPECIFICITY_OF_TRANSFER;
    expect(curiosityQuestion.headline).toContain('spatial memory');
    expect(curiosityQuestion.teaser).toContain('Formal Discipline');
    expect(curiosityQuestion.hookNote).toContain('Formal Discipline');
    expect(curiosityQuestion.hookNote).toContain('Edward Thorndike');
    expect(curiosityQuestion.hookNote).toContain('Identical Elements');
    expect(curiosityQuestion.hookNote).toContain('Barnett & Ceci');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_SPECIFICITY_OF_TRANSFER;
    expect(prediction.options.length).toBe(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-group-b-identical-elements-transfer');
    expect(prediction.outcome.headline).toContain('Thorndike’s Law Vindicated');
    expect(prediction.outcome.explanation).toContain('Thorndike');
    expect(prediction.outcome.optionFeedback['opt-group-a-formal-discipline-superior']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-group-b-identical-elements-transfer']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-equivalent-cognitive-stamina']).toBeDefined();
    expect(prediction.outcome.comparisons.length).toBe(2);
    expect(prediction.outcome.evidenceDistinction).toBeTruthy();
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_SPECIFICITY_OF_TRANSFER;
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

  it('should provide a 4-stage interactive transfer horizon simulator diagram', () => {
    const { diagram } = LESSON_SPECIFICITY_OF_TRANSFER;
    expect(diagram.stages.length).toBe(4);
    expect(diagram.stages[0].id).toBe('stage-direct-acquisition');
    expect(diagram.stages[1].id).toBe('stage-near-transfer-boundary');
    expect(diagram.stages[2].id).toBe('stage-contextual-distance-decay');
    expect(diagram.stages[3].id).toBe('stage-far-transfer-mastery');
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_SPECIFICITY_OF_TRANSFER;
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
    const { quiz } = LESSON_SPECIFICITY_OF_TRANSFER;
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
    const { practicalTask } = LESSON_SPECIFICITY_OF_TRANSFER;
    expect(practicalTask.steps.length).toBe(3);
    expect(practicalTask.steps[0].title).toContain('Formal Discipline Fallacies');
    expect(practicalTask.steps[1].title).toContain('Concrete Production Rules');
    expect(practicalTask.steps[2].title).toContain('High-Fidelity Practice');
  });

  it('should register all Lesson 16.1 concepts in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:thorndike_identical_elements_theory',
      'concept:barnett_ceci_multi_dimensional_transfer_taxonomy',
      'concept:brain_training_myth_domain_specific_expertise',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const entry = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(entry.keyCriteria.length).toBeGreaterThanOrEqual(3);
      expect(entry.canonicalAnswer.length).toBeGreaterThan(50);
      expect(entry.lessonSectionAnchor).toContain('Lesson 16.1');
    });
  });

  it('should register all Lesson 16.1 misconceptions in KNOWN_MISCONCEPTIONS', () => {
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:doctrine_of_formal_discipline_brain_gym');
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:expertise_is_general_mental_hardware');
  });

  it('should provide accurate offline tutor knowledge base answers for Lesson 16.1 queries', () => {
    const q1 = findTutorAnswer('what is edward thorndike identical elements theory and formal discipline?');
    expect(q1.referencedSection).toContain('Lesson 16.1');
    expect(q1.detailedResponse).toContain('Thorndike');

    const q2 = findTutorAnswer('how does barnett and ceci taxonomy of transfer near vs far transfer work?');
    expect(q2.referencedSection).toContain('Lesson 16.1');
    expect(q2.detailedResponse).toContain('Barnett');

    const q3 = findTutorAnswer('why does lumosity brain training and dual n-back fail according to owen nature 2010?');
    expect(q3.referencedSection).toContain('Lesson 16.1');
    expect(q3.detailedResponse).toContain('Owen');
  });

  it('should resolve grounding anchors correctly for Lesson 16.1 topics', () => {
    expect(resolveValidSection('edward thorndike identical elements theory formal discipline woodworth')).toBe(
      'Lesson 16.1 • Section 1: Edward Thorndike (1901): The Theory of Identical Elements'
    );
    expect(resolveValidSection('barnett ceci multi-dimensional taxonomy of transfer near transfer far transfer')).toBe(
      'Lesson 16.1 • Section 2: Barnett & Ceci (2002): The Multi-Dimensional Taxonomy of Transfer'
    );
    expect(resolveValidSection('brain training myth lumosity owen nature 2010 chase simon chess master')).toBe(
      'Lesson 16.1 • Section 3: The Brain-Training Myth & Domain-Specific Expert Cognition'
    );
  });

  it('should return TUTOR_SYSTEM_INSTRUCTION_LESSON_16_1 for specificity-of-transfer', () => {
    const instruction = getTutorSystemInstruction('specificity-of-transfer');
    expect(instruction).toContain('Lesson 16.1: "The Specificity of Transfer Problem');
    expect(instruction).toContain('Thorndike');
    expect(instruction).toContain('Barnett');
    expect(instruction).toContain('Owen');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE', () => {
    expect(ALL_LESSONS['specificity-of-transfer']).toBeDefined();
    const ch16 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-16-transfer');
    expect(ch16).toBeDefined();
    const lesson = ch16?.lessons.find(l => l.id === 'specificity-of-transfer');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
