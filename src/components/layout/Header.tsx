import React from 'react';
import { 
  PanelLeft, 
  Sparkles, 
  Sun, 
  Moon, 
  BookOpen, 
  CheckCircle2,
  Compass,
  FlaskConical
} from 'lucide-react';
import { useLearning } from '../../context/LearningContext.tsx';
import { PRIMARY_COURSE } from '../../data/courseData.ts';

export const Header: React.FC = () => {
  const { 
    theme, 
    toggleTheme, 
    language,
    setLanguage,
    isLeftSidebarOpen, 
    toggleLeftSidebar, 
    isTutorOpen, 
    toggleTutor,
    progressPercent,
    lessonState,
    currentLesson,
    activeView,
    setActiveView,
    setActiveLessonId,
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: 'var(--text-main)' }}>
            <BookOpen size={16} color="var(--accent-primary)" />
            <span style={{ letterSpacing: '-0.01em' }}>Human Learning</span>
          </div>
          <span style={{ color: 'var(--border-strong)' }} className="nav-course-sub">/</span>
          <span style={{ color: 'var(--text-muted)' }} className="nav-course-sub">
            Ch {currentChapter?.number || 1}: {currentChapter?.title || 'Architecture'}
          </span>
          <span style={{ color: 'var(--border-strong)' }}>/</span>
          <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>
            Lesson {currentLesson.number}
          </span>
        </div>
      </div>

      {/* Center: View Switcher Capsule (Overview / Lesson / Lab) */}
      <div 
        className="top-view-capsule"
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'var(--bg-surface-subtle)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '9999px',
          padding: '2px',
          gap: '2px',
        }}
      >
        <button
          type="button"
          onClick={() => setActiveView('overview')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            padding: '4px 10px',
            borderRadius: '9999px',
            border: 'none',
            backgroundColor: activeView === 'overview' ? 'var(--bg-surface)' : 'transparent',
            color: activeView === 'overview' ? 'var(--accent-primary)' : 'var(--text-muted)',
            boxShadow: activeView === 'overview' ? 'var(--shadow-sm)' : 'none',
            fontSize: '0.75rem',
            fontWeight: activeView === 'overview' ? 700 : 500,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
          aria-pressed={activeView === 'overview'}
        >
          <Compass size={13} />
          <span>Overview</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveView('curriculum')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            padding: '4px 10px',
            borderRadius: '9999px',
            border: 'none',
            backgroundColor: activeView === 'curriculum' ? 'var(--bg-surface)' : 'transparent',
            color: activeView === 'curriculum' ? 'var(--accent-primary)' : 'var(--text-muted)',
            boxShadow: activeView === 'curriculum' ? 'var(--shadow-sm)' : 'none',
            fontSize: '0.75rem',
            fontWeight: activeView === 'curriculum' ? 700 : 500,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
          aria-pressed={activeView === 'curriculum'}
        >
          <BookOpen size={13} />
          <span>Lesson</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setActiveLessonId('cognitive-load-schema');
            setActiveView('lab');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            padding: '4px 10px',
            borderRadius: '9999px',
            border: 'none',
            backgroundColor: activeView === 'lab' ? 'var(--bg-surface)' : 'transparent',
            color: activeView === 'lab' ? 'var(--accent-primary)' : 'var(--text-muted)',
            boxShadow: activeView === 'lab' ? 'var(--shadow-sm)' : 'none',
            fontSize: '0.75rem',
            fontWeight: activeView === 'lab' ? 700 : 500,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
          aria-pressed={activeView === 'lab'}
        >
          <FlaskConical size={13} />
          <span>Lab</span>
        </button>
      </div>

      {/* Right side: Progress, Language, Theme, AI Tutor Toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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
                  width: '50px',
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

        {/* Bilingual Engine Capsule Toggle (ElysiaCode Style) */}
        <div
          className="pill-group top-lang-pill-group"
          aria-label="Language selector"
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'var(--bg-surface-subtle)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '9999px',
            padding: '2px',
            gap: '2px',
          }}
        >
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`pill-btn lang-btn ${language === 'en' ? 'active' : ''}`}
            aria-pressed={language === 'en'}
            aria-label="Switch language to English"
            title="Switch language to English"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 9px',
              borderRadius: '9999px',
              border: 'none',
              backgroundColor: language === 'en' ? 'var(--bg-surface)' : 'transparent',
              color: language === 'en' ? 'var(--accent-primary)' : 'var(--text-muted)',
              boxShadow: language === 'en' ? 'var(--shadow-sm)' : 'none',
              fontSize: '0.75rem',
              fontWeight: language === 'en' ? 700 : 500,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <span>🇬🇧</span>
            <span>English</span>
          </button>

          <button
            type="button"
            onClick={() => setLanguage('hinglish')}
            className={`pill-btn lang-btn ${language === 'hinglish' ? 'active' : ''}`}
            aria-pressed={language === 'hinglish'}
            aria-label="Switch language to Hinglish"
            title="Switch language to Hinglish"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 9px',
              borderRadius: '9999px',
              border: 'none',
              backgroundColor: language === 'hinglish' ? 'var(--bg-surface)' : 'transparent',
              color: language === 'hinglish' ? 'var(--accent-primary)' : 'var(--text-muted)',
              boxShadow: language === 'hinglish' ? 'var(--shadow-sm)' : 'none',
              fontSize: '0.75rem',
              fontWeight: language === 'hinglish' ? 700 : 500,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <span>🇮🇳</span>
            <span>Hinglish</span>
          </button>
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
            fontWeight: 600,
            transition: 'all 0.15s ease',
          }}
        >
          <Sparkles size={14} color={isTutorOpen ? 'var(--accent-primary)' : 'var(--text-muted)'} />
          <span className="nav-tutor-label">
            Tutor
          </span>
        </button>
      </div>
    </header>
  );
};
