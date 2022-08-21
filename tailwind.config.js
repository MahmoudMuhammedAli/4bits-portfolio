/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/daisyui/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prim: "#44ADEE",
        sec: "#E9498C",
      },
      keyframes: {
        animateBox: {
          from: { transform: "translateX(0px)" },
          to: { transform: "translateX(80vw)" },
        },
      },
    },
    plugins: [ require("tailwind-scrollbar"), require("daisyui") ],

    daisyui: {
      styled: true,
      themes: true,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      prefix: "",
      darkTheme: "dark",
    },
  },
};
