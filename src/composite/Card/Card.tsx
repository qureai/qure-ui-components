import classNames from "classnames";
import React from "react";
import { ICard } from "./Card.model";
import "./index.css";

const defaultPadding = "";

const Card = (props: ICard) => {
  const { children } = props;

  return (
    <div
      className={classNames(
        defaultPadding,
        "card drop-shadow-sm border bg-white"
      )}
    >
      {children}
    </div>
  );
};

const Header = ({ children }: { children: React.ReactNode }) => {
  return <div className="py-3 border-b">{children}</div>;
};

const Body = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-3">{children}</div>;
};

const Actions = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-xl font-semibold leading-loose">{children}</p>;
};

const SubTitle = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-md leading-loose">{children}</p>;
};

Card.Header = Header;
Card.Body = Body;
Card.Title = Title;
Card.SubTitle = SubTitle;

export default Card;
