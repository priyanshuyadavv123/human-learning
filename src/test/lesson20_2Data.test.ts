import { describe, it, expect } from 'vitest';
import { LESSON_SELF_DETERMINATION_THEORY } from '../data/lesson20_2Data.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';
import { PRIMARY_COURSE, ALL_LESSONS } from '../data/courseData.ts';

describe('Lesson 20.2: Self-Determination in Autonomous Mastery Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_SELF_DETERMINATION_THEORY.id).toBe('self-determination-theory');
    expect(LESSON_SELF_DETERMINATION_THEORY.chapterId).toBe('ch-20-motivation-drive');
    expect(LESSON_SELF_DETERMINATION_THEORY.number).toBe('20.2');
    expect(LESSON_SELF_DETERMINATION_THEORY.title).toBe('Self-Determination in Autonomous Mastery');
    expect(LESSON_SELF_DETERMINATION_THEORY.subtitle).toContain('Autonomy, competence, and relatedness');
    expect(LESSON_SELF_DETERMINATION_THEORY.readingTimeMinutes).toBeGreaterThanOrEqual(14);
    expect(LESSON_SELF_DETERMINATION_THEORY.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_SELF_DETERMINATION_THEORY;
    expect(curiosityQuestion.headline).toContain('cash bonuses');
    expect(curiosityQuestion.hookNote).toContain('Edward L. Deci');
    expect(curiosityQuestion.hookNote).toContain('Mark Lepper');
    expect(curiosityQuestion.hookNote).toContain('Overjustification Effect');
    expect(curiosityQuestion.hookNote).toContain('Richard M. Ryan');
    expect(curiosityQuestion.hookNote).toContain('Kou Murayama');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_SELF_DETERMINATION_THEORY;
    expect(prediction.options).toHaveLength(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-condition-c-self-determined-agency');
    expect(prediction.outcome.explanation).toContain('Deci');
    expect(prediction.outcome.explanation).toContain('Ryan');
    expect(prediction.outcome.explanation).toContain('Murayama');
    expect(prediction.outcome.comparisons.length).toBeGreaterThanOrEqual(2);
    expect(prediction.outcome.comparisons.some(c => c.isEmpiricalWinner)).toBe(true);
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_SELF_DETERMINATION_THEORY;
    expect(coreExplanations).toHaveLength(3);

    // Module 1: SDT Triad
    expect(coreExplanations[0].id).toBe('deci-ryan-sdt-triad');
    expect(coreExplanations[0].title).toContain('Edward Deci & Richard Ryan');
    expect(coreExplanations[0].scientificStatus).toBe('empirical-consensus');
    expect(coreExplanations[0].mechanisms.length).toBeGreaterThanOrEqual(3);
    expect(coreExplanations[0].keyInsight).toContain('agency, mastery, and belonging');
    expect(coreExplanations[0].simplifiedModelCaveat).toBeDefined();

    // Module 2: Organismic Integration
    expect(coreExplanations[1].id).toBe('organismic-integration-continuum');
    expect(coreExplanations[1].title).toContain('Organismic Integration Theory');
    expect(coreExplanations[1].scientificStatus).toBe('cognitive-model');
    expect(coreExplanations[1].mechanisms.some(m => m.label.includes('Four Extrinsic Regulatory Styles'))).toBe(true);
    expect(coreExplanations[1].mechanisms.some(m => m.label.includes('Toxicity of Introjection'))).toBe(true);

    // Module 3: Overjustification & Undermining
    expect(coreExplanations[2].id).toBe('lepper-overjustification-undermining');
    expect(coreExplanations[2].title).toContain('Lepper, Greene & Murayama');
    expect(coreExplanations[2].scientificStatus).toBe('empirical-consensus');
    expect(coreExplanations[2].mechanisms.some(m => m.label.includes('Perceived Locus of Causality Shift'))).toBe(true);
    expect(coreExplanations[2].mechanisms.some(m => m.label.includes('Murayama et al., 2010'))).toBe(true);
  });

  it('should define a 6-stage diagram illustrating the OIT motivation continuum', () => {
    const { diagram } = LESSON_SELF_DETERMINATION_THEORY;
    expect(diagram.title).toContain('Organismic Integration & Autonomous Motivation Continuum');
    expect(diagram.stages).toHaveLength(6);
    expect(diagram.stages[0].name).toContain('Amotivation');
    expect(diagram.stages[1].name).toContain('External Regulation');
    expect(diagram.stages[2].name).toContain('Introjected Regulation');
    expect(diagram.stages[3].name).toContain('Identified Regulation');
    expect(diagram.stages[4].name).toContain('Integrated Regulation');
    expect(diagram.stages[5].name).toContain('Intrinsic Motivation');
    expect(diagram.feedbackLoopDescription).toBeDefined();
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_SELF_DETERMINATION_THEORY;
    expect(exercise.categories).toHaveLength(4);
    expect(exercise.scenarios).toHaveLength(4);

    const s1 = exercise.scenarios[0];
    expect(s1.realWorldContext).toContain('Corporate Technical Upskilling');
    expect(s1.mechanismExplanation).toContain('Controlling Extrinsic Overjustification');

    const s2 = exercise.scenarios[1];
    expect(s2.realWorldContext).toContain('Academic Research');
    expect(s2.mechanismExplanation).toContain('Introjected Regulation');

    const s3 = exercise.scenarios[2];
    expect(s3.realWorldContext).toContain('Corporate Compliance Training');
    expect(s3.mechanismExplanation).toContain('Alienated Amotivation');

    const s4 = exercise.scenarios[3];
    expect(s4.realWorldContext).toContain('Open-Source Software Communities');
    expect(s4.mechanismExplanation).toContain('Integrated Autonomous Mastery');
  });

  it('should define 4 rigorous formative quiz questions with literature citations', () => {
    const { quiz } = LESSON_SELF_DETERMINATION_THEORY;
    expect(quiz.questions).toHaveLength(4);
    expect(quiz.questions[0].explanation).toContain('Deci');
    expect(quiz.questions[1].explanation).toContain('Lepper');
    expect(quiz.questions[2].explanation).toContain('Introjected Regulation');
    expect(quiz.questions[3].explanation).toContain('Murayama et al. (2010');
  });

  it('should define a 3-step practical protocol translating cognitive science into action', () => {
    const { practicalTask } = LESSON_SELF_DETERMINATION_THEORY;
    expect(practicalTask.title).toContain('3-Step Autonomous Mastery & Value-Integration Protocol');
    expect(practicalTask.steps).toHaveLength(3);
    expect(practicalTask.steps[0].title).toContain('Locus of Causality');
    expect(practicalTask.steps[1].title).toContain('Value Integration');
    expect(practicalTask.steps[2].title).toContain('Autonomy Architecture');
  });

  it('should register all Lesson 20.2 concepts in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const lesson20_2Concepts = [
      'concept:deci_ryan_self_determination_triad',
      'concept:organismic_integration_continuum',
      'concept:lepper_overjustification_undermining_effect',
    ] as const;

    for (const c of lesson20_2Concepts) {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c]).toBeDefined();
      expect(CONCEPT_REGISTRY[c].conceptId).toBe(c);
      expect(CONCEPT_REGISTRY[c].keyCriteria.length).toBeGreaterThanOrEqual(4);
      expect(CONCEPT_REGISTRY[c].canonicalAnswer).toBeDefined();
      expect(CONCEPT_REGISTRY[c].lessonSectionAnchor).toContain('Lesson 20.2');
    }
  });

  it('should register all Lesson 20.2 misconceptions in KNOWN_MISCONCEPTIONS', () => {
    const lesson20_2Misconceptions = [
      'misconception:extrinsic_incentives_always_boost_performance',
      'misconception:discipline_and_willpower_are_purely_innate_traits',
    ] as const;

    for (const m of lesson20_2Misconceptions) {
      expect(KNOWN_MISCONCEPTIONS).toContain(m);
    }
  });

  it('should provide accurate offline tutor knowledge base answers for Lesson 20.2 queries', () => {
    const ans1 = findTutorAnswer('How do Deci and Ryan define the self-determination theory sdt triad of autonomy competence relatedness?');
    expect(ans1.referencedSection).toContain('Lesson 20.2');
    expect(ans1.detailedResponse).toContain('Deci');

    const ans2 = findTutorAnswer('What is organismic integration theory oit and the difference between introjected and integrated regulation?');
    expect(ans2.referencedSection).toContain('Lesson 20.2');
    expect(ans2.detailedResponse).toContain('Organismic Integration Theory');

    const ans3 = findTutorAnswer('How does the overjustification effect and undermining effect work in Mark Lepper and Murayama fMRI?');
    expect(ans3.referencedSection).toContain('Lesson 20.2');
    expect(ans3.detailedResponse).toContain('Mark Lepper');
  });

  it('should resolve grounding anchors correctly for Lesson 20.2 topics', () => {
    expect(resolveValidSection('deci and ryan self-determination theory autonomy competence relatedness')).toBe(
      'Lesson 20.2 • Section 1: Edward Deci & Richard Ryan: The Basic Psychological Needs Triad'
    );
    expect(resolveValidSection('organismic integration theory oit introjected regulation integrated regulation')).toBe(
      'Lesson 20.2 • Section 2: Organismic Integration Theory (OIT): The Motivational Continuum'
    );
    expect(resolveValidSection('mark lepper overjustification effect undermining effect murayama fmri striatal')).toBe(
      'Lesson 20.2 • Section 3: Lepper, Greene & Murayama: The Overjustification & Undermining Effect'
    );
  });

  it('should return TUTOR_SYSTEM_INSTRUCTION_LESSON_20_2 for self-determination-theory', () => {
    const prompt = getTutorSystemInstruction('self-determination-theory');
    expect(prompt).toContain('Lesson 20.2');
    expect(prompt).toContain('Edward Deci & Richard Ryan');
    expect(prompt).toContain('Organismic Integration');
    expect(prompt).toContain('Overjustification');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE with isAvailable true', () => {
    expect(ALL_LESSONS['self-determination-theory']).toBeDefined();
    expect(ALL_LESSONS['self-determination-theory'].id).toBe('self-determination-theory');

    const ch20 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-20-motivation-drive');
    expect(ch20).toBeDefined();
    const l202 = ch20?.lessons.find(l => l.id === 'self-determination-theory');
    expect(l202).toBeDefined();
    expect(l202?.isAvailable).toBe(true);
  });
});
