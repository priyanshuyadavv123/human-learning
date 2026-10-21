import { describe, it, expect } from 'vitest';
import { LESSON_DIGITAL_TOOLING_WITHOUT_HOARDING } from '../data/lesson24_2Data.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';
import { PRIMARY_COURSE, ALL_LESSONS } from '../data/courseData.ts';

describe('Lesson 24.2: Digital Tooling without Passive Hoarding Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_DIGITAL_TOOLING_WITHOUT_HOARDING.id).toBe('digital-tooling-without-hoarding');
    expect(LESSON_DIGITAL_TOOLING_WITHOUT_HOARDING.chapterId).toBe('ch-24-external-scaffolding');
    expect(LESSON_DIGITAL_TOOLING_WITHOUT_HOARDING.number).toBe('24.2');
    expect(LESSON_DIGITAL_TOOLING_WITHOUT_HOARDING.title).toBe('Digital Tooling without Passive Hoarding');
    expect(LESSON_DIGITAL_TOOLING_WITHOUT_HOARDING.subtitle).toContain('Designing external systems that force synthesis rather than storage');
    expect(LESSON_DIGITAL_TOOLING_WITHOUT_HOARDING.readingTimeMinutes).toBeGreaterThanOrEqual(15);
    expect(LESSON_DIGITAL_TOOLING_WITHOUT_HOARDING.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_DIGITAL_TOOLING_WITHOUT_HOARDING;
    expect(curiosityQuestion.headline).toContain('all-in-one');
    expect(curiosityQuestion.hookNote).toContain('Evan Risko');
    expect(curiosityQuestion.hookNote).toContain('Sam Gilbert');
    expect(curiosityQuestion.hookNote).toContain('Douglas Engelbart');
    expect(curiosityQuestion.hookNote).toContain('H-LAM/T');
    expect(curiosityQuestion.hookNote).toContain('Vannevar Bush');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_DIGITAL_TOOLING_WITHOUT_HOARDING;
    expect(prediction.options).toHaveLength(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-condition-c-synthesis-first');
    expect(prediction.outcome.explanation).toContain('Risko');
    expect(prediction.outcome.explanation).toContain('Gilbert');
    expect(prediction.outcome.explanation).toContain('Engelbart');
    expect(prediction.outcome.explanation).toContain('Write-Only Archive');
    expect(prediction.outcome.comparisons.length).toBeGreaterThanOrEqual(3);
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_DIGITAL_TOOLING_WITHOUT_HOARDING;
    expect(coreExplanations).toHaveLength(3);

    // Module 1: Risko & Gilbert Cognitive Offloading
    expect(coreExplanations[0].id).toBe('risko-gilbert-cognitive-offloading-metacognition');
    expect(coreExplanations[0].title).toContain('Evan Risko & Sam Gilbert');
    expect(coreExplanations[0].scientificStatus).toBe('cognitive-model');
    expect(coreExplanations[0].mechanisms.length).toBeGreaterThanOrEqual(3);
    expect(coreExplanations[0].keyInsight).toContain('Offload static memory');

    // Module 2: Engelbart & Bush Augmenting Human Intellect
    expect(coreExplanations[1].id).toBe('engelbart-bush-intellect-augmentation-h-lam_t');
    expect(coreExplanations[1].title).toContain('Douglas Engelbart & Vannevar Bush');
    expect(coreExplanations[1].scientificStatus).toBe('empirical-consensus');
    expect(coreExplanations[1].mechanisms.length).toBeGreaterThanOrEqual(3);
    expect(coreExplanations[1].keyInsight).toContain('exoskeletons');

    // Module 3: Synthesis over Storage
    expect(coreExplanations[2].id).toBe('synthesis-over-storage-friction-forcing-functions');
    expect(coreExplanations[2].title).toContain('Designing for Synthesis over Storage');
    expect(coreExplanations[2].scientificStatus).toBe('empirical-consensus');
    expect(coreExplanations[2].mechanisms.length).toBeGreaterThanOrEqual(3);
    expect(coreExplanations[2].keyInsight).toContain('ingest friction');
  });

  it('should provide an interactive diagram modeling the 5-stage digital augmentation funnel', () => {
    const { diagram } = LESSON_DIGITAL_TOOLING_WITHOUT_HOARDING;
    expect(diagram.title).toBe('The Digital Augmentation & Synthesis Forcing Funnel');
    expect(diagram.stages).toHaveLength(5);
    expect(diagram.stages[0].name).toContain('Ingest Friction Gate');
    expect(diagram.stages[1].name).toContain('Structural Offloading');
    expect(diagram.stages[2].name).toContain('Retrieval-Embedded Prompt Injection');
    expect(diagram.stages[3].name).toContain('Spaced Synthesis');
    expect(diagram.stages[4].name).toContain('Augmented Intellectual Throughput');
    expect(diagram.feedbackLoopDescription).toContain('synthesis sprint');
  });

  it('should deliver an interactive sorting exercise with 4 scenarios', () => {
    const { exercise } = LESSON_DIGITAL_TOOLING_WITHOUT_HOARDING;
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
    const { quiz } = LESSON_DIGITAL_TOOLING_WITHOUT_HOARDING;
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

  it('should present a 3-step practical task for synthesis-first tooling', () => {
    const { practicalTask } = LESSON_DIGITAL_TOOLING_WITHOUT_HOARDING;
    expect(practicalTask.steps).toHaveLength(3);
    expect(practicalTask.steps[0].title).toContain('Audit Your Ingest Stack');
    expect(practicalTask.steps[1].title).toContain('Ingest Friction Gate');
    expect(practicalTask.steps[2].title).toContain('Retrieval-Embedded');
  });

  it('should have all concepts registered in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:risko_gilbert_cognitive_offloading_metacognition',
      'concept:engelbart_bush_intellect_augmentation_h_lam_t',
      'concept:synthesis_over_storage_friction_forcing_functions',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const prompt = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(prompt.keyCriteria.length).toBeGreaterThanOrEqual(4);
      expect(prompt.canonicalAnswer.length).toBeGreaterThan(100);
      expect(prompt.lessonSectionAnchor).toContain('Lesson 24.2');
    });
  });

  it('should have all misconceptions registered in KNOWN_MISCONCEPTIONS', () => {
    const expectedMisconceptions = [
      'misconception:all_cognitive_offloading_is_beneficial',
      'misconception:zero_friction_capture_maximizes_learning',
    ];

    expectedMisconceptions.forEach(m => {
      expect(KNOWN_MISCONCEPTIONS).toContain(m);
    });
  });

  it('should retrieve accurate tutor knowledge entries for Lesson 24.2 queries', () => {
    const answer1 = findTutorAnswer('what did evan risko and sam gilbert find about cognitive offloading and digital amnesia');
    expect(answer1.title).toContain('Evan Risko');
    expect(answer1.detailedResponse).toContain('Cognitive Offloading');

    const answer2 = findTutorAnswer('explain douglas engelbart and vannevar bush augmenting human intellect and h-lam/t');
    expect(answer2.title).toContain('Douglas Engelbart');
    expect(answer2.detailedResponse).toContain('H-LAM/T');

    const answer3 = findTutorAnswer('how do friction forcing functions and retrieval-embedded notes stop write-only archives');
    expect(answer3.title).toContain('Synthesis over Storage');
    expect(answer3.detailedResponse).toContain('Write-Only Archives');
  });

  it('should resolve grounding anchors for Lesson 24.2 correctly', () => {
    expect(resolveValidSection('explain evan risko and sam gilbert cognitive offloading and metacognitive calibration')).toBe(
      'Lesson 24.2 • Section 1: Evan Risko & Sam Gilbert (2016): Cognitive Offloading & Metacognitive Calibration'
    );
    expect(resolveValidSection('tell me about douglas engelbart and vannevar bush augmenting human intellect and memex')).toBe(
      'Lesson 24.2 • Section 2: Douglas Engelbart & Vannevar Bush: Augmenting Human Intellect (H-LAM/T)'
    );
    expect(resolveValidSection('what is designing for synthesis over storage with write-only archive and friction forcing functions')).toBe(
      'Lesson 24.2 • Section 3: Designing for Synthesis over Storage: Friction & Forcing Functions'
    );
  });

  it('should return specialized tutor system instruction for digital-tooling-without-hoarding', () => {
    const instruction = getTutorSystemInstruction('digital-tooling-without-hoarding');
    expect(instruction).toContain('Risko');
    expect(instruction).toContain('Gilbert');
    expect(instruction).toContain('Engelbart');
    expect(instruction).toContain('Synthesis over Storage');
  });

  it('should be properly wired in courseData registry', () => {
    expect(ALL_LESSONS['digital-tooling-without-hoarding']).toBeDefined();
    const ch24 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-24-external-scaffolding');
    expect(ch24).toBeDefined();
    const lesson = ch24?.lessons.find(l => l.id === 'digital-tooling-without-hoarding');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
