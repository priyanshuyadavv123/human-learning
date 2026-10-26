import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronRight, 
  CheckCircle2, 
  Lock, 
  BookOpen, 
  X,
  Compass,
  Library,
  FlaskConical,
  Scale,
  Mic,
  PenTool,
  Award,
  Palette,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { useLearning, type ActiveView } from '../../context/LearningContext.tsx';
import { PRIMARY_COURSE } from '../../data/courseData.ts';

export const SidebarNav: React.FC = () => {
  const { 
    isLeftSidebarOpen, 
    setLeftSidebarOpen,
    activeLessonId, 
    setActiveLessonId, 
    isLessonCompleted,
    progressPercent,
    dueReviewsCount,
    setReviewModalOpen,
    exportMemoryJson,
    resetMemory,
    activeView,
    setActiveView,
    setTutorOpen,
  } = useLearning();

  // 12-Week Academy Accordion expansion state
  const [isAcademyExpanded, setIsAcademyExpanded] = useState<boolean>(true);

  // User overrides for chapter expansion
  const [collapsedOverrides, setCollapsedOverrides] = useState<Record<string, boolean>>({});

  const toggleChapter = (chapterId: string) => {
    setCollapsedOverrides(prev => {
      const isCurrentlyExpanded = prev[chapterId] !== undefined
        ? !prev[chapterId]
        : PRIMARY_COURSE.chapters.find(c => c.id === chapterId)?.lessons.some(l => l.id === activeLessonId) || chapterId === 'ch-1-architecture';
      return {
        ...prev,
        [chapterId]: isCurrentlyExpanded,
      };
    });
  };

  const handleSelectNav = (view: ActiveView) => {
    setActiveView(view);
    if (view === 'lab') {
      setActiveLessonId('cognitive-load-schema');
    }
  };

  const handleToggleFocusMode = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  if (!isLeftSidebarOpen) {
    return null;
  }

  const navItems: Array<{ id: ActiveView; label: string; icon: React.ReactNode; badge?: string }> = [
    { id: 'overview', label: 'Overview', icon: <Compass size={16} /> },
    { id: 'library', label: 'Book Library', icon: <Library size={16} />, badge: '6' },
    { id: 'lab', label: 'Psychology Lab', icon: <FlaskConical size={16} />, badge: 'Live' },
    { id: 'strategy', label: 'Power & Strategy', icon: <Scale size={16} /> },
    { id: 'voice', label: 'Voice & Charisma', icon: <Mic size={16} /> },
    { id: 'journal', label: 'Private Journal', icon: <PenTool size={16} /> },
    { id: 'mastery', label: 'Progress & Mastery', icon: <Award size={16} />, badge: `${progressPercent}%` },
    { id: 'themes', label: 'Theme Studio', icon: <Palette size={16} /> },
  ];

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
          width: '286px',
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
        {/* Brand Header — The Sovereign Mind */}
        <div 
          style={{ 
            padding: '16px 16px 14px', 
            borderBottom: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-surface-subtle)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div 
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(150, 110, 46, 0.12)',
                  border: '1px solid rgba(150, 110, 46, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-primary)',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
                }}
              >
                ✦
              </div>
              <div>
                <span 
                  className="font-serif"
                  style={{ 
                    fontSize: '0.8125rem', 
                    letterSpacing: '0.12em', 
                    color: 'var(--text-main)',
                    fontWeight: 800,
                    display: 'block',
                    lineHeight: 1.1
                  }}
                >
                  THE SOVEREIGN MIND
                </span>
                <span 
                  style={{ 
                    fontSize: '0.5625rem', 
                    letterSpacing: '0.14em', 
                    color: 'var(--accent-primary)',
                    fontWeight: 600,
                    textTransform: 'uppercase'
                  }}
                >
                  Academy of Reason
                </span>
              </div>
            </div>
            <button
              onClick={() => setLeftSidebarOpen(false)}
              className="mobile-close-sidebar-btn"
              style={{ display: 'none', color: 'var(--text-muted)' }}
              aria-label="Close sidebar"
            >
              <X size={16} />
            </button>
          </div>

          {/* Badges row: Discipline & Theme */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '2px 8px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(180, 140, 60, 0.12)',
                border: '1px solid rgba(180, 140, 60, 0.3)',
                fontSize: '0.625rem',
                fontWeight: 600,
                color: 'var(--accent-primary)',
              }}
            >
              <span>🔥 5 Day Discipline</span>
            </div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '2px 8px',
                borderRadius: '9999px',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.5625rem',
                fontWeight: 700,
                color: 'var(--text-muted)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase'
              }}
            >
              IVORY
            </div>
          </div>
        </div>

        {/* Primary Navigation List */}
        <div style={{ padding: '8px 10px 4px', borderBottom: '1px solid var(--border-subtle)' }}>
          {/* Overview button */}
          <button
            onClick={() => handleSelectNav('overview')}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 10px',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '3px',
              backgroundColor: activeView === 'overview' ? 'var(--accent-subtle)' : 'transparent',
              border: activeView === 'overview' ? '1px solid var(--accent-border)' : '1px solid transparent',
              color: activeView === 'overview' ? 'var(--accent-primary)' : 'var(--text-main)',
              fontWeight: activeView === 'overview' ? 700 : 500,
              fontSize: '0.8125rem',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.15s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Compass size={16} color={activeView === 'overview' ? 'var(--accent-primary)' : 'var(--text-muted)'} />
              <span>Overview</span>
            </div>
            <span style={{ fontSize: '0.625rem', opacity: 0.7 }}>Home</span>
          </button>

          {/* 12-Week Academy (Curriculum Accordion Header) */}
          <button
            onClick={() => {
              setIsAcademyExpanded(!isAcademyExpanded);
              if (activeView !== 'curriculum') {
                setActiveView('curriculum');
              }
            }}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 10px',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '3px',
              backgroundColor: activeView === 'curriculum' ? 'var(--accent-subtle)' : 'transparent',
              border: activeView === 'curriculum' ? '1px solid var(--accent-border)' : '1px solid transparent',
              color: activeView === 'curriculum' ? 'var(--accent-primary)' : 'var(--text-main)',
              fontWeight: activeView === 'curriculum' ? 700 : 500,
              fontSize: '0.8125rem',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.15s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BookOpen size={16} color={activeView === 'curriculum' ? 'var(--accent-primary)' : 'var(--text-muted)'} />
              <span>12-Week Academy</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span 
                className="font-mono"
                style={{ 
                  fontSize: '0.625rem', 
                  padding: '1px 5px', 
                  borderRadius: '4px', 
                  backgroundColor: 'var(--bg-surface-subtle)',
                  color: 'var(--accent-primary)',
                  fontWeight: 600
                }}
              >
                53
              </span>
              {isAcademyExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            </div>
          </button>
        </div>

        {/* Chapters & Lessons Tree (Expanded when 12-Week Academy is open) */}
        {isAcademyExpanded && (
          <div style={{ padding: '8px 6px', borderBottom: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-surface-subtle)', maxHeight: '360px', overflowY: 'auto' }}>
            <div style={{ padding: '4px 8px 6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                {PRIMARY_COURSE.title}
              </span>
              <span className="font-mono" style={{ fontSize: '0.625rem', color: 'var(--text-muted)' }}>
                26 Ch • 53 Lessons
              </span>
            </div>

            {PRIMARY_COURSE.chapters.map((chapter) => {
              const isDefaultExpanded = chapter.id === 'ch-1-architecture' || chapter.lessons.some(l => l.id === activeLessonId);
              const isExpanded = collapsedOverrides[chapter.id] !== undefined ? !collapsedOverrides[chapter.id] : isDefaultExpanded;

              return (
                <div key={chapter.id} style={{ marginBottom: '6px' }}>
                  {/* Chapter Heading Toggle */}
                  <button
                    onClick={() => toggleChapter(chapter.id)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      padding: '6px 8px',
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
                    <div style={{ flex: 1, paddingRight: '6px' }}>
                      <div 
                        className="font-mono"
                        style={{ 
                          fontSize: '0.5625rem', 
                          fontWeight: 700, 
                          color: 'var(--accent-primary)', 
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          marginBottom: '1px',
                        }}
                      >
                        Chapter {chapter.number}
                      </div>
                      <div 
                        style={{ 
                          fontSize: '0.75rem', 
                          fontWeight: 600, 
                          color: 'var(--text-main)',
                          lineHeight: 1.3,
                        }}
                      >
                        {chapter.title}
                      </div>
                    </div>
                    <div style={{ marginTop: '2px', color: 'var(--text-muted)' }}>
                      {isExpanded ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
                    </div>
                  </button>

                  {/* Lesson List */}
                  {isExpanded && (
                    <div style={{ marginLeft: '10px', paddingLeft: '6px', borderLeft: '1px solid var(--border-subtle)', marginTop: '2px' }}>
                      {chapter.lessons.map((lesson) => {
                        const isActive = activeLessonId === lesson.id && activeView === 'curriculum';
                        const isComplete = isLessonCompleted(lesson.id);

                        if (!lesson.isAvailable) {
                          return (
                            <div
                              key={lesson.id}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                padding: '4px 8px',
                                fontSize: '0.75rem',
                                color: 'var(--text-muted)',
                                opacity: 0.65,
                                userSelect: 'none',
                              }}
                            >
                              <Lock size={11} style={{ flexShrink: 0 }} />
                              <span style={{ lineHeight: 1.3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {lesson.number} {lesson.title}
                              </span>
                            </div>
                          );
                        }

                        return (
                          <button
                            key={lesson.id}
                            onClick={() => {
                              setActiveLessonId(lesson.id);
                              setActiveView('curriculum');
                            }}
                            style={{
                              width: '100%',
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '6px',
                              padding: '5px 8px',
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
                                <CheckCircle2 size={13} color="var(--success-text)" />
                              ) : (
                                <div 
                                  style={{
                                    width: '12px',
                                    height: '12px',
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
                                        width: '5px',
                                        height: '5px',
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
                                  fontSize: '0.75rem', 
                                  fontWeight: isActive ? 600 : 500,
                                  lineHeight: 1.3,
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                }}
                              >
                                {lesson.number} {lesson.title}
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
        )}

        {/* Secondary Modules Navigation List */}
        <div style={{ flex: 1, padding: '6px 10px', overflowY: 'auto' }}>
          {navItems.filter(item => item.id !== 'overview').map((item) => {
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectNav(item.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '7px 10px',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '2px',
                  backgroundColor: isActive ? 'var(--accent-subtle)' : 'transparent',
                  border: isActive ? '1px solid var(--accent-border)' : '1px solid transparent',
                  color: isActive ? 'var(--accent-primary)' : 'var(--text-main)',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '0.8125rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.12s ease',
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)' }}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span 
                    className="font-mono"
                    style={{
                      fontSize: '0.625rem',
                      padding: '1px 6px',
                      borderRadius: '9999px',
                      backgroundColor: isActive ? 'var(--accent-primary)' : 'var(--bg-surface-subtle)',
                      color: isActive ? '#ffffff' : 'var(--text-secondary)',
                      fontWeight: 600,
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom Actions & Spaced Reviews */}
        <div 
          style={{ 
            padding: '12px 14px', 
            borderTop: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-surface-subtle)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          {/* Consult Sovereign Tutor Button */}
          <button
            onClick={() => setTutorOpen(true)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '7px 12px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--accent-primary)',
              color: '#ffffff',
              border: 'none',
              fontSize: '0.75rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              transition: 'opacity 0.15s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
          >
            <Sparkles size={13} />
            <span>Consult Sovereign Tutor</span>
          </button>

          {/* Enter Focus Mode Button */}
          <button
            onClick={handleToggleFocusMode}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <Maximize2 size={13} />
            <span>Enter Focus Mode</span>
          </button>

          {/* Spaced Review Due Button */}
          <button
            onClick={() => setReviewModalOpen(true)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '5px 8px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: dueReviewsCount > 0 ? 'var(--accent-subtle)' : 'transparent',
              border: `1px solid ${dueReviewsCount > 0 ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
              color: dueReviewsCount > 0 ? 'var(--accent-primary)' : 'var(--text-muted)',
              fontSize: '0.6875rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <span>{dueReviewsCount > 0 ? `● ${dueReviewsCount} Spaced Review${dueReviewsCount > 1 ? 's' : ''}` : 'Spaced Recall Review'}</span>
            <span>&rarr;</span>
          </button>

          {/* Export & Reset Links */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2px', fontSize: '0.6875rem' }}>
            <button
              onClick={() => {
                const json = exportMemoryJson();
                const blob = new Blob([json], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `sovereign-mind-memory-${new Date().toISOString().slice(0, 10)}.json`;
                a.click();
                URL.revokeObjectURL(url);
              }}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                color: 'var(--accent-primary)',
                fontSize: '0.6875rem',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Export Memory
            </button>
            <span style={{ color: 'var(--border-subtle)' }}>•</span>
            <button
              onClick={() => {
                if (window.confirm('Reset your scheduled spaced retrieval reviews? Lesson completion checkmarks will remain intact.')) {
                  resetMemory();
                }
              }}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                color: 'var(--text-muted)',
                fontSize: '0.6875rem',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Reset Schedule
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
