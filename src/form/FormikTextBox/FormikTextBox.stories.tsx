import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useFormik } from "formik";
import FormikTextBox from ".";
import * as yup from "yup";
import { IFormikTextBox } from "./model";
import CustomTemplate from "../../stories/customTemplate";

export default {
  title: "Form/FormikTextBox",
  component: FormikTextBox,
} as ComponentMeta<typeof FormikTextBox>;

const TextBox = <K,>(props: IFormikTextBox<K>) => {
  const { name, label, type, formObject, ...rest } = props;

  const formik = useFormik({
    initialValues: {
      [name]: "",
    },
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: () => {
      return;
    },
    validationSchema: yup.object().shape({
      [name]: yup.string().required("This is a required field"),
    }),
  });

  return (
    <div className="w-full max-w-xs mr-auto">
      <FormikTextBox
        formObject={formik}
        name={name}
        type={type}
        label={label}
        {...rest}
      />
      <div className="inline-block mt-3 opacity-60">
        <p className="text-sm">{formik.values["lastName"]}</p>
      </div>
    </div>
  );
};

const Template = CustomTemplate(TextBox);
export const Text = Template.bind({});
Text.args = {
  label: "Last Name",
  placeholder: "Last Name",
  name: "lastName",
  type: "text",
  formObject: {} as IFormikTextBox<unknown>["formObject"],
};
