/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}", "**/index.html"],
  theme: {
    extend: {
      colors: {
        background: "#111111",
        primary: "#FFFFFF",
        secondary: "#ADB6C4",
        tertiary: "#FCA311",
        quaternary: "#3483eb",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50.5%)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100vw)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100vw)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-in-bottom": {
          "0%": { transform: "translateY(100vh)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-top": {
          "0%": { height: 0, "max-height": 0 },
          "100%": {
            height: "fit-content",
            "max-height": "9999px",
          },
        },
      },
      animation: {
        slide: "slide 20s linear infinite",
        "slide-in-right": "slide-in-right 1s ease-in-out",
        "slide-in-left": "slide-in-left 1s ease-in-out",
        "slide-in-bottom": "slide-in-bottom 1s ease-in-out",
        "slide-in-top": "slide-in-top 1s ease-in-out",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
