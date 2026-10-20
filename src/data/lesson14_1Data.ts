import type { Lesson } from '../types/learning.ts';

export const LESSON_BLOCKED_VS_INTERLEAVED_PRACTICE: Lesson = {
  id: 'blocked-vs-interleaved-practice',
  chapterId: 'ch-14-interleaving',
  number: '14.1',
  title: 'Blocked vs. Interleaved Practice',
  subtitle: 'The contextual interference effect and category discrimination',
  readingTimeMinutes: 16,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'Why does the practice schedule that feels smoothest and creates the fastest early progress systematically cripple your long-term retention and diagnostic accuracy?',
    teaser: 'Blocked practice creates an irresistible illusion of competence during acquisition, but interleaving forces the brain to master the hardest part of problem solving: strategy selection.',
    hookNote: 'In 2008, psychologists Nate Kornell and Robert Bjork showed participants dozens of landscape paintings by twelve unfamiliar artists. Half the paintings were studied in blocked fashion (six consecutive paintings by Braque, then six by Seurat), while the other half were interleaved (a Braque, then a Seurat, then a Morisot). On a delayed test of novel paintings, interleaved study led to vastly superior recognition (65% vs. 50%). Yet when asked which method helped them learn better, an overwhelming 78% of learners insisted that blocked practice had been more effective! Why does the schedule that accelerates your perceived mastery during training systematically cripple your long-term retention and diagnostic discrimination? In this lesson, we explore John Shea & Richard Morgan’s (1979) contextual interference effect, Bjork’s discriminative contrast hypothesis, Doug Rohrer & Kelli Taylor’s (2007) mathematics problem-shuffling experiments, and how to build an interleaved practice engine.',
  },
  prediction: {
    prompt: 'Two engineering students, Maya and Leo, are preparing for a comprehensive thermodynamics examination requiring them to solve four distinct classes of heat-transfer problems (Conduction, Convection, Radiation, Phase Change). Each class uses a different formula and requires diagnosing boundary conditions from vague prompt descriptions. Maya practices "blocked": She solves 15 Conduction problems back-to-back, then 15 Convection, then 15 Radiation, then 15 Phase Change. During study, she feels confident and solves each set with minimal hesitation and few errors. Leo practices "interleaved": He solves 60 problems arranged in rotating, randomized order (e.g., Conduction -> Radiation -> Convection -> Phase Change -> Conduction...). During study, Leo finds the experience frustrating, hesitates frequently, and makes significantly more mistakes as he attempts to recall which formula applies. One week later, both take an unpredictable cumulative exam where problem types are mixed together without classification headers. What does empirical cognitive psychology predict regarding their delayed test performance and their metacognitive judgments?',
    context: 'Both students have equal baseline math ability and practice the exact same 60 problem prompts for equal total study duration:',
    options: [
      {
        id: 'opt-blocked-superior-schema-consolidation',
        strategy: 'Hypothesis A: Blocked Mastery & Schema Consolidation',
        description: 'Maya will outperform Leo on the delayed exam, because blocked practice established consolidated cognitive schemas without interference; both students will correctly predict Maya’s victory.',
      },
      {
        id: 'opt-interleaved-superior-accurate-metacognition',
        strategy: 'Hypothesis B: Interleaved Superiority with Accurate Metacognition',
        description: 'Leo will vastly outperform Maya on the delayed exam, and Leo will have predicted his superior performance because of the deep cognitive effort he expended.',
      },
      {
        id: 'opt-interleaved-superior-metacognitive-reversal',
        strategy: 'Hypothesis C: Contextual Interference & The Metacognitive Reversal',
        description: 'Leo will significantly outperform Maya on the delayed test (often by 30-100% on novel items), yet prior to the test, Maya will rate her mastery higher and Leo will believe his study method was inferior (Shea & Morgan, 1979; Kornell & Bjork, 2008; Rohrer & Taylor, 2007).',
      },
    ],
    outcome: {
      winningOptionId: 'opt-interleaved-superior-metacognitive-reversal',
      headline: 'The Contextual Interference Effect: Interleaving Feels Inferior During Acquisition but Yields Radical Superiority on Delayed Retention Tests (Shea & Morgan, 1979; Kornell & Bjork, 2008).',
      explanation: 'Empirical research across motor learning, category induction, and mathematical problem solving reveals a profound dissociation: acquisition speed inversely predicts delayed retention. When Maya practices in a blocked schedule (AAAA-BBBB), the formula and cognitive plan remain continuously active in her working memory buffer. Every problem after the first merely executes the pre-existing buffer trace without reconstructing the plan from scratch. Because her performance is fluent and error-free, Maya experiences a strong illusion of competence. In contrast, Leo’s interleaved schedule (ABCD-BCDA) purges the working memory buffer on every trial. Leo is forced to diagnose which formula applies from raw constraints (Category Selection) and reconstruct the solution from long-term memory. This effortful reconstruction produces subjective friction and errors during acquisition, but drives deep synaptic consolidation. On the unannounced delayed exam without chapter titles, Maya collapses because she never practiced strategy selection, while Leo excels.',
      optionFeedback: {
        'opt-blocked-superior-schema-consolidation': {
          title: 'Your Choice: Hypothesis A (The Blocked Mastery Fallacy)',
          verdict: 'Refuted by 45+ Years of Cognitive Science',
          analysis: 'Blocked practice feels fluent only because working memory priming bypasses long-term retrieval; when tested on delayed transfer, blocked learners suffer massive performance degradation.',
        },
        'opt-interleaved-superior-accurate-metacognition': {
          title: 'Your Choice: Hypothesis B (The Rational Metacognition Assumption)',
          verdict: 'Inaccurate on Human Metacognitive Calibration',
          analysis: 'While Leo indeed outperforms Maya, learners do not accurately predict this outcome. Learners overwhelmingly mistake subjective fluency for durable storage, believing interleaved practice is ineffective.',
        },
        'opt-interleaved-superior-metacognitive-reversal': {
          title: 'Your Choice: Hypothesis C (Contextual Interference & Metacognitive Reversal)',
          verdict: 'Empirical Cognitive Science Consensus',
          analysis: 'Precisely accurate! Shea & Morgan (1979), Kornell & Bjork (2008), and Rohrer & Taylor (2007) proved that interleaving produces superior delayed retention while simultaneously inducing a powerful metacognitive illusion that blocked practice was better.',
        },
      },
      comparisons: [
        {
          label: 'Interleaved Practice (Leo: ABCD-BCDA)',
          immediateRetention: 'High friction & latency during training (55-65% acquisition accuracy)',
          oneWeekRetention: 'Vastly superior delayed retention (63-80% accuracy on delayed cumulative exams)',
          illusionRating: 'Disfluent humility; learners believe they learned poorly despite actual mastery',
          isEmpiricalWinner: true,
        },
        {
          label: 'Blocked Practice (Maya: AAAA-BBBB)',
          immediateRetention: 'Rapid, smooth acquisition with low latency (85-95% acquisition accuracy)',
          oneWeekRetention: 'Catastrophic delayed collapse (20-35% accuracy on delayed cumulative exams)',
          illusionRating: 'Extreme illusion of competence; 78% of learners believe blocked study is superior',
          isEmpiricalWinner: false,
        },
      ],
      evidenceDistinction: 'Blocked practice automates execution while bypassing diagnostic category selection; interleaving forces repeated strategy retrieval and sharpens boundary discrimination.',
    },
  },
  coreExplanations: [
    {
      id: 'shea-morgan-contextual-interference',
      title: 'Shea & Morgan (1979): The Contextual Interference Effect',
      tagline: 'Why acquisition performance is an untrustworthy index of durable learning',
      statusLabel: 'Seminal Motor & Cognitive Learning Benchmark (1979)',
      scientificStatus: 'empirical-consensus',
      summary: 'In 1979, John Shea and Richard Morgan demonstrated that high contextual interference during training impairs immediate trial-by-trial performance but dramatically enhances long-term retention and novel task transfer across both motor and cognitive domains.',
      mechanisms: [
        {
          label: 'The Acquisition vs. Retention Dissociation',
          description: 'Subjects practicing three distinct arm-movement tasks on a blocked schedule (all A, then B, then C) rapidly reduced movement times and errors during training. The interleaved (random) group stumbled, exhibiting high latency and variability. However, on a 10-day delayed test, the interleaved group outperformed the blocked group by more than 2:1—even when tested under a blocked format.',
        },
        {
          label: 'Working Memory Buffer Displacement',
          description: 'Under blocked schedules ($A_1, A_2, A_3, A_4$), the solution plan for Task A remains active in the working memory buffer. Successive trials merely execute the pre-existing trace without retrieval. Under an interleaved schedule ($A_1 \\to B_1 \\to C_1 \\to A_2$), intervening tasks $B_1$ and $C_1$ purge the buffer, forcing the learner to reconstruct the action plan from long-term memory on every trial.',
        },
        {
          label: 'Desirable Difficulty & Synaptic Consolidation',
          description: 'As Robert Bjork established, effortful reconstruction from long-term memory acts as a "desirable difficulty." The cognitive effort required to reload a displaced schema triggers deeper synaptic potentiation and structural dendritic remodeling than effortless repetitions.',
        },
      ],
      keyInsight: 'Acquisition speed is an illusion: conditions that make training easy and fluent systematically degrade long-term retention.',
      simplifiedModelCaveat: 'When a novice has zero baseline familiarity with a skill, a brief initial blocked orientation can scaffold basic understanding before interleaving is introduced.',
    },
    {
      id: 'discriminative-contrast-hypothesis',
      title: 'Bjork & Kornell (2008): The Discriminative Contrast Hypothesis',
      tagline: 'How interleaving isolates critical boundary features that blocked study leaves invisible',
      statusLabel: 'Inductive Learning & Category Perception Consensus',
      scientificStatus: 'empirical-consensus',
      summary: 'Robert Bjork and Nate Kornell (2008) showed that interleaving excels in perceptual and category learning because temporal juxtaposition acts as a contrast detector, highlighting invariant between-category boundary features.',
      mechanisms: [
        {
          label: 'Within-Category Commonalities vs. Between-Category Differences',
          description: 'When study is blocked ($A_1, A_2, A_3, A_4$), attention is drawn to what items in Category A have in common (e.g. Monet’s soft pastel landscapes). However, the learner is blinded to what differentiates Category A from Category B. Interleaving ($A_1 \\to B_1$) places competing categories in close temporal proximity, allowing perceptual circuits to isolate the subtle diagnostic boundary features.',
        },
        {
          label: 'The Perceptual Contrast Engine',
          description: 'Human visual and conceptual classification relies on multidimensional decision boundaries (Rosch, 1975; Ashby & Maddox, 2005). Interleaving directly compares contrasting exemplars across the decision boundary, sharpening the hyperplanes separating confusable classes.',
        },
        {
          label: 'The Metacognitive Fluency Illusion',
          description: 'Kornell & Bjork revealed that 78% of learners falsely believed blocked study helped them more, despite interleaved study producing 65% vs 50% delayed test accuracy. Learners equate subjective processing ease with durable storage, misattributing interleaved friction to learning failure.',
        },
      ],
      keyInsight: 'You cannot learn what makes a category unique by only looking at that category; interleaving provides the contrast needed to identify diagnostic boundaries.',
      simplifiedModelCaveat: 'If two categories are completely unrelated (e.g. French grammar and organic chemistry nomenclature), interleaving provides zero discriminative contrast; interleaving is most potent for confusable, related categories.',
    },
    {
      id: 'category-selection-vs-execution',
      title: 'Rohrer & Taylor (2007): Category Selection vs. Execution',
      tagline: 'Why standard textbook problem sets bypass the hardest part of authentic problem solving',
      statusLabel: 'Quantitative Problem-Solving & Educational Psychology Classic',
      scientificStatus: 'empirical-consensus',
      summary: 'Doug Rohrer and Kelli Taylor (2007) proved that mathematics problem solving requires two distinct phases: Category Selection (diagnosing which rule applies) and Execution (calculating the answer). Blocked practice completely excises Category Selection, leading to a 3x collapse on delayed tests.',
      mechanisms: [
        {
          label: 'The Two-Stage Problem Solving Architecture',
          description: 'Stage 1 (Category Selection) demands diagnosing the problem’s structural invariants from raw constraints (e.g. "Does this problem require conservation of momentum or work-energy theorem?"). Stage 2 (Execution) simply carries out the algebraic manipulations.',
        },
        {
          label: 'The Textbook Header Crutch',
          description: 'In typical blocked textbook assignments, all problems in Chapter 7.2 are solved with the Chapter 7.2 formula. The chapter title gives away Stage 1 for free. Students receive 50 repetitions of calculation, but zero repetitions of diagnostic category selection.',
        },
        {
          label: 'The 3x Delayed Retention Reversal',
          description: 'In Rohrer & Taylor’s study with geometry solids, blocked students scored 89% during homework but collapsed to 20% on the unannounced one-week delayed test. Interleaved students scored 60% during homework and maintained 63% on the delayed test—a 315% relative superiority for interleaving.',
        },
      ],
      keyInsight: 'If practice announces which formula to use before you read the problem prompt, you are practicing arithmetic, not problem solving.',
      simplifiedModelCaveat: 'Learners must be introduced to individual formulas initially before problems can be shuffled; interleaving is a practice strategy, not a substitute for initial concept explanation.',
    },
  ],
  diagram: {
    title: 'The Interleaved vs Blocked Practice Architecture Simulator',
    subtitle: 'Working memory buffer dynamics, category selection demands, and delayed diagnostic retention',
    stages: [
      {
        id: 'stage-blocked-acquisition',
        name: 'Stage 1: Blocked Acquisition (AAAA-BBBB)',
        subtitle: 'Primed Buffer & Zero Category Selection',
        capacity: 'Zero strategy retrieval cost',
        duration: 'High early acquisition speed',
        role: 'Consecutive items share the same algorithm or schema. Working memory holds the active rule continuously in the buffer, creating effortless processing.',
        failureMode: 'The Fluency Mirage: Learners mistake working memory priming for permanent schema mastery.',
        evidenceType: 'Contextual interference & motor learning (Shea & Morgan, 1979)',
        practicalFix: 'Do not measure learning success by the speed or accuracy of practice during the initial study session.',
      },
      {
        id: 'stage-blocked-delayed-test',
        name: 'Stage 2: Blocked Delayed Test Collapse',
        subtitle: 'Formula Confusion & Retrieval Paralysis',
        capacity: 'High diagnostic error rate',
        duration: 'Delayed test phase',
        role: 'Items arrive on cumulative exams without chapter titles. Because category selection was never practiced during training, diagnostic retrieval fails completely.',
        failureMode: 'Strategy Paralysis: The learner freezes or guesses formulas randomly because they cannot diagnose underlying invariants.',
        evidenceType: 'Mathematics problem shuffling experiments (Rohrer & Taylor, 2007)',
        practicalFix: 'Strip all chapter headers and section labels from practice materials to force category diagnosis.',
      },
      {
        id: 'stage-interleaved-acquisition',
        name: 'Stage 3: Interleaved Acquisition (ABCD-BCDA)',
        subtitle: 'Buffer Displacement & Discriminative Contrast',
        capacity: 'High cognitive friction & continuous strategy retrieval',
        duration: 'Effortful acquisition phase',
        role: 'Consecutive items switch categories. Every problem purges the prior rule from working memory, demanding fresh diagnosis and retrieval from long-term memory.',
        failureMode: 'The Disfluency Trap: Learners misinterpret cognitive effort as personal inadequacy or poor instructional design.',
        evidenceType: 'Category induction & landscape painting studies (Kornell & Bjork, 2008)',
        practicalFix: 'Educate learners in the desirable difficulty framework so they expect and embrace acquisition friction.',
      },
      {
        id: 'stage-interleaved-delayed-test',
        name: 'Stage 4: Interleaved Long-Term Mastery',
        subtitle: 'Durable Category Schemas & Fluid Discrimination',
        capacity: 'Rapid diagnostic selection & 3x higher retention',
        duration: 'Longitudinal transfer',
        role: 'Robust multidimensional decision boundaries allow instantaneous problem diagnosis and error-free formula retrieval on novel, unannounced tests.',
        failureMode: 'None: Schemas are resilient, flexible, and resistant to context shifts.',
        evidenceType: 'Long-term retention & transfer consensus (Rohrer et al., 2015; Taylor & Rohrer, 2010)',
        practicalFix: 'Integrate spaced cumulative interleaving into weekly problem sets throughout the entire academic or training year.',
      },
    ],
    feedbackLoopDescription: 'Blocked practice primes the buffer, bypassing category selection and causing delayed collapse; interleaving purges the buffer, forcing continuous diagnostic retrieval and producing 3x higher retention.',
  },
  exercise: {
    title: 'The Problem Scheduling Diagnostic Exercise',
    instruction: 'Analyze four real-world training, education, and professional development scenarios. Diagnose whether the failure stems from The Blocked Practice Illusion, Lack of Category Selection (Header Crutch), Absence of Discriminative Contrast, or Buffer Priming Mirage, and prescribe the evidence-grounded fix.',
    categories: [
      {
        id: 'attention-bottleneck',
        title: 'Lack of Category Selection (The Header Crutch)',
        description: 'Practice materials announced which algorithm or rule to use via section headers, depriving the learner of practicing diagnostic selection.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'working-memory-overload',
        title: 'Absence of Discriminative Contrast',
        description: 'Studying categories in homogeneous silos prevented the learner from discovering the invariant boundary features that distinguish confusable concepts.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'The Metacognitive Fluency Mirage',
        description: 'Mistaking working memory buffer priming and effortless repetition for durable long-term synaptic retention.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Contextual Interference Failure',
        description: 'Failing to displace the working memory buffer between trials, preventing effortful retrieval reconstruction from long-term memory.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-calculus-integration-techniques',
        realWorldContext: 'University Engineering Calculus Course',
        scenario: 'A student completes 30 integration by parts problems under Chapter 7.1, then 30 trigonometric substitution problems under Chapter 7.2. During study, she scores 95% with ease. On the cumulative final exam, an integral appears without instructions, and she spends 15 minutes fruitlessly trying integration by parts when a simple u-substitution was required.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'This is the classic Category Selection deficit identified by Rohrer & Taylor (2007). The chapter titles told the student which technique to apply before reading the integrand, meaning she practiced execution 60 times and diagnostic selection zero times.',
        evidenceBasedFix: 'Create interleaved integral problem sets where trigonometric substitution, partial fractions, integration by parts, and u-substitution problems are shuffled randomly without section headers.',
      },
      {
        id: 'scen-ecg-cardiology-interpretation',
        realWorldContext: 'Medical School Clinical Cardiology Training',
        scenario: 'Medical residents review 50 ECG strips of Atrial Fibrillation on Monday, 50 strips of Atrial Flutter on Tuesday, and 50 strips of Multifocal Atrial Tachycardia on Wednesday. In the emergency department on Friday, a resident misdiagnoses an irregular supraventricular rhythm because the subtle difference in P-wave morphology between the three arrhythmias was never highlighted.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'The resident suffered from an absence of Discriminative Contrast (Kornell & Bjork, 2008). Studying arrhythmias in homogeneous blocks allowed residents to identify within-category commonalities, but obscured the between-category diagnostic boundary features.',
        evidenceBasedFix: 'Interleave the presentation of ECG strips: present an Atrial Fibrillation strip immediately adjacent to an Atrial Flutter and MAT strip, requiring residents to explicitly contrast P-wave morphology across trials.',
      },
      {
        id: 'scen-tennis-serve-acquisition-fluency',
        realWorldContext: 'Competitive Tennis Coaching Academy',
        scenario: 'A tennis coach has a player hit 100 flat serves, then 100 topspin kick serves, then 100 slice serves. By the end of each 100-serve block, the player hits serves with pinpoint accuracy and feels completely dialed in. In tournament matches, however, when the player must execute a single flat or kick serve on pressure points, their first-serve percentage collapses to 38%.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'The player experienced the classical Contextual Interference effect in motor learning (Shea & Morgan, 1979). Blocked repetitions keep the motor program primed in working memory; authentic competition requires retrieving and executing the motor program from a cold state after intervening rallies.',
        evidenceBasedFix: 'Switch to a randomized serve schedule where the player rotates between flat, slice, and kick serves on every single ball, resetting their motor plan and routine between repetitions.',
      },
      {
        id: 'scen-law-student-bar-exam-torts-contracts',
        realWorldContext: 'Bar Exam Preparation',
        scenario: 'A law student spends 2 full weeks studying only Torts flashcards until she achieves 100% accuracy, then spends 2 weeks studying only Contracts. She rates her readiness as a 9 out of 10. When taking a full-length simulated bar exam where torts, contracts, and constitutional law questions alternate, her score drops to 52%, and she complains that the exam was unfair.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'The law student fell victim to the Metacognitive Fluency Mirage (Kornell & Bjork, 2008). Blocked flashcard review created temporary fluency that she misinterpreted as durable mastery; she was completely unpracticed in diagnosing legal claims from messy, multi-issue fact patterns.',
        evidenceBasedFix: 'Shuffle bar exam question sets across all legal subjects from day one; require the student to identify the governing legal subject and claim before answering.',
      },
    ],
  },
  quiz: {
    title: 'Blocked vs. Interleaved Practice Formative Assessment',
    instruction: 'Demonstrate your understanding of the contextual interference effect, discriminative contrast hypothesis, and category selection. Score 75% or higher to verify.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-shea-morgan-contextual-interference',
        question: 'In Shea and Morgan’s (1979) seminal experiment on contextual interference, what was the surprising finding regarding the performance of the interleaved (random) group on the delayed retention test?',
        options: [
          {
            id: 'q1-a',
            text: 'The interleaved group only outperformed the blocked group when tested on a random schedule, but performed terribly when tested on a blocked schedule.',
          },
          {
            id: 'q1-b',
            text: 'The interleaved group outperformed the blocked group when tested on a random schedule, and matched or exceeded the blocked group even when tested on a blocked schedule.',
          },
          {
            id: 'q1-c',
            text: 'The blocked group caught up with the interleaved group after 48 hours of sleep consolidation, proving scheduling order is irrelevant.',
          },
          {
            id: 'q1-d',
            text: 'The interleaved group suffered high retroactive interference that erased their motor skill memories entirely.',
          },
        ],
        correctOptionId: 'q1-b',
        explanation: 'Shea & Morgan (1979) demonstrated that the benefits of contextual interference are robust across test contexts: learners trained under random/interleaved schedules outperformed blocked learners on random tests and matched or exceeded them even when tested under blocked conditions.',
        pedagogicalRationale: 'Establishes the foundational empirical motor learning benchmark.',
        evidenceNote: 'Shea, J. B., & Morgan, R. L. (1979). Contextual interference effects on the acquisition, retention, and transfer of a motor skill. Journal of Experimental Psychology: Human Learning and Memory, 5(2), 179-187.',
      },
      {
        id: 'q2-bjork-discriminative-contrast',
        question: 'According to Robert Bjork and Nate Kornell’s (2008) Discriminative Contrast Hypothesis, why is interleaved practice vastly superior to blocked practice for teaching fine-grained category identification (such as artist painting styles or radiology scans)?',
        options: [
          {
            id: 'q2-a',
            text: 'Blocked practice overwhelms visual working memory capacity, whereas interleaving clears cognitive load completely.',
          },
          {
            id: 'q2-b',
            text: 'Blocked practice highlights within-category commonalities but obscures between-category differences, whereas interleaving places competing categories in close temporal proximity so boundary features are highlighted.',
          },
          {
            id: 'q2-c',
            text: 'Interleaving converts declarative knowledge directly into procedural cerebellum motor programs.',
          },
          {
            id: 'q2-d',
            text: 'Blocked practice causes physical retinal fatigue from looking at identical color palettes.',
          },
        ],
        correctOptionId: 'q2-b',
        explanation: 'The Discriminative Contrast Hypothesis explains that interleaving juxtaposes exemplars from differing categories in close temporal sequence. This direct juxtaposition enables learners to detect the subtle, invariant boundary features that distinguish Category A from Category B, which remain invisible during homogeneous blocked blocks.',
        pedagogicalRationale: 'Explains the visual and inductive cognitive mechanism behind interleaving benefits.',
        evidenceNote: 'Kornell, N., & Bjork, R. A. (2008). Learning concepts and categories: Is spacing the "enemy of induction"? Psychological Science, 19(6), 585-592.',
      },
      {
        id: 'q3-rohrer-category-selection-vs-execution',
        question: 'In Doug Rohrer and Kelli Taylor’s (2007) study on mathematics learning, why did students in the blocked group experience a massive score collapse (from 89% during homework down to 20% on the one-week delayed exam)?',
        options: [
          {
            id: 'q3-a',
            text: 'The blocked students forgot how to perform basic arithmetic operations like multiplication and division.',
          },
          {
            id: 'q3-b',
            text: 'Blocked homework told students which formula to use by virtue of the assignment header, completely bypassing practice in Category Selection (diagnosing which formula applies).',
          },
          {
            id: 'q3-c',
            text: 'The delayed test used trick questions that violated standard mathematical axioms.',
          },
          {
            id: 'q3-d',
            text: 'Interleaved students spent three times as many total hours studying the material.',
          },
        ],
        correctOptionId: 'q3-b',
        explanation: 'Rohrer & Taylor (2007) proved that authentic problem solving requires Category Selection followed by Execution. Blocked practice gives endless execution practice but zeroes out category selection practice because the chapter header gives away the solution method. On cumulative tests without headers, blocked students freeze.',
        pedagogicalRationale: 'Clarifies why textbook learning fails in quantitative problem solving.',
        evidenceNote: 'Rohrer, D., & Taylor, K. (2007). The shuffling of mathematics problems improves learning. Instructional Science, 35(6), 481-498.',
      },
      {
        id: 'q4-metacognitive-illusion-of-fluency',
        question: 'Why do learners consistently harbor a powerful metacognitive illusion that blocked practice is superior to interleaved practice, even after objective test scores prove the opposite?',
        options: [
          {
            id: 'q4-a',
            text: 'Learners misinterpret perceptual and retrieval fluency during acquisition as evidence of durable memory storage, while misattributing the friction of interleaved context switching to learning failure.',
          },
          {
            id: 'q4-b',
            text: 'Blocked practice triggers higher dopamine release in the nucleus accumbens, creating false euphoric memories.',
          },
          {
            id: 'q4-c',
            text: 'Learners are taught in elementary school that variety causes brain inflammation.',
          },
          {
            id: 'q4-d',
            text: 'Interleaving causes retrograde amnesia that makes students forget how well they performed during study sessions.',
          },
        ],
        correctOptionId: 'q4-a',
        explanation: 'Learners rely on heuristic cues of subjective fluency: because blocked practice feels effortless and error-free as the buffer remains primed, they infer high mastery. Interleaving feels disfluent, effortful, and error-prone due to repeated buffer purging, leading learners to mistakenly believe they are learning poorly.',
        pedagogicalRationale: 'Addresses the metacognitive trap that causes learners to abandon interleaving.',
        evidenceNote: 'Bjork, R. A., Dunlosky, J., & Kornell, N. (2013). Self-regulated learning: Beliefs, techniques, and illusions. Annual Review of Psychology, 64, 417-444.',
      },
    ],
  },
  practicalTask: {
    title: 'The Interleaved Study Engine Protocol',
    summary: 'A 3-step practical protocol to audit current study workflows, eliminate blocked repetition traps, and construct an interleaved practice schedule for technical and diagnostic domains.',
    steps: [
      {
        id: 'step-cluster-confusable-categories',
        number: 1,
        title: 'Cluster Confusable Categories & Remove Problem Headers',
        prompt: 'Identify 3 to 5 related topics, formulas, or diagnostic concepts in your domain that share superficial surface similarities but rely on distinct underlying principles (e.g., ANOVA vs t-test vs Chi-Square, or Conduction vs Convection vs Radiation). Strip all chapter titles, section numbers, and folder names from your problem sets so that problem prompts arrive completely unclassified:',
        placeholder: 'e.g., Domain: Inferential Statistics. Clustered Categories: (1) Independent samples t-test, (2) Paired samples t-test, (3) One-way ANOVA, (4) Chi-Square test of independence. Action: Combined 80 problems into a single shuffled pool with all chapter headers deleted...',
        example: 'Domain: Machine Learning Loss Functions. Clustered: Cross-Entropy, Binary Cross-Entropy, Mean Squared Error, Huber Loss. Stripped all headers so every prompt describes raw data distributions and tasks without naming the loss function.',
        cognitiveRationale: 'Stripping problem headers forces the learner to execute Category Selection (diagnosis) on every single trial rather than relying on external cues (Rohrer & Taylor, 2007).',
      },
      {
        id: 'step-enforce-systematic-problem-shuffling',
        number: 2,
        title: 'Enforce Systematic Problem Shuffling (ABC-BCA-CAB)',
        prompt: 'Assemble practice problem sets where no two consecutive problems share the same underlying formula, law, or category. How will you sequence your next practice session to guarantee that working memory buffer displacement occurs between trials?',
        placeholder: 'e.g., Sequence: Problem 1 (T-test) -> Problem 2 (Chi-Square) -> Problem 3 (ANOVA) -> Problem 4 (Paired T-test) -> Problem 5 (ANOVA)... Guaranteeing that every problem forces a full retrieval of the appropriate formula from long-term memory...',
        example: 'Algorithm Practice: Rotated Dynamic Programming -> Graph DFS -> Binary Search -> Sliding Window -> Graph BFS. Solved 1 problem from each category sequentially rather than doing 5 DP problems back-to-back.',
        cognitiveRationale: 'Switching categories displaces the working memory buffer, forcing repeated retrieval and reconstruction of the solution plan from long-term memory (Shea & Morgan, 1979).',
      },
      {
        id: 'step-explicit-boundary-verbalization',
        number: 3,
        title: 'Explicitly Verbalize Discriminative Boundaries',
        prompt: 'Before calculating or coding the answer to an interleaved problem, pause for 30 seconds and answer two diagnostic questions: (1) "What specific constraint distinguishes this problem from the previous problem?" and (2) "Why does the previous problem’s formula fail here?" Write your discriminative boundary rule:',
        placeholder: 'e.g., Diagnostic Pause Rule: "Before writing any code, I must identify why the previous problem’s solution algorithm cannot work for this problem (e.g. \'Problem 1 had non-negative weights, so Dijkstra worked; Problem 2 has negative cycles, so Bellman-Ford is required\')."...',
        example: 'Cardiology ECG drill: Before classifying an arrhythmia, explicitly stated: "This looks like flutter due to the sawtooth baseline, but the irregular ventricular response and variable RR intervals distinguish it as atrial fibrillation with coarse f-waves."',
        cognitiveRationale: 'Explicit discriminative contrast forces the cognitive system to map the multidimensional decision boundary between competing categories (Kornell & Bjork, 2008).',
      },
    ],
  },
};
