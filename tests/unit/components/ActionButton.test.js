import { mount } from "@vue/test-utils";

import ActionButton from "@/components/ActionButton";

describe("ActionButton", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "I'm so clickable",
      },
    });
    expect(wrapper.text()).toMatch("I'm so clickable");
  });

  it("applies one of several styles to button", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Text",
        type: "primary",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});
