import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import AboutContent from "../AboutContent.vue";

describe("AboutContent", () => {
  it("renders properly", () => {
    const wrapper = mount(AboutContent, {
      props: { title: "about title", content: "about content" },
    });
    expect(wrapper.text()).toContain("about title");
    expect(wrapper.text()).toContain("about content");
  });
});
