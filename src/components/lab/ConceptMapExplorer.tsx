import React, { useState } from 'react';
import { 
  Network, 
  ExternalLink, 
  ArrowRight, 
  List, 
  Layers 
} from 'lucide-react';
import { CONCEPT_REGISTRY } from '../../data/conceptRegistry.ts';

interface MapConceptNode {
  id: string;
  conceptRegistryKey?: string;
  title: string;
  shortLabel: string;
  category: 'tripartite' | 'load-type' | 'intervention' | 'expertise';
  summary: string;
  citation: string;
  sectionAnchor: string;
  connectedTo: { targetId: string; relationship: string }[];
}

const LESSON_CONCEPTS: MapConceptNode[] = [
  {
    id: 'tripartite-model',
    conceptRegistryKey: 'concept:cognitive_load_tripartite',
    title: 'The Tripartite Model of Cognitive Load',
    shortLabel: 'Tripartite Model',
    category: 'tripartite',
    summary: 'Partitions total mental effort in working memory into Intrinsic load (complexity of material), Extraneous load (presentation friction), and Germane load (schema construction effort).',
    citation: 'Sweller, 1988',
    sectionAnchor: 'tripartite-cognitive-load',
    connectedTo: [
      { targetId: 'intrinsic-load', relationship: 'partitions into' },
      { targetId: 'extraneous-load', relationship: 'partitions into' },
      { targetId: 'germane-load', relationship: 'partitions into' },
    ],
  },
  {
    id: 'intrinsic-load',
    title: 'Intrinsic Cognitive Load (Element Interactivity)',
    shortLabel: 'Intrinsic Load',
    category: 'load-type',
    summary: 'The inherent intellectual complexity determined by how many interacting elements must be held in working memory simultaneously to achieve understanding.',
    citation: 'Sweller & Chandler, 1994',
    sectionAnchor: 'tripartite-cognitive-load',
    connectedTo: [
      { targetId: 'worked-example', relationship: 'managed via' },
    ],
  },
  {
    id: 'extraneous-load',
    title: 'Extraneous Cognitive Load (Instructional Friction)',
    shortLabel: 'Extraneous Load',
    category: 'load-type',
    summary: 'Unproductive cognitive friction caused by poor layout, split-attention, or ambiguous explanations. Steals precious working memory bandwidth from schema construction.',
    citation: 'Sweller, 1988',
    sectionAnchor: 'tripartite-cognitive-load',
    connectedTo: [
      { targetId: 'split-attention', relationship: 'aggravated by' },
      { targetId: 'worked-example', relationship: 'minimized by' },
    ],
  },
  {
    id: 'germane-load',
    title: 'Germane Cognitive Load (Schema Construction)',
    shortLabel: 'Germane Load',
    category: 'load-type',
    summary: 'The productive working memory capacity devoted to abstracting, synthesizing, and consolidating new knowledge into long-term neocortical schemas.',
    citation: 'Paas & Van Merriënboer, 1994',
    sectionAnchor: 'tripartite-cognitive-load',
    connectedTo: [
      { targetId: 'schema-chunking', relationship: 'allocates to' },
    ],
  },
  {
    id: 'worked-example',
    conceptRegistryKey: 'concept:worked_example_faded_scaffolding',
    title: 'The Worked Example Effect & Faded Scaffolding',
    shortLabel: 'Worked Examples',
    category: 'intervention',
    summary: 'Studying expert solutions paired with progressively faded completion steps eliminates unguided means-ends search, accelerating schema formation for novices.',
    citation: 'Sweller 1988; Renkl 2002',
    sectionAnchor: 'worked-example-split-attention',
    connectedTo: [
      { targetId: 'schema-chunking', relationship: 'induces' },
    ],
  },
  {
    id: 'split-attention',
    title: 'The Split-Attention Effect',
    shortLabel: 'Split Attention',
    category: 'intervention',
    summary: 'Forcing working memory to mentally integrate physically separated sources of information (e.g. code in window 1, docs in window 2) burns massive extraneous capacity.',
    citation: 'Ayres & Sweller, 2005',
    sectionAnchor: 'worked-example-split-attention',
    connectedTo: [
      { targetId: 'extraneous-load', relationship: 'multiplies' },
    ],
  },
  {
    id: 'schema-chunking',
    conceptRegistryKey: 'concept:schema_chunking_consolidation',
    title: 'Schema Chunking & Automation',
    shortLabel: 'Schema Chunking',
    category: 'expertise',
    summary: 'Consolidating multiple interacting elements into a single long-term memory schema that occupies only a single working memory slot, freeing conscious capacity.',
    citation: 'Cowan 2001; Chase & Simon 1973',
    sectionAnchor: 'cognitive-process-diagram-section',
    connectedTo: [
      { targetId: 'expertise-reversal', relationship: 'triggers' },
    ],
  },
  {
    id: 'expertise-reversal',
    conceptRegistryKey: 'concept:expertise_reversal_schema_automation',
    title: 'The Expertise Reversal Effect',
    shortLabel: 'Expertise Reversal',
    category: 'expertise',
    summary: 'Instructional scaffolding that significantly empowers beginners actively impairs experts, because reconciling external guidance with internal schemas creates cognitive waste.',
    citation: 'Kalyuga et al., 2003',
    sectionAnchor: 'expertise-reversal-schema-automation',
    connectedTo: [],
  },
];

