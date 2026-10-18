import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LearningProvider } from '../context/LearningContext.tsx';
import { QuizSection } from '../components/lesson/QuizSection.tsx';

describe('QuizSection Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders all questions and keeps explanations locked initially', () => {
    render(
      <LearningProvider>
        <QuizSection />
      </LearningProvider>
    );

    expect(screen.getByText(/Cognitive Verification Assessment/i)).toBeInTheDocument();
    expect(screen.getByText(/Answers locked until submission/i)).toBeInTheDocument();
    expect(screen.queryByText(/Pedagogical Mechanism:/i)).not.toBeInTheDocument();
  });

  it('grades answers and reveals pedagogical rationales only after submission', () => {
    render(
      <LearningProvider>
        <QuizSection />
      </LearningProvider>
    );

    const submitBtn = screen.getByRole('button', { name: /Submit Assessment & Reveal Solutions/i });
    expect(submitBtn).toBeDisabled();

    // Answer Q1: option q1-b
    const q1Radio = screen.getByDisplayValue('q1-b');
    fireEvent.click(q1Radio);

    // Answer Q2: option q2-c
    const q2Radio = screen.getByDisplayValue('q2-c');
    fireEvent.click(q2Radio);

    // Answer Q3: option q3-a
    const q3Radio = screen.getByDisplayValue('q3-a');
    fireEvent.click(q3Radio);

    // Answer Q4: option q4-b
    const q4Radio = screen.getByDisplayValue('q4-b');
    fireEvent.click(q4Radio);

    expect(submitBtn).not.toBeDisabled();
    fireEvent.click(submitBtn);

    // Should reveal results
    expect(screen.getByText(/Assessment Mastered/i)).toBeInTheDocument();
    expect(screen.getByText(/You achieved 100%/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Pedagogical Mechanism:/i).length).toBe(4);
    expect(screen.getByRole('button', { name: /Retake Assessment/i })).toBeInTheDocument();
  });
});
