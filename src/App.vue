<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Gnb from "@/components/Gnb.vue";
</script>

<template>
  <Header />
  <div class="title horizontal-container center bottom-line">
    <router-link class="black no-bg" to="/">
      <h1>月刊 朴範民</h1>
    </router-link>
  </div>
  <Gnb />
  <RouterView class="router-view-container" />
</template>

<style scoped>
.title {
  padding: 36px;
}
.router-view-container {
  padding: 32px 128px;
}
</style>
