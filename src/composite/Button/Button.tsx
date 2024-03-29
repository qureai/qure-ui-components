import * as React from "react";
import classNames from "classnames";
import { defaultStyles, sizes, variants } from "./constants";
import {IButton} from './'

const Button = (props: IButton) => {
  const {
    variant = "primary",
    size = "normal",
    onClick,
    children,
  } = props;
  const variantStyle = variants[variant];
  const sizeStyle = sizes[size];
  return (
    <button
      className={classNames(defaultStyles, variantStyle, sizeStyle)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
