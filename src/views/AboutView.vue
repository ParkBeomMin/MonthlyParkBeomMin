<template>
  <div class="container">
    <h1>About</h1>
    <AboutContent :title="'test'" :contents="'test'" />
  </div>
</template>

<script setup lang="ts">
import AboutContent from "@/components/AboutContent.vue";
</script>

<style scoped>
.container > h1 {
  text-align: center;
  margin-bottom: 32px;
}

.container > h1:after {
  content: "";
  display: block;
  width: 2rem;
  height: 2px;
  background: black;
  margin: 1rem auto 0;
}
</style>
