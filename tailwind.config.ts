import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ED1D24", // Marvel red
        secondary: "#1E3A8A", // Deep blue
        textLight: "#F3F4F6", // Light text
        textDark: "#1F2937", // Dark text
        background: "#1A1A1A", // Global background
        cardBg: "#2D2D2D", // Card background
      },
      boxShadow: {
        "custom-light": "0px 5px 15px rgba(255, 255, 255, 0.2)",
        "custom-dark": "0px 5px 15px rgba(0, 0, 0, 0.7)",
      },
      textShadow: {
        lg: "0 4px 6px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
} satisfies Config;
