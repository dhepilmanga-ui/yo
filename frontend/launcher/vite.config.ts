import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import { fileURLToPath } from 'url'

const r = (p: string) => path.resolve(path.dirname(fileURLToPath(import.meta.url)), p)

export default defineConfig({
  root: r('.'),
  plugins: [react()],
  resolve: {
    alias: {
      '@shared': path.resolve(r('..'), 'shared')
    }
  },
  optimizeDeps: {
    include: ['three', '@react-three/fiber']
  },
  server: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: true,
    allowedHosts: true
  },
  preview: {
    host: '0.0.0.0', 
    port: 5000
  },
  build: {
    target: 'es2020',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'three': ['three'],
          'react': ['react', 'react-dom']
        }
      }
    }
  }
})