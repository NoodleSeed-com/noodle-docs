import react from "@vitejs/plugin-react-swc"
import { resolve } from "path"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: ".", // Root directory
  publicDir: "public", // Static assets directory
  // Base path for GitHub Pages - change this to your repository name
  // For example, if your repo is username.github.io/noodle-docs, use '/noodle-docs/'
  base: '/noodle-docs/',
  server: {
    open: false,
    port: 4173,
    allowedHosts: [
      "localhost",
    ],
  },
  resolve: {
    alias: {
      src: resolve(__dirname, "./src"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"], // Add extensions to resolve
  },
  build: {
    outDir: "dist",
    // Generate source maps for better debugging
    sourcemap: true,
  },
})
