import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import sassDts from "vite-plugin-sass-dts";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // <----- comment this to generate /src/components/bla.module.scss.d.ts
        // additionalData: `@use "@primer-io/goat" as goat;`,
        // importers: [
        //   new NodePackageImporter(),
        // {
        //   findFileUrl: async (url, _context) => {
        //     console.log(`----------- ${url}`);
        //     if (url !== '@primer-io/goat') {
        //       return new URL(url);
        //     }
        //     return new URL(
        //       `file://${path.resolve(__dirname, './node_modules/@primer-io/goat')}`,
        //     );
        //   },
        // },
        // ],
      },
    },
  },
  build: {
    outDir: "build",
    target: "esnext",
    sourcemap: true,
  },
  plugins: [
    react(),
    sassDts({
      enabledMode: ["production"],
      prettierFilePath: ".prettierrc",
    }),
  ],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});
