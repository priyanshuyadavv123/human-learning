import React from 'react';
import { Mic, ShieldCheck, Sparkles } from 'lucide-react';
import { useLearning } from '../../context/LearningContext.tsx';

interface VocalPillar {
  title: string;
  tagline: string;
  principles: string[];
  diagnosticExercise: string;
}

const VOCAL_PILLARS: VocalPillar[] = [
  {
    title: 'Prosodic Cadence & The Downward Inflection',
    tagline: 'High credibility rests upon downward vocal pitch terminus.',
    principles: [
      'Upward vocal inflections (uptalk) signal submissive inquiry, even when delivering conclusive facts.',
      'Downward inflection at the period anchors certainty and commands involuntary executive attention.',
      'Slow down speech rate by 15% when delivering critical strategic directives.',
    ],
    diagnosticExercise: 'Record yourself stating three assertions. Ensure your vocal pitch drops at the end of every sentence rather than rising like a question.',
  },
  {
    title: 'The Pregnant Epistemic Pause',
    tagline: 'True authority is comfortable with silence in the room.',
    principles: [
      'Fillers ("um", "like", "you know") are defensive noise designed to prevent interruption while working memory retrieves concepts.',
      'A 2-second deliberate pause communicates complete cognitive poise and forces the counterpart to lean in.',
      'Never speak immediately following someone else\'s sentence; let 1 full second pass to signal you processed their input.',
    ],
    diagnosticExercise: 'Conduct a conversation with zero filler words. If you need to retrieve a concept, maintain eye contact and remain silent.',
  },
  {
    title: 'Jargon-Free Feynman Deconstruction',
    tagline: 'If you cannot explain it simply, you are masking ambiguity.',
    principles: [
      'Complex polysyllabic jargon is frequently used as an intellectual shield against scrutiny.',
      'Sovereignty uses Anglo-Saxon root verbs and concrete sensory metaphors.',
      'The highest status speaker is the one who clarifies the opaque rather than complicating the clear.',
    ],
    diagnosticExercise: 'Explain the core thesis of your primary project to an imaginary 12-year-old in under 90 seconds without a single corporate buzzword.',
  },
];

export const VoiceCharismaView: React.FC = () => {
  const { language } = useLearning();

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
          {language === 'hinglish' ? 'RHETORIC, PROSODY & VOCAL ARCHITECTURE' : 'RHETORIC, PROSODY & VOCAL ARCHITECTURE'}
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
          {language === 'hinglish' ? 'Voice & Rhetorical Charisma' : 'Voice & Rhetorical Charisma'}
        </h1>
        <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', maxWidth: '680px', lineHeight: 1.6 }}>
          {language === 'hinglish'
            ? 'Aapki vocal delivery aur conversational poise decide karti hai ki aapke ideas kitni authority ke saath land karenge.'
            : 'Mastery over the acoustic and rhetorical instruments: vocal pitch mechanics, epistemic pauses, emotional regulation under verbal attack, and commanding presence.'}
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {VOCAL_PILLARS.map((pillar, idx) => (
          <div key={idx} className="sovereign-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <div 
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(150, 110, 46, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-primary)'
                }}
              >
                <Mic size={15} />
              </div>
              <h2 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>
                {pillar.title}
              </h2>
            </div>

            <div style={{ fontStyle: 'italic', color: 'var(--accent-primary)', fontSize: '0.875rem', marginBottom: '14px' }}>
              "{pillar.tagline}"
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
                Operational Principles:
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {pillar.principles.map((pr, pIdx) => (
                  <li key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    <ShieldCheck size={14} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{pr}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ padding: '12px 16px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-surface-subtle)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '4px' }}>
                <Sparkles size={13} />
                <span>Diagnostic Protocol</span>
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                {pillar.diagnosticExercise}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
