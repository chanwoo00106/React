/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { configDefaults } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    exclude: [...configDefaults.exclude],
    include: [resolve(__dirname, "src/**/*.test.ts?(x)")],
  },
});
