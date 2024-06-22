import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath, URL} from "node:url";
//此文件是vite的配置文件

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 实际的路径转换  @  -> src
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
