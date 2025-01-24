import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/RegisterKaro/', // Matches your GitHub Pages repo name
});
