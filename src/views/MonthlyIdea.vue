<template>
  <div class="container">
    <h1 class="view-title">이달의 아이디어</h1>
    <monthly-content :title="'test'" :category="'test'" :url="'test'" />
    <monthly-content :title="'test'" :category="'test'" :url="'test'" />
  </div>
</template>

<script setup lang="ts">
import MonthlyContent from "@/components/MonthlyContent.vue";
</script>
