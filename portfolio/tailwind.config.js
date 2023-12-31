/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-1": "#E8E8E8",
        "light-2": "#F0F0F0",
        "light-3": "#FFFFFF",
        "dark-1": "#121212",
        "dark-2": "#232323",
        "dark-3": "#1E1E1E",
        "light-s": "#2F383D33",
        "cm-gray": "#808080",
        "cm-orange": "#F0904F",
        "cm-blue": "#50E6F0",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
  darkMode: "class",
};
