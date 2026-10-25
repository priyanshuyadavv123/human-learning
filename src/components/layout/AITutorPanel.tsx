import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  HelpCircle, 
  BookMarked, 
  Lightbulb, 
  X, 
  ShieldCheck,
  RotateCcw,
  Bot,
  Zap,
  Loader2
} from 'lucide-react';
import { useLearning } from '../../context/LearningContext.tsx';
import { 
  TUTOR_PROMPTS, 
  type TutorKnowledgeEntry 
} from '../../data/tutorKnowledge.ts';
import { 
  checkTutorHealth, 
  queryTutor, 
  type ChatHistoryItem,
  type TutorHealthStatus 
} from '../../services/tutorService.ts';
import type { ConceptId, CognitiveMisconceptionId } from '../../types/memory.ts';

interface DialogueMessage {
  id: string;
  sender: 'user' | 'tutor';
  text?: string;
  tutorPayload?: TutorKnowledgeEntry;
  sourceMode?: 'live' | 'fallback';
  modelUsed?: string;
  notice?: string;
  timestamp: string;
}

let globalMsgId = 1;

function generateMsgId(prefix: string): string {
  globalMsgId += 1;
  return `${prefix}-${globalMsgId}`;
}

function isConceptDue(nextReviewDueAt: string): boolean {
  const dueMs = Date.parse(nextReviewDueAt);
  return !Number.isNaN(dueMs) && dueMs <= Date.now();
}

