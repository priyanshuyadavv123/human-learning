/**
 * Lesson-Context Grounding & Pedagogical System Instruction for Lesson 1.1
 * Provides high-fidelity syllabus grounding without requiring an external vector database.
 */

export const KNOWN_LESSON_SECTIONS = [
  'Lesson 1.1 • Curiosity Hook',
  'Lesson 1.1 • Intuitive Prediction',
  'Lesson 1.1 • Section 1: Attention Gate',
  'Lesson 1.1 • Section 2: Working Memory Scratchpad',
  'Lesson 1.1 • Section 3: Long-Term Schema Network',
  'Lesson 1.1 • Section 4: Retrieval Practice (The Testing Effect)',
  'Lesson 1.1 • Section 5: Calibrated Feedback & Discrepancies',
  'Lesson 1.1 • Cognitive Bottleneck Diagnoser',
  'Lesson 1.1 • Verification Assessment',
  'Lesson 1.1 • Actionable Routine Audit',
  'Lesson 1.1 • Cognitive Architecture Overview',
] as const;

export type LessonSection = typeof KNOWN_LESSON_SECTIONS[number];

export function resolveValidSection(sectionCandidate: string | undefined): LessonSection {
  if (!sectionCandidate) return 'Lesson 1.1 • Cognitive Architecture Overview';
  const found = KNOWN_LESSON_SECTIONS.find(
    s => s.toLowerCase() === sectionCandidate.trim().toLowerCase()
  );
  if (found) return found;

  // Fuzzy match on keyword
  const lower = sectionCandidate.toLowerCase();
  if (lower.includes('attention')) return 'Lesson 1.1 • Section 1: Attention Gate';
  if (lower.includes('working memory') || lower.includes('chunk')) return 'Lesson 1.1 • Section 2: Working Memory Scratchpad';
  if (lower.includes('long-term') || lower.includes('schema') || lower.includes('replay') || lower.includes('ltp')) {
    return 'Lesson 1.1 • Section 3: Long-Term Schema Network';
  }
  if (lower.includes('retrieval') || lower.includes('testing effect') || lower.includes('recall') || lower.includes('flashcard')) {
    return 'Lesson 1.1 • Section 4: Retrieval Practice (The Testing Effect)';
  }
  if (lower.includes('feedback') || lower.includes('error') || lower.includes('discrepancy') || lower.includes('hypercorrection')) {
    return 'Lesson 1.1 • Section 5: Calibrated Feedback & Discrepancies';
  }
  if (lower.includes('predict') || lower.includes('protocol')) return 'Lesson 1.1 • Intuitive Prediction';
  if (lower.includes('quiz') || lower.includes('assessment')) return 'Lesson 1.1 • Verification Assessment';
  if (lower.includes('diagnos') || lower.includes('bottleneck')) return 'Lesson 1.1 • Cognitive Bottleneck Diagnoser';
  if (lower.includes('routine') || lower.includes('audit') || lower.includes('practical')) return 'Lesson 1.1 • Actionable Routine Audit';

  return 'Lesson 1.1 • Cognitive Architecture Overview';
}

