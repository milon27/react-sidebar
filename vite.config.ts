import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import packageJson from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, path.join("src", "index.ts")),
      name: packageJson.name,
      fileName: (format) => {
        if (format === "es") {
          return `index.js`;
        }
        return `index.${format}.js`;
      },
      // fileName: (format) => `index.${format}.js`,
      // formats: ["cjs", "es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
    sourcemap: true,
  },
  plugins: [react(), dts()],
});
