import { describe, it, expect } from 'vitest';
import { LESSON_YERKES_DODSON_CORTISOL } from '../data/lesson21_1Data.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';
import { PRIMARY_COURSE, ALL_LESSONS } from '../data/courseData.ts';

describe('Lesson 21.1: The Yerkes-Dodson Law & Cortisol Dynamics Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_YERKES_DODSON_CORTISOL.id).toBe('yerkes-dodson-cortisol');
    expect(LESSON_YERKES_DODSON_CORTISOL.chapterId).toBe('ch-21-stress-performance');
    expect(LESSON_YERKES_DODSON_CORTISOL.number).toBe('21.1');
    expect(LESSON_YERKES_DODSON_CORTISOL.title).toBe('The Yerkes-Dodson Law & Cortisol Dynamics');
    expect(LESSON_YERKES_DODSON_CORTISOL.subtitle).toContain('How acute stress narrows attention while chronic stress impairs LTP');
    expect(LESSON_YERKES_DODSON_CORTISOL.readingTimeMinutes).toBeGreaterThanOrEqual(14);
    expect(LESSON_YERKES_DODSON_CORTISOL.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_YERKES_DODSON_CORTISOL;
    expect(curiosityQuestion.headline).toContain('mind to go completely blank');
    expect(curiosityQuestion.hookNote).toContain('Robert M. Yerkes');
    expect(curiosityQuestion.hookNote).toContain('John D. Dodson');
    expect(curiosityQuestion.hookNote).toContain('Colin Easterbrook');
    expect(curiosityQuestion.hookNote).toContain('Amy F.T. Arnsten');
    expect(curiosityQuestion.hookNote).toContain('Bruce S. McEwen');
    expect(curiosityQuestion.hookNote).toContain('Sonia J. Lupien');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_YERKES_DODSON_CORTISOL;
    expect(prediction.options).toHaveLength(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-condition-c-calibrated-arousal');
    expect(prediction.outcome.explanation).toContain('Yerkes');
    expect(prediction.outcome.explanation).toContain('Arnsten');
    expect(prediction.outcome.explanation).toContain('potassium');
    expect(prediction.outcome.comparisons.length).toBeGreaterThanOrEqual(2);
    expect(prediction.outcome.comparisons.some(c => c.isEmpiricalWinner)).toBe(true);
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_YERKES_DODSON_CORTISOL;
    expect(coreExplanations).toHaveLength(3);

    // Module 1: Yerkes-Dodson Law & Easterbrook
    expect(coreExplanations[0].id).toBe('yerkes-dodson-inverted-u');
    expect(coreExplanations[0].title).toContain('Robert Yerkes & John Dodson');
    expect(coreExplanations[0].scientificStatus).toBe('empirical-consensus');
    expect(coreExplanations[0].mechanisms.length).toBeGreaterThanOrEqual(3);
    expect(coreExplanations[0].keyInsight).toContain('Arousal is an amplifier');
    expect(coreExplanations[0].simplifiedModelCaveat).toBeDefined();

    // Module 2: Amy Arnsten Prefrontal Disconnection
    expect(coreExplanations[1].id).toBe('arnsten-pfc-catecholamine-disconnection');
    expect(coreExplanations[1].title).toContain('Amy Arnsten');
    expect(coreExplanations[1].scientificStatus).toBe('neurobiological-mechanism');
    expect(coreExplanations[1].mechanisms.some(m => m.label.includes('Optimal Alertness'))).toBe(true);
    expect(coreExplanations[1].mechanisms.some(m => m.label.includes('Potassium Channel Opening'))).toBe(true);

    // Module 3: Bruce McEwen & Sonia Lupien
    expect(coreExplanations[2].id).toBe('mcewen-lupien-cortisol-dynamics');
    expect(coreExplanations[2].title).toContain('Bruce McEwen & Sonia Lupien');
    expect(coreExplanations[2].scientificStatus).toBe('neurobiological-mechanism');
    expect(coreExplanations[2].mechanisms.some(m => m.label.includes('High-Affinity MRs'))).toBe(true);
    expect(coreExplanations[2].mechanisms.some(m => m.label.includes('Low-Affinity GRs'))).toBe(true);
  });

  it('should define a 6-stage diagram illustrating the Yerkes-Dodson & prefrontal funnel', () => {
    const { diagram } = LESSON_YERKES_DODSON_CORTISOL;
    expect(diagram.title).toContain('Yerkes-Dodson Arousal & Prefrontal Neurochemistry Funnel');
    expect(diagram.stages).toHaveLength(6);
    expect(diagram.stages[0].name).toContain('Hypo-Arousal');
    expect(diagram.stages[1].name).toContain('Optimal Calibrated Arousal');
    expect(diagram.stages[2].name).toContain('Sympathetic Threat Detection');
    expect(diagram.stages[3].name).toContain('Potassium Leak');
    expect(diagram.stages[4].name).toContain('Prefrontal Disconnection');
    expect(diagram.stages[5].name).toContain('GR Saturation');
    expect(diagram.feedbackLoopDescription).toBeDefined();
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_YERKES_DODSON_CORTISOL;
    expect(exercise.categories).toHaveLength(4);
    expect(exercise.scenarios).toHaveLength(4);

    const s1 = exercise.scenarios[0];
    expect(s1.realWorldContext).toContain('Production Incident Response');
    expect(s1.mechanismExplanation).toContain('Arnsten');

    const s2 = exercise.scenarios[1];
    expect(s2.realWorldContext).toContain('High-Stakes Standardized Testing');
    expect(s2.mechanismExplanation).toContain('Beilock');

    const s3 = exercise.scenarios[2];
    expect(s3.realWorldContext).toContain('Stimulant Overuse');
    expect(s3.mechanismExplanation).toContain('Yerkes & Dodson');

    const s4 = exercise.scenarios[3];
    expect(s4.realWorldContext).toContain('Aviation Emergency Response');
    expect(s4.mechanismExplanation).toContain('Calibrated Autonomic Modulation');
  });

  it('should define 4 rigorous formative quiz questions with literature citations', () => {
    const { quiz } = LESSON_YERKES_DODSON_CORTISOL;
    expect(quiz.questions).toHaveLength(4);
    expect(quiz.questions[0].explanation).toContain('Yerkes');
    expect(quiz.questions[0].explanation).toContain('Easterbrook');
    expect(quiz.questions[1].explanation).toContain('Arnsten');
    expect(quiz.questions[2].explanation).toContain('McEwen');
    expect(quiz.questions[3].explanation).toContain('Physiological Sigh');
  });

  it('should define a 3-step practical protocol translating cognitive science into action', () => {
    const { practicalTask } = LESSON_YERKES_DODSON_CORTISOL;
    expect(practicalTask.title).toContain('3-Step Autonomic Calibration & Cognitive Shielding Protocol');
    expect(practicalTask.steps).toHaveLength(3);
    expect(practicalTask.steps[0].title).toContain('Map Task Complexity');
    expect(practicalTask.steps[1].title).toContain('Physiological Sigh Reset');
    expect(practicalTask.steps[2].title).toContain('Working Memory Offloading');
  });

  it('should register all Lesson 21.1 concepts in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const lesson21_1Concepts = [
      'concept:yerkes_dodson_inverted_u_law',
      'concept:arnsten_pfc_catecholamine_detachment',
      'concept:glucocorticoid_hippocampal_ltp_disruption',
    ] as const;

    for (const c of lesson21_1Concepts) {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c]).toBeDefined();
      expect(CONCEPT_REGISTRY[c].conceptId).toBe(c);
      expect(CONCEPT_REGISTRY[c].keyCriteria.length).toBeGreaterThanOrEqual(4);
      expect(CONCEPT_REGISTRY[c].canonicalAnswer).toBeDefined();
      expect(CONCEPT_REGISTRY[c].lessonSectionAnchor).toContain('Lesson 21.1');
    }
  });

  it('should register all Lesson 21.1 misconceptions in KNOWN_MISCONCEPTIONS', () => {
    const lesson21_1Misconceptions = [
      'misconception:stress_is_always_catastrophic_for_learning',
      'misconception:willpower_can_override_pfc_catecholamine_collapse',
      'misconception:high_stakes_blanking_means_knowledge_was_never_learned',
    ] as const;

    for (const m of lesson21_1Misconceptions) {
      expect(KNOWN_MISCONCEPTIONS).toContain(m);
    }
  });

  it('should provide accurate offline tutor knowledge base answers for Lesson 21.1 queries', () => {
    const ans1 = findTutorAnswer('How does the yerkes-dodson inverted-u curve relate to task difficulty arousal sweet spot?');
    expect(ans1.referencedSection).toContain('Lesson 21.1');
    expect(ans1.detailedResponse).toContain('Yerkes');

    const ans2 = findTutorAnswer('How does Amy Arnsten explain prefrontal microcircuit catecholamine storm potassium channels open?');
    expect(ans2.referencedSection).toContain('Lesson 21.1');
    expect(ans2.detailedResponse).toContain('Arnsten');

    const ans3 = findTutorAnswer('What did Bruce McEwen and Sonia Lupien find regarding mineralocorticoid receptor vs glucocorticoid receptor mr vs gr cortisol hippocampal ltp?');
    expect(ans3.referencedSection).toContain('Lesson 21.1');
    expect(ans3.detailedResponse).toContain('McEwen');
  });

  it('should resolve grounding anchors correctly for Lesson 21.1 topics', () => {
    expect(resolveValidSection('yerkes and dodson inverted-u arousal performance curve')).toBe(
      'Lesson 21.1 • Section 1: Robert Yerkes & John Dodson (1908): The Inverted-U Law'
    );
    expect(resolveValidSection('amy arnsten prefrontal microcircuit catecholamine storm potassium channel')).toBe(
      'Lesson 21.1 • Section 2: Amy Arnsten: Prefrontal Microcircuit Disconnection Under Stress'
    );
    expect(resolveValidSection('bruce mcewen sonia lupien mineralocorticoid receptor glucocorticoid receptor mr vs gr')).toBe(
      'Lesson 21.1 • Section 3: Bruce McEwen & Sonia Lupien: Cortisol Dynamics & Hippocampal Plasticity'
    );
  });

  it('should return TUTOR_SYSTEM_INSTRUCTION_LESSON_21_1 for yerkes-dodson-cortisol', () => {
    const prompt = getTutorSystemInstruction('yerkes-dodson-cortisol');
    expect(prompt).toContain('Lesson 21.1');
    expect(prompt).toContain('Yerkes-Dodson');
    expect(prompt).toContain('Amy Arnsten');
    expect(prompt).toContain('Bruce McEwen');
    expect(prompt).toContain('Physiological sigh');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE with isAvailable true', () => {
    expect(ALL_LESSONS['yerkes-dodson-cortisol']).toBeDefined();
    expect(ALL_LESSONS['yerkes-dodson-cortisol'].title).toBe('The Yerkes-Dodson Law & Cortisol Dynamics');

    const ch21 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-21-stress-performance');
    expect(ch21).toBeDefined();
    const l21_1 = ch21?.lessons.find(l => l.id === 'yerkes-dodson-cortisol');
    expect(l21_1).toBeDefined();
    expect(l21_1?.isAvailable).toBe(true);
  });
});
