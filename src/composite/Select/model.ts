import React from "react";

export default interface ISelect {
  name?: string;
  label?: string;
  className?: string;
  defaultValue?: string | number;
  options?: { label: string; value: string | number }[];
  handleChange?: (e: React.ChangeEvent<any>) => void;
}
