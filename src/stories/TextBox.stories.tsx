import TextBox from "../composite/TextBox";
import CustomTemplate from "./customTemplate";

export default {
  title: "Form/TextBox",
  component: TextBox,
};

const Template = CustomTemplate(TextBox);
export const Text = Template.bind({});
Text.args = {
  label: "Your Name",
  placeholder: "First name",
  type: "text",
  hasError: false,
};

export const Number = Template.bind({});
Number.args = {
  label: "Phone Number",
  placeholder: "Phone Number",
  type: "number",
  hasError: false,
};
