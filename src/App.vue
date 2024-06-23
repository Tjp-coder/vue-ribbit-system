<script>
// @/符号只起联想提示作用，而不是实际路径转换，真正路径转换由vite.config.js中的defineConfig函数中的 resolve.alias配置完成

//测试接口
// import {getCategoryAPI} from "@/apis/category.js";
// const res = getCategoryAPI();
// console.log(res)
</script>

<template>
<!--  首页-->
<!--  一级路由出口-->
 <router-view></router-view>

<!--  测试scss-->
<!--  <div class="test">-->
<!--    test scss-->
<!--  </div>-->
</template>

<style scoped lang="scss">
.test{
  color: $helpColor
}
</style>
