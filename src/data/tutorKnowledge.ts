export interface TutorPrompt {
  id: string;
  label: string;
  query: string;
  conceptTarget: string;
}

export interface TutorKnowledgeEntry {
  keywords: string[];
  title: string;
  summary: string;
  detailedResponse: string;
  socraticChallenge: string;
  referencedSection: string;
}

export const TUTOR_PROMPTS: TutorPrompt[] = [
  {
    id: 'p-fluency',
    label: 'Fluency Illusion',
    query: 'Why does rereading feel like mastery when it actually fails?',
    conceptTarget: 'illusion-of-competence',
  },
  {
    id: 'p-working-mem',
    label: 'Working Memory Limits',
    query: 'How many items can working memory hold, and how do experts bypass it?',
    conceptTarget: 'working-memory',
  },
  {
    id: 'p-retrieval-code',
    label: 'Retrieval in Practice',
    query: 'How can I apply active retrieval when learning programming or engineering?',
    conceptTarget: 'retrieval-practice',
  },
  {
    id: 'p-feedback-loop',
    label: 'Prediction Errors',
    query: 'Why is getting an answer wrong with feedback better than guessing right?',
    conceptTarget: 'calibrated-feedback',
  },
  {
    id: 'p-evidence-vs-models',
    label: 'Models vs Evidence',
    query: 'What is the distinction between cognitive models and neurobiological facts?',
    conceptTarget: 'scientific-status',
  },
];

export const TUTOR_KNOWLEDGE_BASE: TutorKnowledgeEntry[] = [
  {
    keywords: ['reread', 'rereading', 'highlight', 'highlighting', 'fluency', 'illusion', 'familiarity', 'passive'],
    title: 'The Illusion of Competence & Perceptual Fluency',
    summary: 'Rereading exercises recognition, not retrieval.',
    detailedResponse: 'When you reread text or review highlighted notes, your eyes encounter words that your sensory system easily decodes. Your brain mistakes this ease of perceptual processing for the strength of storage. In reality, recognition relies on the external page providing cues. True recall requires internally generating the pathway from long-term memory without external stimuli.',
    socraticChallenge: 'Try this right now: Close this tab or look away. Can you explain the difference between recognition and recall in your own words without peeking?',
    referencedSection: 'Section 1.1 — Curiosity Hook & Section 4 (Retrieval Practice)',
  },
  {
    keywords: ['working memory', 'capacity', 'chunks', 'chunking', 'cognitive load', 'slots', 'baddeley', 'short-term'],
    title: 'Working Memory Architecture & The 4-Chunk Limit',
    summary: 'Working memory can hold roughly 3 to 4 novel elements at once.',
    detailedResponse: 'Conscious working memory is strictly bottlenecked. For novel, unorganized information, the biological limit is approximately 3 to 4 distinct conceptual chunks (Cowan, 2001; Sweller, 1988). When instruction is poorly designed (extraneous load) or too many novel variables are introduced at once, working memory buffers overflow and comprehension crashes. Experts bypass this not through larger biological hardware, but by organizing thousands of connections into unified long-term memory schemas (e.g., recognizing an entire code design pattern as 1 single chunk).',
    socraticChallenge: 'Reflect on a time you felt completely overwhelmed while reading documentation. Were you trying to juggle more than 4 unfamiliar concepts at once?',
    referencedSection: 'Section 1.1 — Section 2: Working Memory',
  },
  {
    keywords: ['attention', 'multitasking', 'focus', 'distraction', 'noise', 'filter', 'residue', 'notification'],
    title: 'Attention: The Physical Bottleneck of Consciousness',
    summary: 'Information that is not attended to never physically enters working memory.',
    detailedResponse: 'Controlled conscious attention is strictly serial for novel tasks. When you attempt to study while listening to speech-dense audio or monitoring communication notifications, your prefrontal cortex performs rapid context switching rather than parallel processing. Each switch leaves "attention residue," resetting fragile working memory buffers and degrading encoding quality to near zero.',
    socraticChallenge: 'What is one specific environmental trigger that consistently breaks your attentional gain filter during deep study?',
    referencedSection: 'Section 1.1 — Section 1: Attention',
  },
  {
    keywords: ['retrieval', 'testing effect', 'recall', 'flashcards', 'quiz', 'desirable difficulty', 'effort', 'struggle'],
    title: 'The Testing Effect: Retrieval as Memory Modification',
    summary: 'Retrieval does not merely measure memory; it rewrites and stabilizes it.',
    detailedResponse: 'Every time you force your brain to retrieve a concept from memory without looking at notes, you trigger memory reconsolidation. The biological effort of searching activates adjacent semantic nodes, increases synaptic density, and creates alternate associative retrieval routes. The difficulty you feel is not a failure of understanding; it is the physiological mechanism of consolidation.',
    socraticChallenge: 'How could you turn your next reading session into an active retrieval session using just a blank sheet of paper?',
    referencedSection: 'Section 1.1 — Section 4: Retrieval Practice',
  },
  {
    keywords: ['feedback', 'error', 'prediction', 'mistake', 'hypercorrection', 'calibration', 'dopamine'],
    title: 'Prediction Errors & Calibrated Feedback',
    summary: 'Unexpected errors paired with explanations drive rapid neural model updates.',
    detailedResponse: 'The human brain is fundamentally a predictive modeling engine. When you make an assertion with high confidence and encounter an objective discrepancy (a prediction error), dopaminergic circuits flag the mismatch. Immediate explanatory feedback allows working memory to repair the broken schema link. Without feedback, practice risks entrenching incorrect assumptions.',
    socraticChallenge: 'Think of an error you made where you were 100% sure you were right. Did discovering the actual explanation make the lesson stick permanently?',
    referencedSection: 'Section 1.1 — Section 5: Calibrated Feedback',
  },
  {
    keywords: ['model', 'models', 'scientific', 'evidence', 'consensus', 'myth', 'biological', 'citation', 'neuroscience'],
    title: 'Scientific Evidence vs. Simplified Cognitive Models',
    summary: 'Distinguishing empirical behavioral findings from working theoretical abstractions.',
    detailedResponse: 'In cognitive science, it is vital to distinguish between: 1) Empirical consensus (robustly replicated behavioral effects like the Testing Effect, Spacing Effect, and Dual-Task Interference across hundreds of controlled trials); 2) Cognitive architecture models (such as Baddeley’s working memory buffers or Sweller’s cognitive load types, which are useful engineering abstractions rather than literal physical containers in the brain); and 3) Neurobiological mechanisms (synaptic long-term potentiation, hippocampal-cortical dialogue during slow-wave sleep).',
    socraticChallenge: 'Why is it dangerous to treat a pedagogical model (like "memory slots") as a literal physical organ?',
    referencedSection: 'Section 1.1 — Scientific Status Badges & Methodological Notes',
  },
  {
    keywords: ['program', 'programming', 'code', 'coding', 'math', 'developer', 'software', 'engineer', 'technical'],
    title: 'Applying Cognitive Science to Software Engineering & Technical Mastery',
    summary: 'How to replace tutorial purgatory with deliberate cognitive engineering.',
    detailedResponse: 'Tutorial hell is the ultimate manifestation of the illusion of competence: you follow a tutorial, typing what you see, experiencing zero retrieval friction. To master code or math: 1) Practice "Code Kata Retrieval": after building a component, delete it and rewrite the minimal working version from memory; 2) Verbalize error diagnoses before checking StackOverflow or AI; 3) Build deliberate prediction habits: before running a test or compiler, predict the exact output or stack trace.',
    socraticChallenge: 'Next time your compiler throws an error, resist copying it immediately into an LLM. Can you predict the exact line and root cause first?',
    referencedSection: 'Section 1.1 — Practical Application Task',
  },
];

