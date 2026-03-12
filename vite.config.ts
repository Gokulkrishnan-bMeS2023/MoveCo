import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    minify: "esbuild",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("node_modules")) {
            if (id.includes("@chakra-ui")) return "chakra";
            if (id.includes("framer-motion")) return "motion";
            if (id.includes("react-icons")) return "icons";
            return "vendor";
          }
        },
      },
    },
  },
});
