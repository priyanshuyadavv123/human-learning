import type { Lesson } from '../types/learning.ts';

export const LESSON_RECONSOLIDATION_UPDATING: Lesson = {
  id: 'reconsolidation-updating',
  chapterId: 'ch-7-interference-reconsolidation',
  number: '7.2',
  title: 'Memory Reconsolidation & Updating',
  subtitle: 'The fragile post-retrieval window for modifying old knowledge',
  readingTimeMinutes: 16,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'Can an established, years-old memory be permanently modified, updated, or rewritten at the physical synaptic level—and why is an unexpected prediction error strictly required to unlock it?',
    teaser: 'Memory retrieval is not a passive read-only operation. Every time an established memory is recalled under the right boundary conditions, its physical synapses destabilize into a malleable state, opening a 4–6 hour biological rewrite window.',
    hookNote: 'For nearly a century, classical neuroscience assumed that memory consolidation was a one-time, irreversible event: once a memory was consolidated, it was permanent and immutable. In 2000, Karim Nader, Glenn Schafe, and Joseph LeDoux published a groundbreaking paper in Nature that shocked neurobiology. They demonstrated that recalling an established, fear-conditioned memory caused its physical synapses to destabilize into a labile (plastic) state via the ubiquitin-proteasome degradation system. If protein synthesis was pharmacologically blocked immediately following retrieval, the memory trace vanished completely. In 2004, María Pedreira and colleagues proved that memories do not destabilize indiscriminately—destabilization strictly requires a Prediction Error (a surprising mismatch between expectation and reality). In 2009 and 2010, Marie-Hélène Monfils and Daniela Schiller translated this into humans: retrieving a memory with a prediction error opens a 4-to-6-hour window where old misconceptions can be permanently overwritten rather than merely suppressed. Understanding reconsolidation provides the ultimate scientific blueprint for cognitive unlearning and schema updating.',
  },
  prediction: {
    prompt: 'Before investigating the molecular and cognitive mechanics of reconsolidation, test your intuition on how retrieved memories behave: A student has held a deeply ingrained misconception about async JavaScript execution for 6 months. Group A is immediately shown the correct code explanation without any prior prompting. Group B is first asked to predict the output of an edge-case snippet (which reveals their mental model is wrong via an unexpected execution error), and 10 minutes later is shown the identical correct explanation. One week later, both groups are tested on novel, complex async code. What does empirical cognitive neuroscience observe?',
    context: 'Both groups received the exact same comprehensive explanation of async JavaScript and spent identical total study time:',
    options: [
      {
        id: 'opt-passive-identical',
        strategy: 'Hypothesis A: Passive Read Invariance',
        description: 'Both groups perform identically on the one-week test, because memory modification is governed strictly by the clarity of the explanation, not by prior retrieval attempts.',
      },
      {
        id: 'opt-reconsolidation-destabilization',
        strategy: 'Hypothesis B: Prediction-Error-Triggered Reconsolidation & Updating',
        description: 'Group B demonstrates significantly higher accuracy and far fewer intrusions of the old misconception than Group A, because active retrieval coupled with prediction error destabilized the original synaptic trace, rendering it labile and receptive to permanent updating during the post-retrieval window.',
      },
      {
        id: 'opt-backfire-entrenchment',
        strategy: 'Hypothesis C: The Error Entrenchment Effect',
        description: 'Group A performs significantly better than Group B, because forcing Group B to make an error entrenched the wrong mental model into working memory.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-reconsolidation-destabilization',
      headline: 'Active Retrieval with Prediction Error Destabilizes Established Schemas into a Labile State, Enabling Permanent Post-Retrieval Updating (Nader et al., 2000; Pedreira et al., 2004; Schiller et al., 2010).',
      explanation: 'Consolidated memory traces are not immutable files. Under classical consolidation dogma, Group A was merely forming a secondary, competing memory trace while their original flawed schema remained intact and dominant. In contrast, Group B first retrieved their existing schema and experienced a calibrated Prediction Error. This prediction error triggered NMDA receptor-dependent protein degradation (labilization), temporarily unlocking the synaptic weights of the original memory trace. Presenting the correct mental model during this 4–6 hour labile window allowed de novo protein synthesis to reconsolidate and update the original schema itself, permanently eliminating the flawed cognitive shortcut.',
      optionFeedback: {
        'opt-passive-identical': {
          title: 'Your Choice: Hypothesis A (Passive Information Myth)',
          verdict: 'The Static Memory Illusion',
          analysis: 'Merely reading a correct explanation without activating the prior misconception creates a fragile competing trace. Under cognitive load or delayed recall, the uncorrected original schema reflexively reasserts itself (Sevenster et al., 2012).',
        },
        'opt-reconsolidation-destabilization': {
          title: 'Your Choice: Hypothesis B (Prediction-Error-Triggered Reconsolidation)',
          verdict: 'Empirical Cognitive Neuroscience Consensus',
          analysis: 'Correct! Landmark neurobiological research (Nader et al., 2000; Pedreira et al., 2004; Monfils et al., 2009; Schiller et al., 2010) definitively proved that retrieval + prediction error opens a time-limited molecular window where consolidated schemas can be updated and rewritten at the synaptic level.',
        },
        'opt-backfire-entrenchment': {
          title: 'Your Choice: Hypothesis C (The Backfire Misconception)',
          verdict: 'Refuted by Epistemic Surprise Research',
          analysis: 'While unguided repetition of an error without immediate corrective feedback can reinforce confusion, an explicit prediction error followed by corrective feedback produces the robust Hypercorrection Effect (Butterfield & Metcalfe, 2001) and triggers memory reconsolidation.',
        },
      },
      comparisons: [
        {
          label: 'Direct Explanation Without Prior Retrieval (Group A)',
          immediateRetention: '72% (Feels clear, but leaves old schema intact)',
          oneWeekRetention: '31% (Old misconception resurfaces and dominates)',
          illusionRating: 'High (Fluency illusion masks unaddressed flawed schema)',
          isEmpiricalWinner: false,
        },
        {
          label: 'Retrieval Without Prediction Error (Trivial Review)',
          immediateRetention: '80% (Smooth confirmation)',
          oneWeekRetention: '45% (Trace is re-locked without structural updating)',
          illusionRating: 'Moderate (Confirms existing knowledge, no plasticity unlocked)',
          isEmpiricalWinner: false,
        },
        {
          label: 'Retrieval + Prediction Error + Corrective Update (Group B)',
          immediateRetention: '89% (Epistemic surprise destabilizes trace)',
          oneWeekRetention: '82% (Original schema permanently updated & reconsolidated)',
          illusionRating: 'Calibrated (Effortful, but permanently eliminates misconception)',
          isEmpiricalWinner: true,
        },
      ],
      evidenceDistinction: 'Empirical Evidence Distinction: Memory reconsolidation has been validated from synaptic and molecular levels (Nader et al., 2000; Dudai, 2006) up to human behavioral and fMRI paradigms (Schiller et al., 2010; Sevenster et al., 2013; Forcato et al., 2007).',
    },
  },
  coreExplanations: [
    {
      id: 'synaptic-destabilization-nader-discovery',
      title: '1. Nader et al. (2000) & Synaptic Destabilization',
      tagline: 'Overturning the permanence dogma: Memory retrieval as a dynamic rewrite operation',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Nobel-Caliber Molecular Neurobiology Consensus',
      summary: 'For nearly a century, memories were believed to undergo consolidation once and remain permanently hardwired. Karim Nader, Glenn Schafe, and Joseph LeDoux (2000) discovered that retrieving an established memory destabilizes it into a fragile, plastic state where it must be re-synthesized (reconsolidated) to survive.',
      mechanisms: [
        {
          label: 'The Labilization Cascade',
          description: 'Upon retrieval, calcium influx through NMDA receptors and voltage-gated calcium channels activates the ubiquitin-proteasome system. This system selectively degrades postsynaptic scaffolding proteins (such as Shank and GKAP) at the synapse, physically ungluing the consolidated memory trace.',
        },
        {
          label: 'The Protein Synthesis Prerequisite',
          description: 'Once destabilized (labile), the memory trace requires fresh mRNA translation and de novo protein synthesis (involving transcription factors like CREB and Zif268) to restabilize. If protein synthesis is inhibited during this window, the memory trace is permanently wiped out or fundamentally transformed.',
        },
        {
          label: 'The Evolutionary Function of Reconsolidation',
          description: 'Why would natural selection design memories to destabilize upon recall? Because a static memory is evolutionary suicide in a changing environment. Reconsolidation allows organisms to incorporate new predictive information, update threat values, and modify outdated mental models without having to build new brains from scratch (Dudai, 2006).',
        },
      ],
      keyInsight: 'Memory retrieval is not reading a static book off a shelf. It is taking a clay sculpture down from the shelf, warming it up until it is soft and malleable, reshaping it, and letting it dry in a new form.',
      simplifiedModelCaveat: 'Reconsolidation does not occur automatically every time you remember something. Strict biological gating mechanisms protect core memories from accidental degradation during routine recall.',
    },
    {
      id: 'boundary-conditions-prediction-error',
      title: '2. Boundary Conditions & The Prediction Error Requirement',
      tagline: 'The molecular gatekeeper: Why memories only destabilize when surprised',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Cognitive Neurobiology Consensus',
      summary: 'Memories do not destabilize indiscriminately; doing so would make memory networks chaotic and uncalibrated. María Pedreira et al. (2004) and Exton-McGuinness et al. (2015) proved that reconsolidation is triggered only when retrieval coincides with a Prediction Error (a discrepancy between expectation and reality).',
      mechanisms: [
        {
          label: 'Zero Prediction Error (Null Destabilization)',
          description: 'When a retrieval cue produces an outcome that perfectly matches expectation (e.g. you recall that 2 + 2 = 4 and nothing surprising occurs), the brain detects zero prediction error. The trace is retrieved in read-only mode, proteasome degradation is not triggered, and the trace remains securely locked.',
        },
        {
          label: 'Calibrated Prediction Error (Reconsolidation Window Unlocked)',
          description: 'When retrieval is accompanied by an unexpected outcome or surprising feedback (e.g. an edge case fails or an answer you were confident in is wrong), a dopaminergic and NMDA-mediated prediction error signal fires. This unlocks the ubiquitin-proteasome degradation cascade, labilizing the schema for updating.',
        },
        {
          label: 'Extinction vs Reconsolidation Boundary',
          description: 'If the reminder cue is presented repeatedly with zero reinforcement (prolonged non-reinforcement), the brain interprets this as a new environmental rule. Instead of updating the original memory, it forms a separate inhibitory extinction trace (e.g. ventromedial prefrontal cortex inhibition of the amygdala) which leaves the original trace intact and subject to spontaneous recovery.',
        },
      ],
      keyInsight: 'To change a learner’s mind, you cannot simply tell them they are wrong. You must orchestrate a surprising prediction error that forces their cognitive system to destabilize the old schema from within.',
      simplifiedModelCaveat: 'Massive, catastrophic errors can cause cognitive overwhelm or defensiveness rather than reconsolidation. The prediction error must be calibrated—clear enough to surprise, yet tractable enough for the learner to resolve.',
    },
    {
      id: 'four-hour-window-schema-updating',
      title: '3. The 4-Hour Opportunity Window: Overwriting Outdated Schemas',
      tagline: 'Translating reconsolidation into deliberate practice and conceptual mastery',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Applied Cognitive Science & Translational Neuroscience',
      summary: 'Marie-Hélène Monfils (2009) and Daniela Schiller (2010) demonstrated in animal and human clinical models that presenting corrective or non-fearful information within the 10-minute to 4-hour post-retrieval window permanently updates the original trace, preventing spontaneous recovery and eliminating old misconceptions.',
      mechanisms: [
        {
          label: 'The Post-Retrieval Temporal Dynamics',
          description: 'Immediately following retrieval, the memory trace remains intact for ~5–10 minutes while intracellular signaling cascades initiate. From ~10 minutes to ~4–6 hours, the trace enters its peak labile state. After 6 hours, cellular restabilization is complete and the trace is locked once more.',
        },
        {
          label: 'Direct Trace Updating vs Competing Inhabitation',
          description: 'Traditional rote studying merely builds a new memory trace that competes with the old one (as in retroactive interference). But introducing corrective evidence while the original trace is labile incorporates the new information directly into the original synaptic architecture, permanently rewriting the faulty schema.',
        },
        {
          label: 'The Discrepancy-Driven Deliberate Practice Loop',
          description: 'To permanently purge stubborn programming habits or scientific misconceptions: 1) Elicit explicit commitment to the old belief; 2) Confront the learner with an unmistakable failure case (prediction error); 3) Deliver the accurate mental model during the labile window; 4) Consolidate with quiet rest or sleep.',
        },
      ],
      keyInsight: 'The most durable learning occurs not when you build new knowledge from scratch, but when you destabilize, edit, and restabilize existing schemas at the precise moment they are surprised.',
      simplifiedModelCaveat: 'Very old, heavily overtrained procedural habits (like typing on a QWERTY keyboard) have multiple redundant neocortical representations and require multiple reconsolidation cycles to fully update.',
    },
  ],
  diagram: {
    title: 'The Neurobiology of Memory Reconsolidation & Schema Updating',
    subtitle: 'From consolidated stability to prediction-error labilization and permanent synaptic restabilization',
    stages: [
      {
        id: 'stage-consolidated-trace-locked',
        name: 'Stage 1: Consolidated Schema (Locked State)',
        subtitle: 'Synaptic scaffolding proteins stabilize established knowledge',
        capacity: 'Durable neocortical/hippocampal network',
        duration: 'Indefinite prior to retrieval',
        role: 'An established mental model or habit is anchored by postsynaptic scaffolding proteins (Shank, GKAP) and robust synaptic connections. In the absence of retrieval, it is stable and resistant to disruption.',
        failureMode: 'Flawed schemas remain permanently entrenched if never actively challenged with prediction errors.',
        evidenceType: 'Empirical consensus (Nader et al., 2000; Dudai, 2006)',
        practicalFix: 'Do not let flawed conceptual models lie dormant; actively probe them with diagnostic retrieval challenges.',
      },
      {
        id: 'stage-retrieval-prediction-error-labilization',
        name: 'Stage 2: Retrieval + Prediction Error (Labilization)',
        subtitle: 'NMDA influx & ubiquitin proteasome degradation unlock synapses',
        capacity: 'Transient plastic window (~10m to 4–6 hours)',
        duration: 'Opens ~10 minutes post-retrieval',
        role: 'The learner actively recalls the schema and encounters an unexpected discrepancy. Calcium influx through NMDA receptors activates ubiquitin ligases, which degrade postsynaptic scaffolding proteins, rendering the memory trace physically labile.',
        failureMode: 'Retrieval without prediction error leaves synapses locked; prediction error without retrieval fails to target the correct trace.',
        evidenceType: 'Empirical consensus (Pedreira et al., 2004; Exton-McGuinness et al., 2015)',
        practicalFix: 'Force explicit predictions before revealing edge case results to ensure the prediction error aligns with the specific schema.',
      },
      {
        id: 'stage-corrective-incorporation-window',
        name: 'Stage 3: The 4-Hour Opportunity Window (Corrective Integration)',
        subtitle: 'New structural evidence is incorporated directly into the labile trace',
        capacity: 'High synaptic receptivity to updating',
        duration: '10 minutes to 4 hours post-prediction-error',
        role: 'While the original memory trace is soft and malleable, corrective explanations and accurate mental models are presented. The incoming information merges into the existing synaptic ensemble rather than forming a fragile competing trace.',
        failureMode: 'Delaying corrective feedback beyond 6 hours causes the original flawed trace to restabilize uncorrected.',
        evidenceType: 'Empirical consensus (Monfils et al., 2009; Schiller et al., 2010)',
        practicalFix: 'Provide clear, structured corrective explanations within the immediate 10–60 minute post-error window.',
      },
      {
        id: 'stage-protein-synthesis-reconsolidation',
        name: 'Stage 4: De Novo Protein Synthesis & Reconsolidation',
        subtitle: 'CREB transcription restabilizes the newly edited schema into permanent storage',
        capacity: 'Permanently updated schema',
        duration: '4 to 6 hours post-updating',
        role: 'Fresh mRNA translation and protein synthesis reconstruct postsynaptic density scaffolds, locking the updated, accurate mental model into long-term storage. The old misconception is permanently purged from automatic recall.',
        failureMode: 'Excessive cognitive interference or sleep deprivation during the restabilization window impairs permanent reconsolidation.',
        evidenceType: 'Empirical consensus (Nader et al., 2000; Sevenster et al., 2013)',
        practicalFix: 'Follow discrepancy-driven learning sessions with quiet consolidation buffers and healthy sleep.',
      },
    ],
    feedbackLoopDescription: 'Once reconsolidated, the updated schema now serves as the baseline for future retrieval, capable of undergoing further refinement whenever novel prediction errors occur.',
  },
  exercise: {
    title: 'Reconsolidation & Schema Updating Diagnostic Exercise',
    instruction: 'Analyze four real-world learning and engineering scenarios. Diagnose whether reconsolidation was successfully triggered or blocked, and prescribe the evidence-grounded neurobiological fix.',
    categories: [
      {
        id: 'attention-bottleneck',
        title: 'Zero Prediction Error (Trace Locked)',
        description: 'Passive review or confirmation without surprise left the existing schema locked in its original unyielding state.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'working-memory-overload',
        title: 'Extinction vs Reconsolidation Ambiguity',
        description: 'Repeated non-reinforcement without corrective input built a fragile inhibitory extinction trace rather than updating the root schema.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Delayed Feedback Beyond Window',
        description: 'Corrective feedback arrived more than 6 hours after retrieval, when the memory trace had already re-locked in its flawed configuration.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Optimal Reconsolidation & Updating',
        description: 'Active retrieval paired with a sharp prediction error unlocked the trace, followed by immediate corrective incorporation within the 4-hour window.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-passive-re-reading-docs',
        realWorldContext: 'Senior Engineer Reading Documentation',
        scenario: 'Alex has spent 3 years writing SQL queries assuming that subqueries always execute once per outer row. To improve, he quietly re-reads the official query optimizer documentation chapter on subquery flattening. He finds the text straightforward, nods along, and closes the browser tab. The next day, when writing a query, he continues using his old, unoptimized subquery patterns.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'Alex experienced zero prediction error (Pedreira et al., 2004). Passive reading did not force his cognitive architecture to retrieve his flawed subquery mental model and confront a surprising failure. Without an explicit prediction error, NMDA-mediated proteasome degradation was not triggered, leaving the old flawed schema locked and dominant.',
        evidenceBasedFix: 'Before reading the docs, Alex must write a query benchmark, predict the query execution plan from his intuition, and run EXPLAIN ANALYZE. Confronting the unexpected plan discrepancy triggers the prediction error needed to labilize his mental model.',
      },
      {
        id: 'scen-delayed-homework-grading',
        realWorldContext: 'University Computer Science Course Grading',
        scenario: 'Maya submits a systems programming lab on Monday at 9 AM, containing a fundamental misunderstanding of thread mutex locking order. Her assignment is graded and returned on Friday afternoon (4 days later) with detailed red-pen corrections explaining deadlock hierarchies. Maya reviews the feedback, but on the midterm two weeks later, she repeats the exact same mutex locking bug.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'The corrective feedback was delayed by 96 hours—far beyond the 4–6 hour temporal reconsolidation window (Nader et al., 2000; Schiller et al., 2010). By Friday, Maya was not actively retrieving her Monday mental state; the corrections merely created a separate abstract fact that failed to rewrite her automated procedural schema.',
        evidenceBasedFix: 'Implement immediate automated test feedback on code commit. When a test deadlocks, the student’s schema is active and surprised; providing diagnostic trace output within minutes allows immediate reconsolidation of the correct locking protocol.',
      },
      {
        id: 'scen-prediction-error-interactive-debugging',
        realWorldContext: 'Interactive Code Pair Programming',
        scenario: 'Sarah believes that JavaScript closures capture the values of outer variables at the time of function declaration. Her tech lead asks her: "What will this `for (var i = 0; i < 3; i++) setTimeout(() => console.log(i), 100)` snippet output?" Sarah confidently predicts "0, 1, 2". They run the code and it prints "3, 3, 3". Visibly surprised, Sarah gasps: "Wait, why?" The lead immediately diagrams execution context scopes on a whiteboard. Three months later, Sarah accurately explains closures in every interview.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'Optimal reconsolidation occurred: 1) Active prediction brought the old schema into working memory; 2) The surprising "3, 3, 3" output generated a massive Prediction Error (epistemic surprise), labilizing synaptic connections; 3) The immediate whiteboard explanation updated the schema within the labile window; 4) Subsequent rest consolidated the new model (Monfils et al., 2009).',
        evidenceBasedFix: 'Continue this exact Socratic protocol: elicit high-confidence predictions, reveal unambiguous empirical discrepancies, and immediately deliver structural explanations.',
      },
      {
        id: 'scen-unreinforced-repeated-flub',
        realWorldContext: 'Public Speaking Anxiety Protocol',
        scenario: 'David has a fear of public speaking. His manager tells him to practice by speaking in an empty meeting room 20 times in a row without audience feedback. During the first 5 sessions, David feels anxious, but by session 20, his heart rate drops. However, three weeks later at a company all-hands with 200 people, his panic attacks return at full intensity.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'David experienced extinction rather than reconsolidation (Exton-McGuinness et al., 2015). Repeated, prolonged non-reinforced exposure in an empty room built a new, context-specific inhibitory extinction trace ("empty room = safe"). Because the original fear schema was never paired with a surprising positive outcome during social evaluation, the original trace was not updated, leading to classic spontaneous recovery when context changed.',
        evidenceBasedFix: 'Use brief reminder exposures (e.g. 2 minutes before a friendly small group) paired with surprising positive social validation to trigger reconsolidation and update the core social evaluation schema.',
      },
    ],
  },
  quiz: {
    title: 'Formative Assessment: Memory Reconsolidation & Updating',
    instruction: 'Demonstrate rigorous conceptual mastery of synaptic labilization, prediction error boundary conditions, and the post-retrieval updating window.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-nader-reconsolidation-discovery',
        question: 'What revolutionary finding did Karim Nader, Glenn Schafe, and Joseph LeDoux (2000) establish regarding the biological nature of consolidated memories?',
        options: [
          {
            id: 'q1-a',
            text: 'Retrieving an established, consolidated memory temporarily returns it to a labile (destabilized) state where it requires fresh protein synthesis to persist; blocking protein synthesis during this window permanently erases the trace.',
          },
          {
            id: 'q1-b',
            text: 'Once a memory is consolidated, it is permanently etched into stone and can never be modified or degraded by any pharmacological or behavioral intervention.',
          },
          {
            id: 'q1-c',
            text: 'Memories only exist in the stomach and have nothing to do with synapses or protein synthesis in the brain.',
          },
          {
            id: 'q1-d',
            text: 'Nader proved that remembering something makes the memory 100 times larger until the skull expands.',
          },
        ],
        correctOptionId: 'q1-a',
        explanation: 'Nader et al. (2000) proved that retrieval destabilizes previously consolidated memories via the ubiquitin-proteasome pathway, initiating a reconsolidation cascade that requires new protein synthesis to restabilize (Nader et al., 2000).',
        pedagogicalRationale: 'Establishes the foundational empirical breakthrough that overturned 100 years of static consolidation dogma.',
        evidenceNote: 'Nader, K., Schafe, G. E., & Le Doux, J. E. (2000). Fear memories require protein synthesis in the amygdala for reconsolidation after retrieval. Nature, 406(6797), 722-726.',
      },
      {
        id: 'q2-pedreira-prediction-error-boundary',
        question: 'According to María Pedreira et al. (2004) and Exton-McGuinness et al. (2015), what is the strict neurobiological boundary condition required to trigger memory reconsolidation?',
        options: [
          {
            id: 'q2-a',
            text: 'Retrieval must be accompanied by a Prediction Error (a mismatch between expected and actual outcome); retrieval with zero prediction error leaves the memory trace locked and stable.',
          },
          {
            id: 'q2-b',
            text: 'Reconsolidation triggers only if the subject is completely unconscious and submerged in ice water.',
          },
          {
            id: 'q2-c',
            text: 'Reconsolidation occurs randomly every 12 seconds regardless of what the subject thinks or experiences.',
          },
          {
            id: 'q2-d',
            text: 'Prediction errors prevent reconsolidation; memories only destabilize when everything happens exactly as expected.',
          },
        ],
        correctOptionId: 'q2-a',
        explanation: 'Pedreira et al. (2004) proved that a Prediction Error is mandatory to trigger NMDA-dependent protein degradation; without surprise or discrepancy, the memory is accessed in read-only mode and remains locked.',
        pedagogicalRationale: 'Clarifies the critical gating mechanism that prevents memory networks from descending into chaos during routine recall.',
        evidenceNote: 'Pedreira, M. E., Pérez-Cuesta, L. M., & Maldonado, H. (2004). Mismatch between what is expected and what actually occurs triggers memory reconsolidation or extinction. PNAS, 101(36), 13417-13423.',
      },
      {
        id: 'q3-temporal-window-schiller-monfils',
        question: 'What is the duration of the post-retrieval reconsolidation opportunity window identified by Monfils et al. (2009) and Schiller et al. (2010) for updating established memories?',
        options: [
          {
            id: 'q3-a',
            text: 'Approximately 10 minutes to 4–6 hours post-retrieval; after ~6 hours, de novo protein synthesis completes restabilization and re-locks the trace.',
          },
          {
            id: 'q3-b',
            text: 'Exactly 250 milliseconds; if corrective information is not delivered within a quarter-second, the opportunity is lost forever.',
          },
          {
            id: 'q3-c',
            text: 'Three to four months, allowing learners to receive feedback whenever convenient without urgency.',
          },
          {
            id: 'q3-d',
            text: 'There is no window; memories remain permanently liquid once opened and never re-solidify.',
          },
        ],
        correctOptionId: 'q3-a',
        explanation: 'Monfils et al. (2009) and Schiller et al. (2010) demonstrated that the labile reconsolidation window opens after ~10 minutes and closes after 4–6 hours as cellular protein synthesis restabilizes the synaptic scaffold.',
        pedagogicalRationale: 'Provides the precise chronobiological parameters needed to design optimal educational and deliberate practice feedback loops.',
        evidenceNote: 'Schiller, D., Monfils, M. H., Raio, C. M., Johnson, D. C., LeDoux, J. E., & Phelps, E. A. (2010). Preventing the return of fear in humans using reconsolidation update mechanisms. Nature, 463(7277), 49-53.',
      },
      {
        id: 'q4-reconsolidation-vs-extinction-distinction',
        question: 'Why is updating an existing memory through reconsolidation clinically and educationally superior to traditional extinction or secondary suppression?',
        options: [
          {
            id: 'q4-a',
            text: 'Reconsolidation rewrites the original synaptic trace itself, preventing spontaneous recovery and relapse, whereas extinction creates a fragile secondary inhibitory trace that leaves the original flawed schema intact.',
          },
          {
            id: 'q4-b',
            text: 'Extinction requires surgery while reconsolidation can only be done with magnets.',
          },
          {
            id: 'q4-c',
            text: 'Reconsolidation takes 50 years to work, whereas extinction takes 2 seconds.',
          },
          {
            id: 'q4-d',
            text: 'There is no difference; neuroscientists consider extinction and reconsolidation to be exact synonyms.',
          },
        ],
        correctOptionId: 'q4-a',
        explanation: 'Extinction builds a competing inhibitory trace (new learning) leaving the original schema vulnerable to spontaneous recovery, renewal, and reinstatement under stress. Reconsolidation directly edits the original trace, permanently transforming the underlying cognitive model (Dudai, 2006; Monfils et al., 2009).',
        pedagogicalRationale: 'Highlights the profound structural difference between suppressing a misconception and genuinely overwriting it.',
        evidenceNote: 'Dudai, Y. (2006). Reconsolidation: the advantage of being refocused. Current Opinion in Neurobiology, 16(2), 174-178.',
      },
    ],
  },
  practicalTask: {
    title: 'The Prediction-Error Reconsolidation Protocol',
    summary: 'A 3-step actionable deliberate practice protocol to unlearn entrenched cognitive misconceptions and permanently update outdated mental models.',
    steps: [
      {
        id: 'step-elicit-prior-prediction',
        number: 1,
        title: 'Force High-Confidence Commitment Before Solution Exposure',
        prompt: 'Identify a complex domain topic or code architectural pattern where you or your team frequently make errors. Formulate a diagnostic edge-case scenario that forces you to write down your explicit prediction and rationale before checking the answer:',
        placeholder: 'e.g., Code Snippet: What will Python evaluate for `def f(x=[]): x.append(1); return x` called twice? My prediction: [1], then [1] because default args initialize on each call...',
        example: 'Database Isolation: Predict whether a READ COMMITTED transaction in PostgreSQL can experience non-repeatable reads during concurrent updates. Explicit Prediction: "No, read committed prevents all dirty phenomena." Rationale: Committed data is safe.',
        cognitiveRationale: 'Without active retrieval, existing schemas remain dormant and inaccessible to synaptic remodeling (Nader et al., 2000).',
      },
      {
        id: 'step-engineer-unambiguous-prediction-error',
        number: 2,
        title: 'Execute and Confront the Unambiguous Prediction Error',
        prompt: 'Run the benchmark, compiler, or empirical test to generate an unmistakable discrepancy between your prediction and reality. Document the exact surprise signal:',
        placeholder: 'e.g., Execution Result: Python returns [1, 1] on second call! Surprise: Default arguments are evaluated only once at function definition time, NOT at invocation time...',
        example: 'Execution: PostgreSQL allows non-repeatable reads in READ COMMITTED mode! A second SELECT saw rows updated and committed by transaction B mid-flight. Prediction Error: READ COMMITTED only locks row-level snapshots per statement, not per transaction.',
        cognitiveRationale: 'Pedreira et al. (2004) proved that an authentic, surprising prediction error is strictly required to activate the ubiquitin-proteasome degradation cascade and labilize the memory trace.',
      },
      {
        id: 'step-deliver-corrective-schema-within-window',
        number: 3,
        title: 'Integrate the Accurate Model Within the 4-Hour Window',
        prompt: 'While the cognitive model is labile, diagram the accurate structural mechanism and write a contrastive explanation before restabilization locks the trace:',
        placeholder: 'e.g., Structural Diagram: Default args are stored on `f.__defaults__` tuple bound to the function object in the heap. Fix: Always use `def f(x=None): if x is None: x = []`...',
        example: 'Structural Diagram: Statement-level MVCC snapshots vs Transaction-level MVCC snapshots. In REPEATABLE READ, the snapshot is taken at the first statement of the transaction and held. In READ COMMITTED, each statement generates a fresh snapshot. Lock in the new schema.',
        cognitiveRationale: 'Delivering the structural correction within the 4-hour window enables de novo protein synthesis to reconsolidate the new representation directly into the original memory architecture (Schiller et al., 2010).',
      },
    ],
  },
};