export function findTutorAnswer(userQuery: string): TutorKnowledgeEntry {
  const normalized = userQuery.toLowerCase().trim();
  
  // Score entries by matching keyword count
  let bestEntry = TUTOR_KNOWLEDGE_BASE[0];
  let highestScore = 0;

  for (const entry of TUTOR_KNOWLEDGE_BASE) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (normalized.includes(kw)) {
        score += kw.length; // weight longer specific keywords higher
      }
    }
    if (score > highestScore) {
      highestScore = score;
      bestEntry = entry;
    }
  }

  // If match score is high enough, return it
  if (highestScore > 0) {
    return bestEntry;
  }

  // Generic honest fallback
  return {
    keywords: [],
    title: 'Contextual Socratic Guidance',
    summary: 'Grounded in the "How Learning Actually Works" cognitive curriculum.',
    detailedResponse: `I explored the Phase 1 lesson corpus for "${userQuery}". This lesson specifically focuses on five foundational mechanisms of human cognition:\n\n1. Attention (the selective sensory gate)\n2. Working Memory (the fragile ~4-chunk scratchpad)\n3. Long-Term Memory (schema consolidation & storage vs retrieval strength)\n4. Retrieval Practice (the testing effect and desirable difficulties)\n5. Calibrated Feedback (prediction error minimization)\n\nIn Phase 2, live multi-turn LLM generation will answer open-ended queries beyond this core syllabus. For now, try exploring one of the curated concept queries or ask how these 5 mechanisms relate to your study habits.`,
    socraticChallenge: 'How does the question you just asked relate to either Attention, Working Memory, Schemas, Retrieval, or Feedback?',
    referencedSection: 'Section 1.1 — Overview of Cognitive Architecture',
  };
}
