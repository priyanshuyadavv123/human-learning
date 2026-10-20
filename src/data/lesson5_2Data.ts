import type { Lesson } from '../types/learning.ts';

export const LESSON_HIPPOCAMPAL_NEOCORTICAL_DIALOGUE: Lesson = {
  id: 'hippocampal-neocortical-dialogue',
  chapterId: 'ch-5-consolidation',
  number: '5.2',
  title: 'Hippocampal-Neocortical Dialogue',
  subtitle: 'System-level migration from temporary index to distributed network',
  readingTimeMinutes: 18,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'In 1953, a 27-year-old patient named Henry Molaison (H.M.) underwent bilateral resection of his medial temporal lobes. After surgery, he could vividly describe events from his childhood 15 years earlier, yet he could not form a single new conscious memory and forgot his doctors the moment they left the room. Why did destroying his hippocampus erase recent memories while leaving his childhood memories completely intact?',
    teaser: 'Memory does not stay where it is first encoded. It undertakes an epic, years-long migration from a fragile hippocampal index to an autonomous neocortical web.',
    hookNote: 'William Scoville and Brenda Milner’s (1957) study of Patient H.M. established the foundation of modern memory neuroscience. It proved that the hippocampus is not the permanent storage vault of knowledge, but a temporary indexing engine. In the 1990s, McClelland, McNaughton, and O’Reilly formalized the Complementary Learning Systems (CLS) framework, explaining why human biology requires two distinct learning systems: a fast hippocampal learner to capture unique daily episodes without overwriting past knowledge, and a slow neocortical learner that gradually integrates invariant schemas over months through offline replay.',
  },
  prediction: {
    prompt: 'Before analyzing system-level memory consolidation, test your cognitive architecture intuition: Imagine human neurobiology evolved without a separate hippocampal buffer, forcing all new experiences and study material to be encoded directly and immediately into the neocortex at a very high synaptic learning rate. What would be the catastrophic consequence for human intelligence?',
    context: 'Assume all cortical synapses have infinite storage capacity, but new synaptic weights must be adjusted rapidly to record new information instantly:',
    options: [
      {
        id: 'opt-photographic-mastery',
        strategy: 'System Alpha (Instant Photographic Plasticity)',
        description: 'Humans would possess instantaneous photographic memory; every lecture, book, and conversation would be permanently etched into cortical long-term memory on a single pass without rehearsal.',
      },
      {
        id: 'opt-catastrophic-interference-cls',
        strategy: 'System Beta (Catastrophic Interference & Schema Erasure)',
        description: 'Rapid direct weight updates in the neocortex would cause "Catastrophic Interference" (McClelland et al., 1995): writing new detailed data immediately into shared cortical networks would catastrophically overwrite, corrupt, and erase existing consolidated concepts, language, and schemas.',
      },
      {
        id: 'opt-sensory-overheat',
        strategy: 'System Gamma (Metabolic Glia Overload)',
        description: 'The physical neocortex would run out of oxygen and glucose within 10 minutes, causing fainting spells whenever encountering unfamiliar topics.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-catastrophic-interference-cls',
      headline: 'Without a Hippocampal Buffer, Rapid Direct Cortical Learning Causes Catastrophic Interference—Overwriting Existing Knowledge (McClelland, McNaughton, & O\'Reilly, 1995; CLS Theory).',
      explanation: 'In connectionist artificial neural networks and biological brains alike, knowledge is stored in overlapping distributed weights. McClelland, McNaughton, and O\'Reilly (1995) proved that if a distributed neocortical network learns rapidly, new episodic adjustments immediately overwrite and destroy previously learned statistical regularities (Catastrophic Forgetting/Interference). Evolution solved this with a dual-memory architecture (Complementary Learning Systems): 1) the Hippocampus learns rapidly with sparse, orthogonal representations to hold temporary memories without interference; and 2) during offline sleep and rest, the hippocampus repeatedly "replays" these memories to the Neocortex at a slow, interleaved rate, seamlessly integrating new concepts into existing schemas.',
      optionFeedback: {
        'opt-photographic-mastery': {
          title: 'Your Choice: System Alpha (Instant Photographic Plasticity)',
          verdict: 'The Connectionist Overwrite Fallacy',
          analysis: 'Sounds enticing, but mathematically impossible in distributed associative networks. If synapses update fast enough to encode a unique episode immediately, the new weights distort the delicate weight configurations supporting language, facial recognition, and core mental schemas.',
        },
        'opt-catastrophic-interference-cls': {
          title: 'Your Choice: System Beta (Catastrophic Interference & Schema Erasure)',
          verdict: 'Empirical Cognitive Science Consensus (CLS Framework)',
          analysis: 'Spot on! You identified the foundational principle of Complementary Learning Systems (CLS). The hippocampus is an essential biological isolation buffer that prevents new memories from wrecking older consolidated semantic structures.',
        },
        'opt-sensory-overheat': {
          title: 'Your Choice: System Gamma (Metabolic Glia Overload)',
          verdict: 'Plausible Energetics, Incorrect Mechanism',
          analysis: 'While the brain consumes ~20% of resting metabolic energy, the computational bottleneck is representational interference in overlapping synaptic weights, not acute thermal or glucose exhaustion.',
        },
      },
      comparisons: [
        {
          label: 'Single Fast Cortical Learner (Direct Encoding)',
          immediateRetention: '100% (Instant capture)',
          oneWeekRetention: '0% (Catastrophic collapse of prior knowledge)',
          illusionRating: 'Extremely high (new learning instantly erases older schemas)',
          isEmpiricalWinner: false,
        },
        {
          label: 'Single Slow Cortical Learner (No Buffer)',
          immediateRetention: '5% (Incapable of episodic recall)',
          oneWeekRetention: '4% (Cannot record single-trial events)',
          illusionRating: 'Low (cannot remember where you parked your car)',
          isEmpiricalWinner: false,
        },
        {
          label: 'Complementary Dual System (Hippocampus + Neocortex)',
          immediateRetention: '95% (Sparse hippocampal index)',
          oneWeekRetention: '85% (Gradual interleaved neocortical consolidation)',
          illusionRating: 'Calibrated (preserves past schemas while capturing new episodes)',
          isEmpiricalWinner: true,
        },
      ],
      evidenceDistinction: 'Empirical Evidence Distinction: The Complementary Learning Systems (CLS) framework is one of the most celebrated unifications in cognitive science (McClelland et al., 1995; Kumaran et al., 2016). It explains both neuropsychological amnesia in humans and the catastrophic forgetting challenge in modern artificial deep neural networks.',
    },
  },
  coreExplanations: [
    {
      id: 'patient-hm-temporally-graded-amnesia',
      title: '1. Scoville & Milner’s Patient H.M. & Temporally Graded Retrograde Amnesia',
      tagline: 'How a surgical lesion revealed the temporal dynamics of systems consolidation',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Foundational Neuropsychological Consensus',
      summary: 'In 1957, neurosurgeon William Scoville and neuropsychologist Brenda Milner published their historic report on Patient H.M. (Henry Molaison). Following bilateral removal of his medial temporal lobes to treat intractable epilepsy, H.M. suffered dense anterograde amnesia (inability to form new declarative memories) and temporally graded retrograde amnesia (loss of recent pre-operative memories with full preservation of remote childhood memories), proving Ribot’s Law and demonstrating that memory consolidation takes years to complete.',
      mechanisms: [
        {
          label: 'Anterograde Amnesia vs Preserved Procedural Learning',
          description: 'H.M. could not remember meeting Milner even after decades of daily testing. Yet, when trained on the mirror-tracing task (a motor skill), his error rate dropped dramatically day over day despite having zero conscious recollection of ever seeing the apparatus, proving declarative and non-declarative memory rely on distinct neural systems.',
        },
        {
          label: 'Temporally Graded Retrograde Amnesia (Ribot’s Law)',
          description: 'H.M. lost memories from the 1–3 years immediately preceding his surgery, but retained crystal-clear memories from his teenage years and early childhood. This temporal gradient proved that memories initially depend upon the medial temporal lobe, but over time become independent of it.',
        },
        {
          label: 'The Hippocampus as a Temporary Time-Limited Structure',
          description: 'Because childhood memories survived the complete surgical ablation of both hippocampi, the permanent repository of remote semantic and autobiographical knowledge must reside in the distributed neocortex, not the hippocampus.',
        },
      ],
      keyInsight: 'The hippocampus is not the permanent hard drive of your mind. It is a temporary indexing directory that gradually trains the cerebral cortex before stepping aside.',
      simplifiedModelCaveat: 'While remote semantic facts become completely hippocampal-independent, Multiple Trace Theory shows that rich, detailed episodic autobiographical memories often continue to recruit hippocampal networks during vivid re-experiencing throughout life.',
    },
    {
      id: 'hippocampal-indexing-and-cls',
      title: '2. The Hippocampal Indexing Theory & Complementary Learning Systems',
      tagline: 'Pointers, sparse codes, and the biological prevention of catastrophic forgetting',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Computational & Cognitive Architecture Consensus',
      summary: 'How does the brain record a multisensory experience without cross-talk? Teyler & DiScenna (1986) introduced the Hippocampal Indexing Theory: the hippocampus does not store raw sensory images, sounds, or words; it stores a compact, sparse "pointer" or index that binds together the distributed neocortical areas activated during the event. McClelland, McNaughton, and O’Reilly (1995) extended this into the Complementary Learning Systems (CLS) framework.',
      mechanisms: [
        {
          label: 'The Hippocampal Indexing Model (Teyler & Rudy, 2007)',
          description: 'When you study an architectural diagram, visual features fire in the occipital lobe, semantic concepts in the temporal lobe, and spatial relationships in the parietal lobe. The hippocampus forms a sparse, low-dimensional index vector that links these disparate cortical nodes together.',
        },
        {
          label: 'Pattern Completion via the Hippocampal Index',
          description: 'When presented with a partial cue (e.g. a snippet of code), the cue activates the hippocampal index. The index rapidly fires top-down back-projections to all corresponding neocortical areas, reconstructing the complete original multisensory memory state (Pattern Completion).',
        },
        {
          label: 'The Complementary Learning Systems Dilemma (McClelland et al., 1995)',
          description: 'The brain faces a stability-plasticity dilemma. To avoid catastrophic forgetting, the Hippocampus acts as a fast-learning episodic buffer (high plasticity, sparse codes), while the Neocortex acts as a slow-learning structured integrator (low plasticity, dense overlapping schemas). Systems consolidation is the slow transfer of knowledge from buffer to schema.',
        },
      ],
      keyInsight: 'Your study notes or diagrams trigger recall by activating hippocampal index pointers. But true mastery occurs when the neocortical nodes build direct cross-connections, allowing you to reason about concepts without relying on fragile episodic recall.',
      simplifiedModelCaveat: 'The hippocampal index does not send raw data files to the neocortex; it sends synchronized oscillatory bursts (sharp-wave ripples) that co-activate cortical columns until direct cortico-cortical synapses potentiate.',
    },
    {
      id: 'standard-consolidation-vs-multiple-trace',
      title: '3. Standard Consolidation Theory vs Multiple Trace & Transformation Theory',
      tagline: 'From episodic particulars to abstract, invariant neocortical schemas',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Modern Neurobiological Consensus',
      summary: 'For decades, the Standard Consolidation Theory (SCT; Squire & Alvarez, 1995) asserted that memories are copied faithfully from the hippocampus to the neocortex. Modern cognitive neuroscience—pioneered by Nadel & Moscovitch’s Multiple Trace Theory (MTT, 1997) and Winocur & Moscovitch’s Transformation Hypothesis (2011)—reveals that memory is fundamentally transformed during consolidation: rich episodic traces remain in the hippocampus, while the neocortex extracts statistical invariants and general schemas.',
      mechanisms: [
        {
          label: 'Standard Consolidation Theory (SCT; Squire, 1992)',
          description: 'Posits that memory traces in the neocortex gradually develop direct synaptic links through repetitive co-activation. Once established, the memory is an exact replica of the original trace, and the hippocampal component naturally fades away.',
        },
        {
          label: 'Multiple Trace Theory (MTT; Nadel & Moscovitch, 1997)',
          description: 'Every time a memory is retrieved, a new hippocampal trace is laid down, creating multiple overlapping traces that make older memories more resilient to partial brain injury. Truly context-rich episodic memories remain hippocampal-dependent indefinitely.',
        },
        {
          label: 'The Transformation Hypothesis: Episodic to Semantic Schemas',
          description: 'Over time and multiple sleep cycles, the neocortex extracts the abstract statistical "gist" (semantic schema), discarding idiosyncratic episodic context. You remember that $E=mc^2$ or how a hash table works (neocortical schema) without remembering the clothes you wore or the room temperature when you first read it.',
        },
      ],
      keyInsight: 'Learning transforms episodes into schemas. High-performance learning accelerates this dialogue by varying study contexts, stripping away irrelevant superficial cues, and forcing the neocortex to extract invariant structural principles.',
      simplifiedModelCaveat: 'Schema extraction requires sleep and spaced retrieval. If you cram in a single context without delay or sleep, knowledge remains bound to that single episodic setting and fails to transfer to novel engineering problems.',
    },
  ],
  diagram: {
    title: 'The Hippocampal-Neocortical Systems Consolidation Pipeline',
    subtitle: 'The multi-stage migration from temporary hippocampal index to autonomous neocortical schema',
    stages: [
      {
        id: 'stage-encoding-cortical-index',
        name: 'Stage 1: Multi-Sensory Encoding & Hippocampal Index Binding',
        subtitle: 'Sparse Orthogonal Index Formation',
        capacity: 'Fast hippocampal encoding',
        duration: 'Seconds to minutes',
        role: 'Distributed sensory columns in visual, auditory, and prefrontal cortices fire in response to new material. Perforant path projections transmit this coordinated activity to the hippocampus, where dentate gyrus granule cells generate a sparse, orthogonal index vector binding the cortical columns together.',
        failureMode: 'Divided attention: Low sensory signal-to-noise ratio results in a weak hippocampal index that fails to bind all cortical columns.',
        evidenceType: 'Empirical consensus (Teyler & DiScenna, 1986; Scoville & Milner, 1957)',
        practicalFix: 'Eliminate secondary distractions during study to ensure sharp, synchronized cortical inputs to the hippocampal indexing circuit.',
      },
      {
        id: 'stage-hippocampus-dependent-recall',
        name: 'Stage 2: Early Retrieval (Hippocampus-Dependent Phase)',
        subtitle: 'Index-Driven Pattern Completion',
        capacity: 'Temporary storage buffer',
        duration: 'Days to weeks post-encoding',
        role: 'Retrieval cues activate the hippocampal index vector. The CA3 recurrent collateral network performs pattern completion, firing back through CA1 and subiculum to reactivate the original distributed neocortical columns. Damage to the hippocampus at this stage causes total memory loss.',
        failureMode: 'The Crammer’s Vulnerability: Memory is 100% dependent on the fragile hippocampal index; no direct cortico-cortical connections exist yet.',
        evidenceType: 'Empirical consensus (Squire & Alvarez, 1995; Frankland & Bontempi, 2005)',
        practicalFix: 'Do not assume initial test success means the knowledge is consolidated; recognize that the memory is still in its fragile hippocampal phase.',
      },
      {
        id: 'stage-offline-replay-reactivation',
        name: 'Stage 3: Offline Dialogue & Interleaved Replay (Consolidation)',
        subtitle: 'Sharp-Wave Ripples & Slow-Wave Sleep',
        capacity: 'Slow interleaved transfer',
        duration: 'Weeks to months of sleep/rest cycles',
        role: 'During non-REM slow-wave sleep and quiet rest, hippocampal sharp-wave ripples (SWRs, 150–250 Hz) replay daytime firing sequences at 10x-20x compressed speed. This synchronized co-activation slowly induces Long-Term Potentiation (LTP) directly between neocortical columns.',
        failureMode: 'Sleep deprivation: Eliminating slow-wave sleep truncates sharp-wave ripple replays, preventing cortico-cortical synaptic remodeling and causing trace decay.',
        evidenceType: 'Empirical consensus (Wilson & McNaughton, 1994; Diekelmann & Born, 2010)',
        practicalFix: 'Protect consistent 7–8 hour sleep schedules, specifically deep slow-wave sleep, to ensure complete hippocampal-neocortical replay windows.',
      },
      {
        id: 'stage-autonomous-neocortical-schema',
        name: 'Stage 4: Autonomous Neocortical Schema Integration',
        subtitle: 'Hippocampal Independence & Abstract Gist',
        capacity: 'Permanent distributed long-term storage',
        duration: 'Months to lifetime mastery',
        role: 'Direct cortico-cortical synaptic connections become robust and self-sustaining. Retrieval cues now directly activate the neocortical schema without requiring hippocampal indexing. The knowledge has been transformed from an episodic memory into an abstract, invariant semantic mental model.',
        failureMode: 'Context over-fitting: Studying in only one room or with identical cues prevents the neocortex from abstracting the general invariant schema.',
        evidenceType: 'Empirical consensus (Winocur & Moscovitch, 2011; McClelland et al., 1995)',
        practicalFix: 'Test knowledge in varied contexts and novel problem formats to help the neocortex distill the invariant conceptual structure.',
      },
    ],
    feedbackLoopDescription: 'Once a neocortical schema is fully consolidated, it acts as an executive scaffold: future related learning requires vastly less hippocampal indexing effort because new information links directly into the pre-existing schema.',
  },
  exercise: {
    title: 'Systems Consolidation & Neuropsychological Diagnostic Exercise',
    instruction: 'Analyze four complex learning and cognitive breakdown scenarios. Diagnose the exact systems-level neurobiological mechanism and prescribe the evidence-grounded architectural fix.',
    categories: [
      {
        id: 'attention-bottleneck',
        title: 'Hippocampal Index Binding Failure',
        description: 'Superficial or divided encoding failed to create a coherent hippocampal index pointer, leaving cortical activations uncoordinated.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'working-memory-overload',
        title: 'Catastrophic Interference (Unbuffered Cortical Overwrite)',
        description: 'New information was forced into shared cortical networks too rapidly without an interleaved hippocampal replay schedule, corrupting prior knowledge.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Premature Independence Fallacy (Unconsolidated Hippocampal Trace)',
        description: 'Learner mistook successful day-one recall for permanent neocortical consolidation, abandoning review before cortico-cortical links formed.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Sleep-Dependent Ripple Truncation',
        description: 'Chronic sleep debt or nocturnal disruptions eliminated slow-wave sleep sharp-wave ripples, preventing the hippocampal-neocortical dialogue.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-startup-crash-course-wipeout',
        realWorldContext: 'Machine Learning Engineering Bootcamp',
        scenario: 'A fintech engineering team underwent a 5-day intensive bootcamp learning a new deep learning framework. During daily labs, engineers completed every exercise successfully. But two weeks later back at work, the engineers were completely unable to write new models without referring to boilerplate and felt as if they had forgotten 80% of what was taught.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'The engineers succumbed to the Premature Independence Fallacy. Day-to-day success in the bootcamp was mediated entirely by temporary hippocampal index vectors and working memory scaffolding. Because systems consolidation takes weeks to months of interleaved reactivation and sleep cycles to build direct cortico-cortical connections (Squire & Alvarez, 1995), stopping all practice at the end of day 5 allowed the hippocampal index to decay before neocortical schemas consolidated.',
        evidenceBasedFix: 'Implement an expanding post-bootcamp review schedule: 30-minute coding challenges at +3 days, +10 days, and +30 days to sustain hippocampal-neocortical replay until schemas stabilize.',
      },
      {
        id: 'scen-four-hour-sleep-tech-founder',
        realWorldContext: 'Early-Stage Startup Architecture',
        scenario: 'Marcus, an ambitious technical founder, worked 18 hours a day for two months designing a distributed blockchain consensus engine, sleeping only 3.5 to 4 hours per night. Despite studying state-of-the-art consensus papers for hours every night, he found himself repeatedly re-reading the same papers and struggling to integrate the cryptographic primitives into his codebase.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'Marcus suffered from Sleep-Dependent Ripple Truncation. Systems consolidation requires non-REM slow-wave sleep, during which hippocampal sharp-wave ripples co-activate neocortical columns at 150–250 Hz to drive LTP in direct cortico-cortical synapses (Diekelmann & Born, 2010). Sleeping only 4 hours cut his slow-wave sleep cycles by more than 60%, severely truncating the molecular window required for systems consolidation.',
        evidenceBasedFix: 'Enforce a non-negotiable 7.5-hour sleep window, ensuring adequate slow-wave sleep stages to allow endogenous sharp-wave ripples to consolidate daily technical insights.',
      },
      {
        id: 'scen-syntax-overload-confusion',
        realWorldContext: 'Full-Stack Developer Switching Languages',
        scenario: 'Sofia was an expert Python developer who tried to learn Rust by spending an entire weekend writing 4,000 lines of complex Rust code with zero breaks. By Sunday night, not only was her Rust code riddled with borrow-checker errors, but on Monday morning when writing simple Python scripts, she found herself confusing Python syntax and making rookie indentation and type errors she hadn’t made in years.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'Sofia induced Catastrophic Interference (McClelland et al., 1995). Attempting to force a massive volume of new syntactical rules into her cortical language networks in a single weekend without interleaved spacing caused new synaptic updates to overwrite overlapping shared representations in her neocortex, temporarily corrupting her automated Python schemas.',
        evidenceBasedFix: 'Use Complementary Learning Systems principles: practice Rust in focused 90-minute interleaved bursts, followed by periods of Python use and rest, allowing the neocortex to integrate Rust as a distinct modular schema without catastrophic overwrite.',
      },
      {
        id: 'scen-podcast-walking-distraction',
        realWorldContext: 'Self-Directed Commuter Learning',
        scenario: 'Jason listens to advanced distributed systems audiobooks at 2x speed while weaving through heavy rush-hour traffic on his bicycle. He feels engaged while listening, but when he arrives at his desk and tries to explain the difference between Paxos and Raft to a colleague, he cannot recall a single technical detail.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'Jason experienced Hippocampal Index Binding Failure (Teyler & DiScenna, 1986). Navigating dense urban traffic saturated his frontal-parietal executive and spatial attention networks. Because conscious attention was fragmented, the perforant path transmitted only weak, dislocated sensory bursts to the dentate gyrus, completely failing to bind a coherent hippocampal index.',
        evidenceBasedFix: 'Dedicate quiet, monotasked sessions with a physical notebook to complex conceptual material, ensuring full attentional gating to forge robust hippocampal index pointers.',
      },
    ],
  },
  quiz: {
    title: 'Hippocampal-Neocortical Dialogue & Systems Consolidation Assessment',
    instruction: 'Validate your understanding of Patient H.M., Ribot’s Law, the Hippocampal Indexing Theory, and the Complementary Learning Systems framework.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-patient-hm-temporal-gradient',
        question: 'What foundational insight did Brenda Milner’s study of Patient H.M. (Scoville & Milner, 1957) reveal regarding the temporal organization of human memory?',
        options: [
          {
            id: 'q1-a',
            text: 'Memories undergo a time-dependent systems consolidation: the hippocampus is essential for forming new memories and retrieving recent ones, but remote memories eventually become stored in and retrieved from the neocortex independently.',
          },
          {
            id: 'q1-b',
            text: 'The hippocampus stores all memories permanently from birth to death; neocortex has no role in memory.',
          },
          {
            id: 'q1-c',
            text: 'Procedural motor memory and conscious declarative memory are identical and both reside in the medial temporal lobe.',
          },
          {
            id: 'q1-d',
            text: 'H.M. lost all childhood memories while remembering every new event perfectly (anterograde amnesia was nonexistent).',
          },
        ],
        correctOptionId: 'q1-a',
        explanation: 'Patient H.M.’s temporally graded retrograde amnesia (Ribot’s Law) proved that the medial temporal lobe is not the permanent repository of memories. While recent memories from the 1–3 years prior to surgery were lost, remote childhood memories survived completely intact because they had already undergone systems consolidation into autonomous neocortical networks (Scoville & Milner, 1957).',
        pedagogicalRationale: 'Anchors systems consolidation in landmark neuropsychological evidence and establishes the distinction between temporary hippocampal indexing and permanent neocortical storage.',
        evidenceNote: 'Scoville, W. B., & Milner, B. (1957). Loss of recent memory after bilateral hippocampal lesions. Journal of Neurology, Neurosurgery & Psychiatry, 20(1), 11-21.',
      },
      {
        id: 'q2-cls-catastrophic-interference',
        question: 'According to the Complementary Learning Systems (CLS) framework (McClelland, McNaughton, & O’Reilly, 1995), why does the human brain require two distinct memory systems rather than a single fast-learning neocortex?',
        options: [
          {
            id: 'q2-a',
            text: 'Rapid direct learning in an overlapping distributed neocortex causes Catastrophic Interference, erasing prior knowledge; a fast hippocampal buffer allows temporary capture, which is then replayed slowly to the neocortex without disrupting existing schemas.',
          },
          {
            id: 'q2-b',
            text: 'The neocortex is made of plastic cartilage that cannot conduct electricity, so the hippocampus must do all cognitive work.',
          },
          {
            id: 'q2-c',
            text: 'The brain requires one hemisphere for English words and one hemisphere for numbers.',
          },
          {
            id: 'q2-d',
            text: 'Because memories cannot be stored in the brain; they are held in the spinal cord.',
          },
        ],
        correctOptionId: 'q2-a',
        explanation: 'McClelland, McNaughton, and O\'Reilly (1995) proved that connectionist networks face a fundamental stability-plasticity dilemma. If a distributed network updates weights fast enough to learn an episodic event on a single trial, the new weights catastrophically overwrite older consolidated representations. The hippocampus acts as an episodic buffer with sparse representations, allowing gradual interleaved replay to the neocortex during offline periods.',
        pedagogicalRationale: 'Connects neurobiology to computational cognitive architecture, explaining why massed learning fails to integrate into long-term mental schemas.',
        evidenceNote: 'McClelland, J. L., McNaughton, B. L., & O\'Reilly, R. C. (1995). Why there are complementary learning systems in the hippocampus and neocortex. Psychological Review, 102(3), 419-457.',
      },
      {
        id: 'q3-hippocampal-indexing-theory',
        question: 'How does the Hippocampal Indexing Theory (Teyler & DiScenna, 1986; Teyler & Rudy, 2007) describe the role of the hippocampus in conscious memory retrieval?',
        options: [
          {
            id: 'q3-a',
            text: 'The hippocampus does not store raw multisensory content; it stores a compact, sparse index vector of pointers that co-activates the distributed neocortical columns where the actual sensory and semantic features reside.',
          },
          {
            id: 'q3-b',
            text: 'The hippocampus stores high-resolution MPEG video recordings of visual scenes in raw digital format.',
          },
          {
            id: 'q3-c',
            text: 'The hippocampus acts as a physical filter that destroys 99% of memories before they can reach the brainstem.',
          },
          {
            id: 'q3-d',
            text: 'The hippocampus has no connections to the neocortex and communicates exclusively via thyroid hormones.',
          },
        ],
        correctOptionId: 'q3-a',
        explanation: 'Teyler and DiScenna (1986) demonstrated that storing complete sensory details in the hippocampus would require enormous neural mass and cause massive interference. Instead, the hippocampus stores a low-dimensional index code. During retrieval, a cue activates this index, which fires back-projections to simultaneously reactivate all original neocortical columns (pattern completion).',
        pedagogicalRationale: 'Clarifies the computational economy of memory indexing versus raw storage, providing a vital mental model for software engineers.',
        evidenceNote: 'Teyler, T. J., & DiScenna, P. (1986). The hippocampal memory indexing theory. Behavioral Neuroscience, 100(2), 147-154.',
      },
      {
        id: 'q4-transformation-theory-schemas',
        question: 'According to Multiple Trace and Transformation Theory (Nadel & Moscovitch, 1997; Winocur & Moscovitch, 2011), how is a memory transformed as it consolidates over time?',
        options: [
          {
            id: 'q4-a',
            text: 'The neocortex gradually extracts the statistical, invariant semantic "gist" (abstract schema) while shedding idiosyncratic episodic details; rich episodic re-experiencing continues to recruit hippocampal traces.',
          },
          {
            id: 'q4-b',
            text: 'The memory becomes an exact verbatim photographic copy in the neocortex, with zero loss of incidental episodic detail.',
          },
          {
            id: 'q4-c',
            text: 'The memory is converted into unconscious muscle movements in the cerebellum and can no longer be verbalized.',
          },
          {
            id: 'q4-d',
            text: 'The memory dissolves completely and leaves behind only emotional trauma.',
          },
        ],
        correctOptionId: 'q4-a',
        explanation: 'Winocur & Moscovitch (2011) showed that consolidation is not mere file duplication. The neocortex extracts the statistical invariants across multiple episodes, transforming specific instances into generalized semantic schemas (e.g., understanding the rules of chess or the concept of an API). Meanwhile, detailed episodic autobiographical memories retain hippocampal dependence whenever vividly recalled.',
        pedagogicalRationale: 'Teaches learners that true mastery is the transformation of isolated episodic study events into robust, abstract neocortical schemas.',
        evidenceNote: 'Winocur, G., & Moscovitch, M. (2011). Memory transformation and systems consolidation. Journal of the International Neuropsychological Society, 17(5), 766-780.',
      },
    ],
  },
  practicalTask: {
    title: 'The Systems Consolidation & Schema Integration Protocol',
    summary: 'A 3-step practical protocol to anchor hippocampal index pointers, schedule interleaved replay to prevent catastrophic interference, and extract invariant neocortical schemas.',
    steps: [
      {
        id: 'step-create-hippocampal-pointer',
        number: 1,
        title: 'Construct an Explicit Conceptual Index Pointer',
        prompt: 'For your current complex technical topic, write a 3-bullet "Index Vector" that explicitly links the visual architecture, semantic mechanism, and real-world failure mode:',
        placeholder: 'e.g., Topic: Raft Leader Election. 1. Visual/Spatial: 3-node cluster split across availability zones. 2. Mechanism: Randomized election timeouts (150-300ms) with RequestVote RPC majority grant. 3. Failure Mode: Split-brain network partition resulting in dual leaders without quorum...',
        example: 'Topic: Rust Borrow Checker. 1. Visual: Memory stack frame with owner pointer and borrowed reference borrow-lifetimes. 2. Mechanism: Aliasing XOR Mutability rule enforced at compile-time. 3. Failure Mode: Data race caused by multiple concurrent writers.',
        cognitiveRationale: 'A multisensory conceptual index engages visual, semantic, and spatial neocortical columns simultaneously, providing the perforant path with optimal co-activation to form a robust hippocampal index vector.',
      },
      {
        id: 'step-interleave-replay-cls',
        number: 2,
        title: 'Schedule Interleaved Practice to Prevent Catastrophic Interference',
        prompt: 'Design an interleaved 3-day practice block where you alternate the new concept with two related, pre-existing concepts to allow gradual neocortical integration:',
        placeholder: 'e.g., Day 1: 30m Raft Leader Election + 15m Paxos consensus + 15m 2-Phase Commit. Day 2: 20m Raft Log Replication + 20m Raft Leader Election + 20m Paxos. Day 3: Varied troubleshooting scenarios across all three...',
        example: 'Interleaved Block: Alternate 25 minutes of Rust concurrency (new concept) with 20 minutes of Go goroutines (established concept) and 15 minutes of operating system thread scheduling.',
        cognitiveRationale: 'McClelland et al. (1995) proved that interleaved reactivation prevents new representations from catastrophically overwriting shared cortical weights, allowing the neocortex to integrate new distinctions into existing schemas smoothly.',
      },
      {
        id: 'step-extract-invariant-gist',
        number: 3,
        title: 'Extract the Abstract Invariant Neocortical Schema',
        prompt: 'Strip away all idiosyncratic implementation details and write the pure, invariant abstract principle that applies across domains:',
        placeholder: 'e.g., Invariant Gist: "Consensus in an asynchronous unreliable network requires a strict majority quorum (N/2 + 1) to guarantee that any two quorums overlap by at least one node, ensuring consistency across leader transitions regardless of node crashes."...',
        example: 'Invariant Gist: "Memory safety without garbage collection requires establishing compile-time proofs that no memory location can be simultaneously mutated and read by independent execution contexts."',
        cognitiveRationale: 'Forcing the extraction of abstract invariants accelerates the Transformation Hypothesis (Winocur & Moscovitch, 2011), migrating knowledge from fragile episodic memories into autonomous, flexible neocortical schemas.',
      },
    ],
  },
};
