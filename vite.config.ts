/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tutorApiPlugin } from './server/vitePlugin.ts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tutorApiPlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
})
