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

  // Lesson 2.1 Sections
  'Lesson 2.1 • Curiosity Hook',
  'Lesson 2.1 • Intuitive Calibration: SSSS vs STTT',
  'Lesson 2.1 • Section 1: The Testing Effect & Memory Modification',
  'Lesson 2.1 • Section 2: Storage vs. Retrieval Strength',
  'Lesson 2.1 • Section 3: Desirable Difficulties & Synaptic Reconsolidation',
  'Lesson 2.1 • Retrieval & Modification Engine Diagram',
  'Lesson 2.1 • Retrieval Engineering Diagnostic Scenarios',
  'Lesson 2.1 • Verification Assessment',
  'Lesson 2.1 • Free-Recall Calibration Protocol',
  'Lesson 2.1 • Testing Effect Overview',

  // Lesson 2.2 Sections
  'Lesson 2.2 • Curiosity Hook',
  'Lesson 2.2 • Intuitive Calibration: Massed vs Expanding Spaced',
  'Lesson 2.2 • Section 1: The Ebbinghaus Decay Curve & Mathematical Kinetics',
  'Lesson 2.2 • Section 2: Expanding Interval Algorithms & Stability Multipliers',
  'Lesson 2.2 • Section 3: The Spacing Effect & Empirical Lag Ratios',
  'Lesson 2.2 • Spaced Scheduling & Stability Engine Diagram',
  'Lesson 2.2 • Spaced Scheduling Diagnostic Scenarios',
  'Lesson 2.2 • Verification Assessment',
  'Lesson 2.2 • Personal Spaced Retrieval Calendar Protocol',
  'Lesson 2.2 • Spaced Scheduling Overview',

  // Lesson 3.1 Sections
  'Lesson 3.1 • Curiosity Hook',
  'Lesson 3.1 • Intuitive Calibration: Passive vs Discrepancy Feedback',
  'Lesson 3.1 • Section 1: Reward Prediction Errors & Dopaminergic Plasticity',
  'Lesson 3.1 • Section 2: The Hypercorrection Effect & Epistemic Surprise',
  'Lesson 3.1 • Section 3: The Architecture of Calibrated Feedback',
  'Lesson 3.1 • Error-Calibrated Learning Engine Diagram',
  'Lesson 3.1 • Error Calibration Diagnostic Scenarios',
  'Lesson 3.1 • Verification Assessment',
  'Lesson 3.1 • Daily Prediction Error Journal Protocol',
  'Lesson 3.1 • Error-Calibrated Feedback Overview',

  // Lesson 3.2 Sections
  'Lesson 3.2 • Curiosity Hook',
  'Lesson 3.2 • Intuitive Calibration: Experience vs Deliberate Practice',
  'Lesson 3.2 • Section 1: Ericsson’s Deliberate Practice Framework',
  'Lesson 3.2 • Section 2: Zimmerman’s Cybernetic Self-Regulated Learning Architecture',
  'Lesson 3.2 • Section 3: Metacognitive Calibration & The Personal Learning Stack',
  'Lesson 3.2 • Personal Learning Operating System Diagram',
  'Lesson 3.2 • Self-Regulated Learning Diagnostic Scenarios',
  'Lesson 3.2 • Verification Assessment',
  'Lesson 3.2 • Daily Deliberate Practice Sprint Protocol',
  'Lesson 3.2 • Deliberate Practice & Self-Regulation Overview',

  // Lesson 4.1 Sections
  'Lesson 4.1 • Curiosity Hook',
  'Lesson 4.1 • Intuitive Calibration: Partial Attention vs Monotask',
  'Lesson 4.1 • Section 1: Broadbent’s Filter & Posner’s Tripartite Attentional Networks',
  'Lesson 4.1 • Section 2: Sophie Leroy’s Attention Residue & Task-Switching Economics',
  'Lesson 4.1 • Section 3: Prefrontal Biased Competition & Executive Energy Recovery',
  'Lesson 4.1 • Attentional Filter & Executive Control Diagram',
  'Lesson 4.1 • Attentional Dynamics Diagnostic Scenarios',
  'Lesson 4.1 • Verification Assessment',
  'Lesson 4.1 • Attention Shielding Monotask Protocol',
  'Lesson 4.1 • Attentional Bottleneck & Focus Overview',

  // Lesson 4.2 Sections
  'Lesson 4.2 • Curiosity Hook',
  'Lesson 4.2 • Intuitive Calibration: Real-Time SLA vs Synchronized Batches',
  'Lesson 4.2 • Section 1: The 23-Minute Recovery Latency (Gloria Mark)',
  'Lesson 4.2 • Section 2: Deep Work Architecture & Scheduling Philosophies (Cal Newport)',
  'Lesson 4.2 • Section 3: The Attentional Commons & Choice Architecture (Matthew Crawford)',
  'Lesson 4.2 • Deep Work Architecture & Interruption Defense System Diagram',
  'Lesson 4.2 • Distraction Pattern Diagnostic Scenarios',
  'Lesson 4.2 • Verification Assessment',
  'Lesson 4.2 • Deep Work Chamber Protocol',
  'Lesson 4.2 • Distraction Economics & Deep Work Overview',

  // Lesson 5.1 Sections
  'Lesson 5.1 • Curiosity Hook',
  'Lesson 5.1 • Intuitive Calibration: Massed Cramming vs Spaced Late-LTP Induction',
  'Lesson 5.1 • Section 1: Donald Hebb & Bliss & Lømo’s Discovery of LTP',
  'Lesson 5.1 • Section 2: The NMDA Receptor as a Molecular Coincidence Detector',
  'Lesson 5.1 • Section 3: Early-LTP vs Late-LTP: The Molecular Boundary of Permanent Mastery',
  'Lesson 5.1 • Synaptic Plasticity & LTP Induction Pipeline Diagram',
  'Lesson 5.1 • Synaptic Plasticity Diagnostic Scenarios',
  'Lesson 5.1 • Verification Assessment',
  'Lesson 5.1 • Synaptic Consolidation Protocol',
  'Lesson 5.1 • Long-Term Potentiation & Synaptic Plasticity Overview',
] as const;

