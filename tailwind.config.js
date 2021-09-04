module.exports = {
  purge: ["./index.html", "./src/**/*.js"],
  darkMode: false,
  theme: {
    borderRadius: {
      DEFAULT: "0.25rem",
      none: "0",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "50%",
    },
    extend: {
      colors: {
        "little-boy-blue": "#66a0de",
        tan: "#d4b696",
        "gray-web": "#807c79",
        celadon: "#b8e3b9",
        "trypan-blue": "#390099",
        "oxford-blue": "#161b33",
        xiketic: "#0d0c1d",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
