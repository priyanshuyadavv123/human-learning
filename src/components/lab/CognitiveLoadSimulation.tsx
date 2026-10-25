import React, { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCcw, 
  AlertTriangle, 
  Layers, 
  Info, 
  ArrowRight, 
  BrainCircuit, 
  MessageSquarePlus 
} from 'lucide-react';
import { useLearning } from '../../context/LearningContext.tsx';

interface SimulationItem {
  id: string;
  name: string;
  category: 'auth' | 'database' | 'network' | 'concurrency';
  chunkId: string;
  chunkName: string;
}

const RAW_STREAM_ITEMS: SimulationItem[] = [
  { id: 'item-1', name: 'HTTP 504 Timeout', category: 'network', chunkId: 'chunk-net', chunkName: 'Network Gateway Tier' },
  { id: 'item-2', name: 'TCP Retransmit Spike', category: 'network', chunkId: 'chunk-net', chunkName: 'Network Gateway Tier' },
  { id: 'item-3', name: 'DB Connection Starvation', category: 'database', chunkId: 'chunk-db', chunkName: 'Database Persistence Tier' },
  { id: 'item-4', name: 'Unindexed Table Scan', category: 'database', chunkId: 'chunk-db', chunkName: 'Database Persistence Tier' },
  { id: 'item-5', name: 'Lock Contention Wait', category: 'database', chunkId: 'chunk-db', chunkName: 'Database Persistence Tier' },
  { id: 'item-6', name: 'Bcrypt Hash Iterations 100k', category: 'auth', chunkId: 'chunk-auth', chunkName: 'Cryptographic Auth Tier' },
  { id: 'item-7', name: 'JWT Signature Verification', category: 'auth', chunkId: 'chunk-auth', chunkName: 'Cryptographic Auth Tier' },
  { id: 'item-8', name: 'Race Condition in Mutex', category: 'concurrency', chunkId: 'chunk-concur', chunkName: 'Concurrency Control Tier' },
  { id: 'item-9', name: 'Deadlocked Worker Threads', category: 'concurrency', chunkId: 'chunk-concur', chunkName: 'Concurrency Control Tier' },
  { id: 'item-10', name: 'Context Switch CPU Tax', category: 'concurrency', chunkId: 'chunk-concur', chunkName: 'Concurrency Control Tier' },
];

