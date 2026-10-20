import type { Lesson } from '../types/learning.ts';

export const LESSON_PREMORTEM_ERROR_JOURNALING: Lesson = {
  id: 'error-journaling-protocols',
  chapterId: 'ch-15-error-driven',
  number: '15.2',
  title: 'The Pre-Mortem & Error Journaling Protocols',
  subtitle: 'Systematic classification and root-cause post-mortems of learning bugs',
  readingTimeMinutes: 18,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'Why does assuming complete, catastrophic failure before launching a project increase threat detection by 30% through prospective hindsight, while conventional risk analysis leaves teams blind to their biggest vulnerabilities?',
    teaser: 'Human optimism bias and social censorship crush error prevention, but cognitive science offers a counter-intuitive protocol: prospective hindsight and blameless Black Box analysis.',
    hookNote: 'In 1989, cognitive psychologists Deborah Mitchell, J. Edward Russo, and Nancy Pennington discovered a stunning cognitive phenomenon known as "prospective hindsight." When people were simply asked "What could go wrong with this project?", their imaginations were cramped by optimism bias and social conformity. But when asked to imagine that the project had already failed catastrophically—"It is six months from now, the project is a total disaster; write down the history of how this happened"—their ability to identify root causes surged by 30%! Building on this, cognitive psychologist Gary Klein (2007) formalized the "Pre-Mortem" protocol. In parallel, aviation and medical safety pioneer Matthew Syed (2015) and organizational theorist Amy Edmondson (2011) revealed that learning systems either practice "Black Box Thinking" (treating errors as rich informational data) or blame cultures (which conceal errors until catastrophe strikes). In this lesson, we explore how prospective hindsight, blameless root-cause analysis, and systematic error taxonomy transform your mistakes from shameful failures into your highest-yield learning algorithm.',
  },
  prediction: {
    prompt: 'Two engineering directors, Director A and Director B, are preparing to deploy an overhaul of a mission-critical billing and payment pipeline handling $50M in daily transactions.\n\nDirector A ("Conventional Risk Assessment"): Convenes a 2-hour pre-launch review. They ask the team: "Are there any risks or concerns before we sign off? Let’s brainstorm what could go wrong and score our confidence." Because the architecture looks clean and leadership is enthusiastic, team members offer minor caveats about monitoring alerts, rate the launch 9/10 in confidence, and proceed.\n\nDirector B ("Gary Klein Prospective Hindsight Pre-Mortem"): Assembles the same engineers and opens with an explicit premise: "Look at the calendar. It is 6 months from today, and our new billing pipeline has completely, catastrophically failed. Payments were double-charged, customer data was corrupted, and the CEO was hauled before regulators. You have 10 minutes: silently write down the comprehensive story of exactly how our architecture failed."\n\nWhich team will uncover significantly more fatal vulnerabilities and latent architectural flaws prior to launch?',
    context: 'Both teams possess identical technical talent, identical architectural specifications, and devote the same meeting time (2 hours total):',
    options: [
      {
        id: 'opt-team-a-optimism-superiority',
        strategy: 'Hypothesis A: Conventional Risk Review Superiority',
        description: 'Director A’s team will find more actionable issues because standard risk analysis focuses on realistic operational parameters without introducing demoralizing catastrophic scenarios that induce panic or cynicism.',
      },
      {
        id: 'opt-team-b-premortem-prospective-hindsight',
        strategy: 'Hypothesis B: Prospective Hindsight & Psychological Liberation',
        description: 'Director B’s team will identify at least 30% more critical failure modes and uncover latent vulnerabilities (Mitchell et al., 1989; Klein, 2007), because establishing failure as an accomplished fact bypasses optimism bias, breaks social conformity, and activates backward causal reasoning.',
      },
      {
        id: 'opt-equivalent-risk-identification',
        strategy: 'Hypothesis C: Risk Analysis Equivalence',
        description: 'Both teams will uncover the same vulnerabilities because technical flaws are determined by code review and unit test coverage, not by the conversational framing or temporal perspective of a meeting.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-team-b-premortem-prospective-hindsight',
      headline: 'Prospective Hindsight Triumphed: Assuming Catastrophic Failure Unleashes Root-Cause Detection (Klein, 2007; Mitchell et al., 1989).',
      explanation: 'Mitchell, Russo, & Pennington (1989) and Gary Klein (Klein, 2007) proved that humans reason far more incisively in reverse than forward. In Director A’s conventional meeting, two powerful cognitive biases suffocated candor: (1) Optimism Bias & Confirmation Bias (team members look for evidence supporting success), and (2) Social Censorship & Groupthink (raising serious objections makes an engineer look like an obstructionist or a poor team player). In Director B’s Pre-Mortem, prospective hindsight fundamentally inverts the social incentive landscape. Because failure is declared a historical certainty, team members are no longer criticizing leadership’s dream—they are competing to demonstrate brilliance by explaining how the disaster occurred! Backward causal reasoning enables the prefrontal cortex to connect subtle, unstated anomalies (e.g., "The Redis cache TTL doesn\'t synchronize with the bank’s retry webhook") that forward speculation glosses over.',
      optionFeedback: {
        'opt-team-a-optimism-superiority': {
          title: 'Your Choice: Hypothesis A (Conventional Risk Review)',
          verdict: 'Refuted by Decision Science & Empirical Safety Research',
          analysis: 'Conventional risk questions ("What might go wrong?") trigger defensive rationalization and social deference. Engineers suppress doubts to avoid appearing pessimistic or unsupportive.',
        },
        'opt-team-b-premortem-prospective-hindsight': {
          title: 'Your Choice: Hypothesis B (Prospective Hindsight & Pre-Mortem)',
          verdict: 'Empirical Cognitive & Decision Science Consensus',
          analysis: 'Exactly right! Gary Klein (2007) showed that prospective hindsight increases the identification of reasons for future outcomes by 30%, neutralizing social friction and unearthing fatal system bugs.',
        },
        'opt-equivalent-risk-identification': {
          title: 'Your Choice: Hypothesis C (Technical Equivalence)',
          verdict: 'Refuted by Human Factors & Cognitive Ergonomics',
          analysis: 'Complex systems fail at the intersection of cognitive framing and organizational incentives. Code quality is blind to systemic coordination and boundary failures that only prospective hindsight surfaces.',
        },
      },
      comparisons: [
        {
          label: 'Conventional Forward Speculation ("What could go wrong?")',
          immediateRetention: 'Superficial reassurance and polite social conformity in planning',
          oneWeekRetention: 'Vulnerable to unforeseen production crashes and blind spots',
          illusionRating: 'Severe illusion of invulnerability; optimism bias obscures edge cases',
          isEmpiricalWinner: false,
        },
        {
          label: 'Klein Prospective Hindsight ("It has failed catastrophically. How?")',
          immediateRetention: 'Slightly uncomfortable candor; cognitive relief of discussing real hazards',
          oneWeekRetention: 'Highly resilient systems; +30% more fatal causal vulnerabilities resolved',
          illusionRating: 'Calibrated realism; outside-view risk distribution actively addressed',
          isEmpiricalWinner: true,
        },
      ],
      evidenceDistinction: 'Controlled experiments by Mitchell, Russo, and Pennington (1989) in the Journal of Behavioral Decision Making demonstrated that imagining an event has already occurred increases the ability to correctly identify reasons for future outcomes by ~30% compared to asking what might happen.',
    },
  },
  coreExplanations: [
    {
      id: 'klein-premortem-prospective-hindsight',
      title: 'Gary Klein (2007): The Pre-Mortem & Prospective Hindsight',
      tagline: 'Treating catastrophe as a certainty frees the brain to diagnose hidden structural flaws',
      statusLabel: 'Decision Psychology & Cognitive Ergonomics Paradigm Benchmark',
      scientificStatus: 'empirical-consensus',
      summary: 'Conventional project planning suffers from aggressive optimism bias, planning fallacies, and social pressures to conform. Gary Klein’s Pre-Mortem protocol leverages "prospective hindsight"—the cognitive capability to reason backward from an accomplished event—to bypass defensive rationalizations and identify critical points of failure before a single line of code is shipped or an exam is sat.',
      mechanisms: [
        {
          label: 'The Prospective Hindsight Effect',
          description: 'Mitchell, Russo, & Pennington (1989) discovered that when people imagine an outcome has already happened, their cognitive search strategy shifts from hypothetical speculation to historical explanation. This generates 30% more specific causal explanations.',
        },
        {
          label: 'Inversion of Social Status Incentives',
          description: 'In normal meetings, voicing doubt carries social liability (appearing uncooperative). In a Pre-Mortem, the game is inverted: finding fatal vulnerabilities becomes a display of intellectual acuity and foresight, rewarding candor.',
        },
        {
          label: 'Attacking the Planning Fallacy (Kahneman & Tversky)',
          description: 'Human intuition relies on the "inside view," assuming everything will go according to the ideal narrative. The Pre-Mortem forces the cognitive system into the "outside view," incorporating realistic friction and failure distributions.',
        },
      ],
      keyInsight: 'Do not ask "What could go wrong?" Ask: "It is six months from now, and this initiative has suffered an embarrassing, total collapse. What happened?" Certainty of failure unlocks fearless diagnostic cognition.',
      simplifiedModelCaveat: 'A Pre-Mortem is not an excuse for toxic cynicism or paralysis by analysis; it is a time-boxed, structured calibration tool specifically designed to harden protocols and establish proactive buffers.',
    },
    {
      id: 'syed-black-box-blameless-postmortems',
      title: 'Matthew Syed (2015): Black Box Thinking & Blameless Root Causes',
      tagline: 'Aviation learns from every crash; healthcare buries mistakes. The difference is blame vs data',
      statusLabel: 'Systems Safety & High-Reliability Organization (HRO) Consensus',
      scientificStatus: 'empirical-consensus',
      summary: 'Matthew Syed contrasted commercial aviation with traditional healthcare. Aviation treats errors as rich, invaluable data: every flight carries a tamper-proof flight data recorder (Black Box). When an incident occurs, an independent body conducts a blameless investigation to fix the systemic architecture. In contrast, punitive cultures equate error with personal incompetence, incentivizing concealment, falsification, and systemic stagnation.',
      mechanisms: [
        {
          label: 'The Closed-Loop vs Open-Loop System',
          description: 'In an open-loop system, errors are ignored, blamed on individuals, or rationalized away, meaning the exact same mistake will recur indefinitely. In a closed-loop system, errors trigger algorithmic adjustments to the operational environment.',
        },
        {
          label: 'James Reason’s Swiss Cheese Model',
          description: 'Major catastrophes rarely stem from a single human mistake. They occur when latent weaknesses across multiple systemic layers (defenses, training, tooling, checks) momentarily align like holes in Swiss cheese.',
        },
        {
          label: 'Blameless Post-Mortem Architecture',
          description: 'Root cause analysis must never terminate at "human error" or "carelessness." Saying someone was careless is an admission that the system permitted carelessness to trigger disaster. The true root cause lies in latent cognitive traps and interface deficits.',
        },
      ],
      keyInsight: 'Every failure is a free data stream. Blaming an individual closes the feedback loop and guarantees recurrence; analyzing the system keeps the loop open and immunizes the organization.',
      simplifiedModelCaveat: 'Blameless culture does not mean lack of accountability; it distinguishes between honest cognitive lapses / systemic traps (which require system redesign) and gross negligence or intentional sabotage (which require disciplinary action).',
    },
    {
      id: 'edmondson-failure-taxonomy-error-journaling',
      title: 'Amy Edmondson (2011): The Failure Spectrum & The Error Journaling Protocol',
      tagline: 'Not all failures are equal: distinguish preventable slips, complex system surprises, and intelligent experiments',
      statusLabel: 'Organizational Behavioral Science & Psychological Safety Classic',
      scientificStatus: 'empirical-consensus',
      summary: 'Amy Edmondson demonstrated that learning organizations require psychological safety to categorize failures intelligently. She defined a spectrum of failure spanning from Preventable (deviations from known checklists) to Complex (unavoidable system edge cases) to Intelligent (high-value exploratory experiments). Translating this into personal learning yields the Error Journaling Protocol: a structured cognitive ledger that tracks, classifies, and debugs learning bugs.',
      mechanisms: [
        {
          label: 'Edmondson’s Tripartite Failure Taxonomy',
          description: '1. Preventable Failures: Deviations from known best practices (remedied via checklists). 2. Complex Failures: Novel combinations of familiar factors (remedied via scenario training). 3. Intelligent Failures: Undiscovered frontiers where failure produces novel knowledge (celebrated and shared).',
        },
        {
          label: 'The Error Journal Schema (Root-Cause Attribution)',
          description: 'Logging mistakes requires 5 fields: (1) The Manifest Symptom, (2) The Superficial Error, (3) The Underlying Mental Model Deficit, (4) The Environmental / Cognitive Trigger, and (5) The Concrete Systemic Remediation Check.',
        },
        {
          label: 'Cognitive Bug Tracking vs Emotional Guilt',
          description: 'Treating personal learning errors like software bugs decouples self-worth from performance. A bug in code is not a moral failing; it is a missing edge case or an unhandled exception. Your mental model simply has an unhandled exception.',
        },
      ],
      keyInsight: 'If you fail while following a known checklist, tighten your execution. If you fail while exploring novel boundaries, celebrate the intelligent discovery. Never let a mistake evaporate without logging its underlying cognitive bug.',
      simplifiedModelCaveat: 'Logging errors without periodic synthesis generates an ignored graveyard of notes. An error journal must be paired with spaced review and deliberate de-biasing sessions.',
    },
  ],
  diagram: {
    title: 'The Error-Driven Forensic Pipeline Simulator',
    subtitle: 'From prospective hindsight and Swiss cheese mapping to blameless investigation and cognitive bug patching',
    stages: [
      {
        id: 'stage-prospective-hindsight',
        name: 'Stage 1: Prospective Hindsight (The Pre-Mortem)',
        subtitle: 'Bypassing Optimism Bias & Unleashing Reverse Search',
        capacity: 'High counterfactual cognitive simulation',
        duration: '15-30 minute planning exercise',
        role: 'The team shifts perspective forward to a certain future disaster, safely generating fatal vulnerability narratives without social penalty.',
        failureMode: 'Optimism bias and social conformity suppress critical dissenting doubts during conventional planning.',
        evidenceType: 'Decision psychology & prospective hindsight experiments (Mitchell et al., 1989; Klein, 2007)',
        practicalFix: 'Open pre-launch reviews with: "It is six months from now, and this has completely failed. Write down how."',
      },
      {
        id: 'stage-latent-vulnerability-mapping',
        name: 'Stage 2: Latent Vulnerability Mapping',
        subtitle: 'Swiss Cheese Defense Hardening & Tripwire Installation',
        capacity: 'Multi-layer systems defense analysis',
        duration: 'Pre-execution defense hardening',
        role: 'Engineers trace vulnerabilities across tooling, cognitive fatigue traps, and interface ambiguities before they align into disaster.',
        failureMode: 'Assuming single safeguards are foolproof, ignoring latent alignment of dormant organizational cracks.',
        evidenceType: 'High-reliability organization safety models (Reason, 1990; Syed, 2015)',
        practicalFix: 'Install automated barrier checks, checklists, and forcing functions across all vulnerable interfaces.',
      },
      {
        id: 'stage-blameless-black-box-investigation',
        name: 'Stage 3: Blameless Black Box Investigation',
        subtitle: 'Closed-Loop Telemetry Analysis & Anti-Scapegoating',
        capacity: 'Objective forensic data ingestion',
        duration: 'Post-incident investigative review',
        role: 'When incidents occur, telemetry data is examined without blame to locate process, checklist, and cognitive design deficits.',
        failureMode: 'Terminating post-mortems with "human error" or "carelessness", keeping the loop open and guaranteeing recurrence.',
        evidenceType: 'Aviation safety standards & closed-loop systems engineering (Syed, 2015; Edmondson, 2011)',
        practicalFix: 'Bar inquiry from concluding at human error; require systemic, environmental, or tooling remediation.',
      },
      {
        id: 'stage-systemic-error-journal-patching',
        name: 'Stage 4: Error Journaling & Schema Patching',
        subtitle: 'Edmondson Taxonomy Classification & Cognitive Bug Fixing',
        capacity: 'Permanent mental model consolidation',
        duration: 'Long-term spaced retrieval integration',
        role: 'The learner translates post-incident insights into a structured 5-field error log, repairing flawed mental assumptions and scheduling spaced retrieval.',
        failureMode: 'Treating errors as emotional shame, failing to log the underlying mental bug, leading to identical repeat mistakes.',
        evidenceType: 'Metacognitive calibration & organizational learning research (Edmondson, 2011; Metcalfe, 2017)',
        practicalFix: 'Log every technical error in an Error Journal: isolate the false assumption and formulate a spaced retrieval prompt.',
      },
    ],
    feedbackLoopDescription: 'Prospective hindsight exposes vulnerabilities before launch; blameless investigation extracts telemetry when accidents occur; error journaling patches the underlying cognitive bugs to prevent recurrence.',
  },
  exercise: {
    title: 'Failure Analysis & Root-Cause Classification Lab',
    instruction: 'Evaluate 4 critical failure scenarios across distributed systems, clinical medicine, aviation checklists, and advanced R&D. Diagnose whether the failure stems from Attention Gate Bottleneck (Preventable checklist slip), Working Memory Overload (Prospective hindsight deficit), Illusion of Competence (Punitive blame culture), or Schema Consolidation (Intelligent frontier failure), and prescribe the evidence-grounded fix.',
    categories: [
      {
        id: 'working-memory-overload',
        title: 'Prospective Hindsight Deficit (Planning Fallacy)',
        description: 'Failure caused by uncritical optimism, inside-view planning fallacy, and lack of pre-mortem stress testing before execution.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Punitive Blame & Closed-Loop Breakdown',
        description: 'Failure concealed or repeated because the culture blames individual carelessness instead of systemic Swiss cheese traps.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'attention-bottleneck',
        title: 'Preventable Execution Slip (Checklist Interruption)',
        description: 'Deviation from a validated checklist under fatigue or attentional interruption (Amy Edmondson Preventable Failure).',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Intelligent Frontier Failure (High-Yield Experiment)',
        description: 'A well-designed experiment in an uncharted domain where failure generates critical novel data (Amy Edmondson Intelligent Failure).',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-fintech-migration-disaster',
        realWorldContext: 'Enterprise Distributed Systems Infrastructure',
        scenario: 'A fintech engineering team plans a database migration. During planning, the tech lead asks: "Does anyone see any risks?" Silence ensues because everyone respects the senior lead. At 2:00 AM during migration, the replication lag spikes to 4 hours, cascading into database write locks and dropping thousands of transactions.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'The team succumbed to the planning fallacy and social deference. Forward-looking questions like "Does anyone see risks?" trigger conformity. Running a Gary Klein Pre-Mortem ("It is tomorrow morning and the migration has completely crashed the database; write down what caused it") would have allowed engineers to safely state that replication lag under live write loads was untested.',
        evidenceBasedFix: 'Mandate a 30-minute Pre-Mortem session 48 hours before migration. Require all engineers to write silently for 5 minutes explaining why the migration already collapsed before discussing countermeasures.',
      },
      {
        id: 'scen-hospital-surgical-repetition',
        realWorldContext: 'Clinical Healthcare Systems',
        scenario: 'A nurse administers twice the intended dosage of a chemotherapy drug because two vials of vastly different concentrations have nearly identical blue labels and were placed next to each other in the pharmacy tray. The hospital management fires the nurse for "gross carelessness" and orders all nurses to "pay closer attention." Three months later, another nurse makes the identical error.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'This represents the quintessential anti-pattern of Black Box Thinking (Syed, 2015). Management treated an obvious human factors design trap (identical visual packaging in adjacent bins) as a moral/personal failure. Firing the nurse gave an illusion of accountability while leaving the Swiss cheese hole wide open, guaranteeing the catastrophe would strike again.',
        evidenceBasedFix: 'Adopt aviation-grade blameless post-mortem standards. Bar management from terminating inquiry at "human error." Implement a physical forcing function (distinct barcode locks, contrasting neon labeling, and separate storage locations for high-potency formulations).',
      },
      {
        id: 'scen-preflight-flap-disaster',
        realWorldContext: 'Commercial Aviation Operations',
        scenario: 'An experienced commercial flight crew, delayed by 90 minutes and rushed by ground control, taxi to the runway and initiate takeoff without setting the wing flaps. The aircraft fails to generate sufficient lift and overshoots the runway. Investigation shows the first officer was interrupted by a radio call during the pre-taxi checklist.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'According to Amy Edmondson (2011), this is a Preventable Failure caused by an interruption breaking working memory continuity during a routine procedural checklist. Human working memory is fragile; when an attentional interruption occurs, people mistakenly infer they have completed steps that were only mentally queued.',
        evidenceBasedFix: 'Enforce a strict "sterile cockpit" rule and a physical "checklist challenge-and-response" protocol: when interrupted, the checklist must restart from the top of the phase, accompanied by physical pointing and verbal cross-verification.',
      },
      {
        id: 'scen-ml-quantum-compiler-experiment',
        realWorldContext: 'Cutting-Edge Deep Tech R&D',
        scenario: 'A research team designs a radically novel quantum compilation algorithm using topological braid transformations. In simulation, the algorithm achieves 0% speedup and fails to resolve entanglement. However, the telemetry uncovers an unexpected topological resonance effect that reveals a new method for noise cancellation.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'This is an Edmondson Intelligent Failure: a well-formulated, small-scale experiment designed at the frontier of domain knowledge. The hypothesis failed, but the failure yielded novel structural insight that could not have been discovered through passive reading or safe, incremental work.',
        evidenceBasedFix: 'Log the experiment in the institutional error repository as a high-value discovery. Share the negative result openly across research groups to prevent duplicate wasted compute, and redirect resources to exploit the newly discovered topological noise cancellation mechanism.',
      },
    ],
  },
  quiz: {
    title: 'Chapter 15 Mastery Assessment: Pre-Mortems & Error Journaling',
    instruction: 'Demonstrate deep comprehension of prospective hindsight, blameless post-mortems, and error taxonomies based on empirical decision science and organizational learning.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-klein-prospective-hindsight-mechanism',
        question: 'Why does Gary Klein’s Pre-Mortem technique identify significantly more failure modes (~30% increase) than conventional risk assessment meetings?',
        options: [
          {
            id: 'q1-a',
            text: 'Because team members are threatened with penalties if they fail to find at least five flaws in the design.',
          },
          {
            id: 'q1-b',
            text: 'Because declaring failure as an accomplished certainty bypasses optimism bias, breaks social conformity, and triggers backward causal search.',
          },
          {
            id: 'q1-c',
            text: 'Because Pre-Mortems are only conducted by external audit consultants who have no personal stake in the project.',
          },
          {
            id: 'q1-d',
            text: 'Because asking people to imagine success causes severe cognitive exhaustion.',
          },
        ],
        correctOptionId: 'q1-b',
        explanation: 'Mitchell et al. (1989) and Klein (2007) proved that prospective hindsight (declaring that disaster has already occurred) bypasses social pressures to conform and allows prefrontal causal reasoning to connect subtle anomalies into coherent disaster narratives.',
        pedagogicalRationale: 'Validates comprehension of prospective hindsight versus forward speculation.',
        evidenceNote: 'Klein, G. (2007). Performing a project premortem. Harvard Business Review, 85(9), 18-19; Mitchell, D. J., Russo, J. E., & Pennington, N. (1989). Back to the future: Temporal perspective in the explanation of events. Journal of Behavioral Decision Making, 2(1), 25-38.',
      },
      {
        id: 'q2-syed-black-box-blameless-culture',
        question: 'According to Matthew Syed (Black Box Thinking), what is the primary structural flaw of cultures that punish individual "human error" during accident reviews?',
        options: [
          {
            id: 'q2-a',
            text: 'Punishing individuals is too financially expensive for large corporations.',
          },
          {
            id: 'q2-b',
            text: 'Labeling an incident as "human error" halts inquiry, conceals future mistakes, and leaves systemic traps in place to claim the next operator.',
          },
          {
            id: 'q2-c',
            text: 'It makes employees work too quickly and recklessly out of defiance.',
          },
          {
            id: 'q2-d',
            text: 'Aviation Black Boxes cannot legally be used in disciplinary court hearings.',
          },
        ],
        correctOptionId: 'q2-b',
        explanation: 'Syed (2015) and safety theorist James Reason demonstrated that stopping at "human error" acts as a cognitive blindfold: it treats the symptom as the cause, encouraging people to hide mistakes and leaving latent systemic flaws intact.',
        pedagogicalRationale: 'Reinforces the distinction between closed-loop systemic learning and open-loop blame cultures.',
        evidenceNote: 'Syed, M. (2015). Black Box Thinking: Why Most People Never Learn from Their Mistakes—But Some Do. Portfolio/Penguin; Reason, J. (1990). Human Error. Cambridge University Press.',
      },
      {
        id: 'q3-edmondson-failure-taxonomy-distinction',
        question: 'Under Amy Edmondson’s Failure Taxonomy (2011), what characterizes an "Intelligent Failure"?',
        options: [
          {
            id: 'q3-a',
            text: 'An error committed by an engineer with an IQ above 140.',
          },
          {
            id: 'q3-b',
            text: 'A preventable violation of an established operating manual that was cleverly disguised.',
          },
          {
            id: 'q3-c',
            text: 'An undesired outcome resulting from a well-formulated, small-scale exploratory trial in an uncharted domain where valuable learning is gained.',
          },
          {
            id: 'q3-d',
            text: 'Any software bug that occurs in a production environment without causing downtime.',
          },
        ],
        correctOptionId: 'q3-c',
        explanation: 'Edmondson (2011) defined Intelligent Failures as thoughtfully planned experiments in new territory where the cost of failure is contained and the informational yield is high. They provide the raw data for true innovation.',
        pedagogicalRationale: 'Clarifies that not all failure should be eliminated; exploratory failure must be embraced and institutionalized.',
        evidenceNote: 'Edmondson, A. C. (2011). Strategies for learning from failure. Harvard Business Review, 89(4), 48-55.',
      },
      {
        id: 'q4-error-journal-root-cause-protocol',
        question: 'When maintaining a personal Error Journal for high-stakes technical or academic learning, what is the most critical field to record to ensure permanent schema revision?',
        options: [
          {
            id: 'q4-a',
            text: 'The number of hours of sleep you had the previous night and your emotional mood score.',
          },
          {
            id: 'q4-b',
            text: 'A verbatim copy of the problem statement and the teacher’s exact solution without your notes.',
          },
          {
            id: 'q4-c',
            text: 'The underlying false mental assumption or bug in your model that made the incorrect prediction seem plausible at the time.',
          },
          {
            id: 'q4-d',
            text: 'A pledge to never make that specific mistake again signed with the date.',
          },
        ],
        correctOptionId: 'q4-c',
        explanation: 'Logging only the correct answer produces superficial recognition. Durable schema repair requires identifying the exact bug in your internal model—the flawed assumption that made your erroneous prediction feel compelling.',
        pedagogicalRationale: 'Prevents superficial error logging and grounds error analysis in cognitive schema debugging.',
        evidenceNote: 'Edmondson, A. C. (2011); Syed, M. (2015); Metcalfe, J. (2017). Learning from errors. Annual Review of Psychology, 68, 465-489.',
      },
    ],
  },
  practicalTask: {
    title: 'The Pre-Mortem & Error Bug-Tracker Protocol',
    summary: 'A 3-step actionable protocol combining Gary Klein’s prospective hindsight pre-mortem with an engineering-grade cognitive bug tracker to bulletproof projects and calibrate personal mental models.',
    steps: [
      {
        id: 'step-run-personal-premortem',
        number: 1,
        title: 'Run a 15-Minute Prospective Hindsight Pre-Mortem',
        prompt: 'Select an upcoming high-stakes project, exam, interview, or technical deployment. Shift your temporal perspective to the day after the event and assume it was a total, humiliating catastrophe. Write down 3 distinct failure scenarios explaining exactly how and why your system or preparation broke down:',
        placeholder: 'e.g., Project: Cloud Database Migration. Prospective Disaster (6 months out): The migration succeeded on staging, but live database connection pooling exhausted thread limits during the morning peak traffic burst. Root Cause: We tested query speeds with synthetic single-user queries, never simulating concurrent connection spikes under connection pooling limits...',
        example: 'Exam Pre-Mortem: Assumed disaster on the Systems Architecture qualifying exam. Root cause: Spent 80% of prep time rereading familiar distributed consensus papers and zero hours practicing timed white-board proofs under memory pressure.',
        cognitiveRationale: 'Declaring failure a certainty bypasses optimism bias and planning fallacies, generating 30% more causal vulnerabilities (Mitchell et al., 1989; Klein, 2007).',
      },
      {
        id: 'step-classify-failure-edmondson-taxonomy',
        number: 2,
        title: 'Classify Vulnerabilities Using Edmondson’s Taxonomy',
        prompt: 'Categorize each failure scenario identified in Step 1 as either Preventable (checklist/slip), Complex (system interaction), or Intelligent (frontier trial). What specific procedural defense or checklist safeguard will you install for the Preventable and Complex failure modes?',
        placeholder: 'e.g., Vulnerability 1 (Connection Pool Exhaustion): Complex Failure. Defense: Implement a chaos stress test in staging simulating 10,000 concurrent websocket connections before cutover. Vulnerability 2 (Missed Backup Step): Preventable Failure. Defense: Add a hard automated gate requiring an S3 backup snapshot SHA256 before the migration script unlocks...',
        example: 'Study Schedule Vulnerability: Preventable Failure (Cramming the night before due to poor spacing). Defense: Block out non-negotiable 90-minute morning study blocks across calendar weeks with automated phone lockout.',
        cognitiveRationale: 'Distinguishing failure categories prevents over-engineering simple procedural slips while ensuring complex multi-variable interactions receive structural defenses (Edmondson, 2011).',
      },
      {
        id: 'step-log-cognitive-bug-in-error-journal',
        number: 3,
        title: 'Log a Past Error in the 5-Field Cognitive Bug Ledger',
        prompt: 'Take a recent real mistake, incorrect exam answer, or software bug. Document it using the 5-field schema: (1) Manifest Symptom, (2) Superficial Mistake, (3) Underlying Mental Model Flaw (the false assumption), (4) Cognitive Trigger (time pressure, fatigue, fluency illusion), and (5) Permanent Schema Patch:',
        placeholder: 'e.g., (1) Symptom: Distributed lock dropped early causing duplicate worker writes. (2) Superficial Mistake: Lock TTL set to 5 seconds. (3) Underlying Mental Model Flaw: Assumed Redis lock TTL counts elapsed CPU time rather than absolute wall-clock time; a 6-second GC pause expired the lock while the thread was suspended. (4) Trigger: Copied standard lock pattern from single-threaded documentation. (5) Schema Patch: Always use fencing tokens or heartbeat extension daemons for distributed mutual exclusion...',
        example: 'Math/Physics Bug: (1) Wrong orbit trajectory. (2) Used linear approximation. (3) Mental Model Flaw: Forgot that gravitational force scales inversely with the SQUARE of distance, invalidating first-order Taylor expansions at close range. (4) Trigger: Rushed test deadline. (5) Schema Patch: Highlight non-linear terms in problem statements with red pen.',
        cognitiveRationale: 'Debugging the underlying mental model converts an ephemeral error into permanent schema reconsolidation, immunizing your cognitive system against recurrent traps (Syed, 2015; Metcalfe, 2017).',
      },
    ],
  },
};
