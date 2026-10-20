import type { Course, Lesson } from '../types/learning.ts';
import { LESSON_ILLUSION_OF_COMPETENCE } from './lesson1_2Data.ts';
import { LESSON_COGNITIVE_LOAD_SCHEMA } from './lesson1_3Data.ts';
import { LESSON_TESTING_EFFECT_DESIRABLE_DIFFICULTY } from './lesson2_1Data.ts';
import { LESSON_SPACED_SCHEDULING } from './lesson2_2Data.ts';
import { LESSON_CALIBRATED_ERROR_SIGNALS } from './lesson3_1Data.ts';
import { LESSON_PERSONAL_LEARNING_OS } from './lesson3_2Data.ts';
import { LESSON_ATTENTION_SERIAL_CONTROL } from './lesson4_1Data.ts';
import { LESSON_DISTRACTION_ECONOMICS } from './lesson4_2Data.ts';

export const PRIMARY_COURSE: Course = {
  id: 'foundations-of-cognition',
  title: 'Human Cognition & Mastery',
  subtitle: 'An evidence-grounded engineering manual for the human brain',
  description: 'Understand how biological neural systems acquire, consolidate, index, and retrieve knowledge—and how to construct durable learning systems based on real cognitive science.',
  chapters: [
    // PART 1: The Biological & Cognitive Architecture of Learning (Chapters 1–4)
    {
      id: 'ch-1-architecture',
      number: 1,
      title: 'The Architecture of Human Memory',
      description: 'The physical constraints and cognitive pathways that govern how new information enters the mind.',
      lessons: [
        {
          id: 'how-learning-actually-works',
          number: '1.1',
          title: 'How Learning Actually Works',
          subtitle: 'From sensory attention to synaptic schema consolidation',
          readingTimeMinutes: 14,
          isAvailable: true,
        },
        {
          id: 'illusion-of-competence',
          number: '1.2',
          title: 'The Illusion of Competence',
          subtitle: 'Why recognition feels identical to mastery (and how to break it)',
          readingTimeMinutes: 12,
          isAvailable: true,
        },
        {
          id: 'cognitive-load-schema',
          number: '1.3',
          title: 'Cognitive Load & Schema Construction',
          subtitle: 'Working Memory Limits and the Architecture of Expertise',
          readingTimeMinutes: 15,
          isAvailable: true,
        },
      ],
    },
    {
      id: 'ch-2-retrieval-spacing',
      number: 2,
      title: 'The Retrieval & Spacing Engine',
      description: 'Why the effort of retrieval fundamentally changes the biological storage strength of a memory.',
      lessons: [
        {
          id: 'testing-effect-mechanics',
          number: '2.1',
          title: 'The Testing Effect & Desirable Difficulty',
          subtitle: 'Why Retrieval Practice Modifies Memory While Rereading Leaves It Unaltered',
          readingTimeMinutes: 16,
          isAvailable: true,
        },
        {
          id: 'spaced-repetition-scheduling',
          number: '2.2',
          title: 'Spaced Scheduling Algorithms',
          subtitle: 'Decay Curves, Stability Intervals, and Adaptive Review Cadences',
          readingTimeMinutes: 18,
          isAvailable: true,
        },
      ],
    },
    {
      id: 'ch-3-deliberate-practice',
      number: 3,
      title: 'Feedback Loops & Meta-Cognition',
      description: 'Closing the error loop to convert brute repetition into high-efficiency skill acquisition.',
      lessons: [
        {
          id: 'calibrated-error-signals',
          number: '3.1',
          title: 'Calibrated Error Signals',
          subtitle: 'Prediction Errors, Feedback Loops, and Self-Correction',
          readingTimeMinutes: 16,
          isAvailable: true,
        },
        {
          id: 'personal-learning-operating-system',
          number: '3.2',
          title: 'The Personal Learning Operating System',
          subtitle: 'Metacognitive Calibration, Deliberate Practice Loops, and Autonomous Study Workflows',
          readingTimeMinutes: 18,
          isAvailable: true,
        },
      ],
    },
    {
      id: 'ch-4-attention-executive',
      number: 4,
      title: 'Attention, Focus & Executive Function',
      description: 'Managing the frontal-striatal attention gate, preventing cognitive fragmentation, and orchestrating deep work.',
      lessons: [
        {
          id: 'attention-serial-control',
          number: '4.1',
          title: 'The Serial Bottleneck & Attentional Control',
          subtitle: 'Anterior cingulate gating and task-switching residue economics',
          readingTimeMinutes: 16,
          isAvailable: true,
        },
        {
          id: 'distraction-economics',
          number: '4.2',
          title: 'Distraction Economics & Deep Work Protocols',
          subtitle: 'Defending working memory from constant micro-interruptions',
          readingTimeMinutes: 16,
          isAvailable: true,
        },
      ],
    },

    // PART 2: Memory Consolidation, Sleep & Neural Plasticity (Chapters 5–7)
    {
      id: 'ch-5-consolidation',
      number: 5,
      title: 'Synaptic & Systems Consolidation',
      description: 'How short-term hippocampal traces are transformed into permanent neocortical schemas.',
      lessons: [
        {
          id: 'ltp-synaptic-plasticity',
          number: '5.1',
          title: 'Long-Term Potentiation & Synaptic Plasticity',
          subtitle: 'Glutamate cascades, dendritic spine remodeling, and Hebbian wiring',
          readingTimeMinutes: 16,
          isAvailable: false,
        },
        {
          id: 'hippocampal-neocortical-dialogue',
          number: '5.2',
          title: 'Hippocampal-Neocortical Dialogue',
          subtitle: 'System-level migration from temporary index to distributed network',
          readingTimeMinutes: 18,
          isAvailable: false,
        },
      ],
    },
    {
      id: 'ch-6-sleep-replay',
      number: 6,
      title: 'Sleep, Replay & Offline Learning',
      description: 'The neurophysiology of slow-wave sleep, sharp-wave ripples, and sleep-dependent memory stabilization.',
      lessons: [
        {
          id: 'slow-wave-sleep-replay',
          number: '6.1',
          title: 'Slow-Wave Sleep & Neural Replay',
          subtitle: 'Compressed time-scale firing sequences in the sleeping brain',
          readingTimeMinutes: 15,
          isAvailable: false,
        },
        {
          id: 'targeted-memory-reactivation',
          number: '6.2',
          title: 'Targeted Memory Reactivation & Rest Cycles',
          subtitle: 'Strategic wakeful rest intervals and memory reactivation triggers',
          readingTimeMinutes: 14,
          isAvailable: false,
        },
      ],
    },
    {
      id: 'ch-7-interference-reconsolidation',
      number: 7,
      title: 'Forgetting, Interference & Memory Reconsolidation',
      description: 'Why forgetting is an adaptive indexing optimization, and how memories destabilize upon retrieval.',
      lessons: [
        {
          id: 'proactive-retroactive-interference',
          number: '7.1',
          title: 'Proactive and Retroactive Interference',
          subtitle: 'Cue overload, associative competition, and memory protection',
          readingTimeMinutes: 15,
          isAvailable: false,
        },
        {
          id: 'reconsolidation-updating',
          number: '7.2',
          title: 'Memory Reconsolidation & Updating',
          subtitle: 'The fragile post-retrieval window for modifying old knowledge',
          readingTimeMinutes: 16,
          isAvailable: false,
        },
      ],
    },

    // PART 3: Schema Construction, Mental Models & Concept Formation (Chapters 8–11)
    {
      id: 'ch-8-chunking-schemas',
      number: 8,
      title: 'Schema Induction & Chunking',
      description: 'Organizing disparate facts into unified mental structures that bypass working memory constraints.',
      lessons: [
        {
          id: 'chunking-mechanics',
          number: '8.1',
          title: 'The Mechanics of Chunking',
          subtitle: 'Compressing complex relational networks into single cognitive units',
          readingTimeMinutes: 15,
          isAvailable: false,
        },
        {
          id: 'hierarchical-knowledge-representation',
          number: '8.2',
          title: 'Hierarchical Knowledge Representation',
          subtitle: 'Building trees, graphs, and ontological maps of domain concepts',
          readingTimeMinutes: 18,
          isAvailable: false,
        },
      ],
    },
    {
      id: 'ch-9-analogy-bridging',
      number: 9,
      title: 'Analogy, Metaphor & Conceptual Bridging',
      description: 'Transferring structural relationships across domains using Gentner structure-mapping theory.',
      lessons: [
        {
          id: 'structure-mapping-analogy',
          number: '9.1',
          title: 'Structure-Mapping & Analogical Transfer',
          subtitle: 'Ignoring surface features to bind relational deep structures',
          readingTimeMinutes: 16,
          isAvailable: false,
        },
        {
          id: 'abstraction-ladders',
          number: '9.2',
          title: 'Abstraction Ladders & Mental Models',
          subtitle: 'Moving dynamically between concrete instances and universal laws',
          readingTimeMinutes: 14,
          isAvailable: false,
        },
      ],
    },
    {
      id: 'ch-10-dual-coding',
      number: 10,
      title: 'Dual Coding & Multimodal Representation',
      description: 'Combining verbal-propositional and non-verbal spatial representations for durable mental models.',
      lessons: [
        {
          id: 'paivio-dual-coding',
          number: '10.1',
          title: "Paivio's Dual Coding Theory",
          subtitle: 'Simultaneous verbal and visual mental representation pathways',
          readingTimeMinutes: 14,
          isAvailable: false,
        },
        {
          id: 'diagrammatic-reasoning',
          number: '10.2',
          title: 'Spatial and Diagrammatic Reasoning',
          subtitle: 'External visual representations as cognitive co-processors',
          readingTimeMinutes: 15,
          isAvailable: false,
        },
      ],
    },
    {
      id: 'ch-11-categorization',
      number: 11,
      title: 'Categorization & Dimensional Analysis',
      description: 'How biological minds carve reality into categories using prototypes, exemplars, and boundary features.',
      lessons: [
        {
          id: 'prototypes-vs-exemplars',
          number: '11.1',
          title: 'Prototypes vs. Exemplars',
          subtitle: 'Statistical central tendencies versus specific remembered instances',
          readingTimeMinutes: 15,
          isAvailable: false,
        },
        {
          id: 'boundary-cases-isolation',
          number: '11.2',
          title: 'Feature Isolation & Boundary Testing',
          subtitle: 'Stress-testing mental models on edge cases and ambiguous inputs',
          readingTimeMinutes: 16,
          isAvailable: false,
        },
      ],
    },

    // PART 4: Deliberate Practice, Skill Acquisition & Motor Learning (Chapters 12–15)
    {
      id: 'ch-12-deliberate-practice',
      number: 12,
      title: "Ericsson’s Deliberate Practice Framework",
      description: 'The science of expert performance: stepping outside the comfort zone with targeted mental representations.',
      lessons: [
        {
          id: 'edge-of-ability-feedback',
          number: '12.1',
          title: 'The Edge of Ability & Immediate Feedback',
          subtitle: 'Designing practice regimens that target specific sub-skill deficits',
          readingTimeMinutes: 18,
          isAvailable: false,
        },
        {
          id: 'expert-mental-representations',
          number: '12.2',
          title: 'Mental Representations in Expert Performance',
          subtitle: 'How grandmasters and elite engineers perceive structural patterns',
          readingTimeMinutes: 20,
          isAvailable: false,
        },
      ],
    },
    {
      id: 'ch-13-automaticity',
      number: 13,
      title: 'Proceduralization & Automaticity',
      description: 'From cognitive friction to autonomous execution: the Fitts & Posner skill progression model.',
      lessons: [
        {
          id: 'fitts-posner-stages',
          number: '13.1',
          title: 'The Three Stages of Skill Acquisition',
          subtitle: 'Cognitive, associative, and autonomous phases of proceduralization',
          readingTimeMinutes: 15,
          isAvailable: false,
        },
        {
          id: 'paradox-of-automation',
          number: '13.2',
          title: 'The Paradox of Automation',
          subtitle: 'Why automated routines degrade flexibility and how to de-automate',
          readingTimeMinutes: 16,
          isAvailable: false,
        },
      ],
    },
    {
      id: 'ch-14-interleaving',
      number: 14,
      title: 'Interleaving & Varied Practice',
      description: 'Why mixing related problem types feels worse during practice but produces vastly superior discrimination.',
      lessons: [
        {
          id: 'blocked-vs-interleaved-practice',
          number: '14.1',
          title: 'Blocked vs. Interleaved Practice',
          subtitle: 'The contextual interference effect and category discrimination',
          readingTimeMinutes: 16,
          isAvailable: false,
        },
        {
          id: 'varied-practice-transfer',
          number: '14.2',
          title: 'Varied Practice & Structural Invariance',
          subtitle: 'Preventing over-fitting to narrow study conditions',
          readingTimeMinutes: 15,
          isAvailable: false,
        },
      ],
    },
    {
      id: 'ch-15-error-driven',
      number: 15,
      title: 'Error-Driven Learning & Failure Analysis',
      description: 'The cognitive power of productive struggle: leveraging pre-mortems, error journals, and generation failures.',
      lessons: [
        {
          id: 'productive-failure-generation',
          number: '15.1',
          title: 'Productive Failure & Generation Effects',
          subtitle: 'Failing before instruction primes the brain for deeper encoding',
          readingTimeMinutes: 16,
          isAvailable: false,
        },
        {
          id: 'error-journaling-protocols',
          number: '15.2',
          title: 'The Error Journaling Protocol',
          subtitle: 'Systematic classification and root-cause post-mortems of learning bugs',
          readingTimeMinutes: 18,
          isAvailable: false,
        },
      ],
    },

    // PART 5: Problem Solving, Transfer & Creative Synthesis (Chapters 16–19)
    {
      id: 'ch-16-transfer',
      number: 16,
      title: 'Near and Far Transfer of Learning',
      description: 'The holy grail of education: applying knowledge acquired in one context to entirely foreign domains.',
      lessons: [
        {
          id: 'specificity-of-transfer',
          number: '16.1',
          title: 'The Specificity of Transfer Problem',
          subtitle: "Thorndike's identical elements and why general transfer is rare",
          readingTimeMinutes: 16,
          isAvailable: false,
        },
        {
          id: 'conditions-for-far-transfer',
          number: '16.2',
          title: 'Conditions for Far Transfer',
          subtitle: 'Deep structural abstraction, multiple contexts, and schema decontextualization',
          readingTimeMinutes: 18,
          isAvailable: false,
        },
      ],
    },
    {
      id: 'ch-17-heuristics',
      number: 17,
      title: 'Heuristics, Algorithms & Problem Decomposition',
      description: 'Cognitive operators for ill-structured domains: means-end analysis, working backward, and sub-goaling.',
      lessons: [
        {
          id: 'means-end-working-backward',
          number: '17.1',
          title: 'Working Backward & Means-End Analysis',
          subtitle: 'Navigating problem search spaces when the forward path is opaque',
          readingTimeMinutes: 16,
          isAvailable: false,
        },
        {
          id: 'subgoal-labeling-scaffolding',
          number: '17.2',
          title: 'Sub-Goal Labeling & Scaffolding',
          subtitle: 'Breaking complex problems into independently solvable cognitive chunks',
          readingTimeMinutes: 15,
          isAvailable: false,
        },
      ],
    },
    {
      id: 'ch-18-biases-epistemic',
      number: 18,
      title: 'Cognitive Biases & Epistemic Traps in Learning',
      description: 'Overcoming Dunning-Kruger calibration curves, confirmation bias, and the sunk cost of failed study techniques.',
      lessons: [
        {
          id: 'dunning-kruger-calibration',
          number: '18.1',
          title: 'Overconfidence & Epistemic Calibration',
          subtitle: 'Dunning-Kruger curves and constructing objective calibration mirrors',
          readingTimeMinutes: 15,
          isAvailable: false,
        },
        {
          id: 'sunk-cost-study-biases',
          number: '18.2',
          title: 'Confirmation Bias & Sunk Cost in Study Methods',
          subtitle: 'Abandoning familiar but empirically bankrupt learning rituals',
          readingTimeMinutes: 14,
          isAvailable: false,
        },
      ],
    },
    {
      id: 'ch-19-creative-insight',
      number: 19,
      title: 'Creative Insight, Incubation & Lateral Synthesis',
      description: 'The neurobiology of the "Aha!" moment: default mode network incubation, relaxation, and associative search.',
      lessons: [
        {
          id: 'incubation-default-mode',
          number: '19.1',
          title: 'Incubation & Unconscious Associative Search',
          subtitle: 'Default mode network activation during mind-wandering and rest',
          readingTimeMinutes: 16,
          isAvailable: false,
        },
        {
          id: 'combinatorial-play-synthesis',
          number: '19.2',
          title: 'Associative Combinatorics & Lateral Synthesis',
          subtitle: 'Cross-pollinating disparate mental models to forge novel solutions',
          readingTimeMinutes: 18,
          isAvailable: false,
        },
      ],
    },

    // PART 6: Motivation, Emotion & the Bio-Energetics of Mastery (Chapters 20–22)
    {
      id: 'ch-20-motivation-drive',
      number: 20,
      title: 'Dopamine, Anticipation & Intrinsic Drive',
      description: 'The neurobiology of motivation: phasic vs tonic dopamine, reward prediction errors, and self-determination.',
      lessons: [
        {
          id: 'dopamine-reward-prediction',
          number: '20.1',
          title: 'Reward Prediction Errors in Motivation',
          subtitle: 'How the brain calibrates drive based on progress and anticipation',
          readingTimeMinutes: 16,
          isAvailable: false,
        },
        {
          id: 'self-determination-theory',
          number: '20.2',
          title: 'Self-Determination in Autonomous Mastery',
          subtitle: 'Autonomy, competence, and relatedness as intrinsic fuel',
          readingTimeMinutes: 15,
          isAvailable: false,
        },
      ],
    },
    {
      id: 'ch-21-stress-performance',
      number: 21,
      title: 'Stress, Arousal & Cognitive Performance',
      description: 'The Yerkes-Dodson inverted-U curve: managing cortisol, test anxiety, and cognitive appraisals.',
      lessons: [
        {
          id: 'yerkes-dodson-cortisol',
          number: '21.1',
          title: 'The Yerkes-Dodson Law & Cortisol Dynamics',
          subtitle: 'How acute stress narrows attention while chronic stress impairs LTP',
          readingTimeMinutes: 16,
          isAvailable: false,
        },
        {
          id: 'emotion-appraisal-regulation',
          number: '21.2',
          title: 'Cognitive Reappraisal & High-Stakes Performance',
          subtitle: 'Reframing physiological arousal from threat to challenge state',
          readingTimeMinutes: 15,
          isAvailable: false,
        },
      ],
    },
    {
      id: 'ch-22-identity-mindset',
      number: 22,
      title: 'Identity, Self-Efficacy & Growth Orientation',
      description: "Albert Bandura's self-efficacy mechanisms and attribution retraining for long-term intellectual perseverance.",
      lessons: [
        {
          id: 'bandura-self-efficacy',
          number: '22.1',
          title: "Bandura's Self-Efficacy Mechanisms",
          subtitle: 'Mastery experiences, vicarious modeling, and emotional regulation',
          readingTimeMinutes: 16,
          isAvailable: false,
        },
        {
          id: 'attribution-retraining-mindset',
          number: '22.2',
          title: 'Attribution Retraining & Belief Systems',
          subtitle: 'Attributing struggle to strategy and effort rather than fixed talent',
          readingTimeMinutes: 15,
          isAvailable: false,
        },
      ],
    },

    // PART 7: Meta-Learning, Systems Design & Lifetime Mastery (Chapters 23–26)
    {
      id: 'ch-23-syllabus-engineering',
      number: 23,
      title: 'Syllabus Engineering & Curriculum Deconstruction',
      description: 'Deconstructing complex engineering domains into directed acyclic dependency graphs (DAGs).',
      lessons: [
        {
          id: 'first-principles-domain-mapping',
          number: '23.1',
          title: 'First-Principles Domain Mapping',
          subtitle: 'Extracting irreducible core concepts from noisy industry documentation',
          readingTimeMinutes: 18,
          isAvailable: false,
        },
        {
          id: 'dependency-graph-sequencing',
          number: '23.2',
          title: 'Prerequisite Dependency Graphs',
          subtitle: 'Sequencing learning to avoid cognitive bottlenecks and circular dependencies',
          readingTimeMinutes: 16,
          isAvailable: false,
        },
      ],
    },
    {
      id: 'ch-24-external-scaffolding',
      number: 24,
      title: 'Tooling, Note-Taking & External Cognitive Scaffolding',
      description: 'The Extended Mind thesis: building external second brains and bidirectional graph notes without the collector fallacy.',
      lessons: [
        {
          id: 'extended-mind-zettelkasten',
          number: '24.1',
          title: 'External Memory Systems & Graph Notes',
          subtitle: 'Bidirectional linking, atomic notes, and avoiding passive hoarding',
          readingTimeMinutes: 18,
          isAvailable: false,
        },
        {
          id: 'digital-tooling-without-hoarding',
          number: '24.2',
          title: 'Digital Tooling without Passive Hoarding',
          subtitle: 'Designing external systems that force synthesis rather than storage',
          readingTimeMinutes: 16,
          isAvailable: false,
        },
      ],
    },
    {
      id: 'ch-25-social-protege',
      number: 25,
      title: 'Social Learning, Peer Review & the Protégé Effect',
      description: 'Learning by teaching: externalizing mental models, adversarial collaboration, and peer blind-spot audits.',
      lessons: [
        {
          id: 'protege-effect-teaching',
          number: '25.1',
          title: 'The Protégé Effect: Learning by Teaching',
          subtitle: 'Why preparing to teach forces rigorous structural reconciliation',
          readingTimeMinutes: 16,
          isAvailable: false,
        },
        {
          id: 'adversarial-peer-review',
          number: '25.2',
          title: 'Adversarial Collaboration & Peer Calibration',
          subtitle: 'Using peer review and debate to shatter shared illusions of competence',
          readingTimeMinutes: 18,
          isAvailable: false,
        },
      ],
    },
    {
      id: 'ch-26-lifetime-architecture',
      number: 26,
      title: 'The Lifetime Learning Architecture',
      description: 'Longitudinal spaced repetition over decades: knowledge half-life and constructing your personal mastery engine.',
      lessons: [
        {
          id: 'longitudinal-spaced-scheduling',
          number: '26.1',
          title: 'Longitudinal Spaced Scheduling over Decades',
          subtitle: 'Managing knowledge retention intervals extending to 10+ years',
          readingTimeMinutes: 20,
          isAvailable: false,
        },
        {
          id: 'personal-mastery-synthesis',
          number: '26.2',
          title: 'The Synthesis Project: Your Personal Mastery Engine',
          subtitle: 'Architecting an enduring, self-evolving system for lifelong cognitive mastery',
          readingTimeMinutes: 24,
          isAvailable: false,
        },
      ],
    },
  ],
};

