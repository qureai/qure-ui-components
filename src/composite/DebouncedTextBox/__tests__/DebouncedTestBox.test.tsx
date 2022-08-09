import * as React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DebounceTextBox from "../DebouncedTextBox";

describe("DebouncedTextBox", () => {
  const wait = (n: number) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res("");
      }, n);
    });
  };

  it("renders without errors", () => {
    const timeout = 200;
    const fn = (e: React.ChangeEvent<any>) => "";

    const { container } = render(
      <DebounceTextBox onChange={fn} timeout={timeout} />
    );

    expect(container).not.toBeNull();
  });

  it("should call onChange after timeout", async () => {
    const user = userEvent.setup();

    const timeout = 200;
    const mocks = {
      onChange: (e: React.ChangeEvent<any>) => "",
    };
    const spy = jest.spyOn(mocks, "onChange");

    const { getByTestId } = render(
      <DebounceTextBox onChange={mocks.onChange} timeout={timeout} />
    );

    const inputElem = getByTestId("textbox-input") as HTMLInputElement;

    await user.click(inputElem);
    await user.keyboard("jjddasd");

    expect(inputElem.value).toEqual("jjddasd");
    expect(spy).toHaveBeenCalledTimes(0);

    await wait(200);
    expect(spy).toHaveBeenCalledTimes(1);

    await user.keyboard("jjddasd");
    await user.keyboard("asasas");
    await user.keyboard("nasbasb");
    expect(inputElem.value).toEqual("jjddasdjjddasdasasasnasbasb");

    await wait(200);
    expect(spy).toHaveBeenCalledTimes(2);
  });
});
