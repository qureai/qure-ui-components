import React from "react";

export type ITextBox =
  | React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    > &
      OptionalTextBox;

export type OptionalTextBox = {
  label?: string;
  hasError?: boolean;
};
