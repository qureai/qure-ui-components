import * as React from 'react';
import classNames from "classnames";
import IButton from "./Button.model";
import { defaultStyles, sizes, variants } from "./constants";

const Button = (props: IButton) => {
  const { label, variant = "primary", size = "normal" } = props;
  const variantStyle = variants[variant];
  const sizeStyle = sizes[size];
  return (
    <button className={classNames(defaultStyles, variantStyle, sizeStyle)}>
      {label}
    </button>
  );
};

export default Button;
