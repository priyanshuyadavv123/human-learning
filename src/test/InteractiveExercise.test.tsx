import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LearningProvider } from '../context/LearningContext.tsx';
import { InteractiveExercise } from '../components/lesson/InteractiveExercise.tsx';

describe('InteractiveExercise Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders all 4 clinical scenarios', () => {
    render(
      <LearningProvider>
        <InteractiveExercise />
      </LearningProvider>
    );

    expect(screen.getByText(/Cognitive Bottleneck Diagnoser/i)).toBeInTheDocument();
    expect(screen.getByText(/SCENARIO 01/i)).toBeInTheDocument();
    expect(screen.getByText(/SCENARIO 02/i)).toBeInTheDocument();
    expect(screen.getByText(/SCENARIO 03/i)).toBeInTheDocument();
    expect(screen.getByText(/SCENARIO 04/i)).toBeInTheDocument();
  });

  it('evaluates answers and displays explanatory feedback upon submission', () => {
    render(
      <LearningProvider>
        <InteractiveExercise />
      </LearningProvider>
    );

    const evaluateBtn = screen.getByRole('button', { name: /Evaluate Clinical Diagnoses/i });
    expect(evaluateBtn).toBeDisabled();

    // Select categories for all 4 scenarios
    // Scenario 1: Passive Illusion of Fluency
    const scen1Btns = screen.getAllByRole('button', { name: /Passive Illusion of Fluency/i });
    fireEvent.click(scen1Btns[0]);

    // Scenario 2: Attention Fragmentation
    const scen2Btns = screen.getAllByRole('button', { name: /Attention Fragmentation/i });
    fireEvent.click(scen2Btns[1]);

    // Scenario 3: Working Memory Overload
    const scen3Btns = screen.getAllByRole('button', { name: /Working Memory Overload/i });
    fireEvent.click(scen3Btns[2]);

    // Scenario 4: Active Schema Consolidation
    const scen4Btns = screen.getAllByRole('button', { name: /Active Schema Consolidation/i });
    fireEvent.click(scen4Btns[3]);

    expect(evaluateBtn).not.toBeDisabled();
    fireEvent.click(evaluateBtn);

    // Explanatory feedback is revealed
    expect(screen.getByText(/Score: 4 \/ 4 Correct/i)).toBeInTheDocument();
    expect(screen.getByText(/Replace highlighting with the "Read-Cover-Recite-Check" protocol/i)).toBeInTheDocument();

    // Reset button appears
    const resetBtn = screen.getByRole('button', { name: /Reset & Re-diagnose/i });
    expect(resetBtn).toBeInTheDocument();
  });
});
