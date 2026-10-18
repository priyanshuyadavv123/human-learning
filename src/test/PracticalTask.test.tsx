import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LearningProvider } from '../context/LearningContext.tsx';
import { PracticalTask } from '../components/lesson/PracticalTask.tsx';

describe('PracticalTask Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders 3 steps and allows inserting example blueprints', () => {
    render(
      <LearningProvider>
        <PracticalTask />
      </LearningProvider>
    );

    expect(screen.getByText(/Audit & Upgrade Your Current Learning Routine/i)).toBeInTheDocument();
    expect(screen.getByText(/Identify Your Target Domain/i)).toBeInTheDocument();
    expect(screen.getByText(/Diagnose Your Primary Failure Mode/i)).toBeInTheDocument();
    expect(screen.getByText(/Design a Concrete Retrieval Protocol/i)).toBeInTheDocument();

    const insertBtns = screen.getAllByRole('button', { name: /Insert Example/i });
    expect(insertBtns.length).toBe(3);

    // Click insert example for all 3
    insertBtns.forEach(btn => fireEvent.click(btn));

    const saveBtn = screen.getByRole('button', { name: /Save Actionable Learning Protocol/i });
    expect(saveBtn).not.toBeDisabled();
    fireEvent.click(saveBtn);

    expect(screen.getByText(/Protocol Stored in Workspace/i)).toBeInTheDocument();
  });
});
