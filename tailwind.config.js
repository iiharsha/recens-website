const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        veryDarkPurple: "#0a0a0a", // Very dark black
        darkPurple: "#1a1a1a", // Dark black
        purple: "#2e2e2e", // Medium black
        lightPurple: "#3d3d3d", // Light black
        veryLightPurple: "#4a4a4a", // Very light black
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        tenor: "var(--tenor)",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        blink: {
          "0%": { opacity: 0.2 },
          "20%": { opacity: 1 },
          "100% ": { opacity: 0.2 },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100% ": { opacity: 1, transform: "translateY(0px)" },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100% ": { opacity: 0 },
        },
      },
      animation: {
        fadeIn: "fadeIn .3s ease-in-out",
        carousel: "marquee 60s linear infinite",
        blink: "blink 1.4s both infinite",
        fadeUp: "fadeUp 0.5s ease-out forwards",
        fadeUpDelay: "0.5s ease-out 0.25s forwards fadeUp",
        fadeOut: "fadeOut 0.5s ease-out forwards",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography"),
    require("tailwindcss-3d"),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        },
      );
    }),
  ],
};
