import type { Lesson } from '../types/learning.ts';

export const LESSON_PRODUCTIVE_FAILURE_GENERATION: Lesson = {
  id: 'productive-failure-generation',
  chapterId: 'ch-15-error-driven',
  number: '15.1',
  title: 'Productive Failure & Generation Effects',
  subtitle: 'Failing before instruction primes the brain for deeper encoding',
  readingTimeMinutes: 16,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'If you are about to teach someone a complex concept they have never seen before, why does forcing them to struggle and fail to solve it first produce double the conceptual understanding of giving them a clear, perfect lecture from the start?',
    teaser: 'Traditional schooling fears early errors, but cognitive neuroscience reveals that initial generation failure primes the brain’s schema receptors for canonical instruction.',
    hookNote: 'For over a century, instructional design operated under the "errorless learning" dogma: instructors believed that allowing students to make mistakes during early learning would "ingrain bad habits" and cause confusion. But in 2008, cognitive scientist Manu Kapur conducted a series of radical classroom experiments on complex statistical concepts (like standard deviation). One group received crystal-clear direct instruction followed by practice problems (the conventional approach). The other group was given complex data sets and forced to invent their own mathematical formulas to measure consistency—without any instruction. The second group failed miserably to invent the correct formula. Yet when both groups subsequently received the exact same canonical lecture, the "failed" group crushed the lecture-first group on conceptual understanding and novel transfer by nearly two to one! Why does structured failure before instruction transform passive listening into deep synaptic encoding? In this lesson, we explore Manu Kapur’s (2008, 2012) Productive Failure architecture, Elizabeth & Robert Bjork’s (2011) pre-testing effect, Janet Metcalfe’s (2017) error-driven hypercorrection, and how to harness generation failure as a cognitive priming engine.',
  },
  prediction: {
    prompt: 'Two cohort groups of software engineering apprentices, Group A and Group B, are learning how to design distributed consensus algorithms (such as Paxos or Raft) to handle network split-brain partitions. Neither group has ever studied distributed consensus.\n\nGroup A ("Direct Instruction First"): Receives a 2-hour, world-class interactive lecture with animated diagrams explaining Raft’s leader election and log replication invariants. Afterward, they implement 3 guided consensus exercises with immediate feedback.\n\nGroup B ("Productive Failure First"): Given an unguided design challenge: "Design a protocol where 5 independent servers maintain an identical ledger across an unreliable network where nodes randomly drop packets and partition." They spend 2 hours generating designs, arguing, and discovering edge cases where their homegrown protocols fail (e.g., two leaders elected simultaneously). After their protocols fail, they receive the exact same 2-hour Raft lecture as Group A.\n\nTwo weeks later, both groups take a rigorous transfer exam requiring them to diagnose an unprecedented Byzantine failure mode in a novel distributed database architecture.',
    context: 'Both groups have identical baseline computer science education and spend equal total learning time (4 hours total):',
    options: [
      {
        id: 'opt-group-a-direct-instruction-superior',
        strategy: 'Hypothesis A: Errorless Cognitive Efficiency',
        description: 'Group A will significantly outperform Group B on the transfer exam because receiving canonical models first prevented cognitive overload and ensured correct neural schemas were established without confusing intermediate errors.',
      },
      {
        id: 'opt-group-b-productive-failure-transfer',
        strategy: 'Hypothesis B: Productive Failure & Schema Gap Priming',
        description: 'Group B will vastly outperform Group A on deep conceptual understanding and transfer (Kapur, 2008, 2012), because struggling with the problem space first activated prior knowledge, revealed latent schema gaps, and primed their prefrontal circuits to encode Raft’s specific design invariants.',
      },
      {
        id: 'opt-equivalent-knowledge-delivery',
        strategy: 'Hypothesis C: Equal Information Delivery Equivalence',
        description: 'Both groups will perform identically because both received the exact same 2-hour world-class Raft lecture; the sequence of exploration versus instruction does not alter long-term retention.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-group-b-productive-failure-transfer',
      headline: 'The Productive Failure Effect: Generating Failed Solutions Before Instruction Radically Boosts Conceptual Understanding and Far Transfer (Kapur, 2008, 2012; Bjork, 2011).',
      explanation: 'Cognitive science has conclusively refuted the "errorless learning" myth for complex conceptual domains. When Group A received direct instruction first, the lecture sounded intuitive and clear. Because they had never experienced the brutal paradoxes of distributed partitions, they suffered an "illusion of explanatory depth"—they perceived Raft’s complex rules (term numbers, split votes, randomized timers) as arbitrary engineering trivia rather than essential survival mechanisms. Group B, by attempting to invent a protocol first, encountered the exact failure boundaries of the problem space: they watched their own protocols elect two leaders, partition into contradictory states, and deadlock. This failure performed crucial cognitive work (Kapur, 2012): (1) It activated their existing network schemas, (2) It created an acute awareness of their own knowledge gaps (epistemic curiosity), and (3) It mapped the problem space features. When the canonical Raft lecture was finally delivered, every architectural component answered an agonizing question Group B had already failed to resolve. The lecture became a relief valve for calibrated curiosity, etching deep, transferable schemas.',
      optionFeedback: {
        'opt-group-a-direct-instruction-superior': {
          title: 'Your Choice: Hypothesis A (The Errorless Instruction Myth)',
          verdict: 'Refuted by Modern Cognitive & Learning Sciences',
          analysis: 'Direct instruction first feels orderly and comfortable, but learners process canonical solutions passively because they have not experienced the failure conditions that make those solutions necessary.',
        },
        'opt-group-b-productive-failure-transfer': {
          title: 'Your Choice: Hypothesis B (Productive Failure & Schema Gap Priming)',
          verdict: 'Empirical Cognitive Science Consensus',
          analysis: 'Precisely accurate! Manu Kapur (2008, 2012) and Kornell, Hays & Bjork (2009) demonstrated that struggling to generate solutions prior to instruction creates fertile cognitive soil for canonical consolidation, doubling transfer scores.',
        },
        'opt-equivalent-knowledge-delivery': {
          title: 'Your Choice: Hypothesis C (The Passive Delivery Illusion)',
          verdict: 'Contradicted by Empirical Learning Data',
          analysis: 'Learning is not the passive downloading of information; the computational receptivity of working memory depends entirely on whether relevant schemas and curiosity gaps have been primed beforehand.',
        },
      },
      comparisons: [
        {
          label: 'Productive Failure (Group B: Explore First -> Lecture Second)',
          immediateRetention: 'Early confusion during exploration, followed by high "Aha!" insight during lecture',
          oneWeekRetention: 'Vastly superior conceptual transfer (nearly 2x on diagnosing novel distributed edge cases)',
          illusionRating: 'Calibrated epistemic humility; learners understand precisely why alternative designs fail',
          isEmpiricalWinner: true,
        },
        {
          label: 'Direct Instruction (Group A: Lecture First -> Practice Second)',
          immediateRetention: 'Smooth, effortless acquisition of procedural rules and terminology',
          oneWeekRetention: 'Brittle conceptual retention; learners struggle to adapt when system constraints alter',
          illusionRating: 'Severe illusion of explanatory depth; learners believe they understand because the lecture was clear',
          isEmpiricalWinner: false,
        },
      ],
      evidenceDistinction: 'Direct instruction first provides answers to questions the learner has never asked; productive failure forces the learner to ask the questions first so the answer permanently consolidates.',
    },
  },
  coreExplanations: [
    {
      id: 'kapur-productive-failure-architecture',
      title: 'Manu Kapur (2008, 2012): The Architecture of Productive Failure',
      tagline: 'Why unstructured generation before canonical consolidation builds deep conceptual schemas',
      statusLabel: 'Educational Psychology & Cognitive Science Paradigm Benchmark (2008–2016)',
      scientificStatus: 'empirical-consensus',
      summary: 'Manu Kapur established that learning complex conceptual knowledge requires two distinct phases in strict chronological order: Phase 1 (Unguided Exploration & Problem Solving) followed by Phase 2 (Canonical Consolidation). Reversing this order systematically undermines deep transfer.',
      mechanisms: [
        {
          label: 'The Four Core Mechanisms of Productive Failure',
          description: 'Kapur identified four distinct cognitive mechanisms triggered during initial exploration: (1) Activation of relevant prior knowledge schemas; (2) Differentiation of critical problem features and constraints; (3) Identification of latent knowledge gaps (noticing what you do not know); and (4) Creation of epistemic curiosity and cognitive readiness.',
        },
        {
          label: 'The Illusion of Explanatory Depth in Direct Instruction',
          description: 'When novices receive clear, elegant instruction first, they nod along because the presentation is fluent. However, they encode the canonical solution as a static script. Because they never explored the dead ends, alternative paths, or subtle failure modes, they develop an illusion of explanatory depth (Rozenblit & Keil, 2002) and collapse on transfer tasks.',
        },
        {
          label: 'The Canonical Consolidation Phase',
          description: 'Exploration alone is not enough: unguided discovery without subsequent direct instruction leads to frustration ("unproductive failure"). The magic of Productive Failure occurs in Phase 2, where the instructor uses student-generated failed representations as explicit contrasts to introduce the canonical model.',
        },
      ],
      keyInsight: 'You cannot truly appreciate why a solution works until you have experienced firsthand why intuitive alternatives fail.',
      simplifiedModelCaveat: 'Productive failure applies to complex conceptual and relational domains; for arbitrary conventions (e.g. learning the alphabet, chemical element symbols, or syntax keywords), direct instruction is more efficient.',
    },
    {
      id: 'bjork-pretesting-generation-gap-activation',
      title: 'Elizabeth & Robert Bjork (2011): The Pre-Testing & Generation Gap Effect',
      tagline: 'How taking a test on unstudied material primes neurobiological memory consolidation',
      statusLabel: 'Experimental Cognitive Psychology & Memory Consolidation Consensus',
      scientificStatus: 'empirical-consensus',
      summary: 'Elizabeth Ligon Bjork, Robert Bjork, and Nate Kornell proved that attempting to answer questions on material you have never studied significantly enhances subsequent learning of that material, even when the pre-test guesses are 100% incorrect.',
      mechanisms: [
        {
          label: 'The Pre-Testing Effect (Kornell, Hays & Bjork, 2009)',
          description: 'In controlled experiments, participants given an unstudied question (e.g. "What is the capital of Australia?") who guessed incorrectly (e.g. "Sydney") and were immediately given the correct answer ("Canberra") showed significantly higher delayed retention than participants who were simply given the fact to study for equal time.',
        },
        {
          label: 'Spreading Activation & Cue Priming',
          description: 'The act of generating a guess forces executive search across associative networks in semantic long-term memory. Even when the generated target is wrong, the search lights up related conceptual nodes. When the correct answer is subsequently revealed, it binds to this pre-activated semantic web rather than floating as an isolated trace.',
        },
        {
          label: 'Eradication of the "Errorless Learning" Myth',
          description: 'For decades, behaviorists claimed errors in early learning "imprinted" bad associations. Modern cognitive neuroscience disproved this for declarative knowledge: errors do not harm memory as long as corrective feedback is provided promptly; instead, generation errors serve as potent retrieval scaffolds.',
        },
      ],
      keyInsight: 'An incorrect guess is not a wasted effort; it is an active shovel digging a semantic hole for the correct answer to fill.',
      simplifiedModelCaveat: 'Pre-testing only works if corrective feedback is delivered; generating incorrect guesses without ever receiving canonical resolution can leave misconceptions uncorrected.',
    },
    {
      id: 'metcalfe-hypercorrection-epistemic-curiosity',
      title: 'Janet Metcalfe (2017): Error-Driven Learning & The Hypercorrection Effect',
      tagline: 'Why our most confident errors become our most durable memories when corrected',
      statusLabel: 'Cognitive Science & Metacognitive Calibration Classic',
      scientificStatus: 'empirical-consensus',
      summary: 'Janet Metcalfe and colleagues discovered the "Hypercorrection Effect": when learners make an error with high confidence, receiving the corrective feedback triggers an explosive surge of attention and curiosity, leading to vastly superior retention compared to correcting low-confidence errors.',
      mechanisms: [
        {
          label: 'Prediction Error & The P300 Neural Surprise Signal',
          description: 'High-confidence errors generate a massive Reward Prediction Error (RPE) in the midbrain and anterior cingulate cortex. Event-related potential (ERP) studies show a dramatic P300/late positive deflection when a high-confidence prediction is violated by corrective feedback, signaling intense attentional capture.',
        },
        {
          label: 'The Epistemic Curiosity Mechanism',
          description: 'Low-confidence errors are shrugged off as mere guesses. But when a deeply held conviction is proven false, the learner experiences epistemic surprise. This surge in curiosity dramatically accelerates synaptic reconsolidation, permanently overwriting the flawed mental model.',
        },
        {
          label: 'Cultivating Error Resilience in Learning Workflows',
          description: 'Rather than shrinking from errors, elite learners actively seek out high-confidence boundary predictions. Committing to a specific answer before checking the solution is the fastest way to trigger the neural machinery of the hypercorrection effect.',
        },
      ],
      keyInsight: 'Your most dangerous misconceptions contain the highest potential energy for deep learning—if you have the courage to expose them to corrective feedback.',
      simplifiedModelCaveat: 'Hypercorrection requires psychological safety; if errors trigger shame or punitive evaluation, defensive cognitive gating suppresses the P300 update signal.',
    },
  ],
  diagram: {
    title: 'The Productive Failure & Generation Priming Engine',
    subtitle: 'From exploratory struggle and knowledge gap activation to canonical consolidation and hypercorrection',
    stages: [
      {
        id: 'stage-exploratory-struggle',
        name: 'Stage 1: Exploratory Generation (The Struggle)',
        subtitle: 'Unguided Generation & Prior Schema Activation',
        capacity: 'High prefrontal working memory search',
        duration: 'Initial challenge phase',
        role: 'The learner attempts to solve a novel, complex problem without prior instruction, generating intuitive models and encountering boundary roadblocks.',
        failureMode: 'Frustration Panic: Giving up if the learner believes that early struggle implies low intelligence.',
        evidenceType: 'Productive failure empirical paradigm (Kapur, 2008, 2012)',
        practicalFix: 'Frame the initial challenge explicitly as an exploration exercise where the goal is mapping the problem space, not achieving 100% accuracy.',
      },
      {
        id: 'stage-knowledge-gap-awareness',
        name: 'Stage 2: Knowledge Gap & Epistemic Curiosity',
        subtitle: 'Noticing the Discrepancy & Lighting Up Semantic Nodes',
        capacity: 'High dopamine prediction error signaling',
        duration: 'Transition state',
        role: 'The failure of intuitive solutions reveals latent knowledge gaps. The learner realizes what they do not know, transforming passive receptivity into intense epistemic curiosity.',
        failureMode: 'The Errorless Trap: Skipping straight to the solution without attempting to generate an answer first.',
        evidenceType: 'Pre-testing effect & curiosity dynamics (Kornell et al., 2009; Gruber et al., 2014)',
        practicalFix: 'Force yourself to write down your explicit hypothesis and its predicted outcome before opening the textbook or solution manual.',
      },
      {
        id: 'stage-canonical-consolidation',
        name: 'Stage 3: Canonical Consolidation (The Solution)',
        subtitle: 'Introducing Expert Models into Primed Schema Receptors',
        capacity: 'High synaptic potentiation (Late-LTP)',
        duration: 'Instructional phase',
        role: 'The instructor or textbook delivers the canonical model. Crucially, the lecture contrasts the expert solution directly against the student-generated failed representations.',
        failureMode: 'Unproductive Failure: Leaving the student in unguided discovery without providing canonical synthesis.',
        evidenceType: 'Instructional design & consolidation synthesis (Kapur & Bielaczyc, 2012)',
        practicalFix: 'Always follow generation struggle with immediate canonical instruction that explains why the intuitive approaches failed.',
      },
      {
        id: 'stage-hypercorrection-transfer',
        name: 'Stage 4: Hypercorrection & Far Transfer',
        subtitle: 'Durable Schema Updating & Deep Structural Transfer',
        capacity: 'Robust multidimensional mental models',
        duration: 'Longitudinal retention & transfer',
        role: 'High-confidence prediction errors trigger the hypercorrection effect, permanently overwriting misconceptions and establishing deep structural representations.',
        failureMode: 'None: Knowledge is resilient, flexible, and transferable across novel problem topologies.',
        evidenceType: 'Error-driven learning & hypercorrection consensus (Metcalfe, 2017; Butterfield & Metcalfe, 2001)',
        practicalFix: 'Maintain an active Error Journal documenting high-confidence errors and their underlying root-cause mechanisms.',
      },
    ],
    feedbackLoopDescription: 'Exploratory generation reveals schema gaps and triggers epistemic curiosity; canonical consolidation fills those primed gaps, driving the hypercorrection effect and enabling 2x higher transfer.',
  },
  exercise: {
    title: 'The Productive Failure & Generation Diagnostic Exercise',
    instruction: 'Analyze four real-world engineering, medical, and educational training scenarios. Diagnose whether the failure stems from Direct Instruction First (Illusion of Explanatory Depth), Unproductive Failure (Missing Canonical Consolidation), Errorless Learning Paralysis, or Suppressed Hypercorrection, and prescribe the evidence-grounded fix.',
    categories: [
      {
        id: 'attention-bottleneck',
        title: 'Direct Instruction First (Illusion of Explanatory Depth)',
        description: 'Delivering clear lectures before problem exploration caused learners to nod along passively, leaving them helpless on transfer tasks.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'working-memory-overload',
        title: 'Unproductive Failure (Missing Canonical Synthesis)',
        description: 'Leaving learners in pure unguided discovery without subsequent canonical consolidation, causing cognitive frustration without schema formation.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Errorless Learning Paralysis',
        description: 'Over-scaffolding practice to prevent mistakes, depriving the learner of the pre-testing effect and generative retrieval struggle.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Suppressed Hypercorrection (Punitive Feedback)',
        description: 'Punishing errors created defensive anxiety that shut down the P300 prediction error update mechanism.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-data-science-gradient-descent-lecture',
        realWorldContext: 'University Machine Learning Boot Camp',
        scenario: 'An instructor delivers an exquisite 3-hour lecture on optimization algorithms, complete with 3D gradient descent visualizations, momentum equations, and Adam optimizer derivations. Students nod, take diligent notes, and score 95% on recall definitions. The next week, students are given a messy non-convex loss surface with exploding gradients, and 85% of them have no idea how to troubleshoot the learning rate or apply gradient clipping.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'This is the classical Direct Instruction First pathology (Kapur, 2012). Because students never struggled with the failure modes of basic vanilla gradient descent (e.g. saddle points, oscillations, vanishing gradients), they encoded the advanced optimizers as abstract math formulas rather than essential solutions to real optimization failures.',
        evidenceBasedFix: 'Restructure using Productive Failure: give students an ill-conditioned neural network and challenge them to write an optimization loop that converges without giving them momentum or Adam; let them struggle with exploding gradients first, then deliver the Adam lecture.',
      },
      {
        id: 'scen-kindergarten-coding-pure-discovery',
        realWorldContext: 'Middle School Python Robotics Curriculum',
        scenario: 'A school adopts an extreme "pure discovery learning" philosophy: students are given a robot with infrared distance sensors and a blank Python IDE and told to "explore and discover how to write an autonomous obstacle-avoidance algorithm" without any lectures or starter code. After 3 weeks of frantic guessing, students are angry, confused, and give up, concluding that "coding is impossible."',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'This is Unproductive Failure (Kapur & Bielaczyc, 2012). Exploration without Phase 2 Canonical Consolidation overwhelms working memory and breeds learned helplessness; discovery must always be followed by structured expert synthesis.',
        evidenceBasedFix: 'Cap initial exploratory struggle at 30 minutes, collect student-invented logic patterns (e.g. naive if/else distance thresholds), and immediately follow with a direct canonical lecture contrasting their attempts with state machines.',
      },
      {
        id: 'scen-surgical-residency-over-scaffolding',
        realWorldContext: 'Hospital Laparoscopic Surgical Simulation Training',
        scenario: 'A surgical residency program trains residents using an automated simulator that buzzes and locks the instruments whenever a resident’s scalpel deviates more than 1 millimeter from the ideal trajectory. Residents complete 100 flawless "errorless" virtual gall bladder dissections without a single mistake. In the real operating room, when tissue elasticity deviates from the simulator, residents freeze and exhibit extreme hand tremors.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'The training suffered from Errorless Learning Paralysis (Bjork, 2011). By physically preventing errors, the simulator eliminated the cognitive generation effort and desirable difficulties needed to build flexible motor-cognitive schemas capable of handling anatomical variation.',
        evidenceBasedFix: 'Remove the error-locking rails: allow residents to make minor procedural deviations, observe the tissue tearing consequences in simulation, and practice recovery maneuvers from realistic surgical complications.',
      },
      {
        id: 'scen-corporate-audit-shame-culture',
        realWorldContext: 'Investment Banking Forensic Accounting Onboarding',
        scenario: 'A junior financial analyst confidently flags a major international transaction as "routine capital expenditure" during a training simulation. The managing director publicly ridicules the analyst in front of the entire trading floor, shouting: "How could you be so stupid? That was an obvious money-laundering smurfing scheme!" Shaken and humiliated, the analyst avoids speaking for the rest of the month and fails to identify a real smurfing scheme on a live client account two weeks later.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'The feedback environment Suppressed the Hypercorrection Effect (Metcalfe, 2017). The intense social humiliation triggered amygdala-driven threat responses and defensive cognitive gating, replacing constructive P300 error updating with anxiety and avoidance.',
        evidenceBasedFix: 'Establish psychological safety for high-confidence errors: decouple prediction errors from personal competence, examine the forensic cues that deceived the analyst objectively, and celebrate the revelation of a deceptive edge case.',
      },
    ],
  },
  quiz: {
    title: 'Productive Failure & Generation Effects Formative Assessment',
    instruction: 'Demonstrate your understanding of Kapur’s productive failure architecture, Bjork’s pre-testing effect, and Metcalfe’s hypercorrection effect. Score 75% or higher to verify.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-kapur-productive-failure-core-architecture',
        question: 'In Manu Kapur’s (2008, 2012) Productive Failure framework, why must exploratory problem solving strictly PRECEDE direct canonical instruction?',
        options: [
          {
            id: 'q1-a',
            text: 'Because teachers need 45 minutes of quiet time to grade papers before lecturing.',
          },
          {
            id: 'q1-b',
            text: 'Because unguided initial struggle activates prior knowledge, differentiates critical problem constraints, and creates acute awareness of knowledge gaps, priming schema receptors to consolidate the subsequent canonical lecture.',
          },
          {
            id: 'q1-c',
            text: 'Because students enjoy failing more than succeeding.',
          },
          {
            id: 'q1-d',
            text: 'Because canonical lectures are biologically toxic if heard before 11:00 AM.',
          },
        ],
        correctOptionId: 'q1-b',
        explanation: 'Kapur proved that initial generation struggle performs essential cognitive groundwork: it activates prior knowledge, exposes knowledge gaps, and maps problem boundaries. Subsequent canonical instruction acts as a relief valve, leading to 2x higher conceptual transfer.',
        pedagogicalRationale: 'Establishes the empirical rationale behind sequencing exploration before consolidation.',
        evidenceNote: 'Kapur, M. (2012). Productive failure in learning the concept of variance. Cognition and Instruction, 30(1), 22-55.',
      },
      {
        id: 'q2-bjork-pretesting-effect-mechanism',
        question: 'In Elizabeth & Robert Bjork’s (2011) research on the Pre-Testing Effect, why does guessing the answer to an unstudied question enhance subsequent learning even when the guess is completely wrong?',
        options: [
          {
            id: 'q2-a',
            text: 'Because wrong guesses trigger spreading activation across semantic long-term memory networks, creating an associative landing pad for the correct answer to bind to.',
          },
          {
            id: 'q2-b',
            text: 'Because incorrect guesses damage the prefrontal cortex, making room for new neurons.',
          },
          {
            id: 'q2-c',
            text: 'Because guessing lowers body temperature, which improves electrical conduction in dendrites.',
          },
          {
            id: 'q2-d',
            text: 'Because multiple-choice guessing is a legally mandated requirement for all human learning.',
          },
        ],
        correctOptionId: 'q2-a',
        explanation: 'Kornell, Hays & Bjork (2009) demonstrated that the generative attempt to retrieve or guess an answer activates related semantic concepts in memory. When corrective feedback arrives, it integrates directly into this pre-activated network, yielding far greater durability than passive reading.',
        pedagogicalRationale: 'Explains the neuro-cognitive mechanism of pre-testing benefits.',
        evidenceNote: 'Kornell, N., Hays, M. J., & Bjork, R. A. (2009). Unsuccessful retrieval attempts enhance subsequent learning. Journal of Experimental Psychology: Learning, Memory, and Cognition, 35(4), 989-998.',
      },
      {
        id: 'q3-metcalfe-hypercorrection-effect',
        question: 'What is Janet Metcalfe’s (2017) "Hypercorrection Effect," and what neural mechanism drives it?',
        options: [
          {
            id: 'q3-a',
            text: 'It is the tendency for people to talk twice as fast when they realize they made a grammar mistake.',
          },
          {
            id: 'q3-b',
            text: 'It is the finding that errors made with high confidence are corrected more easily and retained more durably than low-confidence errors, driven by a massive prediction error and P300 surprise response.',
          },
          {
            id: 'q3-c',
            text: 'It is a psychiatric delusion where people believe they are always correct regardless of facts.',
          },
          {
            id: 'q3-d',
            text: 'It is the automatic correction of spelling mistakes by modern word processors.',
          },
        ],
        correctOptionId: 'q3-b',
        explanation: 'The Hypercorrection Effect (Butterfield & Metcalfe, 2001; Metcalfe, 2017) reveals that when an erroneous belief held with high confidence is shattered by corrective feedback, the resulting prediction error captures intense attention, leading to deep, permanent memory updating.',
        pedagogicalRationale: 'Clarifies why high-confidence misconceptions provide fertile ground for durable learning.',
        evidenceNote: 'Metcalfe, J. (2017). Learning from errors. Annual Review of Psychology, 68, 465-489.',
      },
      {
        id: 'q4-productive-vs-unproductive-failure',
        question: 'What is the critical differentiator between "Productive Failure" and "Unproductive Failure" in educational or self-directed learning design?',
        options: [
          {
            id: 'q4-a',
            text: 'Productive failure only happens in math, while unproductive failure happens in history.',
          },
          {
            id: 'q4-b',
            text: 'Productive failure pairs initial exploratory struggle with a mandatory Phase 2 Canonical Consolidation that organizes and synthesizes student attempts against expert models; unproductive failure leaves learners in unguided chaos.',
          },
          {
            id: 'q4-c',
            text: 'Productive failure requires that the student never finds out the correct answer.',
          },
          {
            id: 'q4-d',
            text: 'There is no difference; all failure is equally destructive to learning.',
          },
        ],
        correctOptionId: 'q4-b',
        explanation: 'Kapur & Bielaczyc (2012) emphasized that failure is only productive when followed by structured canonical consolidation that compares, contrasts, and synthesizes student solutions with the canonical expert model. Without Phase 2, unguided exploration degenerates into unproductive frustration.',
        pedagogicalRationale: 'Guards against the dangerous misinterpretation that exploration alone is sufficient.',
        evidenceNote: 'Kapur, M., & Bielaczyc, K. (2012). Designing for productive failure. Journal of the Learning Sciences, 21(1), 45-83.',
      },
    ],
  },
  practicalTask: {
    title: 'The Productive Failure & Generation Priming Protocol',
    summary: 'A 3-step practical protocol to restructure technical study sessions by placing generative struggle before instruction, harvesting high-confidence errors, and accelerating conceptual transfer.',
    steps: [
      {
        id: 'step-invert-instruction-sequence',
        number: 1,
        title: 'Invert the Instructional Sequence (Generation Before Lecture)',
        prompt: 'Select a complex concept, algorithm, or technical design pattern you need to master. Before reading the tutorial, opening the documentation, or watching a lecture, spend 25 minutes attempting to design your own solution from first principles. Write down your initial generative attempt and identify where your homegrown model breaks down:',
        placeholder: 'e.g., Topic: Database Indexing B-Trees. Pre-Instruction Generation: Attempted to design a balanced tree stored on disk. Realized my naive binary search tree requires $O(\\log_2 N)$ disk seeks which is too slow. Tried packing multiple keys per node. Roadblock: How do I handle node splits cleanly during concurrent writes without locking the entire tree?...',
        example: 'Topic: React Concurrent Mode & Fiber Architecture. Pre-Instruction: Tried to design a virtual DOM reconciler that pauses execution when high-priority input arrives. Hit roadblock: How to save execution stack frames in JavaScript without breaking closures?',
        cognitiveRationale: 'Generative problem solving before instruction activates prior knowledge and maps out the specific constraints that make the canonical solution necessary (Kapur, 2012).',
      },
      {
        id: 'step-explicit-pretest-betting',
        number: 2,
        title: 'Explicit Pre-Test Betting (Triggering the Hypercorrection Engine)',
        prompt: 'Before looking up the answer to any practice problem, diagnostic scenario, or code bug, write down your predicted answer AND rate your confidence from 1 to 5. What is your explicit prediction, and what assumption are you betting on?',
        placeholder: 'e.g., Problem: "Why does this Redis cluster fail to failover during a net-split?" My Prediction: "The replica timeout is set too short." Confidence: 5/5. Underlying Assumption: "Replicas only initiate voting if heartbeat drops for 5 seconds."...',
        example: 'Architecture Bug: Predicted that database connections were exhausted due to thread pool deadlocks (Confidence: 5/5). Checked logs and discovered it was actually AWS NAT Gateway port exhaustion.',
        cognitiveRationale: 'Explicitly betting on a high-confidence prediction primes the midbrain prediction error circuitry, maximizing the P300 hypercorrection signal when feedback is revealed (Metcalfe, 2017).',
      },
      {
        id: 'step-canonical-contrastive-synthesis',
        number: 3,
        title: 'Canonical Contrastive Synthesis (Phase 2 Consolidation)',
        prompt: 'Now read the expert documentation or solution. Instead of just reading the correct answer, write a 2-paragraph contrastive synthesis: (1) "Why did the expert model succeed where my generative attempt failed?" and (2) "What invariant feature did the expert model optimize that I overlooked?":',
        placeholder: 'e.g., Contrastive Synthesis: The B-Tree succeeded because it matches disk block page sizes (4KB) to node branching factors (order 100+), reducing tree height to 3-4 seeks. My generative attempt overlooked hardware block boundaries and optimized CPU comparisons instead of I/O latency...',
        example: 'Raft Consensus Contrast: Raft succeeded because it combines log matching with leader election invariants (only candidates with complete logs can be elected). My attempt tried to repair split logs after the fact, causing endless divergence.',
        cognitiveRationale: 'Contrasting student-generated attempts with canonical models transforms procedural instruction into deep, flexible conceptual understanding (Kapur & Bielaczyc, 2012).',
      },
    ],
  },
};