export const LESSON_HOW_LEARNING_WORKS: Lesson = {
  id: 'how-learning-actually-works',
  chapterId: 'ch-1-architecture',
  number: '1.1',
  title: 'How Learning Actually Works',
  subtitle: 'From sensory attention to synaptic schema consolidation',
  readingTimeMinutes: 14,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'Why does rereading a concept three times feel like total mastery, yet completely vanish the moment you face an empty editor or a blank exam sheet?',
    teaser: 'Most people spend hundreds of hours studying in ways that feel effortless and productive, but generate almost zero durable memory traces.',
    hookNote: 'The brain is an energy-conserving organ that does not passively record incoming text like a hard drive; it prioritizes durable synaptic remodeling when information is actively retrieved, used to solve task demands, or integrated into existing conceptual schemas.',
  },
  prediction: {
    prompt: 'Before reading the science, test your intuition: Which study protocol produces higher durable retention one week later?',
    context: 'Imagine two students preparing for a difficult conceptual assessment with identical total study time (4 hours):',
    options: [
      {
        id: 'opt-reread',
        strategy: 'Protocol Alpha: Repeated Reading & Highlighting',
        description: 'Read the material 4 times through, highlighting key definitions and reviewing highlighted summaries until the text feels smooth and familiar.',
      },
      {
        id: 'opt-retrieval',
        strategy: 'Protocol Beta: Read Once + Active Retrieval Practice',
        description: 'Read the material once, then close the book and spend the remaining time attempting to recall, write explanations from memory, and self-quizzing.',
      },
      {
        id: 'opt-cram',
        strategy: 'Protocol Gamma: Massed Night-Before Immersion',
        description: 'Do no early study, then spend 4 continuous hours the night before absorbing the material so it remains immediately fresh in mind.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-retrieval',
      headline: 'Active Retrieval produces substantially higher delayed retention than restudying—despite feeling significantly more difficult and less fluent.',
      explanation: 'When learners reread text (Protocol Alpha), they experience perceptual fluency: the eye glides smoothly across words, and the brain mistakes the ease of recognition for the strength of storage. In contrast, Protocol Beta forces the brain to reconstruct retrieval pathways from long-term memory. This effortful cognitive generation is precisely what triggers durable memory consolidation.',
      optionFeedback: {
        'opt-reread': {
          title: 'Your Choice: Protocol Alpha (Repeated Reading & Highlighting)',
          verdict: 'The Fluency Illusion (Most Common Metacognitive Trap)',
          analysis: 'Repeated reading feels productive because the eye moves across words with increasing ease. However, this fluency reflects superficial visual familiarity rather than an accessible retrieval pathway. Cognitive experiments consistently show that while rereading supports immediate familiarity, recall drops steeply over subsequent days.',
        },
        'opt-retrieval': {
          title: 'Your Choice: Protocol Beta (Read Once + Active Retrieval Practice)',
          verdict: 'Empirically Supported Strategy (The Testing Effect)',
          analysis: 'Accurate calibration! Even though retrieval feels halting, effortful, and less fluent during study, the cognitive act of generating recall reconstructs and strengthens neural pathways, significantly flattening the rate of forgetting.',
        },
        'opt-cram': {
          title: 'Your Choice: Protocol Gamma (Massed Night-Before Immersion)',
          verdict: 'Immediate Spike Followed by Rapid Forgetting',
          analysis: 'Massed cramming can produce high performance on immediate tests given the next morning because temporary working memory and sensory traces remain fresh. However, without spaced consolidation, decay occurs rapidly over the subsequent 48 to 72 hours, leaving minimal durable knowledge.',
        },
      },
      comparisons: [
        {
          label: 'Repeated Reading & Highlighting (Protocol Alpha)',
          immediateRetention: 'High Familiarity (feels smooth)',
          oneWeekRetention: 'Steep Decay (~30–40% recall)',
          illusionRating: 'High (deceptive fluency)',
          isEmpiricalWinner: false,
        },
        {
          label: 'Active Retrieval Practice (Protocol Beta)',
          immediateRetention: 'Moderate Ease (feels effortful)',
          oneWeekRetention: 'Durable Retention (~65–75% recall)',
          illusionRating: 'Low (accurately reveals gaps)',
          isEmpiricalWinner: true,
        },
        {
          label: 'Massed Night-Before Cramming (Protocol Gamma)',
          immediateRetention: 'Peak Short-Term Trace (high test day)',
          oneWeekRetention: 'Severe Forgetting (<20% recall)',
          illusionRating: 'Extreme (false peak before decay)',
          isEmpiricalWinner: false,
        },
      ],
      evidenceDistinction: 'Empirical Evidence Distinction: The testing effect (the retention superiority of retrieval practice over restudying) is one of the most thoroughly replicated findings in cognitive psychology across verbal, conceptual, and procedural domains. The comparative patterns above reflect typical laboratory retention trajectories (e.g. Roediger & Karpicke) rather than universal benchmarks, as retention varies with prior knowledge and feedback immediacy.',
    },
  },
  coreExplanations: [
    {
      id: 'attention',
      title: '1. Attention: The Non-Negotiable Bottleneck',
      tagline: 'What never enters conscious focus can never be encoded.',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Empirical Consensus',
      summary: 'Your sensory organs absorb tens of megabits of raw environmental stimuli per second, but the conscious processing gateway admits only an extreme trickle. Attention is the brain’s selective gain control: it amplifies selected target signals while actively suppressing competing distractors.',
      mechanisms: [
        {
          label: 'Selective Filtering',
          description: 'Attention is not a passive spotlight; it is an active inhibition mechanism that spends metabolic energy keeping irrelevant visual, auditory, and mental noise from entering working memory.',
        },
        {
          label: 'The Myth of Multitasking',
          description: 'Controlled conscious attention is strictly serial for novel tasks. "Multitasking" during study is actually rapid task-switching, which leaves an "attention residue" and resets working memory buffers.',
        },
        {
          label: 'Salience vs Goal-Directed Focus',
          description: 'Bottom-up attention is hijacked by sudden notifications and high-contrast motion. Top-down attention requires continuous prefrontal executive control, which fatigues quickly without deliberate structure.',
        },
      ],
      keyInsight: 'If you attempt to learn complex material while glancing at notifications, the sensory information literally never passes into working memory. No study method can rescue information that was never attended to.',
      simplifiedModelCaveat: 'Pedagogical note: While "filtering" is a classic cognitive model (dating back to Broadbent), modern neurobiology views attention as distributed synchrony across thalamocortical networks rather than a single physical gatekeeper.',
    },
    {
      id: 'working-memory',
      title: '2. Working Memory: The Fragile Scratchpad',
      tagline: 'A fleeting workspace with finite slots and zero persistence.',
      scientificStatus: 'cognitive-model',
      statusLabel: 'Cognitive Architecture Model',
      summary: 'Working memory is where active conscious reasoning takes place. It is distinct from short-term memory: it does not merely hold information; it manipulates, integrates, and transforms it. However, its capacity is strictly bounded (typically 3 to 4 distinct conceptual chunks in conscious manipulation at any given second).',
      mechanisms: [
        {
          label: 'Finite Chunk Capacity',
          description: 'Novices can only hold roughly 3 to 4 novel elements simultaneously. Once the cognitive load exceeds this capacity, older items are dropped and comprehension breaks down.',
        },
        {
          label: 'Cognitive Load Triad',
          description: 'Intrinsic load (inherent complexity of the topic), Extraneous load (poor explanations, cluttered diagrams, bad UI), and Germane load (the productive cognitive effort dedicated to building schemas).',
        },
        {
          label: 'Chunking as the Antidote',
          description: 'Experts do not possess larger working memory biological hardware; they possess rich long-term schemas that group dozens of related concepts into a single high-level "chunk".',
        },
      ],
      keyInsight: 'Effective learning requires minimizing extraneous clutter so that 100% of working memory bandwidth is reserved for processing the intrinsic difficulty of the concept.',
      simplifiedModelCaveat: 'Model vs Biological Reality: The "slots" metaphor (Baddeley’s phonological loop and visuospatial sketchpad) is an operational engineering abstraction. Biologically, working memory is sustained persistent firing of prefrontal neurons coupled with transient sensory activations.',
    },
    {
      id: 'long-term-memory',
      title: '3. Long-Term Memory: The Interconnected Schema Network',
      tagline: 'Knowledge is not stored as filing-cabinet facts, but as webbed mental structures.',
      scientificStatus: 'neurobiological-mechanism',
      statusLabel: 'Neurobiological & Cognitive Consensus',
      summary: 'Long-term memory has virtually limitless capacity, but facts stored in isolation are nearly impossible to retrieve. Durable knowledge exists as "schemas": organized clusters of knowledge, relations, and procedural patterns that tell you not just what something is, but when, how, and why it interacts with other concepts.',
      mechanisms: [
        {
          label: 'Synaptic Plasticity & LTP',
          description: 'Coordinated neural firing during sustained cognitive processing induces long-term potentiation (LTP)—a lasting enhancement in synaptic transmission supported by structural remodeling and protein synthesis (Bliss & Lømo, 1973; Kandel, 2001).',
        },
        {
          label: 'Systems Consolidation & Replay',
          description: 'Initial declarative memory traces depend on the hippocampus for indexing. Over offline rest and sleep cycles, coordinated neural replay transfers and integrates these representations into neocortical networks for long-term storage (Frankland & Bontempi, 2005; Diekelmann & Born, 2010).',
        },
        {
          label: 'Storage Strength vs Retrieval Strength',
          description: 'A memory can have immense storage strength (it will never be completely erased) but near-zero retrieval strength (you cannot access it right now without a specific cue).',
        },
      ],
      keyInsight: 'You cannot learn a concept by trying to memorize it in a vacuum. You must deliberately attach new ideas to existing anchor concepts already established in your long-term memory network.',
      simplifiedModelCaveat: 'Scientific distinction: The distinction between storage strength and retrieval strength is based on the Bjork New Theory of Disuse, which provides a powerful behavioral model of how access fluctuates even when traces remain physiologically intact.',
    },
    {
      id: 'retrieval-practice',
      title: '4. Retrieval Practice: The Testing Effect',
      tagline: 'Recall is not an assessment of learning; recall IS the learning.',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Empirical Consensus',
      summary: 'Most learners treat testing as an evaluation tool to measure what has been learned. In reality, the act of retrieving an item from memory fundamentally alters the memory trace, making it vastly more accessible in the future. Struggle and difficulty during retrieval signal to the brain that the pathway is vital.',
      mechanisms: [
        {
          label: 'Memory Modification & Reconsolidation',
          description: 'Retrieval is a memory modifier rather than a neutral readout. Behaviorally, it triggers elaborative search and context updating (Karpicke et al., 2014). Neurobiologically, when retrieval involves updating or unexpected conditions, the trace can become temporarily labile, initiating protein-synthesis-dependent reconsolidation (Nader, 2000; Dudai, 2012).',
        },
        {
          label: 'Elaborative Retrieval Paths',
          description: 'When you struggle to remember a fact without looking at the answer, your brain activates alternate associative pathways, creating redundant routes for future retrieval.',
        },
        {
          label: 'Desirable Difficulty',
          description: 'If retrieval is too easy (e.g., looking at flashcards 5 seconds after reading them), little consolidation occurs. The difficulty must be calibrated: challenging enough to require effort, but feasible.',
        },
      ],
      keyInsight: 'Every time you resist the urge to peek at the answer and instead force your brain to generate the explanation from scratch, you significantly flatten the forgetting curve for that concept.',
      simplifiedModelCaveat: 'Empirical Caveat: Retrieval practice only benefits items that can actually be retrieved or where immediate corrective feedback is supplied. Unsuccessful retrieval without feedback can entrench errors.',
    },
    {
      id: 'calibrated-feedback',
      title: '5. Calibrated Feedback: Closing the Error Loop',
      tagline: 'Without an error signal, practice merely reinforces existing misconceptions.',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Empirical Consensus',
      summary: 'In modern cognitive science, discrepancy detection—often formalized as prediction error—is recognized as a major catalyst for schema revision. Feedback provides the objective calibration signal that allows working memory to identify divergences between expected and actual outcomes.',
      mechanisms: [
        {
          label: 'Prediction Discrepancy & Updating',
          description: 'In cognitive architecture, unexpected outcomes produce discrepancy signals. Cortical monitoring systems (such as the anterior cingulate and prefrontal networks) register this divergence, prompting working memory to update schema associations and improve subsequent accuracy (Botvinick et al., 2001; Butterfield & Metcalfe, 2001).',
        },
        {
          label: 'The Hypercorrection Effect',
          description: 'When a learner makes an error with high subjective confidence and receives clear corrective feedback, they remember the correction far more vividly than low-confidence errors.',
        },
        {
          label: 'Timing & Precision',
          description: 'Feedback must be specific and explanatory. Simply telling someone "Wrong" provides no diagnostic signal; explaining the mechanism allows working memory to repair the broken schema link.',
        },
      ],
      keyInsight: 'Do not fear errors during active recall. A high-confidence mistake followed by clear, explanatory feedback produces a powerful corrective signal that drives durable schema revision.',
      simplifiedModelCaveat: 'Theoretical model: While the predictive processing framework (e.g. Friston, Clark) is widely influential in computational neuroscience, specific physiological mechanisms of cortical prediction error propagation remain an active research frontier.',
    },
  ],
  diagram: {
    title: 'The Human Cognitive Pipeline',
    subtitle: 'Click any stage to examine biological capacity, failure modes, and evidence-based engineering rules.',
    stages: [
      {
        id: 'sensory',
        name: 'Sensory Input & Environment',
        subtitle: 'The Unfiltered Deluge',
        capacity: 'Millions of bits / second',
        duration: 'Milliseconds (Iconic & Echoic)',
        role: 'Raw physical photons, acoustics, and tactile signals hitting biological receptors.',
        failureMode: 'Distraction, ambient clutter, sensory fragmentation.',
        evidenceType: 'Perceptual psychophysics',
        practicalFix: 'Eliminate secondary screens, close background tabs, establish clean audio environments.',
      },
      {
        id: 'attention-gate',
        name: 'Attention Gate',
        subtitle: 'The Executive Gain Filter',
        capacity: 'Single focus stream',
        duration: 'Continuous dynamic modulation',
        role: 'Top-down prefrontal inhibition that selects relevant signals and discards noise.',
        failureMode: 'Task-switching residue, notification micro-interruptions.',
        evidenceType: 'Empirical neuroimaging & cognitive psychology',
        practicalFix: 'Use single-task work blocks (25–50 min). Never interleave text-heavy study with social feeds.',
      },
      {
        id: 'working-memory-stage',
        name: 'Working Memory',
        subtitle: 'The Conscious Workspace',
        capacity: '3 to 4 distinct conceptual chunks',
        duration: '10 to 30 seconds without active rehearsal',
        role: 'Holds, manipulates, and decomposes concepts for immediate logical reasoning.',
        failureMode: 'Cognitive overload, jargon saturation, split-attention effect.',
        evidenceType: 'Cognitive Load Theory (Sweller) & Working Memory Model (Baddeley)',
        practicalFix: 'Externalize intermediate notes onto paper or scratchpads; master foundational primitives first.',
      },
      {
        id: 'long-term-stage',
        name: 'Long-Term Memory',
        subtitle: 'The Neocortical Schema Network',
        capacity: 'Virtually unlimited',
        duration: 'Decades to a lifetime (via synaptic consolidation)',
        role: 'Stores interconnected semantic structures, procedural habits, and causal models.',
        failureMode: 'Retrieval pathway decay, isolated inert facts, negative transfer.',
        evidenceType: 'Synaptic plasticity (LTP), offline replay & systems consolidation',
        practicalFix: 'Connect new concepts to known models; test across varying contexts and diverse problem types.',
      },
    ],
    feedbackLoopDescription: 'The Retrieval & Calibration Loop: When you attempt retrieval, information flows backward from Long-Term Memory into Working Memory. Corrective feedback provides a discrepancy signal, allowing monitoring circuits to recalibrate schema connections for durable retention.',
  },
  exercise: {
    title: 'Cognitive Bottleneck Diagnoser',
    instruction: 'Analyze each real-world learning scenario below. Diagnose the primary cognitive bottleneck or mechanism at play, then check your diagnosis for detailed pedagogical analysis.',
    categories: [
      {
        id: 'attention-bottleneck',
        title: 'Attention Fragmentation',
        description: 'Information fails to enter working memory due to task-switching or competing stimuli.',
        badgeStyle: 'border-amber-500/40 text-amber-600 dark:text-amber-400 bg-amber-500/10',
      },
      {
        id: 'working-memory-overload',
        title: 'Working Memory Overload',
        description: 'Too many novel elements presented simultaneously exceed the 3–4 chunk capacity.',
        badgeStyle: 'border-rose-500/40 text-rose-600 dark:text-rose-400 bg-rose-500/10',
      },
      {
        id: 'illusion-of-competence',
        title: 'Passive Illusion of Fluency',
        description: 'Perceptual familiarity with material is mistaken for genuine retrieval mastery.',
        badgeStyle: 'border-blue-500/40 text-blue-600 dark:text-blue-400 bg-blue-500/10',
      },
      {
        id: 'schema-consolidation',
        title: 'Active Schema Consolidation',
        description: 'Effortful recall and structured feedback are successfully building durable long-term paths.',
        badgeStyle: 'border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10',
      },
    ],
    scenarios: [
      {
        id: 'scen-1',
        scenario: 'Elena spends 3 hours highlighting 60 pages in her textbook with fluorescent markers. The text feels intuitive and clear while reading, but two days later she cannot explain the core thesis.',
        realWorldContext: 'Undergraduate student reading biology chapter',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'Highlighting and continuous reading generate high perceptual fluency without requiring the brain to generate retrieval cues. Recognition of words feels like mastery, but leaves the synaptic retrieval network completely unexercised.',
        evidenceBasedFix: 'Replace highlighting with the "Read-Cover-Recite-Check" protocol: after each section, close the book and articulate the central idea from memory.',
      },
      {
        id: 'scen-2',
        scenario: 'Marcus tries to learn React while reading 15 open browser tabs, receiving Slack messages every 4 minutes, and keeping a video tutorial playing on a second monitor.',
        realWorldContext: 'Junior developer trying to learn a new framework',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'Each notification forces an executive context-switch. The attention filter is overwhelmed, resulting in severe attention residue. Novel code syntax never enters stable working memory buffers long enough to be integrated.',
        evidenceBasedFix: 'Turn off secondary monitors, close communication clients for 45-minute sprint blocks, and work on a single minimal code example.',
      },
      {
        id: 'scen-3',
        scenario: 'A tutorial teaches recursion by introducing call stacks, memory frames, base cases, accumulator patterns, and tree traversal all on a single slide with nested notation.',
        realWorldContext: 'Computer science course lecture slide',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'The intrinsic and extraneous load together exceed 7 simultaneous novel variables. Because the student has not yet automated the concept of a single stack frame, working memory collapses.',
        evidenceBasedFix: 'Isolate the variables: first master a physical paper simulation of a single decremented function call, then introduce base cases, and only then tackle tree branches.',
      },
      {
        id: 'scen-4',
        scenario: 'Aria solves a complex problem on paper from memory without looking at notes. When she gets stuck, she spends 4 minutes trying alternative approaches before consulting the solution, noting exactly where her logic diverged.',
        realWorldContext: 'Self-directed engineer studying algorithms',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'This is textbook deliberate retrieval practice with calibrated feedback. The effortful struggle primes associative pathways, and the specific discrepancy between her attempt and the solution produces a strong prediction error signal.',
        evidenceBasedFix: 'This is the gold standard! Continue this approach and schedule a spaced re-test 4 days later to solidify the pathway.',
      },
    ],
  },
  quiz: {
    title: 'Cognitive Verification Assessment',
    instruction: 'Complete all 4 conceptual questions. Answers and pedagogical rationales remain strictly locked until you submit your complete attempt.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1',
        question: 'Why does rereading a textbook chapter multiple times create an "illusion of competence"?',
        options: [
          {
            id: 'q1-a',
            text: 'Because eye muscles fatigue, causing the brain to enter an unfocused trance state.',
          },
          {
            id: 'q1-b',
            text: 'Because perceptual familiarity and smooth recognition are cognitively conflated with the ability to retrieve information without cues.',
          },
          {
            id: 'q1-c',
            text: 'Because long-term memory rejects any information that has been accessed more than twice in 24 hours.',
          },
          {
            id: 'q1-d',
            text: 'Because reading without writing physically damages synaptic dendrites in the hippocampus.',
          },
        ],
        correctOptionId: 'q1-b',
        explanation: 'Recognition is passive and guided by visual stimuli on the page; recall requires internally generating the pathway. The brain interprets the ease of processing existing text as evidence of internal mastery.',
        pedagogicalRationale: 'Learners must recognize that subjective feelings of fluency during study are notoriously poor indicators of durable learning.',
        evidenceNote: 'Demonstrated consistently in metacognitive research (e.g., Koriat & Bjork on ease-of-processing biases).',
      },
      {
        id: 'q2',
        question: 'How do chess grandmasters or senior software architects overcome the biological ~4-chunk limit of working memory?',
        options: [
          {
            id: 'q2-a',
            text: 'By training their working memory to biologically store 25 to 30 independent items at once.',
          },
          {
            id: 'q2-b',
            text: 'By using genetic enhancements that widen their prefrontal cortex biological bandwidth.',
          },
          {
            id: 'q2-c',
            text: 'By accessing rich long-term memory schemas that bundle dozens of related tactical patterns into a single meaningful "chunk".',
          },
          {
            id: 'q2-d',
            text: 'By bypassing working memory entirely and routing perception straight into motor reflexes.',
          },
        ],
        correctOptionId: 'q2-c',
        explanation: 'Experts do not have larger working memory hardware; they have richer long-term schemas. When a master looks at a chessboard or system architecture, they see 2 or 3 high-level patterns rather than 32 individual pieces.',
        pedagogicalRationale: 'Dispels the myth that expertise is raw hardware memory, showing it is structured schema organization.',
        evidenceNote: 'Founded in classic studies on chunking (Chase & Simon, 1973) and validated in modern cognitive load research.',
      },
      {
        id: 'q3',
        question: 'Under the "Testing Effect" (Retrieval Practice), why is a struggle to recall an answer often more valuable than immediately looking it up?',
        options: [
          {
            id: 'q3-a',
            text: 'The effort of searching memory activates related semantic nodes, primes retrieval pathways, and triggers synaptic consolidation upon finding or verifying the answer.',
          },
          {
            id: 'q3-b',
            text: 'Struggle raises cortisol to extreme levels, which burns away older memories.',
          },
          {
            id: 'q3-c',
            text: 'It proves to the instructor that the learner is putting in physical time.',
          },
          {
            id: 'q3-d',
            text: 'Struggle is only useful if the learner never sees the correct answer afterward.',
          },
        ],
        correctOptionId: 'q3-a',
        explanation: 'Effortful retrieval is a memory modifier. The cognitive friction signals that the information is functionally necessary, prompting deeper consolidation and creating alternate associative search routes.',
        pedagogicalRationale: 'Re-frames difficulty from a sign of failure to the actual active mechanism of neural remodeling.',
        evidenceNote: 'Robert Bjork’s concept of "Desirable Difficulties" and Roediger & Karpicke empirical testing effect studies.',
      },
      {
        id: 'q4',
        question: 'What is the role of an unexpected error and immediate explanatory feedback in biological neural networks?',
        options: [
          {
            id: 'q4-a',
            text: 'Errors cause permanent cognitive damage and should be avoided at all costs during the early learning phase.',
          },
          {
            id: 'q4-b',
            text: 'A prediction discrepancy provides an error signal that alerts monitoring circuits to update incorrect schema representations and incorporate corrective feedback.',
          },
          {
            id: 'q4-c',
            text: 'Feedback is only useful if delivered at least one month after the original mistake occurred.',
          },
          {
            id: 'q4-d',
            text: 'Errors only help when the learner had zero confidence in their initial guess.',
          },
        ],
        correctOptionId: 'q4-b',
        explanation: 'The brain updates its model through error-driven discrepancy detection. When an expectation is violated and corrective feedback explains why, cognitive monitoring networks (including the anterior cingulate and prefrontal cortices) signal the mismatch, enabling working memory to repair the schema link (Butterfield & Metcalfe, 2001; Botvinick et al., 2001).',
        pedagogicalRationale: 'Encourages bold testing and highlights why explanatory feedback is essential to complete the learning loop.',
        evidenceNote: 'Predictive processing frameworks and the empirical hypercorrection effect (Butterfield & Metcalfe).',
      },
    ],
  },
  practicalTask: {
    title: 'Audit & Upgrade Your Current Learning Routine',
    summary: 'Translate the 5 cognitive mechanisms (Attention, Working Memory, Schemas, Retrieval, Feedback) into a concrete, personalized engineering change in your daily study or technical work.',
    steps: [
      {
        id: 'step-subject',
        number: 1,
        title: 'Identify Your Target Domain',
        prompt: 'What complex subject, skill, or codebase are you currently attempting to master?',
        placeholder: 'e.g., Distributed systems in Go, React 19 architecture, Linear algebra for machine learning, Neurological diagnosis...',
        example: 'Distributed consensus algorithms in Go (Raft / Paxos)',
        cognitiveRationale: 'Grounding the audit in an immediate real-world priority prevents abstract theory from remaining inert.',
      },
      {
        id: 'step-bottleneck',
        number: 2,
        title: 'Diagnose Your Primary Failure Mode',
        prompt: 'Which of the 4 cognitive bottlenecks is currently leaking the most learning efficiency in your routine?',
        placeholder: 'e.g., "I constantly switch between coding and chat notifications (Attention leak)", or "I watch video tutorials without writing code from memory (Illusion of fluency)"...',
        example: 'Passive illusion of competence: I watch video tutorials and read architecture docs, nodding along, but I freeze when writing the protocol implementation from scratch.',
        cognitiveRationale: 'Pinpointing the exact biological bottleneck directs your energy to the highest-leverage intervention.',
      },
      {
        id: 'step-intervention',
        number: 3,
        title: 'Design a Concrete Retrieval Protocol',
        prompt: 'Formulate an actionable 15-minute protocol that forces effortful retrieval and tight feedback before your next study session:',
        placeholder: 'e.g., "The Blank Sheet Protocol: Close all docs after a chapter. Spend 7 minutes writing down all core components from memory. Spend 3 minutes checking against docs and highlighting errors."...',
        example: 'The 10-Minute Architecture Dump: After studying a paper, close all tabs. Draw the complete state-machine transition diagram and message payloads from memory. Then compare side-by-side with the spec and log missing edge cases in an error journal.',
        cognitiveRationale: 'A concrete behavioral implementation intention creates an actionable trigger that bridges cognitive insight into daily habit.',
      },
    ],
  },
};

