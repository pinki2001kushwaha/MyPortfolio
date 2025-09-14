import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,   // network pe accessible banane ke liye
    port: 5173,   // (optional) custom port, default 5173 hota hai
  },
})
