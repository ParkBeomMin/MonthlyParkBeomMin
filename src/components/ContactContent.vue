<template>
  <div class="container">
    <slot />
    <a href="javascript:void(0)" @click="$emit('onClick')">{{ value }}</a>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
interface Props {
  value: string;
}
defineProps<Props>();
</script>

<style scoped>
.container {
  display: flex;
  margin-bottom: 16px;
  align-content: center;
}

.container > a {
  margin-left: 16px;
  font-size: 16px;
}
</style>
