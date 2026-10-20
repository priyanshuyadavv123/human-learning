import type { Lesson } from '../types/learning.ts';

export const LESSON_PARADOX_OF_AUTOMATION: Lesson = {
  id: 'paradox-of-automation',
  chapterId: 'ch-13-automaticity',
  number: '13.2',
  title: 'The Paradox of Automation',
  subtitle: 'Why automated routines degrade flexibility and how to de-automate',
  readingTimeMinutes: 16,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'When automated flight control systems or CI/CD deployment scripts handle 99.9% of routine operations flawlessly, why do human operators make catastrophic errors during the rare 0.1% of unexpected edge cases?',
    teaser: 'Automation eliminates routine cognitive friction, but in doing so, it erodes situational awareness, degrades manual diagnostic skill, and induces lethal cognitive entrenchment.',
    hookNote: 'In 1983, British cognitive psychologist Lisanne Bainbridge published her seminal paper "Ironies of Automation," uncovering a profound design paradox: the more reliable and automated an operational system becomes, the more crucial—and vulnerable—the human operator is. When systems run autonomously, humans are demoted to passive monitors, a role for which human vigilance neurobiology is notoriously unsuited (Mackworth Clock vigilance decrement). Over time, unexercised mental models atrophy (deskilling), and when rare edge-case anomalies occur, operators experience severe out-of-the-loop unfamiliarity. In this lesson, we explore Bainbridge’s ironies of automation, Abraham Luchins’ (1942) Einstellung effect (mechanized mental blindness), Endsley’s situational awareness taxonomy, and deliberate de-automation protocols to keep cognitive architecture resilient under chaos.',
  },
  prediction: {
    prompt: 'Before analyzing the paradox of automation, evaluate this clinical human factors experiment: Two groups of site reliability engineering (SRE) teams maintain identical mission-critical distributed databases. Team A uses "Hyper-Automated Self-Healing": scripts automatically detect, isolate, and failover 100% of routine partition and replication faults without human intervention (engineers have not performed a manual failover in 18 months). Team B uses "Active Copilot Supervision with Random Drills": automation proposes remediation plans, but engineers must manually verify telemetry, approve failover steps, and participate in unannounced weekly Chaos Engineering failure injections. Suddenly, an unprecedented zero-day bug causes a novel split-brain condition that neither system’s automation knows how to resolve. What does empirical cognitive psychology predict regarding diagnostic speed, situational awareness, and catastrophic error rates across the two teams?',
    context: 'Both teams have senior staff engineers with equal formal credentials and access to identical monitoring dashboards:',
    options: [
      {
        id: 'opt-automation-preserves-mental-energy',
        strategy: 'Hypothesis A: Cognitive Energy Preservation',
        description: 'Team A significantly outperforms Team B, because 18 months of automated operations preserved their cognitive stamina and prevented burnout, allowing them to tackle the crisis with fresh, unstrained prefrontal cortexes.',
      },
      {
        id: 'opt-bainbridge-out-of-the-loop-collapse',
        strategy: 'Hypothesis B: Bainbridge’s Out-of-the-Loop Collapse',
        description: 'Team A suffers severe diagnostic paralysis, takes 5x longer to diagnose the root cause, and makes 3x more destructive interventions than Team B, because passive monitoring degraded their mental models and induced out-of-the-loop situational blindness (Bainbridge, 1983; Endsley, 1995).',
      },
      {
        id: 'opt-identical-crisis-response',
        strategy: 'Hypothesis C: Equal Crisis Equivalence',
        description: 'Both teams perform identically, because zero-day anomalies are equally unfamiliar to everyone regardless of prior routine practice.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-bainbridge-out-of-the-loop-collapse',
      headline: 'The Irony of Automation: Passive Monitoring Destroys Situational Awareness and Manual Diagnostic Competence (Bainbridge, 1983; Endsley, 1995).',
      explanation: 'In her landmark 1983 paper "Ironies of Automation," Lisanne Bainbridge proved that automation does not replace human skill—it changes the nature of human error. By automating all routine and easy tasks, engineers only ever face the hardest, most ambiguous, unprecedented failures. However, because automation handled the day-to-day operations, the engineers were relegated to passive monitors. Cognitive science proves that passive monitoring causes rapid situational awareness decay (Endsley, 1995) and neurobiological vigilance decrement. Furthermore, mental models of the underlying system degrade through disuse (cognitive deskilling). When an unprecedented crisis strikes, the passive operators (Team A) do not know the current state of the system, cannot predict how the automation will react, and apply rigid automated mental habits that exacerbate the disaster (the Einstellung effect). Team B, by maintaining continuous active loop participation and deliberate friction drills, keeps their mental representations primed and accurate.',
      optionFeedback: {
        'opt-automation-preserves-mental-energy': {
          title: 'Your Choice: Hypothesis A (The Cognitive Rest Fallacy)',
          verdict: 'Refuted by 40+ Years of Human Factors Research',
          analysis: 'Passive monitoring does not "rest" the brain constructively; it induces boredom, vigilance failure, and atrophies the retrieval structures needed to reason about complex distributed topologies.',
        },
        'opt-bainbridge-out-of-the-loop-collapse': {
          title: 'Your Choice: Hypothesis B (Bainbridge’s Out-of-the-Loop Collapse)',
          verdict: 'Empirical Cognitive Science Consensus',
          analysis: 'Precisely accurate! Bainbridge (1983) and Endsley (1995) showed that out-of-the-loop operators lose Level 1 (perception) and Level 2 (comprehension) situational awareness, leading to catastrophic decision failures during novel edge cases.',
        },
        'opt-identical-crisis-response': {
          title: 'Your Choice: Hypothesis C (The Novelty Equivalence Illusion)',
          verdict: 'Contradicted by Human Performance Data',
          analysis: 'Active participation maintains calibrated mental representations of system state; unannounced failure drills prevent procedural atrophy, giving active operators an overwhelming advantage during novel crises.',
        },
      },
      comparisons: [
        {
          label: 'Active Copilot & Chaos Drills (Team B)',
          immediateRetention: 'High situational awareness; 4-minute diagnostic root-cause speed',
          oneWeekRetention: 'Durable mental models maintained through weekly unannounced chaos drills',
          illusionRating: 'Calibrated; engineers remain aware of latent systemic vulnerabilities',
          isEmpiricalWinner: true,
        },
        {
          label: 'Hyper-Automated Passive Monitoring (Team A)',
          immediateRetention: 'Out-of-the-loop paralysis; 42-minute diagnostic latency with destructive interventions',
          oneWeekRetention: 'Progressive cognitive deskilling; operators forget manual failover commands',
          illusionRating: 'Lethal complacency; 99.9% uptime created a false illusion of total safety',
          isEmpiricalWinner: false,
        },
      ],
      evidenceDistinction: 'Automation replaces physical effort but demands heightened cognitive vigilance; operators left out-of-the-loop suffer rapid mental model decay and cognitive entrenchment.',
    },
  },
  coreExplanations: [
    {
      id: 'bainbridge-ironies-of-automation',
      title: 'Lisanne Bainbridge (1983): The Ironies of Automation',
      tagline: 'Why removing the human operator from the loop makes their eventual intervention vastly more dangerous',
      statusLabel: 'Classic Human Factors & Cognitive Engineering Benchmark (1983)',
      scientificStatus: 'empirical-consensus',
      summary: 'In 1983, Lisanne Bainbridge outlined the core paradoxes of modern technological design. Designers automate all the tasks they know how to automate, leaving only the tasks they do not understand how to automate to the human operator—while simultaneously denying the operator the operational practice needed to handle them.',
      mechanisms: [
        {
          label: 'Irony 1: The Elimination of Routine Practice (Cognitive Deskilling)',
          description: 'A skill must be practiced continuously to maintain synaptic and procedural integrity. By automating all easy and moderate tasks, the human operator never practices manual operation, causing their physical and cognitive diagnostic skills to decay.',
        },
        {
          label: 'Irony 2: The Vigilance Decrement of Passive Monitoring',
          description: 'Human neurobiology is fundamentally incapable of maintaining alert vigilance while watching a screen where nothing happens for hours (the Mackworth Clock effect). Vigilance drops by over 50% within 30 minutes of passive observation.',
        },
        {
          label: 'Irony 3: The Out-of-the-Loop Performance Problem',
          description: 'When the automation encounters an edge condition and abruptly disengages ("bails out"), the operator is thrown into the loop with zero situational context, forced to reconstruct system state under extreme stress in seconds.',
        },
      ],
      keyInsight: 'The more advanced and reliable the automation, the more crucial and unpracticed the human operator becomes when it fails.',
      simplifiedModelCaveat: 'Automation is still necessary for modern high-speed scale; the solution is not to eliminate automation, but to design "human-in-the-loop" interfaces that mandate active cognitive verification.',
    },
    {
      id: 'einstellung-effect-cognitive-entrenchment',
      title: 'The Einstellung Effect: Mechanized Habits and Blind Spots',
      tagline: 'How automated cognitive routines blind experts to simpler, alternative solutions',
      statusLabel: 'Experimental Cognitive Psychology Classic (Luchins, 1942)',
      scientificStatus: 'empirical-consensus',
      summary: 'Abraham Luchins’ (1942) famous Water Jar experiments demonstrated the "Einstellung Effect" (mechanized mental set). When learners repeatedly solve problems using a complex automated routine, their brains become rigidly conditioned to that procedure, blinding them to simpler, direct solutions or fatal context changes.',
      mechanisms: [
        {
          label: 'The Water Jar Paradigm (Luchins, 1942)',
          description: 'Subjects trained on five consecutive math problems solved with a complex formula ($B - A - 2C$) continued using that laborious formula on subsequent test problems, completely failing to notice that a trivial two-step solution ($A - C$ or $A + C$) was right in front of them.',
        },
        {
          label: 'Neurobiological Mechanism of Cognitive Entrenchment',
          description: 'Automated striatal motor and cognitive habits inhibit prefrontal exploratory search. When a familiar perceptual trigger arrives, the basal ganglia fires the compiled production rule ballistically, suppressing competing neural pathways before conscious evaluation can occur.',
        },
        {
          label: 'Expertise Vulnerability on Non-Standard Tasks',
          description: 'Chess grandmasters and senior software engineers can fall prey to the Einstellung effect faster than intermediate players because their chunk recognizers fire so strongly and immediately that attention is physically locked into the familiar pattern.',
        },
      ],
      keyInsight: 'An automated habit is both a cognitive superpower and an intellectual blindfold: it speeds execution inside familiar territory while blinding you to unexpected reality.',
      simplifiedModelCaveat: 'The Einstellung effect is not fixed; simple metacognitive pauses ("What simple assumption am I taking for granted?") can break mechanized sets.',
    },
    {
      id: 'deliberate-de-automation-resilience',
      title: 'Deliberate De-Automation: Designing Cognitive Friction for Resilience',
      tagline: 'Protocols to maintain high situational awareness and combat procedural atrophy',
      statusLabel: 'Resilience Engineering & Cognitive Safety Consensus',
      scientificStatus: 'empirical-consensus',
      summary: 'To prevent cognitive deskilling and out-of-the-loop failure, high-reliability organizations (naval aviation, nuclear power, elite SRE teams) inject intentional cognitive friction and unannounced perturbation drills. De-automation forces prefrontal re-engagement, keeping mental representations fresh.',
      mechanisms: [
        {
          label: 'Endsley’s Three Levels of Situational Awareness (SA)',
          description: 'SA consists of (1) Perception of elements in current volume, (2) Comprehension of their current meaning, and (3) Projection of their future status. Automated passive displays erode Level 2 and Level 3 SA; active de-automation restores them.',
        },
        {
          label: 'Manual Reversion Drills & Chaos Engineering',
          description: 'Systems like Netflix’s Chaos Monkey and unannounced manual failover drills force engineers to perform manual troubleshooting under pressure, refreshing long-term memory retrieval structures and keeping procedural skills from decaying.',
        },
        {
          label: 'Active Verification Gates vs Blind Autopilot',
          description: 'Rather than allowing scripts to perform unilateral modifications, resilient architecture presents synthesized hypotheses that require human operators to predict outcomes and approve state transitions (supervised autonomy).',
        },
      ],
      keyInsight: 'True operational resilience is not the absence of automation; it is the deliberate practice of manual failure handling in the presence of automation.',
      simplifiedModelCaveat: 'Adding excessive cognitive friction to every routine task causes fatigue and friction burnout; de-automation must be applied strategically to high-consequence failure vectors.',
    },
  ],
  diagram: {
    title: 'The Automation Paradox & Situational Awareness Degradation Cycle',
    subtitle: 'From flawless automated routine to passive monitoring, cognitive deskilling, and out-of-the-loop crisis collapse',
    stages: [
      {
        id: 'stage-hyper-automation-routine',
        name: 'Stage 1: Flawless Automated Execution',
        subtitle: 'Scripts and systems handle 99.9% of routine operations',
        capacity: 'Zero prefrontal executive demand',
        duration: 'Months of continuous operation',
        role: 'Automation handles all standard tasks, eliminating operational friction and creating a tranquil operating environment.',
        failureMode: 'The Fluency Mirage: Believing that because the system hasn’t failed in 6 months, human operators understand how it works.',
        evidenceType: 'Ironies of automation benchmark (Bainbridge, 1983)',
        practicalFix: 'Track operational metrics alongside human manual competency metrics; never equate system uptime with human capability.',
      },
      {
        id: 'stage-passive-monitoring-deskilling',
        name: 'Stage 2: Passive Monitoring & Deskilling',
        subtitle: 'Vigilance decrement and mental model atrophy',
        capacity: 'Declining basal ganglia and cortical synaptic strength',
        duration: 'Gradual procedural decay over 3-12 months',
        role: 'The human operator is relegated to a passive observer. Manual procedural scripts are never run, and working knowledge of system internals atrophies.',
        failureMode: 'Mackworth Vigilance Decrement: Operators lose situational awareness; scanning becomes superficial and unfocused.',
        evidenceType: 'Situational awareness & vigilance psychology (Endsley, 1995; Mackworth, 1948)',
        practicalFix: 'Rotate operators into active manual staging exercises; schedule weekly hands-on disaster recovery simulations.',
      },
      {
        id: 'stage-unprecedented-edge-case-anomaly',
        name: 'Stage 3: Novel Anomaly & Automation Disengagement',
        subtitle: 'The sudden out-of-the-loop transition under extreme stress',
        capacity: 'Sudden prefrontal working memory overload',
        duration: '10-30 seconds of transition shock',
        role: 'A novel zero-day failure or network partition occurs that the automation cannot handle. The automated system throws an exception and disengages, handing control to the operator.',
        failureMode: 'Out-of-the-Loop Paralysis: The operator has no Level 1 or 2 situational awareness; interpreting raw telemetry requires minutes of frantic search.',
        evidenceType: 'Human factors & aviation incident studies (Bainbridge, 1983; Billings, 1997)',
        practicalFix: 'Design automation to fail gracefully with explanatory context dashboards rather than abrupt silent disengagement.',
      },
      {
        id: 'stage-einstellung-mechanized-collapse',
        name: 'Stage 4: Einstellung Entrenchment & Intervention Collapse',
        subtitle: 'Applying automated mental habits to novel problems with destructive outcomes',
        capacity: 'Rigid cognitive set & panic narrowing',
        duration: 'Active crisis phase',
        role: 'Under stress, the operator defaults to their most automated, familiar procedural routines (e.g. restarting servers, clearing caches) which are ineffective or fatal for this novel anomaly.',
        failureMode: 'Mechanized Mental Blindness: The operator stubbornly repeats the automated procedure even as metrics crash.',
        evidenceType: 'Experimental problem solving (Luchins, 1942; Bilalić et al., 2008)',
        practicalFix: 'Institute mandatory cognitive pauses: enforce a 60-second hypothesis verification step before issuing destructive commands.',
      },
    ],
    feedbackLoopDescription: 'Hyper-automation induces passive deskilling; when novel edge cases strike, out-of-the-loop operators apply rigid Einstellung habits, causing catastrophic system collapse.',
  },
  exercise: {
    title: 'The Automation Paradox & Situational Awareness Diagnostic Exercise',
    instruction: 'Analyze four real-world engineering, aviation, and infrastructure disaster scenarios. Diagnose whether the failure stems from Bainbridge’s Out-of-the-Loop Collapse, The Einstellung Effect (Mechanized Blindness), Cognitive Deskilling via Disuse, or Vigilance Decrement, and prescribe the evidence-grounded fix.',
    categories: [
      {
        id: 'attention-bottleneck',
        title: 'Bainbridge’s Out-of-the-Loop Collapse',
        description: 'An automated system failed and abruptly handed control to a human operator who lacked the situational context needed to understand current system state.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'working-memory-overload',
        title: 'The Einstellung Effect (Mechanized Blindness)',
        description: 'Applying a familiar, automated solution routine to an altered problem where that routine is ineffective, blinding the operator to the true root cause.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Cognitive Deskilling via Disuse',
        description: 'Unexercised manual operational skills and mental representations atrophied over months of reliable automation, making emergency manual intervention impossible.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Vigilance Decrement & Passive Complacency',
        description: 'Human operator vigilance deteriorated after hours of passive monitoring of an automated screen, missing early critical warning cues.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-air-france-447-out-of-loop',
        realWorldContext: 'Commercial Aviation High-Altitude Flight Deck',
        scenario: 'An airliner is cruising smoothly across the Atlantic on autopilot. High-altitude ice crystals temporarily clog the pitot tubes, causing unreliable airspeed readings. The autopilot abruptly disengages with a loud horn and hands manual control to the pilots. In the dark and turbulence, the confused pilots fail to perceive that the aircraft is in a high-altitude aerodynamic stall and pull back on the control stick continuously for 3 minutes until crash.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'This is the tragic canonical textbook example of Bainbridge’s Out-of-the-Loop Collapse (BEA Flight 447 report; Bainbridge, 1983). The pilots were abruptly thrown from passive monitoring into manual flight without situational awareness of the airplane’s true aerodynamic state under high stress.',
        evidenceBasedFix: 'Redesign autopilot disengagement protocols: provide intuitive, synthetic vision flight envelopes and train pilots in high-altitude manual stall recovery drills quarterly in simulators.',
      },
      {
        id: 'scen-senior-sre-reboot-loop-einstellung',
        realWorldContext: 'Global Cloud Storage Metadata Outage',
        scenario: 'A distributed file system begins returning 503 errors. For the past 4 years, every storage incident had been resolved by running the automated cluster rolling-restart script. An on-call engineer immediately triggers the rolling restart script without investigating. In this incident, however, the root cause was a corrupted on-disk ledger; restarting nodes forced them to replay the corrupted ledger simultaneously, permanently corrupting the metadata store across all zones.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'The engineer fell into the Einstellung Effect (Luchins, 1942). The rolling restart script was so thoroughly ingrained as a mechanized habit that the engineer executed it automatically, blind to the fact that this specific failure had different underlying invariants.',
        evidenceBasedFix: 'Incorporate active cognitive friction: require an explicit pre-flight diagnostic checklist that verifies ledger checksums and validates failure hypotheses before executing automated remediation scripts.',
      },
      {
        id: 'scen-terraform-manual-migration-amnesia',
        realWorldContext: 'Production Cloud Infrastructure Team',
        scenario: 'For two years, all AWS infrastructure has been provisioned and managed entirely via automated CI/CD Terraform pipelines. One afternoon, a critical Terraform state-lock deadlock occurs during an urgent security patch, and the automated pipeline crashes. Management asks the engineers to manually SSH into the bastion host and reconfigure the VPC security groups and routing tables by hand. The senior engineers realize they no longer remember the manual AWS CLI commands or network routing flags, taking 14 hours to do what once took 20 minutes.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'The team experienced Cognitive Deskilling via Disuse (Bainbridge, 1983). By relying exclusively on automated declarative scripts, their procedural memory traces for low-level manual networking and CLI operations decayed through neural synaptic weakening.',
        evidenceBasedFix: 'Institute Deliberate De-Automation Days: schedule bi-monthly "CLI from Scratch" drills where engineers provision complex staging infrastructure manually without Terraform or automation.',
      },
      {
        id: 'scen-security-soc-analyst-alarm-fatigue',
        realWorldContext: 'Enterprise Security Operations Center (SOC)',
        scenario: 'A security analyst sits in front of a bank of 6 monitors displaying automated SIEM intrusion detection alerts for 8 consecutive hours. The automated system generates 5,000 low-priority informational alerts every day with 99.8% false-positive rates. At hour 6, an adversary executes a real lateral movement attack using stolen credentials. The analyst glances at the alert, marks it as "routine false positive" in 2 seconds, and ignores it.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'The analyst suffered from Vigilance Decrement and Alarm Fatigue (Mackworth, 1948). Passive monitoring of noisy automated streams causes sensory adaptation and severe cognitive gating, blinding human perception to genuine threat signals.',
        evidenceBasedFix: 'Apply automated noise-filtering at the edge: ruthlessly suppress low-value alarms so analysts only receive high-fidelity, actionable alerts, and cap active monitoring shifts at 90 minutes followed by mandatory rest.',
      },
    ],
  },
  quiz: {
    title: 'The Paradox of Automation Formative Assessment',
    instruction: 'Demonstrate your understanding of Bainbridge’s ironies of automation, the Einstellung effect, and deliberate de-automation protocols. Score 75% or higher to verify.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-bainbridge-ironies-of-automation-core-paradox',
        question: 'According to Lisanne Bainbridge (1983), what is the central irony of automating industrial and software operations?',
        options: [
          {
            id: 'q1-a',
            text: 'Automation makes human operators work 100 hours a week because computer screens emit stimulating light.',
          },
          {
            id: 'q1-b',
            text: 'Designers automate all the easy, routine tasks, leaving only the most complex, unpredictable edge cases for humans—while simultaneously depriving the humans of the day-to-day manual practice required to handle those crises.',
          },
          {
            id: 'q1-c',
            text: 'Automated machines always physically revolt and overthrow human engineers after 5 years of operation.',
          },
          {
            id: 'q1-d',
            text: 'Automation creates zero errors under any conditions, making human management completely unnecessary.',
          },
        ],
        correctOptionId: 'q1-b',
        explanation: 'Bainbridge’s core irony is that automation eliminates routine manual practice (causing cognitive deskilling), meaning that when unprecedented anomalies occur that the automation cannot handle, the operator is least equipped with the active mental models needed to resolve them.',
        pedagogicalRationale: 'Clarifies the classic human-machine systems engineering paradox.',
        evidenceNote: 'Bainbridge, L. (1983). Ironies of automation. Automatica, 19(6), 775-779.',
      },
      {
        id: 'q2-einstellung-effect-mechanism',
        question: 'What is the Einstellung Effect (Luchins, 1942), and why are experienced practitioners often uniquely vulnerable to it?',
        options: [
          {
            id: 'q2-a',
            text: 'It is the physiological inability to drink water while thinking about mathematics.',
          },
          {
            id: 'q2-b',
            text: 'It is a mechanized mental set where a familiar, automated problem-solving procedure is rigidly applied to a new problem, blinding the thinker to simpler or more appropriate solutions.',
          },
          {
            id: 'q2-c',
            text: 'It is the sudden improvement of cognitive performance caused by drinking espresso.',
          },
          {
            id: 'q2-d',
            text: 'It is a neurological syndrome where engineers forget their own names during computer crashes.',
          },
        ],
        correctOptionId: 'q2-b',
        explanation: 'The Einstellung effect demonstrates how prior success with a specific automated routine creates a rigid cognitive set. Experienced performers fire compiled production rules automatically upon seeing familiar cues, actively suppressing exploratory thinking that would reveal simpler or correct alternatives.',
        pedagogicalRationale: 'Explains the cognitive mechanism behind expertise blind spots and rigid habits.',
        evidenceNote: 'Luchins, A. S. (1942). Mechanization in problem solving: The effect of Einstellung. Psychological Monographs, 54(6), i-95.',
      },
      {
        id: 'q3-endsley-situational-awareness-levels',
        question: 'In Mica Endsley’s (1995) Situational Awareness model, which levels are most severely degraded when an operator is left "out of the loop" by automated systems?',
        options: [
          {
            id: 'q3-a',
            text: 'Level 2 (Comprehension of the current situation) and Level 3 (Projection of future status).',
          },
          {
            id: 'q3-b',
            text: 'Only optical color vision in the left eye.',
          },
          {
            id: 'q3-c',
            text: 'The ability to speak English while sitting down.',
          },
          {
            id: 'q3-d',
            text: 'None; automation improves all levels of situational awareness uniformly.',
          },
        ],
        correctOptionId: 'q3-a',
        explanation: 'Endsley proved that while out-of-the-loop operators might still perceive raw sensory numbers on a screen (Level 1: Perception), their comprehension of what those numbers mean in the system topology (Level 2) and their ability to mentally simulate future states (Level 3) drop precipitously.',
        pedagogicalRationale: 'Breaks down situational awareness into actionable cognitive levels.',
        evidenceNote: 'Endsley, M. R. (1995). Toward a theory of situation awareness in dynamic systems. Human Factors, 37(1), 32-64.',
      },
      {
        id: 'q4-deliberate-de-automation-remedy',
        question: 'How do high-reliability organizations (HROs) like naval aviation and elite tech firms actively counter the paradox of automation?',
        options: [
          {
            id: 'q4-a',
            text: 'By banning all computers and returning to paper punch-cards.',
          },
          {
            id: 'q4-b',
            text: 'By deliberately injecting controlled friction, unannounced chaos drills, and mandatory manual reversion exercises to keep procedural mental models active and calibrated.',
          },
          {
            id: 'q4-c',
            text: 'By firing all senior staff every 6 months to ensure fresh perspectives.',
          },
          {
            id: 'q4-d',
            text: 'By increasing automation to 100% so that human intervention is made illegal.',
          },
        ],
        correctOptionId: 'q4-b',
        explanation: 'High-reliability engineering combats automation decay through Deliberate De-Automation: intentionally disrupting automated tranquility via chaos engineering, manual simulator drills, and active supervision gates to prevent skill deskilling and ensure situational readiness.',
        pedagogicalRationale: 'Provides concrete organizational and cognitive engineering remedies against automation paradoxes.',
        evidenceNote: 'Reason, J. (1990). Human error. Cambridge University Press.',
      },
    ],
  },
  practicalTask: {
    title: 'The Deliberate De-Automation & Chaos Audit Protocol',
    summary: 'A 3-step practical protocol to audit automated workflows, measure out-of-the-loop vulnerability, and engineer deliberate friction to maintain operational readiness.',
    steps: [
      {
        id: 'step-inventory-hyper-automated-blindspots',
        number: 1,
        title: 'Inventory Hyper-Automated Workflows & Identify Deskilling Vectors',
        prompt: 'Identify 3 engineering or operational workflows that are currently 100% automated in your daily work (e.g. CI/CD deployments, database backups, linting/formatting, test runner execution). Ask yourself: "If this automation completely vanished right now, could I perform it manually from memory?" List your highest-risk deskilling vector:',
        placeholder: 'e.g., Automated Workflows: (1) Docker multi-stage builds, (2) TLS certificate renewal via Certbot, (3) Database replication failover. Highest risk: Database replication failover. It has been automated for 2 years; if it crashes, I do not remember the manual pg_promote or repmgr CLI syntax...',
        example: 'Automated CI/CD Deployment: Automated scripts run migrations and traffic shifting. Risk: If the deployment script hangs mid-canary, I do not know how to inspect the proxy routing table or manually drain traffic without looking up docs.',
        cognitiveRationale: 'Identifying unpracticed automated routines exposes dormant operational vulnerabilities before an actual zero-day production outage occurs (Bainbridge, 1983).',
      },
      {
        id: 'step-design-deliberate-de-automation-drill',
        number: 2,
        title: 'Design a Controlled Manual Reversion Drill (Chaos Day)',
        prompt: 'Formulate an actionable 30-minute manual reversion drill in a staging or sandbox environment. How will you execute the task without relying on the automated scripts?',
        placeholder: 'e.g., "Manual Reversion Drill: Spin up a 3-node Postgres cluster in local Docker. Kill the primary node. Manually promote replica 1 using CLI commands without using repmgr scripts. Time myself to achieve failover in under 5 minutes."...',
        example: 'Manual Deployment Drill: Turned off GitHub Actions for staging. Built the container image by hand, tagged it with git commit hash, pushed to registry, and applied rolling restart via raw kubectl patch commands, verifying each pod readiness probe.',
        cognitiveRationale: 'Manual execution reactivates dormant long-term procedural schemas and rebuilds the causal mental representations needed during real crises (Endsley, 1995).',
      },
      {
        id: 'step-install-einstellung-circuit-breaker',
        number: 3,
        title: 'Install an Einstellung Circuit Breaker (Hypothesis Verification Pause)',
        prompt: 'Design an explicit cognitive forcing function that halts knee-jerk automated habit execution during novel incidents. What 60-second reflection pause or hypothesis checklist will you enforce before running remediation commands?',
        placeholder: 'e.g., "The 60-Second Sanity Gate: Before typing any restart or failover command during an incident, I must write in the incident channel: (1) What is my primary hypothesis? (2) What evidence falsifies it? (3) What is the worst-case consequence if this restart fails? Only after writing this can I run the script."...',
        example: 'Incident Circuit Breaker: Enforced team rule: Never restart an unhealthy service without capturing a heap dump and thread dump first. This 30-second delay breaks the automated "just reboot it" Einstellung reflex.',
        cognitiveRationale: 'An explicit pause interrupts automated striatal motor habits and forces prefrontal executive circuits to evaluate causal invariants before acting (Luchins, 1942; Reason, 1990).',
      },
    ],
  },
};
