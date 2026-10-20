import type { Lesson } from '../types/learning.ts';

export const LESSON_CONFIRMATION_BIAS_SUNK_COST_STUDY: Lesson = {
  id: 'sunk-cost-study-biases',
  chapterId: 'ch-18-biases-epistemic',
  number: '18.2',
  title: 'Confirmation Bias & Sunk Cost in Study Methods',
  subtitle: 'Abandoning familiar but empirically bankrupt learning rituals',
  readingTimeMinutes: 14,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'Why do intelligent learners spend hundreds of hours highlighting textbooks and building aesthetic digital databases when empirical science proves they produce near-zero retention—and why is abandoning a bankrupt study ritual so psychologically painful?',
    teaser: 'Confirmation bias makes passive rituals feel productive; the sunk cost fallacy traps learners into defending wasted hours rather than pivoting to mastery.',
    hookNote: 'In 2013, educational psychologist John Dunlosky and colleagues published a monumental 55-page monograph in Psychological Science in the Public Interest reviewing a century of empirical research across 10 ubiquitous learning techniques. The findings were devastating: the two most popular techniques used by millions of students worldwide—passive highlighting/underlining and re-reading—ranked at the very bottom, classified as "Low Utility" with negligible long-term retention. Yet, despite this evidence, millions of learners continue these rituals daily. Why? Social psychologists Peter Wason (1960) and Raymond Nickerson (1998) showed that Confirmation Bias leads students to adopt a "positive test strategy": they re-read because fluent familiarity feels good, while avoiding closed-book testing because errors hurt. Concurrently, Hal Arkes and Catherine Blumer (1985; Thaler, 1980) demonstrated the Sunk Cost Fallacy: having invested 200 hours color-coding notes or $2,000 in a certificate, learners experience acute "waste aversion." Leon Festinger’s (1957) cognitive dissonance compels them to rationalize: "Science says highlighting is useless, but it works for my personal learning style!" In this lesson, we deconstruct how confirmation bias and sunk cost trap smart learners, explore the neurobiology of motivated reasoning and cognitive dissonance in the anterior insula and vmPFC, and build a pre-committed "Discrepancy Sunsetting Protocol" with Annie Duke’s (2022) "Kill Criteria" to ruthlessly eliminate bankrupt study habits.',
  },
  prediction: {
    prompt: 'A senior professional preparing for a high-stakes cloud security architect certification has spent 120 hours over 3 months meticulously hand-writing color-coded summary notebooks and organizing 800 Notion pages with aesthetic icons. Two weeks before the exam, she takes a rigorous, closed-book diagnostic practice test and scores 42% (failing). When a cognitive coach recommends that she immediately stop re-reading her notes and spend her remaining two weeks doing daily closed-book retrieval practice and debugging mock scenarios, what is her psychological instinct, and what does decision science predict?',
    context: 'The professional is highly intelligent, motivated to pass, and has access to both her complete notes and full diagnostic test answer keys:',
    options: [
      {
        id: 'opt-rational-pivot-immediate',
        strategy: 'Hypothesis A: Rational Utility Maximization',
        description: 'She will gratefully discard her notebooks immediately because human learners are rational utility maximizers who abandon ineffective study rituals the moment disconfirming performance data appears.',
      },
      {
        id: 'opt-resist-sunk-cost-rationalization',
        strategy: 'Hypothesis B: Sunk Cost Escalation & Confirmation Rationalization',
        description: 'She will resist abandoning her notebooks, experience intense cognitive dissonance (Festinger, 1957), rationalize that the practice test was unfairly tricky, and double down on re-reading her notes due to the Sunk Cost Fallacy (Arkes & Blumer, 1985) and Confirmation Bias (Nickerson, 1998).',
      },
      {
        id: 'opt-secretly-effective-notes',
        strategy: 'Hypothesis C: Latent Competence Equivalence',
        description: 'Her color-coded notes are secretly consolidating deep implicit schemas; the 42% test score was a temporary retrieval glitch that will resolve itself without changing study habits.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-resist-sunk-cost-rationalization',
      headline: 'Cognitive Dissonance and Sunk Cost Drive Escalation of Commitment: Disconfirming Evidence Triggers Defensive Rationalization Rather Than Methodological Pivots (Arkes & Blumer, 1985; Festinger, 1957; Nickerson, 1998).',
      explanation: 'Decades of behavioral economics and cognitive psychology prove that human beings are not dispassionate Bayesian updaters. When the professional receives a 42% score, her brain experiences acute Cognitive Dissonance (Festinger, 1957): the reality of failure clashes violently with her self-concept as a dedicated student who invested 120 hours. To alleviate this psychological pain without discarding her 120-hour investment (Arkes & Blumer’s Sunk Cost Fallacy, 1985), she engages in motivated reasoning. She blames the test questions, clings to the fluency heuristic of her familiar notes (Nickerson’s Confirmation Bias, 1998), and tells herself: "I just need to review my Notion pages one more time." Admitting that her notes are low-utility requires writing off 120 hours of sunk labor as wasted—a prospect human "waste aversion" fiercely resists. Without pre-committed kill criteria, learners escalate commitment to bankrupt rituals all the way to real-world failure.',
      optionFeedback: {
        'opt-rational-pivot-immediate': {
          title: 'Your Choice: Hypothesis A (Rational Utility Maximization)',
          verdict: 'Refuted by Behavioral Economics & Social Psychology',
          analysis: 'Humans do not act as cold rational calculators. Sunk costs and ego investment create powerful emotional resistance to abandoning familiar habits.',
        },
        'opt-resist-sunk-cost-rationalization': {
          title: 'Your Choice: Hypothesis B (Sunk Cost Escalation & Rationalization)',
          verdict: 'Empirical Consensus in Cognitive Science & Decision Theory',
          analysis: 'Exactly right! Hal Arkes & Catherine Blumer (1985) and Leon Festinger (1957) proved that unrecoverable past investments generate defensive rationalizations, causing learners to cling to bankrupt methods rather than admitting wasted effort.',
        },
        'opt-secretly-effective-notes': {
          title: 'Your Choice: Hypothesis C (Latent Competence Equivalence)',
          verdict: 'Refuted by Dunlosky (2013) & Retrieval Research',
          analysis: 'Passive summarization and re-reading consistently produce near-zero long-term retention. Relying on "latent consolidation" is wishful thinking that leads to exam failure.',
        },
      },
      comparisons: [
        {
          label: 'Likelihood of Abandoning Bankrupt Study Method Without Scaffolding',
          immediateRetention: 'Under 18% (Most Learners Escalate Sunk Costs)',
          oneWeekRetention: 'Over 82% (When Pre-Committed Kill Criteria are Enforced)',
          illusionRating: 'High Dissonance & Defensive Rationalization in Uncalibrated Learners',
          isEmpiricalWinner: true,
        },
        {
          label: 'Retention Utility of Summarization/Highlighting vs Active Retrieval (Dunlosky, 2013)',
          immediateRetention: 'Low Utility (d = 0.15 - 0.25)',
          oneWeekRetention: 'High Utility (d = 0.75 - 0.90)',
          illusionRating: 'Highlighting feels fluent; retrieval feels effortful but works',
          isEmpiricalWinner: true,
        },
      ],
      evidenceDistinction: 'Hal Arkes & Catherine Blumer (1985) Organizational Behavior and Human Decision Processes; Leon Festinger (1957) A Theory of Cognitive Dissonance; Raymond Nickerson (1998) Review of General Psychology; John Dunlosky et al. (2013) Psychological Science in the Public Interest.',
    },
  },
  coreExplanations: [
    {
      id: 'wason-nickerson-confirmation-bias',
      title: 'Wason & Nickerson: Confirmation Bias in Study Rituals',
      tagline: 'The positive test strategy and why fluency is mistaken for comprehension',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Empirical Consensus in Cognitive Science',
      summary: 'Peter Wason (1960) and Raymond Nickerson (1998) proved that human hypothesis testing is crippled by Confirmation Bias: individuals seek evidence that confirms their existing hypotheses while avoiding disconfirming tests. In educational habits, students adopt a positive test strategy: they re-read highlighted passages and review familiar notes because these activities generate immediate cognitive fluency and validate their competence hypothesis. Conversely, they actively avoid closed-book retrieval practice or diagnostic pre-tests because encountering errors would falsify their feeling of competence. By conflating ease of reading with true learning, learners insulate ineffective study rituals from empirical scrutiny.',
      mechanisms: [
        {
          label: 'The Positive Test Strategy',
          description: 'Learners select study tasks that guarantee success (re-reading easy summaries) to confirm their belief that they understand the material.'
        },
        {
          label: 'Diagnostic Test Avoidance',
          description: 'Students resist self-testing because an objective failure signal threatens their fragile competence illusion.'
        },
        {
          label: 'Fluency Heuristic Conflation',
          description: 'Ease of visual perceptual scanning during re-reading is erroneously decoded by working memory as deep conceptual storage.'
        }
      ],
      keyInsight: 'Re-reading and highlighting are seductive because they are rigged positive tests: they feel effortless and confirm your feeling of mastery while hiding what you actually do not know.',
      simplifiedModelCaveat: 'Not all re-reading is useless. Re-reading coupled with active self-explanation or after a prolonged delay can stimulate generative processing, but passive rereading remains the lowest-utility technique in cognitive psychology.'
    },
    {
      id: 'arkes-blumer-sunk-cost-fallacy',
      title: 'Arkes & Blumer (1985): The Sunk Cost Fallacy in Learning Systems',
      tagline: 'Escalating commitment to bankrupt study methods to justify past investment',
      scientificStatus: 'cognitive-model',
      statusLabel: 'Behavioral Economics Paradigm',
      summary: 'Hal Arkes and Catherine Blumer (1985; Richard Thaler, 1980) demonstrated that humans display a powerful irrational compulsion to continue an endeavor once an unrecoverable investment of time, money, or effort has been made. In skill acquisition, learners spend dozens of hours crafting elaborate aesthetic color-coded summary notebooks, building thousands of digital flashcards, or purchasing expensive courses. When cognitive science reveals that these methods have negligible retention utility (Dunlosky et al., 2013), learners experience acute waste aversion. Rather than writing off past hours as unrecoverable and pivoting to active retrieval, they double down on the failing ritual to justify their prior sacrifice.',
      mechanisms: [
        {
          label: 'Waste Aversion & Escalation of Commitment',
          description: 'The psychological pain of acknowledging that 100 hours of note-taking produced zero mastery causes learners to invest even more hours in the same ritual.'
        },
        {
          label: 'Backward-Looking Justification',
          description: 'Decisions are driven by past unrecoverable costs rather than future marginal expected utility.'
        },
        {
          label: 'The Aesthetic Note-Taking Trap',
          description: 'Elaborate digital databases (Notion, GoodNotes) provide aesthetic satisfaction that disguises the complete absence of memory consolidation.'
        }
      ],
      keyInsight: 'Time already spent on an ineffective study method is gone forever. Continuing to use a bankrupt study ritual will not recover a single minute of the past; it only steals hours from your future mastery.',
      simplifiedModelCaveat: 'Sunk costs apply to tools and platforms as well as methods. Switching learning platforms should be evaluated by marginal daily friction and retrieval fidelity, not how many months you have used the old software.'
    },
    {
      id: 'festinger-duke-discrepancy-sunsetting',
      title: 'Festinger & Annie Duke: Cognitive Dissonance & Habit Sunsetting',
      tagline: 'Overcoming motivated reasoning through pre-committed kill criteria',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Empirical Debiasing Protocol',
      summary: 'Leon Festinger’s (1957) Cognitive Dissonance Theory reveals that when learners encounter empirical evidence contradicting their study rituals, they experience acute psychological tension. To resolve this tension without changing behavior, they engage in motivated reasoning—rationalizing that "empirical science doesn’t apply to me because of my unique learning style." To break this epistemic trap, learners must adopt Annie Duke’s (2022) Pre-Committed Kill Criteria and habit sunsetting protocols. Before beginning an intervention, the learner defines explicit, objective metrics (e.g. "If my delayed closed-book retrieval score is below 70% after 14 days, I will permanently sunset this note-taking ritual"). Pre-committing to kill criteria decouples method termination from identity threat, enabling friction-free epistemic updating.',
      mechanisms: [
        {
          label: 'Neuromyth Defensive Rationalization',
          description: 'Learners invoke debunked ideas like "visual vs auditory learning styles" to shield cherished study rituals from scientific disproof.'
        },
        {
          label: 'Pre-Committed Kill Criteria (Annie Duke)',
          description: 'Establishing explicit termination rules in advance removes emotional deliberation and sunk cost hesitation at decision time.'
        },
        {
          label: 'Empirical Intervention Split-Testing',
          description: 'Running controlled A/B experiments on one’s own learning (interleaving vs blocking) provides personal empirical data that dissolves dogma.'
        }
      ],
      keyInsight: 'Deciding when to quit a study method cannot be left to intuition in the heat of the moment. You must establish pre-committed kill criteria: precise, objective failure thresholds that trigger automatic habit sunsetting.',
      simplifiedModelCaveat: 'Kill criteria must be calibrated realistically. Quitting a challenging evidence-based method (like active retrieval) on Day 1 because it feels difficult is a misapplication of kill criteria; genuine difficulty is desirable.'
    }
  ],
  diagram: {
    title: 'The Confirmation Bias & Sunk Cost Escalation Cycle',
    subtitle: 'From Bankrupt Ritual Defense to Pre-Committed Epistemic Sunsetting',
    stages: [
      {
        id: 'stage-bankrupt-ritual-investment',
        name: 'Stage 1: Massive Investment in Bankrupt Rituals',
        subtitle: 'Unconscious Labor & The Aesthetic Fluency Trap',
        capacity: 'Time Invested: 120 hrs • Retention Utility: Low (d = 0.18)',
        duration: 'Early preparation phase',
        role: 'The learner spends weeks rewriting color-coded notes, highlighting textbooks, and building complex Notion templates. Rereading feels effortless and productive.',
        failureMode: 'Confusing visual aesthetics and organizational neatness with neural schema consolidation.',
        evidenceType: 'Dunlosky et al. (2013) comprehensive utility assessment of 10 learning techniques',
        practicalFix: 'Audit study tasks: if a task does not require generative retrieval from memory, it is low utility.',
      },
      {
        id: 'stage-disconfirming-shock',
        name: 'Stage 2: The Disconfirming Reality Shock',
        subtitle: 'Diagnostic Failure & The Crisis of Competence',
        capacity: 'Diagnostic Score: 42% (Failing) • Discrepancy: Extreme',
        duration: 'Testing intervention phase',
        role: 'A rigorous closed-book exam or authentic clinical scenario exposes that the learner cannot retrieve or apply knowledge in a vacuum.',
        failureMode: 'Blaming the test, the instructor, or bad luck rather than interrogating the study methodology.',
        evidenceType: 'Wason (1960) & Nickerson (1998) confirmation bias and feedback avoidance',
        practicalFix: 'Treat diagnostic failure as an infallible measurement of current retrieval strength.',
      },
      {
        id: 'stage-dissonance-and-rationalization',
        name: 'Stage 3: Cognitive Dissonance & Sunk Cost Defense',
        subtitle: 'Motivated Reasoning & Escalation of Commitment',
        capacity: 'Waste Aversion: Severe • Dissonance Rationalization: Active',
        duration: 'Defensive crisis phase',
        role: 'The learner feels acute psychological pain: admitting the notes are useless means 120 hours were wasted. The learner rationalizes: "It works for my learning style!"',
        failureMode: 'Doubling down on rereading the notes, escalating commitment to a failing strategy.',
        evidenceType: 'Arkes & Blumer (1985) Sunk Cost Fallacy & Festinger (1957) Cognitive Dissonance',
        practicalFix: 'Apply forward utility analysis: past time is zero-value; only future retention velocity matters.',
      },
      {
        id: 'stage-precommitted-sunsetting',
        name: 'Stage 4: Pre-Committed Habit Sunsetting (Mastery)',
        subtitle: 'Executing Kill Criteria & Pivoting to Retrieval Practice',
        capacity: 'Retention Utility: High (d = 0.88) • Epistemic Debt: $0',
        duration: 'Calibrated operational phase',
        role: 'The learner executes pre-committed kill criteria, shelves the notes without emotional debt, and pivots 100% of study time to active recall and interleaved problem sets.',
        failureMode: 'Relapsing into passive highlighting during moments of exam stress or cognitive fatigue.',
        evidenceType: 'Annie Duke (2022) Quit kill criteria & Roediger & Karpicke (2006) retrieval practice',
        practicalFix: 'Lock study routines into active retrieval templates with zero highlighting tools available.',
      },
    ],
    feedbackLoopDescription: 'Bankrupt rituals create fluency illusions; diagnostic shock triggers defensive sunk cost escalation; pre-committed kill criteria cut emotional debt and force a pivot to high-utility retrieval.',
  },
  exercise: {
    title: 'Study Habit Bias & Sunk Cost Diagnosis Lab',
    instruction: 'Analyze 4 real-world academic and professional learning crises across medical board preparation, software engineering bootcamp, legal bar review, and corporate leadership training. Diagnose whether the crisis stems from The Sunk Cost Escalation Trap (Defending wasted hours), The Positive Test Confirmation Trap (Rereading easy material), The Cognitive Dissonance Neuromyth Defense (Appealing to learning styles), or Calibrated Habit Sunsetting (Executing clean kill criteria), and prescribe the evidence-grounded fix.',
    categories: [
      {
        id: 'working-memory-overload',
        title: 'The Sunk Cost Escalation Trap (Defending Wasted Hours)',
        description: 'Continuing to invest time in an unproductive study ritual simply because hundreds of hours have already been poured into it.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'The Positive Test Confirmation Trap (Rigged Fluency)',
        description: 'Selecting study activities like rereading and reviewing solved examples that guarantee fluent familiarity while avoiding real testing.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'attention-bottleneck',
        title: 'The Cognitive Dissonance Neuromyth Defense (Ego Rationalization)',
        description: 'Using debunked ideas like "visual learning styles" or "bad test questions" to shield cherished rituals from scientific disproof.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Calibrated Habit Sunsetting (Clean Epistemic Pivot)',
        description: 'Pre-committing to objective kill criteria and discarding bankrupt study habits without emotional attachment.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-medical-student-goodnotes-trap',
        realWorldContext: 'USMLE Step 1 Medical Board Preparation',
        scenario: 'A second-year medical student spends 4 hours every evening meticulously drawing anatomical diagrams and calligraphy summaries on an iPad. After 4 months and 400 hours, her first comprehensive NBME practice exam score is in the 28th percentile. When her advisor tells her to switch to timed Anki flashcards and UWorld question banks, she cries: "I can’t throw away 400 hours of beautiful notes! I just need to re-read them faster."',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'This is textbook Sunk Cost Fallacy (Arkes & Blumer, 1985). The 400 hours already invested are unrecoverable sunk costs. Her refusal to abandon the aesthetic notes stems from waste aversion, which blinds her to the fact that continuing to re-read them will guarantee board failure.',
        evidenceBasedFix: 'Archive the iPad notebooks immediately. Enforce Annie Duke’s (2022) kill criteria: dedicate 100% of study time to active question banks and spaced retrieval, evaluating progress by weekly score deltas rather than aesthetic notes.',
      },
      {
        id: 'scen-junior-coder-syntax-highlighting',
        realWorldContext: 'Full-Stack Software Engineering Intensive Bootcamp',
        scenario: 'A student learning JavaScript reads the same textbook chapter 5 times, highlighting lines in yellow, pink, and green. When quizzed in class on writing a function from memory, he goes blank. He protests: "I don’t understand why I froze; when I look at the highlighted code in the book, it all makes complete and total sense to me!"',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'This is the Positive Test Confirmation Trap and Fluency Illusion (Nickerson, 1998; Dunlosky et al., 2013). Highlighting and re-reading provided perceptual fluency, which his brain misattributed to generative competence. Because he never conducted a negative test (closed-book generation), he never discovered his ignorance.',
        evidenceBasedFix: 'Institute the "Blank Sheet Protocol": close the textbook, turn off syntax highlighting, and write the algorithm from memory into a plain terminal editor before re-opening the book.',
      },
      {
        id: 'scen-corporate-executive-learning-style-excuse',
        realWorldContext: 'Executive Financial Accounting Certification',
        scenario: 'A VP of marketing fails an internal corporate valuation exam after spending weeks watching passive lecture videos at 1.5x speed. When the instructor shows her research proving that passive video watching yields under 20% retention compared to active problem solving, she dismisses it: "That research is for average students; I am an auditory/visual learner, so passive listening is scientifically optimal for my specific brain type."',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'This is the Cognitive Dissonance Neuromyth Defense (Festinger, 1957; Pashler et al., 2008). To avoid the uncomfortable truth that her preferred ritual is ineffective, she resolves dissonance by appealing to the debunked "learning styles" neuromyth as an ego shield.',
        evidenceBasedFix: 'Debunk the learning style myth directly: present Pashler et al. (2008) showing zero evidence for learning style meshing, and require her to complete 5 interactive financial balance sheet drills.',
      },
      {
        id: 'scen-law-student-kill-criteria-sunsetting',
        realWorldContext: 'State Bar Examination Multistate Review',
        scenario: 'A law student decides to test a new legal case summary software. Before starting, she writes down: "If my multistate multiple-choice score on Torts does not reach 75% within 14 days, I will delete this software and return to practice MBE question drilling." On Day 14, her score is 62%. Without hesitation, she uninstalls the software and switches to MBE practice.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'This is Calibrated Habit Sunsetting with Pre-Committed Kill Criteria (Annie Duke, 2022). By defining explicit, objective kill criteria in advance, the student bypassed cognitive dissonance and sunk cost bias, executing a friction-free pivot to higher-utility methods.',
        evidenceBasedFix: 'Standardize this pre-commitment protocol across all learning endeavors: establish 14-day kill criteria before adopting any new software, course, or study ritual.',
      },
    ],
  },
  quiz: {
    title: 'Chapter 18.2 Mastery Assessment: Confirmation Bias & Sunk Cost in Study Methods',
    instruction: 'Demonstrate rigorous comprehension of confirmation bias in learning, sunk cost escalation mechanics, cognitive dissonance defenses, and pre-committed kill criteria.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-wason-nickerson-confirmation-bias-rituals',
        question: 'Why do popular study techniques like highlighting textbooks and passive rereading persist among students despite comprehensive meta-analyses (Dunlosky et al., 2013) ranking them as "Low Utility"?',
        options: [
          {
            id: 'q1-a',
            text: 'Because highlighter ink contains chemical compounds that stimulate hippocampal neurogenesis.',
          },
          {
            id: 'q1-b',
            text: 'Because they function as positive test confirmation traps: they create effortless cognitive fluency that feels productive, while protecting students from the painful errors of real retrieval testing.',
          },
          {
            id: 'q1-c',
            text: 'Because textbooks are written in special fonts that can only be processed if highlighted.',
          },
          {
            id: 'q1-d',
            text: 'Because students enjoy buying expensive stationery more than passing exams.',
          },
        ],
        correctOptionId: 'q1-b',
        explanation: 'Nickerson (1998) and Dunlosky et al. (2013) showed that passive rereading and highlighting create the illusion of competence through perceptual fluency. Students prefer them because they never generate error signals, confirming the false belief that the material is mastered.',
        pedagogicalRationale: 'Validates understanding of how confirmation bias perpetuates low-utility study habits.',
        evidenceNote: 'Dunlosky, J., et al. (2013). Improving students’ learning with cognitive techniques. Psychological Science in the Public Interest, 14(1), 4–58; Nickerson, R. S. (1998). Confirmation bias. Review of General Psychology, 2(2), 175–220.',
      },
      {
        id: 'q2-arkes-blumer-sunk-cost-learning-systems',
        question: 'How does the Sunk Cost Fallacy (Arkes & Blumer, 1985) sabotage learners when cognitive science reveals that their preferred study method is ineffective?',
        options: [
          {
            id: 'q2-a',
            text: 'It causes learners to demand a full cash refund from their university.',
          },
          {
            id: 'q2-b',
            text: 'It causes acute waste aversion, driving learners to escalate commitment to the failing ritual in an irrational attempt to justify the hundreds of hours already poured into it.',
          },
          {
            id: 'q2-c',
            text: 'It makes learners forget what subject they were studying.',
          },
          {
            id: 'q2-d',
            text: 'It automatically converts passive notes into long-term memories.',
          },
        ],
        correctOptionId: 'q2-b',
        explanation: 'Arkes & Blumer (1985) demonstrated that past unrecoverable investments drive decision-making. Admitting that an elaborate study ritual is useless feels like admitting past time was wasted, so learners double down on the bankrupt habit rather than making a clean break.',
        pedagogicalRationale: 'Checks comprehension of the sunk cost fallacy mechanism in educational habits.',
        evidenceNote: 'Arkes, H. R., & Blumer, C. (1985). The psychology of sunk cost. Organizational Behavior and Human Decision Processes, 35(1), 124–140.',
      },
      {
        id: 'q3-festinger-cognitive-dissonance-learning-styles',
        question: 'When learners are confronted with conclusive scientific evidence that the "learning styles" theory (VAK) is an unproven neuromyth, why do many react with defensiveness (Festinger, 1957)?',
        options: [
          {
            id: 'q3-a',
            text: 'Because admitting the theory is false threatens their self-concept and creates cognitive dissonance, which they resolve by rationalizing that science doesn’t apply to their personal experience.',
          },
          {
            id: 'q3-b',
            text: 'Because learning styles were proven true by fMRI scans in 2024.',
          },
          {
            id: 'q3-c',
            text: 'Because teachers lose their teaching licenses if they stop believing in learning styles.',
          },
          {
            id: 'q3-d',
            text: 'Because cognitive dissonance only occurs during sleep deprivation.',
          },
        ],
        correctOptionId: 'q3-a',
        explanation: 'Festinger’s (1957) Cognitive Dissonance Theory explains that when reality conflicts with an ego-invested belief, the human brain experiences acute discomfort. Rather than updating beliefs, individuals rationalize ("I know my own brain best") to protect their self-image.',
        pedagogicalRationale: 'Validates understanding of motivated reasoning and cognitive dissonance in learning.',
        evidenceNote: 'Festinger, L. (1957). A Theory of Cognitive Dissonance. Stanford University Press; Pashler, H., et al. (2008). Learning styles: Concepts and evidence. Psychological Science in the Public Interest, 9(3), 105–119.',
      },
      {
        id: 'q4-annie-duke-kill-criteria-sunsetting',
        question: 'According to decision strategist Annie Duke (2022), what is the most effective operational strategy to overcome sunk cost inertia and sunset an ineffective learning habit?',
        options: [
          {
            id: 'q4-a',
            text: 'Waiting until you fail the final official certification exam before considering any changes.',
          },
          {
            id: 'q4-b',
            text: 'Pre-committing to explicit "Kill Criteria" in advance: defining objective performance thresholds and deadlines that trigger an automatic, non-negotiable pivot.',
          },
          {
            id: 'q4-c',
            text: 'Asking your friends on social media whether they think you should quit.',
          },
          {
            id: 'q4-d',
            text: 'Studying twice as many hours each night without tracking metrics.',
          },
        ],
        correctOptionId: 'q4-b',
        explanation: 'Annie Duke (2022) demonstrated that in the heat of emotional commitment, humans rarely quit failing endeavors. The only reliable debiasing mechanism is pre-committing to explicit kill criteria beforehand (e.g., if diagnostic score < 75% by Day 14, terminate the method immediately).',
        pedagogicalRationale: 'Checks operational mastery of pre-committed kill criteria for habit sunsetting.',
        evidenceNote: 'Duke, A. (2022). Quit: The Power of Knowing When to Walk Away. Portfolio/Penguin.',
      },
    ],
  },
  practicalTask: {
    title: 'The Study Ritual Audit & Discrepancy Sunsetting Protocol',
    summary: 'Conduct a forensic audit of your current learning workflow, identify bankrupt study rituals, calculate sunk hour debt, and formulate an objective pre-committed kill criterion.',
    steps: [
      {
        id: 'task-step-1-ritual-audit',
        number: 1,
        title: 'Step 1: Forensic Audit of Active Learning Rituals',
        prompt: 'Examine your current study and work routine. Identify 1 or 2 activities you routinely perform that fall into Dunlosky’s "Low Utility" category (e.g. passive re-reading, highlighting, re-copying notes into GoodNotes/Notion, watching video tutorials without taking notes, or skimming documentation). Estimate how many total hours you have sunk into these rituals over the past 6 months.',
        placeholder: 'Target Habit: Meticulously creating color-coded summary pages in Notion from textbook chapters.\nEstimated Sunk Hours: ~95 hours over the last 4 months.\nWhy it feels productive: The pages look visually stunning and organized, creating a strong feeling of accomplishment.\nEmpirical Reality: On closed-book recall, I cannot reproduce 80% of the concepts without looking at the screen.',
        example: 'Target Habit: Highlighting PDF articles with 4 color highlighters and re-reading before meetings.\nEstimated Sunk Hours: 60 hours.\nWhy it feels productive: Text feels familiar and easy to skim.\nEmpirical Reality: Dunlosky et al. (2013) utility rating: Low (d = 0.18).',
        cognitiveRationale: 'Quantifying sunk hours forces the learner to confront the reality of time expenditure versus actual retention.'
      },
      {
        id: 'task-step-2-sunk-cost-writeoff',
        number: 2,
        title: 'Step 2: Declare the Sunk Cost Write-Off',
        prompt: 'Apply Arkes & Blumer’s principle of zero backward debt: write a formal declaration writing off those sunk hours. Acknowledge that continuing this habit will not retrieve a single lost second, and articulate your new forward-looking utility standard.',
        placeholder: 'Sunk Cost Declaration:\n"I acknowledge that the 95 hours spent formatting Notion pages are completely unrecoverable. Continuing to re-read them will not rescue those 95 hours; it will only steal future hours from passing my exam. My future study will be evaluated solely by one metric: delayed closed-book retrieval accuracy."',
        example: '"I write off the 60 hours spent highlighting PDFs. Past hours have zero economic value. From today, all reading will be accompanied by active flashcard generation."',
        cognitiveRationale: 'Explicitly articulating a write-off dissolves waste aversion and neutralizes defensive rationalizations.'
      },
      {
        id: 'task-step-3-precommitted-kill-criteria',
        number: 3,
        title: 'Step 3: Define Pre-Committed Kill Criteria & Replacement Protocol',
        prompt: 'Formulate an Annie Duke (2022) Kill Criterion for your new evidence-based replacement habit (e.g. closed-book active recall or flashcard drilling). Define: (1) The new protocol, (2) The diagnostic test to be administered, (3) The exact numeric score threshold, and (4) The deadline that triggers method adjustment.',
        placeholder: 'Replacement Protocol: 30 minutes of daily closed-book retrieval practice using Anki spaced repetition + 2 practice test problems.\nDiagnostic Benchmark: 20-question randomized closed-book mock test on Day 14.\nKill Criterion Threshold: If mock test score is below 75% on Day 14, I will immediately diagnose my flashcard atomicity and increase interleaved problem-solving drills.\nNon-Negotiable Rule: Zero highlighting or aesthetic note rewriting permitted during this 14-day window.',
        example: 'Replacement: Weekly timed practice exam on Sundays.\nKill Criterion: If score does not improve by >= 10 percentage points over 3 weeks, consult a mentor and change question bank source.',
        cognitiveRationale: 'Pre-committing to objective kill criteria eliminates emotional hesitation and guarantees continuous epistemic calibration.'
      },
    ],
  },
};
