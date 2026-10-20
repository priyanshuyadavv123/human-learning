import type { Lesson } from '../types/learning.ts';

export const LESSON_ABSTRACTION_LADDERS: Lesson = {
  id: 'abstraction-ladders',
  chapterId: 'ch-9-analogy-bridging',
  number: '9.2',
  title: 'Abstraction Ladders & Mental Models',
  subtitle: 'Moving dynamically between concrete instances and universal laws',
  readingTimeMinutes: 15,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'Why do pure mathematical theorists often fail to write working code, while self-taught coders build brittle systems that collapse under load?',
    teaser: 'Expertise is not about staying at the top of the intellectual ivory tower, nor drowning in raw implementation details at the bottom. Mastery is fluid velocity up and down S.I. Hayakawa’s "Ladder of Abstraction" and Kenneth Craik’s internal mental simulation.',
    hookNote: 'In 1939, linguist and semanticist S.I. Hayakawa introduced the "Ladder of Abstraction" in his classic Language in Thought and Action. At the lowest rung sits "Bessie the cow"—a concrete, sensorily rich, physical organism standing in a specific muddy field. Move up a few rungs, and Bessie becomes a "cow" (a domestic bovine). Climb further, and she becomes "livestock" (agricultural property). At the summit of the ladder, she dissolves into "wealth" or "tradable commodities." In 1943, cognitive philosopher Kenneth Craik published The Nature of Explanation, proposing that the human brain constructs "internal mental models" of external reality: small-scale neural simulation engines that run counterfactual scenarios to predict outcomes before taking physical risks. In 1983, Philip Johnson-Laird expanded this into Mental Model Theory, proving that human reasoning does not follow the rigid syntactic rules of formal logic; instead, humans construct working structural analogs of possibilities in working memory. When you train yourself to traverse the abstraction ladder smoothly—grounding high-level architectural theories in concrete byte-level invariants and lifting messy bugs into universal laws—you gain the hallmark of true cognitive mastery.',
  },
  prediction: {
    prompt: 'Before analyzing the cognitive mechanics of abstraction ladders and mental simulation, test your intuition on how instructional elevation affects problem-solving transfer: Two groups of engineers are learning distributed database transactions. Group A is taught from the top down and bottom up: they study the abstract ACID axioms and serializability theory, but for every axiom, they immediately trace how disk fsync calls, lock tables, and binary network protocols implement it (dynamic bi-directional ladder climbing). Group B is taught purely at the summit of abstraction: they study formal TLA+ mathematical specifications, state transition matrices, and set-theoretic invariants without touching implementation code or concrete runtime logs. Afterward, both groups are presented with an exotic, intermittent data-corruption bug during a datacenter network partition. What does cognitive science predict for their diagnostic success?',
    context: 'Both groups studied for the exact same total hours and demonstrated 100% scores on pure formal serializability logic proofs:',
    options: [
      {
        id: 'opt-pure-formal-superiority',
        strategy: 'Hypothesis A: Mathematical Purity Superiority',
        description: 'Group B diagnoses the bug significantly faster than Group A, because keeping their minds at the highest theoretical rung insulated them from messy low-level implementation noise and cognitive clutter.',
      },
      {
        id: 'opt-bidirectional-ladder-primacy',
        strategy: 'Hypothesis B: Bi-directional Ladder Traversal Primacy',
        description: 'Group A resolves the bug over 250% faster than Group B, because robust mental models require vertical grounding: high-level axioms provide top-down hypotheses, while low-level perceptual invariants allow reality-testing against runtime artifacts (Craik, 1943; Johnson-Laird, 1983; Hayakawa, 1939).',
      },
      {
        id: 'opt-concrete-only-sufficiency',
        strategy: 'Hypothesis C: Low-Level Rung Invariance',
        description: 'Both groups fail equally because diagnostic debugging has nothing to do with theoretical abstraction ladders and relies strictly on memorized cheat sheets of vendor bug trackers.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-bidirectional-ladder-primacy',
      headline: 'Mental Models Require Dynamic Vertical Grounding Across the Full Ladder of Abstraction (Hayakawa, 1939; Craik, 1943; Johnson-Laird, 1983).',
      explanation: 'Cognitive models that remain permanently trapped at the top of the ladder suffer from "Ivory Tower Inertia": formal mathematical abstractions lack concrete operational grounding and cannot be mapped to physical runtime signals (e.g. socket timeouts, partial flushes). Conversely, models trapped at the bottom suffer from "Concrete Myopia": drowning in raw logs without organizing principles. Group A succeeded because their mental models possessed vertical bi-directional mobility: when the network partition occurred, they moved DOWN the ladder to inspect the physical socket state and disk buffers, then moved UP the ladder to evaluate which serializability invariant was violated, executing an accurate counterfactual simulation in working memory.',
      optionFeedback: {
        'opt-pure-formal-superiority': {
          title: 'Your Choice: Hypothesis A (The High-Level Purity Myth)',
          verdict: 'Refuted by 50+ Years of Cognitive & Engineering Research',
          analysis: 'Pure formal models without perceptual grounding produce high confidence but abysmal real-world troubleshooting capability. Abstract axioms cannot generate concrete diagnostic tests without operational grounding (Craik, 1943).',
        },
        'opt-bidirectional-ladder-primacy': {
          title: 'Your Choice: Hypothesis B (Bi-directional Ladder Traversal Primacy)',
          verdict: 'Empirical Cognitive Science Consensus',
          analysis: 'Accurate! S.I. Hayakawa (1939) and Philip Johnson-Laird (1983) proved that deep competence is the ability to navigate between sensory particulars and universal principles without stalling at either extreme.',
        },
        'opt-concrete-only-sufficiency': {
          title: 'Your Choice: Hypothesis C (The Anti-Theory Heuristic)',
          verdict: 'Novice Diagnostic Pathology',
          analysis: 'Debugging without theoretical schemas forces trial-and-error shotgun tampering. Without higher-order causal models, engineers cannot systematically deduce root causes.',
        },
      },
      comparisons: [
        {
          label: 'Bi-directional Ladder Mobility (Group A)',
          immediateRetention: 'High conceptual clarity; >75% successful diagnostic resolution under partition',
          oneWeekRetention: 'Durable integrated mental model (Ground-to-Summit)',
          illusionRating: 'Calibrated; theory verified by concrete physical invariants',
          isEmpiricalWinner: true,
        },
        {
          label: 'Summit-Only Formal Theory (Group B)',
          immediateRetention: 'Flawless formal logic proofs; <25% diagnostic resolution on runtime logs',
          oneWeekRetention: 'Brittle theoretical recall divorced from physical execution',
          illusionRating: 'High ivory tower illusion; unable to map math to concrete sockets',
          isEmpiricalWinner: false,
        },
        {
          label: 'Rung-Zero Bottom-Only Hackers (No Theory)',
          immediateRetention: 'Fast tactical hacks; <15% novel distributed bug resolution',
          oneWeekRetention: 'Hyper-localized memory tied to exact software versions',
          illusionRating: 'Surface fluency trap; collapses when underlying abstractions shift',
          isEmpiricalWinner: false,
        },
      ],
      evidenceDistinction: 'Top-of-ladder abstractions provide structural compression and predictive power, but bottom-of-ladder concrete instances provide empirical truth criteria and sensory feedback loops.',
    },
  },
  coreExplanations: [
    {
      id: 'hayakawa-ladder-of-abstraction-mobility',
      title: 'S.I. Hayakawa: The Ladder of Abstraction & Vertical Mobility',
      tagline: 'Moving between Bessie the Cow and Global Wealth without losing connection to reality',
      summary: 'In 1939, S.I. Hayakawa formulated the Ladder of Abstraction to explain human semantics and communication pathology. The ladder describes the spectrum of thinking: from concrete, specific physical objects at the bottom (sensory data, raw bytes, physical hardware) to high-level abstract generalizations at the top (concepts, metrics, philosophies). Hayakawa proved that intellectual dysfunction occurs when thinkers become stuck at either extreme: "dead-level abstracting" (living in the clouds of buzzwords and ivory-tower theory) or "dead-level concreteness" (unable to see patterns beyond isolated immediate events). True mastery is high-speed vertical agility.',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Foundational Semantic & Cognitive Model',
      mechanisms: [
        {
          label: 'The Four Primary Rungs of Technical Cognition',
          description: 'Rung 0 (Physical Reality): Voltage changes, silicon gates, disk head movements. Rung 1 (Concrete Data): Bytes, memory addresses, log lines, socket descriptors. Rung 2 (Operational Primitives): B-Trees, mutexes, TCP handshakes, hash maps. Rung 3 (Abstract Architecture): ACID transactions, eventual consistency, CAP theorem, microservices.',
        },
        {
          label: 'Dead-Level Abstracting Pathology',
          description: 'Occurs when a thinker communicates or reasons exclusively at Rungs 3–4 using high-level jargon ("robust enterprise decoupling", "scalable synergy") without the ability to descend to Rungs 0–1 to demonstrate physical instantiation.',
        },
        {
          label: 'Vertical Grounding & Upward Compression',
          description: 'Every time you learn a high-level concept, force yourself to climb down and touch the concrete ground (find the raw log or packet). Every time you fix a low-level bug, climb up to identify the abstract architectural law it illustrates.',
        },
      ],
      keyInsight: 'The test of first-rate engineering and cognitive mastery is not how high you can climb, but how rapidly you can descend to the ground and climb back to the clouds.',
      simplifiedModelCaveat: 'The ladder is a continuous multi-dimensional semantic lattice rather than a single linear hierarchy, but the vertical dimension of sensory specificity vs conceptual generality remains a universal cognitive axis.',
    },
    {
      id: 'craik-johnson-laird-mental-models-simulation',
      title: 'Craik & Johnson-Laird: Mental Models as Internal Simulation Engines',
      tagline: 'How the brain runs counterfactual "what-if" simulations before taking physical action',
      summary: 'Kenneth Craik (1943) and Philip Johnson-Laird (1983) revolutionized cognitive science by proving that the mind does not compute truth via the syntax of formal formal logic (e.g. truth tables or propositional calculus). Instead, human cognition constructs "mental models"—dynamic internal structural analogs of reality that preserve the spatial, temporal, and causal relationships of the world. A mental model functions as a virtual test rig in working memory, allowing an expert to simulate interventions, predict failures, and debug systems without physical danger.',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Cognitive Architecture Consensus',
      mechanisms: [
        {
          label: 'Craik’s Three-Step Cognitive Translation Engine',
          description: '1. Translate external reality into internal mental symbols. 2. Manipulate those symbols via internal simulation processes to derive novel predictions. 3. Retranslate the predicted internal state back into physical external action.',
        },
        {
          label: 'Structural Isomorphism over Logical Syntax',
          description: 'A mental model has the same relational topology as the system it represents. If component A feeds into component B in the machine, node A feeds into node B in the mental model. This allows spatial and causal intuition to bypass formal mathematical proofs.',
        },
        {
          label: 'The Principle of Truth & Model Vulnerability',
          description: 'Johnson-Laird discovered that people naturally model only what is true or present, not what is false or absent. This causes severe cognitive blindness when diagnosing systems where the failure is caused by an omitted event, silent drop, or missing signal.',
        },
      ],
      keyInsight: 'Your mental model is not a dictionary definition; it is a runnable software simulation inside your prefrontal cortex. If you cannot press "play" and watch it run, you do not understand the system.',
      simplifiedModelCaveat: 'Working memory capacity strictly limits the complexity of internal simulations; experts overcome this by chunking sub-assemblies into black boxes with known input-output contracts.',
    },
    {
      id: 'bret-victor-dynamic-abstraction-explorable-explanations',
      title: 'Bret Victor: Up and Down the Ladder of Abstraction in Systems Design',
      tagline: 'Bridging sensory perception and mathematical law through interactive representations',
      summary: 'In his landmark 2011 treatise "Up and Down the Ladder of Abstraction," computer scientist and interface designer Bret Victor demonstrated how modern cognitive interfaces can eliminate the cognitive friction of ladder climbing. By pairing concrete time-series data with interactive parameter sweeps and high-level abstract curves, a thinker can perceive the immediate concrete consequence of an abstract mathematical rule and synthesize high-level invariants directly from low-level sensory observation.',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Applied Cognitive Systems Design',
      mechanisms: [
        {
          label: 'Interactive Parameter Sweeping',
          description: 'Instead of looking at a static equation ($y = f(x)$) or a single concrete number, Victor dynamically scrubs parameters across their full domain, allowing the visual cortex to immediately perceive continuous behavior, phase changes, and non-linear bifurcations.',
        },
        {
          label: 'Concrete-Abstract Synchronous Coupling',
          description: 'When the concrete representation (e.g. an animated car on a road) and the abstract curve (e.g. velocity over time) are displayed side-by-side and linked interactively, cognitive load plummets because working memory no longer has to maintain the cross-level mapping manually.',
        },
        {
          label: 'Explorable Explanations for Deep Mastery',
          description: 'Mastery is accelerated when learners can poke a system, introduce simulated faults, and immediately observe how the shockwaves ripple across all rungs of the abstraction ladder simultaneously.',
        },
      ],
      keyInsight: 'Don’t force your brain to climb the ladder in the dark. Build mental models where abstract equations and concrete sensory signals are bound together in real time.',
      simplifiedModelCaveat: 'Dynamic interactive tools accelerate intuition building, but true autonomous mastery requires the internal ability to perform these cross-level simulations mentally when external tools are unavailable.',
    },
  ],
  diagram: {
    title: 'The Vertical Abstraction Ladder & Mental Simulation Architecture',
    subtitle: 'From ground-level physical sensory invariants to summit-level universal architectural principles',
    stages: [
      {
        id: 'stage-rung-zero-physical-ground',
        name: 'Rung 0: Physical Ground & Sensory Invariants',
        subtitle: 'Raw bytes, socket states, disk buffers, electrical voltages',
        capacity: 'Infinite physical reality; overwhelming noise without filtering',
        duration: 'Nanosecond to millisecond physical dynamics',
        role: 'The ground level provides the ultimate source of truth. All abstract models must reconcile with what physically happens on silicon, wires, and magnetic platters.',
        failureMode: 'Concrete Myopia: Getting trapped in hexadecimal dumps without recognizing what high-level state machine they represent.',
        evidenceType: 'Empirical consensus (Hayakawa, 1939; Craik, 1943)',
        practicalFix: 'Ascend one rung: cluster raw bytes into structured protocol frames or operational records.',
      },
      {
        id: 'stage-rung-one-operational-primitives',
        name: 'Rung 1: Operational Components & Algorithms',
        subtitle: 'B-Trees, Mutexes, TCP handshakes, Token buckets',
        capacity: 'Well-defined mathematical data structures and finite automata',
        duration: 'Operational execution latency',
        role: 'The middle-lower tier implements the mechanics of systems. It translates abstract architectural contracts into concrete memory layouts and deterministic state transitions.',
        failureMode: 'Implementation lock-in: Confusing a specific language implementation (e.g. Java synchronized) with the universal concurrency primitive.',
        evidenceType: 'Empirical consensus (Johnson-Laird, 1983; Chi et al., 1981)',
        practicalFix: 'Compare contrasting implementations across multiple languages to extract the invariant state transition.',
      },
      {
        id: 'stage-rung-two-architectural-schemas',
        name: 'Rung 2: System Architecture & Causal Topologies',
        subtitle: 'Consensus protocols, Event-driven pipelines, CQRS, Caching topologies',
        capacity: 'Compressed relational graphs (~4 interacting macro-components)',
        duration: 'End-to-end transaction lifecycle',
        role: 'The middle-upper tier organizes components into goal-oriented systems. It defines how data flows, where backpressure accumulates, and how failures propagate across subsystem boundaries.',
        failureMode: 'Architecture Astronautics: Designing complex multi-tier microservices without verifying if network round-trip latency allows the SLA.',
        evidenceType: 'Empirical consensus (Gentner, 1983; Victor, 2011)',
        practicalFix: 'Ground every architectural block with an explicit latency and failure-budget budget.',
      },
      {
        id: 'stage-rung-three-universal-invariants',
        name: 'Rung 3: Universal Governing Principles',
        subtitle: 'CAP Theorem, Information Entropy, Conservation of Energy, Amdahl’s Law',
        capacity: 'Pure mathematical and physical axioms',
        duration: 'Permanent invariant constraints',
        role: 'The summit of the ladder defines universal impossibility proofs and governing conservation laws. It establishes hard limits on what any physical or informational system can achieve.',
        failureMode: 'Ivory Tower Inertia: Quoting the CAP theorem while unable to diagnose why a Postgres primary failed over to an out-of-sync replica.',
        evidenceType: 'Empirical consensus (Hayakawa, 1939; Craik, 1943)',
        practicalFix: 'Force immediate downward descent: trace how this universal law manifests in a concrete, runnable test harness.',
      },
    ],
    feedbackLoopDescription: 'Upward climbs compress concrete noise into universal laws; downward descents reality-test abstract theories against immutable physical invariants.',
  },
  exercise: {
    title: 'Abstraction Ladder & Mental Simulation Diagnostic Exercise',
    instruction: 'Analyze four real-world engineering and reasoning pathologies. Diagnose whether the failure stems from Ivory Tower Inertia (dead-level abstracting), Concrete Myopia (dead-level concreteness), Principle-of-Truth Blindness, or Broken Simulation Mapping, and prescribe the evidence-grounded fix.',
    categories: [
      {
        id: 'attention-bottleneck',
        title: 'Concrete Myopia (Rung-Zero Trapped)',
        description: 'Drowning in raw logs and hexadecimal traces without climbing the ladder to identify the governing architectural law.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'working-memory-overload',
        title: 'Ivory Tower Inertia (Summit Trapped)',
        description: 'Living in high-level architectural jargon and formal proofs without the ability to descend to concrete bytes or physical reality.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Principle-of-Truth Blindness Trap',
        description: 'Failing to model what is absent or silent (e.g. dropped packets, missing heartbeats, silent clock drift) during mental simulation.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Broken Simulation Topology',
        description: 'Constructed an internal mental model whose structural connections violate the actual physical wiring of the production system.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-ivory-tower-architect',
        realWorldContext: 'Chief Enterprise Architect Designing Cloud Migration',
        scenario: 'Elena delivers a 120-page architectural slide deck filled with diagrams titled "Omni-Channel Cloud-Native Micro-Mesh Synergy" and quotes the CAP theorem extensively. When the team begins implementation, they discover that her design requires 14 synchronous network hops across three AWS regions for a single user login, resulting in an unworkable 1,800 ms baseline latency.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'Elena suffered from Ivory Tower Inertia (Hayakawa’s "Dead-Level Abstracting"). She lived exclusively at Rung 3 of the abstraction ladder, designing schemas detached from Rung 0 physical realities (speed of light in optical fiber, packet round-trip time across geographic regions).',
        evidenceBasedFix: 'Enforce Bret Victor’s vertical grounding: require every architectural box in a design document to include concrete latency numbers and packet-level traces before approval.',
      },
      {
        id: 'scen-concrete-log-diver',
        realWorldContext: 'Junior Systems Administrator Troubleshooting Network Outage',
        scenario: 'During a major production outage, Marcus opens a terminal and starts tailing 10 million raw lines of Nginx access logs. He spends 90 minutes hunting through individual IP addresses and timestamp strings, completely oblivious to the fact that the entire upstream datacenter switch had suffered a core BGP routing failure.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'Marcus was trapped in Concrete Myopia (Hayakawa’s "Dead-Level Concreteness"). By fixating on raw Rung 0 sensory data without climbing up to Rung 2–3 (network topology, routing protocols), his working memory was swamped by uncompressed noise.',
        evidenceBasedFix: 'Train the upward ladder climb: when a failure occurs, immediately ascend two rungs to inspect aggregate metrics and subsystem health indicators before diving into individual log lines.',
      },
      {
        id: 'scen-silent-packet-drop-blindness',
        realWorldContext: 'Distributed Systems Engineer Debugging Split-Brain Cluster',
        scenario: 'A distributed consensus cluster partitioned into two halves. Both partitions kept trying to elect a leader, but the cluster hung indefinitely. In his head, Liam simulated all the messages that nodes send when voting, but he couldn’t see why the election failed. The root cause was that an asymmetric firewall was silently dropping ACK packets without returning an error code.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'Liam succumbed to the Principle of Truth (Johnson-Laird, 1983). The human brain naturally constructs mental models of propositions that are explicitly stated or events that occur; it struggles immensely to simulate non-events, omitted responses, or silent packet drops.',
        evidenceBasedFix: 'Incorporate explicit negative simulation checks: in every mental walk-through, deliberately inject "SILENT_DROP" and "OMISSION_FAILURE" as first-class physical entities.',
      },
      {
        id: 'scen-inverted-cache-topology',
        realWorldContext: 'Full-Stack Developer Debugging Stale User Profiles',
        scenario: 'Chloe is convinced that user profile updates are failing because the PostgreSQL database is reverting transactions. In reality, her mental model placed Redis *behind* PostgreSQL as a cold archive, when in production code Redis was deployed *in front* of PostgreSQL as an invalidating cache-aside buffer.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'Chloe suffered from a Broken Simulation Topology (Craik, 1943). Her internal mental model violated structural isomorphism with the production architecture. Because the arrows in her mind flowed backward, every counterfactual simulation she ran generated completely erroneous diagnostic deductions.',
        evidenceBasedFix: 'Perform an explicit structural alignment audit: draw the production data flow on paper, trace a live write request end-to-end, and align the internal mental topology with observed reality.',
      },
    ],
  },
  quiz: {
    title: 'Verification Assessment: Abstraction Ladders & Mental Models',
    instruction: 'Evaluate your operational understanding of Hayakawa’s abstraction ladder, Craik’s mental simulations, and Johnson-Laird’s mental model theory. Achieve 75% or higher to verify mastery.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-hayakawa-ladder-pathology',
        question: 'According to S.I. Hayakawa (1939), what is the definition and danger of "dead-level abstracting"?',
        options: [
          {
            id: 'q1-a',
            text: 'Remaining permanently trapped at the highest rungs of conceptual generalization, speaking exclusively in buzzwords and theories without the ability to ground statements in verifiable physical facts.',
          },
          {
            id: 'q1-b',
            text: 'Falling off a physical wooden ladder while inspecting network server racks.',
          },
          {
            id: 'q1-c',
            text: 'Refusing to use words with more than two syllables in engineering documentation.',
          },
          {
            id: 'q1-d',
            text: 'Translating all software code directly into ancient Latin.',
          },
        ],
        correctOptionId: 'q1-a',
        explanation: 'Hayakawa defined dead-level abstracting as remaining trapped at high levels of abstraction where words refer only to other words, resulting in high-sounding philosophical chatter divorced from concrete physical reality.',
        pedagogicalRationale: 'Establishes the semantic pathology of theoretical ivory towers in engineering and learning.',
        evidenceNote: 'Hayakawa, S. I. (1939). Language in Action: A Guide to Accurate Thinking, Reading and Writing. Harcourt, Brace and Company.',
      },
      {
        id: 'q2-craik-internal-mental-model-simulation',
        question: 'How did Kenneth Craik (1943) characterize the fundamental evolutionary purpose of an internal mental model?',
        options: [
          {
            id: 'q2-a',
            text: 'As a small-scale neural simulation engine that mirrors external reality, allowing an organism to run counterfactual "what-if" trials safely before taking physical action in the real world.',
          },
          {
            id: 'q2-b',
            text: 'As a passive photographic archive that stores verbatim copies of visual memories without alteration.',
          },
          {
            id: 'q2-c',
            text: 'As an electromagnetic receiver that channels thoughts directly from the ionosphere.',
          },
          {
            id: 'q2-d',
            text: 'As a biological mechanism designed exclusively to memorize multiplication tables.',
          },
        ],
        correctOptionId: 'q2-a',
        explanation: 'Craik (1943) established that the brain operates as an internal simulator: it translates external reality into internal symbols, manipulates them to predict outcomes, and guides action, avoiding fatal physical trial-and-error.',
        pedagogicalRationale: 'Defines the predictive and counterfactual nature of true mental models.',
        evidenceNote: 'Craik, K. J. W. (1943). The Nature of Explanation. Cambridge University Press.',
      },
      {
        id: 'q3-johnson-laird-principle-of-truth',
        question: 'Why does Philip Johnson-Laird’s (1983) "Principle of Truth" explain why engineers often fail to diagnose distributed system failure modes?',
        options: [
          {
            id: 'q3-a',
            text: 'The human cognitive system naturally constructs mental models of what is explicitly true or present, but routinely fails to represent what is false, omitted, or silent (such as silent packet drops or missing heartbeats).',
          },
          {
            id: 'q3-b',
            text: 'Engineers are biologically incapable of telling the truth during incident post-mortems.',
          },
          {
            id: 'q3-c',
            text: 'The Principle of Truth requires that all software bugs be resolved within 4 minutes.',
          },
          {
            id: 'q3-d',
            text: 'Mental models cannot represent numbers greater than 10.',
          },
        ],
        correctOptionId: 'q3-a',
        explanation: 'Johnson-Laird’s Principle of Truth demonstrates that human mental models represent what is true or actual, leaving what is false or absent unrepresented to conserve working memory. In distributed systems, this creates severe blind spots for omissions, silent partitions, and un-emitted events.',
        pedagogicalRationale: 'Explains the cognitive vulnerability of mental models when dealing with silent failures and non-events.',
        evidenceNote: 'Johnson-Laird, P. N. (1983). Mental Models: Towards a Cognitive Science of Language, Inference, and Consciousness. Harvard University Press.',
      },
      {
        id: 'q4-bret-victor-ladder-coupling',
        question: 'In Bret Victor’s framework, how does interactive coupling between concrete instances and abstract models accelerate mastery?',
        options: [
          {
            id: 'q4-a',
            text: 'By synchronizing parameter sweeps with immediate visual feedback, allowing the perceptual system to directly observe the concrete consequences of abstract mathematical laws.',
          },
          {
            id: 'q4-b',
            text: 'By replacing all human thinking with automatic artificial intelligence agents.',
          },
          {
            id: 'q4-c',
            text: 'By deleting all text from computer screens and relying exclusively on interpretive dance.',
          },
          {
            id: 'q4-d',
            text: 'By forcing learners to climb 10,000 physical stairs before studying algebra.',
          },
        ],
        correctOptionId: 'q4-a',
        explanation: 'Victor (2011) showed that when an interface couples high-level abstract curves directly to concrete simulations via dynamic parameter scrubbing, learners build intuitive mental models without cognitive translation overload.',
        pedagogicalRationale: 'Connects cognitive psychology to effective modern interactive visualization and explorable explanations.',
        evidenceNote: 'Victor, B. (2011). Up and Down the Ladder of Abstraction. Worrydream.com.',
      },
    ],
  },
  practicalTask: {
    title: 'The Vertical Ladder Traversal & Mental Simulation Protocol',
    summary: 'A 3-step actionable protocol to map your technical domain across the full ladder of abstraction, calibrate runnable mental models, and audit for omission blindness.',
    steps: [
      {
        id: 'step-map-4-tier-ladder',
        number: 1,
        title: 'Construct a 4-Tier Abstraction Ladder for Your Core Domain',
        prompt: 'Select a mission-critical technology you work with (e.g. Distributed Caching, Kafka Event Streaming, Git Version Control). Fill in all four rungs of Hayakawa’s ladder from physical ground to universal law:',
        placeholder: 'e.g., Rung 0 (Physical Ground): SSD NAND flash blocks, Linux epoll syscalls, TCP SYN/ACK packets. Rung 1 (Operational Primitives): B-Tree page splits, append-only commit logs, write-ahead ring buffers. Rung 2 (Architectural Schemas): Leader-follower consensus, read-replica replication lag, cache-aside hydration. Rung 3 (Universal Invariants): PACELC/CAP tradeoffs, Amdahl’s scaling limit, Shannon information capacity...',
        example: 'Git: Rung 0 = 40-character SHA-1 hashed zlib-compressed object files in .git/objects. Rung 1 = Directed Acyclic Graph (DAG) of commit, tree, and blob pointers with ref pointers in .git/refs. Rung 2 = Distributed branching, three-way merge resolution, rebase history rewrite. Rung 3 = Cryptographically verifiable Merkle DAG for decentralized consensus.',
        cognitiveRationale: 'Explicitly writing out all four rungs prevents "dead-level abstracting" and ensures that high-level concepts are physically anchored to low-level invariants (Hayakawa, 1939).',
      },
      {
        id: 'step-run-counterfactual-simulation',
        number: 2,
        title: 'Execute an Internal "What-If" Counterfactual Simulation',
        prompt: 'In your mind’s virtual test rig, introduce a specific fault at Rung 1 (e.g. a disk write fails halfway through; a network socket drops during a TLS handshake). Step-by-step, trace the ripple effect UP to Rung 2 and Rung 3:',
        placeholder: 'e.g., Fault: OS process killed with SIGKILL while writing a 4MB Redis snapshot. What happens? In-memory state lost. Disk contains half-written RDB file. On reboot, Redis checks checksum, detects truncation, refuses to boot. Fix: inspect append-only file (AOF) or point-in-time backup...',
        example: 'Fault: Network partition cuts off Kafka broker from Zookeeper/KRaft quorum. What happens? Broker cannot renew lease. Controller marks broker dead. Partitions fail over to in-sync replicas (ISR). Producer with acks=all stalls until new leader elected.',
        cognitiveRationale: 'Running explicit counterfactual simulations exercises Kenneth Craik’s (1943) neural simulation engine, building robust diagnostic intuition without risking production outages.',
      },
      {
        id: 'step-audit-principle-of-truth-blindness',
        number: 3,
        title: 'Audit for Principle-of-Truth Blindness (Omissions & Non-Events)',
        prompt: 'Look at your current system architecture and identify three critical "non-events"—things that fail silently by doing NOTHING rather than throwing an explicit error. How does your system detect them?',
        placeholder: 'e.g., Non-event 1: A worker thread hangs in an infinite loop without terminating (no error log emitted). Detection: External watchdog heartbeat timeout. Non-event 2: Cloud provider silently drops outbound packets without sending TCP RST. Detection: TCP keepalive probe timeout...',
        example: 'Non-event: Database query deadlocks on row lock; connection sits idle for 15 minutes without error. Detection: Statement timeout (statement_timeout = 5000ms) and idle connection reaping.',
        cognitiveRationale: 'Actively auditing for non-events overcomes Johnson-Laird’s (1983) Principle of Truth, eliminating the most dangerous blind spot in human reasoning.',
      },
    ],
  },
};
