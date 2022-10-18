<template>
  <div class="container">
    <ul class="menu">
      <li><router-link to="/">月刊 朴範民</router-link></li>
      <li v-for="(menu, i) in menuListWithPath" :key="`footer-menu-${i}`">
        <router-link :to="menu.path">{{ menu.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from "../stores/common";
import { Menu } from "@/utils/type.ts";
import { computed } from "vue";
const { menuList } = useCommonStore();
const menuListWithPath = computed(() =>
  menuList.filter((menu: Menu) => !!menu.path)
);
</script>

<style scoped>
.container {
  display: flex;
  background-color: black;
  color: white;
  height: 80px;
}

.menu {
  display: flex;
  flex-direction: row;
}

.menu li {
  margin: 0px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu a {
  color: white;
}
</style>
