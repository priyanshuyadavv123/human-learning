import type { Lesson } from '../types/learning.ts';

export const LESSON_CHUNKING_MECHANICS: Lesson = {
  id: 'chunking-mechanics',
  chapterId: 'ch-8-chunking-schemas',
  number: '8.1',
  title: 'The Mechanics of Chunking',
  subtitle: 'Compressing complex relational networks into single cognitive units',
  readingTimeMinutes: 15,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'How can a master software architect or grandmaster chess player hold hundreds of moving pieces in mind simultaneously, when the human working memory bottleneck is strictly capped at ~4 chunks?',
    teaser: 'Expertise does not enlarge working memory capacity. Experts have the exact same 4-slot scratchpad as novices—they simply compress massive relational webs into high-density compound units called chunks.',
    hookNote: 'In 1946, Adriaan de Groot made a startling empirical discovery: when master chess players and novices were shown chess positions from actual games for just 5 seconds, grandmasters recalled nearly 95% of the pieces correctly, while novices recalled less than 35%. However, when pieces were placed randomly on the board, the grandmaster’s advantage vanished completely—their recall dropped to the novice level. In 1973, William G. Chase and Herbert A. Simon published their landmark paper "Perception in Chess," proving that grandmasters do not calculate more moves or have photographic memory; instead, they have encoded 50,000+ relational patterns ("chunks") in long-term memory. When an expert glances at a board or code architecture, long-term schema recognition compresses 16 related pieces into a single working memory slot. In 1995, K. Anders Ericsson and Walter Kintsch formulated the "Long-Term Working Memory" (LTWM) framework: expertise transforms fragile short-term working memory into a high-bandwidth retrieval structure indexed directly to consolidated long-term schemas. Chunking is the fundamental algorithmic compression that converts overwhelming cognitive noise into fluent mental models.',
  },
  prediction: {
    prompt: 'Before analyzing the cognitive architecture of compression, test your intuition on how experts perceive complex patterns: A senior staff software architect and a junior bootcamp graduate are shown a production distributed systems architecture diagram for exactly 5 seconds. Condition 1 uses an authentic production architecture (Kubernetes clusters, Kafka broker partitions, Redis write-through caching, Postgres read replicas). Condition 2 takes the exact same system icons and labels, but connects them completely at random (Kafka brokers pointing into Postgres replicas, Redis acting as an ingress controller, Kubernetes pods inside a Kafka topic). What does empirical cognitive psychology predict for their recall?',
    context: 'Both subjects are tested on reproducing the layout and component relationships immediately following the 5-second presentation:',
    options: [
      {
        id: 'opt-hardware-superiority',
        strategy: 'Hypothesis A: Global Memory Superiority',
        description: 'The senior architect recalls significantly more components and connections than the junior graduate in BOTH conditions, because years of technical work have physically expanded their general working memory capacity and visual-spatial bandwidth.',
      },
      {
        id: 'opt-schema-conditional-chunking',
        strategy: 'Hypothesis B: Schema-Dependent Relational Chunking',
        description: 'The senior architect demonstrates dramatically superior recall in Condition 1 (authentic architecture), but in Condition 2 (random scramble), their recall collapses down to near the junior graduate’s level, because expert advantage depends on recognized long-term schemas.',
      },
      {
        id: 'opt-beginner-freshness',
        strategy: 'Hypothesis C: Novice Visual Invariance',
        description: 'The junior graduate performs better in Condition 2 than Condition 1 because their mental models are less rigid and more flexible when processing random, unconventional architectures.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-schema-conditional-chunking',
      headline: 'Expert Memory Advantage Is Entirely Dependent on Long-Term Relational Schemas (De Groot, 1946; Chase & Simon, 1973; Gobet & Simon, 1996).',
      explanation: 'Expertise does not upgrade the brain’s biological hardware: working memory remains strictly constrained to ~4 chunks across all humans (Cowan, 2001). In Condition 1, the senior architect recognized meaningful architectural motifs (e.g. "Event-Driven CQRS Pipeline" or "Read-Replica DB Cluster"). Each motif constitutes a single chunk in working memory, allowing the architect to hold 20+ components within their 4-slot budget. In Condition 2, the random connections violated domain grammar; chunks could not form. Every disconnected box occupied an individual slot, forcing the architect to rely on raw working memory, causing their performance to plummet to novice levels.',
      optionFeedback: {
        'opt-hardware-superiority': {
          title: 'Your Choice: Hypothesis A (The Expanded Hardware Fallacy)',
          verdict: 'Refuted by 50+ Years of Cognitive Science',
          analysis: 'Chase & Simon (1973) and De Groot (1946) conclusively demonstrated that experts do not possess larger working memories or photographic visual recall. When tested on random stimulus arrangements, grandmasters perform no better than novices.',
        },
        'opt-schema-conditional-chunking': {
          title: 'Your Choice: Hypothesis B (Schema-Dependent Relational Chunking)',
          verdict: 'Empirical Cognitive Science Consensus',
          analysis: 'Accurate! Expertise is domain-specific schema compression. Long-term memory patterns serve as retrieval structures, compressing complex relational graphs into single compound chunks.',
        },
        'opt-beginner-freshness': {
          title: 'Your Choice: Hypothesis C (The Beginner Flexibility Myth)',
          verdict: 'Unfounded Intuition',
          analysis: 'Novices do not have superior recall on random layouts; both experts and novices struggle equally when domain-specific syntax and semantics are scrambled.',
        },
      },
      comparisons: [
        {
          label: 'Authentic Meaningful Domain Layout (Condition 1)',
          immediateRetention: '92% Expert recall vs 33% Novice recall',
          oneWeekRetention: '78% Expert retention (Anchored in LTWM)',
          illusionRating: 'Calibrated (Semantic chunks compress elements)',
          isEmpiricalWinner: true,
        },
        {
          label: 'Randomly Scrambled Layout (Condition 2)',
          immediateRetention: '38% Expert recall vs 31% Novice recall (No difference)',
          oneWeekRetention: '12% Retention (Raw working memory decay)',
          illusionRating: 'High (Disproves generalized photographic memory)',
          isEmpiricalWinner: false,
        },
        {
          label: 'Rote Memorization of Isolated Elements',
          immediateRetention: '45% Novice recall (Slot exhaustion)',
          oneWeekRetention: '14% (Fails without structural relations)',
          illusionRating: 'Fluency trap (Memorizing parts without relational glue)',
          isEmpiricalWinner: false,
        },
      ],
      evidenceDistinction: 'Empirical Evidence Distinction: The schema-based theory of expertise is established across chess (Chase & Simon, 1973), computer programming (McKeithen et al., 1981; Guida et al., 2012), physics problem solving (Chi, Feltovich, & Glaser, 1981), and medical diagnosis (Schmidt & Boshuizen, 1993).',
    },
  },
  coreExplanations: [
    {
      id: 'de-groot-chase-simon-chunking',
      title: '1. De Groot, Chase & Simon: The Empirical Foundations of Chunking',
      tagline: 'Why masters see constellations where novices see isolated stars',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Foundational Cognitive Psychology Consensus',
      summary: 'Chunking is the cognitive process by which individual pieces of information are bound together into a meaningful, higher-order unit stored in long-term memory. Chase & Simon (1973) proved that expert perception operates through rapid perceptual chunk recognition rather than brute-force forward calculation.',
      mechanisms: [
        {
          label: 'The 5-Second Brief Exposure Paradigm (De Groot, 1946)',
          description: 'De Groot exposed chess grandmasters and club players to mid-game positions for only 2 to 5 seconds. Masters could reconstruct the positions almost flawlessly, while amateurs placed barely a handful of pieces. When pieces were randomized, the difference disappeared, proving the advantage was informational and semantic, not sensory.',
        },
        {
          label: 'The 50,000 Chunks Estimate (Simon & Gilmartin, 1973)',
          description: 'Herbert Simon calculated that achieving master-level performance in a complex domain (chess, medicine, code architecture) requires accumulating approximately 50,000 familiar perceptual chunks in long-term memory—comparable to the vocabulary size of an educated native speaker.',
        },
        {
          label: 'Eye-Tracking and Fixation Dynamics',
          description: 'Eye-tracking research shows that novices scan isolated individual components sequentially. Experts make immediate saccades to relational nexus points, processing clusters of functionally interacting elements in single fixations.',
        },
      ],
      keyInsight: 'Experts do not think faster; they think with larger pieces. A chunk turns twenty moving parts into a single stable object of thought.',
      simplifiedModelCaveat: 'Chunks are not rigid static photographs; they are dynamic relational schemas that tolerate minor surface variations while preserving core invariant relationships.',
    },
    {
      id: 'template-theory-gobet-simon',
      title: '2. Gobet & Simon’s Template Theory: Slots, Cores & Rapid Adaptability',
      tagline: 'From simple chunks to flexible hierarchical knowledge templates',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Cognitive Architecture Consensus',
      summary: 'Fernand Gobet and Herbert Simon (1996) expanded basic chunking into Template Theory. Chunks evolve into "templates"—generic schematic frameworks possessing a stable core and variable slots that can be rapidly filled with specific situational data.',
      mechanisms: [
        {
          label: 'Core Pattern vs Variable Slots',
          description: 'A template consists of a constant core (the invariant structural pattern, e.g. a Model-View-Controller architecture or a King’s Indian defense pawn structure) and variable slots that can be rapidly instantiated with transient values in working memory without new long-term learning.',
        },
        {
          label: 'Bypassing the Working Memory Bottleneck',
          description: 'Because the core structure is already stored in long-term memory, working memory only needs to maintain the pointers to the template and the specific slot assignments. This explains how experts remember multiple simultaneous game variations or microservice topologies with zero cognitive overload.',
        },
        {
          label: 'Chunk Hierarchy & Recursive Nesting',
          description: 'Chunks nest hierarchically. Low-level chunks (e.g. variable declaration, loop syntax) combine into intermediate chunks (e.g. accumulator pattern, binary search), which combine into high-level templates (e.g. distributed map-reduce job).',
        },
      ],
      keyInsight: 'Templates provide the scaffolding of expertise: stable enough to recognize instantly, yet flexible enough to adapt to novel problem configurations.',
      simplifiedModelCaveat: 'Template acquisition requires hundreds of deliberate problem variations; passively viewing a single architecture template does not build the internal slot structure needed for dynamic execution.',
    },
    {
      id: 'long-term-working-memory-ericsson',
      title: '3. Ericsson & Kintsch: Long-Term Working Memory (LTWM)',
      tagline: 'Turning permanent storage into an active, high-bandwidth cognitive scratchpad',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Metacognitive & Expertise Architecture Consensus',
      summary: 'K. Anders Ericsson and Walter Kintsch (1995) resolved the paradox of working memory limits in expertise. They demonstrated that experts construct domain-specific retrieval structures that allow long-term memory to function as an extended, interruption-resistant working memory buffer.',
      mechanisms: [
        {
          label: 'Retrieval Structures & Direct LTM Pointers',
          description: 'Rather than holding raw facts in the 4-slot short-term working memory scratchpad, experts maintain retrieval cues in short-term memory that point directly to pre-organized, stable schemas in long-term memory.',
        },
        {
          label: 'Interruption Resilience of LTWM',
          description: 'Novices interrupted mid-task lose the entire contents of working memory and must restart from scratch. Experts operating with LTWM can be interrupted for 30 minutes, return to the task, and instantly restore full situational awareness in seconds via stable retrieval structure anchors.',
        },
        {
          label: 'Deliberate Chunk Induction Protocols',
          description: 'Building LTWM requires deliberate variation practice: active comparison of multiple contrasting problems, identifying invariant relational principles, and verbalizing structural schemas during synthesis.',
        },
      ],
      keyInsight: 'The goal of technical study is not to memorize facts into short-term memory, but to construct long-term retrieval structures that instantly expand your effective working memory capacity.',
      simplifiedModelCaveat: 'LTWM retrieval structures are strictly domain-specific. An expert software architect possesses zero expanded working memory when studying organic chemistry or legal contracts.',
    },
  ],
  diagram: {
    title: 'The Architecture of Chunking & Long-Term Working Memory',
    subtitle: 'From fragmented sensory elements to hierarchical templates and direct long-term memory indexing',
    stages: [
      {
        id: 'stage-fragmented-novice-state',
        name: 'Stage 1: Fragmented Novice Perception',
        subtitle: 'Every isolated element consumes an individual working memory slot',
        capacity: 'Raw working memory bottleneck (~4 items)',
        duration: 'Seconds before cognitive overload',
        role: 'The novice encounters a complex system and perceives 20 isolated elements (ports, queues, database tables). With only 4 working memory slots, the cognitive buffer overflows immediately, producing confusion and high error rates.',
        failureMode: 'Slot exhaustion: Inability to see how component A affects component G because both cannot be held simultaneously.',
        evidenceType: 'Empirical consensus (Miller, 1956; Cowan, 2001; Sweller, 1988)',
        practicalFix: 'Provide annotated worked examples with explicit cluster boundaries rather than unguided discovery.',
      },
      {
        id: 'stage-relational-chunk-binding',
        name: 'Stage 2: Relational Chunk Binding',
        subtitle: 'Associative patterns bind related elements into compound units',
        capacity: 'Compressed intermediate chunks',
        duration: 'Dozens of problem exposures',
        role: 'Through repeated problem exposure, recurring elements that fire together become bound into relational chunks. A database, cache, and connection pool are now perceived as a single entity: "Caching Layer".',
        failureMode: 'Premature chunking: Grouping elements based on superficial surface visual features rather than deep structural logic.',
        evidenceType: 'Empirical consensus (Chase & Simon, 1973; Chi et al., 1981)',
        practicalFix: 'Force categorization drills based on underlying architectural function rather than naming conventions.',
      },
      {
        id: 'stage-template-formation',
        name: 'Stage 3: Hierarchical Template Formation',
        subtitle: 'Stable structural core with variable slots for dynamic situational data',
        capacity: 'Generic domain templates in LTM',
        duration: 'Hundreds of deliberate practice variations',
        role: 'Multiple relational chunks merge into flexible templates (Gobet & Simon, 1996). The expert has a template for "Distributed Streaming Architecture" with open slots for throughput, partition key, and sink destination.',
        failureMode: 'Over-fitting: Trying to force a novel problem into a familiar template where the structural assumptions do not hold.',
        evidenceType: 'Empirical consensus (Gobet & Simon, 1996; Guida et al., 2012)',
        practicalFix: 'Practice boundary-testing and contrastive analysis across non-standard edge-case architectures.',
      },
      {
        id: 'stage-long-term-working-memory-indexing',
        name: 'Stage 4: Long-Term Working Memory (LTWM) Indexing',
        subtitle: 'Direct pointer retrieval structures expand effective bandwidth tenfold',
        capacity: 'Virtual working memory bandwidth (20–40 elements)',
        duration: 'Automated expert fluency',
        role: 'Working memory maintains high-level pointers to hierarchical retrieval structures in long-term memory (Ericsson & Kintsch, 1995). The expert can reason across complex distributed systems without cognitive strain or interruption loss.',
        failureMode: 'Domain confinement: Assuming high chunking fluency in one domain transfers to unrelated fields.',
        evidenceType: 'Empirical consensus (Ericsson & Kintsch, 1995; McKeithen et al., 1981)',
        practicalFix: 'Recognize domain boundaries and explicitly build new relational chunks when entering unfamiliar technical territory.',
      },
    ],
    feedbackLoopDescription: 'As higher-level templates automate, they themselves become elemental components for next-generation macro-templates, continuously scaling cognitive mastery.',
  },
  exercise: {
    title: 'Cognitive Chunking & Expertise Diagnostic Exercise',
    instruction: 'Analyze four real-world engineering and learning scenarios. Diagnose whether performance bottlenecks stem from slot exhaustion, surface-level chunking, or missing retrieval structures, and prescribe the evidence-grounded fix.',
    categories: [
      {
        id: 'attention-bottleneck',
        title: 'Working Memory Slot Exhaustion',
        description: 'Attempting to hold too many unchunked, isolated elements simultaneously in raw working memory caused cognitive collapse.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'working-memory-overload',
        title: 'Surface-Feature Chunking Trap',
        description: 'Grouping components by superficial visual labels or syntactic keywords rather than underlying causal and relational structures.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Missing LTWM Retrieval Structure',
        description: 'Lack of hierarchical long-term retrieval structures caused total loss of mental state upon minor interruptions or context switches.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'High-Density Template Fluency',
        description: 'Successfully recognized invariant structural cores with variable slots, reasoning across 20+ elements within a 2-slot budget.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-novice-code-review-overwhelm',
        realWorldContext: 'Junior Engineer Reviewing Pull Request',
        scenario: 'Dan, an entry-level engineer, reviews a 400-line pull request implementing a payments integration. He reads line by line, trying to keep track of variable names, error types, HTTP codes, and retry counters in his head. After 15 lines, he feels exhausted, forgets what the first function did, and cannot determine whether the overall transaction rollback logic is sound.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'Dan is experiencing raw Working Memory Slot Exhaustion (Miller, 1956; Cowan, 2001). Lacking consolidated programming chunks (like the "Idempotent Webhook Handler" or "Two-Phase Commit" pattern), each individual line consumes a working memory slot. His ~4-chunk capacity is exceeded almost immediately.',
        evidenceBasedFix: 'Dan should perform structural chunking: scan the PR to identify the high-level template first (e.g. Ingress → Authentication → Verification → Atomic DB Write), grouping lines into functional blocks before inspecting low-level syntax.',
      },
      {
        id: 'scen-physics-surface-sorting',
        realWorldContext: 'Undergraduate Algorithm Design Classification',
        scenario: 'In an algorithms lab, students are asked to categorize 20 programming problems. Marcus groups all problems mentioning "airports and flights" into one folder, and all problems mentioning "social media friends" into another. When tasked with solving them, he discovers his folders contain an impossible mix of Dijkstra, Maximum Flow, and dynamic programming problems.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'Marcus fell into the classic Surface-Feature Categorization Trap (Chi, Feltovich, & Glaser, 1981). Novices categorize problems by surface narrative keywords ("airports"), whereas experts categorize by deep relational and mathematical structure ("Single-Source Shortest Path"). Surface chunking provides zero useful retrieval cues.',
        evidenceBasedFix: 'Use explicit contrastive sorting drills: present pairs of problems with identical surface storylines that require completely different algorithmic paradigms, forcing attention to deep structural invariants.',
      },
      {
        id: 'scen-slack-message-wipeout',
        realWorldContext: 'Software Developer Mid-Task Interruption',
        scenario: 'Elena is tracing a complex race condition in a multi-threaded service. She receives a Slack ping asking for a document link. She spends 60 seconds answering the message. When she returns to her code editor, her entire mental model of the race condition is gone; she has to spend 25 minutes re-reading logs to rebuild her understanding.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'Elena was holding the race condition state entirely in fragile short-term working memory without externalizing or binding it into a Long-Term Working Memory (LTWM) retrieval structure (Ericsson & Kintsch, 1995). The distracting task wiped her short-term phonological and visuospatial buffers, causing total state loss.',
        evidenceBasedFix: 'Adopt an externalized retrieval structure scaffold: jot down the 3 state variables and their timeline sequence in a scratchpad before switching tasks. The written anchor acts as a pointer that instantly reactivates the LTWM schema upon return.',
      },
      {
        id: 'scen-architect-incident-triaging',
        realWorldContext: 'Principal Architect Incident Response Room',
        scenario: 'During a major production outage with 50 microservices alerting simultaneously, Maya glances at the distributed tracing dashboard for 8 seconds and immediately says: "The downstream Cassandra write cluster at us-east is experiencing compaction latency spikes, causing backpressure through Kafka partition 4 into the billing ingress." She identified the root cause before others could read the first log line.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'Maya demonstrated High-Density Template Fluency (Gobet & Simon, 1996; Chase & Simon, 1973). Over 12 years of distributed systems engineering, she consolidated 50,000+ architectural chunks. The chaotic dashboard was recognized as an instance of a single known template ("Upstream Backpressure Cascade"), compressing dozens of telemetry metrics into one unified mental unit.',
        evidenceBasedFix: 'Continue codifying outage post-mortems into canonical structural templates so mid-level engineers can accelerate their chunk induction.',
      },
    ],
  },
  quiz: {
    title: 'Formative Assessment: The Mechanics of Chunking & Schema Induction',
    instruction: 'Demonstrate rigorous conceptual mastery of Chase & Simon’s chunking model, Gobet & Simon’s Template Theory, and Ericsson & Kintsch’s Long-Term Working Memory framework.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-de-groot-chase-simon-finding',
        question: 'What did Adriaan de Groot (1946) and Chase & Simon (1973) definitively prove regarding the nature of expert memory in chess?',
        options: [
          {
            id: 'q1-a',
            text: 'Experts have the exact same ~4-chunk working memory bottleneck as novices, but recall massively more on structured game layouts because long-term schemas compress functional clusters into single chunks; on randomized layouts, their advantage vanishes.',
          },
          {
            id: 'q1-b',
            text: 'Grandmasters possess a photographic memory that physically captures visual images of any board regardless of whether the pieces are placed meaningfully or randomly.',
          },
          {
            id: 'q1-c',
            text: 'Experts have a biologically larger prefrontal cortex that can hold 50 individual items in short-term working memory simultaneously.',
          },
          {
            id: 'q1-d',
            text: 'Novices and masters show identical recall in all conditions; chess skill is purely psychological bluffing with no cognitive memory component.',
          },
        ],
        correctOptionId: 'q1-a',
        explanation: 'De Groot (1946) and Chase & Simon (1973) proved that expert recall advantages are strictly domain-specific and schema-dependent. On authentic boards, masters recognize pre-stored chunks; on random boards, chunks cannot form, and masters perform identically to novices.',
        pedagogicalRationale: 'Establishes the foundational empirical evidence that expertise is software compression (schemas) rather than upgraded hardware (expanded working memory).',
        evidenceNote: 'Chase, W. G., & Simon, H. A. (1973). Perception in chess. Cognitive Psychology, 4(1), 55-81.',
      },
      {
        id: 'q2-simon-chunk-count-estimate',
        question: 'Approximately how many domain-specific perceptual chunks did Herbert Simon and colleagues estimate a human must store in long-term memory to reach grandmaster or world-class expert mastery?',
        options: [
          {
            id: 'q2-a',
            text: 'Approximately 50,000 chunks, roughly comparable to the vocabulary of an educated native speaker.',
          },
          {
            id: 'q2-b',
            text: 'Exactly 7 chunks, because George Miller proved the mind can never learn more than 7 things in a lifetime.',
          },
          {
            id: 'q2-c',
            text: 'Over 10 billion chunks, requiring direct electrical brain augmentation.',
          },
          {
            id: 'q2-d',
            text: 'Only 3 chunks: if you memorize 3 universal principles, you achieve instant mastery of all human subjects.',
          },
        ],
        correctOptionId: 'q2-a',
        explanation: 'Simon & Gilmartin (1973) estimated that master-level performance requires acquiring ~50,000 familiar chunks over 10+ years of deliberate practice, explaining why expertise requires extensive domain immersion.',
        pedagogicalRationale: 'Provides a realistic, evidence-grounded quantitative scale for what true domain expertise entails.',
        evidenceNote: 'Simon, H. A., & Gilmartin, K. (1973). A simulation of memory for chess positions. Cognitive Psychology, 5(1), 29-46.',
      },
      {
        id: 'q3-gobet-template-theory-structure',
        question: 'According to Fernand Gobet and Herbert Simon’s Template Theory (1996), how does a "template" differ from a simple basic chunk?',
        options: [
          {
            id: 'q3-a',
            text: 'A template possesses a stable, invariant structural core stored in long-term memory, along with variable slots that can be rapidly instantiated with transient situational values in working memory.',
          },
          {
            id: 'q3-b',
            text: 'A template is a physical piece of cardboard placed over the monitor to hide irrelevant code lines.',
          },
          {
            id: 'q3-c',
            text: 'A template can only store text words, while chunks can only store numbers.',
          },
          {
            id: 'q3-d',
            text: 'Templates only exist in C++ programming; cognitive science does not recognize templates in human memory.',
          },
        ],
        correctOptionId: 'q3-a',
        explanation: 'Template Theory (Gobet & Simon, 1996) explains how experts handle novel variations: the template’s core anchors the structural schema, while variable slots allow rapid adaptation to dynamic situational variables without overload.',
        pedagogicalRationale: 'Explains the cognitive architecture connecting static long-term schemas to dynamic, real-time problem-solving flexibility.',
        evidenceNote: 'Gobet, F., & Simon, H. A. (1996). Templates in chess memory: A mechanism for recalling several boards. Cognitive Psychology, 31(1), 1-40.',
      },
      {
        id: 'q4-ericsson-ltwm-interruption-resilience',
        question: 'In the Long-Term Working Memory (LTWM) framework of Ericsson & Kintsch (1995), why can experts handle task interruptions dramatically better than novices?',
        options: [
          {
            id: 'q4-a',
            text: 'Because expert working state is indexed by retrieval cues linked to durable schemas in long-term memory, allowing situational context to be instantly restored even after short-term storage buffers are cleared by interruption.',
          },
          {
            id: 'q4-b',
            text: 'Because experts have trained themselves to never sleep or look away from their screen under any circumstance.',
          },
          {
            id: 'q4-c',
            text: 'Because interruptions increase human IQ by 40 points through adrenaline spikes.',
          },
          {
            id: 'q4-d',
            text: 'Because novices have defective memory genes, whereas experts have mutant prefrontal lobes.',
          },
        ],
        correctOptionId: 'q4-a',
        explanation: 'Ericsson & Kintsch (1995) showed that LTWM uses retrieval structures in long-term memory. While an interruption completely purges temporary short-term memory, the stable LTM retrieval structure remains intact, allowing experts to reconstruct their working state in seconds.',
        pedagogicalRationale: 'Clarifies the structural cognitive mechanism behind professional flow state restoration and high-bandwidth mental models.',
        evidenceNote: 'Ericsson, K. A., & Kintsch, W. (1995). Long-term working memory. Psychological Review, 102(2), 211-245.',
      },
    ],
  },
  practicalTask: {
    title: 'The Relational Chunking & Template Decomposition Protocol',
    summary: 'A 3-step practical protocol to deconstruct complex technical systems into hierarchical chunks, define template slots, and construct LTWM retrieval structures.',
    steps: [
      {
        id: 'step-identify-elemental-clusters',
        number: 1,
        title: 'Cluster Isolated Elements into Structural Chunks',
        prompt: 'Select a dense, overwhelming technical topic or architecture you are learning. Identify 12–15 isolated elements and group them into exactly 3 cohesive, functional chunks (max 4–5 elements each):',
        placeholder: 'e.g., Domain: Web Security. Elements: Nonce, CSP header, Salt, Bcrypt, JWT, Refresh Token, CORS, SameSite cookie, HTTPS, HSTS, CSRF token... Grouped into: 1. [Transport & Ingress Security], 2. [Credential Hashing & Storage], 3. [Cross-Origin Session Defense]...',
        example: 'Domain: React Internals. Elements: Fiber node, alternate pointer, work loop, lane priority, reconcileChildren, commitRoot, passive effect, layout effect. Grouped into: 1. [Fiber Data Structure], 2. [Reconciliation & Concurrent Scheduling], 3. [DOM Mutation & Effect Execution].',
        cognitiveRationale: 'Binding related elements under a unified functional concept immediately reduces working memory slot load from 12+ items down to 3 macro-chunks (Miller, 1956; Cowan, 2001).',
      },
      {
        id: 'step-define-template-cores-and-slots',
        number: 2,
        title: 'Define the Invariant Core and Dynamic Slots (Template Theory)',
        prompt: 'For your primary chunk, define its invariant structural core (the rule that never changes) and its dynamic variable slots (the values that change per problem):',
        placeholder: 'e.g., Core Pattern: Event-Driven Outbox Pattern (Transactional DB write + Outbox Table + CDC Poller + Message Broker). Dynamic Slots: [Source DB Type], [Polling Latency SLA], [Target Message Broker], [Deduplication Key]...',
        example: 'Core: Cache-Aside Architecture (Check cache → On miss, query DB → Populate cache with TTL). Dynamic Slots: [Cache Invalidation Strategy: TTL vs Event-Driven], [Eviction Policy: LRU vs LFU], [Concurrency Stampede Defense: Mutex vs Probabilistic Early Expiration].',
        cognitiveRationale: 'Decoupling invariant schema structure from variable situational attributes establishes a Gobet & Simon (1996) template, allowing rapid mental instantiation without cognitive overload.',
      },
      {
        id: 'step-build-ltwm-interruption-anchor',
        number: 3,
        title: 'Construct a Long-Term Working Memory Retrieval Anchor',
        prompt: 'Formulate a 3-bullet externalized retrieval anchor for your current engineering project that allows you to instantly recover full state following a major interruption:',
        placeholder: 'e.g., Anchor 1 (Current Active Goal): Refactoring JWT validation logic to support key rotation. Anchor 2 (Working State): Key verification helper failing on line 42 with expired kid. Anchor 3 (Next Critical Step): Mocking the JWKS endpoint in test suite...',
        example: '1. Active Goal: Debugging memory leak in WebSocket connection manager. 2. Working State: Heap dump shows 15,000 dangling socket references held by detached EventEmitters. 3. Immediate Next Step: Add explicit cleanup hook in disconnect handler.',
        cognitiveRationale: 'Externalizing state into a structured retrieval cue leverages Ericsson & Kintsch’s (1995) Long-Term Working Memory framework, providing immediate state recovery upon task resumption.',
      },
    ],
  },
};
