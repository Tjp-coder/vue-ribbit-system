import {ref} from 'vue'
import {defineStore} from 'pinia'
import {getBannerAPI} from "@/apis/banner.js";

export const useBannerStore = defineStore('banner',()=>{
    const bannerList = ref([])
    const getBanner = async () => {
        const res = await getBannerAPI()
        console.log(res)
        bannerList.value = res.result
    }

    return{
        bannerList,
        getBanner
    }
});


