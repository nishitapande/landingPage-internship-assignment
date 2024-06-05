/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lavender: "#f1e9fc",
        navblack: "#151218",
        peach: "#fc907e",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-gradient": {
          background: "linear-gradient(90deg, #fc907e, #9f6eed, #402d5f)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      });
    },
  ],
};
