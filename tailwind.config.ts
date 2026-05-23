import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        y2k: {
          pink: "#FF00FF",
          green: "#39FF14",
          cyan: "#00FFFF",
          silver: "#C0C0C0",
          chrome: "#E8E8E8",
          black: "#000000",
          white: "#FAFAFA",
          grid: "#E5E5E5",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        pixel: ["var(--font-silkscreen)", "monospace"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-roboto-mono)", "monospace"],
      },
      boxShadow: {
        hard: "4px 4px 0px 0px #000000",
        "hard-sm": "2px 2px 0px 0px #000000",
        "hard-pink": "4px 4px 0px 0px #FF00FF",
        "hard-cyan": "4px 4px 0px 0px #00FFFF",
        neon: "0 0 12px #39FF14, 0 0 24px #FF00FF",
        "neon-pink": "0 0 10px #FF00FF, 0 0 20px #FF00FF80",
        "neon-green": "0 0 10px #39FF14, 0 0 20px #39FF1480",
      },
      backgroundImage: {
        holographic:
          "linear-gradient(135deg, #FF00FF 0%, #00FFFF 25%, #39FF14 50%, #C0C0C0 75%, #FF00FF 100%)",
        chrome:
          "linear-gradient(180deg, #ffffff 0%, #c0c0c0 45%, #808080 50%, #e8e8e8 100%)",
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "marquee-reverse": "marquee-reverse 28s linear infinite",
        blink: "blink 1.2s step-end infinite",
        glitch: "glitch 3s infinite",
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
        glitch: {
          "0%, 90%, 100%": { transform: "translate(0)", filter: "none" },
          "92%": { transform: "translate(-2px, 1px)", filter: "hue-rotate(90deg)" },
          "94%": { transform: "translate(2px, -1px)", filter: "hue-rotate(-90deg)" },
          "96%": { transform: "translate(-1px, -1px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
