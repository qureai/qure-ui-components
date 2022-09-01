import React, { ReactNode } from "react";

export default interface IButton {
  children: ReactNode;
  variant?: VARIANTS;
  size?: SIZES;
  className?: string;
  onClick?: (e: React.ChangeEvent<any>) => void;
}

export type VARIANTS = "primary" | "secondary" | "link";

export type SIZES = "small" | "normal" | "medium" | "large";
