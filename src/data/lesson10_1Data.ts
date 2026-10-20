import type { Lesson } from '../types/learning.ts';

export const LESSON_PAIVIO_DUAL_CODING: Lesson = {
  id: 'paivio-dual-coding',
  chapterId: 'ch-10-dual-coding',
  number: '10.1',
  title: "Paivio's Dual Coding Theory",
  subtitle: 'Simultaneous verbal and visual mental representation pathways',
  readingTimeMinutes: 14,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'Why does pairing a simple schematic diagram with text double retention and problem-solving transfer, while replacing text with an audio explanation often produces even higher learning gains?',
    teaser: 'Human cognition does not run on a single symbolic operating system. The brain contains two structurally distinct, semi-independent processing subsystems: verbal logogens and visual imagens.',
    hookNote: 'In 1971, cognitive psychologist Allan Paivio published Imagery and Verbal Processes, formulating "Dual Coding Theory" (DCT). Paivio discovered that human memory processes information through two functionally independent and structurally distinct subsystems: the Verbal System (which deals with sequential, linguistic representations called "logogens") and the Non-Verbal/Visual System (which deals with synchronous, spatial representations called "imagens"). When an idea is encoded through both pathways simultaneously—such as pairing an architectural concept with an integrated structural diagram—the mind creates two separate, additive memory traces linked by referential connections. If one trace decays or becomes inaccessible during retrieval, the other trace remains readily available. In the 1990s and 2000s, Richard E. Mayer expanded this foundation into the "Cognitive Theory of Multimedia Learning" (CTML), experimentally establishing the Multimedia Principle, Contiguity Principle, and Modality Principle across dozens of laboratory trials. Understanding Dual Coding transforms how you learn, document systems, and communicate complex technical concepts.',
  },
  prediction: {
    prompt: 'Before analyzing the dual-channel cognitive architecture, test your intuition on multimodal multimedia design: Two groups of engineers are learning how the Raft consensus algorithm handles leader election and log replication. Group A studies from a 20-page comprehensive technical whitepaper containing rich, dense prose and mathematical formulas, but zero visual diagrams. Group B studies from a 5-page concise document that pairs bite-sized textual explanations directly beside integrated, spatially aligned structural diagrams that highlight state transitions and message arrows. Both groups are later tested on diagnosing novel network partition edge cases and predicting split-vote outcomes. What does empirical cognitive psychology predict?',
    context: 'Both groups were given equal total study time and scored identically on basic multiple-choice terminology definitions:',
    options: [
      {
        id: 'opt-text-density-superiority',
        strategy: 'Hypothesis A: Exhaustive Textual Precision',
        description: 'Group A significantly outperforms Group B on novel diagnostic problem-solving, because detailed textual descriptions provide complete semantic precision without the oversimplifications inherent in 2D visual diagrams.',
      },
      {
        id: 'opt-dual-coding-additive-traces',
        strategy: 'Hypothesis B: Dual-Channel Additive Referrals',
        description: 'Group B outperforms Group A by over 150% on novel problem-solving transfer, because encoding the algorithm through both verbal (logogen) and spatial (imagen) channels establishes redundant memory traces and coherent mental models (Paivio, 1971, 1986; Mayer, 2001).',
      },
      {
        id: 'opt-visual-distraction-drag',
        strategy: 'Hypothesis C: Visual Clutter Penalty',
        description: 'Group B performs worse than Group A because diagrams split visual attention and induce extraneous cognitive load, distracting engineers from underlying mathematical proofs.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-dual-coding-additive-traces',
      headline: 'Dual Coding Establishes Additive Verbal-Visual Memory Traces and Referential Mappings that Multiply Problem-Solving Transfer (Paivio, 1971, 1986; Mayer, 2001).',
      explanation: 'Information presented exclusively in text (Group A) must be processed through the verbal channel alone. The learner must expend heavy working memory resources mentally converting sequential words into a spatial relational model. In contrast, Group B leveraged both the verbal channel (logogens) and visual-spatial channel (imagens) simultaneously. According to Paivio’s Dual Coding Theory and Mayer’s Multimedia Principle, words and pictures activate separate cognitive pathways that do not compete for the same raw channel bandwidth. Furthermore, the brain creates "referential connections" between corresponding verbal concepts (e.g. "Term Number") and visual elements (e.g. state node badge), creating a unified, dual-anchored mental model that is twice as durable against memory decay.',
      optionFeedback: {
        'opt-text-density-superiority': {
          title: 'Your Choice: Hypothesis A (The Dense Text Fallacy)',
          verdict: 'Refuted by 50+ Years of Multimedia Research',
          analysis: 'Text-only explanations force the verbal channel to carry 100% of the cognitive load. When diagnosing spatial and relational state transitions, text-only learners exhibit severe transfer failure (Mayer, 2001; Paivio, 1986).',
        },
        'opt-dual-coding-additive-traces': {
          title: 'Your Choice: Hypothesis B (Dual-Channel Additive Referrals)',
          verdict: 'Empirical Cognitive Science Consensus',
          analysis: 'Accurate! Paivio (1971, 1986) and Mayer (2001, 2009) conclusively proved that dual coding creates additive, non-interfering memory traces and enables learners to construct integrated mental models that transfer over 2x better.',
        },
        'opt-visual-distraction-drag': {
          title: 'Your Choice: Hypothesis C (The Visual Distraction Myth)',
          verdict: 'Unfounded When Contiguity Is Preserved',
          analysis: 'Well-designed, spatially contiguous diagrams do not split attention; they relieve working memory by providing an external spatial canvas for relational reasoning.',
        },
      },
      comparisons: [
        {
          label: 'Integrated Text & Spatially Contiguous Diagram (Group B)',
          immediateRetention: 'High conceptual retention; >70% novel diagnostic transfer success',
          oneWeekRetention: 'Durable dual-encoded memory traces (Logogens + Imagens)',
          illusionRating: 'Calibrated; spatial diagram verifies verbal comprehension',
          isEmpiricalWinner: true,
        },
        {
          label: 'Exhaustive Dense Text Only (Group A)',
          immediateRetention: 'High verbal definition recall; <30% novel diagnostic transfer success',
          oneWeekRetention: 'Fast decay of ungrounded sequential verbal strings',
          illusionRating: 'High fluency illusion; passes vocab test but fails state machine triage',
          isEmpiricalWinner: false,
        },
        {
          label: 'Diagram Only (No Explanatory Text)',
          immediateRetention: 'Moderate spatial layout recall; <25% operational rule execution',
          oneWeekRetention: 'Visual memory remains without causal or semantic rules',
          illusionRating: 'Superficial visual familiarity without operational mechanics',
          isEmpiricalWinner: false,
        },
      ],
      evidenceDistinction: 'Verbal codes (logogens) excel at sequential, arbitrary, and propositional relationships; visual codes (imagens) excel at continuous, spatial, synchronous, and topological relationships.',
    },
  },
  coreExplanations: [
    {
      id: 'paivio-dual-coding-architecture-logogens-imagens',
      title: 'Allan Paivio: Dual Coding Theory (Logogens vs Imagens)',
      tagline: 'Two semi-independent cognitive channels that double retrieval pathways',
      summary: 'In 1971 and 1986, Allan Paivio formulated Dual Coding Theory (DCT). Human memory operates through two functionally independent and structurally distinct representational systems. The Verbal System processes linguistic inputs (spoken words, printed text) into discrete, sequential units called "logogens." The Non-Verbal System processes non-linguistic inputs (shapes, diagrams, physical objects, spatial movements) into continuous, holistic, and synchronous units called "imagens." Because these two systems use distinct neural pathways, engaging both simultaneously does not overload working memory—it creates additive, redundant retrieval paths.',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Foundational Cognitive Architecture Consensus',
      mechanisms: [
        {
          label: 'Logogens (Sequential Verbal Codes)',
          description: 'Logogens represent linguistic information in serial, sequential chunks. They operate linearly (syntax, sentences, logic proofs) and are optimized for hierarchical grammar, abstract definitions, and categorical assertions.',
        },
        {
          label: 'Imagens (Synchronous Spatial Codes)',
          description: 'Imagens represent visual and spatial information holistically. Unlike words, which must be read one at a time, an imagen displays multiple spatial relationships, parts, and boundaries simultaneously in parallel.',
        },
        {
          label: 'Associative vs Referential Connections',
          description: 'Associative connections link codes within the same channel (word-to-word or image-to-image). Referential connections cross channels, linking a logogen to an imagen (e.g. the word "Heartbeat" to the visual diagram of an oscillating wave). Referential links provide the additive power of dual coding.',
        },
      ],
      keyInsight: 'When you study with text alone, you build a single bridge to the memory. When you dual-code with text and an integrated diagram, you build two independent suspension bridges anchored to different banks.',
      simplifiedModelCaveat: 'Dual coding does not mean "visual learners vs verbal learners" (which is an unscientific neuromyth). All neurologically typical human brains possess and benefit from both channels simultaneously.',
    },
    {
      id: 'richard-mayer-cognitive-theory-multimedia-learning',
      title: 'Richard Mayer: The Cognitive Theory of Multimedia Learning (CTML)',
      tagline: 'The three core multimedia principles: Multimedia, Contiguity, and Modality',
      summary: 'Building directly upon Paivio’s Dual Coding and Sweller’s Cognitive Load Theory, Richard E. Mayer (2001, 2009) developed the Cognitive Theory of Multimedia Learning (CTML). CTML is based on three foundational assumptions: Dual Channels (separate verbal and visual processors), Limited Capacity (each channel has working memory limits), and Active Processing (learning requires filtering, selecting, organizing, and integrating verbal and visual models). Mayer demonstrated that poorly designed multimedia increases cognitive load, whereas scientifically aligned multimedia dramatically amplifies learning.',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Educational Psychology & Multimedia Consensus',
      mechanisms: [
        {
          label: 'The Multimedia Principle',
          description: 'People learn significantly better from words and pictures than from words alone. This effect is especially pronounced for low-knowledge learners and complex transfer tasks.',
        },
        {
          label: 'The Spatial Contiguity Principle',
          description: 'Text must be placed physically beside the corresponding diagram elements, rather than relegated to a distant caption, appendix, or separate page. Separating text and diagram forces split-attention and wastes working memory scanning back and forth.',
        },
        {
          label: 'The Modality Principle',
          description: 'When explaining a visual diagram, presenting words as spoken narration produces higher retention and transfer than presenting words as printed onscreen text, because narration offloads the visual channel to the auditory channel.',
        },
      ],
      keyInsight: 'Putting words and pictures together is not enough. You must arrange them so they integrate seamlessly in working memory without forcing cross-page visual search.',
      simplifiedModelCaveat: 'The Modality Principle (narration over on-screen text) holds best when the material is paced by the system; when learners control the reading pace or need to reference complex formulas, on-screen text remains essential.',
    },
    {
      id: 'concreteness-fading-goldstone-son',
      title: 'Goldstone & Son: Concreteness Fading & Perceptual Grounding',
      tagline: 'Bridging sensory intuitions to abstract symbolic mastery in three stages',
      summary: 'In 2005, Robert Goldstone and Ji Y. Son introduced "Concreteness Fading" to resolve a classic educational dilemma: concrete perceptual visuals are intuitive and easy to understand but fail to transfer to distant domains; abstract symbols transfer universally but are difficult to grasp initially. Concreteness fading solves this by sequencing instruction through three deliberate stages: Concrete (photorealistic/physical) $\to$ Graphic/Schematic (essential structural relationships only) $\to$ Symbolic/Abstract (formal equations and code).',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Empirical Cognitive Science Consensus',
      mechanisms: [
        {
          label: 'Stage 1: Concrete Grounding',
          description: 'Introduce the concept with rich perceptual anchors (e.g. water sloshing in tanks, physical gears, actual server chassis). This anchors the learner’s intuition in real-world physical experience.',
        },
        {
          label: 'Stage 2: Graphic Idealization (Schematization)',
          description: 'Gradually strip away extraneous decorative details (colors, textures, realistic drawings). Replace them with clean geometric lines, boxes, and directional vectors that represent pure relational topology.',
        },
        {
          label: 'Stage 3: Symbolic Formalization',
          description: 'Translate the idealized schematic model into formal mathematical equations, programming algorithms, or abstract axioms. Because the learner has traversed the fade, the symbols remain deeply grounded in the initial intuition.',
        },
      ],
      keyInsight: 'Do not start with abstract symbols, and do not remain trapped in photorealistic illustrations. Fade your diagrams from concrete mechanics to pure relational schematics.',
      simplifiedModelCaveat: 'Concreteness fading requires careful alignment across stages; abruptly changing the spatial layout between the concrete and schematic steps destroys the learner’s perceptual mapping.',
    },
  ],
  diagram: {
    title: 'The Dual-Coding & Multimedia Processing Architecture',
    subtitle: 'Separate verbal and visual working-memory channels integrating into a unified mental model',
    stages: [
      {
        id: 'stage-dual-sensory-intake',
        name: 'Stage 1: Dual Sensory Intake & Channel Gating',
        subtitle: 'Ears capture spoken words; eyes capture printed text and spatial images',
        capacity: 'Dual sensory buffers with independent parallel bandwidth',
        duration: '200 to 500 milliseconds (Sensory Memory)',
        role: 'Environmental inputs enter through sensory organs. Spoken words flow into the auditory register; visual imagery and printed text flow into the visual register.',
        failureMode: 'Visual Channel Bottleneck: Presenting complex visual diagrams and dense printed text simultaneously overloads visual working memory.',
        evidenceType: 'Empirical consensus (Paivio, 1971; Mayer, 2001)',
        practicalFix: 'Apply the Modality Principle: convert dense on-screen descriptive paragraphs into spoken audio or concise spatial callouts.',
      },
      {
        id: 'stage-working-memory-channel-separation',
        name: 'Stage 2: Working Memory Channel Separation',
        subtitle: 'Phonological Loop processes logogens; Visuospatial Sketchpad processes imagens',
        capacity: 'Limited to ~3–4 items per channel (Baddeley, 1992; Cowan, 2001)',
        duration: '15 to 30 seconds without active rehearsal',
        role: 'Working memory processes verbal and non-verbal inputs in separate working buffers. The phonological loop organizes sequential words; the sketchpad organizes 2D/3D spatial arrangements.',
        failureMode: 'Split-Attention Effect: Separating text explanations from the diagram forces the visual channel to exhaust capacity searching for corresponding parts.',
        evidenceType: 'Empirical consensus (Sweller et al., 1998; Mayer, 2009)',
        practicalFix: 'Enforce Spatial Contiguity: embed labels and concise explanations directly inside or beside the diagram components.',
      },
      {
        id: 'stage-referential-cross-linkage',
        name: 'Stage 3: Referential Mapping & Cross-Channel Binding',
        subtitle: 'Forming bidirectional associative links between logogens and imagens',
        capacity: 'Cognitive alignment of matching conceptual nodes',
        duration: 'Effortful active integration',
        role: 'The learner actively aligns the verbal model with the visual-spatial model, creating bidirectional referential connections (e.g. mapping the term "Raft Leader" to the crown icon in the consensus diagram).',
        failureMode: 'Missing Referential Grounding: Viewing a diagram without understanding what the visual symbols represent semantically.',
        evidenceType: 'Empirical consensus (Paivio, 1986; Clark & Paivio, 1991)',
        practicalFix: 'Use explicit visual keys, color coding, and direct visual pointers to make cross-channel correspondence unmistakable.',
      },
      {
        id: 'stage-unified-multimodal-schema',
        name: 'Stage 4: Unified Multimodal Long-Term Schema',
        subtitle: 'Consolidated long-term representation retrievable via either channel',
        capacity: 'Virtually unlimited long-term storage',
        duration: 'Permanent schema consolidation',
        role: 'The integrated verbal and spatial mental model is encoded into long-term memory. It can be retrieved either by verbal keywords or by spatial visual imagination, providing redundant retrieval robustness.',
        failureMode: 'Single-Channel Trace Decay: Relying on verbal memory alone leaves the concept vulnerable to complete forgetting if the specific vocabulary is forgotten.',
        evidenceType: 'Empirical consensus (Paivio, 1971; Goldstone & Son, 2005)',
        practicalFix: 'Practice dual retrieval: prompt yourself to sketch the architecture from memory, then write out the operational rules in prose.',
      },
    ],
    feedbackLoopDescription: 'Dual-channel encoding creates redundant verbal and visual traces in long-term memory, enabling robust cross-modal retrieval and high-transfer problem solving.',
  },
  exercise: {
    title: 'Dual-Coding & Multimedia Design Diagnostic Exercise',
    instruction: 'Analyze four real-world documentation, learning, and instructional design scenarios. Diagnose whether cognitive failure stems from Split-Attention Split, Modality Overload, Unanchored Abstract Jargon, or Seductive Detail Interference, and prescribe the evidence-grounded fix.',
    categories: [
      {
        id: 'attention-bottleneck',
        title: 'Split-Attention Effect',
        description: 'Separated text from diagrams (e.g. legends, distant footnotes), forcing working memory to waste bandwidth searching back and forth.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'working-memory-overload',
        title: 'Visual Channel Overload',
        description: 'Flooded the visual channel simultaneously with complex animations and dense on-screen paragraphs while ignoring auditory modalities.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Unanchored Verbal Jargon',
        description: 'Relied purely on sequential text definitions without spatial diagrams or perceptual grounding, leaving knowledge inert and untransferable.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Seductive Detail Interference Trap',
        description: 'Decorated technical diagrams with entertaining but irrelevant illustrations, cartoon mascots, or decorative clip art that diverted attention from causal mechanisms.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-legend-appendix-disconnect',
        realWorldContext: 'Senior Systems Architect Authoring API Documentation',
        scenario: 'Nathan designs a high-level architecture diagram with 20 numbered circles. At the very bottom of page 14, in a small table, he lists the definitions for Numbers 1 through 20. Engineers trying to understand the system spend 80% of their time scrolling up and down between the diagram and the footnote table.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'Nathan violated Mayer’s Spatial Contiguity Principle and induced the classic Split-Attention Effect (Sweller et al., 1998). Forcing engineers to mentally hold Number 14 in visual working memory while scrolling down to locate its definition in a table exhausts cognitive capacity before any schema integration can occur.',
        evidenceBasedFix: 'Eliminate the numbered legend. Embed concise textual labels and descriptions directly next to each architectural node on the diagram.',
      },
      {
        id: 'scen-dense-slides-overload',
        realWorldContext: 'Technical Trainer Delivering Microservices Workshop',
        scenario: 'In an online engineering webinar, Sarah presents a dense slide showing a complex moving animation of Kafka partitions while simultaneously displaying 300 words of bulleted technical text on the screen, remaining completely silent for 3 minutes while students try to read the slide.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'Sarah triggered Visual Channel Overload (Mayer’s Modality Principle). Both the dynamic partition animation and the dense printed text competed for the single limited bandwidth of the visuospatial sketchpad, while the auditory channel was left completely unutilized.',
        evidenceBasedFix: 'Apply the Modality Principle: strip the 300 words of printed text off the screen, keep the Kafka partition animation, and explain the mechanics through synchronized spoken narration.',
      },
      {
        id: 'scen-pure-prose-protocol-doc',
        realWorldContext: 'Cryptographic Protocol Specification Review',
        scenario: 'A security engineer writes a 40-page whitepaper specifying a new zero-knowledge rollup protocol. The document contains hundreds of lines of prose detailing state transitions, verifier contracts, and relayer heartbeats, but zero diagrams or flowcharts. After reading, developers implement flawed state transitions that introduce race conditions.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'The author relied on Unanchored Verbal Jargon (Paivio, 1971). Sequential logogens struggle to represent multi-party concurrent states. Without a spatial state-machine diagram (imagens), developers were forced to construct their own mental models, which diverged from the true cryptographic specification.',
        evidenceBasedFix: 'Construct an explicit dual-coded state transition diagram: show states as geometric nodes, transitions as directed vectors, and map cryptographic invariants directly to the transitions.',
      },
      {
        id: 'scen-cartoon-mascot-distraction',
        realWorldContext: 'EdTech Startup Building Cloud Infrastructure Course',
        scenario: 'To make distributed systems "fun," course creators add dancing cartoon animals, humorous comic strips, and colorful neon backgrounds to their Kubernetes pod architecture slides. Students recall the names of the animal characters perfectly, but fail the test on how pod IP routing works.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'The designers fell into the Seductive Details Effect (Mayer, Heiser, & Lonn, 2001; Harp & Mayer, 1998). Irrelevant interesting graphics compete for working memory resources and prime incorrect intuitive schemas, disrupting the cognitive organization of the core technical mechanism.',
        evidenceBasedFix: 'Apply the Coherence Principle: remove all decorative cartoon mascots, colorful textures, and extraneous humor; retain only clean, schematic visual representations of pod routing.',
      },
    ],
  },
  quiz: {
    title: 'Verification Assessment: Paivio’s Dual Coding & CTML',
    instruction: 'Evaluate your operational understanding of Dual Coding Theory, Mayer’s multimedia learning principles, and cognitive channel management. Achieve 75% or higher to verify mastery.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-paivio-logogens-imagens-distinction',
        question: 'According to Allan Paivio’s (1971, 1986) Dual Coding Theory, what is the fundamental difference between logogens and imagens?',
        options: [
          {
            id: 'q1-a',
            text: 'Logogens are discrete, sequential verbal codes organized linearly; imagens are continuous, synchronous spatial codes organized holistically.',
          },
          {
            id: 'q1-b',
            text: 'Logogens exist in the liver; imagens exist in the spleen.',
          },
          {
            id: 'q1-c',
            text: 'Logogens can only store mathematical numbers; imagens can only store corporate logos.',
          },
          {
            id: 'q1-d',
            text: 'There is no difference; the human brain possesses only a single uniform text-processing buffer.',
          },
        ],
        correctOptionId: 'q1-a',
        explanation: 'Paivio established that verbal codes (logogens) operate sequentially and linearly, while non-verbal visual codes (imagens) operate synchronously and spatially, utilizing semi-independent neural pathways.',
        pedagogicalRationale: 'Clarifies the biological and cognitive separation of dual-channel information processing.',
        evidenceNote: 'Paivio, A. (1986). Mental Representations: A Dual Coding Approach. Oxford University Press.',
      },
      {
        id: 'q2-mayer-spatial-contiguity-split-attention',
        question: 'In Richard Mayer’s Cognitive Theory of Multimedia Learning, what is the Spatial Contiguity Principle, and what cognitive failure does it prevent?',
        options: [
          {
            id: 'q2-a',
            text: 'Corresponding words and pictures must be presented physically close to each other on the page/screen to prevent the Split-Attention Effect.',
          },
          {
            id: 'q2-b',
            text: 'Students must sit at least 50 feet away from computer monitors to prevent digital eye strain.',
          },
          {
            id: 'q2-c',
            text: 'All textbooks must be published in leather-bound volumes to enhance tactile memory.',
          },
          {
            id: 'q2-d',
            text: 'Diagrams should always be placed in a separate appendix at the back of the book to test student dedication.',
          },
        ],
        correctOptionId: 'q2-a',
        explanation: 'The Spatial Contiguity Principle states that integrating text directly beside diagram components eliminates split-attention, allowing working memory to bind verbal and visual elements without wasteful visual searching.',
        pedagogicalRationale: 'Provides the empirical basis for integrated documentation and UI layout design.',
        evidenceNote: 'Mayer, R. E. (2001). Multimedia Learning. Cambridge University Press.',
      },
      {
        id: 'q3-mayer-modality-principle-mechanism',
        question: 'Why does presenting an animation or diagram with spoken audio narration produce higher learning transfer than presenting it with on-screen printed text (the Modality Principle)?',
        options: [
          {
            id: 'q3-a',
            text: 'Spoken narration utilizes the auditory channel, offloading the visual channel so it can dedicate 100% of its working memory capacity to inspecting the graphic.',
          },
          {
            id: 'q3-b',
            text: 'Sound waves vibrate the eardrum at a frequency that physically melts amyloid brain plaques.',
          },
          {
            id: 'q3-c',
            text: 'Humans have completely lost the biological ability to read printed text after the year 2010.',
          },
          {
            id: 'q3-d',
            text: 'Spoken words bypass the hippocampus and write directly to long-term DNA sequences.',
          },
        ],
        correctOptionId: 'q3-a',
        explanation: 'The Modality Principle works by distributing total cognitive load across two independent sensory modalities: the eyes process the spatial graphic while the ears process the verbal explanation, preventing visual working-memory bottlenecks.',
        pedagogicalRationale: 'Explains multi-channel sensory load distribution in technical communication and video courses.',
        evidenceNote: 'Mayer, R. E., & Moreno, R. (1998). A split-attention effect in multimedia learning. Journal of Educational Psychology, 90(2), 312-320.',
      },
      {
        id: 'q4-goldstone-concreteness-fading',
        question: 'What is the three-stage progression of "Concreteness Fading" (Goldstone & Son, 2005), and why is it superior to teaching purely with abstract equations from day one?',
        options: [
          {
            id: 'q4-a',
            text: 'Concrete (sensory/physical grounding) $\\to$ Graphic/Schematic (relational structure) $\\to$ Symbolic/Abstract (formal rules/math); it grounds formal symbols in intuitive physical experience without sacrificing portability.',
          },
          {
            id: 'q4-b',
            text: 'Beginning with colorful crayons, switching to watercolor paint, and finishing with oil pastels.',
          },
          {
            id: 'q4-c',
            text: 'Deleting 10% of the course syllabus each week until only blank paper remains.',
          },
          {
            id: 'q4-d',
            text: 'Teaching pure abstract mathematical equations for 4 years before ever showing students what a computer looks like.',
          },
        ],
        correctOptionId: 'q4-a',
        explanation: 'Goldstone & Son (2005) proved that systematically fading representations from concrete instances through idealized schematics to abstract symbols anchors mathematical laws in perceptual reality while ensuring universal cross-domain transfer.',
        pedagogicalRationale: 'Guides effective curriculum design and progression from real-world examples to formal technical specifications.',
        evidenceNote: 'Goldstone, R. L., & Son, J. Y. (2005). The transfer of scientific principles using concrete and idealized simulations. Journal of the Learning Sciences, 14(1), 69-110.',
      },
    ],
  },
  practicalTask: {
    title: 'The Dual-Coding Technical Documentation & Schema Architecture Protocol',
    summary: 'A 3-step practical protocol to convert a dense, text-only technical concept into a dual-coded explainer with integrated spatial callouts and concreteness fading.',
    steps: [
      {
        id: 'step-extract-spatial-relational-topology',
        number: 1,
        title: 'Extract Spatial Topology from Sequential Prose',
        prompt: 'Select a complex technical system or algorithm you are studying (e.g. TLS Handshake, OAuth2 Authorization Code Grant, Database Write Path). Identify all interacting entities, physical boundaries, and directional data flows:',
        placeholder: 'e.g., OAuth2 Grant: Client App, Resource Owner (User), Authorization Server, Resource Server (API). Flows: 1. Auth Request, 2. Consent, 3. Auth Code Redirect, 4. Token Exchange, 5. API Data Fetch...',
        example: 'PostgreSQL Write Path: Client Process → WAL Buffer (append-only) → Disk fsync (WAL segment) → Shared Buffers (dirty page update) → Background Checkpointer → Table Heap Data File.',
        cognitiveRationale: 'Extracting directional data flows and entity boundaries converts sequential logogens into a spatial topological template ready for imagen formation (Paivio, 1971).',
      },
      {
        id: 'step-enforce-spatial-contiguity',
        number: 2,
        title: 'Draft a Spatially Contiguous Micro-Diagram with Inline Callouts',
        prompt: 'Sketch or write down an ASCII/SVG structural representation of your system. Enforce Mayer’s Spatial Contiguity Principle: place all explanatory text, preconditions, and failure risks directly next to the relevant arrows/boxes (zero numbered legends or separate footnotes):',
        placeholder: 'e.g., [Client] --(1. Sends client_hello: cipher suites, client_random)--> [Server]\n[Server] --(2. server_hello: chosen cipher + Certificate + server_random)--> [Client]\n[Client verifies Cert with CA root pool; generates pre-master secret]...',
        example: '[API Gateway] --(JWT Validation: Check Signature & Expiry)--> [Rate Limiter: Token Bucket Token Refill] --(Allow)--> [Downstream Service Worker Pool]. Failure Note beside Gateway: "Clock skew > 5s rejects valid JWTs".',
        cognitiveRationale: 'Placing explanatory text directly beside diagram elements eliminates the Split-Attention Effect and frees working memory for schema integration (Sweller et al., 1998; Mayer, 2001).',
      },
      {
        id: 'step-concreteness-fading-audit',
        number: 3,
        title: 'Execute Concreteness Fading: Map Grounded Invariants to Formal Code',
        prompt: 'Trace your concept across Goldstone’s three stages: (1) Concrete Physical Invariant (actual byte string or packet), (2) Schematic Flow (boxes and vectors), and (3) Symbolic Representation (code interface or mathematical equation):',
        placeholder: 'e.g., Concrete: Wireshark packet dump showing SYN, SYN-ACK, ACK seq numbers. Schematic: 3-way ladder diagram with arrows and state flags. Symbolic: socket.connect() and TCP state machine enum (ESTABLISHED)...',
        example: 'Concrete: Hexadecimal Redis RESP protocol string: *3\\r\\n$3\\r\\nSET\\r\\n$4\\r\\nkey1\\r\\n$4\\r\\nval1\\r\\n. Schematic: Client socket pushing stream into Redis command parser ring buffer. Symbolic: redis.set("key1", "val1", { ex: 3600 }).',
        cognitiveRationale: 'Linking raw concrete packets to schematic vectors and formal code interfaces completes the full dual-coding bridge, ensuring durable mastery and rapid debugging agility (Goldstone & Son, 2005).',
      },
    ],
  },
};
