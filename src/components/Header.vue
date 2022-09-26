<template>
  <div class="container">
    <IconInstagram @click.prevent="goTo('instagram')" />
  </div>
</template>

<script setup lang="ts">
import IconInstagram from "./icons/IconInstagram.vue";
//TODO 컴포지션API로 빼서 관리하기
const goTo = (des: String) => {
  if (des == "instagram") {
    //TODO 인스타링크로 보내기
    console.log(1);
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: end;
  padding: 8px;
  border-bottom: 0.5px solid #b8b8c7;
}
</style>
