import type { Lesson } from '../types/learning.ts';

export const LESSON_LONGITUDINAL_SPACED_SCHEDULING: Lesson = {
  id: 'longitudinal-spaced-scheduling',
  chapterId: 'ch-26-lifetime-architecture',
  number: '26.1',
  title: 'Longitudinal Spaced Scheduling over Decades',
  subtitle: 'Managing knowledge retention intervals extending to 10+ years',
  readingTimeMinutes: 20,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'How can an 80-year-old mathematician still recall algebra formulas learned at age 16 without having reviewed them in 40 years?',
    teaser: 'Popular spaced repetition apps convince us that without daily flashcard drills, memories decay inexorably to zero. But half a century of cognitive research reveals a startling counter-truth: memory has a permanent floor called "Permastore."',
    hookNote: 'In 1984, cognitive psychologist Harry P. Bahrick published a landmark 50-year longitudinal investigation in the Journal of Experimental Psychology: General titled "Semantic Memory in Permastore: Fifty Years of Memory for Spanish Learned in School." Testing 773 individuals who had learned Spanish between 1 and 50 years earlier, Bahrick made an astonishing discovery: while memory declined for the first 3 to 5 years, it then reached a flat asymptotic plateau where 60% to 70% of the remaining vocabulary and grammar was permanently retained for 50+ years with zero active practice or rehearsal. In 1993, Bahrick and his family published a 56-month vocabulary spacing study proving that spacing practice across 56 days doubled retention 8 years later compared to 14-day spacing. Concurrently, Nicholas Cepeda, Harold Pashler, and Doug Rohrer (2006, 2008) in Psychological Science solved the temporal scheduling puzzle: optimal retention requires an Inter-Study Interval (ISI) of 10% to 20% of the target Retention Interval (RI). For multi-decade mastery, reviewing every day or month is counter-productive; intervals must expand to 1 to 2 years. Furthermore, Piotr Wozniak (1995, 2005), inventor of the SuperMemo algorithm, formalized the Two-Component Model of Memory (Retrievability $R$ vs Stability $S$), showing how to aggressively prune review queues and avoid "flashcard bankruptcy" to construct a permanent lifetime knowledge engine.',
  },
  prediction: {
    prompt: 'A national aerospace and defense agency establishes a 10-year longitudinal knowledge retention program for 120 propulsion and nuclear safety engineers. The objective is to maintain deep, unassisted diagnostic recall of mission-critical reactor physics, thermodynamics, and failure recovery protocols across a full 10-year career cycle. The cohort is divided into three 10-year maintenance methodologies:\n\nCondition A ("Daily & Weekly Micro-Spaced Flashcard Drills"): Engineers maintain an active Anki/SuperMemo deck of 8,000 atomized technical flashcards, reviewing cards on standard short intervals (1 to 60 days) for 20 minutes every morning throughout the 10 years.\n\nCondition B ("Unscheduled Naturalistic On-the-Job Exposure"): Engineers complete no scheduled review drills. They rely purely on everyday engineering tasks, incident post-mortems, and internal documentation lookups when problems arise.\n\nCondition C ("Decadal Macro-Spacing & Permastore Consolidation Protocol"): Engineers use expanding intervals calibrated to Cepeda & Pashler’s 10–20% rule (Year 1: 30-day intervals; Year 2: 90-day intervals; Year 3: 180-day intervals; Years 4–10: annual macro-spaced diagnostic checkpoints). Combined with Wozniak’s queue pruning, atomized trivia cards are deleted, stabilized concepts are graduated to annual 1-page synthesis maps, and daily review load is kept near zero (Bahrick, 1984; Cepeda et al., 2008; Wozniak, 2005).\n\nAt Year 10, all engineers take a comprehensive, closed-book, unannounced 6-hour propulsion failure diagnostic and mathematical derivation examination. Which methodology will achieve the highest score while maintaining a sustainable lifetime review workload?',
    context: 'All 120 engineers possessed identical baseline technical degrees and identical scores on their initial qualification exams:',
    options: [
      {
        id: 'opt-condition-a-micro-drills',
        strategy: 'Hypothesis A: Daily & Weekly Micro-Spaced Flashcard Drills (Condition A)',
        description: 'Condition A will perform best because daily spaced retrieval practice keeps neural pathways continually refreshed and prevents any forgetting.',
      },
      {
        id: 'opt-condition-b-naturalistic',
        strategy: 'Hypothesis B: Unscheduled Naturalistic Exposure (Condition B)',
        description: 'Condition B will perform best because real-world work provides authentic contextual learning without the artificial burden of flashcards.',
      },
      {
        id: 'opt-condition-c-decadal-permastore',
        strategy: 'Hypothesis C: Decadal Macro-Spacing & Permastore Consolidation (Condition C)',
        description: 'Condition C will achieve superior 10-year retention (84.6%), eliminate flashcard bankruptcy (92% completion rate vs 11% in Condition A), and require only 8 hours of annual review (Bahrick, 1984; Cepeda et al., 2008; Wozniak, 2005).',
      },
    ],
    outcome: {
      winningOptionId: 'opt-condition-c-decadal-permastore',
      headline: 'Micro-Spacing Collapses into Review Debt: Decadal Macro-Spacing and Queue Pruning Harness Permastore for Lifelong Retention (Bahrick, 1984; Cepeda et al., 2008; Wozniak, 2005).',
      explanation: 'Cognitive science and longitudinal scheduling mathematics explain why Condition C overwhelmingly outperformed Conditions A and B. In Condition A, engineers suffered from "Flashcard Bankruptcy and Desirable Difficulty Collapse" (Wozniak, 2005; Bjork, 1994). Maintaining 8,000 atomized cards on short intervals generated 150+ reviews daily; within 2 years, 89% of engineers abandoned the system due to cognitive burnout. Furthermore, reviewing cards too frequently violated Cepeda & Pashler’s 10–20% rule: high-frequency retrieval occurs at high Retrievability ($R \\approx 1.0$), providing near-zero desirable difficulty and failing to multiply Memory Stability ($S$). In Condition B, naturalistic on-the-job exposure suffered from "Selective Domain Atrophy": engineers encountered routine daily tasks frequently, but rare critical emergency procedures and foundational derivations were never encountered, decaying to near-zero over 10 years. In stark contrast, Condition C succeeded by operationalizing three empirical laws. First, Bahrick’s Permastore Law (1984): semantic schemas spaced across years stabilize into neocortical structures that resist forgetting for decades. Second, Cepeda & Pashler’s 10–20% Rule (2008): for a 10-year retention interval (3,650 days), optimal spacing between reviews is 1 to 2 years (365–730 days), maximizing retrieval effort and stability expansion. Third, Wozniak’s Queue Pruning: actively graduating stabilized concepts to annual 1-page synthesis maps kept review workload down to just 8 hours per year.',
      optionFeedback: {
        'opt-condition-a-micro-drills': {
          title: 'Your Choice: Hypothesis A (Daily & Weekly Micro-Spaced Drills)',
          verdict: 'Collapsed into Flashcard Bankruptcy',
          analysis: 'Reviewing 8,000 atomized cards daily causes severe review debt, psychological burnout, and 89% abandonment, while violating optimal decadal spacing ratios (Wozniak, 2005).',
        },
        'opt-condition-b-naturalistic': {
          title: 'Your Choice: Hypothesis B (Unscheduled Naturalistic Exposure)',
          verdict: 'Suffered Severe Selective Atrophy',
          analysis: 'Relying on natural work leaves rare, high-consequence failure protocols unreviewed, allowing deep causal schemas to decay over a decade (Bahrick, 1984).',
        },
        'opt-condition-c-decadal-permastore': {
          title: 'Your Choice: Hypothesis C (Decadal Macro-Spacing & Permastore Consolidation)',
          verdict: 'Confirmed by Bahrick (1984), Cepeda et al. (2008), and Wozniak (2005)',
          analysis: 'Correct! Expanding intervals to 1–2 years maximizes stability gains, harnesses neocortical permastore, and keeps lifetime review maintenance permanently sustainable.',
        },
      },
      comparisons: [
        {
          label: '10-Year Unassisted Propulsion & Nuclear Physics Derivation Score',
          immediateRetention: '48.2% (Condition A: 89% Abandoned Deck)',
          oneWeekRetention: '39.4% (Condition B: Naturalistic Drift)',
          illusionRating: '84.6% (Condition C: Decadal Macro-Spacing)',
          isEmpiricalWinner: true,
        },
        {
          label: 'Annual Time Invested in Spaced Maintenance Practice',
          immediateRetention: '121.6 hours/year (Condition A: Crushing Daily Grind)',
          oneWeekRetention: '0 hours/year (Condition B: Zero Deliberate Practice)',
          illusionRating: '7.8 hours/year (Condition C: Annual Permastore Audit)',
          isEmpiricalWinner: false,
        },
        {
          label: 'System Retention Rate (Participants Still Actively Using System at Year 10)',
          immediateRetention: '11.2% (Condition A: 88.8% Flashcard Bankruptcy)',
          oneWeekRetention: 'N/A (Condition B: No System)',
          illusionRating: '92.4% (Condition C: 100% Sustainable Lifestyle Habit)',
          isEmpiricalWinner: false,
        },
      ],
      evidenceDistinction: 'The decisive empirical distinction is between short-term micro-spacing and multi-year macro-spacing. Spaced repetition software is tuned for exams 30 days away, where daily reviews make sense. But for multi-decade retention, the optimal inter-study interval is 1 to 2 years. Attempting to maintain lifelong knowledge with short intervals guarantees flashcard bankruptcy; true mastery requires graduating knowledge into permastore schemas audited annually.',
    },
  },
  coreExplanations: [
    {
      id: 'bahrick-permastore-fifty-year-retention',
      title: 'Harry Bahrick (1984, 1993): The Permastore Phenomenon & 50-Year Retention',
      tagline: 'Why deeply consolidated semantic knowledge reaches a permanent floor that resists decay for half a century',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Longitudinal Cognitive Psychology Landmark (Bahrick, 1984, 1993; Bahrick & Hall, 1991)',
      summary: 'Harry Bahrick demonstrated that semantic knowledge learned with distributed spacing across years enters Permastore: a durable state where 60% to 70% of material is retained for 50+ years with zero rehearsal. Spacing practice across months and years during initial acquisition is the decisive factor that moves knowledge into permanent neocortical storage.',
      mechanisms: [
        {
          label: 'The Two-Phase Forgetting Curve: 3–5 Year Decay, 50-Year Plateau',
          description: 'Hermann Ebbinghaus’s classical 1885 forgetting curve depicted memory as a continuous exponential decline toward zero. Harry Bahrick proved this was an artifact of studying meaningless nonsense syllables. In real-world semantic domains (Spanish, mathematics, spatial topography), forgetting follows a two-phase curve: knowledge declines moderately over the first 3 to 5 years, but then completely halts, plateauing onto an asymptote where 60% to 70% of remaining knowledge persists indefinitely.',
        },
        {
          label: 'The 56-Day Practice Spacing Multiplier (Bahrick et al., 1993)',
          description: 'In a 56-month longitudinal study on vocabulary acquisition, Bahrick and his family tested spacing intervals of 14, 28, and 56 days. When tested 1, 2, 3, and 8 years later, the 56-day spacing condition retained more than double the vocabulary of the 14-day condition, requiring fewer total study sessions. Spacing practice across months during acquisition forces deep cellular and synaptic consolidation.',
        },
        {
          label: 'Neocortical Schema Crystallization vs Hippocampal Retrieval',
          description: 'Recent neuroimaging and systems consolidation research validates Bahrick’s behavioral findings. Fresh memories rely on the hippocampus and medial temporal lobe, which decay rapidly. Long-interval spaced retrieval forces memory traces to transfer to neocortical distributed networks, binding into preexisting semantic schemas that no longer require hippocampal coordination.',
        },
        {
          label: 'Initial Acquisition Depth and Re-Exposure Thresholds',
          description: 'Bahrick identified that entering permastore requires exceeding a critical acquisition threshold. Students who took three or more courses in a subject (accumulating repeated spaced exposure over multiple semesters) retained nearly identical percentages whether tested 5 years or 50 years later, whereas students with only one semester experienced steep forgetting.',
        },
      ],
      keyInsight: 'Knowledge is not an evaporating liquid; when structured with multi-month spacing, it enters permastore—a permanent neocortical architecture that lasts 50+ years.',
      simplifiedModelCaveat: 'Permastore preserves deep conceptual schemas and high-frequency vocabulary, but arbitrary low-frequency trivia (e.g. obscure command flags) will still fade without occasional refreshers.',
    },
    {
      id: 'cepeda-pashler-optimal-spacing-ratio-decades',
      title: 'Cepeda, Pashler & Rohrer (2006, 2008): Optimal Spacing Ratios & The 10–20% Rule',
      tagline: 'The mathematical ratio governing inter-study intervals for multi-year and multi-decade knowledge maintenance',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Experimental Psychology & Temporal Meta-Analysis Consensus (Cepeda et al., 2006, 2008)',
      summary: 'Nicholas Cepeda, Harold Pashler, and Doug Rohrer proved that optimal memory retention follows an inverted-U curve governed by the 10–20% rule: the optimal Inter-Study Interval (ISI) is 10% to 20% of the target Retention Interval (RI). For 10-year retention, reviews must be spaced 1 to 2 years apart; high-frequency daily reviews destroy desirable difficulty.',
      mechanisms: [
        {
          label: 'The Non-Monotonic Inverted-U Spacing Curve',
          description: 'Cepeda et al. tested thousands of learners across varying gap intervals (from minutes to months) and test delays (from days to a year). They proved that retention does not increase monotonically with spacing. Instead, it forms an inverted-U: too short an interval causes overlearning with minimal encoding benefit; too long an interval causes complete retrieval failure; the peak lies at 10–20% of the retention interval.',
        },
        {
          label: 'The 10–20% ISI/RI Ratio Mathematical Formula',
          description: 'If you want to remember something for a Retention Interval $RI$, your Inter-Study Interval $ISI$ should be approximately $0.10 \\times RI$ to $0.20 \\times RI$. For a test in 30 days, optimal spacing is 3 to 6 days. For a 1-year goal (365 days), optimal spacing is 35 to 70 days. For a 10-year goal (3,650 days), optimal spacing is 365 to 730 days (1 to 2 years).',
        },
        {
          label: 'The Illusion of Competence in High-Frequency Review',
          description: 'Reviewing a card every 3 days when your goal is decade-long retention feels effortless because retrievability is near 100%. However, Robert Bjork’s principle of Desirable Difficulty dictates that when retrieval is too easy, zero memory storage strength is accumulated. High-frequency drilling creates a temporary illusion of fluency while producing near-zero long-term stability expansion.',
        },
        {
          label: 'Macro-Spacing: The Transition from Days to Years',
          description: 'Lifetime learning requires transitioning through distinct temporal gears: Gear 1 (Acquisition: days 1–14), Gear 2 (Consolidation: months 1–6), and Gear 3 (Macro-Spacing: years 1–10). Attempting to keep knowledge in Gear 1 for a decade is an engineering failure that guarantees system collapse.',
        },
      ],
      keyInsight: 'To remember something for 10 years, you must space your reviews 1 to 2 years apart. Reviewing more often wastes time and prevents deep stability consolidation.',
      simplifiedModelCaveat: 'The 10–20% rule assumes the concept was thoroughly understood and encoded during initial learning; low-quality or half-understood items will be forgotten if spaced across years.',
    },
    {
      id: 'wozniak-two-component-memory-stability-retrievability',
      title: 'Piotr Wozniak: The Two-Component Model (Stability vs Retrievability) & Queue Pruning',
      tagline: 'How differentiating stability from retrievability prevents review debt and flashcard bankruptcy',
      scientificStatus: 'cognitive-model',
      statusLabel: 'SuperMemo Computational Memory Modeling (Wozniak & Gorzelanczyk, 1994; Wozniak, 2005)',
      summary: 'Piotr Wozniak proved that memory requires two independent variables: Retrievability ($R$) and Stability ($S$). As stability expands to years, reviews must be pushed out. To prevent "flashcard bankruptcy," lifetime learners must actively prune their queues, deleting trivia and graduating stabilized concepts to structural synthesis.',
      mechanisms: [
        {
          label: 'Retrievability ($R$) vs Stability ($S$)',
          description: 'Wozniak demonstrated that a single "memory strength" value is mathematically inadequate. Retrievability ($R \\in [0, 1]$) represents the instantaneous probability of recalling an item right now, which decays as $R = e^{-t/S}$. Stability ($S$) represents the biological durability of the trace, defined as the time required for $R$ to drop from 100% to 90%. An item can have low $R$ but high $S$ (a childhood address that takes 10 seconds to remember, but will never be truly forgotten).',
        },
        {
          label: 'The Exponential Stability Multiplier ($S$-Inc)',
          description: 'Each successful retrieval event increases stability $S$ by a multiplier factor ($S_{new} = S_{old} \\times C$). Crucially, the multiplier is greatest when retrievability $R$ is low (near 90% forgetting threshold). Once an item has been successfully retrieved at intervals of 30 days, 90 days, and 300 days, its stability $S$ exceeds 1,000+ days (nearly 3 years). Keeping it on a 30-day review schedule is a catastrophic waste of attention.',
        },
        {
          label: 'The Pathology of Flashcard Bankruptcy (Review Debt Crisis)',
          description: 'If a learner adds 10 new cards daily for 3 years without aggressive queue pruning, their review queue will accumulate 10,000+ cards. Soon, missing just one week of study produces a terrifying backlog of 1,500 due cards. This triggers "Flashcard Bankruptcy": psychological overwhelm, dread, and eventual total abandonment of the learning system.',
        },
        {
          label: 'Strategic Forgetting, Queue Pruning & Knowledge Graduation',
          description: 'Sustainable lifetime learning requires a strict knowledge lifecycle: (1) The Minimum Information Principle: formulate only irreducible, atomic cards; (2) Leech Pruning: automatically delete or rewrite cards that fail more than 4 times; (3) Graduation: once stability $S > 365$ days, remove the item from daily flashcard queues and graduate it to an annual structural synthesis checklist.',
        },
      ],
      keyInsight: 'Memory Stability multiplies with each successful recall. Graduate high-stability concepts to multi-year audits and prune trivia to keep your lifetime queue under 20 minutes a day.',
      simplifiedModelCaveat: 'Queue pruning requires ruthless honesty about what knowledge is truly high-leverage; pruning critical foundational invariants because they are difficult to review will create leaky prerequisites.',
    },
  ],
  diagram: {
    title: 'The Longitudinal Permastore & Stability Expansion Engine',
    subtitle: 'From short-term micro-spacing to permanent neocortical permastore over decades',
    stages: [
      {
        id: 'stage-1-initial-acquisition-micro-spacing',
        name: '1. Initial Acquisition & Micro-Spacing (Days 1–30)',
        subtitle: 'Establishing hippocampal traces through rapid expanding feedback',
        capacity: 'High-frequency encoding & baseline consolidation',
        duration: 'Days 1 to 30 post-learning',
        role: 'The learner encounters new concepts, builds initial atomic flashcards or active recall prompts, and reviews them at expanding intervals (Day 1, 3, 7, 14, 30) to establish initial synaptic consolidation.',
        failureMode: 'Massed cramming without initial spacing, leading to 90% trace decay within 48 hours.',
        evidenceType: 'Micro-Spaced Retrieval & Synaptic LTP (Bjork, 1994; Ebbinghaus, 1885)',
        practicalFix: 'Review new material within 24 hours of first reading, then space the second review to Day 4.',
      },
      {
        id: 'stage-2-intermediate-expansion-schema-integration',
        name: '2. Intermediate Expansion & Schema Integration (Months 1–12)',
        subtitle: 'Expanding intervals from weeks to months while binding into schemas',
        capacity: 'Hippocampal to neocortical systems consolidation',
        duration: 'Month 1 to Month 12',
        role: 'Reviews expand to 60, 120, and 240 days. The learner stops reviewing isolated flashcards and begins synthesizing concepts into 1-page domain diagrams, testing whether components can be derived from first principles.',
        failureMode: 'Trapping cards in short-interval review loops, creating an unsustainable daily card backlog.',
        evidenceType: 'The 10–20% Optimal Spacing Rule (Cepeda et al., 2006, 2008)',
        practicalFix: 'Push intervals past 60 days once a card is retrieved correctly twice in a row.',
      },
      {
        id: 'stage-3-long-range-spacing-transition',
        name: '3. Long-Range Spacing Transition (Years 1–5)',
        subtitle: 'Crossing the 3-year threshold where forgetting curve reaches asymptote',
        capacity: 'Permastore entry & stability expansion ($S > 1,000$ days)',
        duration: 'Year 1 to Year 5',
        role: 'Reviews occur on multi-year intervals (e.g. at Year 1, Year 2.5, Year 5). The learner engages in effortful derivation at low retrievability ($R \\approx 0.85$), multiplying stability $S$ into thousands of days.',
        failureMode: 'Abandoning review entirely before reaching the 3-year asymptote, causing the trace to slip below threshold.',
        evidenceType: 'The 56-Day Spacing Multiplier (Bahrick et al., 1993)',
        practicalFix: 'Schedule a single comprehensive domain derivation session exactly 1 year and 3 years after initial mastery.',
      },
      {
        id: 'stage-4-permastore-stabilization-annual-checkpoints',
        name: '4. Permastore Stabilization & Annual Checkpoints (Years 5–20+)',
        subtitle: 'Reaching the asymptotic plateau: 60–70% permanent retention',
        capacity: 'Immune to exponential decay; permanent neocortical schema',
        duration: 'Decades 1 to 5',
        role: 'Knowledge has entered Permastore. It is virtually immune to further forgetting. The learner executes a lightweight annual "Permastore Checkpoint" (e.g. 1 hour on New Year’s Day) to verify the top 50 architectural invariants of their career.',
        failureMode: 'Assuming every minor detail entered permastore, mistaking conceptual immunity for photographic recall.',
        evidenceType: 'Fifty Years of Memory in Permastore (Bahrick, 1984; Bahrick & Hall, 1991)',
        practicalFix: 'Compile a Master Invariants Checklist of your career’s 50 core principles and review it once every December.',
      },
      {
        id: 'stage-5-lifelong-retrievability-maintenance-queue-pruning',
        name: '5. Lifelong Retrievability Maintenance & Queue Pruning',
        subtitle: 'Ruthless strategic forgetting and queue hygiene for lifetime sustainability',
        capacity: 'Sustainable review bounded under 15 minutes daily',
        duration: 'Lifelong continuous discipline',
        role: 'The learner continuously prunes their knowledge base: deleting obsolete tooling syntax, graduating mature items to annual checklists, and maintaining an active daily queue strictly bounded below 20 cards.',
        failureMode: 'Flashcard Bankruptcy: allowing active card queues to grow to thousands of items until system abandonment occurs.',
        evidenceType: 'Two-Component Memory & Queue Pruning (Wozniak, 2005)',
        practicalFix: 'Enforce a hard ceiling: if your daily review queue exceeds 30 cards, declare a pruning holiday and delete the bottom 25% of low-utility cards.',
      },
    ],
    feedbackLoopDescription: 'Failed derivations during the annual Stage 4 Permastore Checkpoint loop directly back to Stage 2: injecting a targeted 90-day intermediate refresher rather than restarting from zero.',
  },
  exercise: {
    title: 'Decadal Retention & Review Debt Audit Lab',
    instruction: 'Evaluate four real-world lifetime learning workflows. Identify the cognitive scheduling pathology or success mode, classify it into the correct domain category, and apply the evidence-based decadal fix.',
    categories: [
      {
        id: 'schema-consolidation',
        title: 'Permastore Graduation & Macro-Spaced Scheduling',
        description: 'Expanding intervals to 1–2 years, graduating stabilized knowledge to annual audits, and harnessing neocortical permastore.',
        badgeStyle: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      },
      {
        id: 'illusion-of-competence',
        title: 'Premature Graduation (False Fluency Assumption)',
        description: 'Abandoning review after 2 weeks of successful study, mistaking temporary working memory fluency for permastore stability.',
        badgeStyle: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
      },
      {
        id: 'working-memory-overload',
        title: 'Flashcard Bankruptcy & Review Debt Collapse',
        description: 'Accumulating thousands of atomized trivia cards on short intervals until daily backlog causes total system abandonment.',
        badgeStyle: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      },
      {
        id: 'attention-bottleneck',
        title: 'Equal-Interval Treadmill (Short-Interval Overlearning)',
        description: 'Reviewing cards on fixed 14-day intervals indefinitely, wasting immense cognitive effort with near-zero desirable difficulty.',
        badgeStyle: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      },
    ],
    scenarios: [
      {
        id: 'scenario-1-medical-student-anki-bankruptcy',
        scenario: 'A resident physician accumulates 18,000 Anki flashcards during medical school. During her intensive surgical residency, she misses 10 days of reviews due to 80-hour hospital shifts. When she opens the app, she faces a backlog of 2,400 due cards. Feeling overwhelmed by dread and exhaustion, she deletes the app from her phone entirely and never reviews her foundational pharmacology again.',
        realWorldContext: 'Medical Residency Spaced Repetition Crisis',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'This is Flashcard Bankruptcy caused by unpruned review debt (Wozniak, 2005). The learner accumulated thousands of atomized cards without stability graduation or queue pruning, turning a learning tool into a source of toxic cognitive overload.',
        evidenceBasedFix: 'Execute Wozniak’s Queue Pruning: delete all low-utility fact cards, graduate mature cards ($S > 180$ days) to an annual permastore checklist, and cap daily reviews at 20 cards.',
      },
      {
        id: 'scenario-2-fixed-monthly-flashcard-treadmill',
        scenario: 'A software engineer has reviewed the exact same 500 Linux command syntax flashcards every 30 days for six consecutive years. He gets 99% of the cards right instantly in under 2 seconds. When asked why he keeps reviewing them monthly, he responds: "If I don’t review them every month, I’m terrified I will forget everything."',
        realWorldContext: 'Senior DevOps Systems Administration Ritual',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'This is the Equal-Interval Treadmill (Cepeda et al., 2008). Reviewing items with multi-year stability at fixed 30-day intervals tests them at $R \\approx 1.0$, producing zero desirable difficulty and wasting cognitive attention on overlearning.',
        evidenceBasedFix: 'Apply Cepeda & Pashler’s 10–20% rule: expand review intervals exponentially to 1 year and 3 years, freeing up hundreds of hours of attention for novel skills.',
      },
      {
        id: 'scenario-3-two-week-bootcamp-premature-graduation',
        scenario: 'A marketing manager completes an intensive 2-week Python data science bootcamp. On Day 14, he scores 95% on the final coding project. Convinced that the knowledge is permanently locked into his brain, he never reviews the syntax again. Eighteen months later, when asked to write a simple pandas dataframe groupby aggregation, he cannot remember the syntax or the function names.',
        realWorldContext: 'Career Transition Coding Bootcamp',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'This is Premature Graduation. The learner confused temporary performance fluency at the end of a massed course with permanent storage strength (Bjork, 1994; Bahrick, 1984). Without intermediate spacing across months, knowledge decays rapidly before ever reaching the 3-year permastore plateau.',
        evidenceBasedFix: 'Implement the multi-stage spacing funnel: schedule active recall derivation sessions at Month 1, Month 3, Month 6, and Year 1 before graduating the skill.',
      },
      {
        id: 'scenario-4-decade-long-systems-architect-permastore',
        scenario: 'A principal systems architect maintains mastery of distributed consistency models by reviewing a single 2-page handwritten synthesis diagram every January. During the session, she closes her notes and re-derives the proof of the FLP Impossibility Result and Raft leader election safety from scratch, checking her derivation against primary papers. She has maintained this ritual for 15 years with 95% recall fidelity.',
        realWorldContext: 'Principal Distributed Systems Architecture Practice',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'This is textbook Permastore Graduation & Macro-Spaced Scheduling (Bahrick, 1984; Cepeda et al., 2008). Spacing annual closed-book derivations at low retrievability ($R \\approx 0.85$) maximizes stability expansion while maintaining permanent neocortical schema integration with near-zero time cost.',
        evidenceBasedFix: 'Maintain this annual permastore cadence and mentor junior engineers by having them participate in the annual derivation audit.',
      },
    ],
  },
  quiz: {
    title: 'Verification Assessment: Longitudinal Spaced Scheduling & Permastore',
    instruction: 'Demonstrate rigorous comprehension of Bahrick’s permastore phenomenon, Cepeda & Pashler’s 10–20% spacing rule, and Wozniak’s two-component model of memory.',
    passingScorePercent: 100,
    questions: [
      {
        id: 'q1-bahrick-permastore-fifty-year',
        question: 'In Harry Bahrick’s landmark 50-year longitudinal studies on semantic memory (1984, 1993), what trajectory does knowledge retention follow over five decades?',
        options: [
          {
            id: 'opt-a',
            text: 'Continuous exponential decay toward absolute zero, requiring daily flashcard reviews to prevent complete extinction.',
          },
          {
            id: 'opt-b',
            text: 'Knowledge declines moderately over the first 3 to 5 years, after which it plateaus onto a flat asymptotic floor ("Permastore") where 60% to 70% remains stable for 50+ years without rehearsal.',
          },
          {
            id: 'opt-c',
            text: 'Knowledge increases automatically over 50 years without any initial learning due to biological brain maturation.',
          },
          {
            id: 'opt-d',
            text: 'Knowledge is completely forgotten within 30 days unless reinforced with monetary rewards.',
          },
        ],
        correctOptionId: 'opt-b',
        explanation: 'Bahrick (1984) proved that real-world semantic knowledge does not decay to zero. Instead, it follows a two-phase curve: moderate loss during the first 3 to 5 years post-learning, followed by a permanent plateau ("Permastore") where 60% to 70% of the remaining knowledge is preserved for up to 50 years even with zero active rehearsal.',
        pedagogicalRationale: 'Shatters the myth that all memories inevitably fade to zero without constant drilling, introducing the empirical concept of Permastore.',
        evidenceNote: 'Cites Harry P. Bahrick (1984) Semantic Memory in Permastore: Fifty Years of Memory for Spanish Learned in School (JEP: General).',
      },
      {
        id: 'q2-cepeda-optimal-spacing-ratio',
        question: 'According to the large-scale empirical studies by Nicholas Cepeda, Harold Pashler, and Doug Rohrer (2006, 2008), what is the optimal ratio between the Inter-Study Interval (ISI) and the target Retention Interval (RI)?',
        options: [
          {
            id: 'opt-a',
            text: 'The ISI should always be 24 hours, regardless of whether the goal is 1 week or 10 years.',
          },
          {
            id: 'opt-b',
            text: 'The ISI should be roughly equal to the RI (100% ratio), meaning you should only study once every 10 years.',
          },
          {
            id: 'opt-c',
            text: 'The optimal ISI is approximately 10% to 20% of the target Retention Interval; for a 10-year goal, reviews should be spaced 1 to 2 years apart.',
          },
          {
            id: 'opt-d',
            text: 'Spacing intervals have no measurable impact on retention; only total hours spent reading matter.',
          },
        ],
        correctOptionId: 'opt-c',
        explanation: 'Cepeda, Pashler, and Rohrer (2006, 2008) established that spacing follows an inverted-U function where the optimal gap between study sessions (ISI) is roughly 10% to 20% of the duration you want to retain the material (RI). For multi-year and decade-long retention, reviewing every day or month is counter-productive; reviews must expand to 1 to 2 years.',
        pedagogicalRationale: 'Forces the student to calculate and understand the mathematical relationship between spacing intervals and long-term retention goals.',
        evidenceNote: 'Cites Nicholas J. Cepeda et al. (2008) Timing of spaced practice in learning (Psychological Science).',
      },
      {
        id: 'q3-wozniak-stability-retrievability',
        question: 'In Piotr Wozniak’s Two-Component Model of Memory (SuperMemo SM-17), how are Memory Retrievability ($R$) and Memory Stability ($S$) formally distinguished?',
        options: [
          {
            id: 'opt-a',
            text: 'Retrievability is the instantaneous probability of successful recall right now ($R = e^{-t/S}$), while Stability is the physical durability of the trace, defined as the time it takes for $R$ to drop from 100% to 90%.',
          },
          {
            id: 'opt-b',
            text: 'Retrievability measures how many flashcards you own, while Stability measures your typing speed.',
          },
          {
            id: 'opt-c',
            text: 'Retrievability applies only to visual images, while Stability applies only to mathematical numbers.',
          },
          {
            id: 'opt-d',
            text: 'Retrievability and Stability are identical synonyms for general intelligence quotient (IQ).',
          },
        ],
        correctOptionId: 'opt-a',
        explanation: 'Wozniak proved that memory strength requires two dimensions: Retrievability ($R \\in [0, 1]$), the volatile probability of retrieving a memory at time $t$, and Stability ($S$), the biological durability of the trace (measured in days, months, or years) determining how slowly retrievability declines. Successful recall at low $R$ dramatically expands $S$.',
        pedagogicalRationale: 'Instills the formal two-component computational model of memory needed to understand long-interval spacing algorithms.',
        evidenceNote: 'Cites Piotr Wozniak & Gorzelanczyk (1994) and Wozniak (2005) Theoretical aspects of the two-component model of long-term memory.',
      },
      {
        id: 'q4-flashcard-debt-queue-pruning',
        question: 'What is "Flashcard Bankruptcy" in longitudinal spaced repetition systems, and what is the evidence-based protocol to prevent it (Wozniak, 2005)?',
        options: [
          {
            id: 'opt-a',
            text: 'Running out of disk space on your computer; prevented by purchasing cloud storage subscriptions.',
          },
          {
            id: 'opt-b',
            text: 'Accumulating thousands of atomized trivia cards whose daily review load grows linearly until it causes burnout; prevented by aggressive queue pruning, deleting leeches, and graduating high-stability concepts to annual synthesis audits.',
          },
          {
            id: 'opt-c',
            text: 'Forgetting your master password; prevented by writing it down on paper.',
          },
          {
            id: 'opt-d',
            text: 'Flashcard bankruptcy cannot be prevented and is an unavoidable biological fate for all learners after age 25.',
          },
        ],
        correctOptionId: 'opt-b',
        explanation: 'Flashcard bankruptcy occurs when learners add too many low-utility cards without stability graduation, creating a review debt backlog that triggers cognitive overload and abandonment. The solution is ruthless queue pruning: deleting low-value facts, eliminating leeches, and graduating high-stability knowledge ($S > 1$ year) to annual macro-spaced audits.',
        pedagogicalRationale: 'Provides actionable psychological and technical tools to manage long-term review debt and maintain sustainable lifetime habits.',
        evidenceNote: 'Cites Piotr Wozniak (2005) Twenty rules of formulating knowledge in spaced repetition.',
      },
    ],
  },
  practicalTask: {
    title: 'The 3-Step Decadal Spacing Protocol',
    summary: 'Construct a permanent, sustainable decadal knowledge maintenance system using optimal spacing ratios, queue pruning, and annual permastore audits.',
    steps: [
      {
        id: 'step-1-calculate-optimal-isi-ri-ratio',
        number: 1,
        title: 'Calculate Your 10–20% Macro-Spacing Schedule for a Decadal Goal',
        prompt: 'Select a core technical domain you want to retain for the next 10 years (3,650 days). Apply Cepeda & Pashler’s 10–20% rule to establish your long-range spacing intervals. Write down the explicit calendar dates for your Year 1, Year 2, and Year 4 review checkpoints.',
        placeholder: 'e.g. Domain: "Distributed Consensus & Raft Invariants". Retention Goal: 10 Years (3,650 days). Optimal ISI: 365 to 730 days (10–20%). Schedule: Initial acquisition Month 1; Intermediate audit at Month 6; First macro-spaced checkpoint at Year 1.5; Second macro-spaced checkpoint at Year 3.5.',
        example: 'Domain: "Compiler Construction & Abstract Syntax Trees". 10-Year Target. Schedule: Jan 2026 (Acquisition), July 2026 (6-Month review), Jan 2028 (2-Year checkpoint), Jan 2031 (5-Year permastore checkpoint).',
        cognitiveRationale: 'Translates the theoretical 10–20% ISI/RI formula into concrete multi-year calendar commitments, preventing premature overlearning or catastrophic forgetting (Cepeda et al., 2008).',
      },
      {
        id: 'step-2-audit-review-debt-and-prune-queue',
        number: 2,
        title: 'Audit Review Debt & Execute Aggressive Queue Pruning',
        prompt: 'Review your current note-taking or spaced repetition system. Identify and categorize 10 items into: (a) Delete (low-utility trivia that can be looked up in 3 seconds), (b) Rewrite (leech cards that fail repeatedly into high-level causal diagrams), and (c) Graduate (mature items with stability > 1 year).',
        placeholder: 'e.g. Deleted: 5 obscure bash flag cards. Rewrote: Concurrency deadlock card rewritten into a 1-page visual resource allocation graph. Graduated: 3 foundational database indexing cards moved to the annual permastore audit.',
        example: 'Deleted: 4 memorized API parameter cards. Rewrote: TCP slow-start formula converted to a congestion window vs RTT diagram. Graduated: CAP theorem trade-off matrix graduated to annual review.',
        cognitiveRationale: 'Aggressive queue pruning eliminates review debt and prevents flashcard bankruptcy, keeping the daily maintenance workload bounded and sustainable over decades (Wozniak, 2005).',
      },
      {
        id: 'step-3-establish-annual-permastore-checkpoint',
        number: 3,
        title: 'Establish an Annual Permastore Checkpoint & Schema Synthesis',
        prompt: 'Design an Annual Permastore Checkpoint ritual for your career’s top 20 foundational invariants. Define the exact date (e.g. first weekend in January), the closed-book derivation format (e.g. blank whiteboard), and the benchmark criteria for successful schema retention.',
        placeholder: 'e.g. Ritual Date: Every January 2nd (2 hours). Format: Closed-book derivation on an empty whiteboard. Challenge: Draw the complete memory layout of a process (stack, heap, text, data) and derive the P99 tail latency formula from first principles without looking at notes.',
        example: 'Ritual Date: Annual Winter Solstice review. Format: 90-minute closed-book synthesis essay. Challenge: Explain the mathematical derivation of backpropagation and cross-entropy loss from raw calculus primitives.',
        cognitiveRationale: 'Closed-book annual derivation at low retrievability ($R \\approx 0.85$) maximizes stability expansion, moving knowledge into permanent neocortical permastore (Bahrick, 1984; Bjork, 1994).',
      },
    ],
  },
};
