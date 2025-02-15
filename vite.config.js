import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Ensure the root is correctly set to the project directory
  build: {
    outDir: 'dist',
  },
});
