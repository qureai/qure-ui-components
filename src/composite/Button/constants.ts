import IButton from "./Button.model";

export const variants: Record<IButton["variant"], string> = {
  primary:
    "text-white border border-transparent bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500",
  primary_light:
    "text-white border border-transparent text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
  secondary:
    "text-gray-700 border border-gray-300 bg-white hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
  link: "",
};

export const sizes: Record<string, string> = {
  normal: "px-4 py-2 text-sm",
};

export const defaultStyles =
  "inline-flex items-center font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2";
