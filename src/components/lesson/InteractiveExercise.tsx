import React from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Check, 
  ArrowRight,
  BrainCircuit
} from 'lucide-react';
import { useLearning } from '../../context/LearningContext.tsx';
import type { ExerciseCategory } from '../../types/learning.ts';

export const InteractiveExercise: React.FC = () => {
  const { 
    currentLesson,
    lessonState, 
    setExerciseAnswer, 
    submitExercise, 
    resetExercise 
  } = useLearning();

  const exercise = currentLesson.exercise;
  const userAnswers = lessonState.exerciseAnswers || {};
  const isSubmitted = lessonState.exerciseSubmitted;

  // Check if all scenarios have an answer selected
  const allAnswered = exercise.scenarios.every(s => userAnswers[s.id]);

  const handleSelect = (scenarioId: string, categoryId: ExerciseCategory) => {
    if (isSubmitted) return;
    setExerciseAnswer(scenarioId, categoryId);
  };

  // Calculate score if submitted
  let correctCount = 0;
  if (isSubmitted) {
    exercise.scenarios.forEach(s => {
      if (userAnswers[s.id] === s.correctCategory) {
        correctCount += 1;
      }
    });
  }

  return (
    <section 
      data-testid="interactive-exercise-section"
      style={{
        marginBottom: '32px',
        padding: '20px',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '16px' }}>
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
            Section 4 • Interactive Clinical Diagnostic
          </div>

          {isSubmitted && (
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.8125rem',
                fontWeight: 700,
                color: correctCount === exercise.scenarios.length ? 'var(--success-text)' : 'var(--accent-primary)',
              }}
            >
              <BrainCircuit size={15} />
              <span>Score: {correctCount} / {exercise.scenarios.length} Correct</span>
            </div>
          )}
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
          {exercise.title}
        </h2>
        <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
          {exercise.instruction}
        </p>
      </div>

      {/* Scenarios List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px' }}>
        {exercise.scenarios.map((scen, idx) => {
          const selectedCategory = userAnswers[scen.id];
          const isCorrect = isSubmitted && selectedCategory === scen.correctCategory;

          let cardBorder = 'var(--border-subtle)';
          if (isSubmitted) {
            cardBorder = isCorrect ? 'var(--success-border)' : 'var(--danger-border)';
          }

          return (
            <div 
              key={scen.id}
              style={{
                padding: '18px 20px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-surface-subtle)',
                border: `1.5px solid ${cardBorder}`,
                transition: 'border-color 0.15s ease',
              }}
            >
              {/* Scenario Context & Text */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span className="font-mono" style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  SCENARIO 0{idx + 1} • {scen.realWorldContext}
                </span>

                {isSubmitted && (
                  <span 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: isCorrect ? 'var(--success-text)' : 'var(--danger-text)',
                    }}
                  >
                    {isCorrect ? (
                      <>
                        <CheckCircle2 size={14} /> Correct Diagnosis
                      </>
                    ) : (
                      <>
                        <XCircle size={14} /> Misdiagnosed
                      </>
                    )}
                  </span>
                )}
              </div>

              <p style={{ fontSize: '0.9375rem', color: 'var(--text-main)', lineHeight: 1.5, marginBottom: '14px', fontWeight: 500 }}>
                "{scen.scenario}"
              </p>

              {/* Category Buttons */}
              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '6px' }}>
                  Select Primary Cognitive Mechanism:
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
                  {exercise.categories.map((cat) => {
                    const isChosen = selectedCategory === cat.id;
                    const isTargetCorrect = isSubmitted && cat.id === scen.correctCategory;

                    let btnBg = 'var(--bg-surface)';
                    let btnColor = 'var(--text-main)';
                    let btnBorder = 'var(--border-subtle)';

                    if (isSubmitted) {
                      if (isTargetCorrect) {
                        btnBg = 'var(--success-bg)';
                        btnColor = 'var(--success-text)';
                        btnBorder = 'var(--success-border)';
                      } else if (isChosen && !isCorrect) {
                        btnBg = 'var(--danger-bg)';
                        btnColor = 'var(--danger-text)';
                        btnBorder = 'var(--danger-border)';
                      }
                    } else if (isChosen) {
                      btnBg = 'var(--accent-subtle)';
                      btnColor = 'var(--accent-primary)';
                      btnBorder = 'var(--accent-primary)';
                    }

                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => handleSelect(scen.id, cat.id)}
                        disabled={isSubmitted}
                        style={{
                          padding: '8px 12px',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: btnBg,
                          color: btnColor,
                          border: `1.5px solid ${btnBorder}`,
                          fontSize: '0.75rem',
                          fontWeight: isChosen || isTargetCorrect ? 600 : 500,
                          textAlign: 'left',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          transition: 'all 0.12s ease',
                          cursor: isSubmitted ? 'default' : 'pointer',
                        }}
                      >
                        <span>{cat.title}</span>
                        {isChosen && !isSubmitted && <Check size={13} />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Explanatory Feedback on Submission */}
              {isSubmitted && (
                <div 
                  style={{
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    marginTop: '10px',
                    fontSize: '0.8125rem',
                    lineHeight: 1.5,
                  }}
                >
                  <div style={{ marginBottom: '6px' }}>
                    <strong>Cognitive Analysis:</strong> {scen.mechanismExplanation}
                  </div>
                  <div style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>
                    🛠️ <strong>Recommended Intervention:</strong> {scen.evidenceBasedFix}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        {!isSubmitted ? (
          <button
            type="button"
            onClick={submitExercise}
            disabled={!allAnswered}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--accent-primary)',
              color: 'var(--text-on-accent)',
              fontSize: '0.875rem',
              fontWeight: 600,
              boxShadow: 'var(--shadow-sm)',
              transition: 'background-color 0.15s ease',
            }}
          >
            <span>Evaluate Clinical Diagnoses</span>
            <ArrowRight size={16} />
          </button>
        ) : (
          <button
            type="button"
            onClick={resetExercise}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--bg-surface-subtle)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-main)',
              fontSize: '0.8125rem',
              fontWeight: 600,
            }}
          >
            <RotateCcw size={14} />
            <span>Reset & Re-diagnose</span>
          </button>
        )}

        {!allAnswered && !isSubmitted && (
          <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            Please select a diagnosis for all 4 scenarios to evaluate.
          </span>
        )}
      </div>
    </section>
  );
};
