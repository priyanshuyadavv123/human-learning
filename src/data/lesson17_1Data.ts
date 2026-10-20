import type { Lesson } from '../types/learning.ts';

export const LESSON_MEANS_END_WORKING_BACKWARD: Lesson = {
  id: 'means-end-working-backward',
  chapterId: 'ch-17-heuristics',
  number: '17.1',
  title: 'Working Backward & Means-End Analysis',
  subtitle: 'Navigating problem search spaces when the forward path is opaque',
  readingTimeMinutes: 16,
  isAvailable: true,
  curiosityQuestion: {
    headline: 'When faced with an overwhelming maze, a complex mathematical proof, or a reverse-engineering challenge, why does starting at the finish line reduce computational search complexity by over 90%?',
    teaser: 'Forward search suffers from explosive combinatorial fan-out; working backward from the goal state collapses the decision tree into a deterministic pipeline.',
    hookNote: 'In 1945, mathematician George Pólya published his classic treatise "How to Solve It", outlining heuristic strategies humans use when algorithms fail. Chief among them was the ancient Greek heuristic of *Analysis*—or "Working Backward" (regressus): assuming the problem is already solved, inspecting the final required state, and deducing what step must immediately precede it. Decades later, Nobel laureate Herbert Simon and Allen Newell (1972) formalized this within cognitive science and artificial intelligence through the General Problem Solver (GPS) and the "Means-Ends Analysis" (MEA) heuristic. Newell and Simon proved that human problem solving is a search through a "Problem Space" consisting of an Initial State, a Goal State, and Operators that transform states. When you search forward from an initial state, the branching factor explodes exponentially ($b^d$). But when you work backward from a unique, well-defined goal state, the branching factor often collapses to $1$ or $2$. In this lesson, we explore Newell & Simon’s problem space theory, Pólya’s working backward heuristic, the neurobiology of sub-goal generation in the frontopolar prefrontal cortex, and how to conquer ill-structured engineering challenges by reversing temporal flow.',
  },
  prediction: {
    prompt: 'Two systems architects, Architect A and Architect B, are tasked with designing a zero-downtime, active-active multi-region database migration strategy for a banking cluster with 500 microservices, strict ACID transaction requirements, and zero tolerance for data divergence:\n\nArchitect A ("Forward Search / Trial-and-Error"): Starts from the current state (single-region PostgreSQL) and attempts to chart forward steps: "Let’s start by setting up cross-region replication, then update service connection strings one by one, then implement a dual-write proxy, and see what breaks."\n\nArchitect B ("Means-Ends Analysis & Working Backward"): Begins at the exact desired final state: "It is Day 100: Both Region 1 and Region 2 are actively accepting concurrent writes with zero data loss." She asks: "What condition must be true one second before this state is activated?" (Answer: Conflict-free replicated data types or a globally synchronized consensus sequencer). "What condition must be true before that?" (Answer: Shadow dual-writes with reconciliation audit daemons). She recursively decomposes the difference between the current state and each prerequisite sub-goal until the bridge connects to today.\n\nWhich architect will produce an operable, mathematically robust migration plan with minimal wasted engineering hours?',
    context: 'Both architects have equal technical experience, equal database knowledge, and spend identical planning time (2 weeks total):',
    options: [
      {
        id: 'opt-architect-a-forward-exploration',
        strategy: 'Hypothesis A: Forward Incremental Exploration Advantage',
        description: 'Architect A will produce a superior plan because forward planning deals with concrete immediate realities, whereas working backward from an imaginary future state relies on theoretical assumptions that crumble in real-world infrastructure.',
      },
      {
        id: 'opt-architect-b-means-ends-backward',
        strategy: 'Hypothesis B: Newell & Simon Means-Ends Analysis & Working Backward',
        description: 'Architect B will produce a vastly superior, bulletproof plan (Pólya, 1945; Newell & Simon, 1972) because working backward from a well-specified goal eliminates combinatorial explosion in the forward search tree and exposes mandatory prerequisite dependencies.',
      },
      {
        id: 'opt-equivalent-planning-outcomes',
        strategy: 'Hypothesis C: Equal Planning Equivalence',
        description: 'Both approaches will reach the exact same migration architecture at the same speed because system constraints are invariant regardless of the temporal direction of analysis.',
      },
    ],
    outcome: {
      winningOptionId: 'opt-architect-b-means-ends-backward',
      headline: 'Working Backward Neutralizes Combinatorial Explosion: Means-Ends Decomposition Prevents Strategic Deadlocks (Newell & Simon, 1972; Pólya, 1945).',
      explanation: 'Cognitive science and computer science prove that forward problem solving in complex spaces is crippled by combinatorial explosion ($b^d$). Architect A faced an unmanageable forward branching tree: every service updated, every proxy variation, and every replication mode spawned dozens of possible follow-up choices, leading down dead-end rabbit holes. Architect B used Newell & Simon’s (1972) Means-Ends Analysis (MEA) and Pólya’s (1945) Working Backward heuristic. Because the target goal state has precise, strict invariant invariants (e.g., zero split-brain, deterministic conflict resolution), the backward branching factor from the goal is nearly 1! By asking "What state must immediately precede the goal?", Architect B recursively generated sub-goals that systematically reduced the distance between the current state and the goal state. This backwards deductive chain uncovered subtle hidden prerequisites (such as distributed sequence generation and shadow reconcilers) that forward planners only discover after a catastrophic production crash.',
      optionFeedback: {
        'opt-architect-a-forward-exploration': {
          title: 'Your Choice: Hypothesis A (Forward Incremental Search)',
          verdict: 'Refuted by Problem Space & Search Theory',
          analysis: 'Forward search without sub-goal decomposition suffers from exponential fan-out. In high-complexity domains, moving forward from the start state leads to combinatorial paralysis and unhandled edge cases.',
        },
        'opt-architect-b-means-ends-backward': {
          title: 'Your Choice: Hypothesis B (Means-Ends Analysis & Working Backward)',
          verdict: 'Empirical Cognitive Science & AI Decision Consensus',
          analysis: 'Exactly right! Newell & Simon (1972) and George Pólya (1945) proved that working backward from a constrained goal collapses the search space and makes hidden prerequisites visible.',
        },
        'opt-equivalent-planning-outcomes': {
          title: 'Your Choice: Hypothesis C (Planning Equivalence)',
          verdict: 'Contradicted by Graph Search & Computational Complexity',
          analysis: 'Direction of search radically alters computational complexity. When the start state has a high fan-out and the goal state has a low fan-out, backward search is exponentially faster.',
        },
      },
      comparisons: [
        {
          label: 'Forward Search (Start State $\\rightarrow$ Unknown Future)',
          immediateRetention: 'Intuitive feel of "taking action"; rapid early momentum on easy local steps',
          oneWeekRetention: 'Deadlock in combinatorial explosion; overlooks fatal downstream prerequisites',
          illusionRating: 'Severe illusion of progress; engineers write code that must be scrapped later',
          isEmpiricalWinner: false,
        },
        {
          label: 'Means-Ends Analysis & Working Backward (Goal $\\rightarrow$ Sub-Goals)',
          immediateRetention: 'Requires initial discipline to pause execution and define exact goal invariants',
          oneWeekRetention: 'Complete, deterministic dependency tree; zero backtracking and zero rework',
          illusionRating: 'Calibrated architectural clarity; reveals non-negotiable prerequisite bridges',
          isEmpiricalWinner: true,
        },
      ],
      evidenceDistinction: 'Allen Newell & Herbert Simon (1972) in "Human Problem Solving" demonstrated that human experts and AI problem solvers (GPS) solve complex tower-of-hanoi, geometry, and theorem-proving tasks by calculating differences between current and goal states and creating operators that eliminate those differences.',
    },
  },
  coreExplanations: [
    {
      id: 'newell-simon-problem-space-mea',
      title: 'Newell & Simon (1972): Problem Spaces & Means-Ends Analysis',
      tagline: 'The universal cognitive architecture of human problem solving and difference reduction',
      statusLabel: 'Cognitive Science & Artificial Intelligence Paradigm Benchmark (1972)',
      scientificStatus: 'empirical-consensus',
      summary: 'Allen Newell and Herbert Simon formalized human problem solving as navigation through a "Problem Space". A problem consists of an Initial State, a Goal State, Legal Operators (actions that change states), and Path Constraints. When direct algorithms do not exist, the human cognitive system relies on "Means-Ends Analysis" (MEA): identifying the largest difference between the current state and the goal state, and searching for an operator to eliminate that difference.',
      mechanisms: [
        {
          label: 'The Problem Space Anatomy',
          description: 'Every problem can be modeled as a directed graph: Nodes are mental or physical states, and Edges are cognitive operators. The difficulty of a problem is a function of the graph’s depth and branching factor.',
        },
        {
          label: 'Difference Reduction & Sub-Goal Generation',
          description: 'If the operator required to eliminate the largest difference cannot be applied directly from the current state (an obstacle exists), MEA generates an intermediate Sub-Goal: "Transform the current state into an enabling state where the operator becomes legal."',
        },
        {
          label: 'The Hill-Climbing Trap (Local Maxima)',
          description: 'Naive problem solvers rely on "Hill-Climbing"—always choosing moves that seem closer to the goal. MEA is superior because it allows temporary backtracking (moving away from the goal to unlock a critical tool or prerequisite).',
        },
      ],
      keyInsight: 'Do not ask: "What can I do next?" Ask: "What is the primary difference between where I am and where I need to be, and what sub-goal unlocks the tool to erase that difference?"',
      simplifiedModelCaveat: 'MEA assumes the goal state can be clearly specified; for ill-defined artistic or open-ended exploratory tasks, problem spaces must be dynamically co-evolved rather than statically solved.',
    },
    {
      id: 'polya-working-backward-heuristic',
      title: 'George Pólya (1945): The Working Backward Heuristic',
      tagline: 'Regressus: Reversing the arrow of time to collapse explosive search trees',
      statusLabel: 'Mathematical Heuristics & Cognitive Problem-Solving Classic',
      scientificStatus: 'empirical-consensus',
      summary: 'In his landmark work "How to Solve It", mathematician George Pólya analyzed the classical Greek heuristic of *Analysis* (regressus). When the forward path from the given conditions is opaque, assume the desired theorem or solution is already accomplished. By working backward one step at a time, you uncover the unique chain of necessary antecedents that bridge the gap.',
      mechanisms: [
        {
          label: 'Branching Factor Inversion',
          description: 'Starting from a single starting point often offers 20 diverging paths, each branching into 20 more ($20^d$). But a rigorous goal state usually has very few valid immediate precursors ($1$ or $2$). Searching backward collapses the search space exponentially.',
        },
        {
          label: 'Goal-Derived Operator Filtering',
          description: 'When working forward, you must evaluate all possible tools. When working backward, the required goal properties immediately filter out 95% of irrelevant operations, dictating the exact algebraic or architectural transformation required.',
        },
        {
          label: 'The Maze & Reverse Engineering Parallels',
          description: 'Just as navigating a physical maze from the exit is notoriously easier because dead ends are designed to trap forward entrants, reverse-engineering software or debugging crashes is vastly simpler when tracing backward from the panic stack trace.',
        },
      ],
      keyInsight: 'When you are lost in the forward fog, step across the river to the finish line. Look back across the gorge and ask: "What was the very last stone I must have stepped on to reach this bank?"',
      simplifiedModelCaveat: 'Working backward requires verifying your logic in the forward direction after completion; sometimes operations that are valid in reverse are non-reversible or introduce extraneous solutions.',
    },
    {
      id: 'frontopolar-prefrontal-subgoaling',
      title: 'The Neurobiology of Sub-Goaling & Frontopolar Cortex (BA 10)',
      tagline: 'How Brodmann Area 10 juggles nested goals and enables hierarchical execution',
      statusLabel: 'Cognitive Neuroscience & Executive Function Consensus (Koechlin et al., 2003)',
      scientificStatus: 'neurobiological-mechanism',
      summary: 'Executing means-ends analysis and working backward requires sophisticated prefrontal architecture. Cognitive neuroscientists Etienne Koechlin and Matthew Rushworth demonstrated that the Frontopolar Prefrontal Cortex (Brodmann Area 10, the rostral-most part of the human brain) is uniquely specialized for "Cognitive Branching": holding a primary goal pending in working memory while executing nested sub-goals.',
      mechanisms: [
        {
          label: 'Brodmann Area 10 (Frontopolar Cortex) Gating',
          description: 'BA 10 acts as the brain’s mental stack frame manager. When an obstacle is encountered, BA 10 freezes the primary goal trace and routes executive attention (DLPFC) to solve the immediate secondary sub-goal without losing the master context.',
        },
        {
          label: 'Sub-Goal Hierarchy & Working Memory Load',
          description: 'Humans can typically maintain only 2 to 3 levels of nested sub-goals in unassisted working memory before "stack overflow" occurs (forgetting why you are doing a sub-task). Externalizing sub-goals on paper offloads BA 10.',
        },
        {
          label: 'The Dopaminergic Sub-Goal Gradient',
          description: 'Crossing off a clear sub-goal produces a phasic midbrain dopamine release (Reward Prediction Error), restoring prefrontal cognitive stamina and maintaining momentum throughout grueling multi-month engineering projects.',
        },
      ],
      keyInsight: 'Your brain’s frontopolar cortex can only hold a few nested sub-goals before crashing. Writing down your backward dependency chain is external cognitive RAM for Brodmann Area 10.',
      simplifiedModelCaveat: 'Sub-goals must be granular and independently verifiable; if sub-goals are too vague, they trigger prefrontal fatigue and procrastination rather than dopaminergic acceleration.',
    },
  ],
  diagram: {
    title: 'The Means-Ends & Working Backward Decomposition Engine',
    subtitle: 'From distant goal state and backward difference reduction to frontopolar sub-goal execution',
    stages: [
      {
        id: 'stage-goal-state-specification',
        name: 'Stage 1: Rigorous Goal State Specification',
        subtitle: 'Establishing Strict Invariant Conditions of Success',
        capacity: 'High abstract clarity & constraint specification',
        duration: 'Initial architectural bounding',
        role: 'The problem solver defines the exact, non-negotiable conditions, invariants, and tests that characterize the completed solution.',
        failureMode: 'Vague, subjective goals ("make it better") prevent backward deduction from deriving required antecedents.',
        evidenceType: 'Problem space theory & goal analysis (Newell & Simon, 1972; Pólya, 1945)',
        practicalFix: 'Write the end-state integration test or mathematical assert statement before touching any code.',
      },
      {
        id: 'stage-regressive-difference-reduction',
        name: 'Stage 2: Regressive Difference Reduction (Working Backward)',
        subtitle: 'Deducing Immediate Precursors & Collapsing the Branching Tree',
        capacity: 'Backward causal reasoning & operator filtering',
        duration: 'Recursive decomposition phase',
        role: 'Stepping backward from the goal: "What state must immediately precede this?" Filters out 95% of irrelevant operations.',
        failureMode: 'Reverting to forward trial-and-error due to discomfort with backward counterfactual thinking.',
        evidenceType: 'Pólya’s regressus heuristic & search tree complexity analysis (Pólya, 1945)',
        practicalFix: 'Ask: "What single condition, if true 1 minute before completion, makes the final step trivial?"',
      },
      {
        id: 'stage-hierarchical-subgoal-stacking',
        name: 'Stage 3: Hierarchical Sub-Goal Stacking',
        subtitle: 'Externalizing Frontopolar (BA 10) Cognitive Branches',
        capacity: 'External dependency graph offloading',
        duration: 'Sub-goal scheduling & sequencing',
        role: 'The backward chain of prerequisites is ordered into a directed acyclic graph (DAG) of independently testable milestones.',
        failureMode: 'Nesting too many sub-goals in unassisted working memory, causing executive stack overflow and lost context.',
        evidenceType: 'Frontopolar cortex BA 10 cognitive branching (Koechlin et al., 2003)',
        practicalFix: 'Write sub-goals on an external canvas with clear prerequisite dependency arrows.',
      },
      {
        id: 'stage-forward-execution-dopaminergic-drive',
        name: 'Stage 4: Forward Execution & Dopaminergic Drive',
        subtitle: 'Executing the Deconstructed Bridge from Current State',
        capacity: 'Focused procedural flow & progressive difference elimination',
        duration: 'Rapid execution phase',
        role: 'Now that the search tree is collapsed, the problem solver executes forward along the deterministic path, gaining momentum from sub-goal completion.',
        failureMode: 'None: The forward path is paved, removing ambiguity and preventing rabbit holes.',
        evidenceType: 'Dopaminergic reward gradients & sub-goal momentum (Simon, 1972; Schultz, 1998)',
        practicalFix: 'Check off sub-goals sequentially, re-verifying that each state update satisfies the next prerequisite.',
      },
    ],
    feedbackLoopDescription: 'Rigorous goal definition enables backward difference reduction; this generates an external sub-goal stack that eliminates search tree fan-out, paving a deterministic forward execution path.',
  },
  exercise: {
    title: 'Problem Space Decomposition & Heuristic Navigation Lab',
    instruction: 'Analyze 4 complex professional dilemmas across distributed databases, legacy software modernization, high-stakes medical treatment, and deep tech hardware debugging. Diagnose whether the challenge stems from Combinatorial Forward Explosion (Missing working backward), The Hill-Climbing Trap (Inability to take temporary backward steps), Frontopolar Executive Stack Overflow (Unscaffolded nested sub-goals), or Successful Means-Ends Analysis (Deterministic difference reduction), and prescribe the evidence-grounded fix.',
    categories: [
      {
        id: 'working-memory-overload',
        title: 'Combinatorial Forward Explosion (Blind Forward Search)',
        description: 'Attempting to solve a problem by searching forward from the initial state, resulting in exponential branching and dead ends.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'attention-bottleneck',
        title: 'The Hill-Climbing Trap (Local Maxima Paralysis)',
        description: 'Insisting on moves that look closer to the goal, unable to make a temporary counter-intuitive move backward to unlock a tool.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'illusion-of-competence',
        title: 'Frontopolar Executive Stack Overflow (Sub-Goal Sprawl)',
        description: 'Creating nested sub-tasks inside unassisted working memory without externalization, causing loss of the primary goal.',
        badgeStyle: 'var(--accent-border)',
      },
      {
        id: 'schema-consolidation',
        title: 'Successful Means-Ends Analysis (Difference Reduction Bridge)',
        description: 'Systematically calculating difference between current and goal states, generating an airtight prerequisite dependency graph.',
        badgeStyle: 'var(--accent-border)',
      },
    ],
    scenarios: [
      {
        id: 'scen-legacy-monolith-microservice-strangle',
        realWorldContext: 'Enterprise Banking Core System Modernization',
        scenario: 'A lead architect attempts to modernize a 20-year-old COBOL monolith by refactoring random modules starting from user authentication and logging. After 18 months and $12M, hundreds of interrelated database foreign keys and stored procedures have deadlocked the team, with no working services deployed to production.',
        correctCategory: 'working-memory-overload',
        mechanismExplanation: 'This is Combinatorial Forward Explosion (Newell & Simon, 1972). Starting forward from the initial legacy state spawned an uncontrollable web of dependencies. The architect fell into blind forward exploration rather than working backward from a discrete, operable business capability.',
        evidenceBasedFix: 'Apply Working Backward (The Strangler Fig Pattern): define the exact final state of a single high-value vertical slice (e.g. Account Balance Inquiry); deduce backward what shadow proxy and data event stream must exist one step prior; implement only those precise prerequisites.',
      },
      {
        id: 'scen-rubiks-cube-hill-climbing-paralysis',
        realWorldContext: 'Robotics Autonomous Manipulator Algorithm Design',
        scenario: 'An engineer designs an autonomous algorithm to solve a Rubik’s cube using simple greed heuristic optimization: maximize the number of matching colored faces on the top layer on every turn. The algorithm quickly gets 5 of 6 faces partially aligned, but permanently deadlocks because completing the final layer requires temporarily messing up the solved top layer.',
        correctCategory: 'attention-bottleneck',
        mechanismExplanation: 'This is the classic Hill-Climbing Trap (Local Maxima). Simple hill-climbing evaluates states only by immediate superficial proximity to the goal. True Means-Ends Analysis allows taking an operator that temporarily increases surface difference in order to satisfy a deeper structural prerequisite.',
        evidenceBasedFix: 'Replace pure hill-climbing with Means-Ends Analysis: establish sub-goals (e.g. solve bottom cross, orient corners) where intermediate operators are permitted to disrupt surface colors temporarily.',
      },
      {
        id: 'scen-kernel-driver-debugging-stack-overflow',
        realWorldContext: 'Embedded Systems Linux Kernel Development',
        scenario: 'A junior systems engineer attempts to debug a rare race condition kernel panic. While tracing the interrupt handler, he notices an unrelated memory leak, dives into the slab allocator, then notices a messy Makefile, starts refactoring build flags, and 4 hours later has completely forgotten why the kernel panicked in the first place.',
        correctCategory: 'illusion-of-competence',
        mechanismExplanation: 'This is Frontopolar Executive Stack Overflow (Koechlin et al., 2003). The human frontopolar prefrontal cortex (BA 10) can only hold 2 to 3 nested sub-goals in unassisted working memory. Unscaffolded opportunistic rabbit holes caused cognitive branching failure, wiping out the primary goal trace.',
        evidenceBasedFix: 'Externalize the sub-goal stack on physical paper or a markdown tracker. When a side anomaly appears, log it in an "Icebox" queue and forbid switching context until the active backward regression step is resolved.',
      },
      {
        id: 'scen-apollo-13-carbon-dioxide-scrubber',
        realWorldContext: 'Aerospace Life-Support Emergency Engineering',
        scenario: 'During the Apollo 13 crisis, carbon dioxide levels in the Lunar Module surged toward lethal thresholds. Square lithium hydroxide canisters from the Command Module had to fit round sockets in the LM. Engineers in Houston worked backward from the physical socket, deduced the pressure seal requirements, and designed an airtight adapter using only cardboard, flight manual covers, and duct tape.',
        correctCategory: 'schema-consolidation',
        mechanismExplanation: 'This is textbook Means-Ends Analysis and Working Backward (Pólya, 1945; Simon, 1972). The engineers defined the exact goal state (a sealed lithium hydroxide airflow circuit), identified the primary difference (square vs round cross-section), and created a chain of operators using only available on-board materials to bridge the gap.',
        evidenceBasedFix: 'Standardize emergency problem-solving protocols around means-ends difference reduction: clearly bound available operators, define the goal state invariants, and deduce the backward bridge.',
      },
    ],
  },
  quiz: {
    title: 'Chapter 17.1 Mastery Assessment: Working Backward & Means-Ends Analysis',
    instruction: 'Demonstrate deep comprehension of Newell & Simon’s problem spaces, Pólya’s working backward heuristic, and the executive neurobiology of sub-goal generation.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q1-newell-simon-means-ends-analysis-core',
        question: 'What is the primary operational mechanism of Newell & Simon’s (1972) Means-Ends Analysis (MEA)?',
        options: [
          {
            id: 'q1-a',
            text: 'Trying random actions until an action accidentally produces the winning result.',
          },
          {
            id: 'q1-b',
            text: 'Identifying the largest difference between the current state and the goal state, and selecting an operator or sub-goal that eliminates that difference.',
          },
          {
            id: 'q1-c',
            text: 'Always choosing the move that requires the least physical energy.',
          },
          {
            id: 'q1-d',
            text: 'Memorizing every possible state in the problem space beforehand.',
          },
        ],
        correctOptionId: 'q1-b',
        explanation: 'Newell & Simon (1972) defined Means-Ends Analysis as recursive difference reduction: comparing the current state with the goal state, finding an operator to eliminate the biggest difference, and setting sub-goals if preconditions are missing.',
        pedagogicalRationale: 'Validates foundational knowledge of Means-Ends Analysis.',
        evidenceNote: 'Newell, A., & Simon, H. A. (1972). Human Problem Solving. Prentice-Hall; Simon, H. A. (1979). Models of Thought. Yale University Press.',
      },
      {
        id: 'q2-polya-working-backward-branching-advantage',
        question: 'Why does George Pólya’s (1945) "Working Backward" heuristic dramatically reduce search time in complex problem spaces compared to forward search?',
        options: [
          {
            id: 'q2-a',
            text: 'Because working backward magically alters the physics of the problem.',
          },
          {
            id: 'q2-b',
            text: 'Because forward search from the start state typically suffers from massive branching explosion ($b^d$), whereas a tightly constrained goal state often has very few valid immediate precursors.',
          },
          {
            id: 'q2-c',
            text: 'Because human memory is neurologically incapable of forward planning.',
          },
          {
            id: 'q2-d',
            text: 'Because working backward avoids having to do mathematical calculations.',
          },
        ],
        correctOptionId: 'q2-b',
        explanation: 'Pólya (1945) showed that starting from a constrained goal collapses the search tree. When forward paths branch widely, working backward filters out irrelevant options and exposes the small set of necessary preconditions.',
        pedagogicalRationale: 'Tests understanding of search tree complexity and branching factor inversion.',
        evidenceNote: 'Pólya, G. (1945). How to Solve It: A New Aspect of Mathematical Method. Princeton University Press.',
      },
      {
        id: 'q3-hill-climbing-vs-means-ends-distinction',
        question: 'What is the critical failure mode of naive "Hill-Climbing" that Means-Ends Analysis successfully avoids?',
        options: [
          {
            id: 'q3-a',
            text: 'Hill-climbing takes too long to calculate square roots.',
          },
          {
            id: 'q3-b',
            text: 'Hill-climbing only moves in directions that look immediately closer to the goal, becoming trapped in local maxima when reaching the true solution requires a temporary move backward.',
          },
          {
            id: 'q3-c',
            text: 'Hill-climbing requires an internet connection.',
          },
          {
            id: 'q3-d',
            text: 'Hill-climbing only works in flat 2D geometry.',
          },
        ],
        correctOptionId: 'q3-b',
        explanation: 'Hill-climbing suffers from local maxima traps because it greedily minimizes surface distance. MEA avoids this by generating sub-goals that permit moving away from the goal temporarily to unlock a vital operator.',
        pedagogicalRationale: 'Distinguishes between superficial greedy heuristics and structural means-ends analysis.',
        evidenceNote: 'Newell, A., & Simon, H. A. (1972). Human Problem Solving; Anderson, J. R. (2000). Learning and Memory: An Integrated Approach. John Wiley & Sons.',
      },
      {
        id: 'q4-frontopolar-prefrontal-cortex-role',
        question: 'According to cognitive neuroscience (Koechlin et al., 2003), what is the specialized role of the Frontopolar Prefrontal Cortex (Brodmann Area 10) in problem decomposition?',
        options: [
          {
            id: 'q4-a',
            text: 'It controls raw muscular reflex speed in the spinal cord.',
          },
          {
            id: 'q4-b',
            text: 'It manages "cognitive branching": holding a primary goal pending in working memory while executive attention executes nested secondary sub-goals.',
          },
          {
            id: 'q4-c',
            text: 'It stores permanent visual memories of childhood faces.',
          },
          {
            id: 'q4-d',
            text: 'It secretes melatonin to induce deep slow-wave sleep.',
          },
        ],
        correctOptionId: 'q4-b',
        explanation: 'Koechlin et al. (2003) demonstrated that Brodmann Area 10 (frontopolar cortex) enables cognitive branching—the ability to freeze a primary task, recruit DLPFC resources to complete a sub-goal, and cleanly resume the primary task.',
        pedagogicalRationale: 'Links cognitive problem solving to frontopolar prefrontal neuroanatomy.',
        evidenceNote: 'Koechlin, E., Ody, C., & Kouneiher, F. (2003). An executive mental architecture for the prefrontal cortex. Science, 302(5648), 1181-1185.',
      },
    ],
  },
  practicalTask: {
    title: 'The Backward Regressive Decomposition & Sub-Goal Blueprint Protocol',
    summary: 'A 3-step practical protocol applying George Pólya’s working backward heuristic and Newell & Simon’s means-ends difference reduction to deconstruct an overwhelming technical project into a deterministic dependency pipeline.',
    steps: [
      {
        id: 'step-define-goal-invariants-asserts',
        number: 1,
        title: 'Define the Exact Goal State Invariants (The Finish Line)',
        prompt: 'Select a daunting, complex technical objective (e.g., passing a senior systems architecture board, launching an enterprise product, rewriting a core engine). Step across to the finish line and articulate the exact, measurable conditions that must be true when the goal is 100% achieved:',
        placeholder: 'e.g., Goal: Deploying an automated multi-region active-active database. Invariant Finish Line Conditions: (1) Reads and writes succeed in both US-East and EU-West with p99 latency < 20ms. (2) Net-split chaos drill drops transatlantic fiber for 15 minutes with zero split-brain and automated reconciliation. (3) Data drift monitoring reports zero divergence across 10M rows...',
        example: 'Goal: Publish a machine learning paper in NeurIPS. Invariants: (1) Novel model outperforms baseline by >4% on ImageNet. (2) Ablation study isolates contributor weights. (3) Code repository passes blind reproducibility review with 1-click Docker container.',
        cognitiveRationale: 'A rigorous, testable goal definition collapses the search space and filters out 95% of irrelevant operations (Pólya, 1945; Newell & Simon, 1972).',
      },
      {
        id: 'step-execute-backward-regression-chain',
        number: 2,
        title: 'Execute the Backward Regression Chain (What State Precedes This?)',
        prompt: 'Work backward from the goal state. Ask: "What state must be true immediately before the finish line?" Repeat recursively until you connect back to your current reality today. Write down the 4 backward predecessor states:',
        placeholder: 'e.g., Step N (Finish): Active-active live traffic. Step N-1 (Immediately Preceding): Shadow traffic verification: 100% of live production traffic mirrored to EU-West with dual-write reconciler auditing discrepancies. Step N-2: Asynchronous logical replication stream active with zero lag. Step N-3: Schema harmonization completed across both regions with all sequences converted to UUIDv7. Step 0 (Today): Single-region database with auto-incrementing integer keys...',
        example: 'Paper Submission: Step N (Submission). Step N-1: Clean camera-ready PDF reviewed by 3 external peer readers. Step N-2: Final ablation experiments completed on AWS cluster. Step N-3: Core algorithm convergence theorem mathematically proven. Step 0 (Today): Rough intuition of algorithm.',
        cognitiveRationale: 'Working backward prevents forward branching explosion and illuminates non-negotiable prerequisite bridges (Pólya, 1945).',
      },
      {
        id: 'step-externalize-frontopolar-subgoal-dag',
        number: 3,
        title: 'Externalize into a Directed Acyclic Graph (DAG) with Gated Milestones',
        prompt: 'Invert the chain into an actionable forward Directed Acyclic Graph (DAG). Define the gated validation test that unlocks each milestone so you never experience frontopolar executive stack overflow:',
        placeholder: 'e.g., Milestone 1: Run migration script converting primary keys to UUIDv7; Gate: Unit tests pass and write throughput remains >5,000 TPS. Milestone 2: Establish asynchronous logical replication; Gate: Replication lag stays <500ms under simulated peak load. Milestone 3: Run shadow mirror proxy; Gate: Reconciler daemon reports 0 mismatches over 72 hours...',
        example: 'Study DAG: Milestone 1: Solve 20 past exam problems on distributed consensus; Gate: Score >85% without notes. Milestone 2: Whiteboard Raft leader election proof in under 15 minutes; Gate: Recorded video passes checklist review.',
        cognitiveRationale: 'Externalizing sub-goals offloads frontopolar cortex (BA 10) cognitive branching, keeping working memory clear while dopaminergic milestone check-offs maintain execution momentum (Koechlin et al., 2003).',
      },
    ],
  },
};
