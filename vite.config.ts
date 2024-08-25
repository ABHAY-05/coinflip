import react from "@vitejs/plugin-react-swc";
import { Buffer } from "buffer";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      buffer: "buffer",
    },
  },
  define: {
    global: "globalThis",
    Buffer: Buffer,
  },
});
