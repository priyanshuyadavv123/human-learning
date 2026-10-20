import type { Lesson } from '../types/learning.ts';

export const LESSON_DIAGRAMMATIC_REASONING: Lesson = {
  id: 'diagrammatic-reasoning',
  chapterId: 'ch-10-dual-coding',
  number: '10.2',
  title: 'Spatial and Diagrammatic Reasoning',
  subtitle: 'External visual representations as cognitive co-processors',
  readingTimeMinutes: 15,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'Why can an engineer glance at an architectural dependency graph and detect circular deadlocks in 2 seconds, while debugging the identical logic from code files takes 20 minutes of mental agony?',
    teaser: 'A diagram is not merely an illustration—it is an external computing device that transforms hard internal cognitive search into effortless perceptual recognition.',
    hookNote: 'In their seminal 1987 paper "Why a Diagram is (Sometimes) Worth Ten Thousand Words," cognitive scientists Jill H. Larkin and Herbert A. Simon unlocked the exact mathematical and computational reasons why spatial representations accelerate human problem-solving. Sentential (textual) representations organize information linearly and sequentially: searching for related facts requires sequential scanning and holding intermediate tokens in volatile working memory. Diagrammatic representations, by contrast, index information by 2D location. When two components interact, they are placed adjacent to each other. This spatial locality allows human visual perception—which possesses immense parallel computing power—to perform automatic "perceptual inferences" (such as noticing closed loops, intersections, or containment) without exhausting working memory buffers. In this lesson, we explore Larkin & Simon\'s perceptual indexing theorem, Kirsh & Maglio\'s epistemic actions, and Barbara Tversky\'s spatial schema theory to turn diagrams into powerful cognitive accelerators.',
  },
  prediction: {
    prompt: 'Before dissecting the cognitive mechanics of spatial diagrams, test your intuition on computational representation: Two senior software architects are asked to audit a distributed event-driven order processing engine for circular dependency deadlocks and orphaned consumer queues. Architect 1 is provided the complete sentential codebase: 15,000 lines of clean, well-commented TypeScript interface declarations and message bus pub/sub topic configs. Architect 2 is provided an interactive, topologically laid-out node-link dependency graph where nodes represent services and directional arrows represent event streams. Both architects are given 10 minutes to locate all 3 circular deadlocks and 2 orphaned consumers. What does empirical cognitive psychology predict regarding their search efficiency and cognitive workload?',
    context: 'Both architects have equal domain expertise and equal familiarity with the business requirements:',
    options: [
      {
        id: 'opt-sentential-codebase-precision',
        strategy: 'Hypothesis A: Codebase Equivalence',
        description: 'Both architects will solve the puzzle in nearly identical times, because both representations are informationally equivalent: the code contains all the exact dependency tuples that the diagram displays.',
      },
      {
        id: 'opt-diagrammatic-computational-advantage',
        strategy: 'Hypothesis B: Perceptual Indexing Supremacy',
        description: 'Architect 2 will locate the deadlocks in under 3 minutes with virtually zero working memory strain, whereas Architect 1 will fail to find all deadlocks within 10 minutes, because a diagram replaces linear memory-intensive search with parallel perceptual recognition (Larkin & Simon, 1987).',
      },
      {
        id: 'opt-diagram-ambiguity-penalty',
        strategy: 'Hypothesis C: Visual Ambiguity Drag',
        description: 'Architect 2 will take longer because visual diagrams lack compiler guarantees and type signatures, forcing the engineer to cross-reference code anyway.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-diagrammatic-computational-advantage',
      headline: 'Informational Equivalence Does Not Equal Computational Equivalence: Diagrams Index by Location and Support Effortless Perceptual Inference (Larkin & Simon, 1987).',
      explanation: 'In 1987, Larkin & Simon established the foundational distinction between "Informational Equivalence" (both formats contain the identical information) and "Computational Equivalence" (the ease and speed with which an agent can extract inferences). In the sentential codebase, relations are scattered across hundreds of files; locating a circular loop requires holding node A in working memory, searching textually for its subscriber B, scanning B for subscriber C, and holding the sequence in memory while scanning for C->A. Working memory saturates at 3-4 chunks and quickly drops items. In the diagrammatic graph, spatial proximity mirrors semantic relation. A cycle manifests physically as a closed 2D loop. The human visual cortex detects closed topological polygons in ~100 milliseconds via preattentive parallel visual routines. The diagram acts as an external memory buffer, offloading cognitive search onto the visual system.',
      optionFeedback: {
        'opt-sentential-codebase-precision': {
          title: 'Your Choice: Hypothesis A (The Informational Equivalence Fallacy)',
          verdict: 'Refuted by Larkin & Simon (1987)',
          analysis: 'Having the same information is worthless if human working memory cannot assemble the relations concurrently. Linear sentential search creates severe working memory bottlenecks.',
        },
        'opt-diagrammatic-computational-advantage': {
          title: 'Your Choice: Hypothesis B (Perceptual Indexing Supremacy)',
          verdict: 'Empirical Cognitive Science Consensus',
          analysis: 'Exactly correct! Larkin & Simon proved that diagrams are computationally superior when they index information by 2D location and allow perceptual recognition to replace symbolic deduction.',
        },
        'opt-diagram-ambiguity-penalty': {
          title: 'Your Choice: Hypothesis C (The Abstraction Skepticism)',
          verdict: 'Incorrect for Relational and Topological Tasks',
          analysis: 'For structural topology and circularity, high-level geometric diagrams eliminate visual search noise without requiring low-level line-by-line syntax inspection.',
        },
      },
      comparisons: [
        {
          label: 'Diagrammatic Node-Link Graph (Architect 2)',
          immediateRetention: '100% deadlock identification in <3 min; zero cognitive strain',
          oneWeekRetention: '90% mental model durability of service topology',
          illusionRating: 'Low; topological boundaries are explicitly inspectable',
          isEmpiricalWinner: true,
        },
        {
          label: 'Linear Sentential Code Files (Architect 1)',
          immediateRetention: '<40% deadlock identification; severe cognitive fatigue',
          oneWeekRetention: '35% fragmented recall of individual service names',
          illusionRating: 'High; false sense of mastery from reading familiar syntax',
          isEmpiricalWinner: false,
        },
      ],
      evidenceDistinction: 'Sentential representations organize facts sequentially, demanding serial search and heavy working memory caching; diagrammatic representations index facts by 2D spatial location, offloading search to preattentive parallel visual recognition.',
    },
  },
  coreExplanations: [
    {
      id: 'larkin-simon-computational-advantage',
      title: 'Larkin & Simon: Informational vs Computational Equivalence',
      tagline: 'Why diagrams solve complex relational problems exponentially faster than equivalent sentences',
      statusLabel: 'Pioneering Cognitive Science Benchmark (1987)',
      scientificStatus: 'empirical-consensus',
      summary: 'In 1987, Jill Larkin and Herbert Simon published "Why a Diagram is (Sometimes) Worth Ten Thousand Words." They proved that two representations can be informationally equivalent (containing identical facts) while being radically different in computational equivalence (the mental effort required to search and recognize inferences). Diagrams index information by 2D spatial location, reducing linear O(N) text searches into local O(1) scans and substituting propositional deductions with effortless visual perceptual recognition.',
      mechanisms: [
        {
          label: 'Informational vs Computational Equivalence',
          description: 'Two representations are informationally equivalent if all facts can be derived from each. They are computationally equivalent only if extracting those facts requires the same amount of search, memory caching, and recognition effort.',
        },
        {
          label: 'Perceptual Indexing by Location',
          description: 'In sentential text, related facts are separated by paragraphs or files. In diagrams, all attributes belonging to an entity are co-located in adjacent 2D space, eliminating multi-token search.',
        },
        {
          label: 'Direct Perceptual Inference Operators',
          description: 'The visual cortex executes parallel routines in <150 ms to detect topological features (closed loops, intersections, clusters), eliminating the need for mental traversal algorithms in working memory.',
        },
      ],
      keyInsight: 'A diagram is worth ten thousand words not because it is aesthetically pleasing, but because its spatial geometry fundamentally lowers the computational algorithmic complexity of human thought.',
      simplifiedModelCaveat: 'A diagram only confers computational advantage when its spatial layout preserves topological and functional relationships; messy, spaghetti diagrams increase search costs beyond pure text.',
    },
    {
      id: 'kirsh-maglio-epistemic-actions',
      title: 'Kirsh & Maglio: Epistemic Actions & External Memory Buffers',
      tagline: 'Physical manipulation of external representations as an active cognitive engine',
      statusLabel: 'Foundational Cognitive Ergonomics (1994)',
      scientificStatus: 'cognitive-model',
      summary: 'David Kirsh and Paul Maglio (1994) shattered classical cognitive dogma by discovering "epistemic actions"—physical motor movements performed not to achieve a task goal directly (pragmatic action), but to unburden working memory, uncover hidden cues, and simplify internal mental computation. In distributed cognition, sketching on whiteboards or paper creates an external memory buffer that bypasses the 3-4 chunk limit of human working memory.',
      mechanisms: [
        {
          label: 'Pragmatic vs Epistemic Actions',
          description: 'Pragmatic actions advance the physical state toward the goal (e.g., dropping a Tetris zoid). Epistemic actions simplify mental computation (e.g., physically rotating a zoid 3x faster than internal mental rotation).',
        },
        {
          label: 'External Spatial Memory Buffers',
          description: 'Biological working memory decays within seconds and holds only 3-4 items. External sketches and diagrams have infinite persistence and zero interference, serving as external RAM for the brain.',
        },
        {
          label: 'Distributed Cognition & The Extended Mind',
          description: 'As formulated by Hutchins, Clark, and Chalmers, cognition is distributed across neural wetware and physical media. Sketching is literally an active phase of the cognitive problem-solving process.',
        },
      ],
      keyInsight: 'Drawing is not the post-hoc transcription of thought—it is the physical computing substrate that allows high-order relational thought to occur.',
      simplifiedModelCaveat: 'Epistemic actions require rapid, low-friction external tools; clunky, slow diagramming software imposes extraneous interface friction that destroys the epistemic benefit.',
    },
    {
      id: 'tversky-spatial-schemas-mapping',
      title: 'Barbara Tversky: Spatial Schemas & Graphic Cartography',
      tagline: 'The universal spatial grammar of abstract mental models',
      statusLabel: 'Pioneering Structural Cognitive Psychology (2001, 2011)',
      scientificStatus: 'empirical-consensus',
      summary: 'Stanford cognitive psychologist Barbara Tversky revealed that abstract human concepts systematically map onto physical spatial dimensions. Vertical space maps to hierarchy and abstraction; horizontal space maps to temporal sequence and causality; proximity maps to coupling. Aligning external graphics with the Principle of Congruence and Principle of Apprehension eliminates cognitive translation friction.',
      mechanisms: [
        {
          label: 'Universal Spatial Metaphors',
          description: 'Up = hierarchy, higher abstraction, and power; Down = foundation, physical substrate, and concrete data; Left-to-Right = chronological time, input-to-output causality; Proximity = semantic coupling.',
        },
        {
          label: 'The Principle of Congruence',
          description: 'The structure of an external graphic must directly mirror the structure of the internal conceptual model (e.g., strict hierarchies as vertical trees, pipelines as horizontal directed acyclic graphs).',
        },
        {
          label: 'The Principle of Apprehension',
          description: 'Visual elements must be readily and accurately perceptible without perceptual distortion, eliminating misleading 3D perspective tilts, decorative shadows, or gratuitous visual noise.',
        },
      ],
      keyInsight: 'When a diagram violates innate human spatial schemas, the brain wastes working memory constantly translating unnatural visual positions into correct semantic meanings.',
      simplifiedModelCaveat: 'Cultural reading directions (e.g., right-to-left scripts) can modulate the horizontal axis for narrative time, though physical gravity universals (up/down) remain consistent globally.',
    },
  ],
  diagram: {
    title: 'The Diagrammatic Computational Advantage Simulator',
    subtitle: 'From linear sentential search to parallel perceptual recognition and external memory buffering',
    stages: [
      {
        id: 'stage-sentential-linear-search',
        name: 'Stage 1: Linear Sentential Code Search',
        subtitle: 'Sequential O(N) token scanning across files',
        capacity: 'Limited by 3-4 chunk working memory bottleneck',
        duration: '15-20 min high-latency scan',
        role: 'The engineer searches through linear text declarations, trying to trace indirect dependency chains (A -> B -> C -> D -> A) by jumping through files and holding intermediate names in memory.',
        failureMode: 'Working Memory Trace Decay: As chain depth exceeds 3 hops, earlier nodes fade, forcing re-reads and causing missed circular deadlocks.',
        evidenceType: 'Empirical benchmark (Larkin & Simon, 1987)',
        practicalFix: 'Stop tracing linear text for topological problems; translate dependencies into a 2D spatial graph.',
      },
      {
        id: 'stage-spatial-perceptual-indexing',
        name: 'Stage 2: 2D Spatial Perceptual Indexing',
        subtitle: 'Co-locating interacting nodes in local geometric space',
        capacity: 'High-density visual field bandwidth',
        duration: '<200 ms saccadic eye glance',
        role: 'The dependency relations are rendered as a node-link diagram. Interacting services are positioned in physical proximity, replacing multi-page searches with local visual neighborhoods.',
        failureMode: 'Diagrammatic Spaghetti Anti-pattern: Intersecting edge crossings and non-contiguous layouts destroy spatial locality.',
        evidenceType: 'Cognitive ergonomics consensus (Larkin & Simon, 1987)',
        practicalFix: 'Apply force-directed or orthogonal tree layout algorithms to minimize edge crossings and preserve clustering.',
      },
      {
        id: 'stage-preattentive-inference-operators',
        name: 'Stage 3: Preattentive Perceptual Recognition',
        subtitle: 'Visual cortex parallel topology recognition',
        capacity: 'Massive parallel retinal processing',
        duration: '<100 ms preattentive detection',
        role: 'The human visual cortex detects geometric properties (closed loops, disconnected clusters, arrow directions) automatically in parallel without executing symbolic propositional rules.',
        failureMode: 'Cognitive Translation Tax: Violating natural spatial schemas (e.g. inverted hierarchy) forces mental rotation.',
        evidenceType: 'Visual psychophysics (Tversky, 2001, 2011)',
        practicalFix: 'Align spatial dimensions with cognitive metaphors: horizontal for causality, vertical for abstraction hierarchy.',
      },
      {
        id: 'stage-epistemic-external-buffer',
        name: 'Stage 4: Epistemic Action & External Buffer Offload',
        subtitle: 'Extending cognition onto physical and digital canvases',
        capacity: 'Virtually infinite external persistence',
        duration: 'Zero trace decay during problem-solving',
        role: 'Drawing on a whiteboard or dragging nodes physically simplifies internal computation. The external surface acts as persistent RAM, unburdening working memory for creative synthesis.',
        failureMode: 'Internal Mental Computation Mirage: Trying to mentally compute complex states without externalizing them on paper.',
        evidenceType: 'Distributed cognition consensus (Kirsh & Maglio, 1994; Clark & Chalmers, 1998)',
        practicalFix: 'Adopt the "Draw First, Argue Second" rule: externalize state diagrams immediately during architectural debates.',
      },
    ],
    feedbackLoopDescription: 'Spatial diagrams transform linear working-memory-intensive search into effortless parallel perceptual recognition, while external drawing acts as persistent RAM for the human mind.',
  },
  exercise: {
    title: 'Spatial & Diagrammatic Reasoning Diagnostic Exercise',
    instruction: 'Analyze four real-world software engineering, architecture, and system design scenarios. Diagnose whether the failure stems from Sentential Search Bottleneck, Epistemic Hesitation, Spatial Schema Violation, or Visual Chartjunk, and prescribe the evidence-grounded fix.',
    categories: [
      {
        id: 'attention-bottleneck',
        title: 'Sentential Search Bottleneck',
        description: 'Forced engineers to linearly scan multi-page text or code to diagnose topological relationships, exhausting working memory buffers.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'working-memory-overload',
        title: 'Epistemic Hesitation Trap',
        description: 'Attempted to resolve complex state-machine permutations purely inside the biological skull, resisting physical externalization.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Spatial Schema Violation',
        description: 'Violated universal human spatial metaphors (e.g. running causality right-to-left or putting foundational data at the summit).',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Visual Chartjunk & Distortion',
        description: 'Used 3D isometric perspectives, decorative drop-shadows, and ambiguous diagonal arrows that distorted perceptual inference.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-text-only-microservices-doc',
        realWorldContext: 'Platform Architecture Team Onboarding Wiki',
        scenario: 'A distributed platform documents 40 microservices using a 60-page linear wiki document. To figure out whether Service X indirectly triggers Service Y, new engineers must search through 40 disparate pages, hold candidate service names in working memory, and cross-reference pub/sub topics. Onboarding takes months, and circular dependency deadlocks frequently slip into production.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'The team created a Sentential Search Bottleneck (Larkin & Simon, 1987). Although the wiki is informationally equivalent to an architecture map, the computational search cost is linear O(N), demanding multi-token working memory caching that exceeds human cognitive limits.',
        evidenceBasedFix: 'Replace the multi-page text wiki with an interactive node-link dependency graph where spatial proximity indexes service clusters and directed edges indicate event topics.',
      },
      {
        id: 'scen-whiteboard-hesitation-trap',
        realWorldContext: 'Distributed Consensus Design Meeting',
        scenario: 'Four engineers spend 45 minutes arguing verbally about raft log compaction and split-brain recovery edge cases. Each engineer tries to mentally visualize the state transitions in their head. The debate devolves into circular arguments and cognitive fatigue with zero consensus reached.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'The engineers fell into Epistemic Hesitation (Kirsh & Maglio, 1994). Biological working memory is capped at ~3-4 items with high trace decay. Trying to mentally compute 4-party asynchronous state transitions exceeds prefrontal capacity.',
        evidenceBasedFix: 'Take immediate epistemic action: stop the verbal argument, walk to the whiteboard, sketch the state circles, and trace message arrows externally so the visual cortex can evaluate the topology in parallel.',
      },
      {
        id: 'scen-inverted-spatial-metaphors',
        realWorldContext: 'Real-Time Financial Settlement Pipeline Dashboard',
        scenario: 'A telemetry dashboard renders payment authorization pipelines with time flowing from right to left, and places the core settlement ledger at the top of the screen while consumer API gateways are rendered at the bottom. Operators consistently take 3x longer to diagnose payment failures.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'The dashboard commits a Spatial Schema Violation (Tversky, 2001, 2011). Western human cognition maps temporal progression left-to-right, and architectural hierarchy vertically (high abstraction/gateways up, foundational ledgers down). Violating these schemas forces continuous cognitive translation.',
        evidenceBasedFix: 'Align with Tversky’s Principle of Congruence: orient time flow from Left to Right and arrange architectural layers vertically with foundational storage at the base.',
      },
      {
        id: 'scen-3d-fancy-isometric-architecture',
        realWorldContext: 'Enterprise Cloud Architecture Review Presentation',
        scenario: 'An architect presents a new system architecture slide designed with flashy 3D isometric cubes, glossy reflections, floating diagonal cables, and perspective tilt. Reviewers find it difficult to tell which servers connect to which network switches because overlapping 3D angles occlude endpoints.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'The architect introduced Visual Chartjunk and Perceptual Distortion (Tversky’s Principle of Apprehension). 3D perspective tilts distort planar angles and hide connection intersections, destroying the visual cortex’s automatic perceptual inference operators.',
        evidenceBasedFix: 'Flatten the diagram to clean 2D orthogonal geometry. Remove 3D skewing, shadows, and gloss; ensure all connection lines have unambiguous orthogonal endpoints.',
      },
    ],
  },
  quiz: {
    title: 'Verification Assessment: Spatial & Diagrammatic Reasoning',
    instruction: 'Evaluate your operational understanding of Larkin & Simon’s computational equivalence, Kirsh & Maglio’s epistemic actions, and Tversky’s spatial schemas. Achieve 75% or higher to verify mastery.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-larkin-simon-computational-equivalence',
        question: 'According to Larkin & Simon (1987), why can two representations be "informationally equivalent" yet fundamentally differ in "computational equivalence"?',
        options: [
          {
            id: 'q1-a',
            text: 'Because diagrams use colors that stimulate emotional engagement, triggering dopamine release during problem-solving.',
          },
          {
            id: 'q1-b',
            text: 'Because even if both representations contain identical facts, a diagram indexes relations by 2D spatial location, reducing linear search and enabling effortless perceptual inference.',
          },
          {
            id: 'q1-c',
            text: 'Because sentential code representations are always lossy and drop critical semantic metadata that diagrams preserve.',
          },
          {
            id: 'q1-d',
            text: 'Because diagrams bypass the human sensory intake buffer entirely and are stored directly in episodic long-term memory.',
          },
        ],
        correctOptionId: 'q1-b',
        explanation: 'Informational equivalence means both representations encode the same facts. Computational equivalence measures how much mental search, recognition, and working memory computation is required to extract inferences. Diagrams excel computationally by indexing facts by 2D spatial location.',
        pedagogicalRationale: 'Clarifies the computational distinction between code declarations and topological graphs.',
        evidenceNote: 'Larkin, J. H., & Simon, H. A. (1987). Why a diagram is (sometimes) worth ten thousand words. Cognitive Science, 11(1), 65-100.',
      },
      {
        id: 'q2-kirsh-maglio-epistemic-action-nature',
        question: 'What defines an "epistemic action" as discovered by David Kirsh and Paul Maglio (1994)?',
        options: [
          {
            id: 'q2-a',
            text: 'An action performed strictly to complete an external physical task in the fewest mechanical movements possible.',
          },
          {
            id: 'q2-b',
            text: 'A physical motor action performed to reduce internal cognitive load, unburden working memory, or reveal hidden visual information.',
          },
          {
            id: 'q2-c',
            text: 'A purely internal mental rotation executed without any motor participation.',
          },
          {
            id: 'q2-d',
            text: 'A neurological habit loop governed exclusively by the basal ganglia.',
          },
        ],
        correctOptionId: 'q2-b',
        explanation: 'Kirsh and Maglio proved that actions are not always pragmatic (done to achieve the task goal directly). Epistemic actions (like rotating a puzzle piece or sketching on a whiteboard) are performed to make internal mental computation faster, easier, and less error-prone.',
        pedagogicalRationale: 'Teaches learners to view physical drawing and note-taking as active computational components of mind.',
        evidenceNote: 'Kirsh, D., & Maglio, P. (1994). On distinguishing epistemic from pragmatic action. Cognitive Science, 18(4), 513-549.',
      },
      {
        id: 'q3-tversky-spatial-schema-alignment',
        question: 'According to Barbara Tversky’s spatial schema theory, how should an engineer lay out an architectural diagram representing a sequential distributed data pipeline with high-level services and foundational storage?',
        options: [
          {
            id: 'q3-a',
            text: 'Time/flow should move right-to-left, and foundational storage should be placed at the very top.',
          },
          {
            id: 'q3-b',
            text: 'Time/flow should move left-to-right (horizontal causality), and foundational storage should be at the base with high-level services layered above (vertical hierarchy).',
          },
          {
            id: 'q3-c',
            text: 'All services should be arranged in an isometric 3D circle with alternating counter-clockwise arrows.',
          },
          {
            id: 'q3-d',
            text: 'Spatial layout does not matter as long as the textual labels are typed in a large bold font.',
          },
        ],
        correctOptionId: 'q3-b',
        explanation: 'Human spatial cognition maps time and process flow horizontally (Left to Right) and hierarchy/foundation vertically (Up for abstraction/application, Down for foundation/physical substrate). Aligning diagrams with these schemas minimizes cognitive load.',
        pedagogicalRationale: 'Establishes principled graphic design rules for technical documentation and system architecture.',
        evidenceNote: 'Tversky, B. (2011). Visualizing thought. Topics in Cognitive Science, 3(3), 499-535.',
      },
      {
        id: 'q4-external-memory-buffer-mechanism',
        question: 'Why does sketching on a whiteboard or tablet expand human problem-solving capacity beyond the biological limit of working memory?',
        options: [
          {
            id: 'q4-a',
            text: 'Because the physical drawing surface acts as a persistent external memory buffer that does not suffer from rapid trace decay or Cowan\'s 3-4 chunk limit.',
          },
          {
            id: 'q4-b',
            text: 'Because physical movement doubles the number of neurons in the prefrontal cortex within minutes.',
          },
          {
            id: 'q4-c',
            text: 'Because whiteboards reflect photons in a wavelength that induces theta wave brain entrainment.',
          },
          {
            id: 'q4-d',
            text: 'Because diagrams eliminate the need for any subsequent long-term memory consolidation.',
          },
        ],
        correctOptionId: 'q4-a',
        explanation: 'Human working memory is severely limited to ~3-4 chunks with high temporal decay. External spatial diagrams act as external memory buffers, permanently holding state so executive working memory can focus on relational reasoning.',
        pedagogicalRationale: 'Grounds the extended mind and distributed cognition in concrete neuroscience limits.',
        evidenceNote: 'Clark, A., & Chalmers, D. (1998). The extended mind. Analysis, 58(1), 7-19.',
      },
    ],
  },
  practicalTask: {
    title: 'The Spatial Locality & Epistemic Action Architecture Protocol',
    summary: 'A 3-step practical protocol to externalize complex systems into computationally superior spatial diagrams aligned with human perceptual schemas.',
    steps: [
      {
        id: 'step-spatial-locality-audit',
        number: 1,
        title: 'Audit Spatial Locality & 2D Indexing',
        prompt: 'Take a complex multi-file code module or textual architecture spec. Identify all interacting components and sketch them such that spatial proximity mirrors interaction frequency (co-locating tightly coupled components):',
        placeholder: 'e.g., Auth Service and Token Validator placed within the same bounding box; Database Replica placed adjacent to Primary with directional sync arrow...',
        example: 'Microservices cluster: Ingress Gateway placed top-left; Auth & Rate Limiting placed directly adjacent; Order Processing cluster tightly bound in middle; Database Cluster at bottom.',
        cognitiveRationale: 'Indexing by 2D location ensures the visual system can perform local perceptual sweeps instead of linear multi-page text searches (Larkin & Simon, 1987).',
      },
      {
        id: 'step-tversky-schema-alignment',
        number: 2,
        title: 'Enforce Tversky Congruence (Horizontal Flow & Vertical Abstraction)',
        prompt: 'Check your layout against natural spatial schemas: Is time/data flow moving Left-to-Right? Are high-level abstract interfaces on top and foundational physical substrates at the bottom?',
        placeholder: 'e.g., Client HTTP Request (Left) -> Gateway -> Service -> Cache -> Database Storage (Bottom-Right)...',
        example: 'Verified: Data flows Left-to-Right from User Client to Event Stream; System layers arranged vertically: UI layer (top), Business Logic (middle), Persistent Datastore (bottom).',
        cognitiveRationale: 'Aligning with human spatial schemas eliminates the cognitive translation tax and prevents mental rotation fatigue (Tversky, 2011).',
      },
      {
        id: 'step-externalize-mental-buffers',
        number: 3,
        title: 'Commit to Epistemic Action during Complex Problem-Solving',
        prompt: 'Identify an upcoming technical problem or debugging session involving 3+ moving variables. Formulate an implementation intention to execute an epistemic action (sketching) before computing internally:',
        placeholder: 'e.g., "When debugging the cache invalidation race condition, I will not stare at the screen. I will immediately sketch the 3 concurrent threads and timeline on paper before writing code."...',
        example: '"If a multi-threaded bug takes more than 5 minutes to diagnose, I will immediately open Excalidraw, draw the thread lifelines, and mark lock acquisition order physically."',
        cognitiveRationale: 'Physical drawing acts as external RAM, bypassing biological working memory limits and exposing hidden race conditions via visual inspection (Kirsh & Maglio, 1994).',
      },
    ],
  },
};
