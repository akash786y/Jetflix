import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'


export default defineConfig({
  plugins: [react()],
  build:{
    rollupOptions: {
      external: ['react-router-dom']
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }
})