import type { Lesson } from '../types/learning.ts';

export const LESSON_ATTENTION_SERIAL_CONTROL: Lesson = {
  id: 'attention-serial-control',
  chapterId: 'ch-4-attention-executive',
  number: '4.1',
  title: 'The Serial Bottleneck & Attentional Control',
  subtitle: 'Anterior Cingulate Gating and Task-Switching Residue Economics',
  readingTimeMinutes: 16,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'Why do modern software engineers and technical professionals feel utterly exhausted at 5:00 PM despite sitting in an ergonomic chair typing for only a few hours? If cognitive labor requires negligible physical calories, what invisible biological mechanism is draining executive energy and shattering problem-solving capacity?',
    teaser: 'Modern corporate culture celebrates "multitasking" as an executive superpower. Cognitive neuroscience proves it is a physical impossibility for novel problem solving.',
    hookNote: 'Human conscious attention is governed by a strictly serial biological bottleneck. Donald Broadbent (1958) and Michael Posner (1990) demonstrated that sensory systems process vast parallel inputs pre-attentively, but the conscious executive gateway can only bind and manipulate one complex cognitive stream at a time. What people call "multitasking" is rapid, erratic executive task-switching. In groundbreaking organizational neuroscience, Sophie Leroy (2009) proved that switching tasks leaves "Attention Residue"—part of your working memory remains stubbornly stuck on the previous task, degrading processing power on the new task for up to 25 minutes.',
  },
  prediction: {
    prompt: 'Before examining the neurobiology of attentional control, test your workplace intuition: Three senior engineers must design a mission-critical distributed consensus system over a 4-week period. Which attentional operating protocol yields the highest architectural quality and lowest bug rate?',
    context: 'All three engineers possess identical technical backgrounds and dedicate 30 hours per week to the project:',
    options: [
      {
        id: 'opt-continuous-partial',
        strategy: 'Protocol Alpha (Continuous Partial Attention)',
        description: 'Learner works on dual monitors with Slack, email, and pull request notifications active on the second screen, instantly responding to incoming team queries within 60 seconds.',
      },
      {
        id: 'opt-pomodoro-switching',
        strategy: 'Protocol Beta (Micro-Interleaving Pomodoro)',
        description: 'Learner works in 25-minute sprints, using each 5-minute break to check messages, reply to emails, browse social media feeds, and triage team alerts.',
      },
      {
        id: 'opt-shielded-monotask',
        strategy: 'Protocol Gamma (Residue-Shielded Monotask Blocks)',
        description: 'Learner conducts two 90-minute daily deep blocks with all notification daemons terminated, single-tasking with reference docs only, followed by true non-screen cognitive rest.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-shielded-monotask',
      headline: 'Residue-Shielded Monotask Blocks (Protocol Gamma) produce over 250% higher architectural throughput and a 4x reduction in subtle concurrency defects (Broadbent, 1958; Posner, 1990; Leroy, 2009; Newport, 2016).',
      explanation: 'Continuous partial attention (Protocol Alpha) forces the anterior cingulate cortex (ACC) into constant conflict resolution, flooding working memory with attention residue and depleting prefrontal metabolic reserves. Micro-interleaving during 5-minute breaks (Protocol Beta) introduces fresh open loops (the Zeigarnik effect), contaminating subsequent 25-minute sprints with persistent residual thoughts. Protocol Gamma respects the serial biological bottleneck: by eliminating external triggers and maintaining uninterrupted single-task focus, working memory buffers reach full schema depth without context-switching penalties.',
      optionFeedback: {
        'opt-continuous-partial': {
          title: 'Your Choice: Protocol Alpha (Continuous Partial Attention)',
          verdict: 'The Cognitive Fragmentation Disaster',
          analysis: 'Every notification ping, even when ignored, triggers an involuntary Orienting response in the superior colliculus and parietal cortex. Your prefrontal cortex must spend metabolic energy actively suppressing the impulse to check, inducing rapid executive exhaustion.',
        },
        'opt-pomodoro-switching': {
          title: 'Your Choice: Protocol Beta (Micro-Interleaving)',
          verdict: 'The Attention Residue Contamination Trap',
          analysis: 'Using short breaks to check email or social media introduces high-valence social and technical stimuli that hijack working memory. When the next work sprint begins, your brain is still processing the messages you just read (Leroy, 2009).',
        },
        'opt-shielded-monotask': {
          title: 'Your Choice: Protocol Gamma (Residue-Shielded Monotask Blocks)',
          verdict: 'Empirically Supported Strategy (Serial Filter Gating & Residue Elimination)',
          analysis: 'Optimal cognitive engineering! By creating long, uninterrupted monotasking windows with zero communication pings, you eliminate attention residue, allow deep hippocampal-prefrontal schema binding, and preserve executive control energy.',
        },
      },
      comparisons: [
        {
          label: 'Continuous Partial Attention (Protocol Alpha)',
          immediateRetention: '35% (Constant schema interruption)',
          oneWeekRetention: '18% (Fragile, fragmented traces)',
          illusionRating: 'High (feels busy and responsive, but output is shallow)',
          isEmpiricalWinner: false,
        },
        {
          label: 'Micro-Interleaving Pomodoro (Protocol Beta)',
          immediateRetention: '62% (Moderate focus)',
          oneWeekRetention: '45% (Interleaved social residue)',
          illusionRating: 'Moderate (structured timer, but breaks contaminate attention)',
          isEmpiricalWinner: false,
        },
        {
          label: 'Residue-Shielded Monotask (Protocol Gamma)',
          immediateRetention: '88% (Deep working memory immersion)',
          oneWeekRetention: '84% at 1 month (Durable schema consolidation)',
          illusionRating: 'Calibrated; sustained focus reveals real problem complexity',
          isEmpiricalWinner: true,
        },
      ],
      evidenceDistinction: 'Empirical Evidence Distinction: The physical serial bottleneck of conscious executive control is a cornerstone of cognitive psychology (Broadbent, 1958; Kahneman, 1973; Pashler, 1994). While sensory cortex can process multi-sensory features in parallel (e.g., listening to instrumental music while looking at diagrams), any task requiring novel executive decision-making, code writing, or semantic synthesis relies on the bottlenecked dorsolateral prefrontal cortex.',
    },
  },
  coreExplanations: [
    {
      id: 'broadbent-filter-posner-networks',
      title: '1. Broadbent’s Filter & Posner’s Tripartite Attentional Networks',
      tagline: 'How the brain selectively gates sensory chaos into serial working memory',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Replicated Empirical Consensus',
      summary: 'In 1958, British psychologist Donald Broadbent proposed the seminal Filter Model of attention, showing that because the nervous system possesses limited channel capacity, an early physical filter must selectively block irrelevant sensory streams before they reach conscious working memory. Decades later, neuroscientist Michael Posner (1990) revealed that attention is not a single organ, but three distinct, anatomically separate neural networks: Alerting, Orienting, and Executive Control.',
      mechanisms: [
        {
          label: 'Broadbent’s Early Filter Bottleneck',
          description: 'Sensory receptors receive millions of bits of parallel input per second. Broadbent (1958) demonstrated using dichotic listening experiments that this input enters a temporary sensory store, but an all-or-none biological filter permits only one attended channel to pass through to the central processing pipeline.',
        },
        {
          label: 'Posner’s Tripartite Attentional Architecture',
          description: '1) Alerting Network (locus coeruleus & norepinephrine): Maintains foundational vigilance; 2) Orienting Network (superior colliculus & pulvinar): Directs focal attention toward novel spatial cues; 3) Executive Control Network (anterior cingulate cortex & dorsolateral prefrontal cortex): Resolves conflict, inhibits impulses, and directs deliberate cognitive focus.',
        },
        {
          label: 'The Anterior Cingulate Cortex (ACC) as Conflict Monitor',
          description: 'The dorsal ACC continuously computes the conflict between your current goal and competing environmental distractions (Botvinick et al., 2001). When an alert pops up, the ACC detects the conflict and signals the dlPFC to expend metabolic glucose to suppress the distractor.',
        },
      ],
      keyInsight: 'Attention is not willpower; it is a physical sensory gatekeeper. Every time you allow a distraction into your sensory visual field, you force your ACC into high-cost conflict suppression.',
      simplifiedModelCaveat: 'Broadbent’s strict all-or-none filter model was later refined by Anne Treisman’s Attenuation Theory, showing that unattended signals are dialed down in intensity rather than completely extinguished (e.g., the Cocktail Party Effect).',
    },
    {
      id: 'leroy-attention-residue-switching',
      title: '2. Sophie Leroy’s Attention Residue & Task-Switching Economics',
      tagline: 'Why checking Slack for 30 seconds degrades cognitive capacity for 25 minutes',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Replicated Empirical Consensus',
      summary: 'In a pioneering 2009 organizational neuroscience study, Dr. Sophie Leroy coined and empirically validated the concept of "Attention Residue." Leroy demonstrated that when a knowledge worker switches from Task A to Task B, their attentional focus does not transition cleanly. A significant portion of conscious cognitive bandwidth remains tied up in Task A, severely impairing problem-solving speed, working memory capacity, and accuracy on Task B.',
      mechanisms: [
        {
          label: 'The Persistence of Attentional Residue (Leroy, 2009)',
          description: 'When switching away from an incomplete task, working memory buffers do not instantly erase the old context. Instead, unresolved sub-goals and episodic schemas continue to fire in the background, consuming central executive bandwidth and preventing deep immersion in the new task.',
        },
        {
          label: 'The Asymmetric Task-Switching Penalty',
          description: 'Cognitive psychologists (Monsell, 2003; Rogers & Monsell, 1995) showed that switching between tasks carries a substantial "switch cost" in both reaction time and error rate. Reconfiguring the prefrontal task-set requires 15 to 25 minutes of warm-up reconstruction to achieve peak flow.',
        },
        {
          label: 'The Zeigarnik Effect in Technical Knowledge Work',
          description: 'First observed by Bluma Zeigarnik (1927), uncompleted tasks remain in an active, privileged state in memory. An unread email, half-written PR review, or unresolved bug creates an intrusive open loop that generates continuous involuntary intrusive thoughts until formally parked.',
        },
      ],
      keyInsight: 'There is no such thing as a "quick check" of an inbox. A 30-second glance at an unresolved message injects attention residue that degrades complex thinking for nearly half an hour.',
      simplifiedModelCaveat: 'Attention residue is significantly higher when Task A is left incomplete or under time pressure. Switching between fully completed, closed-book tasks produces substantially lower residue.',
    },
    {
      id: 'prefrontal-biased-competition-fatigue',
      title: '3. Prefrontal Biased Competition & Executive Energy Recovery',
      tagline: 'The mechanics of cognitive control and the biology of central executive fatigue',
      scientificStatus: 'neurobiological-mechanism',
      statusLabel: 'Neurobiological Mechanism',
      summary: 'In their seminal 2001 theory of prefrontal function, Earl Miller and Jonathan Cohen established the Biased Competition Model of cognitive control. When multiple stimuli compete for neural representation in the brain, the prefrontal cortex does not perform the work directly; it emits top-down biasing signals that tilt neural competition in favor of task-relevant pathways.',
      mechanisms: [
        {
          label: 'The Miller & Cohen Biased Competition Model (2001)',
          description: 'Lower-level sensory and motor systems naturally gravitate toward the most habitual, emotionally salient, or loudest stimuli. The dorsolateral prefrontal cortex (dlPFC) acts as a conductor, sending excitatory top-down biasing signals that artificially boost the neural firing of goal-relevant thoughts over distractors.',
        },
        {
          label: 'Astrocytic Glycogen Depletion & Central Executive Fatigue',
          description: 'Sustained top-down prefrontal biasing is biologically expensive. Astrocytes supplying glycogen to prefrontal synapses experience metabolic depletion, and glutamate accumulates in the lateral prefrontal cortex, manifesting subjectively as cognitive exhaustion and loss of focus.',
        },
        {
          label: 'Environmental Shielding vs. Willpower Depletion',
          description: 'Relying on conscious willpower to ignore notifications is biologically doomed: every resisted cue drains prefrontal metabolic reserves. Elite learners rely on "choice architecture"—physically removing phones, killing notification daemons, and working in isolated environments so no conflict ever reaches the ACC.',
        },
      ],
      keyInsight: 'Top-down prefrontal control is a scarce, metabolically expensive biological resource. Protect it by engineering environments that eliminate the sensory cues of distraction before they enter the attention filter.',
      simplifiedModelCaveat: 'Central executive fatigue is not a permanent depletion; brief 10-minute bouts of non-cognitive rest (walking in nature, eyes-closed meditation) rapidly restore astrocytic glycogen and reset attentional gating.',
    },
  ],
  diagram: {
    title: 'The Attentional Filter & Executive Control Pipeline',
    subtitle: 'How sensory inputs are gated, executive resources are deployed, and attention residue degrades capacity',
    stages: [
      {
        id: 'stage-sensory-buffer-scanning',
        name: 'Stage 1: Sensory Buffer & Pre-Attentive Scanning',
        subtitle: 'The vast parallel sensory flood',
        capacity: 'High-capacity, short duration sensory stores (echoic/iconic)',
        duration: '100–300 ms post-stimulus',
        role: 'Environmental inputs (screen pixels, audio alerts, room chatter) hit peripheral sensors and are parsed pre-attentively in parallel.',
        failureMode: 'Sensory flooding: working in a noisy, notification-heavy environment forces continuous sensory processing.',
        evidenceType: 'Empirical consensus (Broadbent 1958; Posner 1990)',
        practicalFix: 'Eliminate visual motion, silence hardware audio pings, and wear noise-cancelling headphones.',
      },
      {
        id: 'stage-acc-filter-gating',
        name: 'Stage 2: Selective Filter & ACC Conflict Gating',
        subtitle: 'The selective bottleneck',
        capacity: 'Serial gating mediated by Anterior Cingulate Cortex',
        duration: 'Continuous real-time conflict detection',
        role: 'The dorsal ACC compares incoming sensory signals against active task goals, gating task-relevant items and actively suppressing distractors via dlPFC top-down biasing.',
        failureMode: 'Conflict exhaustion: every notification ping forces the ACC to compute conflict and spend glucose to inhibit the impulse to check.',
        evidenceType: 'Neurobiological mechanism (Botvinick 2001; Miller & Cohen 2001)',
        practicalFix: 'Kill notification daemons at the OS level so the ACC never has to suppress an incoming alert.',
      },
      {
        id: 'stage-focused-working-memory',
        name: 'Stage 3: Focused Working Memory Engagement',
        subtitle: 'Serial deep schema manipulation',
        capacity: 'Strict ~3–4 chunk working memory scratchpad',
        duration: '60–90 minutes of peak uninterrupted immersion',
        role: 'Working memory buffers hold task-specific variables, code logic, and mathematical relations, constructing deep neocortical schema connections.',
        failureMode: 'Premature context abort: glancing at a message evicts working memory slots, destroying complex mental representations.',
        evidenceType: 'Empirical consensus (Cowan 2001; Sweller 1988)',
        practicalFix: 'Maintain single-window focus and use a physical notepad to capture off-topic thoughts without leaving your IDE.',
      },
      {
        id: 'stage-attention-residue-decay',
        name: 'Stage 4: Attention Residue Contamination & Reset',
        subtitle: 'The context-switching tax',
        capacity: 'Cognitive bandwidth leakage',
        duration: '15–25 minutes of post-switch performance impairment',
        role: 'When an interruption occurs, unresolved sub-goals of the interrupted task linger as attention residue, cannibalizing executive bandwidth.',
        failureMode: 'Chronic fragmentation: switching tasks every 10 minutes creates permanent compound attention residue, dropping effective IQ and problem-solving ability.',
        evidenceType: 'Empirical consensus (Leroy 2009; Monsell 2003)',
        practicalFix: 'Formally park interrupted tasks by writing a 2-sentence state summary before switching, closing the Zeigarnik loop.',
      },
    ],
    feedbackLoopDescription: 'The Attentional Restoration Cycle: Completing a 90-minute Stage 3 sprint followed by a 15-minute non-cognitive rest resets prefrontal glycogen, clears residual loops, and restores Stage 2 gating efficiency for the next deep block.',
  },
  exercise: {
    title: 'Attentional Dynamics Diagnostic: Identify the Cognitive Gate Breakdown',
    instruction: 'Analyze each real-world technical scenario and diagnose which cognitive bottleneck or attentional pathology is primarily responsible.',
    categories: [
      {
        id: 'attention-bottleneck',
        title: 'Sensory Overload & ACC Conflict Exhaustion',
        description: 'Working in high-distraction environments where the anterior cingulate cortex is overwhelmed by continuous distractor suppression.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'working-memory-overload',
        title: 'Attention Residue Contamination (Leroy Penalty)',
        description: 'Frequent micro-checking of messages or emails leaving persistent cognitive residue that cannibalizes working memory.',
        badgeStyle: 'var(--danger-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Multitasking Parallelism Fallacy',
        description: 'Believing you can simultaneously process two high-level semantic tasks (e.g. coding while listening to conversational podcasts) without performance degradation.',
        badgeStyle: 'var(--warning-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Prefrontal Glycogen Depletion & Central Fatigue',
        description: 'Pushing through 8+ hours of uninterrupted cognitive strain without restorative non-cognitive rest, leading to severe error spikes.',
        badgeStyle: 'var(--success-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-slack-ping-pong',
        realWorldContext: 'Distributed Backend Engineering',
        scenario: 'Alex has Slack open on his left monitor with desktop notifications enabled for 12 channels. Every 3 minutes, an unread badge flashes. Even though he only opens the channel every 20 minutes, by 3 PM his head throbs with mental exhaustion and he can barely write a simple SQL query.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'Alex is experiencing ACC Conflict Exhaustion (Botvinick, 2001). Every flashing visual badge triggers an involuntary Orienting response. His prefrontal cortex must actively expend metabolic glucose to suppress the impulse to look. Over thousands of micro-conflicts, prefrontal resources deplete even without clicking.',
        evidenceBasedFix: 'Quit Slack entirely during deep blocks; configure scheduled 15-minute asynchronous communication triage windows at 11 AM and 4 PM.',
      },
      {
        id: 'scen-quick-email-check',
        realWorldContext: 'Systems Architecture Design',
        scenario: 'Maya is writing complex concurrency logic for a raft cluster. Her build takes 45 seconds to compile. During the compile wait, she quickly glances at her email inbox, notices an urgent message from a client asking for a budget update, closes the tab, and returns to code. For the next 30 minutes, she repeatedly re-reads the same 10 lines of code, unable to remember what state transition she was implementing.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'Maya triggered severe Attention Residue (Leroy, 2009). Glancing at the client’s urgent email opened an unresolved Zeigarnik loop. Part of her executive working memory remained trapped on the financial question, halving her available capacity for complex concurrency logic.',
        evidenceBasedFix: 'Treat compile times as non-cognitive micro-pauses: look away from screens or do physical breathing rather than checking informational channels.',
      },
      {
        id: 'scen-podcast-coding-myth',
        realWorldContext: 'Frontend Component Development',
        scenario: 'Sam loves listening to high-density tech history podcasts while refactoring TypeScript state stores. He claims it keeps him energized and swears it doesn’t slow him down. However, git blame reveals that his code has 3x more type errors and missing null checks than anyone else on the team.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'Sam is trapped in the Multitasking Parallelism Fallacy. Both verbal podcast comprehension and TypeScript type reasoning require serial Wernicke-Broca semantic circuits and prefrontal executive resources (Broadbent, 1958). His brain is rapidly task-switching between audio and code, dropping critical edge-case details.',
        evidenceBasedFix: 'Switch to non-lyrical, ambient or instrumental audio during complex coding, reserving podcasts for non-cognitive mechanical chores like dishwashing.',
      },
      {
        id: 'scen-eight-hour-grind',
        realWorldContext: 'Machine Learning Model Deployment',
        scenario: 'Jordan has a production deadline tomorrow. He sits at his desk at 9 AM and codes non-stop for 9 hours without standing, eating lunch at his keyboard while debugging tensor shape mismatches. At 5:30 PM, he accidentally drops the production feature store database with a reckless script typo.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'Jordan suffered catastrophic Prefrontal Glycogen Depletion (Miller & Cohen, 2001). Sustained top-down prefrontal cognitive control without non-cognitive rest causes astrocytic metabolic exhaustion and glutamate buildup in the lateral PFC, destroying inhibitory motor and cognitive control.',
        evidenceBasedFix: 'Implement hard 90-minute block boundaries followed by 15 minutes of true non-screen rest (walking outside, physical movement) to replenish neural reserves.',
      },
    ],
  },
  quiz: {
    title: 'The Attentional Bottleneck & Executive Control Assessment',
    instruction: 'Validate your understanding of Broadbent’s filter model, Posner’s networks, Leroy’s attention residue, and prefrontal control.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-broadbent-filter-bottleneck',
        question: 'What fundamental constraint of human cognition did Donald Broadbent’s (1958) early filter model demonstrate using dichotic listening experiments?',
        options: [
          {
            id: 'q1-a',
            text: 'Human attention can easily process up to 12 separate complex conversations at the exact same time.',
          },
          {
            id: 'q1-b',
            text: 'Sensory inputs enter a temporary buffer in parallel, but conscious working memory is restricted to a strictly serial bottleneck that only permits one attended channel through at a time.',
          },
          {
            id: 'q1-c',
            text: 'The human brain has zero sensory filters and retains every single photon and soundwave in permanent storage.',
          },
          {
            id: 'q1-d',
            text: 'Filters only exist in human vision, while auditory processing has infinite parallel bandwidth.',
          },
        ],
        correctOptionId: 'q1-b',
        explanation: 'Broadbent (1958) proved that while pre-attentive sensory stores can register physical features of multiple inputs in parallel, conscious executive processing has a strict bottleneck. Information requiring semantic comprehension must pass through this serial filter one stream at a time.',
        pedagogicalRationale: 'Establishes the biological reality of the serial attentional bottleneck against the myth of cognitive multitasking.',
        evidenceNote: 'Broadbent, D. E. (1958). Perception and Communication. Pergamon Press.',
      },
      {
        id: 'q2-leroy-attention-residue',
        question: 'What is the phenomenon of "Attention Residue" discovered by Dr. Sophie Leroy (2009), and why does a 30-second email check degrade subsequent coding performance?',
        options: [
          {
            id: 'q2-a',
            text: 'When switching away from Task A to Task B, working memory does not clear cleanly; uncompleted schemas of Task A continue firing in the background, consuming central executive bandwidth.',
          },
          {
            id: 'q2-b',
            text: 'Checking email causes permanent physical brain damage to the occipital lobe.',
          },
          {
            id: 'q2-c',
            text: 'Attention residue refers to physical dust particles accumulating on your computer screen.',
          },
          {
            id: 'q2-d',
            text: 'Email checking is proven to improve problem-solving speed by 50% due to dopamine stimulation.',
          },
        ],
        correctOptionId: 'q2-a',
        explanation: 'Leroy (2009) demonstrated that attention residue occurs when people switch tasks without completing the prior activity. Unresolved sub-goals remain active in episodic working memory, significantly impairing cognitive speed, accuracy, and working memory capacity on the next task.',
        pedagogicalRationale: 'Teaches learners the steep hidden cognitive tax of "quick checks" during focused technical sessions.',
        evidenceNote: 'Leroy, S. (2009). Why is it so hard to do my work? The challenge of attention residue. Organizational Behavior and Human Decision Processes.',
      },
      {
        id: 'q3-posner-acc-executive',
        question: 'In Michael Posner’s tripartite model of attention, what is the specific biological role of the Anterior Cingulate Cortex (ACC)?',
        options: [
          {
            id: 'q3-a',
            text: 'The ACC monitors cognitive conflict between active goals and competing distractors, signaling the prefrontal cortex to exert top-down inhibition.',
          },
          {
            id: 'q3-b',
            text: 'The ACC is responsible for regulating body temperature during exercise.',
          },
          {
            id: 'q3-c',
            text: 'The ACC controls the physical dilation of the pupil when looking at light.',
          },
          {
            id: 'q3-d',
            text: 'The ACC produces red blood cells in the bone marrow.',
          },
        ],
        correctOptionId: 'q3-a',
        explanation: 'In Posner’s Executive Control network, the dorsal Anterior Cingulate Cortex (ACC) acts as a real-time conflict detector. When irrelevant sensory stimuli conflict with task goals, the ACC detects the discrepancy and recruits the dorsolateral prefrontal cortex to apply top-down inhibitory control (Botvinick et al., 2001).',
        pedagogicalRationale: 'Provides the mechanistic neural basis for why distraction drains cognitive energy even when resisted.',
        evidenceNote: 'Posner, M. I., & Petersen, S. E. (1990). The attention system of the human brain. Annual Review of Neuroscience.',
      },
      {
        id: 'q4-miller-cohen-biased-competition',
        question: 'According to Earl Miller & Jonathan Cohen’s (2001) Biased Competition Model, how does the Prefrontal Cortex enforce focus over powerful distractors?',
        options: [
          {
            id: 'q4-a',
            text: 'It completely cuts off blood supply to the eyes and ears.',
          },
          {
            id: 'q4-b',
            text: 'It emits top-down excitatory biasing signals that boost the neural firing of goal-relevant pathways, allowing them to out-compete distractors in sensory and motor cortices.',
          },
          {
            id: 'q4-c',
            text: 'It replaces all brain neurons with computer chips.',
          },
          {
            id: 'q4-d',
            text: 'It forces the body to fall asleep immediately when distracted.',
          },
        ],
        correctOptionId: 'q4-b',
        explanation: 'Miller & Cohen (2001) showed that sensory and motor representations compete for neural dominance. The prefrontal cortex provides top-down biasing signals that tip the balance toward task-relevant neural assemblies. However, because this biasing consumes metabolic resources, designing quiet environments is far superior to relying on willpower.',
        pedagogicalRationale: 'Reinforces the principle of environmental choice architecture over exhausting brute-force willpower.',
        evidenceNote: 'Miller, E. K., & Cohen, J. D. (2001). An integrative theory of prefrontal cortex function. Annual Review of Neuroscience.',
      },
    ],
  },
  practicalTask: {
    title: 'The Attention Shielding & Residue-Free Monotask Protocol',
    summary: 'A 3-step practical protocol to insulate working memory from sensory distraction and eradicate attention residue during complex technical work.',
    steps: [
      {
        id: 'step-quarantine-choice-architecture',
        number: 1,
        title: 'Environmental & Digital Quarantine (Choice Architecture)',
        prompt: 'Prior to your deep technical block, physically eliminate sensory competition before it reaches your Anterior Cingulate Cortex. Document your quarantine actions:',
        placeholder: 'e.g., Physical: Placed smartphone in another room on airplane mode. Digital: Quit Slack, Discord, and Email clients; enabled "Do Not Disturb" on macOS; closed all browser tabs except the API documentation for Kafka...',
        example: 'Physical: Closed office door, put on noise-cancelling headphones, moved phone out of line of sight. Digital: Killed Slack process, closed email, turned off second monitor to eliminate peripheral visual movement.',
        cognitiveRationale: 'Eliminating sensory cues before they reach the early filter removes the need for ACC conflict detection, conserving valuable prefrontal metabolic glycogen.',
      },
      {
        id: 'step-residue-free-sprint-parking',
        number: 2,
        title: '60–90 Minute Monotask Sprint & Physical Thought Parking',
        prompt: 'Execute your technical task with strict single-task discipline. If an urgent, unrelated thought strikes (e.g. "I must pay the electric bill"), do not switch tabs. Record your parking habit:',
        placeholder: 'e.g., Kept an index card next to my keyboard labeled "Thought Parking Lot." When the thought of booking flights arose, wrote "Book flights at 4 PM" on the card in 3 seconds and immediately returned working memory focus to the compiler error...',
        example: 'Used a physical paper notepad to park intrusive thoughts: "Check staging deploy status" and "Reply to Sarah about sprint review." Parking took 5 seconds and closed the Zeigarnik loop without introducing digital attention residue.',
        cognitiveRationale: 'Externalizing intrusive thoughts onto paper satisfies the Zeigarnik effect, closing the open loop without requiring a digital task-switch that injects attention residue.',
      },
      {
        id: 'step-clean-park-restoration',
        number: 3,
        title: 'Clean Task Parking & Non-Cognitive Rest Cycle',
        prompt: 'At the end of your sprint, formally park your current code state before stepping away. Then document your true non-cognitive rest activity:',
        placeholder: 'e.g., State Park: Wrote a 2-line comment in main.rs: "Stopped at line 142. Next: implement error branch for timeout response." Non-Cognitive Rest: Took a 12-minute walk outside without headphones or phone, allowing astrocytic glycogen to replenish...',
        example: 'State Park: Created a Git stash with message "WIP: raft leader election test passing, need to test network partition." Non-Cognitive Rest: 15-minute walk around the block, looking at trees, zero screen time.',
        cognitiveRationale: 'Writing an explicit state park eliminates attention residue during rest, while screen-free movement restores prefrontal neurotransmitter and glycogen balance.',
      },
    ],
  },
};
