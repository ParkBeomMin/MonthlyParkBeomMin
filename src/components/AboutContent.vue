<template>
  <div class="container">
    <p class="title">
      {{ title }}
    </p>
    <p class="contents">{{ content }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
interface Props {
  title: string;
  content: string;
}
const props = defineProps<Props>();
</script>

<style scoped>
.container {
  margin-bottom: 32px;
}
.title {
  font-weight: bold;
  margin-bottom: 16px;
}
</style>
