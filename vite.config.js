import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Theme-Mobile1/',
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: ['@fortawesome/fontawesome-free/css/all.min.css'],
    },
  },
  resolve: {
    alias: {
      '@fortawesome/fontawesome-free': import.meta.resolve('@fortawesome/fontawesome-free/css/all.min.css'),
    },
  },
})
