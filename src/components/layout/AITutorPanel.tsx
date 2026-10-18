import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  HelpCircle, 
  BookMarked, 
  Lightbulb, 
  X, 
  ShieldCheck,
  RotateCcw
} from 'lucide-react';
import { useLearning } from '../../context/LearningContext.tsx';
import { 
  TUTOR_PROMPTS, 
  findTutorAnswer, 
  type TutorKnowledgeEntry 
} from '../../data/tutorKnowledge.ts';

interface DialogueMessage {
  id: string;
  sender: 'user' | 'tutor';
  text?: string;
  tutorPayload?: TutorKnowledgeEntry;
  timestamp: string;
}

let globalMsgId = 1;

function generateMsgId(prefix: string): string {
  globalMsgId += 1;
  return `${prefix}-${globalMsgId}`;
}

export const AITutorPanel: React.FC = () => {
  const { isTutorOpen, setTutorOpen } = useLearning();
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<DialogueMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'tutor',
      tutorPayload: {
        keywords: [],
        title: 'Socratic Learning Companion',
        summary: 'I am here to test your understanding and unpack the 5 mechanisms of human learning.',
        takeaway: 'Welcome to Lesson 1.1! Ask any question about attention, working memory limits, retrieval practice, or prediction errors.',
        detailedResponse: 'While you explore the text and interactive exercises, I can clarify cognitive science concepts, dissect the difference between biological facts and pedagogical models, or challenge your assumptions with Socratic questions.',
        socraticChallenge: 'Before reading further: When you struggle to remember a fact, do you view that struggle as a failure or as the active moment of learning?',
        referencedSection: 'Lesson 1.1 • Curiosity Hook',
      },
      timestamp: 'Ready',
    },
  ]);

  if (!isTutorOpen) {
    return null;
  }

  const handleSend = (queryText: string) => {
    if (!queryText.trim()) return;

    const userMsg: DialogueMessage = {
      id: generateMsgId('user'),
      sender: 'user',
      text: queryText.trim(),
      timestamp: 'Just now',
    };

    const answer = findTutorAnswer(queryText.trim());
    const tutorMsg: DialogueMessage = {
      id: generateMsgId('tutor'),
      sender: 'tutor',
      tutorPayload: answer,
      timestamp: 'Just now',
    };

    setMessages(prev => [...prev, userMsg, tutorMsg]);
    setInputText('');
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: generateMsgId('welcome-reset'),
        sender: 'tutor',
        tutorPayload: {
          keywords: [],
          title: 'Socratic Session Reset',
          summary: 'Ready for new inquiries regarding cognitive architecture.',
          takeaway: 'Session reset. Select a quick inquiry above or ask any question about the five learning mechanisms.',
          detailedResponse: 'You can explore the ~4-chunk working memory ceiling, how sleep consolidates schemas, or why active retrieval outperforms rereading.',
          socraticChallenge: 'How does your current learning strategy prevent the illusion of competence?',
          referencedSection: 'Lesson 1.1 • Cognitive Architecture',
        },
        timestamp: 'Reset',
      },
    ]);
  };

  return (
    <>
      {/* Mobile Backdrop */}
      <div 
        className="tutor-backdrop"
        onClick={() => setTutorOpen(false)}
        style={{
          display: 'none',
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 45,
        }}
      />

      <aside
        className="workspace-tutor-panel"
        style={{
          width: '340px',
          height: 'calc(100vh - 56px)',
          backgroundColor: 'var(--bg-surface)',
          borderLeft: '1px solid var(--border-subtle)',
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
          position: 'sticky',
          top: '56px',
          zIndex: 46,
        }}
      >
        {/* Tutor Header */}
        <div 
          style={{ 
            padding: '12px 16px', 
            borderBottom: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-surface-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div 
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '6px',
                backgroundColor: 'var(--accent-subtle)',
                border: '1px solid var(--accent-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-primary)',
              }}
            >
              <Sparkles size={14} />
            </div>
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-main)', lineHeight: 1.2 }}>
                AI Learning Companion
              </div>
              <div style={{ fontSize: '0.6875rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                Phase 1 Contextual Socratic Mode
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <button
              onClick={handleResetChat}
              title="Reset conversation"
              style={{
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text-muted)',
              }}
            >
              <RotateCcw size={14} />
            </button>
            <button
              onClick={() => setTutorOpen(false)}
              title="Close tutor panel"
              style={{
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text-muted)',
              }}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Honest Disclosure Banner: Scannable & Compact */}
        <div 
          style={{
            padding: '8px 12px',
            backgroundColor: 'var(--bg-surface-well)',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.6875rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.35,
          }}
        >
          <ShieldCheck size={14} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
          <div>
            <strong>Local Socratic Mode:</strong> Grounded in Lesson 1.1 syllabus. Server-side LLM connects in Phase 2.
          </div>
        </div>

        {/* Quick Inquiry Prompts */}
        <div 
          style={{ 
            padding: '10px 14px', 
            borderBottom: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-surface)',
          }}
        >
          <div 
            style={{ 
              fontSize: '0.6875rem', 
              fontWeight: 600, 
              color: 'var(--text-muted)', 
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: '6px' 
            }}
          >
            Quick Inquiries
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {TUTOR_PROMPTS.map(p => (
              <button
                key={p.id}
                onClick={() => handleSend(p.query)}
                style={{
                  fontSize: '0.6875rem',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--bg-surface-subtle)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-main)',
                  fontWeight: 500,
                  transition: 'all 0.15s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-border)';
                  e.currentTarget.style.backgroundColor = 'var(--accent-subtle)';
                  e.currentTarget.style.color = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.backgroundColor = 'var(--bg-surface-subtle)';
                  e.currentTarget.style.color = 'var(--text-main)';
                }}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Message Stream: Scannable with Key Takeaways */}
        <div 
          style={{ 
            flex: 1, 
            padding: '14px', 
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {messages.map(msg => {
            if (msg.sender === 'user') {
              return (
                <div 
                  key={msg.id}
                  style={{
                    alignSelf: 'flex-end',
                    maxWidth: '85%',
                    padding: '8px 12px',
                    borderRadius: '10px 10px 2px 10px',
                    backgroundColor: 'var(--accent-primary)',
                    color: 'var(--text-on-accent)',
                    fontSize: '0.8125rem',
                    lineHeight: 1.4,
                  }}
                >
                  {msg.text}
                </div>
              );
            }

            const p = msg.tutorPayload;
            if (!p) return null;

            return (
              <div 
                key={msg.id}
                style={{
                  alignSelf: 'flex-start',
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-surface-subtle)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                {/* Concept Title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  <Lightbulb size={14} color="var(--accent-primary)" />
                  <span>{p.title}</span>
                </div>

                {/* Instant Scannable Takeaway */}
                {p.takeaway && (
                  <div 
                    style={{
                      padding: '8px 10px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--accent-subtle)',
                      borderLeft: '3px solid var(--accent-primary)',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: 'var(--accent-primary)',
                      lineHeight: 1.45,
                    }}
                  >
                    {p.takeaway}
                  </div>
                )}

                {/* Mechanism Explanation */}
                <p style={{ fontSize: '0.78125rem', color: 'var(--text-secondary)', lineHeight: 1.5, whiteSpace: 'pre-line' }}>
                  {p.detailedResponse}
                </p>

                {/* Socratic Challenge Callout */}
                {p.socraticChallenge && (
                  <div 
                    style={{
                      padding: '8px 10px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--warning-bg)',
                      border: '1px solid var(--warning-border)',
                      fontSize: '0.75rem',
                      color: 'var(--warning-text)',
                      lineHeight: 1.4,
                    }}
                  >
                    <strong>Socratic Reflection:</strong> {p.socraticChallenge}
                  </div>
                )}

                {/* Grounding Source */}
                {p.referencedSection && (
                  <div 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '4px', 
                      fontSize: '0.6875rem', 
                      color: 'var(--text-muted)',
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '6px',
                      marginTop: '2px',
                    }}
                  >
                    <BookMarked size={12} />
                    <span>{p.referencedSection}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Input Bar */}
        <div 
          style={{ 
            padding: '12px 14px', 
            borderTop: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-surface)',
          }}
        >
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(inputText);
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'var(--bg-surface-subtle)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '4px 8px 4px 12px',
            }}
          >
            <HelpCircle size={15} color="var(--text-muted)" />
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about memory, attention, or retrieval..."
              aria-label="Ask AI Tutor"
              style={{
                flex: 1,
                border: 'none',
                background: 'transparent',
                fontSize: '0.8125rem',
                outline: 'none',
                padding: '6px 0',
              }}
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              aria-label="Submit inquiry"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '28px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: inputText.trim() ? 'var(--accent-primary)' : 'var(--border-subtle)',
                color: 'var(--text-on-accent)',
                transition: 'background-color 0.15s ease',
              }}
            >
              <Send size={13} />
            </button>
          </form>
          <div style={{ fontSize: '0.625rem', color: 'var(--text-muted)', marginTop: '4px', textAlign: 'center' }}>
            Press Enter to submit • Grounded in cognitive science curriculum
          </div>
        </div>
      </aside>
    </>
  );
};
