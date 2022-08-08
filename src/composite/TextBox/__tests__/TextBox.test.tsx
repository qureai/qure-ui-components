import * as React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { ITextBox } from "../model";
import TextBox from "..";

describe("TextBox", () => {
  const SetupTextBox = (props: ITextBox) => {
    const [value, setValue] = React.useState("");

    const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
      e.preventDefault();
      setValue((e.target as HTMLInputElement).value);
    };
    return <TextBox {...props} value={value} onChange={handleChange} />;
  };

  it("renders without errors", () => {
    const { container } = render(<TextBox />);
    expect(container).not.toBeNull();
  });

  it("renders with expected args", () => {
    const props: ITextBox = {
      label: "My Name",
      name: "myName",
    };
    const { getByTestId } = render(<TextBox {...props} />);

    expect(getByTestId("textbox-label").textContent).toEqual(props.label);
    expect(getByTestId("textbox-input").getAttribute("type")).toEqual("text");
    expect(getByTestId("textbox-input").getAttribute("name")).toEqual(
      props.name
    );
    expect(getByTestId("textbox-label").getAttribute("for")).toEqual(
      props.name
    );
  });

  it("renders entered text", () => {
    const props: ITextBox = {
      label: "First Name",
      name: "firstName",
    };
    const { getByTestId } = render(<SetupTextBox {...props} />);

    const inputElem = getByTestId("textbox-input");

    fireEvent.change(inputElem, { target: { value: "jj" } });

    waitFor(() => {
      expect(inputElem.textContent).toEqual("jj");
    })

  });
});
