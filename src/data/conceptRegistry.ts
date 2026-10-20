import type { ConceptId, ReviewPromptData } from '../types/memory.ts';

export const CANONICAL_REVIEW_PROMPTS: Record<ConceptId, ReviewPromptData> = {
  'concept:attention_serial_bottleneck': {
    conceptId: 'concept:attention_serial_bottleneck',
    title: 'Attention Gating & Serial Processing',
    prompt: 'Explain what happens to cognitive throughput and working memory when an engineer attempts to multitask between coding and reviewing chat messages.',
    keyCriteria: [
      'Identifies controlled attention as strictly serial (single-channel)',
      'Identifies attention residue / task-switching cost',
      'Identifies that switching clears or degrades working memory buffers',
    ],
    canonicalAnswer: 'Controlled attention acts as a serial bottleneck. The brain cannot process two cognitively demanding, novel tasks in parallel. Rapid task-switching leaves attention residue, flushes working memory scratchpads, and forces costly reloading of context.',
    lessonSectionAnchor: 'Lesson 1.1 • Section 1: Attention Gate',
    relatedMisconception: 'misconception:multitasking_parallel_myth',
    discrepancyPrompt: 'Previously you may have believed that high-performing individuals can process two complex cognitive streams in parallel. Does controlled attention support parallel processing or serial switching?',
  },
  'concept:working_memory_capacity_limits': {
    conceptId: 'concept:working_memory_capacity_limits',
    title: 'Working Memory Capacity & Chunking',
    prompt: 'How many novel, unrelated elements can conscious working memory hold simultaneously, and how do experts bypass this physical limit?',
    keyCriteria: [
      'States empirical limit of approximately 3 to 4 novel items (Cowan, 2001; Sweller, 1988)',
      'Explains that chunking organizes multiple elements into a single meaningful unit',
      'Notes that chunks reference pre-existing structures in long-term memory',
    ],
    canonicalAnswer: 'Working memory is physically constrained to holding roughly 3 to 4 novel elements at once (Cowan, 2001). Experts overcome this bottleneck through chunking: organizing multiple individual components into a single coherent schema stored in long-term memory, which occupies only a single working-memory slot.',
    lessonSectionAnchor: 'Lesson 1.1 • Section 2: Working Memory Scratchpad',
    relatedMisconception: 'misconception:working_memory_unlimited_illusion',
    discrepancyPrompt: 'Previously you may have assumed working memory has vast or unlimited capacity. What is the actual empirical limit of novel elements held in active scratchpad buffers?',
  },
  'concept:schema_chunking_consolidation': {
    conceptId: 'concept:schema_chunking_consolidation',
    title: 'Long-Term Memory Consolidation & Replay',
    prompt: 'How do initial declarative memory traces in the hippocampus transform into durable neocortical schemas, and what role do rest and sleep play?',
    keyCriteria: [
      'Identifies initial hippocampal dependency for new declarative memories',
      'Mentions neural replay during non-REM sleep and quiet wakefulness',
      'Explains schema integration into distributed neocortical networks',
    ],
    canonicalAnswer: 'New declarative memories are initially bound by the hippocampus. During offline periods (quiet rest and sleep), coordinated neural replay reactivates these traces, gradually transferring and integrating them into distributed neocortical schema networks.',
    lessonSectionAnchor: 'Lesson 1.1 • Section 3: Long-Term Schema Network',
    relatedMisconception: 'misconception:video_recorder_memory_myth',
    discrepancyPrompt: 'Previously you may have assumed memory acts like a digital camera recording static pixels. How does memory consolidation actually restructure knowledge traces over time?',
  },
  'concept:testing_effect_retrieval_strength': {
    conceptId: 'concept:testing_effect_retrieval_strength',
    title: 'The Testing Effect & Storage vs. Retrieval Strength',
    prompt: 'Why does rereading and highlighting create an illusion of competence, and what makes generative retrieval practice qualitatively different for long-term retention?',
    keyCriteria: [
      'Distinguishes perceptual fluency (recognition) from generative recall (retrieval)',
      'Distinguishes storage strength from retrieval strength (Bjork)',
      'Notes that active recall restabilizes and updates neural pathways (reconsolidation)',
    ],
    canonicalAnswer: 'Rereading creates perceptual fluency—the text feels familiar, which metacognitively mimics mastery. However, recognition requires zero generative effort. Retrieval practice forces the brain to reconstruct pathways from partial cues, triggering reconsolidation and significantly slowing the forgetting curve (Roediger & Karpicke, 2006).',
    lessonSectionAnchor: 'Lesson 1.1 • Section 4: Retrieval Practice (The Testing Effect)',
    relatedMisconception: 'misconception:rereading_fluency_illusion',
    discrepancyPrompt: 'Previously you may have believed that repeated rereading strengthens memory as much as self-testing. What cognitive mechanism explains why effortful recall produces superior delayed retention?',
  },
  'concept:calibrated_feedback_prediction_error': {
    conceptId: 'concept:calibrated_feedback_prediction_error',
    title: 'Prediction Errors & The Hypercorrection Effect',
    prompt: 'What happens in cortical monitoring circuits when an intuitive prediction turns out to be wrong, and why do high-confidence errors get corrected more durably when given explanatory feedback?',
    keyCriteria: [
      'Explains prediction error discrepancy detection (anterior cingulate / prefrontal cortices)',
      'Notes that high-confidence errors capture heightened attention',
      'Describes the hypercorrection effect (Butterfield & Metcalfe, 2001) with explanatory feedback',
    ],
    canonicalAnswer: 'When an intuitive prediction fails, discrepancy signals in cortical error monitoring circuits (anterior cingulate and prefrontal cortices) update schema weights. High-confidence errors trigger the hypercorrection effect: because the learner expected to be right, the unexpected failure commands intense attentional capture, resulting in more durable synaptic updating once explanatory feedback is provided.',
    lessonSectionAnchor: 'Lesson 1.1 • Section 5: Calibrated Feedback & Discrepancies',
    relatedMisconception: 'misconception:feedback_avoidance_confirmation_bias',
    discrepancyPrompt: 'Previously you may have thought errors should be avoided during learning. How does making and confronting a high-confidence error with feedback enhance retention?',
  },
};
