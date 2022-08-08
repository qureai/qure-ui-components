import { ComponentStory } from "@storybook/react";
import classNames from "classnames";
import React from "react";

export default function CustomTemplate<T>(
  Component: React.FC<T>,
  noDefaultClassName = false
): ComponentStory<typeof Component> {
  return function templateWorker(args) {
    return (
      <div
        className={classNames({
          "w-full max-w-xs mx-auto": !noDefaultClassName,
        })}
      >
        <Component {...args} />
      </div>
    );
  };
}
