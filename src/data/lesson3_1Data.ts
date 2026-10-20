import type { Lesson } from '../types/learning.ts';

export const LESSON_CALIBRATED_ERROR_SIGNALS: Lesson = {
  id: 'calibrated-error-signals',
  chapterId: 'ch-3-deliberate-practice',
  number: '3.1',
  title: 'Calibrated Error Signals',
  subtitle: 'Prediction Errors, Feedback Loops, and Self-Correction',
  readingTimeMinutes: 16,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'When students take a difficult technical exam, they naturally assume that the questions they answer incorrectly with 100% confidence will be the hardest to correct. Cognitive neuroscience reveals the exact opposite: high-confidence errors are corrected faster, more permanently, and with greater neural plasticity than hesitant errors. Why is being completely, confidently wrong the most powerful learning catalyst in the human brain?',
    teaser: 'We dread making mistakes because legacy schooling treated errors as moral failures. Neurobiology reveals that prediction error is the literal currency of synaptic learning.',
    hookNote: 'Midbrain dopamine neurons do not fire for rewards; they fire for Reward Prediction Errors—the mathematical difference between what your internal model predicted and what reality produced (Schultz, 1997). When you make a confident error, the gap between subjective expectation and corrective reality triggers a massive P300 event-related potential and involuntary attentional capture: The Hypercorrection Effect (Butterfield & Metcalfe, 2001, 2006). Without an error signal, your brain has zero biological reason to update its neural schemas.',
  },
  prediction: {
    prompt: 'Before exploring the mechanics of feedback loops, test your pedagogical intuition: Which instructional feedback protocol produces the fastest, most durable correction of persistent conceptual errors in software engineering?',
    context: 'Three cohorts of junior software engineers learn complex concurrency and memory safety bugs across a 4-week debugging curriculum:',
    options: [
      {
        id: 'opt-passive-solution',
        strategy: 'Protocol Alpha (Passive Correct Solution)',
        description: 'Learners attempt the bug fix; if they get stuck or fail, the IDE immediately displays the complete corrected code solution.',
      },
      {
        id: 'opt-vague-praise',
        strategy: 'Protocol Beta (Vague Encouragement & Broad Hint)',
        description: 'The IDE provides supportive praise ("Good effort!") and a broad hint ("Think about thread safety!").',
      },
      {
        id: 'opt-prediction-discrepancy',
        strategy: 'Protocol Gamma (Forced Prediction & Calibrated Discrepancy)',
        description: 'Learners must explicitly commit their predicted program output and confidence score before running tests. If an error occurs, the IDE highlights the exact discrepancy between predicted vs actual runtime state.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-prediction-discrepancy',
      headline: 'Forced Prediction & Calibrated Discrepancy (Protocol Gamma) produces over 250% higher error correction and transfer to novel architectural bugs (Schultz, 1997; Butterfield & Metcalfe, 2001; Hattie & Timperley, 2007).',
      explanation: 'When learners passively view solutions (Protocol Alpha), working memory recency buffers accept the code without generating a prediction error, leading to rapid forgetting. Vague praise (Protocol Beta) directs attention to ego preservation rather than task mechanics. Forced prediction (Protocol Gamma) primes neural circuits with an expected state. When tests fail, the resulting prediction error triggers a dopaminergic burst, involuntary focal attention, and permanent schema revision.',
      optionFeedback: {
        'opt-passive-solution': {
          title: 'Your Choice: Protocol Alpha (Passive Solution)',
          verdict: 'The Passive Acceptance Trap',
          analysis: 'Looking at the solution feels satisfying because of perceptual fluency, but it generates zero prediction error. Without an error discrepancy signal, your brain does not engage synaptic plasticity.',
        },
        'opt-vague-praise': {
          title: 'Your Choice: Protocol Beta (Vague Praise)',
          verdict: 'The Motivational Illusion',
          analysis: 'Hattie & Timperley (2007) proved that person-level praise has near-zero effect on learning. It distracts cognitive resources toward ego protection and provides zero actionable feed-forward direction.',
        },
        'opt-prediction-discrepancy': {
          title: 'Your Choice: Protocol Gamma (Forced Prediction & Calibrated Discrepancy)',
          verdict: 'Empirically Supported Strategy (Prediction Error Maximization)',
          analysis: 'Exact cognitive calibration! Forcing learners to commit an explicit hypothesis before viewing results maximizes the cognitive prediction error when discrepancies occur, unlocking the Hypercorrection Effect and permanently restructuring mental models.',
        },
      },
      comparisons: [
        {
          label: 'Passive Solution (Protocol Alpha)',
          immediateRetention: '70% (Feels clear while reading)',
          oneWeekRetention: '22% at 1 month (Rapid decay)',
          illusionRating: 'High (feels like learning, but inert)',
          isEmpiricalWinner: false,
        },
        {
          label: 'Vague Praise (Protocol Beta)',
          immediateRetention: '45% (Uncertain)',
          oneWeekRetention: '18% at 1 month (Low transfer)',
          illusionRating: 'Moderate (encouraging, but lacks signal)',
          isEmpiricalWinner: false,
        },
        {
          label: 'Forced Prediction Discrepancy (Protocol Gamma)',
          immediateRetention: '82% (High engagement)',
          oneWeekRetention: '88% at 1 month (Hypercorrection durability)',
          illusionRating: 'Calibrated; mistakes become permanent learning milestones',
          isEmpiricalWinner: true,
        },
      ],
      evidenceDistinction: 'Empirical Evidence Distinction: The neurobiology of Reward Prediction Errors in dopamine circuits (Schultz, 1997) and the Hypercorrection Effect (Butterfield & Metcalfe, 2001) are universally replicated empirical consensus. While computational reinforcement learning directly models these mechanisms via temporal difference learning, human cognitive architecture also incorporates conscious epistemic surprise and verbal metacognitive reasoning.',
    },
  },
  coreExplanations: [
    {
      id: 'reward-prediction-error',
      title: '1. Reward Prediction Errors & Dopaminergic Plasticity',
      tagline: 'How midbrain circuits use mathematical surprise to rewrite neural weights',
      scientificStatus: 'neurobiological-mechanism',
      statusLabel: 'Neurobiological Mechanism',
      summary: 'In 1997, neuroscientist Wolfram Schultz made a revolutionary discovery: midbrain dopamine neurons in the substantia nigra and ventral tegmental area (VTA) do not fire in response to rewards or correct answers themselves. Instead, they fire in response to Prediction Errors—the mathematical difference between what your internal model predicted and what the environment actually produced.',
      mechanisms: [
        {
          label: 'The Prediction Error Equation: δ = R_actual - V_expected',
          description: 'If you expect an outcome of value V and receive outcome R, the prediction error δ dictates neural firing. If you predict a test will pass and it passes, δ = 0: dopamine firing remains flat at baseline. Learning halts because your current internal model already accounts for reality.',
        },
        {
          label: 'Dopaminergic Bursts & Dips',
          description: 'When reality is surprisingly better than expected (positive RPE), dopamine neurons fire a burst, signaling synaptic strengthening (long-term potentiation). When reality is worse or conflicts with expectation (negative RPE), dopamine dips below baseline, signaling that the current model is defective and must be updated.',
        },
        {
          label: 'The Stagnation of Zero Error',
          description: 'If you only practice problems you can already solve with 100% accuracy, prediction error δ is perpetually zero. Despite spending hours studying, zero dopamine-driven synaptic remodeling occurs. Learning requires encountering calibrating discrepancies.',
        },
      ],
      keyInsight: 'If you are not experiencing prediction errors during study, you are not learning—you are merely rehearsing what your brain already knows.',
      simplifiedModelCaveat: 'Dopaminergic prediction error is rooted in basal ganglia reinforcement learning circuits. In complex intellectual tasks, cortical areas (dorsal anterior cingulate cortex and prefrontal cortex) translate raw prediction errors into conscious conceptual updates.',
    },
    {
      id: 'hypercorrection-epistemic-surprise',
      title: '2. The Hypercorrection Effect & Epistemic Surprise',
      tagline: 'Why being confidently wrong is superior to being timidly correct',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Empirical Consensus',
      summary: 'Butterfield and Metcalfe (2001, 2006) revealed the Hypercorrection Effect: when learners commit an error with high subjective confidence, and are then given corrective feedback, they are significantly more likely to correct that error on future retests than if they had made the error with low confidence.',
      mechanisms: [
        {
          label: 'The Hypercorrection Paradox (Butterfield & Metcalfe, 2001)',
          description: 'Common sense predicts that high-confidence misconceptions should be deeply entrenched and resistant to change. In reality, discovering that you are dead wrong when you were 100% certain violates expectations so violently that it produces an intense epistemic surprise.',
        },
        {
          label: 'The Electrophysiological Surprise Marker: P300 Surge',
          description: 'EEG recordings show that high-confidence errors elicit an immediate, involuntary surge in the P300 event-related potential—a biological marker of intense focal attention and memory updating. The brain automatically allocates maximum cognitive resources to dissecting the corrective feedback.',
        },
        {
          label: 'Rapid Synaptic Reconsolidation under High Arousal',
          description: 'The shock of a high-confidence error releases norepinephrine and acetylcholine, placing the active neural trace into a state of heightened neuroplastic vulnerability. Corrective feedback presented during this window overwrites the misconception permanently.',
        },
      ],
      keyInsight: 'Never hesitate to commit your hypothesis for fear of being wrong. Being confidently wrong followed by clear corrective feedback is the fastest route to permanent mastery.',
      simplifiedModelCaveat: 'The Hypercorrection Effect strictly requires that corrective feedback is delivered and scrutinized. If a confident error is made but no feedback is provided, the misconception remains entrenched.',
    },
    {
      id: 'architecture-calibrated-feedback',
      title: '3. The Architecture of Calibrated Feedback',
      tagline: 'Feed-Up, Feed-Back, and Feed-Forward: Converting errors into actionable mastery',
      scientificStatus: 'cognitive-model',
      statusLabel: 'Validated Cognitive Architecture Model',
      summary: 'In their monumental synthesis of over 800 meta-analyses, John Hattie and Helen Timperley (2007) analyzed what makes feedback effective versus useless. They established that feedback is not a post-hoc evaluation; it is an active cybernetic guidance system answering three non-negotiable questions: Feed-Up, Feed-Back, and Feed-Forward.',
      mechanisms: [
        {
          label: 'The Feed-Up, Feed-Back, Feed-Forward Triad (Hattie & Timperley, 2007)',
          description: '1) Feed-Up: "Where am I going?" (Clear, explicit target performance standard); 2) Feed-Back: "How am I going?" (Precise measurement of current discrepancy); 3) Feed-Forward: "Where to next?" (Concrete actionable next steps to close the gap).',
        },
        {
          label: 'The Toxic Inutility of Ego-Level Praise',
          description: 'Person-level praise ("You are a genius!", "Great effort!") carries an effect size close to zero (d ≈ 0.12). It shifts the learner’s focus from task mechanics to self-image preservation, breeding defensive vulnerability and feedback avoidance.',
        },
        {
          label: 'Tightening the Temporal Latency Loop',
          description: 'The learning power of feedback decays exponentially as the delay between prediction and feedback increases. Immediate discrepancy signals catch neural traces while NMDA receptors and working memory buffers are still active, enabling precise synaptic weight adjustments.',
        },
      ],
      keyInsight: 'Reject vague encouragement and person-level praise. Demand calibrated, process-level discrepancy feedback that specifies the exact gap and the next concrete adjustment.',
      simplifiedModelCaveat: 'While immediate feedback is optimal for motor skills and procedural tasks, delaying feedback slightly for complex conceptual tasks can sometimes force beneficial elaborative retrieval before the answer is revealed.',
    },
  ],
  diagram: {
    title: 'The Error-Calibrated Learning Engine',
    subtitle: 'How prediction commitment, error signals, and corrective feedback restructure mental models',
    stages: [
      {
        id: 'prediction-commitment',
        name: 'Stage 1: Explicit Hypothesis Commitment',
        subtitle: 'Activating the prefrontal internal model',
        capacity: 'High-focus working memory representation',
        duration: '5–15 seconds of conscious deliberation',
        role: 'Learner commits an explicit prediction (expected output, code behavior, or diagnostic hypothesis) before executing the action.',
        failureMode: 'Passive observation: running code or looking at answers without committing a prior prediction generates zero expected state.',
        evidenceType: 'Empirical consensus (Schultz 1997; Butterfield 2001)',
        practicalFix: 'Write down your expected result or state before running any command or opening a solution.',
      },
      {
        id: 'environmental-collision',
        name: 'Stage 2: Reality Collision & Prediction Error (RPE)',
        subtitle: 'The mathematical surprise delta (δ)',
        capacity: 'Midbrain dopaminergic & anterior cingulate signaling',
        duration: '100–300 ms post-collision',
        role: 'Environmental reality (test results, compiler errors, or expert solution) is compared against the predicted state. If a mismatch exists, δ = R_actual - V_expected fires.',
        failureMode: 'Defensive discounting: dismissing compiler errors as "flukes" or blaming the test suite eliminates the error signal.',
        evidenceType: 'Neurobiological mechanism (Schultz 1997; Montague 2004)',
        practicalFix: 'Treat every error as a high-signal discrepancy rather than an inconvenience.',
      },
      {
        id: 'hypercorrection-surge',
        name: 'Stage 3: P300 Attentional Surge & Plasticity Window',
        subtitle: 'Involuntary epistemic capture',
        capacity: 'P300 ERP amplitude & neuromodulator surge',
        duration: '300–800 ms following discrepancy',
        role: 'The surprise of being wrong triggers an involuntary surge in attention, unlocking the synaptic trace into a labile state primed for rapid overwriting.',
        failureMode: 'Immediate distraction: looking away from the error immediately aborts the neuroplastic consolidation window.',
        evidenceType: 'Empirical consensus (Butterfield & Metcalfe 2006)',
        practicalFix: 'Maintain focus on the discrepancy for at least 15 seconds to let the P300 attentional cascade complete.',
      },
      {
        id: 'schema-updating-feedforward',
        name: 'Stage 4: Schema Updating & Feed-Forward Calibration',
        subtitle: 'Closing the cybernetic loop',
        capacity: 'Neocortical schema restructuring',
        duration: 'Minutes to hours during post-error reflection',
        role: 'Corrective process feedback replaces the erroneous rule in long-term memory, updating future predictions and recalibrating confidence.',
        failureMode: 'Superficial patching: fixing the syntax error without updating the underlying mental model guarantees future recurrence.',
        evidenceType: 'Empirical consensus (Hattie & Timperley 2007)',
        practicalFix: 'Log the root cause conceptual misconception in an error journal before moving to the next task.',
      },
    ],
    feedbackLoopDescription: 'The Cybernetic Calibration Loop: Each pass through Stages 1–4 updates the internal model in Stage 1. Over time, prediction error δ approaches zero for routine tasks, freeing cognitive bandwidth to tackle higher-order architectural complexities.',
  },
  exercise: {
    title: 'Feedback Calibration Diagnostic: Identify the Error Loop Pathology',
    instruction: 'Analyze each real-world engineering learning scenario and identify which feedback loop dynamic or pathology is primarily operating.',
    categories: [
      {
        id: 'schema-consolidation',
        title: 'Optimal Prediction Error & Calibrated Feedback',
        description: 'Explicit hypothesis commitment followed by immediate discrepancy signals that trigger hypercorrection.',
        badgeStyle: 'var(--success-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Confirmation Bias / Feedback Avoidance',
        description: 'Peeking at answers or avoiding tests to preserve the illusion of mastery, eliminating prediction errors.',
        badgeStyle: 'var(--danger-border)',
      },
      {
        id: 'working-memory-overload',
        title: 'Delayed / Vague Feedback Disconnection',
        description: 'Feedback delivered after long delays without process direction, disconnecting error from cause.',
        badgeStyle: 'var(--warning-border)',
      },
      {
        id: 'attention-bottleneck',
        title: 'Ego-Defensive Rationalization / External Blame',
        description: 'Blaming tools, compilers, or instructors for failures to avoid updating defective internal schemas.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-explain-analyze-predict',
        realWorldContext: 'Database Performance Optimization',
        scenario: 'Tariq is tuning a slow PostgreSQL query. Before running EXPLAIN ANALYZE, he writes down his exact hypothesis: "The query will do a Sequential Scan on the orders table because the index on customer_id has low cardinality." When EXPLAIN ANALYZE reveals a Bitmap Index Scan on created_at, he feels a shock of surprise, immediately examines the planner statistics, and learns how the optimizer evaluates cost.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'Tariq implemented optimal prediction error learning. Committing an explicit hypothesis generated a sharp expectation. When reality diverged, the resulting prediction error triggered high focal attention (P300 surge) and durable schema updating.',
        evidenceBasedFix: 'Maintain this explicit hypothesis pre-commitment before running profiling or diagnostic tools.',
      },
      {
        id: 'scen-solution-peek-cheater',
        realWorldContext: 'Algorithm Problem Solving',
        scenario: 'Mei is working through a dynamic programming syllabus. On problem 3, she reads the prompt for 45 seconds, feels unsure, and clicks "View Editorial Solution." Reading the solution, she nods and thinks, "Ah, of course, memoize the grid dimensions—that makes total sense." She moves on without writing code.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'Mei engaged in Feedback Avoidance and Confirmation Bias. By viewing the solution before committing a prediction or attempt, she generated zero prediction error (δ = 0), mistaking perceptual comprehension for durable problem-solving ability.',
        evidenceBasedFix: 'Enforce mandatory prediction commitment: write down a full pseudocode attempt or state your algorithm’s recurrence relation before viewing any editorial.',
      },
      {
        id: 'scen-three-week-assignment',
        realWorldContext: 'University Operating Systems Course',
        scenario: 'Julian submits his multi-threaded kernel synchronizer project. Three weeks later, the teaching assistant returns his assignment with a red grade "74/100" and a comment: "Thread race condition detected on teardown." Julian has already forgotten how his lock hierarchy was structured and discards the paper.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'Julian suffered from Delayed Feedback Disconnection. Because the feedback arrived 21 days after the code was written, the original working memory context and synaptic traces had completely decayed, rendering the error signal biologically inert.',
        evidenceBasedFix: 'Automate continuous feedback loops: use automated regression test suites and concurrency stress tests that provide immediate discrepancy signals while code is being written.',
      },
      {
        id: 'scen-compiler-blamer',
        realWorldContext: 'Rust Systems Programming Lab',
        scenario: 'Alex is learning Rust borrow checker semantics. When the compiler throws a lifetime error E0499 ("cannot borrow as mutable more than once"), Alex gets angry, curses the compiler as "broken and pedantic," and adds random `.clone()` calls until the error disappears without reading the lifetime explanation.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'Alex fell into Ego-Defensive Rationalization. Instead of using the compiler’s precise discrepancy feedback to update his mental model of memory lifespans, he treated the error as an external enemy, masking the bug with clones and preventing learning.',
        evidenceBasedFix: 'Adopt an error-seeking mindset: treat compiler diagnostic errors as free pair-programming guidance designed to reveal defects in your internal model.',
      },
    ],
  },
  quiz: {
    title: 'Calibrated Error Signals & Feedback Loops Assessment',
    instruction: 'Validate your understanding of reward prediction errors, the hypercorrection effect, and empirical feedback science.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-schultz-dopamine-rpe',
        question: 'In Wolfram Schultz’s seminal 1997 neurobiological research, what specific condition caused midbrain dopamine neurons to fire bursting action potentials?',
        options: [
          {
            id: 'q1-a',
            text: 'When a reward was delivered exactly when and where it was fully expected.',
          },
          {
            id: 'q1-b',
            text: 'When an outcome was surprisingly better than predicted (positive Reward Prediction Error: δ > 0).',
          },
          {
            id: 'q1-c',
            text: 'Whenever the organism was completely asleep with zero sensory input.',
          },
          {
            id: 'q1-d',
            text: 'Only when the organism was punished with an electric shock.',
          },
        ],
        correctOptionId: 'q1-b',
        explanation: 'Schultz (1997) proved that dopamine neurons fire not for rewards themselves, but for prediction errors (δ = Actual - Expected). When an outcome is fully expected, dopamine firing is flat. Bursts occur only when reality exceeds expectation, while dips occur when reality is worse than expected. Prediction error is the biological trigger of synaptic learning.',
        pedagogicalRationale: 'Clarifies that dopamine is an error-prediction learning signal, not merely a pleasure molecule.',
        evidenceNote: 'Schultz, W., Dayan, P., & Montague, P. R. (1997). A neural substrate of prediction and reward. Science.',
      },
      {
        id: 'q2-butterfield-hypercorrection',
        question: 'What is the "Hypercorrection Effect" discovered by Butterfield & Metcalfe (2001), and why does it contradict traditional educational intuition?',
        options: [
          {
            id: 'q2-a',
            text: 'Errors made with high subjective confidence are corrected significantly faster and more durably on subsequent retests than errors made with low confidence.',
          },
          {
            id: 'q2-b',
            text: 'High-confidence errors can never be corrected and must be surgically excised from the hippocampus.',
          },
          {
            id: 'q2-c',
            text: 'Students who make mistakes should be disqualified from taking higher-level technical coursework.',
          },
          {
            id: 'q2-d',
            text: 'Low-confidence guesses produce greater neuroplasticity than confident predictions.',
          },
        ],
        correctOptionId: 'q2-a',
        explanation: 'Butterfield & Metcalfe (2001) showed that when learners discover they are wrong on a question they answered with high confidence, the massive epistemic surprise triggers an involuntary surge in attention (P300 ERP wave). This heightened attention deeply encodes the corrective feedback, resulting in superior long-term correction compared to hesitant errors.',
        pedagogicalRationale: 'Teaches learners that making confident errors is not a tragedy, but an ideal condition for rapid learning.',
        evidenceNote: 'Butterfield, B., & Metcalfe, J. (2001). Errors committed with high confidence are easy to correct. Journal of Experimental Psychology.',
      },
      {
        id: 'q3-hattie-feedback-levels',
        question: 'According to John Hattie and Helen Timperley’s (2007) meta-analytic framework, why is person-level praise ("You are so smart!", "Good job!") ineffective for driving learning?',
        options: [
          {
            id: 'q3-a',
            text: 'Praise directs the learner’s cognitive attention toward self-image and ego defense, providing near-zero information about task performance or how to improve.',
          },
          {
            id: 'q3-b',
            text: 'Praise permanently damages dopamine receptor density in the prefrontal cortex.',
          },
          {
            id: 'q3-c',
            text: 'Praise should only be given to kindergarteners, never to adult professionals.',
          },
          {
            id: 'q3-d',
            text: 'Praise causes students to forget how to read technical documentation.',
          },
        ],
        correctOptionId: 'q3-a',
        explanation: 'Hattie & Timperley (2007) found that person-level praise carries an almost negligible effect size (d ≈ 0.12). Praise contains zero actionable feed-up, feed-back, or feed-forward information. Worse, it shifts the student’s focus to protecting their self-image, inducing fear of failure and defensive feedback avoidance.',
        pedagogicalRationale: 'Guides learners to seek process-level discrepancy signals rather than empty verbal praise.',
        evidenceNote: 'Hattie, J., & Timperley, H. (2007). The power of feedback. Review of Educational Research.',
      },
      {
        id: 'q4-pre-commitment-necessity',
        question: 'Why is committing an explicit hypothesis or prediction BEFORE viewing an outcome essential for maximizing feedback learning?',
        options: [
          {
            id: 'q4-a',
            text: 'It proves to the instructor that the student is paying attention during class.',
          },
          {
            id: 'q4-b',
            text: 'Without a prior prediction, working memory accepts the outcome passively with zero prediction error (δ = 0), preventing synaptic remodeling.',
          },
          {
            id: 'q4-c',
            text: 'Predictions permanently lock memory circuits so that no new information can ever be learned.',
          },
          {
            id: 'q4-d',
            text: 'Explicit commitments prevent learners from ever experiencing confusion or cognitive dissonance.',
          },
        ],
        correctOptionId: 'q4-b',
        explanation: 'If you observe an outcome without having committed a prior prediction, your brain simply rationalizes the observation in hindsight ("I knew that all along"). Explicit commitment establishes an active expected state V in working memory. When reality differs, the resulting discrepancy produces an authentic prediction error (δ), forcing the brain to update its internal model.',
        pedagogicalRationale: 'Reinforces the core behavioral habit of prediction commitment across all technical work.',
        evidenceNote: 'Montague, P. R., Hyman, S. E., & Cohen, J. D. (2004). Computational roles for dopamine in behavioral control. Nature.',
      },
    ],
  },
  practicalTask: {
    title: 'The Daily Prediction Error Journal & Calibration Protocol',
    summary: 'Systematically engineer prediction errors into your daily technical work to accelerate skill acquisition and eliminate blind spots.',
    steps: [
      {
        id: 'step-pre-execution-commitment',
        number: 1,
        title: 'Pre-Execution Hypothesis Commitment',
        prompt: 'Select a coding task, test execution, or architectural decision today. Before executing the command or viewing results, write down your predicted outcome and confidence rating (1 to 5):',
        placeholder: 'e.g., Action: Running unit test for payment gateway retry logic. My Hypothesis: "The test will fail at line 42 with a 429 Too Many Requests error because the exponential backoff cap is set to 2 seconds instead of 10." Confidence: 4 / 5...',
        example: 'Action: Executing database schema migration on staging. Hypothesis: "The ALTER TABLE statement will acquire an ACCESS EXCLUSIVE lock and take <100ms because the table has only 50k rows." Confidence: 5 / 5.',
        cognitiveRationale: 'Explicit commitment creates an active expected state (V_expected), priming neural circuits for a high-potency prediction error if reality diverges.',
      },
      {
        id: 'step-discrepancy-logging',
        number: 2,
        title: 'The Reality Discrepancy & Surprise Audit',
        prompt: 'Execute the action. Observe the actual outcome. Calculate your prediction error: Did reality match expectation? If not, describe the exact discrepancy and your degree of surprise:',
        placeholder: 'e.g., Actual Result: "The migration timed out after 5 seconds with a lock queue timeout! Surprise: Extremely High. Discrepancy: An unindexed foreign key in a background worker was holding a RowShareLock, blocking the ALTER TABLE."',
        example: 'Actual Result: The test failed at line 58 with an unexpected NullPointerException rather than a 429 error. Surprise: High. Discrepancy: The mock HTTP client was returning null response headers on 429 status codes.',
        cognitiveRationale: 'Scrutinizing the discrepancy while emotional surprise is active triggers the P300 attentional cascade and rapid synaptic reconsolidation.',
      },
      {
        id: 'step-feed-forward-updating',
        number: 3,
        title: 'Feed-Forward Rule Formulation',
        prompt: 'Formulate one concrete, generalizable heuristic or design rule to update your mental model and prevent this specific error from recurring:',
        placeholder: 'e.g., Feed-Forward Rule: "Before running DDL migrations in PostgreSQL, always query pg_stat_activity to verify no active transactions or background workers are holding locks on related foreign-key tables."',
        example: 'Feed-Forward Rule: "Always verify that mock HTTP clients implement full RFC compliance for edge-case HTTP response headers before relying on retry assertions."',
        cognitiveRationale: 'Feed-forward rule synthesis translates raw prediction error surprise into durable, transferable neocortical schemas.',
      },
    ],
  },
};
