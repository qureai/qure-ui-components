import React from "react";
import { ITextBox } from "../TextBox/model";

export type TDebouncedTextBox = {
  timeout: number;
  onChange: (e: React.ChangeEvent<any>) => void;
} & Omit<ITextBox, "value" | "onChange">;
