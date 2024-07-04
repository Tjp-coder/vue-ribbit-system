import {getBannerAPI} from "@/apis/home.js";
import {ref} from "vue";

export function useBanner(){
    const bannerList = ref([])
    const getBanner = async () => {
        const res = await getBannerAPI({
            distributionSite: '2'
        })
        bannerList.value = res.result
    }

    getBanner()

    return{
        bannerList
    }
}
