import { describe, it, expect } from 'vitest';
import { LESSON_PERSONAL_MASTERY_SYNTHESIS } from '../data/lesson26_2Data.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';
import { PRIMARY_COURSE, ALL_LESSONS } from '../data/courseData.ts';

describe('Lesson 26.2: The Synthesis Project: Your Personal Mastery Engine Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_PERSONAL_MASTERY_SYNTHESIS.id).toBe('personal-mastery-synthesis');
    expect(LESSON_PERSONAL_MASTERY_SYNTHESIS.chapterId).toBe('ch-26-lifetime-architecture');
    expect(LESSON_PERSONAL_MASTERY_SYNTHESIS.number).toBe('26.2');
    expect(LESSON_PERSONAL_MASTERY_SYNTHESIS.title).toBe('The Synthesis Project: Your Personal Mastery Engine');
    expect(LESSON_PERSONAL_MASTERY_SYNTHESIS.subtitle).toContain('Architecting an enduring, self-evolving system for lifelong cognitive mastery');
    expect(LESSON_PERSONAL_MASTERY_SYNTHESIS.readingTimeMinutes).toBeGreaterThanOrEqual(20);
    expect(LESSON_PERSONAL_MASTERY_SYNTHESIS.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_PERSONAL_MASTERY_SYNTHESIS;
    expect(curiosityQuestion.headline).toContain('50+ years');
    expect(curiosityQuestion.hookNote).toContain('Barry J. Zimmerman');
    expect(curiosityQuestion.hookNote).toContain('Self-Regulated Learning');
    expect(curiosityQuestion.hookNote).toContain('K. Anders Ericsson');
    expect(curiosityQuestion.hookNote).toContain('Deliberate Practice');
    expect(curiosityQuestion.hookNote).toContain('Douglas Engelbart');
    expect(curiosityQuestion.hookNote).toContain('Bootstrapping');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_PERSONAL_MASTERY_SYNTHESIS;
    expect(prediction.options).toHaveLength(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-condition-c-mastery-engine');
    expect(prediction.outcome.explanation).toContain('Zimmerman');
    expect(prediction.outcome.explanation).toContain('Ericsson');
    expect(prediction.outcome.explanation).toContain('Engelbart');
    expect(prediction.outcome.explanation).toContain('Bootstrapping');
    expect(prediction.outcome.comparisons.length).toBeGreaterThanOrEqual(3);
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_PERSONAL_MASTERY_SYNTHESIS;
    expect(coreExplanations).toHaveLength(3);

    // Module 1: Barry Zimmerman Cyclical SRL
    expect(coreExplanations[0].id).toBe('zimmerman-cyclical-srl-architecture');
    expect(coreExplanations[0].title).toContain('Barry Zimmerman');
    expect(coreExplanations[0].scientificStatus).toBe('empirical-consensus');
    expect(coreExplanations[0].mechanisms.length).toBeGreaterThanOrEqual(4);
    expect(coreExplanations[0].keyInsight).toContain('closed-loop');

    // Module 2: Ericsson & Engelbart Bootstrapping
    expect(coreExplanations[1].id).toBe('ericsson-engelbart-bootstrapping-mastery-engine');
    expect(coreExplanations[1].title).toContain('Anders Ericsson & Douglas Engelbart');
    expect(coreExplanations[1].scientificStatus).toBe('cognitive-model');
    expect(coreExplanations[1].mechanisms.length).toBeGreaterThanOrEqual(4);
    expect(coreExplanations[1].keyInsight).toContain('deliberate practice to your meta-learning architecture');

    // Module 3: Unified Cognitive Architecture Synthesis
    expect(coreExplanations[2].id).toBe('unified-cognitive-architecture-human-learning-os');
    expect(coreExplanations[2].title).toContain('The Unified Cognitive Architecture');
    expect(coreExplanations[2].scientificStatus).toBe('neurobiological-mechanism');
    expect(coreExplanations[2].mechanisms.length).toBeGreaterThanOrEqual(4);
    expect(coreExplanations[2].keyInsight).toContain('engineerable cognitive architecture');
  });

  it('should provide an interactive diagram modeling the 5-stage Personal Mastery Engine Architecture', () => {
    const { diagram } = LESSON_PERSONAL_MASTERY_SYNTHESIS;
    expect(diagram.title).toBe('The Personal Mastery Engine Architecture');
    expect(diagram.stages).toHaveLength(5);
    expect(diagram.stages[0].name).toContain('Forethought & Task Analysis');
    expect(diagram.stages[1].name).toContain('Attentional Gating & Working Memory Shielding');
    expect(diagram.stages[2].name).toContain('Deliberate Practice & Edge-of-Ability Execution');
    expect(diagram.stages[3].name).toContain('Self-Reflection, Error Telemetry & Peer Calibration');
    expect(diagram.stages[4].name).toContain('Bootstrapping Meta-Tools & Decadal Permastore Consolidation');

    diagram.stages.forEach(stage => {
      expect(stage.capacity.length).toBeGreaterThan(10);
      expect(stage.duration.length).toBeGreaterThan(5);
      expect(stage.role.length).toBeGreaterThan(30);
      expect(stage.failureMode.length).toBeGreaterThan(20);
      expect(stage.evidenceType.length).toBeGreaterThan(10);
      expect(stage.practicalFix.length).toBeGreaterThan(20);
    });
  });

  it('should include 4 diagnostic exercise scenarios across valid categories', () => {
    const { exercise } = LESSON_PERSONAL_MASTERY_SYNTHESIS;
    expect(exercise.categories).toHaveLength(4);
    expect(exercise.scenarios).toHaveLength(4);

    exercise.scenarios.forEach(scenario => {
      expect(['schema-consolidation', 'illusion-of-competence', 'working-memory-overload', 'attention-bottleneck']).toContain(scenario.correctCategory);
      expect(scenario.mechanismExplanation.length).toBeGreaterThan(40);
      expect(scenario.evidenceBasedFix.length).toBeGreaterThan(20);
    });
  });

  it('should provide a 4-question verification quiz with empirical rationales', () => {
    const { quiz } = LESSON_PERSONAL_MASTERY_SYNTHESIS;
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

  it('should present a 3-step practical task for lifelong mastery protocol execution', () => {
    const { practicalTask } = LESSON_PERSONAL_MASTERY_SYNTHESIS;
    expect(practicalTask.steps).toHaveLength(3);
    expect(practicalTask.steps[0].title).toContain('Daily 15-Minute Retrieval & Encoding Sprint');
    expect(practicalTask.steps[1].title).toContain('Weekly Calibration & Error Telemetry Ritual');
    expect(practicalTask.steps[2].title).toContain('Architect Your Decadal Permastore & Bootstrapping Maintenance Plan');
  });

  it('should have all concepts registered in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:zimmerman_cyclical_self_regulated_learning_architecture',
      'concept:ericsson_engelbart_bootstrapping_mastery_engine',
      'concept:unified_cognitive_architecture_synthesis_human_learning',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const prompt = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(prompt.keyCriteria.length).toBeGreaterThanOrEqual(4);
      expect(prompt.canonicalAnswer.length).toBeGreaterThan(100);
      expect(prompt.lessonSectionAnchor).toContain('Lesson 26.2');
    });
  });

  it('should have all misconceptions registered in KNOWN_MISCONCEPTIONS', () => {
    const expectedMisconceptions = [
      'misconception:mastery_is_a_destination_rather_than_a_dynamic_feedback_loop',
      'misconception:tools_and_apps_alone_can_automate_learning_without_cognitive_effort',
    ];

    expectedMisconceptions.forEach(m => {
      expect(KNOWN_MISCONCEPTIONS).toContain(m);
    });
  });

  it('should retrieve accurate tutor knowledge entries for Lesson 26.2 queries', () => {
    const answer1 = findTutorAnswer('what did barry zimmerman discover about cyclical self-regulated learning srl and forethought phase');
    expect(answer1.title).toContain('Barry Zimmerman');
    expect(answer1.detailedResponse).toContain('Forethought');

    const answer2 = findTutorAnswer('explain anders ericsson deliberate practice and douglas engelbart bootstrapping capability augmentation');
    expect(answer2.title).toContain('Anders Ericsson & Douglas Engelbart');
    expect(answer2.detailedResponse).toContain('Bootstrapping');

    const answer3 = findTutorAnswer('what is the unified cognitive architecture synthesizing the 53 lessons into a lifelong mastery engine os');
    expect(answer3.title).toContain('Unified Cognitive Architecture');
    expect(answer3.detailedResponse).toContain('53');
  });

  it('should resolve grounding anchors for Lesson 26.2 correctly', () => {
    expect(resolveValidSection('explain barry zimmerman cyclical self-regulated learning architecture and forethought in 26.2')).toBe(
      'Lesson 26.2 • Section 1: Barry Zimmerman (2000, 2002): The Cyclical Architecture of Self-Regulated Mastery'
    );
    expect(resolveValidSection('tell me about bootstrapping the personal mastery engine and engelbart capability augmentation')).toBe(
      'Lesson 26.2 • Section 2: Anders Ericsson & Douglas Engelbart: Bootstrapping the Personal Mastery Engine'
    );
    expect(resolveValidSection('what is the unified cognitive architecture synthesizing the 53 lessons into a human learning os')).toBe(
      'Lesson 26.2 • Section 3: The Unified Cognitive Architecture: The 53-Lesson Operating System'
    );
  });

  it('should return specialized tutor system instruction for personal-mastery-synthesis', () => {
    const instruction = getTutorSystemInstruction('personal-mastery-synthesis');
    expect(instruction).toContain('Zimmerman');
    expect(instruction).toContain('Ericsson');
    expect(instruction).toContain('Engelbart');
    expect(instruction).toContain('Unified Cognitive Architecture');
  });

  it('should be properly wired in courseData registry', () => {
    expect(ALL_LESSONS['personal-mastery-synthesis']).toBeDefined();
    const ch26 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-26-lifetime-architecture');
    expect(ch26).toBeDefined();
    const lesson = ch26?.lessons.find(l => l.id === 'personal-mastery-synthesis');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
