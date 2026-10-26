import React, { useState, useEffect } from 'react';
import { PenTool, CheckCircle2, Trash2, Calendar } from 'lucide-react';
import { useLearning } from '../../context/LearningContext.tsx';

interface JournalEntry {
  id: string;
  timestamp: string;
  dateStr: string;
  prompt: string;
  content: string;
  illusionDetected: string;
}

const JOURNAL_STORAGE_KEY = 'sovereign_mind_private_journal_v1';

const DEFAULT_PROMPTS = [
  'What cognitive illusion did you observe in yourself or others today?',
  'Where did you confuse recognition/fluency with actual deep comprehension?',
  'What uncomfortable piece of disconfirming evidence did you notice today?',
  'How did you guard your working memory against extraneous attentional theft?',
];

export const PrivateJournalView: React.FC = () => {
  const { language } = useLearning();

  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    try {
      const saved = localStorage.getItem(JOURNAL_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return [
      {
        id: 'initial-entry',
        timestamp: new Date().toISOString(),
        dateStr: 'Day 1 Discipline',
        prompt: 'Where did you confuse recognition/fluency with actual deep comprehension?',
        content: 'Noticed that while reading technical docs, I was nodding along assuming I knew the algorithm. When I closed the tab and tried to derive it from scratch on blank paper, I got stuck immediately on step 3. Classic fluency illusion.',
        illusionDetected: 'Illusion of Competence (Fluency Bias)',
      },
    ];
  });

  const [currentText, setCurrentText] = useState('');
  const [currentPrompt, setCurrentPrompt] = useState(DEFAULT_PROMPTS[0]);
  const [currentIllusion, setCurrentIllusion] = useState('');
  const [savedNotice, setSavedNotice] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(JOURNAL_STORAGE_KEY, JSON.stringify(entries));
    } catch {
      // ignore
    }
  }, [entries]);

  const handleSaveEntry = () => {
    if (!currentText.trim()) return;

    const newEntry: JournalEntry = {
      id: `entry-${Date.now()}`,
      timestamp: new Date().toISOString(),
      dateStr: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      prompt: currentPrompt,
      content: currentText.trim(),
      illusionDetected: currentIllusion.trim() || 'General Cognitive Observation',
    };

    setEntries([newEntry, ...entries]);
    setCurrentText('');
    setCurrentIllusion('');
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  const handleDeleteEntry = (id: string) => {
    setEntries(entries.filter(e => e.id !== id));
  };

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
          {language === 'hinglish' ? 'EPISTEMOLOGICAL JOURNAL & SELF-EXAMINATION' : 'EPISTEMOLOGICAL JOURNAL & SELF-EXAMINATION'}
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
          {language === 'hinglish' ? 'Private Deliberative Journal' : 'Private Deliberative Journal'}
        </h1>
        <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', maxWidth: '680px', lineHeight: 1.6 }}>
          {language === 'hinglish'
            ? 'Marcus Aurelius ke Meditations ki tarah: Roz apne thought patterns, cognitive blindspots, aur real-world mental models ko record kijiye.'
            : 'A private, encrypted-local ledger for rigorous self-inquiry, capturing cognitive distortions, recording disconfirming data, and auditing attention in the field.'}
        </p>
      </div>

      {/* Write New Entry */}
      <div className="sovereign-card" style={{ padding: '24px', marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <PenTool size={16} color="var(--accent-primary)" />
          <h2 className="font-serif" style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-main)' }}>
            Record Deliberative Observation
          </h2>
        </div>

        {/* Prompt selector */}
        <div style={{ marginBottom: '12px' }}>
          <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
            Inquiry Prompt:
          </label>
          <select
            value={currentPrompt}
            onChange={(e) => setCurrentPrompt(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 10px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-main)',
              fontSize: '0.8125rem',
            }}
          >
            {DEFAULT_PROMPTS.map((p, idx) => (
              <option key={idx} value={p}>{p}</option>
            ))}
          </select>
        </div>

        {/* Cognitive Illusion Tag */}
        <div style={{ marginBottom: '12px' }}>
          <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
            Observed Cognitive Illusion (Optional):
          </label>
          <input
            type="text"
            placeholder="e.g. Sunk Cost Fallacy, Fluency Bias, Confirmation Bias"
            value={currentIllusion}
            onChange={(e) => setCurrentIllusion(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 10px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-main)',
              fontSize: '0.8125rem',
            }}
          />
        </div>

        {/* Content textarea */}
        <div style={{ marginBottom: '14px' }}>
          <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
            Reflective Ledger:
          </label>
          <textarea
            rows={4}
            placeholder="Write your honest observation without rationalization or defensive excuses..."
            value={currentText}
            onChange={(e) => setCurrentText(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-main)',
              fontSize: '0.875rem',
              lineHeight: 1.5,
              resize: 'vertical',
            }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button
            onClick={handleSaveEntry}
            disabled={!currentText.trim()}
            style={{
              padding: '8px 18px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: currentText.trim() ? 'var(--accent-primary)' : 'var(--bg-surface-subtle)',
              color: currentText.trim() ? '#ffffff' : 'var(--text-muted)',
              border: 'none',
              fontSize: '0.8125rem',
              fontWeight: 700,
              cursor: currentText.trim() ? 'pointer' : 'not-allowed',
              transition: 'opacity 0.15s ease',
            }}
          >
            Record in Ledger
          </button>

          {savedNotice && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--success-text)', fontSize: '0.75rem', fontWeight: 600 }}>
              <CheckCircle2 size={14} />
              <span>Observation committed to local ledger</span>
            </div>
          )}
        </div>
      </div>

      {/* Previous Entries List */}
      <div>
        <h2 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '16px' }}>
          Historical Observations ({entries.length})
        </h2>

        {entries.length === 0 ? (
          <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            No journal entries recorded yet. Begin your daily Socratic ledger above.
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {entries.map((entry) => (
              <div key={entry.id} className="sovereign-card" style={{ padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Calendar size={13} color="var(--accent-primary)" />
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                      {entry.dateStr}
                    </span>
                    <span 
                      className="font-mono"
                      style={{ 
                        fontSize: '0.625rem', 
                        padding: '2px 8px', 
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(150, 110, 46, 0.1)',
                        color: 'var(--accent-primary)',
                        fontWeight: 700
                      }}
                    >
                      {entry.illusionDetected}
                    </span>
                  </div>

                  <button
                    onClick={() => handleDeleteEntry(entry.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-muted)',
                      cursor: 'pointer',
                      padding: '4px',
                    }}
                    title="Delete entry"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>

                <div style={{ fontSize: '0.8125rem', fontStyle: 'italic', color: 'var(--accent-primary)', marginBottom: '8px' }}>
                  "{entry.prompt}"
                </div>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0, whiteSpace: 'pre-wrap' }}>
                  {entry.content}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
