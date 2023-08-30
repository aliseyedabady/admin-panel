/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        borderSidebar: "#EAEFF4",
        bgAuth: "#F2F6FA",
        inputBorder: "#e5eaef",
        primary: "#5D87FF",
      },
    },
  },
  plugins: [],
};
