import type { Lesson } from '../types/learning.ts';

export const LESSON_COGNITIVE_LOAD_SCHEMA: Lesson = {
  id: 'cognitive-load-schema',
  chapterId: 'ch-1-architecture',
  number: '1.3',
  title: 'Cognitive Load & Schema Construction',
  subtitle: 'Working Memory Limits and the Architecture of Expertise',
  readingTimeMinutes: 15,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'Why can a senior architect scan a 500-line distributed systems diagram in 10 seconds and instantly spot a concurrency flaw, while a beginner feels their brain freeze after reading three boxes?',
    teaser: 'The difference between novice overwhelm and expert intuition is not raw biological compute or IQ—it is the compression format of long-term memory schemas.',
    hookNote: 'Conscious working memory can only manipulate ~3 to 4 novel information elements simultaneously (Cowan, 2001). Novices must process each element individually, instantly saturating working memory. Experts have consolidated thousands of interconnected elements into single hierarchical schemas, allowing them to process vast systems within the exact same biological bandwidth (Sweller, 1988; Chase & Simon, 1973).',
  },
  prediction: {
    prompt: 'Before reviewing Cognitive Load Theory, test your pedagogical intuition: Which instructional approach produces faster skill acquisition and superior problem-solving transfer for beginners learning a complex algorithmic domain?',
    context: 'Two groups of junior developers with no prior knowledge of graph traversal algorithms spend 4 hours learning Breadth-First Search (BFS) and Depth-First Search (DFS):',
    options: [
      {
        id: 'opt-discovery',
        strategy: 'Protocol Alpha: Unguided Problem-Solving & Discovery',
        description: 'Learners are given a series of unsolved graph problems from minute one and encouraged to struggle through them independently, discovering search rules through trial and error.',
      },
      {
        id: 'opt-worked-faded',
        strategy: 'Protocol Beta: Alternating Worked Examples & Faded Completion',
        description: 'Learners study step-by-step worked solutions annotated with sub-goal rationales, alternating immediately with partially completed problems where they fill in fading algorithmic steps.',
      },
      {
        id: 'opt-pure-theory',
        strategy: 'Protocol Gamma: Comprehensive Abstract Theory & Specification',
        description: 'Learners spend the first 3.5 hours reading formal mathematical definitions, graph theory proofs, and edge-case specifications before attempting any practice problems.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-worked-faded',
      headline: 'Alternating Worked Examples & Faded Completion (Protocol Beta) produces dramatically faster learning, lower cognitive strain, and superior transfer to novel problems (The Worked Example Effect).',
      explanation: 'For novices, unguided discovery (Protocol Alpha) forces working memory into heavy means-ends analysis—a search strategy that consumes all available cognitive bandwidth just trying to navigate state spaces, leaving near-zero bandwidth for constructing durable neocortical schemas (Sweller, 1988). Worked examples with faded scaffolding (Protocol Beta) eliminate extraneous cognitive search load, freeing working memory to focus exclusively on inducing structural schemas (Paas & Van Merriënboer, 1994; Renkl, 2002).',
      optionFeedback: {
        'opt-discovery': {
          title: 'Your Choice: Protocol Alpha (Unguided Discovery)',
          verdict: 'The Novice Struggle Paradox (Means-Ends Bottleneck)',
          analysis: 'While productive struggle is valuable for advanced learners who possess rich background schemas, forcing novices to solve complex unguided problems induces severe cognitive overload. Novices use random trial-and-error or backward means-ends search, which overloads the 4-chunk working memory buffer without encoding structural principles.',
        },
        'opt-worked-faded': {
          title: 'Your Choice: Protocol Beta (Alternating Worked Examples & Faded Completion)',
          verdict: 'Empirically Supported Strategy (The Worked Example Effect)',
          analysis: 'Exact cognitive calibration! Replicated in hundreds of laboratory and field experiments, the Worked Example Effect demonstrates that novice learners acquire schemas far more efficiently by studying expert solutions and completing faded steps than by generating solutions from scratch under heavy cognitive load.',
        },
        'opt-pure-theory': {
          title: 'Your Choice: Protocol Gamma (Comprehensive Abstract Theory)',
          verdict: 'The Inert Knowledge & Split-Attention Trap',
          analysis: 'Exhaustive abstract theory without worked problem instantiations produces "inert knowledge"—facts that cannot be activated during real problem solving. When learners later attempt problems, they experience severe split-attention trying to mentally map abstract theorems onto concrete task demands.',
        },
      },
      comparisons: [
        {
          label: 'Unguided Discovery (Protocol Alpha)',
          immediateRetention: 'Low (overwhelmed by search mechanics)',
          oneWeekRetention: 'Poor-Moderate (~35% transfer recall)',
          illusionRating: 'High frustration; minimal schema formation',
          isEmpiricalWinner: false,
        },
        {
          label: 'Worked Examples & Faded Scaffolding (Protocol Beta)',
          immediateRetention: 'High (clean schema acquisition)',
          oneWeekRetention: 'Superior (~70–82% transfer recall)',
          illusionRating: 'Calibrated; sub-goal chunks build genuine mastery',
          isEmpiricalWinner: true,
        },
        {
          label: 'Pure Abstract Theory (Protocol Gamma)',
          immediateRetention: 'Moderate (verbal recognition)',
          oneWeekRetention: 'Low (~28% applied problem solving)',
          illusionRating: 'High (feels intellectually complete, but inert)',
          isEmpiricalWinner: false,
        },
      ],
      evidenceDistinction: 'Empirical Evidence Distinction: The Worked Example Effect is one of the most robust, cross-disciplinary findings in educational psychology (Sweller, Van Merriënboer, & Paas, 1998). Note the critical boundary condition: the superiority of worked examples reverses as expertise develops (The Expertise Reversal Effect, Kalyuga et al., 2003). For advanced learners, detailed worked examples become redundant, generating extraneous cognitive load.',
    },
  },
  coreExplanations: [
    {
      id: 'tripartite-cognitive-load',
      title: '1. The Tripartite Model of Cognitive Load',
      tagline: 'Intrinsic, Extraneous, and Germane: Managing the three mental expenditures',
      scientificStatus: 'cognitive-model',
      statusLabel: 'Validated Cognitive Architecture Model',
      summary: 'Cognitive Load Theory (John Sweller, 1988) partitions total mental effort into three distinct categories: Intrinsic load (the inherent complexity of the material), Extraneous load (mental waste introduced by poor presentation), and Germane load (the productive effort of constructing and automating schemas). Total load must never exceed working memory limits.',
      mechanisms: [
        {
          label: 'Intrinsic Cognitive Load (Element Interactivity)',
          description: 'Determined by the number of elements that must be held in working memory simultaneously and their interactions. Learning isolated vocabulary words has low element interactivity; understanding concurrent multithreading or recursive backtracking has high element interactivity because you cannot understand one piece without holding all other pieces in mind concurrently.',
        },
        {
          label: 'Extraneous Cognitive Load (Instructional Friction)',
          description: 'Cognitive waste caused by how information is designed or structured. Split-attention (forcing the eye to jump between code in one tab, documentation in another, and a video in a third), redundant explanations, and ambiguous terminology burn precious working memory capacity on non-learning tasks.',
        },
        {
          label: 'Germane Cognitive Load (Schema Construction Effort)',
          description: 'The productive working memory capacity devoted to synthesizing, abstracting, and integrating new information into existing long-term neocortical schemas. When extraneous load is minimized, learners can allocate spare capacity to germane schema construction.',
        },
      ],
      keyInsight: 'You cannot reduce intrinsic complexity without simplifying the subject itself, but you can aggressively eliminate extraneous load to liberate working memory bandwidth for germane schema consolidation.',
      simplifiedModelCaveat: 'While Cognitive Load Theory uses an additive load metaphor (Intrinsic + Extraneous + Germane ≤ Total Capacity), modern neurobiology emphasizes distributed prefrontal-striatal attentional gain control and dynamic executive resource allocation rather than fixed physical slots.',
    },
    {
      id: 'worked-example-split-attention',
      title: '2. The Worked Example & Split-Attention Effects',
      tagline: 'Why studying expert solutions outperforms trial-and-error for beginners',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Empirical Consensus',
      summary: 'Pioneered by John Sweller and Jeroen van Merriënboer, the Worked Example Effect proves that novices learn complex problem-solving domains significantly faster and transfer more reliably by studying step-by-step worked solutions paired with faded completion tasks, rather than solving unguided problems from scratch.',
      mechanisms: [
        {
          label: 'The Means-Ends Search Penalty (Sweller, 1988)',
          description: 'When novices lack an existing schema, they solve problems using backward means-ends analysis—continually comparing the current state to the goal state. This consumes all available working memory on state tracking, leaving zero bandwidth for schema induction.',
        },
        {
          label: 'The Split-Attention Effect (Ayres & Sweller, 2005)',
          description: 'When related sources of information (e.g., code comments and code lines, or circuit diagrams and separate text legends) are physically separated, the learner must mentally integrate them using working memory. Physically integrating explanations directly into the code eliminates this extraneous penalty.',
        },
        {
          label: 'Sub-Goal Labeling (Catrambone, 1996; Margulieux et al., 2016)',
          description: 'Annotating worked examples with structural sub-goals (e.g., "[Sub-goal 1: Base Case Check]", "[Sub-goal 2: Recursive Branching]") helps learners chunk procedural steps into conceptual abstractions rather than memorizing surface code lines.',
        },
      ],
      keyInsight: 'Do not make beginners struggle with blank-sheet problem solving before they have acquired the underlying schemas. Study worked solutions with sub-goal labels, then immediately complete faded problems to trigger effortful retrieval.',
      simplifiedModelCaveat: 'The Worked Example Effect applies specifically when intrinsic element interactivity is high. For simple or disconnected facts with low element interactivity, retrieval practice and direct testing remain more potent from the outset.',
    },
    {
      id: 'expertise-reversal-schema-automation',
      title: '3. The Expertise Reversal Effect & Schema Automation',
      tagline: 'Why instructions that empower beginners actively cripple advanced practitioners',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Empirical Consensus',
      summary: 'As learners acquire rich long-term schemas, the instructional techniques that were essential during the novice phase become redundant and harmful. Kalyuga, Ayres, Chandler, and Sweller (2003) demonstrated the Expertise Reversal Effect: instructional scaffolding that dramatically boosts beginner retention actively degrades expert problem-solving performance.',
      mechanisms: [
        {
          label: 'Schema-Driven Compression (Chase & Simon, 1973)',
          description: 'In seminal chess research, master players reconstructed complex mid-game board positions flawlessly after a 5-second glance, but performed identically to novices when pieces were placed randomly. Masters do not have larger working memories; they possess schemas that chunk 20+ pieces into a single tactical concept.',
        },
        {
          label: 'The Expertise Reversal Mechanism (Kalyuga, 2007)',
          description: 'When an expert is forced to read step-by-step explanations or follow rigid beginner templates, their internal schema automatically generates the solution. The external explanation conflicts with the internal representation, forcing the expert to waste working memory reconciling redundant information.',
        },
        {
          label: 'Schema Automation & Bandwidth Liberation (Kotovsky et al., 1985)',
          description: 'With extended deliberate practice, schemas transition from effortful conscious control to automated execution. Automated schemas require near-zero conscious working memory, freeing the frontal cortex to monitor high-level strategy, edge cases, and architectural trade-offs.',
        },
      ],
      keyInsight: 'Instructional scaffolding must dynamically fade as competence grows. What is essential guidance for the novice becomes suffocating cognitive friction for the expert.',
      simplifiedModelCaveat: 'Expertise is highly domain-specific. A software engineer who is an expert in distributed systems becomes a complete novice with identical working-memory constraints when learning compiler design or digital signal processing.',
    },
  ],
  diagram: {
    title: 'The Cognitive Load Allocator & Working Memory Capacity Gateway',
    subtitle: 'How information flow maps across biological working memory and neocortical schemas',
    stages: [
      {
        id: 'element-interactivity-intake',
        name: 'Stage 1: Raw Element Interactivity Intake',
        subtitle: 'Sensory input & initial element parsing',
        capacity: 'High sensory bandwidth (~millions of bits/sec)',
        duration: '200–500 ms (sensory buffer)',
        role: 'Environmental stimuli (code, syntax, documentation, diagrams) enter visual and auditory cortex.',
        failureMode: 'Element explosion: Attempting to digest multi-layered concepts without prerequsite decomposition.',
        evidenceType: 'Empirical consensus (Sweller, 1988; Cowan, 2001)',
        practicalFix: 'Pre-train foundational terms in isolation before introducing interactive systems.',
      },
      {
        id: 'working-memory-allocator',
        name: 'Stage 2: Working Memory Allocator (~4-Chunk Limit)',
        subtitle: 'The fragile conscious manipulation workspace',
        capacity: '~3 to 4 novel elements simultaneously (Cowan, 2001)',
        duration: '10–20 seconds without active rehearsal',
        role: 'Processes Intrinsic Load, combats Extraneous Load, and allocates spare capacity to Germane Load.',
        failureMode: 'Cognitive Overload: Intrinsic + Extraneous load exceeds 4 chunks, causing immediate comprehension collapse.',
        evidenceType: 'Replicated cognitive architecture (Miller 1956; Baddeley 1992; Cowan 2001)',
        practicalFix: 'Eliminate split-attention: embed definitions directly next to code and close distracting secondary windows.',
      },
      {
        id: 'schema-construction-pipeline',
        name: 'Stage 3: Schema Construction & Sub-Goal Chunking',
        subtitle: 'Inductive abstraction into structured mental models',
        capacity: 'Variable: governed by available Germane capacity',
        duration: 'Minutes to hours during deliberate study',
        role: 'Aggregates multiple interacting elements into single hierarchical schemas (sub-goal chunking).',
        failureMode: 'Premature unguided problem solving forcing means-ends search rather than schema abstraction.',
        evidenceType: 'Empirical consensus (Catrambone 1996; Sweller 1998)',
        practicalFix: 'Use worked examples with explicit sub-goal labels and faded completion steps.',
      },
      {
        id: 'neocortical-automation-vault',
        name: 'Stage 4: Neocortical Schema Vault & Automated Retrieval',
        subtitle: 'Consolidated long-term expertise',
        capacity: 'Effectively limitless storage in neocortical synaptic networks',
        duration: 'Permanent (maintained via spaced retrieval & deliberate practice)',
        role: 'Feeds compressed, automated chunk representations back into Working Memory as single tokens.',
        failureMode: 'Expertise Reversal Effect: Over-scaffolded instruction forcing redundant processing.',
        evidenceType: 'Empirical consensus (Chase & Simon 1973; Kalyuga et al. 2003)',
        practicalFix: 'Fade instructional guidance progressively as learner performance demonstrates mastery.',
      },
    ],
    feedbackLoopDescription: 'The Expertise Feedback Loop: As Stage 4 schemas automate, complex multi-element procedures collapse into single Stage 2 chunks. What once consumed 100% of working memory bandwidth now consumes 1 chunk, liberating working memory to tackle higher-order abstractions.',
  },
  exercise: {
    title: 'Cognitive Architecture Diagnostic: Identify the Cognitive Load Failure',
    instruction: 'Analyze each real-world engineering learning scenario and identify which cognitive load mechanism or bottleneck is primarily operating.',
    categories: [
      {
        id: 'working-memory-overload',
        title: 'Cognitive Load / Working Memory Overload',
        description: 'Exceeding the 4-chunk limit through high element interactivity or unguided means-ends search.',
        badgeStyle: 'var(--danger-border)',
      },
      {
        id: 'attention-bottleneck',
        title: 'Split-Attention Extraneous Load',
        description: 'Mental waste caused by forcing working memory to integrate physically separated sources of information.',
        badgeStyle: 'var(--warning-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Sub-Goal Schema Chunking',
        description: 'Structuring procedural steps into labeled conceptual abstractions to compress element interactivity.',
        badgeStyle: 'var(--success-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Expertise Reversal Redundancy',
        description: 'Detailed beginner scaffolding that actively hinders experienced practitioners who already possess automated schemas.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-split-attention-tabs',
        realWorldContext: 'API Integration Tutorial',
        scenario: 'Priya is trying to integrate an OAuth 2.0 flow. She has a video tutorial playing in Window 1, raw API documentation in Window 2, a code editor in Window 3, and a separate glossary of authentication terms in Window 4. Within 15 minutes, she feels completely exhausted, with a severe headache, despite writing only 6 lines of code.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'Priya is suffering from severe Split-Attention Extraneous Load. Her working memory is forced to constantly switch contexts and mentally align disjointed representations, burning cognitive bandwidth that should be used for schema construction.',
        evidenceBasedFix: 'Consolidate materials: Use integrated documentation where code examples, payload schemas, and parameter annotations appear in a single unified view directly adjacent to the editor.',
      },
      {
        id: 'scen-novice-flounder',
        realWorldContext: 'First-Year CS Programming Lab',
        scenario: 'Jordan, who has never written recursive code, is assigned a blank-file project: "Implement an unguided balanced AVL tree with rotation rebalancing." After 3 hours of staring at compilation errors and drawing random arrows on napkins, Jordan cannot explain how a single rotation works.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'Jordan was subjected to the Novice Struggle Paradox. Lacking a foundational schema, Jordan was forced into backward means-ends search, exceeding working memory capacity and preventing schema induction.',
        evidenceBasedFix: 'Use the Worked Example Effect: Provide a fully annotated worked example of a Left-Rotation with labeled sub-goals, followed by a faded problem where Jordan only writes the Right-Rotation reflection.',
      },
      {
        id: 'scen-senior-wizard-annoyance',
        realWorldContext: 'Staff Engineer Onboarding',
        scenario: 'Elena, a senior backend engineer with 10 years of PostgreSQL experience, joins a new team. The company requires her to click through a 45-step interactive wizard explaining SQL SELECT, JOIN, and INDEX syntax before granting database access. Elena finds her focus wandering and makes careless errors.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'Elena is experiencing the Expertise Reversal Effect. Because her PostgreSQL schemas are fully automated in long-term memory, being forced to process elementary step-by-step guidance creates extraneous cognitive conflict.',
        evidenceBasedFix: 'Provide an accelerated "Expert Track": Replace step-by-step interactive wizards with concise architecture diffs and direct API access for experienced practitioners.',
      },
      {
        id: 'scen-subgoal-chunking',
        realWorldContext: 'Algorithm Study Group',
        scenario: 'Carlos is studying Dijkstra’s shortest path algorithm. Instead of trying to memorize 40 lines of nested loops, he labels the algorithm into three distinct conceptual blocks: "[1: Initialize Distances & Min-Heap]", "[2: Extract Minimum Unvisited Node]", "[3: Relax Outgoing Neighbor Edges]". He masters the algorithm in half the time of his peers.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'Carlos applied Sub-Goal Labeling (Catrambone, 1996). By grouping multiple code lines into meaningful functional chunks, he compressed 40 interactive elements into 3 working memory chunks.',
        evidenceBasedFix: 'Always label procedural code with explicit sub-goals before attempting retrieval or implementation.',
      },
    ],
  },
  quiz: {
    title: 'Cognitive Load & Schema Construction Assessment',
    instruction: 'Validate your understanding of working memory constraints, instructional scaffolding, and the architecture of expertise.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-tripartite-balance',
        question: 'Under Cognitive Load Theory (Sweller, 1988), which category of cognitive load should instructional design actively seek to minimize, and why?',
        options: [
          {
            id: 'q1-a',
            text: 'Intrinsic load, because high element interactivity permanently impairs synaptic plasticity.',
          },
          {
            id: 'q1-b',
            text: 'Extraneous load, because mental effort spent navigating poor presentation directly steals capacity needed for germane schema construction.',
          },
          {
            id: 'q1-c',
            text: 'Germane load, because constructing schemas causes mental exhaustion and should be avoided until sleep.',
          },
          {
            id: 'q1-d',
            text: 'Intrinsic load, by eliminating all complex concepts from any technical syllabus.',
          },
        ],
        correctOptionId: 'q1-b',
        explanation: 'Extraneous load is non-productive mental friction caused by poor layout, split-attention, or irrelevant information. Because conscious working memory is strictly limited (~3-4 elements), any bandwidth consumed by extraneous load directly reduces the capacity available for germane schema construction (Sweller, 1988; Paas et al., 2003).',
        pedagogicalRationale: 'Clarifies that instructional optimization is about eliminating presentation friction, not dumbing down the core subject matter.',
        evidenceNote: 'Sweller, J. (1988). Cognitive load during problem solving: Effects on learning. Cognitive Science.',
      },
      {
        id: 'q2-worked-example-mechanism',
        question: 'Why do beginner learners acquire complex problem-solving abilities significantly faster from worked examples than from unguided trial-and-error?',
        options: [
          {
            id: 'q2-a',
            text: 'Beginners lack the prefrontal cortex circuits required to engage in independent thought.',
          },
          {
            id: 'q2-b',
            text: 'Worked examples replace heavy means-ends search with clean schema induction, freeing working memory to focus on structural principles.',
          },
          {
            id: 'q2-c',
            text: 'Trial-and-error completely shuts down hippocampal dopamine synthesis during early learning.',
          },
          {
            id: 'q2-d',
            text: 'Worked examples eliminate the need for any subsequent active retrieval practice.',
          },
        ],
        correctOptionId: 'q2-b',
        explanation: 'Novices lack schemas to guide forward problem-solving. Forced into unguided problem solving, they rely on backward means-ends analysis—a search method that overloads working memory with state management. Worked examples allow the novice to observe the complete problem state and induce generalized schemas (Sweller, Van Merriënboer, & Paas, 1998).',
        pedagogicalRationale: 'Counteracts the common educational misconception that unguided struggle from minute one is always superior.',
        evidenceNote: 'Paas, F., & Van Merriënboer, J. J. (1994). Variability of worked examples and transfer of geometrical problem-solving skills.',
      },
      {
        id: 'q3-expertise-reversal',
        question: 'What is the "Expertise Reversal Effect" (Kalyuga et al., 2003), and what does it prescribe for instructional systems?',
        options: [
          {
            id: 'q3-a',
            text: 'As expertise develops, instructional scaffolding that assisted beginners becomes redundant and creates extraneous cognitive load; scaffolding must dynamically fade.',
          },
          {
            id: 'q3-b',
            text: 'Experts naturally lose their procedural skills if they spend more than three weeks teaching novices.',
          },
          {
            id: 'q3-c',
            text: 'Beginners and experts should always receive identical instruction to ensure pedagogical consistency.',
          },
          {
            id: 'q3-d',
            text: 'Scaffolding should increase in detail as a learner becomes more advanced to keep up with their intellect.',
          },
        ],
        correctOptionId: 'q3-a',
        explanation: 'For experienced learners, long-term memory schemas already handle procedural guidance automatically. Forcing experts to process redundant step-by-step beginner guidance forces them to mentally cross-reference external instructions with their internal schemas, degrading performance (Kalyuga, 2007).',
        pedagogicalRationale: 'Teaches adaptive scaffolding: instructional guidance must fade as competence increases.',
        evidenceNote: 'Kalyuga, S., Ayres, P., Chandler, P., & Sweller, J. (2003). The expertise reversal effect. Educational Psychologist.',
      },
      {
        id: 'q4-chunking-architecture',
        question: 'How did Chase and Simon (1973) prove that expert memory superiority is schema-driven rather than an innate expansion of raw biological working memory?',
        options: [
          {
            id: 'q4-a',
            text: 'By measuring the skull circumferences and frontal lobe blood flow of grandmaster chess players.',
          },
          {
            id: 'q4-b',
            text: 'Chess masters reconstructed real game positions flawlessly, but performed identically to novices when pieces were arranged randomly.',
          },
          {
            id: 'q4-c',
            text: 'Grandmasters were able to remember 50 random digits backward without any prior mnemonic training.',
          },
          {
            id: 'q4-d',
            text: 'Novices outperformed grandmasters on speed tests because experts have slower neural conduction velocities.',
          },
        ],
        correctOptionId: 'q4-b',
        explanation: 'When chess pieces were positioned from real master games, experts recalled them with ~90% accuracy compared to ~30% for novices because their schemas chunked patterns into tactical units. When pieces were randomized—destroying meaningful chess schemas—experts performed identically to novices, proving working memory capacity itself was identical (~4 chunks).',
        pedagogicalRationale: 'Demonstrates that expert intuition is built from structured domain schemas, not genetic working-memory size.',
        evidenceNote: 'Chase, W. G., & Simon, H. A. (1973). Perception in chess. Cognitive Psychology.',
      },
    ],
  },
  practicalTask: {
    title: 'Cognitive Load Audit & Faded Scaffolding Protocol',
    summary: 'Apply Cognitive Load Theory to redesign a complex technical topic you are currently learning or teaching, minimizing extraneous waste and constructing clean schemas.',
    steps: [
      {
        id: 'step-element-interactivity-audit',
        number: 1,
        title: 'Element Interactivity Audit',
        prompt: 'Identify a complex technical topic or codebase component that currently feels overwhelming. List 3 to 4 distinct elements that interact simultaneously:',
        placeholder: 'e.g., Topic: React useEffect synchronization. Elements: (1) Component render lifecycle, (2) Dependency array equality check, (3) Cleanup function trigger timing, (4) Stale closure variables in state callbacks...',
        example: 'Distributed consensus leader election (Raft): (1) Term counter increments, (2) Heartbeat timeout resets, (3) Candidate vote tallying quorum, (4) Log append entry replication.',
        cognitiveRationale: 'Explicitly mapping element interactivity diagnoses why working memory is saturating before attempting problem solving.',
      },
      {
        id: 'step-extraneous-load-pruning',
        number: 2,
        title: 'Extraneous Load Elimination',
        prompt: 'Identify the primary source of Split-Attention or Extraneous Friction in your current study environment, and define a concrete design fix:',
        placeholder: 'e.g., "I keep jumping between a YouTube video on monitor 1, documentation on monitor 2, and my IDE on monitor 3. Fix: Write a single integrated markdown cheatsheet where syntax, diagrams, and explanations are inline next to the editor."...',
        example: 'Split-attention friction: Switching between API Swagger docs, separate Postman client, and VS Code. Fix: Use an in-editor REST client with sample JSON responses co-located in the same workspace.',
        cognitiveRationale: 'Eliminating split-attention preserves the ~4-chunk working memory gateway exclusively for germane schema induction.',
      },
      {
        id: 'step-faded-completion-protocol',
        number: 3,
        title: 'Design a 2-Step Faded Scaffolding Exercise',
        prompt: 'Construct a Worked Example + Faded Completion pair: Write one complete reference solution with sub-goal labels, and one problem where 50% of the steps are left blank for generative retrieval:',
        placeholder: 'e.g., Step A (Worked): Show full database connection pool setup with [Sub-goal 1: Parse Config], [Sub-goal 2: Set Max Conns], [Sub-goal 3: Ping & Health Check]. Step B (Faded): Provide the pool structure but leave [Sub-goal 3] blank to be implemented from memory...',
        example: 'Step A (Full Solution): BFS queue traversal with [1: Enqueue Root & Mark Visited], [2: While Queue Not Empty], [3: Dequeue & Process], [4: Enqueue Unvisited Neighbors]. Step B (Faded Problem): Provide Steps 1 and 2, but leave Steps 3 and 4 blank for active recall.',
        cognitiveRationale: 'Faded completion bridges worked examples to independent retrieval practice without triggering novice cognitive overload.',
      },
    ],
  },
};
