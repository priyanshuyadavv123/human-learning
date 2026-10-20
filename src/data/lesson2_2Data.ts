import type { Lesson } from '../types/learning.ts';

export const LESSON_SPACED_SCHEDULING: Lesson = {
  id: 'spaced-repetition-scheduling',
  chapterId: 'ch-2-retrieval-spacing',
  number: '2.2',
  title: 'Spaced Scheduling Algorithms',
  subtitle: 'Decay Curves, Stability Intervals, and Adaptive Review Cadences',
  readingTimeMinutes: 18,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'Why do two students who spend the exact same 10 hours studying an engineering syllabus achieve wildly different outcomes: one forgets 90% within three weeks, while the other remembers 85% two years later? The difference is not IQ or genetics—it is the temporal distribution of when those 10 hours occurred.',
    teaser: 'Cramming floods short-term working memory recency buffers. Spacing exploits the mathematical kinetics of synaptic protein synthesis.',
    hookNote: 'Hermann Ebbinghaus discovered in 1885 that human forgetting is not linear—it follows an exponential decay curve where over 50% of newly encoded knowledge evaporates within 24 hours. However, each time you perform effortful retrieval just as the trace is about to fade, the decay curve flattens: the stability half-life doubles or triples. Piotr Wozniak formalized this into the SuperMemo algorithms (SM-2), and modern cognitive science has refined it into the Free Spaced Repetition Scheduler (FSRS) (Ebbinghaus, 1885; Wozniak, 1990; Cepeda et al., 2006).',
  },
  prediction: {
    prompt: 'Before reviewing the mathematical models of spaced retrieval, calibrate your scheduling intuition: Which distribution of study time produces the highest retention for an advanced engineering certification exam occurring 6 months after learning?',
    context: 'Three cohorts of software engineers allocate exactly 12 hours of total study time to master 300 technical concepts across a 6-month period:',
    options: [
      {
        id: 'opt-massed',
        strategy: 'Protocol Alpha (Massed Cramming)',
        description: 'Learners spend all 12 hours crammed into a single intensive weekend immediately before the exam.',
      },
      {
        id: 'opt-linear',
        strategy: 'Protocol Beta (Fixed Linear Spacing)',
        description: 'Learners spend 1 hour every 2 weeks for 12 weeks, reviewing concepts at a constant linear 14-day cadence.',
      },
      {
        id: 'opt-expanding',
        strategy: 'Protocol Gamma (Expanding Spaced Intervals)',
        description: 'Learners space reviews at expanding intervals: Day 1, Day 3, Day 10, Day 25, and Day 60, multiplying intervals after each successful retrieval.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-expanding',
      headline: 'Expanding Spaced Intervals (Protocol Gamma) produces over 300% higher long-term retention at 6 months (84% vs 12%) while requiring zero additional study hours (Cepeda et al., 2006; Wozniak, 1990).',
      explanation: 'Massed cramming (Protocol Alpha) creates high immediate scores for 24–48 hours, but the memory trace has near-zero Storage Strength—retention crashes to 12% at 6 months. Fixed linear spacing (Protocol Beta) performs better (48%), but either over-reviews easy cards (wasting time) or reviews hard cards too late. Expanding intervals (Protocol Gamma) perfectly time retrieval attempts to the moment of near-forgetting, triggering maximal synaptic reconsolidation and pushing retention to 84%.',
      optionFeedback: {
        'opt-massed': {
          title: 'Your Choice: Protocol Alpha (Massed Cramming)',
          verdict: 'The Ephemeral Cramming Illusion (Ebbinghaus, 1885)',
          analysis: 'Massed cramming is the default strategy for university students because it yields immediate short-term confidence. But within 3 weeks of the exam, over 80% of the material is completely erased from memory. High immediate access masks near-zero storage durability.',
        },
        'opt-linear': {
          title: 'Your Choice: Protocol Beta (Fixed Linear Spacing)',
          verdict: 'Sub-Optimal Linear Cadence',
          analysis: 'Linear spacing is significantly better than cramming, but memory decay is exponential, not linear. A fixed 14-day gap is too long for newly acquired concepts (causing complete memory lapses) and too short for consolidated concepts (wasting time when retrieval strength is still saturated).',
        },
        'opt-expanding': {
          title: 'Your Choice: Protocol Gamma (Expanding Spaced Intervals)',
          verdict: 'Empirically Supported Strategy (Optimal Spacing & FSRS Kinetics)',
          analysis: 'Outstanding pedagogical calibration! By geometrically expanding intervals (1d → 3d → 10d → 25d → 60d), each review catches the memory trace just before it crosses the retrieval threshold, maximizing storage strength gains (ΔSS = f(1/RS)) and cementing lifetime durability.',
        },
      },
      comparisons: [
        {
          label: 'Massed Cramming (Protocol Alpha)',
          immediateRetention: '85% (High recency buffer)',
          oneWeekRetention: '35% (Rapid decay)',
          illusionRating: 'Extremely High (feels like total mastery during cramming)',
          isEmpiricalWinner: false,
        },
        {
          label: 'Fixed Linear Spacing (Protocol Beta)',
          immediateRetention: '72% (Even distribution)',
          oneWeekRetention: '58% (Moderate decay)',
          illusionRating: 'Moderate (inflexible intervals cause lapses on hard items)',
          isEmpiricalWinner: false,
        },
        {
          label: 'Expanding Spaced Intervals (Protocol Gamma)',
          immediateRetention: '76% (Calibrated)',
          oneWeekRetention: '84% at 6 months (Minimal decay)',
          illusionRating: 'Calibrated; minimizes total review time while maximizing durability',
          isEmpiricalWinner: true,
        },
      ],
      evidenceDistinction: 'Empirical Evidence Distinction: The Spacing Effect is one of the most robust phenomena in human memory, replicated in over 800 peer-reviewed studies across 140 years (Cepeda et al., 2006; Carpenter et al., 2012). While the qualitative superiority of spacing over cramming is universally accepted, exact algorithmic parameter tuning (e.g. power-law vs negative exponential decay models) is an active area of optimization in computational psychometrics (Ye, 2022).',
    },
  },
  coreExplanations: [
    {
      id: 'ebbinghaus-decay-curve',
      title: '1. The Ebbinghaus Forgetting Curve & Mathematical Decay',
      tagline: 'Why memory decay is exponential and why linear review schedules fail',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Empirical Consensus',
      summary: 'In 1885, German psychologist Hermann Ebbinghaus published the first quantitative studies of human memory decay. Using nonsense syllables to isolate pure memory mechanisms, Ebbinghaus demonstrated that forgetting does not occur at a steady, linear rate; instead, retention follows a steep negative exponential decay curve where the vast majority of memory loss happens in the first 24 to 48 hours following encoding.',
      mechanisms: [
        {
          label: 'The Exponential Decay Equation: R(t) = e^(-t/S)',
          description: 'Memory retrievability R(t)—the probability of successfully recalling an item at time t—decays exponentially as a function of elapsed time t divided by memory stability S. When stability is low (S = 1 day), retrievability drops below 50% in roughly 18 hours. When stability is high (S = 100 days), retrievability remains above 90% for months.',
        },
        {
          label: 'The Ebbinghaus Savings Method (1885)',
          description: 'Even when an item appears completely forgotten (conscious recall is zero), relearning the item takes significantly less time and fewer repetitions than learning it initially. This "savings" metric proves that a sub-threshold latent trace persists in long-term memory, waiting to be reactivated.',
        },
        {
          label: 'The Permastore Phenomenon (Bahrick, 1984)',
          description: 'Harry Bahrick tracked foreign language vocabulary retention over 50 years. He discovered that knowledge maintained through distributed practice over several years eventually enters "permastore"—a stabilized state where decay effectively halts, remaining accessible for decades without further review.',
        },
      ],
      keyInsight: 'Because forgetting is steepest immediately after learning, the first review must happen quickly (within 24–48 hours). Waiting a week to review freshly learned material guarantees you will have to relearn it from scratch.',
      simplifiedModelCaveat: 'While Ebbinghaus modeled decay with exponential equations, modern psychophysics suggests that human memory decay over very long intervals follows a power-law distribution (Wixted & Ebbesen, 1991), where the rate of decay slows down as time progresses.',
    },
    {
      id: 'expanding-intervals-sm2-fsrs',
      title: '2. Expanding Interval Algorithms: SM-2, Stability Multipliers, and FSRS',
      tagline: 'How algorithmic schedulers calculate the optimal moment of near-forgetting',
      scientificStatus: 'cognitive-model',
      statusLabel: 'Validated Cognitive Architecture Model',
      summary: 'In the 1980s and 1990s, Piotr Wozniak developed the SuperMemo series of algorithms (culminating in SM-2), transforming the theoretical spacing effect into a computable optimization engine. Modern spaced repetition systems, such as the Free Spaced Repetition Scheduler (FSRS; Ye, 2022), model memory along two key axes: Stability (S, how long the memory lasts) and Retrievability (R, probability of recall today).',
      mechanisms: [
        {
          label: 'Memory Stability (S) as Retention Half-Life',
          description: 'Stability S is defined mathematically as the time (in days) required for retrievability R to decay from 100% to a target threshold (typically 90%). If S = 10 days, the learner has a 90% chance of recalling the item 10 days after the last successful review.',
        },
        {
          label: 'The Stability Expansion Multiplier: S_(n+1) = S_n * EF',
          description: 'Each time a learner successfully retrieves an item when retrievability is near the target threshold (R ≈ 90%), the cognitive effort triggers synaptic reconsolidation, multiplying the stability by an Ease Factor (EF, typically 1.5 to 2.5). The review interval expands geometrically: 1 day → 3 days → 8 days → 20 days → 50 days.',
        },
        {
          label: 'The Lapse Reset Penalty',
          description: 'If a learner fails to recall an item during a review (a lapse), retrievability has fallen to near zero. The scheduling algorithm must immediately collapse stability back to baseline (S = 1 day) and flag the concept for rapid restabilization, preventing accumulated failure.',
        },
      ],
      keyInsight: 'The goal of spaced repetition is not to review frequently, but to review as infrequently as possible while maintaining a 90% retention rate. Every successful expanding review buys you a dramatically larger window of freedom.',
      simplifiedModelCaveat: 'SM-2 assumes a single static Ease Factor per card, which can suffer from "ease hell" when cards are rated inconsistently. Modern FSRS uses continuous 17-parameter DSR (Difficulty, Stability, Retrievability) optimization to dynamically fit individual forgetting curves.',
    },
    {
      id: 'spacing-effect-optimal-lags',
      title: '3. The Spacing Effect & Empirical Optimal Lag Ratios',
      tagline: 'Why the ideal gap between study sessions depends strictly on your retention target',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Empirical Consensus',
      summary: 'How long should the gap be between your study sessions? In a landmark study of 1,354 participants across 26 different inter-study intervals, Cepeda, Vul, Rohrer, Wixted, and Pashler (2006) revealed that the optimal study gap is not fixed—it depends directly on the desired retention interval (how long you need to remember the information before the test or real-world application).',
      mechanisms: [
        {
          label: 'The 10%–20% Optimal Lag Rule (Cepeda et al., 2006)',
          description: 'To maximize retention at a given test delay, the optimal gap between practice sessions is roughly 10% to 20% of the retention interval. If the exam is in 1 week (7 days), review after 1 day (14% gap). If the exam is in 1 year (365 days), practice sessions should be spaced 3 to 6 weeks apart (~10–15% gap).',
        },
        {
          label: 'The Inverted-U Lag Retention Curve',
          description: 'Plotting retention against spacing gap produces an inverted-U curve: gaps that are too short (e.g. massed cramming or 1-hour delays) fail because retrieval is too easy (high RS yields zero ΔSS). Gaps that are too long fail because the trace has completely decayed, turning retrieval into impossible struggle.',
        },
        {
          label: 'Contextual Variability & Encoding Diversity',
          description: 'Spacing practice across days and weeks ensures that each retrieval event occurs in a distinct physiological, psychological, and environmental context. This multi-context encoding attaches a rich, diverse network of retrieval cues to the memory trace, rendering it accessible across arbitrary situations.',
        },
      ],
      keyInsight: 'Do not space your reviews arbitrarily. Calculate your real-world target date, and calibrate your inter-study intervals to roughly 10–20% of that time horizon.',
      simplifiedModelCaveat: 'The 10–20% rule applies to single-lag study designs (two study sessions followed by a test). In iterative expanding schedules (like Anki or HUMAN LEARNING), each successive successful review increases the optimal subsequent lag.',
    },
  ],
  diagram: {
    title: 'The Spaced Scheduling & Stability Expansion Engine',
    subtitle: 'How expanding review cadences flatten the forgetting curve from hours to decades',
    stages: [
      {
        id: 'initial-encoding-fragile',
        name: 'Stage 1: Initial Encoding & Fragile Trace (Day 0)',
        subtitle: 'Steep exponential decay in progress',
        capacity: 'High initial activation, rapid cellular decay',
        duration: '0 to 24 hours post-encoding',
        role: 'Initial encoding creates a fragile synaptic trace with low baseline stability (S_0 ≈ 1 day). Retrievability drops rapidly from 100% to ~50% within 24 hours.',
        failureMode: 'No immediate review: waiting >48 hours leads to complete trace extinction, forcing full relearning.',
        evidenceType: 'Empirical consensus (Ebbinghaus 1885; Wozniak 1990)',
        practicalFix: 'Execute the first retrieval review exactly 24 hours after initial lesson completion.',
      },
      {
        id: 'first-expanding-review',
        name: 'Stage 2: First Retrieval Review & Stability Tripling (Day 1–3)',
        subtitle: 'The Desirable Difficulty intersection',
        capacity: 'Hippocampal pattern completion under mild decay',
        duration: 'Day 1 to Day 3',
        role: 'Retrieving the trace when R ≈ 90% triggers NMDA receptor activation and protein synthesis, resetting R to 100% and multiplying stability (S_1 ≈ 3–4 days).',
        failureMode: 'Reviewing too early (e.g. 10 minutes later): zero retrieval struggle produces zero storage gain.',
        evidenceType: 'Replicated cognitive architecture (Bjork 1994; Cepeda 2006)',
        practicalFix: 'Ensure at least one sleep cycle occurs between initial learning and the first review.',
      },
      {
        id: 'second-expanding-review',
        name: 'Stage 3: Second Expanding Review & Schema Hardening (Day 10–14)',
        subtitle: 'Exponential curve flattening',
        capacity: 'Neocortical distributed associative search',
        duration: 'Day 10 to Day 14',
        role: 'Because stability expanded to S_1 = 3 days, retrievability decays at 1/3 the initial rate. Reviewing at Day 10 catches the trace at R ≈ 85–90%, expanding stability to S_2 ≈ 20–25 days.',
        failureMode: 'Rigid linear scheduling: reviewing on Day 4 wastes cognitive effort on already-fluent traces.',
        evidenceType: 'Empirical consensus (Wozniak 1990; Ye 2022)',
        practicalFix: 'Multiply review intervals geometrically (interval * 2.2) rather than adding fixed days.',
      },
      {
        id: 'permastore-consolidation',
        name: 'Stage 4: Neocortical Permastore & Lifelong Maintenance (Day 60+)',
        subtitle: 'Permanent memory consolidation',
        capacity: 'Distributed neocortical synaptic consolidation',
        duration: 'Months to decades',
        role: 'After 4–5 successful expanding retrievals, stability reaches S > 180 days. Knowledge enters Bahrick’s "permastore", requiring only annual maintenance checks.',
        failureMode: 'Total abandonment: failing to do annual maintenance can still cause cue degradation over multi-year intervals.',
        evidenceType: 'Empirical consensus (Bahrick 1984; Wixted 2004)',
        practicalFix: 'Maintain a lightweight annual review queue for critical career-defining mental models.',
      },
    ],
    feedbackLoopDescription: 'The Stability Expansion Loop: Each cycle through Stages 1–4 multiplies the stability parameter S. As S expands from 1 day to 100+ days, the slope of the Ebbinghaus forgetting curve flattens towards zero, locking knowledge into permanent long-term memory with minimal ongoing maintenance.',
  },
  exercise: {
    title: 'Spaced Scheduling Diagnostic: Identify the Scheduling Pathology',
    instruction: 'Analyze each real-world engineering learning scenario and identify which spaced scheduling dynamic or pathology is primarily operating.',
    categories: [
      {
        id: 'schema-consolidation',
        title: 'Optimal Expanding Spaced Schedule',
        description: 'Geometrically expanding review cadences timed to the verge of forgetting, maximizing storage stability.',
        badgeStyle: 'var(--success-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Massed Cramming / False Fluency Trap',
        description: 'Compressing practice into short intense bursts that generate temporary fluency but catastrophic 3-week decay.',
        badgeStyle: 'var(--danger-border)',
      },
      {
        id: 'working-memory-overload',
        title: 'Lapse Neglect / Inadequate Restabilization',
        description: 'Failing to reset review intervals after an incorrect retrieval, allowing broken concepts to rot.',
        badgeStyle: 'var(--warning-border)',
      },
      {
        id: 'attention-bottleneck',
        title: 'Sub-Optimal Linear Cadence',
        description: 'Using static fixed review intervals that over-practice easy cards and under-practice fragile concepts.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-adaptive-spaced-engineer',
        realWorldContext: 'Distributed Systems Certification',
        scenario: 'Anya studies 50 core consensus and replication concepts. She reviews them on Day 1, Day 3, Day 10, Day 25, and Day 60. Whenever she recalls an item with high confidence, her scheduler expands the interval by 2.2x. At the 6-month certification exam, she recalls 92% of the material with near-zero pre-exam stress.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'Anya implemented an optimal expanding spaced schedule. Her reviews caught memory traces at the point of ~90% retrievability, triggering maximum synaptic reconsolidation and expanding trace stability geometrically.',
        evidenceBasedFix: 'Maintain this expanding interval engine for all foundational professional competencies.',
      },
      {
        id: 'scen-cramming-post-exam-wipe',
        realWorldContext: 'Computer Science Final Exams',
        scenario: 'Kevin pulls two consecutive all-nighters before his algorithms final, studying for 16 hours straight. He scores an A on the test on Friday morning. Three weeks later during a job interview, when asked to implement Dijkstra’s algorithm from memory, he cannot remember whether the algorithm uses a queue or a stack.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'Kevin fell into the Massed Cramming Trap. High immediate access during the exam was driven entirely by short-term recency buffers, but permanent Storage Strength was near zero. Without spaced reconsolidation, the trace followed Ebbinghaus’s steep decay curve, dropping to near-zero within 21 days.',
        evidenceBasedFix: 'Distribute study hours across expanding intervals rather than massing them in the final 48 hours.',
      },
      {
        id: 'scen-static-sunday-reviewer',
        realWorldContext: 'Language Learning Routine',
        scenario: 'Liam has a digital deck of 200 vocabulary words. Every Sunday morning at 10 AM, he reviews all 200 cards in a fixed linear loop. He notices that 50 of the words are so easy he could recall them in his sleep, while 30 words are consistently forgotten every single Sunday.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'Liam is trapped in a Sub-Optimal Linear Cadence. Linear review schedules treat all concepts identically, wasting precious attention on consolidated cards (where high RS yields zero storage gain) while failing to catch fragile cards before they decay past the retrieval threshold.',
        evidenceBasedFix: 'Migrate to an adaptive spaced scheduler (SM-2 or FSRS) where review intervals expand individually based on demonstrated performance.',
      },
      {
        id: 'scen-lapse-ignorer',
        realWorldContext: 'Cloud Architecture Prep',
        scenario: 'Chloe has a flashcard on AWS IAM role delegation that had reached a 60-day interval. During a review, she completely blanks on the trust relationship JSON syntax. Annoyed, she reads the answer, clicks "Good / Keep Schedule," and leaves the card in the 60-day bucket. Two months later, she misses the same question on a live client review.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'Chloe suffered from Lapse Neglect. When a retrieval lapse occurs, retrievability has fallen to zero and the trace stability is broken. Failing to reset the interval to Day 1 guarantees future failure because the broken trace cannot survive another 60-day gap without rapid restabilization.',
        evidenceBasedFix: 'Enforce the strict Lapse Reset Rule: whenever you fail to recall an item, collapse its interval back to 1 day and restabilize it with immediate feedback.',
      },
    ],
  },
  quiz: {
    title: 'Spaced Scheduling & Memory Kinetics Assessment',
    instruction: 'Validate your understanding of the Ebbinghaus forgetting curve, stability expansion mathematics, and optimal spacing lag ratios.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-ebbinghaus-kinetics',
        question: 'Under Ebbinghaus’s mathematical forgetting curve, during which time window does the steepest rate of memory loss occur?',
        options: [
          {
            id: 'q1-a',
            text: 'Between day 30 and day 60 after learning.',
          },
          {
            id: 'q1-b',
            text: 'Within the first 24 to 48 hours following initial encoding, after which decay flattens asymptotically.',
          },
          {
            id: 'q1-c',
            text: 'At a perfectly constant rate of 2% loss every single day for 50 days.',
          },
          {
            id: 'q1-d',
            text: 'Decay only begins after 3 months of complete non-use.',
          },
        ],
        correctOptionId: 'q1-b',
        explanation: 'Ebbinghaus (1885) discovered that forgetting follows an exponential or power-law curve: over 50% of new information is lost within the first 24–48 hours. After this initial drop, the decay rate slows down and flattens asymptotically. This proves that early review (within 1–2 days) is critical to prevent complete trace loss.',
        pedagogicalRationale: 'Clarifies that forgetting is front-loaded, making rapid early review non-negotiable.',
        evidenceNote: 'Ebbinghaus, H. (1885). Über das Gedächtnis: Untersuchungen zur experimentellen Psychologie.',
      },
      {
        id: 'q2-fsrs-stability-expansion',
        question: 'In modern spaced repetition models (SM-2, FSRS), what happens to memory stability (S) when a learner successfully retrieves an item at the target retention threshold (R ≈ 90%)?',
        options: [
          {
            id: 'q2-a',
            text: 'Stability remains unchanged; review intervals must always remain fixed at 7 days.',
          },
          {
            id: 'q2-b',
            text: 'Stability is multiplied by an ease factor or expansion coefficient, geometrically lengthening the time required for retrievability to decay back to 90%.',
          },
          {
            id: 'q2-c',
            text: 'Stability collapses to zero, requiring the learner to study the item every hour.',
          },
          {
            id: 'q2-d',
            text: 'Stability increases linearly by exactly 1.0 day regardless of retrieval difficulty.',
          },
        ],
        correctOptionId: 'q2-b',
        explanation: 'In spaced scheduling algorithms (Wozniak, 1990; Ye, 2022), each successful effortful retrieval multiplies the memory trace’s stability parameter S by an expansion factor (typically 1.5–2.5x). Because S represents the retention half-life, the review intervals expand geometrically (e.g. 1d → 3d → 8d → 20d → 50d), minimizing total review time.',
        pedagogicalRationale: 'Teaches the mathematical logic of expanding interval scheduling.',
        evidenceNote: 'Wozniak, P. A. (1990). Optimization of repetition: A psychological approach; Ye, J. (2022). Free Spaced Repetition Scheduler.',
      },
      {
        id: 'q3-cepeda-optimal-lag',
        question: 'According to empirical meta-analyses by Cepeda et al. (2006), what is the optimal inter-study spacing gap relative to the desired retention interval?',
        options: [
          {
            id: 'q3-a',
            text: 'Roughly 10% to 20% of the desired retention interval before the final test or real-world application.',
          },
          {
            id: 'q3-b',
            text: 'Exactly 100% of the retention interval (e.g., if the exam is in 1 year, study once today and once on exam day).',
          },
          {
            id: 'q3-c',
            text: 'Spacing gap has no measurable relationship to retention test delay.',
          },
          {
            id: 'q3-d',
            text: 'Study sessions should always be separated by exactly 24 hours regardless of whether the exam is next week or in 5 years.',
          },
        ],
        correctOptionId: 'q3-a',
        explanation: 'Cepeda et al. (2006) proved that the relationship between spacing gap and retention interval follows an inverted-U curve, with the optimal inter-study gap falling between 10% and 20% of the target delay. For a 1-week test, the optimal gap is ~1 day; for a 1-year test, the optimal gap is roughly 3–6 weeks.',
        pedagogicalRationale: 'Equips learners with an empirical rule of thumb for planning real-world study schedules.',
        evidenceNote: 'Cepeda, N. J., Vul, E., Rohrer, D., Wixted, J. T., & Pashler, H. (2006). Spacing effects in learning: A temporal-ridgeline analysis of optimal retention. Psychological Science.',
      },
      {
        id: 'q4-lapse-reset-rule',
        question: 'When a learner experiences a memory lapse (fails to recall a concept during a spaced review), what is the mandatory algorithmic response required to prevent permanent memory decay?',
        options: [
          {
            id: 'q4-a',
            text: 'Continue with the original expanding schedule as if nothing happened, because memory never truly fades.',
          },
          {
            id: 'q4-b',
            text: 'Reset the review interval back to baseline (Day 1) and schedule rapid restabilization reviews before expanding intervals again.',
          },
          {
            id: 'q4-c',
            text: 'Permanently delete the concept from the curriculum to avoid demoralizing the learner.',
          },
          {
            id: 'q4-d',
            text: 'Double the interval to 120 days to give the brain extra time to rest.',
          },
        ],
        correctOptionId: 'q4-b',
        explanation: 'A retrieval lapse indicates that the memory trace has fallen below the access threshold and its synaptic stability has collapsed. To rebuild durable retention, the algorithm must reset the interval to Day 1, provide immediate corrective feedback, and guide the learner through rapid restabilization before re-expanding the schedule (Wozniak, 1990; FSRS guidelines).',
        pedagogicalRationale: 'Prevents learners from ignoring lapses and accumulating phantom progress.',
        evidenceNote: 'Wozniak, P. A., & Gorzelanczyk, E. J. (1994). Optimization of repetition: Two-component model of long-term memory.',
      },
    ],
  },
  practicalTask: {
    title: 'The Personal Spaced Retrieval Calendar Protocol',
    summary: 'Design a mathematically calibrated expanding interval schedule for your most critical professional learning goal.',
    steps: [
      {
        id: 'step-target-horizon',
        number: 1,
        title: 'Define the Target Retention Horizon',
        prompt: 'Identify a technical subject, framework, or exam you are mastering. State your target mastery date and calculate your initial 10–20% spacing gap:',
        placeholder: 'e.g., Target: System Design Architecture Interview in 6 months (180 days). Optimal inter-study gap: 10%–20% = 18 to 36 days between major comprehensive review blocks. Initial study block completed today.',
        example: 'Target: Kubernetes Certified Administrator (CKA) exam in 90 days. Optimal spacing gap for major rehearsal: 10% = 9 days. Immediate first review at Day 1.',
        cognitiveRationale: 'Anchoring spacing intervals to your real-world target horizon prevents both premature over-review and catastrophic late-stage forgetting.',
      },
      {
        id: 'step-expanding-calendar',
        number: 2,
        title: 'Construct the 5-Point Expanding Schedule',
        prompt: 'Map out the 5 expanding review dates for this topic using the standard 2.2x stability multiplier (Day 1, Day 3, Day 8, Day 20, Day 50):',
        placeholder: 'e.g., Session 0: Today (Initial Encoding). Session 1: Tomorrow (Day 1, 24h restabilization). Session 2: Day 3. Session 3: Day 8. Session 4: Day 20. Session 5: Day 50. Total study time: 5 sessions of 15 mins = 75 mins total.',
        example: 'Day 1: Closed-book free recall of CKA network policies. Day 3: Practical terminal configuration test. Day 8: Troubleshooting ingress controller under time pressure. Day 20: Comprehensive multi-cluster architecture dump. Day 50: Full mock exam simulation.',
        cognitiveRationale: 'Pre-committing expanding review milestones into your calendar eliminates decision fatigue and ensures reviews catch traces at the optimal R ≈ 90% threshold.',
      },
      {
        id: 'step-lapse-contingency',
        number: 3,
        title: 'Establish the Explicit Lapse Protocol',
        prompt: 'Define your behavioral rule for when you fail a spaced review session. How will you reset the interval and restabilize the trace?',
        placeholder: 'e.g., "If I score <75% on any review session: (1) I will immediately do a closed-book discrepancy audit against docs. (2) I will reset this topic\'s next review to Day 1 (tomorrow) instead of advancing to the next expanded interval. (3) I will log the specific misconception in my error journal."',
        example: 'Lapse rule: Any missed kubectl command or YAML syntax error resets that specific concept to Day 1. I must generate 3 novel terminal scenarios from memory before advancing to the 8-day interval.',
        cognitiveRationale: 'A deterministic lapse contingency prevents the accumulation of fragile, half-learned concepts and halts compound forgetting.',
      },
    ],
  },
};
