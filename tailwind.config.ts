import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/animationClassnames.ts",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 10s linear infinite",
        fadeIn: "fadeIn 0.5s ease-out forwards",
      },
      animationDelay: {
        "1": "0.15s",
        "2": "0.25s",
        "3": "0.35s",
        "4": "0.45s",
        "5": "0.55s",
        "6": "0.65s",
        "7": "0.75s",
        "8": "0.85s",
        "9": "0.95s",
        "10": "1.05s",
      },
      keyframes: {
        gradient: {
          to: { "background-position": "200% center" },
        },
      },
      colors: {
        primary: "hsla(187, 95%, 18%, 1)",
        secondary: "hsla(193, 15%, 35%, 1)",
        "primary-focus": "hsla(187, 96%, 29%, 1)",
        backdrop: "hsla(45, 17%, 95%, .8)",
        "backdrop-selected": "hsla(0, 0%, 100%, .5)",
        "primary-background": "#fff1eb",
        "box-background": "hsla(0,0%,100%,.3)",
        "box-background-focused": "hsla(50,17%,98%,.7)",
      },
      lineHeight: {
        h2: "4.5vw",
        "h2-default": "35px",
      },
      borderRadius: {
        "10xl": "5rem",
      },
    },
  },
  plugins: [],
};
export default config;
