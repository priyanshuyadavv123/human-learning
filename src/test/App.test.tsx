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
});
