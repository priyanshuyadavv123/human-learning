import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from '../App.tsx';

describe('App Workspace Integration', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders the complete 3-column workspace with navigation, lesson content, and AI Tutor', () => {
    render(<App />);

    // Header & Brand
    expect(screen.getByText('Human Learning')).toBeInTheDocument();
    expect(screen.getAllByText(/Lesson 1.1/i).length).toBeGreaterThan(0);

    // Sidebar navigation
    expect(screen.getByText('Human Cognition & Mastery')).toBeInTheDocument();
    expect(screen.getByText(/The Architecture of Human Memory/i)).toBeInTheDocument();
    expect(screen.getByText(/1.1 How Learning Actually Works/i)).toBeInTheDocument();

    // Main lesson reading content
    expect(screen.getByRole('heading', { level: 1, name: /How Learning Actually Works/i })).toBeInTheDocument();

    // AI Tutor panel
    expect(screen.getByText('AI Learning Companion')).toBeInTheDocument();
    expect(screen.getByText(/Phase 1 Contextual Socratic Mode/i)).toBeInTheDocument();
  });

  it('supports toggling theme between light and dark', () => {
    render(<App />);

    const themeToggle = screen.getByRole('button', { name: /Switch to (dark|light) theme/i });
    expect(themeToggle).toBeInTheDocument();

    fireEvent.click(themeToggle);
    expect(localStorage.getItem('human_learning_platform_theme_v1')).toBeTruthy();
  });

  it('allows interacting with the AI Tutor quick inquiries', () => {
    render(<App />);

    const quickBtn = screen.getByRole('button', { name: 'Working Memory Limits' });
    fireEvent.click(quickBtn);

    expect(screen.getByText(/Working Memory Architecture & The 4-Chunk Limit/i)).toBeInTheDocument();
    expect(screen.getByText(/Cowan, 2001; Sweller, 1988/i)).toBeInTheDocument();
  });

  it('allows toggling the AI Tutor panel open and closed', () => {
    render(<App />);

    const tutorToggle = screen.getByRole('button', { name: /Close AI Tutor panel/i });
    fireEvent.click(tutorToggle);

    expect(screen.queryByText(/AI Learning Companion/i)).not.toBeInTheDocument();

    const openTutorBtn = screen.getByRole('button', { name: /Open AI Tutor panel/i });
    fireEvent.click(openTutorBtn);

    expect(screen.getByText(/AI Learning Companion/i)).toBeInTheDocument();
  });

  it('hydrates saved lesson progress and state from localStorage', () => {
    const savedState = {
      theme: 'dark',
      activeLessonId: 'how-learning-actually-works',
      lessonStates: {
        'how-learning-actually-works': {
          predictionAnswer: 'opt-retrieval',
          predictionSubmitted: true,
          activeExplanationTab: 'working-memory',
          inspectedDiagramStages: ['sensory', 'attention-gate', 'working-memory-stage'],
          exerciseAnswers: {
            'scen-1': 'illusion-of-competence',
            'scen-2': 'attention-bottleneck',
            'scen-3': 'working-memory-overload',
            'scen-4': 'schema-consolidation',
          },
          exerciseSubmitted: true,
          quizAnswers: {
            q1: 'q1-b',
            q2: 'q2-c',
            q3: 'q3-a',
            q4: 'q4-b',
          },
          quizSubmitted: true,
          quizScore: 100,
          practicalAnswers: {
            'step-subject': 'Distributed Systems',
            'step-bottleneck': 'Attention leak',
            'step-intervention': 'Blank sheet recall',
          },
          practicalCompleted: true,
          isCompleted: true,
          completedAt: '2026-10-18T20:00:00.000Z',
        },
      },
    };

    localStorage.setItem('human_learning_platform_progress_v1', JSON.stringify(savedState));
    localStorage.setItem('human_learning_platform_theme_v1', 'dark');

    render(<App />);

    // Hydrated prediction
    expect(screen.getByText(/Active Retrieval produces substantially higher delayed retention/i)).toBeInTheDocument();
    expect(screen.getByText(/Empirically Supported Strategy \(The Testing Effect\)/i)).toBeInTheDocument();

    // Hydrated completion banner
    expect(screen.getByText(/Lesson 1.1 Complete: Core Principles Verified/i)).toBeInTheDocument();
    expect(screen.getByText(/Checkpoint Verified/i)).toBeInTheDocument();
  });
});
