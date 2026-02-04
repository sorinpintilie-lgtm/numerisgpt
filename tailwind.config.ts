import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom palette extracted from the Numeris logo
        numeris: {
          DEFAULT: '#00B5B5', // The main vibrant cyan from the logo icon
          dark: '#008B92',    // A darker version for hover states
          light: '#E0F7F6',   // A very light tint for backgrounds
          text: '#0F172A',    // Dark Slate for main text (contrast)
        }
      },
    },
  },
  plugins: [],
};
export default config;
