/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cheese: ["cheeseburga", "cheesburga"],
        kumbh: ["Kumbh Sans", "sans-serif"],
        monst: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
