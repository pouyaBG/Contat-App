/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require("tailwindcss/defaultTheme");
const colors = {
  ...defaultColors,
  ...{
    "text_color": "#d8e7f2",
    "button_color": "#F66B0E",
    "font_color": "#000000	"
  },
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: colors,
    extend: {},
  },
  plugins: [],
};
