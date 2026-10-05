import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17242c",
        mist: "#f6f9f9",
        teal: { 50: "#edfafa", 100: "#d5f3f2", 500: "#1aa5a1", 600: "#128480", 700: "#0e6b69" },
        sand: { 50: "#fffaf1", 100: "#fff0ce", 500: "#e7a13e" },
        coral: { 50: "#fff4f0", 100: "#ffe0d5", 500: "#e8795f" },
      },
      boxShadow: {
        soft: "0 12px 40px rgba(22, 38, 45, .06)",
        card: "0 1px 2px rgba(22, 38, 45, .04), 0 8px 24px rgba(22, 38, 45, .04)",
      },
      borderRadius: { xl: "14px", "2xl": "18px" },
    },
  },
  plugins: [],
};

export default config;
