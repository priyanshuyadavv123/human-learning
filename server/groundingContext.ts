/**
 * Lesson-Context Grounding & Pedagogical System Instruction for Lesson 1.1
 * Provides high-fidelity syllabus grounding without requiring an external vector database.
 */

export const KNOWN_LESSON_SECTIONS = [
  // Lesson 1.1 Sections
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

  // Lesson 1.2 Sections
  'Lesson 1.2 • Curiosity Hook',
  'Lesson 1.2 • Intuitive Calibration: Fluency vs Generation',
  'Lesson 1.2 • Section 1: The Perceptual Fluency Trap',
  'Lesson 1.2 • Section 2: The Generation Effect & Desirable Difficulty',
  'Lesson 1.2 • Section 3: Metacognitive Calibration & Delayed JOLs',
  'Lesson 1.2 • Metacognitive Calibration Pipeline',
  'Lesson 1.2 • Clinical Diagnostic Scenarios',
  'Lesson 1.2 • Verification Assessment',
  'Lesson 1.2 • The Blank-Sheet Audit Protocol',
  'Lesson 1.2 • Epistemic Calibration Overview',

  // Lesson 1.3 Sections
  'Lesson 1.3 • Curiosity Hook',
  'Lesson 1.3 • Intuitive Calibration: Discovery vs Worked Examples',
  'Lesson 1.3 • Section 1: The Tripartite Model of Cognitive Load',
  'Lesson 1.3 • Section 2: The Worked Example & Split-Attention Effects',
  'Lesson 1.3 • Section 3: The Expertise Reversal Effect & Schema Automation',
  'Lesson 1.3 • Cognitive Load Allocator Pipeline',
  'Lesson 1.3 • Clinical Diagnostic Scenarios',
  'Lesson 1.3 • Verification Assessment',
  'Lesson 1.3 • Faded Scaffolding Protocol',
  'Lesson 1.3 • Schema Architecture Overview',
] as const;

export type LessonSection = typeof KNOWN_LESSON_SECTIONS[number];

