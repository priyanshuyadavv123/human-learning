import type { Lesson } from '../types/learning.ts';

export const LESSON_SUBGOAL_LABELING_SCAFFOLDING: Lesson = {
  id: 'subgoal-labeling-scaffolding',
  chapterId: 'ch-17-heuristics',
  number: '17.2',
  title: 'Sub-Goal Labeling & Scaffolding',
  subtitle: 'Breaking complex problems into independently solvable cognitive chunks',
  readingTimeMinutes: 15,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'Why does meticulously following a 20-step tutorial produce zero autonomous problem-solving ability, and how do 3 simple functional labels flip novice transfer rates from 22% to over 80%?',
    teaser: 'Novices naturally encode worked examples as fragile, linear action sequences; explicit sub-goal labels chunk tactical steps into functional mental models.',
    hookNote: 'In foundational cognitive science, studying worked examples is known to dramatically outperform unassisted discovery for novices (Sweller, 1988). Yet educational psychologist Richard Catrambone (1995, 1998) uncovered a glaring defect in conventional worked examples: students study them superficially, memorizing arbitrary linear commands ($Step_1 \\rightarrow Step_2 \\dots$) rather than functional structures. When an examination question alters surface features, the memorized sequence collapses. Catrambone formulated the "Sub-Goal Learning Model," proving that visually grouping tactical steps under explicit functional labels forces working memory to chunk operations into hierarchical schemas. Years later, Lauren Margulieux (2012, 2016, 2019) demonstrated across computer programming and STEM education that subgoal labels cut extraneous cognitive load and eliminate tutorial paralysis. Furthermore, Alexander Renkl and Robert Atkinson (2002) engineered the "Backward Fading" architecture—requiring students to generate the final sub-goal first before gradually fading earlier steps—seamlessly bridging the chasm between passive worked examples and autonomous problem solving while preventing the Expertise Reversal Effect.',
  },
  prediction: {
    prompt: 'Two engineering teams are training junior software developers on building distributed event streaming pipelines with Apache Kafka:\n\nTeam Alpha ("Linear Procedural Tutorial"): Hands juniors an 18-step numbered checklist detailing every exact CLI command, configuration key, and consumer group parameter with thorough line-by-line annotations.\n\nTeam Beta ("Sub-Goal Labeled & Backward-Faded Architecture"): Hands juniors the exact same 18 commands, but visually grouped under three explicit functional sub-goal banners: "1. Define Topic Partitioning & Replication Quorum", "2. Configure Consumer Group Offsets & Idempotency", and "3. Implement Dead-Letter Queue & Circuit Breakers". In their second exercise, the final sub-goal is left blank for the juniors to write from scratch.\n\nOne week later, both groups are placed in a live technical evaluation where they must design an unfamiliar IoT MQTT telemetry pipeline with completely novel syntax and different cloud tooling. How do the two groups compare?',
    context: 'Both groups had identical initial computer science backgrounds, practiced for the exact same number of hours, and executed the identical 18 terminal commands in onboarding:',
    options: [
      {
        id: 'opt-team-alpha-linear-speed',
        strategy: 'Hypothesis A: Linear Procedural Tutorial Superiority',
        description: 'Team Alpha will outperform Team Beta because numbered linear steps eliminate abstract conceptual distraction, allowing junior developers to build faster muscle memory and focus on operational syntax.',
      },
      {
        id: 'opt-team-beta-subgoal-chunking',
        strategy: 'Hypothesis B: Catrambone & Margulieux Sub-Goal Schema Induction',
        description: 'Team Beta will substantially outperform Team Alpha on the novel telemetry challenge (Catrambone, 1995; Margulieux, 2016) because functional sub-goal banners forced working memory to chunk tactical operations into abstract, reusable architectural schemas rather than memorizing brittle syntax.',
      },
      {
        id: 'opt-equivalent-procedural-transfer',
        strategy: 'Hypothesis C: Equal Procedural Equivalence',
        description: 'Both groups will perform identically on transfer because both executed the exact same 18 command lines, and long-term memory stores procedural actions identically regardless of superficial section headers.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-team-beta-subgoal-chunking',
      headline: 'Functional Sub-Goal Labels Drive Schema Chunking and High-Order Transfer: Linear Step Sequences Collapse Under Contextual Variation (Catrambone, 1998; Margulieux, 2016; Renkl & Atkinson, 2002).',
      explanation: 'Cognitive science demonstrates that novices lack domain-specific schemas to infer the overarching purpose of individual actions. In Team Alpha, working memory was occupied entirely by deciphering low-level Kafka syntax and flags; they encoded an arbitrary serial chain ($Cmd_1 \\rightarrow Cmd_2 \\dots \\rightarrow Cmd_{18}$). When confronted with the novel MQTT IoT pipeline, their serial chain had zero matching surface tokens, resulting in cognitive paralysis. In Team Beta, Catrambone’s sub-goal labels grouped multiple micro-commands into three functional mental chunks. Rather than memorizing Kafka flags, they internalized an invariant architectural pattern: (1) Quorum Partitioning, (2) Idempotent Offset Management, (3) Failure Routing. When given the novel MQTT problem, they simply mapped their 3 internalized sub-goals to the new syntax. Furthermore, Renkl & Atkinson’s backward fading required them to generate the final sub-goal actively, cementing schema retrieval and confidence.',
      optionFeedback: {
        'opt-team-alpha-linear-speed': {
          title: 'Your Choice: Hypothesis A (Linear Procedural Tutorial)',
          verdict: 'Refuted by Cognitive Load Theory & Schema Research',
          analysis: 'Numbered linear steps feel fluent during onboarding (the illusion of competence), but build brittle scripts that completely fail to transfer when syntax or domain parameters change.',
        },
        'opt-team-beta-subgoal-chunking': {
          title: 'Your Choice: Hypothesis B (Sub-Goal Labeled Architecture)',
          verdict: 'Empirical Consensus in Cognitive Science & STEM Education',
          analysis: 'Correct! Richard Catrambone (1995, 1998) and Lauren Margulieux (2016) proved across extensive controlled trials that subgoal labels group tactical steps into functional cognitive chunks, elevating transfer performance by 30% to 50%.',
        },
        'opt-equivalent-procedural-transfer': {
          title: 'Your Choice: Hypothesis C (Equal Procedural Equivalence)',
          verdict: 'Refuted by Structural Schema Memory Findings',
          analysis: 'Executing the same physical steps does NOT guarantee identical cognitive encoding. Visual and semantic sub-goal framing fundamentally changes how working memory organizes information in long-term memory.',
        },
      },
      comparisons: [
        {
          label: 'Novel Transfer Task Success Rate (Catrambone & Margulieux, 2016)',
          immediateRetention: '28% (Linear Tutorial)',
          oneWeekRetention: '79% (Sub-Goal Labeled + Faded)',
          illusionRating: 'High Illusion in Linear, Real Competence in Sub-Goal',
          isEmpiricalWinner: true,
        },
        {
          label: 'Extraneous Cognitive Load During Acquisition (NASA-TLX)',
          immediateRetention: 'High (Disoriented in Syntax)',
          oneWeekRetention: 'Significantly Lower (Landmark Guided)',
          illusionRating: 'Sub-goal labels liberate germane bandwidth',
          isEmpiricalWinner: true,
        },
      ],
      evidenceDistinction: 'Richard Catrambone (1995, 1998) Journal of Experimental Psychology: General; Lauren Margulieux et al. (2016, 2019) Educational Technology Research and Development; Renkl, Atkinson & Sweller (2002) Interactive Learning Environments.',
    },
  },
  coreExplanations: [
    {
      id: 'catrambone-subgoal-learning-model',
      title: 'Catrambone’s Sub-Goal Learning Model: Chunking Action Sequences',
      tagline: 'Converting brittle serial execution scripts into hierarchical cognitive schemas',
      scientificStatus: 'cognitive-model',
      statusLabel: 'Cognitive Model & Schema Induction',
      summary: 'In foundational cognitive science, studying worked examples accelerates early learning compared to unassisted discovery (the worked-example effect, Sweller, 1988). However, Richard Catrambone (1995, 1998) proved that novices naturally study worked examples superficially, memorizing arbitrary linear commands (Step 1 -> Step 2 ...) rather than functional schemas. Because working memory is heavily constrained (4 +/- 1 chunks, Cowan, 2001) and consumed by syntax, novices fail to infer why actions were clustered. Catrambone demonstrated that providing explicit functional Sub-Goal Labels forces working memory to chunk tactical operations into meaningful modules. This stimulates elaborative self-explanation, builds hierarchical problem spaces, and enables learners to transfer their mental models to novel problem variations.',
      mechanisms: [
        {
          label: 'Cognitive Chunk Compression',
          description: 'Sub-goal labels compress multiple operational steps into a single macro-concept, preventing working memory exhaustion during complex problem solving.'
        },
        {
          label: 'Self-Explanation Induction',
          description: 'Explicit functional headers force learners to mentally justify why specific steps belong under a given sub-goal, driving deep schema construction.'
        },
        {
          label: 'Hierarchical Goal Indexing',
          description: 'Replaces brittle serial action sequences ($S_1 \\rightarrow S_2$) with flexible tree structures where sub-goals can be solved using alternative operators.'
        }
      ],
      keyInsight: 'Novices do not automatically infer the functional purpose of tactical problem-solving steps. Explicit sub-goal labels group tactical steps into modular cognitive chunks, converting fragile linear recipes into durable, transferable schemas.',
      simplifiedModelCaveat: 'Sub-goal labels must be functionally descriptive (e.g., "Normalize Input Vector") rather than syntactically descriptive (e.g., "Divide by Square Root"). Vague or purely syntactic labels provide zero schema induction benefit.'
    },
    {
      id: 'margulieux-technical-scaffolding',
      title: 'Margulieux et al.: Subgoal Labeling in STEM & Code',
      tagline: 'Empirical verification across programming, robotics, and engineering',
      scientificStatus: 'empirical-consensus',
      statusLabel: 'Empirical Consensus in STEM Instruction',
      summary: 'Cognitive scientist Lauren Margulieux and colleagues (2012, 2016, 2019) expanded sub-goal labeling to computer science, robotics, and engineering. Programming tutorials present an overwhelming barrier: high extraneous load from dense syntax and unfamiliar APIs. In randomized controlled trials, Margulieux proved that learners receiving subgoal-labeled instructional materials experience significantly reduced cognitive load (measured via NASA-TLX/Paas scales), spend less time disoriented in syntax, require fewer instructor interventions, and achieve 30% to 50% higher transfer performance on novel engineering tasks.',
      mechanisms: [
        {
          label: 'Cognitive Disorientation Suppression',
          description: 'Subgoal labels provide structural landmarks, preventing novice learners from getting lost inside dense syntactic weeds.'
        },
        {
          label: 'Germane Bandwidth Liberation',
          description: 'By offloading structural parsing from working memory to the printed/visual layout, working memory can invest energy in conceptual schema formation.'
        },
        {
          label: 'Transferrable Structural Anchors',
          description: 'Learners carry the high-level sub-goal scaffold across languages, frameworks, and domains even when syntax changes completely.'
        }
      ],
      keyInsight: 'In dense technical domains like programming and engineering, sub-goal labels act as cognitive landmarks. They liberate novice working memory from syntactic disorientation, allowing learners to extract modular system architecture.',
      simplifiedModelCaveat: 'Subgoal labels must remain small in number (ideally 3 to 5 per task). Creating 15 micro-subgoals recreates the exact linear step overload the technique was designed to cure.'
    },
    {
      id: 'sweller-renkl-backward-fading',
      title: 'Renkl & Atkinson: The Backward Fading Architecture',
      tagline: 'Dynamic scaffolding transitions from worked examples to autonomous problem solving',
      scientificStatus: 'cognitive-model',
      statusLabel: 'Cognitive Load Theory & Fading Scaffolding',
      summary: 'Alexander Renkl, Robert Atkinson, and John Sweller (2002) engineered the Backward Faded Worked Example paradigm to bridge worked examples and unassisted problem solving. Novices face a dilemma: unguided search causes cognitive overload, but static worked examples eventually trigger the Expertise Reversal Effect (Kalyuga et al., 2003) as competence builds. In backward fading, students start with a fully worked example, then solve completion problems where the final sub-goal is faded first, followed by earlier sub-goals. Generating the final sub-goal first preserves proximity to the finished goal state and minimizes search uncertainty before demanding full autonomy.',
      mechanisms: [
        {
          label: 'Search-Space Constriction',
          description: 'Fading the final sub-goal first anchors the learner to a virtually complete system, minimizing combinatorial search and cognitive error.'
        },
        {
          label: 'Dynamic Cognitive Load Handover',
          description: 'Progressively shifts working memory effort from passive observational encoding to active retrieval and generative construction.'
        },
        {
          label: 'Expertise Reversal Shielding',
          description: 'Systematically removing scaffolding as competence increases prevents instructional aids from becoming redundant cognitive clutter.'
        }
      ],
      keyInsight: 'Scaffolding must not be binary. By backward-fading worked examples—requiring learners to complete the final sub-goal first while providing earlier steps—we preserve cognitive bandwidth and anchor learners to the goal state before demanding full generative autonomy.',
      simplifiedModelCaveat: 'Backward fading assumes sub-goals are hierarchically or serially dependent. In non-linear, ill-structured domains, fading can be organized modularly based on intrinsic sub-goal complexity rather than temporal sequence.'
    }
  ],
  diagram: {
    title: 'The Sub-Goal Chunking & Backward Fading Architecture',
    subtitle: 'From Cognitive Fragmentation to Transfer-Ready Autonomous Problem Solving',
    stages: [
      {
        id: 'stage-linear-unorganized',
        name: 'Stage 1: Linear Unlabeled Steps (Novice Overload)',
        subtitle: 'Cognitive Fragmentation & Fragile Rote Sequences',
        capacity: 'Working Memory Load: 95% (Extraneous Overload)',
        duration: 'Initial exposure phase',
        role: 'Novices are presented with a 15-step linear procedure. Without functional labels, each step consumes isolated working memory slots. When tested on novel problems, 1 minor perturbation causes complete chain collapse (Transfer rate: ~20%).',
        failureMode: 'Cowan’s working memory limit ($4 \\pm 1$) is quickly exceeded. Learners resort to rote surface memorization without mental model schema formation. NASA-TLX extraneous cognitive load ratings are maximal.',
        evidenceType: 'Cowan (2001) working memory chunk limits & Sweller (1988) cognitive load theory',
        practicalFix: 'Immediately group raw linear steps under 3 to 4 functional sub-goal labels.',
      },
      {
        id: 'stage-subgoal-chunked',
        name: 'Stage 2: Sub-Goal Labeled Chunking (Catrambone)',
        subtitle: 'Functional Modularization & Schema Induction',
        capacity: 'Working Memory Load: 55% (Germane Bandwidth Liberated)',
        duration: 'Schema encoding phase',
        role: 'Steps are grouped under 3 explicit functional sub-goal labels. Working memory load drops as discrete steps condense into 3 modular cognitive chunks. Learners induce structural schemas rather than memorizing syntax.',
        failureMode: 'Using purely syntactic or superficial labels (e.g. "Do Step 1") rather than functional intent ("Normalize Vector Space").',
        evidenceType: 'Catrambone (1995, 1998) Sub-Goal Learning Model & Margulieux (2016) STEM trials',
        practicalFix: 'Verify that every sub-goal label conveys functional intent and encompasses 2 to 5 tactical steps.',
      },
      {
        id: 'stage-backward-faded',
        name: 'Stage 3: Backward-Faded Completion (Renkl & Atkinson)',
        subtitle: 'Scaffolded Generation Anchored to Goal State',
        capacity: 'Generative Effort: Moderate-High (Optimized ZPD)',
        duration: 'Progressive fading phase',
        role: 'Learners study worked steps for Sub-Goals 1 and 2, but must actively generate Sub-Goal 3 (the finish line). In subsequent problems, Sub-Goal 2 is faded, then Sub-Goal 1.',
        failureMode: 'Fading forward from the start state, which throws novices into unguided search before problem context is established.',
        evidenceType: 'Renkl & Atkinson (2002) Backward Fading empirical paradigms',
        practicalFix: 'Provide earlier sub-goals as complete models; require the learner to execute only the final sub-goal.',
      },
      {
        id: 'stage-autonomous-transfer',
        name: 'Stage 4: Autonomous Schema Transfer (Far Transfer)',
        subtitle: 'Unassisted Problem Solving Across Novel Problem Spaces',
        capacity: 'Autonomous Transfer Rate: >85% • Expertise Reversal Mitigated',
        duration: 'Mastery & novel application phase',
        role: 'Scaffolding is fully removed. The learner encounters an unfamiliar problem with novel surface syntax and different tools, successfully decomposing it into internalized sub-goal schemas.',
        failureMode: 'Keeping heavy scaffolding intact for experienced learners, triggering the Expertise Reversal Effect (Kalyuga et al., 2003).',
        evidenceType: 'Kalyuga et al. (2003) Expertise Reversal Effect & Barnett & Ceci (2002) transfer metrics',
        practicalFix: 'Transition advanced learners to unassisted problem solving with sub-goals serving only as self-monitoring rubrics.',
      },
    ],
    feedbackLoopDescription: 'Functional sub-goal labels compress linear steps into modular chunks; backward fading scaffolds active retrieval nearest the goal state; systematic retirement of scaffolding shields experts from cognitive reversal.',
  },
  exercise: {
    title: 'Cognitive Scaffolding & Sub-Goal Triage Lab',
    instruction: 'Analyze 4 real-world training failures across data science bootcamps, enterprise cloud engineering, medical surgical training, and senior software development. Diagnose whether the crisis stems from Linear Step Fragmentation (Missing sub-goal labels), The Expertise Reversal Trap (Over-scaffolding advanced learners), Forward Fading Disorientation (Fading from the beginning instead of backward), or Successful Sub-Goal Scaffolding (Balanced fading with functional chunks), and prescribe the evidence-grounded fix.',
    categories: [
      {
        id: 'working-memory-overload',
        title: 'Linear Step Fragmentation (Tutorial Paralysis)',
        description: 'Learners follow an unlabeled linear cascade of tactical steps, building fluent superficial familiarity but zero transferrable schema.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'The Expertise Reversal Trap (Over-Scaffolding)',
        description: 'Advanced practitioners are forced to read verbose, beginner-level step-by-step scaffolding, causing extraneous cognitive friction.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'attention-bottleneck',
        title: 'Forward Fading Disorientation (Premature Blank Slate)',
        description: 'Requiring novices to generate the initial problem formulation before problem context and dependencies are established.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Successful Sub-Goal Scaffolding (Backward Faded Mastery)',
        description: 'Tactical steps are grouped into functional chunks, with the final sub-goal faded first, yielding robust autonomous transfer.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-data-science-bootcamp-paralysis',
        realWorldContext: 'Data Science Intensive Bootcamp Capstone Failure',
        scenario: 'A coding bootcamp provides students with 40-cell Jupyter notebooks that compute machine learning pipelines step-by-step. Students execute every cell successfully and report 95% satisfaction. However, on the final capstone project where students are given a raw CSV and a blank notebook, 70% cannot write the first 10 lines of code.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'This is Linear Step Fragmentation (Tutorial Paralysis, Catrambone, 1995; Margulieux, 2016). The 40 notebook cells were an unlabeled linear cascade. Students formed rote surface familiarity without chunking operations into functional schemas.',
        evidenceBasedFix: 'Group the 40 cells under 3 explicit Sub-Goal headers (e.g. "1. Ingest & Impute Missing Data", "2. Feature Engineering & Scaling", "3. Model Cross-Validation & Metric Evaluation") and implement backward-faded completion notebooks.',
      },
      {
        id: 'scen-senior-engineer-onboarding-reversal',
        realWorldContext: 'Senior Staff Engineer Onboarding in High-Frequency Trading',
        scenario: 'A senior systems engineer with 15 years of Linux kernel experience joins a trading firm. The onboarding portal forces her to spend 3 weeks clicking through a mandatory, unskippable 80-step interactive tutorial that explains how to open a terminal, run git clone, and define basic variables. She reports extreme frustration, sluggish performance, and mental exhaustion.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'This is textbook Expertise Reversal Effect (Kalyuga, Ayres, Chandler, & Sweller, 2003). Scaffolding that is vital for novices becomes extraneous cognitive clutter for experts who already possess automated schemas. Forcing an expert to process redundant instructions impairs cognitive performance.',
        evidenceBasedFix: 'Implement adaptive scaffolding retirement: allow experienced engineers to test out of elementary tutorials or provide a lean "Checklist & Architecture Invariants" document with zero worked examples.',
      },
      {
        id: 'scen-premature-forward-fading-robotics',
        realWorldContext: 'Autonomous Robotics Control Systems University Course',
        scenario: 'An instructor teaches robot kinematics by presenting one complete worked problem, and then asks students to solve a second problem by generating the initial coordinate transformation matrices from a blank page, while the instructor provides the later motor actuation formulas. Students immediately stall, fail to set up the frame, and experience severe anxiety.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'This is Forward Fading Disorientation (Renkl & Atkinson, 2002). Asking novices to generate Step 1 from a blank slate exposes them to maximum combinatorial search uncertainty before problem context is primed.',
        evidenceBasedFix: 'Switch to Backward Fading: provide the initial coordinate frames and transformation matrices as worked models; have students generate only the final motor actuation command. Once mastered, fade the penultimate step.',
      },
      {
        id: 'scen-cardiac-catheterization-backward-fading',
        realWorldContext: 'Interventional Cardiology Fellowship Training',
        scenario: 'A cardiology fellowship director trains fellows on stent placement: in Phase 1, the attending performs arterial puncture, sheath insertion, and wire navigation, while the fellow performs the final balloon deployment and stent expansion. In Phase 2, the fellow performs wire navigation and stent expansion. In Phase 3, the fellow performs the entire procedure. Complication rates drop by 45%.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'This is textbook Backward Fading (Renkl & Atkinson, 2002). The fellow is anchored to the completed preparatory state, minimizing working memory overload while gaining authentic generative mastery at the decisive clinical finish line.',
        evidenceBasedFix: 'Standardize backward fading across high-consequence procedural training, ensuring novices experience the final clinical outcome first.',
      },
    ],
  },
  quiz: {
    title: 'Chapter 17.2 Mastery Assessment: Sub-Goal Labeling & Scaffolding',
    instruction: 'Demonstrate deep comprehension of Catrambone’s Sub-Goal Learning Model, Margulieux’s empirical STEM findings, and Renkl & Atkinson’s backward fading paradigm.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-catrambone-subgoal-learning-model',
        question: 'According to Richard Catrambone’s (1995, 1998) Sub-Goal Learning Model, why do novices who study worked examples with explicit sub-goal labels significantly outperform those who study standard step-by-step examples on novel transfer problems?',
        options: [
          {
            id: 'q1-a',
            text: 'Sub-goal labels shorten reading time by summarizing the math so students can skip half the steps.',
          },
          {
            id: 'q1-b',
            text: 'Sub-goal labels force working memory to chunk tactical operations into functional schemas, preventing the formation of fragile, linear action scripts.',
          },
          {
            id: 'q1-c',
            text: 'Sub-goal labels eliminate the need for problem solving entirely, creating effortless mastery through passive visual scanning.',
          },
          {
            id: 'q1-d',
            text: 'Sub-goal labels induce slow-wave sleep spindles during daytime study.',
          },
        ],
        correctOptionId: 'q1-b',
        explanation: 'Catrambone demonstrated that novices lack prior schemas to organize discrete steps. Without labels, they encode brittle linear chains ($Step_1 \\rightarrow Step_2$). Explicit sub-goal labels group steps into functional chunks, allowing students to learn the underlying goal structure of the domain and transfer those schemas to novel problem variations.',
        pedagogicalRationale: 'Validates foundational knowledge of Catrambone’s Sub-Goal Learning Model.',
        evidenceNote: 'Catrambone, R. (1995). Aiding subgoal formation that leads to transfer to novel problems. Journal of Educational Psychology, 87(1), 5–17; Catrambone, R. (1998). The subgoal learning model. JEP: General, 127(4), 355–376.',
      },
      {
        id: 'q2-margulieux-subgoal-scaffolding-stem',
        question: 'In empirical studies of computer programming and STEM problem solving, what did Lauren Margulieux and colleagues (2016, 2019) observe regarding learners using subgoal-labeled materials?',
        options: [
          {
            id: 'q2-a',
            text: 'They experienced significantly lower extraneous cognitive load, spent less time disoriented in syntax, and achieved higher scores on novel transfer challenges.',
          },
          {
            id: 'q2-b',
            text: 'They spent twice as much time debugging syntax errors because the conceptual banners distracted them from code syntax.',
          },
          {
            id: 'q2-c',
            text: 'They showed no measurable difference compared to students given standard numbered code tutorials.',
          },
          {
            id: 'q2-d',
            text: 'They performed worse on transfer tasks because labels encouraged them to skip practical typing.',
          },
        ],
        correctOptionId: 'q2-a',
        explanation: 'Margulieux demonstrated across multiple programming and engineering domains that subgoal labels act as structural landmarks. They reduce extraneous cognitive load, eliminate disorientation in dense code, and lead to statistically significant gains in novel problem-solving transfer.',
        pedagogicalRationale: 'Validates empirical application of sub-goal labeling in technical/STEM disciplines.',
        evidenceNote: 'Margulieux, L. E., Catrambone, R., & Guzdial, M. (2016). Employing subgoals in educational technology to build flexible learners. Educational Technology Research and Development, 64(2), 251–272.',
      },
      {
        id: 'q3-sweller-renkl-backward-fading-architecture',
        question: 'In Renkl & Atkinson’s (2002) backward fading scaffolding architecture, which step or sub-goal is the student required to generate independently first?',
        options: [
          {
            id: 'q3-a',
            text: 'The very first sub-goal (problem formulation), while all subsequent steps are completed by the instructor.',
          },
          {
            id: 'q3-b',
            text: 'A randomly chosen intermediate sub-goal selected by a spaced repetition algorithm.',
          },
          {
            id: 'q3-c',
            text: 'The final sub-goal (the completion step), with all prerequisite steps provided as fully worked examples.',
          },
          {
            id: 'q3-d',
            text: 'All sub-goals simultaneously from day one without any scaffolding.',
          },
        ],
        correctOptionId: 'q3-c',
        explanation: 'Backward fading begins by having the learner solve the final sub-goal step first. This ensures the learner operates in a fully established problem state where all prerequisites are already satisfied, minimizing combinatorial search and connecting them directly to the finished goal state.',
        pedagogicalRationale: 'Checks understanding of the operational mechanism of backward fading.',
        evidenceNote: 'Renkl, A., & Atkinson, R. K. (2002). Learning from examples: Fostering self-explanations in computer-based learning environments. Interactive Learning Environments, 10(2), 105–119.',
      },
      {
        id: 'q4-expertise-reversal-and-scaffolding-fade',
        question: 'Why must instructional scaffolding (such as detailed worked examples and sub-goal explanations) be systematically faded as a learner develops competence?',
        options: [
          {
            id: 'q4-a',
            text: 'Because teachers get tired of writing detailed worked examples.',
          },
          {
            id: 'q4-b',
            text: 'To prevent the Expertise Reversal Effect, wherein instructional aids that support novices become extraneous cognitive distractions for experts with automated schemas.',
          },
          {
            id: 'q4-c',
            text: 'Because cognitive load theory states that long-term memory can only retain information if it was acquired through unguided struggle.',
          },
          {
            id: 'q4-d',
            text: 'Because advanced learners lose their reading ability if they are given worked examples.',
          },
        ],
        correctOptionId: 'q4-b',
        explanation: 'Kalyuga, Ayres, Chandler, and Sweller (2003) demonstrated the Expertise Reversal Effect: as learners internalize schemas into long-term memory, external scaffolding that was previously essential becomes redundant. Forcing an expert to process detailed worked steps overloads working memory with extraneous information, decreasing learning efficiency.',
        pedagogicalRationale: 'Validates understanding of dynamic scaffolding calibration and the expertise reversal effect.',
        evidenceNote: 'Kalyuga, S., Ayres, P., Chandler, P., & Sweller, J. (2003). The expertise reversal effect. Educational Psychologist, 38(1), 23–31.',
      },
    ],
  },
  practicalTask: {
    title: 'The Sub-Goal Decomposition & Backward-Fading Blueprint',
    summary: 'Transform a complex, opaque technical workflow into an evidence-grounded, subgoal-labeled instructional document with a 3-stage backward fading sequence.',
    steps: [
      {
        id: 'task-step-1-linear-audit',
        number: 1,
        title: 'Step 1: Identify an Opaque Linear Procedure',
        prompt: 'Select a multi-step task in your field (e.g. configuring a Kubernetes deployment, setting up a machine learning validation pipeline, conducting an econometric regression, or diagnosing a clinical presentation) that typically overwhelms novices. List its 8 to 15 raw, tactical linear steps.',
        placeholder: 'e.g. Setting up an asynchronous webhook ingestion pipeline with cryptographic signature verification and dead-letter queues:\n1. Generate secret key\n2. Configure Express route\n3. Extract x-hub-signature header\n4. Compute HMAC SHA-256 hash\n5. Compare hashes with constant-time equality\n6. Parse raw body payload\n7. Validate JSON schema with Zod\n8. Push to Redis queue\n9. Acknowledge HTTP 200 to sender\n10. Spawn background worker\n11. Attach exponential retry with jitter\n12. Route failed events to dead-letter storage',
        example: 'Task: Setting up Zero-Trust Microservice Mutual TLS (mTLS) Ingress:\n1. Generate Root CA\n2. Issue Intermediate cert\n3. Sign leaf cert\n4. Mount secret into container\n5. Configure Envoy proxy filter\n6. Define SAN validation regex\n7. Set cipher suites\n8. Route upstream traffic\n9. Verify mTLS handshake via curl',
        cognitiveRationale: 'Exposing the raw unorganized sequence makes visible the cognitive overload novices experience when unguided.'
      },
      {
        id: 'task-step-2-subgoal-chunking',
        number: 2,
        title: 'Step 2: Define 3 to 4 Functional Sub-Goal Labels',
        prompt: 'Apply Catrambone’s Sub-Goal Model: Group the tactical steps into 3 or 4 functional, meaningful sub-goals. Give each sub-goal an action-oriented, functional name (e.g. "1. Establish Cryptographic Trust Boundary", "2. Ingest & Validate Payload Invariants", "3. Dispatch Resilient Asynchronous Worker").',
        placeholder: 'Sub-Goal 1: Establish Cryptographic Trust & Signature Verification (Steps 1–5)\nSub-Goal 2: Ingest & Structurally Validate Payload (Steps 6–9)\nSub-Goal 3: Bind Resilient Asynchronous Dispatch & Failover (Steps 10–12)',
        example: 'Sub-Goal 1: Establish Mutual TLS Cryptographic Authority (Steps 1–4)\nSub-Goal 2: Configure Proxy Traffic Encryption & SAN Rules (Steps 5–7)\nSub-Goal 3: Bind Ingress Routing & Handshake Verification (Steps 8–9)',
        cognitiveRationale: 'Functional sub-goal labels compress isolated steps into modular cognitive chunks, liberating germane working memory bandwidth.'
      },
      {
        id: 'task-step-3-backward-fading-matrix',
        number: 3,
        title: 'Step 3: Construct the Backward-Fading Matrix',
        prompt: 'Design a 3-problem fading progression following Renkl & Atkinson (2002):\n- Problem 1: Fully Worked Example with Sub-Goal Labels\n- Problem 2: Backward Faded (Sub-Goals 1 & 2 Worked, Sub-Goal 3 Left Blank for Learner Generation)\n- Problem 3: Autonomous Transfer (Novel Surface Scenario Requiring All 3 Sub-Goals from Scratch)',
        placeholder: 'Problem 1: Complete worked example showing signature verification, payload parsing, and Redis queue dispatch.\nProblem 2: Student receives working signature and parsing code, but must write the dead-letter queue worker dispatch.\nProblem 3: Student is given a completely novel Webhook provider (e.g. Stripe -> Shopify) and builds the entire pipeline from scratch.',
        example: 'Problem 1: Complete mTLS worked setup for Nginx.\nProblem 2: Given valid Root CA and Envoy proxy, student writes the SAN validation and routing rule.\nProblem 3: Given an unfamiliar Traefik proxy on ARM hardware, student implements complete mTLS.',
        cognitiveRationale: 'Backward fading anchors the novice to the goal state, minimizing combinatorial errors while building authentic generative competence.'
      },
    ],
  },
};
