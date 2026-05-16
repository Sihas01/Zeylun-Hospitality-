import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#fcf9f5",
        surface: "#fcf9f5",
        "surface-dim": "#dcdad6",
        "surface-container-lowest": "#fbfaf8",
        "surface-container-low": "#f6f3ef",
        "surface-container": "#f0ede9",
        "surface-container-high": "#ebe8e4",
        "surface-container-highest": "#e5e2de",
        "surface-variant": "#e5e2de",
        "on-surface": "#1c1c1a",
        "on-surface-variant": "#444748",
        primary: "#181919",
        "primary-container": "#2d2d2d",
        "on-primary": "#f3f0ec",
        secondary: "#4d6453",
        "secondary-container": "#cde6d1",
        "on-secondary": "#ffffff",
        error: "#ba1a1a",
        "error-container": "#ffdad6",
        outline: "#747878",
        "outline-variant": "#c4c7c7"
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-hanken)", "Arial", "sans-serif"]
      },
      boxShadow: {
        ambient: "0 18px 50px rgba(45, 45, 45, 0.08)",
        tactile: "0 10px 30px rgba(45, 45, 45, 0.08)",
        floating: "0 22px 60px rgba(45, 45, 45, 0.12)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem"
      },
      spacing: {
        section: "6rem",
        "section-lg": "8rem"
      }
    }
  },
  plugins: []
};

export default config;
