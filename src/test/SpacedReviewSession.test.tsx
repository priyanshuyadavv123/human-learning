import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { LearningProvider, useLearning } from '../context/LearningContext.tsx';
import { SpacedReviewSession } from '../components/review/SpacedReviewSession.tsx';
import { saveLearnerMemory, createInitialMemoryStore } from '../services/memoryStorage.ts';

const TestReviewContainer: React.FC = () => {
  const { setReviewModalOpen, dueReviewsCount } = useLearning();

  return (
    <div>
      <button onClick={() => setReviewModalOpen(true)}>Open Spaced Review</button>
      <span data-testid="due-count">{dueReviewsCount}</span>
      <SpacedReviewSession />
    </div>
  );
};

describe('Spaced Review Session Component Suite', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders review prompt when concepts are due, allows objective criteria verification, and records delayed review', async () => {
    // Setup a concept that is already due (due timestamp in the past)
    const store = createInitialMemoryStore();
    store.conceptStates['concept:working_memory_capacity_limits'].nextReviewDueAt = '2026-10-01T00:00:00.000Z'; // Past!
    store.conceptStates['concept:working_memory_capacity_limits'].reviewIntervalDays = 1;
    saveLearnerMemory(store);

    render(
      <LearningProvider>
        <TestReviewContainer />
      </LearningProvider>
    );

    // Verify due count is at least 1
    const dueBadge = screen.getByTestId('due-count');
    expect(Number(dueBadge.textContent)).toBeGreaterThanOrEqual(1);

    // Open review modal
    const openBtn = screen.getByText('Open Spaced Review');
    fireEvent.click(openBtn);

    // Check modal appears with Socratic prompt
    expect(screen.getByText(/Spaced Retrieval Session/i)).toBeInTheDocument();
    expect(screen.getByText(/Retrieve from memory/i)).toBeInTheDocument();

    // Type recall
    const textarea = screen.getByPlaceholderText(/Type your explanation here/i);
    fireEvent.change(textarea, { target: { value: 'Working memory holds 3-4 items, chunking helps bypass limits.' } });

    // Select confidence
    const highConfBtn = screen.getByText(/certain/i);
    fireEvent.click(highConfBtn);

    // Click Reveal
    const revealBtn = screen.getByText(/Reveal Key Criteria & Verify Answer/i);
    fireEvent.click(revealBtn);

    // Check Canonical Explanation & Checklist appear
    expect(screen.getByText(/Canonical Cognitive Explanation/i)).toBeInTheDocument();
    expect(screen.getByText(/Objective Recall Checklist/i)).toBeInTheDocument();

    // Check all criteria checkboxes (evaluated as 'correct')
    const checkboxes = screen.getAllByRole('checkbox');
    checkboxes.forEach(cb => fireEvent.click(cb));

    // Click Commit
    const commitBtn = screen.getByText(/Commit & Schedule Next Interval/i);
    fireEvent.click(commitBtn);

    // Feedback message appears
    await waitFor(() => {
      expect(screen.getByText(/Review logged as CORRECT/i)).toBeInTheDocument();
    });
  });

  it('shows completion state when no reviews are due', () => {
    // Store where all nextReviewDueAt are in the far future
    const store = createInitialMemoryStore();
    for (const key of Object.keys(store.conceptStates)) {
      store.conceptStates[key as keyof typeof store.conceptStates].nextReviewDueAt = '2099-01-01T00:00:00.000Z';
    }
    saveLearnerMemory(store);

    render(
      <LearningProvider>
        <TestReviewContainer />
      </LearningProvider>
    );

    const openBtn = screen.getByText('Open Spaced Review');
    fireEvent.click(openBtn);

    expect(screen.getByText(/All Scheduled Reviews Completed!/i)).toBeInTheDocument();
  });
});
