import type { Lesson } from '../types/learning.ts';

export const LESSON_FITTS_POSNER_STAGES: Lesson = {
  id: 'fitts-posner-stages',
  chapterId: 'ch-13-automaticity',
  number: '13.1',
  title: 'The Three Stages of Skill Acquisition',
  subtitle: 'Cognitive, associative, and autonomous phases of proceduralization',
  readingTimeMinutes: 15,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'Why does learning to drive a manual transmission or write Vim macros feel overwhelming on Day 1—requiring 100% of conscious concentration—yet within six months you can execute it flawlessly while discussing philosophy?',
    teaser: 'Proceduralization is the biological compression of declarative rules into ballistic motor and cognitive schemas mediated by a neuroanatomical handover from prefrontal cortex to the basal ganglia.',
    hookNote: 'In 1967, psychologists Paul Fitts and Michael Posner published their classic tripartite model of skill acquisition in *Human Performance*, establishing the canonical architecture for how humans learn procedural skills. They demonstrated that every complex skill—from touch-typing and instrument playing to debugging production kernel drivers—migrates through three distinct neurological phases: the **Cognitive Stage** (declarative encoding, clumsy verbal mediation, and massive prefrontal working memory load), the **Associative Stage** (elimination of gross errors, chunking of discrete actions, and reduced attentional friction), and the **Autonomous Stage** (ballistic, sub-cortical execution mediated by the dorsal striatum, resistant to stress and freeing working memory). In this lesson, we dissect John R. Anderson’s ACT-R knowledge compilation ($P_1 + P_2 \\to P_{12}$ rule production composition), Newell & Rosenbloom’s Power Law of Practice, and the exact neuroanatomical shift from prefrontal cortex to basal ganglia striatum.',
  },
  prediction: {
    prompt: 'Before analyzing the Fitts & Posner progression, consider this clinical cognitive psychology experiment: Two groups of software engineers are learning a completely new terminal-based text editor (like Vim/Neovim). Group A is in the "Cognitive Stage" (Day 2 of learning, relying on a cheat sheet of keystrokes); Group B is in the "Autonomous Stage" (Year 3 of daily use, touch-typing macros automatically). Both groups are asked to execute a complex multi-line text refactoring under a dual-task condition: while editing, they must listen to an auditory stream of random numbers and speak aloud whenever an odd number occurs. Furthermore, both groups are suddenly interrupted and asked: "Which exact key sequence did you just press to delete that inner code block?" What does empirical cognitive science predict regarding dual-task interference and retrospective declarative recall across the two groups?',
    context: 'Both groups have identical general working memory spans and equal verbal fluency:',
    options: [
      {
        id: 'opt-equal-multitasking-capacity',
        strategy: 'Hypothesis A: General Processing Uniformity',
        description: 'Both groups suffer an identical 50% drop in editing speed during the audio dual-task, and both can recite the exact key sequence with equal declarative precision.',
      },
      {
        id: 'opt-proceduralization-attentional-handover',
        strategy: 'Hypothesis B: The Proceduralization Trade-Off',
        description: 'Group B (Autonomous) experiences virtually zero slowdown during the dual-task because execution has shifted to sub-cortical circuits freeing working memory, BUT Group B struggles to recall the exact key letters pressed; Group A (Cognitive) suffers severe task collapse during the dual-task, but can recite the exact keys with high declarative precision (Fitts & Posner, 1967; Anderson, 1982).',
      },
      {
        id: 'opt-cognitive-stage-superiority',
        strategy: 'Hypothesis C: Novice Cognitive Advantage',
        description: 'Group A (Cognitive) outperforms Group B on both tasks because their conscious prefrontal attention is actively heightened and primed for novel sensory inputs.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-proceduralization-attentional-handover',
      headline: 'Proceduralization Frees Working Memory but Decouples Declarative Access (Fitts & Posner, 1967; Anderson, 1982).',
      explanation: 'In the Cognitive Stage (Group A), skill execution relies on explicit declarative rules held in prefrontal working memory. The learner talks themselves through the steps ("press c, then i, then w"). Because working memory is fully saturated by this verbal mediation, adding a second cognitive task (monitoring audio digits) causes catastrophic cognitive interference. In contrast, in the Autonomous Stage (Group B), deliberate repetition has compiled declarative rules into procedural production rules (ACT-R compilation) mediated by the dorsolateral striatum (basal ganglia). The skill executes ballistically with minimal prefrontal executive control, allowing seamless dual-task performance. However, proceduralization creates an "Expertise Amnesia": because execution bypasses the prefrontal declarative buffer, autonomous performers cannot explicitly report the individual motor components ("I don\'t know what keys my fingers press, my hands just know where to go").',
      optionFeedback: {
        'opt-equal-multitasking-capacity': {
          title: 'Your Choice: Hypothesis A (Uniform Interference Myth)',
          verdict: 'Refuted by Dual-Task Paradigm Research',
          analysis: 'Fitts & Posner (1967) and Posner & Snyder (1975) proved that automaticity is operationally defined by resistance to dual-task cognitive load, whereas cognitive-stage execution requires full prefrontal bandwidth.',
        },
        'opt-proceduralization-attentional-handover': {
          title: 'Your Choice: Hypothesis B (The Proceduralization Trade-Off)',
          verdict: 'Empirical Cognitive Science Consensus',
          analysis: 'Precisely accurate! Proceduralization migrates control from prefrontal cortex (declarative, slow, dual-task sensitive) to basal ganglia (procedural, ballistic, dual-task immune), while sacrificing conscious declarative introspection.',
        },
        'opt-cognitive-stage-superiority': {
          title: 'Your Choice: Hypothesis C (The Novice Superiority Illusion)',
          verdict: 'Contradicted by Empirical Findings',
          analysis: 'Cognitive stage learners experience severe working memory bottlenecking; attempting to multi-task during early skill acquisition produces error rates exceeding 60%.',
        },
      },
      comparisons: [
        {
          label: 'Autonomous Stage (Group B, Year 3)',
          immediateRetention: 'Flawless dual-task performance; 0% interference from auditory distraction',
          oneWeekRetention: 'Procedural skill remains stable for decades without explicit rehearsal',
          illusionRating: 'Expertise amnesia; poor declarative recall of micro-keystrokes',
          isEmpiricalWinner: true,
        },
        {
          label: 'Cognitive Stage (Group A, Day 2)',
          immediateRetention: 'Severe dual-task collapse; 68% error spike under auditory load',
          oneWeekRetention: 'Rapid decay of unpracticed declarative rules without notes',
          illusionRating: 'High declarative fidelity; learner can verbally justify every keystroke',
          isEmpiricalWinner: false,
        },
      ],
      evidenceDistinction: 'The cognitive stage requires active prefrontal verbal mediation; proceduralization compiles rules into ballistic sub-cortical execution that frees working memory at the cost of declarative introspection.',
    },
  },
  coreExplanations: [
    {
      id: 'fitts-posner-tripartite-progression',
      title: 'Fitts & Posner (1967): The Tripartite Progression of Skill Acquisition',
      tagline: 'The three universal stages from conscious friction to ballistic procedural mastery',
      statusLabel: 'Foundational Cognitive Psychology Benchmark (1967)',
      scientificStatus: 'empirical-consensus',
      summary: 'In 1967, Paul Fitts and Michael Posner formulated the classic three-stage model of skill acquisition: Cognitive, Associative, and Autonomous. This progression describes the transformation of explicit knowledge into automated procedural execution.',
      mechanisms: [
        {
          label: 'Stage 1: The Cognitive Stage (Declarative & Fragmented)',
          description: 'The learner uses explicit declarative facts and verbal inner speech to guide execution. Performance is slow, erratic, and consumes 100% of working memory bandwidth. Any distraction or dual-task load causes immediate execution failure.',
        },
        {
          label: 'Stage 2: The Associative Stage (Smoothing & Chunking)',
          description: 'Gross errors are eliminated. Discrete sub-actions begin linking into contiguous action chunks. Verbal self-talk diminishes as perceptual-motor feedback directly triggers successive actions. Attentional demand drops by ~50%.',
        },
        {
          label: 'Stage 3: The Autonomous Stage (Ballistic & Sub-Cortical)',
          description: 'The skill executes rapidly, effortlessly, and with minimal conscious oversight. Performance is highly resistant to stress and environmental interference, freeing working memory for high-level tactical planning.',
        },
      ],
      keyInsight: 'Skill progression is the systematic liberation of prefrontal working memory through procedural compilation.',
      simplifiedModelCaveat: 'Stages are not rigid binary switches; different sub-components of a complex macro-skill (e.g. driving or surgery) can be at different stages simultaneously.',
    },
    {
      id: 'anderson-act-r-knowledge-compilation',
      title: 'Anderson’s ACT-R: Knowledge Compilation & Production Rules',
      tagline: 'How proceduralization collapses declarative if-then rules into single ballistic compositions',
      statusLabel: 'Computational Cognitive Architecture Benchmark',
      scientificStatus: 'cognitive-model',
      summary: 'John R. Anderson’s ACT-R (Adaptive Control of Thought-Rational) architecture computationally models proceduralization as "Knowledge Compilation." Through Composition and Proceduralization, declarative retrieved facts are compiled directly into compiled production rules ($IF \\to THEN$).',
      mechanisms: [
        {
          label: 'Declarative Fact Retrieval vs Production Execution',
          description: 'In early learning, the system must perform an expensive retrieval from declarative memory ("Fact: To indent code in Vim, press >>"). In skilled performance, the declarative step is bypassed entirely: the visual goal directly triggers the production action.',
        },
        {
          label: 'Production Composition ($P_1 + P_2 \\to P_{12}$)',
          description: 'Consecutive micro-productions that fire in sequence are collapsed into a single macro-production. Instead of firing three separate rules (Select line $\\to$ Copy line $\\to$ Paste line), the brain compiles a single atomic production rule ($P_{duplicate}$).',
        },
        {
          label: 'Newell & Rosenbloom (1981): The Power Law of Practice',
          description: 'Execution time $T$ follows a power-law function of practice trials $N$: $T = a \\cdot N^{-b}$. Early trials produce massive speedups as productions compile; later speedups become asymptotic, requiring exponential trials for linear gains.',
        },
      ],
      keyInsight: 'Proceduralization eliminates memory retrievals: it converts "knowing that" into "knowing how" by compiling declarative facts into atomic production rules.',
      simplifiedModelCaveat: 'Compiled production rules are rigid; if an edge condition changes slightly, a compiled production rule may fire erroneously unless inhibited by prefrontal control.',
    },
    {
      id: 'neurobiology-cortical-to-striatal-handover',
      title: 'Neurobiology of Automaticity: The Prefrontal-to-Striatal Shift',
      tagline: 'The anatomical handover of control from the prefrontal cortex to the dorsal striatum and basal ganglia',
      statusLabel: 'Cognitive Neuroscience & Neuroimaging Consensus',
      scientificStatus: 'neurobiological-mechanism',
      summary: 'Functional neuroimaging (fMRI and PET) confirms that skill acquisition is accompanied by a massive reorganization of neural activation. Control shifts from the dorsolateral prefrontal cortex (DLPFC) and anterior cingulate to the motor cortex, dorsal striatum (putamen), and cerebellum.',
      mechanisms: [
        {
          label: 'Early Stage: DLPFC & Executive Cortical Gating',
          description: 'During the cognitive stage, the DLPFC, premotor cortex, and anterior cingulate show high metabolic activity. The brain actively maintains task goals in conscious working memory, monitoring error feedback via dopaminergic prediction error signals.',
        },
        {
          label: 'The Striatal-Cerebellar Consolidation Shift',
          description: 'As thousands of repetitions occur, synaptic potentiation transfers routine motor and cognitive sequences to the sensorimotor striatum (putamen) and cerebellar circuits. Basal ganglia loop circuits automate sequence chunking.',
        },
        {
          label: 'Prefrontal Deactivation & Attentional Unburdening',
          description: 'In the autonomous stage, DLPFC activation returns to baseline during skill execution. The prefrontal cortex is completely unburdened, allowing the learner to allocate conscious executive focus to macro-strategy or environmental monitoring.',
        },
      ],
      keyInsight: 'Automaticity is not "doing it better with your prefrontal cortex"; it is offloading the skill to sub-cortical striatal hardware so your prefrontal cortex can do something else.',
      simplifiedModelCaveat: 'If environmental conditions turn adversarial or unexpected errors occur, the prefrontal cortex must rapidly re-engage and override striatal automaticity.',
    },
  ],
  diagram: {
    title: 'The Fitts & Posner Proceduralization Engine',
    subtitle: 'From prefrontal declarative friction to associative rule composition and dorsal striatal automaticity',
    stages: [
      {
        id: 'stage-cognitive-declarative-encoding',
        name: 'Stage 1: Cognitive Declarative Control',
        subtitle: 'Slow, verbal mediation with heavy prefrontal load',
        capacity: '100% prefrontal working memory allocation',
        duration: 'Initial hours to days of deliberate practice',
        role: 'The learner explicitly retrieves declarative rules ("Press command-shift-P, then type git rebase"). Performance is hesitant, jerky, and fragile to distraction.',
        failureMode: 'Working Memory Saturation: Attempting to multitask during this stage causes total task failure and error compounding.',
        evidenceType: 'Classic psychology & ACT-R architecture (Fitts & Posner, 1967; Anderson, 1982)',
        practicalFix: 'Eliminate all dual-task distraction; use external cheatsheets and quiet focus until basic mechanical rules are understood.',
      },
      {
        id: 'stage-associative-rule-composition',
        name: 'Stage 2: Associative Rule Composition',
        subtitle: 'Production compilation and chunk smoothing',
        capacity: '~50% prefrontal working memory load',
        duration: 'Days to weeks of repetitive practice',
        role: 'ACT-R production composition collapses individual if-then statements into contiguous chunks ($P_1 + P_2 \\to P_{12}$). Gross errors disappear, execution speeds up, and internal verbalization fades.',
        failureMode: 'Premature Plateau: Stopping repetitive practice before sub-actions coalesce into smooth ballistic chunks.',
        evidenceType: 'Power law of practice & computational modeling (Newell & Rosenbloom, 1981)',
        practicalFix: 'Perform timed isolated micro-katas targeting the sequence transitions to accelerate chunk bonding.',
      },
      {
        id: 'stage-autonomous-striatal-execution',
        name: 'Stage 3: Autonomous Striatal Execution',
        subtitle: 'Sub-cortical basal ganglia execution with near-zero prefrontal cost',
        capacity: '<10% prefrontal working memory load',
        duration: 'Months to years of continuous real-world use',
        role: 'Execution is offloaded to the sensorimotor putamen and cerebellum. Skills fire ballistically, immune to external cognitive load, freeing working memory for high-level tactical oversight.',
        failureMode: 'Arrested Development Plateau: Because the skill is now automated and comfortable, the brain stops adapting unless deliberately disrupted.',
        evidenceType: 'Functional neuroimaging & striatal neuroscience (Ericsson, 1993; Graybiel, 2008)',
        practicalFix: 'Periodically challenge automated routines by adding novel constraints or deliberate friction to force conscious re-evaluation.',
      },
      {
        id: 'stage-metacognitive-executive-supervision',
        name: 'Stage 4: Executive Boundary Supervision',
        subtitle: 'Prefrontal monitoring for anomaly interrupts',
        capacity: 'Background threat-monitoring thread',
        duration: 'Continuous real-time anomaly detection',
        role: 'The prefrontal cortex operates in a supervisory monitoring mode. As long as sensory feedback matches expectations, striatal autonomy continues; when an anomaly occurs, prefrontal control instantly interrupts automaticity.',
        failureMode: 'Lapse of Supervisory Attention: Mindless autopilot execution continuing past an altered context, causing catastrophic silent errors.',
        evidenceType: 'Cognitive control & anterior cingulate cortex gating (Botvinick et al., 2001)',
        practicalFix: 'Establish explicit stop-the-line triggers that mandate conscious prefrontal re-engagement whenever metrics diverge by >5%.',
      },
    ],
    feedbackLoopDescription: 'Skills systematically transition from prefrontal declarative retrieval to associative chunk composition, culminating in ballistic striatal automaticity overseen by executive supervisory monitors.',
  },
  exercise: {
    title: 'The Skill Acquisition Stage Diagnostic Exercise',
    instruction: 'Analyze four real-world software engineering, cockpit aviation, and medical scenarios. Diagnose whether the learner is struggling with Cognitive-Stage Overload, Incomplete Associative Chunking, Autonomous Autopilot Complacency, or Anomaly-Interruption Failure, and prescribe the evidence-grounded fix.',
    categories: [
      {
        id: 'attention-bottleneck',
        title: 'Cognitive-Stage Overload',
        description: 'Attempting to perform dual-task work or high-speed execution while still in the declarative cognitive stage, causing working memory collapse.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'working-memory-overload',
        title: 'Incomplete Associative Chunking',
        description: 'Sub-skills have not yet compiled into contiguous production rules ($P_1 + P_2 \\to P_{12}$), causing hesitant, stuttering transitions between steps.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Autonomous Autopilot Complacency',
        description: 'A routine has become completely automated and comfortable, freezing professional skill development in Fitts & Posner’s autonomous plateau.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Anomaly-Interruption Failure',
        description: 'Executing an automated striatal habit in an altered or adversarial environment without prefrontal supervisory interruption, causing catastrophic errors.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-junior-vim-screen-share-panic',
        realWorldContext: 'Remote Pair-Programming Onboarding Session',
        scenario: 'Marcus just started using Vim 3 days ago. During a routine pairing session, a senior engineer asks Marcus to share his screen and explain his architectural design while simultaneously editing the code. Marcus immediately begins typing erratic characters into the editor, repeatedly deletes the wrong files, and stammers incoherently.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'Marcus is in Fitts & Posner’s Cognitive Stage for Vim navigation. Keystrokes require explicit declarative rule retrieval ("Which key deletes to end of line?"), consuming 100% of prefrontal working memory. Forcing him to speak and explain architecture (a heavy verbal prefrontal task) causes catastrophic cognitive interference.',
        evidenceBasedFix: 'Protect the cognitive stage from dual-task interference: permit Marcus to edit silently without talking, or use a familiar GUI editor during architecture discussions until Vim keybindings reach the associative stage.',
      },
      {
        id: 'scen-hesitant-git-rebase-stutter',
        realWorldContext: 'Software Developer Preparing Feature PRs',
        scenario: 'Elena knows all the basic Git commands (`git fetch`, `git rebase`, `git add`, `git rebase --continue`), but every time she resolves a merge conflict, she pauses for 45 seconds at each step, checks Google to verify the exact command flag, and types each command with intense hesitation.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'Elena is stuck in the Incomplete Associative Chunking phase. Her knowledge is still stored as isolated declarative facts rather than compiled ACT-R production chunks ($P_{fetch} + P_{rebase} \\to P_{update}$). The transitions between micro-actions require separate memory retrievals.',
        evidenceBasedFix: 'Accelerate production composition: have Elena practice 20 consecutive conflict-resolution micro-katas in a throwaway repo until the 4-step sequence collapses into a single fluid macro-production.',
      },
      {
        id: 'scen-ten-year-copy-paste-stagnation',
        realWorldContext: 'Senior Backend Engineer Writing CRUD Endpoints',
        scenario: 'Kevin has written REST APIs using the same framework for 8 years. He can build a complete endpoint in 15 minutes while listening to podcasts, without consulting documentation. When his company introduces an asynchronous event-driven framework requiring non-blocking reactive streams, Kevin actively resists the change, claiming "our existing way is already perfect."',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'Kevin has plateaued in the Autonomous Autopilot stage. Because his daily tasks execute effortlessly through automated striatal circuits, biological homeostasis prevents synaptic adaptation. His effortless fluency has created an illusion of total mastery, arresting further technical growth.',
        evidenceBasedFix: 'Disrupt automaticity via Deliberate Practice: assign Kevin tasks that deliberately break his automated patterns, requiring asynchronous reactive paradigms that force his brain back into the effortful cognitive stage.',
      },
      {
        id: 'scen-pilot-autopilot-mode-confusion-incident',
        realWorldContext: 'Commercial Aviation or Production Database Maintenance',
        scenario: 'A database administrator regularly runs `DROP TABLE temp_staging;` at the end of their daily migration script. One morning, the administrator connects to the production primary database instead of staging. Out of sheer habit, their fingers automatically type `DROP TABLE temp_staging;`—except on production, that table contains active customer data. They press Enter without realizing they are in production.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'The administrator suffered Anomaly-Interruption Failure. The command sequence was so thoroughly proceduralized that it executed as an autonomous striatal motor habit without prefrontal supervisory verification. When environmental context changed (staging $\\to$ production), the supervisory monitoring circuit failed to intervene.',
        evidenceBasedFix: 'Implement structural forcing functions: add color-coded terminal prompts (bright red for production) and require an explicit non-automated confirmation token (e.g. typing the cluster hostname) to force prefrontal executive re-engagement.',
      },
    ],
  },
  quiz: {
    title: 'The Three Stages of Skill Acquisition Formative Assessment',
    instruction: 'Demonstrate your mastery of Fitts & Posner’s three stages, ACT-R knowledge compilation, and the prefrontal-to-striatal handover. Score 75% or higher to verify.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-fitts-posner-tripartite-characteristics',
        question: 'According to Fitts & Posner (1967), what is the key cognitive differentiator between the "Cognitive Stage" and the "Autonomous Stage" of skill acquisition?',
        options: [
          {
            id: 'q1-a',
            text: 'The Cognitive Stage is executed exclusively while asleep, while the Autonomous Stage occurs during exercise.',
          },
          {
            id: 'q1-b',
            text: 'The Cognitive Stage relies on explicit verbal mediation and consumes heavy working memory capacity, whereas the Autonomous Stage executes ballistically with minimal attentional demand.',
          },
          {
            id: 'q1-c',
            text: 'The Autonomous Stage is 100% error-free in all possible environments without exception.',
          },
          {
            id: 'q1-d',
            text: 'The Cognitive Stage is only experienced by children under age 12.',
          },
        ],
        correctOptionId: 'q1-b',
        explanation: 'Fitts & Posner defined the Cognitive Stage as characterized by conscious verbal self-talk and heavy prefrontal working memory load. As proceduralization progresses to the Autonomous Stage, execution becomes automated, rapid, and requires minimal conscious attention, freeing working memory for dual tasks.',
        pedagogicalRationale: 'Establishes the foundational distinction between early declarative control and late procedural automaticity.',
        evidenceNote: 'Fitts, P. M., & Posner, M. I. (1967). Human performance. Brooks/Cole.',
      },
      {
        id: 'q2-anderson-actr-production-composition',
        question: 'In John R. Anderson’s ACT-R cognitive architecture, what mechanism explains how complex procedural skills become faster with practice?',
        options: [
          {
            id: 'q2-a',
            text: 'Production Composition: consecutive declarative retrievals and micro-rules are compiled into a single atomic production rule ($P_1 + P_2 \\to P_{12}$), eliminating intermediate memory retrievals.',
          },
          {
            id: 'q2-b',
            text: 'The brain physically grows new sensory organs to process keyboard input faster.',
          },
          {
            id: 'q2-c',
            text: 'All previous knowledge is deleted from the cortex to make room for new typing commands.',
          },
          {
            id: 'q2-d',
            text: 'The speed of light in the nervous system increases by 400% after 100 hours of typing.',
          },
        ],
        correctOptionId: 'q2-a',
        explanation: 'In ACT-R theory, proceduralization occurs through knowledge compilation. Consecutive production rules that execute in sequence are composed into a single, unified macro-rule. This eliminates the need to retrieve intermediate declarative facts from memory, dramatically reducing latency.',
        pedagogicalRationale: 'Explains the computational mechanism of proceduralization and speedup.',
        evidenceNote: 'Anderson, J. R. (1982). Acquisition of cognitive skill. Psychological Review, 89(4), 369-406.',
      },
      {
        id: 'q3-neuroanatomy-prefrontal-to-striatal-shift',
        question: 'What neuroanatomical shift occurs in functional brain imaging as a performer transitions from the cognitive stage to the autonomous stage?',
        options: [
          {
            id: 'q3-a',
            text: 'Metabolic activity shifts from the dorsolateral prefrontal cortex (executive control) to the dorsal striatum (putamen/basal ganglia) and cerebellum (automated sequence execution).',
          },
          {
            id: 'q3-b',
            text: 'The brain switches entirely from glucose metabolism to pure solar radiation processing.',
          },
          {
            id: 'q3-c',
            text: 'The hippocampus physically detaches from the temporal lobe and moves into the spinal cord.',
          },
          {
            id: 'q3-d',
            text: 'All neuronal firing ceases entirely, allowing the body to be guided by external gravitational fields.',
          },
        ],
        correctOptionId: 'q3-a',
        explanation: 'Neuroimaging studies show that early skill learning heavily activates the dorsolateral prefrontal cortex (DLPFC) and anterior cingulate for executive control. As automaticity develops, metabolic demand in the prefrontal cortex declines, and execution is dominated by sub-cortical loops connecting the dorsal striatum (putamen), motor cortex, and cerebellum.',
        pedagogicalRationale: 'Grounds cognitive automaticity in concrete neurobiological systems.',
        evidenceNote: 'Graybiel, A. M. (2008). Habits, rituals, and the evaluative brain. Annual Review of Neuroscience, 31, 359-387.',
      },
      {
        id: 'q4-power-law-of-practice-newell-rosenbloom',
        question: 'What does Newell & Rosenbloom’s (1981) "Power Law of Practice" predict regarding the relationship between the number of practice trials and performance speedup?',
        options: [
          {
            id: 'q4-a',
            text: 'Performance speed gains are completely linear: trial 1,000 produces the exact same speedup as trial 1.',
          },
          {
            id: 'q4-b',
            text: 'Performance time decreases as a power function of trials ($T = a \\cdot N^{-b}$), meaning initial trials produce rapid, dramatic speedups, while subsequent gains require exponentially more practice trials.',
          },
          {
            id: 'q4-c',
            text: 'Performance gets slower and slower the more you practice until total paralysis occurs.',
          },
          {
            id: 'q4-d',
            text: 'Practice has no measurable mathematical relationship with execution latency.',
          },
        ],
        correctOptionId: 'q4-b',
        explanation: 'Newell & Rosenbloom established that learning curves across motor, cognitive, and perceptual skills follow a Power Law ($T = a \\cdot N^{-b}$). Massive speedups occur during early trials as declarative rules compile into chunks; as expertise increases, the curve flattens asymptotically, requiring exponentially greater deliberate effort for marginal speed gains.',
        pedagogicalRationale: 'Provides the empirical mathematical law describing skill progression curves.',
        evidenceNote: 'Newell, A., & Rosenbloom, P. S. (1981). Mechanisms of skill acquisition and the law of practice. Cognitive Skills and Their Acquisition, 1-55.',
      },
    ],
  },
  practicalTask: {
    title: 'The Three-Stage Proceduralization Protocol',
    summary: 'A 3-step practical protocol to scaffold a complex technical procedure through the Cognitive, Associative, and Autonomous stages without premature automated plateauing.',
    steps: [
      {
        id: 'step-externalize-declarative-scaffolding',
        number: 1,
        title: 'Cognitive Stage: Externalize Declarative Checklists & Eliminate Dual Tasks',
        prompt: 'Select a complex technical procedure you are currently learning (e.g. Git interactive rebase, Kubernetes cluster rollback, Vim macro chaining, low-level socket programming). Write down the step-by-step declarative checklist so your working memory does not need to store rules:',
        placeholder: 'e.g., Git Interactive Rebase: (1) git rebase -i HEAD~5, (2) Mark commits as "fixup" or "squash", (3) Save and close editor, (4) Resolve conflicts in affected files, (5) git add <file>, (6) git rebase --continue. Checklist mounted on second monitor...',
        example: 'Kubernetes Emergency Pod Rollback: (1) kubectl rollout history deployment/<name>, (2) Inspect revision annotations, (3) kubectl rollout undo deployment/<name> --to-revision=<N>, (4) Watch status via kubectl rollout status deployment/<name> -w.',
        cognitiveRationale: 'In the cognitive stage, working memory is saturated by verbal mediation. Externalizing the sequence onto a checklist frees executive bandwidth for executing the mechanical steps correctly (Fitts & Posner, 1967).',
      },
      {
        id: 'step-deliberate-repetition-production-composition',
        number: 2,
        title: 'Associative Stage: Execute 15 Isolated Micro-Katas to Drive Rule Composition',
        prompt: 'Design a rapid micro-kata environment where you can execute the procedure 15 times in succession under throwaway conditions. How will you string individual actions together to trigger ACT-R production composition ($P_1 + P_2 \\to P_{12}$)?',
        placeholder: 'e.g., "Created a bash script that generates 15 synthetic git merge conflict repos. Timed myself resolving all 15 in sequence without looking at the checklist. By repetition 8, my fingers executed git add and git rebase --continue as a single fluid macro."...',
        example: 'Vim Refactoring Katas: Prepared 20 mock functions in a test buffer. Drilled `ci"replacement<Esc>j.` repeatedly until changing inner quotes and moving down coalesced into a single automatic muscle chunk.',
        cognitiveRationale: 'Repetitive contiguous execution triggers ACT-R production composition, collapsing multiple if-then retrievals into atomic procedural rules (Anderson, 1982).',
      },
      {
        id: 'step-establish-supervisory-circuit-breaker',
        number: 3,
        title: 'Autonomous Stage: Add Stress Constraints & Establish Supervisory Anomaly Monitors',
        prompt: 'Once execution feels fluid, introduce dual-task or time pressure to verify automaticity. Simultaneously, define an explicit "Circuit Breaker" to ensure your autonomous habit does not cause silent production catastrophes:',
        placeholder: 'e.g., "Verification: Executed the rollback script in under 15 seconds while counting backwards by 7s. Circuit Breaker: Script explicitly checks current kubectl context and requires typing prod-cluster-name if in production, preventing mindless autopilot execution."...',
        example: 'Database Migration Circuit Breaker: Automated macro runs effortlessly. Added a pre-hook check that aborts if target database has active replica lag > 100ms, forcing prefrontal conscious intervention before dropping tables.',
        cognitiveRationale: 'Procedural automaticity frees working memory but risks mindless autopilot errors; adding explicit circuit breakers forces prefrontal supervisory re-engagement when context changes (Graybiel, 2008).',
      },
    ],
  },
};
