import type { Lesson } from '../types/learning.ts';

export const LESSON_CONDITIONS_FOR_FAR_TRANSFER: Lesson = {
  id: 'conditions-for-far-transfer',
  chapterId: 'ch-16-transfer',
  number: '16.2',
  title: 'Conditions for Far Transfer',
  subtitle: 'Deep structural abstraction, multiple contexts, and schema decontextualization',
  readingTimeMinutes: 18,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'If spontaneous far transfer is almost impossible when learning a concept in a single domain, what specific pedagogical intervention increases cross-domain problem solving from 10% to over 80%?',
    teaser: 'When students study one example, they bind the idea to surface noise; when forced to compare two superficially different analogs, the brain abstracts deep structural schemas.',
    hookNote: 'In 1980 and 1983, cognitive psychologists Mary Gick and Keith Holyoak presented participants with Karl Duncker’s famous "Radiation Problem": how can a doctor destroy an inoperable stomach tumor with high-intensity rays without burning healthy surrounding tissue? When participants were simply given the problem, only 10% solved it. Even when given a story about a general who captured a fortress by dividing his army down multiple small roads (a perfect mathematical analog), only 20% transferred the solution spontaneously without a hint! However, when Gick and Holyoak added a single transformative condition—asking participants to read TWO superficially different stories (a military general and a fire chief using multiple small hoses) and explicitly articulate their common structural pattern—spontaneous transfer skyrocketed to over 80%! Building on this, Dedre Gentner (2003) proved that "Analogical Encoding" decouples concepts from surface clutter. In this lesson, we explore the precise neuro-cognitive conditions for Far Transfer: Gick & Holyoak’s schema induction, Gentner’s analogical comparison, and John Bransford & Daniel Schwartz’s (1999) "Preparation for Future Learning" (PFL) framework.',
  },
  prediction: {
    prompt: 'Two engineering training academies, Academy A and Academy B, are preparing mid-level software engineers to design high-throughput distributed message queues that prevent cascading backpressure collapses:\n\nAcademy A ("Deep Single-Domain Case Study"): Spends 40 hours conducting an exhaustive, world-class teardown of Apache Kafka. Students study Kafka partition logs, consumer groups, TCP socket backpressure, and JVM garbage collection pause metrics in painstaking detail.\n\nAcademy B ("Contrasting Analogical Schema Induction"): Spends the exact same 40 hours analyzing three structurally isomorphic flow-control systems from wildly different fields: (1) Highway traffic metering lights that throttle freeway on-ramps during rush hour, (2) The human cardiovascular baroreceptor reflex that modulates peripheral vascular resistance when blood pressure spikes, and (3) An industrial chemical reactor with pressure-relief surge tanks. Students are guided to ignore surface trivia and formally map the shared relational schema (buffering, rate-limiting, and backpressure feedback).\n\nBoth cohorts are then challenged with an unprecedented, novel problem: "Design an admission control and load-shedding protocol for an autonomous drone swarm communicating over lossy acoustic underwater channels during a hurricane."',
    context: 'Both groups have identical baseline software engineering experience, identical computer science fundamentals, and devote exactly 40 total hours of study:',
    options: [
      {
        id: 'opt-academy-a-deep-domain-superior',
        strategy: 'Hypothesis A: Deep Single-Domain Depth Advantage',
        description: 'Academy A will outperform Academy B because 40 hours of exhaustive Kafka depth builds production-hardened expertise, whereas studying traffic lights and biology provides superficial metaphors that lack software rigor.',
      },
      {
        id: 'opt-academy-b-schema-induction-far-transfer',
        strategy: 'Hypothesis B: Schema Induction & Decontextualization Advantage',
        description: 'Academy B will vastly outperform Academy A on the novel underwater drone swarm challenge (Gick & Holyoak, 1983; Gentner, 2003) because comparing multiple superficially distinct analogs strips away surface noise, creating an abstract relational schema capable of far transfer.',
      },
      {
        id: 'opt-equivalent-technical-capacity',
        strategy: 'Hypothesis C: Equal Engineering Reasoning Equivalence',
        description: 'Both cohorts will perform similarly because technical problem-solving ability is driven by general algorithmic aptitude, which is identical between the two groups.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-academy-b-schema-induction-far-transfer',
      headline: 'Schema Induction Unlocks Far Transfer: Multi-Context Comparison Strips Surface Noise (Gick & Holyoak, 1983; Gentner, 2003).',
      explanation: 'Over 40 years of cognitive research proves that studying a single domain—no matter how deeply—binds principles to domain-specific surface features. Academy A encoded backpressure as "Kafka partition offsets and JVM memory buffers." When faced with acoustic packet drops in an underwater drone swarm, their memory retrieval cues were completely absent (Barnett & Ceci, 2002). In contrast, Academy B engaged in Analogical Encoding (Gentner, 2003) and Schema Induction (Gick & Holyoak, 1983): by comparing traffic on-ramps, cardiovascular baroreceptors, and chemical surge tanks, their cognitive systems extracted the deep, invariant relational structure: [Upstream Generation Rate] $\\rightarrow$ [Buffer Threshold] $\\rightarrow$ [Inhibited Egress Gate] $\\rightarrow$ [Closed-Loop Negative Feedback]. This abstract schema was completely de-situated from Kafka code, allowing Academy B to immediately recognize that the underwater drone acoustic channel was simply another instantiation of the same universal flow-control invariant.',
      optionFeedback: {
        'opt-academy-a-deep-domain-superior': {
          title: 'Your Choice: Hypothesis A (Deep Single-Domain Depth)',
          verdict: 'Refuted by Experimental Transfer Psychology',
          analysis: 'Deep study in a single domain creates powerful "near transfer," but binds knowledge to domain-specific jargon and implementation quirks. Without contrasting examples, learners cannot abstract the underlying invariant schema.',
        },
        'opt-academy-b-schema-induction-far-transfer': {
          title: 'Your Choice: Hypothesis B (Schema Induction & Decontextualization)',
          verdict: 'Empirical Cognitive Science Consensus',
          analysis: 'Exactly right! Mary Gick, Keith Holyoak (1983), and Dedre Gentner (2003) demonstrated that analogical comparison across multiple superficially different domains decouples schemas from surface clutter, multiplying far transfer rates by 4x to 8x.',
        },
        'opt-equivalent-technical-capacity': {
          title: 'Your Choice: Hypothesis C (Equal Engineering Reasoning)',
          verdict: 'Contradicted by Knowledge Representation & Retrieval Science',
          analysis: 'General aptitude cannot bridge transfer gaps without abstract relational schemas. Retrieval in novel domains depends strictly on whether the underlying structural invariants were decontextualized during encoding.',
        },
      },
      comparisons: [
        {
          label: 'Single-Domain Immersion (Deep Kafka Teardown)',
          immediateRetention: 'High technical fluency with Kafka configuration flags and socket buffers',
          oneWeekRetention: 'Brittle transfer to unfamiliar environments; struggles with novel protocols (<25% success)',
          illusionRating: 'Illusion of broad mastery; mistakes Kafka expertise for general distributed systems insight',
          isEmpiricalWinner: false,
        },
        {
          label: 'Analogical Encoding & Multi-Context Comparison',
          immediateRetention: 'Slightly higher initial effort reconciling divergent domain metaphors',
          oneWeekRetention: 'Vastly superior spontaneous far transfer to novel problem topologies (>80% success)',
          illusionRating: 'Calibrated structural understanding; instantly maps relational invariants across fields',
          isEmpiricalWinner: true,
        },
      ],
      evidenceDistinction: 'Gick & Holyoak (1983) and Kurtz, Miao, & Gentner (2001) demonstrated that comparing two analogical cases that share structural relations but differ in surface features increases convergence solution rates from ~20% to over 80%.',
    },
  },
  coreExplanations: [
    {
      id: 'gick-holyoak-schema-induction',
      title: 'Gick & Holyoak (1980, 1983): The Architecture of Schema Induction',
      tagline: 'Why one example teaches surface trivia, but two contrasting examples teach deep structural truth',
      statusLabel: 'Cognitive Science & Analogical Transfer Classic Benchmark',
      scientificStatus: 'empirical-consensus',
      summary: 'Mary Gick and Keith Holyoak discovered that learners rarely apply a known principle to a new problem because they are blinded by surface dissimilarity (e.g., military generals vs stomach tumors). Spontaneous far transfer requires "Schema Induction": abstracting a generalized relational representation by actively comparing multiple superficially different analogs.',
      mechanisms: [
        {
          label: 'Surface Features vs Structural Relations',
          description: 'Surface features are the domain-specific nouns and visual dressings (armies, tumors, hoses, Kafka partitions). Structural relations are the mathematical and causal verbs (concentrating diffuse forces simultaneously at a target). Human retrieval is dominated by surface match unless actively de-coupled.',
        },
        {
          label: 'The Failure of Spontaneous Analogical Transfer',
          description: 'In Gick & Holyoak’s (1980) baseline study, reading the story of the general capturing the fortress only yielded a 20% solution rate on Duncker’s radiation problem without an explicit hint. Reading one story does not extract the abstract schema; it simply stores a story about a general.',
        },
        {
          label: 'The Schema Induction Rule (Gick & Holyoak, 1983)',
          description: 'When participants read TWO structurally identical stories from different domains (e.g. the general and the fire chief) and were prompted to write down how they were fundamentally similar, spontaneous solution rates jumped to over 80%. Comparison forces the prefrontal cortex to discard surface differences and encode the invariant structural core.',
        },
      ],
      keyInsight: 'Never teach or study a conceptual principle with only one example. One example is an anecdote; two contrasting examples create an abstract schema.',
      simplifiedModelCaveat: 'Presenting two examples is not enough on its own; learners must be explicitly prompted to map and describe the structural commonalities, otherwise they process both as separate, isolated stories.',
    },
    {
      id: 'gentner-analogical-encoding-comparison',
      title: 'Dedre Gentner (2003): Analogical Encoding & Mutual Alignment',
      tagline: 'Structure-mapping: how aligning two cases simultaneously highlights relational invariants',
      statusLabel: 'Cognitive Psychology & Structural Alignment Landmark (2001–2009)',
      scientificStatus: 'empirical-consensus',
      summary: 'Dedre Gentner and colleagues established the principle of "Analogical Encoding": the explicit cognitive process of comparing two examples that share structural relations. Unlike sequential study, mutual alignment forces the mind to align corresponding parts, illuminating the underlying causal system and shielding the memory trace against surface interference.',
      mechanisms: [
        {
          label: 'Mutual Alignment of Relational Roles',
          description: 'When two cases are compared side-by-side, the cognitive system executes structural alignment: corresponding roles are paired (General $\\leftrightarrow$ Fire Chief; Fortress $\\leftrightarrow$ Burning Oil Well; Roads $\\leftrightarrow$ Water Pipes). This highlights the relational system [Diffuse inputs converge simultaneously].',
        },
        {
          label: 'De-Situating Knowledge from Context',
          description: 'Surface features that do not match across both examples are automatically filtered out as irrelevant noise. The core schema is "de-situated"—liberated from physical context—allowing it to be indexed in long-term memory under abstract relational cues rather than concrete nouns.',
        },
        {
          label: 'Empirical Negotiation Studies (Gentner, Loewenstein & Thompson)',
          description: 'Business executives who studied two negotiation cases sequentially transferred contingent contracts to real negotiations only 25% of the time. Executives who compared the two cases simultaneously in a structured analogical exercise achieved over 70% transfer in live simulated deals.',
        },
      ],
      keyInsight: 'Side-by-side comparison is a cognitive x-ray. It strips away the superficial flesh of context and exposes the load-bearing skeletal architecture of the idea.',
      simplifiedModelCaveat: 'Analogical comparison requires that both examples are understood; if a learner does not comprehend the base example, analogical alignment induces confusion and negative transfer.',
    },
    {
      id: 'bransford-schwartz-pfl-framework',
      title: 'Bransford & Schwartz (1999): Preparation for Future Learning (PFL)',
      tagline: 'Rethinking transfer: from direct application (Sequestration) to generative adaptability (PFL)',
      statusLabel: 'Educational Philosophy & Learning Science Milestone',
      scientificStatus: 'empirical-consensus',
      summary: 'John Bransford and Daniel Schwartz revolutionized transfer research by challenging the traditional "Direct Application" (Sequestration) paradigm. Traditional tests measure whether a student can solve an isolated problem in a vacuum without resources. Bransford & Schwartz showed that true Far Transfer is "Preparation for Future Learning" (PFL)—the ability to learn rapidly, ask calibrated questions, and adapt when presented with novel resources and feedback in an unfamiliar domain.',
      mechanisms: [
        {
          label: 'Direct Application (DA) vs Preparation for Future Learning (PFL)',
          description: 'DA asks: "Can you perform this skill right now with no help in a new room?" (A narrow view of transfer). PFL asks: "Does your prior learning enable you to understand new documentation, interpret feedback, and learn a novel system 3x faster than a novice?"',
        },
        {
          label: 'Contrasting Cases as Perceptual Lenses',
          description: 'Bransford & Schwartz demonstrated that exploring contrasting cases primes students to notice fine-grained distinctions and boundary conditions in subsequent canonical resources, accelerating second-order transfer.',
        },
        {
          label: 'Generative Adaptability in Complex Knowledge Work',
          description: 'In modern engineering, medicine, and research, professionals never operate in sequestered vacuums; they have access to documentation, compilers, and mentors. PFL transforms transfer into an active learning engine rather than a static memory playback.',
        },
      ],
      keyInsight: 'The highest test of learning is not whether you can recite an answer in a vacuum, but how fast you can master a brand new system because your prior schemas primed you for it.',
      simplifiedModelCaveat: 'PFL does not justify unstructured wandering; it requires initial structured exploration of contrasting boundary conditions followed by rigorous resource engagement.',
    },
  ],
  diagram: {
    title: 'The Analogical Schema Induction & Far Transfer Engine',
    subtitle: 'From dual-case mutual alignment and surface noise stripping to decontextualized schema execution',
    stages: [
      {
        id: 'stage-case-presentation-alignment',
        name: 'Stage 1: Multi-Case Mutual Alignment',
        subtitle: 'Simultaneous Side-by-Side Ingestion of Diverse Analogs',
        capacity: 'High relational working memory alignment',
        duration: 'Initial comparison session',
        role: 'Two superficially divergent cases (Domain A and Domain B) sharing identical causal relations are presented simultaneously for structural alignment.',
        failureMode: 'Studying cases sequentially in isolation causes learners to store them as disconnected factual anecdotes.',
        evidenceType: 'Analogical encoding research (Gentner, 2003; Kurtz et al., 2001)',
        practicalFix: 'Present contrasting examples side-by-side with explicit structural mapping prompts.',
      },
      {
        id: 'stage-surface-noise-filtering',
        name: 'Stage 2: Surface Noise Filtering',
        subtitle: 'Decoupling Principles from Domain-Specific Nouns',
        capacity: 'Active prefrontal feature suppression',
        duration: 'Relational extraction phase',
        role: 'Differences in vocabulary, physical setting, and industry trivia cancel out, isolating the pure relational verbs and causal dependencies.',
        failureMode: 'Learner latches onto superficial similarities (e.g. both cases involve water) rather than causal mechanics.',
        evidenceType: 'Structure-mapping theory & relational shift (Gentner, 1983; Gick & Holyoak, 1983)',
        practicalFix: 'Ask: "What causal mechanism in Case 1 plays the exact same functional role in Case 2?"',
      },
      {
        id: 'stage-abstract-schema-induction',
        name: 'Stage 3: Abstract Schema Induction',
        subtitle: 'Formulation of Decontextualized Invariant Rules',
        capacity: 'Long-term semantic schema compilation',
        duration: 'Schema crystallization phase',
        role: 'The cognitive system crystallizes an abstract, generalized schema that exists independently of either source domain.',
        failureMode: 'Failing to give the abstract schema a name or verbal summary, leaving the trace fragile and unindexed.',
        evidenceType: 'Schema induction mechanics (Gick & Holyoak, 1983; Anderson ACT-R)',
        practicalFix: 'Formulate a 1-sentence abstract law using zero domain-specific jargon.',
      },
      {
        id: 'stage-far-transfer-execution',
        name: 'Stage 4: Far Transfer & Generative Adaptation (PFL)',
        subtitle: 'Immediate Recognition of Structural Invariants in Novel Domain',
        capacity: 'Fluid cross-domain pattern matching',
        duration: 'Lifelong problem-solving execution',
        role: 'When confronted with a foreign domain (Domain C), the abstract schema immediately matches the deep causal structure, driving rapid solution generation.',
        failureMode: 'None: The learner adapts, learns the novel domain’s documentation rapidly, and executes transfer.',
        evidenceType: 'Preparation for future learning (Bransford & Schwartz, 1999)',
        practicalFix: 'Test your abstract schema against a third, completely unrelated industry or scientific system.',
      },
    ],
    feedbackLoopDescription: 'Aligning contrasting analogs strips surface clutter; this induces an abstract relational schema, which enables spontaneous far transfer and rapid adaptation in uncharted territory (PFL).',
  },
  exercise: {
    title: 'Far Transfer & Analogical Schema Induction Diagnostic Lab',
    instruction: 'Analyze 4 enterprise, educational, and medical training challenges. Diagnose whether the transfer failure or success stems from Single-Domain Entrenchment (Surface feature blindness), Unaligned Sequential Study (Missing mutual comparison), Successful Analogical Schema Induction (Dual-case structural alignment), or Preparation for Future Learning (Generative adaptability), and prescribe the evidence-grounded fix.',
    categories: [
      {
        id: 'attention-bottleneck',
        title: 'Single-Domain Entrenchment (Surface Feature Trap)',
        description: 'Learner deeply studied a principle in only one domain, binding it to surface jargon and failing to transfer to novel contexts.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'working-memory-overload',
        title: 'Unaligned Sequential Study (Missed Comparison)',
        description: 'Learner studied multiple examples sequentially as separate stories without side-by-side structural alignment, failing to induce a schema.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Successful Analogical Schema Induction (Mutual Alignment)',
        description: 'Learner compared two superficially distinct analogs side-by-side, extracted deep structural invariants, and transferred spontaneously.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Preparation for Future Learning (PFL Adaptability)',
        description: 'Prior contrasting exploration primed the learner to interpret novel resources, documentation, and feedback 3x faster than peers.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-fintech-circuit-breaker-failure',
        realWorldContext: 'High-Frequency Trading & Resilient Cloud Infrastructure',
        scenario: 'A senior backend engineer reads an entire 400-page book on electrical engineering circuit breakers. Two months later, during a major microservices outage where an external payment gateway latency spikes, the engineer never considers implementing software circuit breakers in the HTTP client library, allowing the thread pool to deadlock.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'This is Single-Domain Entrenchment (Gick & Holyoak, 1980). The engineer encoded "circuit breakers" strictly as physical bimetallic electrical switches. Because the payment outage presented as JSON API timeouts and HTTP 504 errors, their memory system failed to recognize the shared structural need for an automated tripping mechanism to prevent cascading burnouts.',
        evidenceBasedFix: 'Practice multi-domain analogical comparison: pair electrical circuit breakers with software timeouts and retail store crowd-control barriers; explicitly extract the shared invariant: "When downstream latency exceeds threshold, temporarily sever connection to preserve upstream survival."',
      },
      {
        id: 'scen-mba-sequential-case-study-fumble',
        realWorldContext: 'Business School Executive Strategy Course',
        scenario: 'MBA students read a case study on Netflix pivoting from DVDs to streaming on Monday. On Wednesday, they read a case study on Toyota adopting hybrid electric manufacturing. On Friday’s exam, they are asked how a legacy healthcare diagnostic company should respond to AI pathology algorithms. Over 75% of students give generic platitudes and fail to apply the strategic cannibalization principles demonstrated in both cases.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'This is Unaligned Sequential Study (Gentner, Loewenstein & Thompson, 2003). Presenting cases sequentially separated by days causes working memory to encode them as distinct narrative history lessons. Without simultaneous side-by-side comparison, students never aligned the structural roles (legacy profit center vs disruptive technology).',
        evidenceBasedFix: 'Use Gentner’s Analogical Encoding: present the Netflix and Toyota cases on the exact same page; task students with creating a comparative 2-column matrix mapping how both companies deliberately cannibalized core revenue streams to preempt obsolescence.',
      },
      {
        id: 'scen-epidemiology-to-cybersecurity-breakthrough',
        realWorldContext: 'Cybersecurity Incident Response & Threat Hunting',
        scenario: 'A malware analyst who previously worked as a public health epidemiologist analyzes a novel polymorphic computer worm infecting an enterprise network. By mapping viral $R_0$ reproduction rates, quarantine bubble perimeters, and herd immunity thresholds onto computer subnets, she designs an automated dynamic VLAN isolation protocol that halts the infection in 12 minutes.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'This is Successful Analogical Schema Induction (Gick & Holyoak, 1983; Gentner, 2003). The analyst possessed a decontextualized contagion schema [Agent Transmission Vector $\\rightarrow$ Incubation Window $\\rightarrow$ Susceptible Node $\\rightarrow$ Interrupted Network Edge]. She transferred the relational structure effortlessly across radically disparate domains.',
        evidenceBasedFix: 'Institutionalize cross-disciplinary analogical modeling workshops: encourage threat modeling teams to cross-train on immunological and forest-fire propagation dynamics.',
      },
      {
        id: 'scen-physics-contrasting-simulation-speed',
        realWorldContext: 'Undergraduate Mechanical Engineering Lab',
        scenario: 'Students spend 2 hours exploring interactive simulations comparing how heat flows through copper rods versus insulated ceramic pipes before attending a lecture on thermodynamics. When subsequently assigned an unfamiliar research paper on solar thermal battery storage, these students absorb the material, ask deeply perceptive questions about thermal resistance, and troubleshoot the experimental apparatus twice as fast as students who received the lecture first.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'This is Preparation for Future Learning (Bransford & Schwartz, 1999). Exploring contrasting cases beforehand sensitized students’ perceptual receptors to critical structural dimensions (thermal conductivity, gradient differentials). When given novel resources, they learned with vastly accelerated velocity.',
        evidenceBasedFix: 'Structure laboratory courses around Bransford & Schwartz PFL cycles: use exploratory contrasting challenges before formal lectures to prime generative adaptability.',
      },
    ],
  },
  quiz: {
    title: 'Chapter 16.2 Mastery Assessment: Conditions for Far Transfer',
    instruction: 'Demonstrate deep comprehension of Gick & Holyoak’s schema induction, Gentner’s analogical encoding, and Bransford & Schwartz’s Preparation for Future Learning (PFL) framework.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-gick-holyoak-schema-induction-condition',
        question: 'In Mary Gick and Keith Holyoak’s (1983) landmark studies on Duncker’s radiation problem, what specific intervention caused spontaneous solution rates to jump from ~20% to over 80%?',
        options: [
          {
            id: 'q1-a',
            text: 'Paying participants a substantial monetary bonus for each correct answer.',
          },
          {
            id: 'q1-b',
            text: 'Having participants read TWO structurally identical stories from different domains and explicitly prompting them to articulate their underlying similarity.',
          },
          {
            id: 'q1-c',
            text: 'Giving participants a 4-hour lecture on advanced surgical radiation oncology.',
          },
          {
            id: 'q1-d',
            text: 'Placing participants under severe time pressure to force subconscious intuition.',
          },
        ],
        correctOptionId: 'q1-b',
        explanation: 'Gick & Holyoak (1983) proved that reading two superficially distinct analogs and comparing their common structural properties enables schema induction, freeing the relational principle from domain-specific surface noise and driving spontaneous transfer past 80%.',
        pedagogicalRationale: 'Validates understanding of Gick & Holyoak’s dual-analogy schema induction effect.',
        evidenceNote: 'Gick, M. L., & Holyoak, K. J. (1983). Schema induction and analogical transfer. Cognitive Psychology, 15(1), 1-38.',
      },
      {
        id: 'q2-gentner-analogical-encoding-mechanism',
        question: 'What cognitive mechanism explains why Dedre Gentner’s "Analogical Encoding" (mutual alignment) is vastly superior to studying examples sequentially?',
        options: [
          {
            id: 'q2-a',
            text: 'Side-by-side comparison forces working memory to align corresponding relational roles, filtering out non-matching surface features and exposing the invariant structural core.',
          },
          {
            id: 'q2-b',
            text: 'Reading two things at once activates the left and right hemispheres of the brain simultaneously.',
          },
          {
            id: 'q2-c',
            text: 'Comparing examples is easier and requires less mental effort than reading one example deeply.',
          },
          {
            id: 'q2-d',
            text: 'Sequential study causes retroactive memory deletion of all previous cases.',
          },
        ],
        correctOptionId: 'q2-a',
        explanation: 'Gentner (2003) showed that simultaneous structural alignment highlights relational commonalities while canceling out superficial, non-matching surface trivia, creating a decontextualized schema.',
        pedagogicalRationale: 'Reinforces the mechanics of structural alignment versus sequential processing.',
        evidenceNote: 'Gentner, D., Loewenstein, J., & Thompson, L. (2003). Learning and transfer: A general role for analogical encoding. Journal of Educational Psychology, 95(2), 393-408.',
      },
      {
        id: 'q3-bransford-schwartz-pfl-concept',
        question: 'How does John Bransford and Daniel Schwartz’s (1999) "Preparation for Future Learning" (PFL) framework fundamentally redefine the definition of successful educational transfer?',
        options: [
          {
            id: 'q3-a',
            text: 'It defines transfer as the ability to pass multiple-choice exams without looking at reference books.',
          },
          {
            id: 'q3-b',
            text: 'It shifts the metric from direct sequestered execution in a vacuum to the generative capacity to learn, adapt, and master novel tools rapidly when resources and feedback are available.',
          },
          {
            id: 'q3-c',
            text: 'It claims that children can learn without any instruction if given access to the internet.',
          },
          {
            id: 'q3-d',
            text: 'It states that future learning is completely unpredictable and cannot be prepared for.',
          },
        ],
        correctOptionId: 'q3-b',
        explanation: 'Bransford & Schwartz (1999) argued that traditional "Direct Application" assessments sequester learners from resources, missing the true power of transfer: prior learning primes cognitive structures so you can learn new systems, read technical specs, and interpret feedback with exceptional speed.',
        pedagogicalRationale: 'Clarifies the profound difference between sequestered direct performance and adaptive preparation for future learning.',
        evidenceNote: 'Bransford, J. D., & Schwartz, D. L. (1999). Rethinking transfer: A simple proposal with multiple implications. Review of Research in Education, 24(1), 61-100.',
      },
      {
        id: 'q4-surface-vs-structural-transfer-obstacle',
        question: 'Why do novices consistently fail to transfer principles across domains even when they have demonstrated 100% recall of the principle in a classroom test?',
        options: [
          {
            id: 'q4-a',
            text: 'Because novices lack the genetic dopamine receptors necessary for memory recall under novel stimuli.',
          },
          {
            id: 'q4-b',
            text: 'Because human memory retrieval in novel contexts is cued primarily by superficial surface features (nouns, visual cues), which do not match the new domain unless the principle was explicitly decontextualized.',
          },
          {
            id: 'q4-c',
            text: 'Because classroom tests secretly teach inverted logic that confuses real-world applications.',
          },
          {
            id: 'q4-d',
            text: 'Because memory decays to zero within 48 hours unless reviewed daily.',
          },
        ],
        correctOptionId: 'q4-b',
        explanation: 'Barnett & Ceci (2002) and Chi et al. (1981) demonstrated that novices index memory traces by surface nouns (e.g. "inclined planes", "stomach tumors"). Without abstract schema induction, the cognitive system never detects that the novel domain possesses the exact same structural mechanics.',
        pedagogicalRationale: 'Identifies the root psychological mechanism behind transfer failure: surface-cue dependency.',
        evidenceNote: 'Chi, M. T., Feltovich, P. J., & Glaser, R. (1981). Categorization and representation of physics problems by experts and novices. Cognitive Science, 5(2), 121-152.',
      },
    ],
  },
  practicalTask: {
    title: 'The Multi-Context Schema Induction & Decontextualization Protocol',
    summary: 'A 3-step practical protocol applying Gick & Holyoak’s schema induction and Gentner’s analogical alignment to decontextualize your core technical concepts and engineer bulletproof far transfer.',
    steps: [
      {
        id: 'step-select-core-principle-dual-analogs',
        number: 1,
        title: 'Select a Core Technical Principle and Generate Two Contrasting Analogs',
        prompt: 'Choose a core technical principle, architectural pattern, or scientific law you need to master. Instead of studying one example, find or construct two structurally identical examples from radically different domains (e.g., software engineering and biology, or finance and mechanics):',
        placeholder: 'e.g., Core Principle: Negative Feedback Flow Control (Rate Limiting). Analog 1 (Cloud Software): Token Bucket API rate limiting that buffers requests in Redis and drops overflow with HTTP 429. Analog 2 (Human Physiology): Blood glucose homeostasis where the pancreas secretes insulin when sugar spikes, signaling cells to absorb glucose until levels normalize...',
        example: 'Principle: Sharding & Partitioning. Analog 1 (Database): Hash sharding across 16 PostgreSQL nodes. Analog 2 (Postal Delivery): Sorting mail into geographical zip code regional sorting hubs.',
        cognitiveRationale: 'Studying two divergent analogs forces structural alignment and breaks surface feature entrapment (Gick & Holyoak, 1983).',
      },
      {
        id: 'step-execute-mutual-alignment-matrix',
        number: 2,
        title: 'Execute Mutual Structural Alignment (Stripping the Surface Nouns)',
        prompt: 'Create a comparative mapping matrix between the two analogs. Identify: (1) The Shared Goal, (2) The Shared Threat/Constraint, (3) The Relational Mechanism, and (4) The Non-Matching Surface Features that must be ignored:',
        placeholder: 'e.g., Shared Goal: Prevent resource collapse under surge load. Shared Threat: Demand rate exceeds processing capacity. Relational Mechanism: Dynamic admission gating with negative feedback loop based on state saturation metrics. Surface Noise to Discard: Redis code, HTTP headers, blood vessels, hormones, insulin molecules...',
        example: 'Alignment Matrix: (1) Goal: Scale throughput linearly. (2) Threat: Single-node I/O bottlenecks. (3) Mechanism: Deterministic key-space hashing to independent execution shards. (4) Surface Noise: SQL tables vs paper letters and mail trucks.',
        cognitiveRationale: 'Side-by-side mutual alignment discards surface trivia as non-matching noise, crystallizing the pure relational schema (Gentner, 2003).',
      },
      {
        id: 'step-formulate-jargon-free-law-and-far-transfer',
        number: 3,
        title: 'Formulate an Abstract, Jargon-Free Law and Test on a Third Domain',
        prompt: 'Write a 1-sentence abstract law explaining the relational invariant using zero industry jargon. Then, immediately apply this abstract schema to solve a problem in a third, completely unrelated field (Far Transfer execution):',
        placeholder: 'e.g., Abstract Law: "When an incoming flow exceeds absorption capacity, placing a metering gate with a state-sensitive drain valve prevents downstream collapse." Far Transfer Application (Domain 3 - Urban Civil Engineering): Use this exact law to design crowd-surge safety turnstiles at Olympic subway stations during event egress...',
        example: 'Abstract Law: "Partitioning an unmanageable stream into independent deterministic subsets parallelizes work without global locks." Far Transfer: Designing hospital emergency room triage sorting streams for pandemic intake.',
        cognitiveRationale: 'Formulating a de-situated verbal law and mapping it to a third domain completes schema induction, unlocking lifelong far transfer and preparation for future learning (Bransford & Schwartz, 1999).',
      },
    ],
  },
};
