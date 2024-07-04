import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js"
import { createPinia } from 'pinia'

// 全局指令注册
import { lazyPlugin } from '@/directives'

// 引入初始化样式文件
import '@/styles/common.scss'

const app = createApp(App);
// const pinia = createPinia();
// app.use(pinia)
app.use(router)
app.use(createPinia())   //写法，解决vue dev-tools 不出现pinia
app.use(lazyPlugin)

app.mount('#app')


