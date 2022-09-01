import * as React from "react";
import classNames from "classnames";
import { defaultStyles, sizes, variants } from "./constants";
import { IButton } from "./";

const Button = ({
  variant = "primary",
  size = "normal",
  onClick,
  className,
  children,
}: IButton) => {
  const variantStyle = variants[variant];
  const sizeStyle = sizes[size];
  return (
    <button
      className={classNames(defaultStyles, variantStyle, sizeStyle, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
