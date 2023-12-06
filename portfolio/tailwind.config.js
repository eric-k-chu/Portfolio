/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-1": "#E8E8E8",
        "light-2": "#F0F0F0",
        "light-3": "#FFFFFF",
        "dark-1": "#323232",
        "dark-2": "#232323",
        "dark-3": "#1E1E1E",
        "light-b": "#E2E8F0",
        "light-s": "#2F383D33",
        gray: "#616161",
        orange: "#F0904F",
        blue: "#50E6F0",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
  darkMode: "class",
};
