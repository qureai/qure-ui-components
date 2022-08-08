import * as React from "react";
import { IFormikTextBox } from "./model";
import PlainTextBox from "../../composite/TextBox";
import ErrorMessage from "../ErrorMessage";

const FormikTextBox = <K,>(props: IFormikTextBox<K>) => {
  const { formObject, name, label, type = "text", ...rest } = props;
  const error = formObject.errors as Record<string, any>;
  const errorMessage = error[name] as string;

  return (
    <>
      <PlainTextBox
        {...rest}
        {...formObject.getFieldProps(name)}
        hasError={Boolean(errorMessage)}
        label={label}
        type={type}
      />
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </>
  );
};

export default FormikTextBox;
