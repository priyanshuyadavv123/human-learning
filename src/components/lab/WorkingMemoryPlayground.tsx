import React, { useState } from 'react';
import { 
  Layers, 
  Plus, 
  Trash2, 
  ArrowUp, 
  ArrowDown, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  RotateCcw, 
  Info, 
  FolderPlus, 
  Tag 
} from 'lucide-react';

interface PlaygroundItem {
  id: string;
  text: string;
  domain: string;
  chunkId?: string;
}

interface SchemaChunk {
  id: string;
  name: string;
  colorTheme: string;
}

const INITIAL_ITEMS: PlaygroundItem[] = [
  { id: 'p1', text: 'HTTP 504 Gateway Timeout', domain: 'Network' },
  { id: 'p2', text: 'Database Connection Pool Exhausted', domain: 'Database' },
  { id: 'p3', text: 'Unindexed Table Scan (Lock Wait)', domain: 'Database' },
  { id: 'p4', text: 'CPU 99% on Authentication Pod', domain: 'Compute' },
  { id: 'p5', text: 'Bcrypt Hash Iterations set to 100k', domain: 'Compute' },
  { id: 'p6', text: 'Thread Pool Saturation (No Free Workers)', domain: 'Compute' },
  { id: 'p7', text: 'WebSocket Buffer Unbounded Growth', domain: 'Memory' },
  { id: 'p8', text: 'Kubernetes OOM Killer Terminating Pods', domain: 'Memory' },
];

const PRESET_CHUNKS: Record<string, SchemaChunk> = {
  'chunk-db': { id: 'chunk-db', name: 'Database Contention Schema', colorTheme: 'var(--accent-primary)' },
  'chunk-cpu': { id: 'chunk-cpu', name: 'Cryptographic CPU Throttle Schema', colorTheme: 'var(--warning-text)' },
  'chunk-mem': { id: 'chunk-mem', name: 'Memory Leak & Eviction Schema', colorTheme: 'var(--danger-text)' },
};

