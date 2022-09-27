<template>
  <div class="container bottom-line">
    <ul class="horizontal-container center">
      <li v-for="menu in menuList" :key="`menu-${menu.code}`">
        <router-link :to="'/'">{{ menu.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from "../stores/common";
const { menuList } = useCommonStore();
</script>

<style scoped>
.container {
  padding: 16px;
}
.container > ul > li {
  margin-left: 18px;
  margin-right: 18px;
}
</style>
