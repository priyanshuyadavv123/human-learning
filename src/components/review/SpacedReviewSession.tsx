import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  ArrowRight
} from 'lucide-react';
import { useLearning } from '../../context/LearningContext.tsx';
import { CANONICAL_REVIEW_PROMPTS } from '../../data/conceptRegistry.ts';
import type { 
  ConceptId, 
  EvaluatedOutcome, 
  LearnerSelfRating, 
  ExplicitConfidence 
} from '../../types/memory.ts';

function isConceptDue(nextReviewDueAt: string, nowMs: number): boolean {
  const dueMs = Date.parse(nextReviewDueAt);
  return !Number.isNaN(dueMs) && dueMs <= nowMs;
}

export const SpacedReviewSession: React.FC = () => {
  const { 
    isReviewModalOpen, 
    setReviewModalOpen, 
    learnerMemory, 
    recordDelayedReview 
  } = useLearning();

  const [sessionStartTime] = useState(() => Date.now());
  const [activeStep, setActiveStep] = useState<'retrieve' | 'evaluate'>('retrieve');
  const [typedRecall, setTypedRecall] = useState('');
  const [selectedConfidence, setSelectedConfidence] = useState<ExplicitConfidence>('medium');
  const [checkedCriteria, setCheckedCriteria] = useState<Record<number, boolean>>({});
  const [discrepancyAck, setDiscrepancyAck] = useState(false);
  const [selfRating, setSelfRating] = useState<LearnerSelfRating>('fluent');
  const [completedInSession, setCompletedInSession] = useState<string[]>([]);
  const [lastFeedback, setLastFeedback] = useState<string | null>(null);

  if (!isReviewModalOpen) {
    return null;
  }

  // Filter due concepts that haven't been completed in this current modal session
  const dueConcepts: ConceptId[] = (Object.keys(learnerMemory.conceptStates) as ConceptId[]).filter(cId => {
    if (completedInSession.includes(cId)) return false;
    const c = learnerMemory.conceptStates[cId];
    return isConceptDue(c.nextReviewDueAt, sessionStartTime);
  });

  const currentConceptId = dueConcepts[0];
  const currentConceptState = currentConceptId ? learnerMemory.conceptStates[currentConceptId] : undefined;
  const promptData = currentConceptId ? CANONICAL_REVIEW_PROMPTS[currentConceptId] : undefined;

  const handleReveal = () => {
    setActiveStep('evaluate');
  };

  const handleCommitReview = () => {
    if (!currentConceptId || !promptData) return;

    // Objective evaluation calculation based on criteria checked
    const totalCriteria = promptData.keyCriteria.length;
    const checkedCount = Object.values(checkedCriteria).filter(Boolean).length;

    let evaluatedOutcome: EvaluatedOutcome = 'incorrect';
    if (checkedCount === totalCriteria) {
      evaluatedOutcome = 'correct';
    } else if (checkedCount > 0) {
      evaluatedOutcome = 'partially_correct';
    }

    recordDelayedReview({
      conceptId: currentConceptId,
      evaluatedOutcome,
      learnerSelfRating: selfRating,
      explicitConfidence: selectedConfidence,
      discrepancyAcknowledged: discrepancyAck,
    });

    let feedbackMsg = `Review logged as ${evaluatedOutcome.toUpperCase()}.`;
    if (evaluatedOutcome === 'correct') {
      if (currentConceptState?.hypercorrectionPending && discrepancyAck) {
        feedbackMsg += ' Hypercorrection recovery bonus (+0.15) applied!';
      } else {
        feedbackMsg += ' Review interval extended.';
      }
    } else if (evaluatedOutcome === 'partially_correct') {
      feedbackMsg += ' Interval extended modestly; concept retained in active reinforcement.';
    } else {
      feedbackMsg += ' Interval reset to 1 day for next-day reconsolidation.';
    }

    setLastFeedback(feedbackMsg);
    setCompletedInSession(prev => [...prev, currentConceptId]);

    // Reset interaction state for next card
    setActiveStep('retrieve');
    setTypedRecall('');
    setSelectedConfidence('medium');
    setCheckedCriteria({});
    setDiscrepancyAck(false);
    setSelfRating('fluent');
  };

  const handleClose = () => {
    setReviewModalOpen(false);
    setActiveStep('retrieve');
    setTypedRecall('');
    setLastFeedback(null);
  };

  return (
    <div 
      className="review-modal-backdrop"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(3px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '680px',
          maxHeight: '90vh',
          backgroundColor: 'var(--bg-surface)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Modal Header */}
        <div 
          style={{
            padding: '16px 20px',
            borderBottom: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-surface-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={16} color="var(--accent-primary)" />
            <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-main)' }}>
              Spaced Retrieval Session (Delayed Recall)
            </span>
          </div>

          <button 
            onClick={handleClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: '4px',
            }}
            aria-label="Close review"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px', overflowY: 'auto', flex: 1 }}>
          {lastFeedback && (
            <div 
              style={{
                marginBottom: '16px',
                padding: '10px 14px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--accent-subtle)',
                border: '1px solid var(--accent-primary)',
                fontSize: '0.8125rem',
                color: 'var(--accent-primary)',
                fontWeight: 600,
              }}
            >
              {lastFeedback}
            </div>
          )}

          {!currentConceptId || !promptData ? (
            <div style={{ textAlign: 'center', padding: '32px 16px' }}>
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--success-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}
              >
                <CheckCircle2 size={24} color="var(--success-text)" />
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-main)' }}>
                All Scheduled Reviews Completed!
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', maxWidth: '440px', margin: '0 auto 20px', lineHeight: 1.5 }}>
                Your demonstrated recall has been logged. Each concept’s review interval has adjusted dynamically according to your performance.
              </p>
              <button 
                onClick={handleClose}
                className="btn-primary"
                style={{ padding: '8px 20px', fontSize: '0.875rem' }}
              >
                Return to Workspace
              </button>
            </div>
          ) : (
            <div>
              {/* Concept Indicator */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="font-mono" style={{ fontSize: '0.6875rem', color: 'var(--accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
                  {promptData.lessonSectionAnchor}
                </span>
                <span 
                  className="font-mono"
                  style={{
                    fontSize: '0.6875rem',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    backgroundColor: 'var(--bg-surface-subtle)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  Stage: {currentConceptState?.stage} • Interval: {currentConceptState?.reviewIntervalDays}d
                </span>
              </div>

              <h3 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-main)' }}>
                {promptData.title}
              </h3>

              <div 
                style={{
                  padding: '14px 16px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-surface-subtle)',
                  border: '1px solid var(--border-subtle)',
                  marginBottom: '18px',
                  fontSize: '0.9375rem',
                  color: 'var(--text-main)',
                  lineHeight: 1.55,
                }}
              >
                <strong>Recall Prompt:</strong> {promptData.prompt}
              </div>

              {activeStep === 'retrieve' ? (
                <div>
                  <div style={{ marginBottom: '12px' }}>
                    <label 
                      style={{ 
                        display: 'block', 
                        fontSize: '0.8125rem', 
                        fontWeight: 600, 
                        color: 'var(--text-secondary)', 
                        marginBottom: '6px' 
                      }}
                    >
                      Retrieve from memory (unassisted recall):
                    </label>
                    <textarea 
                      value={typedRecall}
                      onChange={(e) => setTypedRecall(e.target.value)}
                      placeholder="Type your explanation here, or recite it mentally before revealing..."
                      rows={4}
                      style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.875rem',
                        color: 'var(--text-main)',
                        lineHeight: 1.5,
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                      Explicit Confidence before verification:
                    </label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {(['low', 'medium', 'high'] as ExplicitConfidence[]).map((c) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => setSelectedConfidence(c)}
                          style={{
                            flex: 1,
                            padding: '6px 12px',
                            borderRadius: 'var(--radius-sm)',
                            border: `1px solid ${selectedConfidence === c ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
                            backgroundColor: selectedConfidence === c ? 'var(--accent-subtle)' : 'var(--bg-surface)',
                            color: selectedConfidence === c ? 'var(--accent-primary)' : 'var(--text-secondary)',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            textTransform: 'capitalize',
                            cursor: 'pointer',
                          }}
                        >
                          {c} {c === 'low' ? '(Effortful)' : c === 'high' ? '(Certain)' : '(Moderate)'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={handleReveal}
                    className="btn-primary"
                    style={{ width: '100%', padding: '10px 16px', fontSize: '0.875rem' }}
                  >
                    Reveal Key Criteria & Verify Answer
                  </button>
                </div>
              ) : (
                <div>
                  {/* Canonical Explanation */}
                  <div 
                    style={{
                      padding: '14px 16px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--success-bg)',
                      border: '1px solid var(--success-border)',
                      marginBottom: '16px',
                    }}
                  >
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--success-text)', marginBottom: '4px', textTransform: 'uppercase' }}>
                      Canonical Cognitive Explanation
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--success-text)', lineHeight: 1.5, margin: 0 }}>
                      {promptData.canonicalAnswer}
                    </p>
                  </div>

                  {/* Objective Criteria Checkboxes */}
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
                      Objective Recall Checklist:
                    </label>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {promptData.keyCriteria.map((crit, idx) => {
                        const isChecked = !!checkedCriteria[idx];
                        return (
                          <label 
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '10px',
                              padding: '8px 12px',
                              borderRadius: 'var(--radius-sm)',
                              backgroundColor: isChecked ? 'var(--accent-subtle)' : 'var(--bg-surface-subtle)',
                              border: `1px solid ${isChecked ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
                              cursor: 'pointer',
                              fontSize: '0.8125rem',
                              color: 'var(--text-main)',
                            }}
                          >
                            <input 
                              type="checkbox"
                              checked={isChecked}
                              onChange={(e) => setCheckedCriteria(prev => ({ ...prev, [idx]: e.target.checked }))}
                              style={{ marginTop: '2px' }}
                            />
                            <span>{crit}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Hypercorrection Discrepancy Prompt (if pending) */}
                  {currentConceptState?.hypercorrectionPending && promptData.discrepancyPrompt && (
                    <div 
                      style={{
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--danger-bg)',
                        border: '1px solid var(--danger-border)',
                        marginBottom: '16px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--danger-text)', marginBottom: '4px' }}>
                        <AlertTriangle size={14} />
                        <span>Hypercorrection Protocol: Discrepancy Confrontation</span>
                      </div>
                      <p style={{ fontSize: '0.8125rem', color: 'var(--danger-text)', marginBottom: '8px', lineHeight: 1.45 }}>
                        {promptData.discrepancyPrompt}
                      </p>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: 'var(--danger-text)', cursor: 'pointer', fontWeight: 600 }}>
                        <input 
                          type="checkbox"
                          checked={discrepancyAck}
                          onChange={(e) => setDiscrepancyAck(e.target.checked)}
                        />
                        <span>I acknowledge this discrepancy and understand the corrective mechanism.</span>
                      </label>
                    </div>
                  )}

                  {/* Self-Rating */}
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                      Cognitive Effort Rating:
                    </label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {[
                        { id: 'fluent', label: 'Fluent Recall' },
                        { id: 'effortful', label: 'Effortful Struggle' },
                        { id: 'forgot_or_hint', label: 'Needed Full Hint' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSelfRating(item.id as LearnerSelfRating)}
                          style={{
                            flex: 1,
                            padding: '6px 8px',
                            borderRadius: 'var(--radius-sm)',
                            border: `1px solid ${selfRating === item.id ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
                            backgroundColor: selfRating === item.id ? 'var(--accent-subtle)' : 'var(--bg-surface)',
                            color: selfRating === item.id ? 'var(--accent-primary)' : 'var(--text-secondary)',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                          }}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      type="button"
                      onClick={() => setActiveStep('retrieve')}
                      style={{
                        padding: '10px 16px',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-subtle)',
                        backgroundColor: 'var(--bg-surface)',
                        color: 'var(--text-secondary)',
                        fontSize: '0.875rem',
                        cursor: 'pointer',
                      }}
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleCommitReview}
                      className="btn-primary"
                      style={{ flex: 1, padding: '10px 16px', fontSize: '0.875rem' }}
                    >
                      Commit & Schedule Next Interval <ArrowRight size={14} style={{ display: 'inline', marginLeft: '4px' }} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
