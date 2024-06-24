import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "@/router/index.js"
import { createPinia } from 'pinia'
import '@/styles/common.scss'


const app = createApp(App);
const pinia = createPinia();
app.use(router)
app.use(pinia)
app.mount('#app')
