import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LearningProvider } from '../context/LearningContext.tsx';
import { AITutorPanel } from '../components/layout/AITutorPanel.tsx';
import * as tutorService from '../services/tutorService.ts';

describe('AITutorPanel Component Suite', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders initial Socratic welcome message and local mode disclosure banner by default', () => {
    vi.spyOn(tutorService, 'checkTutorHealth').mockResolvedValue({
      online: true,
      hasKey: false,
      model: 'openai/gpt-oss-120b',
      mode: 'fallback',
    });

    render(
      <LearningProvider>
        <AITutorPanel />
      </LearningProvider>
    );

    expect(screen.getByText('AI Learning Companion')).toBeInTheDocument();
    expect(screen.getByText('Local Socratic Mode')).toBeInTheDocument();
    expect(screen.getByText(/Grounded in Lesson 1.1 syllabus/i)).toBeInTheDocument();
    expect(screen.getByText('Socratic Learning Companion')).toBeInTheDocument();
    expect(screen.getByText(/Ask any question about attention, working memory limits/i)).toBeInTheDocument();
  });

  it('displays Live AI indicator when server reports live credentials', async () => {
    vi.spyOn(tutorService, 'checkTutorHealth').mockResolvedValue({
      online: true,
      hasKey: true,
      model: 'openai/gpt-oss-120b',
      mode: 'live',
    });

    render(
      <LearningProvider>
        <AITutorPanel />
      </LearningProvider>
    );

    expect(await screen.findByText('Live AI (openai/gpt-oss-120b)')).toBeInTheDocument();
    expect(screen.getByText(/Live AI Connected:/i)).toBeInTheDocument();
  });

  it('handles sending user messages with loading state and displaying response', async () => {
    vi.spyOn(tutorService, 'checkTutorHealth').mockResolvedValue({
      online: true,
      hasKey: true,
      model: 'openai/gpt-oss-120b',
      mode: 'live',
    });

    vi.spyOn(tutorService, 'queryTutor').mockImplementation(async () => {
      // Simulate network delay
      await new Promise(r => setTimeout(r, 50));
      return {
        mode: 'live',
        model: 'openai/gpt-oss-120b',
        entry: {
          keywords: [],
          title: 'Desirable Difficulty In Practice',
          summary: 'Effortful recall slows decay.',
          takeaway: 'Challenging retrieval reconstructs neural pathways.',
          detailedResponse: 'When recall is challenging but successful, synaptic potentiation is maximized.',
          socraticChallenge: 'Can you think of a study routine that felt easy but led to rapid forgetting?',
          referencedSection: 'Lesson 1.1 • Section 4: Retrieval Practice (The Testing Effect)',
        },
      };
    });

    render(
      <LearningProvider>
        <AITutorPanel />
      </LearningProvider>
    );

    const input = screen.getByLabelText('Ask AI Tutor');
    const submitBtn = screen.getByLabelText('Submit inquiry');

    fireEvent.change(input, { target: { value: 'Why does difficult retrieval work better?' } });
    expect(submitBtn).not.toBeDisabled();

    fireEvent.click(submitBtn);

    // Shows user message immediately
    expect(screen.getByText('Why does difficult retrieval work better?')).toBeInTheDocument();

    // Shows loading indicator
    expect(screen.getByText(/Reflecting on cognitive architecture.../i)).toBeInTheDocument();

    // Awaits response
    expect(await screen.findByText('Desirable Difficulty In Practice')).toBeInTheDocument();
    expect(screen.getByText('Challenging retrieval reconstructs neural pathways.')).toBeInTheDocument();
    expect(screen.getAllByText(/Live AI \(openai\/gpt-oss-120b\)/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/Curriculum Anchor: Lesson 1.1 • Section 4/i)).toBeInTheDocument();
  });

  it('resets conversation history when reset button is clicked', async () => {
    render(
      <LearningProvider>
        <AITutorPanel />
      </LearningProvider>
    );

    const resetBtn = screen.getByLabelText('Reset conversation');
    fireEvent.click(resetBtn);

    expect(await screen.findByText('Socratic Session Reset')).toBeInTheDocument();
    expect(screen.getByText(/Session reset. Select a quick inquiry above/i)).toBeInTheDocument();
  });
});
