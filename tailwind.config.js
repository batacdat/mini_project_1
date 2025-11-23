/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"], // Chỉ cần tìm trong thư mục src
  theme: {
    extend: {
      colors: {
        primary: "#8261EE",
        secondary: "#FF589E",
        background_p: "#fff",
        background_s: "#F2F2F2",
        text_p: "#040404",
        text_s: "#777777",
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
