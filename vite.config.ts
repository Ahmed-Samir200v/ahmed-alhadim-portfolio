import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("framer-motion")) return "vendor-motion";
          if (id.includes("@radix-ui")) return "vendor-radix";
          if (id.includes("recharts") || id.includes("/d3-")) return "vendor-charts";
          if (id.includes("lucide-react")) return "vendor-icons";
          if (id.includes("react-dom") || (id.includes("/react/") && !id.includes("react-"))) return "vendor-react";
          return "vendor";
        },
      },
    },
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
  },
});
