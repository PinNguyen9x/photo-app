import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@features": "/src/features",
      "@utils": "/src/utils",
      "@constants": "/src/constants",
      "@assets": "/src/assets",
      "@app": "/src/app",
      "@custom-fields/*": "/src/custom-fields/*",
      "@custom-fields": "/src/custom-fields/index.ts",
    },
  },
});
