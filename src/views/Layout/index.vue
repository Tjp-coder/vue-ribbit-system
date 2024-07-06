<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from "@/views/Layout/components/LayoutFixed.vue";
import {useCategoryStore} from "@/stores/categoryStore.js";
import {onMounted} from "vue";

//页面加载时，加载数据
onMounted(() => {
  const categoryStore = useCategoryStore();
  categoryStore.getCategory();
})

</script>

<template>
  <LayoutFixed/>
  <LayoutNav/>
  <LayoutHeader/>
  <!--二级路由出口-->
<!--  <RouterView :key="$route.fullPath"/>-->
  <RouterView/>
  <LayoutFooter/>
</template>