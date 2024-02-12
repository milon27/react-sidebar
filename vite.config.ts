import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, path.join("src", "index.ts")),
      name: "react-sidebar",
      fileName: (format, name) => {
        if (format === "es") {
          return `index.js`;
        }
        return `${name}.${format}.js`;
      },
      // fileName: (format) => `index.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
    cssMinify: true,
    sourcemap: true,
    copyPublicDir: false,
  },
  plugins: [react(), dts()],
});
