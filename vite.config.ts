
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Setting base to './' ensures that all asset paths are relative.
  // This is essential for GitHub Pages project sites like /Loop-Web/
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
