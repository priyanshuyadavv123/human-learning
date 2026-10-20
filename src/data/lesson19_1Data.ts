import type { Lesson } from '../types/learning.ts';

export const LESSON_INCUBATION_DEFAULT_MODE: Lesson = {
  id: 'incubation-default-mode',
  chapterId: 'ch-19-creative-insight',
  number: '19.1',
  title: 'Incubation & Unconscious Associative Search',
  subtitle: 'Default mode network activation during mind-wandering and rest',
  readingTimeMinutes: 16,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'Why do breakthrough mathematical, programming, and philosophical insights almost never occur while staring furiously at the screen, but instead explode into awareness while walking, showering, or washing dishes?',
    teaser: 'Conscious effort contracts attentional focus and silences remote associations; genuine creative leaps require deactivating executive control so the Default Mode Network can explore wide semantic networks.',
    hookNote: 'In 1908, the eminent French mathematician Henri Poincaré documented the genesis of his revolutionary discovery of Fuchsian functions: after weeks of grueling, fruitless desk labor attempting to prove their existence, he gave up in disgust and boarded a geological excursion bus in Coutances. The instant his foot touched the step of the omnibus, without any antecedent conscious thought, the exact mathematical transformation popped fully formed into his mind. Half a century later, cognitive scientists Sio and Ormerod (2009) synthesized hundreds of creative experiments in a definitive meta-analysis, proving that strategic incubation—stepping away from an intractable problem—reliably produces dramatic jumps in creative solution rates. Neuroimaging pioneers like Marcus Raichle (2001) and Kalina Christoff (2009) revealed the underlying biophysical machinery: when external task focus terminates, the Central Executive Network (CEN) steps down and the Default Mode Network (DMN)—spanning the medial prefrontal cortex (mPFC), posterior cingulate cortex (PCC), and angular gyrus—surges into synchronized oscillation. In this lesson, we explore the neurobiology of incubation, uncover how Collins & Loftus’s spreading activation model operates below conscious awareness, examine why Baird & Smallwood (2012) found that undemanding low-load tasks maximize creative breakthroughs, and build a 3-phase strategic incubation protocol to shatter mental impasses.',
  },
  prediction: {
    prompt: 'A team of 120 senior software engineers and algorithms researchers is challenged with solving an extremely complex, non-obvious distributed systems consensus bug. After 45 minutes of intense, focused analysis, all participants reach a complete cognitive impasse (no working solutions found).\n\nAt this exact 45-minute mark, participants are divided into three equal 20-minute incubation conditions before returning for a final 30-minute attempt:\n\nCondition A ("Continuous Grinding"): Engineers remain at their desks and are instructed to grind with maximum mental focus without taking a single break.\n\nCondition B ("Demanding Cognitive Task"): Engineers take a break from the bug but work on difficult GRE reading comprehension and numerical logic puzzles that consume high working memory.\n\nCondition C ("Undemanding Low-Load Activity"): Engineers step away from all computer screens and engage in an undemanding, low-cognitive-load activity (taking a casual walk or watering plants in a quiet courtyard) that permits spontaneous mind-wandering.\n\nAccording to empirical incubation research (Baird et al., 2012; Sio & Ormerod, 2009), which group will demonstrate the highest rate of breakthrough solutions?',
    context: 'All engineers had equal domain expertise and reached verified impasse before the experimental condition was applied:',
    options: [
      {
        id: 'opt-condition-a-continuous-grinding',
        strategy: 'Hypothesis A: Continuous Grinding Superiority',
        description: 'Condition A will perform best because uninterrupted attention prevents memory trace decay and keeps the bug\'s data structures active in prefrontal working memory.',
      },
      {
        id: 'opt-condition-b-demanding-distraction',
        strategy: 'Hypothesis B: Demanding Cognitive Distraction',
        description: 'Condition B will perform best because challenging alternate cognitive tasks completely wipe out old thought patterns through active interference, providing a totally clean slate.',
      },
      {
        id: 'opt-condition-c-undemanding-low-load',
        strategy: 'Hypothesis C: Undemanding Low-Load Incubation',
        description: 'Condition C will achieve the highest solution rate (~40% higher) because an undemanding task enables "fixation forgetting" while permitting the Default Mode Network to execute wide unconscious associative search without executive drain (Baird et al., 2012).',
      },
    ],
    outcome: {
      winningOptionId: 'opt-condition-c-undemanding-low-load',
      headline: 'Undemanding Tasks Maximize Creative Breakthroughs: Low-Load Activity Frees the Default Mode Network While Releasing Cognitive Fixation (Baird et al., 2012; Sio & Ormerod, 2009).',
      explanation: 'Empirical research by Benjamin Baird, Jonathan Smallwood, and colleagues (2012) published in Psychological Science demonstrated that engaging in an undemanding, low-cognitive-load task produces significantly higher creative breakthrough rates than either continuous grinding, demanding cognitive tasks, or even passive rest. When engineers in Condition A continued grinding, they remained trapped in "cognitive fixation" (mental sets/Einstellung)—their high prefrontal executive control repeatedly reinforced the same erroneous assumptions and silenced remote associative pathways through lateral inhibition. In Condition B, the high working memory demands of GRE puzzles hijacked the Central Executive Network, starving the brain of the metabolic and attentional bandwidth needed for unconscious associative search. In contrast, Condition C engineers engaged in an undemanding physical activity: this facilitated "fixation forgetting" (Smith & Blankenship, 1991), lightly anchored basic sensory attention to prevent rumination, relaxed top-down prefrontal inhibitory gating, and allowed the Default Mode Network (DMN) to orchestrate diffuse spreading activation across distant semantic nodes, sparking the insight upon return.',
      optionFeedback: {
        'opt-condition-a-continuous-grinding': {
          title: 'Your Choice: Hypothesis A (Continuous Grinding)',
          verdict: 'Refuted by Incubation & Cognitive Fixation Science',
          analysis: 'Continuous grinding cements mental ruts. Once an impasse is reached, intense executive control produces lateral inhibition that actively suppresses novel, non-obvious associative pathways.',
        },
        'opt-condition-b-demanding-distraction': {
          title: 'Your Choice: Hypothesis B (Demanding Cognitive Distraction)',
          verdict: 'Refuted by Working Memory & DMN Research',
          analysis: 'High-demand cognitive tasks monopolize central executive resources and prefrontal bandwidth, suppressing the Default Mode Network and preventing unconscious semantic search.',
        },
        'opt-condition-c-undemanding-low-load': {
          title: 'Your Choice: Hypothesis C (Undemanding Low-Load Incubation)',
          verdict: 'Supported by Baird et al. (2012) & Raichle et al. (2001)',
          analysis: 'Correct! Baird et al. proved that undemanding activities provide the ideal balance: they allow misleading cognitive sets to decay ("fixation forgetting") while liberating the Default Mode Network to wander through remote memory networks.',
        },
      },
      comparisons: [
        {
          label: 'Creative Problem Solving Success Rate Post-Impasse',
          immediateRetention: '14% (Continuous Desk Grinding Condition)',
          oneWeekRetention: '53% (Undemanding Low-Load Activity Condition; Baird et al., 2012)',
          illusionRating: 'Grinding feels productive; taking a walk feels lazy but yields 3.8x breakthrough rate',
          isEmpiricalWinner: true,
        },
        {
          label: 'Fixation Forgetting & Misleading Clue Decay Rate',
          immediateRetention: 'Low Clue Decay (Mental Ruts Persist in ECN Focus)',
          oneWeekRetention: 'High Clue Decay (Misleading Sets Fade During Undemanding Rest)',
          illusionRating: 'Cognitive sets decay passively during incubation (Smith & Blankenship, 1991)',
          isEmpiricalWinner: true,
        },
      ],
      evidenceDistinction: 'Benjamin Baird et al. (2012) Psychological Science; Sio & Ormerod (2009) British Journal of Psychology; Marcus Raichle et al. (2001) PNAS; Smith & Blankenship (1991) American Journal of Psychology.',
    },
  },
  coreExplanations: [
    {
      id: 'dmn-vs-executive-control',
      title: 'The Neurobiology of Incubation: DMN vs Executive Control',
      tagline: 'The antagonistic brain networks that mediate focus vs associative cross-pollination',
      scientificStatus: 'neurobiological-mechanism',
      statusLabel: 'Neuroimaging Consensus (fMRI/PET)',
      summary: 'Creative insight is governed by the dynamic interplay of two antagonistic large-scale brain systems: the Central Executive Network (CEN/ECN) and the Default Mode Network (DMN). Focused deliberate effort is necessary to load problem parameters, but relaxation of executive control is required to liberate remote associative combinations.',
      mechanisms: [
        {
          label: 'The Central Executive Network (CEN)',
          description: 'Anchored in the dorsolateral prefrontal cortex (dlPFC) and posterior parietal cortex (PPC), the CEN mediates goal-directed focus, working memory manipulation, and top-down attentional filtering. While vital for analytical setup, high CEN activity enforces strong lateral inhibition, suppressing thoughts that appear irrelevant to the current focal hypothesis.',
        },
        {
          label: 'The Default Mode Network (DMN)',
          description: 'Discovered by Marcus Raichle et al. (2001), the DMN encompasses the medial prefrontal cortex (mPFC), posterior cingulate cortex (PCC), precuneus, and angular gyrus. It activates during internally directed cognition, autobiographical recall, mind-wandering, and perspective taking, connecting broadly separated cortical knowledge hubs.',
        },
        {
          label: 'Salience Network Switching & Dynamic Coupling',
          description: 'The anterior insula and dorsal anterior cingulate cortex (dACC)—forming the Salience Network (Menon & Uddin, 2010)—act as a dynamic toggle switch. In high creative problem solvers (Beaty et al., 2018), the brain achieves a rare state of cooperative co-activation: the DMN generates spontaneous associative variants, while the CEN evaluates and selects high-utility solutions.',
        },
      ],
      keyInsight: 'Breakthrough insight does not happen in spite of taking a break; it happens because disengagement releases prefrontal lateral inhibition, allowing the Default Mode Network to cross-pollinate distant mental representations.',
      simplifiedModelCaveat: 'The DMN is often colloquially simplified as the "creative daydreaming network" while the CEN is labeled the "boring work network." In reality, creative mastery requires both: without rigorous CEN preparation to encode domain schemas and impasse boundaries, DMN mind-wandering produces only trivial, unstructured noise.',
    },
    {
      id: 'spreading-activation-subthreshold',
      title: 'Spreading Activation & Unconscious Sub-Threshold Search',
      tagline: 'How semantic graphs compute below awareness until an rSTG gamma burst erupts',
      scientificStatus: 'cognitive-model',
      statusLabel: 'Cognitive Science & EEG Paradigm',
      summary: 'Human semantic memory is structured as a vast associative graph. During incubation, activation spreads autonomously along synaptic connections below the threshold of conscious awareness, culminating in a sudden electrophysiological burst when remote nodes intersect.',
      mechanisms: [
        {
          label: 'Collins & Loftus (1975) Spreading Activation Model',
          description: 'When a concept node is primed, electrical activation diffuses outward along associative links. The strength and speed of propagation decrease as conceptual distance increases. In conscious analytical thought, only high-weight, near-neighbor associates reach conscious working memory threshold.',
        },
        {
          label: 'Differential Decay & Lateral Disinhibition',
          description: 'During active problem solving, dominant (but incorrect) candidate solutions generate intense lateral inhibition, muting remote possibilities. During incubation, high-frequency dominant activations decay exponentially faster than broad baseline semantic priming, unmasking previously suppressed remote associations.',
        },
        {
          label: 'The rSTG Gamma-Band "Aha!" Signature',
          description: 'Bowden, Jung-Beeman, and colleagues (2004) recorded EEG and fMRI during Remote Associates Test (RAT) problem solving. They discovered that approximately 300 milliseconds before a subject consciously articulates a sudden insight, a massive burst of high-frequency gamma waves (40 Hz) erupts in the right anterior superior temporal gyrus (rSTG), marking the binding of disparate semantic elements into a unified conscious percept.',
        },
      ],
      keyInsight: 'The subjective "Aha!" moment is the conscious arrival of an unconscious computational process: semantic activation ripples quietly beneath awareness until remote nodes bind, triggering a pre-conscious gamma burst in the right hemisphere.',
      simplifiedModelCaveat: 'The "right hemisphere is creative / left hemisphere is logical" dichotomy is a pervasive neuromyth. While the right superior temporal gyrus specializes in processing coarse, wide semantic semantic fields, insight problem solving requires bilateral coordination across both hemispheres and fronto-temporal circuits.',
    },
    {
      id: 'fixation-forgetting-baird-protocol',
      title: 'Fixation Forgetting & The Strategic Incubation Protocol',
      tagline: 'Designing undemanding low-load intervals that maximize insight yield',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Empirical Psychological Standard',
      summary: 'Incubation works via two complementary engines: active unconscious computation and "fixation forgetting." Designing an optimal incubation routine requires matching the mental task to cognitive load constraints, ensuring that misleading assumptions decay while associative search proceeds uninhibited.',
      mechanisms: [
        {
          label: 'Fixation Forgetting Hypothesis (Smith & Blankenship, 1991)',
          description: 'When people are stuck on a riddle, bug, or design flaw, they are typically fixated on an inappropriate mental set or misleading cue (Einstellung effect). Temporary absence from the problem allows these fragile, unhelpful working memory traces to decay, clearing the cognitive slate for alternative configurations.',
        },
        {
          label: 'Cognitive Load Sweet Spot (Baird et al., 2012)',
          description: 'Not all breaks are equal. Baird and colleagues demonstrated that an undemanding, low-load activity (e.g. routine walking, light showering, gardening) produces superior insight compared to high-load puzzles (which consume central executive resources) or passive resting (which often devolves into stressful rumination). Low-load tasks anchor perceptual attention just enough to prevent repetitive obsessive circling.',
        },
        {
          label: 'The 3-Phase Incubation Architecture',
          description: 'Authentic incubation requires three sequential phases: (1) Saturated Preparation—deliberate, intense problem decomposition until true impasse is reached; (2) Strategic Disengagement—abrupt cessation of conscious effort for 15–90 minutes during a low-load physical task; and (3) Frictionless Capture—immediate externalization of insights the second the rSTG binds the solution.',
        },
      ],
      keyInsight: 'Taking an incubation break before reaching a genuine impasse is merely procrastination; taking an incubation break after exhaustive preparation is applied neurobiology.',
      simplifiedModelCaveat: 'Incubation does not replace deliberate practice or rigorous analytical training. If you have not invested the deliberate hours to encode fundamental domain primitives, the Default Mode Network has no schemas to recombine during rest.',
    },
  ],
  diagram: {
    title: 'The Incubation & Default Mode Network State Transition Diagram',
    subtitle: 'From executive cognitive impasse to DMN spreading activation and rSTG gamma burst',
    stages: [
      {
        id: 'stage-saturated-prep',
        name: 'Stage 1: Saturated Preparation & Impasse',
        subtitle: 'Central Executive Network Saturation & Fixation',
        capacity: 'CEN Activity: Maximum • Cognitive Fixation: Severe',
        duration: '45–90 minutes intense focus',
        role: 'Intense Central Executive Network (CEN) activation loads domain primitives into working memory. High lateral inhibition traps thinking in misleading cognitive sets (Einstellung impasse).',
        failureMode: 'Premature incubation (procrastinating before reaching true impasse) or unbroken grinding past cognitive exhaustion.',
        evidenceType: 'Sio & Ormerod (2009) British Journal of Psychology meta-analysis on impasse requirements',
        practicalFix: 'Do not incubate prematurely; grind deliberately until all obvious candidate paths are fully falsified.',
      },
      {
        id: 'stage-strategic-disengagement',
        name: 'Stage 2: Strategic Disengagement (Low-Load Break)',
        subtitle: 'Salience Network Switching & DMN Recruitment',
        capacity: 'Cognitive Load: Low • Attention: Lightly Sensorimotor Anchored',
        duration: '20–30 minutes duration',
        role: 'Task cessation triggers Salience Network to step down CEN and activate Default Mode Network (mPFC, PCC, angular gyrus). Engaging in an undemanding sensorimotor task prevents rumination.',
        failureMode: 'Swapping to demanding cognitive distraction (social media, chess, complex reading) which hijacks executive bandwidth.',
        evidenceType: 'Baird et al. (2012) Psychological Science 4-arm randomized trial on incubation conditions',
        practicalFix: 'Take a 20-30 minute walk or shower without phone, music, or high-focus podcasts.',
      },
      {
        id: 'stage-subthreshold-search',
        name: 'Stage 3: Unconscious Spreading Activation',
        subtitle: 'Differential Decay & Remote Semantic Diffusion',
        capacity: 'Activation: Sub-threshold • Semantic Spread: Broad',
        duration: 'Continuous during incubation',
        role: 'Dominant incorrect mental sets decay rapidly. Diffuse, sub-threshold activation ripples across semantic graph connections, reaching distant conceptual neighborhoods.',
        failureMode: 'Forcing analytical thought during the break, reinstating prefrontal lateral inhibition.',
        evidenceType: 'Collins & Loftus (1975) spreading activation model & Smith & Blankenship (1991) fixation forgetting',
        practicalFix: 'Allow the mind to wander freely without attempting to force conscious problem-solving.',
      },
      {
        id: 'stage-gamma-binding',
        name: 'Stage 4: rSTG Gamma-Band Binding & Capture',
        subtitle: 'Electrophysiological Burst & Frictionless Externalization',
        capacity: 'Oscillation: 40 Hz Gamma • Lead Time: ~300ms Pre-Conscious',
        duration: 'Instantaneous insight emergence',
        role: 'Remote associative streams converge in the right anterior superior temporal gyrus (rSTG), producing a sudden 40 Hz gamma burst ~300ms before conscious awareness ("Aha!").',
        failureMode: 'Failing to externalize the fragile insight immediately, allowing high-entropy traces to decay under sensory interference.',
        evidenceType: 'Bowden & Jung-Beeman (2004) high-density EEG and fMRI remote associates studies',
        practicalFix: 'Immediately externalize the insight using analog paper or a voice note before high-entropy memory traces evaporate.',
      },
    ],
    feedbackLoopDescription: 'Saturated focus primes the semantic graph; disengagement activates the DMN; sub-threshold spreading activation converges in the rSTG; immediate capture anchors the transient insight.',
  },
  exercise: {
    title: 'Incubation & Mind-Wandering Strategy Diagnosis Lab',
    instruction: 'Analyze 4 real-world engineering, scientific, and professional roadblocks. Diagnose whether the dilemma stems from Cognitive Fixation (Einstellung impasse), High-Load Break Interruption (Hijacking executive bandwidth), Premature Incubation (Procrastination without preparation), or Unrecorded Ephemeral Insight (Working memory capture leakage), and prescribe the neuroscientifically calibrated fix.',
    categories: [
      {
        id: 'working-memory-overload',
        title: 'Cognitive Fixation & Einstellung Impasse',
        description: 'Continuous unbroken grinding that locks attention into misleading mental sets through intense prefrontal lateral inhibition.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'attention-bottleneck',
        title: 'High-Load Break Interruption',
        description: 'Taking a "break" that involves demanding cognitive tasks (social media arguments, chess, difficult reading), hijacking executive networks and suppressing the DMN.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Premature Incubation (Procrastination Trap)',
        description: 'Stepping away before reaching genuine impasse and without encoding the necessary domain primitives, yielding only superficial daydreaming.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Unrecorded Ephemeral Insight (Capture Leakage)',
        description: 'Failing to externalize transient rSTG gamma-band binding immediately, allowing fragile associative representations to decay under sensory interference.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-maya-distributed-deadlock',
        realWorldContext: 'Distributed Database Systems Engineering',
        scenario: 'Maya has been wrestling with a distributed cache invalidation race condition for 6 consecutive hours. She refuses to leave her desk, drinks 4 cups of coffee, and frantically tests the same 3 failed patch variants repeatedly, growing increasingly frustrated and irritable.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'This is severe Cognitive Fixation and the Einstellung effect (Smith & Blankenship, 1991). Maya’s unbroken executive focus maintains intense dlPFC lateral inhibition that mutes remote associative pathways, locking her into the same 3 failing mental representations.',
        evidenceBasedFix: 'Mandate immediate cessation of desk grinding. Enforce a 25-minute undemanding walk outdoors without screens to activate the DMN and permit misleading mental sets to decay (Baird et al., 2012).',
      },
      {
        id: 'scen-elena-social-media-break',
        realWorldContext: 'Fintech API Architecture Design',
        scenario: 'Elena is stuck on designing a novel API schema for a high-frequency payment gateway. She decides to take a break from the architecture document, but spends her 30-minute break reading dense political news analysis and engaging in intense flame wars on social media.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'This is the High-Load Break Interruption trap. Engaging in combative reading and typing on social media consumes heavy working memory and prefrontal bandwidth, keeping the Central Executive Network locked and suppressing the DMN.',
        evidenceBasedFix: 'Swap cognitively demanding digital breaks for low-load physical sensorimotor tasks (e.g. routine walking, washing coffee mugs, or stretching) that liberate the DMN without executive drain.',
      },
      {
        id: 'scen-julian-premature-lounging',
        realWorldContext: 'Behavioral Economics Graduate Research',
        scenario: 'Julian has to write a 10-page research synthesis on behavioral economics. After reading the assignment prompt for 7 minutes, he decides that "Poincaré and modern neuroscience prove the power of incubation," so he leaves his desk to spend the afternoon lounging at a café, hoping an essay structure will pop into his head.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'This is Premature Incubation masquerading as neurobiology. Sio and Ormerod (2009) proved that incubation yields creative gains only when preceded by saturated deliberate preparation and verified impasse. Without loaded domain schemas, the DMN has no primitives to recombine.',
        evidenceBasedFix: 'Return to the desk for at least 90 minutes of structured analytical preparation: map the literature, outline candidate arguments, and identify the exact structural contradiction before scheduling an incubation break.',
      },
      {
        id: 'scen-david-shower-eureka-evaporation',
        realWorldContext: 'Database Index Optimization',
        scenario: 'David was struggling with a complex database indexing strategy. While taking a warm shower, the complete, elegant architecture suddenly flashes into his consciousness in vivid detail. He thinks "that’s so brilliant, I’ll remember it when I get to work in an hour," but by the time he opens his laptop, the specific structural nuances have evaporated.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'This is Unrecorded Ephemeral Insight. While the warm shower facilitated DMN activation and rSTG gamma binding (Bowden & Jung-Beeman, 2004), newly synthesized insight representations have high initial entropy and fragile working memory traces that decay in minutes under sensory interference.',
        evidenceBasedFix: 'Deploy zero-friction external capture tools immediately proximate to incubation zones: keep a waterproof pad in the shower or an analog notebook and pen in the pocket to record insights within 15 seconds of conscious emergence.',
      },
    ],
  },
  quiz: {
    title: 'Lesson 19.1 Mastery Assessment: Incubation & The Default Mode Network',
    instruction: 'Demonstrate rigorous understanding of incubation neurobiology, spreading activation models, and fixation forgetting.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-dmn-vs-ecn',
        question: 'Which large-scale brain network is predominantly active when stepping away from intense analytical work to engage in an undemanding, low-load task, and what anatomical structures comprise its core hub?',
        options: [
          {
            id: 'q1-a',
            text: 'The Central Executive Network (CEN); dorsolateral prefrontal cortex and posterior parietal cortex.',
          },
          {
            id: 'q1-b',
            text: 'The Default Mode Network (DMN); medial prefrontal cortex (mPFC), posterior cingulate cortex (PCC), and angular gyrus (Raichle et al., 2001).',
          },
          {
            id: 'q1-c',
            text: 'The Dorsal Attentional Network; frontal eye fields and intraparietal sulcus.',
          },
          {
            id: 'q1-d',
            text: 'The Motor Strip; primary motor cortex and basal ganglia.',
          },
        ],
        correctOptionId: 'q1-b',
        explanation: 'Marcus Raichle et al. (2001) established that the Default Mode Network (mPFC, PCC, precuneus, angular gyrus) shows elevated metabolic activity during internally directed cognition and task-unrelated thought, contrasting with the task-positive Central Executive Network.',
        pedagogicalRationale: 'Validates neuroanatomical grounding of the Default Mode Network versus Central Executive Network.',
        evidenceNote: 'Raichle, M. E., et al. (2001). A default mode of brain function. PNAS, 98(2), 676–682.',
      },
      {
        id: 'q2-baird-low-load-finding',
        question: 'In the seminal investigation by Baird et al. (2012) evaluating incubation conditions on creative insight, which experimental condition elicited the highest breakthrough performance?',
        options: [
          {
            id: 'q2-a',
            text: 'Continuous focused effort with zero breaks.',
          },
          {
            id: 'q2-b',
            text: 'A demanding, high-load working memory task (GRE comprehension puzzles).',
          },
          {
            id: 'q2-c',
            text: 'An undemanding, low-cognitive-load task (casual walking / light sensorimotor activity) that allowed spontaneous mind-wandering.',
          },
          {
            id: 'q2-d',
            text: 'Passive sensory deprivation in a dark chamber with forced sleep.',
          },
        ],
        correctOptionId: 'q2-c',
        explanation: 'Baird et al. (2012) revealed that an undemanding task maximized creative insight (~40% improvement), as it lightly anchored sensory attention to prevent rumination while allowing the DMN to execute broad associative recombinations.',
        pedagogicalRationale: 'Tests empirical comprehension of the cognitive load sweet spot in creative incubation.',
        evidenceNote: 'Baird, B., et al. (2012). Inspired by distraction: mind wandering facilitates creative incubation. Psychological Science, 23(10), 1117–1122.',
      },
      {
        id: 'q3-spreading-activation-decay',
        question: 'According to Collins & Loftus (1975) and cognitive fixation research (Smith & Blankenship, 1991), why does taking an incubation break help resolve mental impasses?',
        options: [
          {
            id: 'q3-a',
            text: 'It causes the entire long-term memory store to be wiped clean.',
          },
          {
            id: 'q3-b',
            text: 'Dominant, misleading associations and mental sets decay rapidly from working memory ("fixation forgetting"), allowing diffuse, sub-threshold activation to propagate into remote semantic nodes.',
          },
          {
            id: 'q3-c',
            text: 'It raises prefrontal dopamine levels to maximum saturation, locking attention into a singular analytical beam.',
          },
          {
            id: 'q3-d',
            text: 'It transfers semantic memories directly from the hippocampus to muscle memory.',
          },
        ],
        correctOptionId: 'q3-b',
        explanation: 'According to Collins & Loftus (1975) and cognitive fixation research, during conscious fixation dominant erroneous paths produce lateral inhibition that silences remote possibilities. Stepping away allows dominant activations to decay faster than weak associative priming, enabling remote nodes to bind without interference.',
        pedagogicalRationale: 'Evaluates theoretical mechanics of semantic spreading activation and fixation forgetting.',
        evidenceNote: 'Collins, A. M., & Loftus, E. F. (1975). A spreading-activation theory of semantic memory. Psychological Review, 82(6), 407–428; Smith, S. M., & Blankenship, S. E. (1991). Incubation and the persistence of fixation in problem solving. American Journal of Psychology, 104(1), 61–87.',
      },
      {
        id: 'q4-rstg-gamma-signature',
        question: 'What neurophysiological event occurs in the brain approximately 300 milliseconds prior to a person consciously experiencing an "Aha!" insight moment (Bowden & Jung-Beeman, 2004)?',
        options: [
          {
            id: 'q4-a',
            text: 'A sudden drop in blood pressure in the occipital lobe.',
          },
          {
            id: 'q4-b',
            text: 'A sudden burst of high-frequency gamma-band (40 Hz) oscillation in the right anterior superior temporal gyrus (rSTG).',
          },
          {
            id: 'q4-c',
            text: 'A prolonged delta-wave shutdown across both prefrontal hemispheres.',
          },
          {
            id: 'q4-d',
            text: 'A massive spike in muscle tension in the cervical spine.',
          },
        ],
        correctOptionId: 'q4-b',
        explanation: 'Bowden and Jung-Beeman (2004) demonstrated that sudden insight is accompanied by a distinctive burst of gamma-band (40 Hz) EEG activity in the right anterior superior temporal gyrus (rSTG) ~300ms before subjective conscious awareness, reflecting the sudden binding of remote semantic concepts.',
        pedagogicalRationale: 'Tests precise neurophysiological knowledge of insight-specific gamma signatures.',
        evidenceNote: 'Bowden, E. M., & Jung-Beeman, M. (2004). Neural events observed in thin air: fMRI and ERP examine the neural mechanisms of insight. PLOS Biology, 2(4), e97.',
      },
    ],
  },
  practicalTask: {
    title: 'The 3-Phase Strategic Incubation & Impasse Breaking Protocol',
    summary: 'Implement a structured 3-phase incubation protocol on a real, high-friction technical, mathematical, or architectural roadblock currently in your workflow.',
    steps: [
      {
        id: 'task-step-1-impasse-verification',
        number: 1,
        title: 'Step 1: Saturated Preparation & Impasse Verification',
        prompt: 'Identify an intractable technical, scientific, or writing problem where forward progress has halted. Document: (1) The core problem statement, (2) The dominant mental sets or failed hypotheses you have repeatedly tried, and (3) Confirm verified impasse—you have exhausted obvious solutions and feel mental fatigue.',
        placeholder: 'Problem: Deadlock in distributed state reconciliation engine during network partition.\nAttempted Hypotheses: Vector clock comparison, Redis distributed mutex locking, gossip protocol resending.\nVerification of Impasse: Spent 2.5 hours testing millisecond timestamp tweaks while knowing deep down it does not resolve the race condition.',
        example: 'Problem: Memory leak in long-lived WebAssembly worker thread.\nAttempted: Manual heap profiling, nullifying references.\nImpasse: All obvious GC triggers fail to free memory.',
        cognitiveRationale: 'Sio & Ormerod (2009) showed incubation is ineffective without prior saturated preparation to impasse.',
      },
      {
        id: 'task-step-2-strategic-disengagement',
        number: 2,
        title: 'Step 2: Strategic Disengagement into Low-Load Sensorimotor Activity',
        prompt: 'Select and schedule an undemanding, low-cognitive-load activity for 20 to 30 minutes (Baird et al., 2012). Strictly avoid high-load tasks (no social media, no chess, no complex reading, no audiobooks). The activity must allow your perceptual attention to stay lightly anchored while your mind wanders.',
        placeholder: 'Selected Activity: 25-minute brisk outdoor walk through the botanical garden.\nDuration: 25 minutes.\nDevice Policy: Smartphone left in airplane mode inside pocket; zero headphones or podcasts.\nTarget Brain State: Salience Network switching to Default Mode Network (mPFC, PCC, angular gyrus).',
        example: 'Selected: Washing kitchen dishes and organizing desk stationery for 20 minutes.',
        cognitiveRationale: 'Undemanding tasks foster fixation forgetting and DMN activation while avoiding executive hijacking.',
      },
      {
        id: 'task-step-3-frictionless-capture',
        number: 3,
        title: 'Step 3: Frictionless Capture & Synthesis Architecture',
        prompt: 'Establish a zero-friction capture mechanism ready to record insights the second the rSTG binds the remote solution elements. Prepare an analog notebook or quick voice memo shortcut. Upon return to your desk, spend 10 minutes synthesizing any emerging connections.',
        placeholder: 'Capture Mechanism: Field Notes notebook + 0.5mm pen kept in outer coat pocket.\nCapture Rule: Write down any associative flash within 15 seconds of emergence without judging its feasibility.\nPost-Incubation Synthesis: 10 minutes at desk immediately following the walk to evaluate whether dominant mental sets have decayed and if novel architectural combinations have surfaced.',
        example: 'Capture Tool: Dedicated lock-screen voice memo widget with single-tap recording.',
        cognitiveRationale: 'Transient gamma bursts produce high-entropy initial traces that evaporate rapidly unless immediately externalized.',
      },
    ],
  },
};