export const AITutorPanel: React.FC = () => {
  const { isTutorOpen, setTutorOpen, learnerMemory, activeLessonId, currentLesson } = useLearning();
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [healthStatus, setHealthStatus] = useState<TutorHealthStatus>({
    online: false,
    hasKey: false,
    model: 'openai/gpt-oss-120b',
    mode: 'fallback',
  });

  const [messages, setMessages] = useState<DialogueMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'tutor',
      sourceMode: 'fallback',
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

  useEffect(() => {
    let isMounted = true;
    checkTutorHealth().then((status) => {
      if (isMounted) {
        setHealthStatus(status);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const handleSend = async (queryText: string) => {
    const trimmed = queryText.trim();
    if (!trimmed || isLoading) return;

    const userMsg: DialogueMessage = {
      id: generateMsgId('user'),
      sender: 'user',
      text: trimmed,
      timestamp: 'Just now',
    };

    // Build bounded history from prior dialogue turns
    const history: ChatHistoryItem[] = messages
      .slice(-8)
      .map(m => ({
        role: m.sender === 'user' ? ('user' as const) : ('model' as const),
        text: m.sender === 'user' ? (m.text || '') : (m.tutorPayload?.detailedResponse || ''),
      }))
      .filter(h => h.text.trim().length > 0);

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const activeMisconceptions: string[] = [];
      const dueConceptIds: string[] = [];

      if (learnerMemory?.conceptStates) {
        for (const [cId, state] of Object.entries(learnerMemory.conceptStates)) {
          if (state.activeMisconceptions && state.activeMisconceptions.length > 0) {
            activeMisconceptions.push(...state.activeMisconceptions);
          }
          if (isConceptDue(state.nextReviewDueAt)) {
            dueConceptIds.push(cId);
          }
        }
      }

      const learnerContext = {
        activeMisconceptions: Array.from(new Set(activeMisconceptions)).slice(0, 2) as CognitiveMisconceptionId[],
        dueConceptIds: dueConceptIds.slice(0, 2) as ConceptId[],
        recentOutcome: learnerMemory?.delayedReviews?.slice(-1)[0]?.evaluatedOutcome,
      };

      const result = await queryTutor(trimmed, history, activeLessonId, learnerContext);

      const tutorMsg: DialogueMessage = {
        id: generateMsgId('tutor'),
        sender: 'tutor',
        tutorPayload: result.entry,
        sourceMode: result.mode,
        modelUsed: result.model,
        notice: result.notice,
        timestamp: 'Just now',
      };

      setMessages(prev => [...prev, tutorMsg]);

      // If we received a live response, update our current health status indicator
      if (result.mode === 'live' && !healthStatus.hasKey) {
        setHealthStatus(prev => ({ ...prev, hasKey: true, mode: 'live' }));
      }
    } catch {
      // Emergency catch if client code threw unexpectedly
      const fallbackMsg: DialogueMessage = {
        id: generateMsgId('tutor-err'),
        sender: 'tutor',
        sourceMode: 'fallback',
        tutorPayload: {
          keywords: [],
          title: 'Curriculum Guidance',
          summary: 'Cognitive principles guidance.',
          takeaway: 'Focus on the five core mechanisms: Attention, Working Memory, Schemas, Retrieval, and Feedback.',
          detailedResponse: 'A temporary network interruption occurred. Please re-check your query or review the corresponding lesson section above.',
          socraticChallenge: 'How would you explain the core mechanism of retrieval practice in your own words?',
          referencedSection: 'Lesson 1.1 • Overview of Cognitive Architecture',
        },
        timestamp: 'Just now',
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendRef = React.useRef(handleSend);
  useEffect(() => {
    handleSendRef.current = handleSend;
  });

  useEffect(() => {
    const handleInquiry = (event: Event) => {
      const customEvent = event as CustomEvent<{ question: string }>;
      if (customEvent.detail?.question) {
        handleSendRef.current(customEvent.detail.question);
      }
    };

    window.addEventListener('human_learning_tutor_inquiry', handleInquiry);
    return () => {
      window.removeEventListener('human_learning_tutor_inquiry', handleInquiry);
    };
  }, []);

  const handleResetChat = () => {
    setMessages([
      {
        id: generateMsgId('welcome-reset'),
        sender: 'tutor',
        sourceMode: healthStatus.mode,
        tutorPayload: {
          keywords: [],
          title: 'Socratic Session Reset',
          summary: 'Ready for new inquiries regarding cognitive architecture.',
          takeaway: 'Session reset. Select a quick inquiry above or ask any question about the five learning mechanisms.',
          detailedResponse: 'You can explore the ~4-chunk working memory ceiling, how sleep consolidates schemas, or why active retrieval outperforms rereading.',
          socraticChallenge: 'How does your current learning strategy prevent the illusion of competence?',
          referencedSection: 'Lesson 1.1 • Cognitive Architecture Overview',
        },
        timestamp: 'Reset',
      },
    ]);
  };

  const isLiveMode = healthStatus.hasKey;

  if (!isTutorOpen) {
    return null;
  }

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
                backgroundColor: isLiveMode ? 'var(--success-bg)' : 'var(--accent-subtle)',
                border: `1px solid ${isLiveMode ? 'var(--success-border)' : 'var(--accent-border)'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isLiveMode ? 'var(--success-text)' : 'var(--accent-primary)',
              }}
            >
              {isLiveMode ? <Zap size={14} /> : <Sparkles size={14} />}
            </div>
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-main)', lineHeight: 1.2 }}>
                AI Learning Companion
              </div>
              <div 
                style={{ 
                  fontSize: '0.6875rem', 
                  color: isLiveMode ? 'var(--success-text)' : 'var(--accent-primary)', 
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span 
                  style={{ 
                    width: '6px', 
                    height: '6px', 
                    borderRadius: '50%', 
                    backgroundColor: isLiveMode ? 'var(--success-text)' : 'var(--accent-primary)',
                    display: 'inline-block' 
                  }} 
                />
                {isLiveMode ? `Live AI (${healthStatus.model})` : 'Local Socratic Mode'}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <button
              onClick={handleResetChat}
              title="Reset conversation"
              aria-label="Reset conversation"
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
              aria-label="Dismiss tutor panel"
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

        {/* Status & Disclosure Banner */}
        <div 
          style={{
            padding: '8px 12px',
            backgroundColor: isLiveMode ? 'var(--success-bg)' : 'var(--bg-surface-well)',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.6875rem',
            color: isLiveMode ? 'var(--success-text)' : 'var(--text-secondary)',
            lineHeight: 1.35,
          }}
        >
          {isLiveMode ? (
            <Bot size={14} color="var(--success-text)" style={{ flexShrink: 0 }} />
          ) : (
            <ShieldCheck size={14} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
          )}
          <div>
            {isLiveMode ? (
              <span><strong>Live AI Connected:</strong> Multi-turn Socratic responses powered by Groq and grounded in Lesson {currentLesson.number} syllabus.</span>
            ) : (
              <span><strong>Local Socratic Mode:</strong> Grounded in Lesson {currentLesson.number} syllabus. Configure <code>GROQ_API_KEY</code> in <code>.env</code> for live AI.</span>
            )}
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
                disabled={isLoading}
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
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  opacity: isLoading ? 0.6 : 1,
                }}
                onMouseEnter={(e) => {
                  if (isLoading) return;
                  e.currentTarget.style.borderColor = 'var(--accent-border)';
                  e.currentTarget.style.backgroundColor = 'var(--accent-subtle)';
                  e.currentTarget.style.color = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  if (isLoading) return;
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

        {/* Message Stream */}
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

            const isLiveMsg = msg.sourceMode === 'live';

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
                {/* Header: Concept Title & Source Tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    <Lightbulb size={14} color="var(--accent-primary)" />
                    <span>{p.title}</span>
                  </div>

                  <span 
                    style={{
                      fontSize: '0.625rem',
                      fontWeight: 600,
                      padding: '2px 6px',
                      borderRadius: '4px',
                      backgroundColor: isLiveMsg ? 'var(--success-bg)' : 'var(--bg-surface)',
                      color: isLiveMsg ? 'var(--success-text)' : 'var(--text-muted)',
                      border: `1px solid ${isLiveMsg ? 'var(--success-border)' : 'var(--border-subtle)'}`,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {isLiveMsg ? `Live AI (${msg.modelUsed || 'Groq'})` : 'Local Knowledge'}
                  </span>
                </div>

                {/* Optional Fallback Notice Banner */}
                {msg.notice && (
                  <div 
                    style={{
                      padding: '4px 8px',
                      borderRadius: '4px',
                      backgroundColor: 'var(--bg-surface-well)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.6875rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.3,
                    }}
                  >
                    ℹ {msg.notice}
                  </div>
                )}

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
                    <span>Curriculum Anchor: {p.referencedSection}</span>
                  </div>
                )}
              </div>
            );
          })}

          {/* Thinking / Loading State Indicator */}
          {isLoading && (
            <div 
              style={{
                alignSelf: 'flex-start',
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                backgroundColor: 'var(--bg-surface-subtle)',
                border: '1px dashed var(--accent-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--accent-primary)',
                fontSize: '0.8125rem',
                fontWeight: 600,
              }}
            >
              <Loader2 size={16} className="animate-spin" />
              <span>Reflecting on cognitive architecture...</span>
            </div>
          )}
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
              disabled={isLoading}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={isLoading ? 'Tutor is reflecting...' : 'Ask about memory, attention, or retrieval...'}
              aria-label="Ask AI Tutor"
              style={{
                flex: 1,
                border: 'none',
                background: 'transparent',
                fontSize: '0.8125rem',
                outline: 'none',
                padding: '6px 0',
                opacity: isLoading ? 0.6 : 1,
              }}
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isLoading}
              aria-label="Submit inquiry"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '28px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: inputText.trim() && !isLoading ? 'var(--accent-primary)' : 'var(--border-subtle)',
                color: 'var(--text-on-accent)',
                transition: 'background-color 0.15s ease',
                cursor: !inputText.trim() || isLoading ? 'not-allowed' : 'pointer',
              }}
            >
              <Send size={13} />
            </button>
          </form>
          <div style={{ fontSize: '0.625rem', color: 'var(--text-muted)', marginTop: '4px', textAlign: 'center' }}>
            {isLiveMode ? 'Powered by Groq • Do not submit sensitive personal data' : 'Grounded in cognitive science syllabus • Local Mode Active'}
          </div>
        </div>
      </aside>
    </>
  );
};
