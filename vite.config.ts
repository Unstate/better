import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@ui': path.resolve(__dirname, 'src/shared/ui'),
      '@api': path.resolve(__dirname, 'src/shared/api'),
      '@config': path.resolve(__dirname, 'src/shared/config'),
      '@hooks': path.resolve(__dirname, 'src/features/hooks'),
    },
  },
})
