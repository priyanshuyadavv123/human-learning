import type { Lesson } from '../types/learning.ts';

export const LESSON_EXPERT_MENTAL_REPRESENTATIONS: Lesson = {
  id: 'expert-mental-representations',
  chapterId: 'ch-12-deliberate-practice',
  number: '12.2',
  title: 'Mental Representations in Expert Performance',
  subtitle: 'How grandmasters and elite engineers perceive structural patterns',
  readingTimeMinutes: 20,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'When a chess grandmaster glances at a complex board for five seconds, why can they reconstruct every piece flawlessly while a novice struggles to place four—yet if the pieces are arranged randomly, the grandmaster’s memory drops to that of a beginner?',
    teaser: 'Experts do not possess superior general memory or larger brains. They possess domain-specific mental representations that perceive functional constellations instead of isolated parts.',
    hookNote: 'In 1973, William Chase and Herbert Simon published their seminal cognitive investigation into expert chess perception, building upon Adriaan de Groot’s 1965 master thesis. They revealed that grandmasters do not calculate 50 moves ahead through brute-force computation; rather, their thousands of hours of deliberate practice have constructed rich, interconnected **Mental Representations** stored in long-term memory. When an expert glances at a domain scenario, these representations instantly organize sensory noise into meaningful functional patterns, bypass the ~4-item working memory bottleneck, and automatically suggest candidate moves. However, when pieces are scrambled randomly—destroying the underlying structural relations—the grandmaster’s memory advantage vanishes completely. In this lesson, we dissect Ericsson’s mental representation architecture, Gary Klein’s Recognition-Primed Decision (RPD) model, and Chi’s deep-structure physics categorization to master how elite practitioners build, evaluate, and self-monitor complex internal models.',
  },
  prediction: {
    prompt: 'Before analyzing expert mental representations, evaluate this clinical experiment on engineering diagnostics: Two groups of software engineers—Senior Staff Architects (15+ years experience) and Junior Developers (1 year experience)—are tasked with diagnosing a critical production failure. They are given two different diagnostic telemetry streams: Condition 1 contains authentic real-world distributed microservice traces exhibiting subtle cascading failure patterns; Condition 2 contains synthetically generated, mathematically random distributed traces with no causal relationships. In Condition 1, Senior Architects diagnose the root cause 10x faster than Juniors. What does empirical cognitive science predict occurs in Condition 2 (the random, non-causal trace condition)?',
    context: 'Both groups have identical working memory spans and unrestricted access to documentation and search engines:',
    options: [
      {
        id: 'opt-general-intelligence-advantage',
        strategy: 'Hypothesis A: General Analytic Dominance',
        description: 'Senior Architects still dramatically outperform Junior Developers in Condition 2, because their superior raw IQ, logical reasoning abilities, and general working memory capacity transfer across any complex data format.',
      },
      {
        id: 'opt-representation-dependence-collapse',
        strategy: 'Hypothesis B: Representation-Specific Memory Collapse',
        description: 'Senior Architects lose their diagnostic advantage entirely in Condition 2, performing identically to Junior Developers, because expert perception relies strictly on pre-existing domain-specific mental representations rather than superior raw hardware (Chase & Simon, 1973; Ericsson, 2016).',
      },
      {
        id: 'opt-junior-speed-superiority',
        strategy: 'Hypothesis C: Junior Exploratory Superiority',
        description: 'Junior Developers significantly outperform Senior Architects in Condition 2, because seniors suffer from fixed cognitive ossification while juniors maintain flexible bottom-up exploratory attention.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-representation-dependence-collapse',
      headline: 'Expertise Is Domain-Specific Mental Representations, Not Superior Raw Memory or General Intelligence (Chase & Simon, 1973; Ericsson, 2016).',
      explanation: 'In their landmark 1973 chess studies, William Chase and Herbert Simon proved that expert superiority is entirely dependent on structured mental representations. In authentic game positions, grandmasters recalled positions with 93% accuracy versus 33% for novices, because they recognized 4-5 meaningful "chunks" and tactical constellations. But when pieces were randomized, the grandmaster’s accuracy collapsed to matching the novice (~30%). Decades of subsequent research across computer programming (Soloway & Ehrlich, 1984), radiology (Lesgold et al., 1988), and physics (Chi et al., 1981) confirmed the exact same phenomenon: experts do not have superior raw working memory or general cognitive capacity. Their advantage comes exclusively from pre-compiled mental representations that encode causal, functional, and relational deep structures. When domain structure is removed, their apparent genius completely evaporates.',
      optionFeedback: {
        'opt-general-intelligence-advantage': {
          title: 'Your Choice: Hypothesis A (The General Genius Neuromyth)',
          verdict: 'Refuted by 50+ Years of Cognitive Science',
          analysis: 'Chase & Simon (1973), Ericsson (2006), and Gobet (1998) demonstrated that experts do not possess superior general memory or processing capacity. Their memory superiority is strictly confined to structured patterns within their domain.',
        },
        'opt-representation-dependence-collapse': {
          title: 'Your Choice: Hypothesis B (Domain-Specific Mental Representations)',
          verdict: 'Empirical Cognitive Science Consensus',
          analysis: 'Precisely accurate! Chase & Simon (1973) and Soloway & Ehrlich (1984) showed that when code or positions are randomized, expert recall collapses to novice baselines, proving that expertise resides in stored structural representations.',
        },
        'opt-junior-speed-superiority': {
          title: 'Your Choice: Hypothesis C (The Flexible Novice Myth)',
          verdict: 'Unsupported by Empirical Evidence',
          analysis: 'While experts can occasionally exhibit cognitive entrenchment on rare trick problems, juniors do not outperform seniors on random data; both groups perform equally poorly when structural patterns are absent.',
        },
      },
      comparisons: [
        {
          label: 'Authentic Causal Distributed Traces (Condition 1)',
          immediateRetention: 'Senior Architects diagnose 10x faster by activating pre-compiled functional schemas',
          oneWeekRetention: 'Durable structural mental representations remain intact across novel incident benchmarks',
          illusionRating: 'Calibrated; experts accurately perceive deep structural boundaries without guessing',
          isEmpiricalWinner: true,
        },
        {
          label: 'Randomized Non-Causal Telemetry (Condition 2)',
          immediateRetention: 'Senior recall and diagnostic speed collapses to novice baseline (~30%)',
          oneWeekRetention: 'Near-zero retention; unstructured arbitrary noise cannot bind to mental representations',
          illusionRating: 'High collapse; highlights that apparent genius is schema indexing, not general IQ hardware',
          isEmpiricalWinner: false,
        },
      ],
      evidenceDistinction: 'Novices perceive isolated surface tokens; experts perceive functional relationships and causal trajectories mediated by structured long-term mental representations.',
    },
  },
  coreExplanations: [
    {
      id: 'chase-simon-mental-representations-foundations',
      title: 'Chase & Simon (1973): The Structural Nature of Expert Representations',
      tagline: 'Why expertise is domain-specific schema compilation rather than general cognitive hardware',
      statusLabel: 'Foundational Cognitive Psychology Benchmark (1973)',
      scientificStatus: 'empirical-consensus',
      summary: 'In 1973, William Chase and Herbert Simon proved that expert performance is driven by domain-specific mental representations stored in long-term memory. These representations compress large sensory arrays into functional chunks, allowing experts to perceive meaning, anticipate trajectories, and bypass working memory limitations.',
      mechanisms: [
        {
          label: 'The Meaningful Chunking Threshold (Chase & Simon, 1973)',
          description: 'A chess master holds an estimated 50,000+ specialized pattern chunks in long-term memory. When looking at a board, pieces are not seen as 32 isolated objects; they are grouped into 4-6 high-level functional chunks (e.g., "fianchettoed kingside defense", "isolated queen pawn assault").',
        },
        {
          label: 'The Randomization Asymmetry Test',
          description: 'When board positions or programming code are randomized, expert recall drops to novice levels. This proves that expert memory is not an expanded hardware buffer (RAM), but an extensive relational indexing system in long-term storage.',
        },
        {
          label: 'Plans and Consequential Encodings',
          description: 'Mental representations do not merely store static shapes; they encode functional affordances and causal consequences. Recognizing a pattern automatically primes the 2-3 most viable strategic actions without conscious enumeration.',
        },
      ],
      keyInsight: 'Experts do not think faster than novices; they see differently. Their mental representations turn complex search problems into instant pattern recognition.',
      simplifiedModelCaveat: 'While mental representations are domain-specific, the meta-skill of *how to construct* mental representations through deliberate practice transfers across technical fields.',
    },
    {
      id: 'recognition-primed-decisions-klein',
      title: 'Gary Klein’s RPD Model: Intuitive Simulation Under Extreme Pressure',
      tagline: 'How mental representations drive rapid, non-analytical decision making in critical environments',
      statusLabel: 'Naturalistic Decision Making (NDM) Consensus',
      scientificStatus: 'cognitive-model',
      summary: 'Gary Klein’s Recognition-Primed Decision (RPD) model explains how experts (fireground commanders, trauma surgeons, ICU nurses, systems architects) make high-stakes decisions in seconds without comparing multiple options. Stored mental representations allow them to recognize prototypical situations and run rapid mental simulations.',
      mechanisms: [
        {
          label: 'Pattern Matching & Prototypical Recognition',
          description: 'Upon entering an emergency scenario, the expert’s mental representation matches current perceptual cues to a stored prototype, instantly recognizing: (1) plausible goals, (2) critical cues to monitor, (3) expectations of what should happen next, and (4) typical courses of action.',
        },
        {
          label: 'Mental Simulation & Satisficing (Herbert Simon)',
          description: 'Instead of enumerating and ranking 5 different options (rational choice theory), the expert immediately evaluates the single most typical course of action through mental simulation. If the internal simulation works without fatal flaws, they execute it immediately.',
        },
        {
          label: 'Expectancy Violations as Early Warning Systems',
          description: 'Because expert mental representations generate precise expectations of time and physical dynamics, any mismatch between reality and representation (an expectancy violation) triggers instant alarm bells before disaster strikes.',
        },
      ],
      keyInsight: 'Elite intuition is not mysticism or guesswork; it is the instantaneous projection of a mental representation running a forward simulation.',
      simplifiedModelCaveat: 'The RPD model fails in "wicked" environments (Robin Hogarth) where feedback is noisy, deceptive, or delayed; in such domains, intuitive simulation leads to overconfident errors.',
    },
    {
      id: 'mental-representations-self-monitoring-ericsson',
      title: 'Self-Monitoring & Real-Time Error Correction (Ericsson, 2016)',
      tagline: 'How sophisticated mental representations enable autonomous diagnosis and self-calibration',
      statusLabel: 'Expertise & Self-Regulated Learning Benchmark',
      scientificStatus: 'empirical-consensus',
      summary: 'According to K. Anders Ericsson (2016, "Peak"), the definitive hallmark of elite performers is the sophistication of their mental representations for self-monitoring. Advanced mental representations provide an internal standard of excellence, allowing performers to detect, diagnose, and correct their own errors during live execution without an external teacher.',
      mechanisms: [
        {
          label: 'Internal Reference Standard (The Cognitive Ideal)',
          description: 'Master concert violinists or principal software engineers hold an explicit, high-resolution mental model of what the performance or architecture should look and feel like. This serves as an unyielding reference comparator.',
        },
        {
          label: 'Real-Time Discrepancy Detection',
          description: 'During execution, the expert continuously compares their actual sensory feedback against their internal reference model. Even microsecond pitch deviations or millisecond latency spikes are detected instantaneously as discrepancy signals.',
        },
        {
          label: 'Autonomous Self-Correction Loop',
          description: 'Because the mental representation encodes causal relationships, detecting a symptom immediately isolates the underlying mechanical fault. The performer modulates their execution mid-stride, achieving closed-loop self-regulation.',
        },
      ],
      keyInsight: 'The ultimate purpose of deliberate practice is not to execute tasks with a coach, but to construct internal mental representations so refined that you become your own coach.',
      simplifiedModelCaveat: 'Novices cannot self-correct effectively because their mental representations are too blurry to distinguish a good performance from a mediocre one.',
    },
  ],
  diagram: {
    title: 'The Expert Mental Representation Architecture',
    subtitle: 'From sensory cue ingestion to pattern matching, forward simulation, and closed-loop self-monitoring',
    stages: [
      {
        id: 'stage-perceptual-cue-clustering',
        name: 'Stage 1: Perceptual Cue Clustering',
        subtitle: 'Ingesting sensory noise and binding relational features',
        capacity: 'High-bandwidth perceptual filtering',
        duration: '<100 ms glance',
        role: 'The expert scans the environment (codebase, system telemetry, radiology scan) and immediately binds surface tokens into 3-5 functional relational clusters.',
        failureMode: 'Surface Fixation: Treating every syntax token or log line as an isolated, unranked data point (novice fragmentation).',
        evidenceType: 'Eye-tracking & cognitive perceptual studies (De Groot, 1965; Chase & Simon, 1973)',
        practicalFix: 'Look for functional systems boundaries and causal couplings rather than reading code line-by-line.',
      },
      {
        id: 'stage-prototypical-schema-activation',
        name: 'Stage 2: Schema Prototype Activation',
        subtitle: 'Retrieving long-term relational structures and affordances',
        capacity: 'Long-term working memory retrieval structures',
        duration: '100-300 ms cognitive retrieval',
        role: 'The perceptual clusters trigger matching schema templates in long-term memory, instantly priming plausible failure modes, operational constraints, and typical action vectors.',
        failureMode: 'Schema Absence: Having no pre-existing template in long-term memory, forcing brute-force combinatorial search.',
        evidenceType: 'Template theory & expertise retrieval (Gobet & Simon, 1996; Ericsson & Kintsch, 1995)',
        practicalFix: 'Study hundreds of concrete post-mortems and architecture patterns until recognition is automatic.',
      },
      {
        id: 'stage-mental-forward-simulation',
        name: 'Stage 3: Forward Mental Simulation',
        subtitle: 'Running internal temporal projections of candidate actions',
        capacity: 'Visuospatial & executive working memory scratchpad',
        duration: '1-3 seconds cognitive projection',
        role: 'The expert projects the selected strategy forward in time within their mental representation, evaluating edge cases, side effects, and potential failure points before acting.',
        failureMode: 'Blind Trial-and-Error: Modifying production configurations or code randomly without mentally simulating the consequences.',
        evidenceType: 'Naturalistic decision making & RPD model (Klein, 1998; Craik, 1943)',
        practicalFix: 'Before typing a single command or line of code, run a 30-second mental movie of how the system will react.',
      },
      {
        id: 'stage-closed-loop-self-monitoring',
        name: 'Stage 4: Closed-Loop Self-Monitoring',
        subtitle: 'Comparing live outcome against the internal reference model',
        capacity: 'Metacognitive discrepancy comparator',
        duration: 'Continuous real-time calibration',
        role: 'During and after execution, the expert measures real telemetry against their internal prediction. Mismatches instantly update the mental representation and trigger immediate corrective action.',
        failureMode: 'Uncalibrated Complacency: Assuming that if no error dialog popped up, the execution was flawless.',
        evidenceType: 'Deliberate practice self-monitoring framework (Ericsson, 2016)',
        practicalFix: 'Always record an explicit quantitative prediction before running an experiment or deployment, then measure the delta.',
      },
    ],
    feedbackLoopDescription: 'Expert mental representations compress surface chaos into functional relational schemas, enabling lightning-fast forward simulation and autonomous closed-loop self-correction.',
  },
  exercise: {
    title: 'The Mental Representation Diagnostic Exercise',
    instruction: 'Analyze four real-world engineering, medical triage, and software architecture scenarios. Diagnose whether the cognitive failure stems from Surface-Feature Fixation, Schema-Deficient Brute Force, Uncalibrated Mental Simulation, or Missing Internal Reference Standard, and prescribe the evidence-grounded fix.',
    categories: [
      {
        id: 'attention-bottleneck',
        title: 'Surface-Feature Fixation',
        description: 'Categorizing and diagnosing problems based on superficial surface tokens (syntax, wording, UI colors) rather than underlying causal deep structures.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'working-memory-overload',
        title: 'Schema-Deficient Brute Force',
        description: 'Lacking pre-compiled domain schemas in long-term memory, forcing working memory to exhaustively search every possible option through trial and error.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Uncalibrated Mental Simulation',
        description: 'Executing actions impulsively without projecting their dynamic consequences through an internal mental simulation, causing predictable collateral outages.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Missing Internal Reference Standard',
        description: 'Unable to evaluate or correct one’s own performance because the learner has no clear, high-resolution mental model of what expert execution looks like.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-junior-physics-sorting-trap',
        realWorldContext: 'Undergraduate Computer Science & Algorithm Triage',
        scenario: 'Alex is given a series of complex concurrency and data pipeline problems to optimize. When asked to group similar problems, Alex sorts all problems mentioning "User Profiles" into one bucket and all problems mentioning "Payment Transactions" into another bucket. A senior principal engineer immediately groups the problems into "Read-Heavy Bounded Cache Invalidation" versus "Write-Ahead Log Sequence Contention".',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'Alex suffers from Surface-Feature Fixation (Chi, Feltovich, & Glaser, 1981). Novices organize problems by literal surface nouns (user profiles, payments), whereas experts organize problems exclusively by underlying functional principles and causal deep structures.',
        evidenceBasedFix: 'Train Alex on deep-structure categorization: remove domain nouns from problem statements and force him to describe problems purely in terms of data flow, synchronization primitives, and state invariants.',
      },
      {
        id: 'scen-blind-trial-error-incident-response',
        realWorldContext: 'High-Severity Distributed Cloud Outage',
        scenario: 'A Kubernetes cluster is suffering cascading memory exhaustion (OOMKilled pods). An on-call engineer panics, opens the cluster config, and begins randomly increasing pod memory limits, restarting pods one by one, and tweaking garbage collection flags without knowing why. The increased memory demands cause the underlying node VMs to crash, turning a partial slowdown into a company-wide multi-region blackout.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'The engineer failed to perform Forward Mental Simulation (Klein’s RPD model). Instead of simulating how the cluster nodes would react to increased container memory requests, they engaged in impulsive trial-and-error, triggering catastrophic downstream cascade failures.',
        evidenceBasedFix: 'Implement an explicit mental simulation protocol: before touching production controls, the responder must write down the exact causal chain ("If I double pod memory, node total capacity will exceed 90%, triggering node eviction").',
      },
      {
        id: 'scen-novice-brute-force-chess-search',
        realWorldContext: 'Competitive Strategy & Tactical Evaluation',
        scenario: 'A chess player spends 8 minutes calculating 40 different moves sequentially on move 12, evaluating every legal pawn push and knight leap. Despite burning through half their tournament clock, they overlook a simple two-move tactical trap and lose their queen. A grandmaster looked at the same position for 4 seconds and instantly identified the only two critical moves.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'The novice exhibited Schema-Deficient Brute Force (Chase & Simon, 1973; De Groot, 1965). Lacking high-level chunk representations, they exhausted working memory by calculating every legal move. The grandmaster’s mental representation automatically filtered out 38 irrelevant moves and primed the only viable tactical paths.',
        evidenceBasedFix: 'Cease brute-force tactical calculation training; instead, study tactical motif flashcards (pin, fork, skewer, deflection) to build 1,000+ instant pattern recognition chunks in long-term memory.',
      },
      {
        id: 'scen-self-taught-coder-code-smell-blindness',
        realWorldContext: 'Junior Frontend Developer Writing Monolithic React Components',
        scenario: 'Brian writes a 1,200-line React component containing 18 nested `useEffect` hooks, direct DOM manipulations, and duplicated API calls. When asked how good his code is, Brian says: "It works 100%—when I click the button, the page updates perfectly, so it’s great code!" He is genuinely bewildered when senior engineers reject his pull request for being unmaintainable.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'Brian suffers from a Missing Internal Reference Standard (Ericsson, 2016). His mental representation of "good software" is strictly binary ("Does it run without throwing an error?"). Because he lacks a high-resolution mental model of clean architectural principles (separation of concerns, state invariants), he cannot self-monitor or evaluate his own craftsmanship.',
        evidenceBasedFix: 'Provide Brian with an annotated reference gallery of world-class production components. Have him perform comparative line-by-line diffs against expert code until his internal standard of quality matches senior benchmarks.',
      },
    ],
  },
  quiz: {
    title: 'Expert Mental Representations Formative Assessment',
    instruction: 'Demonstrate your operational mastery of Chase & Simon’s randomization asymmetry, Gary Klein’s RPD forward simulation, and Ericsson’s internal reference standards. Score 75% or higher to verify.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-chase-simon-random-position-finding',
        question: 'In the seminal experiments by Chase & Simon (1973) and De Groot (1965), what happened when chess grandmasters were tested on the recall of chess positions where pieces were placed randomly on the board?',
        options: [
          {
            id: 'q1-a',
            text: 'Grandmasters maintained their 90%+ recall advantage because their visual photographic memory is innate.',
          },
          {
            id: 'q1-b',
            text: 'Grandmasters performed virtually identically to novices (~30% recall), proving that expert memory relies on structured domain representations rather than superior raw hardware.',
          },
          {
            id: 'q1-c',
            text: 'Grandmasters refused to participate because random positions violate international chess laws.',
          },
          {
            id: 'q1-d',
            text: 'Grandmasters suffered temporary amnesia that lasted for several hours after viewing random boards.',
          },
        ],
        correctOptionId: 'q1-b',
        explanation: 'Chase and Simon demonstrated that when chess positions were randomized—destroying the structural and functional relationships between pieces—the grandmaster’s memory advantage completely disappeared. This proved that expert performance is driven by domain-specific chunk schemas stored in long-term memory, not superior raw working memory.',
        pedagogicalRationale: 'Clarifies that expertise is schema-based knowledge structure rather than general intelligence hardware.',
        evidenceNote: 'Chase, W. G., & Simon, H. A. (1973). Perception in chess. Cognitive Psychology, 4(1), 55-81.',
      },
      {
        id: 'q2-klein-rpd-mental-simulation',
        question: 'According to Gary Klein’s Recognition-Primed Decision (RPD) model, how do expert commanders and emergency physicians select effective courses of action under extreme time pressure?',
        options: [
          {
            id: 'q2-a',
            text: 'They write down a formal decision matrix and score every conceivable option against 10 weighted criteria.',
          },
          {
            id: 'q2-b',
            text: 'They recognize a prototypical situation through pattern matching, retrieve the most typical course of action, and mentally simulate its execution to verify feasibility before acting.',
          },
          {
            id: 'q2-c',
            text: 'They delegate all decision-making to the youngest team member to encourage democratic participation.',
          },
          {
            id: 'q2-d',
            text: 'They rely on telepathic synchronization with their team members without verbal communication.',
          },
        ],
        correctOptionId: 'q2-b',
        explanation: 'Klein’s RPD model demonstrates that experts under pressure do not compare multiple alternative choices (rational choice theory). Instead, their mental representations allow them to recognize the situation prototype and immediately run a forward mental simulation on the first viable candidate action, modifying it if a flaw is simulated.',
        pedagogicalRationale: 'Explains the cognitive mechanics of expert intuition and rapid decision-making in naturalistic settings.',
        evidenceNote: 'Klein, G. (1998). Sources of power: How people make decisions. MIT Press.',
      },
      {
        id: 'q3-chi-expert-physics-categorization',
        question: 'In Chi, Feltovich, & Glaser’s (1981) classic study on categorization, what was the fundamental difference in how expert physicists versus novice students categorized physics problems?',
        options: [
          {
            id: 'q3-a',
            text: 'Novices sorted problems by surface features (e.g., inclined planes, pulleys, springs), whereas experts sorted by underlying physical laws and deep principles (e.g., Conservation of Energy, Newton’s Second Law).',
          },
          {
            id: 'q3-b',
            text: 'Experts sorted problems by the length of the problem text, while novices sorted by alphabetical order.',
          },
          {
            id: 'q3-c',
            text: 'Novices solved problems 5x faster than experts because novices did not waste time thinking about theory.',
          },
          {
            id: 'q3-d',
            text: 'There was no measurable difference in how novices and experts categorized physics problems.',
          },
        ],
        correctOptionId: 'q3-a',
        explanation: 'Chi et al. (1981) demonstrated that novices fixate on superficial surface objects mentioned in the problem (e.g. "pulleys" or "blocks on ramps"), whereas experts perceive the deep structural invariants and physical laws governing the system (e.g. "Conservation of Energy").',
        pedagogicalRationale: 'Contrasts surface feature perception with deep structural mental representations.',
        evidenceNote: 'Chi, M. T., Feltovich, P. J., & Glaser, R. (1981). Categorization and representation of physics problems by experts and novices. Cognitive Science, 5(2), 121-152.',
      },
      {
        id: 'q4-ericsson-mental-representation-self-monitoring',
        question: 'According to K. Anders Ericsson (2016), why is the development of advanced mental representations the indispensable prerequisite for autonomous, expert-level self-monitoring?',
        options: [
          {
            id: 'q4-a',
            text: 'Because mental representations automatically generate monetary profits for the performer.',
          },
          {
            id: 'q4-b',
            text: 'Because sophisticated mental representations provide an internal reference standard of excellence, allowing performers to detect live discrepancies and correct their own errors without a coach.',
          },
          {
            id: 'q4-c',
            text: 'Because mental representations eliminate the need for sleep and physical rest.',
          },
          {
            id: 'q4-d',
            text: 'Because having mental representations prevents any errors from ever occurring during live performance.',
          },
        ],
        correctOptionId: 'q4-b',
        explanation: 'Ericsson demonstrated that the key difference between top performers and intermediates is that top performers use their mental representations to monitor their own performance in real time. The representation provides an internal "ideal" against which actual performance is compared, enabling immediate self-diagnosis and closed-loop adjustment.',
        pedagogicalRationale: 'Highlights self-monitoring as the ultimate developmental outcome of mental representations.',
        evidenceNote: 'Ericsson, K. A., & Pool, R. (2016). Peak: Secrets from the new science of expertise. Houghton Mifflin Harcourt.',
      },
    ],
  },
  practicalTask: {
    title: 'The Deep-Structure Mental Model Construction Protocol',
    summary: 'A 3-step practical protocol to deconstruct superficial surface complexity, map domain deep structures, and build an internal forward simulation engine for high-stakes execution.',
    steps: [
      {
        id: 'step-strip-surface-features-extract-deep-invariants',
        number: 1,
        title: 'Strip Surface Features & Map Core System Invariants',
        prompt: 'Select a technical system or domain problem you are currently studying (e.g. database transactions, authentication flows, reactive frontends). Strip away the superficial nouns (e.g. "users", "shopping carts", "buttons") and list the 3-4 underlying deep structural invariants:',
        placeholder: 'e.g., E-Commerce Checkout: Strip surface nouns. Deep invariants: (1) Atomicity: Two-phase commit between inventory reservation and payment capture, (2) Idempotency: Deduplicating requests via client-generated UUID keys, (3) State transition validation: Order state-machine invariants...',
        example: 'Distributed Messaging: Strip surface features. Deep invariants: (1) At-least-once delivery semantics require idempotent consumers; (2) Partition ordering is guaranteed only per partition key; (3) Backpressure bounds consumer memory buffer size.',
        cognitiveRationale: 'Novices classify by superficial surface tokens; expert mental representations represent problems purely by functional causal invariants (Chi et al., 1981).',
      },
      {
        id: 'step-construct-forward-simulation-state-machine',
        number: 2,
        title: 'Build a Forward Mental Simulation State-Machine',
        prompt: 'Construct an explicit temporal simulation loop: Pick a failure scenario or input spike. Mentally simulate the system state across 4 chronological ticks (+100ms, +500ms, +2s, +10s). What cascade effects occur before telemetry alerts fire?',
        placeholder: 'e.g., Incident Simulation: (t+100ms) Downstream Redis times out -> Connection pool exhausts. (t+500ms) Web workers block on connection acquisition. (t+2s) HTTP ingress queue depth explodes -> Health check probes fail. (t+10s) Kubernetes terminates pods, causing cascading restart storm...',
        example: 'Database Connection Pool Exhaustion: (t=0) Slow table scan locks rows. (t+100ms) Available pool connections drop from 50 to 0. (t+500ms) New web requests queue in memory. (t+2s) Node process memory breaches limit -> OOM kill. (t+5s) Traffic redirects to remaining nodes, taking them down in cascade.',
        cognitiveRationale: 'Forward mental simulation allows practitioners to evaluate side effects and edge cases before acting, transforming chaotic troubleshooting into predictable verification (Klein, 1998).',
      },
      {
        id: 'step-establish-internal-reference-standard-diff',
        number: 3,
        title: 'Establish an Internal Reference Standard & Perform Real-Time Discrepancy Audits',
        prompt: 'Define your internal "Reference Standard of Excellence" for this domain. When you finish a task, how will you compare your live output against this internal ideal without relying on external praise or code review?',
        placeholder: 'e.g., Reference Standard for Production PRs: (1) Zero unbounded memory allocations, (2) Explicit error handling at every I/O boundary, (3) Unit tests verify boundary failure conditions, (4) Execution metrics emit latency percentiles. Audit diff: Review my code against this 4-point checklist before creating PR...',
        example: 'Architecture Design Standard: Every design document must explicitly model (1) Worst-case network partition behavior, (2) Failure recovery latency, and (3) Data migration rollback steps. Self-Audit: Score my design doc against this standard before showing to the team.',
        cognitiveRationale: 'Advanced mental representations provide an internal comparator that allows autonomous closed-loop self-monitoring and error correction (Ericsson, 2016).',
      },
    ],
  },
};
