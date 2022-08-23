import * as React from "react";
import { IErrorMessage } from "./model";

const ErrorMessage = (props: IErrorMessage) => {
  const { message } = props;
  return (
    <p className="mt-2 text-sm text-red-600" data-testid="error-message">
      {message}
    </p>
  );
};

export default ErrorMessage;
