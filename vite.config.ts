import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // ✅ Use root path — this ensures your live site is https://supavsolutions.com/
  base: "/",

  server: {
    host: "::",         // allows LAN + localhost access
    port: 8080,         // same dev port you used
    open: true,         // auto-opens in browser
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  // ✅ Alias configuration (import using "@/components/..." etc.)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // ✅ Optimized production build settings
  build: {
    sourcemap: mode === "development", // source maps only in dev mode
    outDir: "dist",                    // output directory
    assetsDir: "assets",               // asset directory

    rollupOptions: {
      output: {
        // ✅ Consistent file naming for better cache-busting
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: ({ name }) => {
          if (name && name.endsWith(".css")) return "assets/[name]-[hash][extname]";
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },

  // ✅ Performance tweaks
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "react-helmet-async"],
  },
}));
