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
  takeaway: string;
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
    takeaway: 'Rereading feels easy because your eyes recognize familiar words, but recognition relies on the page—recall requires building the neural retrieval pathway internally.',
    detailedResponse: 'When you reread text or review highlighted notes, your visual cortex decodes familiar patterns with low effort. The brain conflates this ease of processing (perceptual fluency) with durable storage. Real problem solving requires uncued recall, which is left completely unpracticed by passive rereading.',
    socraticChallenge: 'Look away from the screen right now: Can you explain the difference between recognition and recall in one clean sentence without peeking?',
    referencedSection: 'Lesson 1.1 • Section 4 (Retrieval Practice)',
  },
  {
    keywords: ['working memory', 'capacity', 'chunks', 'chunking', 'cognitive load', 'slots', 'baddeley', 'short-term'],
    title: 'Working Memory Architecture & The 4-Chunk Limit',
    summary: 'Working memory can hold roughly 3 to 4 novel elements at once.',
    takeaway: 'Conscious working memory can only manipulate roughly 3 to 4 novel elements simultaneously. Experts bypass this by grouping dozens of concepts into structured long-term schemas.',
    detailedResponse: 'When learning unfamiliar material, your conscious working memory buffers can hold roughly 3 to 4 novel elements simultaneously (Cowan, 2001; Sweller, 1988). When extraneous distractions or poorly structured explanations overload these slots, comprehension fails. Experts do not have bigger biological brains; they possess rich schemas that compress complex procedures into a single mental "chunk".',
    socraticChallenge: 'Reflect on a topic that once overwhelmed you but now feels automatic. What high-level patterns did you automate into single chunks?',
    referencedSection: 'Lesson 1.1 • Section 2 (Working Memory)',
  },
  {
    keywords: ['attention', 'multitasking', 'focus', 'distraction', 'noise', 'filter', 'residue', 'notification'],
    title: 'Attention: The Physical Gatekeeper of Encoding',
    summary: 'Information that is not attended to never physically enters working memory.',
    takeaway: 'Attention is strictly serial for novel complex learning. Rapid switching between tasks leaves "attention residue," resetting fragile working memory buffers.',
    detailedResponse: 'Controlled conscious attention acts as a selective biological filter. Trying to study while checking notifications forces rapid executive task-switching. Each switch degrades cognitive performance, leaves attention residue, and fragments fragile working memory buffers, preventing durable synaptic encoding.',
    socraticChallenge: 'What is the single biggest environmental trigger that interrupts your attentional filter during technical study sessions?',
    referencedSection: 'Lesson 1.1 • Section 1 (Attention)',
  },
  {
    keywords: ['retrieval', 'testing effect', 'recall', 'flashcards', 'quiz', 'desirable difficulty', 'effort', 'struggle'],
    title: 'The Testing Effect: Retrieval as Memory Modification',
    summary: 'Retrieval does not merely measure memory; it rewrites and stabilizes it.',
    takeaway: 'Retrieval is an active memory modifier. The cognitive struggle of recalling an idea without looking at notes restabilizes synaptic connections and significantly slows forgetting.',
    detailedResponse: 'Whenever a memory is retrieved under challenging or updating conditions, it can become temporarily labile, initiating reconsolidation and updating contextual cues. Reconstructing the trace strengthens associative pathways and makes future access more reliable. The cognitive friction during recall is an active driver of retention, not a sign of failure.',
    socraticChallenge: 'How could you turn your next reading session into an active retrieval session using just a blank index card or notepad?',
    referencedSection: 'Lesson 1.1 • Section 4 (Retrieval Practice)',
  },
  {
    keywords: ['feedback', 'error', 'prediction', 'mistake', 'hypercorrection', 'calibration', 'dopamine'],
    title: 'Prediction Errors & Calibrated Feedback',
    summary: 'Unexpected errors paired with explanations drive rapid neural model updates.',
    takeaway: 'A high-confidence mistake followed immediately by an explanation triggers strong corrective model updating (the hypercorrection effect).',
    detailedResponse: 'The brain relies on error discrepancy signals to recalibrate its internal representations. When you make a confident prediction that proves incorrect, cognitive monitoring circuits register the conflict. Immediate explanatory feedback provides the diagnostic signal working memory needs to repair the faulty schema link (Butterfield & Metcalfe, 2001).',
    socraticChallenge: 'Think of a conceptual mistake you made in code or math that you were initially certain of. Did finding the exact reason for the error lock the correct concept into memory?',
    referencedSection: 'Lesson 1.1 • Section 5 (Calibrated Feedback)',
  },
  {
    keywords: ['model', 'models', 'scientific', 'evidence', 'consensus', 'myth', 'biological', 'citation', 'neuroscience'],
    title: 'Scientific Evidence vs. Simplified Cognitive Models',
    summary: 'Distinguishing empirical behavioral findings from working theoretical abstractions.',
    takeaway: 'Distinguish between replicated behavioral laws (the testing effect, spacing), architectural models (Baddeley memory buffers, cognitive load), and cellular neurobiology (LTP, synaptic remodeling).',
    detailedResponse: 'In cognitive science, we separate: 1) Replicated behavioral findings that reliably predict learning outcomes across hundreds of trials; 2) Cognitive engineering models, which are practical mental abstractions (like "memory slots"); and 3) Neurobiological mechanisms, such as long-term potentiation and systems-level memory consolidation.',
    socraticChallenge: 'Why is it helpful to use an engineering model like "working memory slots" even if the physical brain consists of distributed neural networks?',
    referencedSection: 'Lesson 1.1 • Scientific Status Badges',
  },
  {
    keywords: ['program', 'programming', 'code', 'coding', 'math', 'developer', 'software', 'engineer', 'technical'],
    title: 'Applying Cognitive Science to Software Engineering & Technical Mastery',
    summary: 'How to replace tutorial purgatory with deliberate cognitive engineering.',
    takeaway: 'To escape tutorial purgatory, write code from memory: build a minimal implementation, delete it, and reconstruct it without documentation before checking solutions.',
    detailedResponse: 'Tutorial purgatory is a classic manifestation of the illusion of competence. To build durable engineering ability: 1) Practice "blank editor retrieval"—write components from scratch; 2) Verbalize error diagnoses before consulting AI or search; 3) Predict compiler output or test outcomes before running commands.',
    socraticChallenge: 'Next time you encounter a compiler bug, pause for 60 seconds. Can you predict the root cause before searching the error message?',
    referencedSection: 'Lesson 1.1 • Section 6 (Practical Task)',
  },
  {
    keywords: ['generation', 'generation effect', 'slamecka', 'desirable difficulty', 'bjork', 'storage strength', 'retrieval strength'],
    title: 'The Generation Effect & Desirable Difficulties',
    summary: 'Self-generated information is retained significantly better than passive reading.',
    takeaway: 'Generating words, code, or solutions from memory creates deeper neural traces than reading them, even when the generation process feels effortful and halting.',
    detailedResponse: 'First demonstrated by Slamecka & Graf (1978), the generation effect proves that active cognitive production stimulates deeper semantic encoding. Under Robert Bjork’s New Theory of Disuse, effortful generation under challenging retrieval conditions simultaneously boosts current retrieval strength and long-term storage strength.',
    socraticChallenge: 'How can you replace your next passive reading task with an active generative recall prompt?',
    referencedSection: 'Lesson 1.2 • Section 2: The Generation Effect & Desirable Difficulty',
  },
  {
    keywords: ['jol', 'judgments of learning', 'judgment of learning', 'delayed jol', 'metacognitive', 'calibration', 'nelson', 'dunlosky', 'blank sheet', 'blank-sheet'],
    title: 'Metacognitive Calibration & Delayed JOLs',
    summary: 'Immediate confidence ratings are deeply distorted by working memory recency.',
    takeaway: 'Never trust immediate self-assessments right after studying. Introduce a delay of several minutes to clear working memory and test genuine long-term retrieval.',
    detailedResponse: 'Nelson & Dunlosky (1991) proved that immediate Judgments of Learning (JOLs) measure short-term working memory and perceptual recency rather than long-term storage. By introducing a delay before self-assessing, working memory buffers clear, forcing the brain to attempt uncued long-term retrieval and yielding highly accurate metacognitive calibration.',
    socraticChallenge: 'When you finish reading a technical article, what would happen if you waited 10 minutes before asking yourself if you truly understand it?',
    referencedSection: 'Lesson 1.2 • Section 3: Metacognitive Calibration & Delayed JOLs',
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
    summary: 'Grounded in Lesson 1.1 cognitive science syllabus.',
    takeaway: 'This lesson focuses on five core mechanisms: Attention, Working Memory, Long-Term Schemas, Retrieval Practice, and Calibrated Feedback.',
    detailedResponse: `I searched the Phase 1 lesson corpus for "${userQuery}". This lesson specifically focuses on five foundational mechanisms of human cognition:\n\n1. Attention (the selective sensory gate)\n2. Working Memory (the fragile ~4-chunk scratchpad)\n3. Long-Term Memory (schema consolidation)\n4. Retrieval Practice (the testing effect)\n5. Calibrated Feedback (discrepancy minimization)\n\nIn Phase 2, live multi-turn LLM generation will answer open-ended queries beyond this syllabus. For now, try exploring one of the quick inquiries above.`,
    socraticChallenge: 'How does your inquiry connect to Attention, Working Memory, Schemas, Retrieval, or Feedback?',
    referencedSection: 'Lesson 1.1 • Overview of Cognitive Architecture',
  };
}
