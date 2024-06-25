import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "@/router/index.js"
import { createPinia } from 'pinia'
import '@/styles/common.scss'


const app = createApp(App);
// const pinia = createPinia();
app.use(router)
app.use(createPinia())   //写法，解决vue dev-tools 不出现pinia
// app.use(pinia)
app.mount('#app')
