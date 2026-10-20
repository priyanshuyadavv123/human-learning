import { describe, it, expect } from 'vitest';
import { LESSON_PAIVIO_DUAL_CODING } from '../data/lesson10_1Data.ts';
import { ALL_LESSONS, PRIMARY_COURSE } from '../data/courseData.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';

describe('Lesson 10.1: Paivio Dual Coding Theory Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_PAIVIO_DUAL_CODING.id).toBe('paivio-dual-coding');
    expect(LESSON_PAIVIO_DUAL_CODING.chapterId).toBe('ch-10-dual-coding');
    expect(LESSON_PAIVIO_DUAL_CODING.number).toBe('10.1');
    expect(LESSON_PAIVIO_DUAL_CODING.title).toBe("Paivio's Dual Coding Theory");
    expect(LESSON_PAIVIO_DUAL_CODING.readingTimeMinutes).toBeGreaterThanOrEqual(14);
    expect(LESSON_PAIVIO_DUAL_CODING.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_PAIVIO_DUAL_CODING;
    expect(curiosityQuestion.headline).toContain('schematic diagram with text');
    expect(curiosityQuestion.teaser).toContain('logogens');
    expect(curiosityQuestion.teaser).toContain('imagens');
    expect(curiosityQuestion.hookNote).toContain('Allan Paivio');
    expect(curiosityQuestion.hookNote).toContain('Richard E. Mayer');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_PAIVIO_DUAL_CODING;
    expect(prediction.options.length).toBe(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-dual-coding-additive-traces');
    expect(prediction.outcome.headline).toContain('Paivio, 1971');
    expect(prediction.outcome.explanation).toContain('referential connections');
    expect(prediction.outcome.optionFeedback['opt-text-density-superiority']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-dual-coding-additive-traces']).toBeDefined();
    expect(prediction.outcome.optionFeedback['opt-visual-distraction-drag']).toBeDefined();
    expect(prediction.outcome.comparisons.length).toBe(3);
    expect(prediction.outcome.evidenceDistinction).toBeTruthy();
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_PAIVIO_DUAL_CODING;
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

  it('should provide a 4-stage interactive dual-coding architecture diagram', () => {
    const { diagram } = LESSON_PAIVIO_DUAL_CODING;
    expect(diagram.stages.length).toBe(4);
    expect(diagram.stages[0].id).toBe('stage-dual-sensory-intake');
    expect(diagram.stages[1].id).toBe('stage-working-memory-channel-separation');
    expect(diagram.stages[2].id).toBe('stage-referential-cross-linkage');
    expect(diagram.stages[3].id).toBe('stage-unified-multimodal-schema');
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_PAIVIO_DUAL_CODING;
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
    const { quiz } = LESSON_PAIVIO_DUAL_CODING;
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
    const { practicalTask } = LESSON_PAIVIO_DUAL_CODING;
    expect(practicalTask.steps.length).toBe(3);
    expect(practicalTask.steps[0].title).toContain('Spatial Topology');
    expect(practicalTask.steps[1].title).toContain('Spatially Contiguous');
    expect(practicalTask.steps[2].title).toContain('Concreteness Fading');
  });

  it('should register all Lesson 10.1 concepts in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:paivio_dual_coding_logogens_imagens',
      'concept:mayer_multimedia_spatial_contiguity_modality',
      'concept:concreteness_fading_grounding_schematics',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const entry = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(entry.keyCriteria.length).toBeGreaterThanOrEqual(3);
      expect(entry.canonicalAnswer.length).toBeGreaterThan(50);
      expect(entry.lessonSectionAnchor).toContain('Lesson 10.1');
    });
  });

  it('should register all Lesson 10.1 misconceptions in KNOWN_MISCONCEPTIONS', () => {
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:learning_styles_neuromyth_visual_verbal');
    expect(KNOWN_MISCONCEPTIONS).toContain('misconception:decorative_graphics_enhance_learning');
  });

  it('should provide accurate offline tutor knowledge base answers for Lesson 10.1 queries', () => {
    const q1 = findTutorAnswer('How does Allan Paivio Dual Coding Theory define logogens and imagens?');
    expect(q1.referencedSection).toContain('Lesson 10.1');
    expect(q1.detailedResponse).toContain('Paivio');

    const q2 = findTutorAnswer('What are Mayer spatial contiguity and modality principles in CTML?');
    expect(q2.referencedSection).toContain('Lesson 10.1');
    expect(q2.detailedResponse).toContain('Mayer');

    const q3 = findTutorAnswer('How does Goldstone concreteness fading bridge physical grounding and symbolic formalization?');
    expect(q3.referencedSection).toContain('Lesson 10.1');
    expect(q3.detailedResponse).toContain('Goldstone');
  });

  it('should resolve grounding anchors correctly for Lesson 10.1 topics', () => {
    expect(resolveValidSection('allan paivio dual coding logogen imagen')).toBe(
      'Lesson 10.1 • Section 1: Allan Paivio: Dual Coding Theory (Logogens vs Imagens)'
    );
    expect(resolveValidSection('richard mayer spatial contiguity modality principle ctml')).toBe(
      'Lesson 10.1 • Section 2: Richard Mayer: The Cognitive Theory of Multimedia Learning (CTML)'
    );
    expect(resolveValidSection('goldstone son concreteness fading schematization')).toBe(
      'Lesson 10.1 • Section 3: Goldstone & Son: Concreteness Fading & Perceptual Grounding'
    );
  });

  it('should return TUTOR_SYSTEM_INSTRUCTION_LESSON_10_1 for paivio-dual-coding', () => {
    const instruction = getTutorSystemInstruction('paivio-dual-coding');
    expect(instruction).toContain('Lesson 10.1: "Paivio\'s Dual Coding Theory');
    expect(instruction).toContain('Allan Paivio');
    expect(instruction).toContain('Richard E. Mayer');
    expect(instruction).toContain('Robert Goldstone');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE', () => {
    expect(ALL_LESSONS['paivio-dual-coding']).toBeDefined();
    const ch10 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-10-dual-coding');
    expect(ch10).toBeDefined();
    const lesson = ch10?.lessons.find(l => l.id === 'paivio-dual-coding');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
