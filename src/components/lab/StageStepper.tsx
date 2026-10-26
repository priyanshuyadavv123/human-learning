import React from 'react';
import { 
  Sparkles, 
  HelpCircle, 
  Layers, 
  BookOpen, 
  Wrench, 
  Brain, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  LayoutGrid
} from 'lucide-react';
import { useLearning } from '../../context/LearningContext.tsx';

export type LabStageId = 'discover' | 'predict' | 'experiment' | 'understand' | 'apply' | 'retrieve';

export interface StageInfo {
  id: LabStageId;
  label: string;
  shortTitle: string;
  description: string;
  icon: React.ReactNode;
}

const LAB_STAGES: StageInfo[] = [
  {
    id: 'discover',
    label: 'Stage 1',
    shortTitle: 'Discover',
    description: 'Sensory intake & cognitive load simulation',
    icon: <Sparkles size={16} />,
  },
  {
    id: 'predict',
    label: 'Stage 2',
    shortTitle: 'Predict',
    description: 'Hypothesis & pedagogical calibration',
    icon: <HelpCircle size={16} />,
  },
  {
    id: 'experiment',
    label: 'Stage 3',
    shortTitle: 'Experiment',
    description: 'Working memory playground & expert schema lens',
    icon: <Layers size={16} />,
  },
  {
    id: 'understand',
    label: 'Stage 4',
    shortTitle: 'Understand',
    description: 'Tripartite model & interactive concept graph',
    icon: <BookOpen size={16} />,
  },
  {
    id: 'apply',
    label: 'Stage 5',
    shortTitle: 'Apply',
    description: 'Diagnostic cases & faded scaffolding protocol',
    icon: <Wrench size={16} />,
  },
  {
    id: 'retrieve',
    label: 'Stage 6',
    shortTitle: 'Retrieve',
    description: 'Verification quiz & transfer reflection',
    icon: <Brain size={16} />,
  },
];

interface StageStepperProps {
  currentStage: LabStageId;
  onSelectStage: (stage: LabStageId) => void;
  isFullView: boolean;
  onToggleFullView: () => void;
  completedStages: Record<LabStageId, boolean>;
}

export const StageStepper: React.FC<StageStepperProps> = ({
  currentStage,
  onSelectStage,
  isFullView,
  onToggleFullView,
  completedStages,
}) => {
  const { language } = useLearning();
  const currentIndex = LAB_STAGES.findIndex(s => s.id === currentStage);
  const prevStage = currentIndex > 0 ? LAB_STAGES[currentIndex - 1] : null;
  const nextStage = currentIndex < LAB_STAGES.length - 1 ? LAB_STAGES[currentIndex + 1] : null;

  const getStageTitle = (stage: StageInfo) => {
    if (language !== 'hinglish') return stage.shortTitle;
    switch (stage.id) {
      case 'discover': return 'Khoj (Discover)';
      case 'predict': return 'Andaza (Predict)';
      case 'experiment': return 'Prayog (Experiment)';
      case 'understand': return 'Samajh (Understand)';
      case 'apply': return 'Laagu Karo (Apply)';
      case 'retrieve': return 'Yaad Karo (Retrieve)';
      default: return stage.shortTitle;
    }
  };

  return (
    <nav 
      aria-label="Interactive Lab Stages"
      style={{
        marginBottom: '28px',
        padding: '14px 16px',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {/* Top Bar: Progress and View Mode Toggle */}
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '14px',
          paddingBottom: '10px',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span 
            className="font-mono"
            style={{
              fontSize: '0.6875rem',
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: '4px',
              backgroundColor: 'var(--accent-subtle)',
              color: 'var(--accent-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Interactive Learning Lab
          </span>
          <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            Stage {currentIndex + 1} of 6: <strong style={{ color: 'var(--text-main)' }}>{LAB_STAGES[currentIndex] ? getStageTitle(LAB_STAGES[currentIndex]) : ''}</strong>
          </span>
        </div>

        <button
          type="button"
          onClick={onToggleFullView}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.75rem',
            padding: '4px 10px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
            backgroundColor: isFullView ? 'var(--accent-subtle)' : 'var(--bg-surface-subtle)',
            color: isFullView ? 'var(--accent-primary)' : 'var(--text-secondary)',
            cursor: 'pointer',
            fontWeight: 500,
            transition: 'all 0.15s ease',
          }}
          title={isFullView ? "Switch to single focused stage" : "View all stages continuously"}
        >
          <LayoutGrid size={13} />
          <span>{isFullView ? 'Single Stage Focus' : 'View All Stages'}</span>
        </button>
      </div>

      {/* Stepper Pills Strip */}
      <div 
        role="tablist"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '6px',
          overflowX: 'auto',
          paddingBottom: '2px',
        }}
      >
        {LAB_STAGES.map((stage, idx) => {
          const isActive = currentStage === stage.id;
          const isDone = completedStages[stage.id];

          return (
            <button
              key={stage.id}
              role="tab"
              aria-selected={isActive}
              tabIndex={0}
              onClick={() => onSelectStage(stage.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '8px 10px',
                borderRadius: 'var(--radius-md)',
                border: isActive 
                  ? '1.5px solid var(--accent-primary)' 
                  : '1px solid var(--border-subtle)',
                backgroundColor: isActive 
                  ? 'var(--accent-subtle)' 
                  : 'var(--bg-surface-subtle)',
                color: isActive ? 'var(--accent-primary)' : 'var(--text-main)',
                cursor: 'pointer',
                textAlign: 'left',
                position: 'relative',
                transition: 'all 0.15s ease',
                minWidth: '90px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '4px' }}>
                <span 
                  className="font-mono"
                  style={{
                    fontSize: '0.625rem',
                    color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)',
                    fontWeight: 600,
                  }}
                >
                  0{idx + 1}
                </span>
                {isDone ? (
                  <CheckCircle2 size={13} color="var(--success-text)" />
                ) : (
                  <span style={{ color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)' }}>
                    {stage.icon}
                  </span>
                )}
              </div>

              <div 
                style={{ 
                  fontSize: '0.8125rem', 
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? 'var(--accent-primary)' : 'var(--text-main)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  width: '100%',
                }}
              >
                {getStageTitle(stage)}
              </div>
            </button>
          );
        })}
      </div>

      {/* Prev / Next Quick Nav Controls (when in stage focus mode) */}
      {!isFullView && (
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginTop: '12px',
            paddingTop: '10px',
            borderTop: '1px solid var(--border-subtle)',
            fontSize: '0.8125rem'
          }}
        >
          {prevStage ? (
            <button
              type="button"
              onClick={() => onSelectStage(prevStage.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                padding: '4px 6px',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              <ChevronLeft size={14} />
              <span>Previous: <strong>{getStageTitle(prevStage)}</strong></span>
            </button>
          ) : <div />}

          {nextStage ? (
            <button
              type="button"
              onClick={() => onSelectStage(nextStage.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                background: 'var(--accent-subtle)',
                border: '1px solid var(--accent-border)',
                color: 'var(--accent-primary)',
                fontWeight: 600,
                cursor: 'pointer',
                padding: '4px 10px',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              <span>Next: <strong>{getStageTitle(nextStage)}</strong></span>
              <ChevronRight size={14} />
            </button>
          ) : <div />}
        </div>
      )}
    </nav>
  );
};
