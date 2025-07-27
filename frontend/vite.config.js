// frontend/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // ✅ Ensures relative asset paths for S3
  build: {
    outDir: 'dist', // ✅ Ensures build output goes to /dist
  },
})
