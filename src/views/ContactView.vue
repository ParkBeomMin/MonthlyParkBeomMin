<template>
  <div class="container">
    <h1 class="view-title">Contact</h1>
    <div class="contacts">
      <contact-content :value="contacts.email" @onClick="goTo('email')">
        <icon-email />
      </contact-content>
      <contact-content :value="contacts.phone" @onClick="goTo('phone')">
        <icon-phone />
      </contact-content>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconEmail from "@/components/icons/IconEmail.vue";
import IconPhone from "@/components/icons/IconPhone.vue";
import ContactContent from "@/components/ContactContent.vue";
import { contacts } from "@/assets/constants";
import { useCommonStore } from "@/stores/common.ts";
const { goTo } = useCommonStore();
</script>

<style scoped>
.contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
