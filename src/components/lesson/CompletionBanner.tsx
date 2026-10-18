import React from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  BookCheck,
} from 'lucide-react';
import { useLearning } from '../../context/LearningContext.tsx';

export const CompletionBanner: React.FC = () => {
  const { 
    lessonState, 
    completeLesson, 
  } = useLearning();

  const isCompleted = lessonState.isCompleted;

  const handleComplete = () => {
    completeLesson();
  };

  const stepsMet = [
    { label: 'Intuitive Prediction Calibrated', done: !!lessonState.predictionSubmitted },
    { label: 'Cognitive Architecture Inspected', done: (lessonState.inspectedDiagramStages?.length || 0) >= 2 },
    { label: 'Clinical Scenarios Diagnosed', done: !!lessonState.exerciseSubmitted },
    { label: 'Conceptual Assessment Evaluated', done: !!lessonState.quizSubmitted },
    { label: 'Actionable Protocol Formulated', done: !!lessonState.practicalCompleted },
  ];

  const allPrerequisitesMet = stepsMet.every(s => s.done);

  return (
    <section 
      style={{
        marginBottom: '40px',
        padding: '24px',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: isCompleted ? 'var(--success-bg)' : 'var(--bg-surface)',
        border: `2px solid ${isCompleted ? 'var(--success-border)' : 'var(--border-subtle)'}`,
        boxShadow: isCompleted ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transition: 'all 0.2s ease',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', marginBottom: '18px' }}>
        <div>
          <div 
            className="font-mono"
            style={{
              fontSize: '0.6875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: isCompleted ? 'var(--success-text)' : 'var(--accent-primary)',
              fontWeight: 700,
              marginBottom: '4px',
            }}
          >
            {isCompleted ? 'Checkpoint Verified' : 'Lesson Summary & Verification'}
          </div>

          <h2 
            className="font-serif"
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: isCompleted ? 'var(--success-text)' : 'var(--text-main)',
              lineHeight: 1.25,
              marginBottom: '6px',
            }}
          >
            {isCompleted ? 'Lesson 1.1 Complete: Core Principles Verified' : 'Complete Lesson 1.1: How Learning Actually Works'}
          </h2>

          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            {isCompleted 
              ? 'You have successfully integrated the five cognitive imperatives into your personal study routine.'
              : 'Verify your interactive checkpoints below to finalize completion of this curriculum unit.'}
          </p>
        </div>

        {isCompleted && (
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '9999px',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--success-border)',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: 'var(--success-text)',
            }}
          >
            <BookCheck size={15} />
            <span>Lesson Completed</span>
          </div>
        )}
      </div>

      {/* Progress Checklist */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '10px',
          marginBottom: '24px',
        }}
      >
        {stepsMet.map((item, i) => (
          <div 
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 12px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: item.done ? 'var(--bg-surface)' : 'var(--bg-surface-subtle)',
              border: `1px solid ${item.done ? 'var(--success-border)' : 'var(--border-subtle)'}`,
              fontSize: '0.8125rem',
              color: item.done ? 'var(--text-main)' : 'var(--text-muted)',
              fontWeight: item.done ? 600 : 400,
            }}
          >
            {item.done ? (
              <CheckCircle2 size={16} color="var(--success-text)" style={{ flexShrink: 0 }} />
            ) : (
              <div 
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  border: '1.5px solid var(--border-strong)',
                  flexShrink: 0,
                }} 
              />
            )}
            <span style={{ lineHeight: 1.3 }}>{item.label}</span>
          </div>
        ))}
      </div>

      {/* Action / Next steps */}
      {!isCompleted ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
          <button
            type="button"
            onClick={handleComplete}
            disabled={!allPrerequisitesMet}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: allPrerequisitesMet ? 'var(--accent-primary)' : 'var(--border-strong)',
              color: 'var(--text-on-accent)',
              fontSize: '1rem',
              fontWeight: 700,
              boxShadow: 'var(--shadow-md)',
              transition: 'all 0.15s ease',
              cursor: allPrerequisitesMet ? 'pointer' : 'not-allowed',
            }}
          >
            <span>Mark Lesson 1.1 as Complete</span>
            <Sparkles size={18} />
          </button>

          {!allPrerequisitesMet && (
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              Complete all 5 checkpoints above to mark this lesson as complete.
            </span>
          )}
        </div>
      ) : (
        <div 
          style={{
            padding: '18px 20px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <div style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '2px' }}>
              Next Up in Curriculum
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)' }}>
              Lesson 1.2: The Illusion of Competence
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
              Why recognition feels identical to mastery (scheduled for Phase 2).
            </p>
          </div>

          <div 
            style={{
              padding: '8px 14px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--bg-surface-subtle)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'var(--text-muted)',
            }}
          >
            Phase 1 Complete — Ready for Review
          </div>
        </div>
      )}
    </section>
  );
};
