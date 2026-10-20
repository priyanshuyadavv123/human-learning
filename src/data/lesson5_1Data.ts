import type { Lesson } from '../types/learning.ts';

export const LESSON_LTP_SYNAPTIC_PLASTICITY: Lesson = {
  id: 'ltp-synaptic-plasticity',
  chapterId: 'ch-5-consolidation',
  number: '5.1',
  title: 'Long-Term Potentiation & Synaptic Plasticity',
  subtitle: 'Glutamate cascades, dendritic spine remodeling, and Hebbian wiring',
  readingTimeMinutes: 16,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'Why can a student cram 500 medical terms for 10 hours and pass an exam on Monday, yet recall fewer than 10% three weeks later? What is the exact biophysical boundary between a temporary electrical signal and a permanent physical change in brain tissue?',
    teaser: 'Memory is not stored in software bits. It is etched into living neural tissue through glutamate cascades, calcium influx, and structural dendritic spine enlargement.',
    hookNote: 'In 1973, Terje Lømo and Timothy Bliss discovered Long-Term Potentiation (LTP) in the rabbit hippocampus: high-frequency electrical stimulation caused a persistent, hours-long increase in synaptic transmission efficiency. Subsequent Nobel Prize-winning work by Eric Kandel revealed that memory exists in two distinct molecular states: Early-LTP (which relies on existing proteins and decays within hours) and Late-LTP (which requires gene transcription, CREB activation, and new protein synthesis to physically rebuild dendritic spines). Understanding this molecular switch reveals why massed cramming biologically cannot create durable knowledge.',
  },
  prediction: {
    prompt: 'Before exploring the biophysics of synaptic plasticity, test your neurobiological intuition: Two cohorts of learners study the same technical documentation for 6 total hours. Cohort Alpha studies in one continuous 6-hour cramming marathon. Cohort Beta splits the 6 hours into three 2-hour sessions spaced across 3 days with intervening sleep. What occurs at the molecular level in their hippocampal synapses?',
    context: 'Both cohorts spend the exact same total duration (360 minutes) studying identical computer architecture specs:',
    options: [
      {
        id: 'opt-massed-saturation',
        strategy: 'Protocol Alpha (Massed 6-Hour Cramming)',
        description: 'Synaptic strength increases continuously for 6 hours; continuous stimulation forces the maximum possible accumulation of neurotransmitters and permanent structural spines.',
      },
      {
        id: 'opt-decay-no-difference',
        strategy: 'Protocol Beta (Equivalent Synaptic Trace)',
        description: 'Both groups trigger identical synaptic changes because the total number of action potentials and glutamate molecules released is identical over 6 hours.',
      },
      {
        id: 'opt-spaced-creb-transcription',
        strategy: 'Protocol Gamma (Spaced Induction & Nuclear Transcription)',
        description: 'Massed stimulation saturates local postsynaptic receptors (Early-LTP) but triggers refractory molecular feedback that blocks gene transcription. Spaced stimulation allows intracellular kinase signaling to reach the cell nucleus, activating CREB and synthesis of Plasticity-Related Proteins (Late-LTP) that permanently remodel dendritic spines.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-spaced-creb-transcription',
      headline: 'Spaced Stimulation Triggers Nuclear CREB Activation and Late-LTP, While Massed Cramming Collapses into Transient Early-LTP Decay (Bliss & Lømo, 1973; Frey & Morris, 1997; Kandel, 2001).',
      explanation: 'Continuous massed stimulation (Protocol Alpha) activates existing AMPA and NMDA receptors, phosphorylating local CaMKII. However, without inter-trial intervals, intracellular phosphatase cascades (e.g. calcineurin) suppress gene transcription, causing synaptic strength to decay back to baseline within 24 to 48 hours (Early-LTP). In contrast, spaced reactivation (Protocol Gamma) allows cyclic AMP and MAPK/ERK cascades to translocate to the cell nucleus, activating transcription factor CREB-1. This initiates de novo synthesis of structural proteins (actin, tubulin, scaffold proteins) that physically enlarge dendritic spines into durable mushroom spines (Late-LTP).',
      optionFeedback: {
        'opt-massed-saturation': {
          title: 'Your Choice: Protocol Alpha (Massed Cramming Saturation)',
          verdict: 'The Early-LTP Saturation Illusion',
          analysis: 'Cramming produces a temporary surge in synaptic responsiveness because existing AMPA receptors are phosphorylated. However, because new structural proteins are not synthesized, the phosphorylated receptors are internalized within hours, leading to catastrophic forgetting.',
        },
        'opt-decay-no-difference': {
          title: 'Your Choice: Protocol Beta (Equivalent Synaptic Trace)',
          verdict: 'The Linear Energetics Fallacy',
          analysis: 'Synapses do not integrate total energy linearly. Intracellular signaling cascades operate with strict non-linear temporal dynamics. Spacing between stimulations is required for protein kinase A (PKA) and MAPK to overcome nuclear threshold barriers.',
        },
        'opt-spaced-creb-transcription': {
          title: 'Your Choice: Protocol Gamma (Spaced Induction & Nuclear Transcription)',
          verdict: 'Empirical Molecular Consensus',
          analysis: 'You correctly identified the biophysical mechanism: Late-LTP requires gene transcription and de novo protein synthesis orchestrated by CREB. Spaced stimulation provides the temporal dynamics necessary to set synaptic tags and capture newly synthesized plasticity proteins.',
        },
      },
      comparisons: [
        {
          label: 'Protocol Alpha (Massed 6-Hour Cramming)',
          immediateRetention: '85% (Phosphorylated AMPA receptors)',
          oneWeekRetention: '12% (Early-LTP dephosphorylation decay)',
          illusionRating: 'Extremely high (immediate fluency masks absence of protein synthesis)',
          isEmpiricalWinner: false,
        },
        {
          label: 'Protocol Beta (Linear Capacitor Model)',
          immediateRetention: 'Hypothetical / Flawed',
          oneWeekRetention: 'Hypothetical / Flawed',
          illusionRating: 'High (assumes biological synapses behave like static electronic memory)',
          isEmpiricalWinner: false,
        },
        {
          label: 'Protocol Gamma (Spaced Induction & CREB Activation)',
          immediateRetention: '80% (Robust initial encoding)',
          oneWeekRetention: '78% (Late-LTP structural dendritic enlargement)',
          illusionRating: 'Low / Calibrated (effortful recall triggers sustained nuclear transcription)',
          isEmpiricalWinner: true,
        },
      ],
      evidenceDistinction: 'Empirical Evidence Distinction: The transition from Early-LTP to Late-LTP is one of the most replicated findings in cellular neuroscience (Bliss & Lømo, 1973; Frey & Morris, 1997; Kandel, 2001). While cramming creates a potent subjective illusion of mastery by phosphorylating existing receptor channels, permanent dendritic remodeling strictly requires spaced inter-trial intervals that allow kinase cascades to reach the cell nucleus.',
    },
  },
  coreExplanations: [
    {
      id: 'hebbian-plasticity-bliss-lomo',
      title: '1. Donald Hebb & Bliss & Lømo’s Discovery of Long-Term Potentiation',
      tagline: 'From theoretical neural assemblies to empirical synaptic strengthening',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Foundational Neuroscience Consensus',
      summary: 'In 1949, Canadian neuropsychologist Donald Hebb postulated that when an axon of cell A repeatedly assists in firing cell B, some growth process or metabolic change takes place such that A\'s efficiency in firing B is increased ("cells that fire together wire together"). In 1973, Terje Lømo and Timothy Bliss provided the first direct experimental proof in the rabbit hippocampus, establishing Long-Term Potentiation (LTP) as the primary biological substrate of learning and memory.',
      mechanisms: [
        {
          label: 'The Hebbian Learning Rule (Hebb, 1949)',
          description: 'Hebb proposed that associative learning occurs through correlated pre- and postsynaptic activity. Synaptic connections are strengthened when presynaptic neurotransmitter release coincides with postsynaptic depolarization, forming durable functional neural assemblies.',
        },
        {
          label: 'Bliss & Lømo’s 1973 Hippocampal Discovery',
          description: 'Stimulating the perforant path in the rabbit hippocampus with a high-frequency tetanic pulse train produced a rapid, long-lasting increase in the magnitude of excitatory postsynaptic potentials (EPSPs) in the dentate gyrus. This potentiated state lasted for hours and days.',
        },
        {
          label: 'Synaptic Specificity & Cooperativity',
          description: 'LTP exhibits input specificity: only synapses that are actively stimulated are strengthened, preventing random cross-talk. It also requires cooperativity: a critical threshold of presynaptic fibers must fire simultaneously to achieve sufficient postsynaptic depolarization.',
        },
      ],
      keyInsight: 'Memory is not an ethereal concept; it is a measurable, physical increase in the electrical and biochemical conductivity of specific synapses.',
      simplifiedModelCaveat: 'The aphorism "cells that fire together wire together" is a simplification: if firing occurs asynchronously or out of order, synapses undergo Long-Term Depression (LTD), actively weakening the connection.',
    },
    {
      id: 'nmda-receptor-coincidence-detector',
      title: '2. The NMDA Receptor as a Molecular Coincidence Detector',
      tagline: 'How biophysics implements the logical AND gate of learning',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Biochemical Consensus',
      summary: 'The molecular engine of synaptic plasticity is the N-methyl-D-aspartate (NMDA) receptor. Unlike standard neurotransmitter receptors, the NMDA receptor operates as a biophysical coincidence detector: it requires two simultaneous events to open—presynaptic glutamate binding AND postsynaptic membrane depolarization to eject a blocking magnesium ion (Mg²⁺).',
      mechanisms: [
        {
          label: 'The Magnesium (Mg²⁺) Plug Mechanism',
          description: 'At resting membrane potential (-70 mV), extracellular magnesium ions (Mg²⁺) are electrostatically drawn into the NMDA receptor pore, physically plugging it even if glutamate is bound. Only when adjacent AMPA receptors depolarize the membrane to roughly -30 mV is the positively charged Mg²⁺ ion electrostatically expelled.',
        },
        {
          label: 'Calcium (Ca²⁺) Influx as the Second Messenger',
          description: 'Once the Mg²⁺ block is dislodged, calcium ions (Ca²⁺) flood into the postsynaptic dendritic spine. Calcium acts as a potent intracellular second messenger, binding to calmodulin and triggering the critical enzyme CaMKII (calcium/calmodulin-dependent protein kinase II).',
        },
        {
          label: 'AMPA Receptor Insertion & Synaptic Up-Regulation',
          description: 'Activated CaMKII undergoes autophosphorylation, locking itself into a persistently active state. CaMKII phosphorylates existing AMPA receptors (increasing their ion conductance) and drives vesicles loaded with fresh AMPA receptors into the postsynaptic density, doubling the synapse’s electrical sensitivity to future glutamate.',
        },
      ],
      keyInsight: 'The NMDA receptor is nature’s hardware logic gate. Learning requires strong simultaneous activation: weak or passive exposure never dislodges the magnesium plug, producing zero calcium influx and zero learning.',
      simplifiedModelCaveat: 'Too much calcium influx is neurotoxic (excitotoxicity) and can trigger apoptotic cell death, which is why synaptic calcium levels are tightly buffered by intracellular pumps.',
    },
    {
      id: 'early-vs-late-ltp-creb-cascade',
      title: '3. Early-LTP vs Late-LTP: The Molecular Boundary of Permanent Mastery',
      tagline: 'The transcriptional switch between transient recall and permanent dendritic remodeling',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Nobel-Recognized Molecular Framework',
      summary: 'LTP unfolds in two biologically distinct phases. Early-LTP (E-LTP) lasts 1 to 3 hours, relying strictly on post-translational modification of existing proteins; it explains why cramming produces short-term exam success followed by rapid forgetting. Late-LTP (L-LTP) lasts days, months, or years, requiring gene expression, CREB transcription factor activation, and the structural enlargement of dendritic spines into permanent "mushroom" spines.',
      mechanisms: [
        {
          label: 'Early-LTP: Post-Translational Modification (1–3 Hours)',
          description: 'Induced by a single high-frequency train. CaMKII and protein kinase C phosphorylate existing AMPA receptors. No new proteins are synthesized. Protein phosphatases gradually dephosphorylate the receptors, returning synaptic strength to baseline within a few hours.',
        },
        {
          label: 'The Synaptic Tagging & Capture Hypothesis (Frey & Morris, 1997)',
          description: 'Active stimulation sets a temporary biochemical "synaptic tag" at the stimulated synapse. Only if nuclear signaling triggers the synthesis of Plasticity-Related Proteins (PRPs) are those proteins "captured" by tagged synapses to permanently lock in the structural enhancement.',
        },
        {
          label: 'Late-LTP: Nuclear CREB Activation & Structural Remodeling (Days to Decades)',
          description: 'Repeated, spaced activations generate sustained PKA and MAPK signaling that translocates into the cell nucleus. PKA phosphorylates CREB-1 (cAMP response element-binding protein), driving transcription of mRNA and synthesis of actin, tubulin, and scaffolding proteins. The dendritic spine physically expands into a stable "mushroom spine."',
        },
      ],
      keyInsight: 'Cramming gives you Early-LTP: you feel competent because AMPA receptors are temporarily phosphorylated, but you have triggered zero gene transcription. Long-term mastery requires spaced reactivation to activate CREB and synthesize structural spine proteins.',
      simplifiedModelCaveat: 'Dendritic spines remain dynamic throughout life. Even Late-LTP traces require periodic spaced reactivation across months and years to prevent gradual synaptic remodeling and pruning.',
    },
  ],
  diagram: {
    title: 'The Synaptic Plasticity & LTP Induction Pipeline',
    subtitle: 'From resting state glutamate release to nuclear CREB transcription and dendritic spine enlargement',
    stages: [
      {
        id: 'stage-resting-basal',
        name: 'Stage 1: Basal Transmission & Resting State (-70 mV)',
        subtitle: 'The Electrostatic Magnesium Lock',
        capacity: 'Resting membrane state',
        duration: 'Baseline condition',
        role: 'Presynaptic terminal releases basal glutamate across the 20nm synaptic cleft. Glutamate binds to AMPA and NMDA receptors. AMPA channels open slightly, but NMDA channels remain completely plugged by extracellular Mg²⁺ ions.',
        failureMode: 'Passive reading: Low-intensity stimulation releases sparse glutamate, failing to depolarize the dendrite past -65 mV; the Mg²⁺ plug remains firmly seated.',
        evidenceType: 'Empirical consensus (Mayer et al., 1984; Nowak et al., 1984)',
        practicalFix: 'Engage in active, effortful generation rather than passive skimming to drive high-frequency presynaptic firing.',
      },
      {
        id: 'stage-depolarization-unblocking',
        name: 'Stage 2: Strong Depolarization & Magnesium Ejection',
        subtitle: 'Unlocking the NMDA Coincidence Detector',
        capacity: 'Membrane threshold (-30 mV)',
        duration: '10–50 milliseconds',
        role: 'Sustained, high-frequency glutamate release opens multiple AMPA receptors, allowing massive sodium (Na⁺) influx. The postsynaptic membrane depolarizes from -70 mV to -30 mV. The positive internal charge electrostatically expels the Mg²⁺ plug from the NMDA pore.',
        failureMode: 'Divided attention: Incomplete presynaptic coordination fails to reach the critical cooperativity threshold; Mg²⁺ remains in the pore.',
        evidenceType: 'Empirical consensus (Bliss & Collingridge, 1993)',
        practicalFix: 'Eliminate task-switching distractions during study to ensure focused, synchronized neural firing.',
      },
      {
        id: 'stage-calcium-camkii-eltp',
        name: 'Stage 3: Calcium Influx & CaMKII Activation (Early-LTP)',
        subtitle: 'Rapid AMPA Trafficking & Phosphorylation',
        capacity: 'Intracellular calcium surge',
        duration: '1–3 hours duration',
        role: 'Calcium (Ca²⁺) rushes through the unblocked NMDA channel into the dendritic spine head. Ca²⁺ binds to calmodulin, activating CaMKII. CaMKII phosphorylates existing AMPA receptors and drives intracellular AMPA storage vesicles into the postsynaptic density.',
        failureMode: 'The Crammer’s Trap: Synapse is now twice as responsive, creating an intense feeling of mastery, but no new structural proteins have been synthesized yet.',
        evidenceType: 'Empirical consensus (Malenka & Nicoll, 1999; Lisman et al., 2002)',
        practicalFix: 'Recognize that immediate fluency is merely phosphorylated E-LTP; schedule spaced reviews before the trace decays.',
      },
      {
        id: 'stage-nuclear-creb-late-ltp',
        name: 'Stage 4: Nuclear Translocation & CREB Transcription (Late-LTP)',
        subtitle: 'Physical Dendritic Spine Remodeling',
        capacity: 'Genome-wide transcription',
        duration: 'Hours to permanent decades',
        role: 'Spaced reactivation signals travel down the dendrite via MAPK/ERK and PKA into the cell nucleus, phosphorylating transcription factor CREB-1. The cell synthesizes new mRNA and Plasticity-Related Proteins (PRPs). These proteins travel back to tagged synapses, physically expanding the dendritic spine into a permanent mushroom spine.',
        failureMode: 'Massed cramming without spacing or sleep: Intracellular phosphatases suppress nuclear translocation; E-LTP dissolves within 24 hours.',
        evidenceType: 'Empirical consensus (Frey & Morris, 1997; Kandel, 2001)',
        practicalFix: 'Space study sessions across days and protect 7–8 hours of slow-wave sleep to permit nuclear protein synthesis and spine consolidation.',
      },
    ],
    feedbackLoopDescription: 'Once Late-LTP has enlarged the dendritic spine, future baseline glutamate releases generate vastly larger EPSPs with minimal cognitive effort, automating the neural circuit.',
  },
  exercise: {
    title: 'Synaptic Plasticity Diagnostic & Molecular Failure Analysis',
    instruction: 'Analyze four real-world study failure scenarios. Identify which neurobiological bottleneck or molecular failure mode caused the learning breakdown and prescribe the evidence-based remedy.',
    categories: [
      {
        id: 'attention-bottleneck',
        title: 'NMDA Coincidence Failure (Sub-Threshold Depolarization)',
        description: 'Presynaptic stimulation was too weak or disorganized to eject the magnesium plug, resulting in zero calcium influx.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'working-memory-overload',
        title: 'Early-LTP Decay (Phosphatase Dephosphorylation)',
        description: 'AMPA receptors were temporarily phosphorylated by massed cramming, but decayed within 24 hours due to absence of protein synthesis.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Synaptic Tag Expiration (Failed PRP Capture)',
        description: 'Initial learning tagged the synapse, but review was delayed so long that the synaptic tag degraded before plasticity proteins arrived.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Glucocorticoid LTP Blockade (Stress-Induced LTD)',
        description: 'Excessive cortisol and stress hormones blocked NMDA receptor activation and triggered calcineurin-mediated synaptic weakening.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-allnighter-pharmacology-crash',
        realWorldContext: 'Medical School Pharmacology Exam',
        scenario: 'Maya spent 14 straight hours on Sunday night cramming 120 antibiotic mechanisms of action. On Monday at 9:00 AM, she passed the exam with an 86%. Three weeks later during hospital clinical rounds, when the attending physician asked her about the same antibiotics, Maya could not remember a single mechanism.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'Maya suffered from pure Early-LTP Decay. Continuous massed cramming phosphorylated local AMPA receptors, creating temporary electrical potentiation that lasted just long enough for Monday morning\'s exam. However, because she skipped sleep and never spaced her retrieval, intracellular CREB transcription was never activated, and no structural plasticity proteins were synthesized. Within 48 hours, protein phosphatases dephosphorylated the AMPA receptors, erasing the synaptic trace.',
        evidenceBasedFix: 'Replace the 14-hour marathon with four 2-hour spaced retrieval sessions over two weeks, allowing MAPK/PKA nuclear signaling to activate CREB and synthesize structural dendritic spine proteins.',
      },
      {
        id: 'scen-passive-highlighter-autopilot',
        realWorldContext: 'Cloud Architecture Certification',
        scenario: 'David spent 4 hours reading an AWS networking textbook while highlighting key terms in neon yellow. He felt very calm and relaxed. The next day, when presented with a blank diagram and asked to design a multi-region VPC with transit gateways from scratch, he was completely unable to draw the connections.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'David experienced NMDA Coincidence Failure. Passive reading and highlighting produce low-frequency, uncoordinated presynaptic glutamate release. Postsynaptic membrane potential never reached the -30 mV threshold required to electrostatically dislodge the Mg²⁺ plug. With NMDA receptors blocked, zero calcium entered his dendritic spines, and zero CaMKII was activated.',
        evidenceBasedFix: 'Switch from highlighting to uncued generative recall: close the book, draw the VPC routing topology from memory on a blank whiteboard, forcing intense coordinated presynaptic firing.',
      },
      {
        id: 'scen-six-month-abandoned-repo',
        realWorldContext: 'Distributed Systems Open Source Project',
        scenario: 'Elena spent a weekend intensely studying the Raft consensus algorithm code, understanding how leader election and log replication work. She intended to contribute, but got busy and didn\'t look at Raft code again for 6 months. When she returned, the codebase looked completely foreign, and she had to relearn everything from scratch.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'Elena experienced Synaptic Tag Expiration. Frey & Morris (1997) proved that synaptic tags have a biological half-life of 1 to 2 hours. While Elena set initial synaptic tags during her weekend study, she never provided the spaced reinforcing stimulations needed to capture Plasticity-Related Proteins across weeks, allowing the tags to expire and the synaptic connections to undergo long-term depression (LTD).',
        evidenceBasedFix: 'Implement an expanding spaced review schedule (reviewing Raft consensus state machines after 3 days, 10 days, and 30 days) to repeatedly restabilize synaptic tags before structural decay occurs.',
      },
      {
        id: 'scen-panic-interview-whiteboard',
        realWorldContext: 'Silicon Valley Technical Interview',
        scenario: 'Alex spent months preparing algorithms. But when standing at the whiteboard with two intimidating senior interviewers staring at him with stopwatches, Alex felt his heart racing, palms sweating, and his mind went completely blank. He couldn\'t even write a simple binary search algorithm that he had coded dozens of times.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'Alex suffered from Glucocorticoid LTP Blockade. Acute high-stakes panic floods the brain with massive surges of norepinephrine and glucocorticoids (cortisol). High concentrations of glucocorticoids bind to hippocampal mineralocorticoid and glucocorticoid receptors, rapidly blocking NMDA receptor-mediated LTP and activating calcineurin/PP1 phosphatase cascades, which induce Long-Term Depression (LTD) and acute retrieval failure.',
        evidenceBasedFix: 'Use somatic physiological sighing (two quick inhales through the nose followed by a long, slow exhale through the mouth) to down-regulate sympathetic arousal and re-establish prefrontal-hippocampal communication.',
      },
    ],
  },
  quiz: {
    title: 'Long-Term Potentiation & Synaptic Plasticity Assessment',
    instruction: 'Verify your mastery of Hebbian learning, NMDA coincidence detection, CaMKII activation, and the molecular distinction between Early-LTP and Late-LTP.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-nmda-coincidence-detection',
        question: 'Why is the NMDA receptor characterized in neurobiology as a "molecular coincidence detector"?',
        options: [
          {
            id: 'q1-a',
            text: 'It opens only when presynaptic glutamate binds simultaneously with postsynaptic membrane depolarization sufficient to eject the blocking magnesium (Mg²⁺) ion.',
          },
          {
            id: 'q1-b',
            text: 'It opens randomly whenever dopamine is present in the bloodstream.',
          },
          {
            id: 'q1-c',
            text: 'It operates as an electrical diode that only conducts electricity in one physical direction regardless of chemical binding.',
          },
          {
            id: 'q1-d',
            text: 'It is triggered exclusively when the learner experiences high subjective confidence.',
          },
        ],
        correctOptionId: 'q1-a',
        explanation: 'The NMDA receptor requires two simultaneous biological events to open: 1) presynaptic release and binding of neurotransmitter glutamate, AND 2) postsynaptic depolarization (typically mediated by adjacent AMPA receptors) to -30 mV, which electrostatically expels the positively charged Mg²⁺ ion that blocks the channel pore (Mayer et al., 1984; Bliss & Collingridge, 1993).',
        pedagogicalRationale: 'Clarifies the exact biophysical mechanism that requires active mental effort to trigger synaptic learning.',
        evidenceNote: 'Bliss, T. V., & Collingridge, G. L. (1993). A synaptic model of memory: long-term potentiation in the hippocampus. Nature, 361(6407), 31-39.',
      },
      {
        id: 'q2-early-vs-late-ltp-switch',
        question: 'What is the primary molecular distinction between Early-LTP (E-LTP) and Late-LTP (L-LTP)?',
        options: [
          {
            id: 'q2-a',
            text: 'Early-LTP relies on post-translational modification of existing AMPA receptors and decays within hours; Late-LTP requires nuclear CREB transcription and de novo protein synthesis to structurally enlarge dendritic spines.',
          },
          {
            id: 'q2-b',
            text: 'Early-LTP occurs in the spinal cord, while Late-LTP occurs in the visual cortex.',
          },
          {
            id: 'q2-c',
            text: 'Early-LTP lasts for 10 years, whereas Late-LTP decays after 15 minutes.',
          },
          {
            id: 'q2-d',
            text: 'There is no molecular difference; Early and Late LTP are merely pedagogical metaphors with no biological basis.',
          },
        ],
        correctOptionId: 'q2-a',
        explanation: 'Early-LTP relies strictly on kinase phosphorylation (CaMKII, PKC) of existing proteins and trafficking of pre-formed AMPA receptors, lasting only 1 to 3 hours without gene transcription. In contrast, Late-LTP requires nuclear translocation of PKA/MAPK, phosphorylation of CREB-1, and de novo protein synthesis that physically remodels dendritic spines into stable mushroom spines (Frey & Morris, 1997; Kandel, 2001).',
        pedagogicalRationale: 'Teaches learners why cramming produces short-lived recall that collapses within 48 hours without spaced reactivation.',
        evidenceNote: 'Kandel, E. R. (2001). The molecular biology of memory storage: a dialogue between genes and synapses. Science, 294(5544), 1030-1038.',
      },
      {
        id: 'q3-hebbian-bliss-lomo-origins',
        question: 'What foundational empirical discovery did Terje Lømo and Timothy Bliss make in 1973 in the rabbit hippocampus?',
        options: [
          {
            id: 'q3-a',
            text: 'High-frequency electrical stimulation of the perforant path produced a persistent, long-lasting increase in synaptic transmission efficiency (Long-Term Potentiation).',
          },
          {
            id: 'q3-b',
            text: 'Human memory capacity is limited to exactly four chunks in working memory.',
          },
          {
            id: 'q3-c',
            text: 'Synapses never change their strength after embryological development.',
          },
          {
            id: 'q3-d',
            text: 'Brain cells communicate primarily via gravitational acoustic waves rather than electrochemical signals.',
          },
        ],
        correctOptionId: 'q3-a',
        explanation: 'Bliss and Lømo (1973) stimulated the perforant path in the rabbit hippocampus with brief high-frequency tetani and recorded excitatory postsynaptic potentials (EPSPs) in the dentate gyrus. They observed a sustained, multi-hour increase in synaptic transmission efficiency, proving Donald Hebb\'s 1949 hypothesis that synapses undergo long-lasting activity-dependent potentiation.',
        pedagogicalRationale: 'Anchors learning science in landmark empirical experimental physiology rather than speculative pop-psychology.',
        evidenceNote: 'Bliss, T. V., & Lømo, T. (1973). Long-lasting potentiation of synaptic transmission in the dentate area of the anaesthetized rabbit following stimulation of the perforant path. The Journal of Physiology, 232(2), 331-356.',
      },
      {
        id: 'q4-synaptic-tagging-capture',
        question: 'According to Frey & Morris’s (1997) "Synaptic Tagging and Capture" hypothesis, how does a neuron ensure that newly synthesized proteins reach only the specific synapses that were activated?',
        options: [
          {
            id: 'q4-a',
            text: 'Active synapses set a local, temporary biochemical tag that binds and captures cell-wide Plasticity-Related Proteins (PRPs) synthesized in the cell body.',
          },
          {
            id: 'q4-b',
            text: 'Every single dendritic spine possesses its own dedicated cell nucleus and ribosomes that synthesize proteins locally without the main cell body.',
          },
          {
            id: 'q4-c',
            text: 'Proteins are broadcast randomly throughout the bloodstream and absorbed through skull pores.',
          },
          {
            id: 'q4-d',
            text: 'Neurons destroy all other synapses in the brain whenever one synapse is stimulated.',
          },
        ],
        correctOptionId: 'q4-a',
        explanation: 'Frey and Morris (1997) resolved a central paradox in neuroscience: mRNAs and proteins are synthesized centrally in the soma, yet LTP is input-specific. They demonstrated that synaptic stimulation creates a localized, transient "synaptic tag" at the stimulated spine. When nuclear CREB activation releases Plasticity-Related Proteins throughout the neuron, only tagged spines can capture these proteins and undergo structural consolidation.',
        pedagogicalRationale: 'Explains how the nervous system balances cell-wide genetic transcription with laser-focused, input-specific synaptic modification.',
        evidenceNote: 'Frey, U., & Morris, R. G. (1997). Synaptic tagging and long-term potentiation. Nature, 385(6616), 533-536.',
      },
    ],
  },
  practicalTask: {
    title: 'The Synaptic Consolidation Protocol',
    summary: 'A 3-step practical engineering protocol to systematically trigger NMDA coincidence detection, set synaptic tags, and activate nuclear Late-LTP consolidation.',
    steps: [
      {
        id: 'step-drive-synaptic-coincidence',
        number: 1,
        title: 'Drive High-Voltage Synaptic Coincidence via Uncued Generation',
        prompt: 'Formulate an uncued retrieval exercise that forces strong postsynaptic depolarization and dislodges NMDA magnesium blocks for your current topic:',
        placeholder: 'e.g., Topic: Raft Consensus. Protocol: Close all documentation. On a blank whiteboard, draw the complete leader election state machine, including RequestVote RPC parameters, term increment logic, and split-vote timers from memory...',
        example: 'Topic: Rust Ownership & Lifetimes. Protocol: Close docs. Write from memory the exact rules for borrow checker aliasing XOR mutability, draft a custom linked-list node struct, and annotate lifetime parameters without looking at compiler errors.',
        cognitiveRationale: 'Passive reading generates weak, sub-threshold EPSPs that leave magnesium plugs in place. Effortful generative recall drives coordinated high-frequency presynaptic firing, ejecting Mg²⁺ and triggering massive calcium influx.',
      },
      {
        id: 'step-tag-and-space-creb',
        number: 2,
        title: 'Space Rehearsals to Synchronize Synaptic Tags with CREB Waves',
        prompt: 'Design a 3-interval schedule (Session 1, Session 2 at +24h, Session 3 at +72h) to capture newly synthesized Plasticity-Related Proteins before synaptic tags expire:',
        placeholder: 'e.g., Session 1 (Monday 9 AM): Initial active generation and error feedback (sets synaptic tags). Session 2 (Tuesday 9 AM): 15-minute uncued test (re-stimulates tags, captures nuclear proteins). Session 3 (Friday 9 AM): Varied application test (Late-LTP spine stabilization)...',
        example: 'Day 1 (Initial Encoding): 45-minute deep generative study sprint. Day 2 (+24h): 10-minute uncued flashcard retrieval session. Day 4 (+72h): 15-minute code implementation without reference docs.',
        cognitiveRationale: 'Synaptic tags have a biological half-life of 1–2 hours. Spaced restimulations ensure that transcription factor CREB-1 is phosphorylated, synthesizing structural actin and scaffold proteins to enlarge dendritic spines into permanent mushroom spines.',
      },
      {
        id: 'step-protect-nuclear-window',
        number: 3,
        title: 'Quarantine the Nuclear Consolidation Window with Rest and Sleep',
        prompt: 'Define your post-study rest protocol to protect the 4-hour post-encoding window from retroactive interference and ensure slow-wave sleep consolidation:',
        placeholder: 'e.g., Immediately following study sprint: 15 minutes of non-focused walk without audio/phone. Evening: No intense competing technical study within 2 hours of bedtime; ensure 8 hours in bed for slow-wave hippocampal replay...',
        example: 'End study session with 10-minute mindful rest (zero screen time). Ensure 7.5+ hours of uninterrupted sleep tonight to allow hippocampal sharp-wave ripples to trigger neocortical systems consolidation.',
        cognitiveRationale: 'Nuclear gene transcription and dendritic spine restructuring require metabolic energy and protein synthesis that peak during non-REM slow-wave sleep. Competing cognitive load or sleep deprivation truncates Late-LTP.',
      },
    ],
  },
};
