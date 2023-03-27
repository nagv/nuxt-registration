import { mount } from "@vue/test-utils";
import Registration from "@/components/Registration.vue";

describe("Registration", () => {
  describe("When component is loaded", () => {
    test("Make sure Vue Component to be available", () => {
      const wrapper = mount(Registration);
      expect(wrapper.vm).toBeTruthy();
    });

    test("Make sure input text present in the form", () => {
      const wrapper = mount(Registration);

      const textInput = wrapper.find('input[type="text"]');

      expect(textInput.exists()).toBe(true);
    });

    test("Make sure email input present in the form", () => {
      const wrapper = mount(Registration);

      const emailInput = wrapper.find('input[type="email"]');

      expect(emailInput.exists()).toBe(true);
    });

    test("Make sure text area is present in the form", () => {
      const wrapper = mount(Registration);

      const textAreaInput = wrapper.find("textArea");

      expect(textAreaInput.exists()).toBe(true);
    });

    test("Make sure a button is present in the form", () => {
      const wrapper = mount(Registration);

      const submit = wrapper.find('button[type="submit"]');

      expect(submit.exists()).toBe(true);
    });
  });

  describe("when registration form is submiited ", () => {
    describe("when full name validation is failing ", () => {
      test("to display validation message for full name", async () => {
        const wrapper = mount(Registration);

        await wrapper.find('input[type="text"]').setValue("ab");

        await wrapper.find('input[type="email"]').setValue("abcd@gmail.com");

        await wrapper.find("textArea").setValue("123456789010");

        await wrapper.find("form").trigger("submit.prevent");

        expect(wrapper.find(".result").text()).toBe(
          "Full name must be at least 3 characters."
        );
      });
    });

    describe("when no validation issues with full name ", () => {
      test("to display Registration submit message", async () => {
        const wrapper = mount(Registration);

        await wrapper.find('input[type="text"]').setValue("abcd");

        await wrapper.find('input[type="email"]').setValue("abcd@gmail.com");

        await wrapper.find("textArea").setValue("123456789010");

        await wrapper.find("form").trigger("submit.prevent");

        expect(wrapper.find(".result").text()).toBe("Registration submitted");
      });
    });

    describe("when validation issues with message field ", () => {
      test("to display validation error", async () => {
        const wrapper = mount(Registration);

        await wrapper.find('input[type="text"]').setValue("abcd");

        await wrapper.find('input[type="email"]').setValue("abcd@gmail.com");

        await wrapper.find("textArea").setValue("12345678");

        await wrapper.find("form").trigger("submit.prevent");

        expect(wrapper.find(".result").text()).toBe(
          "Message should be 10 characters."
        );
      });
    });

    describe("when No validation issues with message field ", () => {
      test("to display Registration submit message", async () => {
        const wrapper = mount(Registration);

        await wrapper.find('input[type="text"]').setValue("abcd");

        await wrapper.find('input[type="email"]').setValue("abcd@gmail.com");

        await wrapper.find("textArea").setValue("123456789089");

        await wrapper.find("form").trigger("submit.prevent");

        expect(wrapper.find(".result").text()).toBe("Registration submitted");
      });
    });
  });
});
