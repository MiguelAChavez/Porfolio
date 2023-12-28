/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#333333",
        "custom-purple": "#6f42c1",
        "custom-violet": "#8a2be2",
      },
    },
  },
  plugins: [],
};
