const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/5": "60%",
      "3/4": "75%",
      100: "300px",
      full: "100%",
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      backgroundColor: {
        light: "#f7fff7",
        dark: "#0f181a",
        darkHover: "#253c41",
        amber: colors.amber,
        mainTheme: "#1E293B",
      },
      borderColor: {
        light: "#f7fff7",
        dark: "#0f181a",
        amber: colors.amber,
        mainTheme: "#1E293B",
      },
      textColor: {
        light: "#f7fff7",
        dark: "#0f181a",
        amber: colors.amber,
        mainTheme: "#1E293B",
      },
      width: {
        70: "70%",
        30: "30%",
      },
      translate: {
        74: "18.5rem",
      },
      zIndex: {
        "-10": "-10",
      },
      colors: {
        light: "#f7fff7",
        dark: "0f181a",
      },
      gridTemplateColumns: {
        mobile: "10px 1fr 10px",
        desktop: "10% 1fr 10%",
      },
      gridTemplateRows: {
        default: "auto 1fr auto",
      },
      inset: {
        per10: "10%",
        per20: "20%",
      },
      minWidth: {
        logo: "32rem",
      },
      content: {
        quote: "'darek'",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
