import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { FormikConfig, useFormik } from "formik";
import * as yup from "yup";
import FormikTextBox from "../FormikTextBox";

describe("Formik TextBox", () => {
  type Setup<K> = {
    formikProps: FormikConfig<K>;
    name: string;
  };

  const SetupComponent = <K,>(props: Setup<K>) => {
    const { name, formikProps } = props;
    const formik = useFormik({
      ...formikProps,
    });

    return <FormikTextBox name={name} formObject={formik} />;
  };

  const name = "firstName";
  const formikProps = {
    initialValues: {
      firstName: "",
    },
    onSubmit: jest.fn(),
    validationSchema: yup.object().shape({
      firstName: yup.string().required(),
    }),
  };

  it("should render without errors", () => {
    const { container } = render(
      <SetupComponent name={name} formikProps={formikProps} />
    );

    expect(container).not.toBeNull();
  });

  it("should render input changes", async () => {
    const user = userEvent.setup();
    const { getByTestId, queryByTestId } = render(
      <SetupComponent name={name} formikProps={formikProps} />
    );

    const inputElem = getByTestId("textbox-input") as HTMLInputElement;
    const errorElem = queryByTestId("error-message");

    expect(errorElem).not.toBeInTheDocument();

    await user.click(inputElem);
    await user.keyboard("some name");

    expect(inputElem.value).toEqual("some name");

    await user.clear(inputElem);
    expect(inputElem.value).toEqual("");
  });

  it("should show error message", async () => {
    const user = userEvent.setup();
    const { getByTestId, queryByTestId } = render(
      <SetupComponent name={name} formikProps={formikProps} />
    );

    const inputElem = getByTestId("textbox-input") as HTMLInputElement;
    let errorElem = queryByTestId("error-message");

    user.click(inputElem);
    fireEvent.blur(inputElem);

    await waitFor(() => {
      const errorMessage = `${name} is a required field`;
      errorElem = getByTestId("error-message");
      expect(errorElem).toBeInTheDocument();
      expect(errorElem.textContent).toEqual(errorMessage);
    });

    user.click(inputElem);
    user.keyboard("last name");

    await waitFor(() => {
      errorElem = queryByTestId("error-message");
      expect(errorElem).not.toBeInTheDocument();
    });
  });
});
