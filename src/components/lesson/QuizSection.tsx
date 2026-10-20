import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Award, 
  Lock, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { useLearning } from '../../context/LearningContext.tsx';

export const QuizSection: React.FC = () => {
  const { 
    currentLesson,
    lessonState, 
    setQuizAnswer, 
    submitQuiz, 
    retakeQuiz 
  } = useLearning();

  const quiz = currentLesson.quiz;
  const userAnswers = lessonState.quizAnswers || {};
  const isSubmitted = lessonState.quizSubmitted;
  const score = lessonState.quizScore;

  const [validationError, setValidationError] = useState<string | null>(null);

  // Check if all questions have an answer selected
  const answeredCount = Object.keys(userAnswers).length;
  const isAllAnswered = quiz.questions.every(q => !!userAnswers[q.id]);

  const handleSelectOption = (questionId: string, optionId: string) => {
    if (isSubmitted) return;
    setValidationError(null);
    setQuizAnswer(questionId, optionId);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAllAnswered) {
      setValidationError(`Please answer all questions before submitting (${answeredCount}/${quiz.questions.length} answered).`);
      return;
    }
    submitQuiz();
  };

  const isPassed = (score ?? 0) >= quiz.passingScorePercent;

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
            Section 5 • Verification Assessment
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            <Lock size={12} />
            <span>Answers locked until submission</span>
          </div>
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
          {quiz.title}
        </h2>
        <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
          {quiz.instruction}
        </p>
      </div>

      {/* Submitted Results Banner */}
      {isSubmitted && score !== undefined && (
        <div 
          style={{
            padding: '20px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: isPassed ? 'var(--success-bg)' : 'var(--warning-bg)',
            border: `1.5px solid ${isPassed ? 'var(--success-border)' : 'var(--warning-border)'}`,
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {isPassed ? (
              <Award size={32} color="var(--success-text)" />
            ) : (
              <ShieldAlert size={32} color="var(--warning-text)" />
            )}
            <div>
              <h3 
                className="font-serif"
                style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 700, 
                  color: isPassed ? 'var(--success-text)' : 'var(--warning-text)',
                  marginBottom: '2px',
                }}
              >
                {isPassed ? 'Assessment Mastered' : 'Revision Recommended'}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                {isPassed 
                  ? `You achieved ${score}% (Threshold: ${quiz.passingScorePercent}%). Cognitive foundations verified.` 
                  : `Score: ${score}% (Threshold: ${quiz.passingScorePercent}%). Review the rationales below and retake.`}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={retakeQuiz}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-main)',
              fontSize: '0.8125rem',
              fontWeight: 600,
            }}
          >
            <RotateCcw size={14} />
            <span>Retake Assessment</span>
          </button>
        </div>
      )}

      {/* Questions Form */}
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '24px' }}>
          {quiz.questions.map((q, qIndex) => {
            const userChoice = userAnswers[q.id];
            const isQuestionCorrect = isSubmitted && userChoice === q.correctOptionId;

            return (
              <div 
                key={q.id}
                style={{
                  padding: '20px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-surface-subtle)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                {/* Question title */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span 
                      className="font-mono"
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '2px 7px',
                        borderRadius: '4px',
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--accent-primary)',
                      }}
                    >
                      Q{qIndex + 1}
                    </span>

                    <h4 
                      style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'var(--text-main)',
                        lineHeight: 1.45,
                      }}
                    >
                      {q.question}
                    </h4>
                  </div>

                  {isSubmitted && (
                    <div style={{ flexShrink: 0 }}>
                      {isQuestionCorrect ? (
                        <span 
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            color: 'var(--success-text)',
                          }}
                        >
                          <CheckCircle2 size={16} /> Correct
                        </span>
                      ) : (
                        <span 
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            color: 'var(--danger-text)',
                          }}
                        >
                          <XCircle size={16} /> Incorrect
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Option radios */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
                  {q.options.map((opt) => {
                    const isSelected = userChoice === opt.id;
                    const isTargetAnswer = isSubmitted && opt.id === q.correctOptionId;
                    const isSelectedWrong = isSubmitted && isSelected && !isQuestionCorrect;

                    let optBg = 'var(--bg-surface)';
                    let optBorder = 'var(--border-subtle)';
                    let optColor = 'var(--text-main)';

                    if (isSubmitted) {
                      if (isTargetAnswer) {
                        optBg = 'var(--success-bg)';
                        optBorder = 'var(--success-border)';
                        optColor = 'var(--success-text)';
                      } else if (isSelectedWrong) {
                        optBg = 'var(--danger-bg)';
                        optBorder = 'var(--danger-border)';
                        optColor = 'var(--danger-text)';
                      }
                    } else if (isSelected) {
                      optBg = 'var(--accent-subtle)';
                      optBorder = 'var(--accent-primary)';
                    }

                    return (
                      <label
                        key={opt.id}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          padding: '10px 14px',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: optBg,
                          border: `1.5px solid ${optBorder}`,
                          color: optColor,
                          fontSize: '0.875rem',
                          cursor: isSubmitted ? 'default' : 'pointer',
                          transition: 'all 0.12s ease',
                        }}
                      >
                        <input
                          type="radio"
                          name={`quiz-${q.id}`}
                          value={opt.id}
                          checked={isSelected}
                          disabled={isSubmitted}
                          onChange={() => handleSelectOption(q.id, opt.id)}
                          style={{ marginTop: '3px', accentColor: 'var(--accent-primary)' }}
                        />
                        <span style={{ flex: 1, lineHeight: 1.45 }}>{opt.text}</span>
                        {isSubmitted && isTargetAnswer && (
                          <span style={{ fontSize: '0.75rem', fontWeight: 700 }}>✓ Key</span>
                        )}
                      </label>
                    );
                  })}
                </div>

                {/* Explanatory Rationales (Locked until submission) */}
                {isSubmitted && (
                  <div 
                    style={{
                      padding: '14px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.8125rem',
                      lineHeight: 1.5,
                      marginTop: '12px',
                    }}
                  >
                    <div style={{ marginBottom: '6px' }}>
                      <strong>Pedagogical Mechanism:</strong> {q.explanation}
                    </div>
                    <div style={{ color: 'var(--text-secondary)', marginBottom: '4px' }}>
                      <strong>Rationale:</strong> {q.pedagogicalRationale}
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontStyle: 'italic' }}>
                      Evidence note: {q.evidenceNote}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {validationError && (
          <div 
            style={{
              padding: '10px 14px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--danger-bg)',
              color: 'var(--danger-text)',
              fontSize: '0.8125rem',
              marginBottom: '16px',
            }}
          >
            {validationError}
          </div>
        )}

        {/* Submit Button */}
        {!isSubmitted && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button
              type="submit"
              disabled={!isAllAnswered}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: isAllAnswered ? 'var(--accent-primary)' : 'var(--border-strong)',
                color: 'var(--text-on-accent)',
                fontSize: '0.9375rem',
                fontWeight: 600,
                boxShadow: 'var(--shadow-sm)',
                transition: 'background-color 0.15s ease',
              }}
            >
              <span>Submit Assessment & Reveal Solutions</span>
              <ArrowRight size={16} />
            </button>

            <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              {answeredCount} of {quiz.questions.length} answered
            </span>
          </div>
        )}
      </form>
    </section>
  );
};
