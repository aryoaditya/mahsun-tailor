/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#0F5955",
        background: "rgba(36, 126, 150, 0.06)",
        gradient1: "#187CB4",
        gradient2: "#247E96",
        gradient3: "#1B7670",
      },
    },
  },
  plugins: [],
};
