import type { Lesson } from '../types/learning.ts';

export const LESSON_EDGE_OF_ABILITY_FEEDBACK: Lesson = {
  id: 'edge-of-ability-feedback',
  chapterId: 'ch-12-deliberate-practice',
  number: '12.1',
  title: 'The Edge of Ability & Immediate Feedback',
  subtitle: 'Designing practice regimens that target specific sub-skill deficits',
  readingTimeMinutes: 18,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'Why do most software developers plateau after two years on the job and fail to improve over the next decade, while elite practitioners reach world-class mastery in the exact same timeframe?',
    teaser: 'Mere repetition does not produce expertise. Experience without targeted strain at the edge of ability only automates mediocrity.',
    hookNote: 'In 1993, cognitive psychologist K. Anders Ericsson published his landmark paper "The Role of Deliberate Practice in the Acquisition of Expert Performance," demolishing the myth of innate talent and revealing the true engine of human mastery. Ericsson discovered that standard work—what he termed "naive practice" or mindless execution—rapidly leads to an "arrested development plateau" (Fitts & Posner’s autonomous stage). Once an activity feels comfortable and fluent, biological homeostasis stops physiological and neural adaptation. To break through plateaus, performance must be subjected to **Deliberate Practice**: targeted training designed to continuously stretch the learner just beyond their current comfort zone (the "Edge of Ability"), accompanied by immediate, calibrated error feedback and relentless repetition of isolated sub-skills. In this lesson, we explore Ericsson’s 4-pillar deliberate practice framework, Robert Yerkes & John Dodson’s arousal/difficulty curve, and Robert Bjork’s Desirable Difficulties to construct practice loops that rewire cognitive architecture.',
  },
  prediction: {
    prompt: 'Before dissecting Ericsson’s deliberate practice architecture, test your intuition on skill acquisition: Two software engineering organizations want their senior backend engineers to master low-latency lock-free concurrent programming. Organization A relies on "On-the-Job Experience": engineers write production concurrent code 40 hours a week for 6 months, receiving standard asynchronous code reviews after PR submission (feedback latency: 1-2 days). Organization B puts engineers through a 2-hour daily "Deliberate Practice Lab" for 6 months (10 hours/week total): engineers solve isolated, micro-benchmarked concurrent concurrency puzzles at the absolute edge of their ability, with automated test harnesses providing instantaneous sub-second race condition feedback, forcing them to immediately rewrite failing routines until deadlock-free. What does empirical cognitive science predict regarding their diagnostic speed and bug rate on novel high-concurrency benchmarks?',
    context: 'Engineers in Organization A accrued 4x more total working hours (960 hours vs 240 hours) than Organization B:',
    options: [
      {
        id: 'opt-volume-workplace-experience',
        strategy: 'Hypothesis A: Production Volume Supremacy',
        description: 'Organization A significantly outperforms Organization B, because 960 hours of real-world production code exposes engineers to authentic business domain complexity that synthetic 2-hour practice puzzles cannot replicate.',
      },
      {
        id: 'opt-deliberate-practice-acceleration',
        strategy: 'Hypothesis B: Deliberate Practice Concentration',
        description: 'Organization B outperforms Organization A by over 300% on concurrency diagnostics and writes 4x fewer bugs, because 240 hours of deliberate practice with sub-second feedback at the edge of ability drives structural neuroplasticity that 960 hours of comfortable routine execution never triggers (Ericsson et al., 1993).',
      },
      {
        id: 'opt-innate-talent-predominance',
        strategy: 'Hypothesis C: Baseline Talent Predominance',
        description: 'Both groups perform nearly identically, because concurrent systems architecture is governed by innate spatial working memory capacity that cannot be meaningfully expanded past age 25.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-deliberate-practice-acceleration',
      headline: 'Hours of Routine Experience Do Not Predict Expert Performance: Deliberate Practice with Immediate Error Feedback Drives Mastery (Ericsson et al., 1993).',
      explanation: 'In his landmark 1993 study of violinists, pianists, surgeons, and chess grandmasters, Ericsson proved that the mere accumulation of hours spent executing an activity (experience) shows virtually zero correlation with elite performance once an acceptable baseline is reached. At work (Organization A), engineers spend most of their time in their comfort zone executing familiar patterns, with feedback delayed by days. This induces Fitts & Posner’s "autonomous stage"—skills become automated and cognitive development freezes. In contrast, Organization B engaged in true Deliberate Practice: (1) Tasks were designed specifically at the edge of current ability; (2) Automated harnesses provided instantaneous error feedback within milliseconds; (3) Engineers immediately repeated the failed sub-skill with corrected mental representations. Despite having one-fourth the total hours, Organization B accrued over 50x more high-fidelity error correction cycles, remodeling neural schemas and constructing sophisticated mental representations.',
      optionFeedback: {
        'opt-volume-workplace-experience': {
          title: 'Your Choice: Hypothesis A (The 10,000-Hour Experience Myth)',
          verdict: 'Refuted by 30+ Years of Expertise Research',
          analysis: 'Mere job tenure does not create expertise. Studies of physicians and software engineers show that performance often stagnates or slightly declines after 3-5 years unless deliberate practice is maintained (Choudhry et al., 2005; Ericsson, 2006).',
        },
        'opt-deliberate-practice-acceleration': {
          title: 'Your Choice: Hypothesis B (Deliberate Practice Concentration)',
          verdict: 'Empirical Cognitive Science Consensus',
          analysis: 'Precisely accurate! Ericsson et al. (1993) demonstrated that deliberate practice—characterized by targeted sub-skill strain, immediate feedback, and repetitive correction—is the primary causal determinant of expert performance.',
        },
        'opt-innate-talent-predominance': {
          title: 'Your Choice: Hypothesis C (The Innate Talent Fallacy)',
          verdict: 'Disproven by Ericsson, Krampe, & Tesch-Römer (1993)',
          analysis: 'Except for physical height in basketball or body size in gymnastics, expert cognitive capabilities are acquired through thousands of hours of effortful structural adaptation rather than immutable genetic gifts.',
        },
      },
      comparisons: [
        {
          label: 'Deliberate Practice Lab (Organization B, 240 hrs)',
          immediateRetention: '92% diagnostic speed on novel deadlocks; 50x more feedback cycles',
          oneWeekRetention: '86% durable mental model of concurrency primitives',
          illusionRating: 'Low; constant edge-of-ability challenge prevents false fluency',
          isEmpiricalWinner: true,
        },
        {
          label: 'Routine Production Experience (Organization A, 960 hrs)',
          immediateRetention: '31% diagnostic speed; plateaued in autonomous comfort zone',
          oneWeekRetention: '28% fragmented recall of idiosyncratic bug fixes',
          illusionRating: 'High fluency illusion; 10 years of experience is often 1 year repeated 10 times',
          isEmpiricalWinner: false,
        },
      ],
      evidenceDistinction: 'Naive practice automates performance inside the comfort zone (arrested development); deliberate practice introduces targeted friction at the edge of ability with immediate feedback (continuous neuroplastic remodeling).',
    },
  },
  coreExplanations: [
    {
      id: 'ericsson-deliberate-practice-foundations',
      title: 'K. Anders Ericsson: The Anatomy of Deliberate Practice',
      tagline: 'Why experience alone freezes skill, and the four mandatory pillars of expert development',
      statusLabel: 'Pioneering Psychological Science Benchmark (1993)',
      scientificStatus: 'empirical-consensus',
      summary: 'In 1993, K. Anders Ericsson shattered the belief that talent or mindless repetition creates expertise. He proved that expert performance requires "Deliberate Practice"—a highly demanding, structured activity explicitly designed to optimize specific sub-skill deficiencies through immediate informative feedback.',
      mechanisms: [
        {
          label: 'The Three Stages of Skill Acquisition (Fitts & Posner, 1967)',
          description: 'Skills progress across 3 stages: (1) Cognitive (conscious trial and error), (2) Associative (fewer errors, smoother execution), and (3) Autonomous (automated, effortless execution). Once autonomy is reached, performance plateaus. Deliberate practice is the deliberate disruption of autonomy to force the skill back into the conscious cognitive stage.',
        },
        {
          label: 'The Four Pillars of Deliberate Practice',
          description: '(1) Well-defined specific goal targeting a sub-skill deficit; (2) Full, undivided concentration at the edge of ability; (3) Immediate, informative error feedback; (4) Repetition with immediate correction of errors.',
        },
        {
          label: 'Homeostasis Disruption & Biological Adaptation',
          description: 'Biological systems resist change. Routine work maintains homeostasis, triggering zero cellular or synaptic adaptation. Only strenuous activity just outside current capacity forces the body and brain out of homeostasis, driving gene transcription (CREB), dendritic remodeling, and myelination.',
        },
      ],
      keyInsight: 'Expertise is not the reward for doing work you already know how to do; it is the physiological consequence of forcing biological systems out of homeostasis.',
      simplifiedModelCaveat: 'Deliberate practice is inherently effortful, mentally exhausting, and not inherently enjoyable; elite performers can typically sustain only 3 to 4 hours of true deliberate practice per day.',
    },
    {
      id: 'feedback-latency-error-calibration',
      title: 'Feedback Latency & The Temporal Dynamics of Error Correction',
      tagline: 'How shrinking feedback delay from days to milliseconds transforms skill acquisition rate',
      statusLabel: 'Cognitive Engineering & Cybernetics Consensus',
      scientificStatus: 'empirical-consensus',
      summary: 'In cybernetics and motor learning, the efficiency of an error correction loop is an inverse function of feedback latency. When feedback is delayed by hours or days (as in standard code reviews), the neural activation context of the error has decayed, rendering synaptic calibration ineffective.',
      mechanisms: [
        {
          label: 'Immediate vs Delayed Feedback Dynamics',
          description: 'In procedural sub-skills, immediate feedback (delivered within milliseconds of error generation) halts error consolidation and prevents incorrect motor or cognitive habit loops from etching into the basal ganglia.',
        },
        {
          label: 'Trace Degradation & Credit Assignment',
          description: 'If an engineer writes a concurrency bug on Monday but receives PR review comments on Thursday, the brain cannot accurately solve the "Credit Assignment Problem"—it cannot match the distal error back to the exact transient mental state that caused it.',
        },
        {
          label: 'The Automated Harness as Cognitive Mirror',
          description: 'Elite performers use synthetic training harnesses (unit tests with chaos injectors, live telemetry, audio pitch monitors) that provide unambiguous, instantaneous discrepancy signals, turning implicit errors into explicit learning vectors.',
        },
      ],
      keyInsight: 'The speed of learning is strictly bounded by the turnaround time of the error feedback loop.',
      simplifiedModelCaveat: 'For complex conceptual synthesis (e.g. essay writing or macro-architecture), slightly delayed feedback can sometimes promote deeper reflection; but for skill execution and debugging, low-latency feedback is strictly superior.',
    },
    {
      id: 'edge-of-ability-desirable-difficulty',
      title: 'The Edge of Ability: Yerkes-Dodson & Desirable Difficulties',
      tagline: 'Calibrating task difficulty to the optimal 85% success zone for continuous neuroplasticity',
      statusLabel: 'Neurobiology & Cognitive Psychology Consensus',
      scientificStatus: 'neurobiological-mechanism',
      summary: 'Learning fails when tasks are too easy (boredom, zero adaptation) or too difficult (overwhelming anxiety, working memory collapse). Robert Bjork’s Desirable Difficulties and Wilson et al.’s (2019) 85% Rule prove that optimal neuroplastic adaptation occurs when learners operate at an ~85% success rate (15% error rate).',
      mechanisms: [
        {
          label: 'The Yerkes-Dodson Law of Arousal & Performance (1908)',
          description: 'Performance follows an inverted-U relationship with arousal and task difficulty. Optimal learning occurs in the sweet spot between panic (prefrontal shutdown) and complacency (homeostatic stagnation).',
        },
        {
          label: 'The 85% Rule for Optimal Learning (Wilson et al., 2019)',
          description: 'In both biological neural networks and machine learning models, the rate of learning is mathematically maximized when task difficulty is calibrated such that the learner makes errors roughly 15% of the time. If error rate is 0%, zero learning occurs.',
        },
        {
          label: 'Sub-Skill Decomposition & Targeted Overload',
          description: 'Grandmasters do not practice playing full chess games; they isolate specific pawn endgames and practice them hundreds of times. Deliberate practice decomposes macro-skills into atomic sub-skills, loading each at its exact edge of ability.',
        },
      ],
      keyInsight: 'If you complete a practice session without making errors, you did not learn—you merely performed what you already knew.',
      simplifiedModelCaveat: 'Operating at the 15% error edge requires emotional resilience and high psychological safety; in toxic environments, error aversion pushes learners back into safe, non-adaptive routines.',
    },
  ],
  diagram: {
    title: 'The Deliberate Practice Neuro-Adaptive Loop',
    subtitle: 'From targeted sub-skill isolation to immediate feedback discrepancy and myelin remodeling',
    stages: [
      {
        id: 'stage-subskill-isolation-targeting',
        name: 'Stage 1: Atomic Sub-Skill Isolation',
        subtitle: 'Decomposing macro-performance into specific deficit vectors',
        capacity: 'Focused prefrontal executive allocation',
        duration: 'Upfront practice design phase',
        role: 'The learner isolates a specific sub-skill deficit (e.g., lock-free CAS loops, memory barrier semantics) rather than practicing the entire application.',
        failureMode: 'Macro-Drifting: Practicing full games or building general apps without isolating weak links.',
        evidenceType: 'Empirical expertise consensus (Ericsson et al., 1993)',
        practicalFix: 'Decompose every macro-skill into 5 atomic sub-skills and practice the weakest one exclusively.',
      },
      {
        id: 'stage-edge-of-ability-strain',
        name: 'Stage 2: Edge-of-Ability Execution',
        subtitle: 'Targeting the 15% error margin to disrupt homeostasis',
        capacity: 'Maximum working memory strain',
        duration: 'Intense 45-90 minute blocks',
        role: 'The learner performs the sub-skill at a difficulty level that produces ~15% errors. This strain disrupts cellular homeostasis and signals prefrontal-striatal plastic adaptation.',
        failureMode: 'Comfort Zone Fallacy: Staying in the 100% success zone (fluent, easy, zero adaptation).',
        evidenceType: 'Neuroplasticity benchmark (Wilson et al., 2019; Fitts & Posner, 1967)',
        practicalFix: 'Increase problem difficulty or add time pressure as soon as your accuracy exceeds 90%.',
      },
      {
        id: 'stage-instantaneous-feedback-discrepancy',
        name: 'Stage 3: Instantaneous Feedback Discrepancy',
        subtitle: 'Sub-second error detection and credit assignment',
        capacity: 'High-bandwidth automated verification',
        duration: '<100 ms automated harness signal',
        role: 'An automated harness or mentor delivers immediate discrepancy feedback, highlighting the exact parameter mismatch before the neural context decays.',
        failureMode: 'Feedback Latency Rot: Waiting days for PR reviews, completely divorcing error signals from neural traces.',
        evidenceType: 'Cybernetics & learning theory (Ericsson, 2006)',
        practicalFix: 'Build fast automated feedback loops (unit test watchers, property-based fuzzers) that run on every keystroke.',
      },
      {
        id: 'stage-repetition-with-representation-updating',
        name: 'Stage 4: Repetitive Correction & Mental Model Updating',
        subtitle: 'Immediate re-execution to lock in corrected schemas',
        capacity: 'Synaptic potentiation & myelin consolidation',
        duration: 'Relentless micro-iterations',
        role: 'The learner immediately re-attempts the failed problem, adjusting their mental representation until execution is flawless. Repeated activation stimulates oligodendrocytes to myelinate the circuit.',
        failureMode: 'Passive Acknowledgment: Reading the error message or solution without immediately re-executing it from memory.',
        evidenceType: 'Cognitive architecture consensus (Ericsson, 1993; Fields, 2008)',
        practicalFix: 'Never read a bug fix passively: clear the screen and re-implement the corrected code from scratch.',
      },
    ],
    feedbackLoopDescription: 'Deliberate practice systematically disrupts autonomous complacency, utilizing sub-second feedback at the 15% error edge to drive structural neuroplastic remodeling.',
  },
  exercise: {
    title: 'The Deliberate Practice Diagnostic Exercise',
    instruction: 'Analyze four real-world software engineering, team training, and skill development scenarios. Diagnose whether the failure stems from The Autonomous Plateau, Feedback Latency Rot, Comfort Zone Stagnation, or Macro-Practice Diffusion, and prescribe the evidence-grounded fix.',
    categories: [
      {
        id: 'attention-bottleneck',
        title: 'The Autonomous Plateau',
        description: 'Allowed a skill to become automated and comfortable, freezing professional growth after 2 years despite accumulating 10 years of tenure.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'working-memory-overload',
        title: 'Feedback Latency Rot',
        description: 'Delayed error feedback by days or weeks, making it neurobiologically impossible for the brain to assign credit and correct mental representations.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Comfort Zone Stagnation',
        description: 'Practiced exclusively in the 100% success zone with zero errors, mistaking effortless performance for real cognitive learning.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Macro-Practice Diffusion',
        description: 'Attempted to improve by executing whole macro-projects without decomposing or isolating specific sub-skill deficits.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-senior-dev-10-year-stagnation',
        realWorldContext: 'Enterprise Java Backend Maintenance Team',
        scenario: 'Dave has been a software developer for 12 years. He writes standard Spring Boot REST controllers effortlessly, rarely encounters unexpected bugs on daily tasks, and feels completely confident. However, when the company migrates to a reactive streaming architecture (Project Reactor), Dave struggles severely, takes 6 months to grasp basic backpressure concepts, and complains that the new system is "bad design".',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'Dave hit Fitts & Posner’s Autonomous Stage (Ericsson et al., 1993). He accrued 10 years of experience, but it was 1 year of experience repeated 10 times. Because his daily tasks never pushed him out of homeostasis, his mental representations ossified into an arrested development plateau.',
        evidenceBasedFix: 'Disrupt the autonomous plateau through Deliberate Practice: assign Dave targeted 1-hour micro-coding katas focused specifically on reactive stream operators, forcing his brain back into the conscious cognitive stage.',
      },
      {
        id: 'scen-weekly-pr-feedback-drift',
        realWorldContext: 'Distributed Remote Open-Source Contribution Workflow',
        scenario: 'Junior developers submit large pull requests containing 1,500 lines of code across 12 files. Senior maintainers review the PRs once a week on Friday afternoon, leaving 45 inline comments detailing architectural flaws and memory leaks. The junior developers read the comments, feel defensive and overwhelmed, and repeat the same mistakes in the next PR.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'The team is crippled by Feedback Latency Rot (Ericsson, 2006). A 5-day feedback delay dissociates the error signal from the original neural context. Trying to process 45 complex criticisms simultaneously overwhelms working memory and causes cognitive shutdown.',
        evidenceBasedFix: 'Compress the feedback loop: break PRs into atomic micro-commits (<100 lines), pair-program with live synchronous feedback, or enforce automated linting and contract tests that run on every keystroke.',
      },
      {
        id: 'scen-leet-code-easy-binge-trap',
        realWorldContext: 'Software Engineer Preparing for Technical Interviews',
        scenario: 'Jessica spends 3 hours every evening solving "LeetCode Easy" array problems. She solves 150 problems over two months, scoring 100% on every single one and feeling proud of her discipline. In her first actual technical interview, she is asked a medium-difficulty dynamic programming question, panics immediately, and fails the interview.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'Jessica suffered from Comfort Zone Stagnation (Wilson et al., 2019; Bjork, 1994). Her practice operated at a 0% error rate, generating zero prediction errors and zero neuroplastic adaptation. She mistook the fluent retrieval of easy patterns for true algorithmic problem-solving ability.',
        evidenceBasedFix: 'Enforce the 85% Rule: immediately stop solving Easy problems. Move to Medium and Hard problems calibrated so she fails approximately 15% of the time, forcing her prefrontal cortex to construct novel schemas.',
      },
      {
        id: 'scen-whole-game-web-dev-fumble',
        realWorldContext: 'Self-Taught Programmer Bootstrapping a SaaS Startup',
        scenario: 'Alex wants to learn full-stack development, so he starts building a full e-commerce marketplace from scratch (auth, billing, catalog, UI, deployment). After 4 months of chaotic coding, his CSS looks broken, his database queries have N+1 issues, and his authentication has CSRF vulnerabilities. He feels overwhelmed and makes no measurable progress on any individual skill.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'Alex fell into Macro-Practice Diffusion (Ericsson et al., 1993). Trying to practice everything at once across an entire application scatters cognitive resources. Without isolating specific sub-skill deficiencies, errors compound and mental representations remain blurred.',
        evidenceBasedFix: 'Apply Sub-Skill Decomposition: halt the entire marketplace. Spend 1 week exclusively practicing SQL query indexing, 1 week exclusively practicing authentication security flows, and 1 week on CSS Flexbox/Grid katas until each sub-skill reaches precision.',
      },
    ],
  },
  quiz: {
    title: 'Verification Assessment: The Deliberate Practice Framework',
    instruction: 'Evaluate your operational understanding of Ericsson’s deliberate practice pillars, Fitts & Posner’s autonomy plateau, and the 85% optimal learning rule. Achieve 75% or higher to verify mastery.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-ericsson-deliberate-practice-definition',
        question: 'According to K. Anders Ericsson et al. (1993), what fundamentally differentiates "Deliberate Practice" from ordinary work experience or recreational play?',
        options: [
          {
            id: 'q1-a',
            text: 'Deliberate practice is performed for external monetary compensation and involves social networking.',
          },
          {
            id: 'q1-b',
            text: 'Deliberate practice is a highly structured, effortful activity explicitly designed to overcome specific sub-skill deficits through immediate informative feedback and repetitive error correction.',
          },
          {
            id: 'q1-c',
            text: 'Deliberate practice is mindless repetition of familiar routines until they feel effortless and natural.',
          },
          {
            id: 'q1-d',
            text: 'Deliberate practice is listening to classical music while sleeping to absorb skills unconsciously.',
          },
        ],
        correctOptionId: 'q1-b',
        explanation: 'Ericsson defined deliberate practice as an individualized, effortful training regimen designed explicitly to target weaknesses, accompanied by immediate informative feedback and opportunities for repetition and refinement. Mere execution or playful repetition does not qualify.',
        pedagogicalRationale: 'Clarifies the rigorous scientific definition of deliberate practice versus naive work experience.',
        evidenceNote: 'Ericsson, K. A., Krampe, R. T., & Tesch-Römer, C. (1993). The role of deliberate practice in the acquisition of expert performance. Psychological Review, 100(3), 363-406.',
      },
      {
        id: 'q2-fitts-posner-autonomous-plateau',
        question: 'Why does reaching Fitts & Posner’s (1967) "Autonomous Stage" of skill acquisition pose a major danger to long-term professional expertise?',
        options: [
          {
            id: 'q2-a',
            text: 'Because automated skills cause permanent brain damage to the hippocampus.',
          },
          {
            id: 'q2-b',
            text: 'Because once execution becomes automated and effortless, biological homeostasis prevents further neural adaptation, arresting skill development at an acceptable mediocrity plateau.',
          },
          {
            id: 'q2-c',
            text: 'Because autonomous skills can only be performed while standing up.',
          },
          {
            id: 'q2-d',
            text: 'Because the autonomous stage requires 100% of working memory bandwidth at all times.',
          },
        ],
        correctOptionId: 'q2-b',
        explanation: 'In the autonomous stage, performance becomes automated and cognitively comfortable. Because automated execution maintains physiological and neural homeostasis, the brain has no stimulus to remodel synaptic architecture. Performers plateau indefinitely unless deliberate practice deliberately disrupts autonomy.',
        pedagogicalRationale: 'Explains the neurological mechanism behind the common "10-year experience plateau".',
        evidenceNote: 'Fitts, P. M., & Posner, M. I. (1967). Human performance. Brooks/Cole.',
      },
      {
        id: 'q3-wilson-85-percent-rule-learning-rate',
        question: 'In empirical cognitive modeling and machine learning (Wilson et al., 2019), why is the rate of learning mathematically maximized when training difficulty produces an error rate of approximately 15%?',
        options: [
          {
            id: 'q3-a',
            text: 'Because a 15% error rate corresponds to the maximum rate of informational entropy reduction, balancing sufficient success for reinforcement with sufficient prediction errors for gradient updating.',
          },
          {
            id: 'q3-b',
            text: 'Because human dopamine receptors only fire when an engineer is 85% dehydrated.',
          },
          {
            id: 'q3-c',
            text: 'Because 15% of all software code contains syntax errors by law.',
          },
          {
            id: 'q3-d',
            text: 'Because practicing with zero errors causes prefrontal lobe atrophy within 24 hours.',
          },
        ],
        correctOptionId: 'q3-a',
        explanation: 'Wilson et al. (2019) demonstrated across biological and artificial neural networks that learning is optimal at an ~85% accuracy rate (the "85% Rule"). A 0% error rate yields zero prediction errors to drive learning; a 50% error rate leads to catastrophic noise and confusion. An ~15% error rate provides the optimal gradient for plastic adaptation.',
        pedagogicalRationale: 'Provides a concrete mathematical guideline for calibrating practice difficulty.',
        evidenceNote: 'Wilson, R. C., Shenhav, A., Straccia, M., & Cohen, J. D. (2019). The eighty-five percent rule for optimal learning. Nature Communications, 10(1), 4646.',
      },
      {
        id: 'q4-immediate-feedback-credit-assignment',
        question: 'Why does immediate automated feedback vastly outperform feedback delayed by days or weeks when developing technical debugging and procedural skills?',
        options: [
          {
            id: 'q4-a',
            text: 'Because delayed feedback uses too much computer hard drive memory.',
          },
          {
            id: 'q4-b',
            text: 'Because immediate feedback solves the "credit assignment problem" by pairing the discrepancy signal directly with the active neural representation in working memory before trace decay occurs.',
          },
          {
            id: 'q4-c',
            text: 'Because engineers forget how to read English if feedback is delayed more than 48 hours.',
          },
          {
            id: 'q4-d',
            text: 'Because automated test suites produce pleasant chimes that increase endorphin levels.',
          },
        ],
        correctOptionId: 'q4-b',
        explanation: 'To correct a flawed cognitive schema, the brain must know exactly which intermediate thought or assumption caused the error. When feedback is instantaneous, the causal thought is still active in working memory, allowing precise synaptic credit assignment and error correction.',
        pedagogicalRationale: 'Emphasizes the engineering priority of building fast automated feedback loops.',
        evidenceNote: 'Ericsson, K. A. (2006). The influence of experience and deliberate practice on the development of superior expert performance. Cambridge Handbook of Expertise and Expert Performance, 38, 683-703.',
      },
    ],
  },
  practicalTask: {
    title: 'The Deliberate Practice Sub-Skill Architecture Protocol',
    summary: 'A 3-step practical protocol to deconstruct a complex engineering competency, isolate the weakest sub-skill, and design an edge-of-ability training loop with instantaneous feedback.',
    steps: [
      {
        id: 'step-decompose-macro-skill-atomic-subskills',
        number: 1,
        title: 'Decompose a Macro-Skill into 5 Atomic Sub-Skills & Identify the Deficit',
        prompt: 'Select a broad professional skill you need to master (e.g. distributed systems debugging, frontend performance optimization, database query tuning, security threat modeling). Break it into 5 distinct sub-skills and pinpoint your weakest link:',
        placeholder: 'e.g., Database Tuning: (1) Reading EXPLAIN ANALYZE execution plans, (2) B-tree vs GIN index selection, (3) Vacuum and freeze parameter tuning, (4) Lock contention diagnosis, (5) Connection pool sizing. Weakest: Reading EXPLAIN ANALYZE join algorithms...',
        example: 'Distributed Systems: (1) Raft consensus leader election rules, (2) Vector clock concurrency resolution, (3) Gossip protocol failure detectors, (4) RPC connection pool backoff, (5) Distributed transaction 2PC abort handling. Weakest link: Vector clock race resolution.',
        cognitiveRationale: 'Macro-skills diffuse cognitive focus. Isolating the specific sub-skill deficit directs 100% of executive prefrontal resources to the point of failure (Ericsson, 1993).',
      },
      {
        id: 'step-engineer-instant-feedback-harness',
        number: 2,
        title: 'Engineer an Instantaneous Feedback Harness (<1s Latency)',
        prompt: 'Design a synthetic practice environment or micro-test harness that delivers sub-second feedback on whether your sub-skill execution is correct. How will you verify accuracy without waiting for external reviews?',
        placeholder: 'e.g., "Write a suite of 20 failing unit tests testing complex vector clock merge conflicts. Run vitest --watch so that every code edit executes tests in under 200ms."...',
        example: 'Automated Harness: Created 15 SQL query optimization challenges on local Postgres. Script executes EXPLAIN (ANALYZE, BUFFERS) and checks if Shared Hit Blocks < 100 and execution time < 5ms within 300ms of saving the query.',
        cognitiveRationale: 'Sub-second feedback loops solve the credit assignment problem, preventing error consolidation and accelerating schema calibration (Wilson et al., 2019).',
      },
      {
        id: 'step-calibrate-85-percent-strain',
        number: 3,
        title: 'Calibrate the 85% Edge of Ability & Execute Repetitive Refinement',
        prompt: 'Tune the difficulty of your practice regimen: if you are solving problems with 100% success, introduce harsher constraints (e.g. reduce time limit by 50%, add concurrency chaos, handle network partitions). Record your 15% error edge:',
        placeholder: 'e.g., "Level 1: 2-node vector clocks (100% pass -> too easy). Level 2: 5-node concurrent partitions with clock drift (80% pass, 20% fail -> optimal practice zone). Repetitively execute 10 trials until accuracy hits 90%, then escalate to Byzantine faults."...',
        example: 'Calibrated Strain: Attempted 10 hard concurrency kata puzzles. Failed 2 on race conditions (20% error rate). Immediately cleared the screen and re-implemented the failing lock-free queues until deadlock-free without looking at solutions.',
        cognitiveRationale: 'Operating at the 15% error margin forces biological systems out of homeostasis, triggering CREB gene transcription and structural myelin remodeling (Fitts & Posner, 1967; Wilson et al., 2019).',
      },
    ],
  },
};
