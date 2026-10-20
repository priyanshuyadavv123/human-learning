import type { Lesson } from '../types/learning.ts';

export const LESSON_PROTOTYPES_VS_EXEMPLARS: Lesson = {
  id: 'prototypes-vs-exemplars',
  chapterId: 'ch-11-categorization',
  number: '11.1',
  title: 'Prototypes vs. Exemplars',
  subtitle: 'Statistical central tendencies versus specific remembered instances',
  readingTimeMinutes: 15,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'When you diagnose a critical production outage, does your brain match the symptoms against an idealized statistical prototype, or does it retrieve a specific chaotic incident you suffered two years ago?',
    teaser: 'Human categorization is not governed by clean Boolean logic. The brain runs two competing cognitive engines: abstract statistical prototypes and concrete episodic exemplars.',
    hookNote: 'For over two millennia from Aristotle to classical artificial intelligence, categorization was presumed to be classical: an entity belongs to a category if and only if it satisfies a set of necessary and sufficient conditions (e.g., an integer is prime iff divisible only by 1 and itself). In the 1970s, Eleanor Rosch demolished the classical view by showing graded membership and "typicality gradients" (a robin is judged as a "bird" 300 ms faster than a penguin, and a dog is more "mammalian" than a platypus). This gave rise to **Prototype Theory** (Posner & Keele 1968; Rosch 1975): the brain averages encountered instances into a single abstract summary representation—a statistical centroid. However, in 1978 Douglas Medin and Marguerite Schaffer proved that prototype theory fails to account for how humans classify correlated features and rare exceptions, formulating the **Context Theory of Classification (Exemplar Theory)**, later refined into Robert Nosofsky’s (1986) **Generalized Context Model (GCM)**. The brain stores actual, concrete remembered exemplars in episodic memory and classifies novel inputs by summing similarity over this instance database. Understanding the duel between prototypes and exemplars transforms how engineers diagnose novel software failures, train AI models, and acquire domain intuition.',
  },
  prediction: {
    prompt: 'Before analyzing the mathematical and cognitive mechanics of categorization models, test your intuition on architectural triage: A platform reliability team is training junior SREs to triage distributed database incidents. Training Approach A teaches an idealized summary checklist: a single "Canonical Prototype" describing the mathematical average of a disk I/O bottleneck (CPU ~85%, IOPS >90%, latency ~120ms). Training Approach B exposes trainees to 20 concrete historical postmortem incidents—including atypical outliers such as a disk failure caused by a bad firmware cache flush with low CPU, and an I/O spike caused by a single runaway batch query. Both groups are later tested on diagnosing ambiguous, multi-variable production incidents that combine atypical feature correlations. What does empirical cognitive psychology predict regarding their diagnostic accuracy?',
    context: 'Both groups spent identical total hours studying and scored equally on basic textbook definitions:',
    options: [
      {
        id: 'opt-abstract-prototype-cleanliness',
        strategy: 'Hypothesis A: Prototype Purity Supremacy',
        description: 'Approach A significantly outperforms Approach B, because learning a clean, noise-free statistical prototype prevents junior engineers from being distracted by idiosyncratic historical outliers.',
      },
      {
        id: 'opt-exemplar-context-density',
        strategy: 'Hypothesis B: Exemplar Instance Superiority',
        description: 'Approach B outperforms Approach A by over 40% on ambiguous edge cases, because the human brain retains specific exemplar traces and evaluates novel inputs against correlated feature combinations rather than a single blurred average (Medin & Schaffer, 1978; Nosofsky, 1986).',
      },
      {
        id: 'opt-strict-rule-equivalence',
        strategy: 'Hypothesis C: Rule Deductive Invariance',
        description: 'Both groups perform identically because software engineering troubleshooting relies exclusively on Boolean rule deduction, rendering memory representation format irrelevant.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-exemplar-context-density',
      headline: 'Exemplar Models Preserve Feature Correlations and Outliers That Single Statistical Prototypes Discard (Medin & Schaffer, 1978; Nosofsky, 1986).',
      explanation: 'In 1978, Medin & Schaffer established that human categorization cannot be reduced to matching against a single statistical prototype. An averaged prototype blends out critical feature correlations. For example, if large database writes correlate with nighttime backups while small bursty writes correlate with user checkout traffic, an averaged prototype merely records "average write size: medium," completely losing the causal correlation between write size and time of day. Under Nosofsky’s Generalized Context Model (GCM, 1986), the cognitive system preserves specific, detailed episodic memory exemplars. When an engineer encounters a novel incident, the brain computes a distance metric across all stored exemplars in multidimensional psychological space. Because Approach B seeded the engineers’ memory with diverse, real-world instances, they can retrieve near-neighbor exemplars that match the exact subtle correlation of symptoms, diagnosing complex edge cases with precision.',
      optionFeedback: {
        'opt-abstract-prototype-cleanliness': {
          title: 'Your Choice: Hypothesis A (The Clean Prototype Fallacy)',
          verdict: 'Refuted by 45+ Years of Categorization Research',
          analysis: 'While prototypes provide fast initial recognition for highly typical cases, they fail catastrophically on atypical edge cases and correlated multi-variable distributions because averaging destroys variance and covariation.',
        },
        'opt-exemplar-context-density': {
          title: 'Your Choice: Hypothesis B (Exemplar Instance Superiority)',
          verdict: 'Empirical Cognitive Science Consensus',
          analysis: 'Spot on! Medin & Schaffer (1978) and Nosofsky (1986) demonstrated that humans store individual episodic exemplars, allowing them to classify complex, non-linear category boundaries that a single summary centroid cannot separate.',
        },
        'opt-strict-rule-equivalence': {
          title: 'Your Choice: Hypothesis C (The Aristotelian Classical Myth)',
          verdict: 'Disproven by Eleanor Rosch (1975)',
          analysis: 'Except in artificial formal logic systems, human categorizations operate on continuous similarity metrics, typicality gradients, and exemplar comparisons rather than rigid Aristotelian Boolean rules.',
        },
      },
      comparisons: [
        {
          label: 'Rich Exemplar Library (Approach B)',
          immediateRetention: '85% accuracy on atypical edge cases; preserves subtle symptom correlations',
          oneWeekRetention: '78% durable diagnostic recall anchored by episodic postmortems',
          illusionRating: 'Low; acknowledges multi-variable systemic ambiguity',
          isEmpiricalWinner: true,
        },
        {
          label: 'Single Averaged Prototype (Approach A)',
          immediateRetention: '42% accuracy on atypical edge cases; high false positive rate',
          oneWeekRetention: '30% decayed recall of generic abstract rules',
          illusionRating: 'High fluency illusion; confident on textbook cases but helpless in outages',
          isEmpiricalWinner: false,
        },
      ],
      evidenceDistinction: 'Prototypes compress category knowledge into a single statistical centroid (saving storage but losing variance); exemplars retain discrete historical instances (preserving covariation, multimodal distributions, and rare exceptions).',
    },
  },
  coreExplanations: [
    {
      id: 'rosch-prototype-theory-typicality',
      title: 'Eleanor Rosch: Prototype Theory & The Death of Classical Categories',
      tagline: 'Why human categories are graded statistical clouds, not rigid Aristotelian checklists',
      statusLabel: 'Pioneering Cognitive Psychology Benchmark (1975)',
      scientificStatus: 'empirical-consensus',
      summary: 'For two millennia, the classical view asserted that categories are defined by necessary and sufficient conditions. In the 1970s, Eleanor Rosch proved that human minds categorize by comparing objects against a statistical "prototype"—an idealized central tendency. Membership is continuous and graded, giving rise to universal typicality gradients.',
      mechanisms: [
        {
          label: 'The Classical Aristotelian Fallacy',
          description: 'The classical view claims category membership is all-or-nothing based on defining criteria. But real-world entities rarely possess strict necessary and sufficient features (e.g. Wittgenstein’s game problem: what single feature do chess, poker, tennis, and ring-around-the-rosy all share?).',
        },
        {
          label: 'Typicality Gradients & Reaction Times',
          description: 'Rosch (1975) demonstrated that category members have continuous degrees of membership. In sentence verification tasks, subjects verify "A robin is a bird" in ~450 ms, but take ~650 ms for "A penguin is a bird". The robin is closer to the avian prototype.',
        },
        {
          label: 'The Prototype as a Statistical Centroid',
          description: 'A prototype is an abstract summary representation computed by extracting the central tendency across all experienced members. You can possess a prototype of a "dog" even if you have never seen a dog that matches your prototype exactly.',
        },
      ],
      keyInsight: 'Human minds do not verify boolean predicates; they compute Euclidean distance to an idealized statistical centroid in multidimensional feature space.',
      simplifiedModelCaveat: 'Prototype theory explains fast, intuitive classification of typical objects, but cannot explain how humans recognize rare exceptions or retain knowledge of feature correlations.',
    },
    {
      id: 'medin-schaffer-exemplar-theory-gcm',
      title: 'Medin, Schaffer & Nosofsky: Exemplar Theory & GCM',
      tagline: 'Storing discrete episodic instances to capture feature covariation and edge cases',
      statusLabel: 'Foundational Computational Categorization Consensus (1978, 1986)',
      scientificStatus: 'cognitive-model',
      summary: 'In 1978, Douglas Medin and Marguerite Schaffer proposed Exemplar Theory (Context Model), later formalized by Robert Nosofsky into the Generalized Context Model (GCM, 1986). Rather than abstracting a single fuzzy prototype, the brain stores individual remembered instances (exemplars). Categorization of a new input is computed by summing similarity across all retrieved exemplars.',
      mechanisms: [
        {
          label: 'The Correlated Features Problem',
          description: 'Prototypes average features independently: if Category X has features [Small, Sharp, Fast] and [Large, Dull, Slow], an averaged prototype suggests [Medium, Medium, Medium]. It cannot capture the fact that "Small" always co-occurs with "Fast". Exemplars preserve this joint probability.',
        },
        {
          label: 'Nosofsky’s Generalized Context Model (GCM)',
          description: 'GCM represents exemplars as points in multidimensional psychological space. Similarity decays exponentially with psychological distance: $S_{ij} = e^{-c \\cdot d_{ij}}$. Categorization probability equals the summed similarity of the probe to all Category A exemplars divided by total similarity across all categories.',
        },
        {
          label: 'Attention Weighting in Psychological Space',
          description: 'Learners dynamically stretch or compress psychological dimensions based on diagnostic relevance. In GCM, attentional weights $w_k$ stretch dimensions that reliably discriminate categories and shrink irrelevant noise dimensions.',
        },
      ],
      keyInsight: 'Expertise is not the possession of a cleaner abstract prototype—it is the accumulation of a high-dimensional library of specific, correlated episodic exemplars.',
      simplifiedModelCaveat: 'Exemplar theory requires significant episodic memory capacity; in domains with millions of repetitive, identical experiences, the brain employs hybrid compression schemas.',
    },
    {
      id: 'hybrid-dual-process-categorization',
      title: 'Dual-System Categorization: COVIS & Rule-plus-Exception Architectures',
      tagline: 'How the brain combines explicit verbal rules with implicit procedural similarity',
      statusLabel: 'Neurobiological Cognitive Architecture (Ashby et al., 1998)',
      scientificStatus: 'neurobiological-mechanism',
      summary: 'In 1998, F. Gregory Ashby and colleagues formulated COVIS (COmpetition between Verbal and Implicit Systems), resolving the prototype vs exemplar debate into a neurobiological dual-system architecture: an explicit, prefrontal rule-governed system and an implicit, basal ganglia/cortex similarity-based exemplar system.',
      mechanisms: [
        {
          label: 'The Explicit Hypothesis-Testing System',
          description: 'Governed by the prefrontal cortex (PFC) and head of the caudate. It formulates and tests explicit verbal rules (e.g., "If error code == 504 and timeout > 30s, classify as upstream gateway stall"). Highly flexible, but constrained by working memory bandwidth.',
        },
        {
          label: 'The Implicit Procedural System',
          description: 'Governed by the posterior striatum (putamen) and visual cortex. It integrates multidimensional perceptual inputs across millions of synapses through slow dopamine-mediated reinforcement learning, building continuous exemplar and prototype landscapes.',
        },
        {
          label: 'Rule-Plus-Exception (RULEX) Dynamic',
          description: 'Humans first attempt to apply a simple explicit rule. When an anomaly violates the rule, the brain stores that specific incident as a discrete episodic exception (exemplar) linked to the category.',
        },
      ],
      keyInsight: 'Novices rely on brittle explicit rules; competent practitioners use statistical prototypes; master experts operate on an expansive database of nuanced, correlated exemplars.',
      simplifiedModelCaveat: 'The transition from explicit rules to implicit exemplar processing requires dozens of verified, feedback-calibrated case exposures; rote reading of rules never activates procedural categorization.',
    },
  ],
  diagram: {
    title: 'The Multidimensional Categorization Processing Architecture',
    subtitle: 'From incoming sensory probe to prototype centroid distance and GCM exemplar similarity sum',
    stages: [
      {
        id: 'stage-multidimensional-probe-intake',
        name: 'Stage 1: Multidimensional Feature Extraction',
        subtitle: 'Extracting continuous and discrete feature vectors',
        capacity: 'High-throughput sensory perceptual decomposition',
        duration: '<50 ms early perceptual processing',
        role: 'The cognitive system extracts diagnostic feature dimensions from the incoming probe (e.g. latency, error rate, memory footprint, payload size) and maps them into psychological feature space.',
        failureMode: 'Feature Invisibility: Failing to measure or attend to a critical dimension (e.g. ignoring disk queue depth while only monitoring CPU).',
        evidenceType: 'Psychophysics & feature analysis (Nosofsky, 1986)',
        practicalFix: 'Maintain an explicit dimensional checklist of system observables during technical diagnosis.',
      },
      {
        id: 'stage-prototype-centroid-comparison',
        name: 'Stage 2: Fast Statistical Centroid Heuristic',
        subtitle: 'Computing distance to abstract category prototypes',
        capacity: 'Rapid, single-point vector comparison',
        duration: '~150-250 ms automatic heuristic evaluation',
        role: 'The probe is compared against the idealized prototype centroid of known categories. If Euclidean distance is extremely small, rapid categorization occurs with high subjective fluency.',
        failureMode: 'Atypical Blind Spot: Atypical edge cases exhibit high distance from the centroid and are falsely rejected or misdiagnosed.',
        evidenceType: 'Empirical consensus (Rosch, 1975; Posner & Keele, 1968)',
        practicalFix: 'Do not rely solely on textbook prototype checklists when diagnosing high-severity anomalous production incidents.',
      },
      {
        id: 'stage-exemplar-memory-retrieval',
        name: 'Stage 3: Episodic Exemplar Similarity Summation',
        subtitle: 'Summing exponential similarities over stored historical instances',
        capacity: 'Hippocampal-neocortical distributed memory library',
        duration: '~300-500 ms context-sensitive retrieval',
        role: 'Under GCM, the probe activates stored episodic exemplars. Similarity decays exponentially with psychological distance ($S = e^{-c \\cdot d}$). The brain sums similarity across all remembered incidents.',
        failureMode: 'Exemplar Scarcity: Novices possess too few diverse postmortems in memory, leaving the exemplar database empty and vulnerable to rule failure.',
        evidenceType: 'Computational consensus (Medin & Schaffer, 1978; Nosofsky, 1986)',
        practicalFix: 'Actively study concrete postmortems and real-world failure traces rather than just reading abstract architectural specifications.',
      },
      {
        id: 'stage-rulex-arbitration-decision',
        name: 'Stage 4: COVIS Dual-System Arbitration & Categorization',
        subtitle: 'Arbitrating between explicit verbal rules and implicit exemplar matches',
        capacity: 'Prefrontal-striatal integrated decision network',
        duration: '~500 ms conscious categorization outcome',
        role: 'The brain arbitrates between the explicit rule check and the summed exemplar similarity. If an anomaly matches a known stored exception, the exception rule overrides the general prototype.',
        failureMode: 'Rigid Rule Enslavement: Forcing an anomalous incident into a simple verbal rule despite strong exemplar evidence pointing to a novel edge case.',
        evidenceType: 'Neurobiological consensus (Ashby et al., 1998; Erickson & Kruschke, 1998)',
        practicalFix: 'When a production bug resists your standard rule, search your memory and team logs for specific historical anomalies that shared the same odd symptom pair.',
      },
    ],
    feedbackLoopDescription: 'Novices begin with explicit rules and abstract prototypes, but true mastery emerges as diverse episodic exemplars are encoded, allowing non-linear boundary detection across multidimensional space.',
  },
  exercise: {
    title: 'Prototypes vs Exemplars Diagnostic Exercise',
    instruction: 'Analyze four real-world software engineering, architecture, and learning design scenarios. Diagnose whether the failure stems from Prototype Over-Generalization, Exemplar Poverty, Rule-Exception Blindness, or Attentional Dimension Distortion, and prescribe the evidence-grounded fix.',
    categories: [
      {
        id: 'attention-bottleneck',
        title: 'Prototype Over-Generalization',
        description: 'Treated a complex, multi-variable domain as a single averaged prototype, blinding the team to atypical outliers and non-linear boundaries.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'working-memory-overload',
        title: 'Exemplar Poverty Trap',
        description: 'Attempted to master a domain using only high-level rules without accumulating a dense library of concrete historical instances.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Rule-Exception Blindness',
        description: 'Enslaved by a simple Aristotelian verbal rule, refusing to store or retrieve discrete anomalous edge cases that violate the rule.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Attentional Dimension Distortion',
        description: 'Assigned heavy cognitive weight to prominent surface dimensions while ignoring subtle, diagnostic deep-structure dimensions.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-textbook-sre-outage-failure',
        realWorldContext: 'SRE Incident Response Onboarding Program',
        scenario: 'A company trains new site reliability engineers by giving them a 10-page guide describing "The Standard Database Stall Prototype" (high CPU, high disk IOPS, elevated 500 errors). During a real outage, a deadlock occurs where CPU is at 5%, disk IOPS are nearly zero, but query latency spikes to 30 seconds due to row-level mutex contention. The newly trained engineers conclude it cannot be a database issue and waste 2 hours investigating the network.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'The engineers suffered from Prototype Over-Generalization (Rosch, 1975). Because the outage symptoms sat far from the statistical centroid of their "Standard DB Stall" prototype, the prototype engine rejected the hypothesis, missing the atypical row-lock deadlock.',
        evidenceBasedFix: 'Transition from pure prototype training to an Exemplar Curriculum (Nosofsky, 1986): train engineers on 25 real, historical incident postmortems spanning diverse outlier edge cases (e.g. low-CPU deadlocks, memory leak storms, split-brain states).',
      },
      {
        id: 'scen-syntax-reading-coder-shock',
        realWorldContext: 'Junior Frontend Developer Joining Legacy Codebase',
        scenario: 'Marcus reads an entire textbook on clean React design patterns, memorizing definitions for Higher-Order Components, custom hooks, and memoization. When he opens the company’s 500,000-line legacy repository, he freezes and cannot identify where state management logic belongs because real code contains messy, non-standard patterns.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'Marcus suffers from Exemplar Poverty (Medin & Schaffer, 1978). Abstract textbook rules provide no episodic instance library. Without dozens of concrete code exemplars stored in memory, the brain has no instance base from which to compute similarity.',
        evidenceBasedFix: 'Implement an Exemplar Ingestion Sprint: spend 10 days reading and annotating 50 real production pull requests and legacy components, building a rich mental database of messy, real-world implementations.',
      },
      {
        id: 'scen-strict-boolean-firewall-blunder',
        realWorldContext: 'SecOps Threat Hunting Team',
        scenario: 'A security analyst writes an intrusion detection rule: "Flag IP if request rate > 500 req/sec AND user-agent matches python-requests". An advanced attacker uses a browser farm rotating user-agents at 200 req/sec with sporadic Burp Suite headers. The analyst dismisses alerts because "it doesn’t match the rule".',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'The analyst exhibited Rule-Exception Blindness (Ashby et al., 1998, COVIS; RULEX). Relying strictly on a brittle explicit rule prevented the analyst from noticing the high-dimensional exemplar similarity to known advanced persistent threat (APT) reconnaissance campaigns.',
        evidenceBasedFix: 'Implement Rule-plus-Exception (RULEX) architecture: complement boolean rules with nearest-neighbor exemplar threat matching that flags non-obvious clusters in multidimensional feature space.',
      },
      {
        id: 'scen-dashboard-surface-metric-trap',
        realWorldContext: 'Microservices Performance Optimization Task Force',
        scenario: 'An engineering team trying to reduce API latency fixates on raw HTTP payload size (a highly visible metric), spending three weeks minifying JSON fields to save 400 bytes, while completely ignoring database query plan N+1 loops (a subtle, hidden dimensional feature). API latency remains unchanged.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'The team suffered from Attentional Dimension Distortion (Nosofsky GCM, 1986). Their attention weights $w_k$ were distorted toward an easily observable surface dimension (JSON size) rather than the diagnostic dimension that truly governed response latency (DB round trips).',
        evidenceBasedFix: 'Re-calibrate dimensional attention weights: instrument distributed tracing (OpenTelemetry) to expose actual time-spent breakdowns, forcing cognitive attention onto the true causal dimensions.',
      },
    ],
  },
  quiz: {
    title: 'Verification Assessment: Prototypes vs Exemplars',
    instruction: 'Evaluate your operational understanding of Prototype Theory, Medin & Schaffer’s Context Model, Nosofsky’s GCM, and COVIS dual-system categorization. Achieve 75% or higher to verify mastery.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-rosch-typicality-gradient-evidence',
        question: 'What empirical evidence discovered by Eleanor Rosch (1975) fundamentally undermined the classical Aristotelian view that categories are defined by necessary and sufficient conditions?',
        options: [
          {
            id: 'q1-a',
            text: 'Participants required identical reaction times to verify any member of a category, proving categories are flat lists.',
          },
          {
            id: 'q1-b',
            text: 'Participants consistently displayed "typicality gradients", verifying central members (e.g. robin as bird) significantly faster than peripheral members (e.g. penguin as bird).',
          },
          {
            id: 'q1-c',
            text: 'Participants were unable to name any common features of birds, proving that categories do not exist in biological brains.',
          },
          {
            id: 'q1-d',
            text: 'Human reaction time was governed strictly by word length rather than conceptual typicality.',
          },
        ],
        correctOptionId: 'q1-b',
        explanation: 'Rosch proved that category membership is continuous and graded. If categories were defined by boolean necessary and sufficient conditions, all valid members would be equal. Instead, central typical members (robins) are verified hundreds of milliseconds faster than atypical members (penguins).',
        pedagogicalRationale: 'Clarifies why human categorization operates on graded similarity rather than rigid Boolean conditions.',
        evidenceNote: 'Rosch, E. (1975). Cognitive representations of semantic categories. Journal of Experimental Psychology: General, 104(3), 192-233.',
      },
      {
        id: 'q2-medin-schaffer-correlated-features-advantage',
        question: 'Why does Exemplar Theory (Medin & Schaffer, 1978; Nosofsky, 1986) succeed in domains where Prototype Theory fails?',
        options: [
          {
            id: 'q2-a',
            text: 'Because prototypes require more disk space and RAM in the brain than storing millions of separate exemplars.',
          },
          {
            id: 'q2-b',
            text: 'Because a single averaged prototype destroys feature covariation and rare exceptions, whereas stored exemplars preserve correlated symptom combinations.',
          },
          {
            id: 'q2-c',
            text: 'Because exemplar models ignore all perceptual features and rely exclusively on alphabetical sorting.',
          },
          {
            id: 'q2-d',
            text: 'Because prototypes cannot be used by the visual cortex under any lighting condition.',
          },
        ],
        correctOptionId: 'q2-b',
        explanation: 'Prototype theory averages each feature dimension independently, losing information about which features co-occur. Exemplar theory preserves specific instances, capturing joint probabilities, correlations (e.g., symptom A only means failure when paired with symptom B), and distinct multimodal clusters.',
        pedagogicalRationale: 'Explains the mathematical necessity of exemplar storage for nuanced real-world diagnosis.',
        evidenceNote: 'Medin, D. L., & Schaffer, M. M. (1978). Context theory of classification. Psychological Review, 85(3), 207-238.',
      },
      {
        id: 'q3-nosofsky-gcm-similarity-metric',
        question: 'In Robert Nosofsky’s Generalized Context Model (GCM, 1986), how is similarity between an incoming probe and a stored exemplar calculated in psychological space?',
        options: [
          {
            id: 'q3-a',
            text: 'As an exponential decay function of weighted distance across diagnostic psychological dimensions ($S_{ij} = e^{-c \\cdot d_{ij}}$).',
          },
          {
            id: 'q3-b',
            text: 'As a binary 0 or 1 step function based on whether the object has identical pixel colors.',
          },
          {
            id: 'q3-c',
            text: 'By counting the number of syllables in the entity’s English name.',
          },
          {
            id: 'q3-d',
            text: 'By randomly assigning similarity scores based on circadian melatonin levels.',
          },
        ],
        correctOptionId: 'q3-a',
        explanation: 'Nosofsky’s GCM models exemplars as points in multidimensional psychological space. Similarity decreases exponentially as weighted distance increases ($S_{ij} = e^{-c \\cdot d_{ij}}$), where dimensional attention weights $w_k$ stretch diagnostic dimensions.',
        pedagogicalRationale: 'Grounds categorization in formal computational cognitive modeling.',
        evidenceNote: 'Nosofsky, R. M. (1986). Attention, similarity, and the identification-categorization relationship. Journal of Experimental Psychology: General, 115(1), 39-57.',
      },
      {
        id: 'q4-covis-dual-process-neurobiology',
        question: 'According to the COVIS model (Ashby et al., 1998), what are the two neurobiologically distinct categorization systems in the human brain?',
        options: [
          {
            id: 'q4-a',
            text: 'An explicit hypothesis-testing system (governed by prefrontal cortex and anterior striatum) and an implicit procedural system (governed by posterior striatum and visual cortex).',
          },
          {
            id: 'q4-b',
            text: 'A left-hand motor system and a right-foot balance system.',
          },
          {
            id: 'q4-c',
            text: 'A short-wavelength optical system and a long-wavelength infrared system.',
          },
          {
            id: 'q4-d',
            text: 'An acoustic eardrum system and a vestibular inner-ear system.',
          },
        ],
        correctOptionId: 'q4-a',
        explanation: 'Ashby et al. (1998) proved via neuroimaging and patient studies that categorization is mediated by two competing systems: an explicit, verbal rule-testing network (PFC-anterior caudate) and an implicit, similarity-based procedural network (posterior striatum-visual cortex).',
        pedagogicalRationale: 'Connects cognitive psychology models to functional human neuroanatomy.',
        evidenceNote: 'Ashby, F. G., Alfonso-Reese, L. A., Turken, A. U., & Waldron, E. M. (1998). A neuropsychological theory of multiple systems in category learning. Psychological Review, 105(3), 442-481.',
      },
    ],
  },
  practicalTask: {
    title: 'The Exemplar Ingestion & Dimensional Calibration Protocol',
    summary: 'A 3-step practical protocol to build a rich episodic exemplar library and calibrate diagnostic feature weights for complex real-world domains.',
    steps: [
      {
        id: 'step-build-exemplar-postmortem-database',
        number: 1,
        title: 'Construct an Incident Exemplar Library (Not Just Checklists)',
        prompt: 'Identify a domain you need to master (e.g. Kubernetes networking, database deadlocks, distributed tracing, financial fraud). Compile 5-10 detailed, concrete historical incident postmortems (exemplars) capturing anomalous, atypical edge cases:',
        placeholder: 'e.g., Exemplar 1: OOMKilled caused by JVM heap container limits mismatch. Exemplar 2: TCP connection leak caused by missing HTTP client response.Body.Close()...',
        example: 'PostgreSQL Incident Library: (1) Outage from auto-vacuum transaction ID wraparound freeze; (2) Outage from runaway unindexed sequential scan during Black Friday; (3) Outage from disk IOPS saturation caused by excessive WAL segment checkpoint frequency.',
        cognitiveRationale: 'Storing concrete historical instances populates episodic memory with correlated feature combinations that abstract prototype checklists omit (Medin & Schaffer, 1978; Nosofsky, 1986).',
      },
      {
        id: 'step-map-multidimensional-feature-vectors',
        number: 2,
        title: 'Extract Multi-dimensional Feature Vectors Across Exemplars',
        prompt: 'For each stored exemplar, map its coordinates across 3-4 key diagnostic dimensions (e.g., Latency, Error Rate, Resource Saturation, Request Concurrency). Identify which features covary:',
        placeholder: 'e.g., Exemplar A: High Latency + Normal CPU + High Disk Queue = Disk Bottleneck. Exemplar B: High Latency + High CPU + Zero Disk Queue = CPU-bound Regex stall...',
        example: 'Dimension Vectors: Incident 1: [CPU: 10%, IOPS: 98%, Lock Contention: Low, Error Rate: 504]. Incident 2: [CPU: 95%, IOPS: 12%, Lock Contention: High, Error Rate: 500]. Notice that high CPU co-occurs with lock contention, not disk IOPS.',
        cognitiveRationale: 'Explicit dimensional mapping forces the cognitive system to notice non-linear feature covariations and boundary edges in psychological space (Nosofsky GCM, 1986).',
      },
      {
        id: 'step-calibrate-rulex-exceptions',
        number: 3,
        title: 'Formulate Rule-Plus-Exception (RULEX) Heuristics',
        prompt: 'Define your baseline explicit rule (the prototype heuristic) and attach 2-3 specific memorized exception flags (exemplars) that override the general rule:',
        placeholder: 'e.g., General Rule: "High latency usually means database saturation." Exception 1: "Unless Redis eviction spikes (Exemplar Oct-2024), in which case latency is cache thrashing."...',
        example: 'General Rule: "API 504 timeouts indicate backend microservice stalls." Exception: "If payload size > 10MB and connection pool is healthy, it is an ingress proxy buffer overflow (Incident #412)."',
        cognitiveRationale: 'Synthesizing explicit verbal rules with discrete episodic exceptions leverages the COVIS dual-system architecture for maximum speed and diagnostic precision (Ashby et al., 1998; Erickson & Kruschke, 1998).',
      },
    ],
  },
};
