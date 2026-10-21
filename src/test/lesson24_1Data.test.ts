import { describe, it, expect } from 'vitest';
import { LESSON_EXTENDED_MIND_ZETTELKASTEN } from '../data/lesson24_1Data.ts';
import { KNOWN_CONCEPTS, KNOWN_MISCONCEPTIONS } from '../types/memory.ts';
import { CONCEPT_REGISTRY } from '../data/conceptRegistry.ts';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { resolveValidSection, getTutorSystemInstruction } from '../../server/groundingContext.ts';
import { PRIMARY_COURSE, ALL_LESSONS } from '../data/courseData.ts';

describe('Lesson 24.1: External Memory Systems & Graph Notes Data Integrity', () => {
  it('should have accurate metadata and adhere to Lesson contract', () => {
    expect(LESSON_EXTENDED_MIND_ZETTELKASTEN.id).toBe('extended-mind-zettelkasten');
    expect(LESSON_EXTENDED_MIND_ZETTELKASTEN.chapterId).toBe('ch-24-external-scaffolding');
    expect(LESSON_EXTENDED_MIND_ZETTELKASTEN.number).toBe('24.1');
    expect(LESSON_EXTENDED_MIND_ZETTELKASTEN.title).toBe('External Memory Systems & Graph Notes');
    expect(LESSON_EXTENDED_MIND_ZETTELKASTEN.subtitle).toContain('Bidirectional linking, atomic notes, and avoiding passive hoarding');
    expect(LESSON_EXTENDED_MIND_ZETTELKASTEN.readingTimeMinutes).toBeGreaterThanOrEqual(16);
    expect(LESSON_EXTENDED_MIND_ZETTELKASTEN.isAvailable).toBe(true);
  });

  it('should have an authentic, empirical curiosity hook citing key researchers', () => {
    const { curiosityQuestion } = LESSON_EXTENDED_MIND_ZETTELKASTEN;
    expect(curiosityQuestion.headline).toContain('bookmarking 500 articles');
    expect(curiosityQuestion.hookNote).toContain('Andy Clark');
    expect(curiosityQuestion.hookNote).toContain('David Chalmers');
    expect(curiosityQuestion.hookNote).toContain('Extended Mind');
    expect(curiosityQuestion.hookNote).toContain('Niklas Luhmann');
    expect(curiosityQuestion.hookNote).toContain('Zettelkasten');
    expect(curiosityQuestion.hookNote).toContain('Collector’s Fallacy');
  });

  it('should formulate an intuitive prediction calibrated with empirical literature', () => {
    const { prediction } = LESSON_EXTENDED_MIND_ZETTELKASTEN;
    expect(prediction.options).toHaveLength(3);
    expect(prediction.outcome.winningOptionId).toBe('opt-condition-c-atomic-zettelkasten');
    expect(prediction.outcome.explanation).toContain('Clark');
    expect(prediction.outcome.explanation).toContain('Chalmers');
    expect(prediction.outcome.explanation).toContain('Luhmann');
    expect(prediction.outcome.explanation).toContain('Collector’s Fallacy');
    expect(prediction.outcome.comparisons.length).toBeGreaterThanOrEqual(3);
  });

  it('should have 3 comprehensive core explanation modules with mechanisms and caveats', () => {
    const { coreExplanations } = LESSON_EXTENDED_MIND_ZETTELKASTEN;
    expect(coreExplanations).toHaveLength(3);

    // Module 1: Clark & Chalmers Extended Mind
    expect(coreExplanations[0].id).toBe('clark-chalmers-extended-mind-active-externalism');
    expect(coreExplanations[0].title).toContain('Andy Clark & David Chalmers');
    expect(coreExplanations[0].scientificStatus).toBe('cognitive-model');
    expect(coreExplanations[0].mechanisms.length).toBeGreaterThanOrEqual(3);
    expect(coreExplanations[0].keyInsight).toContain('Extended Mind');

    // Module 2: Luhmann Zettelkasten & Atomic Bidirectional Notes
    expect(coreExplanations[1].id).toBe('luhmann-zettelkasten-atomic-bidirectional-linking');
    expect(coreExplanations[1].title).toContain('Niklas Luhmann');
    expect(coreExplanations[1].scientificStatus).toBe('empirical-consensus');
    expect(coreExplanations[1].mechanisms.length).toBeGreaterThanOrEqual(3);
    expect(coreExplanations[1].keyInsight).toContain('Hierarchical folders');

    // Module 3: Collector's Fallacy & Generative Note-Taking
    expect(coreExplanations[2].id).toBe('collectors-fallacy-generative-note-taking');
    expect(coreExplanations[2].title).toContain('Collector’s Fallacy');
    expect(coreExplanations[2].scientificStatus).toBe('empirical-consensus');
    expect(coreExplanations[2].mechanisms.length).toBeGreaterThanOrEqual(3);
    expect(coreExplanations[2].keyInsight).toContain('Generation Effect');
  });

  it('should provide an interactive diagram modeling the 5-stage extended cognition funnel', () => {
    const { diagram } = LESSON_EXTENDED_MIND_ZETTELKASTEN;
    expect(diagram.title).toBe('The Extended Cognition & Generative Note-Taking Funnel');
    expect(diagram.stages).toHaveLength(5);
    expect(diagram.stages[0].name).toContain('Ephemeral Fleeting Capture');
    expect(diagram.stages[1].name).toContain('Generative Literature Translation');
    expect(diagram.stages[2].name).toContain('Atomic Permanent Note Formulation');
    expect(diagram.stages[3].name).toContain('Bidirectional Graph Integration');
    expect(diagram.stages[4].name).toContain('Emergent Synthesis');
    expect(diagram.feedbackLoopDescription).toContain('missing links or conceptual contradictions');
  });

  it('should deliver an interactive sorting exercise with 4 scenarios', () => {
    const { exercise } = LESSON_EXTENDED_MIND_ZETTELKASTEN;
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
    const { quiz } = LESSON_EXTENDED_MIND_ZETTELKASTEN;
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

  it('should present a 3-step practical task for extended mind zettelkasten note-taking', () => {
    const { practicalTask } = LESSON_EXTENDED_MIND_ZETTELKASTEN;
    expect(practicalTask.steps).toHaveLength(3);
    expect(practicalTask.steps[0].title).toContain('Digital Landfill Audit');
    expect(practicalTask.steps[1].title).toContain('Atomic Permanent Notes');
    expect(practicalTask.steps[2].title).toContain('Bidirectional Semantic Cross-Links');
  });

  it('should have all concepts registered in KNOWN_CONCEPTS and CONCEPT_REGISTRY', () => {
    const expectedConcepts = [
      'concept:clark_chalmers_extended_mind_active_externalism',
      'concept:luhmann_zettelkasten_atomic_bidirectional_linking',
      'concept:collectors_fallacy_generative_note_taking',
    ];

    expectedConcepts.forEach(c => {
      expect(KNOWN_CONCEPTS).toContain(c);
      expect(CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY]).toBeDefined();
      const prompt = CONCEPT_REGISTRY[c as keyof typeof CONCEPT_REGISTRY];
      expect(prompt.keyCriteria.length).toBeGreaterThanOrEqual(4);
      expect(prompt.canonicalAnswer.length).toBeGreaterThan(100);
      expect(prompt.lessonSectionAnchor).toContain('Lesson 24.1');
    });
  });

  it('should have all misconceptions registered in KNOWN_MISCONCEPTIONS', () => {
    const expectedMisconceptions = [
      'misconception:clipping_and_saving_articles_equals_understanding',
      'misconception:hierarchical_folders_are_superior_to_associative_graphs',
    ];

    expectedMisconceptions.forEach(m => {
      expect(KNOWN_MISCONCEPTIONS).toContain(m);
    });
  });

  it('should retrieve accurate tutor knowledge entries for Lesson 24.1 queries', () => {
    const answer1 = findTutorAnswer('what did andy clark and david chalmers propose about the extended mind and otto notebook');
    expect(answer1.title).toContain('Andy Clark');
    expect(answer1.detailedResponse).toContain('Extended Mind');

    const answer2 = findTutorAnswer('explain niklas luhmann zettelkasten atomic notes and bidirectional linking');
    expect(answer2.title).toContain('Niklas Luhmann');
    expect(answer2.detailedResponse).toContain('Zettelkasten');

    const answer3 = findTutorAnswer('what is the collectors fallacy in digital note taking and why does clipping produce illusions of competence');
    expect(answer3.title).toContain('Collector’s Fallacy');
    expect(answer3.detailedResponse).toContain('Generation Effect');
  });

  it('should resolve grounding anchors for Lesson 24.1 correctly', () => {
    expect(resolveValidSection('explain andy clark and david chalmers extended mind and active externalism')).toBe(
      'Lesson 24.1 • Section 1: Andy Clark & David Chalmers (1998): The Extended Mind & Active Externalism'
    );
    expect(resolveValidSection('tell me about niklas luhmann zettelkasten atomic notes and bidirectional graph notes')).toBe(
      'Lesson 24.1 • Section 2: Niklas Luhmann: The Zettelkasten & Atomic Bidirectional Graph Notes'
    );
    expect(resolveValidSection('what is the collectors fallacy and generative note taking with sonke ahrens and slamecka')).toBe(
      'Lesson 24.1 • Section 3: The Collector’s Fallacy & Generative Note-Taking (Ahrens & Slamecka)'
    );
  });

  it('should return specialized tutor system instruction for extended-mind-zettelkasten', () => {
    const instruction = getTutorSystemInstruction('extended-mind-zettelkasten');
    expect(instruction).toContain('Clark');
    expect(instruction).toContain('Chalmers');
    expect(instruction).toContain('Luhmann');
    expect(instruction).toContain('Zettelkasten');
  });

  it('should be properly wired in courseData registry', () => {
    expect(ALL_LESSONS['extended-mind-zettelkasten']).toBeDefined();
    const ch24 = PRIMARY_COURSE.chapters.find(c => c.id === 'ch-24-external-scaffolding');
    expect(ch24).toBeDefined();
    const lesson = ch24?.lessons.find(l => l.id === 'extended-mind-zettelkasten');
    expect(lesson).toBeDefined();
    expect(lesson?.isAvailable).toBe(true);
  });
});
