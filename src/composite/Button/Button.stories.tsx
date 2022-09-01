import React from "react";
import { ComponentStory } from "@storybook/react";
import Button from ".";

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
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
  children: "Link",
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

export const Variants = () => (
  <>
    <Button className="mx-3">Primary</Button>
    <Button className="mx-3" variant="secondary">
      Secondary
    </Button>
    <Button className="mx-3" variant="link">
      Link
    </Button>
  </>
);

export const Sizes = () => (
  <>
    <Button className="mx-3" size="small">
      Primary
    </Button>
    <Button className="mx-3"> Primary </Button>
    <Button className="mx-3" size="medium">
      Primary
    </Button>
    <Button className="mx-3" size="large">
      Primary
    </Button>
  </>
);
