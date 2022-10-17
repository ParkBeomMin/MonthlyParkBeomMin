<template>
  <div class="container">
    <h1 class="view-title">이달의 아이디어</h1>
    <monthly-content
      v-for="(idea, i) in monthlyIdeas"
      :key="`monthly-idea-${i}`"
      :title="idea.title"
      :category="idea.category"
      :id="i"
    />
  </div>
</template>

<script setup lang="ts">
import MonthlyContent from "@/components/MonthlyContent.vue";
import { monthlyContents } from "@/assets/monthlyContent.ts";
const monthlyIdeas = monthlyContents.filter((mc) => mc.category == "idea");
</script>
