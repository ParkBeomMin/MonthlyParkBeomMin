<template>
  <router-link class="container" :to="url">
    <div>
      <div class="category">
        <span>{{ category }}</span>
      </div>
      <h1>{{ title }}</h1>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
interface Props {
  category: string;
  title: string;
  id: string | number;
}

const props = defineProps<Props>();
const url = computed(() => `/monthly-idea/${props.id}`);
</script>

<style scoped>
.container {
  border: 1px solid #a0a0a0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  margin-bottom: 32px;
}
</style>
