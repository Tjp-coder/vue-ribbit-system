// createRouter:创建router实例对象
//createWebHistory:创建history模式的路由
import {createRouter,createWebHistory} from "vue-router";
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            component: Layout,
            children: [
                {
                    path: "category/:id",
                    component: ()=>import('@/views/Category/index.vue')
                },
                {
                    path: "",
                    component: ()=>import('@/views/Home/index.vue')
                },
            ]
        },
        {
            path: '/login',
            component: Login,
        }
    ]
})

export default router