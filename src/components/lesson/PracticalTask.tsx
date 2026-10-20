import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Save, 
  Check
} from 'lucide-react';
import { useLearning } from '../../context/LearningContext.tsx';

export const PracticalTask: React.FC = () => {
  const { 
    currentLesson,
    lessonState, 
    setPracticalAnswer, 
    completePracticalTask 
  } = useLearning();

  const task = currentLesson.practicalTask;
  const userAnswers = lessonState.practicalAnswers || {};
  const isCompleted = lessonState.practicalCompleted;

  const [savedNotification, setSavedNotification] = useState(false);

  // Check if at least the first 2 fields have content
  const hasContent = task.steps.every(s => (userAnswers[s.id] || '').trim().length > 5);

  const handleApplyExample = (stepId: string, exampleText: string) => {
    if (isCompleted) return;
    setPracticalAnswer(stepId, exampleText);
  };

  const handleSave = () => {
    completePracticalTask();
    setSavedNotification(true);
    setTimeout(() => setSavedNotification(false), 3000);
  };

  return (
    <section 
      style={{
        marginBottom: '32px',
        padding: '22px',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
          <div 
            className="font-mono"
            style={{ 
              fontSize: '0.6875rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.06em', 
              color: 'var(--accent-primary)',
              fontWeight: 700,
            }}
          >
            Section 6 • Practical Implementation Task
          </div>

          {isCompleted && (
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.8125rem',
                fontWeight: 700,
                color: 'var(--success-text)',
              }}
            >
              <CheckCircle2 size={16} />
              <span>Protocol Formulated & Stored</span>
            </div>
          )}
        </div>

        <h2 
          className="font-serif"
          style={{ 
            fontSize: '1.625rem', 
            fontWeight: 700, 
            color: 'var(--text-main)', 
            lineHeight: 1.3,
            marginBottom: '6px'
          }}
        >
          {task.title}
        </h2>
        <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
          {task.summary}
        </p>
      </div>

      {/* Task Steps */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', marginBottom: '24px' }}>
        {task.steps.map((step) => {
          const val = userAnswers[step.id] || '';

          return (
            <div 
              key={step.id}
              style={{
                padding: '20px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-surface-subtle)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span 
                    className="font-mono"
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-primary)',
                      color: 'var(--text-on-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                    }}
                  >
                    {step.number}
                  </span>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)' }}>
                    {step.title}
                  </h4>
                </div>

                {!isCompleted && (
                  <button
                    type="button"
                    onClick={() => handleApplyExample(step.id, step.example)}
                    style={{
                      fontSize: '0.6875rem',
                      color: 'var(--accent-primary)',
                      fontWeight: 600,
                      textDecoration: 'underline',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Insert Example
                  </button>
                )}
              </div>

              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                {step.prompt}
              </p>

              <textarea
                value={val}
                onChange={(e) => setPracticalAnswer(step.id, e.target.value)}
                placeholder={step.placeholder}
                rows={3}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.875rem',
                  color: 'var(--text-main)',
                  resize: 'vertical',
                  lineHeight: 1.5,
                  outline: 'none',
                }}
              />

              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '6px', fontStyle: 'italic' }}>
                💡 <strong>Why this matters:</strong> {step.cognitiveRationale}
              </div>
            </div>
          );
        })}
      </div>

      {/* Completion Action */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <button
          type="button"
          onClick={handleSave}
          disabled={!hasContent}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: isCompleted ? 'var(--success-bg)' : 'var(--accent-primary)',
            color: isCompleted ? 'var(--success-text)' : 'var(--text-on-accent)',
            border: isCompleted ? '1.5px solid var(--success-border)' : 'none',
            fontSize: '0.9375rem',
            fontWeight: 600,
            boxShadow: 'var(--shadow-sm)',
            transition: 'all 0.15s ease',
          }}
        >
          {isCompleted ? (
            <>
              <Check size={18} />
              <span>Protocol Stored in Workspace</span>
            </>
          ) : (
            <>
              <Save size={18} />
              <span>Save Actionable Learning Protocol</span>
            </>
          )}
        </button>

        {savedNotification && (
          <span style={{ fontSize: '0.8125rem', color: 'var(--success-text)', fontWeight: 600 }}>
            ✓ Successfully committed to local workspace memory.
          </span>
        )}

        {!hasContent && !isCompleted && (
          <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            Complete the 3 implementation steps above to seal your protocol.
          </span>
        )}
      </div>
    </section>
  );
};