export const WorkingMemoryPlayground: React.FC = () => {
  const [items, setItems] = useState<PlaygroundItem[]>(INITIAL_ITEMS);
  const [chunks, setChunks] = useState<Record<string, SchemaChunk>>({});
  const [selectedItemIds, setSelectedItemIds] = useState<string[]>([]);
  const [newItemText, setNewItemText] = useState('');
  const [newChunkName, setNewChunkName] = useState('');
  const [isCreatingChunk, setIsCreatingChunk] = useState(false);

  // Calculate slots: each unchunked item consumes 1 slot. Each chunk consumes 1 slot regardless of item count.
  const unchunkedItems = items.filter(i => !i.chunkId);
  const activeChunkIds = Array.from(new Set(items.filter(i => i.chunkId).map(i => i.chunkId!)));
  
  const totalSlotsConsumed = unchunkedItems.length + activeChunkIds.length;
  const nominalLimit = 4;
  const isOverCapacity = totalSlotsConsumed > nominalLimit;
  const isChallengeWon = items.length >= 6 && totalSlotsConsumed <= nominalLimit;

  // Toggle item selection for grouping
  const toggleSelect = (id: string) => {
    setSelectedItemIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Add new item
  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemText.trim()) return;
    const newItem: PlaygroundItem = {
      id: `p-${Date.now()}`,
      text: newItemText.trim(),
      domain: 'Custom Task',
    };
    setItems(prev => [...prev, newItem]);
    setNewItemText('');
  };

  // Remove single item
  const handleRemoveItem = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
    setSelectedItemIds(prev => prev.filter(x => x !== id));
  };

  // Rearrange items (move up/down)
  const handleMove = (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= items.length) return;
    const updated = [...items];
    const temp = updated[index];
    updated[index] = updated[targetIndex];
    updated[targetIndex] = temp;
    setItems(updated);
  };

  // Group selected items into a new chunk
  const handleCreateChunk = () => {
    if (selectedItemIds.length === 0 || !newChunkName.trim()) return;
    const chunkId = `chunk-${Date.now()}`;
    const newChunk: SchemaChunk = {
      id: chunkId,
      name: newChunkName.trim(),
      colorTheme: 'var(--accent-primary)',
    };

    setChunks(prev => ({ ...prev, [chunkId]: newChunk }));
    setItems(prev => prev.map(item => 
      selectedItemIds.includes(item.id) ? { ...item, chunkId } : item
    ));

    setSelectedItemIds([]);
    setNewChunkName('');
    setIsCreatingChunk(false);
  };

  // Ungroup items from a chunk
  const handleUngroup = (chunkId: string) => {
    setItems(prev => prev.map(i => i.chunkId === chunkId ? { ...i, chunkId: undefined } : i));
    setChunks(prev => {
      const next = { ...prev };
      delete next[chunkId];
      return next;
    });
  };

  // Auto-group into expert schemas
  const handleAutoGroup = () => {
    setChunks(PRESET_CHUNKS);
    setItems(prev => prev.map(item => {
      if (item.id === 'p1' || item.id === 'p2' || item.id === 'p3') {
        return { ...item, chunkId: 'chunk-db' };
      }
      if (item.id === 'p4' || item.id === 'p5' || item.id === 'p6') {
        return { ...item, chunkId: 'chunk-cpu' };
      }
      if (item.id === 'p7' || item.id === 'p8') {
        return { ...item, chunkId: 'chunk-mem' };
      }
      return item;
    }));
    setSelectedItemIds([]);
  };

  // Reset to initial unchunked items
  const handleReset = () => {
    setItems(INITIAL_ITEMS);
    setChunks({});
    setSelectedItemIds([]);
  };

  return (
    <section
      aria-labelledby="playground-heading"
      style={{
        marginBottom: '32px',
        padding: '24px',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      {/* Header */}
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
          Hands-On Lab Tool 3.1
        </span>
        <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
          Working Memory Compression & Chunking Workspace
        </span>
      </div>

      <h2 
        id="playground-heading"
        className="font-serif"
        style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: 'var(--text-main)',
          lineHeight: 1.25,
          marginBottom: '8px',
        }}
      >
        Working Memory Playground: Compress High Element Interactivity
      </h2>

      <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '20px' }}>
        When items exist as isolated fragments, each burns a separate working memory slot. Grouping related items into a <strong>hierarchical schema</strong> allows conscious attention to manipulate the entire cluster as a <strong>single cognitive unit</strong> (Chase & Simon, 1973; Sweller, 1988).
      </p>

      {/* Real-time Working Memory Capacity Gauge */}
      <div 
        style={{
          padding: '16px',
          borderRadius: 'var(--radius-md)',
          backgroundColor: isOverCapacity ? 'var(--danger-bg)' : 'var(--bg-surface-subtle)',
          border: `1.5px solid ${isOverCapacity ? 'var(--danger-border)' : 'var(--border-subtle)'}`,
          marginBottom: '20px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '8px' }}>
          <div>
            <strong style={{ fontSize: '0.875rem', color: isOverCapacity ? 'var(--danger-text)' : 'var(--text-main)' }}>
              Working Memory Slot Occupancy Meter
            </strong>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {unchunkedItems.length} raw isolated tokens + {activeChunkIds.length} schema chunk(s) = {totalSlotsConsumed} active slots
            </div>
          </div>

          <div 
            className="font-mono"
            style={{
              fontSize: '0.8125rem',
              fontWeight: 700,
              padding: '4px 10px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: isOverCapacity ? 'var(--danger-text)' : 'var(--success-bg)',
              color: isOverCapacity ? '#FFFFFF' : 'var(--success-text)',
              border: `1px solid ${isOverCapacity ? 'var(--danger-border)' : 'var(--success-border)'}`,
            }}
          >
            {totalSlotsConsumed} / {nominalLimit} SLOTS {isOverCapacity ? '[OVERLOADED]' : '[OPTIMAL]'}
          </div>
        </div>

        {/* Visual Slot Meter Bar */}
        <div 
          style={{
            height: '10px',
            borderRadius: '5px',
            backgroundColor: 'var(--border-subtle)',
            overflow: 'hidden',
            position: 'relative',
            marginBottom: '8px',
          }}
        >
          <div 
            style={{
              height: '100%',
              width: `${Math.min(100, (totalSlotsConsumed / nominalLimit) * 100)}%`,
              backgroundColor: isOverCapacity ? 'var(--danger-text)' : 'var(--accent-primary)',
              transition: 'width 0.3s ease, background-color 0.3s ease',
            }}
          />
        </div>

        {/* Capacity Verdict Status */}
        <div style={{ fontSize: '0.75rem', color: isOverCapacity ? 'var(--danger-text)' : 'var(--text-secondary)' }}>
          {isOverCapacity ? (
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <AlertTriangle size={13} />
              <strong>Cognitive Breakdown:</strong> High element interactivity saturates the 4-slot buffer. Working memory cannot process novel solutions or construct schemas under this strain.
            </span>
          ) : (
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={13} color="var(--success-text)" />
              <strong>Cognitive Equilibrium:</strong> Schema chunking compressed the 8 symptoms into manageable slots. Spare working memory capacity is now liberated for diagnostic reasoning!
            </span>
          )}
        </div>
      </div>

      {/* Challenge Callout Bar */}
      {isChallengeWon ? (
        <div 
          style={{
            padding: '12px 16px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--success-bg)',
            border: '1.5px solid var(--success-border)',
            color: 'var(--success-text)',
            fontSize: '0.8125rem',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Sparkles size={18} style={{ flexShrink: 0 }} />
          <div>
            <strong>Laboratory Challenge Solved! </strong>
            You successfully reduced 8 incident symptoms into ≤ 3 structured schemas. You have physically demonstrated why senior engineers diagnose outages 10x faster: not because they have bigger brains, but because their schemas let long-term memory do the heavy lifting.
          </div>
        </div>
      ) : null}

      {/* Action Toolbar */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={() => setIsCreatingChunk(!isCreatingChunk)}
            disabled={selectedItemIds.length === 0}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              backgroundColor: selectedItemIds.length > 0 ? 'var(--accent-primary)' : 'var(--bg-surface-subtle)',
              color: selectedItemIds.length > 0 ? 'var(--text-on-accent)' : 'var(--text-muted)',
              border: '1px solid var(--border-subtle)',
              cursor: selectedItemIds.length > 0 ? 'pointer' : 'not-allowed',
            }}
          >
            <FolderPlus size={14} />
            <span>Group Selected into Schema ({selectedItemIds.length})</span>
          </button>

          <button
            type="button"
            onClick={handleAutoGroup}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              backgroundColor: 'var(--accent-subtle)',
              color: 'var(--accent-primary)',
              border: '1px solid var(--accent-border)',
              cursor: 'pointer',
            }}
          >
            <Sparkles size={14} />
            <span>Auto-Group with Expert Schema Lens</span>
          </button>
        </div>

        <button
          type="button"
          onClick={handleReset}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <RotateCcw size={12} />
          <span>Reset Playground</span>
        </button>
      </div>

      {/* Chunk Creation Dialog Inline */}
      {isCreatingChunk && selectedItemIds.length > 0 && (
        <div
          style={{
            padding: '14px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--bg-surface-well)',
            border: '1px solid var(--border-strong)',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-main)' }}>
            Name this Schema Chunk:
          </span>
          <input
            type="text"
            value={newChunkName}
            onChange={(e) => setNewChunkName(e.target.value)}
            placeholder="e.g. Database Saturation Schema"
            style={{
              padding: '6px 10px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-main)',
              fontSize: '0.8125rem',
              flex: '1',
              minWidth: '200px',
            }}
          />
          <button
            type="button"
            onClick={handleCreateChunk}
            disabled={!newChunkName.trim()}
            style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--accent-primary)',
              color: 'var(--text-on-accent)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              border: 'none',
              cursor: newChunkName.trim() ? 'pointer' : 'not-allowed',
            }}
          >
            Create Chunk
          </button>
          <button
            type="button"
            onClick={() => setIsCreatingChunk(false)}
            style={{
              padding: '6px 10px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'transparent',
              color: 'var(--text-muted)',
              fontSize: '0.8125rem',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
        </div>
      )}

      {/* Rendered Workspace: Grouped Chunks & Isolated Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
        
        {/* Render Formed Schema Chunks */}
        {activeChunkIds.map((chunkId) => {
          const chunk = chunks[chunkId] || PRESET_CHUNKS[chunkId];
          const chunkItems = items.filter(i => i.chunkId === chunkId);

          return (
            <div
              key={chunkId}
              style={{
                padding: '14px 16px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-surface-subtle)',
                border: '2px solid var(--accent-border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Layers size={16} color="var(--accent-primary)" />
                  <strong style={{ fontSize: '0.9375rem', color: 'var(--text-main)' }}>
                    {chunk?.name || 'Hierarchical Schema Chunk'}
                  </strong>
                  <span 
                    className="font-mono"
                    style={{
                      fontSize: '0.6875rem',
                      padding: '2px 6px',
                      borderRadius: '3px',
                      backgroundColor: 'var(--success-bg)',
                      color: 'var(--success-text)',
                      fontWeight: 700,
                    }}
                  >
                    CONSUMES 1 WORKING MEMORY SLOT (x{chunkItems.length} elements compressed)
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleUngroup(chunkId)}
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                >
                  Dissolve Chunk
                </button>
              </div>

              {/* Items within this Schema Chunk */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px' }}>
                {chunkItems.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      padding: '8px 10px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.8125rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <span>{item.text}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(item.id)}
                      style={{ color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer' }}
                      title="Remove symptom"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Render Remaining Raw Unchunked Items */}
        {unchunkedItems.length > 0 && (
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
              Isolated Information Items ({unchunkedItems.length} uncompressed items • 1 slot each):
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '8px' }}>
              {unchunkedItems.map((item, idx) => {
                const isSelected = selectedItemIds.includes(item.id);

                return (
                  <div
                    key={item.id}
                    style={{
                      padding: '10px 12px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: isSelected ? 'var(--accent-subtle)' : 'var(--bg-surface)',
                      border: isSelected 
                        ? '1.5px solid var(--accent-primary)' 
                        : '1px dashed var(--border-strong)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '8px',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', flex: '1' }}>
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelect(item.id)}
                        style={{ cursor: 'pointer' }}
                      />
                      <div>
                        <div style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-main)' }}>
                          {item.text}
                        </div>
                        <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Tag size={10} />
                          <span>{item.domain} • [Consumes 1 Novel Slot]</span>
                        </div>
                      </div>
                    </label>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                      <button
                        type="button"
                        onClick={() => handleMove(idx, 'up')}
                        disabled={idx === 0}
                        style={{ color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', opacity: idx === 0 ? 0.3 : 1 }}
                        title="Move Up"
                      >
                        <ArrowUp size={13} />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleMove(idx, 'down')}
                        disabled={idx === unchunkedItems.length - 1}
                        style={{ color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', opacity: idx === unchunkedItems.length - 1 ? 0.3 : 1 }}
                        title="Move Down"
                      >
                        <ArrowDown size={13} />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleRemoveItem(item.id)}
                        style={{ color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', marginLeft: '4px' }}
                        title="Delete Item"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Add Custom Item Input */}
      <form onSubmit={handleAddItem} style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <input
          type="text"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
          placeholder="Add custom engineering symptom (e.g., Cache Stampede, Deadlock)..."
          style={{
            flex: '1',
            padding: '8px 12px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-surface-subtle)',
            color: 'var(--text-main)',
            fontSize: '0.8125rem',
          }}
        />
        <button
          type="submit"
          disabled={!newItemText.trim()}
          style={{
            padding: '8px 14px',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'var(--bg-surface)',
            color: 'var(--text-main)',
            fontSize: '0.8125rem',
            fontWeight: 600,
            border: '1px solid var(--border-subtle)',
            cursor: newItemText.trim() ? 'pointer' : 'not-allowed',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <Plus size={14} />
          <span>Add Item</span>
        </button>
      </form>

      {/* Nuanced Scientific Note */}
      <div
        style={{
          padding: '12px 14px',
          borderRadius: 'var(--radius-sm)',
          backgroundColor: 'var(--bg-surface-subtle)',
          borderLeft: '3px solid var(--accent-primary)',
          fontSize: '0.75rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.45,
          display: 'flex',
          gap: '10px',
        }}
      >
        <Info size={16} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <strong style={{ color: 'var(--text-main)' }}>Task-Dependent Capacity Nuance: </strong>
          Working memory limits are not a rigid universal number. Nelson Cowan’s empirical consensus (~3 to 4 chunks) applies specifically to novel, unassociated items under active cognitive load. George Miller’s famous 7±2 (1956) was based on simple, unidimensional auditory and visual span tests. Under high emotional stress, fatigue, or split-attention, effective capacity drops to as little as 1 or 2 chunks.
        </div>
      </div>
    </section>
  );
};
