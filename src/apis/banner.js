import httpInstance from "@/utils/http.js";
export function getBannerAPI(){
    return httpInstance({
        url:'/home/banner'
    })
}