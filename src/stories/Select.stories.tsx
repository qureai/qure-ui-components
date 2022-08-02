import React from "react";
import Select from "../composite/Select";
import CustomTemplate from "./customTemplate";

export default {
  title: "Composite/Select",
  component: Select,
};

const Template = CustomTemplate(Select);

export const SimpleSelect = Template.bind({});
SimpleSelect.args = {
  options: [{ label: "Option", value: "" }],
};
