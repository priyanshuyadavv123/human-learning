import React, { useState } from 'react';
import { 
  CheckCircle2, 
  TrendingUp, 
  AlertCircle, 
  ArrowRight
} from 'lucide-react';
import { useLearning } from '../../context/LearningContext.tsx';
import { LESSON_HOW_LEARNING_WORKS } from '../../data/courseData.ts';

export const PredictionInteraction: React.FC = () => {
  const { lessonState, submitPrediction } = useLearning();
  const predictionData = LESSON_HOW_LEARNING_WORKS.prediction;

  const [selectedOption, setSelectedOption] = useState<string>(
    lessonState.predictionAnswer || ''
  );

  const isSubmitted = lessonState.predictionSubmitted;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOption) return;
    submitPrediction(selectedOption);
  };

  return (
    <section 
      style={{
        marginBottom: '40px',
        padding: '24px',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <div 
          style={{
            padding: '3px 8px',
            borderRadius: '4px',
            backgroundColor: 'var(--accent-subtle)',
            color: 'var(--accent-primary)',
            fontSize: '0.6875rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}
        >
          Active Calibration Step 1
        </div>
        <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
          Commit your intuition before reading the explanation
        </span>
      </div>

      <h3 
        className="font-serif"
        style={{
          fontSize: '1.375rem',
          fontWeight: 700,
          color: 'var(--text-main)',
          lineHeight: 1.3,
          marginBottom: '8px',
        }}
      >
        {predictionData.prompt}
      </h3>

      <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.5 }}>
        {predictionData.context}
      </p>

      {/* Options Form */}
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '18px' }}>
          {predictionData.options.map((opt) => {
            const isChosen = selectedOption === opt.id;
            const isCorrect = isSubmitted && opt.id === predictionData.outcome.winningOptionId;
            const isSelectedIncorrect = isSubmitted && isChosen && !isCorrect;

            let borderColor = 'var(--border-subtle)';
            let bgColor = 'var(--bg-surface-subtle)';

            if (isSubmitted) {
              if (isCorrect) {
                borderColor = 'var(--success-border)';
                bgColor = 'var(--success-bg)';
              } else if (isSelectedIncorrect) {
                borderColor = 'var(--danger-border)';
                bgColor = 'var(--danger-bg)';
              }
            } else if (isChosen) {
              borderColor = 'var(--accent-primary)';
              bgColor = 'var(--accent-subtle)';
            }

            return (
              <label
                key={opt.id}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '14px 16px',
                  borderRadius: 'var(--radius-md)',
                  border: `1.5px solid ${borderColor}`,
                  backgroundColor: bgColor,
                  cursor: isSubmitted ? 'default' : 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                <input
                  type="radio"
                  name="prediction-option"
                  value={opt.id}
                  checked={isChosen}
                  disabled={isSubmitted}
                  onChange={() => setSelectedOption(opt.id)}
                  style={{ marginTop: '3px', accentColor: 'var(--accent-primary)' }}
                />

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-main)' }}>
                      {opt.strategy}
                    </span>
                    {isSubmitted && isCorrect && (
                      <span 
                        style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '4px', 
                          fontSize: '0.75rem', 
                          fontWeight: 700, 
                          color: 'var(--success-text)' 
                        }}
                      >
                        <CheckCircle2 size={14} /> Empirical Winner
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                    {opt.description}
                  </p>
                </div>
              </label>
            );
          })}
        </div>

        {!isSubmitted ? (
          <button
            type="submit"
            disabled={!selectedOption}
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
            <span>Lock In Prediction & Reveal Evidence</span>
            <ArrowRight size={16} />
          </button>
        ) : (
          <div 
            style={{
              padding: '18px 20px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg-surface-subtle)',
              border: '1px solid var(--border-subtle)',
              marginTop: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <TrendingUp size={18} color="var(--accent-primary)" />
              <h4 
                className="font-serif"
                style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--text-main)' }}
              >
                {predictionData.outcome.headline}
              </h4>
            </div>

            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
              {predictionData.outcome.explanation}
            </p>

            {/* Retention Comparison Matrix */}
            <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
              <table 
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '0.8125rem',
                  textAlign: 'left',
                }}
              >
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
                    <th style={{ padding: '8px 10px', fontWeight: 600 }}>Protocol / Method</th>
                    <th style={{ padding: '8px 10px', fontWeight: 600 }}>Immediate Recall (5 min)</th>
                    <th style={{ padding: '8px 10px', fontWeight: 600 }}>1-Week Delayed Recall</th>
                    <th style={{ padding: '8px 10px', fontWeight: 600 }}>Subjective Fluency Illusion</th>
                  </tr>
                </thead>
                <tbody>
                  {predictionData.outcome.comparisons.map((row, idx) => (
                    <tr 
                      key={idx}
                      style={{
                        borderBottom: '1px solid var(--border-subtle)',
                        backgroundColor: row.isEmpiricalWinner ? 'var(--accent-subtle)' : 'transparent',
                        fontWeight: row.isEmpiricalWinner ? 600 : 400,
                      }}
                    >
                      <td style={{ padding: '10px', color: 'var(--text-main)' }}>
                        {row.label}
                      </td>
                      <td style={{ padding: '10px' }} className="font-mono">{row.immediateRetention}</td>
                      <td 
                        style={{ 
                          padding: '10px', 
                          color: row.isEmpiricalWinner ? 'var(--accent-primary)' : 'inherit',
                          fontWeight: row.isEmpiricalWinner ? 700 : 400,
                        }} 
                        className="font-mono"
                      >
                        {row.oneWeekRetention}
                      </td>
                      <td style={{ padding: '10px', color: 'var(--text-muted)' }}>
                        {row.illusionRating}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Scientific Distinction Note */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
                padding: '10px 12px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--bg-surface-well)',
                fontSize: '0.75rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.45,
              }}
            >
              <AlertCircle size={15} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Evidence vs. Simplified Modeling:</strong> {predictionData.outcome.evidenceDistinction}
              </div>
            </div>
          </div>
        )}
      </form>
    </section>
  );
};
