import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const plotlyMin = path.resolve(__dirname, 'node_modules/plotly.js-dist-min/plotly.min.js')

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      'plotly.js/dist/plotly': plotlyMin,
      'plotly.js': plotlyMin,
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
