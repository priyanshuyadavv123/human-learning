import type { Lesson } from '../types/learning.ts';

export const LESSON_SLOW_WAVE_SLEEP_REPLAY: Lesson = {
  id: 'slow-wave-sleep-replay',
  chapterId: 'ch-6-sleep-replay',
  number: '6.1',
  title: 'Slow-Wave Sleep & Neural Replay',
  subtitle: 'Compressed time-scale firing sequences in the sleeping brain',
  readingTimeMinutes: 15,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'Why does spending an extra hour studying at 2:00 AM consistently degrade test performance compared to stopping at midnight and sleeping? What active computational process does the sleeping brain execute that conscious wakefulness cannot perform?',
    teaser: 'Sleep is not the brain shutting down to clear metabolic debris. It is a state of hyper-organized, high-speed neural computation where memories are played back at 10x to 20x real-time speed.',
    hookNote: 'In 1994, Matthew Wilson and Bruce McNaughton made a watershed neurophysiological discovery: place cells in the rat hippocampus that fired in a specific temporal sequence while navigating a maze fired in the exact same sequence during subsequent slow-wave sleep (SWS), but compressed 10-fold to 20-fold in time. This phenomenon—neural replay—occurs during high-frequency electrical bursts called Sharp-Wave Ripples (SWRs, 150–250 Hz). Decades of subsequent research by György Buzsáki, Jan Born, and Susumu Tonegawa revealed that SWRs are coordinated in a three-way phase-locked dialogue with neocortical slow oscillations (<1 Hz) and thalamocortical sleep spindles (11–16 Hz). Disputing the myth of sleep as passive downtime, cognitive neuroscience proves that offline replay is the physical mechanism by which fragile episodic traces become permanent neocortical knowledge.',
  },
  prediction: {
    prompt: 'Before analyzing the neurophysiology of sleep-dependent memory, test your intuition on how the sleeping brain processes daytime learning: In electrophysiological recordings of rodent and human hippocampi during deep Non-REM (Slow-Wave) Sleep, what happens to the ensembles of neurons that encoded new information during wakefulness?',
    context: 'Two groups of subjects learn a complex spatial navigation or declarative associative task during the day, followed either by 8 hours of normal polysomnographic sleep or total sleep deprivation:',
    options: [
      {
        id: 'opt-passive-inhibition',
        strategy: 'Hypothesis A: Passive Synaptic Rest & Metabolic Clearance',
        description: 'Hippocampal neurons remain electrically quiescent; learning benefits of sleep stem entirely from metabolic clearance (glymphatic wash) and the passive absence of new sensory interference.',
      },
      {
        id: 'opt-slow-replay',
        strategy: 'Hypothesis B: Real-Time Dreaming Playback',
        description: 'Hippocampal networks replay firing sequences at identical real-time speeds (1x tempo) exclusively during vivid Rapid Eye Movement (REM) dreams when conscious imagery is active.',
      },
      {
        id: 'opt-compressed-swr-replay',
        strategy: 'Hypothesis C: Temporally Compressed Replay during Sharp-Wave Ripples (SWS)',
        description: 'During deep Slow-Wave Sleep, the hippocampus generates transient Sharp-Wave Ripples (SWRs, 150–250 Hz) that replay wakefulness firing sequences forward and backward at 10x–20x compressed speed, phase-locked with thalamocortical sleep spindles and slow oscillations to induce neocortical plasticity.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-compressed-swr-replay',
      headline: 'The Sleeping Brain Executes High-Speed Compressed Replay Inside Sharp-Wave Ripples Coordinated with Spindles and Neocortical Slow Waves (Wilson & McNaughton, 1994; Buzsáki, 2015; Diekelmann & Born, 2010).',
      explanation: 'Sleep is computationally active. During Non-REM Slow-Wave Sleep (NREM stages N2 and N3), sensory input is gated off by the thalamus. In this low-interference window, the CA3 recurrent collateral network in the hippocampus spontaneously discharges in massive synchronized bursts known as Sharp-Wave Ripples (SWRs, 150–250 Hz). Neuronal sequences that fired over seconds during wakefulness fire within 50–100 milliseconds during SWRs. Because Hebbian Spike-Timing-Dependent Plasticity (STDP) requires pre- and post-synaptic firing within a narrow ±20–40 ms window, this 10x–20x compression is precisely what allows slow daytime experiences to meet the biophysical threshold for Long-Term Potentiation (LTP) in recipient neocortical targets.',
      optionFeedback: {
        'opt-passive-inhibition': {
          title: 'Your Choice: Hypothesis A (Passive Rest & Clearance)',
          verdict: 'The Passive Downtime Fallacy',
          analysis: 'While glymphatic cerebrospinal fluid wash (Nedergaard et al.) does clear metabolic waste during sleep, electrophysiology shows that the hippocampus and neocortex are intensely active. Selectively suppressing sharp-wave ripples with optogenetics destroys memory consolidation even when sleep duration and glymphatic flow are intact (Girardeau et al., 2009).',
        },
        'opt-slow-replay': {
          title: 'Your Choice: Hypothesis B (Real-Time REM Playback)',
          verdict: 'The REM-Centric Misconception',
          analysis: 'Although REM sleep contributes to emotional recalibration and schema integration, systems consolidation of declarative memories occurs primarily during Slow-Wave Sleep (N3) and N2 stage sleep. Furthermore, real-time (1x) firing is too slow to trigger Hebbian spike-timing-dependent plasticity.',
        },
        'opt-compressed-swr-replay': {
          title: 'Your Choice: Hypothesis C (Temporally Compressed Replay & Triple Coupling)',
          verdict: 'Accurate Neurobiological Model',
          analysis: 'Correct! Compressed SWRs condense behavioral sequences into the optimal millisecond window for STDP, while triple phase-locking with cortical slow oscillations (<1 Hz) and sleep spindles (11–16 Hz) guarantees reliable signal transfer to the neocortex.',
        },
      },
      comparisons: [
        {
          label: 'Total Sleep Deprivation (All-Nighter Cramming)',
          immediateRetention: '60% (Transient short-term familiarity)',
          oneWeekRetention: '5% (Catastrophic trace decay)',
          illusionRating: 'Extremely high (cramming feels fluent during the night)',
          isEmpiricalWinner: false,
        },
        {
          label: 'Fragmented Late-Night Sleep (4–5 Hours)',
          immediateRetention: '70% (Partial early SWS capture)',
          oneWeekRetention: '28% (Truncated spindle density & replay count)',
          illusionRating: 'Moderate (false sense of having slept enough)',
          isEmpiricalWinner: false,
        },
        {
          label: 'Uninterrupted Nocturnal Sleep (7.5–8 Hours, Full SWS & Spindles)',
          immediateRetention: '88% (Complete triple phase coupling)',
          oneWeekRetention: '75% (Durable neocortical schema integration)',
          illusionRating: 'Calibrated (sleep transforms fragile traces into permanent mastery)',
          isEmpiricalWinner: true,
        },
      ],
      evidenceDistinction: 'Empirical Evidence Distinction: Coordinated sleep replay is supported by multi-unit intracranial electrophysiology in rodents (Wilson & McNaughton, 1994; Buzsáki, 2015) and intracranial electrocorticography in pre-surgical humans (Axmacher et al., 2008; Vaz et al., 2019; Helfrich et al., 2018).',
    },
  },
  coreExplanations: [
    {
      id: 'sharp-wave-ripples-and-place-cells',
      title: '1. Wilson & McNaughton (1994) & Sharp-Wave Ripples',
      tagline: 'Place cell replay, 10x–20x temporal compression, and Spike-Timing-Dependent Plasticity',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Electrophysiological Consensus',
      summary: 'In 1994, Matthew Wilson and Bruce McNaughton discovered that place cells in the rodent hippocampus fire during slow-wave sleep in the exact same sequence as during waking navigation, compressed 10-fold to 20-fold. This temporal compression brings daytime experiences into the narrow 10–40 ms window required for Hebbian Spike-Timing-Dependent Plasticity (STDP) and Long-Term Potentiation (LTP).',
      mechanisms: [
        {
          label: 'The Discovery of Sequential Replay (Wilson & McNaughton, 1994)',
          description: 'Place cells that fired in sequential order (A → B → C → D) over several seconds as an animal navigated a maze fired in the exact same sequential order during subsequent slow-wave sleep. Replay occurs both forward and backward (reverse replay), reinforcing trajectory and reward association paths.',
        },
        {
          label: '10x to 20x Temporal Compression for Hebbian STDP',
          description: 'During waking behavior, neurons fire hundreds of milliseconds apart—too slow for the sub-40 ms window required for Spike-Timing-Dependent Plasticity. By compressing the entire behavioral sequence into a 50–100 ms burst inside a Sharp-Wave Ripple (150–250 Hz), replay forces pre- and post-synaptic firing into the exact biophysical window that expels Mg2+ from NMDA receptors to drive LTP.',
        },
        {
          label: 'Causal Proof via Ripple Interruption (Girardeau et al., 2009)',
          description: 'Girardeau et al. demonstrated causality using closed-loop electrical stimulation: whenever a Sharp-Wave Ripple was detected in sleeping rodents, an immediate micro-pulse interrupted the ripple before replay completed. Animals showed catastrophic memory deficits on subsequent recall tests, whereas control animals with delayed pulses consolidated memories normally.',
        },
      ],
      keyInsight: 'Sleep replay is not a passive echo. It is an active biological compression engine that accelerates seconds of daytime experience into milliseconds, meeting the strict biophysical threshold for synaptic plasticity.',
      simplifiedModelCaveat: 'While place cells in rodents provide the clearest spatial demonstrations, human intracranial recording proves that abstract semantic and episodic concepts replay across hippocampal and neocortical ensembles using the exact same SWR ripple mechanism.',
    },
    {
      id: 'triple-phase-coupling-orchestration',
      title: '2. The Triple Phase-Coupling Mechanism',
      tagline: 'Hierarchical synchronization across Cortical Slow Waves, Thalamic Spindles, and Hippocampal Ripples',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'System-Level Neurophysiology Consensus',
      summary: 'Consolidation during Slow-Wave Sleep is orchestrated by hierarchical phase-amplitude coupling across three brain structures: Neocortical Slow Oscillations (<1 Hz Up-states) drive Thalamocortical Sleep Spindles (11–16 Hz), which nest Hippocampal Sharp-Wave Ripples (150–250 Hz) in their troughs, delivering replay packets into calcium-permeated cortical dendrites (Diekelmann & Born, 2010).',
      mechanisms: [
        {
          label: 'The Master Conductor: Neocortical Slow Oscillations (<1 Hz)',
          description: 'The prefrontal cortex generates slow oscillations (<1 Hz) that alternate between depolarizing Up-states (high excitability) and hyperpolarizing Down-states (silence). The Up-state acts as the master timing clock that coordinates all subcortical consolidation activity.',
        },
        {
          label: 'The Calcium Gate: Thalamocortical Sleep Spindles (11–16 Hz)',
          description: 'Cortical Up-states trigger burst firing in the thalamic reticular nucleus, producing 11–16 Hz sleep spindles. Spindles propagate back up to the neocortex, opening voltage-gated calcium channels in pyramidal dendrites and establishing a receptive molecular state for synaptic remodeling.',
        },
        {
          label: 'The Information Packet: Hippocampal Sharp-Wave Ripples (150–250 Hz)',
          description: 'Driven by the same cortical slow wave, the hippocampal CA3 network discharges a 150–250 Hz Sharp-Wave Ripple carrying replayed memory ensembles. This ripple arrives at the neocortex precisely nested inside the wave troughs of the sleep spindle during the cortical Up-state.',
        },
      ],
      keyInsight: 'Memory consolidation requires three-way timing precision. If a hippocampal ripple arrives during a cortical Down-state or without a spindle calcium influx, the replay packet is lost without modifying cortical schemas.',
      simplifiedModelCaveat: 'Age-related memory decline is often driven by the progressive desynchronization of slow waves and sleep spindles (drifting out of phase by merely 100–200 ms), rather than a loss of memories themselves (Helfrich et al., 2018).',
    },
    {
      id: 'synaptic-homeostasis-and-cognitive-architectures',
      title: '3. Synaptic Homeostasis Hypothesis vs Active Systems Consolidation',
      tagline: 'Global downscaling, energetic restoration, and selective memory preservation',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Integrative Neurobiological Framework',
      summary: 'Tononi & Cirelli’s Synaptic Homeostasis Hypothesis (SHY) demonstrates that wakeful learning produces net synaptic potentiation, requiring slow-wave sleep to globally downscale synaptic weights by ~15–20% to restore metabolic and computational baseline. Active Systems Consolidation complements SHY by selectively protecting tagged, replayed memories from downscaling.',
      mechanisms: [
        {
          label: 'The Wakefulness Crisis: Saturation and Energy Exhaustion',
          description: 'Sensory experience and learning trigger Long-Term Potentiation throughout the day, swelling dendritic spines and consuming unsustainable levels of cellular ATP (~80% of brain energy). Without downscaling, synapses saturate, destroying dynamic range and preventing new learning tomorrow.',
        },
        {
          label: 'Global Downscaling (SHY; Tononi & Cirelli, 2003, 2014)',
          description: 'During Slow-Wave Sleep, generalized low-frequency oscillations drive net synaptic depression (downscaling) across neocortical networks. Weak, incidental synaptic connections fall below threshold and are pruned away, while strong connections remain, elevating the overall signal-to-noise ratio.',
        },
        {
          label: 'Integration: Replay Protection in Active Systems Consolidation',
          description: 'Synaptic downscaling does not erase vital knowledge because synapses tagged during waking retrieval (synaptic tagging and capture) are reactivated during Sharp-Wave Ripples. Replay reinforces tagged connections, protecting them from downscaling and embedding them into permanent neocortical schemas.',
        },
      ],
      keyInsight: 'Sleep balances two vital imperatives: global downscaling eliminates weak synaptic noise and restores metabolic headroom, while sharp-wave ripple replay rescues and consolidates core knowledge.',
      simplifiedModelCaveat: 'Sleep deprivation impairs performance not only by blocking memory consolidation, but because saturated synapses cannot undergo new LTP the following day, making fresh learning impossible.',
    },
  ],
  diagram: {
    title: 'The Multi-Scale Neurophysiology of Sleep Replay & Systems Consolidation',
    subtitle: 'Hierarchical coupling from neocortical slow wave to hippocampal sharp-wave ripple',
    stages: [
      {
        id: 'stage-wake-encoding',
        name: 'Stage 1: Wakeful Behavioral Encoding & Synaptic Tagging',
        subtitle: 'Seconds to minutes (behavioral timescale)',
        capacity: 'High-plasticity hippocampal buffer',
        duration: 'Seconds to minutes',
        role: 'Sensory cortices process raw input; the hippocampus indexes the event across CA3-CA1 place cells. Active synapses accumulate CaMKII and molecular plasticity tags, but remain fragile and vulnerable to daytime interference.',
        failureMode: 'Divided attention prevents robust synaptic tagging; weak traces are lost before sleep.',
        evidenceType: 'Empirical consensus (Frey & Morris, 1997; Wilson & McNaughton, 1994)',
        practicalFix: 'Focus intensely during initial learning to ensure adequate synaptic tagging for offline consolidation.',
      },
      {
        id: 'stage-sws-slow-oscillation',
        name: 'Stage 2: Neocortical Slow Oscillation (<1 Hz) Up-State Onset',
        subtitle: 'Global clock of neuronal excitability (~0.8 Hz)',
        capacity: 'Global prefrontal synchronization',
        duration: '~1000 ms per cycle',
        role: 'At the onset of deep Slow-Wave Sleep (N3), the frontal cortex generates a synchronized depolarizing Up-state. This master clock synchronizes subcortical structures and opens a window of maximum network excitability.',
        failureMode: 'Caffeine blocks adenosine accumulation, reducing slow-wave amplitude and frequency.',
        evidenceType: 'Empirical consensus (Diekelmann & Born, 2010; Buzsáki, 2015)',
        practicalFix: 'Maintain strict sleep hygiene to maximize slow-wave sleep depth in the early night.',
      },
      {
        id: 'stage-thalamic-spindle',
        name: 'Stage 3: Thalamocortical Spindle Induction (11–16 Hz)',
        subtitle: 'Dendritic calcium gate packets',
        capacity: 'Thalamic gating rhythm',
        duration: '500–1500 ms spindle bursts',
        role: 'Cortical Up-states drive the thalamic reticular nucleus to generate 11–16 Hz spindles. Spindles project to neocortical dendrites, opening voltage-gated Ca2+ channels and preparing postsynaptic spines for LTP.',
        failureMode: 'Alcohol suppresses thalamic reticular bursts, decimating spindle density by >40%.',
        evidenceType: 'Empirical consensus (Helfrich et al., 2018; Sejnowski & Destexhe, 2000)',
        practicalFix: 'Avoid alcohol prior to bedtime to ensure intact spindle density and calcium influx.',
      },
      {
        id: 'stage-hippocampal-swr-replay',
        name: 'Stage 4: Hippocampal Sharp-Wave Ripple (150–250 Hz) Replay Packet',
        subtitle: '10x–20x compressed memory transfer',
        capacity: 'High-speed episodic packet',
        duration: '50–100 ms burst',
        role: 'CA3 recurrent collaterals spontaneously burst, discharging a 150–250 Hz SWR. Daytime firing sequences are replayed at 10x–20x compressed speed, arriving precisely inside spindle troughs during the cortical Up-state to induce lasting neocortical plasticity.',
        failureMode: 'Disrupting ripples with electrical micro-pulses abolishes memory consolidation (Girardeau et al., 2009).',
        evidenceType: 'Empirical consensus (Girardeau et al., 2009; Buzsáki, 2015)',
        practicalFix: 'Prioritize full nocturnal sleep duration to allow thousands of SWR replay events to occur.',
      },
    ],
    feedbackLoopDescription: 'Successful triple phase coupling transfers memories into neocortical schemas, which subsequently provide top-down executive scaffolds for faster future learning.',
  },
  exercise: {
    title: 'Clinical Case Analysis: Optimizing Offline Consolidation Windows',
    instruction: 'Analyze four real-world sleep and cognitive breakdown scenarios. Diagnose the exact neurophysiological bottleneck and prescribe the evidence-grounded architectural fix.',
    categories: [
      {
        id: 'attention-bottleneck',
        title: 'Adenosine Gating & Slow-Wave Suppression',
        description: 'Late caffeine consumption blocked adenosine receptors, diminishing slow-wave amplitude (<1 Hz) and preventing cortical Up-state synchronization.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'working-memory-overload',
        title: 'Thalamocortical Spindle Decoupling',
        description: 'Alcohol or pharmacological sedatives suppressed thalamic spindle bursts (11–16 Hz), preventing dendritic calcium influx and leaving replay packets unreceived.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Early Slow-Wave Sleep Truncation',
        description: 'Delaying bedtime past 2:00 AM cut into the high-SWS first half-night window, reducing sharp-wave ripple opportunities by over 50%.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Synaptic Saturation & Plasticity Blockade',
        description: 'Consecutive all-nighters prevented SHY synaptic downscaling, saturating synaptic weights and destroying the brain\'s capacity to induce new LTP.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-late-night-cramming-cutoff',
        realWorldContext: 'Medical Board Examination Preparation',
        scenario: 'David studies for his cardiology board exam until 2:30 AM every night and wakes at 7:30 AM. Despite logging 5 hours of sleep, he notices that complex hemodynamic formulas reviewed after midnight vanish from his memory within 48 hours.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'David induced Early Slow-Wave Sleep Truncation. Slow-Wave Sleep (N3) is homeostatically concentrated in the first third of the nocturnal sleep cycle (cycles 1 and 2). Shifting bedtime to 2:30 AM forces sleep onset against the circadian cortisol rise, severely compressing deep slow-wave duration and eliminating the primary window for high-density Sharp-Wave Ripples (Wilson & McNaughton, 1994; Diekelmann & Born, 2010).',
        evidenceBasedFix: 'Shift study cutoff to 10:30 PM with lights out at 11:00 PM, capturing the natural peak of slow-wave sleep in the early night.',
      },
      {
        id: 'scen-nightcap-bourbon-studying',
        realWorldContext: 'Executive Professional Learning',
        scenario: 'Elena drinks two glasses of bourbon at 10:30 PM to "wind down" and fall asleep faster after an intense 4-hour Python programming session. Although she falls asleep quickly and sleeps 8 full hours, she struggles to recall basic syntax the next day.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'Elena experienced Thalamocortical Spindle Decoupling. While alcohol accelerates sleep onset via GABA-A allosteric modulation, it dramatically suppresses thalamocortical sleep spindle generation (11–16 Hz) and desynchronizes spindle troughs from cortical slow oscillations. Without intact sleep spindles, cortical dendrites lack the necessary calcium transients to drive LTP during sharp-wave ripples.',
        evidenceBasedFix: 'Eliminate alcohol consumption on learning nights; utilize non-pharmacological wind-down routines like dim lighting and reading fiction.',
      },
      {
        id: 'scen-energy-drink-night-shift',
        realWorldContext: 'Software Engineering Incident Response',
        scenario: 'Sam drinks a 200mg caffeinated energy drink at 8:00 PM to power through a database migration. He goes to bed at midnight and feels like he slept deeply, but wakes up groggy and fails to retain any details of the database schema updates.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'Sam suffered from Adenosine Gating & Slow-Wave Suppression. Caffeine competitively binds adenosine A1 and A2A receptors with a 5–7 hour half-life, blunting the homeostatic sleep pressure that triggers synchronized cortical slow waves (<1 Hz). Even if unconscious, delta wave power is reduced by >30%, preventing the master conductor from synchronizing subcortical replay.',
        evidenceBasedFix: 'Set a hard caffeine curfew 10 hours before sleep (e.g. 1:00 PM for an 11:00 PM bedtime) to ensure clearance of adenosine antagonists.',
      },
      {
        id: 'scen-consecutive-all-nighters',
        realWorldContext: 'Hackathon Weekend Competition',
        scenario: 'A startup team stays awake for 40 consecutive hours coding during a hackathon. On day two, developers report feeling "wired but incapable of thinking," struggling to comprehend basic variable assignments and finding it impossible to grasp new API documentation.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'The developers reached Synaptic Saturation & Plasticity Blockade (Tononi & Cirelli, SHY). Without slow-wave sleep downscaling, continuous sensory processing drives net synaptic potentiation to its biophysical ceiling. Dendritic spines are flooded with AMPA receptors, ATP is depleted, and the signal-to-noise ratio collapses, making fresh LTP impossible.',
        evidenceBasedFix: 'Enforce mandatory 90-minute sleep cycles during hackathons to permit at least one round of synaptic downscaling and restore plasticity.',
      },
    ],
  },
  quiz: {
    title: 'Mastery Check: Neurophysiology of Neural Replay & Sleep Consolidation',
    instruction: 'Validate your understanding of place cell replay, temporal compression, triple phase coupling, and the Synaptic Homeostasis Hypothesis.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-replay-compression-stdp',
        question: 'Why is the 10x to 20x temporal compression of place cell firing during hippocampal Sharp-Wave Ripples (SWRs) biophysically critical for long-term memory formation?',
        options: [
          {
            id: 'q1-a',
            text: 'Because Spike-Timing-Dependent Plasticity (STDP) requires pre- and post-synaptic neurons to fire within a narrow 10–40 ms window; behavioral wakeful firing is too slow to trigger LTP, but compressed replay satisfies this constraint.',
          },
          {
            id: 'q1-b',
            text: 'Because the brain has limited memory bandwidth and must compress data packets using lossy compression algorithms similar to JPEG encoding.',
          },
          {
            id: 'q1-c',
            text: 'Because temporal compression allows the brain to wake up 10 times faster if a predator approaches during sleep.',
          },
          {
            id: 'q1-d',
            text: 'Because SWR compression only occurs in rodents; human brains replay memories at exactly 1x real-time speed.',
          },
        ],
        correctOptionId: 'q1-a',
        explanation: 'During wakefulness, neurons fire seconds apart as an animal or human explores or thinks. Hebbian STDP requires sub-40 ms temporal proximity. Compressing seconds of experience into a 50–100 ms SWR burst aligns action potentials with the exact biophysical window required to drive LTP (Wilson & McNaughton, 1994).',
        pedagogicalRationale: 'Clarifies the biophysical necessity of temporal compression for Spike-Timing-Dependent Plasticity.',
        evidenceNote: 'Wilson, M. A., & McNaughton, B. L. (1994). Reactivation of hippocampal ensemble memories during sleep. Science, 265(5172), 676-679.',
      },
      {
        id: 'q2-triple-phase-coupling-hierarchy',
        question: 'In the Active System Consolidation Model (Diekelmann & Born, 2010), what is the exact hierarchical relationship among the three core oscillations during Slow-Wave Sleep?',
        options: [
          {
            id: 'q2-a',
            text: 'Cortical slow oscillations (<1 Hz Up-states) drive thalamocortical sleep spindles (11–16 Hz), which in turn nest hippocampal Sharp-Wave Ripples (150–250 Hz) in their troughs, delivering replay packets to calcium-permeated cortical dendrites.',
          },
          {
            id: 'q2-b',
            text: 'Hippocampal ripples override all cortical activity, forcing the cortex into absolute electrical silence so the hippocampus can write raw data directly.',
          },
          {
            id: 'q2-c',
            text: 'Sleep spindles occur exclusively during REM sleep, whereas slow oscillations occur exclusively during wakefulness.',
          },
          {
            id: 'q2-d',
            text: 'The three oscillations fire completely independently without any phase relationship, acting as three isolated noise filters.',
          },
        ],
        correctOptionId: 'q2-a',
        explanation: 'This nested hierarchy (<1 Hz slow wave → 11–16 Hz spindle → 150–250 Hz SWR) ensures that hippocampal replay arrives when neocortical pyramidal neurons are depolarized and dendritic spines are flooded with calcium (Diekelmann & Born, 2010).',
        pedagogicalRationale: 'Tests understanding of multi-scale oscillatory coordination in systems consolidation.',
        evidenceNote: 'Diekelmann, S., & Born, J. (2010). The memory function of sleep. Nature Reviews Neuroscience, 11(2), 114-126.',
      },
      {
        id: 'q3-girardeau-causality-experiment',
        question: 'What did the seminal experiment by Girardeau et al. (2009) prove regarding the functional necessity of hippocampal Sharp-Wave Ripples?',
        options: [
          {
            id: 'q3-a',
            text: 'Selectively interrupting SWRs with millisecond-latency electrical stimulation during post-training sleep abolished spatial memory consolidation without altering overall sleep duration.',
          },
          {
            id: 'q3-b',
            text: 'Interrupting SWRs caused rats to permanently lose the ability to enter slow-wave sleep.',
          },
          {
            id: 'q3-c',
            text: 'Ripples were proven to be metabolic waste products of dead mitochondria with no cognitive significance.',
          },
          {
            id: 'q3-d',
            text: 'Ripples were found to prevent dreams from becoming too vivid, acting as emotional dampeners.',
          },
        ],
        correctOptionId: 'q3-a',
        explanation: 'By delivering closed-loop stimulation that truncated ripples the instant they began, Girardeau et al. proved a direct causal link between SWRs and behavioral memory consolidation, distinguishing correlation from causation.',
        pedagogicalRationale: 'Reinforces experimental causality in cognitive neuroscience literature.',
        evidenceNote: 'Girardeau, G., Benchenane, K., Wiener, S. I., Buzsáki, G., & Zugaro, M. B. (2009). Selective suppression of hippocampal ripples impairs spatial memory. Nature Neuroscience, 12(10), 1222-1223.',
      },
      {
        id: 'q4-shy-synaptic-homeostasis',
        question: 'How does Tononi & Cirelli\'s Synaptic Homeostasis Hypothesis (SHY) explain the necessity of slow-wave sleep for learning on the following day?',
        options: [
          {
            id: 'q4-a',
            text: 'Wakeful learning drives net synaptic potentiation across the brain; slow-wave sleep produces generalized synaptic downscaling (renormalization), pruning weak noise and restoring metabolic baseline so new LTP can occur tomorrow.',
          },
          {
            id: 'q4-b',
            text: 'Sleep permanently freezes all synapses in concrete, making it impossible to learn anything new after age 25.',
          },
          {
            id: 'q4-c',
            text: 'Slow-wave sleep doubles the size of every single synapse in the brain regardless of whether it was used during the day.',
          },
          {
            id: 'q4-d',
            text: 'SHY claims that learning only happens when the brain is completely dehydrated.',
          },
        ],
        correctOptionId: 'q4-a',
        explanation: 'Continuous wakefulness saturates synaptic weights and exhausts brain energy. SWS downscales synapses globally by ~15–20%, eliminating weak noise connections while preserving the relative strength of reactivated memories (Tononi & Cirelli, 2014).',
        pedagogicalRationale: 'Differentiates energetic homeostasis from selective memory protection.',
        evidenceNote: 'Tononi, G., & Cirelli, C. (2014). Sleep and the price of plasticity: from synaptic and cellular homeostasis to memory consolidation and integration. Neuron, 81(1), 12-34.',
      },
    ],
  },
  practicalTask: {
    title: 'The Evidence-Based Sleep Consolidation & Replay Protocol',
    summary: 'A 3-step practical protocol to maximize slow-wave sleep density, prevent thalamocortical spindle decoupling, and trigger daytime wakeful rest replay.',
    steps: [
      {
        id: 'step-protect-sws-window',
        number: 1,
        title: 'Protect the High-SWS First Half-Night Window',
        prompt: 'Identify your target lights-out time to guarantee capturing the first two 90-minute sleep cycles where Slow-Wave Sleep (N3) and Sharp-Wave Ripples are concentrated:',
        placeholder: 'e.g., Target Lights-Out: 11:00 PM. Hard study cutoff: 10:15 PM. Buffer for pre-sleep decompression: 45 minutes without screens...',
        example: 'Target Lights-Out: 11:15 PM. Wake time: 7:15 AM (8.0 hours total). Captures 120+ minutes of high-amplitude delta slow waves and dense SWRs before 2:30 AM.',
        cognitiveRationale: 'NREM Stage 3 Slow-Wave Sleep is homeostatically driven by accumulated adenosine and occurs almost exclusively in the initial half of the night. Pushing sleep onset past 1:00 AM truncates SWS depth, reducing overall ripple replay events by over 50%.',
      },
      {
        id: 'step-eliminate-spindle-inhibitors',
        number: 2,
        title: 'Eliminate Spindle & Slow-Wave Pharmacological Inhibitors',
        prompt: 'Specify concrete cutoff boundaries for caffeine (adenosine receptor blocker) and alcohol (GABA-A modulator) to preserve triple phase coupling:',
        placeholder: 'e.g., Caffeine cutoff: 1:00 PM (10 hours before sleep). Alcohol: Zero within 4 hours of bedtime to prevent spindle suppression and slow-wave desynchronization...',
        example: 'Zero caffeine after 12:30 PM (half-life 5–7 hours). Zero alcohol on evenings following high-density cognitive acquisition.',
        cognitiveRationale: 'Alcohol fragments slow waves and reduces thalamocortical spindle density by >40%, decoupling spindles from slow-wave Up-states and leaving hippocampal ripples without a receptive cortical calcium gate.',
      },
      {
        id: 'step-daytime-wakeful-rest-replay',
        number: 3,
        title: 'Leverage Wakeful Rest for Immediate Daytime SWR Induction',
        prompt: 'Design a 10-minute "Wakeful Rest" protocol immediately following demanding cognitive practice sessions:',
        placeholder: 'e.g., After a 50-minute deep programming session: 10 minutes sitting quietly with eyes closed, zero phone, zero podcasts, zero reading. Allow hippocampal place cells to fire quiet wakefulness SWRs...',
        example: '12-Minute Post-Study Eyes-Closed Rest: Dim lights, reclined posture, no audio or visual input. Initiates immediate early systems consolidation prior to nocturnal sleep.',
        cognitiveRationale: 'Tambini, Ketz, & Davachi (2010) demonstrated that enhanced hippocampal-cortical functional connectivity and neural replay occur during awake resting states immediately following encoding, boosting delayed retention by over 35%.',
      },
    ],
  },
};
