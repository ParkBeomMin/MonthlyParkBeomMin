<template>
  <div class="container">
    <div class="container-header">
      <span class="category">{{ item.category.name }}</span>
      <h1 class="view-title">{{ item.title }}</h1>
    </div>
    <span class="label">목적</span>
    <p class="purpose">{{ item.purpose }}</p>
    <span class="label">내용</span>
    <p>{{ item.content }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { monthlyContents } from "@/assets/monthlyContent.ts";
const route = useRoute();
console.log(route.params);
const monthlyIdeas = monthlyContents.filter((mc) => mc.category.code == "0001");
const item = monthlyIdeas[route.params.id];
</script>

<style scoped>
.container-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 16px;
}

.category {
  margin-bottom: 16px;
  text-align: center;
}

.label {
  font-size: 16px;
  font-weight: bold;
}

.purpose {
  padding-bottom: 32px;
}
</style>
