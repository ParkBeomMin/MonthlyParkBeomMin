<template>
  <div class="container">
    <h1>About</h1>
    <AboutContent
      v-for="(a, i) in aboutContents"
      :key="`about-content-${i}`"
      :title="a.title"
      :content="a.content"
    />
  </div>
</template>

<script setup lang="ts">
import AboutContent from "@/components/AboutContent.vue";
import { aboutContents } from "@/assets/constants";
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
