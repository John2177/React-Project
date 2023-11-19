import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //須加上此段，否則會出現process is not defined錯誤
  define: {
    'process.env': {
      REACT_APP_RAPID_API_KEY: 'bbaa410c38mshf532a99275995b4p1b7b58jsn0950385fe02e'
    }
  }
})
