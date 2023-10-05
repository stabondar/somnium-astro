import { defineConfig } from 'astro/config';
// import yaml from '@rollup/plugin-yaml';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel(),
  vite: 
  {
    base: '/',
    build: 
    {
        minify: true,
        manifest: true,
        rollupOptions: {
            input: './src/main.js',
            output: {
                format: 'esm',
                generatedCode: {
                    preset: 'es5',
                    arrowFunctions: false
                },
                entryFileNames: 'main.js',
                chunkFileNames: 'main-[name].js',
                assetFileNames: 'main-style.[ext]',
                esModule: true,
                compact: true,
                dynamicImportVars: true,
            },
        },
    }
  }
});