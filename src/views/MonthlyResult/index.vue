<template>
  <div class="container">
    <h1 class="view-title">이달의 결과물</h1>
    <monthly-content
      v-for="(result, i) in monthlyResults"
      :key="`monthly-result-${i}`"
      :title="result.title"
      :category="result.category"
      :id="i"
    />
  </div>
</template>

<script setup lang="ts">
import MonthlyContent from "@/components/MonthlyContent.vue";
import { monthlyContents } from "@/assets/monthlyContent.ts";
const monthlyResults = monthlyContents.filter((mc) => mc.category == "result");
</script>
