import { FormikConfig, useFormik } from "formik";
import { HTMLInputTypeAttribute } from "react";

class UseFormikClass<L> {
  WrappedUseFormik(args: FormikConfig<L>) {
    return useFormik(args);
  }
}

export type AcceptableTextBoxType = 'text' | 'tel' | 'number'

export type IFormikTextBox<K> = {
  formObject: ReturnType<UseFormikClass<K>["WrappedUseFormik"]>;
  name: string;
  placeholder?: string;
  label?: string;
  type?: AcceptableTextBoxType
};
