import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LearningProvider } from '../context/LearningContext.tsx';
import { PredictionInteraction } from '../components/lesson/PredictionInteraction.tsx';

describe('PredictionInteraction Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders the prediction prompt and 3 study protocol options', () => {
    render(
      <LearningProvider>
        <PredictionInteraction />
      </LearningProvider>
    );

    expect(screen.getByText(/Commit your intuition before reading the explanation/i)).toBeInTheDocument();
    expect(screen.getByText(/Protocol Alpha: Repeated Reading/i)).toBeInTheDocument();
    expect(screen.getByText(/Protocol Beta: Read Once \+ Active Retrieval/i)).toBeInTheDocument();
    expect(screen.getByText(/Protocol Gamma: Massed Night-Before Immersion/i)).toBeInTheDocument();
  });

  it('allows selecting an option and locks in prediction to reveal empirical outcome', () => {
    render(
      <LearningProvider>
        <PredictionInteraction />
      </LearningProvider>
    );

    const submitBtn = screen.getByRole('button', { name: /Lock In Prediction & Reveal Evidence/i });
    expect(submitBtn).toBeDisabled();

    // Select Protocol Beta
    const radioBeta = screen.getByDisplayValue('opt-retrieval');
    fireEvent.click(radioBeta);

    expect(submitBtn).not.toBeDisabled();
    fireEvent.click(submitBtn);

    // After submit, empirical outcome, learner-specific feedback, and comparative retention matrix are shown
    expect(screen.getByText(/Active Retrieval produces substantially higher delayed retention/i)).toBeInTheDocument();
    expect(screen.getByText(/Empirically Supported Strategy \(The Testing Effect\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Evidence vs. Simplified Modeling:/i)).toBeInTheDocument();
  });
});
