import { createApp } from 'vue';
import App from './App.vue';
import router from "@/router/index.js";
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';


//ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'

//vue-quill
import '@vueup/vue-quill/dist/vue-quill.snow.css';

// 全局指令注册
import { lazyPlugin } from '@/directives';
import { componentPlugin } from '@/components/index.js';


// 引入初始化样式文件
import '@/styles/common.scss';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);
app.use(lazyPlugin);
app.use(componentPlugin);

//组件库和国际化
app.use(ElementPlus,{
    locale:zhCn
});
app.mount('#app');
