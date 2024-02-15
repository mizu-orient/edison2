/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-500": "var(--blue-500)",
        "gray-600": "var(--gray-600)",
        "gray-800": "var(--gray-800)",
        "orange-500": "var(--orange-500)",
        white: "var(--white)",
        "yellow-500": "var(--yellow-500)",
      },
    },
  },
  plugins: [],
};
