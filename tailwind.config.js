const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        "focus-white": "inset 0 0 4px 1px rgba(255,255,255, 0.8)",
        "focus-blue": `inset 0 0 6px ${colors.blue[500]}`,
      },
      colors: {
        primary: colors.blue,
        gray: colors.slate,
      },
      cursor: {
        grab: "grab",
        grabbing: "grabbing",
      },
      fontFamily: {
        primary: ["Raleway", "sans-serif"],
        numeric: ["Ubuntu Mono", "mono"],
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "2rem",
        xl: "4rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
