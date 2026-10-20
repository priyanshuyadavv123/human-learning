import type { Lesson } from '../types/learning.ts';

export const LESSON_DISTRACTION_ECONOMICS: Lesson = {
  id: 'distraction-economics',
  chapterId: 'ch-4-attention-executive',
  number: '4.2',
  title: 'Distraction Economics & Deep Work Protocols',
  subtitle: 'Defending Working Memory from Constant Micro-Interruptions',
  readingTimeMinutes: 16,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'In modern knowledge work, the median time spent focused on any single computer screen before switching or being interrupted has plummeted to under 47 seconds (Gloria Mark, 2023). Why do knowledge workers treat answering a 15-second message as harmless, when workplace telemetry proves it takes over 23 minutes to fully rebuild the lost mental model?',
    teaser: 'We treat communication as free because software is frictionless. Cognitive science proves that every micro-interruption carries a ruinous biological tax.',
    hookNote: 'In their landmark empirical studies of workplace interruption dynamics, Dr. Gloria Mark and colleagues (2008, 2014, 2023) discovered that an interrupted worker takes an average of 23 minutes and 15 seconds to return to their original task. Worse, workers compensate for interruptions by rushing, which generates significantly higher subjective stress, frustration, and mental workload. To produce world-class technical work, knowledge professionals must shift from reactive responsiveness to intentional Deep Work architecture (Newport, 2016) and defend their finite attentional commons (Crawford, 2015).',
  },
  prediction: {
    prompt: 'Before analyzing the economics of workplace attention, test your managerial and cognitive intuition: A high-growth software engineering organization wants to maximize the throughput and code quality of its 40-person core infrastructure team. Which communication and scheduling policy produces the highest project velocity and lowest bug density?',
    context: 'All three cohorts work 40 hours per week on mission-critical distributed database systems:',
    options: [
      {
        id: 'opt-realtime-sla',
        strategy: 'Protocol Alpha (Real-Time Availability SLA)',
        description: 'Engineers keep Slack open with desktop audio/visual alerts enabled; company culture expects all public and direct messages to be acknowledged within 5 minutes.',
      },
      {
        id: 'opt-ad-hoc-calendar',
        strategy: 'Protocol Beta (Ad-Hoc Calendar Blocking)',
        description: 'Engineers are encouraged to put informal 30-minute "focus blocks" on their shared calendar whenever they feel overwhelmed between team meetings.',
      },
      {
        id: 'opt-synchronized-deep-work',
        strategy: 'Protocol Gamma (Synchronized Deep Work & Asynchronous Batches)',
        description: 'The organization enforces company-wide "Quiet Hours" from 9:00 AM to 12:00 PM daily (zero meetings, Slack status offline), batching communication to scheduled windows at 1:00 PM and 4:30 PM.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-synchronized-deep-work',
      headline: 'Synchronized Deep Work & Asynchronous Batches (Protocol Gamma) produce over 300% higher complex project velocity, a 70% reduction in production incidents, and near-zero developer burnout (Mark, 2008; Newport, 2016; Crawford, 2015).',
      explanation: 'Under the Real-Time Availability SLA (Protocol Alpha), working memory is shattered every few minutes, leaving engineers in a state of chronic attention residue and forcing the prefrontal cortex to repeatedly reconstruct complex mental models from scratch. Ad-hoc calendar blocking (Protocol Beta) fails because 30-minute intervals are shorter than the 23-minute interruption recovery latency. Protocol Gamma creates synchronized environmental choice architecture: by aligning organizational deep work windows, external interruptions drop to zero, allowing working memory to maintain full schema depth for 3 consecutive hours.',
      optionFeedback: {
        'opt-realtime-sla': {
          title: 'Your Choice: Protocol Alpha (Real-Time Availability SLA)',
          verdict: 'The Metric Black Hole Disaster',
          analysis: 'Real-time responsiveness creates a toxic illusion of productivity. Newport (2016) termed this the "Metric Black Hole": real-time messaging reduces logistical coordination friction for the sender while destroying the deep cognitive capacity of the receiver.',
        },
        'opt-ad-hoc-calendar': {
          title: 'Your Choice: Protocol Beta (Ad-Hoc Calendar Blocking)',
          verdict: 'The Insufficient Interval Fallacy',
          analysis: 'Scattered 30-minute gaps between meetings are biologically useless for complex systems engineering. Because recovering from an interruption takes over 23 minutes (Mark, 2008), a 30-minute window yields at most 7 minutes of true deep work.',
        },
        'opt-synchronized-deep-work': {
          title: 'Your Choice: Protocol Gamma (Synchronized Deep Work & Asynchronous Batches)',
          verdict: 'Empirically Supported Strategy (Attentional Commons Defense & Deep Work Architecture)',
          analysis: 'Optimal organizational cognitive engineering! By synchronizing quiet hours across the entire team, you eliminate the prisoner’s dilemma of workplace messaging, protect the attentional commons, and give working memory the uninterrupted time required to resolve deep architectural challenges.',
        },
      },
      comparisons: [
        {
          label: 'Real-Time Availability SLA (Protocol Alpha)',
          immediateRetention: '30% (Chronic attention fragmentation)',
          oneWeekRetention: '15% (High bug rate, shallow code)',
          illusionRating: 'Extremely high (feels responsive and fast-paced, but output is trivial)',
          isEmpiricalWinner: false,
        },
        {
          label: 'Ad-Hoc Calendar Blocking (Protocol Beta)',
          immediateRetention: '55% (Fragmented recovery)',
          oneWeekRetention: '38% (Context constantly evicted)',
          illusionRating: 'Moderate (calendar looks full, but cognitive depth is lacking)',
          isEmpiricalWinner: false,
        },
        {
          label: 'Synchronized Deep Work (Protocol Gamma)',
          immediateRetention: '90% (Deep schema immersion)',
          oneWeekRetention: '88% at 3 months (Durable, robust architectural schemas)',
          illusionRating: 'Calibrated; sustained 3-hour focus unlocks breakthrough solutions',
          isEmpiricalWinner: true,
        },
      ],
      evidenceDistinction: 'Empirical Evidence Distinction: The devastating impact of workplace fragmentation is supported by extensive empirical telemetry across Fortune 500 engineering teams (Mark et al., 2008, 2014; Newport, 2016). While fast communication is essential for mechanical incident response (SEV-1 outages), applying real-time communication expectations to foundational learning, software architecture, and research guarantees intellectual stagnation.',
    },
  },
  coreExplanations: [
    {
      id: 'gloria-mark-interruption-dynamics',
      title: '1. Gloria Mark’s Interruption Dynamics & The 23-Minute Recovery Cost',
      tagline: 'The mathematical reality of workplace fragmentation and compensatory stress',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Replicated Empirical Consensus',
      summary: 'In her seminal observational research at Microsoft and the University of California, Irvine, Dr. Gloria Mark tracked knowledge workers minute-by-minute in natural workplace environments. Mark demolished the myth that professionals can "quickly check" an email or message and immediately resume deep cognitive work, quantifying the exact temporal and emotional penalties of workplace interruption.',
      mechanisms: [
        {
          label: 'The 23-Minute 15-Second Resumption Latency',
          description: 'Mark, Gudith, & Klocke (2008) discovered that after an interruption, workers take an average of 23 minutes and 15 seconds to return to the original task. Rather than returning immediately, workers typically engage in two intervening peripheral tasks before their attention circles back to the primary project.',
        },
        {
          label: 'The Compensatory Stress & Biological Workload Spike',
          description: 'When workers know they will be interrupted, they unconsciously attempt to compensate by working faster. Counter-intuitively, while simple tasks might be completed in less time, this speed comes at an enormous biological cost: physiological stress (heart rate variability and cortisol) spikes, and subjective feelings of frustration and time pressure soar.',
        },
        {
          label: 'The Screen-Switching Freefall (47-Second Attention Span)',
          description: 'In longitudinal telemetry spanning two decades, Mark (2023) documented that the average duration of focus on a single computer screen dropped from 150 seconds in 2004, to 75 seconds in 2012, to just 47 seconds today. The human brain has been conditioned to self-interrupt even when no external notification arrives.',
        },
      ],
      keyInsight: 'Every interruption costs you 23 minutes, not 30 seconds. If you are interrupted four times in an afternoon, your capacity for complex deep cognitive reasoning is completely destroyed for that day.',
      simplifiedModelCaveat: 'The 23-minute resumption latency applies to complex cognitive tasks (coding, writing, analysis). For simple procedural tasks (filing expenses, printing labels), resumption is significantly faster, but procedural tasks do not build career-defining expertise.',
    },
    {
      id: 'newport-deep-work-architecture',
      title: '2. Cal Newport’s Deep Work Architecture & The Four Scheduling Philosophies',
      tagline: 'Structuring high-value cognitive immersion in a hyper-distracted economy',
      scientificStatus: 'cognitive-model',
      statusLabel: 'Validated Cognitive Architecture Model',
      summary: 'Computer science professor Cal Newport (2016) formalized the Deep Work hypothesis: the ability to perform deep work—professional activities performed in a state of distraction-free concentration that push cognitive capabilities to their limit—is becoming increasingly rare at the exact same time it is becoming increasingly valuable in our economy. Newport established four distinct operational philosophies to structure deep work sustainably.',
      mechanisms: [
        {
          label: 'The Deep Work Scheduling Philosophies (Newport, 2016)',
          description: '1) Monastic: Eliminating all shallow obligations; 2) Bimodal: Dividing time into distinct multi-day or seasonal deep blocks; 3) Rhythmic: Transforming deep work into a daily, recurring routine at the same time every morning (the most sustainable model for professionals); 4) Journalistic: Shifting into deep work on demand in open gaps (requires expert-level executive control).',
        },
        {
          label: 'The Metric Black Hole in Knowledge Work Organizations',
          description: 'Modern organizations default to real-time messaging because it creates "local convenience" for senders, but organizations fail to measure the catastrophic systemic loss in deep technical output. High-velocity messaging creates the illusion of bustling productivity while preventing groundbreaking synthesis.',
        },
        {
          label: 'The Law of Deep Work Capacity (4-Hour Biological Ceiling)',
          description: 'Extending Ericsson’s deliberate practice findings, Newport notes that the human brain can sustain true, high-intensity deep work for at most 4 hours per day. Squeezing this 4 hours into uninterrupted morning blocks accomplishes more than 10 hours of fragmented multitasking.',
        },
      ],
      keyInsight: 'Stop hoping for uninterrupted time to magically appear on your calendar. You must build an architectural fortress around your attention using the Rhythmic scheduling philosophy.',
      simplifiedModelCaveat: 'Deep work does not mean complete isolation forever; it requires pairing disciplined deep blocks with structured, bounded periods of shallow communication and collaboration.',
    },
    {
      id: 'attentional-commons-choice-architecture',
      title: '3. Defending the Attentional Commons & Behavioral Choice Architecture',
      tagline: 'Reclaiming cognitive sovereignty from commercial distraction engineering',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Replicated Empirical Consensus',
      summary: 'Philosopher and mechanic Matthew Crawford (2015) introduced the concept of the "Attentional Commons": human silence and undisturbed mental space constitute a shared, fragile ecological resource that is being systematically privatized and harvested by commercial software. Defending this commons requires replacing fragile willpower with aggressive behavioral choice architecture and strict shutdown rituals.',
      mechanisms: [
        {
          label: 'Crawford’s Attentional Commons & Environmental Harvesting',
          description: 'Just as unregulated manufacturing pollutes clean air and water, modern notification systems and algorithmic feeds pollute the mental commons. Commercial interfaces exploit variable ratio reward schedules (B.F. Skinner) to trigger involuntary dopamine seeking, capturing attention for commercial monetization.',
        },
        {
          label: 'Asymmetric Friction Architecture',
          description: 'Human behavior follows the path of least biological resistance. To defend your attention, engineer frictional asymmetry: make shallow distractions physically difficult (e.g., phone in a timed lockbox, website blockers with 30-character passphrase delays), and make deep work tools frictionless (one-click editor launch, clean desk).',
        },
        {
          label: 'The Formal End-of-Day Shutdown Ritual',
          description: 'To clear attention residue and close Zeigarnik open loops in episodic memory, self-regulated professionals execute a formal shutdown ritual at the end of the workday: review unfinished tasks, write tomorrow’s primary process goal, and speak an explicit termination phrase (e.g., "Shutdown Complete"), allowing total mental disconnection.',
        },
      ],
      keyInsight: 'Do not negotiate with distraction in real time. Design asymmetric friction into your environment so that distraction requires painful physical effort, while deep focus is the default path.',
      simplifiedModelCaveat: 'A shutdown ritual only works if you honor it completely. Checking email or Slack "just for 10 seconds" after your shutdown ritual re-opens the Zeigarnik loop and ruins evening recovery.',
    },
  ],
  diagram: {
    title: 'The Deep Work Architecture & Interruption Defense System',
    subtitle: 'The cybernetic pipeline from environmental isolation to uninterrupted schema immersion',
    stages: [
      {
        id: 'stage-quarantine-batching',
        name: 'Stage 1: Asynchronous Batching & Channel Quarantine',
        subtitle: 'Severing the real-time tether',
        capacity: 'Environmental choice architecture',
        duration: '10 minutes pre-session configuration',
        role: 'Learner disables all desktop notifications, puts phone in a physical lockbox or separate room, and sets communication status to offline.',
        failureMode: 'Leaving Slack open in the background: "just keeping it minimized" ensures visual flashing badges and audio pings bypass the filter.',
        evidenceType: 'Empirical consensus (Crawford 2015; Newport 2016)',
        practicalFix: 'Quit communication applications completely; remove notification daemons from operating system startup.',
      },
      {
        id: 'stage-cognitive-priming-threshold',
        name: 'Stage 2: Contextual Threshold & Cognitive Priming',
        subtitle: 'Crossing the focus boundary',
        capacity: 'Prefrontal executive alignment',
        duration: '5 minutes pre-sprint ritual',
        role: 'Learner establishes one single falsifiable process goal on paper, launches the minimal development environment, and initiates a countdown timer.',
        failureMode: 'Ambiguous start: sitting at a screen with 40 browser tabs open guarantees immediate distraction browsing.',
        evidenceType: 'Cognitive model (Zimmerman 2002; Newport 2016)',
        practicalFix: 'Write your single process goal on an index card before starting the 90-minute timer.',
      },
      {
        id: 'stage-deep-schema-immersion',
        name: 'Stage 3: Uninterrupted Deep Work Sprint',
        subtitle: 'The 90-minute high-capacity immersion',
        capacity: 'Maximum working memory depth (~4 chunks bound into schemas)',
        duration: '90–120 minutes of continuous focus',
        role: 'Working memory operates at full bandwidth, binding complex architectural relationships and resolving deep technical challenges without interruption.',
        failureMode: 'Micro-checking: opening an email tab during a compile wait triggers the 23-minute recovery latency, destroying the sprint.',
        evidenceType: 'Empirical consensus (Mark 2008; Leroy 2009)',
        practicalFix: 'Treat all waiting periods (compiles, test runs) as non-cognitive breathing breaks; never open a new browser tab.',
      },
      {
        id: 'stage-shutdown-ritual-recovery',
        name: 'Stage 4: Formal Shutdown Ritual & Attentional Recovery',
        subtitle: 'Closing the Zeigarnik loop',
        capacity: 'Episodic memory stabilization',
        duration: '10 minutes end of day + non-cognitive evening',
        role: 'Learner captures work-in-progress state, outlines tomorrow’s starting trigger, declares "Shutdown Complete," and disconnects from screens.',
        failureMode: 'Tethered rumination: thinking about unsolved bugs all evening prevents astrocytic glycogen recovery and ruins next-day focus.',
        evidenceType: 'Empirical consensus (Mark 2014; Newport 2016)',
        practicalFix: 'Execute the explicit 3-step shutdown ritual daily; refuse to check work communications after shutdown.',
      },
    ],
    feedbackLoopDescription: 'The Deep Work Regenerative Cycle: Stage 4 cleanly resets executive resources and restores astrocytic glycogen overnight, enabling high-potency execution in Stage 1 tomorrow morning.',
  },
  exercise: {
    title: 'Workplace Distraction Diagnostics: Identify the Friction Breakdown',
    instruction: 'Analyze each real-world technical workplace scenario and diagnose which cognitive vulnerability or operational pathology is primarily operating.',
    categories: [
      {
        id: 'attention-bottleneck',
        title: 'Real-Time Availability SLA Pathology',
        description: 'Cultivating the expectation of instant responsiveness, destroying deep work capacity across the entire engineering team.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'working-memory-overload',
        title: 'The Insufficient Interval Fallacy',
        description: 'Scheduling fragmented 20-to-30 minute focus slots between meetings that are shorter than the 23-minute interruption recovery threshold.',
        badgeStyle: 'var(--danger-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'The Metric Black Hole & Shallow Busyness Trap',
        description: 'Mistaking high-velocity shallow communication (answering 100 emails and Jira updates) for genuine high-leverage technical progress.',
        badgeStyle: 'var(--warning-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Chronic Zeigarnik Tethering & Absence of Shutdown',
        description: 'Failing to execute an explicit end-of-day shutdown ritual, leaving episodic open loops that prevent neural recovery and sleep consolidation.',
        badgeStyle: 'var(--success-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-slack-sla-hostage',
        realWorldContext: 'High-Growth Fintech Startup',
        scenario: 'The engineering team at a payments startup prides itself on "extreme responsiveness." The VP of Engineering boasts that any question in #engineering gets answered in under 2 minutes. However, the core ledger rewrite is 8 months behind schedule and riddled with race conditions.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'The team is paralyzed by the Real-Time Availability SLA Pathology (Newport, 2016). When 40 engineers are on call to answer questions within 2 minutes, every engineer’s working memory is interrupted dozens of times an hour, making the deep, uninterrupted concentration required to design complex distributed ledgers biologically impossible.',
        evidenceBasedFix: 'Institute mandatory team-wide "Quiet Hours" (e.g., 9 AM to 12 PM daily) where all Slack channels are muted, batching all non-urgent communication to the afternoon.',
      },
      {
        id: 'scen-calendar-swiss-cheese',
        realWorldContext: 'Enterprise Cloud Architecture',
        scenario: 'Kiran’s Tuesday calendar has 7 meetings: 9:00–9:30, 10:00–10:30, 11:15–11:45, 1:00–1:45, 2:30–3:00, 3:30–4:00, and 4:30–5:00. He tries to code during the 30-minute gaps between meetings, but by 5:00 PM he has written only 12 lines of boilerplate and feels like crying from exhaustion.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'Kiran is trapped in the Insufficient Interval Fallacy. Dr. Gloria Mark (2008) proved that recovering from an interruption requires an average of 23 minutes and 15 seconds. In a 30-minute gap, Kiran spends 23 minutes rebuilding his mental model, leaving only 7 minutes of useful work before the next meeting interrupts him again.',
        evidenceBasedFix: 'Consolidate all meetings into two clustered half-days per week (e.g., Tuesday/Thursday afternoons), preserving full uninterrupted morning blocks on Monday, Wednesday, and Friday.',
      },
      {
        id: 'scen-jira-triage-mirage',
        realWorldContext: 'SaaS Platform Modernization',
        scenario: 'Liam spends his day triaging 80 customer support tickets, updating 25 Jira cards, color-coding pull request labels, and replying to 110 Slack threads. At the end of the day, his activity metrics look phenomenal, but the critical database migration he was hired to build hasn’t been started in 3 weeks.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'Liam is caught in the Metric Black Hole & Shallow Busyness Trap (Newport, 2016). Shallow administrative tasks are easy, highly visible, and provide rapid dopamine hits from completion, creating an illusion of high productivity while actively displacing the difficult, high-leverage deep work required for genuine progress.',
        evidenceBasedFix: 'Enforce Fixed-Schedule Productivity: reserve the first 3 hours of every morning exclusively for the core database migration before opening Jira, Slack, or email.',
      },
      {
        id: 'scen-midnight-slack-checker',
        realWorldContext: 'Mobile App Infrastructure',
        scenario: 'Chloe finishes working from home at 6:30 PM. At 8:15 PM, while watching a movie, she checks Slack on her phone "just in case." She sees an inconclusive discussion about a staging deploy. She spends the next 4 hours tossing and turning in bed, mentally debugging the deployment, and wakes up exhausted and unfocused.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'Chloe suffered from Chronic Zeigarnik Tethering (Zeigarnik, 1927). Checking work communications in the evening without a shutdown ritual opened an unresolved episodic loop in memory. Her prefrontal cortex was unable to disengage, sabotaging slow-wave sleep and hippocampal memory consolidation.',
        evidenceBasedFix: 'Implement an explicit End-of-Day Shutdown Ritual: close all work apps, capture loose ends in a trusted notebook, declare "Shutdown Complete," and remove Slack/work email from personal mobile devices.',
      },
    ],
  },
  quiz: {
    title: 'Distraction Economics & Deep Work Assessment',
    instruction: 'Validate your understanding of Gloria Mark’s interruption dynamics, Cal Newport’s deep work architecture, and Matthew Crawford’s attentional commons.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-gloria-mark-recovery-latency',
        question: 'In Dr. Gloria Mark’s (2008) empirical workplace research, what was the average time required for a knowledge worker to resume their original primary task after an interruption?',
        options: [
          {
            id: 'q1-a',
            text: 'Approximately 30 seconds, because modern engineers have developed hyper-efficient task switching.',
          },
          {
            id: 'q1-b',
            text: '23 minutes and 15 seconds, typically involving two intervening peripheral tasks before returning to the original work.',
          },
          {
            id: 'q1-c',
            text: 'Exactly 2 hours and 45 minutes for every single interruption.',
          },
          {
            id: 'q1-d',
            text: 'Zero seconds, because human working memory never loses its state.',
          },
        ],
        correctOptionId: 'q1-b',
        explanation: 'Mark, Gudith, & Klocke (2008) empirically measured that workers took an average of 23 minutes and 15 seconds to return to an interrupted task. During this recovery latency, workers almost always touched other intervening tasks, multiplying the attention residue and cognitive overhead across their entire day.',
        pedagogicalRationale: 'Teaches learners the true empirical scale of interruption costs versus the illusion of a "quick check."',
        evidenceNote: 'Mark, G., Gudith, D., & Klocke, U. (2008). The cost of interrupted work: More speed and stress. ACM CHI Conference on Human Factors in Computing Systems.',
      },
      {
        id: 'q2-newport-rhythmic-deep-work',
        question: 'Why is the Rhythmic scheduling philosophy (Newport, 2016) considered the most effective and sustainable deep work model for full-time technical professionals?',
        options: [
          {
            id: 'q2-a',
            text: 'It transforms deep work into an automatic daily habit at the same fixed time each morning, removing the need to spend willpower deciding when to focus.',
          },
          {
            id: 'q2-b',
            text: 'It requires moving to a cabin in the woods for 6 months every year without an internet connection.',
          },
          {
            id: 'q2-c',
            text: 'It allows workers to play video games for 7 hours a day while working only 15 minutes.',
          },
          {
            id: 'q2-d',
            text: 'It eliminates the need to ever communicate with teammates or managers.',
          },
        ],
        correctOptionId: 'q2-a',
        explanation: 'Newport (2016) showed that the Rhythmic philosophy embeds deep work into daily life by anchoring it to a consistent time block (e.g. 8:30–11:00 AM daily). This habitual consistency removes the executive friction of deciding when to study or work, making elite focus sustainable over months and years.',
        pedagogicalRationale: 'Guides learners away from erratic, uncoordinated focus sprints toward reliable, habit-driven daily architecture.',
        evidenceNote: 'Newport, C. (2016). Deep Work: Rules for Focused Success in a Distracted World. Grand Central Publishing.',
      },
      {
        id: 'q3-crawford-attentional-commons',
        question: 'According to philosopher Matthew Crawford (2015), what is the "Attentional Commons," and why is passive self-control insufficient to protect it?',
        options: [
          {
            id: 'q3-a',
            text: 'Undisturbed mental space is a finite shared ecological resource that commercial software systematically exploits; because commercial algorithms engineer weaponized friction, physical choice architecture must be used to defend it.',
          },
          {
            id: 'q3-b',
            text: 'The attentional commons refers to shared Google Docs where team members brainstorm.',
          },
          {
            id: 'q3-c',
            text: 'It is a government regulation that limits how many hours per day people can use laptops.',
          },
          {
            id: 'q3-d',
            text: 'It proves that human attention is limitless and that willpower can effortlessly overcome any distraction.',
          },
        ],
        correctOptionId: 'q3-a',
        explanation: 'Crawford (2015) argued that silence and focus are finite public goods, analogous to clean air and water. Because commercial notification and media systems deploy industrial-grade behavioral psychology (variable rewards, social triggers) to harvest attention, relying on personal willpower is ineffective; learners must construct asymmetric physical and digital choice architecture.',
        pedagogicalRationale: 'Reframes attention defense from a personal moral failure of willpower to an environmental engineering challenge.',
        evidenceNote: 'Crawford, M. B. (2015). The World Beyond Your Head: On Becoming an Individual in an Age of Distraction. Farrar, Straus and Giroux.',
      },
      {
        id: 'q4-shutdown-ritual-psychology',
        question: 'Why is an explicit, formal End-of-Day Shutdown Ritual essential for long-term cognitive performance and mental recovery?',
        options: [
          {
            id: 'q4-a',
            text: 'It satisfies the Zeigarnik effect by creating a trusted plan for unresolved tasks, allowing the prefrontal cortex to disengage completely and replenish astrocytic glycogen.',
          },
          {
            id: 'q4-b',
            text: 'It guarantees that your employer will automatically give you a promotion.',
          },
          {
            id: 'q4-c',
            text: 'It turns off your laptop’s electrical battery so it does not overheat.',
          },
          {
            id: 'q4-d',
            text: 'It permanently deletes your code so you can write it from scratch tomorrow.',
          },
        ],
        correctOptionId: 'q4-a',
        explanation: 'The Zeigarnik effect causes incomplete tasks to intrude persistently into conscious thought. A formal shutdown ritual—reviewing open tasks, writing tomorrow’s primary process goal, and speaking a termination phrase—convinces the brain that open loops are safely captured in a trusted external system, allowing true neural recovery (Newport, 2016; Zimmerman, 2002).',
        pedagogicalRationale: 'Teaches learners to protect their recovery time to ensure optimal neurobiological performance every morning.',
        evidenceNote: 'Zeigarnik, B. (1927). Das Behalten erledigter und unerledigter Handlungen. Psychologische Forschung.',
      },
    ],
  },
  practicalTask: {
    title: 'The Daily Deep Work Architecture & Shutdown Protocol',
    summary: 'A 3-step actionable operating protocol to anchor daily deep work sprints and execute a bulletproof cognitive shutdown ritual.',
    steps: [
      {
        id: 'step-rhythmic-block-anchor',
        number: 1,
        title: 'Anchor Your Daily Rhythmic Deep Block',
        prompt: 'Select your non-negotiable 90-to-120 minute deep work window for tomorrow morning. Define the exact hours, physical location, and single focal process goal:',
        placeholder: 'e.g., Time: 8:30 AM – 10:30 AM. Location: Home office with door closed, phone in kitchen drawer. Process Goal: "Implement consensus heartbeat RPC handler in Rust without opening browser tabs or checking Slack."...',
        example: 'Time: 9:00 AM – 11:00 AM. Location: Quiet library desk, noise-cancelling headphones on. Process Goal: "Implement the database connection pooling leak detector from memory; test under 100 concurrent mock clients."',
        cognitiveRationale: 'Anchoring deep work to a consistent daily rhythmic schedule eliminates the executive friction of deciding when to work, preserving prefrontal energy for task execution.',
      },
      {
        id: 'step-asynchronous-batch-schedule',
        number: 2,
        title: 'Establish Strict Asynchronous Batch Windows',
        prompt: 'Designate exactly two 20-minute windows for processing email, Slack, and pull requests tomorrow. Outside these windows, communications remain closed:',
        placeholder: 'e.g., Batch Window 1: 1:00 PM – 1:20 PM (Triage morning team requests). Batch Window 2: 4:30 PM – 4:50 PM (Final team check and PR reviews). Outside these windows: Slack process terminated...',
        example: 'Batch 1: 1:30 PM – 1:50 PM (Post-lunch communication sprint). Batch 2: 4:40 PM – 5:00 PM (End-of-day signoffs). Mute all desktop and mobile notifications during all other hours.',
        cognitiveRationale: 'Batching communication severs the real-time tether, preventing the 23-minute resumption latency from fracturing your cognitive capacity throughout the day.',
      },
      {
        id: 'step-formal-shutdown-ritual',
        number: 3,
        title: 'Execute the End-of-Day Shutdown Ritual',
        prompt: 'At the end of your workday, execute the 3-step closure routine: 1) Review open PRs/tickets; 2) Write tomorrow’s primary process goal; 3) Declare your explicit verbal shutdown phrase:',
        placeholder: 'e.g., Open Loops Captured: Staged Git branch "feature/raft-rpc", logged outstanding edge case in notebook. Tomorrow’s Trigger: "Run test_partition_failover and debug line 88." Verbal Closure: "Shutdown Complete!" Disconnected all work devices at 5:30 PM...',
        example: 'Review completed tasks, write top priority for 9:00 AM tomorrow on paper notepad, close laptop lid, speak aloud "Shutdown Complete," and walk away until tomorrow morning.',
        cognitiveRationale: 'Capturing state in a trusted external system satisfies the Zeigarnik effect, clearing attention residue and enabling deep rest and memory consolidation.',
      },
    ],
  },
};
