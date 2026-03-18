import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    minify: "esbuild",
    cssCodeSplit: true,
    target: "esnext",
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (!id.includes("node_modules")) return;

          // Icons — split by pack (check first, specific wins)
          if (id.includes("/react-icons/fa")) return "icons-fa";
          if (id.includes("/react-icons/lu")) return "icons-lu";
          if (id.includes("/react-icons/md")) return "icons-md";
          if (id.includes("/react-icons/bi")) return "icons-bi";
          if (id.includes("/react-icons/hi")) return "icons-hi";
          if (id.includes("/react-icons/io")) return "icons-io";
          if (id.includes("/react-icons/")) return "icons-other";

          // Axios — exact match only
          if (id.includes("/node_modules/axios/")) return "axios";

          // Recaptcha
          if (id.includes("/react-google-recaptcha")) return "recaptcha";

          // Router
          if (id.includes("/react-router")) return "router";

          // Chakra + Emotion — must NOT separate these
          if (id.includes("/@chakra-ui/")) return "chakra";
          if (id.includes("/@emotion/")) return "chakra";

          // Framer Motion
          if (id.includes("/framer-motion/")) return "motion";

          // Everything else including react, react-dom → vendor
          // Don't manually split react — let Rollup handle it
          // to avoid circular dependency issues
          return "vendor";
        },
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "@chakra-ui/react"],
  },
});
