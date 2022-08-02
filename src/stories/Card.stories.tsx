import React from "react";
import Card from "../composite/Card";
import CustomTemplate from "./customTemplate";

export default {
  title: "Composite/Card",
  component: Card,
};

const Template = CustomTemplate(Card);

export const SimpleCard = Template.bind({});
SimpleCard.args = {
  children: (
    <Card.Body>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque totam porro
      nisi delectus cumque atque ex dolores mollitia eaque voluptatibus optio,
      maxime quibusdam minima, dolorem adipisci obcaecati alias corporis libero!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque totam porro
      nisi delectus cumque atque ex dolores mollitia eaque voluptatibus optio,
      maxime quibusdam minima, dolorem adipisci obcaecati alias corporis libero!
    </Card.Body>
  ),
};

export const CardWithHeader = Template.bind({});
CardWithHeader.args = {
  children: (
    <>
      <Card.Header>A Header</Card.Header>
      <Card.Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque totam
        porro nisi delectus cumque atque ex dolores mollitia eaque voluptatibus
        optio, maxime quibusdam minima, dolorem adipisci obcaecati alias
        corporis libero!
      </Card.Body>
    </>
  ),
};

export const CardWithTitle = Template.bind({});
CardWithTitle.args = {
  children: (
    <>
      <Card.Body>
        <Card.Title>A Title</Card.Title>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque totam
        porro nisi delectus cumque atque ex dolores mollitia eaque voluptatibus
        optio, maxime quibusdam minima, dolorem adipisci obcaecati alias
        corporis libero!
      </Card.Body>
    </>
  ),
};

export const CardWithSubTitle = Template.bind({});
CardWithSubTitle.args = {
  children: (
    <>
      <Card.Body>
        <Card.Title>A Title</Card.Title>
        <Card.SubTitle>A SubTitle</Card.SubTitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque totam
        porro nisi delectus cumque atque ex dolores mollitia eaque voluptatibus
        optio, maxime quibusdam minima, dolorem adipisci obcaecati alias
        corporis libero!
      </Card.Body>
    </>
  ),
};
