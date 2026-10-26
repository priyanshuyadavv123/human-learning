import React from 'react';
import './App.css';
import { LearningProvider, useLearning } from './context/LearningContext.tsx';
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
import { CognitiveLoadLab } from './components/lesson/CognitiveLoadLab.tsx';
import { SpacedReviewSession } from './components/review/SpacedReviewSession.tsx';
import { SovereignDashboard } from './components/dashboard/SovereignDashboard.tsx';
import { BookLibraryView } from './components/dashboard/BookLibraryView.tsx';
import { PowerStrategyView } from './components/dashboard/PowerStrategyView.tsx';
import { VoiceCharismaView } from './components/dashboard/VoiceCharismaView.tsx';
import { PrivateJournalView } from './components/dashboard/PrivateJournalView.tsx';
import { ProgressMasteryView } from './components/dashboard/ProgressMasteryView.tsx';
import { ThemeStudioView } from './components/dashboard/ThemeStudioView.tsx';

const WorkspaceContent: React.FC = () => {
  const { currentLesson, activeView, setActiveView, setActiveLessonId } = useLearning();

  return (
    <div className="app-workspace-container">
      {/* Left Navigation — The Sovereign Mind Syllabus */}
      <SidebarNav />

      {/* Main Workspace Area */}
      <main className="lesson-main-scroll" role="main">
        {activeView === 'overview' && (
          <SovereignDashboard 
            onOpenLesson={() => setActiveView('curriculum')}
            onOpenLab={() => {
              setActiveLessonId('cognitive-load-schema');
              setActiveView('lab');
            }}
          />
        )}

        {activeView === 'library' && <BookLibraryView />}
        {activeView === 'strategy' && <PowerStrategyView />}
        {activeView === 'voice' && <VoiceCharismaView />}
        {activeView === 'journal' && <PrivateJournalView />}
        {activeView === 'mastery' && <ProgressMasteryView />}
        {activeView === 'themes' && <ThemeStudioView />}

        {activeView === 'lab' && (
          <article className="lesson-content-wrapper">
            <CognitiveLoadLab />
          </article>
        )}

        {activeView === 'curriculum' && (
          <article className="lesson-content-wrapper">
            {currentLesson.id === 'cognitive-load-schema' ? (
              <CognitiveLoadLab />
            ) : (
              <>
                <LessonHeader />
                <PredictionInteraction />
                <CoreExplanations />
                <LearningProcessDiagram />
                <InteractiveExercise />
                <QuizSection />
                <PracticalTask />
                <CompletionBanner />
              </>
            )}
          </article>
        )}
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
