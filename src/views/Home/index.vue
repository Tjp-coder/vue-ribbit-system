<script setup>

import HomeHotRecommend from "@/views/Home/components/HomeHotRecommend.vue";
import HomeNewGoods from "@/views/Home/components/HomeNewGoods.vue";
import HomeCategory from "@/views/Home/components/HomeCategory.vue";
import HomeBanner from "@/views/Home/components/HomeBanner.vue";
import HomeProduct from "@/views/Home/components/HomeProduct.vue";
</script>

<template>
<!--  左侧分类和轮播图-->
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>

<!--  新鲜好物、人气推荐、产品列表-->
  <HomeNewGoods />
  <HomeHotRecommend />
  <HomeProduct />
</template>

