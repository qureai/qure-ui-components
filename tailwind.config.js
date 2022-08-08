/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
