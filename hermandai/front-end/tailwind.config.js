module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700_3f: "#ffffff3f",
          A700_33: "#ffffff33",
          A700_19: "#ffffff19",
          A700_26: "#ffffff26",
          A700: "#ffffff",
        },
        light_green: { A700: "#3ce221", A700_01: "#7acf0e" },
        lime: {
          600: "#cbcf0d",
          800: "#b7740f",
          A200: "#ebef37",
          "600_01": "#cbcf0e",
        },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        indigo: {
          500: "#3757ac",
          700: "#2020c4",
          900: "#000080",
          "900_99": "#00008099",
          "900_01": "#000082",
        },
        gray: {
          100: "#f2f2f2",
          300: "#dadada",
          500: "#9d9d9d",
          800: "#454545",
          900: "#530303",
          "500_01": "#9e8383",
        },
        deep_orange: { A700: "#fa1212" },
        blue_gray: { 100: "#d9d9d9" },
        blue: { 200: "#a9bcf0" },
      },
      boxShadow: {
        bs1: "inset 0px 0px  0px 0px ",
        bs: "0px 4px  4px 0px #0000003f",
      },
      fontFamily: {
        lato: "Lato",
        inter: "Inter",
        lohitbengali: "Lohit Bengali",
      },
      textShadow: { ts: "0px 4px  4px #0000003f" },
      backgroundImage: {
        gradient:
          "linear-gradient(90deg ,#ffffff33,#ffffff26,#ffffff26,#ffffff3f,#ffffff3f,#ffffff19)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
