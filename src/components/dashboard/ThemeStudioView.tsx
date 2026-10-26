import React from 'react';
import { Sun, Moon, CheckCircle2 } from 'lucide-react';
import { useLearning } from '../../context/LearningContext.tsx';

export const ThemeStudioView: React.FC = () => {
  const { theme, toggleTheme, language } = useLearning();

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
          {language === 'hinglish' ? 'VISUAL PALETTE & TYPOGRAPHY STUDIO' : 'VISUAL PALETTE & TYPOGRAPHY STUDIO'}
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
          {language === 'hinglish' ? 'Sovereign Theme Studio' : 'Sovereign Theme Studio'}
        </h1>
        <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', maxWidth: '680px', lineHeight: 1.6 }}>
          {language === 'hinglish'
            ? 'Academy of Reason ka visual architecture. Classical Ivory Grid ya Dark Obsidian focus mode chuniye.'
            : 'Configure your reading atmosphere. Built on mathematical grid proportions, optical kerning, and low-fatigue contrast ratios.'}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {/* Ivory Paper Grid Card */}
        <div 
          className="sovereign-card" 
          style={{ 
            padding: '24px',
            border: theme === 'light' ? '2px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
            position: 'relative'
          }}
        >
          {theme === 'light' && (
            <div style={{ position: 'absolute', top: '16px', right: '16px', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-primary)', fontSize: '0.75rem', fontWeight: 700 }}>
              <CheckCircle2 size={16} />
              <span>Active</span>
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <Sun size={18} color="var(--accent-primary)" />
            <h2 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>
              Ivory Paper Grid
            </h2>
          </div>

          <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
            Warm archival parchment tone (#F7F4EB) with subtle 26px architectural grid lines. Inspired by 19th-century scientific manuscripts and Renaissance ateliers.
          </p>

          <button
            onClick={() => { if (theme !== 'light') toggleTheme(); }}
            style={{
              width: '100%',
              padding: '8px 14px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: theme === 'light' ? 'var(--accent-primary)' : 'var(--bg-surface-subtle)',
              color: theme === 'light' ? '#ffffff' : 'var(--text-main)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.8125rem',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            {theme === 'light' ? 'Active Setting' : 'Switch to Ivory Grid'}
          </button>
        </div>

        {/* Dark Obsidian Focus Card */}
        <div 
          className="sovereign-card" 
          style={{ 
            padding: '24px',
            border: theme === 'dark' ? '2px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
            position: 'relative'
          }}
        >
          {theme === 'dark' && (
            <div style={{ position: 'absolute', top: '16px', right: '16px', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-primary)', fontSize: '0.75rem', fontWeight: 700 }}>
              <CheckCircle2 size={16} />
              <span>Active</span>
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <Moon size={18} color="var(--accent-primary)" />
            <h2 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>
              Dark Obsidian
            </h2>
          </div>

          <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
            Deep night slate (#131210) with muted antique gold highlights. Designed for nocturnal focus sessions to eliminate photoreceptor fatigue.
          </p>

          <button
            onClick={() => { if (theme !== 'dark') toggleTheme(); }}
            style={{
              width: '100%',
              padding: '8px 14px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: theme === 'dark' ? 'var(--accent-primary)' : 'var(--bg-surface-subtle)',
              color: theme === 'dark' ? '#ffffff' : 'var(--text-main)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.8125rem',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            {theme === 'dark' ? 'Active Setting' : 'Switch to Dark Obsidian'}
          </button>
        </div>
      </div>
    </div>
  );
};
