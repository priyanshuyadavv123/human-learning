import type { Lesson } from '../types/learning.ts';

export const LESSON_STRUCTURE_MAPPING_ANALOGY: Lesson = {
  id: 'structure-mapping-analogy',
  chapterId: 'ch-9-analogy-bridging',
  number: '9.1',
  title: 'Structure-Mapping & Analogical Transfer',
  subtitle: 'Ignoring surface features to bind relational deep structures',
  readingTimeMinutes: 16,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'Why do learners who read a textbook solution to a medical tumor problem fail 90% of the time to solve an identical military fortress problem, even when the underlying mathematical solution is identical?',
    teaser: 'Human minds naturally fixate on superficial domain decorations (rays vs soldiers, tumors vs fortresses). True creative insight and cross-domain mastery require Dedre Gentner’s "Structure-Mapping": stripping away superficial attributes to align deep relational systems.',
    hookNote: 'In 1980, Mary Gick and Keith Holyoak conducted one of the most famous experiments in cognitive psychology using Karl Duncker’s (1945) classic "Radiation Problem" (how to destroy an inoperable stomach tumor with high-intensity rays without destroying surrounding healthy tissue). When subjects read an analog story first—a general attacking a fortress by dividing a large army into small platoons converging simultaneously from multiple pathways—only 10% spontaneously noticed the analogy and applied the convergence solution to the tumor! However, when given a subtle prompt ("think about the general and the fortress"), over 80% immediately solved it. In 1983, Dedre Gentner formulated "Structure-Mapping Theory" (SMT), mathematically modeling how the human mind computes analogies: analogical reasoning is NOT about matching individual attributes (fortress does not resemble a tumor; soldiers do not resemble X-rays), but about establishing one-to-one correspondence between systems of relations governed by Systematicity (higher-order causal relations like CAUSE, IMPLIES, CONVERGE). When you learn to discard superficial domain glitter and project relational schemas, you transform inert domain-specific facts into portable mental models that transfer effortlessly across engineering, mathematics, business, and life.',
  },
  prediction: {
    prompt: 'Before analyzing the cognitive mechanics of analogical transfer, test your intuition on how people recognize analogous solutions across distinct domains: Two groups of software engineers are learning how to handle bursty distributed traffic. Group A reads a detailed case study explaining how Netflix handles video streaming surges using an elastic buffer queue and token bucket rate limiter. Group B reads the exact same Netflix case study, but alongside it, they also read a completely non-technical case study describing how the Panama Canal handles seasonal ship surges using locks, holding lakes, and scheduled convoy slots. Afterward, both groups are given a novel, highly complex production challenge: designing an emergency hospital triage system during a mass casualty incident. What does cognitive science predict for their ability to design a resilient queue-and-rate-limiting intake architecture?',
    context: 'Both groups spent the exact same total study time and demonstrated equal comprehension of the core queueing algorithms on a written test:',
    options: [
      {
        id: 'opt-technical-focus-superiority',
        strategy: 'Hypothesis A: Focused Domain Purity',
        description: 'Group A transfers the architectural pattern far better than Group B, because reading an irrelevant non-technical story about the Panama Canal introduced extraneous cognitive load and confused their technical mental model.',
      },
      {
        id: 'opt-analogical-schema-induction',
        strategy: 'Hypothesis B: Schema Induction via Analogical Encoding',
        description: 'Group B demonstrates dramatically superior transfer to the hospital triage challenge (nearly 3x higher success rate), because comparing two superficially disparate analogs forced their minds to abstract away domain surface features and isolate the deep relational schema (Gick & Holyoak, 1983; Gentner et al., 2003).',
      },
      {
        id: 'opt-uniform-transfer-failure',
        strategy: 'Hypothesis C: Universal Transfer Invariance',
        description: 'Neither group can transfer the pattern to hospital triage without an explicit direct prompt, because human transfer across non-software domains is biologically impossible regardless of instructional design.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-analogical-schema-induction',
      headline: 'Analogical Encoding via Dual-Source Comparison Induces Deep Relational Schemas that Multiply Far Transfer (Gick & Holyoak, 1983; Gentner et al., 2003).',
      explanation: 'When learners study a single example (Group A), their mental model remains inextricably welded to the superficial surface features of that specific domain (e.g. HTTP packets, video streams, cloud servers). When faced with an emergency room triage problem, their memory retrieval cues look for "servers and packets" and find no match. In contrast, Group B engaged in what Gentner, Loewenstein, and Thompson (2003) termed "Analogical Encoding": actively comparing two structurally identical but superficially disparate domains (Netflix traffic vs Panama Canal shipping) forced the cognitive system to align relational predicates and strip away surface attributes. This induced an abstract schema ("elastic buffer + controlled metering of finite downstream capacity"), which was easily retrieved and applied to the hospital setting.',
      optionFeedback: {
        'opt-technical-focus-superiority': {
          title: 'Your Choice: Hypothesis A (The Single Domain Myth)',
          verdict: 'Refuted by 40+ Years of Transfer Research',
          analysis: 'Studying a single technical example results in "inert knowledge" bound to domain keywords (Gick & Holyoak, 1980). Learners cannot retrieve the schema in a novel setting because surface cues do not match.',
        },
        'opt-analogical-schema-induction': {
          title: 'Your Choice: Hypothesis B (Analogical Encoding & Relational Abstraction)',
          verdict: 'Empirical Cognitive Science Consensus',
          analysis: 'Accurate! Gentner et al. (2003) and Gick & Holyoak (1983) proved that comparing two analogs with distinct surface features induces a generalized relational schema, raising spontaneous far transfer from 10%–20% to over 60%–70%.',
        },
        'opt-uniform-transfer-failure': {
          title: 'Your Choice: Hypothesis C (The Absolute Transfer Impossibility Myth)',
          verdict: 'Overly Pessimistic Intuition',
          analysis: 'While spontaneous transfer from a single instance is notoriously poor (~10%), analogical comparison and structural alignment reliably unlock robust spontaneous transfer across disparate domains.',
        },
      },
      comparisons: [
        {
          label: 'Single Technical Example (Group A)',
          immediateRetention: 'High in-domain recall; <15% spontaneous transfer to non-software domains',
          oneWeekRetention: 'Low transfer; domain-bound retention',
          illusionRating: 'High fluency illusion within familiar domain',
          isEmpiricalWinner: false,
        },
        {
          label: 'Dual Diverse Analog Comparison (Group B)',
          immediateRetention: 'High in-domain recall; >60% spontaneous transfer to novel problem domains',
          oneWeekRetention: 'Durable abstract schema retention',
          illusionRating: 'Calibrated across disparate domains',
          isEmpiricalWinner: true,
        },
        {
          label: 'Abstract Principle Alone (No Analog Examples)',
          immediateRetention: 'Moderate theoretical recall; <25% application without concrete grounding',
          oneWeekRetention: 'Rapid decay of ungrounded abstractions',
          illusionRating: 'Passive recognition trap',
          isEmpiricalWinner: false,
        },
      ],
      evidenceDistinction: 'Surface-feature similarity governs automatic spontaneous retrieval in novice memory, but relational structure alignment governs productive analogical inference, structural deduction, and cross-domain innovation.',
    },
  },
  coreExplanations: [
    {
      id: 'gentner-structure-mapping-systematicity',
      title: 'Dedre Gentner: Structure-Mapping Theory & The Systematicity Principle',
      tagline: 'Analogies map systems of relational predicates, not superficial object attributes',
      summary: 'Dedre Gentner’s (1983, 1989) Structure-Mapping Theory (SMT) provides the formal computational and psychological framework for analogical cognition. An analogy is an assertion that a relational structure that holds in a base domain also holds in a target domain, independent of the individual object attributes of either domain. Crucially, Gentner’s Systematicity Principle dictates that the human cognitive system naturally prefers mappings that are part of a deeply interconnected, causal relational system over isolated, arbitrary predicate matches.',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Formal Cognitive Architecture Consensus',
      mechanisms: [
        {
          label: 'Relational Predicates vs Object Attributes',
          description: 'Object attributes describe intrinsic properties of single entities (e.g. Sun is yellow, hot, massive; Nucleus is microscopic, dense, positive). Relational predicates describe interactions between multiple entities (e.g. REVOLVES_AROUND(Planet, Sun); ATTRACTS(Nucleus, Electron)). Analogy preserves relations while discarding attributes.',
        },
        {
          label: 'One-to-One Mapping & Structural Consistency',
          description: 'A valid structural analogy requires rigorous bijective mapping: each element in the base must map to at most one element in the target, and mapped relational predicates must share the same argument structures (Structural Consistency).',
        },
        {
          label: 'The Systematicity Principle',
          description: 'People do not value random collections of identical relations. Analogy preferentially selects higher-order relations that bind lower-order relations into explanatory causal networks (e.g. CAUSE[GREATER_MASS(Sun, Planet), REVOLVES_AROUND(Planet, Sun)]).',
        },
      ],
      keyInsight: 'A great analogy does not ask "What does this object look like?" It asks "What relational calculus governs how these entities interact?"',
      simplifiedModelCaveat: 'While structure-mapping abstracts away superficial attributes, extreme dissimilarities in perceptual presentation can still disrupt novice retrieval even when the underlying relational graphs are mathematically identical.',
    },
    {
      id: 'gick-holyoak-convergence-analogical-transfer',
      title: 'Gick & Holyoak: The Radiation Problem & Spontaneous Transfer Failure',
      tagline: 'Why human minds miss obvious analogies—and how schema induction unlocks transfer',
      summary: 'Mary Gick and Keith Holyoak (1980, 1983) investigated why analogical problem-solving is so difficult to trigger spontaneously. In their landmark experiments with Duncker’s Radiation Problem, reading an analogous fortress military story produced almost no spontaneous transfer without an explicit hint. Gick and Holyoak discovered the missing cognitive bridge: "Schema Induction." When learners compare multiple analogous stories, their cognitive architecture strips away domain-specific incidentals and builds an abstract "convergence schema," enabling effortless spontaneous transfer to novel problems.',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Foundational Problem Solving Consensus',
      mechanisms: [
        {
          label: 'The Retrieval vs Mapping Dissociation',
          description: 'Cognitive failure in analogical transfer almost never occurs during mapping or execution; it occurs during initial retrieval. Because working memory retrieves long-term memories via superficial surface cues, a medical problem fails to activate a military story in the absence of explicit relational cues.',
        },
        {
          label: 'The Convergence Schema',
          description: 'Gick and Holyoak showed that comparing two isomorphic convergence stories (e.g. a fortress general and an oil fire extinguished by converging water hoses) creates an explicit abstract schema: Goal (central target), Constraint (full force cannot pass through any single channel), Solution (divide force into weak streams converging simultaneously).',
        },
        {
          label: 'The Power of the Metacognitive Hint',
          description: 'A simple prompt ("Can any story you read earlier help you solve this?") increased solution rates from 10% to over 80%, proving that the solution was fully represented in long-term memory but remained inert due to surface-bound retrieval gating.',
        },
      ],
      keyInsight: 'Learners do not suffer from an inability to understand analogies; they suffer from surface-bound retrieval locks that prevent them from accessing analogies when they need them most.',
      simplifiedModelCaveat: 'Providing a direct hint demonstrates that knowledge is present, but true educational mastery requires training learners to spontaneously recognize structural isomorphisms without external prompts.',
    },
    {
      id: 'analogical-encoding-gentner-comparison',
      title: 'Analogical Encoding: Mutual Alignment & Relational Schema Induction',
      tagline: 'Comparing two examples is exponentially more powerful than studying them sequentially',
      summary: 'Dedre Gentner, Jeffrey Loewenstein, and Leigh Thompson (2003, 2004) proved that how examples are processed in working memory determines whether they become inert or transferable. Studying example A followed by example B sequentially leaves learners focused on domain-specific details. In contrast, "Analogical Encoding"—placing two examples side-by-side and asking learners "In what ways are these two situations structurally alike?"—triggers mutual alignment. Mutual alignment highlights common relational structures and renders surface mismatches irrelevant.',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Educational Psychology Consensus',
      mechanisms: [
        {
          label: 'Mutual Alignment Processing',
          description: 'When two cases are juxtaposed, working memory projects candidate inferences across them. Mismatched surface details (e.g. ships in water vs packets in cables) cancel out, while shared relational predicates (e.g. buffer pools, flow throttling) are mutually reinforced.',
        },
        {
          label: 'Contrastive Comparison against Antagonists',
          description: 'Comparing a positive analog with a near-miss negative example (where the same surface features exist but the underlying relational mechanism is different) sharply demarcates the boundary conditions of the schema.',
        },
        {
          label: 'Executable Relational Vocabulary',
          description: 'Naming the extracted relational schema with a precise conceptual label (e.g. "Contingent Contract", "Circuit Breaker", "Convergence Pattern") creates a symbolic retrieval anchor that stabilizes the schema in long-term memory for future retrieval.',
        },
      ],
      keyInsight: 'Never study an important concept in isolation. Always pair it with an analog from a completely different domain and force your brain to find their shared mathematical or relational spine.',
      simplifiedModelCaveat: 'Analogical encoding requires active cognitive effort; simply displaying two examples side-by-side without an explicit prompt to compare structural commonalities results in superficial scanning.',
    },
  ],
  diagram: {
    title: 'Structure-Mapping & Analogical Transfer Engine',
    subtitle: 'From surface-feature entrapment to structural alignment, relational schema induction, and far transfer',
    stages: [
      {
        id: 'stage-surface-domain-entrapment',
        name: 'Stage 1: Surface Domain Presentation',
        subtitle: 'Unfiltered domain features (Soldiers, Rays, Ships, Packets)',
        capacity: 'High perceptual noise & domain-specific jargon',
        duration: 'Instantaneous sensory encoding',
        role: 'The concrete problem appears clothed in domain-specific incidentals. Novices fixate on these superficial attributes, creating brittle memory traces that can only be retrieved by identical domain keywords.',
        failureMode: 'Keyword entrapment: Searching only for "radiation treatments" or "packet dropouts" when diagnosing a failure.',
        evidenceType: 'Empirical consensus (Duncker, 1945; Gick & Holyoak, 1980)',
        practicalFix: 'Strip all domain-specific nouns and verbs; replace them with abstract algebraic or relational tokens.',
      },
      {
        id: 'stage-predicate-structural-alignment',
        name: 'Stage 2: Structural Predicate Alignment',
        subtitle: 'Bijective mapping of relational systems (One-to-One Correspondence)',
        capacity: 'Bounded by working memory relational complexity (~4 relations)',
        duration: 'Effortful analytical comparison',
        role: 'Structure-Mapping Theory aligns the relational predicates of the base and target domains. Higher-order causal relations (CAUSE, IMPLIES, CONVERGE) are matched, while surface object attributes are deliberately dropped.',
        failureMode: 'Attribute confusion: Matching entities based on visual appearance rather than functional or causal role.',
        evidenceType: 'Empirical consensus (Gentner, 1983; Falkenhainer et al., 1989)',
        practicalFix: 'Verify structural consistency: ensure each component maps to exactly one counterpart with matching relational arguments.',
      },
      {
        id: 'stage-relational-schema-induction',
        name: 'Stage 3: Abstract Schema Induction',
        subtitle: 'Extracting the domain-independent functional calculus',
        capacity: 'Single consolidated compound schema in LTM',
        duration: 'Permanent schema consolidation',
        role: 'Comparing two diverse analogs crystallizes an abstract, portable relational schema. The schema encapsulates the core goal, governing systemic constraints, and the invariant causal mechanism required to resolve it.',
        failureMode: 'Incomplete abstraction: Leaving partial domain residue attached to the schema, restricting future transfer.',
        evidenceType: 'Empirical consensus (Gick & Holyoak, 1983; Gentner et al., 2003)',
        practicalFix: 'Formulate the schema in domain-agnostic language: write the rule such that a civil engineer, software architect, and physician could all understand it.',
      },
      {
        id: 'stage-far-analogical-transfer',
        name: 'Stage 4: Spontaneous Far Transfer & Innovation',
        subtitle: 'Projecting the extracted schema onto novel, alien problem domains',
        capacity: 'Universal cross-domain projection',
        duration: 'Rapid heuristic solution generation',
        role: 'When confronted with a novel domain, the learner uses the abstract relational schema to generate candidate solutions instantly, bypassing the need for exhaustive trial-and-error exploration.',
        failureMode: 'Over-extension: Applying an analogy past its valid boundary conditions where target physics or constraints diverge.',
        evidenceType: 'Empirical consensus (Holyoak & Thagard, 1995; Blanchette & Dunbar, 2000)',
        practicalFix: 'Actively test the negative boundary conditions of the analogy: where does the analogy break down?',
      },
    ],
    feedbackLoopDescription: 'Structural alignment extracts abstract relational schemas from disparate analogs, transforming domain-specific memories into universal problem-solving heuristics.',
  },
  exercise: {
    title: 'Structure-Mapping & Analogical Transfer Diagnostic Exercise',
    instruction: 'Analyze four real-world engineering, scientific, and learning scenarios. Diagnose whether cognitive failure stems from surface-feature fixation, attribute-matching trap, missing schema induction, or boundary over-extension, and prescribe the evidence-grounded fix.',
    categories: [
      {
        id: 'attention-bottleneck',
        title: 'Surface-Feature Fixation Trap',
        description: 'Failed to retrieve or apply an identical structural solution because the target domain had different visual nouns and vocabulary.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'working-memory-overload',
        title: 'Attribute-Matching Confusion',
        description: 'Matched entities based on cosmetic appearance or isolated attributes rather than functional causal relationships.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Inert Single-Example Knowledge',
        description: 'Studied an algorithm in only one technical context; unable to recognize or apply the pattern when the domain shifted.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Analogical Boundary Over-Extension',
        description: 'Pushed an analogy beyond its mathematical limits, applying a model to a domain where governing physical constraints diverge.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-database-hospital-triage',
        realWorldContext: 'Database Engineer Advising Hospital Logistics',
        scenario: 'Alex is a world-class Postgres performance tuner who knows everything about connection pool queueing, backpressure, and priority sheds. When asked to help design a high-volume emergency vaccination clinic facing severe waiting room crowding, Alex throws up his hands and says: "I know databases, not healthcare. I have no idea how to manage patients."',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'Alex suffers from Inert Single-Example Knowledge (Gick & Holyoak, 1980). Because he learned queueing theory and backpressure purely within the syntax of database connection pools, his knowledge is bound to database surface cues. He fails to realize that patients, arrival rates, examination rooms, and triage nurses map directly to transactions, ingestion queues, connection pools, and worker threads.',
        evidenceBasedFix: 'Use Analogical Encoding: present Alex with a side-by-side comparison of a database connection pool and an emergency clinic triage workflow to strip away database-specific nouns and induce an abstract flow-control schema.',
      },
      {
        id: 'scen-bohr-atom-solar-system-gravity',
        realWorldContext: 'High School Physics Student Studying Atomic Models',
        scenario: 'When learning the Rutherford-Bohr model of the atom, Maya is told: "The atom is like a miniature solar system: electrons revolve around the nucleus just like planets revolve around the sun." During the exam, Maya writes that electrons stay in orbit because of gravitational attraction proportional to their mass.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'Maya fell into the Attribute-Matching Confusion trap (Gentner, 1983). Instead of performing a structural mapping of the relational calculus (both systems feature a central attractor and orbiting satellites), she mapped the specific physical attribute of the solar system (gravity) directly into the atom, failing to recognize that electrostatic Coulomb force replaces Newtonian gravitation.',
        evidenceBasedFix: 'Teach explicit Structure-Mapping: draw a two-column alignment table showing that while the relation REVOLVES_AROUND is shared, the governing force attribute maps from GRAVITATIONAL_ATTRACT(Mass) to ELECTROSTATIC_ATTRACT(Charge).',
      },
      {
        id: 'scen-tumor-radiation-fortress-miss',
        realWorldContext: 'Medical Student Solving Karl Duncker’s Radiation Problem',
        scenario: 'David reads an article about a military general who took a fortress by sending small detachments of soldiers down several roads simultaneously. Five minutes later, he is presented with a patient with an inoperable brain tumor that will be destroyed by a 100-rad beam of radiation, but 100 rads will destroy healthy tissue. David concludes the tumor is completely untreatable.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'David demonstrated classic Surface-Feature Fixation (Duncker, 1945; Gick & Holyoak, 1980). Because "soldiers marching on roads" shares zero surface features with "X-ray beams passing through human brain tissue," his memory system failed to retrieve the military story without an explicit relational retrieval cue.',
        evidenceBasedFix: 'Provide a structural convergence hint or train David on multiple diverse convergence analogs (e.g. fire-extinguishing hoses, river tributaries, military platoons) to induce an abstract convergence schema.',
      },
      {
        id: 'scen-water-pipe-electricity-leak',
        realWorldContext: 'Junior Electrical Engineer Designing High-Frequency RF Circuits',
        scenario: 'Kevin learned electricity using the common "water in pipes" analogy (Voltage = Water Pressure, Current = Flow Rate, Resistance = Pipe Constriction). When designing high-frequency RF transmission lines, Kevin assumes that if he cuts a wire, electrical current will "leak out onto the floor like water from a broken hose."',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'Kevin suffered from Analogical Boundary Over-Extension (Holyoak & Thagard, 1995). The water-in-pipes analogy holds only for closed-circuit DC resistive flow. At high frequencies, electrical signals propagate as electromagnetic waves, where an open circuit causes wave reflection rather than fluid discharge.',
        evidenceBasedFix: 'Explicitly map the negative boundary conditions of the analogy: teach where the water model breaks down (capacitance, inductance, skin effect, open-circuit reflection).',
      },
    ],
  },
  quiz: {
    title: 'Verification Assessment: Structure-Mapping & Analogical Cognition',
    instruction: 'Evaluate your operational understanding of analogical transfer, systematicity, and schema induction. Achieve 75% or higher to verify mastery.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-gentner-systematicity-principle',
        question: 'According to Dedre Gentner’s (1983) Structure-Mapping Theory, what is the "Systematicity Principle"?',
        options: [
          {
            id: 'q1-a',
            text: 'Analogical mappings naturally prioritize higher-order relational systems bound by causal or explanatory dependencies over isolated, independent predicate matches.',
          },
          {
            id: 'q1-b',
            text: 'Analogies are valid only when the objects in both domains are physically identical in color, size, and weight.',
          },
          {
            id: 'q1-c',
            text: 'Analogies must be memorized in alphabetical order to prevent systematic interference in working memory.',
          },
          {
            id: 'q1-d',
            text: 'Systematicity means every single word in the source story must have an exact rhyming match in the target story.',
          },
        ],
        correctOptionId: 'q1-a',
        explanation: 'Gentner’s (1983) Systematicity Principle states that the human cognitive system prefers analogies that map deeply interconnected, higher-order causal structures (e.g. CAUSE, IMPLIES) rather than superficial, isolated predicates.',
        pedagogicalRationale: 'Clarifies that deep explanatory power in analogies comes from structural coherence and causal networks, not surface resemblance.',
        evidenceNote: 'Gentner, D. (1983). Structure-mapping: A theoretical framework for analogy. Cognitive Science, 7(2), 155-170.',
      },
      {
        id: 'q2-gick-holyoak-spontaneous-transfer-findings',
        question: 'In Gick and Holyoak’s (1980, 1983) experiments with the Radiation Problem, what was the primary obstacle preventing learners from applying the fortress solution to the tumor problem?',
        options: [
          {
            id: 'q2-a',
            text: 'Failure of spontaneous retrieval: without identical surface features, working memory failed to retrieve the fortress story from long-term memory, even though the mapping capability was fully intact.',
          },
          {
            id: 'q2-b',
            text: 'The subjects lacked the biological brain capacity to understand simple radiation physics.',
          },
          {
            id: 'q2-c',
            text: 'The subjects were blinded by high-intensity lasers during the experiment.',
          },
          {
            id: 'q2-d',
            text: 'The fortress story had been permanently erased from long-term memory due to retroactive interference.',
          },
        ],
        correctOptionId: 'q2-a',
        explanation: 'Gick & Holyoak proved that the bottleneck in analogical problem solving is retrieval, not mapping. When given an explicit hint to use the fortress story, over 80% solved the tumor problem immediately, proving the structural knowledge was present but inaccessible via surface cues.',
        pedagogicalRationale: 'Disentangles memory retrieval gating from relational mapping and problem-solving execution.',
        evidenceNote: 'Gick, M. L., & Holyoak, K. J. (1980). Analogical problem solving. Cognitive Psychology, 12(3), 306-355.',
      },
      {
        id: 'q3-analogical-encoding-mutual-alignment',
        question: 'Why is "Analogical Encoding" (Gentner, Loewenstein, & Thompson, 2003)—actively comparing two isomorphic examples side-by-side—vastly more effective for transfer than studying the same examples sequentially?',
        options: [
          {
            id: 'q3-a',
            text: 'Mutual alignment forces working memory to discard mismatched surface attributes and isolate the common relational schema, converting inert domain memories into portable principles.',
          },
          {
            id: 'q3-b',
            text: 'Comparing two examples doubles reading speed by putting the left and right eyes in parallel mode.',
          },
          {
            id: 'q3-c',
            text: 'Sequential studying causes permanent synaptic death in the hippocampus.',
          },
          {
            id: 'q3-d',
            text: 'Analogical encoding guarantees that students never need to study mathematics or physics again.',
          },
        ],
        correctOptionId: 'q3-a',
        explanation: 'Gentner et al. (2003) demonstrated that side-by-side comparison triggers mutual alignment: differences in surface features cancel out while common structural relations are highlighted and consolidated into an abstract schema.',
        pedagogicalRationale: 'Provides the empirical justification for comparative instructional design over isolated sequential examples.',
        evidenceNote: 'Gentner, D., Loewenstein, J., & Thompson, L. (2003). Learning and transfer: A general role for analogical encoding. Journal of Educational Psychology, 95(2), 393-408.',
      },
      {
        id: 'q4-analogy-negative-boundary-conditions',
        question: 'What is the primary cognitive risk of relying on powerful conceptual analogies (e.g. "electricity is like water in pipes" or "the atom is like a solar system") without explicit boundary analysis?',
        options: [
          {
            id: 'q4-a',
            text: 'Boundary over-extension: learners map surface attributes or invalid domain constraints into the target, creating persistent misconceptions when the underlying physical laws diverge.',
          },
          {
            id: 'q4-b',
            text: 'Analogies cause the brain to physically shrink by 15% due to excessive metaphorical strain.',
          },
          {
            id: 'q4-c',
            text: 'Analogies prevent learners from ever speaking their native language again.',
          },
          {
            id: 'q4-d',
            text: 'There is no risk; all analogies are 100% mathematically isomorphic in every possible dimension.',
          },
        ],
        correctOptionId: 'q4-a',
        explanation: 'Analogies are models of relational partial similarity, not absolute identities. Without explicit boundary mapping, learners inadvertently project invalid source attributes (e.g. water leaking from cut pipes; gravitational mass in atomic orbits) into the target domain.',
        pedagogicalRationale: 'Encourages epistemic vigilance and rigorous boundary mapping when employing explanatory models.',
        evidenceNote: 'Holyoak, K. J., & Thagard, P. (1995). Mental Leaps: Analogy in Creative Thought. MIT Press.',
      },
    ],
  },
  practicalTask: {
    title: 'The Structure-Mapping & Analogical Encoding Protocol',
    summary: 'A 3-step practical protocol to extract portable relational schemas from technical concepts, align cross-domain analogs, and map negative boundary conditions.',
    steps: [
      {
        id: 'step-isolate-relational-predicates',
        number: 1,
        title: 'Isolate Relational Predicates from Domain Glitter',
        prompt: 'Select a complex technical concept you are learning (e.g. Circuit Breakers in Microservices, Write-Ahead Logs, Raft Consensus). Strip away all domain-specific nouns and write down the core causal relations in abstract predicate form (e.g. CAUSE, IF_EXCEEDS, CONVERGE, MITIGATE):',
        placeholder: 'e.g., Circuit Breaker: IF_FAILURES_EXCEED(Threshold) → TRANSITION_STATE(Open) → SHED_LOAD(Downstream) → PREVENT(Cascading Collapse)...',
        example: 'Write-Ahead Log: SEQUENTIAL_APPEND(Intent) BEFORE IN_PLACE_MUTATION(State) → ENSURES(Crash Durability) BY REPLAYING(Unapplied Appends).',
        cognitiveRationale: 'Translating concepts into abstract relational predicates forces the cognitive system to discard superficial domain glitter and instantiate Gentner’s (1983) structural mapping format.',
      },
      {
        id: 'step-cross-domain-analog-matching',
        number: 2,
        title: 'Find a Structurally Isomorphic Cross-Domain Analog',
        prompt: 'Identify a completely non-technical domain (e.g. civil infrastructure, biology, aviation, finance, history) that obeys the exact same relational calculus. Map the 1-to-1 correspondences between the entities:',
        placeholder: 'e.g., Software Circuit Breaker ↔ Electrical House Fuse. Downstream Service = Delicate Home Electronics. API Requests = Electrical Current. Faulty Microservice = Short Circuit. Fast-Failing Gate = Melting Fuse Strip.',
        example: 'Write-Ahead Log ↔ Ship Captain’s Official Logbook. Captain logs course change intent before steering the rudder; if the ship is struck, the Admiralty can reconstruct and verify true intent.',
        cognitiveRationale: 'Gentner et al. (2003) showed that finding and aligning a cross-domain analog induces an abstract relational schema in long-term memory, unlocking spontaneous far transfer.',
      },
      {
        id: 'step-map-negative-boundary-conditions',
        number: 3,
        title: 'Map Negative Boundary Conditions & Analogy Breakdown',
        prompt: 'Explicitly identify at least two points where your analogy breaks down and fails to hold mathematically or physically. What attribute does the source have that the target completely lacks?',
        placeholder: 'e.g., Where does the Electrical Fuse analogy break down for Microservice Circuit Breakers? (1) Electrical fuses physically melt and require human replacement; software circuit breakers automatically reset via half-open probes. (2) Fuses respond to physical heat; software breakers respond to error rates and timeouts.',
        example: 'Where does Water-in-Pipes break down for High-Frequency Electricity? Water cannot radiate electromagnetic waves through free space; water velocity in pipes is inches per second, whereas electrical signals propagate near lightspeed.',
        cognitiveRationale: 'Explicitly mapping negative boundary conditions prevents analogical over-extension and immunizes the learner against intuitive false equivalences (Holyoak & Thagard, 1995).',
      },
    ],
  },
};
