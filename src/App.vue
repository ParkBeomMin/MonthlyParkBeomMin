<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Gnb from "@/components/Gnb.vue";
</script>

<template>
  <Header />
  <div class="title horizontal-container center bottom-line">
    <h1>월간 박범민</h1>
  </div>
  <Gnb />
  <RouterView />
</template>

<style scoped>
.title {
  padding: 36px;
}
</style>
