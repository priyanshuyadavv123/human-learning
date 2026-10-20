import type { Lesson } from '../types/learning.ts';

export const LESSON_BOUNDARY_CASES_ISOLATION: Lesson = {
  id: 'boundary-cases-isolation',
  chapterId: 'ch-11-categorization',
  number: '11.2',
  title: 'Feature Isolation & Boundary Testing',
  subtitle: 'Stress-testing mental models on edge cases and ambiguous inputs',
  readingTimeMinutes: 16,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'Why does testing a software model or medical diagnosis against 100 typical cases teach you almost nothing, while analyzing a single ambiguous borderline case instantly reveals your blind spots?',
    teaser: 'Category boundaries are not discovered in the comfortable interior of a concept. True mental model calibration happens exclusively at the turbulent decision boundary.',
    hookNote: 'In 1960, cognitive psychologist Peter Wason published his famous 2-4-6 hypothesis testing task, uncovering **Confirmation Bias**: when humans form a mental rule, they exclusively test positive instances that confirm their rule, systematically failing to test negative or boundary cases that could falsify it. Decades later in machine learning and support vector machines (Cortes & Vapnik, 1995), mathematicians formalized this exact cognitive truth: the optimal classification hyperplane is determined entirely by the **Support Vectors**—the difficult, ambiguous data points lying directly on the decision boundary. All interior points carry zero diagnostic weight. In human cognitive science, John R. Anderson’s ACT-R rational analysis and Ashby’s boundary-learning experiments showed that learners only refine multidimensional category boundaries when forced to discriminate "near-misses" (Patrick Winston, 1970). In this lesson, we explore how feature isolation, near-miss boundary testing, and adversarial falsification transform fragile intuitions into indestructible mental models.',
  },
  prediction: {
    prompt: 'Before analyzing the mathematical mechanics of decision boundaries, test your intuition on diagnostic boundary training: Two groups of backend engineers are learning how to detect and classify complex distributed race conditions (e.g., Dirty Reads, Non-Repeatable Reads, Phantom Reads, and Write Skew under various ANSI SQL isolation levels). Group A practices on 50 standard, textbook examples where the concurrency anomalies are obvious and unambiguous. Group B practices on only 15 examples, but every example is a subtle "near-miss boundary case"—an edge case that looks almost identical to Write Skew but is actually Serializable due to predicate locks, or looks like a simple timeout but is an ambiguous distributed snapshot isolation conflict. Both groups are later tested on diagnosing 20 novel, complex production race conditions. What does empirical cognitive psychology predict?',
    context: 'Both groups spent identical total hours analyzing traces and scored equally on basic SQL definitions:',
    options: [
      {
        id: 'opt-typical-volume-mastery',
        strategy: 'Hypothesis A: High-Volume Typicality Superiority',
        description: 'Group A significantly outperforms Group B, because high exposure volume (50 cases vs 15) establishes stronger synaptic potentiation and statistical familiarity across common production patterns.',
      },
      {
        id: 'opt-boundary-near-miss-calibration',
        strategy: 'Hypothesis B: Boundary Near-Miss Calibration',
        description: 'Group B outperforms Group A by over 100% on novel edge cases, because boundary near-misses force the brain to isolate critical diagnostic feature dimensions, collapsing false category overlap (Winston, 1970; Vapnik, 1995).',
      },
      {
        id: 'opt-equal-distribution-invariance',
        strategy: 'Hypothesis C: Equal Practice Parity',
        description: 'Both groups perform identically because the underlying concurrency rules are identical regardless of whether training examples are interior prototypes or boundary edge cases.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-boundary-near-miss-calibration',
      headline: 'Decision Boundaries Are Calibrated Entirely by Borderline Support Vectors, Not Interior Prototypes (Winston, 1970; Cortes & Vapnik, 1995; Anderson, 1990).',
      explanation: 'In 1970, MIT AI pioneer Patrick Winston proved that machine and human learners cannot accurately induce conceptual boundaries from positive examples alone; they require "Near-Misses"—instances that differ from the target concept by exactly one critical feature dimension. When Group A studied 50 typical cases, all diagnostic features were aligned (e.g. high concurrency + dirty read). The brain had no incentive to isolate which specific dimension was causally necessary. In contrast, Group B encountered boundary cases where subtle dimensions were decoupled (e.g. high concurrency WITHOUT dirty read). Under Vapnik’s Support Vector principle (1995) and Anderson’s ACT-R feature-differentiation model (1990), interior points provide zero information for shifting the decision hyperplane. Only boundary cases generate the high prediction errors necessary to sharpen multidimensional category boundaries.',
      optionFeedback: {
        'opt-typical-volume-mastery': {
          title: 'Your Choice: Hypothesis A (The Volume Fallacy)',
          verdict: 'Refuted by 50+ Years of Category Learning Research',
          analysis: 'Practicing 50 obvious typical cases reinforces the interior centroid of a category without testing its edges. Learners develop an illusion of mastery that shatters on ambiguous edge cases.',
        },
        'opt-boundary-near-miss-calibration': {
          title: 'Your Choice: Hypothesis B (Boundary Near-Miss Calibration)',
          verdict: 'Empirical Cognitive Science Consensus',
          analysis: 'Exactly correct! Winston (1970), Vapnik (1995), and Anderson (1990) proved that diagnostic precision is forged at the decision boundary, where near-misses isolate critical causal features.',
        },
        'opt-equal-distribution-invariance': {
          title: 'Your Choice: Hypothesis C (The Theoretical Invariance Myth)',
          verdict: 'Disproven by Wason (1960) & Ashby (1998)',
          analysis: 'Human minds do not learn abstract mathematical bounds in a vacuum; without boundary conflict and negative feedback, mental models remain diffuse and over-generalized.',
        },
      },
      comparisons: [
        {
          label: 'Near-Miss Boundary Training (Group B)',
          immediateRetention: '88% accuracy on novel edge cases; precise isolation of critical race conditions',
          oneWeekRetention: '82% durable diagnostic transfer under production pressure',
          illusionRating: 'Low; learners know exactly where system guarantees break down',
          isEmpiricalWinner: true,
        },
        {
          label: 'High-Volume Typical Training (Group A)',
          immediateRetention: '38% accuracy on edge cases; high rate of false positive misdiagnosis',
          oneWeekRetention: '25% fragmented recall of generic SQL definitions',
          illusionRating: 'High fluency illusion; confident on textbook scenarios but fails in outages',
          isEmpiricalWinner: false,
        },
      ],
      evidenceDistinction: 'Interior prototypes define the central tendency of a concept (what is common); boundary cases define the hyperplane (what is necessary and sufficient to differentiate competing categories).',
    },
  },
  coreExplanations: [
    {
      id: 'wason-246-confirmation-falsification',
      title: 'Peter Wason: The 2-4-6 Task & The Asymmetry of Falsification',
      tagline: 'Why human minds cling to confirming instances and refuse to test boundaries',
      statusLabel: 'Pioneering Cognitive Bias Benchmark (1960)',
      scientificStatus: 'empirical-consensus',
      summary: 'In 1960, Peter Wason revealed a fundamental pathology in human reasoning: Confirmation Bias. When given the sequence "2-4-6" and asked to discover the underlying rule, participants generated triples like "8-10-12" or "20-22-24" (testing hypotheses like "numbers increasing by two"). Over 80% failed to discover the real rule ("any three ascending numbers") because they never tested a boundary triple (like "1-2-100" or "3-2-1") that could falsify their belief.',
      mechanisms: [
        {
          label: 'Positive Test Strategy (Klayman & Ha, 1987)',
          description: 'Humans naturally test hypotheses by generating inputs where they expect the property to be present. If your mental rule is "Write Skew only happens under Snapshot Isolation," you only audit Snapshot Isolation code, never testing whether Read Committed also allows anomalies.',
        },
        {
          label: 'The Epistemic Asymmetry of Falsification',
          description: 'A million confirming instances cannot prove a hypothesis true, but a single negative boundary instance proves it incomplete or false (Karl Popper, 1934). Only testing negative instances reveals the actual scope of a category.',
        },
        {
          label: 'Over-Constrained Mental Models',
          description: 'Because Wason’s subjects only tested triples matching their narrow hypothesis ("even numbers increasing by two"), they never discovered that the true category was vastly wider ("any ascending numbers"). Confirmation bias traps minds in overly specific or overly broad schemas.',
        },
      ],
      keyInsight: 'You do not truly understand a software pattern, diagnosis, or algorithm until you know the exact boundary conditions where it fails.',
      simplifiedModelCaveat: 'Falsification is effortful and counter-intuitive; the human brain requires explicit protocols and deliberate cognitive reframing to search for disconfirming boundary tests.',
    },
    {
      id: 'winston-near-misses-feature-isolation',
      title: 'Patrick Winston: Near-Miss Learning & Single-Feature Isolation',
      tagline: 'How comparing minimal pairs forces the brain to detect critical causal dimensions',
      statusLabel: 'Foundational Artificial Intelligence & Cognitive Ergonomics (1970)',
      scientificStatus: 'cognitive-model',
      summary: 'In his classic 1970 MIT doctoral dissertation on machine learning and structural induction, Patrick Winston proved that a learner can induce complex relational concepts (such as what constitutes an "Arch") far faster through "Near-Misses" than through hundreds of positive examples. A near-miss is an object that fails to qualify as a category member by exactly one critical feature.',
      mechanisms: [
        {
          label: 'The Mechanics of a Near-Miss',
          description: 'If you want a system to learn that an "Arch" requires a lintel supported by two non-touching posts, showing 20 arches with different colors and sizes does not teach the rule. Showing an arch where the two posts touch (a near-miss) instantly isolates the necessary feature: "Must-Not-Touch".',
        },
        {
          label: 'Minimal Pair Feature Isolation',
          description: 'By holding all dimensions constant except for one (a minimal pair), cognitive load is minimized. The prefrontal cortex does not need to analyze a combinatorial explosion of differences—the single altered dimension is highlighted as causal.',
        },
        {
          label: 'Elimination of Spurious Correlations',
          description: 'Near-misses eliminate superstitious rules. In system debugging, if Service A and Service B both fail, comparing a failing request to a succeeding request that differed by only one header immediately reveals the root cause.',
        },
      ],
      keyInsight: 'True conceptual mastery is not built by admiring correct examples; it is forged by analyzing minimal pairs that fall just over the boundary of failure.',
      simplifiedModelCaveat: 'Near-miss training requires carefully curated pairs; if a training case differs on multiple dimensions simultaneously, the learner suffers cognitive overload and cannot isolate the causal variable.',
    },
    {
      id: 'vapnik-support-vectors-margin-maximization',
      title: 'Vapnik’s Support Vectors & The Optimal Decision Margin',
      tagline: 'Why data points on the boundary carry 100% of the diagnostic information',
      statusLabel: 'Computational Learning Theory & Cognitive Geometry (1995)',
      scientificStatus: 'cognitive-model',
      summary: 'In 1995, Vladimir Vapnik and Corinna Cortes introduced Support Vector Machines (SVM). In computational geometry and high-dimensional cognitive classification, the boundary separating two categories is defined exclusively by the "Support Vectors"—the hardest, most ambiguous data points lying closest to the margin. Data points deep inside the category territory carry literally zero mathematical influence on the position of the decision boundary.',
      mechanisms: [
        {
          label: 'The Principle of Margin Maximization',
          description: 'An optimal classifier places the decision boundary equidistant from the closest borderline cases of Category A and Category B, maximizing the geometric margin to resist noise and uncertainty.',
        },
        {
          label: 'Zero Diagnostic Weight of Interior Points',
          description: 'Once an SVM identifies the support vectors, all interior points can be completely erased from memory without changing the boundary by a single millimeter. In human learning, studying yet another obvious textbook example provides zero new boundary information.',
        },
        {
          label: 'Adversarial Edge-Case Stress Testing',
          description: 'Just as machine learning models must be defended against adversarial perturbations along their decision boundary, human mental models must be stress-tested with adversarial boundary cases to prevent catastrophic brittleness in production.',
        },
      ],
      keyInsight: 'Interior examples build confidence; boundary support vectors build competence. To master a domain, intentionally hunt for the hardest borderline edge cases.',
      simplifiedModelCaveat: 'In human memory, interior exemplars are still useful for rapid prototype fluency; however, for diagnostic calibration and robustness, boundary cases are strictly superior.',
    },
  ],
  diagram: {
    title: 'The Decision Boundary & Support Vector Calibration Engine',
    subtitle: 'From uncalibrated interior assumptions to active near-miss falsification and margin maximization',
    stages: [
      {
        id: 'stage-uncalibrated-interior-assumption',
        name: 'Stage 1: Interior Prototype Assumption',
        subtitle: 'Collecting standard, positive textbook cases',
        capacity: 'High-volume superficial instance intake',
        duration: 'Initial exposure phase',
        role: 'The learner encounters typical instances (e.g. standard SQL queries, normal system operations). A loose mental prototype forms, but its boundaries remain undefined and vulnerable to misclassification.',
        failureMode: 'Fluency Illusion: Believing you understand a technology because textbook examples compile and pass happily.',
        evidenceType: 'Cognitive bias consensus (Wason, 1960; Rosch, 1975)',
        practicalFix: 'Do not stop studying once typical examples make sense; immediately seek edge cases.',
      },
      {
        id: 'stage-wason-confirmation-trap',
        name: 'Stage 2: The Wason Confirmation Trap',
        subtitle: 'Searching exclusively for confirming evidence',
        capacity: 'Prefrontal selective attention filter',
        duration: 'Persistent cognitive bias trap',
        role: 'The thinker generates tests designed to prove their existing theory (e.g., testing only code paths they expect to succeed). Anomalies are ignored or dismissed as flukes.',
        failureMode: 'Confirmation Blindness: Inability to detect production vulnerabilities because testing only mirrors happy-path assumptions.',
        evidenceType: 'Experimental reasoning benchmark (Wason, 1960; Klayman & Ha, 1987)',
        practicalFix: 'Adopt the "Falsification Protocol": write test cases designed specifically to break your hypothesis.',
      },
      {
        id: 'stage-near-miss-feature-isolation',
        name: 'Stage 3: Near-Miss Minimal Pair Differentiation',
        subtitle: 'Isolating the single diagnostic dimension',
        capacity: 'Working-memory focused pairwise comparison',
        duration: '<500 ms perceptual dimension contrast',
        role: 'The learner compares a successful case to a failure case that differs by only one critical parameter (Winston’s near-miss). The altered dimension is isolated as the causal variable.',
        failureMode: 'Combinatorial Confounding: Comparing cases with 5 differing variables, making causal attribution impossible.',
        evidenceType: 'Structural learning consensus (Winston, 1970)',
        practicalFix: 'Construct minimal pairs: change exactly one configuration flag or code line at a time when debugging.',
      },
      {
        id: 'stage-support-vector-margin-maximization',
        name: 'Stage 4: Support Vector Margin Maximization',
        subtitle: 'Establishing an indestructible decision boundary',
        capacity: 'High-dimensional psychological space calibration',
        duration: 'Permanent schema boundary stabilization',
        role: 'By identifying the hardest borderline support vectors, the brain locks in the optimal decision hyperplane. The mental model now cleanly separates valid from invalid inputs with maximum noise resistance.',
        failureMode: 'Over-Fitting to Noise: Treating a one-off hardware glitch as a fundamental systemic rule.',
        evidenceType: 'Computational geometry & cognitive modeling (Vapnik, 1995; Ashby, 1998)',
        practicalFix: 'Maintain an explicit "Borderline Cases Catalog" documenting where system guarantees strictly begin and end.',
      },
    ],
    feedbackLoopDescription: 'Boundary testing shifts the focus of learning from comfortable interior prototypes to informative support vectors, carving razor-sharp mental decision boundaries.',
  },
  exercise: {
    title: 'Feature Isolation & Boundary Testing Diagnostic Exercise',
    instruction: 'Analyze four real-world software engineering, architecture, and testing scenarios. Diagnose whether the failure stems from Wason Confirmation Bias, Spurious Multi-Variable Confounding, Interior Prototype Complacency, or Decision Margin Fragility, and prescribe the evidence-grounded fix.',
    categories: [
      {
        id: 'attention-bottleneck',
        title: 'Wason Confirmation Bias',
        description: 'Tested only confirming positive instances that matched happy-path hypotheses, failing to execute adversarial falsification tests.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'working-memory-overload',
        title: 'Spurious Multi-Variable Confounding',
        description: 'Compared failing and passing runs that differed across multiple simultaneous dimensions, obscuring the true causal mechanism.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Interior Prototype Complacency',
        description: 'Trained and tested exclusively on clean textbook cases, leaving engineers helpless when ambiguous borderline anomalies occurred.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Decision Margin Fragility',
        description: 'Drew brittle, arbitrary boundaries without identifying support vectors, causing system crashes on slight input perturbations.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-happy-path-qa-outage',
        realWorldContext: 'Fintech Payment Gateway QA Testing',
        scenario: 'A QA team writes 400 integration tests for a new payment processing engine. Every single test passes valid credit cards, valid currencies, and standard amounts under $100. In production, a user submits a transaction for $0.00 with a unicode currency symbol, triggering an unhandled division-by-zero database lockup.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'The QA team fell into Wason Confirmation Bias (Wason, 1960). They generated hundreds of tests conforming to their positive hypothesis ("how payments should work"), but zero negative boundary tests designed to falsify the state machine.',
        evidenceBasedFix: 'Implement an Adversarial Falsification Protocol: for every happy-path test, require three boundary tests (zero values, boundary overflows, malformed encodings).',
      },
      {
        id: 'scen-chaotic-debugging-confounding',
        realWorldContext: 'Distributed Microservices Latency Triage',
        scenario: 'An engineer trying to debug a mysterious 504 gateway timeout changes three settings simultaneously: upgrading the Redis client version, doubling the connection pool size, and switching the AWS instance type from c5.large to m5.large. The bug disappears, but the engineer has no idea which change fixed it.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'The engineer failed at Single-Feature Isolation (Winston, 1970). By altering three dimensions concurrently, they confounded the diagnostic space, learning nothing about the underlying causal mechanism.',
        evidenceBasedFix: 'Apply Winston’s Minimal Pair Rule: revert all three changes and apply them strictly one by one (isolate Redis version, test; isolate pool size, test; isolate instance type, test).',
      },
      {
        id: 'scen-toy-dataset-ml-crash',
        realWorldContext: 'Autonomous Vehicle Computer Vision Startup',
        scenario: 'An engineering team trains an obstacle classification model on 100,000 photos of sedans and SUVs driving in bright California sunshine. When tested in real traffic in Seattle during a sleet storm with a truck carrying oversized lumber, the vehicle misclassifies the truck as empty road.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'The team suffered from Interior Prototype Complacency (Vapnik, 1995). The training dataset was packed with redundant interior prototypes that provided zero boundary information, failing to expose the model to borderline support vectors.',
        evidenceBasedFix: 'Deploy Active Support Vector Ingestion: prioritize data collection specifically on ambiguous edge cases (adverse weather, weird cargo shapes, low contrast) to maximize boundary margin.',
      },
      {
        id: 'scen-arbitrary-timeout-threshold',
        realWorldContext: 'Microservice Circuit Breaker Configuration',
        scenario: 'A platform architect sets an arbitrary circuit breaker timeout threshold at 1000ms because "it sounds reasonable." In production, legitimate batch queries routinely take 1005ms during minor traffic spikes, tripping the breaker and causing cascading cluster collapse.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'The architect exhibited Decision Margin Fragility (Cortes & Vapnik, 1995). The boundary was set without empirical measurement of the borderline support vectors (the true tail latency distribution of legitimate requests), creating a razor-thin, unstable margin.',
        evidenceBasedFix: 'Perform Empirical Boundary Mapping: profile the exact p95, p99, and p99.9 latency distributions under load, placing the circuit breaker threshold at a statistically defensible margin beyond true support vectors.',
      },
    ],
  },
  quiz: {
    title: 'Verification Assessment: Feature Isolation & Boundary Testing',
    instruction: 'Evaluate your operational understanding of Wason’s confirmation bias, Winston’s near-miss learning, and Vapnik’s support vector boundaries. Achieve 75% or higher to verify mastery.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-wason-246-task-confirmation-bias',
        question: 'In Peter Wason’s (1960) famous 2-4-6 hypothesis testing experiment, why did over 80% of participants fail to discover the simple rule ("any ascending numbers") on their first attempt?',
        options: [
          {
            id: 'q1-a',
            text: 'Because participants lacked basic arithmetic skills and could not calculate intervals between numbers.',
          },
          {
            id: 'q1-b',
            text: 'Because participants exclusively generated positive test triples that matched their narrow hypothesis (e.g. "increasing by two"), never testing a triple that could falsify their belief.',
          },
          {
            id: 'q1-c',
            text: 'Because the experimenter deliberately gave false feedback on half the trials.',
          },
          {
            id: 'q1-d',
            text: 'Because the human brain can only represent numbers between 1 and 10.',
          },
        ],
        correctOptionId: 'q1-b',
        explanation: 'Wason discovered Confirmation Bias: humans instinctively test hypotheses by searching for confirming instances (Positive Test Strategy). Because participants never generated non-conforming triples (like 1-2-100 or 3-2-1), they never discovered that their hypothesis was overly narrow.',
        pedagogicalRationale: 'Demonstrates the universal cognitive trap of positive testing and the necessity of falsification.',
        evidenceNote: 'Wason, P. C. (1960). On the failure to eliminate hypotheses in a conceptual task. Quarterly Journal of Experimental Psychology, 12(3), 129-140.',
      },
      {
        id: 'q2-winston-near-miss-definition-power',
        question: 'According to Patrick Winston’s (1970) machine learning and cognitive theory, what defines a "Near-Miss" and why is it so diagnostically potent?',
        options: [
          {
            id: 'q2-a',
            text: 'A near-miss is a random guess made when an engineer is tired.',
          },
          {
            id: 'q2-b',
            text: 'A near-miss is a negative instance that differs from the target concept by exactly one critical feature dimension, immediately isolating that dimension as causally necessary.',
          },
          {
            id: 'q2-c',
            text: 'A near-miss is an example with zero features in common with the target concept.',
          },
          {
            id: 'q2-d',
            text: 'A near-miss is an optical illusion that tricks the retina into seeing non-existent colors.',
          },
        ],
        correctOptionId: 'q2-b',
        explanation: 'Winston proved that a near-miss is an example that fails to belong to a concept by exactly one feature. By holding all other variables constant (a minimal pair), the learner’s cognitive system immediately identifies that single altered feature as a mandatory constraint (e.g. "must-be-supported").',
        pedagogicalRationale: 'Teaches learners to design minimal-pair debugging experiments.',
        evidenceNote: 'Winston, P. H. (1970). Learning structural descriptions from examples. MIT AI Technical Report TR-231.',
      },
      {
        id: 'q3-vapnik-support-vectors-diagnostic-weight',
        question: 'In Vladimir Vapnik’s Support Vector Machine (SVM) theory (1995), why do data points located deep inside a category’s interior have zero diagnostic influence on the decision boundary?',
        options: [
          {
            id: 'q3-a',
            text: 'Because interior points are compressed into 16-bit floating point numbers to save memory.',
          },
          {
            id: 'q3-b',
            text: 'Because the position and angle of the optimal classification hyperplane are mathematically determined solely by the borderline support vectors closest to the margin.',
          },
          {
            id: 'q3-c',
            text: 'Because interior points represent sensor noise and are deleted by the operating system.',
          },
          {
            id: 'q3-d',
            text: 'Because only edge points contain electromagnetic charge.',
          },
        ],
        correctOptionId: 'q3-b',
        explanation: 'In SVM theory, the decision boundary is constrained exclusively by the support vectors lying on the margin. You could add or remove millions of interior points without moving the boundary by a single millimeter. Diagnostic learning happens at the margin.',
        pedagogicalRationale: 'Connects mathematical learning theory to human cognitive efficiency.',
        evidenceNote: 'Cortes, C., & Vapnik, V. (1995). Support-vector networks. Machine Learning, 20(3), 273-297.',
      },
      {
        id: 'q4-klayman-ha-positive-test-strategy',
        question: 'When is Klayman & Ha’s (1987) "Positive Test Strategy" most dangerous in software engineering and systems architecture?',
        options: [
          {
            id: 'q4-a',
            text: 'When the engineer is testing code on a laptop rather than a cloud server.',
          },
          {
            id: 'q4-b',
            text: 'When the real failure space is broader than the engineer’s assumed hypothesis, meaning testing only expected-to-work inputs never exposes catastrophic edge cases.',
          },
          {
            id: 'q4-c',
            text: 'When all unit tests are written in Python instead of C++.',
          },
          {
            id: 'q4-d',
            text: 'When the team uses a Kanban board instead of Scrum sprints.',
          },
        ],
        correctOptionId: 'q4-b',
        explanation: 'Klayman & Ha (1987) proved that positive testing is an effective heuristic only when hypotheses are broad. But when your mental model is over-constrained or misses hidden failure modes, positive testing guarantees you will never discover the blind spot until production crashes.',
        pedagogicalRationale: 'Explains why production outages occur despite 100% test coverage on happy paths.',
        evidenceNote: 'Klayman, J., & Ha, Y. W. (1987). Confirmation, disconfirmation, and information in hypothesis testing. Psychological Review, 94(2), 211-228.',
      },
    ],
  },
  practicalTask: {
    title: 'The Adversarial Near-Miss Boundary Testing Protocol',
    summary: 'A 3-step practical protocol to stress-test your mental models, APIs, and systems by constructing minimal-pair near-misses and falsification vectors.',
    steps: [
      {
        id: 'step-identify-happy-path-boundary',
        number: 1,
        title: 'Map the "Happy-Path" Assumption & State the Core Rule',
        prompt: 'Select a technical system, algorithm, or operational rule you rely on (e.g., "Postgres read replicas always return consistent data within 50ms", "JWT tokens are valid as long as signature matches", "Rate limiter permits 100 req/sec per user"). State the explicit rule:',
        placeholder: 'e.g., "Assumption: Cache-Aside pattern with Redis guarantees users never see stale account balances after an update."...',
        example: '"Rule: Our distributed queue delivers messages at least once, so downstream handlers will process every order." Note: This ignores duplicate delivery on network retry.',
        cognitiveRationale: 'Explicitly articulating your rule makes implicit assumptions vulnerable to systematic falsification (Wason, 1960).',
      },
      {
        id: 'step-construct-minimal-pair-near-miss',
        number: 2,
        title: 'Construct a Minimal-Pair Near-Miss (Change Exactly 1 Variable)',
        prompt: 'Create a minimal pair: construct a test case that is identical to a successful case in every way except for ONE critical dimension (e.g. network latency +500ms, clock skew +5s, duplicate message UUID, zero-byte payload):',
        placeholder: 'e.g., Request A (Passes): User A updates balance -> DB write -> Redis cache invalidate -> Next read fetches fresh balance from DB. Request B (Near-Miss): Identical sequence, BUT introduce a concurrent read occurring exactly 5ms BEFORE the cache invalidate completes...',
        example: 'Near-Miss Minimal Pair: Identical order payload submitted, but network drops the ACK packet. The client retries with the same idempotency key. Does the consumer process the charge twice?',
        cognitiveRationale: 'Changing exactly one feature isolates the causal boundary variable without confounding cognitive load (Winston, 1970).',
      },
      {
        id: 'step-maximize-support-vector-margin',
        number: 3,
        title: 'Lock In the Defensive Margin & Document Support Vectors',
        prompt: 'Run the boundary test. Where did the rule fail? Update your mental model and system code to handle the boundary case, and document the exact support vectors in your architecture notes:',
        placeholder: 'e.g., "Discovered: Cache-Aside fails under concurrent read-during-write. Updated Rule: Must use Redis transactional locking or write-through caching. Documented as Support Vector #12."...',
        example: '"Discovered: Idempotency table lacked a unique database constraint on idempotency_key, allowing concurrent duplicate charges. Fixed with database-level UNIQUE index. Margin locked."',
        cognitiveRationale: 'Documenting the boundary support vectors permanently recalibrates your mental model’s decision margin, turning fragile assumptions into robust expertise (Vapnik, 1995).',
      },
    ],
  },
};
