import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@/*': resolve(__dirname, 'src/*'),
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer,
        tailwindcss,
      ],
    },
  },
})
