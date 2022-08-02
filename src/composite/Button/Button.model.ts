enum SIZE {
  small,
  normal,
  medium,
  large,
}

enum VARIANT {
  primary,
  primary_light,
  secondary,
  text,
  link,
}

export default interface IButton {
  label: string;
  variant: "primary" | "primary_light" | "secondary" | "link";
  size: "small" | "normal" | "medium" | "large";
  onClick: () => void;
}
