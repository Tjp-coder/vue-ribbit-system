import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath, URL} from "node:url";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'


//此文件是vite的配置文件

// https://vitejs.dev/config/
export default defineConfig({

    plugins: [vue(),
        //自动导入和组件  配置插件
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            // 配置elementPlus 使用 sass样式配色系统
            resolvers: [ElementPlusResolver({importStyle : "sass"})],
        }),
    ],
    resolve: {
        // 实际的路径转换  @  -> src
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },

    //css配置
    css: {
        preprocessorOptions: {
            scss: {
                // 自动导入定制化样式文件进行样式覆盖
                additionalData: `
          @use "@/styles/element/index.scss" as *;
        `,
            }
        }
    }
})
