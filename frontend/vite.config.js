import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // You can replace '@' with any alias you prefer
    },
  },
  css: {
    devSourcemap: false,
  },
});
