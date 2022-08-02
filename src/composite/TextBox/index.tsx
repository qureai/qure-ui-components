import { ITextBox } from "./TextBox.model";
import * as React from 'react';

const TextBox = (props: ITextBox) => {
  const {noLabel, name} = props

  if (noLabel) {
    return (
      <input name={name} />
    )
  }
}

export default TextBox
