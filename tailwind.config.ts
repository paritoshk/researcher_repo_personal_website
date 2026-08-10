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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#E1E0CC",
          foreground: "#0a0a09",
        },
        muted: {
          DEFAULT: "rgba(225, 224, 204, 0.08)",
          foreground: "rgba(225, 224, 204, 0.6)",
        },
        secondary: {
          DEFAULT: "rgba(225, 224, 204, 0.12)",
          foreground: "#E1E0CC",
        },
        destructive: {
          DEFAULT: "#7f1d1d",
          foreground: "#fef2f2",
        },
        accent: {
          DEFAULT: "rgba(225, 224, 204, 0.12)",
          foreground: "#E1E0CC",
        },
        input: "rgba(225, 224, 204, 0.2)",
        ring: "#E1E0CC",
      },
    },
  },
  plugins: [],
};
export default config;
