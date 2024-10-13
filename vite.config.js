import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/it-support-website/',
  plugins: [react()],
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
  }
})
