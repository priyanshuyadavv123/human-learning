import type { Plugin } from 'vite';
import { handleTutorChatRequest, handleTutorHealthCheck } from './tutorHandler.ts';

/**
 * Vite plugin that intercepts /api/tutor/* routes and serves them via Connect middleware
 * in development (`npm run dev`) and preview (`npm run preview`).
 */
export function tutorApiPlugin(): Plugin {
  return {
    name: 'tutor-api-plugin',
    configureServer(server) {
      try {
        process.loadEnvFile?.();
      } catch {
        // .env is optional
      }
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0];
        if (url === '/api/tutor/chat' && req.method === 'POST') {
          handleTutorChatRequest(req, res).catch(next);
          return;
        }
        if (url === '/api/tutor/health' && req.method === 'GET') {
          handleTutorHealthCheck(req, res);
          return;
        }
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0];
        if (url === '/api/tutor/chat' && req.method === 'POST') {
          handleTutorChatRequest(req, res).catch(next);
          return;
        }
        if (url === '/api/tutor/health' && req.method === 'GET') {
          handleTutorHealthCheck(req, res);
          return;
        }
        next();
      });
    },
  };
}
