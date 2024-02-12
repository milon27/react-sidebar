- 1 create vite project

- 1 vite.config.ts

```ts
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import packageJson from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  // * added this build config
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
  plugins: [react(), dts()], // * added this dts() plugin
});
```

- 1 tsconfig compiler option

```json
{
  "compilerOptions": {
    // ....
    "declaration": true,
    "typeRoots": ["./dist/index.d.ts"]
    // ....
  }
}
```

- 1 package.json

```json
{
  "name": "@milon27/react-sidebar",
  "private": false,
  "version": "5.0.0",
  "type": "module",
  "main": "dist/index.js", // main entry file
  "typings": "dist/index.d.ts", // generated types
  "files": ["dist"], // all lib files after compilation
  "engines": {
    "node": ">=10"
  }
  // ... others config
}
```

## how to publish

```bash

# login
npm login
# publish
npm publish

```
