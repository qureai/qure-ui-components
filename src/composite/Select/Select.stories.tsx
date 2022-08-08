import React from "react";
import Select from ".";
import CustomTemplate from "../../stories/customTemplate";

export default {
  title: "Elements/Select",
  component: Select,
};

const Template = CustomTemplate(Select);

export const SimpleSelect = Template.bind({});
SimpleSelect.args = {
  options: [{ label: "Option", value: "" }],
};
