import React from 'react';
import { Target, Shield, Zap, ArrowRight } from 'lucide-react';
import { useLearning } from '../../context/LearningContext.tsx';

interface StrategyLaw {
  number: string;
  title: string;
  aphorism: string;
  mechanism: string;
  exercise: string;
  lessonId: string;
}

const STRATEGY_LAWS: StrategyLaw[] = [
  {
    number: 'LAW I',
    title: 'Cognitive Decoupling & Affective Silence',
    aphorism: 'Never respond from the emotional arousal of the stimulus. Insert deliberate latency.',
    mechanism: 'Amygdala hijacking triggers instantaneous defensive scripts. Inserting a 5-second cognitive buffer reroutes neural processing to the dorsolateral prefrontal cortex.',
    exercise: 'In your next debate or high-stakes email, enforce a 30-second delay. Note the physical impulse to react and watch it dissipate.',
    lessonId: 'how-learning-actually-works',
  },
  {
    number: 'LAW II',
    title: 'The Inversion of Premortem Risk',
    aphorism: 'Assume catastrophic failure has already occurred. Trace the fault backwards.',
    mechanism: 'Prospective hindsight increases error identification by up to 30% compared to optimistic forecasting (Klein, 2007).',
    exercise: 'Identify a priority project. Write down exactly why it failed 6 months from now, then remediate the top root vulnerability.',
    lessonId: 'error-journaling-protocols',
  },
  {
    number: 'LAW III',
    title: 'Information Asymmetry & Selective Concealment',
    aphorism: 'He who speaks the least retains the greatest operational optionality.',
    mechanism: 'Revealing intentions early allows adversaries and rivals to construct anticipatory defenses or mimic your strategic trajectory.',
    exercise: 'Speak 30% fewer words today in meetings. Ask clarifying questions instead of offering unprompted opinions.',
    lessonId: 'illusion-of-competence',
  },
  {
    number: 'LAW IV',
    title: 'First-Principles Deconstruction',
    aphorism: 'Break down an opaque problem until only irreducible, physical truths remain.',
    mechanism: 'Analogical imitation leads to brittle decisions. Bedrock reasoning reconstructs novel solutions from foundational physics.',
    exercise: 'Take an industry standard convention. Ask "Why?" five consecutive times to reveal the unverified assumption at its base.',
    lessonId: 'chunking-mechanics',
  },
];

export const PowerStrategyView: React.FC = () => {
  const { setActiveLessonId, setActiveView, language } = useLearning();

  return (
    <div style={{ padding: '32px 24px', maxWidth: '960px', margin: '0 auto' }}>
      <div style={{ marginBottom: '28px' }}>
        <div 
          className="font-mono"
          style={{ 
            fontSize: '0.6875rem', 
            fontWeight: 700, 
            letterSpacing: '0.12em', 
            color: 'var(--accent-primary)',
            textTransform: 'uppercase',
            marginBottom: '6px'
          }}
        >
          {language === 'hinglish' ? 'STRATEGIC REASONING & MENTAL MODELS' : 'STRATEGIC REASONING & MENTAL MODELS'}
        </div>
        <h1 
          className="font-serif"
          style={{ 
            fontSize: '2rem', 
            fontWeight: 800, 
            color: 'var(--text-main)', 
            lineHeight: 1.2,
            marginBottom: '8px'
          }}
        >
          {language === 'hinglish' ? 'Power & Strategic Reasoning' : 'Power & Strategic Reasoning'}
        </h1>
        <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', maxWidth: '680px', lineHeight: 1.6 }}>
          {language === 'hinglish'
            ? 'Mind ki true sovereignty sirf knowledge collect karne me nahi, balki deliberate decision-making aur strategic emotional control me hoti hai.'
            : 'Operational mental models combining game theory, Machiavellian realism, cognitive decoupling, and Stoic composure for high-stakes decision landscapes.'}
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {STRATEGY_LAWS.map((law, idx) => (
          <div key={idx} className="sovereign-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span 
                className="font-mono"
                style={{ 
                  fontSize: '0.6875rem', 
                  color: 'var(--accent-primary)', 
                  fontWeight: 700, 
                  letterSpacing: '0.1em' 
                }}
              >
                {law.number}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                <Shield size={13} color="var(--accent-primary)" />
                <span>Strategic Doctrine</span>
              </div>
            </div>

            <h2 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
              {law.title}
            </h2>

            <div 
              style={{ 
                fontStyle: 'italic', 
                color: 'var(--accent-primary)', 
                fontSize: '0.9375rem', 
                marginBottom: '14px',
                paddingLeft: '12px',
                borderLeft: '2px solid var(--accent-primary)'
              }}
            >
              "{law.aphorism}"
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div style={{ padding: '12px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-surface-subtle)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>
                  <Target size={13} color="var(--accent-primary)" />
                  <span>Cognitive Mechanism</span>
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                  {law.mechanism}
                </p>
              </div>

              <div style={{ padding: '12px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-surface-subtle)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>
                  <Zap size={13} color="var(--accent-primary)" />
                  <span>Deliberative Practice</span>
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                  {law.exercise}
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setActiveLessonId(law.lessonId);
                setActiveView('curriculum');
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'transparent',
                border: '1px solid var(--accent-border)',
                color: 'var(--accent-primary)',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <span>Explore Associated Curriculum Module</span>
              <ArrowRight size={13} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
