import { describe, it, expect, beforeEach } from 'vitest';
import { 
  createInitialMemoryStore,
  migrateV1ToV2,
  loadLearnerMemory,
  saveLearnerMemory,
  resetLearnerMemory,
  exportLearnerMemoryJson,
  validateMemoryStoreSchema,
  MEMORY_STORAGE_KEY_V2,
  LEGACY_STORAGE_KEY_V1,
  BACKUP_STORAGE_KEY_V1,
} from '../services/memoryStorage.ts';
import type { UserProgress } from '../types/learning.ts';
import { KNOWN_CONCEPTS } from '../types/memory.ts';

describe('Memory Storage & Migration Engine', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('createInitialMemoryStore', () => {
    it('initializes store with schemaVersion 2 and all canonical concepts', () => {
      const store = createInitialMemoryStore('2026-10-19T00:00:00.000Z');
      expect(store.schemaVersion).toBe(2);
      expect(store.baselineEvidence).toEqual([]);
      expect(store.delayedReviews).toEqual([]);
      
      for (const conceptId of KNOWN_CONCEPTS) {
        const c = store.conceptStates[conceptId];
        expect(c).toBeDefined();
        expect(c.reviewIntervalDays).toBe(1);
        expect(c.easeFactor).toBe(2.0);
        expect(c.stage).toBe('untested');
        expect(c.totalAttempts).toBe(0);
        expect(c.consecutiveSuccesses).toBe(0);
      }
    });
  });

  describe('migrateV1ToV2 & Baseline Separation', () => {
    const mockV1Progress: UserProgress = {
      theme: 'light',
      activeLessonId: 'how-learning-actually-works',
      lessonStates: {
        'how-learning-actually-works': {
          predictionAnswer: 'opt-rereading', // Incorrect prediction (rereading illusion)
          predictionSubmitted: true,
          exerciseSubmitted: true,
          exerciseAnswers: {
            'scenario-1': 'attention-bottleneck',
            'scenario-2': 'working-memory-overload',
          },
          quizSubmitted: true,
          quizAnswers: {
            'q1': 'opt-c',
          },
          quizScore: 100,
          isCompleted: true,
        },
      },
    };

    it('migrates baseline evidence without claiming delayed review', () => {
      const migrated = migrateV1ToV2(mockV1Progress, '2026-10-19T00:00:00.000Z');
      expect(migrated.schemaVersion).toBe(2);
      expect(migrated.baselineEvidence.length).toBeGreaterThan(0);

      // STRICT: Every baseline record must have isDelayedRetrieval: false
      for (const ev of migrated.baselineEvidence) {
        expect(ev.isDelayedRetrieval).toBe(false);
      }

      // Delayed reviews array must start completely empty
      expect(migrated.delayedReviews).toEqual([]);

      // Prediction error should flag hypercorrection on retrieval concept
      const retrievalState = migrated.conceptStates['concept:testing_effect_retrieval_strength'];
      expect(retrievalState.hypercorrectionPending).toBe(true);
      expect(retrievalState.stage).toBe('reinforcing');
      expect(retrievalState.activeMisconceptions).toContain('misconception:rereading_fluency_illusion');
    });

    it('creates safety backup of V1 and preserves original V1 key in localStorage', () => {
      localStorage.setItem(LEGACY_STORAGE_KEY_V1, JSON.stringify(mockV1Progress));

      const loaded = loadLearnerMemory('2026-10-19T00:00:00.000Z');
      expect(loaded.schemaVersion).toBe(2);

      // Original V1 must NOT be deleted
      const originalV1 = localStorage.getItem(LEGACY_STORAGE_KEY_V1);
      expect(originalV1).not.toBeNull();
      expect(JSON.parse(originalV1!).activeLessonId).toBe('how-learning-actually-works');

      // Backup copy must exist
      const backupV1 = localStorage.getItem(BACKUP_STORAGE_KEY_V1);
      expect(backupV1).not.toBeNull();
      expect(backupV1).toBe(originalV1);
    });

    it('is strictly idempotent: repeated migrations on identical data yield identical state', () => {
      const run1 = migrateV1ToV2(mockV1Progress, '2026-10-19T00:00:00.000Z');
      const run2 = migrateV1ToV2(mockV1Progress, '2026-10-19T00:00:00.000Z');
      expect(run1).toEqual(run2);
    });
  });

  describe('Corrupted Storage Recovery', () => {
    it('recovers safely to clean store when localStorage contains malformed JSON', () => {
      localStorage.setItem(MEMORY_STORAGE_KEY_V2, 'this is totally invalid json{[[}');

      const loaded = loadLearnerMemory();
      expect(loaded).toBeDefined();
      expect(loaded.schemaVersion).toBe(2);
      expect(Object.keys(loaded.conceptStates).length).toBe(KNOWN_CONCEPTS.length);
    });

    it('recovers safely when V2 store has invalid schema version', () => {
      localStorage.setItem(MEMORY_STORAGE_KEY_V2, JSON.stringify({ schemaVersion: 99, data: 'unsupported' }));

      const loaded = loadLearnerMemory();
      expect(loaded.schemaVersion).toBe(2);
    });
  });

  describe('Export & Import Schema Validation', () => {
    it('exports formatted JSON and validates successfully upon import', () => {
      const store = createInitialMemoryStore('2026-10-19T00:00:00.000Z');
      const json = exportLearnerMemoryJson(store);
      expect(typeof json).toBe('string');

      const parsed = JSON.parse(json);
      const validation = validateMemoryStoreSchema(parsed);
      expect(validation.valid).toBe(true);
      expect(validation.store?.schemaVersion).toBe(2);
    });

    it('rejects import with missing required concept states', () => {
      const invalid = {
        schemaVersion: 2,
        baselineEvidence: [],
        delayedReviews: [],
        conceptStates: {
          'concept:attention_serial_bottleneck': {
            reviewIntervalDays: 1,
            easeFactor: 2.0,
            nextReviewDueAt: '2026-10-20T00:00:00.000Z',
          },
          // Missing other 4 concepts!
        },
      };

      const res = validateMemoryStoreSchema(invalid);
      expect(res.valid).toBe(false);
      expect(res.error).toContain('Missing required concept state');
    });

    it('rejects import with invalid reviewIntervalDays (< 1)', () => {
      const store = createInitialMemoryStore();
      store.conceptStates['concept:attention_serial_bottleneck'].reviewIntervalDays = 0; // Invalid!

      const res = validateMemoryStoreSchema(store);
      expect(res.valid).toBe(false);
      expect(res.error).toContain('Invalid reviewIntervalDays');
    });

    it('rejects import with invalid easeFactor (< 1.3 or > 2.5)', () => {
      const store = createInitialMemoryStore();
      store.conceptStates['concept:attention_serial_bottleneck'].easeFactor = 3.5; // Invalid!

      const res = validateMemoryStoreSchema(store);
      expect(res.valid).toBe(false);
      expect(res.error).toContain('Invalid easeFactor');
    });

    it('rejects import if baseline evidence claims isDelayedRetrieval: true', () => {
      const store = createInitialMemoryStore();
      // Poison baseline array
      (store.baselineEvidence as unknown as Array<Record<string, unknown>>).push({
        id: 'fake-baseline',
        conceptId: 'concept:attention_serial_bottleneck',
        isDelayedRetrieval: true, // INVALID for baseline!
      });

      const res = validateMemoryStoreSchema(store);
      expect(res.valid).toBe(false);
      expect(res.error).toContain('Baseline evidence must have isDelayedRetrieval set to false');
    });
  });

  describe('resetLearnerMemory', () => {
    it('resets memory store to clean baseline in localStorage', () => {
      const store = createInitialMemoryStore();
      store.delayedReviews.push({
        id: 'rev-1',
        conceptId: 'concept:attention_serial_bottleneck',
        reviewedAt: '2026-10-19T00:00:00.000Z',
        elapsedDaysSinceLastReview: 1,
        evaluatedOutcome: 'correct',
        previousIntervalDays: 1,
        newIntervalDays: 3,
        isDelayedRetrieval: true,
      });
      saveLearnerMemory(store);

      const reset = resetLearnerMemory('2026-10-19T00:00:00.000Z');
      expect(reset.delayedReviews).toEqual([]);
      expect(reset.baselineEvidence).toEqual([]);
      expect(reset.conceptStates['concept:attention_serial_bottleneck'].reviewIntervalDays).toBe(1);

      const reloaded = loadLearnerMemory();
      expect(reloaded.delayedReviews).toEqual([]);
    });
  });
});