export const ALL_LESSONS: Record<string, Lesson> = {
  [LESSON_HOW_LEARNING_WORKS.id]: LESSON_HOW_LEARNING_WORKS,
  [LESSON_ILLUSION_OF_COMPETENCE.id]: LESSON_ILLUSION_OF_COMPETENCE,
  [LESSON_COGNITIVE_LOAD_SCHEMA.id]: LESSON_COGNITIVE_LOAD_SCHEMA,
  [LESSON_TESTING_EFFECT_DESIRABLE_DIFFICULTY.id]: LESSON_TESTING_EFFECT_DESIRABLE_DIFFICULTY,
  [LESSON_SPACED_SCHEDULING.id]: LESSON_SPACED_SCHEDULING,
  [LESSON_CALIBRATED_ERROR_SIGNALS.id]: LESSON_CALIBRATED_ERROR_SIGNALS,
  [LESSON_PERSONAL_LEARNING_OS.id]: LESSON_PERSONAL_LEARNING_OS,
  [LESSON_ATTENTION_SERIAL_CONTROL.id]: LESSON_ATTENTION_SERIAL_CONTROL,
  [LESSON_DISTRACTION_ECONOMICS.id]: LESSON_DISTRACTION_ECONOMICS,
};

export function getLessonById(id: string): Lesson {
  return ALL_LESSONS[id] || LESSON_HOW_LEARNING_WORKS;
}

