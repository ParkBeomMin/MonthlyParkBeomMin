<template>
  <div class="container">
    <h1 class="view-title">About</h1>
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
