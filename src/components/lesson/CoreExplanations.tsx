import React from 'react';
import { 
  Eye, 
  Cpu, 
  Network, 
  Repeat, 
  RefreshCw, 
  Info, 
  Check, 
  Sparkles,
  Bookmark
} from 'lucide-react';
import { useLearning } from '../../context/LearningContext.tsx';
import type { ScientificStatus } from '../../types/learning.ts';

const iconsMap: Record<string, React.ReactNode> = {
  'attention': <Eye size={18} />,
  'working-memory': <Cpu size={18} />,
  'long-term-memory': <Network size={18} />,
  'retrieval-practice': <Repeat size={18} />,
  'calibrated-feedback': <RefreshCw size={18} />,
  'perceptual-fluency-trap': <Eye size={18} />,
  'generation-effect-mechanics': <Repeat size={18} />,
  'metacognitive-monitoring-jol': <RefreshCw size={18} />,
  'tripartite-cognitive-load': <Cpu size={18} />,
  'worked-example-split-attention': <Bookmark size={18} />,
  'expertise-reversal-schema-automation': <Network size={18} />,
  // Lesson 2.1 Tabs
  'retrieval-practice-testing-effect': <Repeat size={18} />,
  'storage-vs-retrieval-strength': <Network size={18} />,
  'desirable-difficulties-reconsolidation': <RefreshCw size={18} />,
  // Lesson 2.2 Tabs
  'ebbinghaus-decay-curve': <RefreshCw size={18} />,
  'expanding-intervals-sm2-fsrs': <Cpu size={18} />,
  'spacing-effect-optimal-lags': <Repeat size={18} />,
};

function getBadgeProps(status: ScientificStatus) {
  switch (status) {
    case 'empirical-consensus':
      return {
        label: 'Empirical Consensus',
        bg: 'var(--success-bg)',
        color: 'var(--success-text)',
        border: 'var(--success-border)',
      };
    case 'cognitive-model':
      return {
        label: 'Cognitive Architecture Model',
        bg: 'var(--accent-subtle)',
        color: 'var(--accent-primary)',
        border: 'var(--accent-border)',
      };
    case 'neurobiological-mechanism':
      return {
        label: 'Neurobiological Mechanism',
        bg: 'var(--warning-bg)',
        color: 'var(--warning-text)',
        border: 'var(--warning-border)',
      };
  }
}

export const CoreExplanations: React.FC = () => {
  const { currentLesson, lessonState, setExplanationTab } = useLearning();
  const explanations = currentLesson.coreExplanations;
  const activeTabId = lessonState.activeExplanationTab && explanations.some(e => e.id === lessonState.activeExplanationTab)
    ? lessonState.activeExplanationTab
    : explanations[0].id;

  const activeExplanation = explanations.find(e => e.id === activeTabId) || explanations[0];
  const badge = getBadgeProps(activeExplanation.scientificStatus);

  return (
    <section style={{ marginBottom: '32px' }}>
      {/* Section Header */}
      <div style={{ marginBottom: '16px' }}>
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
          Section 2 • Core Mechanics
        </div>
        <h2 
          className="font-serif"
          style={{ 
            fontSize: '1.5rem', 
            fontWeight: 700, 
            color: 'var(--text-main)', 
            lineHeight: 1.25,
            marginBottom: '6px'
          }}
        >
          The Five Biological Imperatives of Learning
        </h2>
        <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
          Learning is an energy-intensive sequence of biological transformations. Navigate each foundational mechanism below:
        </p>
      </div>

      {/* Mechanism Tabs */}
      <div 
        style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '6px',
          marginBottom: '16px',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        {explanations.map((exp, idx) => {
          const isSelected = exp.id === activeTabId;

          return (
            <button
              key={exp.id}
              onClick={() => setExplanationTab(exp.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '7px 12px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: isSelected ? 'var(--accent-primary)' : 'var(--bg-surface)',
                color: isSelected ? 'var(--text-on-accent)' : 'var(--text-main)',
                border: `1px solid ${isSelected ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
                fontSize: '0.8125rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease',
              }}
            >
              <span style={{ opacity: isSelected ? 1 : 0.7 }}>
                {iconsMap[exp.id] || <Bookmark size={16} />}
              </span>
              <span>{idx + 1}. {exp.title.split(':')[0].replace(/^\d+\.\s*/, '')}</span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Card */}
      <div 
        style={{
          padding: '22px',
          borderRadius: 'var(--radius-lg)',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        {/* Card Header with Status Badge */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', marginBottom: '16px' }}>
          <div>
            <h3 
              className="font-serif"
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                lineHeight: 1.3,
                marginBottom: '4px',
              }}
            >
              {activeExplanation.title}
            </h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--accent-primary)', fontWeight: 500 }}>
              {activeExplanation.tagline}
            </p>
          </div>

          <div 
            style={{
              padding: '4px 10px',
              borderRadius: '9999px',
              backgroundColor: badge.bg,
              color: badge.color,
              border: `1px solid ${badge.border}`,
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
            }}
          >
            {badge.label}
          </div>
        </div>

        {/* Overview Summary */}
        <p 
          className="prose-editorial"
          style={{ fontSize: '1.0625rem', color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '24px' }}
        >
          {activeExplanation.summary}
        </p>

        {/* Detailed Biological / Cognitive Mechanisms */}
        <div style={{ marginBottom: '24px' }}>
          <div 
            className="font-mono"
            style={{ 
              fontSize: '0.6875rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.06em', 
              color: 'var(--text-muted)',
              fontWeight: 700,
              marginBottom: '10px'
            }}
          >
            Underlying Operational Mechanisms
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
            {activeExplanation.mechanisms.map((mech, i) => (
              <div 
                key={i}
                style={{
                  padding: '14px 16px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-surface-subtle)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '4px' }}>
                  <Check size={14} color="var(--accent-primary)" />
                  <span>{mech.label}</span>
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {mech.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Engineering Takeaway */}
        <div 
          style={{
            padding: '16px 20px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--accent-subtle)',
            borderLeft: '4px solid var(--accent-primary)',
            marginBottom: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '4px' }}>
            <Sparkles size={15} />
            <span>Core Engineering Rule</span>
          </div>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-main)', fontWeight: 500, lineHeight: 1.5 }}>
            {activeExplanation.keyInsight}
          </p>
        </div>

        {/* Scientific Evidence vs Model Caveat */}
        {activeExplanation.simplifiedModelCaveat && (
          <div 
            style={{
              padding: '10px 14px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--bg-surface-well)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.75rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.45,
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
            }}
          >
            <Info size={14} color="var(--text-muted)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong>Model vs Biological Reality:</strong> {activeExplanation.simplifiedModelCaveat}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
