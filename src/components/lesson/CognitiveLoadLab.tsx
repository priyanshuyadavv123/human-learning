import React, { useState } from 'react';
import { useLearning } from '../../context/LearningContext.tsx';
import { LessonHeader } from './LessonHeader.tsx';
import { PredictionInteraction } from './PredictionInteraction.tsx';
import { CoreExplanations } from './CoreExplanations.tsx';
import { LearningProcessDiagram } from './LearningProcessDiagram.tsx';
import { InteractiveExercise } from './InteractiveExercise.tsx';
import { QuizSection } from './QuizSection.tsx';
import { PracticalTask } from './PracticalTask.tsx';
import { CompletionBanner } from './CompletionBanner.tsx';

import { StageStepper, type LabStageId } from '../lab/StageStepper.tsx';
import { CognitiveLoadSimulation } from '../lab/CognitiveLoadSimulation.tsx';
import { WorkingMemoryPlayground } from '../lab/WorkingMemoryPlayground.tsx';
import { ExpertVsNoviceComparison } from '../lab/ExpertVsNoviceComparison.tsx';
import { ConceptMapExplorer } from '../lab/ConceptMapExplorer.tsx';
import { RetentionTransferReflection } from '../lab/RetentionTransferReflection.tsx';

export const CognitiveLoadLab: React.FC = () => {
  const { lessonState } = useLearning();
  const [activeStage, setActiveStage] = useState<LabStageId>('discover');
  const [isFullView, setIsFullView] = useState<boolean>(false);

  // Compute completed status for each of the 6 stages
  const completedStages: Record<LabStageId, boolean> = {
    discover: true, // Baseline explored once on page
    predict: Boolean(lessonState.predictionSubmitted),
    experiment: true, // Interactive hands-on playground available
    understand: Boolean(lessonState.inspectedDiagramStages && lessonState.inspectedDiagramStages.length > 0),
    apply: Boolean(lessonState.exerciseSubmitted),
    retrieve: Boolean(lessonState.quizSubmitted),
  };

  return (
    <div className="cognitive-load-lab-container" data-testid="cognitive-load-lab-container">
      {/* Editorial Lesson Header */}
      <LessonHeader />

      {/* 6-Stage Interactive Lab Stepper Bar */}
      <StageStepper
        currentStage={activeStage}
        onSelectStage={setActiveStage}
        isFullView={isFullView}
        onToggleFullView={() => setIsFullView(!isFullView)}
        completedStages={completedStages}
      />

      {/* STAGE 1: DISCOVER */}
      {(isFullView || activeStage === 'discover') && (
        <section 
          id="stage-discover" 
          aria-label="Stage 1: Discover"
          style={{ marginBottom: isFullView ? '40px' : '0' }}
        >
          {isFullView && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <span className="font-mono" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                STAGE 01
              </span>
              <div style={{ height: '1px', flex: 1, backgroundColor: 'var(--border-subtle)' }} />
            </div>
          )}
          <CognitiveLoadSimulation />
        </section>
      )}

      {/* STAGE 2: PREDICT */}
      {(isFullView || activeStage === 'predict') && (
        <section 
          id="stage-predict" 
          aria-label="Stage 2: Predict"
          style={{ marginBottom: isFullView ? '40px' : '0' }}
        >
          {isFullView && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <span className="font-mono" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                STAGE 02
              </span>
              <div style={{ height: '1px', flex: 1, backgroundColor: 'var(--border-subtle)' }} />
            </div>
          )}
          <PredictionInteraction />
        </section>
      )}

      {/* STAGE 3: EXPERIMENT */}
      {(isFullView || activeStage === 'experiment') && (
        <section 
          id="stage-experiment" 
          aria-label="Stage 3: Experiment"
          style={{ marginBottom: isFullView ? '40px' : '0' }}
        >
          {isFullView && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <span className="font-mono" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                STAGE 03
              </span>
              <div style={{ height: '1px', flex: 1, backgroundColor: 'var(--border-subtle)' }} />
            </div>
          )}
          <WorkingMemoryPlayground />
          <ExpertVsNoviceComparison />
        </section>
      )}

      {/* STAGE 4: UNDERSTAND */}
      {(isFullView || activeStage === 'understand') && (
        <section 
          id="stage-understand" 
          aria-label="Stage 4: Understand"
          style={{ marginBottom: isFullView ? '40px' : '0' }}
        >
          {isFullView && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <span className="font-mono" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                STAGE 04
              </span>
              <div style={{ height: '1px', flex: 1, backgroundColor: 'var(--border-subtle)' }} />
            </div>
          )}
          <ConceptMapExplorer />
          <CoreExplanations />
          <LearningProcessDiagram />
        </section>
      )}

      {/* STAGE 5: APPLY */}
      {(isFullView || activeStage === 'apply') && (
        <section 
          id="stage-apply" 
          aria-label="Stage 5: Apply"
          style={{ marginBottom: isFullView ? '40px' : '0' }}
        >
          {isFullView && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <span className="font-mono" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                STAGE 05
              </span>
              <div style={{ height: '1px', flex: 1, backgroundColor: 'var(--border-subtle)' }} />
            </div>
          )}
          <InteractiveExercise />
          <PracticalTask />
        </section>
      )}

      {/* STAGE 6: RETRIEVE */}
      {(isFullView || activeStage === 'retrieve') && (
        <section 
          id="stage-retrieve" 
          aria-label="Stage 6: Retrieve"
          style={{ marginBottom: isFullView ? '40px' : '0' }}
        >
          {isFullView && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <span className="font-mono" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                STAGE 06
              </span>
              <div style={{ height: '1px', flex: 1, backgroundColor: 'var(--border-subtle)' }} />
            </div>
          )}
          <QuizSection />
          <RetentionTransferReflection />
          <CompletionBanner />
        </section>
      )}
    </div>
  );
};
