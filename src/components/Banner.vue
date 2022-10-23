<template>
  <swiper class="banner" :navigation="true" :modules="modules">
    <swiper-slide
      v-for="(content, i) in bannerContents"
      :key="`main-banner-${i}`"
    >
      <monthly-content
        :title="content.title"
        :category="content.category.name"
        :id="content.id"
      />
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import MonthlyContent from "@/components/MonthlyContent.vue";
import { monthlyContents, monthlyCategories } from "@/assets/monthlyContent.ts";

const bannerContents = computed(() => {
  let tmp = [];
  monthlyCategories.forEach((category) => {
    const filterTmp = monthlyContents.filter(
      (c) => c.category.code == category.code
    );
    tmp = [...tmp, ...filterTmp.map((ft, i) => ({ id: i, ...ft }))];
  });
  return tmp;
});
const modules = [Navigation];
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
