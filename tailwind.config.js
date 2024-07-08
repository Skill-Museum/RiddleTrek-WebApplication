/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/**/**/**.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        xxl: "1400px",
        xl: "1000px",
        l: "800px",
        sm: "600px",
        xsm: "400px",
        vsm: "200px",
      },
    },
  },
  plugins: [],
};
