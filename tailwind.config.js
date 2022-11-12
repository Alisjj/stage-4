/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-purple": "#A02279",
        "c-gray": "#434343",
        "c-light-gray": "#A3A3A3",
      },
    },
  },
  plugins: [],
};
