<script setup>

import HomeHotRecommend from "@/views/Home/components/HomeHotRecommend.vue";
import HomeNewGoods from "@/views/Home/components/HomeNewGoods.vue";
import HomeCategory from "@/views/Home/components/HomeCategory.vue";
import HomeBanner from "@/views/Home/components/HomeBanner.vue";
import HomeProduct from "@/views/Home/components/HomeProduct.vue";
import HomePanel from "@/views/Home/components/HomePanel.vue";
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

<!--  测试面板组件-->
  <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
    <div>
      我是新鲜好物插槽的内容
    </div>
  </HomePanel>

  <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
    <div>
      我是人气推荐插槽的内容
    </div>
  </HomePanel>
</template>