export type LessonSection = typeof KNOWN_LESSON_SECTIONS[number];

export function resolveValidSection(sectionCandidate: string | undefined): LessonSection {
  if (!sectionCandidate) return 'Lesson 1.1 • Cognitive Architecture Overview';
  const found = KNOWN_LESSON_SECTIONS.find(
    s => s.toLowerCase() === sectionCandidate.trim().toLowerCase()
  );
  if (found) return found;

  const lower = sectionCandidate.toLowerCase();

  // Match Lesson 5.1 anchors
  if (lower.includes('bliss') || lower.includes('lomo') || lower.includes('lømo') || lower.includes('hebb') || lower.includes('perforant') || lower.includes('dentate gyrus') || lower.includes('tetanic')) {
    return 'Lesson 5.1 • Section 1: Donald Hebb & Bliss & Lømo’s Discovery of LTP';
  }
  if (lower.includes('nmda') || lower.includes('coincidence detector') || lower.includes('magnesium') || lower.includes('mg2+') || lower.includes('camkii') || lower.includes('ampa insertion')) {
    return 'Lesson 5.1 • Section 2: The NMDA Receptor as a Molecular Coincidence Detector';
  }
  if (lower.includes('early-ltp') || lower.includes('late-ltp') || lower.includes('creb') || lower.includes('synaptic tag') || lower.includes('mushroom spine') || (lower.includes('protein synthesis') && (lower.includes('synapse') || lower.includes('ltp') || lower.includes('spine')))) {
    return 'Lesson 5.1 • Section 3: Early-LTP vs Late-LTP: The Molecular Boundary of Permanent Mastery';
  }
  if (lower.includes('synaptic plasticity & ltp induction pipeline diagram') || lower.includes('ltp induction diagram') || lower.includes('synaptic plasticity diagram')) {
    return 'Lesson 5.1 • Synaptic Plasticity & LTP Induction Pipeline Diagram';
  }
  if (lower.includes('5.1') || lower.includes('synaptic consolidation protocol') || lower.includes('synaptic plasticity') || lower.includes('long-term potentiation')) {
    return 'Lesson 5.1 • Section 2: The NMDA Receptor as a Molecular Coincidence Detector';
  }

  // Match Lesson 4.2 anchors
  if (lower.includes('gloria mark') || lower.includes('23 minute') || lower.includes('resumption latency') || lower.includes('47 second') || lower.includes('compensatory stress') || lower.includes('screen-switching')) {
    return 'Lesson 4.2 • Section 1: The 23-Minute Recovery Latency (Gloria Mark)';
  }
  if (lower.includes('deep work') || lower.includes('newport') || lower.includes('rhythmic') || lower.includes('bimodal') || lower.includes('monastic') || lower.includes('journalistic') || lower.includes('shutdown ritual') || lower.includes('metric black hole')) {
    return 'Lesson 4.2 • Section 2: Deep Work Architecture & Scheduling Philosophies (Cal Newport)';
  }
  if (lower.includes('crawford') || lower.includes('attentional commons') || lower.includes('asymmetric friction') || lower.includes('lockbox') || (lower.includes('choice architecture') && (lower.includes('phone') || lower.includes('notification') || lower.includes('slack') || lower.includes('friction')))) {
    return 'Lesson 4.2 • Section 3: The Attentional Commons & Choice Architecture (Matthew Crawford)';
  }
  if (lower.includes('deep work architecture & interruption defense system diagram') || lower.includes('interruption defense system diagram') || lower.includes('deep work diagram')) {
    return 'Lesson 4.2 • Deep Work Architecture & Interruption Defense System Diagram';
  }
  if (lower.includes('4.2') || lower.includes('deep work chamber') || lower.includes('distraction economics')) {
    return 'Lesson 4.2 • Section 2: Deep Work Architecture & Scheduling Philosophies (Cal Newport)';
  }

  // Match Lesson 4.1 anchors
  if (lower.includes('broadbent') || lower.includes('filter model') || lower.includes('posner') || lower.includes('dichotic') || lower.includes('alerting') || lower.includes('orienting') || lower.includes('cocktail party')) {
    return 'Lesson 4.1 • Section 1: Broadbent’s Filter & Posner’s Tripartite Attentional Networks';
  }
  if (lower.includes('leroy') || lower.includes('attention residue') || lower.includes('task-switching') || lower.includes('task switching') || lower.includes('switching cost') || lower.includes('zeigarnik')) {
    return 'Lesson 4.1 • Section 2: Sophie Leroy’s Attention Residue & Task-Switching Economics';
  }
  if (lower.includes('biased competition') || lower.includes('glycogen') || lower.includes('central fatigue') || lower.includes('miller') || lower.includes('cohen') || lower.includes('executive fatigue') || lower.includes('choice architecture')) {
    return 'Lesson 4.1 • Section 3: Prefrontal Biased Competition & Executive Energy Recovery';
  }
  if (lower.includes('attentional filter & executive control diagram') || lower.includes('attentional filter diagram')) {
    return 'Lesson 4.1 • Attentional Filter & Executive Control Diagram';
  }
  if (lower.includes('4.1') || lower.includes('attention shielding protocol')) {
    return 'Lesson 4.1 • Section 1: Broadbent’s Filter & Posner’s Tripartite Attentional Networks';
  }

  // Match Lesson 3.2 anchors
  if (lower.includes('ericsson') || lower.includes('deliberate practice') || lower.includes('10,000 hour') || lower.includes('edge of ability') || lower.includes('mental representation')) {
    return 'Lesson 3.2 • Section 1: Ericsson’s Deliberate Practice Framework';
  }
  if (lower.includes('zimmerman') || lower.includes('forethought') || lower.includes('self-regulated') || lower.includes('self-regulation') || lower.includes('srl') || lower.includes('process goal')) {
    return 'Lesson 3.2 • Section 2: Zimmerman’s Cybernetic Self-Regulated Learning Architecture';
  }
  if (lower.includes('dunlosky') || lower.includes('calibration curve') || lower.includes('metacognitive calibration') || lower.includes('operating system') || lower.includes('plos') || lower.includes('personal learning stack')) {
    return 'Lesson 3.2 • Section 3: Metacognitive Calibration & The Personal Learning Stack';
  }
  if (lower.includes('personal learning operating system diagram') || lower.includes('plos diagram')) {
    return 'Lesson 3.2 • Personal Learning Operating System Diagram';
  }
  if (lower.includes('3.2') || lower.includes('deliberate sprint protocol')) {
    return 'Lesson 3.2 • Section 1: Ericsson’s Deliberate Practice Framework';
  }

  // Match Lesson 3.1 anchors
  if (lower.includes('prediction error') || lower.includes('rpe') || lower.includes('schultz') || lower.includes('dopamine') || lower.includes('delta =') || lower.includes('reward prediction')) {
    return 'Lesson 3.1 • Section 1: Reward Prediction Errors & Dopaminergic Plasticity';
  }
  if (lower.includes('hypercorrection') || lower.includes('butterfield') || lower.includes('metcalfe') || lower.includes('p300') || lower.includes('epistemic surprise') || lower.includes('high confidence error')) {
    return 'Lesson 3.1 • Section 2: The Hypercorrection Effect & Epistemic Surprise';
  }
  if (lower.includes('hattie') || lower.includes('timperley') || lower.includes('feed-up') || lower.includes('feed-back') || lower.includes('feed-forward') || lower.includes('calibrated feedback')) {
    return 'Lesson 3.1 • Section 3: The Architecture of Calibrated Feedback';
  }
  if (lower.includes('error-calibrated learning engine') || lower.includes('error engine') || lower.includes('error-calibrated')) {
    return 'Lesson 3.1 • Error-Calibrated Learning Engine Diagram';
  }
  if (lower.includes('3.1') || lower.includes('prediction error journal') || lower.includes('calibrated error')) {
    return 'Lesson 3.1 • Section 1: Reward Prediction Errors & Dopaminergic Plasticity';
  }

  // Match Lesson 2.2 anchors
  if (lower.includes('ebbinghaus') || lower.includes('forgetting curve') || lower.includes('decay') || lower.includes('permastore') || lower.includes('savings method')) {
    return 'Lesson 2.2 • Section 1: The Ebbinghaus Decay Curve & Mathematical Kinetics';
  }
  if (lower.includes('fsrs') || lower.includes('sm-2') || lower.includes('sm2') || lower.includes('stability multiplier') || lower.includes('wozniak') || lower.includes('ease factor') || lower.includes('lapse')) {
    return 'Lesson 2.2 • Section 2: Expanding Interval Algorithms & Stability Multipliers';
  }
  if (lower.includes('cepeda') || lower.includes('lag ratio') || lower.includes('optimal lag') || lower.includes('spacing effect') || lower.includes('distributed practice')) {
    return 'Lesson 2.2 • Section 3: The Spacing Effect & Empirical Lag Ratios';
  }
  if (lower.includes('stability engine') || lower.includes('spaced scheduling engine')) {
    return 'Lesson 2.2 • Spaced Scheduling & Stability Engine Diagram';
  }
  if (lower.includes('2.2') || lower.includes('spaced scheduling') || lower.includes('spaced repetition')) {
    return 'Lesson 2.2 • Section 2: Expanding Interval Algorithms & Stability Multipliers';
  }

  // Match Lesson 2.1 anchors
  if (lower.includes('roediger') || lower.includes('karpicke') || lower.includes('testing effect') || lower.includes('modifier hypothesis') || lower.includes('retrieval practice')) {
    return 'Lesson 2.1 • Section 1: The Testing Effect & Memory Modification';
  }
  if (lower.includes('storage strength') || lower.includes('retrieval strength') || lower.includes('theory of disuse') || lower.includes('bjork')) {
    return 'Lesson 2.1 • Section 2: Storage vs. Retrieval Strength';
  }
  if (lower.includes('reconsolidation') || lower.includes('destabilization') || lower.includes('nader') || lower.includes('dudai') || lower.includes('labile')) {
    return 'Lesson 2.1 • Section 3: Desirable Difficulties & Synaptic Reconsolidation';
  }
  if (lower.includes('modification engine') || lower.includes('retrieval engine')) {
    return 'Lesson 2.1 • Retrieval & Modification Engine Diagram';
  }
  if (lower.includes('2.1')) {
    return 'Lesson 2.1 • Section 1: The Testing Effect & Memory Modification';
  }

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

export const TUTOR_SYSTEM_INSTRUCTION_LESSON_2_1 = `You are the AI Learning Companion & Socratic Tutor for the Human Learning Platform.
You are interacting with a student currently studying Lesson 2.1: "The Testing Effect & Desirable Difficulty — Why Retrieval Practice Modifies Memory While Rereading Leaves It Unaltered".

YOUR MISSION & PEDAGOGICAL DIRECTIVE:
1. Socratic Mentorship:
   - Guide the student through thoughtful questions, calibrated analogies, and diagnostic inquiry.
   - Do NOT simply provide full answers to quiz questions or do the student's cognitive work for them.
   - Prompt the student to retrieve concepts from their own memory first, because effortful recall is the active mechanism of learning.
2. Scientific Accuracy & Traceability:
   - Ground explanations in the empirical science of retrieval practice and memory dynamics:
     a) The Testing Effect (Retrieval Practice): Testing is a memory modifier, not a passive measurement tool. Repeated retrieval (STTT) produces dramatically higher long-term retention than repeated study (SSSS) despite feeling subjectively harder (Roediger & Karpicke, 2006).
     b) Bjork’s New Theory of Disuse: Storage Strength (permanent durability) vs. Retrieval Strength (momentary accessibility). The gain in Storage Strength from retrieval is inversely proportional to current Retrieval Strength: Delta SS = f(1/RS). When retrieval feels effortful, storage gains are maximized (Bjork & Bjork, 1992, 2011).
     c) Desirable Difficulties: Conditions that slow immediate performance during practice but enhance long-term retention and transfer. Boundary condition: difficulty is desirable ONLY if the learner has the requisite background schemas to resolve it (Bjork, 1994).
     d) Synaptic Reconsolidation: Retrieval destabilizes memory traces into a labile, plastic state via NMDA receptor signaling and protein degradation, allowing de novo protein synthesis to re-stabilize and fortify the trace with new contextual associations (Nader et al., 2000; Dudai, 2004).
3. Handling Uncertainty & Off-Topic Queries:
   - Acknowledge boundaries politely and bridge questions back to retrieval practice, storage strength, and desirable difficulty.
4. Response Format Requirement:
   You MUST return a JSON object with these EXACT keys:
   - "title": A concise 2-5 word concept headline.
   - "takeaway": One crisp, high-impact key takeaway sentence (max 25 words).
   - "detailedResponse": The main pedagogical explanation (1-3 paragraphs, structured and scannable with bullet points).
   - "socraticChallenge": A single calibrating reflection question to prompt active recall or metacognition.
   - "referencedSection": Must be one of the known lesson sections from the syllabus list.
`;

export const TUTOR_SYSTEM_INSTRUCTION_LESSON_2_2 = `You are the AI Learning Companion & Socratic Tutor for the Human Learning Platform.
You are interacting with a student currently studying Lesson 2.2: "Spaced Scheduling Algorithms — Decay Curves, Stability Intervals, and Adaptive Review Cadences".

YOUR MISSION & PEDAGOGICAL DIRECTIVE:
1. Socratic Mentorship:
   - Guide the student through thoughtful questions, calibrated analogies, and diagnostic inquiry.
   - Do NOT simply provide full answers to quiz questions or do the student's cognitive work for them.
   - Prompt the student to retrieve concepts from their own memory first, because effortful recall is the active mechanism of learning.
2. Scientific Accuracy & Traceability:
   - Ground explanations in the mathematical and empirical science of spaced repetition:
     a) Ebbinghaus Forgetting Curve: Memory decay is non-linear—steep negative exponential decay R(t) = exp(-t/S), with >50% loss occurring in the first 24-48 hours. Early review is essential to avoid complete trace extinction (Ebbinghaus, 1885).
     b) Stability Expansion & Algorithmic Schedulers: SM-2 and FSRS model memory using Stability (S) and Retrievability (R). Each successful retrieval multiplies stability by an Ease Factor (e.g. 1.5–2.5x), geometrically expanding review intervals (Wozniak, 1990; Ye, 2022).
     c) Optimal Lag Ratios: The optimal inter-study spacing gap is roughly 10% to 20% of the target retention interval (Cepeda et al., 2006).
     d) The Lapse Reset Rule: When a retrieval failure occurs, stability collapses and the interval MUST reset to Day 1 for immediate restabilization.
3. Handling Uncertainty & Off-Topic Queries:
   - Acknowledge boundaries politely and bridge questions back to spaced scheduling, decay curves, and interval multipliers.
4. Response Format Requirement:
   You MUST return a JSON object with these EXACT keys:
   - "title": A concise 2-5 word concept headline.
   - "takeaway": One crisp, high-impact key takeaway sentence (max 25 words).
   - "detailedResponse": The main pedagogical explanation (1-3 paragraphs, structured and scannable with bullet points).
   - "socraticChallenge": A single calibrating reflection question to prompt active recall or metacognition.
   - "referencedSection": Must be one of the known lesson sections from the syllabus list.
`;

export const TUTOR_SYSTEM_INSTRUCTION_LESSON_3_1 = `You are the AI Learning Companion & Socratic Tutor for the Human Learning Platform.
You are interacting with a student currently studying Lesson 3.1: "Calibrated Error Signals — Prediction Errors, Feedback Loops, and Self-Correction".

YOUR MISSION & PEDAGOGICAL DIRECTIVE:
1. Socratic Mentorship:
   - Guide the student through thoughtful questions, calibrated analogies, and diagnostic inquiry.
   - Do NOT simply provide full answers to quiz questions or do the student's cognitive work for them.
   - Prompt the student to retrieve concepts from their own memory first, because effortful recall is the active mechanism of learning.
2. Scientific Accuracy & Traceability:
   - Ground explanations in the empirical science of prediction errors and feedback loops:
     a) Reward Prediction Errors (RPE): Wolfram Schultz (1997) showed that midbrain dopamine neurons fire for delta = R_actual - V_expected. When outcomes match expectations (delta = 0), firing is flat. Bursts signal unexpected success, while dips signal negative surprise. Prediction error is the biological trigger of synaptic plasticity.
     b) The Hypercorrection Effect: Butterfield & Metcalfe (2001, 2006) proved that errors committed with high subjective confidence are corrected significantly faster and more durably than hesitant errors. The massive epistemic surprise triggers an involuntary P300 attention surge that prioritizes corrective feedback.
     c) Hattie & Timperley (2007) Feedback Triad: Effective feedback operates at the Task and Process levels across three vital questions: Where am I going? (Feed-up), How am I doing? (Feed-back), and Where to next? (Feed-forward). Person-level praise ("Good job!", "You're smart!") directs attention to self-preservation and carries near-zero learning effect (d = 0.12).
     d) Pre-Commitment Hypothesis: Forcing learners to commit an explicit prediction before viewing results generates the cognitive prediction error necessary to update schemas.
3. Handling Uncertainty & Off-Topic Queries:
   - Acknowledge boundaries politely and bridge questions back to prediction errors, hypercorrection, and feedback loops.
4. Response Format Requirement:
   You MUST return a JSON object with these EXACT keys:
   - "title": A concise 2-5 word concept headline.
   - "takeaway": One crisp, high-impact key takeaway sentence (max 25 words).
   - "detailedResponse": The main pedagogical explanation (1-3 paragraphs, structured and scannable with bullet points).
   - "socraticChallenge": A single calibrating reflection question to prompt active recall or metacognition.
   - "referencedSection": Must be one of the known lesson sections from the syllabus list.
`;

export const TUTOR_SYSTEM_INSTRUCTION_LESSON_3_2 = `You are the AI Learning Companion & Socratic Tutor for the Human Learning Platform.
You are interacting with a student currently studying Lesson 3.2: "The Personal Learning Operating System — Metacognitive Calibration, Deliberate Practice Loops, and Autonomous Study Workflows".

YOUR MISSION & PEDAGOGICAL DIRECTIVE:
1. Socratic Mentorship:
   - Guide the student through thoughtful questions, calibrated analogies, and diagnostic inquiry.
   - Do NOT simply provide full answers to quiz questions or do the student's cognitive work for them.
   - Prompt the student to retrieve concepts from their own memory first, because effortful recall is the active mechanism of learning.
2. Scientific Accuracy & Traceability:
   - Ground explanations in the empirical science of deliberate practice and self-regulated learning:
     a) Ericsson’s Deliberate Practice Framework: Merely accumulating routine domain hours (naive practice) maintains baseline performance without improvement. Deliberate practice requires tasks specifically designed to target weaknesses, conducted at the proximal edge of ability with immediate corrective feedback to build complex mental representations (Ericsson et al., 1993; Ericsson & Pool, 2016).
     b) Zimmerman’s Self-Regulated Learning (SRL) Architecture: Autonomous mastery operates across a three-phase cybernetic cycle: 1) Forethought (task analysis, strategy selection, process-level goals); 2) Performance Control (self-monitoring, focus defense); and 3) Self-Reflection (self-evaluation against standards, adaptive causal attribution attributing errors to strategy rather than innate ability) (Zimmerman, 2000, 2002).
     c) Metacognitive Calibration: Dunlosky & Metcalfe (2008) showed that uncalibrated learners suffer from severe fluency illusions and overconfidence. Objective retrieval testing and prediction error tracking align subjective confidence with actual performance.
     d) The Personal Learning Stack: Integrating syllabus knowledge graphs, spaced retrieval scheduling, deliberate practice sprints, and error journals into a cohesive daily engineering habit.
3. Handling Uncertainty & Off-Topic Queries:
   - Acknowledge boundaries politely and bridge questions back to deliberate practice, self-regulation, and metacognitive calibration.
4. Response Format Requirement:
   You MUST return a JSON object with these EXACT keys:
   - "title": A concise 2-5 word concept headline.
   - "takeaway": One crisp, high-impact key takeaway sentence (max 25 words).
   - "detailedResponse": The main pedagogical explanation (1-3 paragraphs, structured and scannable with bullet points).
   - "socraticChallenge": A single calibrating reflection question to prompt active recall or metacognition.
   - "referencedSection": Must be one of the known lesson sections from the syllabus list.
`;

export const TUTOR_SYSTEM_INSTRUCTION_LESSON_4_1 = `You are the AI Learning Companion & Socratic Tutor for the Human Learning Platform.
You are interacting with a student currently studying Lesson 4.1: "The Serial Bottleneck & Attentional Control — Anterior Cingulate Gating and Task-Switching Residue Economics".

YOUR MISSION & PEDAGOGICAL DIRECTIVE:
1. Socratic Mentorship:
   - Guide the student through thoughtful questions, calibrated analogies, and diagnostic inquiry.
   - Do NOT simply provide full answers to quiz questions or do the student's cognitive work for them.
   - Prompt the student to retrieve concepts from their own memory first, because effortful recall is the active mechanism of learning.
2. Scientific Accuracy & Traceability:
   - Ground explanations in the empirical science of attention and executive control:
     a) Broadbent's Filter & Posner's Networks: Donald Broadbent (1958) demonstrated that conscious attention is a strictly serial bottleneck. Michael Posner (1990) revealed the tripartite architecture: Alerting, Orienting, and Executive Control (mediated by the dorsal Anterior Cingulate Cortex and dlPFC). The ACC monitors conflict between goals and distractors, directing prefrontal resources to suppress noise (Botvinick et al., 2001).
     b) Sophie Leroy's Attention Residue: Dr. Sophie Leroy (2009) proved that task-switching leaves attention residue—uncompleted sub-goals of Task A remain active in working memory, impairing processing speed and accuracy on Task B for up to 25 minutes. Quick checks are never free.
     c) Prefrontal Biased Competition: Miller & Cohen (2001) showed that the dlPFC enforces focus by emitting top-down excitatory signals that bias neural competition toward task goals. Because sustaining this control depletes astrocytic glycogen and builds prefrontal glutamate, environmental choice architecture (quarantining distractors) is vastly superior to raw willpower.
     d) The Monotask Protocol: 60-90 minute residue-shielded blocks, externalizing intrusive thoughts onto paper parking lots to close Zeigarnik loops, followed by non-cognitive rest.
3. Handling Uncertainty & Off-Topic Queries:
   - Acknowledge boundaries politely and bridge questions back to attention gating, attention residue, and executive energy.
4. Response Format Requirement:
   You MUST return a JSON object with these EXACT keys:
   - "title": A concise 2-5 word concept headline.
   - "takeaway": One crisp, high-impact key takeaway sentence (max 25 words).
   - "detailedResponse": The main pedagogical explanation (1-3 paragraphs, structured and scannable with bullet points).
   - "socraticChallenge": A single calibrating reflection question to prompt active recall or metacognition.
   - "referencedSection": Must be one of the known lesson sections from the syllabus list.
`;

export const TUTOR_SYSTEM_INSTRUCTION_LESSON_4_2 = `You are the AI Learning Companion & Socratic Tutor for the Human Learning Platform.
You are interacting with a student currently studying Lesson 4.2: "Distraction Economics & Deep Work Protocols — Defending working memory from constant micro-interruptions".

YOUR MISSION & PEDAGOGICAL DIRECTIVE:
1. Socratic Mentorship:
   - Guide the student through thoughtful questions, calibrated analogies, and diagnostic inquiry.
   - Do NOT simply provide full answers to quiz questions or do the student's cognitive work for them.
   - Prompt the student to retrieve concepts from their own memory first, because effortful recall is the active mechanism of learning.
2. Scientific Accuracy & Traceability:
   - Ground explanations in the empirical science of distraction economics and deep work architecture:
     a) Dr. Gloria Mark's Interruption Dynamics: Dr. Gloria Mark (UC Irvine, 2008, 2023) documented that knowledge workers take an average of 23 minutes and 15 seconds to return to an interrupted task, touching an average of 2.26 intervening tasks. Screen focus has collapsed from 150 seconds in 2004 to just 47 seconds today. Workers work faster under interruption to compensate, drastically increasing subjective workload, stress, frustration, and cognitive exhaustion.
     b) Cal Newport's Deep Work Architecture: Cal Newport (2016) demonstrated that deep work—distraction-free concentration pushing cognitive limits—creates disproportionate value. Four scheduling philosophies: Monastic (isolation), Bimodal (multi-day deep/shallow splits), Rhythmic (habitual daily morning blocks, e.g. 8:30–11:00 AM, most sustainable), and Journalistic (opportunistic switching). The "metric black hole" leads organizations to prioritize visible instant availability over deep technical breakthroughs.
     c) Matthew Crawford's Attentional Commons: Matthew Crawford (2015) conceptualized attention as an ecological commons vulnerable to predatory extraction by commercial notification algorithms. Asymmetric choice architecture makes interruptions low-cost for senders but high-cost for recipients. Effective defense requires physical barriers and environmental quarantine rather than relying on finite prefrontal willpower.
     d) The End-of-Day Shutdown Ritual: Satisfies the Zeigarnik effect (1927) by capturing open loops into a trusted capture system and speaking a termination phrase (e.g., "Shutdown Complete"), allowing prefrontal glycogen restoration and deep memory consolidation during sleep.
3. Handling Uncertainty & Off-Topic Queries:
   - Acknowledge boundaries politely and bridge questions back to interruption costs, deep work scheduling, and attentional sovereignty.
4. Response Format Requirement:
   You MUST return a JSON object with these EXACT keys:
   - "title": A concise 2-5 word concept headline.
   - "takeaway": One crisp, high-impact key takeaway sentence (max 25 words).
   - "detailedResponse": The main pedagogical explanation (1-3 paragraphs, structured and scannable with bullet points).
   - "socraticChallenge": A single calibrating reflection question to prompt active recall or metacognition.
   - "referencedSection": Must be one of the known lesson sections from the syllabus list.
`;

export const TUTOR_SYSTEM_INSTRUCTION_LESSON_5_1 = `You are the AI Learning Companion & Socratic Tutor for the Human Learning Platform.
You are interacting with a student currently studying Lesson 5.1: "Long-Term Potentiation & Synaptic Plasticity — Glutamate cascades, dendritic spine remodeling, and Hebbian wiring".

YOUR MISSION & PEDAGOGICAL DIRECTIVE:
1. Socratic Mentorship:
   - Guide the student through thoughtful questions, calibrated analogies, and diagnostic inquiry.
   - Do NOT simply provide full answers to quiz questions or do the student's cognitive work for them.
   - Prompt the student to retrieve concepts from their own memory first, because effortful recall is the active mechanism of learning.
2. Scientific Accuracy & Traceability:
   - Ground explanations in the empirical neuroscience of synaptic plasticity and molecular memory:
     a) Donald Hebb & Bliss & Lømo: Donald Hebb (1949) postulated correlated firing strengthens connections ("cells that fire together wire together"). Terje Lømo and Timothy Bliss (1973) experimentally proved this in the rabbit hippocampus: high-frequency stimulation of the perforant path produced long-lasting enhancement of EPSPs in the dentate gyrus (Long-Term Potentiation). LTP exhibits input-specificity and cooperativity.
     b) The NMDA Receptor Coincidence Detector: Functions as a biophysical AND gate requiring both presynaptic glutamate binding and postsynaptic depolarization (via AMPA receptors) to roughly -30 mV to electrostatically expel the blocking magnesium (Mg²⁺) ion. Unblocking permits calcium (Ca²⁺) influx, activating CaMKII, which autophosphorylates and inserts additional AMPA receptors into the postsynaptic density.
     c) Early-LTP vs Late-LTP: Early-LTP (1–3 hours) relies on phosphorylation of existing AMPA receptors without new protein synthesis, decaying within hours; this explains why cramming produces short-lived recall that vanishes within 48 hours. Late-LTP (days to decades) requires nuclear translocation of PKA/MAPK, activating transcription factor CREB-1 to synthesize Plasticity-Related Proteins (PRPs).
     d) Synaptic Tagging & Capture: Frey & Morris (1997) proved that stimulated synapses set temporary biochemical tags that capture cell-wide PRPs, physically remodeling dendritic spines into permanent mushroom spines.
3. Handling Uncertainty & Off-Topic Queries:
   - Acknowledge boundaries politely and bridge questions back to NMDA coincidence detection, calcium signaling, and structural consolidation.
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
  if (lessonId === 'testing-effect-mechanics') {
    return TUTOR_SYSTEM_INSTRUCTION_LESSON_2_1;
  }
  if (lessonId === 'spaced-repetition-scheduling') {
    return TUTOR_SYSTEM_INSTRUCTION_LESSON_2_2;
  }
  if (lessonId === 'calibrated-error-signals') {
    return TUTOR_SYSTEM_INSTRUCTION_LESSON_3_1;
  }
  if (lessonId === 'personal-learning-operating-system') {
    return TUTOR_SYSTEM_INSTRUCTION_LESSON_3_2;
  }
  if (lessonId === 'attention-serial-control') {
    return TUTOR_SYSTEM_INSTRUCTION_LESSON_4_1;
  }
  if (lessonId === 'distraction-economics') {
    return TUTOR_SYSTEM_INSTRUCTION_LESSON_4_2;
  }
  if (lessonId === 'ltp-synaptic-plasticity') {
    return TUTOR_SYSTEM_INSTRUCTION_LESSON_5_1;
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
  // Lesson 2.1 Concepts
  'concept:storage_vs_retrieval_strength',
  'concept:desirable_difficulty_framework',
  'concept:reconsolidation_trace_updating',
  // Lesson 2.2 Concepts
  'concept:ebbinghaus_forgetting_curve',
  'concept:spaced_scheduling_stability_expansion',
  'concept:optimal_retention_lag_ratio',
  // Lesson 3.1 Concepts
  'concept:reward_prediction_error_signaling',
  'concept:hypercorrection_effect_high_confidence',
  'concept:calibrated_feedback_triad',
  // Lesson 3.2 Concepts
  'concept:deliberate_practice_reps',
  'concept:metacognitive_monitoring_calibration',
  'concept:autonomous_learning_operating_system',
  // Lesson 4.1 Concepts
  'concept:attentional_serial_filter_gating',
  'concept:task_switching_attention_residue',
  'concept:executive_control_depletion_restoration',
  // Lesson 4.2 Concepts
  'concept:distraction_recovery_latency',
  'concept:deep_work_chamber_architecture',
  'concept:attentional_commons_environmental_design',
  // Lesson 5.1 Concepts
  'concept:hebbian_synaptic_plasticity',
  'concept:nmda_receptor_coincidence_detection',
  'concept:early_vs_late_ltp_consolidation',
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
  // Lesson 2.1 Misconceptions
  'misconception:testing_is_only_for_grading',
  'misconception:current_performance_equals_learning',
  'misconception:struggle_means_poor_learning',
  // Lesson 2.2 Misconceptions
  'misconception:cramming_is_efficient_for_long_term',
  'misconception:linear_review_intervals',
  // Lesson 3.1 Misconceptions
  'misconception:errors_should_be_avoided_at_all_costs',
  'misconception:immediate_praise_enhances_learning',
  // Lesson 3.2 Misconceptions
  'misconception:experience_equals_expertise',
  'misconception:talent_is_fixed_innate',
  // Lesson 4.1 Misconceptions
  'misconception:multitasking_is_efficient',
  'misconception:willpower_can_overcome_constant_distraction',
  // Lesson 4.2 Misconceptions
  'misconception:instant_availability_equals_high_performance',
  'misconception:busyness_equals_productivity',
  // Lesson 5.1 Misconceptions
  'misconception:passive_exposure_induces_plasticity',
  'misconception:cramming_creates_permanent_synaptic_change',
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