export const ConceptMapExplorer: React.FC = () => {
  const [selectedConceptId, setSelectedConceptId] = useState<string>('tripartite-model');
  const [viewMode, setViewMode] = useState<'graph' | 'outline'>('graph');

  const selectedConcept = LESSON_CONCEPTS.find(c => c.id === selectedConceptId) || LESSON_CONCEPTS[0];
  const registryEntry = selectedConcept.conceptRegistryKey ? CONCEPT_REGISTRY[selectedConcept.conceptRegistryKey as keyof typeof CONCEPT_REGISTRY] : null;

  const handleScrollToAnchor = (anchorId: string) => {
    const el = document.getElementById(anchorId) || document.querySelector(`[data-testid="${anchorId}"]`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      aria-labelledby="concept-map-heading"
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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
            Conceptual Architecture Map 4.1
          </span>
          <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            Interactive Relationship Topology
          </span>
        </div>

        {/* View mode toggle */}
        <button
          type="button"
          onClick={() => setViewMode(viewMode === 'graph' ? 'outline' : 'graph')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.75rem',
            padding: '4px 10px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-surface-subtle)',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            fontWeight: 500,
          }}
        >
          {viewMode === 'graph' ? <List size={13} /> : <Network size={13} />}
          <span>{viewMode === 'graph' ? 'Accessible Text Outline' : 'Interactive Graph View'}</span>
        </button>
      </div>

      <h2 
        id="concept-map-heading"
        className="font-serif"
        style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: 'var(--text-main)',
          lineHeight: 1.25,
          marginBottom: '8px',
        }}
      >
        Cognitive Load Knowledge Graph: Structure & Dependencies
      </h2>

      <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '20px' }}>
        Click any node to explore its scientific definition, relationships, and anchor section. Notice how eliminating extraneous friction directly liberates germane capacity for schema consolidation.
      </p>

      {viewMode === 'graph' ? (
        <>
          {/* Interactive Node Grid Canvas */}
          <div 
            style={{
              padding: '18px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg-surface-subtle)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '18px',
            }}
          >
            {/* Level 1: Central Tripartite Hub */}
            <div style={{ textAlign: 'center', marginBottom: '14px' }}>
              <button
                type="button"
                onClick={() => setSelectedConceptId('tripartite-model')}
                style={{
                  padding: '10px 18px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: selectedConceptId === 'tripartite-model' ? 'var(--accent-primary)' : 'var(--bg-surface)',
                  color: selectedConceptId === 'tripartite-model' ? 'var(--text-on-accent)' : 'var(--text-main)',
                  border: selectedConceptId === 'tripartite-model' ? '2px solid var(--accent-primary)' : '1px solid var(--border-strong)',
                  boxShadow: 'var(--shadow-sm)',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.15s ease',
                }}
              >
                <Layers size={16} />
                <span>The Tripartite Model (Sweller, 1988)</span>
              </button>
            </div>

            {/* Level 2: The Three Load Types */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                marginBottom: '16px',
              }}
              className="concept-map-level-2"
            >
              {[
                { id: 'intrinsic-load', title: 'Intrinsic Load', subtitle: 'Element Interactivity' },
                { id: 'extraneous-load', title: 'Extraneous Load', subtitle: 'Instructional Waste' },
                { id: 'germane-load', title: 'Germane Load', subtitle: 'Schema Construction' },
              ].map((item) => {
                const isSelected = selectedConceptId === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedConceptId(item.id)}
                    style={{
                      padding: '10px 12px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: isSelected ? 'var(--accent-subtle)' : 'var(--bg-surface)',
                      border: isSelected ? '2px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                      color: isSelected ? 'var(--accent-primary)' : 'var(--text-main)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      boxShadow: 'var(--shadow-sm)',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <div style={{ fontSize: '0.8125rem', fontWeight: 700 }}>{item.title}</div>
                    <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>{item.subtitle}</div>
                  </button>
                );
              })}
            </div>

            {/* Level 3: Interventions & Phenomena */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '10px',
              }}
              className="concept-map-level-3"
            >
              {[
                { id: 'worked-example', title: 'Worked Example Effect', subtitle: 'Faded Scaffolding' },
                { id: 'split-attention', title: 'Split-Attention Effect', subtitle: 'Contextual Friction' },
                { id: 'schema-chunking', title: 'Schema Automation', subtitle: 'Bandwidth Liberation' },
                { id: 'expertise-reversal', title: 'Expertise Reversal', subtitle: 'Redundancy Penalty' },
              ].map((item) => {
                const isSelected = selectedConceptId === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedConceptId(item.id)}
                    style={{
                      padding: '8px 10px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: isSelected ? 'var(--accent-subtle)' : 'var(--bg-surface)',
                      border: isSelected ? '2px solid var(--accent-primary)' : '1px dashed var(--border-strong)',
                      color: isSelected ? 'var(--accent-primary)' : 'var(--text-main)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      boxShadow: isSelected ? 'var(--shadow-sm)' : 'none',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <div style={{ fontSize: '0.75rem', fontWeight: 700 }}>{item.title}</div>
                    <div style={{ fontSize: '0.625rem', color: 'var(--text-muted)' }}>{item.subtitle}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Concept Deep-Dive Card */}
          <div
            style={{
              padding: '18px 20px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg-surface)',
              border: '1.5px solid var(--accent-border)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '8px' }}>
              <div>
                <span className="font-mono" style={{ fontSize: '0.6875rem', color: 'var(--accent-primary)', fontWeight: 700 }}>
                  CITATION: {selectedConcept.citation}
                </span>
                <h3 className="font-serif" style={{ fontSize: '1.1875rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '2px' }}>
                  {selectedConcept.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => handleScrollToAnchor(selectedConcept.sectionAnchor)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--accent-primary)',
                  backgroundColor: 'var(--accent-subtle)',
                  border: '1px solid var(--accent-border)',
                  padding: '5px 12px',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                }}
              >
                <span>Read Section</span>
                <ExternalLink size={12} />
              </button>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '14px' }}>
              {selectedConcept.summary}
            </p>

            {/* Canonical registry answer if mapped */}
            {registryEntry && (
              <div 
                style={{
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-surface-subtle)',
                  borderLeft: '3px solid var(--accent-primary)',
                  marginBottom: '12px',
                  fontSize: '0.8125rem',
                  lineHeight: 1.45,
                }}
              >
                <div style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '3px' }}>
                  Canonical Scientific Criterion:
                </div>
                <div style={{ color: 'var(--text-secondary)' }}>
                  {registryEntry.canonicalAnswer}
                </div>
              </div>
            )}

            {/* Outgoing relationships list */}
            {selectedConcept.connectedTo.length > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', fontSize: '0.75rem' }}>
                <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Relationships:</span>
                {selectedConcept.connectedTo.map((rel) => {
                  const targetNode = LESSON_CONCEPTS.find(c => c.id === rel.targetId);
                  return (
                    <span 
                      key={rel.targetId}
                      style={{
                        padding: '2px 8px',
                        borderRadius: '4px',
                        backgroundColor: 'var(--bg-surface-subtle)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <em>{rel.relationship}</em> → <strong>{targetNode?.shortLabel || rel.targetId}</strong>
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </>
      ) : (
        /* Accessible Screen-Reader Outline View */
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {LESSON_CONCEPTS.map((concept) => (
            <div
              key={concept.id}
              style={{
                padding: '14px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--bg-surface-subtle)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <strong style={{ fontSize: '0.9375rem', color: 'var(--text-main)' }}>
                  {concept.title}
                </strong>
                <span className="font-mono" style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                  {concept.citation}
                </span>
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.45, marginBottom: '8px' }}>
                {concept.summary}
              </p>
              <button
                type="button"
                onClick={() => handleScrollToAnchor(concept.sectionAnchor)}
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--accent-primary)',
                  fontWeight: 600,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <span>Jump to lesson section</span>
                <ArrowRight size={12} />
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
