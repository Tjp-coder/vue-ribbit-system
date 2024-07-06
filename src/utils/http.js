import axios from 'axios'
import {ElMessage} from "element-plus";
import {useUserStore} from "@/stores/userStore.js";
import {useRouter} from "vue-router";

// 创建axios实例
const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000 //请求的超时时间
})

//请求拦截器
httpInstance.interceptors.request.use(
    function(config) {
        // 在发送请求之前做些什么，比如添加认证信息、处理请求参数等
        // 添加Token
        const userStore = useUserStore()
        const token = userStore.userInfo.token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    function(error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
)

//响应拦截器
httpInstance.interceptors.response.use(
    function(response) {
        // 对响应数据做点什么，这里直接返回 res.data 是常见的做法
        return response.data;
    },
    function(error) {
        // 对响应错误做点什么，比如错误处理、提示用户等

        const userStore = useUserStore()
        const router = useRouter();

        // 统一错误提示
        ElMessage({
            type: 'warning',
            message: error.response.data.message
        })

        // 401 清除token信息并跳转到登录页面
        if(error.response && error.response.status === 401){
            userStore.clearUserInfo();
            router.push('/login');
        }

        return Promise.reject(error);
    }
)

export default httpInstance
