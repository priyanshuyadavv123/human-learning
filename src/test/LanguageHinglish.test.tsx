import { describe, it, expect, beforeEach, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { findTutorAnswer } from '../data/tutorKnowledge.ts';
import { TUTOR_PROMPTS_HINGLISH, adaptToHinglish, HINGLISH_GENERIC_FALLBACK } from '../data/tutorHinglishAdapter.ts';
import { getTutorSystemInstruction } from '../../server/groundingContext.ts';
import { validateChatRequest } from '../../server/tutorHandler.ts';
import { LearningProvider, useLearning } from '../context/LearningContext.tsx';
import { Header } from '../components/layout/Header.tsx';

// Test consumer component to verify context toggle and persistence
const LanguageTestConsumer: React.FC = () => {
  const { language, toggleLanguage, setLanguage } = useLearning();
  return (
    <div>
      <span data-testid="current-lang">{language}</span>
      <button data-testid="toggle-btn" onClick={toggleLanguage}>
        Toggle Language
      </button>
      <button data-testid="set-en-btn" onClick={() => setLanguage('en')}>
        Set EN
      </button>
      <button data-testid="set-hinglish-btn" onClick={() => setLanguage('hinglish')}>
        Set Hinglish
      </button>
    </div>
  );
};

describe('Dual Language (English & Hinglish) Support Suite', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  describe('Tutor Knowledge & Hinglish Adapter', () => {
    it('returns standard English response by default or when language is "en"', () => {
      const enAnswer = findTutorAnswer('working memory capacity Cowan Sweller', 'en');
      expect(enAnswer.title).toContain('Working Memory Architecture');
      expect(enAnswer.takeaway).toMatch(/novel elements|scratchpad|bandwidth/i);
    });

    it('returns rich Hinglish response when language is "hinglish"', () => {
      const hinglishAnswer = findTutorAnswer('working memory capacity Cowan Sweller', 'hinglish');
      expect(hinglishAnswer.title).toContain('Working Memory Architecture');
      expect(hinglishAnswer.takeaway).toContain('scratchpad');
      expect(hinglishAnswer.takeaway).toMatch(/tarah hai|saturate ho jati hai|bypass/i);
      expect(hinglishAnswer.detailedResponse).toMatch(/dimag|chunks|scratchpad/i);
    });

    it('adapts illusion of competence query to Hinglish with deep cognitive intuition', () => {
      const hinglishAnswer = findTutorAnswer('fluency illusion rereading recognition', 'hinglish');
      expect(hinglishAnswer.title).toContain('Fluency ka Dhoka');
      expect(hinglishAnswer.detailedResponse).toContain('visual cortex familiar patterns dekhkar relax ho jata hai');
      expect(hinglishAnswer.socraticChallenge).toContain('Screen se nazar hatao');
    });

    it('returns HINGLISH_GENERIC_FALLBACK for unmatched queries in hinglish mode', () => {
      const fallback = findTutorAnswer('completely unknown query zzzz 9999', 'hinglish');
      expect(fallback).toEqual(HINGLISH_GENERIC_FALLBACK);
      expect(fallback.title).toContain('Hinglish Mode');
      expect(fallback.takeaway).toContain('5 core mechanisms');
      expect(fallback.detailedResponse).toContain('Attention (selective biological gate)');
      expect(fallback.detailedResponse).toContain('Working Memory (~4 chunks ka limited scratchpad)');
    });

    it('provides distinct TUTOR_PROMPTS_HINGLISH with relatable queries', () => {
      expect(TUTOR_PROMPTS_HINGLISH.length).toBeGreaterThanOrEqual(4);
      for (const prompt of TUTOR_PROMPTS_HINGLISH) {
        expect(prompt.id).toBeDefined();
        expect(prompt.label).toBeDefined();
        expect(prompt.query).toMatch(/kyu|kaise|karke|kya/i);
        expect(prompt.conceptTarget).toBeDefined();
      }
    });

    it('safely handles entries that lack custom overrides using adaptToHinglish fallback', () => {
      const customEntry = {
        keywords: ['test'],
        title: 'Arbitrary Un-overridden Concept',
        summary: 'Brief overview',
        takeaway: 'Key idea',
        detailedResponse: 'Deep technical mechanism explanation with academic citations.',
        socraticChallenge: 'How would you test this?',
        referencedSection: 'Lesson 99.1',
      };

      const adapted = adaptToHinglish(customEntry);
      expect(adapted.title).toBe('Arbitrary Un-overridden Concept (Hinglish Guide)');
      expect(adapted.detailedResponse).toContain('[Hinglish Summary]');
      expect(adapted.detailedResponse).toContain('passive reading se nahi, balki active retrieval');
      expect(adapted.socraticChallenge).toContain('Socratic Sawaal:');
    });
  });

  describe('Server-Side Grounding & Request Validation', () => {
    it('appends Hinglish mode instruction to tutor system prompt when language is "hinglish"', () => {
      const enPrompt = getTutorSystemInstruction('how-learning-actually-works', 'en');
      expect(enPrompt).not.toContain('LANGUAGE INSTRUCTION: HINGLISH MODE ACTIVE');

      const hinglishPrompt = getTutorSystemInstruction('how-learning-actually-works', 'hinglish');
      expect(hinglishPrompt).toContain('LANGUAGE INSTRUCTION: HINGLISH MODE ACTIVE');
      expect(hinglishPrompt).toContain('Keep core technical and scientific concepts in English');
      expect(hinglishPrompt).toContain('natural, friendly, intellectually rigorous Hinglish');
    });

    it('validates and sanitizes language property in tutor chat request', () => {
      const validHinglish = validateChatRequest({
        message: 'Working memory overload se kaise bachein?',
        language: 'hinglish',
      });
      expect(validHinglish.valid).toBe(true);
      expect(validHinglish.data?.language).toBe('hinglish');

      const defaultEn = validateChatRequest({
        message: 'How do schemas reduce working memory load?',
      });
      expect(defaultEn.valid).toBe(true);
      expect(defaultEn.data?.language).toBe('en');
    });
  });

  describe('LearningContext & Header Language Switcher', () => {
    it('initializes with "en" and toggles to "hinglish", persisting to localStorage', () => {
      render(
        <LearningProvider>
          <LanguageTestConsumer />
        </LearningProvider>
      );

      const langDisplay = screen.getByTestId('current-lang');
      const toggleBtn = screen.getByTestId('toggle-btn');

      expect(langDisplay.textContent).toBe('en');

      // Toggle to Hinglish
      fireEvent.click(toggleBtn);
      expect(langDisplay.textContent).toBe('hinglish');
      expect(localStorage.getItem('human_learning_platform_language_v1')).toBe('hinglish');

      // Toggle back to English
      fireEvent.click(toggleBtn);
      expect(langDisplay.textContent).toBe('en');
      expect(localStorage.getItem('human_learning_platform_language_v1')).toBe('en');
    });

    it('loads initial language state from localStorage when pre-configured', () => {
      localStorage.setItem('human_learning_platform_language_v1', 'hinglish');

      render(
        <LearningProvider>
          <LanguageTestConsumer />
        </LearningProvider>
      );

      expect(screen.getByTestId('current-lang').textContent).toBe('hinglish');
    });

    it('renders the interactive Language Switcher button in Header and toggles mode', () => {
      render(
        <LearningProvider>
          <Header />
        </LearningProvider>
      );

      // Initial state is English: button displays "EN"
      const switcherBtn = screen.getByRole('button', { name: /switch language to hinglish/i });
      expect(switcherBtn).toBeDefined();
      expect(switcherBtn.textContent).toContain('EN');

      // Click to toggle to Hinglish
      fireEvent.click(switcherBtn);

      // Now button displays "हिं Hinglish"
      expect(screen.getByRole('button', { name: /switch language to english/i })).toBeDefined();
      expect(screen.getByText(/हिं Hinglish/i)).toBeDefined();
    });
  });
});
