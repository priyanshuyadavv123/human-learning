import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronRight, 
  CheckCircle2, 
  Lock, 
  BookOpen, 
  X
} from 'lucide-react';
import { useLearning } from '../../context/LearningContext.tsx';
import { PRIMARY_COURSE } from '../../data/courseData.ts';

export const SidebarNav: React.FC = () => {
  const { 
    isLeftSidebarOpen, 
    setLeftSidebarOpen,
    activeLessonId, 
    setActiveLessonId, 
    lessonState,
    progressPercent
  } = useLearning();

  // Keep track of which chapters are expanded
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({
    'ch-1-architecture': true,
    'ch-2-retrieval-spacing': false,
    'ch-3-deliberate-practice': false,
  });

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters(prev => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  if (!isLeftSidebarOpen) {
    return null;
  }

  return (
    <>
      {/* Mobile Backdrop */}
      <div 
        className="sidebar-backdrop"
        onClick={() => setLeftSidebarOpen(false)}
        style={{
          display: 'none',
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 45,
        }}
      />

      <aside
        className="workspace-sidebar"
        style={{
          width: '280px',
          height: 'calc(100vh - 56px)',
          backgroundColor: 'var(--bg-surface)',
          borderRight: '1px solid var(--border-subtle)',
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
          overflowY: 'auto',
          position: 'sticky',
          top: '56px',
          zIndex: 46,
        }}
      >
        {/* Course Header */}
        <div 
          style={{ 
            padding: '16px 16px 12px', 
            borderBottom: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-surface-subtle)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span 
              className="font-mono"
              style={{ 
                fontSize: '0.6875rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.08em', 
                color: 'var(--accent-primary)',
                fontWeight: 600
              }}
            >
              Curriculum Syllabus
            </span>
            <button
              onClick={() => setLeftSidebarOpen(false)}
              className="mobile-close-sidebar-btn"
              style={{ display: 'none', color: 'var(--text-muted)' }}
              aria-label="Close sidebar"
            >
              <X size={16} />
            </button>
          </div>
          <h2 
            style={{ 
              fontSize: '0.9375rem', 
              fontWeight: 700, 
              color: 'var(--text-main)', 
              lineHeight: 1.3,
              marginBottom: '4px'
            }}
          >
            {PRIMARY_COURSE.title}
          </h2>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
            {PRIMARY_COURSE.subtitle}
          </p>
        </div>

        {/* Chapters & Lessons Tree */}
        <div style={{ flex: 1, padding: '12px 8px', overflowY: 'auto' }}>
          {PRIMARY_COURSE.chapters.map((chapter) => {
            const isExpanded = !!expandedChapters[chapter.id];

            return (
              <div key={chapter.id} style={{ marginBottom: '10px' }}>
                {/* Chapter Heading Toggle: Readable & Clear */}
                <button
                  onClick={() => toggleChapter(chapter.id)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    padding: '8px 10px',
                    borderRadius: 'var(--radius-sm)',
                    textAlign: 'left',
                    transition: 'background-color 0.12s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-surface-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <div style={{ flex: 1, paddingRight: '8px' }}>
                    <div 
                      className="font-mono"
                      style={{ 
                        fontSize: '0.625rem', 
                        fontWeight: 700, 
                        color: 'var(--accent-primary)', 
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '2px',
                      }}
                    >
                      Chapter {chapter.number}
                    </div>
                    <div 
                      style={{ 
                        fontSize: '0.8125rem', 
                        fontWeight: 600, 
                        color: 'var(--text-main)',
                        lineHeight: 1.35,
                      }}
                    >
                      {chapter.title}
                    </div>
                  </div>
                  <div style={{ marginTop: '4px', color: 'var(--text-muted)' }}>
                    {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  </div>
                </button>

                {/* Lesson List */}
                {isExpanded && (
                  <div style={{ marginLeft: '12px', paddingLeft: '8px', borderLeft: '1px solid var(--border-subtle)', marginTop: '4px' }}>
                    {chapter.lessons.map((lesson) => {
                      const isActive = activeLessonId === lesson.id;
                      const isComplete = lesson.id === 'how-learning-actually-works' && lessonState.isCompleted;

                      if (!lesson.isAvailable) {
                        // Clean, quiet locked lesson row without badge clutter
                        return (
                          <div
                            key={lesson.id}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              padding: '6px 10px',
                              fontSize: '0.8125rem',
                              color: 'var(--text-muted)',
                              opacity: 0.65,
                              userSelect: 'none',
                            }}
                          >
                            <Lock size={12} style={{ flexShrink: 0 }} />
                            <span style={{ lineHeight: 1.35, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {lesson.number} {lesson.title}
                            </span>
                          </div>
                        );
                      }

                      // Active / Available Lesson
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => setActiveLessonId(lesson.id)}
                          style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                            padding: '8px 10px',
                            borderRadius: 'var(--radius-sm)',
                            marginBottom: '2px',
                            textAlign: 'left',
                            backgroundColor: isActive ? 'var(--accent-subtle)' : 'transparent',
                            border: isActive ? '1px solid var(--accent-border)' : '1px solid transparent',
                            color: isActive ? 'var(--accent-primary)' : 'var(--text-main)',
                            transition: 'all 0.12s ease',
                            cursor: 'pointer',
                          }}
                          onMouseEnter={(e) => {
                            if (!isActive) {
                              e.currentTarget.style.backgroundColor = 'var(--bg-surface-hover)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isActive) {
                              e.currentTarget.style.backgroundColor = 'transparent';
                            }
                          }}
                        >
                          <div style={{ marginTop: '2px', flexShrink: 0 }}>
                            {isComplete ? (
                              <CheckCircle2 size={14} color="var(--success-text)" />
                            ) : (
                              <div 
                                style={{
                                  width: '14px',
                                  height: '14px',
                                  borderRadius: '50%',
                                  border: `1.5px solid ${isActive ? 'var(--accent-primary)' : 'var(--border-strong)'}`,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                {isActive && (
                                  <div 
                                    style={{
                                      width: '6px',
                                      height: '6px',
                                      borderRadius: '50%',
                                      backgroundColor: 'var(--accent-primary)',
                                    }}
                                  />
                                )}
                              </div>
                            )}
                          </div>

                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div 
                              style={{ 
                                fontSize: '0.8125rem', 
                                fontWeight: isActive ? 600 : 500,
                                lineHeight: 1.35,
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                              }}
                            >
                              {lesson.number} {lesson.title}
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
                              <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                                {lesson.readingTimeMinutes} min
                              </span>
                              {isActive && !isComplete && (
                                <span 
                                  className="font-mono"
                                  style={{
                                    fontSize: '0.6875rem',
                                    color: 'var(--accent-primary)',
                                    fontWeight: 600,
                                  }}
                                >
                                  {progressPercent}%
                                </span>
                              )}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Workspace Footer Info */}
        <div 
          style={{ 
            padding: '12px 16px', 
            borderTop: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-surface-subtle)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
            <BookOpen size={13} color="var(--accent-primary)" />
            <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>Phase 1 Core Curriculum</span>
          </div>
          <p style={{ lineHeight: 1.35 }}>
            Evidence-grounded learning manual.
          </p>
        </div>
      </aside>
    </>
  );
};
