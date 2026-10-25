import React, { useState } from 'react';
import { 
  Brain, 
  AlertTriangle, 
  Layers, 
  Clock, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';

export const ExpertVsNoviceComparison: React.FC = () => {
  const [lens, setLens] = useState<'novice' | 'expert'>('novice');

  return (
    <section
      aria-labelledby="comparison-heading"
      style={{
        marginBottom: '32px',
        padding: '24px',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      {/* Eyebrow Header */}
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
          Cognitive Architecture Comparison 3.2
        </span>
        <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
          Side-by-Side Mental Model Inspector
        </span>
      </div>

      <h2 
        id="comparison-heading"
        className="font-serif"
        style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: 'var(--text-main)',
          lineHeight: 1.25,
          marginBottom: '8px',
        }}
      >
        Novice vs. Expert: Same Biological Brain, Completely Different Compression
      </h2>

      <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '20px' }}>
        Why does an experienced engineer solve complex distributed system failures in 3 minutes while a beginner stares at the terminal in paralysis? Inspect the exact same production incident below through both cognitive lenses.
      </p>

      {/* Interactive Lens Switcher */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6px',
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--bg-surface-subtle)',
          border: '1px solid var(--border-subtle)',
          marginBottom: '24px',
          gap: '8px',
        }}
      >
        <button
          type="button"
          onClick={() => setLens('novice')}
          style={{
            flex: '1',
            padding: '10px 16px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.875rem',
            fontWeight: lens === 'novice' ? 700 : 500,
            backgroundColor: lens === 'novice' ? 'var(--bg-surface)' : 'transparent',
            color: lens === 'novice' ? 'var(--text-main)' : 'var(--text-muted)',
            border: lens === 'novice' ? '1.5px solid var(--border-strong)' : 'none',
            boxShadow: lens === 'novice' ? 'var(--shadow-sm)' : 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'all 0.2s ease',
          }}
        >
          <AlertTriangle size={15} color={lens === 'novice' ? 'var(--warning-text)' : 'var(--text-muted)'} />
          <span>Novice Junior Engineer Lens (Fragmented Search)</span>
        </button>

        <button
          type="button"
          onClick={() => setLens('expert')}
          style={{
            flex: '1',
            padding: '10px 16px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.875rem',
            fontWeight: lens === 'expert' ? 700 : 500,
            backgroundColor: lens === 'expert' ? 'var(--accent-primary)' : 'transparent',
            color: lens === 'expert' ? 'var(--text-on-accent)' : 'var(--text-muted)',
            border: lens === 'expert' ? '1.5px solid var(--accent-primary)' : 'none',
            boxShadow: lens === 'expert' ? 'var(--shadow-sm)' : 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'all 0.2s ease',
          }}
        >
          <Layers size={15} color={lens === 'expert' ? 'var(--text-on-accent)' : 'var(--text-muted)'} />
          <span>Principal Architect Lens (Schema-Driven)</span>
        </button>
      </div>

      {/* Incident Case Banner */}
      <div
        style={{
          padding: '14px 16px',
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--bg-surface-well)',
          border: '1px solid var(--border-subtle)',
          marginBottom: '20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <Zap size={15} color="var(--accent-primary)" />
          <strong style={{ fontSize: '0.875rem', color: 'var(--text-main)' }}>
            Real-World Incident: Checkout Service Failure Under 50,000 Concurrent Requests
          </strong>
        </div>
        <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
          6 separate operational anomalies appear simultaneously on the dashboard. Observe how working memory organizes these anomalies depending on existing long-term neocortical schemas:
        </p>
      </div>

      {/* Animated Dynamic Comparison Board */}
      {lens === 'novice' ? (
        <div
          style={{
            padding: '20px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--danger-bg)',
            border: '1.5px solid var(--danger-border)',
            marginBottom: '20px',
            transition: 'all 0.3s ease',
          }}
        >
          {/* Cognitive Diagnostics Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
            <div>
              <strong style={{ fontSize: '0.9375rem', color: 'var(--danger-text)' }}>
                Novice Representation: 6 Disconnected Novel Elements
              </strong>
              <div style={{ fontSize: '0.75rem', color: 'var(--danger-text)', opacity: 0.9 }}>
                Strategy: Backward Means-Ends Search (Sweller, 1988)
              </div>
            </div>
            <span 
              className="font-mono"
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '3px 8px',
                borderRadius: '4px',
                backgroundColor: 'var(--bg-surface)',
                color: 'var(--danger-text)',
                border: '1px solid var(--danger-border)',
              }}
            >
              WORKING MEMORY: 6/4 SLOTS [150% SATURATED]
            </span>
          </div>

          {/* 6 Fragmented Isolated Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px', marginBottom: '16px' }}>
            {[
              { id: '1', title: 'Stripe Webhook 504 Gateway Timeout', issue: 'High network latency' },
              { id: '2', title: 'Database Row Lock on Orders Table', issue: 'Unreleased exclusive lock' },
              { id: '3', title: 'Inventory Decrement Race Condition', issue: 'Negative stock quantity' },
              { id: '4', title: 'Duplicate Customer Credit Charges', issue: 'Double authorization' },
              { id: '5', title: 'Dead-Letter Queue Overflow', issue: '25,000 discarded events' },
              { id: '6', title: 'Redis Idempotency Key Eviction', issue: 'Premature TTL expiry' },
            ].map((item) => (
              <div
                key={item.id}
                style={{
                  padding: '12px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px dashed var(--danger-border)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ fontSize: '0.6875rem', color: 'var(--danger-text)', fontWeight: 700, marginBottom: '2px' }}>
                  ELEMENT {item.id} (ISOLATED)
                </div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '4px' }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Perceived symptom: {item.issue}
                </div>
              </div>
            ))}
          </div>

          <div style={{ fontSize: '0.8125rem', color: 'var(--danger-text)', lineHeight: 1.5 }}>
            <strong>The Cognitive Trap: </strong>
            Because the beginner lacks consolidated schemas, each of the 6 items must be held in working memory independently. This exceeds Cowan’s ~4-slot biological threshold, causing immediate cognitive thrashing. The novice frantically Googles error codes, makes random configuration changes, and burns 4 hours without isolating the underlying architectural flaw.
          </div>
        </div>
      ) : (
        <div
          style={{
            padding: '20px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--success-bg)',
            border: '1.5px solid var(--success-border)',
            marginBottom: '20px',
            transition: 'all 0.3s ease',
          }}
        >
          {/* Cognitive Diagnostics Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
            <div>
              <strong style={{ fontSize: '0.9375rem', color: 'var(--success-text)' }}>
                Expert Representation: 2 Compressed Neocortical Schemas
              </strong>
              <div style={{ fontSize: '0.75rem', color: 'var(--success-text)', opacity: 0.9 }}>
                Strategy: Forward Schema-Driven Pattern Recognition (Chase & Simon, 1973)
              </div>
            </div>
            <span 
              className="font-mono"
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '3px 8px',
                borderRadius: '4px',
                backgroundColor: 'var(--bg-surface)',
                color: 'var(--success-text)',
                border: '1px solid var(--success-border)',
              }}
            >
              WORKING MEMORY: 2/4 SLOTS [50% BANDWIDTH FREE]
            </span>
          </div>

          {/* 2 High-level Consolidated Schema Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', marginBottom: '16px' }}>
            <div
              style={{
                padding: '16px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--bg-surface)',
                border: '2px solid var(--success-border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                <ShieldCheck size={16} color="var(--success-text)" />
                <strong style={{ fontSize: '0.875rem', color: 'var(--text-main)' }}>
                  Schema 1: Idempotency & Distributed Race Failure
                </strong>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '8px', lineHeight: 1.4 }}>
                Compresses: <em>Duplicate Charges</em> + <em>Redis Key Eviction</em> + <em>Inventory Race Condition</em> into a single root cause.
              </div>
              <div style={{ padding: '8px 10px', backgroundColor: 'var(--bg-surface-subtle)', borderRadius: 'var(--radius-sm)', fontSize: '0.75rem', color: 'var(--text-main)' }}>
                <strong>Automated Diagnosis:</strong> The Redis TTL expired before the long-running webhook finished, allowing duplicate retries to bypass locking.
              </div>
            </div>

            <div
              style={{
                padding: '16px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--bg-surface)',
                border: '2px solid var(--success-border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                <Clock size={16} color="var(--success-text)" />
                <strong style={{ fontSize: '0.875rem', color: 'var(--text-main)' }}>
                  Schema 2: Transaction Scope & Synchronous Network Bottleneck
                </strong>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '8px', lineHeight: 1.4 }}>
                Compresses: <em>Stripe 504 Timeout</em> + <em>Database Row Lock</em> + <em>Dead-Letter Overflow</em> into a single root cause.
              </div>
              <div style={{ padding: '8px 10px', backgroundColor: 'var(--bg-surface-subtle)', borderRadius: 'var(--radius-sm)', fontSize: '0.75rem', color: 'var(--text-main)' }}>
                <strong>Automated Diagnosis:</strong> Code opened an exclusive DB transaction <em>before</em> calling external Stripe API, locking all rows while waiting on network packets.
              </div>
            </div>
          </div>

          <div style={{ fontSize: '0.8125rem', color: 'var(--success-text)', lineHeight: 1.5 }}>
            <strong>The Cognitive Liberation: </strong>
            Because the expert possesses consolidated schemas in long-term memory, 6 complex symptoms collapse into just <strong>2 working-memory slots</strong>. With 2 slots completely free, the expert’s frontal cortex can comfortably verify rollbacks, check edge cases, and deploy a fix in 4 minutes without cognitive strain.
          </div>
        </div>
      )}

      {/* Classical Scientific Proof: The Chase & Simon (1973) Chess Paradigm */}
      <div
        style={{
          padding: '14px 16px',
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--bg-surface-subtle)',
          borderLeft: '4px solid var(--accent-primary)',
          fontSize: '0.8125rem',
          lineHeight: 1.5,
          color: 'var(--text-secondary)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px', color: 'var(--text-main)', fontWeight: 700 }}>
          <Brain size={16} color="var(--accent-primary)" />
          <span>Empirical Grounding: The Chase & Simon (1973) Chunking Proof</span>
        </div>
        <p style={{ marginBottom: '6px' }}>
          Do experts have larger biological working memory hardware? <strong>No.</strong> In William Chase and Herbert Simon’s foundational 1973 study, Chess Grandmasters and novices were shown mid-game chess positions for 5 seconds. Grandmasters reconstructed the board with near-100% accuracy, while novices could place only 4 pieces.
        </p>
        <p>
          However, when the chess pieces were placed <strong>completely at random</strong> (destroying tactical chess schemas), grandmasters performed <strong>identically to complete novices</strong> (~4 pieces). Expertise does not enlarge your brain’s RAM—it encodes thousands of high-level patterns into your long-term storage hard drive.
        </p>
      </div>
    </section>
  );
};
