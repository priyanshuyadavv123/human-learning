import React from 'react';
import './App.css';
import { LearningProvider } from './context/LearningContext.tsx';
import { Header } from './components/layout/Header.tsx';
import { SidebarNav } from './components/layout/SidebarNav.tsx';
import { AITutorPanel } from './components/layout/AITutorPanel.tsx';
import { LessonHeader } from './components/lesson/LessonHeader.tsx';
import { PredictionInteraction } from './components/lesson/PredictionInteraction.tsx';
import { CoreExplanations } from './components/lesson/CoreExplanations.tsx';
import { LearningProcessDiagram } from './components/lesson/LearningProcessDiagram.tsx';
import { InteractiveExercise } from './components/lesson/InteractiveExercise.tsx';
import { QuizSection } from './components/lesson/QuizSection.tsx';
import { PracticalTask } from './components/lesson/PracticalTask.tsx';
import { CompletionBanner } from './components/lesson/CompletionBanner.tsx';
import { SpacedReviewSession } from './components/review/SpacedReviewSession.tsx';

const WorkspaceContent: React.FC = () => {
  return (
    <div className="app-workspace-container">
      {/* Left Navigation */}
      <SidebarNav />

      {/* Main Lesson Editorial Reader */}
      <main className="lesson-main-scroll" role="main">
        <article className="lesson-content-wrapper">
          <LessonHeader />
          <PredictionInteraction />
          <CoreExplanations />
          <LearningProcessDiagram />
          <InteractiveExercise />
          <QuizSection />
          <PracticalTask />
          <CompletionBanner />
        </article>
      </main>

      {/* Right AI Contextual Tutor */}
      <AITutorPanel />
    </div>
  );
};

export function App() {
  return (
    <LearningProvider>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', overflow: 'hidden' }}>
        <Header />
        <WorkspaceContent />
        <SpacedReviewSession />
      </div>
    </LearningProvider>
  );
}

export default App;
