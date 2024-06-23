<script>
// @/符号只起联想提示作用，而不是实际路径转换，真正路径转换由vite.config.js中的defineConfig函数中的 resolve.alias配置完成

import {getCategoryAPI} from "@/apis/category.js";
const res = getCategoryAPI();
console.log(res)
</script>

<template>
  <el-button type="primary">我是 ElButton</el-button>
</template>

<style scoped>

</style>
