<template>
  <div class="container bottom-line" @mouseleave="setShowSubMenu(false)">
    <ul class="horizontal-container center">
      <li v-for="menu in depth1MenuList" :key="`menu-${menu.code}`">
        <router-link v-if="menu.path" :to="menu.path">
          {{ menu.name }}
        </router-link>
        <div v-else @mouseover="setShowSubMenu(true)">
          <a href="javascript:void(0)">{{ menu.name }}</a>
          <ul
            v-if="isShowSubMenu"
            class="sub-menu-container"
            @mouseleave="setShowSubMenu(false)"
          >
            <li
              v-for="subMenu in depth2MenuList"
              :key="`sub-menu-${menu.code}-${subMenu.code}`"
              class="bottom-line"
            >
              <router-link :to="subMenu.path">
                {{ subMenu.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from "../stores/common";
import { RouterLink, RouterView } from "vue-router";
import { Menu } from "@/utils/type.ts";
import { computed, ref } from "vue";
const { menuList } = useCommonStore();
const depth1MenuList = computed(() =>
  menuList.filter((menu: Menu) => menu.code.length == 2)
);
const depth2MenuList = computed(() =>
  menuList.filter((menu: Menu) => menu.code.length == 4)
);
let isShowSubMenu = ref(false);
const setShowSubMenu = (isOpen: boolean) => {
  isShowSubMenu.value = isOpen;
};
</script>

<style scoped>
.container {
  padding: 16px;
}

.container > ul > li {
  margin-left: 18px;
  margin-right: 18px;
}

.sub-menu-container {
  top: 40px;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  border: 0.5px solid #b8b8c7;
  background-color: white;
  padding: 16px;
  width: 140px;
  z-index: 2;
}

.sub-menu-container > li {
  margin: 8px 0px;
  padding-bottom: 4px;
}
</style>
