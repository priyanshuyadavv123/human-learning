import React from 'react';
import { 
  PanelLeft, 
  Sparkles, 
  Sun, 
  Moon, 
  BookOpen, 
  CheckCircle2 
} from 'lucide-react';
import { useLearning } from '../../context/LearningContext.tsx';
import { PRIMARY_COURSE } from '../../data/courseData.ts';

export const Header: React.FC = () => {
  const { 
    theme, 
    toggleTheme, 
    isLeftSidebarOpen, 
    toggleLeftSidebar, 
    isTutorOpen, 
    toggleTutor,
    progressPercent,
    lessonState,
    currentLesson,
  } = useLearning();

  const currentChapter = PRIMARY_COURSE.chapters.find(c => c.id === currentLesson.chapterId);

  return (
    <header 
      style={{
        height: '56px',
        borderBottom: '1px solid var(--border-subtle)',
        backgroundColor: 'var(--bg-surface)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        position: 'sticky',
        top: 0,
        zIndex: 40,
      }}
    >
      {/* Left side: Navigation toggles & breadcrumbs */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          onClick={toggleLeftSidebar}
          aria-label={isLeftSidebarOpen ? "Collapse navigation" : "Expand navigation"}
          title={isLeftSidebarOpen ? "Collapse sidebar (Cmd/Ctrl + B)" : "Expand sidebar"}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '34px',
            height: '34px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
            backgroundColor: isLeftSidebarOpen ? 'var(--bg-surface-subtle)' : 'transparent',
            color: 'var(--text-main)',
            transition: 'all 0.15s ease',
          }}
        >
          <PanelLeft size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: 'var(--text-main)' }}>
            <BookOpen size={16} color="var(--accent-primary)" />
            <span style={{ letterSpacing: '-0.01em' }}>Human Learning</span>
          </div>
          <span style={{ color: 'var(--border-strong)' }} className="nav-course-sub">/</span>
          <span style={{ color: 'var(--text-muted)' }} className="nav-course-sub">
            Ch {currentChapter?.number || 1}: {currentChapter?.title || 'Architecture'}
          </span>
          <span style={{ color: 'var(--border-strong)' }}>/</span>
          <span style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>
            Lesson {currentLesson.number}
          </span>
        </div>
      </div>

      {/* Right side: Progress, Theme, AI Tutor Toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Progress pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 10px',
            borderRadius: '9999px',
            backgroundColor: lessonState.isCompleted ? 'var(--success-bg)' : 'var(--bg-surface-subtle)',
            border: `1px solid ${lessonState.isCompleted ? 'var(--success-border)' : 'var(--border-subtle)'}`,
            fontSize: '0.75rem',
            fontWeight: 600,
            color: lessonState.isCompleted ? 'var(--success-text)' : 'var(--text-secondary)',
          }}
        >
          {lessonState.isCompleted ? (
            <>
              <CheckCircle2 size={13} color="var(--success-text)" />
              <span>Complete</span>
            </>
          ) : (
            <>
              <div 
                style={{
                  width: '60px',
                  height: '5px',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--border-subtle)',
                  overflow: 'hidden',
                }}
              >
                <div 
                  style={{
                    width: `${progressPercent}%`,
                    height: '100%',
                    backgroundColor: 'var(--accent-primary)',
                    transition: 'width 0.3s ease',
                  }}
                />
              </div>
              <span className="font-mono">{progressPercent}%</span>
            </>
          )}
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '34px',
            height: '34px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
            backgroundColor: 'transparent',
            color: 'var(--text-secondary)',
            transition: 'all 0.15s ease',
          }}
        >
          {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
        </button>

        {/* AI Tutor toggle */}
        <button
          onClick={toggleTutor}
          aria-label={isTutorOpen ? "Close AI Tutor panel" : "Open AI Tutor panel"}
          title={isTutorOpen ? "Hide AI Tutor" : "Show AI Tutor"}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            height: '34px',
            padding: '0 10px',
            borderRadius: 'var(--radius-sm)',
            border: `1px solid ${isTutorOpen ? 'var(--accent-border)' : 'var(--border-subtle)'}`,
            backgroundColor: isTutorOpen ? 'var(--accent-subtle)' : 'transparent',
            color: isTutorOpen ? 'var(--accent-primary)' : 'var(--text-main)',
            fontSize: '0.8125rem',
            fontWeight: 500,
            transition: 'all 0.15s ease',
          }}
        >
          <Sparkles size={15} color={isTutorOpen ? 'var(--accent-primary)' : 'var(--text-muted)'} />
          <span style={{ display: 'none', smDisplay: 'inline' } as React.CSSProperties} className="nav-tutor-label">
            AI Tutor
          </span>
        </button>
      </div>
    </header>
  );
};
