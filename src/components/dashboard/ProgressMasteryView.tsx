import React from 'react';
import { CheckCircle2, TrendingUp, BookOpen, RotateCcw } from 'lucide-react';
import { useLearning } from '../../context/LearningContext.tsx';
import { PRIMARY_COURSE } from '../../data/courseData.ts';

export const ProgressMasteryView: React.FC = () => {
  const { 
    progressPercent, 
    dueReviewsCount, 
    isLessonCompleted, 
    setReviewModalOpen,
    language 
  } = useLearning();

  const totalLessons = PRIMARY_COURSE.chapters.reduce((acc, ch) => acc + ch.lessons.length, 0);
  const completedLessons = PRIMARY_COURSE.chapters.reduce(
    (acc, ch) => acc + ch.lessons.filter(l => isLessonCompleted(l.id)).length, 
    0
  );

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
          {language === 'hinglish' ? 'EPISTEMIC MASTERY & RETENTION ANALYTICS' : 'EPISTEMIC MASTERY & RETENTION ANALYTICS'}
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
          {language === 'hinglish' ? 'Curriculum Mastery & Memory Retention' : 'Curriculum Mastery & Memory Retention'}
        </h1>
        <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', maxWidth: '680px', lineHeight: 1.6 }}>
          {language === 'hinglish'
            ? 'Aapki learning progress aur FSRS memory stability ka real-time breakdown. Sabhi 26 chapters aur 53 lessons ka calibrated state.'
            : 'Longitudinal progress analytics combining curriculum traversal, cognitive load calibration, and spaced retrieval stability.'}
        </p>
      </div>

      {/* Top 3 Stat Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <div className="sovereign-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>Curriculum Completed</span>
            <BookOpen size={16} color="var(--accent-primary)" />
          </div>
          <div className="font-serif" style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>
            {completedLessons} / {totalLessons}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            {Math.round((completedLessons / totalLessons) * 100)}% of total academy syllabus
          </div>
        </div>

        <div className="sovereign-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>Active Lesson Progress</span>
            <TrendingUp size={16} color="var(--accent-primary)" />
          </div>
          <div className="font-serif" style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>
            {progressPercent}%
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            Current cadence mastery index
          </div>
        </div>

        <div className="sovereign-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>Spaced Reviews Scheduled</span>
            <RotateCcw size={16} color="var(--accent-primary)" />
          </div>
          <div className="font-serif" style={{ fontSize: '1.75rem', fontWeight: 800, color: dueReviewsCount > 0 ? 'var(--accent-primary)' : 'var(--text-main)', marginBottom: '4px' }}>
            {dueReviewsCount} Due
          </div>
          <button
            onClick={() => setReviewModalOpen(true)}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              color: 'var(--accent-primary)',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            Launch Spaced Review Session &rarr;
          </button>
        </div>
      </div>

      {/* Chapters Table */}
      <div className="sovereign-card" style={{ padding: '24px' }}>
        <h2 className="font-serif" style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '16px' }}>
          26-Chapter Curriculum Traversal
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {PRIMARY_COURSE.chapters.map((ch) => {
            const chLessons = ch.lessons;
            const completedCount = chLessons.filter(l => isLessonCompleted(l.id)).length;
            const isAllComplete = completedCount === chLessons.length && chLessons.length > 0;

            return (
              <div 
                key={ch.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-surface-subtle)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {isAllComplete ? (
                    <CheckCircle2 size={16} color="var(--success-text)" />
                  ) : (
                    <div 
                      style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        border: '1.5px solid var(--border-strong)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.625rem',
                        fontWeight: 700,
                        color: 'var(--text-muted)'
                      }}
                    >
                      {ch.number}
                    </div>
                  )}
                  <div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-main)' }}>
                      Chapter {ch.number}: {ch.title}
                    </div>
                    <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                      {chLessons.length} Lessons • {completedCount} verified
                    </div>
                  </div>
                </div>

                <div className="font-mono" style={{ fontSize: '0.75rem', fontWeight: 600, color: isAllComplete ? 'var(--success-text)' : 'var(--text-muted)' }}>
                  {Math.round((completedCount / chLessons.length) * 100)}%
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
