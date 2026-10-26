import React from 'react';
import { Clock, Award, HelpCircle } from 'lucide-react';
import { useLearning } from '../../context/LearningContext.tsx';

export const LessonHeader: React.FC = () => {
  const { currentLesson, language } = useLearning();
  const lesson = currentLesson;
  const chapterNumber = lesson.number.split('.')[0] || '1';

  return (
    <div style={{ marginBottom: '24px' }}>
      {/* Eyebrow / Metadata */}
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px', 
          flexWrap: 'wrap',
          marginBottom: '8px' 
        }}
      >
        <span 
          className="font-mono"
          style={{
            fontSize: '0.6875rem',
            padding: '2px 8px',
            borderRadius: '4px',
            backgroundColor: 'var(--accent-subtle)',
            color: 'var(--accent-primary)',
            fontWeight: 600,
            border: '1px solid var(--accent-border)',
          }}
        >
          CHAPTER {chapterNumber} • LESSON {lesson.number}
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          <Clock size={13} />
          <span>{lesson.readingTimeMinutes} min deep read & interactive practice</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          <Award size={13} color="var(--accent-primary)" />
          <span>Empirical Cognitive Architecture</span>
        </div>
      </div>

      {/* Main Title */}
      <h1 
        className="font-serif"
        style={{
          fontSize: '2rem',
          fontWeight: 700,
          color: 'var(--text-main)',
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
          marginBottom: '6px',
        }}
      >
        {lesson.title}
      </h1>

      <p 
        style={{
          fontSize: '1.0625rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.5,
          marginBottom: '18px',
        }}
      >
        {lesson.subtitle}
      </p>

      {/* Curiosity-Provoking Hook */}
      <div
        style={{
          padding: '16px 20px',
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--bg-surface-subtle)',
          borderLeft: '4px solid var(--accent-primary)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <div 
            style={{ 
              marginTop: '2px',
              color: 'var(--accent-primary)',
              flexShrink: 0
            }}
          >
            <HelpCircle size={18} />
          </div>

          <div>
            <div 
              className="font-mono"
              style={{
                fontSize: '0.6875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--accent-primary)',
                fontWeight: 700,
                marginBottom: '4px',
              }}
            >
              The Foundational Paradox
            </div>

            <h2 
              className="font-serif"
              style={{
                fontSize: '1.1875rem',
                fontWeight: 600,
                color: 'var(--text-main)',
                lineHeight: 1.35,
                marginBottom: '6px',
              }}
            >
              "{lesson.curiosityQuestion.headline}"
            </h2>

            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '8px' }}>
              {lesson.curiosityQuestion.teaser}
            </p>

            <div 
              style={{
                fontSize: '0.8125rem',
                color: 'var(--text-muted)',
                fontStyle: 'italic',
                paddingTop: '6px',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              💡 {lesson.curiosityQuestion.hookNote}
            </div>

            {language === 'hinglish' && (
              <div 
                style={{
                  marginTop: '10px',
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(217, 119, 6, 0.08)',
                  border: '1px solid rgba(217, 119, 6, 0.25)',
                  fontSize: '0.8125rem',
                  color: 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ fontWeight: 600, color: '#d97706', flexShrink: 0 }}>हिं Hinglish Mode:</span>
                <span>
                  Cognitive science ke core concepts technical English mein preserved hain, jabki real intuition aur deep understanding relatable Hinglish analogies ke saath milegi!
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
