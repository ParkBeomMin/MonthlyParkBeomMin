import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCommonStore = defineStore("common", () => {
  const menuList = ref([
    { code: "01", name: "About", path: "/about" },
    { code: "02", name: "월간 박범민" },
    { code: "0201", name: "이달의 아이디어", path: "/" },
    { code: "03", name: "Contact", path: "/contact" },
  ]);
  const goTo = (des: String) => {
    if (des == "instagram") {
      //TODO 인스타링크로 보내기
      console.log(1);
    }
  };

  return { menuList, goTo };
});
