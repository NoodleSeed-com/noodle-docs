import react from "@vitejs/plugin-react-swc"
import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  root: ".", // Root directory
  publicDir: "public", // Static assets directory
  server: {
    open: false,
    port: 4173,
    allowedHosts: [
      "localhost",
      "clandestine-25367a37-9f9a-4c8a-84e0-88d2794b1a6b.fly.dev", // allows any *.fly.dev domain
      /.fly.dev$/, // allows any *.fly.dev domain
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
  },
})