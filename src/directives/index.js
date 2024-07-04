// 定义懒加载插件
import {useIntersectionObserver} from "@vueuse/core";

//自定义图片懒加载指令
export const lazyPlugin = {
    install(app) {
        //懒加载指令逻辑
        app.directive('img-lazy', {
            mounted(el, binding) {
                // el: 指令绑定的那个元素 img
                // binding: binding.value  指令等于号后面绑定的表达式的值  图片url
                // console.log(el, binding.value) //打印查看绑定的值

                const {stop} = useIntersectionObserver(
                    el, //监听的目标对象
                    ([{isIntersecting}]) => {
                        console.log(isIntersecting) //isIntersecting 代表是否进入可视区域
                        if (isIntersecting) {
                            // 进入视口区域
                            el.src = binding.value
                            stop()
                        }
                    },
                )
            }
        })
    }
}
