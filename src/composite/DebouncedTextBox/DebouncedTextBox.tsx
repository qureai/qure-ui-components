import * as React from "react";
import { TDebouncedTextBox } from "./model";
import TextBox from "../TextBox";

const DebounceTextBox = (props: TDebouncedTextBox) => {
  const { onChange, timeout, ...rest } = props;

  const debouncedOnChange = () => {
    let timer: NodeJS.Timeout;

    return (e: React.ChangeEvent<any>) => {
      e.persist();
      clearTimeout(timer);
      timer = setTimeout(() => {
        onChange(e);
      }, timeout);
    };
  };

  const fn = debouncedOnChange();

  return <TextBox onChange={fn} {...rest} />;
};

export default DebounceTextBox;
