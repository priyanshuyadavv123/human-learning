import React, { useState } from 'react';
import { 
  Sparkles, 
  FlaskConical, 
  Eye, 
  Brain, 
  Flag, 
  Target, 
  Shield, 
  Crown, 
  CheckCircle2, 
  ChevronRight,
  Quote
} from 'lucide-react';
import { useLearning } from '../../context/LearningContext.tsx';
import { PRIMARY_COURSE } from '../../data/courseData.ts';

interface SovereignDashboardProps {
  onOpenLesson: (lessonId?: string) => void;
  onOpenLab: () => void;
}

export const SovereignDashboard: React.FC<SovereignDashboardProps> = ({
  onOpenLesson,
  onOpenLab,
}) => {
  const { currentLesson, progressPercent, language } = useLearning();

  const currentChapter = PRIMARY_COURSE.chapters.find(c => c.id === currentLesson.chapterId) || PRIMARY_COURSE.chapters[0];

  // Daily audit checklist interactive state
  const [auditChecks, setAuditChecks] = useState<Record<string, boolean>>({
    prediction: true,
    monotasking: false,
    retrieval: false,
  });

  const toggleAudit = (key: string) => {
    setAuditChecks(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const completedAudits = Object.values(auditChecks).filter(Boolean).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%', maxWidth: '960px', margin: '0 auto' }}>
      {/* 1. Hero Editorial Card */}
      <section 
        className="sovereign-card"
        style={{
          padding: '36px 36px 32px',
          backgroundColor: 'var(--bg-surface)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-md)',
          position: 'relative',
        }}
      >
        {/* Progress Eyebrow Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
          <span 
            className="font-mono"
            style={{
              fontSize: '0.6875rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              padding: '4px 12px',
              borderRadius: '9999px',
              backgroundColor: 'var(--accent-subtle)',
              color: 'var(--accent-primary)',
              border: '1px solid var(--accent-border)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Sparkles size={12} />
            <span>
              {language === 'hinglish' 
                ? `CURRICULUM PROGRESS: ${progressPercent}% (1 OF 12 WEEKS • 53 LESSONS)` 
                : `CURRICULUM PROGRESS: ${progressPercent}% (1 OF 12 WEEKS)`}
            </span>
          </span>
        </div>

        {/* Master Editorial Quote */}
        <h2 
          className="font-serif"
          style={{
            fontSize: 'clamp(1.85rem, 3.2vw, 2.65rem)',
            fontWeight: 700,
            color: 'var(--text-main)',
            lineHeight: 1.22,
            letterSpacing: '-0.025em',
            marginBottom: '16px',
          }}
        >
          {language === 'hinglish' ? (
            <>
              “Observe clearly. Think independently.<br />
              Understand deeply. Act deliberately.”
            </>
          ) : (
            <>
              “Observe clearly. Think independently.<br />
              Understand deeply. Act deliberately.”
            </>
          )}
        </h2>

        {/* Manifesto / Welcome Text */}
        <p 
          style={{
            fontSize: '1.0625rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            maxWidth: '780px',
            marginBottom: '28px',
          }}
        >
          {language === 'hinglish' ? (
            <>
              Welcome to your personal academy. Asli sovereignty doosron par dominance nahi, balki apne khud ke attention, emotional balance aur strategic choices par deliberate mastery hai.
            </>
          ) : (
            <>
              Welcome to your personal academy. True sovereignty is not the assertion of dominance over others, but the steady mastery of your own attention, emotional equilibrium, and strategic choices.
            </>
          )}
        </p>

        {/* Current Cadence Hardware Container */}
        <div 
          style={{
            padding: '20px 24px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--bg-surface-subtle)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '18px',
          }}
        >
          <div style={{ flex: '1 1 340px' }}>
            <div 
              className="font-mono"
              style={{
                fontSize: '0.6875rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--accent-primary)',
                marginBottom: '6px',
              }}
            >
              CURRENT CADENCE • CHAPTER {currentChapter.number}: {currentChapter.title.toUpperCase()}
            </div>

            {/* Heading 1 for accessibility and test suite alignment */}
            <h1 
              className="font-serif"
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                lineHeight: 1.3,
                marginBottom: '4px',
              }}
            >
              {currentLesson.title}
            </h1>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.45, margin: 0 }}>
              {currentLesson.subtitle}
            </p>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => onOpenLesson(currentLesson.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--accent-primary)',
                color: 'var(--text-on-accent)',
                fontSize: '0.875rem',
                fontWeight: 600,
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent-primary)';
              }}
            >
              <span>{language === 'hinglish' ? 'Continue Lesson (Aage Badho) →' : 'Continue Lesson →'}</span>
            </button>

            <button
              type="button"
              onClick={onOpenLab}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '9px 16px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-main)',
                fontSize: '0.875rem',
                fontWeight: 600,
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-border)';
                e.currentTarget.style.backgroundColor = 'var(--accent-subtle)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.backgroundColor = 'var(--bg-surface)';
              }}
            >
              <FlaskConical size={15} color="var(--accent-primary)" />
              <span>{language === 'hinglish' ? '🧪 Lab' : '🧪 Psychology Lab'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Sovereign Capabilities Matrix */}
      <section>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <h2 
              className="font-serif"
              style={{
                fontSize: '1.45rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                lineHeight: 1.25,
                marginBottom: '4px',
              }}
            >
              {language === 'hinglish' ? 'Sovereign Capabilities (Capabilities Matrix)' : 'Sovereign Capabilities'}
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              Transparent 5-level rubric grounded in verified practice evidence
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenLesson('cognitive-load-schema')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: 'var(--accent-primary)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <span>View Skill Radar</span>
            <ChevronRight size={14} />
          </button>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '12px',
          }}
        >
          {/* Card 1: Observation */}
          <div 
            className="sovereign-card"
            style={{
              padding: '14px 16px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '136px',
            }}
          >
            <div>
              <div 
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--accent-subtle)',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px',
                }}
              >
                <Eye size={17} />
              </div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '2px', lineHeight: 1.2 }}>
                Observation
              </div>
              <div style={{ fontSize: '0.6875rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                Lvl 2
              </div>
            </div>

            <div>
              <div style={{ width: '100%', height: '4px', backgroundColor: 'var(--border-subtle)', borderRadius: '9999px', overflow: 'hidden', marginBottom: '8px' }}>
                <div style={{ width: '55%', height: '100%', backgroundColor: 'var(--accent-primary)' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                <span>44 pts</span>
                <span>3 acts</span>
              </div>
            </div>
          </div>

          {/* Card 2: Psychology & Reasoning */}
          <div 
            className="sovereign-card"
            style={{
              padding: '14px 16px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '136px',
            }}
          >
            <div>
              <div 
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--accent-subtle)',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px',
                }}
              >
                <Brain size={17} />
              </div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '2px', lineHeight: 1.2 }}>
                Psychology & Reasoning
              </div>
              <div style={{ fontSize: '0.6875rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                Lvl 1
              </div>
            </div>

            <div>
              <div style={{ width: '100%', height: '4px', backgroundColor: 'var(--border-subtle)', borderRadius: '9999px', overflow: 'hidden', marginBottom: '8px' }}>
                <div style={{ width: '28%', height: '100%', backgroundColor: 'var(--accent-primary)' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                <span>18 pts</span>
                <span>1 acts</span>
              </div>
            </div>
          </div>

          {/* Card 3: Communication & Schemas */}
          <div 
            className="sovereign-card"
            style={{
              padding: '14px 16px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '136px',
            }}
          >
            <div>
              <div 
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--accent-subtle)',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px',
                }}
              >
                <Flag size={17} />
              </div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '2px', lineHeight: 1.2 }}>
                Communication &...
              </div>
              <div style={{ fontSize: '0.6875rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                Lvl 2
              </div>
            </div>

            <div>
              <div style={{ width: '100%', height: '4px', backgroundColor: 'var(--border-subtle)', borderRadius: '9999px', overflow: 'hidden', marginBottom: '8px' }}>
                <div style={{ width: '45%', height: '100%', backgroundColor: 'var(--accent-primary)' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                <span>36 pts</span>
                <span>2 acts</span>
              </div>
            </div>
          </div>

          {/* Card 4: Power & Strategy */}
          <div 
            className="sovereign-card"
            style={{
              padding: '14px 16px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '136px',
            }}
          >
            <div>
              <div 
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--accent-subtle)',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px',
                }}
              >
                <Target size={17} />
              </div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '2px', lineHeight: 1.2 }}>
                Power & Strategy
              </div>
              <div style={{ fontSize: '0.6875rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                Lvl 3
              </div>
            </div>

            <div>
              <div style={{ width: '100%', height: '4px', backgroundColor: 'var(--border-subtle)', borderRadius: '9999px', overflow: 'hidden', marginBottom: '8px' }}>
                <div style={{ width: '70%', height: '100%', backgroundColor: 'var(--accent-primary)' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                <span>50 pts</span>
                <span>3 acts</span>
              </div>
            </div>
          </div>

          {/* Card 5: Emotional Regulation */}
          <div 
            className="sovereign-card"
            style={{
              padding: '14px 16px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '136px',
            }}
          >
            <div>
              <div 
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--accent-subtle)',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px',
                }}
              >
                <Shield size={17} />
              </div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '2px', lineHeight: 1.2 }}>
                Emotional Regulation
              </div>
              <div style={{ fontSize: '0.6875rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                Lvl 1
              </div>
            </div>

            <div>
              <div style={{ width: '100%', height: '4px', backgroundColor: 'var(--border-subtle)', borderRadius: '9999px', overflow: 'hidden', marginBottom: '8px' }}>
                <div style={{ width: '32%', height: '100%', backgroundColor: 'var(--accent-primary)' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                <span>20 pts</span>
                <span>1 acts</span>
              </div>
            </div>
          </div>

          {/* Card 6: Leadership & Execution */}
          <div 
            className="sovereign-card"
            style={{
              padding: '14px 16px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '136px',
            }}
          >
            <div>
              <div 
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--accent-subtle)',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px',
                }}
              >
                <Crown size={17} />
              </div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '2px', lineHeight: 1.2 }}>
                Leadership & Execution
              </div>
              <div style={{ fontSize: '0.6875rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                Lvl 1
              </div>
            </div>

            <div>
              <div style={{ width: '100%', height: '4px', backgroundColor: 'var(--border-subtle)', borderRadius: '9999px', overflow: 'hidden', marginBottom: '8px' }}>
                <div style={{ width: '18%', height: '100%', backgroundColor: 'var(--accent-primary)' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                <span>12 pts</span>
                <span>0 acts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bottom Row: Epistemological Audit & Sovereign Maxim */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        {/* Daily Epistemological Audit */}
        <div 
          className="sovereign-card"
          style={{
            padding: '24px',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <h3 
              className="font-serif"
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--text-main)',
              }}
            >
              {language === 'hinglish' ? 'Daily Epistemological Audit (Daily Check)' : 'Daily Epistemological Audit'}
            </h3>
            <span 
              className="font-mono"
              style={{
                fontSize: '0.6875rem',
                fontWeight: 700,
                color: 'var(--accent-primary)',
                backgroundColor: 'var(--accent-subtle)',
                padding: '2px 8px',
                borderRadius: '4px',
              }}
            >
              {completedAudits}/3 COMPLETE
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button
              type="button"
              onClick={() => toggleAudit('prediction')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 12px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: auditChecks.prediction ? 'var(--bg-surface-subtle)' : 'transparent',
                border: '1px solid var(--border-subtle)',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <div 
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  border: `1.5px solid ${auditChecks.prediction ? 'var(--accent-primary)' : 'var(--border-strong)'}`,
                  backgroundColor: auditChecks.prediction ? 'var(--accent-primary)' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  flexShrink: 0,
                }}
              >
                {auditChecks.prediction && <CheckCircle2 size={13} />}
              </div>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-main)', fontWeight: 500 }}>
                {language === 'hinglish' 
                  ? 'Active Prediction: Padhne se pehle apna intuition lock kiya' 
                  : 'Active Prediction: Committed intuition before reading explanation'}
              </span>
            </button>

            <button
              type="button"
              onClick={() => toggleAudit('monotasking')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 12px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: auditChecks.monotasking ? 'var(--bg-surface-subtle)' : 'transparent',
                border: '1px solid var(--border-subtle)',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <div 
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  border: `1.5px solid ${auditChecks.monotasking ? 'var(--accent-primary)' : 'var(--border-strong)'}`,
                  backgroundColor: auditChecks.monotasking ? 'var(--accent-primary)' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  flexShrink: 0,
                }}
              >
                {auditChecks.monotasking && <CheckCircle2 size={13} />}
              </div>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-main)', fontWeight: 500 }}>
                {language === 'hinglish' 
                  ? 'Attention Monotasking: 45 min deep focus bina notification distraction ke' 
                  : 'Attention Monotasking: Zero split-attention or task residue'}
              </span>
            </button>

            <button
              type="button"
              onClick={() => toggleAudit('retrieval')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 12px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: auditChecks.retrieval ? 'var(--bg-surface-subtle)' : 'transparent',
                border: '1px solid var(--border-subtle)',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <div 
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  border: `1.5px solid ${auditChecks.retrieval ? 'var(--accent-primary)' : 'var(--border-strong)'}`,
                  backgroundColor: auditChecks.retrieval ? 'var(--accent-primary)' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  flexShrink: 0,
                }}
              >
                {auditChecks.retrieval && <CheckCircle2 size={13} />}
              </div>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-main)', fontWeight: 500 }}>
                {language === 'hinglish' 
                  ? 'Blank-Sheet Recall: Notes dekhe bina core concepts dimag se bahar nikale' 
                  : 'Blank-Sheet Retrieval: Reconstructed schema from memory'}
              </span>
            </button>
          </div>
        </div>

        {/* SOVEREIGN MAXIM Card */}
        <div 
          className="sovereign-card"
          style={{
            padding: '24px',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderLeft: '4px solid var(--accent-primary)',
          }}
        >
          <div>
            <div 
              className="font-mono"
              style={{
                fontSize: '0.6875rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '10px',
              }}
            >
              <Quote size={13} />
              <span>SOVEREIGN MAXIM</span>
            </div>

            <p 
              className="font-serif"
              style={{
                fontSize: '1.1875rem',
                fontStyle: 'italic',
                color: 'var(--text-main)',
                lineHeight: 1.55,
                marginBottom: '12px',
              }}
            >
              {language === 'hinglish' ? (
                <>
                  “Jo vyakti apni working memory bandwidth ko control karta hai, wahi apni destiny control karta hai. Baki sab faltu extraneous shor hai.”
                </>
              ) : (
                <>
                  “He who controls his working memory controls his destiny. Everything else is extraneous noise.”
                </>
              )}
            </p>
          </div>

          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            — Marcus Aurelius & John Sweller Synthesis (Cognitive Load & Schema Construction)
          </div>
        </div>
      </section>
    </div>
  );
};
