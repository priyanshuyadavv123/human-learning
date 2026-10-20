import type { Lesson } from '../types/learning.ts';

export const LESSON_PERSONAL_LEARNING_OS: Lesson = {
  id: 'personal-learning-operating-system',
  chapterId: 'ch-3-deliberate-practice',
  number: '3.2',
  title: 'The Personal Learning Operating System',
  subtitle: 'Metacognitive Calibration, Deliberate Practice Loops, and Autonomous Study Workflows',
  readingTimeMinutes: 18,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'Why does a software engineer or doctor with 10 years of routine professional experience often perform no better—and frequently worse—than an ambitious practitioner with only 2 years of deliberate practice? If experience alone built expertise, why does time on the job produce a plateau rather than mastery?',
    teaser: 'We assume that clocking hours at work automatically transforms us into experts. Cognitive science proves that naive experience merely automates mediocrity.',
    hookNote: 'In their seminal research on peak performance, K. Anders Ericsson and colleagues (1993, 2016) demonstrated that sheer domain experience correlates only weakly with professional competence once an acceptable baseline is reached. Without explicit target goals, immediate corrective feedback, and practice conducted deliberately at the proximal edge of ability, repetition merely automates existing habits without improving underlying mental representations. True autonomous mastery requires a systematic Personal Learning Operating System: a cybernetic loop of forethought, deliberate execution, and metacognitive self-regulation (Zimmerman, 2000, 2002; Dunlosky & Metcalfe, 2008).',
  },
  prediction: {
    prompt: 'Before analyzing the mechanics of self-regulated learning, test your intuition: Three senior engineers aim to master distributed systems consensus algorithms (Raft, Paxos, Byzantine Fault Tolerance) over a 6-month period. Which daily study workflow produces the deepest, most transferable architectural mastery?',
    context: 'All three engineers possess identical baseline ability and invest 8 hours per week into their study routine:',
    options: [
      {
        id: 'opt-naive-experience',
        strategy: 'Protocol Alpha (The Work Experience Accumulator)',
        description: 'Learner works on general production backend tasks at their job, looking up distributed systems patterns on search engines or AI assistants only when an immediate task requires it.',
      },
      {
        id: 'opt-passive-consumption',
        strategy: 'Protocol Beta (The Curriculum Consumer)',
        description: 'Learner watches 60 hours of video lectures, reads 3 authoritative textbooks, highlights key passages, and creates neatly formatted digital summary notes.',
      },
      {
        id: 'opt-deliberate-practice-os',
        strategy: 'Protocol Gamma (The Deliberate Practice OS)',
        description: 'Learner conducts 45-minute daily deliberate practice sprints: implementing consensus protocols from scratch on a blank editor, running adversarial chaos tests, tracking prediction errors, and reviewing spaced retrieval cards.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-deliberate-practice-os',
      headline: 'The Deliberate Practice OS (Protocol Gamma) produces over 300% superior problem-solving transfer, failure diagnosis speed, and long-term retention compared to routine experience or passive study (Ericsson, 1993; Zimmerman, 2002; Dunlosky & Metcalfe, 2008).',
      explanation: 'Routine work experience (Protocol Alpha) keeps engineers within their comfort zone, automating routine tasks while avoiding the deliberate struggle required to build new schemas. Passive curriculum consumption (Protocol Beta) induces strong illusions of competence through perceptual fluency without training uncued recall or error handling. Protocol Gamma isolates specific cognitive bottlenecks at the edge of current ability, forces generative reconstruction, and provides immediate empirical feedback through test suites, building robust, adaptable mental representations.',
      optionFeedback: {
        'opt-naive-experience': {
          title: 'Your Choice: Protocol Alpha (Work Experience)',
          verdict: 'The Experience Plateau Fallacy',
          analysis: 'Routine work experience keeps you within your automated comfort zone. Ericsson (1993) proved that after the first 1–2 years of basic competence, additional years of naive on-the-job repetition produce near-zero performance gains.',
        },
        'opt-passive-consumption': {
          title: 'Your Choice: Protocol Beta (Curriculum Consumer)',
          verdict: 'The Illusion of Competence Trap',
          analysis: 'Watching lectures and reading books feels intellectually satisfying because of perceptual fluency, but it builds recognition rather than generative recall. When faced with an uncued production failure, passive knowledge collapses.',
        },
        'opt-deliberate-practice-os': {
          title: 'Your Choice: Protocol Gamma (Deliberate Practice OS)',
          verdict: 'Empirically Supported Strategy (Deliberate Practice & Cybernetic Self-Regulation)',
          analysis: 'Optimal cognitive engineering! By isolating specific architectural sub-skills, working at the edge of ability, demanding blank-editor generative reconstruction, and validating against automated test suites, Protocol Gamma continuously refines expert mental representations.',
        },
      },
      comparisons: [
        {
          label: 'Work Experience Accumulator (Protocol Alpha)',
          immediateRetention: '50% (Comfort-zone execution)',
          oneWeekRetention: '28% on novel edge cases (Low transfer)',
          illusionRating: 'High (assumes daily job equals deliberate improvement)',
          isEmpiricalWinner: false,
        },
        {
          label: 'Curriculum Consumer (Protocol Beta)',
          immediateRetention: '65% (Familiarity while watching/reading)',
          oneWeekRetention: '22% at 3 months (Rapid decay)',
          illusionRating: 'Extremely high (fluency mistaken for ability)',
          isEmpiricalWinner: false,
        },
        {
          label: 'Deliberate Practice OS (Protocol Gamma)',
          immediateRetention: '85% (High cognitive friction)',
          oneWeekRetention: '86% at 6 months (Durable schema transfer)',
          illusionRating: 'Calibrated; struggles reveal precise knowledge gaps',
          isEmpiricalWinner: true,
        },
      ],
      evidenceDistinction: 'Empirical Evidence Distinction: The performance superiority of deliberate practice over passive repetition is supported by universal empirical consensus across medicine, chess, music, aviation, and software engineering (Ericsson, 1993; Ericsson & Pool, 2016). While the popular "10,000-hour rule" popularized by Malcolm Gladwell suggested an arbitrary quantitative threshold, Ericsson’s actual empirical research showed that the qualitative structure of practice—not raw hours—determines whether an individual reaches elite mastery or plateaus.',
    },
  },
  coreExplanations: [
    {
      id: 'deliberate-practice-ericsson',
      title: '1. Ericsson’s Deliberate Practice Framework: The Edge of Ability',
      tagline: 'Why 10,000 hours of routine experience fails to produce expert mastery',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Replicated Empirical Consensus',
      summary: 'In their landmark 1993 study of elite violinists, pianists, and chess masters, K. Anders Ericsson, Ralf Krampe, and Clemens Tesch-Römer demolished the myth that expertise is either an innate gift or a simple accumulation of hours. They established that expert performance is produced strictly by Deliberate Practice—highly structured activity explicitly designed to improve specific aspects of performance through immediate feedback and edge-of-ability challenge.',
      mechanisms: [
        {
          label: 'Naive Practice vs. Deliberate Practice Dichotomy',
          description: 'Naive practice is doing something repeatedly and expecting repetition alone to improve performance (e.g., playing tennis matches, writing boilerplate CRUD APIs). Deliberate practice requires an explicit target performance goal, full concentration, immediate error feedback, and systematic repetition of the specific sub-skill that currently fails.',
        },
        {
          label: 'The Proximal Edge of Ability (Discomfort as Biological Signal)',
          description: 'Deliberate practice cannot occur inside your comfort zone. It operates at the outer boundary of current capability—what Lev Vygotsky termed the Zone of Proximal Development. Operating at this edge introduces the desirable cognitive friction necessary to trigger synaptic remodeling and myelin sheath thickening around active neural circuits.',
        },
        {
          label: 'Construction of Complex Mental Representations',
          description: 'The defining distinction between experts and novices is the quality of their mental representations (Ericsson & Pool, 2016). Novices perceive isolated, disconnected facts. Experts perceive structured, multi-layered schemas that allow them to simulate scenarios mentally, predict outcomes, and detect anomalies in fractions of a second.',
        },
      ],
      keyInsight: 'Hours spent working do not equal hours spent learning. If your daily routine does not force you to confront tasks where you make errors and calibrate against feedback, you are merely automating current limits.',
      simplifiedModelCaveat: 'Deliberate practice is mentally exhausting; cognitive research indicates that adults can sustain true elite-level deliberate practice for at most 3 to 4 hours per day before cognitive fatigue impairs learning quality.',
    },
    {
      id: 'zimmerman-self-regulation-triad',
      title: '2. Zimmerman’s Cybernetic Self-Regulated Learning Architecture',
      tagline: 'The three-phase closed loop: Forethought, Performance, and Self-Reflection',
      scientificStatus: 'cognitive-model',
      statusLabel: 'Validated Cognitive Architecture Model',
      summary: 'Educational psychologist Barry Zimmerman (2000, 2002) pioneered the social-cognitive model of Self-Regulated Learning (SRL). Zimmerman demonstrated that high achievers do not rely on raw willpower; they operate as self-regulating cybernetic systems. Learning is structured across a recursive, three-phase cycle that continually turns observed performance discrepancies into refined study strategies.',
      mechanisms: [
        {
          label: 'Phase 1: Forethought (Task Analysis & Strategic Planning)',
          description: 'Before beginning a study or practice session, self-regulated learners establish clear process goals (e.g., "Implement the Raft leader election state machine from memory without looking at reference code") rather than vague outcome goals (e.g., "Study Raft"). They select explicit cognitive strategies and assess task difficulty.',
        },
        {
          label: 'Phase 2: Performance Control & Metacognitive Monitoring',
          description: 'During task execution, learners employ self-control strategies (focus defense, environmental restructuring) and continuous self-observation. They actively monitor whether their current strategy is producing expected intermediate states or running into cognitive bottlenecks.',
        },
        {
          label: 'Phase 3: Self-Reflection & Adaptive Causal Attribution',
          description: 'Following task completion, learners engage in self-evaluation, comparing observed outcomes against their initial standards. Crucially, they exhibit adaptive causal attribution: when an error occurs, they attribute the failure to an imperfect strategy or lack of schema consolidation, rather than fixed innate inability, directly informing the next Forethought phase.',
        },
      ],
      keyInsight: 'Autonomous learning is not unstructured exploration. It is a rigorous cybernetic feedback loop where every study session begins with a hypothesis, executes with deliberate focus, and closes with strategic self-reflection.',
      simplifiedModelCaveat: 'Self-regulation is a domain-specific skill that develops through scaffolding. Beginners require external feedback (mentors, test suites, compilers) to calibrate their self-reflection before they can accurately self-regulate.',
    },
    {
      id: 'metacognitive-calibration-os',
      title: '3. Metacognitive Calibration & The Personal Learning Stack',
      tagline: 'Aligning subjective confidence with objective competence to eliminate epistemic blind spots',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Replicated Empirical Consensus',
      summary: 'Metacognition is the cognitive capacity to monitor and control one’s own memory and learning processes. In their foundational research, John Dunlosky and Janet Metcalfe (2008) showed that uncalibrated learners suffer from severe metacognitive illusions: they over-predict their future recall on easy-to-read materials and under-predict the power of retrieval practice. A Personal Learning Operating System bridges this gap by systematically aligning confidence with objective empirical performance.',
      mechanisms: [
        {
          label: 'Absolute vs. Relative Calibration Curves',
          description: 'Relative calibration measures whether a learner knows which items they know better than others. Absolute calibration measures whether subjective confidence ratings (e.g., "I am 90% certain") accurately match objective test accuracy (e.g., scoring 90%). Novices typically show gross overconfidence due to fluency heuristics (the Dunning-Kruger effect).',
        },
        {
          label: 'Epistemic Calibration through Explicit Testing',
          description: 'Subjective feeling of knowing is notoriously unreliable. The only reliable tool for calibrating metacognitive judgment is objective retrieval testing. When a learner makes an explicit prediction and experiences a discrepancy, subjective confidence deflates to match reality, shattering the illusion of competence.',
        },
        {
          label: 'The 4-Layer Personal Learning Operating System Stack',
          description: 'A sustainable personal learning system integrates four operational layers: 1) Curriculum Dependency Graph (what to learn next); 2) Spaced Retrieval Calendar (when to review to prevent decay); 3) Deliberate Practice Sprints (where to struggle at the edge of ability); and 4) Error Reflection Journal (how to convert discrepancies into permanent schema updates).',
        },
      ],
      keyInsight: 'Never trust your intuition about what you have mastered. Build a personal operating system where every confidence claim is backed by verified retrieval evidence and calibrated error logs.',
      simplifiedModelCaveat: 'Metacognitive calibration is not a static character trait; it fluctuates dynamically with sleep, stress, task novelty, and cognitive load. Regular objective verification is required to maintain calibration.',
    },
  ],
  diagram: {
    title: 'The Personal Learning Operating System (PLOS)',
    subtitle: 'The cybernetic architecture of expert skill acquisition and autonomous self-regulation',
    stages: [
      {
        id: 'stage-forethought-scoping',
        name: 'Stage 1: Forethought & Boundary Scoping',
        subtitle: 'Targeting the edge of ability',
        capacity: 'Prefrontal executive goal-setting',
        duration: '5–10 minutes pre-session',
        role: 'Learner identifies a specific cognitive bottleneck at the proximal edge of ability. Establishes concrete process-level criteria and formulates an explicit execution hypothesis.',
        failureMode: 'Aimless browsing: opening textbooks or video courses without a bounded goal guarantees passive consumption and zero deliberate practice.',
        evidenceType: 'Cognitive model (Zimmerman 2000, 2002)',
        practicalFix: 'Write down one single falsifiable process goal before touching your keyboard or notes.',
      },
      {
        id: 'stage-deliberate-practice-sprint',
        name: 'Stage 2: Deliberate Practice Sprint',
        subtitle: 'High-intensity cognitive friction',
        capacity: 'Working memory focused execution',
        duration: '45–60 minutes of uninterrupted work',
        role: 'Learner executes the task from memory at maximum intensity (blank editor reconstruction, problem solving, or architectural synthesis) with zero multitasking.',
        failureMode: 'Tutorial purgatory: copying code side-by-side or glancing at solutions eliminates cognitive friction and suppresses neuroplasticity.',
        evidenceType: 'Empirical consensus (Ericsson 1993; Bjork 1994)',
        practicalFix: 'Keep reference materials closed during practice sprints; struggle for at least 10 minutes before checking documentation.',
      },
      {
        id: 'stage-metacognitive-discrepancy-audit',
        name: 'Stage 3: Metacognitive Discrepancy Audit',
        subtitle: 'Measuring the reality delta',
        capacity: 'Anterior cingulate error detection',
        duration: '10–15 minutes post-sprint',
        role: 'Learner executes automated test suites, benchmarks against canonical implementations, and calculates the exact delta between predicted vs actual outcomes.',
        failureMode: 'Defensive rationalization: blaming test suites or asserting "I understand the concept anyway" preserves erroneous schemas.',
        evidenceType: 'Empirical consensus (Butterfield 2001; Dunlosky 2008)',
        practicalFix: 'Log the exact root cause of every error in an error journal and calibrate your confidence score.',
      },
      {
        id: 'stage-spaced-consolidation-upgrade',
        name: 'Stage 4: Spaced Consolidation & System Upgrades',
        subtitle: 'Closing the cybernetic loop',
        capacity: 'Neocortical schema integration',
        duration: '5 minutes post-audit + delayed reviews',
        role: 'Learner extracts generalizable rules into permanent notes, schedules spaced retrieval reviews in the spaced repetition engine, and updates the curriculum dependency graph.',
        failureMode: 'Isolated execution: failing to schedule spaced reviews allows hard-won schema gains to decay exponentially within 48 hours.',
        evidenceType: 'Empirical consensus (Ebbinghaus 1885; Wozniak 1990)',
        practicalFix: 'Immediately convert identified error points into spaced retrieval prompts for Days 1, 3, and 7.',
      },
    ],
    feedbackLoopDescription: 'The Cybernetic Self-Regulation Cycle: Stage 4 feeds directly into Stage 1 of tomorrow’s sprint. Over time, error rates drop on fundamental skills, allowing the learner to advance their proximal boundary toward world-class technical mastery.',
  },
  exercise: {
    title: 'Self-Regulated Learning Diagnostic: Identify the Operating System Breakdown',
    instruction: 'Analyze each real-world technical study scenario and diagnose which cognitive bottleneck or self-regulatory failure mode is primarily responsible.',
    categories: [
      {
        id: 'attention-bottleneck',
        title: 'Attention Gate Breakdown (Aimless / Vanity Goals)',
        description: 'Vague outcome ambitions, distracted multi-tasking, or absence of explicit forethought process goals.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'working-memory-overload',
        title: 'Working Memory Thrashing (Unguided Edge Overreach)',
        description: 'Attempting tasks vastly beyond the proximal edge of ability without requisite schemas or faded scaffolding.',
        badgeStyle: 'var(--warning-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Illusion of Competence (Naive Experience & Fluency)',
        description: 'Passive repetition, tutorial consumption, or defensive discounting of error signals without deliberate practice.',
        badgeStyle: 'var(--danger-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Schema Consolidation Leak (Unscheduled Decay)',
        description: 'Failing to log feed-forward rules or schedule spaced retrieval reviews, allowing hard-won gains to decay exponentially.',
        badgeStyle: 'var(--success-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-experienced-beginner',
        realWorldContext: 'Elena has worked as a full-stack engineer for 8 years. She writes React components and Express APIs daily. However, when asked to design a distributed cache or diagnose a memory leak in Node.js, she freezes and admits she hasn’t learned anything fundamentally new since her second year on the job.',
        scenario: 'Elena has 8 years of chronological job experience, but her skills have remained completely flat for 6 years.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'Elena is trapped in the Naive Experience Fallacy (Ericsson, 1993). Repeating familiar, automated tasks for 40 hours a week maintains baseline competence but produces zero neuroplastic schema growth because it lacks deliberate practice at the proximal edge of ability with calibrated feedback.',
        evidenceBasedFix: 'Establish 45-minute daily deliberate practice sprints dedicated exclusively to unfamiliar sub-skills (memory profiling, distributed systems) outside of normal production work.',
      },
      {
        id: 'scen-vanity-goal',
        realWorldContext: 'Marcus wants to learn machine learning. His stated goal is: "Become a world-class AI researcher by end of year." Every evening he sits down, opens Twitter, browses HuggingFace, reads random ArXiv abstracts, and feels overwhelmed after 30 minutes without having written a single line of code.',
        scenario: 'Marcus has ambitious outcome aspirations but lacks structured forethought, resulting in daily cognitive paralysis.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'Zimmerman’s (2000) Self-Regulated Learning model demonstrates that distant, abstract outcome goals ("become world-class") provide zero executive guidance for working memory. Without concrete, bounded process goals for Forethought Phase, attention fragments into low-effort browsing.',
        evidenceBasedFix: 'Replace outcome fantasies with micro-process goals: "Today from 8:00 to 8:45 AM, implement backpropagation for a two-layer neural network in pure NumPy from scratch without looking at PyTorch docs."',
      },
      {
        id: 'scen-cognitive-thrashing',
        realWorldContext: 'David started learning Rust last week. On Day 3, he immediately tried to write a multi-threaded, lock-free Raft consensus engine. After 6 hours of fighting the borrow checker with zero progress, he slammed his laptop shut in rage, convinced he lacks the "programming gene."',
        scenario: 'David attempted an ultra-complex systems project with zero foundational schemas in the language, leading to complete executive exhaustion.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'David violated the Proximal Edge of Ability principle (Zone of Proximal Development). Deliberate practice requires working just outside your comfort zone, not in the panic zone. Lacking automated schemas for Rust’s lifetime and ownership model, his working memory suffered catastrophic element interactivity overload.',
        evidenceBasedFix: 'Use faded worked examples and incremental sub-skills: master basic ownership, then single-threaded state machines, before attempting concurrent distributed consensus algorithms.',
      },
      {
        id: 'scen-unscheduled-decay',
        realWorldContext: 'Priya spends an intense 14-hour weekend hacking through a complex WebAssembly compiler tutorial. She builds a working compiler and feels euphoric. Two months later, an interviewer asks her how WebAssembly stack frames and bytecode validation work; she cannot recall even basic terminology.',
        scenario: 'Priya experienced intense one-time learning but failed to schedule spaced retrieval reviews, resulting in total trace extinction.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'According to Ebbinghaus’s (1885) forgetting curve and modern systems consolidation theory, unreviewed episodic memory traces suffer rapid exponential decay. Without spaced retrieval scheduling (Stage 4 of the PLOS), high-intensity massed sessions produce no long-term storage strength.',
        evidenceBasedFix: 'Immediately convert core architecture insights into spaced retrieval flashcards and schedule reviews at expanding intervals (1d, 3d, 7d, 21d, 60d) in the spaced retrieval engine.',
      },
    ],
  },
  quiz: {
    title: 'The Personal Learning Operating System Assessment',
    instruction: 'Validate your understanding of deliberate practice, self-regulated learning cycles, and metacognitive calibration.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-ericsson-deliberate-practice',
        question: 'According to K. Anders Ericsson’s (1993) research, what is the fundamental defining characteristic that separates deliberate practice from ordinary work experience?',
        options: [
          {
            id: 'q1-a',
            text: 'Deliberate practice simply involves spending at least 10,000 hours doing any job related to the domain.',
          },
          {
            id: 'q1-b',
            text: 'Deliberate practice involves targeted tasks specifically designed to improve current weaknesses, conducted at the edge of ability with immediate feedback and repetitive refinement.',
          },
          {
            id: 'q1-c',
            text: 'Deliberate practice requires innate genetic genius and cannot be performed by average learners.',
          },
          {
            id: 'q1-d',
            text: 'Deliberate practice means reading textbooks passively for 8 hours every single day without interruption.',
          },
        ],
        correctOptionId: 'q1-b',
        explanation: 'Ericsson, Krampe, and Tesch-Römer (1993) showed that mere routine experience maintains existing automated performance without advancing it. Deliberate practice specifically isolates sub-skills at the edge of current ability, provides immediate error signals, and involves effortful refinement to build expert mental representations.',
        pedagogicalRationale: 'Clarifies that quality and structural design of practice, not raw hours of work, produce expertise.',
        evidenceNote: 'Ericsson, K. A., Krampe, R. T., & Tesch-Römer, C. (1993). The role of deliberate practice in the acquisition of expert performance. Psychological Review.',
      },
      {
        id: 'q2-zimmerman-phases',
        question: 'In Barry Zimmerman’s (2000, 2002) social-cognitive model of Self-Regulated Learning, what critical cognitive operations occur during Phase 1: Forethought?',
        options: [
          {
            id: 'q2-a',
            text: 'Learners analyze the task, set concrete process-level goals, select execution strategies, and assess their self-efficacy before touching the task.',
          },
          {
            id: 'q2-b',
            text: 'Learners celebrate their accomplishments and brag on social media about their completed project.',
          },
          {
            id: 'q2-c',
            text: 'Learners execute the task unconsciously on autopilot while watching television.',
          },
          {
            id: 'q2-d',
            text: 'Learners evaluate their final exam score after a semester has finished.',
          },
        ],
        correctOptionId: 'q2-a',
        explanation: 'Zimmerman’s Forethought Phase occurs prior to execution. Self-regulated learners break down the task, establish explicit process goals (e.g., "Implement algorithm X from memory"), select deliberate strategies, and activate task interest, priming their cognitive system for focused self-monitoring.',
        pedagogicalRationale: 'Teaches learners to spend 5–10 minutes framing explicit goals and strategies before beginning practice.',
        evidenceNote: 'Zimmerman, B. J. (2002). Becoming a self-regulated learner: An overview. Theory Into Practice.',
      },
      {
        id: 'q3-metacognitive-calibration',
        question: 'According to Dunlosky & Metcalfe (2008), what does high metacognitive calibration mean in technical learning, and why is it essential for autonomous mastery?',
        options: [
          {
            id: 'q3-a',
            text: 'Subjective confidence closely mirrors objective demonstrated test performance, preventing both overconfident neglect of weak areas and unwarranted despair.',
          },
          {
            id: 'q3-b',
            text: 'Learners believe they are 100% correct on every exam question regardless of reality.',
          },
          {
            id: 'q3-c',
            text: 'Learners never make any errors during coding sessions.',
          },
          {
            id: 'q3-d',
            text: 'Learners rely exclusively on external mentors to tell them what they know.',
          },
        ],
        correctOptionId: 'q3-a',
        explanation: 'Metacognitive calibration is the degree of agreement between a learner’s subjective judgment of learning and their actual performance. High calibration prevents the illusion of competence, enabling learners to accurately allocate study time to genuine deficits rather than over-reviewing familiar material.',
        pedagogicalRationale: 'Helps learners understand that accurate self-knowledge is the foundation of efficient autonomous study.',
        evidenceNote: 'Dunlosky, J., & Metcalfe, J. (2008). Metacognition. SAGE Publications.',
      },
      {
        id: 'q4-process-vs-outcome-goals',
        question: 'Why are process goals (e.g., "Write test cases for edge cases before code") empirically superior to outcome goals (e.g., "Score an A on the interview") during deliberate practice sprints?',
        options: [
          {
            id: 'q4-a',
            text: 'Process goals eliminate the need to ever take an interview or test.',
          },
          {
            id: 'q4-b',
            text: 'Process goals direct conscious working memory toward actionable execution mechanics and strategy monitoring, reducing performance anxiety and enabling precise error detection.',
          },
          {
            id: 'q4-c',
            text: 'Outcome goals are scientifically proven to be impossible for humans to visualize.',
          },
          {
            id: 'q4-d',
            text: 'Process goals allow students to pass technical exams without studying.',
          },
        ],
        correctOptionId: 'q4-b',
        explanation: 'Process goals focus attention on specific behavioral strategies within the learner’s immediate control. This maximizes working memory availability for task execution and error detection, whereas outcome goals induce anxiety about evaluation and fail to provide actionable operational feedback (Zimmerman, 2002).',
        pedagogicalRationale: 'Encourages learners to convert vague life ambitions into concrete, actionable daily execution heuristics.',
        evidenceNote: 'Zimmerman, B. J., & Schunk, D. H. (2001). Self-Regulated Learning and Academic Achievement. Routledge.',
      },
    ],
  },
  practicalTask: {
    title: 'The Daily Deliberate Practice Sprint & Calibration Protocol',
    summary: 'A structured, repeatable 3-step operating routine to transform daily study into high-efficiency deliberate practice.',
    steps: [
      {
        id: 'step-forethought-process-goal',
        number: 1,
        title: 'Forethought: Boundary & Process Goal Definition',
        prompt: 'Select your technical focus area today. Identify the specific sub-skill at the edge of your current ability. Formulate one explicit process goal and execution hypothesis:',
        placeholder: 'e.g., Focus: PostgreSQL Query Optimizer. Edge: Understanding index-only scans vs bitmap heap scans. Process Goal: "Write 3 SQL queries that trigger bitmap heap scans, predict the cost in EXPLAIN ANALYZE before running, and verify buffer hit ratios." Hypothesis: "The bitmap index scan will be chosen when row selectivity is between 5% and 15%."...',
        example: 'Focus: Rust concurrency. Edge: RwLock lock contention. Process Goal: "Implement a thread-safe read-heavy cache using parking_lot::RwLock, run a 10-thread benchmark, and predict throughput delta compared to Mutex." Hypothesis: "RwLock will yield >4x throughput when read-to-write ratio exceeds 9:1."',
        cognitiveRationale: 'Explicit forethought establishes active expected values (V_expected) in working memory, priming dopamine circuits for high-potency prediction error signals if reality diverges.',
      },
      {
        id: 'step-deliberate-execution-discrepancy',
        number: 2,
        title: 'Deliberate Sprint & Micro-Discrepancy Logging',
        prompt: 'Conduct a 45-minute focused sprint with zero reference checking. Run your tests or benchmarks. Record the exact discrepancy between your prediction and reality:',
        placeholder: 'e.g., Execution: Ran EXPLAIN ANALYZE on query 2. Predicted: Bitmap Index Scan with cost < 50. Actual: Sequential Scan with cost 1420! Discrepancy: The planner chose a SeqScan because random_page_cost was set to default 4.0 and table statistics were outdated after a bulk insert. Surprise: High.',
        example: 'Execution: Benchmark showed RwLock was 20% slower than Mutex under write-heavy loads! Discrepancy: High write frequency caused cache-line bouncing and lock starvation. Surprise: High.',
        cognitiveRationale: 'Confronting objective empirical discrepancies under high attention triggers the P300 hypercorrection cascade, unlocking neuroplasticity to rewrite faulty schemas.',
      },
      {
        id: 'step-self-reflection-system-upgrade',
        number: 3,
        title: 'Self-Reflection: Feed-Forward Heuristic & Spaced Scheduling',
        prompt: 'Formulate one actionable feed-forward rule to update your mental model, and schedule your first spaced retrieval review for this concept:',
        placeholder: 'e.g., Feed-Forward Rule: "When query plans choose unexpected SeqScans on indexed columns, always inspect pg_stats for n_distinct values and test with SET enable_seqscan = off before altering indexes." Review Scheduled: Tomorrow 9:00 AM (Day 1 retrieval flashcard)...',
        example: 'Feed-Forward Rule: "Use Mutex or lock-free crossbeam channels when write concurrency exceeds 15%; reserve RwLock strictly for heavily read-dominated workloads." Review Scheduled: Spaced review registered for Day 1 and Day 3.',
        cognitiveRationale: 'Closing the sprint with an explicit feed-forward heuristic translates acute prediction errors into transferable neocortical schemas and prevents forgetting.',
      },
    ],
  },
};
