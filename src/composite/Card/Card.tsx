import classNames from "classnames";
import React from "react";
import { ALIGN, ICard } from "./Card.model";
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
  return <div className="py-4 border-b">{children}</div>;
};

const Body = ({ children }: { children: React.ReactNode }) => {
  const defaultClassName = "pb-4";
  return <div className={classNames(defaultClassName)}>{children}</div>;
};

const Content = ({ children }: { children: React.ReactNode }) => {
  const defaultClassName = "px-4 pt-4 text-sm tracking-[.0178em] opacity-60";
  return <div className={classNames(defaultClassName)}>{children}</div>;
};

const Actions = ({
  children,
  align = "start",
}: {
  children: React.ReactNode;
  align?: ALIGN;
}) => {
  const defaultClassName = `flex px-4 pt-4 gap-x-4 items-center justify-content-${align}`;

  return <div className={classNames(defaultClassName)}>{children}</div>;
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-xl font-semibold leading-8 px-4 pt-4">{children}</p>;
};

export { Header, Body, Title, Actions, Content };
export default Card;
