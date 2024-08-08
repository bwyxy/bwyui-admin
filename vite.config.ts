import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'; 
import AutoImport from "unplugin-auto-import/vite";
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dts : 'types/auto-imports.d.ts',
      // 配置自动导入文件
      imports: ['vue','vue-router','pinia'],
      // 规则
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.json', // 生成的文件路径
        globalsPropValue: true,
      }
    }),
    Components({
      dirs : ['src/components']
    })
  ],
  resolve : {
    alias: {
      '@': path.resolve(__dirname , './src')
    }
  },
  css:{
    preprocessorOptions:{
      scss : {
        additionalData: `@import "@/styles/mixin.scss";`
      }
    }
  }
})
