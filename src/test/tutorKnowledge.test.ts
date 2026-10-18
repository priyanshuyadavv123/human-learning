import { describe, it, expect } from 'vitest';
import { findTutorAnswer, TUTOR_PROMPTS } from '../data/tutorKnowledge.ts';

describe('AI Tutor Knowledge Base & Retrieval', () => {
  it('provides quick inquiry prompts', () => {
    expect(TUTOR_PROMPTS.length).toBeGreaterThanOrEqual(4);
  });

  it('correctly maps working memory queries to the working memory concept', () => {
    const answer = findTutorAnswer('How many chunks can working memory hold?');
    expect(answer.title).toContain('Working Memory');
    expect(answer.detailedResponse).toContain('3 to 4');
    expect(answer.socraticChallenge).toBeTruthy();
    expect(answer.referencedSection).toContain('Working Memory');
  });

  it('correctly maps retrieval queries to testing effect concept', () => {
    const answer = findTutorAnswer('Why is retrieval practice better than restudying?');
    expect(answer.title).toContain('Testing Effect');
    expect(answer.detailedResponse).toContain('reconsolidation');
  });

  it('correctly maps attention queries to attention bottleneck concept', () => {
    const answer = findTutorAnswer('What happens when multitasking breaks my attention?');
    expect(answer.title).toContain('Attention');
    expect(answer.detailedResponse).toContain('residue');
  });

  it('returns honest transparency fallback for out-of-domain queries', () => {
    const answer = findTutorAnswer('What is the capital of France?');
    expect(answer.title).toContain('Contextual Socratic Guidance');
    expect(answer.detailedResponse).toContain('Phase 1');
    expect(answer.detailedResponse).toContain('Attention');
  });
});
