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
    keywords: ['generation', 'generation effect', 'slamecka', 'generative retrieval', 'reconstruction'],
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
  {
    keywords: ['cognitive load', 'intrinsic', 'extraneous', 'germane', 'element interactivity', 'sweller', 'split-attention', 'split attention'],
    title: 'The Tripartite Model of Cognitive Load',
    summary: 'Working memory capacity is strictly limited; extraneous friction directly impedes schema formation.',
    takeaway: 'Total cognitive load equals Intrinsic + Extraneous + Germane. Eliminate extraneous friction to free working memory bandwidth for germane schema consolidation.',
    detailedResponse: 'Cognitive Load Theory (John Sweller, 1988) partitions mental expenditure into three channels: Intrinsic load (the inherent element interactivity of the subject), Extraneous load (wasteful friction from poor layout or split-attention), and Germane load (constructive working memory effort applied to building schemas). Because working memory holds only ~3-4 novel chunks, minimizing extraneous waste directly empowers deep learning.',
    socraticChallenge: 'In your current study routine, what is one source of split-attention you can eliminate today?',
    referencedSection: 'Lesson 1.3 • Section 1: The Tripartite Model of Cognitive Load',
  },
  {
    keywords: ['worked example', 'worked examples', 'faded', 'faded completion', 'expertise reversal', 'kalyuga', 'scaffolding', 'means-ends'],
    title: 'The Worked Example & Expertise Reversal Effects',
    summary: 'Novices learn faster from worked examples; experts need autonomous challenge.',
    takeaway: 'Novices lack schemas and waste working memory on means-ends search—they learn fastest from worked examples. As expertise develops, scaffolding must fade to avoid the Expertise Reversal Effect.',
    detailedResponse: 'For beginners, studying annotated worked solutions paired with faded completion problems significantly outperforms unguided problem solving (The Worked Example Effect). However, as learners acquire automated long-term schemas, step-by-step guidance becomes redundant and actively interferes with their internal representations (The Expertise Reversal Effect, Kalyuga et al., 2003). Scaffolding must dynamically fade.',
    socraticChallenge: 'Are you currently treating yourself as a novice (benefiting from worked examples) or as an expert (benefiting from unguided problem solving)?',
    referencedSection: 'Lesson 1.3 • Section 2: The Worked Example & Split-Attention Effects',
  },
  {
    keywords: ['roediger', 'karpicke', 'testing effect', 'retrieval practice', 'sttt', 'ssss', 'modifier hypothesis'],
    title: 'The Testing Effect & Memory Modification',
    summary: 'Testing is an active memory modifier, not a passive measurement.',
    takeaway: 'Repeated retrieval practice (STTT) inverts immediate study gains, delivering over 50% higher retention after 1 week compared to rereading (SSSS).',
    detailedResponse: 'Roediger & Karpicke (2006) proved that testing acts as a powerful memory modifier, triggering synaptic reconsolidation. While repeated reading (SSSS) gives higher scores at 5 minutes due to working-memory recency, it results in catastrophic forgetting over time. Repeated testing (STTT) halts forgetting, yielding ~67% retention at 1 week versus 40% for rereaders. Retrieval actively reconstructs and consolidates neural access routes.',
    socraticChallenge: 'How much of your study time is currently spent on input (reading/watching) versus output (retrieving from memory)?',
    referencedSection: 'Lesson 2.1 • Section 1: The Testing Effect & Memory Modification',
  },
  {
    keywords: ['storage strength', 'retrieval strength', 'new theory of disuse', 'bjork', 'inverse storage'],
    title: 'Storage Strength vs. Retrieval Strength',
    summary: 'Current access ease is an unfaithful indicator of permanent durability.',
    takeaway: 'Gains in permanent Storage Strength are inversely proportional to current Retrieval Strength. The harder an answer is to recall, the more you learn by retrieving it.',
    detailedResponse: 'Robert & Elizabeth Bjork’s New Theory of Disuse establishes that every memory trace has two independent dimensions: Retrieval Strength (current temporary accessibility) and Storage Strength (permanent biological durability). When Retrieval Strength is high, retrieving requires zero effort and produces near-zero gains in Storage Strength. Practicing retrieval after a delay when Retrieval Strength is low triggers massive permanent storage gains.',
    socraticChallenge: 'Why does an answer that comes to mind instantly during a study session fail to prove you will remember it in an exam next week?',
    referencedSection: 'Lesson 2.1 • Section 2: Storage vs. Retrieval Strength',
  },
  {
    keywords: ['desirable difficulty', 'reconsolidation', 'destabilization', 'labile', 'protein synthesis', 'dudai', 'nader'],
    title: 'Desirable Difficulties & Synaptic Reconsolidation',
    summary: 'Effortful struggle destabilizes traces, triggering neuroplastic reconsolidation.',
    takeaway: 'Retrieving a memory transiently returns it to a plastic, labile state. Synaptic reconsolidation then re-stabilizes it with updated cues, cementing long-term mastery.',
    detailedResponse: 'A desirable difficulty (Bjork, 1994) is an instructional challenge that slows immediate performance during training but produces superior long-term durability and transfer. Neurobiologically, effortful retrieval destabilizes the synaptic trace via NMDA receptors and protein degradation (Nader et al., 2000), placing it into a labile state. During the subsequent reconsolidation window, new protein synthesis re-stabilizes the trace, integrating new cues and making it permanently resistant to decay (Dudai, 2004).',
    socraticChallenge: 'When you encounter difficulty retrieving a concept, do you perceive it as a sign of failure or as the active biological trigger of reconsolidation?',
    referencedSection: 'Lesson 2.1 • Section 3: Desirable Difficulties & Synaptic Reconsolidation',
  },
  {
    keywords: ['ebbinghaus', 'forgetting curve', 'exponential decay', 'decay curve', 'permastore'],
    title: 'The Ebbinghaus Forgetting Curve & Decay Kinetics',
    summary: 'Memory decay is steep and exponential, with >50% lost in the first 24–48 hours.',
    takeaway: 'Human forgetting is steepest immediately after learning. Early review (within 24–48 hours) is mandatory to prevent complete trace extinction.',
    detailedResponse: 'Hermann Ebbinghaus (1885) established that memory decay follows a negative exponential or power-law curve: over 50% of newly encoded information is lost within the first day. However, each subsequent effortful retrieval flattens the curve, progressively extending retention into Bahrick’s "permastore"—a consolidated state where decay effectively halts.',
    socraticChallenge: 'How soon after learning a complex concept do you currently schedule your first retrieval review?',
    referencedSection: 'Lesson 2.2 • Section 1: The Ebbinghaus Decay Curve & Mathematical Kinetics',
  },
  {
    keywords: ['spaced repetition', 'fsrs', 'sm-2', 'sm2', 'stability expansion', 'ease factor', 'interval multiplier', 'cepeda', 'optimal lag'],
    title: 'Spaced Scheduling Algorithms & Stability Expansion',
    summary: 'Expanding intervals multiply trace stability upon successful retrieval.',
    takeaway: 'Multiply intervals geometrically (1d → 3d → 8d → 20d → 50d) to catch memories at ~90% retrievability. Optimal spacing gaps are 10–20% of your target delay.',
    detailedResponse: 'Spaced scheduling algorithms (SM-2, FSRS) model memory via Retrievability (R) and Stability (S). When you successfully recall an item at the verge of forgetting (R ≈ 90%), stability is multiplied by an ease factor (typically 1.5–2.5x), extending the next interval geometrically. Cepeda et al. (2006) proved that the optimal spacing gap is roughly 10% to 20% of the target retention delay.',
    socraticChallenge: 'Are your review intervals expanding dynamically based on performance, or are you reviewing at a rigid linear cadence?',
    referencedSection: 'Lesson 2.2 • Section 2: Expanding Interval Algorithms & Stability Multipliers',
  },
  {
    keywords: ['reward prediction error', 'prediction error', 'schultz', 'dopamine burst', 'rpe', 'delta ='],
    title: 'Reward Prediction Errors & Dopaminergic Plasticity',
    summary: 'Midbrain dopamine fires not for rewards, but for prediction errors (δ = Actual - Expected).',
    takeaway: 'Dopamine neurons fire for mathematical prediction errors: δ = R_actual - V_expected. When an outcome matches expectations, learning halts; unexpected discrepancies trigger synaptic plasticity.',
    detailedResponse: 'In 1997, Wolfram Schultz demonstrated that midbrain dopamine neurons in the substantia nigra and ventral tegmental area (VTA) do not fire in response to rewards or correct answers themselves. Instead, they fire in response to Prediction Errors—the difference between what your internal model predicted and what reality produced. When reality exceeds expectation, dopamine bursts strengthen synapses; when reality is worse, dips signal model updates.',
    socraticChallenge: 'Can you recall a recent technical problem where you were certain your code would work, but it failed? How did that error reshape your mental model?',
    referencedSection: 'Lesson 3.1 • Section 1: Reward Prediction Errors & Dopaminergic Plasticity',
  },
  {
    keywords: ['hypercorrection', 'butterfield', 'high confidence error', 'epistemic surprise', 'p300'],
    title: 'The Hypercorrection Effect & Epistemic Surprise',
    summary: 'High-confidence errors are corrected faster and more permanently than hesitant guesses.',
    takeaway: 'High-confidence errors trigger epistemic surprise, causing a massive P300 attention surge that prioritizes corrective feedback and locks in durable schema updates.',
    detailedResponse: 'Butterfield & Metcalfe (2001, 2006) revealed the Hypercorrection Effect: errors made with the highest subjective confidence are corrected significantly faster and more durably on subsequent retests than errors made with low confidence. The vast cognitive discrepancy between certainty and corrective reality triggers an involuntary attention surge (P300 ERP wave), focusing cognitive resources on the explanation.',
    socraticChallenge: 'Why is making a confident mistake mathematically and biologically superior for learning compared to making a timid guess?',
    referencedSection: 'Lesson 3.1 • Section 2: The Hypercorrection Effect & Epistemic Surprise',
  },
  {
    keywords: ['calibrated feedback', 'hattie', 'timperley', 'feed-up', 'feed-back', 'feed-forward', 'feedback triad'],
    title: 'The Architecture of Calibrated Feedback',
    summary: 'Effective feedback answers Feed-up, Feed-back, and Feed-forward at the task and process levels.',
    takeaway: 'Effective feedback focuses on task and process mechanisms (Feed-up, Feed-back, Feed-forward). Person-level praise distracts cognitive resources toward ego protection with near-zero learning gains.',
    detailedResponse: 'John Hattie and Helen Timperley (2007) synthesized over 500 meta-analyses and proved that feedback must answer three essential questions: 1) Feed-up: Where am I going? (the goal); 2) Feed-back: How am I doing? (the current state); and 3) Feed-forward: Where to next? (actionable correction). In contrast, person praise ("You are smart!") carries almost zero learning value (d ≈ 0.12) because it directs attention away from the task and toward ego defense.',
    socraticChallenge: 'Look at the last piece of feedback you received. Did it provide actionable feed-forward direction, or was it merely person-level praise?',
    referencedSection: 'Lesson 3.1 • Section 3: The Architecture of Calibrated Feedback',
  },
  {
    keywords: ['deliberate practice', 'ericsson', '10,000 hour', 'edge of ability', 'mental representations', 'naive practice'],
    title: 'Ericsson’s Deliberate Practice & Edge-of-Ability Repetition',
    summary: 'Deliberate practice operates at the proximal edge of ability with immediate feedback, building expert mental representations.',
    takeaway: 'Mere hours of work experience automate baseline habits. Deliberate practice requires targeting weaknesses at the edge of ability with immediate corrective feedback.',
    detailedResponse: 'K. Anders Ericsson (1993, 2016) showed that domain experience alone correlates weakly with elite competence. Naive practice—repeating tasks in your comfort zone—maintains ability but fails to advance it. Deliberate practice requires: 1) Working at the proximal edge of ability (Zone of Proximal Development); 2) Concrete process-level target goals; 3) Immediate error feedback; and 4) Effortful generative refinement to construct rich mental representations.',
    socraticChallenge: 'What specific sub-skill in your engineering stack is currently at the outer edge of your ability, where you make frequent mistakes?',
    referencedSection: 'Lesson 3.2 • Section 1: Ericsson’s Deliberate Practice Framework',
  },
  {
    keywords: ['zimmerman', 'self-regulated learning', 'self-regulation', 'forethought', 'process goal', 'causal attribution'],
    title: 'Zimmerman’s Cybernetic Self-Regulated Learning Triad',
    summary: 'Self-regulated learning operates across three recursive phases: Forethought, Performance, and Self-Reflection.',
    takeaway: 'Structure study into a cybernetic loop: set concrete process goals in Forethought, monitor execution in Performance, and attribute errors to strategy in Self-Reflection.',
    detailedResponse: 'Barry Zimmerman (2000, 2002) modeled autonomous self-regulated learning (SRL) across three cyclical phases: 1) Forethought: task analysis and process-level goal setting before practice; 2) Performance: focused self-monitoring during execution; and 3) Self-Reflection: comparing observed results to standards and adapting causal attributions. Strategic learners attribute errors to imperfect methods rather than fixed ability, refining the next sprint.',
    socraticChallenge: 'Before your next study session, can you write down one falsifiable process goal instead of a vague outcome ambition?',
    referencedSection: 'Lesson 3.2 • Section 2: Zimmerman’s Cybernetic Self-Regulated Learning Architecture',
  },
  {
    keywords: ['metacognitive calibration', 'calibration curve', 'dunlosky', 'personal learning operating system', 'plos', 'personal learning stack'],
    title: 'Metacognitive Calibration & The Personal Learning Stack',
    summary: 'Align subjective confidence with objective test accuracy to eliminate epistemic blind spots.',
    takeaway: 'Metacognitive calibration aligns feeling-of-knowing with objective test accuracy. Never trust subjective fluency without uncued verification testing.',
    detailedResponse: 'Dunlosky & Metcalfe (2008) demonstrated that uncalibrated learners suffer from severe fluency illusions and overconfidence, mistakenly reviewing what feels easy while ignoring genuine blind spots. The Personal Learning Operating System resolves this by integrating a curriculum dependency graph, a spaced retrieval calendar, deliberate practice sprints, and an error journal to anchor confidence strictly to demonstrated evidence.',
    socraticChallenge: 'How do you currently verify that you actually understand a complex concept before concluding your study session?',
    referencedSection: 'Lesson 3.2 • Section 3: Metacognitive Calibration & The Personal Learning Stack',
  },
  {
    keywords: ['broadbent', 'filter model', 'posner', 'dichotic', 'alerting network', 'orienting network', 'sensory gate'],
    title: 'Broadbent’s Filter & Posner’s Tripartite Attentional Networks',
    summary: 'Sensory inputs enter in parallel, but conscious working memory is restricted to a strictly serial bottleneck.',
    takeaway: 'Conscious attention is strictly serial. Posner’s tripartite networks (Alerting, Orienting, Executive Control) gate sensory inputs, with the ACC monitoring conflict.',
    detailedResponse: 'Donald Broadbent (1958) demonstrated using dichotic listening experiments that human conscious attention possesses a strict physical bottleneck: sensory stores receive vast parallel inputs, but only one selected semantic channel passes through to working memory. Michael Posner (1990) established that attention is governed by three networks: Alerting (arousal), Orienting (spatial attention), and Executive Control. In the executive network, the dorsal Anterior Cingulate Cortex (ACC) monitors conflict between goals and distractions, directing prefrontal resources to suppress noise.',
    socraticChallenge: 'What sensory distractions in your workspace currently trigger involuntary orienting responses and force your ACC into conflict suppression?',
    referencedSection: 'Lesson 4.1 • Section 1: Broadbent’s Filter & Posner’s Tripartite Attentional Networks',
  },
  {
    keywords: ['attention residue', 'leroy', 'task switching', 'task-switching', 'switch cost', 'zeigarnik loop', 'quick check'],
    title: 'Sophie Leroy’s Attention Residue & Task-Switching Economics',
    summary: 'Switching away from incomplete tasks leaves attention residue that impairs problem solving for up to 25 minutes.',
    takeaway: 'There is no such thing as a "quick check." Switching away from an unfinished task leaves attention residue, halving cognitive capacity for up to 25 minutes.',
    detailedResponse: 'Dr. Sophie Leroy (2009) proved that human attention does not transition cleanly between tasks. When you switch away from an uncompleted task, unresolved sub-goals linger in working memory as Attention Residue, consuming central executive bandwidth and significantly degrading accuracy and speed on the new task. Reconfiguring the prefrontal task-set incurs a heavy switching cost, requiring 15 to 25 minutes of warm-up reconstruction to regain peak focus.',
    socraticChallenge: 'How often do you switch to communication channels during compile waits or minor roadblocks, and how does that lingering residue affect your focus?',
    referencedSection: 'Lesson 4.1 • Section 2: Sophie Leroy’s Attention Residue & Task-Switching Economics',
  },
  {
    keywords: ['biased competition', 'miller and cohen', 'central fatigue', 'glycogen depletion', 'choice architecture', 'willpower depletion'],
    title: 'Prefrontal Biased Competition & Executive Energy Recovery',
    summary: 'The prefrontal cortex enforces focus via top-down biasing, but metabolic glycogen depletion requires environmental choice architecture.',
    takeaway: 'Top-down prefrontal biasing consumes metabolic glycogen. Eliminate distractions with physical choice architecture rather than relying on exhausting willpower.',
    detailedResponse: 'Earl Miller and Jonathan Cohen (2001) established that stimuli compete for neural dominance. The dorsolateral prefrontal cortex (dlPFC) enforces focus by sending top-down excitatory biasing signals to task-relevant pathways. However, continuous biasing depletes astrocytic glycogen and accumulates glutamate in prefrontal networks, leading to central executive fatigue. Because resisting sensory cues consumes finite metabolic reserves, designing environments that eliminate sensory distractions (choice architecture) is far more effective than relying on willpower.',
    socraticChallenge: 'How could you redesign your physical and digital desk environment so you don’t need to spend willpower resisting distractions?',
    referencedSection: 'Lesson 4.1 • Section 3: Prefrontal Biased Competition & Executive Energy Recovery',
  },
  {
    keywords: ['gloria mark', '23 minute', 'resumption cost', 'resumption latency', 'interruption cost', 'screen-switching', 'compensatory stress'],
    title: 'Gloria Mark’s Interruption Dynamics & The 23-Minute Resumption Cost',
    summary: 'Returning to an interrupted task takes an average of 23 minutes and 15 seconds, creating compensatory stress and cognitive exhaustion.',
    takeaway: 'Interruptions cost 23 minutes and 15 seconds on average. Workers switch between 2.26 intervening tasks, and working faster to compensate elevates stress and error rates.',
    detailedResponse: 'Dr. Gloria Mark (UC Irvine, 2008, 2023) empirically demonstrated that returning to an interrupted primary project takes an average of 23 minutes and 15 seconds. Workers do not instantly resume; interruptions spawn sub-tasks, averaging 2.26 intervening projects before returning to the original work. Furthermore, workers attempt to compensate for interruption debt by working faster, which drastically elevates subjective workload, frustration, time pressure, and prefrontal mental exhaustion.',
    socraticChallenge: 'When you are interrupted by a "quick question" at work, what intervening tasks do you find yourself drifting into before you actually return to your original code?',
    referencedSection: 'Lesson 4.2 • Section 1: The 23-Minute Recovery Latency (Gloria Mark)',
  },
  {
    keywords: ['cal newport', 'deep work', 'rhythmic philosophy', 'bimodal philosophy', 'monastic', 'metric black hole', 'shutdown ritual'],
    title: 'Cal Newport’s Deep Work Architecture & The Four Scheduling Philosophies',
    summary: 'Deep work produces rare economic value. Newport details four scheduling models and the essential end-of-day shutdown ritual.',
    takeaway: 'Deep work requires structured scheduling (especially the Rhythmic philosophy) and a formal End-of-Day Shutdown Ritual to clear Zeigarnik open loops.',
    detailedResponse: 'Cal Newport (2016) formalized the Deep Work hypothesis: the ability to perform distraction-free concentration pushing cognitive capabilities to their limit produces disproportionate economic value. He outlined four scheduling philosophies: Monastic (isolation), Bimodal (multi-day splits), Rhythmic (anchoring identical daily deep work sprints like 8:30–11:00 AM, the most sustainable for professionals), and Journalistic (switching opportunistically). An explicit End-of-Day Shutdown Ritual formally resolves open tasks, neutralizes the Zeigarnik effect, and allows prefrontal restoration.',
    socraticChallenge: 'Which of Newport’s four scheduling philosophies best fits your professional constraints, and what fixed daily window could you defend for deep work?',
    referencedSection: 'Lesson 4.2 • Section 2: Deep Work Architecture & Scheduling Philosophies (Cal Newport)',
  },
  {
    keywords: ['attentional commons', 'matthew crawford', 'crawford', 'asymmetric friction', 'environmental choice architecture', 'phone lockbox', 'notification quarantine'],
    title: 'Defending the Attentional Commons & Behavioral Choice Architecture',
    summary: 'Mental space is a scarce ecological commons exploited by commercial algorithms; defend it with asymmetric physical friction rather than willpower.',
    takeaway: 'Human attention is an ecological commons. Commercial systems engineer asymmetric friction; learners must build physical barriers and notification quarantine to protect focus.',
    detailedResponse: 'Matthew Crawford (2015) conceptualized human attention as a scarce ecological commons subject to tragedy-of-the-commons exploitation by algorithmic platforms. Modern digital tools employ asymmetric choice architecture: it costs a sender zero effort to send a ping, but extracts a massive cognitive tax from the recipient. Because prefrontal willpower cannot continuously defeat engineered stimuli, engineers must construct defensive choice architecture—complete notification quarantine, physical phone barriers, and explicit team response SLAs—to protect their cognitive sovereignty.',
    socraticChallenge: 'What physical or digital barriers could you establish right now that would make checking distractions require noticeable physical effort?',
    referencedSection: 'Lesson 4.2 • Section 3: The Attentional Commons & Choice Architecture (Matthew Crawford)',
  },
  {
    keywords: ['bliss and lomo', 'bliss & lomo', 'bliss and lømo', 'bliss & lømo', 'terje lomo', 'terje lømo', 'timothy bliss', 'hebbian', 'donald hebb', 'cells that fire together', 'perforant path', 'dentate gyrus', 'long-term potentiation', 'ltp'],
    title: 'Donald Hebb & Bliss & Lømo’s Long-Term Potentiation',
    summary: 'Correlated pre- and postsynaptic activity produces a persistent increase in synaptic transmission efficiency.',
    takeaway: 'Hebbian learning states that correlated firing strengthens connections. Bliss & Lømo (1973) proved this in hippocampal synapses, defining Long-Term Potentiation (LTP).',
    detailedResponse: 'Donald Hebb (1949) postulated that when an axon of cell A repeatedly assists in firing cell B, metabolic changes increase A’s efficiency in firing B. In 1973, Terje Lømo and Timothy Bliss experimentally proved this in the rabbit hippocampus: high-frequency electrical stimulation of the perforant path produced a sustained, multi-hour increase in excitatory postsynaptic potentials (EPSPs) in the dentate gyrus. LTP exhibits strict input specificity and requires cooperative presynaptic activation.',
    socraticChallenge: 'How does the biological reality of physical synaptic potentiation challenge the belief that reading or listening passively can produce durable mastery?',
    referencedSection: 'Lesson 5.1 • Section 1: Donald Hebb & Bliss & Lømo’s Discovery of LTP',
  },
  {
    keywords: ['nmda receptor', 'coincidence detector', 'magnesium plug', 'magnesium block', 'mg2+', 'camkii', 'ampa insertion', 'calcium influx'],
    title: 'The NMDA Receptor as a Molecular Coincidence Detector',
    summary: 'The NMDA receptor operates as a biophysical AND gate, requiring glutamate binding and membrane depolarization to expel magnesium.',
    takeaway: 'The NMDA receptor is a molecular coincidence detector. It requires presynaptic glutamate AND postsynaptic depolarization to eject Mg²⁺, triggering calcium influx and CaMKII activation.',
    detailedResponse: 'The NMDA receptor functions as a biological logic gate: at resting membrane potential (-70 mV), an extracellular magnesium ion (Mg²⁺) electrostatically blocks the pore. Only when adjacent AMPA receptors depolarize the membrane to roughly -30 mV is the positively charged Mg²⁺ expelled. Calcium (Ca²⁺) then enters the dendritic spine, activating CaMKII. CaMKII autophosphorylates and drives fresh AMPA receptors into the postsynaptic density, doubling the synapse’s electrical sensitivity.',
    socraticChallenge: 'Why does weak, passive studying fail to reach the -30 mV threshold needed to dislodge the magnesium plug from your NMDA receptors?',
    referencedSection: 'Lesson 5.1 • Section 2: The NMDA Receptor as a Molecular Coincidence Detector',
  },
  {
    keywords: ['early-ltp', 'late-ltp', 'creb', 'synaptic tagging', 'frey and morris', 'mushroom spine', 'cramming decay', 'protein synthesis'],
    title: 'Early-LTP vs Late-LTP & The Synaptic Tagging Hypothesis',
    summary: 'Early-LTP relies on temporary AMPA phosphorylation; Late-LTP requires nuclear CREB transcription and de novo protein synthesis for permanent spine remodeling.',
    takeaway: 'Cramming produces Early-LTP (transient receptor phosphorylation that decays within 24 hours). True retention requires spaced reactivation to trigger nuclear CREB transcription (Late-LTP).',
    detailedResponse: 'Early-LTP lasts 1 to 3 hours, relying solely on kinase phosphorylation of existing AMPA receptors without gene transcription. In contrast, Late-LTP lasts days to decades, requiring nuclear translocation of PKA/MAPK to phosphorylate transcription factor CREB-1. CREB orchestrates synthesis of Plasticity-Related Proteins (PRPs). According to Frey & Morris’s (1997) Synaptic Tagging hypothesis, stimulated spines set a temporary tag that captures these PRPs, physically remodeling dendritic spines into permanent mushroom spines.',
    socraticChallenge: 'How does knowing that Early-LTP decays within 24 hours change your perspective on studying everything the night before a deadline?',
    referencedSection: 'Lesson 5.1 • Section 3: Early-LTP vs Late-LTP: The Molecular Boundary of Permanent Mastery',
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