export const CognitiveLoadSimulation: React.FC = () => {
  const [targetCount, setTargetCount] = useState<number>(4);
  const [isChunked, setIsChunked] = useState<boolean>(false);
  const [streamIndex, setStreamIndex] = useState<number>(4);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Stepping timer when auto-playing
  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;
    if (isPlaying) {
      timer = setInterval(() => {
        setStreamIndex((prev) => {
          if (prev >= targetCount) {
            setIsPlaying(false);
            return targetCount;
          }
          return prev + 1;
        });
      }, 700);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, targetCount]);

  const activeItems = RAW_STREAM_ITEMS.slice(0, streamIndex);

  // Chunking calculation
  const uniqueChunks = Array.from(new Set(activeItems.map((i) => i.chunkId)));
  const slotsUsed = isChunked ? uniqueChunks.length : activeItems.length;
  const maxSlots = 4;
  const isOverloaded = slotsUsed > maxSlots;
  const overflowCount = isOverloaded ? slotsUsed - maxSlots : 0;

  const { setTutorOpen } = useLearning();

  const handleReset = () => {
    setIsPlaying(false);
    setStreamIndex(1);
  };

  const handleStep = () => {
    if (streamIndex < targetCount) {
      setStreamIndex((prev) => prev + 1);
    }
  };

  const handleRunAll = () => {
    setStreamIndex(0);
    setIsPlaying(true);
  };

  const handleAskTutor = (prompt: string) => {
    setTutorOpen(true);
    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent('human_learning_tutor_inquiry', {
          detail: { question: prompt },
        })
      );
    }, 60);
  };

  return (
    <section 
      aria-labelledby="simulation-heading"
      style={{
        marginBottom: '32px',
        padding: '24px',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      {/* Simulation Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <span 
          className="font-mono"
          style={{
            fontSize: '0.6875rem',
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: '4px',
            backgroundColor: 'var(--accent-subtle)',
            color: 'var(--accent-primary)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          Visual Experiment 1.1
        </span>
        <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
          Interactive Working Memory Bottleneck Simulator
        </span>
      </div>

      <h2 
        id="simulation-heading"
        className="font-serif"
        style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: 'var(--text-main)',
          lineHeight: 1.25,
          marginBottom: '8px',
        }}
      >
        The Conscious Processing Bottleneck: Observe Cognitive Overflow
      </h2>

      <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '20px' }}>
        Conscious human working memory is biologically constrained to simultaneously holding roughly <strong>~3 to 4 novel information elements</strong> (Cowan, 2001). Configure the stream volume below and toggle between raw element processing and structured schema chunking to observe the attentional bottleneck in real time.
      </p>

      {/* Control Console */}
      <div 
        style={{
          padding: '16px',
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--bg-surface-subtle)',
          border: '1px solid var(--border-subtle)',
          marginBottom: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        {/* Stream Size Selector */}
        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>
            Select Information Item Volume (Element Interactivity):
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {[
              { count: 2, label: '2 Items (Low Load)', desc: 'Comfortable within buffer' },
              { count: 4, label: '4 Items (Cowan Limit)', desc: 'Exact capacity threshold' },
              { count: 7, label: '7 Items (Miller Metric)', desc: 'Cognitive strain starts' },
              { count: 10, label: '10 Items (Severe Overload)', desc: 'Attentional collapse' },
            ].map((option) => (
              <button
                key={option.count}
                type="button"
                onClick={() => {
                  setTargetCount(option.count);
                  setStreamIndex(option.count);
                  setIsPlaying(false);
                }}
                style={{
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.8125rem',
                  fontWeight: targetCount === option.count ? 700 : 500,
                  backgroundColor: targetCount === option.count ? 'var(--accent-primary)' : 'var(--bg-surface)',
                  color: targetCount === option.count ? 'var(--text-on-accent)' : 'var(--text-main)',
                  border: targetCount === option.count ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Chunking / Schema Organization Mode */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', paddingTop: '10px', borderTop: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-main)' }}>
              Mental Organization Mode:
            </span>
            <button
              type="button"
              onClick={() => setIsChunked(!isChunked)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 12px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                backgroundColor: isChunked ? 'var(--success-bg)' : 'var(--bg-surface)',
                color: isChunked ? 'var(--success-text)' : 'var(--text-secondary)',
                border: isChunked ? '1.5px solid var(--success-border)' : '1px solid var(--border-subtle)',
                cursor: 'pointer',
              }}
            >
              <Layers size={14} />
              <span>{isChunked ? '✓ Schema Chunking Active (Expert Lens)' : 'Raw Fragmented Elements (Novice Lens)'}</span>
            </button>
          </div>

          {/* Stream Stepper Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              type="button"
              onClick={handleRunAll}
              disabled={isPlaying}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '5px 12px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.75rem',
                fontWeight: 600,
                backgroundColor: 'var(--accent-subtle)',
                color: 'var(--accent-primary)',
                border: '1px solid var(--accent-border)',
                cursor: isPlaying ? 'not-allowed' : 'pointer',
                opacity: isPlaying ? 0.6 : 1,
              }}
            >
              <Play size={12} />
              <span>Stream Incoming</span>
            </button>

            <button
              type="button"
              onClick={handleStep}
              disabled={streamIndex >= targetCount || isPlaying}
              style={{
                padding: '5px 10px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.75rem',
                fontWeight: 500,
                backgroundColor: 'var(--bg-surface)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-subtle)',
                cursor: streamIndex >= targetCount || isPlaying ? 'not-allowed' : 'pointer',
                opacity: streamIndex >= targetCount || isPlaying ? 0.5 : 1,
              }}
            >
              + Step 1 Item
            </button>

            <button
              type="button"
              onClick={handleReset}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '5px 8px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
              title="Reset simulator"
            >
              <RotateCcw size={12} />
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>

      {/* Visual Workspace: Working Memory Slots vs Overflow */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) 280px',
          gap: '16px',
          marginBottom: '20px',
        }}
        className="simulation-workspace-grid"
      >
        {/* Left Column: 4 Conscious Working Memory Slots */}
        <div
          style={{
            padding: '16px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: isOverloaded ? 'var(--bg-surface-subtle)' : 'var(--bg-surface-well)',
            border: isOverloaded ? '1.5px solid var(--danger-border)' : '1px solid var(--border-subtle)',
            transition: 'all 0.2s ease',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <BrainCircuit size={16} color="var(--accent-primary)" />
              <strong style={{ fontSize: '0.875rem', color: 'var(--text-main)' }}>
                Working Memory Slots (~4-Chunk Biological Buffer)
              </strong>
            </div>
            <span 
              className="font-mono"
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: '4px',
                backgroundColor: isOverloaded ? 'var(--danger-bg)' : 'var(--success-bg)',
                color: isOverloaded ? 'var(--danger-text)' : 'var(--success-text)',
                border: `1px solid ${isOverloaded ? 'var(--danger-border)' : 'var(--success-border)'}`,
              }}
            >
              {slotsUsed} / {maxSlots} SLOTS {isOverloaded ? '[SATURATED]' : '[NORMAL]'}
            </span>
          </div>

          {/* 4 Physical Slot Containers */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
            {[0, 1, 2, 3].map((slotIdx) => {
              if (isChunked) {
                // In chunked mode, display schema chunks
                const chunkId = uniqueChunks[slotIdx];
                const chunkItems = chunkId ? activeItems.filter(i => i.chunkId === chunkId) : [];
                const hasChunk = chunkItems.length > 0;

                return (
                  <div
                    key={slotIdx}
                    style={{
                      minHeight: '80px',
                      padding: '10px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: hasChunk ? 'var(--success-bg)' : 'var(--bg-surface)',
                      border: hasChunk ? '1.5px solid var(--success-border)' : '1px dashed var(--border-strong)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <span className="font-mono" style={{ fontSize: '0.625rem', color: 'var(--text-muted)' }}>
                        SLOT {slotIdx + 1}
                      </span>
                      {hasChunk && (
                        <span 
                          style={{ 
                            fontSize: '0.625rem', 
                            fontWeight: 700, 
                            color: 'var(--success-text)', 
                            backgroundColor: 'var(--bg-surface)', 
                            padding: '1px 6px', 
                            borderRadius: '3px' 
                          }}
                        >
                          SCHEMA CHUNK (x{chunkItems.length})
                        </span>
                      )}
                    </div>

                    {hasChunk ? (
                      <div>
                        <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--success-text)', marginBottom: '4px' }}>
                          {chunkItems[0]?.chunkName}
                        </div>
                        <div style={{ fontSize: '0.6875rem', color: 'var(--text-secondary)' }}>
                          {chunkItems.map(i => i.name).join(' • ')}
                        </div>
                      </div>
                    ) : (
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontStyle: 'italic', alignSelf: 'center', margin: 'auto 0' }}>
                        Free Germane Capacity
                      </div>
                    )}
                  </div>
                );
              }

              // In raw unchunked mode
              const item = activeItems[slotIdx];
              return (
                <div
                  key={slotIdx}
                  style={{
                    minHeight: '80px',
                    padding: '10px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: item ? 'var(--bg-surface)' : 'transparent',
                    border: item 
                      ? '1px solid var(--accent-border)' 
                      : '1px dashed var(--border-strong)',
                    boxShadow: item ? 'var(--shadow-sm)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="font-mono" style={{ fontSize: '0.625rem', color: 'var(--text-muted)' }}>
                      SLOT {slotIdx + 1}
                    </span>
                    {item && (
                      <span className="font-mono" style={{ fontSize: '0.625rem', color: 'var(--accent-primary)', textTransform: 'uppercase' }}>
                        {item.category}
                      </span>
                    )}
                  </div>

                  {item ? (
                    <div>
                      <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-main)' }}>
                        {item.name}
                      </div>
                      <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                        Isolated raw token
                      </div>
                    </div>
                  ) : (
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontStyle: 'italic', alignSelf: 'center', margin: 'auto 0' }}>
                      Unoccupied Slot
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Attentional Overflow / Dropped Elements Zone */}
        <div
          style={{
            padding: '16px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: overflowCount > 0 ? 'var(--danger-bg)' : 'var(--bg-surface-subtle)',
            border: overflowCount > 0 ? '1.5px solid var(--danger-border)' : '1px solid var(--border-subtle)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transition: 'all 0.2s ease',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
              <AlertTriangle size={16} color={overflowCount > 0 ? 'var(--danger-text)' : 'var(--text-muted)'} />
              <strong style={{ fontSize: '0.8125rem', color: overflowCount > 0 ? 'var(--danger-text)' : 'var(--text-main)' }}>
                Attentional Overflow Zone
              </strong>
            </div>

            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4, marginBottom: '10px' }}>
              When novel element count exceeds biological working memory, excess items fail to consolidate and drop out of conscious focus.
            </p>

            {overflowCount > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {activeItems.slice(maxSlots).map((dropItem) => (
                  <div
                    key={dropItem.id}
                    style={{
                      padding: '6px 8px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-surface)',
                      border: '1px solid var(--danger-border)',
                      fontSize: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      color: 'var(--danger-text)',
                      fontWeight: 500,
                    }}
                  >
                    <span>{dropItem.name}</span>
                    <span style={{ fontSize: '0.625rem', fontWeight: 700 }}>[DROPPED]</span>
                  </div>
                ))}
              </div>
            ) : (
              <div 
                style={{
                  padding: '16px 8px',
                  textAlign: 'center',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  border: '1px dashed var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                No overflow. Total load is within active buffer capacity.
              </div>
            )}
          </div>

          {/* Telemetry Metric HUD */}
          <div 
            style={{
              marginTop: '12px',
              paddingTop: '10px',
              borderTop: '1px solid var(--border-subtle)',
              fontSize: '0.75rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ color: 'var(--text-muted)' }}>Cognitive Friction:</span>
              <strong style={{ color: isOverloaded ? 'var(--danger-text)' : 'var(--success-text)' }}>
                {isOverloaded ? 'High (Extraneous Overload)' : 'Low (Manageable)'}
              </strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Germane Headroom:</span>
              <strong style={{ color: isOverloaded ? 'var(--danger-text)' : 'var(--text-main)' }}>
                {isOverloaded ? '0% (Exhausted)' : `${Math.round(((maxSlots - slotsUsed) / maxSlots) * 100)}% Available`}
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* Socratic AI Tutor Quick Action */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
          padding: '12px 16px',
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--accent-subtle)',
          border: '1px solid var(--accent-border)',
          marginBottom: '18px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MessageSquarePlus size={16} color="var(--accent-primary)" />
          <span style={{ fontSize: '0.8125rem', color: 'var(--text-main)' }}>
            Curious why schema chunking allows experts to manipulate 10+ items effortlessly?
          </span>
        </div>
        <button
          type="button"
          onClick={() => handleAskTutor('Explain why schema chunking overcomes working memory limits without altering raw biological brain capacity.')}
          style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'var(--accent-primary)',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--accent-border)',
            padding: '4px 10px',
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <span>Ask Socratic Tutor</span>
          <ArrowRight size={12} />
        </button>
      </div>

      {/* Scientific Honesty Disclaimer Banner */}
      <div
        style={{
          padding: '12px 14px',
          borderRadius: 'var(--radius-sm)',
          backgroundColor: 'var(--bg-surface-subtle)',
          borderLeft: '3px solid var(--text-muted)',
          fontSize: '0.75rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.45,
          display: 'flex',
          gap: '10px',
          alignItems: 'flex-start',
        }}
      >
        <Info size={16} color="var(--text-muted)" style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <strong style={{ color: 'var(--text-main)' }}>Scientific Instrumentation Caveat: </strong>
          This simulator is an idealized pedagogical model demonstrating element interactivity and attentional bottlenecking principles. The human brain does not contain discrete hardware memory slots. Modern neurobiology reveals working memory to be an emergent state of sustained prefrontal-striatal attentional gain control over distributed posterior cortical networks (Cowan, 2001; Miller & Cohen, 2001).
        </div>
      </div>
    </section>
  );
};
