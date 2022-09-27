<template>
  <div class="container bottom-line">
    <IconInstagram @click.prevent="goTo('instagram')" />
  </div>
</template>

<script setup lang="ts">
import IconInstagram from "./icons/IconInstagram.vue";
import { useCommonStore } from "../stores/common";

const { goTo } = useCommonStore();
</script>

<style scoped>
.container {
  display: flex;
  justify-content: end;
  padding: 8px;
}
</style>
