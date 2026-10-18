export type ScientificStatus = 
  | 'empirical-consensus' 
  | 'cognitive-model' 
  | 'neurobiological-mechanism';

export interface PredictionOption {
  id: string;
  strategy: string;
  description: string;
}

export interface EmpiricalComparison {
  label: string;
  immediateRetention: string;
  oneWeekRetention: string;
  illusionRating: string;
  isEmpiricalWinner: boolean;
}

export interface PredictionData {
  prompt: string;
  context: string;
  options: PredictionOption[];
  outcome: {
    winningOptionId: string;
    headline: string;
    explanation: string;
    comparisons: EmpiricalComparison[];
    evidenceDistinction: string;
  };
}

export interface CoreExplanation {
  id: string;
  title: string;
  tagline: string;
  scientificStatus: ScientificStatus;
  statusLabel: string;
  summary: string;
  mechanisms: {
    label: string;
    description: string;
  }[];
  keyInsight: string;
  simplifiedModelCaveat: string;
}

export interface DiagramStage {
  id: string;
  name: string;
  subtitle: string;
  capacity: string;
  duration: string;
  role: string;
  failureMode: string;
  evidenceType: string;
  practicalFix: string;
}

export interface DiagramData {
  title: string;
  subtitle: string;
  stages: DiagramStage[];
  feedbackLoopDescription: string;
}

export type ExerciseCategory = 
  | 'attention-bottleneck'
  | 'working-memory-overload'
  | 'illusion-of-competence'
  | 'schema-consolidation';

export interface ExerciseScenario {
  id: string;
  scenario: string;
  realWorldContext: string;
  correctCategory: ExerciseCategory;
  mechanismExplanation: string;
  evidenceBasedFix: string;
}

export interface ExerciseData {
  title: string;
  instruction: string;
  categories: {
    id: ExerciseCategory;
    title: string;
    description: string;
    badgeStyle: string;
  }[];
  scenarios: ExerciseScenario[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
  }[];
  correctOptionId: string;
  explanation: string;
  pedagogicalRationale: string;
  evidenceNote: string;
}

export interface QuizData {
  title: string;
  instruction: string;
  passingScorePercent: number;
  questions: QuizQuestion[];
}

export interface PracticalTaskStep {
  id: string;
  number: number;
  title: string;
  prompt: string;
  placeholder: string;
  example: string;
  cognitiveRationale: string;
}

export interface PracticalTaskData {
  title: string;
  summary: string;
  steps: PracticalTaskStep[];
}

export interface Lesson {
  id: string;
  chapterId: string;
  number: string;
  title: string;
  subtitle: string;
  readingTimeMinutes: number;
  isAvailable: boolean;
  curiosityQuestion: {
    headline: string;
    teaser: string;
    hookNote: string;
  };
  prediction: PredictionData;
  coreExplanations: CoreExplanation[];
  diagram: DiagramData;
  exercise: ExerciseData;
  quiz: QuizData;
  practicalTask: PracticalTaskData;
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  description: string;
  lessons: {
    id: string;
    number: string;
    title: string;
    subtitle: string;
    readingTimeMinutes: number;
    isAvailable: boolean;
  }[];
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  chapters: Chapter[];
}

export interface LessonProgressState {
  predictionAnswer?: string;
  predictionSubmitted?: boolean;
  activeExplanationTab?: string;
  inspectedDiagramStages?: string[];
  exerciseAnswers?: Record<string, ExerciseCategory>;
  exerciseSubmitted?: boolean;
  quizAnswers?: Record<string, string>;
  quizSubmitted?: boolean;
  quizScore?: number;
  practicalAnswers?: Record<string, string>;
  practicalCompleted?: boolean;
  isCompleted?: boolean;
  completedAt?: string;
}

export interface UserProgress {
  theme: 'light' | 'dark';
  activeLessonId: string;
  lessonStates: Record<string, LessonProgressState>;
}
