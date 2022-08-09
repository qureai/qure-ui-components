import { render } from "@testing-library/react";
import React from "react";
import ErrorMessage from "../ErrorMessage";

describe("ErrorMessage", () => {
  it("renders without errors", () => {
    const message = "error";
    const { container, getByTestId } = render(
      <ErrorMessage message={message} />
    );
    expect(container).not.toBeNull();

    const errorElem = getByTestId("error-message");
    expect(errorElem.textContent).toEqual(message);
  });
});
