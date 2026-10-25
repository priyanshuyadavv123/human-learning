import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from '../App.tsx';

describe('Cognitive Load Interactive Learning Lab Suite (Lesson 1.3 Pilot)', () => {
  beforeEach(() => {
    localStorage.clear();
    // Hydrate activeLessonId as 'cognitive-load-schema' (Lesson 1.3)
    const state = {
      theme: 'light',
      activeLessonId: 'cognitive-load-schema',
      lessonStates: {},
    };
    localStorage.setItem('human_learning_platform_progress_v1', JSON.stringify(state));
  });

  it('renders the 6-stage Interactive Learning Lab for Lesson 1.3', () => {
    render(<App />);

    // Header & Lesson Title
    expect(screen.getByRole('heading', { level: 1, name: /Cognitive Load & Schema Construction/i })).toBeInTheDocument();

    // Stage Stepper Navigation
    expect(screen.getByRole('tab', { name: /Discover/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /Predict/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /Experiment/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /Understand/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /Apply/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /Retrieve/i })).toBeInTheDocument();
  });

  it('operates the Stage 1 Cognitive Load Simulation with volume selectors and schema chunking', () => {
    render(<App />);

    // Stage 1 is active by default
    expect(screen.getByText(/The Conscious Processing Bottleneck/i)).toBeInTheDocument();
    expect(screen.getByText(/4 \/ 4 SLOTS \[NORMAL\]/i)).toBeInTheDocument();

    // Select 10 items (severe overload)
    const tenItemsBtn = screen.getByRole('button', { name: /10 Items \(Severe Overload\)/i });
    fireEvent.click(tenItemsBtn);

    expect(screen.getByText(/10 \/ 4 SLOTS \[SATURATED\]/i)).toBeInTheDocument();
    expect(screen.getByText(/Attentional Overflow Zone/i)).toBeInTheDocument();

    // Toggle Schema Chunking Active (Expert Lens)
    const chunkToggle = screen.getByRole('button', { name: /Raw Fragmented Elements/i });
    fireEvent.click(chunkToggle);

    expect(screen.getByText(/Schema Chunking Active/i)).toBeInTheDocument();

    // Select 4 items to verify freed capacity slots
    const fourItemsBtn = screen.getByRole('button', { name: /4 Items \(Cowan Limit\)/i });
    fireEvent.click(fourItemsBtn);

    expect(screen.getAllByText(/Free Germane Capacity/i).length).toBeGreaterThanOrEqual(1);
  });

  it('navigates to Stage 3 Experiment and manipulates Working Memory Playground and Expert Lens', () => {
    render(<App />);

    const experimentTab = screen.getByRole('tab', { name: /Experiment/i });
    fireEvent.click(experimentTab);

    // Working Memory Playground
    expect(screen.getByText(/Working Memory Playground: Compress High Element Interactivity/i)).toBeInTheDocument();
    expect(screen.getByText(/HTTP 504 Gateway Timeout/i)).toBeInTheDocument();

    // Auto-Group with Expert Schema Lens
    const autoGroupBtn = screen.getByRole('button', { name: /Auto-Group with Expert Schema Lens/i });
    fireEvent.click(autoGroupBtn);

    expect(screen.getByText(/Database Contention Schema/i)).toBeInTheDocument();
    expect(screen.getByText(/Cryptographic CPU Throttle Schema/i)).toBeInTheDocument();
    expect(screen.getByText(/Laboratory Challenge Solved!/i)).toBeInTheDocument();

    // Expert vs Novice Lens
    expect(screen.getByText(/Novice vs. Expert: Same Biological Brain/i)).toBeInTheDocument();
    const expertLensBtn = screen.getByRole('button', { name: /Principal Architect Lens/i });
    fireEvent.click(expertLensBtn);

    expect(screen.getByText(/2 Compressed Neocortical Schemas/i)).toBeInTheDocument();
    expect(screen.getByText(/WORKING MEMORY: 2\/4 SLOTS \[50% BANDWIDTH FREE\]/i)).toBeInTheDocument();
  });

  it('navigates to Stage 4 Understand and interacts with the Concept Map Topology', () => {
    render(<App />);

    const understandTab = screen.getByRole('tab', { name: /Understand/i });
    fireEvent.click(understandTab);

    expect(screen.getByText(/Cognitive Load Knowledge Graph: Structure & Dependencies/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /The Tripartite Model \(Sweller, 1988\)/i })).toBeInTheDocument();

    // Click Extraneous Load node
    const extraneousNode = screen.getByRole('button', { name: /Extraneous Load/i });
    fireEvent.click(extraneousNode);

    expect(screen.getByText(/CITATION: Sweller, 1988/i)).toBeInTheDocument();

    // Toggle Accessible Outline View
    const outlineToggle = screen.getByRole('button', { name: /Accessible Text Outline/i });
    fireEvent.click(outlineToggle);

    expect(screen.getAllByText(/Jump to lesson section/i).length).toBeGreaterThan(0);
  });

  it('navigates to Stage 6 Retrieve and tests the Knowledge Transfer Challenge', () => {
    render(<App />);

    const retrieveTab = screen.getByRole('tab', { name: /Retrieve/i });
    fireEvent.click(retrieveTab);

    expect(screen.getByText(/Visual Feedback & Reflection: Consolidating the Lab Insights/i)).toBeInTheDocument();
    expect(screen.getByText(/Knowledge Transfer Challenge: Applying Cognitive Load Theory/i)).toBeInTheDocument();

    // Select correct Strategy Beta
    const strategyBetaBtn = screen.getByRole('button', { name: /Strategy Beta: Annotated Worked Outages/i });
    fireEvent.click(strategyBetaBtn);

    expect(screen.getByText(/✓ OPTIMAL COGNITIVE FIT/i)).toBeInTheDocument();
    expect(screen.getByText(/Empirically optimal! Worked examples eliminate extraneous search load/i)).toBeInTheDocument();
  });
});
