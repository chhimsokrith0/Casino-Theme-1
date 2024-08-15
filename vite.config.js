import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    fs: {
      allow: [
        // Allow serving files from one level up to the project root
        '..',
        // Explicitly allow serving files from the 'node_modules' directory
        'Theme-Moblie/node_modules'
      ]
    }
  }
})
