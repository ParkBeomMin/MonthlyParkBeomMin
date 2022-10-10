import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { contacts } from "@/assets/constants";

export const useCommonStore = defineStore("common", () => {
  const menuList = ref([
    { code: "01", name: "About", path: "/about" },
    { code: "02", name: "월간 박범민" },
    { code: "0201", name: "이달의 아이디어", path: "/monthly-idea" },
    { code: "0202", name: "이달의 아이디어", path: "/" },
    { code: "03", name: "Contact", path: "/contact" },
  ]);
  const goTo = (des: string) => {
    if (des == "instagram") {
      //TODO 인스타링크로 보내기
      console.log(1);
    } else if (des == "email") {
      window.location.href = `mailto:${contacts.email}`;
    } else if (des == "phone") {
      window.location.href = `tel:+82${contacts.phone.replace("-", "")}`;
    }
  };

  return { menuList, goTo };
});
