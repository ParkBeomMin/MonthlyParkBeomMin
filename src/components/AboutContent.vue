<template>
  <div class="container">
    <p class="title">
      {{ title }}
    </p>
    <p class="contents">{{ contents }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
interface Props {
  title: string;
  contents: string;
}
const props = defineProps<Props>();
</script>

<style scoped>
.container {
  margin-bottom: 16px;
}
.title {
  font-weight: bold;
  margin-bottom: 32px;
}
</style>
