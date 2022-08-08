import React from "react";
import Button from ".";
import CustomTemplate from "../../stories/customTemplate";

export default {
  title: "Elements/Button",
  component: Button,
  parameters: {
    docs: {},
  },
};

const Template = CustomTemplate(Button);

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
  onClick: () => {
    console.log("clicked");
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary",
  variant: "secondary",
};

export const Link = Template.bind({});
Link.args = {
  children: "Button",
  variant: "link",
};

export const Small = Template.bind({});
Small.args = {
  children: "Small",
  size: "small",
};

export const Normal = Template.bind({});
Normal.args = {
  children: "Normal",
};

export const Medium = Template.bind({});
Medium.args = {
  children: "Medium",
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  children: "Large",
  size: "large",
};
