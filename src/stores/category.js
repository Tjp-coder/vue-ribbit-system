import {ref} from 'vue'
import {defineStore} from 'pinia'
import {getCategoryAPI} from '@/apis/category.js'

export const useCategoryStore = defineStore('category', () => {
    // 导航列表的数据管理
    // state 导航列表数据
    const categoryList = ref([])

    // action 获取导航数据的方法
    //加async await 是异步的，并且调用返回promise对象的是promise对象的结果
    //不加async await 是同步的，并且调用返回promise对象的是promise对象本身
    const getCategory = async () => {
        const res = await getCategoryAPI()
        categoryList.value = res.result
    }

    return {
        categoryList,
        getCategory
    }
})