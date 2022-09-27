import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCommonStore = defineStore("common", () => {
  const menuList = ref([
    { code: "0001", name: "About", path: "/about" },
    { code: "0101", name: "월간 박범민" },
    { code: "0201", name: "Contact", path: "/contact" },
  ]);
  const goTo = (des: String) => {
    if (des == "instagram") {
      //TODO 인스타링크로 보내기
      console.log(1);
    }
  };

  return { menuList, goTo };
});
