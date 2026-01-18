import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // because this is a user page: supunbuddhika.github.io
  plugins: [react()],
})
