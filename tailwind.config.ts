import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050B14",
          900: "#0A121F",
          850: "#0D1826",
          800: "#111E30",
          700: "#1A2C42",
          600: "#25405C",
          500: "#345676",
        },
        gold: {
          50: "#FDF8EC",
          100: "#FAEDC9",
          200: "#F4DC98",
          300: "#EEC865",
          400: "#E5B23D",
          500: "#D49B24",
          600: "#B37D1A",
          700: "#8F6215",
          800: "#6B4A11",
          900: "#4A330C",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "circuit-grid":
          "linear-gradient(rgba(212,155,36,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212,155,36,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.7s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
