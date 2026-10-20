import type { Lesson } from '../types/learning.ts';

export const LESSON_OVERCONFIDENCE_EPISTEMIC_CALIBRATION: Lesson = {
  id: 'dunning-kruger-calibration',
  chapterId: 'ch-18-biases-epistemic',
  number: '18.1',
  title: 'Overconfidence & Epistemic Calibration',
  subtitle: 'Dunning-Kruger curves and constructing objective calibration mirrors',
  readingTimeMinutes: 15,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'When you feel 90% certain you understand a complex technical subject, why does empirical testing show your accuracy is rarely higher than 65%—and why are the least competent individuals the most supremely confident?',
    teaser: 'Subjective feeling of knowing is an artifact of cognitive fluency, not empirical truth; incompetence carries a dual burden that blinds novices to their own deficits.',
    hookNote: 'In 1999, social psychologists Justin Kruger and David Dunning published their watershed investigation in the Journal of Personality and Social Psychology, exposing a foundational paradox of human metacognition: the "Dual Burden of Incompetence." In any complex domain—logic, grammar, software architecture, medical diagnosis—the very knowledge required to produce correct answers is the exact same knowledge required to evaluate whether an answer is correct. Consequently, individuals in the bottom quartile of performance lack the mental models to recognize errors, estimating their competence in the 60th to 70th percentile. Meanwhile, top performers suffer from a false-consensus bias, underestimating their relative superiority. Decision scientists like Baruch Fischhoff and Philip Tetlock revealed that uncalibrated human intuition consistently suffers from the "Overconfidence Bias"—subjective confidence routinely outpaces empirical hit rates. In this lesson, we deconstruct the Dunning-Kruger effect, unpack the mathematical architecture of Epistemic Calibration Curves and Brier Scores, explore the neurobiology of confidence monitoring in the rostrolateral prefrontal cortex (rlPFC / BA 10) and Anterior Cingulate Cortex (ACC), and build an objective "Calibration Mirror" with debiasing protocols to bring your subjective confidence into 1:1 alignment with reality.',
  },
  prediction: {
    prompt: 'A large technology engineering organization is evaluating two different system architecture and code review training formats for 100 junior engineers:\n\nFormat A ("Intuitive Self-Rating & Peer Encouragement"): Engineers solve architectural design problems, rate their confidence on a 1-to-10 scale, discuss their solutions with peers, and receive supportive verbal encouragement from mentors.\n\nFormat B ("Objective Calibration Mirror & Brier Tracking"): Before inspecting any solution, engineers make explicit binary predictions regarding the correctness of their design choices, attach a numerical subjective probability (50%, 60%, 70%, 80%, 90%, 100%), and perform Lord, Lepper & Preston’s "Considering the Opposite" protocol (writing 2 concrete reasons why their design might fail in production). Their empirical Brier Score is plotted on a public calibration curve.\n\nAfter 4 weeks, both groups are tested on assessing live production microservice failures and predicting disaster scenarios. What does empirical decision science predict?',
    context: 'Both groups had identical initial engineering backgrounds, practiced for the exact same number of hours, and solved identical architectural challenge scenarios:',
    options: [
      {
        id: 'opt-format-a-supportive-confidence',
        strategy: 'Hypothesis A: Supportive Peer Encouragement Advantage',
        description: 'Format A engineers will show superior calibration because supportive peer environments eliminate anxiety and foster natural, unforced metacognitive reflection.',
      },
      {
        id: 'opt-format-b-calibration-mirror',
        strategy: 'Hypothesis B: Objective Calibration Mirror & Brier Tracking',
        description: 'Format B engineers will achieve vastly superior epistemic calibration and significantly lower Brier scores (Tetlock, 2015; Lichtenstein & Fischhoff, 1980) because explicit probability commitments and "considering the opposite" dismantle fluency heuristics and recruit prefrontal error-monitoring networks.',
      },
      {
        id: 'opt-equivalent-epistemic-calibration',
        strategy: 'Hypothesis C: Equal Metacognitive Equivalence',
        description: 'Both groups will perform identically because metacognitive accuracy is an innate cognitive trait that cannot be altered by logging protocols or probability tracking.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-format-b-calibration-mirror',
      headline: 'Objective Calibration Mirrors Puncture Overconfidence: Numerical Probability Commitments and Counter-Factual Thinking Eliminate Fluency Illusions (Kruger & Dunning, 1999; Tetlock, 2015; Lord et al., 1984).',
      explanation: 'Empirical decision science demonstrates that unassisted human metacognition is deeply vulnerable to the Overconfidence Bias. When engineers in Format A rate their confidence informally on a 1-10 scale with peer encouragement, they rely on "Feeling of Rightness" (FOR)—a fluency heuristic driven by ease of conceptual processing in working memory. This exacerbates the Dunning-Kruger effect: because they lack the deep normative schemas to perceive their design flaws, they rate their confidence at 8/10 or 9/10 while committing fatal architectural blunders. In Format B, the engineers use an Objective Calibration Mirror. By requiring explicit numerical probability buckets (e.g. 70% vs 90%) and calculating their empirical Brier Score ($Brier = \\frac{1}{N}\\sum(f_i - o_i)^2$), engineers receive undeniable mathematical proof of their overconfidence gap. Furthermore, Lord, Lepper & Preston’s (1984) "Considering the Opposite" protocol forces the retrieval of disconfirming causal pathways, overcoming the confirmatory retrieval bias of memory. Over 4 weeks, Format B engineers calibrate their subjective certainty to empirical accuracy, drastically reducing production failure rates.',
      optionFeedback: {
        'opt-format-a-supportive-confidence': {
          title: 'Your Choice: Hypothesis A (Supportive Peer Encouragement)',
          verdict: 'Refuted by Metacognitive & Epistemic Calibration Science',
          analysis: 'Informal discussion and positive encouragement inflate the illusion of competence. Without quantitative verification mirrors, novices remain trapped in the Dunning-Kruger dual burden.',
        },
        'opt-format-b-calibration-mirror': {
          title: 'Your Choice: Hypothesis B (Objective Calibration Mirror)',
          verdict: 'Empirical Decision Science & Superforecasting Consensus',
          analysis: 'Correct! Philip Tetlock (2015) and Baruch Fischhoff (1982) demonstrated that tracking explicit probability commitments and decomposing errors via Brier scores is the only proven method to calibrate epistemic judgment.',
        },
        'opt-equivalent-epistemic-calibration': {
          title: 'Your Choice: Hypothesis C (Equal Metacognitive Equivalence)',
          verdict: 'Refuted by Neuroplasticity & Calibration Feedback Research',
          analysis: 'Metacognitive calibration is a trainable cognitive skill, not a static trait. Structured calibration feedback retrains the rostrolateral prefrontal cortex (rlPFC / BA 10) to accurately quantify uncertainty.',
        },
      },
      comparisons: [
        {
          label: 'Brier Score Epistemic Accuracy (Lower is Superior, 0.0 = Perfect)',
          immediateRetention: '0.34 (Uncalibrated Intuition in Format A)',
          oneWeekRetention: '0.09 (Calibrated Mirror in Format B)',
          illusionRating: 'Format A displays severe overconfidence gap',
          isEmpiricalWinner: true,
        },
        {
          label: '90% Confidence Accuracy Gap (Overconfidence Margin)',
          immediateRetention: 'Actual Accuracy: 61% (Format A)',
          oneWeekRetention: 'Actual Accuracy: 89% (Format B)',
          illusionRating: 'Format B achieves near-perfect identity calibration',
          isEmpiricalWinner: true,
        },
      ],
      evidenceDistinction: 'Justin Kruger & David Dunning (1999) Journal of Personality and Social Psychology; Philip Tetlock (2015) Superforecasting; Lichtenstein, Fischhoff & Phillips (1982) Calibration of Probabilities.',
    },
  },
  coreExplanations: [
    {
      id: 'kruger-dunning-dual-burden',
      title: 'Kruger & Dunning (1999): The Dual Burden of Incompetence',
      tagline: 'Why the cognitive deficits that cause failure also blind you to error',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Empirical Consensus in Social & Cognitive Psychology',
      summary: 'Justin Kruger and David Dunning (1999) proved that in complex domains, incompetence carries a dual burden: the knowledge deficits that cause individuals to make poor choices simultaneously rob them of the metacognitive capacity required to recognize what constitutes high competence. In classic trials, participants scoring in the bottom 12th percentile on logic and grammar estimated their performance in the 62nd percentile. Because novices lack internal normative models, they cannot calibrate against errors. Conversely, top performers suffer from a false-consensus illusion, assuming tasks easy for them are easy for others. Kruger & Dunning proved that the only reliable way to reduce novice overconfidence is to train them in genuine domain competence, which equips their prefrontal monitoring systems to perceive their own previous errors.',
      mechanisms: [
        {
          label: 'The Metacognitive Dual Burden',
          description: 'The exact same knowledge required to produce correct solutions is required to evaluate whether a solution is correct; novices lack both simultaneously.'
        },
        {
          label: 'Asymmetric Percentile Distortion',
          description: 'Bottom-quartile performers severely overestimate their relative competence (~60th percentile), while top-quartile performers underestimate their relative superiority.'
        },
        {
          label: 'Competence-Driven Calibration Restoration',
          description: 'Teaching novices genuine structural competence paradoxically lowers their self-ratings, as they acquire the schemas needed to detect their mistakes.'
        }
      ],
      keyInsight: 'The Dunning-Kruger effect is not an arrogant character defect; it is a structural cognitive blindness. When you enter an unfamiliar domain, your brain is structurally incapable of assessing its own incompetence until deep schemas are acquired.',
      simplifiedModelCaveat: 'The Dunning-Kruger effect is domain-specific. A Nobel laureate in physics will experience classic Dunning-Kruger overconfidence if they attempt to trade financial derivatives or diagnose complex autoimmune pathology.'
    },
    {
      id: 'brier-score-calibration-curves',
      title: 'Epistemic Calibration Curves & Brier Score Decomposition',
      tagline: 'The mathematical quantification of subjective certainty versus empirical truth',
      scientificStatus: 'cognitive-model',
      statusLabel: 'Mathematical Model in Decision Science',
      summary: 'Epistemic calibration measures the concordance between subjective confidence estimates and empirical reality. Perfect calibration occurs when assertions stated with X% confidence prove correct exactly X% of the time, forming an identity line (y = x) on a calibration curve. In human cognition (Lichtenstein, Fischhoff & Phillips, 1982), calibration curves consistently sag below the identity line: individuals expressing 90% or 100% subjective certainty typically achieve only 65% to 75% objective accuracy. The Brier Score quantifies epistemic accuracy, decomposing into Reliability (the calibration gap), Resolution (the ability to assign distinct probabilities to differing outcomes), and irreducible Uncertainty.',
      mechanisms: [
        {
          label: 'The 45-Degree Identity Line ($y = x$)',
          description: 'A perfectly calibrated mind achieves an empirical hit rate that matches subjective confidence across all probability bins.'
        },
        {
          label: 'The Overconfidence Squeeze',
          description: 'Uncalibrated learners assign 90%-100% confidence to propositions that are empirically true only 60%-70% of the time.'
        },
        {
          label: 'Brier Score Decomposition ($Brier = Rel - Res + Unc$)',
          description: 'Separates systematic calibration errors (Reliability) from the ability to discriminate true outcomes from false outcomes (Resolution).'
        }
      ],
      keyInsight: 'Intuitive confidence is uncalibrated noise. True epistemic mastery is measured by the Brier score: how tightly your subjective probability estimates track empirical reality across hundreds of verified trials.',
      simplifiedModelCaveat: 'Brier scores require binary or probabilistic outcomes with verifiable ground truth. In open-ended, philosophical, or subjective aesthetic domains, direct Brier calculation is mathematically ill-posed.'
    },
    {
      id: 'calibration-mirrors-debiasing',
      title: 'Constructing Calibration Mirrors & The "Considering the Opposite" Protocol',
      tagline: 'Puncturing fluency illusions and retraining prefrontal error detection',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Empirical Debiasing Protocol in Decision Science',
      summary: 'Metacognitive overconfidence is reinforced by memory’s confirmatory retrieval bias: when evaluating a belief, the brain automatically searches for corroborating evidence while suppressing counter-examples (Koriat, 1997). To dismantle this illusion, learners must implement Objective Calibration Mirrors. Developed in decision science and superforecasting (Tetlock, 2015), this protocol requires logging explicit numerical confidence ratings into discrete probability buckets before checking answers, generating empirical calibration curves. Pairing this with Lord, Lepper & Preston’s (1984) "Considering the Opposite" protocol—actively generating at least two concrete reasons why the current hypothesis might be false—recruits the Anterior Cingulate Cortex and rostrolateral prefrontal cortex (rlPFC), neutralizing fluency heuristics and driving Brier score convergence toward perfect calibration.',
      mechanisms: [
        {
          label: 'Confirmatory Retrieval Suppression',
          description: 'Memory automatically searches for confirming evidence; "considering the opposite" forces prefrontal retrieval of disconfirming pathways.'
        },
        {
          label: 'Discrete Probability Binning',
          description: 'Forcing confidence into 50%, 60%, 70%, 80%, 90%, 100% buckets exposes overconfidence gaps on empirical calibration graphs.'
        },
        {
          label: 'Prefrontal Error Monitoring Recruitment',
          description: 'Calibration tracking activates the rostrolateral prefrontal cortex (rlPFC / BA 10) and Anterior Cingulate Cortex (ACC) to detect epistemic conflict.'
        }
      ],
      keyInsight: 'You cannot calibrate your mind through pure self-reflection. You must hold up an objective calibration mirror: log numerical confidence before checking answers, actively generate counter-arguments, and plot your Brier curve over time.',
      simplifiedModelCaveat: '"Considering the opposite" must involve generating plausible, mechanically sound counter-arguments. Generating absurd or trivial counter-arguments produces a "backfire effect" that actually inflates overconfidence.'
    }
  ],
  diagram: {
    title: 'The Epistemic Calibration & Dunning-Kruger Trajectory Engine',
    subtitle: 'From Unconscious Incompetence to Superforecaster Calibration',
    stages: [
      {
        id: 'stage-novice-dual-burden',
        name: 'Stage 1: The Novice Dual-Burden Zone (Inflated Confidence)',
        subtitle: 'Unconscious Incompetence & Fluency Illusions',
        capacity: 'Confidence: 90% • Actual Accuracy: 22% • Brier Score: 0.46',
        duration: 'Early exposure phase',
        role: 'The novice reads surface material and mistakes lexical familiarity for structural mastery. Because they lack domain schemas, they cannot perceive their own errors.',
        failureMode: 'Assuming ease of reading equals ease of execution; committing catastrophic real-world mistakes with supreme confidence.',
        evidenceType: 'Kruger & Dunning (1999) bottom-quartile evaluation metrics',
        practicalFix: 'Administer an immediate objective verification test to deliver calibrated prediction errors.',
      },
      {
        id: 'stage-valley-of-despair',
        name: 'Stage 2: The Metacognitive Awakening (The Confidence Plunge)',
        subtitle: 'Conscious Incompetence & Schema Realization',
        capacity: 'Confidence: 35% • Actual Accuracy: 50% • Brier Score: 0.28',
        duration: 'Intermediate schema building phase',
        role: 'As genuine learning occurs, the student acquires normative criteria and discovers the vast ocean of unknown edge cases. Confidence drops sharply as competence rises.',
        failureMode: 'Imposter syndrome or abandoning the skill due to mistaken belief that emerging difficulty means regression.',
        evidenceType: 'Kruger & Dunning (1999) training intervention findings',
        practicalFix: 'Normalize the confidence plunge as proof of expanding metacognitive perception, not loss of skill.',
      },
      {
        id: 'stage-calibration-mirror-training',
        name: 'Stage 3: The Calibration Mirror Protocol (Brier Tracking)',
        subtitle: 'Deliberate Epistemic Alignment & Counter-Factual Inversion',
        capacity: 'Confidence: 75% • Actual Accuracy: 72% • Brier Score: 0.14',
        duration: 'Systematic debiasing phase',
        role: 'The learner logs numerical confidence into discrete bins (50%-100%) and practices "Considering the Opposite" before verifying answers. Overconfidence gap narrows to <5%.',
        failureMode: 'Grading oneself generously or skipping probability commitment before seeing solutions.',
        evidenceType: 'Tetlock (2015) Superforecasting & Lord et al. (1984) counter-evidence protocols',
        practicalFix: 'Never check an answer or test result without writing down your numerical confidence first.',
      },
      {
        id: 'stage-epistemic-superforecaster',
        name: 'Stage 4: Superforecaster Epistemic Alignment ($y = x$ Identity)',
        subtitle: 'Mastery of Uncertainty & Zero Metacognitive Distortion',
        capacity: 'Confidence: Variable • Calibration Gap: <2% • Brier Score: <0.08',
        duration: 'Autonomous mastery phase',
        role: 'The expert possesses precise metacognitive resolution: when they say 80%, they are correct 80% of the time; when they say 50%, they acknowledge coin-flip uncertainty.',
        failureMode: 'Expert false consensus: assuming non-experts find the task as transparent as they do.',
        evidenceType: 'Lichtenstein & Fischhoff (1982) & Tetlock (2015) calibration curves',
        practicalFix: 'Use calibrated probabilistic assessments when architecting mission-critical systems and mentoring juniors.',
      },
    ],
    feedbackLoopDescription: 'Novice overconfidence is dismantled by prediction error; tracking explicit probabilities and considering the opposite aligns confidence with empirical reality along the 45-degree identity line.',
  },
  exercise: {
    title: 'Epistemic Calibration & Bias Diagnosis Lab',
    instruction: 'Analyze 4 high-stakes professional crises across enterprise cloud infrastructure, clinical emergency medicine, quantitative risk management, and principal software architecture. Diagnose whether the dilemma stems from The Dunning-Kruger Dual Burden (Unconscious incompetence), The Fluency Overconfidence Trap (Mistaking familiarity for mastery), The Expert False-Consensus Blindspot (Underestimating novice struggle), or Calibrated Epistemic Mastery (Disciplined Brier score alignment), and prescribe the evidence-grounded fix.',
    categories: [
      {
        id: 'working-memory-overload',
        title: 'The Dunning-Kruger Dual Burden (Unconscious Incompetence)',
        description: 'Lacking the domain schemas necessary to recognize flawed logic, leading to supreme overconfidence in disastrous solutions.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'The Fluency Overconfidence Trap (Feeling of Knowing)',
        description: 'Confusing ease of reading documentation with execution ability, expressing 95% certainty on unverified hypotheses.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'attention-bottleneck',
        title: 'The Expert False-Consensus Blindspot (Underestimating Difficulty)',
        description: 'Advanced practitioners assuming complex procedures are trivial and intuitive for novices because their own schemas are automated.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Calibrated Epistemic Mastery (Superforecaster Alignment)',
        description: 'Making disciplined, probabilistic assertions where confidence matches empirical hit rates along the 45-degree identity line.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-junior-cloud-architect-disaster',
        realWorldContext: 'Fintech Core Payment Gateway Infrastructure',
        scenario: 'A junior developer who completed a 2-day Kubernetes crash course confidently refactors the bank’s production ingress routing. When asked by the CTO if he tested distributed network split-brain edge cases, he scoffs: "Kubernetes handles all of that automatically; I am 100% certain it will not fail." Ten minutes after deployment, the cluster suffers split-brain divergence, halting $40M in transactions.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'This is the classic Dunning-Kruger Dual Burden (Kruger & Dunning, 1999). The developer lacked the distributed systems schemas necessary to understand CAP theorem trade-offs and network partitions. His incompetence directly blinded him to the catastrophic risks of his changes.',
        evidenceBasedFix: 'Enforce an Objective Calibration Mirror: forbid unverified production changes until the engineer writes down 2 failure modes ("Considering the Opposite") and passes an automated chaos-engineering validation gauntlet.',
      },
      {
        id: 'scen-medical-resident-premature-closure',
        realWorldContext: 'Emergency Department Acute Abdominal Triage',
        scenario: 'A medical resident examines a 35-year-old patient with atypical right lower quadrant pain. Having just read a review article on acute appendicitis that morning, the diagnosis feels strikingly obvious and fluent. She expresses 99% certainty to the attending and orders immediate surgical prep, skipping a pelvic ultrasound. Surgery reveals a ruptured ectopic pregnancy.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'This is the Fluency Overconfidence Trap and Premature Diagnostic Closure (Koriat, 1997; Fischhoff, 1982). Recent passive exposure made appendicitis concepts highly accessible in working memory, triggering a false "feeling of rightness" that suppressed consideration of alternative etiologies.',
        evidenceBasedFix: 'Mandate the "Considering the Opposite" debiasing protocol (Lord et al., 1984): before confirming a surgical referral, the clinician must explicitly list and rule out at least two competing differential diagnoses.',
      },
      {
        id: 'scen-principal-architect-onboarding-blindspot',
        realWorldContext: 'Distributed Consensus Engine Documentation',
        scenario: 'A distinguished engineer with 20 years of Raft and Paxos experience writes a 3-page onboarding README for new hires. When junior engineers ask for clarification on log compaction rules, he becomes impatient: "This is completely self-evident; anyone with common sense can implement this in an afternoon." All new hires fail their initial code reviews.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'This is the Expert False-Consensus Blindspot (Kruger & Dunning, 1999). Because the expert’s schemas are fully compiled and automated, retrieval requires near-zero cognitive effort. The expert falls into the egocentric trap of assuming tasks that are easy for him are easy for everyone.',
        evidenceBasedFix: 'Pair the expert with an educational designer to implement Catrambone’s Sub-Goal Labeling and backward fading, translating automated intuition into explicit, novice-accessible cognitive chunks.',
      },
      {
        id: 'scen-superforecaster-risk-underwriting',
        realWorldContext: 'Critical Infrastructure Cyber-Insurance Underwriting',
        scenario: 'A senior risk actuary assesses the probability of a major cloud provider outage affecting a client. Rather than making a definitive "yes" or "no" statement, she assigns a 65% probability, logs two major counter-arguments regarding redundant BGP peering, and documents her forecast in an immutable ledger. Across 500 historical cases, her 60%-70% predictions have proven correct exactly 66% of the time.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'This is Calibrated Epistemic Mastery (Philip Tetlock, 2015). The forecaster operates precisely on the 45-degree calibration line ($y = x$), exhibiting optimal Brier score reliability and zero overconfidence bias.',
        evidenceBasedFix: 'Adopt this actuary’s probabilistic forecasting and Brier tracking methods across all engineering risk assessments and project estimation meetings.',
      },
    ],
  },
  quiz: {
    title: 'Chapter 18.1 Mastery Assessment: Overconfidence & Epistemic Calibration',
    instruction: 'Demonstrate rigorous understanding of Kruger & Dunning’s dual burden, Brier score calibration mathematics, and empirical debiasing protocols.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-kruger-dunning-dual-burden',
        question: 'What is the foundational cognitive mechanism of the "Dual Burden of Incompetence" identified by Justin Kruger and David Dunning (1999)?',
        options: [
          {
            id: 'q1-a',
            text: 'Incompetent people deliberately lie about their test scores to impress their peers.',
          },
          {
            id: 'q1-b',
            text: 'The exact same knowledge deficits that cause an individual to produce errors also deprive them of the metacognitive ability to recognize that their choices are flawed.',
          },
          {
            id: 'q1-c',
            text: 'Novices suffer from high cortisol levels that temporarily impair their visual acuity.',
          },
          {
            id: 'q1-d',
            text: 'Unskilled individuals possess superior right-hemisphere creative intuition that conflicts with left-hemisphere logic.',
          },
        ],
        correctOptionId: 'q1-b',
        explanation: 'Kruger & Dunning (1999) proved that incompetence carries a dual burden: not only do novices make erroneous decisions, but their lack of domain schemas makes them structurally unable to recognize what competent performance looks like, leading to inflated self-assessments.',
        pedagogicalRationale: 'Validates foundational comprehension of the Dunning-Kruger cognitive mechanism.',
        evidenceNote: 'Kruger, J., & Dunning, D. (1999). Unskilled and unaware of it: How difficulties in recognizing one\'s own incompetence lead to inflated self-assessments. Journal of Personality and Social Psychology, 77(6), 1121–1134.',
      },
      {
        id: 'q2-brier-score-calibration-curve',
        question: 'On an Epistemic Calibration Curve, what does it indicate when a learner’s empirical plot sits significantly below the 45-degree identity line ($y = x$)?',
        options: [
          {
            id: 'q2-a',
            text: 'The learner is displaying the Overconfidence Bias: their subjective confidence systematically exceeds their empirical accuracy rate.',
          },
          {
            id: 'q2-b',
            text: 'The learner is displaying extreme underconfidence: their true accuracy is much higher than their modest confidence ratings.',
          },
          {
            id: 'q2-c',
            text: 'The learner has achieved perfect Brier score calibration ($Brier = 0.0$).',
          },
          {
            id: 'q2-d',
            text: 'The test questions were improperly scored by the grading software.',
          },
        ],
        correctOptionId: 'q2-a',
        explanation: 'When a calibration curve sits below the identity line ($y = x$), subjective probability is higher than the empirical hit rate (e.g. for events given 90% confidence, only 65% are correct). This is the hallmark of the human Overconfidence Bias (Lichtenstein, Fischhoff & Phillips, 1982).',
        pedagogicalRationale: 'Checks mathematical understanding of calibration curves and the overconfidence gap.',
        evidenceNote: 'Lichtenstein, S., Fischhoff, B., & Phillips, L. D. (1982). Calibration of probabilities: The state of the art to 1980. Judgment Under Uncertainty: Heuristics and Biases, 306–334.',
      },
      {
        id: 'q3-considering-opposite-debiasing',
        question: 'Why does Lord, Lepper & Preston’s (1984) "Considering the Opposite" debiasing protocol successfully puncture overconfidence and reduce Brier scores?',
        options: [
          {
            id: 'q3-a',
            text: 'It increases adrenaline release, which speeds up mental arithmetic.',
          },
          {
            id: 'q3-b',
            text: 'It forces working memory to retrieve disconfirming causal pathways, overcoming the natural confirmatory retrieval bias of long-term memory.',
          },
          {
            id: 'q3-c',
            text: 'It proves that all beliefs are equally valid and subjective.',
          },
          {
            id: 'q3-d',
            text: 'It replaces cognitive thinking with automatic motor habits.',
          },
        ],
        correctOptionId: 'q3-b',
        explanation: 'Memory naturally searches for confirming evidence (confirmatory retrieval bias). Lord, Lepper & Preston (1984) showed that actively generating reasons why one’s hypothesis could be false forces prefrontal retrieval of disconfirming evidence, neutralizing fluency illusions and bringing confidence into alignment with truth.',
        pedagogicalRationale: 'Validates comprehension of the cognitive mechanisms of epistemic debiasing.',
        evidenceNote: 'Lord, C. G., Lepper, M. R., & Preston, E. (1984). Considering the opposite: A corrective strategy for social judgment. Journal of Personality and Social Psychology, 47(6), 1231–1243.',
      },
      {
        id: 'q4-expert-false-consensus-underconfidence',
        question: 'In Kruger and Dunning’s (1999) empirical findings, why did participants scoring in the top quartile (the top 10–12%) slightly *underestimate* their relative percentile ranking?',
        options: [
          {
            id: 'q4-a',
            text: 'They lacked basic self-esteem and were depressed.',
          },
          {
            id: 'q4-b',
            text: 'They suffered from a False-Consensus effect: because the problems were transparent and easy for them, they erroneously assumed the problems were equally easy for all other participants.',
          },
          {
            id: 'q4-c',
            text: 'They forgot to complete the self-assessment questionnaire.',
          },
          {
            id: 'q4-d',
            text: 'Top performers always experience the imposter syndrome in all life domains.',
          },
        ],
        correctOptionId: 'q4-b',
        explanation: 'Top performers accurately estimated their raw test scores, but underestimated their relative percentile rank. Because solving the problems felt effortless, they assumed a false consensus: that everyone else found the test equally easy.',
        pedagogicalRationale: 'Clarifies the asymmetric nature of the Dunning-Kruger effect across performance quartiles.',
        evidenceNote: 'Kruger, J., & Dunning, D. (1999). Unskilled and unaware of it. JPSP, 77(6), 1121–1134.',
      },
    ],
  },
  practicalTask: {
    title: 'The Epistemic Calibration Mirror & Brier Tracking Protocol',
    summary: 'Construct an objective Calibration Mirror that tracks numerical confidence against empirical verification across 5 technical predictions, incorporating the "Considering the Opposite" protocol.',
    steps: [
      {
        id: 'task-step-1-probabilistic-commitments',
        number: 1,
        title: 'Step 1: Formulate 5 High-Stakes Technical Predictions',
        prompt: 'Select 5 non-trivial technical, architectural, or domain questions where you believe you know the answer. Before verifying them, force yourself to write down an explicit numerical probability bucket for each: 50% (Pure coin flip), 60%, 70%, 80%, 90%, or 100% (Absolute physical certainty).',
        placeholder: 'Prediction 1: [e.g., PostgreSQL index scan will be chosen by the query planner over seq scan for query X] -> Confidence: 80%\nPrediction 2: [e.g., Docker alpine image has lower network latency than distroless] -> Confidence: 70%\nPrediction 3: [e.g., React 19 compiler removes all need for useMemo in component Y] -> Confidence: 90%\nPrediction 4: [e.g., Rust compiler will reject borrowing reference in function Z] -> Confidence: 90%\nPrediction 5: [e.g., Kafka consumer rebalance will not drop uncommitted offset W] -> Confidence: 100%',
        example: '1. CSS grid subgrid is supported in current Safari mobile: 90%\n2. Node.js Buffer.alloc is zero-filled by default: 100%\n3. Redis single-thread event loop blocks on KEYS command: 100%\n4. SQLite WAL mode allows concurrent readers during writer transactions: 80%\n5. TLS 1.3 handshake requires 2 round-trips: 70%',
        cognitiveRationale: 'Explicit numerical commitments prevent post-hoc hindsight rationalization ("I knew it all along").'
      },
      {
        id: 'task-step-2-considering-the-opposite',
        number: 2,
        title: 'Step 2: Execute "Considering the Opposite" Counter-Analysis',
        prompt: 'For your two highest-confidence predictions (e.g. 90% or 100%), write at least two concrete, plausible mechanisms why your assertion might be completely wrong. This forces prefrontal retrieval of disconfirming evidence.',
        placeholder: 'Counter-Analysis for Prediction 3 (React 19 compiler):\n- Counter-Reason A: Component Y contains an unmemoized ref escape hatch that causes bailout.\n- Counter-Reason B: Third-party library dependency re-renders on global context changes regardless of compiler optimizations.\n\nAdjusted Confidence after counter-analysis: [e.g., dropped from 90% to 70%]',
        example: 'Counter-Analysis for TLS 1.3:\n- Counter-Reason A: TLS 1.3 redesigned the handshake to achieve 1-RTT, not 2-RTT.\n- Counter-Reason B: 0-RTT session resumption can transmit early data on round 0.\n- Adjusted Confidence: Dropped from 70% to 50%.',
        cognitiveRationale: 'Neutralizes confirmatory retrieval bias by recruiting the Anterior Cingulate Cortex to evaluate competing hypotheses.'
      },
      {
        id: 'task-step-3-brier-score-calculation',
        number: 3,
        title: 'Step 3: Verify Ground Truth & Calculate Your Brier Score',
        prompt: 'Run the tests, execute the code, or inspect the authoritative ground-truth documentation. Score each outcome as 1 (Correct) or 0 (Incorrect). Calculate your Brier score using: Brier = (1/5) * sum((Confidence - Outcome)^2). Analyze your overconfidence gap.',
        placeholder: 'Results Table:\nItem 1: Conf = 0.80, Outcome = 1, Error^2 = (0.80 - 1)^2 = 0.04\nItem 2: Conf = 0.70, Outcome = 1, Error^2 = (0.70 - 1)^2 = 0.09\nItem 3: Conf = 0.70, Outcome = 0, Error^2 = (0.70 - 0)^2 = 0.49\nItem 4: Conf = 0.90, Outcome = 1, Error^2 = (0.90 - 1)^2 = 0.01\nItem 5: Conf = 1.00, Outcome = 1, Error^2 = (1.00 - 1)^2 = 0.00\n\nTotal Brier Score: (0.04 + 0.09 + 0.49 + 0.01 + 0.00) / 5 = 0.126 (Calibrated Range: <0.15)',
        example: 'Final Brier Score: 0.11\nCalibration Gap: 90% bin was 100% accurate; 70% bin was 50% accurate. Needs more conservative probability adjustment on medium-confidence assertions.',
        cognitiveRationale: 'Delivers mathematically unassailable feedback that recalibrates the rostrolateral prefrontal cortex for future judgments.'
      },
    ],
  },
};