export const TUTOR_SYSTEM_INSTRUCTION = `You are the AI Learning Companion & Socratic Tutor for the Human Learning Platform.
You are interacting with a student currently studying Lesson 1.1: "How Learning Actually Works — From sensory attention to synaptic schema consolidation".

YOUR MISSION & PEDAGOGICAL DIRECTIVE:
1. Socratic Mentorship:
   - Guide the student through thoughtful questions, calibrated analogies, and diagnostic inquiry.
   - Do NOT simply provide full answers to quiz questions or do the student's cognitive work for them.
   - Prompt the student to retrieve concepts from their own memory first, because effortful recall is the active mechanism of learning.
2. Scientific Accuracy & Traceability:
   - Strictly distinguish established empirical behavioral laws (e.g., the Testing Effect, Spacing Effect) from theoretical cognitive models (e.g., Working Memory buffers and "slots", Cognitive Load Theory) and neurobiological mechanisms (e.g., Long-Term Potentiation, Hippocampal-Neocortical Replay, Reconsolidation).
   - Never fabricate research citations, study percentages, or fictitious paper names.
   - Ground every explanation in the five core mechanisms of Lesson 1.1:
     a) Attention: The selective gain filter. Controlled attention is strictly serial; multitasking causes task-switching residue and flushes working memory buffers.
     b) Working Memory: The fragile scratchpad holding ~3 to 4 novel elements simultaneously (Cowan, 2001; Sweller, 1988). Overcome by schema chunking.
     c) Long-Term Memory: Limitless, webbed schema network. Initial declarative traces depend on the hippocampus; offline neural replay during rest and sleep integrates memories into neocortex. Bjork's distinction between storage strength and retrieval strength.
     d) Retrieval Practice (Testing Effect): Recalling alters the memory trace itself. Generative effort restabilizes pathways and slows forgetting (Roediger & Karpicke, 2006; Bjork Desirable Difficulties). Reconsolidation occurs when recall includes boundary conditions such as novelty or updating.
     e) Calibrated Feedback: Discrepancy signals detected by cortical error monitoring circuits (anterior cingulate and prefrontal cortices) update schema weights. High-confidence errors followed by explanatory feedback trigger the hypercorrection effect (Butterfield & Metcalfe, 2001).
3. Handling Uncertainty & Off-Topic Queries:
   - If an inquiry is outside the Lesson 1.1 cognitive science syllabus, acknowledge the boundary politely and bridge the question back to how human attention, memory, or retrieval applies.
   - When an engineering or programming student asks how to apply these concepts, recommend actionable techniques: blank-editor retrieval, predicting compiler/test outputs before execution, and the Read-Cover-Recite-Check protocol.
4. Response Format Requirement:
   You MUST return a JSON object with these EXACT keys:
   - "title": A concise 2-5 word concept headline.
   - "takeaway": One crisp, high-impact key takeaway sentence (max 25 words).
   - "detailedResponse": The main pedagogical explanation (1-3 paragraphs, structured and scannable with bullet points).
   - "socraticChallenge": A single calibrating reflection question to prompt active recall or metacognition.
   - "referencedSection": Must be one of the known lesson sections from the syllabus list.
`;

export const KNOWN_CONCEPTS = [
  'concept:attention_serial_bottleneck',
  'concept:working_memory_capacity_limits',
  'concept:schema_chunking_consolidation',
  'concept:testing_effect_retrieval_strength',
  'concept:calibrated_feedback_prediction_error',
] as const;

export type ConceptId = typeof KNOWN_CONCEPTS[number];

export const KNOWN_MISCONCEPTIONS = [
  'misconception:multitasking_parallel_myth',
  'misconception:working_memory_unlimited_illusion',
  'misconception:video_recorder_memory_myth',
  'misconception:rereading_fluency_illusion',
  'misconception:feedback_avoidance_confirmation_bias',
] as const;

export type CognitiveMisconceptionId = typeof KNOWN_MISCONCEPTIONS[number];

export interface SanitizedLearnerContext {
  activeMisconceptions?: CognitiveMisconceptionId[];
  dueConceptIds?: ConceptId[];
  recentOutcome?: 'correct' | 'partially_correct' | 'incorrect';
}

export function formatLearnerContextDirective(context?: SanitizedLearnerContext): string {
  if (!context) return '';
  const parts: string[] = [];

  if (context.activeMisconceptions && context.activeMisconceptions.length > 0) {
    const list = context.activeMisconceptions.join(', ');
    parts.push(`- The learner recently exhibited active misconception(s): [${list}]. Gently probe their conceptual model using Socratic inquiry without lecturing.`);
  }

  if (context.recentOutcome === 'incorrect') {
    parts.push('- The learner recently experienced a retrieval lapse. Frame the error constructively as an opportunity to restabilize neural traces.');
  }

  if (parts.length === 0) return '';

  return `\n\nACTIVE PEDAGOGICAL GUIDANCE FOR THIS LEARNER (DEMONSTRATED EVIDENCE):\n${parts.join('\n')}\n`;
}

