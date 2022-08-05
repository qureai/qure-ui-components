import { SIZES, VARIANTS } from "./Button.model";

export const variants: Record<VARIANTS, string> = {
  primary:
    "text-white border border-transparent bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500",
  secondary:
    "text-gray-700 border border-gray-300 bg-white hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
  link: "underline text-blue-600 hover:text-blue-800 visited:text-purple-600",
};

export const sizes: Record<SIZES, string> = {
  small: "px-3 py-2 text-xs",
  normal: "px-4 py-2 text-sm",
  medium: "px-4 py-2 text-medium",
  large: "px-6 py-3 text-base",
};

export const defaultStyles =
  "inline-flex items-center text-center justify-center min-w-[90px] font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all";
