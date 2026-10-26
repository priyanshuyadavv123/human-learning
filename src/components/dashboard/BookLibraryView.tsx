import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { useLearning } from '../../context/LearningContext.tsx';

interface MasterBook {
  title: string;
  author: string;
  era: string;
  tag: string;
  coreIdea: string;
  appliedLessonId: string;
  appliedLessonName: string;
}

const CANON_BOOKS: MasterBook[] = [
  {
    title: 'Meditations',
    author: 'Marcus Aurelius',
    era: '180 CE',
    tag: 'Stoic Self-Regulation',
    coreIdea: 'The soul becomes dyed with the color of its thoughts. Deliberate discipline over perception and internal judgment.',
    appliedLessonId: 'how-learning-actually-works',
    appliedLessonName: '1.1 Cognitive Architecture & Perception',
  },
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    era: '2011',
    tag: 'Dual-Process Cognition',
    coreIdea: 'System 1 is fast, automatic, and emotionally charged; System 2 is slow, deliberative, and logical. Mastery requires knowing when to engage System 2.',
    appliedLessonId: 'illusion-of-competence',
    appliedLessonName: '1.2 Illusion of Competence & Fluency',
  },
  {
    title: 'Cognitive Load Theory',
    author: 'John Sweller',
    era: '1988',
    tag: 'Working Memory Limits',
    coreIdea: 'Working memory capacity is strictly bounded. Instructional design and self-directed study must eliminate extraneous load to empower germane schema construction.',
    appliedLessonId: 'cognitive-load-schema',
    appliedLessonName: '1.3 Cognitive Load & Schema Construction',
  },
  {
    title: 'The 48 Laws of Power',
    author: 'Robert Greene',
    era: '1998',
    tag: 'Strategic Psychology',
    coreIdea: 'Observation without projection, emotional detachment under scrutiny, and intentional concealment of intentions to preserve sovereignty.',
    appliedLessonId: 'testing-effect-mechanics',
    appliedLessonName: '1.4 Retrieval Strength & Decoupling',
  },
  {
    title: 'Antifragile',
    author: 'Nassim Nicholas Taleb',
    era: '2012',
    tag: 'Robustness & Stress',
    coreIdea: 'Things that gain from disorder. Cognitive structures must welcome desirable difficulties and calibrated failure signals rather than fragile comfort.',
    appliedLessonId: 'calibrated-error-signals',
    appliedLessonName: '1.6 Calibrated Error Signals & Growth',
  },
  {
    title: 'Surely You\'re Joking, Mr. Feynman!',
    author: 'Richard P. Feynman',
    era: '1985',
    tag: 'First Principles & Deconstruction',
    coreIdea: 'Never fool yourself, and you are the easiest person to fool. Reconstruct knowledge from bedrock principles and explain without jargon.',
    appliedLessonId: 'protege-effect-teaching',
    appliedLessonName: '11.1 The Protégé Effect & Synthesis',
  },
];

export const BookLibraryView: React.FC = () => {
  const { setActiveLessonId, setActiveView, language } = useLearning();

  return (
    <div style={{ padding: '32px 24px', maxWidth: '960px', margin: '0 auto' }}>
      {/* Header */}
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
          {language === 'hinglish' ? 'PHILOSOPHICAL & COGNITIVE CANON' : 'PHILOSOPHICAL & COGNITIVE CANON'}
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
          {language === 'hinglish' ? 'The Sovereign Library' : 'The Sovereign Library'}
        </h1>
        <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', maxWidth: '680px', lineHeight: 1.6 }}>
          {language === 'hinglish'
            ? 'Puraani philosophy aur modern cognitive science ka deep foundation. Ye books human mind, mental models, aur deliberative focus ke bedrock principles hain.'
            : 'The foundational master texts spanning 2,000 years of epistemic philosophy, cognitive psychology, and strategic reasoning. Each book directly anchors a curriculum module.'}
        </p>
      </div>

      {/* Grid of Books */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', 
          gap: '20px' 
        }}
      >
        {CANON_BOOKS.map((book, idx) => (
          <div 
            key={idx}
            className="sovereign-card"
            style={{
              padding: '22px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.18s ease, box-shadow 0.18s ease',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
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
                  {book.tag}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {book.era}
                </span>
              </div>

              <h2 
                className="font-serif"
                style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 700, 
                  color: 'var(--text-main)', 
                  marginBottom: '4px' 
                }}
              >
                {book.title}
              </h2>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--accent-primary)', marginBottom: '12px' }}>
                {book.author}
              </div>

              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
                "{book.coreIdea}"
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '14px', marginTop: '8px' }}>
              <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                Applied in Curriculum:
              </div>
              <button
                onClick={() => {
                  setActiveLessonId(book.appliedLessonId);
                  setActiveView('curriculum');
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '7px 10px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-surface-subtle)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--accent-primary)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  <BookOpen size={13} />
                  <span>{book.appliedLessonName}</span>
                </div>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
