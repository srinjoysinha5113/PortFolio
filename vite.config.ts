import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (!id.includes('node_modules')) return

          if (id.includes('react') || id.includes('react-dom')) return 'vendor-react'
          if (id.includes('framer-motion') || id.includes('gsap') || id.includes('ogl')) {
            return 'vendor-animation'
          }

          return 'vendor'
        },
      },
    },
  },
})
