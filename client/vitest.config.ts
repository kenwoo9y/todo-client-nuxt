// vitest.config.ts
import { fileURLToPath } from 'node:url';
import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
  test: {
    environment: 'nuxt',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      thresholds: {
        statements: 54,
        branches: 50,
        functions: 22,
        lines: 54,
      },
      exclude: [
        '**/virtual:nuxt:**',
        '**/.nuxt/**',
        '**/node_modules/**',
        '**/*.config.*',
        '**/*.test.*',
      ],
    },
  },
});
