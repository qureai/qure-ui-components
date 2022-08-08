import { ITextBox } from "./model";
import * as React from "react";
import classNames from "classnames";
// import {DebounceInput} from 'react-debounce-input';

const TextBox = (props: ITextBox) => {
  const {
    type = 'text',
    name,
    label: labelText,
    className,
    hasError = false,
    ...rest
  } = props;

  const errorInputClassNames =
    "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500";

  return (
    <>
      {labelText && (
        <label
          data-testid="textbox-label"
          className="block text-sm font-medium text-gray-700"
          htmlFor={name}
        >
          {labelText}
        </label>
      )}
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          data-testid="textbox-input"
          type={type}
          name={name}
          className={classNames(
            "block w-full border-gray-300 sm:text-sm rounded-md",
            className,
            {
              [errorInputClassNames]: hasError,
            }
          )}
          {...rest}
        />
      </div>
    </>
  );
};

export default TextBox;
