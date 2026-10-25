import React, { useState } from 'react';
import { 
  Sparkles, 
  Brain 
} from 'lucide-react';
import { useLearning } from '../../context/LearningContext.tsx';

export const RetentionTransferReflection: React.FC = () => {
  const { currentLesson, lessonState } = useLearning();
  const prediction = currentLesson.prediction;
  const userChoiceId = lessonState.predictionAnswer;

  const [selectedTransferOpt, setSelectedTransferOpt] = useState<string | null>(null);

  const transferOptions = [
    {
      id: 'opt-trial',
      title: 'Strategy Alpha: Unguided Troubleshooting Struggle',
      desc: 'Throw the junior developers directly into live cluster outages with zero worked examples and encourage pure trial-and-error discovery.',
      isCorrect: false,
      feedback: 'Ineffective for novices. Novices lack internal schemas and resort to backward means-ends search, burning 100% of working memory on state tracking rather than learning Kubernetes networking principles.',
    },
    {
      id: 'opt-worked-faded',
      title: 'Strategy Beta: Annotated Worked Outages with Faded Completion',
      desc: 'Provide step-by-step diagnostic walkthroughs with sub-goal labels, alternating immediately with partially solved outages where they diagnose the final networking hop.',
      isCorrect: true,
      feedback: 'Empirically optimal! Worked examples eliminate extraneous search load, allowing working memory to induce reusable diagnostic schemas. Faded steps build independent retrieval strength.',
    },
    {
      id: 'opt-rfc-dump',
      title: 'Strategy Gamma: Exhaustive Specification & RFC Reading',
      desc: 'Force them to read 300 pages of formal Kubernetes networking documentation before allowing them to run a single kubectl command.',
      isCorrect: false,
      feedback: 'Produces inert knowledge. Learners cannot mentally map abstract protocol specifications to messy production network logs, inducing severe split-attention.',
    },
  ];

  return (
    <section
      aria-labelledby="reflection-heading"
      style={{
        marginBottom: '32px',
        padding: '24px',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
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
          Synthesis & Transfer 6.2
        </span>
        <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
          Metacognitive Calibration & Practical Application
        </span>
      </div>

      <h2 
        id="reflection-heading"
        className="font-serif"
        style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: 'var(--text-main)',
          lineHeight: 1.25,
          marginBottom: '8px',
        }}
      >
        Visual Feedback & Reflection: Consolidating the Lab Insights
      </h2>

      <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '20px' }}>
        A complete learning cycle bridges the gap between what you predicted, what you observed in the simulation, and how you apply that principle to a completely new problem.
      </p>

      {/* Synthesis Comparison Matrix */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '12px',
          marginBottom: '24px',
        }}
      >
        {/* Prediction Review */}
        <div
          style={{
            padding: '16px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--bg-surface-subtle)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
            1. Your Initial Prediction:
          </div>
          <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
            {userChoiceId && prediction.outcome.optionFeedback[userChoiceId] 
              ? prediction.outcome.optionFeedback[userChoiceId].title 
              : 'Protocol Beta: Worked Examples & Faded Completion'}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
            {userChoiceId && prediction.outcome.optionFeedback[userChoiceId]
              ? prediction.outcome.optionFeedback[userChoiceId].analysis
              : 'Studying expert solutions paired with faded completion steps eliminates unguided search waste.'}
          </p>
        </div>

        {/* Simulation Observation */}
        <div
          style={{
            padding: '16px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--bg-surface-subtle)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
            2. What the Simulation Proved:
          </div>
          <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
            The Compression Power of Long-Term Schemas
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
            In the working memory playground, 8 raw incident symptoms saturated 200% of conscious capacity. Grouping symptoms into 2 root-cause schemas dropped slot usage to 50%, liberating bandwidth for diagnostic synthesis.
          </p>
        </div>
      </div>

      {/* Interactive Transfer Challenge */}
      <div
        style={{
          padding: '20px',
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--bg-surface-well)',
          border: '1.5px solid var(--accent-border)',
          marginBottom: '20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Sparkles size={16} color="var(--accent-primary)" />
          <strong style={{ fontSize: '0.9375rem', color: 'var(--text-main)' }}>
            Knowledge Transfer Challenge: Applying Cognitive Load Theory to New Engineers
          </strong>
        </div>

        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
          You are designing a 2-week onboarding bootcamp for 10 junior engineers who have never written Kubernetes network policies. Based on Cognitive Load Theory and the Worked Example Effect, which approach will produce the highest troubleshooting transfer?
        </p>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '14px' }}>
          {transferOptions.map((opt) => {
            const isSelected = selectedTransferOpt === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedTransferOpt(opt.id)}
                style={{
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: isSelected 
                    ? (opt.isCorrect ? 'var(--success-bg)' : 'var(--danger-bg)')
                    : 'var(--bg-surface)',
                  border: isSelected 
                    ? (opt.isCorrect ? '1.5px solid var(--success-border)' : '1.5px solid var(--danger-border)')
                    : '1px solid var(--border-subtle)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <strong style={{ fontSize: '0.875rem', color: isSelected ? (opt.isCorrect ? 'var(--success-text)' : 'var(--danger-text)') : 'var(--text-main)' }}>
                    {opt.title}
                  </strong>
                  {isSelected && (
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: opt.isCorrect ? 'var(--success-text)' : 'var(--danger-text)' }}>
                      {opt.isCorrect ? '✓ OPTIMAL COGNITIVE FIT' : '✗ COGNITIVE FRICTION'}
                    </span>
                  )}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginBottom: isSelected ? '6px' : '0' }}>
                  {opt.desc}
                </div>
                {isSelected && (
                  <div style={{ fontSize: '0.75rem', color: opt.isCorrect ? 'var(--success-text)' : 'var(--danger-text)', fontWeight: 500, lineHeight: 1.4 }}>
                    {opt.feedback}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Critical Metacognitive Distinction */}
      <div
        style={{
          padding: '14px 16px',
          borderRadius: 'var(--radius-sm)',
          backgroundColor: 'var(--bg-surface-subtle)',
          borderLeft: '4px solid var(--warning-border)',
          fontSize: '0.8125rem',
          lineHeight: 1.5,
          color: 'var(--text-secondary)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px', color: 'var(--text-main)', fontWeight: 700 }}>
          <Brain size={16} color="var(--warning-text)" />
          <span>Metacognitive Reality: Intuition vs. Neocortical Storage Strength</span>
        </div>
        <p>
          Interacting with this laboratory provides strong perceptual intuition and immediate conceptual clarity. However, <strong>interactive success alone does not establish permanent mastery</strong>. Bjork’s New Theory of Disuse proves that without spaced, effortful retrieval practice over the coming days, initial memory traces fade rapidly. Use the Spaced Review companion in the navigation bar when these concepts become due for recall.
        </p>
      </div>
    </section>
  );
};
