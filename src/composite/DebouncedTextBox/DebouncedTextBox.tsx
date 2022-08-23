import * as React from "react";
import { TDebouncedTextBox } from "./model";
import TextBox from "../TextBox";
import _ from "lodash";

const DebounceTextBox = (props: TDebouncedTextBox) => {
  const { onChange, timeout, ...rest } = props;

  const fn = _.debounce(onChange, timeout)

  return <TextBox onChange={fn} {...rest} />;
};

export default DebounceTextBox;
