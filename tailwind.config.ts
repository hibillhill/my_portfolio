import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        site: {
          bg: "#F5F0E8",
          fg: "#0A0A0A",
          muted: "#5C5C5C",
          line: "rgba(10, 10, 10, 0.12)",
          lavender: "#E8D4F8",
          butter: "#FFF3B0",
          mint: "#B8F0D4",
          blush: "#FFD0E0",
          sky: "#D4E8FF",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(3.5rem,12vw,9rem)",
          { lineHeight: "0.92", letterSpacing: "-0.04em" },
        ],
        "display-lg": [
          "clamp(2.5rem,8vw,6rem)",
          { lineHeight: "0.95", letterSpacing: "-0.03em" },
        ],
        "display-md": [
          "clamp(2rem,5vw,4rem)",
          { lineHeight: "1", letterSpacing: "-0.02em" },
        ],
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "spring-soft": "cubic-bezier(0.22, 1.2, 0.36, 1)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(10, 10, 10, 0.08), inset 0 1px 0 rgba(255,255,255,0.65)",
        "glass-lg": "0 16px 48px rgba(10, 10, 10, 0.1), inset 0 1px 0 rgba(255,255,255,0.7)",
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "fade-in": "fadeIn 0.6s ease forwards",
        "fade-out": "fadeOut 0.4s ease forwards",
        "bounce-in": "bounceIn 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        float: "float 5s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        bounceIn: {
          "0%": { opacity: "0", transform: "scale(0.92) translateY(12px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.05)" },
        },
      },
      maxWidth: {
        site: "1400px",
      },
    },
  },
  plugins: [],
};

export default config;
