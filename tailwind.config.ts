import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1", accent: "#8B5CF6", secondary: "#06B6D4", background: "#030712",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-clash)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
