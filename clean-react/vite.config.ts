/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  test: {
    exclude: [...configDefaults.exclude],
    include: [resolve(__dirname, 'src/**/*.{test,spec}.ts?(x)')],
    globals: true,
    environment: 'jsdom',
  },
})
