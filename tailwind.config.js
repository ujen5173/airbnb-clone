/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        DEFAULT: "1760px",
      },
      padding: {
        DEFAULT: "4rem",
      },
    },
    extend: {
      colors: {
        overlayColor: "rgb(0 0 0 / 15%)",
        primaryColor: "#ff385c",
        searchBackground: "#ebebeb",
        blackColor: "#222",
        lightTextColor: "#717171",
        borderColor: "#dbdbdb",
        darkBorderColor: "#B0B0B0",
        lightBorderColor: "#ddd",
      },
    },
  },
  plugins: [],
};
