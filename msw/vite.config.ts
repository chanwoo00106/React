import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@types", replacement: resolve(__dirname, "./src/types") },
      { find: "@lib", replacement: resolve(__dirname, "./src/lib") },
      { find: "@hooks", replacement: resolve(__dirname, "./src/hooks") },
    ],
  },
});
