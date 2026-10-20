import type { Lesson } from '../types/learning.ts';

export const LESSON_TARGETED_MEMORY_REACTIVATION: Lesson = {
  id: 'targeted-memory-reactivation',
  chapterId: 'ch-6-sleep-replay',
  number: '6.2',
  title: 'Targeted Memory Reactivation & Rest Cycles',
  subtitle: 'Strategic wakeful rest intervals and memory reactivation triggers',
  readingTimeMinutes: 14,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'Can you steer which memories the sleeping or resting brain replays, without ever waking up? What happens if you introduce subtle sensory cues during slow-wave sleep or take 10 minutes of complete sensory silence immediately after intense study?',
    teaser: 'Memory consolidation is not an uncontrollable lottery. Using sensory cues and deliberate wakeful rest, offline replay can be selectively steered to double retention of specific target skills.',
    hookNote: 'In 2007, Björn Rasch, Jan Born, and colleagues made a landmark breakthrough: human participants learned spatial card locations while exposed to a rose scent. Delivering that exact rose odor during subsequent Slow-Wave Sleep (SWS) triggered immediate hippocampal activation on fMRI and increased spatial memory recall from 60% to over 84% the next morning. In 2009, John Rudoy, Ken Paller, and colleagues extended this to auditory cues, demonstrating that quiet sounds played during sleep selectively rescue specific memories from forgetting. Concurrently, Lila Davachi (Tambini et al., 2010) and Michaela Dewar (2012) discovered that 10 minutes of quiet, wakeful rest—with zero phone, music, or conversation—boosts memory consolidation by 35% through immediate awake sharp-wave ripple bursts. Offline learning is not passive; it is an active engineering variable.',
  },
  prediction: {
    prompt: 'Before analyzing the empirical science of memory reactivation, test your intuition: In an experimental study by Rasch et al. (2007) and Rudoy et al. (2009), subjects learn 50 paired associates while hearing distinct subtle auditory cues. During subsequent Slow-Wave Sleep, researchers quietly replay auditory cues for 25 of the 50 items at a volume that does not cause awakening or alter sleep architecture. What occurs on the post-sleep memory test?',
    context: 'Both sets of 25 items were learned to identical initial accuracy during wakefulness. One set received sleeping auditory cues; the control set received no cues:',
    options: [
      {
        id: 'opt-tmr-no-effect',
        strategy: 'Hypothesis A: Sensory Disconnection (Zero Effect)',
        description: 'The thalamus blocks all external sensory inputs during slow-wave sleep; the auditory cues fail to reach the cortex or hippocampus and produce zero change in recall.',
      },
      {
        id: 'opt-tmr-selective-strengthening',
        strategy: 'Hypothesis B: Targeted Replay Steering & Selective Preservation',
        description: 'Auditory cues penetrate the sensory thalamus without triggering arousal, selectively biasing hippocampal sharp-wave ripple replay toward the cued memories, resulting in significantly higher retention for cued items over uncued items.',
      },
      {
        id: 'opt-tmr-arousal-decay',
        strategy: 'Hypothesis C: Sub-Arousal Trace Erasure',
        description: 'Subconscious audio cues destabilize sleep architecture and induce memory reconsolidation vulnerability, causing the cued memories to degrade faster than uncued items.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-tmr-selective-strengthening',
      headline: 'Targeted Memory Reactivation (TMR) Selectively Biases Offline Replay, Rescuing Cued Traces from Forgetting (Rasch et al., 2007; Rudoy et al., 2009; Antony et al., 2012).',
      explanation: 'Targeted Memory Reactivation (TMR) proves that sensory gating during Non-REM sleep is selective, not absolute. When subtle auditory or olfactory cues associated with daytime learning are presented during Slow-Wave Sleep (specifically synchronized with slow-wave Up-states), they activate sensory cortices and propagate to the hippocampus. This triggers selective Sharp-Wave Ripples (SWRs) that replay the specific neuronal ensembles associated with the cue. On morning retrieval tests, cued memories show 20% to 50% lower forgetting rates compared to uncued items, proving that offline consolidation can be experimentally guided and biased.',
      optionFeedback: {
        'opt-tmr-no-effect': {
          title: 'Your Choice: Hypothesis A (Sensory Disconnection Fallacy)',
          verdict: 'The Complete Thalamic Wall Myth',
          analysis: 'While the thalamus raises arousal thresholds during sleep to protect sleep continuity, it continues to process low-salience sensory streams. In fact, subtle cues bypass conscious vigilance while directly triggering associative circuits in the hippocampus.',
        },
        'opt-tmr-selective-strengthening': {
          title: 'Your Choice: Hypothesis B (Targeted Replay Steering)',
          verdict: 'Empirical Cognitive Neuroscience Consensus (TMR Framework)',
          analysis: 'Accurate! Rudoy et al. (2009) and Rasch et al. (2007) definitively proved that presenting learning-associated cues during SWS selectively biases hippocampal replay, dramatically improving next-day recall for the targeted items without disrupting sleep macro-architecture.',
        },
        'opt-tmr-arousal-decay': {
          title: 'Your Choice: Hypothesis C (Sub-Arousal Erasure Fallacy)',
          verdict: 'Plausible Reconsolidation Concern, Empirically Refuted',
          analysis: 'When cues are delivered during wakefulness, reactivation can destabilize traces into a labile state (reconsolidation). But during slow-wave sleep, high acetylcholine suppression and spindle activity prevent destabilization, driving pure synaptic restabilization instead.',
        },
      },
      comparisons: [
        {
          label: 'Uncued Natural Sleep Consolidation',
          immediateRetention: '70% (Baseline stochastic replay)',
          oneWeekRetention: '55% (Standard forgetting decay)',
          illusionRating: 'Moderate (natural passive retention)',
          isEmpiricalWinner: false,
        },
        {
          label: 'Immediate Post-Study Sensory Interference (Phone/Email/Social)',
          immediateRetention: '50% (Awake replay disrupted)',
          oneWeekRetention: '22% (Retroactive interference wipes out fragile tags)',
          illusionRating: 'Extremely high (learner feels busy while traces collapse)',
          isEmpiricalWinner: false,
        },
        {
          label: 'Wakeful Rest (10m) + Nocturnal TMR / Cueing',
          immediateRetention: '88% (Immediate awake SWRs + biased sleep replay)',
          oneWeekRetention: '78% (Robust neocortical schema stabilization)',
          illusionRating: 'Calibrated (deliberate offline scheduling creates durable mastery)',
          isEmpiricalWinner: true,
        },
      ],
      evidenceDistinction: 'Empirical Evidence Distinction: Targeted Memory Reactivation has been replicated across hundreds of studies covering spatial memory (Rasch et al., 2007), declarative vocabulary (Schreiner & Rasch, 2015), and complex motor skills (Antony et al., 2012; Oudiette & Paller, 2013).',
    },
  },
  coreExplanations: [
    {
      id: 'targeted-memory-reactivation-mechanisms',
      title: '1. Targeted Memory Reactivation (TMR): The Science of Cued Replay',
      tagline: 'Olfactory & auditory triggers that selectively bias hippocampal sharp-wave ripples during slow-wave sleep',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Experimental Neurophysiology Consensus',
      summary: 'In 2007, Björn Rasch and Jan Born demonstrated that delivering learning-associated odors during slow-wave sleep selectively activated the hippocampus and boosted morning spatial memory from 60% to 84%. Subsequent work by John Rudoy and Ken Paller (2009) proved that subtle auditory tones deliver identical item-specific reactivation.',
      mechanisms: [
        {
          label: 'The Rasch et al. (2007) Odor Replay Paradigm',
          description: 'Participants learned card locations on a computer screen while inhaling a mild rose odor. During subsequent nocturnal SWS, researchers re-administered the odor. Functional MRI revealed immediate, robust reactivation of the anterior hippocampus. On the morning test, participants remembered 84.6% of card pairs (vs. 61.2% in uncued controls), proving that sensory cues can trigger targeted replay.',
        },
        {
          label: 'Item-Specific Auditory Cueing (Rudoy et al., 2009; Antony et al., 2012)',
          description: 'Unlike odors which act as broad contextual cues, auditory tones (e.g. guitar notes or spoken words) can tag individual items. Playing specific soft audio cues during SWS selectively rescued those exact cued items from forgetting, while uncued items from the same learning session underwent normal forgetting decay.',
        },
        {
          label: 'Slow-Wave Up-State Phase-Locking (Closed-Loop TMR)',
          description: 'Recent closed-loop EEG technology (Batterink et al., 2016; Schreiner et al., 2015) demonstrates that TMR is dramatically more potent when the cue is delivered precisely at the peak of the cortical slow-wave Up-state, when neocortical dendrites are depolarized and sleep spindles are active.',
        },
      ],
      keyInsight: 'Memory consolidation is not an immutable black box. By associating specific auditory or sensory anchors with conceptual study sessions, offline replay can be deliberately steered toward high-priority skills.',
      simplifiedModelCaveat: 'TMR cannot teach novel information during sleep (sleep-learning or hypnopedia is a debunked myth). It can only selectively amplify and stabilize memories that were already successfully encoded during wakefulness.',
    },
    {
      id: 'wakeful-rest-and-awake-replay',
      title: '2. Wakeful Rest & Awake Sharp-Wave Ripples',
      tagline: 'Why 10 minutes of complete post-learning silence produces dramatic memory gains without sleep',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Cognitive Neurobiology Consensus',
      summary: 'Lila Davachi (Tambini et al., 2010) and Michaela Dewar (2012, 2014) proved that taking 10 minutes of quiet, wakeful rest—with eyes closed and zero phone, music, or distraction—immediately after learning increases long-term retention by over 35%. Electrophysiology reveals that the resting hippocampus fires awake Sharp-Wave Ripples that initiate early consolidation.',
      mechanisms: [
        {
          label: 'Awake Sharp-Wave Ripples (Tambini, Ketz, & Davachi, 2010)',
          description: 'Using resting-state fMRI, Davachi and colleagues showed that during quiet resting periods immediately following an associative learning task, functional connectivity between the hippocampus and neocortex surged. This awake dialogue directly predicted individual memory retention tested 24 hours later.',
        },
        {
          label: 'The Dewar Wakeful Rest Protocol (Dewar et al., 2012, 2014)',
          description: 'Michaela Dewar tested healthy adults and amnesic patients on word lists. One group engaged in 10 minutes of everyday distractor tasks (spot-the-difference games, browsing), while the other sat in a dimly lit, quiet room with eyes closed for 10 minutes. The wakeful rest group retained up to 35% more information on delayed tests days later.',
        },
        {
          label: 'Retroactive Interference Shielding',
          description: 'Immediately following encoding, synaptic plasticity tags (PRPs and CaMKII) are fragile. If you immediately open social media or answer email, new sensory data overloads the perforant path and triggers retroactive interference, wiping out the nascent memory tags before consolidation begins.',
        },
      ],
      keyInsight: 'The worst thing you can do after 60 minutes of demanding study is to instantly look at your smartphone. Sitting in quiet wakefulness for 10 minutes shields fragile synaptic traces from retroactive destruction.',
      simplifiedModelCaveat: 'Wakeful rest is not day-dreaming or problem-solving. Active mind-wandering or planning your schedule reactivates executive control networks; true wakeful rest requires passive sensory decompression.',
    },
    {
      id: 'ultradian-rest-cycles-brac',
      title: '3. Ultradian Rest Cycles & The Basic Rest-Activity Cycle (BRAC)',
      tagline: 'Harmonizing intense cognitive sprints with 90-minute biological consolidation rhythms',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Chronobiology & Neuroenergetics Consensus',
      summary: 'Pioneered by sleep researcher Nathaniel Kleitman, the Basic Rest-Activity Cycle (BRAC) governs human alertness in 90-minute ultradian rhythms during both sleep (NREM-REM cycles) and wakefulness. Structuring learning into 60–90 minute intense blocks followed by 10–15 minute offline consolidation breaks aligns with human neurophysiology.',
      mechanisms: [
        {
          label: 'Kleitman’s Basic Rest-Activity Cycle (BRAC; 90-Minute Rhythm)',
          description: 'Nathaniel Kleitman demonstrated that the 90-minute cyclical oscillation observed in sleep stages continues throughout daytime wakefulness. Human cognitive focus, cerebral blood flow, and autonomic tone oscillate across an 80-to-100 minute cycle of peak alertness followed by a dip in executive capacity.',
        },
        {
          label: 'Adenosine and Synaptic Fatigue Dynamics',
          description: 'During 90 minutes of intense focused cognition, local synaptic transmission depletes extracellular glucose and glycogen while accumulating extracellular adenosine in frontal and parietal hubs. Pushing through this dip with stimulants merely masks fatigue while degrading encoding fidelity.',
        },
        {
          label: 'The Strategic Rest Architecture (90/15 Protocol)',
          description: 'Aligning learning blocks with natural BRAC rhythms—90 minutes of focused deliberate practice followed by 15 minutes of low-stimulus wakeful rest—maximizes the ratio of synaptic tagging to offline consolidation, preventing cognitive burnout.',
        },
      ],
      keyInsight: 'Cognitive endurance is not a flat marathon. Working in harmony with 90-minute ultradian cycles ensures that peak encoding is always coupled with immediate offline consolidation.',
      simplifiedModelCaveat: 'BRAC rhythms are individual and flexible (ranging from 75 to 110 minutes). The critical constant is that cognitive expenditure must be paired with low-stimulus recovery to allow offline replay to occur.',
    },
  ],
  diagram: {
    title: 'The Architecture of Targeted Reactivation & Offline Rest Cycles',
    subtitle: 'From daytime wakeful rest to closed-loop nocturnal sleep replay triggers',
    stages: [
      {
        id: 'stage-encoding-cue-tagging',
        name: 'Stage 1: Intentional Encoding & Sensory Cue Association',
        subtitle: 'Paired sensory anchoring',
        capacity: 'Hippocampal episodic buffer',
        duration: '60–90 minute study block',
        role: 'During focused study, conceptual representations are intentionally paired with distinct sensory cues (e.g. ambient binaural tones, specific instrumental acoustic track, or essential oil aroma). The hippocampus binds the sensory cue into the episodic memory index.',
        failureMode: 'Multitasking or chaotic sensory noise prevents the formation of a clean, specific cue-memory association.',
        evidenceType: 'Empirical consensus (Rasch et al., 2007; Rudoy et al., 2009)',
        practicalFix: 'Use a single dedicated instrumental soundscape or aroma exclusively for a specific complex learning topic.',
      },
      {
        id: 'stage-wakeful-rest-immediate-replay',
        name: 'Stage 2: Post-Study Wakeful Rest (The 10-Minute Buffer)',
        subtitle: 'Awake sharp-wave ripple bursts',
        capacity: 'Zero-interference synaptic protection',
        duration: '10–15 minutes post-study',
        role: 'The learner sits quietly with eyes closed in a dim, low-stimulus room. The hippocampus generates awake sharp-wave ripples that initiate immediate early consolidation, shielding fragile synaptic tags from daytime retroactive interference.',
        failureMode: 'Immediately checking email, social media, or conversational chat, which floods the perforant path and wipes out fragile tags.',
        evidenceType: 'Empirical consensus (Dewar et al., 2012; Tambini et al., 2010)',
        practicalFix: 'Implement a mandatory 10-minute digital blackout immediately following every intense learning session.',
      },
      {
        id: 'stage-sws-tmr-cue-delivery',
        name: 'Stage 3: Nocturnal Slow-Wave Sleep Cue Delivery (TMR)',
        subtitle: 'Sub-arousal sensory stimulation',
        capacity: 'Thalamic gating & hippocampal SWR steering',
        duration: 'First 3–4 hours of nocturnal sleep',
        role: 'During deep Slow-Wave Sleep (N3), the subtle daytime auditory or olfactory cue is re-introduced at sub-arousal volume. The cue activates the sensory thalamus, phase-locks with slow-wave Up-states, and selectively triggers hippocampal SWRs that replay the target memory ensemble.',
        failureMode: 'Cue volume is too high (triggering micro-arousals or awakening) or delivered during REM sleep where it may induce dreaming rather than declarative consolidation.',
        evidenceType: 'Empirical consensus (Rasch et al., 2007; Antony et al., 2012; Schreiner & Rasch, 2015)',
        practicalFix: 'Deliver cues at low, comfortable ambient volume exclusively during the first half of nocturnal sleep.',
      },
      {
        id: 'stage-neocortical-stabilization',
        name: 'Stage 4: Neocortical Schema Stabilization & Resistance to Forgetting',
        subtitle: 'Selective memory rescue',
        capacity: 'Permanent neocortical schema',
        duration: 'Next morning and long-term retention',
        role: 'Cued memory traces exhibit significantly higher synaptic strength, dendritic spine enlargement, and integration into neocortical schemas, resulting in 20% to 50% greater recall accuracy compared to uncued material.',
        failureMode: 'Neglecting periodic spaced retrieval; even cued memories will eventually decay without delayed testing.',
        evidenceType: 'Empirical consensus (Rudoy et al., 2009; Diekelmann & Born, 2010)',
        practicalFix: 'Pair TMR with the spaced retrieval scheduler to lock in durable long-term mastery.',
      },
    ],
    feedbackLoopDescription: 'Targeted reactivation selectively prioritizes high-value mental models for consolidation, allowing learners to actively curate their neocortical schema architecture.',
  },
  exercise: {
    title: 'Offline Learning Protocol Diagnostic Exercise',
    instruction: 'Analyze four real-world professional learning breakdowns. Diagnose the exact offline consolidation failure and prescribe the evidence-grounded architectural fix.',
    categories: [
      {
        id: 'attention-bottleneck',
        title: 'Retroactive Sensory Washout',
        description: 'Immediately switching from dense learning to high-stimulus digital media flooded working memory and destroyed nascent hippocampal tags before wakeful consolidation could occur.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'working-memory-overload',
        title: 'Ultradian Exhaustion & BRAC Desynchronization',
        description: 'Forcing a 5-hour continuous cramming session without rest breaks saturated synaptic transmission and produced severe cognitive fatigue.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Hypnopedia Myth (Sleep-Learning Fallacy)',
        description: 'Attempting to learn completely brand-new foreign language vocabulary by playing loud audiobooks while sleeping, failing to recognize that sleep only consolidates previously encoded memories.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Stochastic Replay Decay (Uncurated Offline Consolidation)',
        description: 'Allowing high-priority architectural schemas to compete stochastically with incidental daytime trivia during sleep without using targeted cueing or deliberate rest.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-smartphone-after-study',
        realWorldContext: 'Competitive Programming Training',
        scenario: 'Alex spends 75 minutes solving complex dynamic programming problems. The moment he finishes the last problem, he immediately opens his phone, scrolls short-form video feeds for 20 minutes, and checks group chats. The next day, he struggles to recall the state-transition equations he spent an hour mastering.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'Alex induced Retroactive Sensory Washout (Dewar et al., 2012). Immediately bombarding the brain with high-salience novelty and emotional stimulation floods sensory cortices and the perforant path, triggering synaptic interference that disrupts early awake sharp-wave ripples and wipes out fragile synaptic tags before consolidation takes root.',
        evidenceBasedFix: 'Institute the Dewar Protocol: enforce 10 minutes of complete, eyes-closed wakeful rest with zero devices immediately following demanding practice.',
      },
      {
        id: 'scen-five-hour-marathon-fatigue',
        realWorldContext: 'Patent Law Bar Examination',
        scenario: 'Rachel studies patent law statutes continuously for 5 hours straight without standing up or taking a break. By hour 4, she is reading the same paragraph 6 times, making zero conceptual progress, and feels intense mental exhaustion.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'Rachel suffered from Ultradian Exhaustion & BRAC Desynchronization (Nathaniel Kleitman). Human attention and neuroenergetics follow an 80–100 minute Basic Rest-Activity Cycle. Pushing past 90 minutes without rest exhausts glycogen stores, accumulates adenosine, and degrades prefrontal cognitive control.',
        evidenceBasedFix: 'Restructure the study day into 90-minute ultradian blocks separated by 15-minute low-stimulus physical or wakeful rest intervals.',
      },
      {
        id: 'scen-sleep-language-tapes',
        realWorldContext: 'Language Acquisition Enthusiast',
        scenario: 'Ken buys an audio program that promises to teach fluent Mandarin by playing conversational Chinese dialogues on headphones while he sleeps. After 3 months of playing audio every night, his comprehension of Mandarin during waking hours is zero.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'Ken fell victim to the Hypnopedia Myth. Decades of EEG and polysomnography research confirm that the sleeping brain cannot encode novel, unfamiliar declarative knowledge. Targeted Memory Reactivation (TMR) can only selectively reactivate and strengthen traces that were already encoded during wakefulness (Rasch et al., 2007).',
        evidenceBasedFix: 'Dedicate conscious daytime wakefulness to active retrieval and grammar encoding; restrict sleep audio exclusively to subtle cues for previously mastered items.',
      },
      {
        id: 'scen-unprioritized-sleep-decay',
        realWorldContext: 'Systems Architect Preparing Certification',
        scenario: 'Maya spends 2 hours learning a complex Kubernetes orchestration engine, then spends 3 hours watching murder mystery documentaries before going to sleep. On the exam, she remembers intricate plot details of the mystery show but forgets core Kubernetes failure-recovery commands.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'Maya experienced Stochastic Replay Decay. During sleep, memories compete for sharp-wave ripple reactivation. High-emotion, high-salience evening stimuli (the murder mystery) set powerful emotional plasticity tags (via amygdala-hippocampal pathways) that outcompeted the earlier, neutral technical material during nocturnal replay.',
        evidenceBasedFix: 'Eliminate high-arousal television before sleep; review high-priority technical flashcards as the final cognitive activity of the day, or use an acoustic TMR cue to bias replay toward the certification material.',
      },
    ],
  },
  quiz: {
    title: 'Mastery Check: Targeted Memory Reactivation & Rest Science',
    instruction: 'Validate your understanding of TMR, wakeful rest neurobiology, retroactive interference, and ultradian rest cycles.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-rasch-tmr-olfactory-finding',
        question: 'What did the landmark study by Rasch et al. (2007) demonstrate regarding olfactory cueing during Slow-Wave Sleep (SWS)?',
        options: [
          {
            id: 'q1-a',
            text: 'Re-exposing participants to a rose odor during SWS that was present during prior spatial learning triggered hippocampal activation and increased morning memory recall from 61% to over 84%.',
          },
          {
            id: 'q1-b',
            text: 'Odors during sleep woke participants up instantly, proving that humans cannot smell while sleeping.',
          },
          {
            id: 'q1-c',
            text: 'Odors only improved memory if delivered during Rapid Eye Movement (REM) sleep; SWS odor delivery caused complete amnesia.',
          },
          {
            id: 'q1-d',
            text: 'Odors caused participants to dream about gardens but had zero effect on spatial memory retention.',
          },
        ],
        correctOptionId: 'q1-a',
        explanation: 'Rasch et al. (2007) showed that presenting a learning-associated odor during SWS prompted immediate hippocampal activation on fMRI and increased next-morning spatial memory accuracy to 84.6%, proving that offline consolidation can be experimentally guided.',
        pedagogicalRationale: 'Establishes the foundational empirical landmark for Targeted Memory Reactivation in cognitive neuroscience.',
        evidenceNote: 'Rasch, B., Büchel, C., Gais, S., & Born, J. (2007). Odor cues during slow-wave sleep prompt declarative memory consolidation. Science, 315(5817), 1426-1429.',
      },
      {
        id: 'q2-dewar-wakeful-rest-mechanism',
        question: 'According to research by Michaela Dewar (2012, 2014) and Lila Davachi (Tambini et al., 2010), why does 10 minutes of quiet wakeful rest immediately following study boost delayed retention by over 35%?',
        options: [
          {
            id: 'q2-a',
            text: 'Because quiet resting wakefulness allows the hippocampus to fire awake sharp-wave ripples and engage hippocampal-cortical dialogue while shielding fragile synaptic tags from retroactive sensory interference.',
          },
          {
            id: 'q2-b',
            text: 'Because sitting quietly cools the cerebral spinal fluid down by 5 degrees Celsius, freezing memories in place.',
          },
          {
            id: 'q2-c',
            text: 'Because wakeful rest is identical to a 3-hour deep sleep cycle in its hormone secretion.',
          },
          {
            id: 'q2-d',
            text: 'Because sensory deprivation kills off damaged neurons in the frontal lobe so only strong neurons survive.',
          },
        ],
        correctOptionId: 'q2-a',
        explanation: 'Dewar et al. and Tambini et al. proved that offline consolidation begins immediately during wakefulness. Taking 10 minutes of sensory rest prevents new environmental inputs from overwriting fragile synaptic tags, allowing awake sharp-wave ripples to initiate early neocortical integration.',
        pedagogicalRationale: 'Clarifies the neurobiological mechanism of wakeful rest and retroactive interference prevention.',
        evidenceNote: 'Dewar, M., Alber, J., Butler, C., Cowan, N., & Della Sala, S. (2012). Brief wakeful resting immediately after learning keeps memories alive. Psychological Science, 23(9), 955-960.',
      },
      {
        id: 'q3-tmr-limitation-hypnopedia',
        question: 'Why does cognitive neuroscience reject "hypnopedia" (learning completely new facts while asleep) while strongly supporting Targeted Memory Reactivation (TMR)?',
        options: [
          {
            id: 'q3-a',
            text: 'Because sleep lack the high acetylcholine and attentional gating required to form de novo synaptic tags for unfamiliar material; TMR can only reactivate and stabilize memory traces that were already encoded during wakefulness.',
          },
          {
            id: 'q3-b',
            text: 'Because hypnopedia requires a cassette tape player, and modern smartphones emit magnetic fields that block sleep-learning.',
          },
          {
            id: 'q3-c',
            text: 'Because the ear canal completely closes during sleep, making it impossible to hear anything.',
          },
          {
            id: 'q3-d',
            text: 'Because hypnopedia works perfectly for vocabulary, but scientists keep it secret to protect university tuition fees.',
          },
        ],
        correctOptionId: 'q3-a',
        explanation: 'Encoding new declarative memories requires conscious attentional gating, high cholinergic tone, and working memory buffers. In sleep, acetylcholine is low and the thalamus gates conscious processing. Thus, sleep can selectively replay and restabilize existing waking traces (TMR), but cannot encode completely novel concepts from scratch.',
        pedagogicalRationale: 'Dispels the pervasive commercial myth of sleep-learning while cementing the real science of memory restabilization.',
        evidenceNote: 'Diekelmann, S., & Born, J. (2010). The memory function of sleep. Nature Reviews Neuroscience, 11(2), 114-126.',
      },
      {
        id: 'q4-brac-ultradian-rhythm',
        question: 'How does Nathaniel Kleitman’s Basic Rest-Activity Cycle (BRAC) inform the optimal scheduling of high-intensity cognitive work?',
        options: [
          {
            id: 'q4-a',
            text: 'Human neuroenergetics and focus oscillate in 80–100 minute cycles; capping deep work sprints at 90 minutes followed by 10–15 minutes of low-stimulus rest optimizes the ratio of synaptic tagging to offline consolidation.',
          },
          {
            id: 'q4-b',
            text: 'BRAC states that humans should only work for 5 minutes per day and sleep for 23 hours and 55 minutes.',
          },
          {
            id: 'q4-c',
            text: 'BRAC proves that drinking 1,000 mg of caffeine eliminates all biological need for rest breaks during an 18-hour work day.',
          },
          {
            id: 'q4-d',
            text: 'BRAC only applies to astronauts in zero gravity and has no relevance to terrestrial learning.',
          },
        ],
        correctOptionId: 'q4-a',
        explanation: 'Kleitman showed that the 90-minute ultradian rhythm governing REM-NREM cycles also dictates waking cognitive stamina. Working in 90-minute blocks followed by 10–15 minutes of rest aligns with natural physiological energy peaks and prevents cognitive burnout.',
        pedagogicalRationale: 'Connects chronobiological rhythm research directly to daily productivity architecture.',
        evidenceNote: 'Kleitman, N. (1982). Basic rest-activity cycle—22 years later. Sleep, 5(4), 311-317.',
      },
    ],
  },
  practicalTask: {
    title: 'The Targeted Memory Reactivation & Strategic Rest Protocol',
    summary: 'A 3-step practical protocol to pair acoustic learning anchors, implement post-study wakeful rest buffers, and leverage closed-loop TMR cues.',
    steps: [
      {
        id: 'step-establish-acoustic-anchor',
        number: 1,
        title: 'Establish a Dedicated Acoustic Anchor for Target Material',
        prompt: 'Select a unique, dedicated ambient soundscape or instrumental track that you will play exclusively while studying this complex topic:',
        placeholder: 'e.g., Topic: Distributed Systems Consensus. Acoustic Anchor: 40 Hz gamma binaural tone mixed with rain sounds, played exclusively during these study sessions...',
        example: 'Acoustic Anchor: A specific 60 BPM ambient synthesizer soundtrack played via headphones exclusively during Rust concurrency study blocks.',
        cognitiveRationale: 'Associating conceptual encoding with an invariant, distinct sensory backdrop binds the acoustic feature into the hippocampal index vector, enabling it to serve as a targeted reactivation cue later.',
      },
      {
        id: 'step-execute-dewar-buffer',
        number: 2,
        title: 'Execute the 10-Minute Dewar Wakeful Rest Blackout',
        prompt: 'Specify the exact behavioral routine you will follow for the 10 minutes immediately after closing your study material:',
        placeholder: 'e.g., Timer set for 10 minutes: Close laptop, leave phone in another room, recline in an armchair with eyes closed in dim lighting. No podcasts, no conversation, no reading...',
        example: '10-Minute Post-Study Digital Blackout: Sit quietly with eyes closed, allowing sensory cortices to settle and awake sharp-wave ripples to initiate early consolidation without retroactive interference.',
        cognitiveRationale: 'Dewar et al. (2012) proved that immediate awake rest prevents new sensory information from overwhelming nascent synaptic tags, increasing long-term retention by up to 35%.',
      },
      {
        id: 'step-nocturnal-tmr-playback',
        number: 3,
        title: 'Schedule Nocturnal TMR Cue Playback During Early Sleep',
        prompt: 'Design a sub-arousal playback schedule for your acoustic anchor during the first 3 hours of nocturnal sleep:',
        placeholder: 'e.g., Set an audio player on a 120-minute sleep timer at 15% volume (sub-arousal whisper level) to play the acoustic anchor during NREM slow-wave sleep cycles 1 and 2...',
        example: 'Sleep timer playing acoustic study anchor at 20 dB (barely audible) starting 45 minutes after sleep onset, running for 90 minutes across the first deep SWS cycle.',
        cognitiveRationale: 'Sub-arousal acoustic cueing during SWS phase-locks with cortical slow-wave Up-states, selectively triggering hippocampal sharp-wave ripples that bias memory replay toward target skills (Rudoy et al., 2009).',
      },
    ],
  },
};
