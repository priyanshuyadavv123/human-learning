import React, { useState } from 'react';
import { 
  AlertTriangle, 
  ShieldCheck, 
  RotateCcw,
} from 'lucide-react';
import { useLearning } from '../../context/LearningContext.tsx';
import { LESSON_HOW_LEARNING_WORKS } from '../../data/courseData.ts';

export const LearningProcessDiagram: React.FC = () => {
  const { lessonState, inspectDiagramStage } = useLearning();
  const diagram = LESSON_HOW_LEARNING_WORKS.diagram;

  const [activeStageId, setActiveStageId] = useState<string>(
    diagram.stages[1].id // Default to Attention Gate
  );

  const inspectedList = lessonState.inspectedDiagramStages || [];
  const activeStage = diagram.stages.find(s => s.id === activeStageId) || diagram.stages[0];

  const handleSelectStage = (id: string) => {
    setActiveStageId(id);
    inspectDiagramStage(id);
  };

  return (
    <section 
      style={{
        marginBottom: '48px',
        padding: '24px',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '20px' }}>
        <div 
          className="font-mono"
          style={{ 
            fontSize: '0.6875rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.06em', 
            color: 'var(--accent-primary)',
            fontWeight: 700,
            marginBottom: '4px'
          }}
        >
          Section 3 • Interactive Architecture Map
        </div>
        <h2 
          className="font-serif"
          style={{ 
            fontSize: '1.5rem', 
            fontWeight: 700, 
            color: 'var(--text-main)', 
            lineHeight: 1.3,
            marginBottom: '6px'
          }}
        >
          {diagram.title}
        </h2>
        <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
          {diagram.subtitle}
        </p>
      </div>

      {/* Diagram Pipeline Flow */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '12px',
          marginBottom: '20px',
        }}
      >
        {diagram.stages.map((stage, idx) => {
          const isSelected = stage.id === activeStageId;
          const isInspected = inspectedList.includes(stage.id);

          return (
            <button
              key={stage.id}
              onClick={() => handleSelectStage(stage.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '14px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: isSelected ? 'var(--accent-subtle)' : 'var(--bg-surface-subtle)',
                border: `1.5px solid ${isSelected ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
                textAlign: 'left',
                position: 'relative',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = 'var(--border-strong)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }
              }}
            >
              {/* Step indicator */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span 
                  className="font-mono"
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    color: isSelected ? 'var(--accent-primary)' : 'var(--text-muted)',
                  }}
                >
                  STAGE 0{idx + 1}
                </span>

                {isInspected && (
                  <span 
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-primary)',
                    }}
                    title="Explored"
                  />
                )}
              </div>

              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '2px' }}>
                {stage.name}
              </div>

              <div style={{ fontSize: '0.75rem', color: isSelected ? 'var(--accent-primary)' : 'var(--text-muted)', marginBottom: '8px' }}>
                {stage.subtitle}
              </div>

              <div 
                className="font-mono"
                style={{
                  fontSize: '0.6875rem',
                  padding: '3px 6px',
                  borderRadius: '3px',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)',
                  marginTop: 'auto',
                }}
              >
                Cap: {stage.capacity}
              </div>
            </button>
          );
        })}
      </div>

      {/* Dynamic Feedback Loop Banner */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 14px',
          borderRadius: 'var(--radius-sm)',
          backgroundColor: 'var(--bg-surface-well)',
          border: '1px dashed var(--border-strong)',
          fontSize: '0.8125rem',
          color: 'var(--text-secondary)',
          marginBottom: '20px',
        }}
      >
        <RotateCcw size={16} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
        <div>
          <strong>The Dual-Direction Loop:</strong> {diagram.feedbackLoopDescription}
        </div>
      </div>

      {/* Selected Stage Detail Inspector */}
      <div 
        style={{
          padding: '20px',
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--bg-surface-subtle)',
          border: '1px solid var(--border-subtle)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <span className="font-mono" style={{ fontSize: '0.6875rem', color: 'var(--accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
              Deep Inspection: {activeStage.name}
            </span>
            <h4 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>
              {activeStage.subtitle}
            </h4>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <span 
              className="font-mono"
              style={{
                fontSize: '0.6875rem',
                padding: '3px 8px',
                borderRadius: '4px',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
              }}
            >
              Duration: {activeStage.duration}
            </span>
          </div>
        </div>

        <p style={{ fontSize: '0.9375rem', color: 'var(--text-main)', lineHeight: 1.55, marginBottom: '16px' }}>
          {activeStage.role}
        </p>

        {/* 2-Column Inspector Data: Vulnerabilities vs Practical Fix */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
          <div 
            style={{
              padding: '12px 14px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--danger-bg)',
              border: '1px solid var(--danger-border)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--danger-text)', marginBottom: '4px' }}>
              <AlertTriangle size={14} />
              <span>Primary Failure Mode</span>
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--danger-text)', lineHeight: 1.45 }}>
              {activeStage.failureMode}
            </p>
          </div>

          <div 
            style={{
              padding: '12px 14px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--success-bg)',
              border: '1px solid var(--success-border)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--success-text)', marginBottom: '4px' }}>
              <ShieldCheck size={14} />
              <span>Engineering Optimization Rule</span>
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--success-text)', lineHeight: 1.45 }}>
              {activeStage.practicalFix}
            </p>
          </div>
        </div>

        <div style={{ marginTop: '12px', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
          Scientific Framework: {activeStage.evidenceType}
        </div>
      </div>
    </section>
  );
};
