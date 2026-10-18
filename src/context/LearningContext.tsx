/* oxlint-disable react/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';
import type { 
  UserProgress, 
  LessonProgressState, 
  ExerciseCategory 
} from '../types/learning.ts';
import { LESSON_HOW_LEARNING_WORKS } from '../data/courseData.ts';

interface LearningContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  activeLessonId: string;
  setActiveLessonId: (id: string) => void;
  lessonState: LessonProgressState;
  isLeftSidebarOpen: boolean;
  toggleLeftSidebar: () => void;
  setLeftSidebarOpen: (open: boolean) => void;
  isTutorOpen: boolean;
  toggleTutor: () => void;
  setTutorOpen: (open: boolean) => void;
  
  // Lesson Actions
  submitPrediction: (optionId: string) => void;
  setExplanationTab: (tabId: string) => void;
  inspectDiagramStage: (stageId: string) => void;
  setExerciseAnswer: (scenarioId: string, category: ExerciseCategory) => void;
  submitExercise: () => void;
  resetExercise: () => void;
  setQuizAnswer: (questionId: string, optionId: string) => void;
  submitQuiz: () => { score: number; passed: boolean };
  retakeQuiz: () => void;
  setPracticalAnswer: (stepId: string, text: string) => void;
  completePracticalTask: () => void;
  completeLesson: () => void;
  
  // Metrics
  progressPercent: number;
}

const STORAGE_KEY = 'human_learning_platform_progress_v1';
const THEME_STORAGE_KEY = 'human_learning_platform_theme_v1';

const defaultLessonState: LessonProgressState = {
  predictionAnswer: undefined,
  predictionSubmitted: false,
  activeExplanationTab: 'attention',
  inspectedDiagramStages: [],
  exerciseAnswers: {},
  exerciseSubmitted: false,
  quizAnswers: {},
  quizSubmitted: false,
  quizScore: undefined,
  practicalAnswers: {},
  practicalCompleted: false,
  isCompleted: false,
  completedAt: undefined,
};

const LearningContext = createContext<LearningContextType | undefined>(undefined);

export const LearningProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme state
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  // Active lesson ID
  const [activeLessonId, setActiveLessonId] = useState<string>('how-learning-actually-works');

  // UI Drawer states (responsive)
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState<boolean>(true);
  const [isTutorOpen, setTutorOpen] = useState<boolean>(true);

  // Lesson state storage
  const [userProgress, setUserProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          theme: parsed.theme || 'light',
          activeLessonId: parsed.activeLessonId || 'how-learning-actually-works',
          lessonStates: parsed.lessonStates || {
            'how-learning-actually-works': { ...defaultLessonState },
          },
        };
      }
    } catch (e) {
      console.warn('Failed to load saved progress:', e);
    }
    return {
      theme: 'light',
      activeLessonId: 'how-learning-actually-works',
      lessonStates: {
        'how-learning-actually-works': { ...defaultLessonState },
      },
    };
  });

  // Apply theme to HTML root
  useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // ignore storage quota
    }
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Persist userProgress to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userProgress));
    } catch (e) {
      console.warn('Failed to save progress to localStorage:', e);
    }
  }, [userProgress]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const currentLessonState: LessonProgressState = 
    userProgress.lessonStates[activeLessonId] || { ...defaultLessonState };

  const updateCurrentLessonState = (updater: (prev: LessonProgressState) => LessonProgressState) => {
    setUserProgress(prev => {
      const existing = prev.lessonStates[activeLessonId] || { ...defaultLessonState };
      const updated = updater(existing);
      return {
        ...prev,
        lessonStates: {
          ...prev.lessonStates,
          [activeLessonId]: updated,
        },
      };
    });
  };

  const submitPrediction = (optionId: string) => {
    updateCurrentLessonState(prev => ({
      ...prev,
      predictionAnswer: optionId,
      predictionSubmitted: true,
    }));
  };

  const setExplanationTab = (tabId: string) => {
    updateCurrentLessonState(prev => ({
      ...prev,
      activeExplanationTab: tabId,
    }));
  };

  const inspectDiagramStage = (stageId: string) => {
    updateCurrentLessonState(prev => {
      const current = prev.inspectedDiagramStages || [];
      if (current.includes(stageId)) return prev;
      return {
        ...prev,
        inspectedDiagramStages: [...current, stageId],
      };
    });
  };

  const setExerciseAnswer = (scenarioId: string, category: ExerciseCategory) => {
    updateCurrentLessonState(prev => ({
      ...prev,
      exerciseAnswers: {
        ...(prev.exerciseAnswers || {}),
        [scenarioId]: category,
      },
    }));
  };

  const submitExercise = () => {
    updateCurrentLessonState(prev => ({
      ...prev,
      exerciseSubmitted: true,
    }));
  };

  const resetExercise = () => {
    updateCurrentLessonState(prev => ({
      ...prev,
      exerciseAnswers: {},
      exerciseSubmitted: false,
    }));
  };

  const setQuizAnswer = (questionId: string, optionId: string) => {
    updateCurrentLessonState(prev => ({
      ...prev,
      quizAnswers: {
        ...(prev.quizAnswers || {}),
        [questionId]: optionId,
      },
    }));
  };

  const submitQuiz = () => {
    const questions = LESSON_HOW_LEARNING_WORKS.quiz.questions;
    const currentAnswers = currentLessonState.quizAnswers || {};
    
    let correctCount = 0;
    questions.forEach(q => {
      if (currentAnswers[q.id] === q.correctOptionId) {
        correctCount += 1;
      }
    });

    const scorePercent = Math.round((correctCount / questions.length) * 100);
    const passed = scorePercent >= LESSON_HOW_LEARNING_WORKS.quiz.passingScorePercent;

    updateCurrentLessonState(prev => ({
      ...prev,
      quizSubmitted: true,
      quizScore: scorePercent,
    }));

    return { score: scorePercent, passed };
  };

  const retakeQuiz = () => {
    updateCurrentLessonState(prev => ({
      ...prev,
      quizAnswers: {},
      quizSubmitted: false,
      quizScore: undefined,
    }));
  };

  const setPracticalAnswer = (stepId: string, text: string) => {
    updateCurrentLessonState(prev => ({
      ...prev,
      practicalAnswers: {
        ...(prev.practicalAnswers || {}),
        [stepId]: text,
      },
    }));
  };

  const completePracticalTask = () => {
    updateCurrentLessonState(prev => ({
      ...prev,
      practicalCompleted: true,
    }));
  };

  const completeLesson = () => {
    updateCurrentLessonState(prev => ({
      ...prev,
      isCompleted: true,
      completedAt: prev.completedAt || new Date().toISOString(),
    }));
  };

  // Calculate overall progress through this lesson
  const calculateProgress = (): number => {
    let score = 0;
    const maxPoints = 5;

    // 1. Prediction (1 pt)
    if (currentLessonState.predictionSubmitted) score += 1;
    // 2. Diagram explored at least 2 stages (1 pt)
    if ((currentLessonState.inspectedDiagramStages?.length || 0) >= 2) score += 1;
    // 3. Exercise submitted (1 pt)
    if (currentLessonState.exerciseSubmitted) score += 1;
    // 4. Quiz submitted (1 pt)
    if (currentLessonState.quizSubmitted) score += 1;
    // 5. Practical task completed (1 pt)
    if (currentLessonState.practicalCompleted) score += 1;

    return Math.round((score / maxPoints) * 100);
  };

  return (
    <LearningContext.Provider
      value={{
        theme,
        toggleTheme,
        activeLessonId,
        setActiveLessonId,
        lessonState: currentLessonState,
        isLeftSidebarOpen,
        toggleLeftSidebar: () => setLeftSidebarOpen(p => !p),
        setLeftSidebarOpen,
        isTutorOpen,
        toggleTutor: () => setTutorOpen(p => !p),
        setTutorOpen,
        submitPrediction,
        setExplanationTab,
        inspectDiagramStage,
        setExerciseAnswer,
        submitExercise,
        resetExercise,
        setQuizAnswer,
        submitQuiz,
        retakeQuiz,
        setPracticalAnswer,
        completePracticalTask,
        completeLesson,
        progressPercent: calculateProgress(),
      }}
    >
      {children}
    </LearningContext.Provider>
  );
};

export const useLearning = () => {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
};
