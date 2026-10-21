import { describe, it, expect } from 'vitest';
import { LESSON_EMOTION_APPRAISAL_REGULATION } from '../data/lesson21_2Data.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';
import { PRIMARY_COURSE, ALL_LESSONS } from '../data/courseData.ts';

describe('Lesson 21.2: Cognitive Reappraisal & High-Stakes Performance Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_EMOTION_APPRAISAL_REGULATION.id).toBe('emotion-appraisal-regulation');
    expect(LESSON_EMOTION_APPRAISAL_REGULATION.chapterId).toBe('ch-21-stress-performance');
    expect(LESSON_EMOTION_APPRAISAL_REGULATION.number).toBe('21.2');
    expect(LESSON_EMOTION_APPRAISAL_REGULATION.title).toBe('Cognitive Reappraisal & High-Stakes Performance');
    expect(LESSON_EMOTION_APPRAISAL_REGULATION.subtitle).toContain('Reframing physiological arousal from threat to challenge state');
    expect(LESSON_EMOTION_APPRAISAL_REGULATION.readingTimeMinutes).toBeGreaterThanOrEqual(14);
    expect(LESSON_EMOTION_APPRAISAL_REGULATION.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_EMOTION_APPRAISAL_REGULATION;
    expect(curiosityQuestion.headline).toContain('calm down');
    expect(curiosityQuestion.headline).toContain('excited');
    expect(curiosityQuestion.hookNote).toContain('Jeremy Jamieson');
    expect(curiosityQuestion.hookNote).toContain('Alison Wood Brooks');
    expect(curiosityQuestion.hookNote).toContain('James J. Gross');
    expect(curiosityQuestion.hookNote).toContain('Total Peripheral Resistance');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_EMOTION_APPRAISAL_REGULATION;
    expect(prediction.options).toHaveLength(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-condition-c-arousal-reappraisal');
    expect(prediction.outcome.explanation).toContain('Jamieson');
    expect(prediction.outcome.explanation).toContain('Brooks');
    expect(prediction.outcome.explanation).toContain('Challenge');
    expect(prediction.outcome.comparisons.length).toBeGreaterThanOrEqual(2);
    expect(prediction.outcome.comparisons.some(c => c.isEmpiricalWinner)).toBe(true);
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_EMOTION_APPRAISAL_REGULATION;
    expect(coreExplanations).toHaveLength(3);

    // Module 1: Jamieson & Mendes Challenge vs Threat
    expect(coreExplanations[0].id).toBe('jamieson-biopsychosocial-challenge-threat');
    expect(coreExplanations[0].title).toContain('Jeremy Jamieson & Wendy Mendes');
    expect(coreExplanations[0].scientificStatus).toBe('empirical-consensus');
    expect(coreExplanations[0].mechanisms.length).toBeGreaterThanOrEqual(3);
    expect(coreExplanations[0].keyInsight).toContain('oxygen and glucose');
    expect(coreExplanations[0].simplifiedModelCaveat).toBeDefined();

    // Module 2: Alison Wood Brooks Get Excited
    expect(coreExplanations[1].id).toBe('brooks-anxiety-reappraisal-excitement');
    expect(coreExplanations[1].title).toContain('Alison Wood Brooks');
    expect(coreExplanations[1].scientificStatus).toBe('empirical-consensus');
    expect(coreExplanations[1].mechanisms.some(m => m.label.includes('Affective Circumplex'))).toBe(true);
    expect(coreExplanations[1].mechanisms.some(m => m.label.includes('Excitement Reappraisal'))).toBe(true);

    // Module 3: James Gross Process Model
    expect(coreExplanations[2].id).toBe('gross-reappraisal-vs-suppression');
    expect(coreExplanations[2].title).toContain('James Gross');
    expect(coreExplanations[2].scientificStatus).toBe('cognitive-model');
    expect(coreExplanations[2].mechanisms.some(m => m.label.includes('Cognitive Tax of Expressive Suppression'))).toBe(true);
    expect(coreExplanations[2].mechanisms.some(m => m.label.includes('Ramirez & Beilock, 2011'))).toBe(true);
  });

  it('should define a 6-stage diagram illustrating the biopsychosocial appraisal & emotion regulation funnel', () => {
    const { diagram } = LESSON_EMOTION_APPRAISAL_REGULATION;
    expect(diagram.title).toContain('Biopsychosocial Appraisal & Emotion Regulation Funnel');
    expect(diagram.stages).toHaveLength(6);
    expect(diagram.stages[0].name).toContain('Primary Appraisal');
    expect(diagram.stages[1].name).toContain('Threat Appraisal');
    expect(diagram.stages[2].name).toContain('Expressive Suppression');
    expect(diagram.stages[3].name).toContain('Antecedent Reappraisal');
    expect(diagram.stages[4].name).toContain('Challenge State');
    expect(diagram.stages[5].name).toContain('Working Memory Preservation');
    expect(diagram.feedbackLoopDescription).toBeDefined();
  });

  it('should define a 4-scenario diagnostic exercise with clinical explanations and fixes', () => {
    const { exercise } = LESSON_EMOTION_APPRAISAL_REGULATION;
    expect(exercise.categories).toHaveLength(4);
    expect(exercise.scenarios).toHaveLength(4);

    const s1 = exercise.scenarios[0];
    expect(s1.realWorldContext).toContain('Technical Architecture Review');
    expect(s1.mechanismExplanation).toContain('Jamieson');

    const s2 = exercise.scenarios[1];
    expect(s2.realWorldContext).toContain('Hospital Intensive Care');
    expect(s2.mechanismExplanation).toContain('Richards & Gross');

    const s3 = exercise.scenarios[2];
    expect(s3.realWorldContext).toContain('Public Keynote Speaking');
    expect(s3.mechanismExplanation).toContain('Brooks');

    const s4 = exercise.scenarios[3];
    expect(s4.realWorldContext).toContain('Algorithmic Coding Interview');
    expect(s4.mechanismExplanation).toContain('Challenge State');
  });

  it('should define 4 rigorous formative quiz questions with literature citations', () => {
    const { quiz } = LESSON_EMOTION_APPRAISAL_REGULATION;
    expect(quiz.questions).toHaveLength(4);
    expect(quiz.questions[0].explanation).toContain('Jamieson');
    expect(quiz.questions[1].explanation).toContain('Brooks');
    expect(quiz.questions[2].explanation).toContain('Gross');
    expect(quiz.questions[3].explanation).toContain('Ramirez');
  });

  it('should define a 3-step practical protocol translating cognitive science into action', () => {
    const { practicalTask } = LESSON_EMOTION_APPRAISAL_REGULATION;
    expect(practicalTask.title).toContain('3-Step High-Stakes Reappraisal & Expressive Offloading Protocol');
    expect(practicalTask.steps).toHaveLength(3);
    expect(practicalTask.steps[0].title).toContain('Expressive Worry Dump');
    expect(practicalTask.steps[1].title).toContain('Somatosensory Arousal Reappraisal');
    expect(practicalTask.steps[2].title).toContain('Valence Flip');
  });

  it('should register all Lesson 21.2 concepts in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const lesson21_2Concepts = [
      'concept:jamieson_biopsychosocial_challenge_vs_threat',
      'concept:brooks_anxiety_reappraisal_excitement',
      'concept:gross_reappraisal_vs_expressive_suppression',
    ] as const;

    for (const c of lesson21_2Concepts) {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c]).toBeDefined();
      expect(CONCEPT_REGISTRY[c].conceptId).toBe(c);
      expect(CONCEPT_REGISTRY[c].keyCriteria.length).toBeGreaterThanOrEqual(4);
      expect(CONCEPT_REGISTRY[c].canonicalAnswer).toBeDefined();
      expect(CONCEPT_REGISTRY[c].lessonSectionAnchor).toContain('Lesson 21.2');
    }
  });

  it('should register all Lesson 21.2 misconceptions in KNOWN_MISCONCEPTIONS', () => {
    const lesson21_2Misconceptions = [
      'misconception:calming_down_is_the_best_response_to_acute_performance_anxiety',
      'misconception:suppressing_emotions_preserves_cognitive_bandwidth',
    ] as const;

    for (const m of lesson21_2Misconceptions) {
      expect(KNOWN_MISCONCEPTIONS).toContain(m);
    }
  });

  it('should provide accurate offline tutor knowledge base answers for Lesson 21.2 queries', () => {
    const ans1 = findTutorAnswer('How does the Jeremy Jamieson and Wendy Mendes biopsychosocial model distinguish challenge vs threat total peripheral resistance?');
    expect(ans1.referencedSection).toContain('Lesson 21.2');
    expect(ans1.detailedResponse).toContain('Jamieson');

    const ans2 = findTutorAnswer('Why does Alison Wood Brooks say to get excited and use anxiety reappraisal instead of calming down?');
    expect(ans2.referencedSection).toContain('Lesson 21.2');
    expect(ans2.detailedResponse).toContain('Brooks');

    const ans3 = findTutorAnswer('How does James Gross explain cognitive reappraisal vs expressive suppression working memory?');
    expect(ans3.referencedSection).toContain('Lesson 21.2');
    expect(ans3.detailedResponse).toContain('Gross');
  });

  it('should resolve grounding anchors correctly for Lesson 21.2 topics', () => {
    expect(resolveValidSection('jeremy jamieson wendy mendes biopsychosocial model challenge vs threat total peripheral resistance')).toBe(
      'Lesson 21.2 • Section 1: Jeremy Jamieson & Wendy Mendes: Challenge vs Threat Hemodynamics'
    );
    expect(resolveValidSection('alison wood brooks get excited anxiety reappraisal affective circumplex')).toBe(
      'Lesson 21.2 • Section 2: Alison Wood Brooks (2014): "Get Excited" Anxiety Reappraisal'
    );
    expect(resolveValidSection('james gross cognitive reappraisal vs expressive suppression ramirez and beilock expressive writing')).toBe(
      'Lesson 21.2 • Section 3: James Gross: Cognitive Reappraisal vs Expressive Suppression'
    );
  });

  it('should return TUTOR_SYSTEM_INSTRUCTION_LESSON_21_2 for emotion-appraisal-regulation', () => {
    const prompt = getTutorSystemInstruction('emotion-appraisal-regulation');
    expect(prompt).toContain('Lesson 21.2');
    expect(prompt).toContain('Jeremy Jamieson & Wendy Mendes');
    expect(prompt).toContain('Alison Wood Brooks');
    expect(prompt).toContain('James Gross');
    expect(prompt).toContain('expressive writing');
  });

  it('should be registered properly in courseData and PRIMARY_COURSE with isAvailable true', () => {
    expect(ALL_LESSONS['emotion-appraisal-regulation']).toBeDefined();
    expect(ALL_LESSONS['emotion-appraisal-regulation'].title).toBe('Cognitive Reappraisal & High-Stakes Performance');

    const ch21 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-21-stress-performance');
    expect(ch21).toBeDefined();
    const l21_2 = ch21?.lessons.find(l => l.id === 'emotion-appraisal-regulation');
    expect(l21_2).toBeDefined();
    expect(l21_2?.isAvailable).toBe(true);
  });
});