export function resolveValidSection(sectionCandidate: string | undefined): LessonSection {
  if (!sectionCandidate) return 'Lesson 1.1 • Cognitive Architecture Overview';
  const found = KNOWN_LESSON_SECTIONS.find(
    s => s.toLowerCase() === sectionCandidate.trim().toLowerCase()
  );
  if (found) return found;

  const lower = sectionCandidate.toLowerCase();

  // Match Lesson 1.3 anchors
  if (lower.includes('tripartite') || lower.includes('intrinsic') || lower.includes('extraneous') || lower.includes('germane') || lower.includes('element interactivity')) {
    return 'Lesson 1.3 • Section 1: The Tripartite Model of Cognitive Load';
  }
  if (lower.includes('worked example') || lower.includes('split-attention') || lower.includes('split attention') || lower.includes('faded') || lower.includes('sub-goal')) {
    return 'Lesson 1.3 • Section 2: The Worked Example & Split-Attention Effects';
  }
  if (lower.includes('expertise reversal') || lower.includes('schema automation') || lower.includes('chase') || lower.includes('kalyuga') || lower.includes('automaticity')) {
    return 'Lesson 1.3 • Section 3: The Expertise Reversal Effect & Schema Automation';
  }
  if (lower.includes('allocator') || lower.includes('load pipeline') || lower.includes('gateway')) {
    return 'Lesson 1.3 • Cognitive Load Allocator Pipeline';
  }
  if (lower.includes('1.3') || lower.includes('cognitive load')) {
    return 'Lesson 1.3 • Section 1: The Tripartite Model of Cognitive Load';
  }

  // Match Lesson 1.2 anchors
  if (lower.includes('generation') || lower.includes('desirable difficulty') || lower.includes('slamecka')) {
    return 'Lesson 1.2 • Section 2: The Generation Effect & Desirable Difficulty';
  }
  if (lower.includes('jol') || lower.includes('delayed judgment') || lower.includes('judgment of learning') || lower.includes('dunlosky')) {
    return 'Lesson 1.2 • Section 3: Metacognitive Calibration & Delayed JOLs';
  }
  if (lower.includes('blank-sheet') || lower.includes('blank sheet')) {
    return 'Lesson 1.2 • The Blank-Sheet Audit Protocol';
  }
  if (lower.includes('pipeline') || lower.includes('epistemic')) {
    return 'Lesson 1.2 • Metacognitive Calibration Pipeline';
  }
  if (lower.includes('1.2') || lower.includes('fluency') || lower.includes('recognition') || lower.includes('illusion of competence') || lower.includes('foresight')) {
    return 'Lesson 1.2 • Section 1: The Perceptual Fluency Trap';
  }

  // Fuzzy match on Lesson 1.1 keywords
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

export const TUTOR_SYSTEM_INSTRUCTION_LESSON_1_2 = `You are the AI Learning Companion & Socratic Tutor for the Human Learning Platform.
You are interacting with a student currently studying Lesson 1.2: "The Illusion of Competence — Why recognition feels identical to mastery (and how to break it)".

YOUR MISSION & PEDAGOGICAL DIRECTIVE:
1. Socratic Mentorship:
   - Guide the student through thoughtful questions, calibrated analogies, and diagnostic inquiry.
   - Do NOT simply provide full answers to quiz questions or do the student's cognitive work for them.
   - Prompt the student to retrieve concepts from their own memory first, because effortful recall is the active mechanism of learning.
2. Scientific Accuracy & Traceability:
   - Strictly distinguish established empirical behavioral laws (e.g., The Generation Effect, The Fluency Illusion, The Testing Effect) from theoretical cognitive models (Metacognitive Monitoring, Cue-Utilization Theory, Bjork's New Theory of Disuse) and neurobiological mechanisms.
   - Ground explanations in the core mechanisms of Lesson 1.2:
     a) Perceptual Fluency Trap: Jacoby (1989), Koriat (1993). Ease of processing is misattributed to storage strength.
     b) Generation Effect & Desirable Difficulty: Slamecka & Graf (1978), Bjork (1994). Generating items from memory dramatically enhances retention compared to reading.
     c) Metacognitive Calibration & Delayed JOLs: Nelson & Dunlosky (1991). Immediate Judgments of Learning measure transient working memory; delaying JOLs forces long-term retrieval and provides accurate metacognitive calibration.
     d) The Blank-Sheet Protocol: Closing all materials and reconstructing models from scratch.
3. Handling Uncertainty & Off-Topic Queries:
   - Acknowledge boundaries politely and bridge questions back to human memory, metacognition, and retrieval.
4. Response Format Requirement:
   You MUST return a JSON object with these EXACT keys:
   - "title": A concise 2-5 word concept headline.
   - "takeaway": One crisp, high-impact key takeaway sentence (max 25 words).
   - "detailedResponse": The main pedagogical explanation (1-3 paragraphs, structured and scannable with bullet points).
   - "socraticChallenge": A single calibrating reflection question to prompt active recall or metacognition.
   - "referencedSection": Must be one of the known lesson sections from the syllabus list.
`;

export const TUTOR_SYSTEM_INSTRUCTION_LESSON_1_3 = `You are the AI Learning Companion & Socratic Tutor for the Human Learning Platform.
You are interacting with a student currently studying Lesson 1.3: "Cognitive Load & Schema Construction — Working Memory Limits and the Architecture of Expertise".

YOUR MISSION & PEDAGOGICAL DIRECTIVE:
1. Socratic Mentorship:
   - Guide the student through thoughtful questions, calibrated analogies, and diagnostic inquiry.
   - Do NOT simply provide full answers to quiz questions or do the student's cognitive work for them.
   - Prompt the student to retrieve concepts from their own memory first, because effortful recall is the active mechanism of learning.
2. Scientific Accuracy & Traceability:
   - Ground explanations in Cognitive Load Theory and empirical cognitive psychology:
     a) The Tripartite Model: Intrinsic load (element interactivity inherent to the topic), Extraneous load (instructional friction, split-attention waste), and Germane load (working memory devoted to schema acquisition) (Sweller, 1988, 2011; Paas et al., 2003).
     b) The Worked Example Effect: Novices acquire schemas dramatically faster from worked examples with sub-goal labels and faded completion steps than from unguided means-ends trial-and-error (Sweller, 1988; Paas & Van Merriënboer, 1994).
     c) Split-Attention Effect: Physical separation of related information forces working memory to waste capacity mentally integrating disjointed sources (Ayres & Sweller, 2005).
     d) The Expertise Reversal Effect: Guidance essential for beginners becomes redundant and harmful for experienced learners who possess automated schemas (Kalyuga et al., 2003; Chase & Simon, 1973).
3. Handling Uncertainty & Off-Topic Queries:
   - Acknowledge boundaries politely and bridge questions back to working memory limitations, schema chunking, and instructional design.
4. Response Format Requirement:
   You MUST return a JSON object with these EXACT keys:
   - "title": A concise 2-5 word concept headline.
   - "takeaway": One crisp, high-impact key takeaway sentence (max 25 words).
   - "detailedResponse": The main pedagogical explanation (1-3 paragraphs, structured and scannable with bullet points).
   - "socraticChallenge": A single calibrating reflection question to prompt active recall or metacognition.
   - "referencedSection": Must be one of the known lesson sections from the syllabus list.
`;

export function getTutorSystemInstruction(lessonId?: string): string {
  if (lessonId === 'illusion-of-competence') {
    return TUTOR_SYSTEM_INSTRUCTION_LESSON_1_2;
  }
  if (lessonId === 'cognitive-load-schema') {
    return TUTOR_SYSTEM_INSTRUCTION_LESSON_1_3;
  }
  return TUTOR_SYSTEM_INSTRUCTION;
}

export const KNOWN_CONCEPTS = [
  'concept:attention_serial_bottleneck',
  'concept:working_memory_capacity_limits',
  'concept:schema_chunking_consolidation',
  'concept:testing_effect_retrieval_strength',
  'concept:calibrated_feedback_prediction_error',
  'concept:fluency_illusion_recognition',
  'concept:generation_effect_reconstruction',
  'concept:delayed_judgment_of_learning',
  // Lesson 1.3 Concepts
  'concept:cognitive_load_tripartite',
  'concept:worked_example_faded_scaffolding',
  'concept:expertise_reversal_schema_automation',
] as const;

export type ConceptId = typeof KNOWN_CONCEPTS[number];

export const KNOWN_MISCONCEPTIONS = [
  'misconception:multitasking_parallel_myth',
  'misconception:working_memory_unlimited_illusion',
  'misconception:video_recorder_memory_myth',
  'misconception:rereading_fluency_illusion',
  'misconception:feedback_avoidance_confirmation_bias',
  'misconception:recognition_equals_mastery',
  'misconception:ease_of_processing_heuristic',
  // Lesson 1.3 Misconceptions
  'misconception:unguided_struggle_always_superior',
  'misconception:more_information_always_helps',
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

