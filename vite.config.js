import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/',


server: {
    port: 5174, // Chọn cổng khác tại đây
  }


})
