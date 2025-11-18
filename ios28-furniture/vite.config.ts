import path from 'node:path'

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@atoms': path.resolve(__dirname, 'src/components/atoms'),
      '@molecules': path.resolve(__dirname, 'src/components/molecules'),
      '@organisms': path.resolve(__dirname, 'src/components/organisms'),
      '@foundations': path.resolve(__dirname, 'src/components/foundations'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@content': path.resolve(__dirname, 'src/content'),
      '@i18n': path.resolve(__dirname, 'src/i18n'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@theme': path.resolve(__dirname, 'src/theme'),
      '@tests': path.resolve(__dirname, 'src/__tests__'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    css: true,
    coverage: {
      reporter: ['text', 'lcov'],
    },
  },
})
