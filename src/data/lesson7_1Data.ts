import type { Lesson } from '../types/learning.ts';

export const LESSON_INTERFERENCE_FORGETTING: Lesson = {
  id: 'proactive-retroactive-interference',
  chapterId: 'ch-7-interference-reconsolidation',
  number: '7.1',
  title: 'Proactive and Retroactive Interference',
  subtitle: 'Cue overload, associative competition, and memory protection',
  readingTimeMinutes: 15,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'Why does learning a new framework syntax make you suddenly make syntax errors in the language you used for five years? And why do forgotten memories often resurface instantly when given the right cue if forgetting isn’t trace decay?',
    teaser: 'Forgetting is almost never the physical erasure of a memory trace. It is cue overload and associative competition—the mathematical consequence of attaching too many targets to the same retrieval cue.',
    hookNote: 'In 1932, John McGeoch challenged Hermann Ebbinghaus’s pure decay hypothesis by proving that time alone does not cause forgetting—events occurring in time cause forgetting. In 1994 and 1996, John R. Anderson and Colin Neely formulated the Cue Overload Principle: retrieval probability is determined by the relative associative strength between a cue and a target, divided by the sum of all associations linked to that cue (the Fan Effect). Forgetting is fundamentally an indexing collision. When you learn React after Vue, new bindings compete with old bindings (Retroactive Interference); when prior C++ habits bleed into Rust syntax, old bindings block new ones (Proactive Interference). Understanding interference reveals why cramming multiple similar topics in one day causes catastrophic memory crosstalk.',
  },
  prediction: {
    prompt: 'Before analyzing the mathematical mechanics of interference, test your intuition on how competing memories interact in long-term storage: An engineer studies Spanish vocabulary for 60 minutes. Immediately afterward, Group A studies Italian vocabulary for 60 minutes, while Group B takes a 60-minute break with quiet rest. Two days later, both groups are tested on Spanish. What does empirical cognitive psychology observe?',
    context: 'Both groups studied identical Spanish vocabulary for the exact same duration and reached identical immediate test accuracy:',
    options: [
      {
        id: 'opt-decay-identical',
        strategy: 'Hypothesis A: Decay Invariance',
        description: 'Both groups show identical Spanish recall after two days, because forgetting is governed strictly by the metabolic half-life of synaptic proteins over 48 hours.',
      },
      {
        id: 'opt-retroactive-collapse',
        strategy: 'Hypothesis B: Retroactive Interference & Cue Overload',
        description: 'Group A shows drastically worse Spanish recall than Group B, because highly similar Italian vocabulary links to the same conceptual retrieval cues, generating severe associative competition and cue overload.',
      },
      {
        id: 'opt-synergy-boost',
        strategy: 'Hypothesis C: Romance Language Synergy',
        description: 'Group A performs significantly better on Spanish than Group B, because studying Italian immediately primes Latin grammatical roots and reinforces Spanish vocabulary.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-retroactive-collapse',
      headline: 'Highly Similar Subsequent Learning Causes Severe Retroactive Interference via Cue Overload and Associative Competition (McGeoch, 1932; Anderson & Neely, 1996; Wixted, 2004).',
      explanation: 'Forgetting is primarily driven by interference, not passive decay. When Group A studied Italian immediately after Spanish, the high similarity of the two Romance languages created a severe "Cue Overload" condition. Both Spanish words and Italian words became attached to the same conceptual cues (e.g. "to eat" → Spanish "comer" vs Italian "mangiare"). During retrieval, the cue activates both competing targets simultaneously. The stronger or more recently activated Italian traces create response competition that blocks access to the Spanish words. Group B, by resting, allowed the Spanish traces to consolidate without retroactive disruption.',
      optionFeedback: {
        'opt-decay-identical': {
          title: 'Your Choice: Hypothesis A (The Passive Decay Fallacy)',
          verdict: 'The Ebbinghaus Decay Misconception',
          analysis: 'Decades of interference experiments (McGeoch, 1932; Jenkins & Dallenbach, 1924; Wixted, 2004) proved that elapsed time alone causes minimal forgetting if no interfering mental activity occurs during the retention interval (e.g. during sleep or rest).',
        },
        'opt-retroactive-collapse': {
          title: 'Your Choice: Hypothesis B (Retroactive Interference & Cue Overload)',
          verdict: 'Empirical Cognitive Psychology Consensus',
          analysis: 'Correct! John Anderson’s Fan Effect and McGeoch’s Interference Theory prove that when multiple targets share identical retrieval cues, the retrieval strength of each individual target drops precipitously due to associative competition.',
        },
        'opt-synergy-boost': {
          title: 'Your Choice: Hypothesis C (The Untrained Synergy Myth)',
          verdict: 'False Intuition: Cross-Talk Outweighs Transfer',
          analysis: 'While positive transfer can occur after advanced mastery, back-to-back encoding of highly confusable, novice material creates catastrophic negative interference and phonological intrusions.',
        },
      },
      comparisons: [
        {
          label: 'Immediate Successive Similar Study (Spanish → Italian)',
          immediateRetention: '65% (Heavy cue competition)',
          oneWeekRetention: '24% (Catastrophic retroactive interference)',
          illusionRating: 'Extremely high (feels productive, but cues collide)',
          isEmpiricalWinner: false,
        },
        {
          label: 'Unrelated Alternation (Spanish → Quantum Physics)',
          immediateRetention: '78% (Minimal conceptual overlap)',
          oneWeekRetention: '58% (Moderate retention, low interference)',
          illusionRating: 'Moderate (different semantic cues prevent collision)',
          isEmpiricalWinner: false,
        },
        {
          label: 'Distinct Cue Differentiation + Spaced Consolidating Rest',
          immediateRetention: '88% (Unique contextual tag binding)',
          oneWeekRetention: '76% (High cue discriminability)',
          illusionRating: 'Calibrated (preserves clean associative access)',
          isEmpiricalWinner: true,
        },
      ],
      evidenceDistinction: 'Empirical Evidence Distinction: The interference theory of forgetting is supported by classic experimental psychology (Jenkins & Dallenbach, 1924; Underwood, 1957) and mathematical models of memory retrieval including ACT-R (Anderson, 1993) and SAM (Raaijmakers & Shiffrin, 1981).',
    },
  },
  coreExplanations: [
    {
      id: 'proactive-vs-retroactive-dynamics',
      title: '1. Proactive vs Retroactive Interference',
      tagline: 'When the past corrupts the present, and the present overwrites the past',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Foundational Cognitive Psychology Consensus',
      summary: 'Interference occurs in two distinct temporal vectors: Proactive Interference (prior learning degrades the acquisition and retrieval of new information) and Retroactive Interference (new learning impairs the retrieval of previously established memories).',
      mechanisms: [
        {
          label: 'Proactive Interference (PI; Forward Interference)',
          description: 'Occurs when established memory traces compete with and impede the recall of newer material. For example, after writing Python for 5 years, when learning JavaScript you persistently type "def" instead of "function" or write "True" instead of "true". Old synaptic traces are so automated that they proactively win the competition for working memory output.',
        },
        {
          label: 'Retroactive Interference (RI; Backward Interference)',
          description: 'Occurs when newly learned material impairs retrieval of older traces. For example, after spending a month intensely coding in TypeScript, you return to a Python codebase and suddenly forget basic Python dictionary syntax. The newly potentiated TypeScript traces introduce response competition that retroactively masks the older schemas.',
        },
        {
          label: 'Release from Proactive Interference (Wickens, 1970)',
          description: 'Delos Wickens demonstrated that when subjects learn successive lists of words from the same category (e.g. fruits), proactive interference builds up with each list and performance steadily drops. But when the category is suddenly switched to a distinct semantic domain (e.g. profession names), performance immediately rebounds to baseline. Category distinctiveness resets the interference buffer.',
        },
      ],
      keyInsight: 'Memory errors are rarely hardware failures. They are software collisions between competing associations vying for control of the same cognitive channel.',
      simplifiedModelCaveat: 'Proactive interference is not permanent erasure; older traces simply dominate the retrieval competition until new cues achieve distinct associative strength.',
    },
    {
      id: 'cue-overload-and-the-fan-effect',
      title: '2. The Cue Overload Principle & The Fan Effect',
      tagline: 'The mathematical mechanics of associative competition in distributed memory networks',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Mathematical Cognitive Architecture Consensus',
      summary: 'John R. Anderson and Colin Neely formulated the Cue Overload Principle: the probability of retrieving any specific target memory given a cue decreases as a function of the number of other targets associated with that same cue. Anderson’s Fan Effect proves that response latency and error rates scale with associative fan size.',
      mechanisms: [
        {
          label: 'The Cue Overload Principle (Anderson & Neely, 1996)',
          description: 'Memory retrieval is a competitive race. If retrieval cue $C$ is linked to targets $T_1, T_2, \\dots, T_n$, the retrieval probability of $T_1$ is proportional to its associative strength divided by the sum of strengths of all competing links: $P(T_1 | C) = \\frac{S(C, T_1)}{\\sum_{i=1}^n S(C, T_i)}$. As $n$ increases, the retrieval probability of any individual target inevitably drops.',
        },
        {
          label: 'The Fan Effect (Anderson, 1974)',
          description: 'Anderson had subjects memorize sentences like "The doctor is in the park," "The doctor is in the bank," and "The lawyer is in the park." When tested on whether a sentence was studied, verification time increased linearly with the number of associations (the "fan") fanning out from the subject and location concepts.',
        },
        {
          label: 'Response Competition vs Occlusion',
          description: 'When a cue is presented, all associated targets are activated in parallel. A highly practiced, dominant competitor can completely occlude the desired target, trapping the learner in a cognitive dead-end where they repeatedly retrieve the wrong answer with high fluency.',
        },
      ],
      keyInsight: 'To remember something reliably, do not just make the memory trace stronger. Make its retrieval cue more unique. A unique cue linked to one target beats a strong cue overloaded with ten targets.',
      simplifiedModelCaveat: 'The Fan Effect diminishes when disparate facts can be integrated into a single coherent mental model or schema, because the unified schema functions as a single compound chunk rather than separate competing links.',
    },
    {
      id: 'mitigating-interference-through-context-discrimination',
      title: '3. Architectural Defenses: Context Discrimination & Schema Gating',
      tagline: 'How high-performing learners insulate memories from catastrophic cross-talk',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Applied Cognitive Engineering Consensus',
      summary: 'To prevent destructive interference, cognitive architecture relies on three primary defenses: Contextual Cue Discrimination, Interleaved Discrepancy Testing, and Temporal Rest Buffers (Wixted, 2004; Bjork & Bjork, 2011).',
      mechanisms: [
        {
          label: 'Contextual Cue Differentiation',
          description: 'Instead of indexing competing concepts to generic cues (e.g. "looping syntax"), tie each concept to explicit contextual discriminators (e.g. "Python: dynamic iterator protocol using `__next__`" vs "Rust: zero-cost abstraction over `IntoIterator` with compile-time borrow lifetimes"). Highly specific contextual tags prevent cue collisions.',
        },
        {
          label: 'Interleaved Contrastive Practice (Kang & Pashler, 2012)',
          description: 'Rather than studying competing categories in isolated massed blocks (which causes massive retroactive interference when switching), interleaving competing concepts side-by-side forces the brain to detect subtle discriminative boundaries, transforming interference into clear category contrast.',
        },
        {
          label: 'Temporal Sleep & Rest Buffers (Wixted, 2004)',
          description: 'John Wixted demonstrated that retroactive interference occurs only while memories are undergoing early consolidation. Introducing a sleep or wakeful rest period immediately after encoding allows synaptic consolidation to lock the trace in place, rendering it highly resistant to subsequent interference.',
        },
      ],
      keyInsight: 'Defeating interference requires deliberate differentiation. Never learn two confusable, novel frameworks back-to-back without interleaving their structural contrasts or inserting consolidating rest.',
      simplifiedModelCaveat: 'Interleaving feels subjectively harder and slower than massed practice (inducing the Illusion of Incompetence), but produces dramatically superior long-term discrimination and retention.',
    },
  ],
  diagram: {
    title: 'The Dynamics of Memory Interference & Associative Cue Overload',
    subtitle: 'From shared cue competition to distinct schema differentiation',
    stages: [
      {
        id: 'stage-cue-overload-collision',
        name: 'Stage 1: Cue Overload & Associative Fan Collision',
        subtitle: 'One cue linked to multiple competing targets',
        capacity: 'Overloaded retrieval cue',
        duration: 'Instantaneous during retrieval attempt',
        role: 'A general retrieval cue (e.g. "error handling syntax") is linked to multiple competing memories (e.g. Go return tuples vs Rust Result enum vs Python try/except). When the cue fires, all targets activate simultaneously, creating cognitive cross-talk.',
        failureMode: 'Response competition: The strongest or most recent competitor occludes the target memory, causing retrieval failure.',
        evidenceType: 'Empirical consensus (Anderson & Neely, 1996; McGeoch, 1932)',
        practicalFix: 'Avoid generic study cues; bind concepts to unique, domain-specific contextual triggers.',
      },
      {
        id: 'stage-proactive-interference-blocking',
        name: 'Stage 2: Proactive Interference (Prior Habits Block New Input)',
        subtitle: 'Past automated traces overwhelm nascent learning',
        capacity: 'Automated procedural schema',
        duration: 'Days to weeks during novel acquisition',
        role: 'When attempting to encode or execute a new pattern, older deeply consolidated schemas fire automatically and preempt working memory resources, producing persistent slip-of-the-mind errors.',
        failureMode: 'Old habit intrusion: Writing C-style semicolon syntax in Python or using classical OOP inheritance in Rust.',
        evidenceType: 'Empirical consensus (Underwood, 1957; Wickens, 1970)',
        practicalFix: 'Use explicit contrastive cards that highlight the exact divergence point between old and new systems.',
      },
      {
        id: 'stage-retroactive-interference-washout',
        name: 'Stage 3: Retroactive Interference (New Learning Masks Past Traces)',
        subtitle: 'Successive learning destabilizes unconsolidated traces',
        capacity: 'Vulnerable consolidation window',
        duration: 'Hours to days post-study',
        role: 'Immediately following a study session, engaging with highly similar new material floods the hippocampus with overlapping representations, disrupting synaptic consolidation of the first session.',
        failureMode: 'Retroactive washout: Studying Italian immediately after Spanish causes Spanish vocabulary recall to collapse by >40%.',
        evidenceType: 'Empirical consensus (Wixted, 2004; Dewar et al., 2012)',
        practicalFix: 'Insert 10 minutes of wakeful rest or a distinct unrelated subject between similar study domains.',
      },
      {
        id: 'stage-discriminative-schema-insulation',
        name: 'Stage 4: Discriminative Schema Insulation',
        subtitle: 'Autonomous, interference-resistant mental models',
        capacity: 'Structured neocortical schema',
        duration: 'Durable mastery',
        role: 'Through interleaved retrieval and distinct contextual cues, the competing concepts are decoupled into autonomous modular schemas. Each concept now responds only to its precise contextual triggers without mutual interference.',
        failureMode: 'Failing to maintain spaced retrieval across both systems, allowing one schema to become latent.',
        evidenceType: 'Empirical consensus (Bjork & Bjork, 2011; Kang & Pashler, 2012)',
        practicalFix: 'Schedule interleaved dual-language coding drills to maintain equal retrieval strength across both schemas.',
      },
    ],
    feedbackLoopDescription: 'Once schemas are cleanly differentiated, learning additional related concepts actually reinforces the structural boundaries between them rather than causing interference.',
  },
  exercise: {
    title: 'Memory Interference Diagnostic Exercise',
    instruction: 'Analyze four real-world cognitive and technical breakdown scenarios. Diagnose the exact interference mechanism and prescribe the evidence-grounded architectural fix.',
    categories: [
      {
        id: 'attention-bottleneck',
        title: 'Cue Overload (The Fan Effect)',
        description: 'Attaching multiple competing programming syntaxes to the same generic retrieval cue caused associative competition and retrieval failure.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'working-memory-overload',
        title: 'Proactive Interference (Prior Habit Intrusion)',
        description: 'Established, automated habits from an older programming language proactively blocked and corrupted the execution of a newly learned language.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Retroactive Washout (Back-to-Back Similar Encoding)',
        description: 'Studying two highly confusable, similar conceptual domains back-to-back without rest caused the second domain to retroactively erase the first.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Category Saturation & Lack of Release from PI',
        description: 'Studying four successive chapters of identical dry syntax without semantic variation saturated working memory and caused severe proactive buildup.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-python-to-rust-errors',
        realWorldContext: 'Senior Backend Developer Adopting Systems Programming',
        scenario: 'Liam, a veteran Python developer with 8 years of experience, spent two weeks learning Rust. In his Rust code reviews, he consistently forgets to handle `None` cases in `Option` types, treats references as if they were garbage-collected pointer copies, and writes procedural loops where Rust iterators are standard.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'Liam experienced Proactive Interference (Underwood, 1957). His 8 years of automated Python mental models proactively intrude into working memory when designing algorithms, causing him to default to Pythonic memory management assumptions that violate Rust’s borrow checker and type invariants.',
        evidenceBasedFix: 'Create explicit contrastive flashcards (e.g. "Python: Variable assignment creates shared reference pointer" vs "Rust: Variable assignment executes Move semantics unless type implements Copy").',
      },
      {
        id: 'scen-back-to-back-vue-react',
        realWorldContext: 'Frontend Framework Migration',
        scenario: 'Chloe spends Monday morning studying Vue 3 Composition API reactive primitives for 3 hours, then immediately spends Monday afternoon studying React hooks for 3 hours. On Tuesday morning, when tasked with writing a simple React component, she finds herself typing Vue’s `ref()` and `computed()` syntax and cannot remember the arguments to `useEffect()`.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'Chloe induced Retroactive Washout (McGeoch, 1932; Wixted, 2004). Because Vue 3 and React share nearly identical conceptual territory (component state, reactivity, effects), encoding React immediately after Vue without intervening consolidation allowed React’s overlapping traces to retroactively overwrite the nascent Vue representations.',
        evidenceBasedFix: 'Separate similar domain study sessions by at least 24 hours with an intervening night of sleep, or use contrastive interleaved practice with explicit framework badges.',
      },
      {
        id: 'scen-generic-sql-cue-failure',
        realWorldContext: 'Data Engineering Multi-Cloud Architecture',
        scenario: 'Marcus needs to write analytical queries across PostgreSQL, Snowflake, and BigQuery. On flashcards, his prompt is simply: "How do you do date truncation?" When tested, he constantly confuses `DATE_TRUNC`, `DATEADD`, and `TIMESTAMP_TRUNC`, suffering long hesitations and high syntax error rates.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'Marcus suffers from Cue Overload & The Fan Effect (Anderson, 1974). His generic cue ("How do you do date truncation?") has a fan of 3 competing SQL dial-in targets. Presenting the cue activates all three dialects simultaneously, causing response competition and slowing retrieval latency.',
        evidenceBasedFix: 'Re-index retrieval cues with unique dialect context tags: e.g. "[BigQuery SQL] Truncate timestamp to month" vs "[Postgres SQL] Truncate timestamp to month".',
      },
      {
        id: 'scen-marathon-vocabulary-fatigue',
        realWorldContext: 'Medical Terminology Acquisition',
        scenario: 'A medical student studies 4 consecutive 50-card decks of pharmaceutical drug names. Accuracy is 92% on Deck 1, 74% on Deck 2, 58% on Deck 3, and plummets to 35% on Deck 4, with names blurring together into an incomprehensible alphabet soup.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'The student experienced Category Saturation and Proactive Build-Up (Wickens, 1970). Successive learning within the exact same semantic category without breaks causes severe proactive interference to accumulate.',
        evidenceBasedFix: 'Apply Wickens’s Release from Proactive Interference: alternate drug classification cards with anatomy diagrams, clinical patient cases, or surgical procedure flashcards to reset the interference buffer.',
      },
    ],
  },
  quiz: {
    title: 'Mastery Check: Interference Theory & Associative Competition',
    instruction: 'Validate your understanding of McGeoch’s interference theory, Anderson’s Fan Effect, proactive vs retroactive mechanisms, and Wickens’s release from PI.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-mcgeoch-decay-challenge',
        question: 'How did John McGeoch (1932) fundamentally overturn Hermann Ebbinghaus’s pure trace decay hypothesis of forgetting?',
        options: [
          {
            id: 'q1-a',
            text: 'McGeoch proved that elapsed time alone is not the cause of forgetting; retroactive and proactive interference from intervening cognitive events occurring in time causes forgetting.',
          },
          {
            id: 'q1-b',
            text: 'McGeoch proved that human memory has infinite capacity and no human ever forgets anything under any circumstance.',
          },
          {
            id: 'q1-c',
            text: 'McGeoch showed that memories only decay if a person eats sugar within 30 minutes of studying.',
          },
          {
            id: 'q1-d',
            text: 'McGeoch proved that Ebbinghaus was completely right and decay is the only mechanism of memory loss.',
          },
        ],
        correctOptionId: 'q1-a',
        explanation: 'John McGeoch (1932) demonstrated that time per se causes nothing; just as iron rusts because of oxidation occurring in time, memories are forgotten because of associative interference occurring in time (McGeoch, 1932).',
        pedagogicalRationale: 'Establishes the historical and conceptual foundation of the Interference Theory of Forgetting.',
        evidenceNote: 'McGeoch, J. A. (1932). Forgetting and the law of disuse. Psychological Review, 39(4), 352-370.',
      },
      {
        id: 'q2-anderson-fan-effect-formula',
        question: 'According to John R. Anderson’s Cue Overload Principle and the Fan Effect (Anderson & Neely, 1996), what happens when multiple target memories are associated with a single retrieval cue?',
        options: [
          {
            id: 'q2-a',
            text: 'The retrieval probability of any individual target decreases and retrieval verification latency increases, because the cue’s associative activation is diluted across all competing links.',
          },
          {
            id: 'q2-b',
            text: 'The cue becomes exponentially stronger, allowing the learner to retrieve all 50 items simultaneously in under 5 milliseconds.',
          },
          {
            id: 'q2-c',
            text: 'The brain deletes the oldest memory every time a new link is added to preserve a strict 1-to-1 ratio.',
          },
          {
            id: 'q2-d',
            text: 'The Fan Effect only applies to electric fans and has no relationship to human memory.',
          },
        ],
        correctOptionId: 'q2-a',
        explanation: 'Anderson’s Fan Effect demonstrates that when a retrieval cue is associated with multiple targets, activation splits among all pathways, increasing retrieval latency and error rates due to response competition (Anderson, 1974; Anderson & Neely, 1996).',
        pedagogicalRationale: 'Clarifies the mathematical and competitive mechanics of associative retrieval.',
        evidenceNote: 'Anderson, J. R. (1974). Retrieval of propositional information from long-term memory. Cognitive Psychology, 6(4), 451-474.',
      },
      {
        id: 'q3-proactive-vs-retroactive-distinction',
        question: 'Which of the following pairs correctly distinguishes Proactive Interference from Retroactive Interference?',
        options: [
          {
            id: 'q3-a',
            text: 'Proactive Interference: Old knowledge impairs recall of new information. Retroactive Interference: New knowledge impairs recall of old information.',
          },
          {
            id: 'q3-b',
            text: 'Proactive Interference: New knowledge impairs old knowledge. Retroactive Interference: Old knowledge impairs new knowledge.',
          },
          {
            id: 'q3-c',
            text: 'Proactive Interference happens only during sleep; Retroactive Interference happens only during exercise.',
          },
          {
            id: 'q3-d',
            text: 'There is no difference; cognitive science uses both terms interchangeably as synonyms for boredom.',
          },
        ],
        correctOptionId: 'q3-a',
        explanation: 'Proactive interference represents forward disruption where established habits impair new acquisition; retroactive interference represents backward disruption where fresh learning impairs prior retention (Underwood, 1957; Wixted, 2004).',
        pedagogicalRationale: 'Ensures clear definitional mastery of directional interference vectors.',
        evidenceNote: 'Underwood, B. J. (1957). Interference and forgetting. Psychological Review, 64(1), 49-60.',
      },
      {
        id: 'q4-wickens-release-from-pi',
        question: 'What does Delos Wickens’s (1970) "Release from Proactive Interference" phenomenon reveal about how to structure multi-topic study sessions?',
        options: [
          {
            id: 'q4-a',
            text: 'Proactive interference accumulates rapidly when studying items from the same semantic category, but switching to a distinctly different category immediately restores retrieval performance to baseline.',
          },
          {
            id: 'q4-b',
            text: 'Switching subjects causes brain damage; students must only study one subject for 12 months at a time.',
          },
          {
            id: 'q4-c',
            text: 'Release from PI only occurs if the student runs a 5-mile sprint between flashcard decks.',
          },
          {
            id: 'q4-d',
            text: 'Wickens proved that humans should never take breaks because breaks cause total memory loss.',
          },
        ],
        correctOptionId: 'q4-a',
        explanation: 'Wickens (1970) demonstrated that proactive interference builds up within category trials, but shifts in semantic category yield an immediate "release from proactive interference," rebounding recall back to near 100%.',
        pedagogicalRationale: 'Provides actionable scheduling guidance on interleaving semantically distinct domains to avoid category fatigue.',
        evidenceNote: 'Wickens, D. D. (1970). Encoding categories of words: An empirical approach to memory. Psychological Review, 77(1), 1-15.',
      },
    ],
  },
  practicalTask: {
    title: 'The Interference Insulation & Cue Differentiation Protocol',
    summary: 'A 3-step practical protocol to audit overloaded retrieval cues, eliminate cross-framework syntax intrusions, and apply Wickens category switching.',
    steps: [
      {
        id: 'step-audit-overloaded-cues',
        number: 1,
        title: 'Audit and Differentiate Overloaded Retrieval Cues',
        prompt: 'Identify a generic cue in your current study deck that links to multiple competing concepts, and re-engineer it into unique, context-tagged prompts:',
        placeholder: 'e.g., Generic Cue: "How do you handle errors?" → Overloaded fan of 3. Refactored into: 1. [Rust Result]: How do you propagate an error with pattern matching? 2. [Go Error]: What is the canonical if err != nil check pattern?...',
        example: 'Generic: "Filter list of items". Refactored into: 1. [Python Listcomp]: `[x for x in items if pred(x)]` 2. [JavaScript Array]: `items.filter(x => pred(x))` 3. [Rust Iterator]: `items.into_iter().filter(pred).collect()`.',
        cognitiveRationale: 'Reducing cue fan size by adding domain-specific contextual qualifiers directly eliminates the Fan Effect and prevents response competition (Anderson & Neely, 1996).',
      },
      {
        id: 'step-contrastive-discrepancy-drilling',
        number: 2,
        title: 'Construct Explicit Contrastive Discrepancy Cards',
        prompt: 'For two easily confused syntactical or architectural concepts, construct a side-by-side contrastive card highlighting their exact boundary condition:',
        placeholder: 'e.g., Concept A: Kafka Partition Key (guarantees ordering within a single partition). Concept B: Kafka Consumer Group (enables horizontal read scaling across partitions). Contrast: Partition key governs write parallelism; Consumer Group governs read parallelism...',
        example: 'Concept A: Git Rebase (rewrites commit history linearizing commits). Concept B: Git Merge (preserves historical timeline creating a merge commit). Contrast: Use Rebase on local private feature branches; use Merge on shared public trunks.',
        cognitiveRationale: 'Explicit contrastive pairs force the prefrontal cortex to construct distinct diagnostic boundaries, transforming potential proactive interference into clean discriminative schemas (Kang & Pashler, 2012).',
      },
      {
        id: 'step-wickens-category-shift',
        number: 3,
        title: 'Apply the Wickens Category Shift to Prevent Proactive Saturation',
        prompt: 'Design a 3-block study session that switches semantic categories every 45–60 minutes to trigger Release from Proactive Interference:',
        placeholder: 'e.g., Block 1 (50m): Dense code syntax (Rust ownership rules). Rest (10m): Complete wakeful rest. Block 2 (50m): System architecture diagrams (Raft consensus state machine). Rest (10m): Physical walk. Block 3 (50m): High-level software economics...',
        example: 'Block 1: Mathematical proofs of consensus algorithms. Block 2: Visual UI design tokens and CSS architecture. Block 3: Code debugging drills. Semantic category shifts reset the proactive interference buffer.',
        cognitiveRationale: 'Wickens (1970) proved that shifting to a distinct semantic domain immediately purges accumulated proactive interference, returning encoding fidelity to baseline.',
      },
    ],
  },
};
