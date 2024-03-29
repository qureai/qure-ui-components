import React from "react";
import Button from "../Button";
import Card, { Content } from ".";
import { Body, Title, Actions } from ".";
import CustomTemplate from "../../stories/customTemplate";

export default {
  title: "Elements/Card",
  component: Card,
};

const Template = CustomTemplate(Card);

export const SimpleCard = Template.bind({});
SimpleCard.args = {
  children: (
    <>
      <Title>Simple Card</Title>
      <Body>
        <Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque totam
          porro nisi delectus cumque atque ex dolores mollitia eaque
          voluptatibus optio, maxime quibusdam minima, dolorem adipisci
          obcaecati alias corporis libero! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Neque totam porro nisi delectus cumque
          atque ex dolores mollitia eaque voluptatibus optio, maxime quibusdam
          minima, dolorem adipisci obcaecati alias corporis libero!
        </Content>
        <Actions>
          <Button variant="secondary">No</Button>
          <Button variant="secondary">Yes</Button>
        </Actions>
      </Body>
    </>
  ),
};

export const CardWithTitle = Template.bind({});
CardWithTitle.args = {
  children: (
    <Body>
      <Title>A Title</Title>
      <Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque totam
        porro nisi delectus cumque atque ex dolores mollitia eaque voluptatibus
        optio, maxime quibusdam minima, dolorem adipisci obcaecati alias
        corporis libero!
      </Content>
    </Body>
  ),
};

export const CardBody = Template.bind({});
CardBody.args = {
  children: (
    <Body>
      <Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque totam
        porro nisi delectus cumque atque ex dolores mollitia eaque voluptatibus
        optio, maxime quibusdam minima, dolorem adipisci obcaecati alias
        corporis libero!
      </Content>
    </Body>
  ),
};
