import type { Lesson } from '../types/learning.ts';

export const LESSON_HIERARCHICAL_KNOWLEDGE: Lesson = {
  id: 'hierarchical-knowledge-representation',
  chapterId: 'ch-8-chunking-schemas',
  number: '8.2',
  title: 'Hierarchical Knowledge Representation',
  subtitle: 'Building trees, graphs, and ontological maps of domain concepts',
  readingTimeMinutes: 18,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'Why does memorizing 100 isolated flashcards leave you completely helpless when diagnosing a novel production outage, while an expert with a structured ontology identifies the root cause in 30 seconds?',
    teaser: 'Knowledge is not a flat list of facts; human memory is an active semantic network organized hierarchically. Structuring information into inheritance hierarchies and conceptual graphs reduces cognitive search time from exponential to logarithmic.',
    hookNote: 'In 1969, Allan M. Collins and M. Ross Quillian published their classic experiments on human semantic memory, introducing the "Hierarchical Network Model." They measured reaction times for sentence verification (e.g. "A canary can sing" vs "A canary can fly" vs "A canary has skin") and proved that properties are stored at the highest possible level of categorical abstraction (Cognitive Economy) and retrieved via Spreading Activation through hierarchical tree structures. In 1976, Eleanor Rosch revolutionized cognitive science with her Prototype Theory and taxonomy of "Basic-Level Categories," proving that the human mind naturally anchors concept formation at an optimal, information-dense intermediate tier (e.g. "Bird" before "Animal" or "Peregrine Falcon"). In 1981, Michelene Chi, Paul Feltovich, and Robert Glaser published their seminal study on physics expertise: novices represent problems through surface features (inclined planes, pulleys), whereas experts classify problems through deep hierarchical principles (Conservation of Energy, Newton’s Second Law). When you structure technical knowledge as an explicit ontological graph rather than a flat flashcard deck, you unlock rapid inference, deductive transfer, and effortless problem solving.',
  },
  prediction: {
    prompt: 'Before analyzing the mathematical and cognitive mechanics of semantic trees, test your intuition on how knowledge organization affects problem-solving speed: Two groups of software engineers spend 4 hours studying the internal architecture of a distributed database. Group A studies using a flat deck of 60 definition cards (e.g. definitions of Raft leader election, WAL, SSTable, MemTable, Bloom filter, Paxos quorum). Group B studies using an explicit Hierarchical Ontological Map (Database → Consensus Subsystem vs Storage Engine → In-Memory Buffer vs Disk Format) where every concept is explicitly linked to its parent class, sibling contrast, and inheritance properties. Afterward, both groups are given a novel, complex distributed split-brain failure to troubleshoot. What does cognitive science predict?',
    context: 'Both groups studied for the exact same total duration and scored identically on basic multiple-choice term definitions:',
    options: [
      {
        id: 'opt-flat-search-identical',
        strategy: 'Hypothesis A: Factual Equivalence',
        description: 'Both groups diagnose the failure in equal time, because troubleshooting depends strictly on how many individual definitions the engineers know, not how the concepts are arranged on paper.',
      },
      {
        id: 'opt-hierarchical-traversal-superiority',
        strategy: 'Hypothesis B: Logarithmic Hierarchical Traversal',
        description: 'Group B diagnoses the failure over 300% faster and generates vastly superior root-cause hypotheses than Group A, because hierarchical structuring enables top-down pruning of the problem space and rapid spreading activation across causal dependencies.',
      },
      {
        id: 'opt-flat-flexibility-boost',
        strategy: 'Hypothesis C: Flat Knowledge Agility',
        description: 'Group A diagnoses the failure faster because their minds are unburdened by rigid tree hierarchies, allowing them to freely associate arbitrary concepts across the database.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-hierarchical-traversal-superiority',
      headline: 'Hierarchical Knowledge Organizations Enable Top-Down State Space Pruning and Logarithmic Diagnostic Traversal (Collins & Quillian, 1969; Chi et al., 1981; Rosch, 1976).',
      explanation: 'Problem solving in complex technical systems is fundamentally a search through a state space. Group A’s flat knowledge organization forced them to perform linear brute-force search ($O(N)$) across 60 isolated facts, rapidly exhausting working memory. In contrast, Group B organized knowledge into a hierarchical taxonomy. When troubleshooting, Group B pruned entire branches of the system tree in single steps (e.g. "This is a Consensus partition issue, so all 30 Storage Engine components can be instantly eliminated from consideration"). Spreading activation along inheritance links enabled logarithmic ($O(\\log N)$) search traversal, allowing Group B to isolate root causes with minimal cognitive strain.',
      optionFeedback: {
        'opt-flat-search-identical': {
          title: 'Your Choice: Hypothesis A (The Quantity-of-Facts Myth)',
          verdict: 'Refuted by 50+ Years of Cognitive Science',
          analysis: 'Knowing isolated facts without relational and hierarchical links leads to the "inert knowledge" problem. When faced with novel diagnostics, learners cannot navigate from symptoms to root causes (Chi, Feltovich, & Glaser, 1981).',
        },
        'opt-hierarchical-traversal-superiority': {
          title: 'Your Choice: Hypothesis B (Logarithmic Hierarchical Traversal)',
          verdict: 'Empirical Cognitive Psychology Consensus',
          analysis: 'Correct! Collins & Quillian (1969) and Chi et al. (1981) demonstrated that hierarchical tree structures allow top-down pruning of irrelevant hypotheses and enable rapid property inheritance through spreading activation.',
        },
        'opt-flat-flexibility-boost': {
          title: 'Your Choice: Hypothesis C (The Unstructured Thinking Illusion)',
          verdict: 'False Intuition: Flatness Produces Chaos',
          analysis: 'Flat knowledge does not provide creative flexibility; it generates associative interference and working memory collapse. Structured hierarchies provide the necessary cognitive scaffolding for creative transfer.',
        },
      },
      comparisons: [
        {
          label: 'Hierarchical Ontological Map (Group B)',
          immediateRetention: '91% Root-cause diagnosis accuracy (Under 5 minutes)',
          oneWeekRetention: '84% Retention (Durable structural schema)',
          illusionRating: 'Calibrated (Effortful tree induction builds deep models)',
          isEmpiricalWinner: true,
        },
        {
          label: 'Flat Flashcard Deck (Group A)',
          immediateRetention: '34% Diagnosis accuracy (Over 22 minutes average)',
          oneWeekRetention: '38% Retention (Isolated facts decay rapidly)',
          illusionRating: 'High (Fluent flashcard recall masks zero diagnostic transfer)',
          isEmpiricalWinner: false,
        },
        {
          label: 'Unguided Exploration & Trial-and-Error',
          immediateRetention: '22% Diagnosis accuracy (Cognitive thrashing)',
          oneWeekRetention: '18% Retention (Unstructured fragmented noise)',
          illusionRating: 'Very high (Feels like hard work, produces zero structure)',
          isEmpiricalWinner: false,
        },
      ],
      evidenceDistinction: 'Empirical Evidence Distinction: The advantage of hierarchical knowledge structures is empirically validated in semantic network chronometry (Collins & Quillian, 1969; Collins & Loftus, 1975), physics expert problem categorization (Chi et al., 1981), and human taxonomic categorization (Rosch, 1976).',
    },
  },
  coreExplanations: [
    {
      id: 'collins-quillian-hierarchical-network',
      title: '1. Collins & Quillian: The Hierarchical Network Model & Cognitive Economy',
      tagline: 'How the human brain optimizes semantic storage and inference latency',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Foundational Cognitive Psychology Consensus',
      summary: 'In 1969, Allan Collins and Ross Quillian proposed the first computational and psychological model of semantic memory. Concepts are nodes in a hierarchical network where properties are stored at the highest level of generality (Cognitive Economy), and verification times scale with hierarchical distance.',
      mechanisms: [
        {
          label: 'The Principle of Cognitive Economy',
          description: 'The brain does not redundantly store the property "has skin" on canary, robin, salmon, and elephant nodes. Instead, "has skin" is stored once at the root "Animal" node. "Can fly" is stored at "Bird". "Can sing" is stored at "Canary". Properties are inherited downwards automatically.',
        },
        {
          label: 'Hierarchical Distance and Reaction Time Chronometry',
          description: 'Collins & Quillian demonstrated that response latency increases linearly with the number of levels traversed in the hierarchy. Verifying "A canary is a canary" (0 steps) is faster than "A canary is a bird" (1 step), which is faster than "A canary is an animal" (2 steps). Similarly, verifying properties requires traversing inheritance links.',
        },
        {
          label: 'Spreading Activation Across Links (Collins & Loftus, 1975)',
          description: 'When a concept node is stimulated, electrical activation spreads outward along connected links with diminishing intensity. Strongly associated sibling and parent nodes are primed, pre-loading relevant contextual schemas into working memory.',
        },
      ],
      keyInsight: 'Do not memorize properties on individual components. Attach properties to parent abstractions and let the brain’s semantic network handle inheritance automatically.',
      simplifiedModelCaveat: 'Human semantic memory also exhibits "typicality effects" (e.g. verifying a robin is a bird is faster than a penguin is a bird), showing that semantic networks include prototype gradients alongside strict tree structures (Rosch, 1975).',
    },
    {
      id: 'rosch-prototype-basic-level-categories',
      title: '2. Eleanor Rosch: Basic-Level Categories & Conceptual Anchors',
      tagline: 'The psychological sweet spot between over-general abstraction and over-specific detail',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Cognitive Science & Linguistics Consensus',
      summary: 'Eleanor Rosch (1976) discovered that taxonomies are not psychologically flat. Among superordinate (e.g. Animal), basic-level (e.g. Bird), and subordinate (e.g. Peregrine Falcon) tiers, the Basic Level is the primary psychological entry point for human cognition.',
      mechanisms: [
        {
          label: 'The Basic-Level Psychological Primacy',
          description: 'Basic-level categories (e.g. "Table", "Car", "Dog", "Database") are: 1) the highest level at which members share a common overall perceptual shape; 2) the level where people use common motor movements to interact; 3) the fastest level identified in picture-naming tasks; and 4) the first level learned by children.',
        },
        {
          label: 'Superordinate vs Subordinate Trade-Offs',
          description: 'Superordinate categories ("Furniture", "Software Architecture") share few perceptual features and have low diagnostic utility. Subordinate categories ("Mid-century teak dining table", "Raft Consensus Cluster") add dense technical detail but share almost all attributes with their basic-level parent.',
        },
        {
          label: 'Expertise Downward Shift',
          description: 'As individuals achieve deep domain expertise (birdwatchers, botanists, systems engineers), their basic-level entry point shifts downwards into the subordinate tier. An expert programmer sees "React Hook" or "Postgres Replica" with the same instantaneous recognition that a novice sees "Code".',
        },
      ],
      keyInsight: 'When learning a new domain, always anchor your mental model at the Basic Level first. Master the basic-level objects before climbing up to abstract philosophy or diving down into granular trivia.',
      simplifiedModelCaveat: 'Categorization is graded, not binary: concepts have "prototypes" (central ideal instances) and fuzzy boundaries rather than rigid mathematical definitions.',
    },
    {
      id: 'chi-expert-deep-structure-categorization',
      title: '3. Chi, Feltovich & Glaser: Deep Structure vs Surface Features',
      tagline: 'The defining hallmark of expert problem solving: Hierarchical schema categorization',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Expertise & Educational Psychology Consensus',
      summary: 'Michelene Chi and colleagues (1981) conducted a landmark experiment comparing how physics experts and novices categorize textbook problems. Novices sort by superficial surface features, while experts sort by deep, hierarchical governing principles.',
      mechanisms: [
        {
          label: 'Novice Surface Feature Clustering',
          description: 'Novices group problems by the physical objects mentioned in the problem prompt: "These are pulley problems," "These are inclined plane problems," or "These are spring problems." Surface categorizations provide no algorithmic path to a solution.',
        },
        {
          label: 'Expert Deep Principle Schematization',
          description: 'Physics PhDs group the exact same problems by the fundamental conservation laws required to solve them: "These are Work-Energy Theorem problems," or "These are Conservation of Linear Momentum problems." The expert’s top-down category automatically activates the solution algorithm and mathematical template.',
        },
        {
          label: 'Top-Down Forward Search vs Bottom-Up Means-Ends Search',
          description: 'Because experts categorize problems by deep governing schemas, they work forward from known principles to equations. Novices work backward from the unknown variable, aimlessly hunting for formulas that contain the matching symbols (swamping working memory).',
        },
      ],
      keyInsight: 'To think like an expert, stop categorizing bugs or architectures by what they look like on the surface. Categorize them by the underlying invariant law they obey or violate.',
      simplifiedModelCaveat: 'Shifting from surface to deep structure categorization requires hundreds of deliberate, contrastive problem comparisons where surface features are varied while deep principles remain constant.',
    },
  ],
  diagram: {
    title: 'Hierarchical Knowledge Network & Diagnostic Search Tree',
    subtitle: 'From root abstractions to basic-level anchors and subordinate implementations with cognitive economy',
    stages: [
      {
        id: 'stage-superordinate-root-abstraction',
        name: 'Stage 1: Superordinate Governing Principles',
        subtitle: 'Root abstractions (Conservation Laws, Architectural Archetypes)',
        capacity: 'High generality, low feature density',
        duration: 'Universal domain scope',
        role: 'The top level defines fundamental axioms, conservation laws, and universal contracts (e.g. "Distributed Data Storage", "Stateful Event Processor"). It establishes global constraints that govern all descendant systems.',
        failureMode: 'Ivory-tower abstraction: Memorizing philosophical definitions without grounding in basic-level working components.',
        evidenceType: 'Empirical consensus (Collins & Quillian, 1969; Chi et al., 1981)',
        practicalFix: 'Always connect high-level principles immediately to concrete basic-level examples.',
      },
      {
        id: 'stage-basic-level-conceptual-anchors',
        name: 'Stage 2: Basic-Level Conceptual Anchors',
        subtitle: 'The primary psychological entry point (Database, Message Queue, Cache)',
        capacity: 'Maximum cue validity & distinct perceptual shape',
        duration: 'Instantaneous recognition',
        role: 'The middle tier represents the primary cognitive anchors where learners form intuitive mental models and operational verbs (e.g. "Relational DB", "Log-Centric Broker"). This tier provides the optimal balance of informativeness and economy.',
        failureMode: 'Skipping the basic level: Trying to master internal Raft quorum proofs before understanding basic client-server database semantics.',
        evidenceType: 'Empirical consensus (Rosch, 1976; Rosch et al., 1978)',
        practicalFix: 'Build and verify basic-level operational fluency before navigating up or down the hierarchy.',
      },
      {
        id: 'stage-subordinate-specialization-nodes',
        name: 'Stage 3: Subordinate Specialization Nodes',
        subtitle: 'Concrete implementations with inherited attributes (Postgres, Kafka, Redis)',
        capacity: 'High technical detail with inherited base properties',
        duration: 'Fine-grained execution context',
        role: 'The bottom tier contains specific technical implementations. Because of cognitive economy, subordinate nodes inherit all parent properties automatically, only specifying unique differentiator flags (e.g. Postgres inherits ACID storage, adds MVCC append-only pages).',
        failureMode: 'Flat sprawl: Treating each new database as a totally novel entity rather than an extension of a known parent class.',
        evidenceType: 'Empirical consensus (Collins & Quillian, 1969; Mervis & Rosch, 1981)',
        practicalFix: 'Use inheritance maps: list only what makes this subordinate implementation different from its parent class.',
      },
      {
        id: 'stage-lateral-cross-hierarchy-links',
        name: 'Stage 4: Lateral Cross-Hierarchy Graphs & Spreading Activation',
        subtitle: 'Relational links connecting disparate branches (Cache-Aside, Write-Through)',
        capacity: 'Dynamic network graph with spreading activation',
        duration: 'Logarithmic search traversal',
        role: 'Cross-cutting relationships link nodes across distinct trees (e.g. connecting In-Memory Caching to Relational DB via Cache-Aside protocol). Spreading activation traverses these links, enabling associative inference across disparate systems.',
        failureMode: 'Siloed tree thinking: Inability to reason about systemic failure cascades across multiple architectural trees.',
        evidenceType: 'Empirical consensus (Collins & Loftus, 1975; Anderson, 1983)',
        practicalFix: 'Draw explicit multi-graph links representing data flow and failure propagation across distinct taxonomic trees.',
      },
    ],
    feedbackLoopDescription: 'Hierarchical trees prune search spaces top-down, while lateral network links propagate activation across domain boundaries, synthesizing both speed and creativity.',
  },
  exercise: {
    title: 'Hierarchical Knowledge & Categorization Diagnostic Exercise',
    instruction: 'Analyze four real-world engineering and learning scenarios. Diagnose whether cognitive failure stems from surface-feature fixation, missing cognitive economy, basic-level neglect, or flat search sprawl, and prescribe the evidence-grounded fix.',
    categories: [
      {
        id: 'attention-bottleneck',
        title: 'Flat Search Sprawl (O(N) Exhaustion)',
        description: 'Searching linearly across dozens of unorganized facts without taxonomic pruning caused working memory collapse.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'working-memory-overload',
        title: 'Surface-Feature Fixation Trap',
        description: 'Categorizing technical failures by visual symptoms or UI alerts rather than underlying physical or architectural principles.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Violation of Cognitive Economy',
        description: 'Redundantly memorizing identical properties on dozens of individual components rather than anchoring them on a parent class.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Hierarchical Top-Down Pruning',
        description: 'Rapidly eliminated 90% of the problem space in one step by checking superordinate boundaries, isolating root causes in seconds.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-surface-alert-hunting',
        realWorldContext: 'Junior DevOps Engineer on Incident Call',
        scenario: 'When a web service throws HTTP 504 Gateway Timeout errors, Jordan frantically starts checking Nginx proxy timeout configuration files, searching Google for "Nginx 504 bug". He spends 40 minutes tweaking reverse proxy settings, completely oblivious to the fact that the downstream database connection pool was entirely exhausted.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'Jordan fell into the Surface-Feature Fixation Trap (Chi et al., 1981). He classified the problem by the immediate visual error code ("504 Gateway Timeout = Nginx problem") rather than analyzing the deep structural causality: 504 is a symptom of downstream latency, which in a web application is almost always caused by blocking I/O or connection starvation.',
        evidenceBasedFix: 'Teach the hierarchical fault tree: Request Path → Ingress → App Server → Downstream I/O (Database/Cache/Third-Party). Check downstream latencies before tuning upstream proxy timeouts.',
      },
      {
        id: 'scen-redundant-property-memorization',
        realWorldContext: 'Bootcamp Graduate Studying Cloud Services',
        scenario: 'Liam makes 80 flashcards for AWS services. On the card for RDS, he writes: "Has automated backups, IAM security roles, CloudWatch monitoring, Multi-AZ replication." On the card for OpenSearch, he writes: "Has automated backups, IAM security roles, CloudWatch monitoring, Multi-AZ replication." On DynamoDB, ElastiCache, and DocumentDB, he repeats the exact same four sentences.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'Liam is violating the Principle of Cognitive Economy (Collins & Quillian, 1969). By memorizing identical properties on every leaf node, he clutters long-term memory with massive redundancy and fails to extract the superordinate schema: "AWS Managed Service = Automated Backups + IAM + CloudWatch + Multi-AZ".',
        evidenceBasedFix: 'Create a single parent card: "Core Properties of AWS Managed Services". Then on individual service cards, record only the unique differentiators (e.g. DynamoDB: Serverless single-digit millisecond NoSQL key-value store).',
      },
      {
        id: 'scen-distributed-trace-pruning',
        realWorldContext: 'Senior Staff Engineer Incident Root-Cause Analysis',
        scenario: 'During a massive outage across 40 services, Priya looks at the global error rate graph. She immediately asks: "Is the error rate spiking across all regions, or strictly us-east-1?" When told it is strictly us-east-1, she immediately says: "Then all global DNS routing and cross-region consensus layers are healthy; focus our entire investigation on the us-east-1 primary VPC routing tables and local availability zones."',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'Priya demonstrated Hierarchical Top-Down Pruning (Collins & Quillian, 1969). By checking the highest-level geographical constraint in the system tree, she pruned 90% of the system architecture in a single 5-second inquiry, reducing search time from linear brute-force to logarithmic precision.',
        evidenceBasedFix: 'Codify this top-down triage protocol into team runbooks: verify global vs regional, infrastructure vs application, read-path vs write-path before examining individual service logs.',
      },
      {
        id: 'scen-sixty-tab-diagnostic-chaos',
        realWorldContext: 'New Hire Troubleshooting Monolith Crash',
        scenario: 'A microservice fails to boot up. Sam has 60 browser tabs open, inspecting configuration YAMLs, environment variables, Dockerfiles, npm dependencies, network ports, and database passwords in random order. After two hours of frantic linear checking, he is completely exhausted and still has no idea why the service won’t start.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'Sam is trapped in Flat Search Sprawl (O(N) search). Lacking an organized hierarchical startup model, he treats all 60 potential failure points as equally likely and searches randomly, overwhelming working memory with disconnected facts.',
        evidenceBasedFix: 'Implement the 4-tier service initialization hierarchy: 1. Host/Container Environment → 2. Config & Secret Resolution → 3. Dependency Injection & Wireup → 4. Network Binding & Healthcheck. Test each tier sequentially.',
      },
    ],
  },
  quiz: {
    title: 'Formative Assessment: Hierarchical Knowledge Representation',
    instruction: 'Demonstrate rigorous conceptual mastery of Collins & Quillian’s Hierarchical Network Model, Rosch’s Prototype & Basic-Level Theory, and Chi’s expert deep-structure categorization.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-collins-quillian-cognitive-economy',
        question: 'In Allan M. Collins and M. Ross Quillian’s (1969) Hierarchical Network Model of semantic memory, what does the Principle of Cognitive Economy state?',
        options: [
          {
            id: 'q1-a',
            text: 'Semantic properties and features are stored at the highest possible level of categorical abstraction in the hierarchy and inherited downward automatically, avoiding redundant storage on individual descendant concepts.',
          },
          {
            id: 'q1-b',
            text: 'The human brain charges a biological financial fee of 5 cents every time you retrieve a technical definition from long-term memory.',
          },
          {
            id: 'q1-c',
            text: 'All properties must be copied and stored redundantly on every individual leaf node to ensure maximum recall speed.',
          },
          {
            id: 'q1-d',
            text: 'Cognitive economy means humans only remember facts that relate to the stock market or economic policy.',
          },
        ],
        correctOptionId: 'q1-a',
        explanation: 'The Principle of Cognitive Economy (Collins & Quillian, 1969) shows that general properties (e.g. "can breathe") are stored at parent nodes ("Animal") rather than redundantly duplicated on canary, dog, and shark nodes, minimizing memory footprint and enabling deductive inheritance.',
        pedagogicalRationale: 'Establishes the foundational empirical principle of efficient semantic storage in cognitive science.',
        evidenceNote: 'Collins, A. M., & Quillian, M. R. (1969). Retrieval time from semantic memory. Journal of Verbal Learning and Verbal Behavior, 8(2), 240-247.',
      },
      {
        id: 'q2-rosch-basic-level-primacy',
        question: 'According to Eleanor Rosch’s (1976) pioneering research on human categorization, why is the "Basic Level" (e.g. "Chair" or "Dog") considered the psychological anchor of human cognition?',
        options: [
          {
            id: 'q2-a',
            text: 'It represents the optimal sweet spot where category members share common visual shapes and motor actions, maximizing informativeness while minimizing cognitive categorization effort.',
          },
          {
            id: 'q2-b',
            text: 'It is the most abstract and vague category possible, containing zero practical information.',
          },
          {
            id: 'q2-c',
            text: 'Humans only use basic-level categories when they are sleep-deprived or suffering from fever.',
          },
          {
            id: 'q2-d',
            text: 'Rosch proved that basic-level categories do not exist and humans only think in binary machine code.',
          },
        ],
        correctOptionId: 'q2-a',
        explanation: 'Rosch (1976) proved that basic-level categories (e.g. "Bird", "Car") have the highest cue validity: they are the most general categories whose members share a common visual shape and motor interaction profile, making them the psychological entry point for recognition.',
        pedagogicalRationale: 'Clarifies why technical curriculum design must anchor concepts at an intermediate operational tier before introducing extreme abstractions.',
        evidenceNote: 'Rosch, E., Mervis, C. B., Gray, W. D., Johnson, D. M., & Boyes-Braem, P. (1976). Basic objects in natural categories. Cognitive Psychology, 8(3), 382-439.',
      },
      {
        id: 'q3-chi-expert-categorization-difference',
        question: 'What did Michelene Chi, Paul Feltovich, and Robert Glaser (1981) discover when comparing how physics experts versus novices categorize complex problems?',
        options: [
          {
            id: 'q3-a',
            text: 'Novices sort problems by superficial surface features (e.g. pulleys, inclined planes), whereas experts sort by deep, hierarchical physical laws (e.g. Conservation of Energy, Newton’s Second Law).',
          },
          {
            id: 'q3-b',
            text: 'Experts sort problems alphabetically by the first word in the problem text, while novices sort by font color.',
          },
          {
            id: 'q3-c',
            text: 'There was zero difference between experts and novices; physics problem solving is purely random guessing.',
          },
          {
            id: 'q3-d',
            text: 'Novices consistently solved problems faster than experts because experts overthought basic geometry.',
          },
        ],
        correctOptionId: 'q3-a',
        explanation: 'Chi et al. (1981) demonstrated that expertise is characterized by structuring knowledge around deep governing principles rather than surface story elements, allowing experts to immediately access relevant solution templates.',
        pedagogicalRationale: 'Highlights the critical qualitative difference between novice and expert mental representations.',
        evidenceNote: 'Chi, M. T., Feltovich, P. J., & Glaser, R. (1981). Categorization and representation of physics problems by experts and novices. Cognitive Science, 5(2), 121-152.',
      },
      {
        id: 'q4-spreading-activation-network-traversal',
        question: 'How does Spreading Activation (Collins & Loftus, 1975; Anderson, 1983) enable rapid inference and associative retrieval in hierarchical knowledge graphs?',
        options: [
          {
            id: 'q4-a',
            text: 'Stimulating a concept node causes electrical activation to propagate outward along relational links with decaying strength, pre-activating related parent, sibling, and functional schemas into working memory.',
          },
          {
            id: 'q4-b',
            text: 'Spreading activation deletes all neighboring nodes in long-term memory to prevent overheating the skull.',
          },
          {
            id: 'q4-c',
            text: 'Spreading activation requires drinking 4 liters of caffeinated water every 10 minutes.',
          },
          {
            id: 'q4-d',
            text: 'Activation only spreads in a straight horizontal line and can never traverse hierarchical or vertical relationships.',
          },
        ],
        correctOptionId: 'q4-a',
        explanation: 'Collins & Loftus (1975) established that semantic retrieval operates through spreading activation: activating a node sends decreasing waves of activation across connected semantic pathways, priming contextually relevant knowledge for instant working-memory access.',
        pedagogicalRationale: 'Connects static hierarchical storage to dynamic associative inference and rapid diagnostic hypothesis generation.',
        evidenceNote: 'Collins, A. M., & Loftus, E. F. (1975). A spreading-activation theory of semantic processing. Psychological Review, 82(6), 407-428.',
      },
    ],
  },
  practicalTask: {
    title: 'The Hierarchical Knowledge Mapping & Cognitive Economy Protocol',
    summary: 'A 3-step practical protocol to convert a flat technical study topic into an efficient hierarchical taxonomy, eliminate property redundancy, and map diagnostic fault trees.',
    steps: [
      {
        id: 'step-construct-3-tier-taxonomy',
        number: 1,
        title: 'Construct a 3-Tier Categorical Taxonomy',
        prompt: 'Select a technical domain you are mastering (e.g. Cloud Databases, Web Frameworks, Cryptography). Map 12–15 concepts into an explicit 3-tier taxonomy: Superordinate (Governing Class) → Basic Level (Operational Objects) → Subordinate (Implementations):',
        placeholder: 'e.g., Superordinate: Distributed Storage Engines. Basic Level: 1. Relational OLTP, 2. Analytical OLAP, 3. In-Memory Key-Value. Subordinate: [PostgreSQL, MySQL], [ClickHouse, Snowflake], [Redis, Dragonfly]...',
        example: 'Superordinate: Concurrency Control Primitives. Basic Level: 1. Mutual Exclusion Locks, 2. Lock-Free Atomic Operations, 3. Software Transactional Memory. Subordinate: [Pthread Mutex, Read-Write Lock], [Compare-And-Swap, Atomic Boolean], [Clojure STM, MVCC Snapshot].',
        cognitiveRationale: 'Structuring information into Rosch’s (1976) 3-tier hierarchy provides an intuitive psychological entry point while organizing detailed technical implementations under stable conceptual anchors.',
      },
      {
        id: 'step-extract-cognitive-economy-properties',
        number: 2,
        title: 'Enforce Cognitive Economy: Extract Parent Properties',
        prompt: 'Identify properties currently duplicated across your subordinate implementations. Extract them and attach them once to the parent basic-level or superordinate node, recording only unique differentiator flags at the subordinate level:',
        placeholder: 'e.g., Parent Class (Relational OLTP): Implements ACID, B-Tree secondary indexing, SQL parser, cost-based optimizer. Differentiator for Postgres: Append-only tuple MVCC with table bloat. Differentiator for MySQL/InnoDB: Undo log segment rollback MVCC with clustered primary key index...',
        example: 'Parent Class (Lock-Free Atomics): Hardware CPU instruction support, non-blocking progress guarantee, ABA problem vulnerability. Differentiator (Compare-And-Swap): Atomically compares expected memory value and swaps if matched. Differentiator (Load-Linked/Store-Conditional): RISC alternative that detects intermediate cache line invalidations.',
        cognitiveRationale: 'Applying Collins & Quillian’s (1969) Principle of Cognitive Economy drastically reduces memory storage redundancy and automates deductive property inheritance across all sibling nodes.',
      },
      {
        id: 'step-build-top-down-diagnostic-fault-tree',
        number: 3,
        title: 'Design a Top-Down Logarithmic Diagnostic Fault Tree',
        prompt: 'For your primary technical system, map a 3-step branching diagnostic tree that allows an engineer to prune 50%–75% of the failure space with each inquiry:',
        placeholder: 'e.g., Production Alert: High P99 API Latency. Decision 1: Is CPU utilization > 80%? If Yes → Prune I/O tree, investigate thread pool saturation and GC pauses. If No → Prune CPU tree, investigate downstream I/O wait. Decision 2: Is DB query latency normal? If Yes → Investigate network gateway. If No → Investigate slow query locks...',
        example: 'Alert: Service CrashLoopBackOff. Decision 1: Did the container process terminate with exit code 0 or >0? If 0 → Configured task completed; prune crash tree. If 137 → OOMKilled by Linux kernel cgroup; prune app logic, check memory limit. If 1/Exception → App runtime panic; inspect stack trace.',
        cognitiveRationale: 'Translating knowledge into hierarchical diagnostic trees mirrors expert problem-solving (Chi et al., 1981), replacing exhausting $O(N)$ brute-force search with efficient $O(\\log N)$ logarithmic pruning.',
      },
    ],
  },
};
