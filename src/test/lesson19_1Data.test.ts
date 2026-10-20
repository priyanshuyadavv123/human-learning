import { describe, it, expect } from 'vitest';
import { LESSON_INCUBATION_DEFAULT_MODE } from '../data/lesson19_1Data.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';
import { PRIMARY_COURSE, ALL_LESSONS } from '../data/courseData.ts';

describe('Lesson 19.1: Incubation & Unconscious Associative Search Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_INCUBATION_DEFAULT_MODE.id).toBe('incubation-default-mode');
    expect(LESSON_INCUBATION_DEFAULT_MODE.chapterId).toBe('ch-19-creative-insight');
    expect(LESSON_INCUBATION_DEFAULT_MODE.number).toBe('19.1');
    expect(LESSON_INCUBATION_DEFAULT_MODE.title).toBe('Incubation & Unconscious Associative Search');
    expect(LESSON_INCUBATION_DEFAULT_MODE.subtitle).toContain('Default mode network');
    expect(LESSON_INCUBATION_DEFAULT_MODE.readingTimeMinutes).toBeGreaterThanOrEqual(14);
    expect(LESSON_INCUBATION_DEFAULT_MODE.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_INCUBATION_DEFAULT_MODE;
    expect(curiosityQuestion.headline).toContain('shower');
    expect(curiosityQuestion.hookNote).toContain('Henri Poincaré');
    expect(curiosityQuestion.hookNote).toContain('Sio and Ormerod');
    expect(curiosityQuestion.hookNote).toContain('Marcus Raichle');
    expect(curiosityQuestion.hookNote).toContain('Baird & Smallwood');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_INCUBATION_DEFAULT_MODE;
    expect(prediction.options).toHaveLength(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-condition-c-undemanding-low-load');
    expect(prediction.outcome.explanation).toContain('Baird');
    expect(prediction.outcome.explanation).toContain('fixation forgetting');
    expect(prediction.outcome.explanation).toContain('Default Mode Network');
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_INCUBATION_DEFAULT_MODE;
    expect(coreExplanations).toHaveLength(3);

    // Module 1: DMN vs CEN
    expect(coreExplanations[0].id).toBe('dmn-vs-executive-control');
    expect(coreExplanations[0].title).toContain('DMN vs Executive Control');
    expect(coreExplanations[0].mechanisms.length).toBeGreaterThanOrEqual(3);
    expect(coreExplanations[0].keyInsight).toContain('Default Mode Network');
    expect(coreExplanations[0].simplifiedModelCaveat).toBeDefined();

    // Module 2: Spreading Activation & Sub-threshold search
    expect(coreExplanations[1].id).toBe('spreading-activation-subthreshold');
    expect(coreExplanations[1].title).toContain('Spreading Activation');
    expect(coreExplanations[1].mechanisms.some(m => m.label.includes('Collins & Loftus'))).toBe(true);
    expect(coreExplanations[1].mechanisms.some(m => m.label.includes('rSTG Gamma-Band'))).toBe(true);

    // Module 3: Fixation Forgetting & Baird Protocol
    expect(coreExplanations[2].id).toBe('fixation-forgetting-baird-protocol');
    expect(coreExplanations[2].title).toContain('Fixation Forgetting');
    expect(coreExplanations[2].mechanisms.some(m => m.label.includes('Fixation Forgetting'))).toBe(true);
    expect(coreExplanations[2].mechanisms.some(m => m.label.includes('Cognitive Load Sweet Spot'))).toBe(true);
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_INCUBATION_DEFAULT_MODE;
    expect(exercise.categories.length).toBe(4);
    expect(exercise.scenarios).toHaveLength(4);

    const s1 = exercise.scenarios[0];
    expect(s1.realWorldContext).toContain('Distributed Database');
    expect(s1.mechanismExplanation).toContain('Cognitive Fixation');

    const s2 = exercise.scenarios[1];
    expect(s2.realWorldContext).toContain('Fintech');
    expect(s2.mechanismExplanation).toContain('High-Load Break Interruption');

    const s3 = exercise.scenarios[2];
    expect(s3.realWorldContext).toContain('Behavioral Economics');
    expect(s3.mechanismExplanation).toContain('Premature Incubation');

    const s4 = exercise.scenarios[3];
    expect(s4.realWorldContext).toContain('Database Index');
    expect(s4.mechanismExplanation).toContain('Unrecorded Ephemeral Insight');
  });

  it('should define 4 rigorous formative quiz questions with literature citations', () => {
    const { quiz } = LESSON_INCUBATION_DEFAULT_MODE;
    expect(quiz.questions).toHaveLength(4);
    expect(quiz.questions[0].explanation).toContain('Raichle');
    expect(quiz.questions[1].explanation).toContain('Baird et al. (2012)');
    expect(quiz.questions[2].explanation).toContain('Collins & Loftus');
    expect(quiz.questions[3].explanation).toContain('Bowden and Jung-Beeman');
  });

  it('should define a practical protocol translating cognitive science into action', () => {
    const { practicalTask } = LESSON_INCUBATION_DEFAULT_MODE;
    expect(practicalTask.title).toContain('3-Phase Strategic Incubation');
    expect(practicalTask.steps.length).toBe(3);
    expect(practicalTask.steps[0].title).toContain('Impasse Verification');
    expect(practicalTask.steps[1].title).toContain('Strategic Disengagement');
    expect(practicalTask.steps[2].title).toContain('Frictionless Capture');
  });

  it('should register all Lesson 19.1 concepts in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const lesson19_1Concepts = [
      'concept:default_mode_network_incubation',
      'concept:unconscious_associative_search_spreading_activation',
      'concept:cognitive_fixation_release_baird_smallwood',
    ] as const;

    for (const c of lesson19_1Concepts) {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c]).toBeDefined();
      expect(CONCEPT_REGISTRY[c].conceptId).toBe(c);
      expect(CONCEPT_REGISTRY[c].keyCriteria.length).toBeGreaterThanOrEqual(4);
      expect(CONCEPT_REGISTRY[c].canonicalAnswer).toBeDefined();
      expect(CONCEPT_REGISTRY[c].lessonSectionAnchor).toContain('Lesson 19.1');
    }
  });

  it('should register all Lesson 19.1 misconceptions in KNOWN_MISCONCEPTIONS', () => {
    const lesson19_1Misconceptions = [
      'misconception:unbroken_hyper_focused_grinding_maximizes_breakthrough_insights',
      'misconception:incubation_and_mind_wandering_are_passive_wasted_time',
    ] as const;

    for (const m of lesson19_1Misconceptions) {
      expect(KNOWN_MISCONCEPTIONS).toContain(m);
    }
  });

  it('should provide accurate offline tutor knowledge base answers for Lesson 19.1 queries', () => {
    const ans1 = findTutorAnswer('How does the default mode network DMN activate during incubation?');
    expect(ans1.referencedSection).toContain('Lesson 19.1');
    expect(ans1.detailedResponse).toContain('Raichle');

    const ans2 = findTutorAnswer('What is spreading activation and the rSTG gamma-band aha moment?');
    expect(ans2.referencedSection).toContain('Lesson 19.1');
    expect(ans2.detailedResponse).toContain('Collins & Loftus');

    const ans3 = findTutorAnswer('Why do Baird and Smallwood recommend an undemanding low-load activity for incubation?');
    expect(ans3.referencedSection).toContain('Lesson 19.1');
    expect(ans3.detailedResponse).toContain('Baird et al. (2012)');
  });

  it('should resolve grounding anchors correctly for Lesson 19.1 topics', () => {
    expect(resolveValidSection('raichle default mode network dmn executive control incubation')).toBe(
      'Lesson 19.1 • Section 1: The Neurobiology of Incubation: DMN vs Executive Control'
    );
    expect(resolveValidSection('collins and loftus spreading activation unconscious search rstg gamma-band insight')).toBe(
      'Lesson 19.1 • Section 2: Spreading Activation & Unconscious Sub-Threshold Search'
    );
    expect(resolveValidSection('baird smallwood fixation forgetting undemanding low-load incubation protocol')).toBe(
      'Lesson 19.1 • Section 3: Fixation Forgetting & The Strategic Incubation Protocol'
    );
  });

  it('should return TUTOR_SYSTEM_INSTRUCTION_LESSON_19_1 for incubation-default-mode', () => {
    const prompt = getTutorSystemInstruction('incubation-default-mode');
    expect(prompt).toContain('Lesson 19.1');
    expect(prompt).toContain('Default Mode Network');
    expect(prompt).toContain('Collins & Loftus');
    expect(prompt).toContain('Baird et al. (2012)');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE', () => {
    expect(ALL_LESSONS['incubation-default-mode']).toBeDefined();
    expect(ALL_LESSONS['incubation-default-mode'].id).toBe('incubation-default-mode');

    const ch19 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-19-creative-insight');
    expect(ch19).toBeDefined();
    const l191 = ch19?.lessons.find(l => l.id === 'incubation-default-mode');
    expect(l191).toBeDefined();
    expect(l191?.isAvailable).toBe(true);
  });
});
