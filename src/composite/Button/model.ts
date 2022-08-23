import { ReactNode } from "react";

export default interface IButton {
  children: ReactNode;
  variant?: VARIANTS;
  size?: SIZES;
  onClick?: () => void;
}

export type VARIANTS = "primary" | "secondary" | "link";

export type SIZES = "small" | "normal" | "medium" | "large";
