import React from 'react';
import { Clock, Award, HelpCircle } from 'lucide-react';
import { LESSON_HOW_LEARNING_WORKS } from '../../data/courseData.ts';

export const LessonHeader: React.FC = () => {
  const lesson = LESSON_HOW_LEARNING_WORKS;

  return (
    <div style={{ marginBottom: '32px' }}>
      {/* Eyebrow / Metadata */}
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px', 
          flexWrap: 'wrap',
          marginBottom: '10px' 
        }}
      >
        <span 
          className="font-mono"
          style={{
            fontSize: '0.75rem',
            padding: '2px 8px',
            borderRadius: '4px',
            backgroundColor: 'var(--accent-subtle)',
            color: 'var(--accent-primary)',
            fontWeight: 600,
            border: '1px solid var(--accent-border)',
          }}
        >
          CHAPTER 1 • LESSON {lesson.number}
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
          <Clock size={14} />
          <span>{lesson.readingTimeMinutes} min deep read & interactive practice</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
          <Award size={14} color="var(--accent-primary)" />
          <span>Empirical Cognitive Architecture</span>
        </div>
      </div>

      {/* Main Title */}
      <h1 
        className="font-serif"
        style={{
          fontSize: '2.25rem',
          fontWeight: 700,
          color: 'var(--text-main)',
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
          marginBottom: '8px',
        }}
      >
        {lesson.title}
      </h1>

      <p 
        style={{
          fontSize: '1.125rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.5,
          marginBottom: '24px',
        }}
      >
        {lesson.subtitle}
      </p>

      {/* Curiosity-Provoking Hook */}
      <div
        style={{
          padding: '20px 24px',
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--bg-surface-subtle)',
          borderLeft: '4px solid var(--accent-primary)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <div 
            style={{ 
              marginTop: '3px',
              color: 'var(--accent-primary)',
              flexShrink: 0
            }}
          >
            <HelpCircle size={20} />
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
                marginBottom: '6px',
              }}
            >
              The Foundational Paradox
            </div>

            <h2 
              className="font-serif"
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--text-main)',
                lineHeight: 1.35,
                marginBottom: '8px',
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
          </div>
        </div>
      </div>
    </div>
  );
};
