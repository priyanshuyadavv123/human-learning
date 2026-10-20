import type { Lesson } from '../types/learning.ts';

export const LESSON_VARIED_PRACTICE_TRANSFER: Lesson = {
  id: 'varied-practice-transfer',
  chapterId: 'ch-14-interleaving',
  number: '14.2',
  title: 'Varied Practice & Structural Invariance',
  subtitle: 'Preventing over-fitting to narrow study conditions',
  readingTimeMinutes: 15,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'If you want to master throwing beanbags into a target placed at exactly 4 feet, why does practicing at 3 feet and 5 feet make you significantly more accurate at 4 feet than practicing only at 4 feet?',
    teaser: 'Constant practice over-fits your mental model to narrow environmental parameters, whereas varied practice abstracts deep structural invariants and generalized control rules.',
    hookNote: 'In 1978, researchers Robert Kerr and Bernard Booth tested 8- and 12-year-old children on a blind target-tossing task. One group practiced tossing beanbags to a target placed at exactly 4 feet (constant practice). The other group tossed beanbags to targets placed at 3 feet and 5 feet, never once touching or practicing at 4 feet (varied practice). When both groups were tested on the unpracticed 4-foot distance, the varied group crushed the constant group! How is it possible that never practicing the exact target makes you far better at hitting it than practicing it hundreds of times? In this lesson, we explore Richard Schmidt’s (1975) Schema Theory of generalized motor programs, Kerr & Booth’s parameter interpolation, Smith, Glenberg & Bjork’s (1978) multi-context encoding variability, and how to prevent neural over-fitting in intellectual and technical domains.',
  },
  prediction: {
    prompt: 'Two junior algorithmic software engineers, Daniel and Sofia, are training for live coding interviews. Both focus on mastering binary search algorithms across arrays. Daniel practices "constant/homogeneous practice": He solves 50 binary search variations using standard sorted integer arrays indexed from 0 to N-1 under quiet, identical room conditions using his favorite IDE and monospace font. Sofia practices "varied practice": She solves 50 binary search problems with wide parameter variability: monotonic floating-point functions, rotated arrays, infinite bit streams, descending arrays, and writing solutions on a physical whiteboard, in Google Docs, and in noisy cafes. On interview day, both are asked to implement a binary search to find the peak of a unimodal continuous function within an unfamiliar browser-based coding sandbox. What does empirical cognitive psychology predict regarding their performance and transfer capability?',
    context: 'Both engineers have equal baseline IQ, spend 25 hours practicing, and write 50 total implementations:',
    options: [
      {
        id: 'opt-daniel-constant-groove-superior',
        strategy: 'Hypothesis A: Deep Neural Grooving & Reduced Noise',
        description: 'Daniel will outperform Sofia because constant practice created deeply grooved, low-noise neural firing patterns for binary search invariants without distracting parameter noise.',
      },
      {
        id: 'opt-sofia-varied-invariant-abstraction',
        strategy: 'Hypothesis B: Schmidt Schema Abstraction & Parameter Interpolation',
        description: 'Sofia will vastly outperform Daniel (Kerr & Booth, 1978; Schmidt, 1975), because varied practice forced her brain to separate the invariant generalized algorithm from surface parameters, enabling effortless transfer to novel mathematical topologies and environments.',
      },
      {
        id: 'opt-equal-hardware-equivalence',
        strategy: 'Hypothesis C: Algorithmic Equivalence',
        description: 'Both will perform identically, because binary search logic ($O(\\log N)$ split condition) is an abstract mathematical concept immune to environmental and parameter variation.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-sofia-varied-invariant-abstraction',
      headline: 'The Varied Practice Paradox: Varying Parameters and Environmental Context Builds Robust, Transferable Generalized Schemas (Schmidt, 1975; Kerr & Booth, 1978).',
      explanation: 'Empirical research in motor learning and cognitive architecture demonstrates that "constant practice" causes catastrophic over-fitting. When Daniel practiced binary search only on standard sorted integer arrays in a single IDE, his brain bound the core logic ($mid = low + (high - low)/2$) to irrelevant surface parameters: integer index increments ($+1, -1$), 0-based indexing, and IDE code completion. Under novel continuous domains and unfamiliar interfaces, his brittle representation fails. Sofia’s varied practice forced her cognitive system to perform parameter abstraction (Schmidt, 1975): her brain identified the structural invariant—that binary search requires any monotonic predicate function $P(x)$, whether over integers, floats, or geometric boundaries. Furthermore, practicing across diverse environments (Smith, Glenberg & Bjork, 1978) decoupled her retrieval cues from specific room conditions, ensuring panic-free transfer during high-stakes interviews.',
      optionFeedback: {
        'opt-daniel-constant-groove-superior': {
          title: 'Your Choice: Hypothesis A (The Deep Neural Groove Fallacy)',
          verdict: 'Refuted by 50+ Years of Motor & Cognitive Learning Research',
          analysis: 'Constant practice does not build generalizable mastery; it over-fits neural networks to narrow superficial constraints, leaving learners helpless when surface parameters shift.',
        },
        'opt-sofia-varied-invariant-abstraction': {
          title: 'Your Choice: Hypothesis B (Schmidt Schema Abstraction & Parameter Interpolation)',
          verdict: 'Empirical Cognitive Science Consensus',
          analysis: 'Spot on! Schmidt’s Schema Theory (1975) and Kerr & Booth (1978) demonstrated that variable practice abstracts generalized control rules and allows interpolation across novel problem parameters.',
        },
        'opt-equal-hardware-equivalence': {
          title: 'Your Choice: Hypothesis C (The Pure Logic Fallacy)',
          verdict: 'Contradicted by Cognitive Psychology Data',
          analysis: 'Human reasoning is grounded in perceptual and motor retrieval structures; logic is never encoded in an abstract vacuum, but is inextricably bound to the variations present during encoding.',
        },
      },
      comparisons: [
        {
          label: 'Varied Practice (Sofia: Multi-Parameter & Multi-Context)',
          immediateRetention: 'Slower early progress; requires active parameter tuning on every trial',
          oneWeekRetention: 'Superior transfer to novel, unpracticed problem boundaries and environments',
          illusionRating: 'Accurate calibration; learner experiences the boundary limits of the schema',
          isEmpiricalWinner: true,
        },
        {
          label: 'Constant Practice (Daniel: Fixed Parameters & Fixed Context)',
          immediateRetention: 'Rapid, fluent execution within the identical narrow training corridor',
          oneWeekRetention: 'Brittle representation; collapses when parameters, indexing, or tools change',
          illusionRating: 'Severe illusion of competence; confuses familiarity with generalizability',
          isEmpiricalWinner: false,
        },
      ],
      evidenceDistinction: 'Constant practice binds execution to accidental environmental and parameter cues; varied practice extracts invariant rules and enables parameter interpolation.',
    },
  },
  coreExplanations: [
    {
      id: 'schmidt-schema-theory-generalized-programs',
      title: 'Richard Schmidt (1975): Schema Theory & Generalized Motor Programs',
      tagline: 'How the brain abstracts invariant rules from variable parameterizations',
      statusLabel: 'Motor Learning & Cognitive Control Paradigm Benchmark (1975)',
      scientificStatus: 'empirical-consensus',
      summary: 'In 1975, Richard Schmidt revolutionized motor and cognitive learning with Schema Theory. The brain does not store millions of specific, rigid movement programs; instead, it stores Generalized Motor Programs (GMPs) defined by structural invariants, and runs them by supplying adjustable parameters.',
      mechanisms: [
        {
          label: 'Invariants vs. Parameters',
          description: 'A Generalized Motor Program (GMP) contains structural invariants—such as the relative timing and relative force sequence of a movement, or the core invariant predicate of an algorithm. Parameters are adjustable variables supplied at runtime: absolute overall speed, absolute force, spatial scale, or domain data types.',
        },
        {
          label: 'Recall Schema & Parameter Generation',
          description: 'Every time a learner executes a varied trial, their motor-cognitive system records four pieces of data: initial conditions, parameter values assigned, outcome achieved, and sensory consequences. By correlating parameters with outcomes across diverse trials, the brain abstracts a "Recall Schema"—a mathematical relationship that allows it to compute the exact parameters needed for an unpracticed target.',
        },
        {
          label: 'Why Constant Practice Fails the Schema',
          description: 'If a learner practices with only one fixed parameter value (e.g. throwing from 4 feet, or solving only 10-element integer arrays), the brain samples only a single data point. It cannot construct a relational curve or function. When an unpracticed value appears, the brain has no schema to interpolate from.',
        },
      ],
      keyInsight: 'You do not learn a rule by repeating an identical instance; you learn a rule by observing how changing the parameters modulates the outcome.',
      simplifiedModelCaveat: 'Varied practice requires that trials share the same underlying GMP; varying tasks across completely different program classes without establishing baseline invariants causes chaotic confusion.',
    },
    {
      id: 'kerr-booth-target-interpolation',
      title: 'Kerr & Booth (1978): The Target Interpolation Effect',
      tagline: 'Why never practicing the exact target makes you superior at hitting it',
      statusLabel: 'Classic Empirical Motor Learning Milestone (1978)',
      scientificStatus: 'empirical-consensus',
      summary: 'Kerr and Booth (1978) proved that practicing above and below an objective target produces superior performance on that unpracticed target compared to practicing on the target itself, validating Schmidt’s parameter interpolation hypothesis.',
      mechanisms: [
        {
          label: 'The 3-Foot & 5-Foot Beanbag Experiment',
          description: 'Children tossed beanbags to a target hidden under an opaque screen. Group 1 tossed exclusively at a 4-foot target. Group 2 tossed at 3-foot and 5-foot targets, never at 4 feet. On a delayed test at 4 feet, the 3-and-5-foot group dramatically outperformed the 4-foot group.',
        },
        {
          label: 'Mathematical Interpolation across the Schema Boundary',
          description: 'Because Group 2 practiced across both sides of the 4-foot distance, their neural schema established the slope and intercept of the parameter function (force vs. distance). Calculating the parameter for 4 feet was a simple internal interpolation ($y = mx + b$). Group 1 only knew a single brittle point.',
        },
        {
          label: 'Over-Fitting in Biological Networks',
          description: 'Biological neural networks operate like machine learning models: training on identical inputs causes over-fitting to surface noise and idiosyncratic local minima. Variable inputs force weight regularization, preventing memorization and forcing generalizable abstraction.',
        },
      ],
      keyInsight: 'Practicing extreme boundaries calibrates the internal interpolation engine, making intermediate targets trivial.',
      simplifiedModelCaveat: 'Extremes must bracket or closely extrapolate the target zone; practicing wildly detached parameters (e.g. tossing at 50 feet) disrupts motor coordination invariants.',
    },
    {
      id: 'encoding-variability-environmental-transfer',
      title: 'Smith, Glenberg & Bjork (1978): Encoding Variability & Multi-Context Robustness',
      tagline: 'Why studying in diverse physical and digital environments prevents retrieval paralysis',
      statusLabel: 'Cognitive Context & Memory Retrieval Consensus',
      scientificStatus: 'empirical-consensus',
      summary: 'Steven Smith, Arthur Glenberg, and Robert Bjork (1978) proved that studying material across multiple physical contexts triples retrieval performance in novel environments compared to studying in a single, identical location.',
      mechanisms: [
        {
          label: 'Context-Dependent Memory (Godden & Baddeley, 1975)',
          description: 'When learning occurs in a single room, accidental environmental features (room odor, wall color, ambient lighting, room acoustics) become bound to the memory trace as unconscious retrieval cues. If tested in that exact room, retrieval is easy; if tested in a new room, retrieval cues are missing.',
        },
        {
          label: 'The Multi-Context Encoding Principle (Smith et al., 1978)',
          description: 'When learners study a topic in Room A and review it in Room B, the memory trace becomes linked to two distinct sets of environmental cues. Crucially, the intersection of these cues abstracts away the physical environment, causing the brain to index the knowledge through internal, semantic cues rather than room-dependent features.',
        },
        {
          label: 'Digital & Cognitive Context Variation',
          description: 'In modern intellectual work, environmental context includes fonts, IDE themes, monitor setups, and stress levels. Coding in only one dark theme with autocomplete binds operational fluency to editor visual cues. Varying tools, fonts, and locations makes cognitive retrieval invincible to real-world friction.',
        },
      ],
      keyInsight: 'A memory tied to only one physical context is a hostage to that context; multi-context encoding sets your knowledge free.',
      simplifiedModelCaveat: 'Varying physical contexts should not introduce overwhelming, continuous distractions during early initial encoding; change environments between study sessions, not within a single focused 20-minute block.',
    },
  ],
  diagram: {
    title: 'The Varied Practice & Parameter Invariance Architecture',
    subtitle: 'From narrow constant over-fitting to parameter interpolation and robust multi-context transfer',
    stages: [
      {
        id: 'stage-constant-overfitting',
        name: 'Stage 1: Constant Practice (Narrow Over-Fitting)',
        subtitle: 'Single Parameter & Single Environmental Context',
        capacity: 'Zero parameter interpolation capability',
        duration: 'Fluent early training trials',
        role: 'The learner repeats an identical task under identical conditions (e.g., throwing from 4 ft, using 1 font, solving only sorted integer arrays).',
        failureMode: 'Over-Fitting: The brain memorizes surface features and accidental environmental cues instead of abstracting general invariants.',
        evidenceType: 'Target tossing benchmark (Kerr & Booth, 1978)',
        practicalFix: 'Identify your default study environment or parameter set and deliberately introduce systematic variations.',
      },
      {
        id: 'stage-varied-parameter-perturbation',
        name: 'Stage 2: Varied Parameter Perturbations',
        subtitle: 'Sampling Extremes & Boundary Bracketing',
        capacity: 'Active parameter-outcome correlation mapping',
        duration: 'High-friction acquisition phase',
        role: 'The learner practices across diverse parameter values (e.g., 3 ft and 5 ft targets, floating-point numbers, reverse-sorted streams).',
        failureMode: 'The Fluency Drop: Performance drops initially as the motor-cognitive system must compute fresh parameters on every trial.',
        evidenceType: 'Schema Theory of discrete motor skill learning (Schmidt, 1975)',
        practicalFix: 'Expect and celebrate increased error rates during parameter variation; recognize that errors calibrate the slope of the schema function.',
      },
      {
        id: 'stage-schema-abstraction-interpolation',
        name: 'Stage 3: Invariant Abstraction & Interpolation',
        subtitle: 'Decoupling Core Invariants from Runtime Parameters',
        capacity: 'Mathematical parameter interpolation ($y = mx + b$)',
        duration: 'Consolidation phase',
        role: 'The brain separates the core generalized program from surface variables. When faced with an unpracticed middle target, the schema effortlessly interpolates the required control parameters.',
        failureMode: 'None: The generalized representation handles novel parameter values gracefully.',
        evidenceType: 'Parameter interpolation experiments (Wulf & Schmidt, 1989; Catalano & Kleiner, 1984)',
        practicalFix: 'Test yourself on unpracticed boundary values to verify that your generalized schema interpolates accurately.',
      },
      {
        id: 'stage-multi-context-robustness',
        name: 'Stage 4: Multi-Context Environmental Robustness',
        subtitle: 'Decoupling Retrieval Cues from Physical Surrounds',
        capacity: 'Invincible retrieval across stress, noise, and novel tooling',
        duration: 'Long-term operational mastery',
        role: 'Practicing across diverse physical environments, tools, and visual displays purges accidental environmental retrieval crutches, leaving knowledge purely semantic.',
        failureMode: 'None: Knowledge is robust against high-stakes exam rooms, noisy interview environments, and novel user interfaces.',
        evidenceType: 'Multi-context encoding variability (Smith, Glenberg & Bjork, 1978)',
        practicalFix: 'Rotate study spaces (library, cafe, desk, standing) and review interfaces across devices to bulletproof retrieval.',
      },
    ],
    feedbackLoopDescription: 'Constant practice binds execution to narrow surface cues and causes transfer failure; varied practice maps the parameter curve, abstracts structural invariants, and enables effortless interpolation.',
  },
  exercise: {
    title: 'The Varied Practice & Invariance Diagnostic Exercise',
    instruction: 'Analyze four real-world professional, athletic, and academic transfer failures. Diagnose whether the failure stems from Constant Parameter Over-Fitting, Single-Context Retrieval Crutch, Absence of Boundary Bracketing, or Parameter Misattribution, and prescribe the evidence-grounded fix.',
    categories: [
      {
        id: 'attention-bottleneck',
        title: 'Constant Parameter Over-Fitting',
        description: 'Practicing on a single fixed problem size or parameter value bound the schema to narrow numerical constants, preventing transfer.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'working-memory-overload',
        title: 'Single-Context Retrieval Crutch',
        description: 'Studying exclusively in a quiet, familiar room bound retrieval cues to physical surroundings, causing memory collapse in unfamiliar venues.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Absence of Boundary Bracketing',
        description: 'Failing to practice extreme values above and below the target range prevented the brain from interpolating intermediate parameters.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Tool & Interface Dependency',
        description: 'Relying exclusively on a single editor, IDE, or UI layout bound operational execution to accidental visual autocomplete cues.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-pilot-flight-simulator-crosswind',
        realWorldContext: 'Commercial Aviation Type-Rating Training',
        scenario: 'A student pilot logs 40 hours in a flight simulator practicing landings exclusively with a 10-knot direct headwind on Runway 27. On his real-world flight examination, the air traffic controller clears him to land on Runway 09 with an 8-knot gusting crosswind. The pilot over-corrects with aggressive rudder inputs, experiences pilot-induced oscillations, and blows out a main tire upon touchdown.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'The pilot suffered from Constant Parameter Over-Fitting (Schmidt, 1975). By training exclusively on a single headwind parameter, his neural motor program never learned to decouple pitch and power from lateral aileron-rudder crosswind correction.',
        evidenceBasedFix: 'Implement varied crosswind training: vary wind direction, velocity, and turbulence parameters randomly across every simulator landing (from 0 to 25 knots at variable angles) to abstract a generalized crosswind landing schema.',
      },
      {
        id: 'scen-medical-student-silent-library-ward-shock',
        realWorldContext: 'Internal Medicine Clinical Clerkship',
        scenario: 'A third-year medical student prepares for clinical rotations by studying pharmacology flashcards for 6 hours a day in a silent, temperature-controlled basement cubicle with noise-canceling headphones. During morning rounds in the busy ICU surrounded by buzzing monitors, shouting nurses, and paging doctors, she freezes when asked for the first-line vasopressor dose for septic shock.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'The student experienced Single-Context Retrieval Crutch (Smith, Glenberg & Bjork, 1978; Godden & Baddeley, 1975). Her pharmacological retrieval cues were tied to quiet, low-arousal physical environments; in a noisy, sensory-rich ICU, environmental retrieval cues were completely missing.',
        evidenceBasedFix: 'Incorporate multi-context encoding variability: review clinical drug dosages and protocols in bustling cafeterias, hospital hallways, while walking, and under simulated time-pressured oral quizzing.',
      },
      {
        id: 'scen-basketball-free-throw-bracketing',
        realWorldContext: 'NCAA Basketball Shooting Performance',
        scenario: 'A college basketball point guard shoots 500 free throws every day from the exact 15-foot line with no variations. Despite shooting 92% in empty gym practice, his in-game free throw percentage under pressure drops to 68%, with balls consistently rimming out long or short by 2 to 3 inches.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'The player lacked Boundary Bracketing (Kerr & Booth, 1978). Practicing solely at the 15-foot line created a brittle point-sample without calibrating the underlying force-distance parameter schema; minor changes in fatigue or arousal shift his motor output without an internal correction schema.',
        evidenceBasedFix: 'Incorporate varied distance shooting: have the player shoot sets from 14 feet (1 foot in front of the line) and 16.5 feet (behind the line) with varied basketball weights to calibrate the motor schema’s force interpolation engine.',
      },
      {
        id: 'scen-software-engineer-whiteboard-paralysis',
        realWorldContext: 'Tech Industry Onsite Whiteboard Interview',
        scenario: 'A senior frontend engineer spends 3 months preparing for coding interviews by solving 200 LeetCode problems exclusively inside VS Code with GitHub Copilot and Prettier auto-formatting enabled. During an in-person tech interview, she is asked to write an LRU cache implementation on a dry-erase whiteboard. Without syntax highlighting, code auto-completion, or auto-indentation, she freezes and cannot remember basic map iteration syntax.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'The engineer suffered from Tool & Interface Dependency (Schmidt, 1975). Her procedural programming skills were bound to external UI scaffolding (autocomplete, linting hints) rather than internal cognitive schemas.',
        evidenceBasedFix: 'Enforce varied interface drills: alternate practice across full IDEs, raw text editors with zero extensions, physical paper and pencil, and dry-erase whiteboards to ensure code schemas are interface-invariant.',
      },
    ],
  },
  quiz: {
    title: 'Varied Practice & Structural Invariance Formative Assessment',
    instruction: 'Demonstrate your understanding of Schmidt’s schema theory, Kerr & Booth’s target interpolation, and multi-context encoding variability. Score 75% or higher to verify.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-schmidt-schema-theory-invariants-parameters',
        question: 'In Richard Schmidt’s (1975) Schema Theory, what is the crucial distinction between a Generalized Motor Program’s (GMP) "invariants" and its "parameters"?',
        options: [
          {
            id: 'q1-a',
            text: 'Invariants are stored in the spinal cord, while parameters are generated by the retina.',
          },
          {
            id: 'q1-b',
            text: 'Invariants are the structural, proportional relationships that remain constant (e.g. relative timing, core algorithmic logic), while parameters are adjustable surface variables (e.g. overall speed, force, data types) supplied at execution time.',
          },
          {
            id: 'q1-c',
            text: 'Invariants change every second, while parameters remain frozen for a lifetime.',
          },
          {
            id: 'q1-d',
            text: 'Invariants apply only to swimming, while parameters apply only to running.',
          },
        ],
        correctOptionId: 'q1-b',
        explanation: 'Schmidt (1975) established that the brain compresses control by storing Generalized Motor Programs with invariant structural topology (relative timing and sequencing). Runtime parameters (speed, force, size) are adjusted dynamically based on environmental demands.',
        pedagogicalRationale: 'Clarifies the cognitive architecture that enables flexible, adaptive skill execution.',
        evidenceNote: 'Schmidt, R. A. (1975). A schema theory of discrete motor skill learning. Psychological Review, 82(4), 225-260.',
      },
      {
        id: 'q2-kerr-booth-target-interpolation-finding',
        question: 'In Kerr & Booth’s (1978) famous beanbag tossing experiment, what was the surprising result when comparing children who practiced only at 4 feet versus children who practiced at 3 feet and 5 feet?',
        options: [
          {
            id: 'q2-a',
            text: 'The 4-foot practice group outperformed the varied group by 50% because specificity of practice always beats variation.',
          },
          {
            id: 'q2-b',
            text: 'The varied group (practicing at 3 ft and 5 ft) significantly outperformed the constant group on the unpracticed 4-foot test, proving that practicing boundary extremes builds an interpolative schema.',
          },
          {
            id: 'q2-c',
            text: 'All children failed because beanbags cannot be thrown accurately by humans under age 20.',
          },
          {
            id: 'q2-d',
            text: 'Both groups performed identically because physical motor skills cannot transfer across even 1 inch of distance.',
          },
        ],
        correctOptionId: 'q2-b',
        explanation: 'Kerr & Booth (1978) provided definitive empirical proof for Schema Theory: the varied group never practiced at 4 feet, yet outperformed children who practiced exclusively at 4 feet because sampling 3 ft and 5 ft allowed their brains to map the underlying parameter-distance function.',
        pedagogicalRationale: 'Demonstrates the counterintuitive power of parameter interpolation.',
        evidenceNote: 'Kerr, R., & Booth, B. (1978). Specific and varied practice of motor skill. Perceptual and Motor Skills, 46(2), 395-401.',
      },
      {
        id: 'q3-smith-glenberg-bjork-encoding-variability',
        question: 'According to Steven Smith, Arthur Glenberg, and Robert Bjork (1978), why does studying material across multiple physical rooms produce far superior recall in an unfamiliar third environment compared to studying in a single room?',
        options: [
          {
            id: 'q3-a',
            text: 'Walking between rooms burns calories, which increases blood flow to the cerebellum.',
          },
          {
            id: 'q3-b',
            text: 'Studying in multiple contexts links the memory trace to diverse environmental cues, effectively decoupling the memory from any single physical setting and making retrieval cue-independent.',
          },
          {
            id: 'q3-c',
            text: 'Different rooms have different gravitational pull, which aligns magnetic iron in the hippocampus.',
          },
          {
            id: 'q3-d',
            text: 'Single-room studying causes carbon dioxide poisoning that damages the temporal lobes.',
          },
        ],
        correctOptionId: 'q3-b',
        explanation: 'Smith et al. (1978) demonstrated that studying in multiple rooms provides encoding variability: rather than relying on room-specific incidental cues (which fail in a novel test venue), the memory trace is abstracted into a robust semantic representation that can be retrieved anywhere.',
        pedagogicalRationale: 'Explains how multi-context encoding builds environmental independence.',
        evidenceNote: 'Smith, S. M., Glenberg, A., & Bjork, R. A. (1978). Environmental context and human memory. Memory & Cognition, 6(4), 342-353.',
      },
      {
        id: 'q4-overfitting-remedy-in-cognitive-domains',
        question: 'How does an engineer or learner prevent cognitive "over-fitting" when mastering algorithmic problem solving or diagnostic workflows?',
        options: [
          {
            id: 'q4-a',
            text: 'By solving the exact same textbook problem 100 times until it can be typed in under 60 seconds from memory.',
          },
          {
            id: 'q4-b',
            text: 'By deliberately varying input topologies, boundary edge conditions (e.g. empty inputs, negative values, massive scales), coding interfaces, and sensory environments during practice.',
          },
          {
            id: 'q4-c',
            text: 'By strictly using a single laptop with a locked screen brightness in a soundproof bunker.',
          },
          {
            id: 'q4-d',
            text: 'By avoiding all practice problems that have unfamiliar variable names.',
          },
        ],
        correctOptionId: 'q4-b',
        explanation: 'Preventing over-fitting requires parameter and context variation: by varying problem constraints, data structures, scales, and tooling environments, the cognitive system abstracts the invariant structural solution from accidental surface details.',
        pedagogicalRationale: 'Translates motor schema theory into concrete intellectual and technical practice.',
        evidenceNote: 'Wulf, G., & Schmidt, R. A. (1997). Variability of practice and implicit transfer. Journal of Experimental Psychology: Learning, Memory, and Cognition, 23(4), 987-1006.',
      },
    ],
  },
  practicalTask: {
    title: 'The Parameter Variation & Context De-Scaffolding Protocol',
    summary: 'A 3-step practical protocol to de-risk technical and conceptual skills against environmental over-fitting, parameter brittleness, and tool dependency.',
    steps: [
      {
        id: 'step-map-invariants-and-parameters',
        number: 1,
        title: 'Map Structural Invariants vs. Mutable Parameters',
        prompt: 'Select a core technical algorithm, medical diagnosis, or analytical framework you use frequently. Deconstruct it into: (1) Its Structural Invariants (what logic MUST always remain true regardless of context) and (2) Its Mutable Parameters (what surface features can change, such as scale, input format, or domain):',
        placeholder: 'e.g., Skill: Breadth-First Search (BFS). Invariant: Queue-based FIFO exploration maintaining shortest unweighted path traversal. Mutable Parameters: Grid coordinates vs adjacency list vs directory tree; iterative vs generator-based; integer nodes vs custom object states...',
        example: 'Skill: Microservice Rate Limiting. Invariant: Token bucket refill rate vs consumption checks. Mutable Parameters: Redis cache vs in-memory local state; IP-based vs API-key-based; synchronous blocking vs asynchronous 429 response headers.',
        cognitiveRationale: 'Explicitly distinguishing invariants from parameters prevents the cognitive system from conflating surface constants with underlying operational logic (Schmidt, 1975).',
      },
      {
        id: 'step-design-boundary-bracketing-drills',
        number: 2,
        title: 'Design Boundary-Bracketing Drills (The 3ft & 5ft Principle)',
        prompt: 'Formulate two deliberate practice drills that test extreme boundary parameters outside your typical comfort zone (one below normal scale, one far above normal scale or inverted). How will you push your schema past its usual parameters?',
        placeholder: 'e.g., Normal Practice: Arrays of 10-50 positive numbers. Boundary Drill 1 (Extreme Small/Inverted): Empty array, single-element array, all identical negative floats. Boundary Drill 2 (Extreme Scale/Streaming): Infinite generator stream where size $N$ is unknown...',
        example: 'Data Pipeline Design: Normal: 10,000 JSON records. Boundary Drill 1: 0 records with corrupt headers. Boundary Drill 2: 50,000,000 out-of-order records with high network jitter, forcing memory-bounded streaming.',
        cognitiveRationale: 'Training across boundary extremes forces the neural network to calibrate its parameter interpolation function, making intermediate values robust (Kerr & Booth, 1978).',
      },
      {
        id: 'step-strip-environmental-scaffolding',
        number: 3,
        title: 'Strip Environmental Scaffolding & Rotate Contexts',
        prompt: 'Identify the physical or digital crutches you rely on during daily practice (e.g., dual monitors, favorite dark IDE, quiet room, auto-complete). Plan your next practice session with complete context rotation:',
        placeholder: 'e.g., Action: Complete my next two algorithmic practice sessions on an iPad with a Bluetooth keyboard in a busy coffee shop, with zero syntax highlighting and zero code completion, then explain the code out loud on a physical notepad...',
        example: 'Interview Preparation: Shifted from VS Code at home desk to writing full Python implementations on a physical whiteboard in an empty university classroom while reciting edge-case assumptions out loud.',
        cognitiveRationale: 'Multi-context encoding decouples retrieval structures from accidental environmental cues, ensuring high-stakes transfer resilience (Smith, Glenberg & Bjork, 1978).',
      },
    ],
  },
};
