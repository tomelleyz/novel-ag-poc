/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      green: {
        100: "#EDFCF2",
        200: "#D8F7C7",
        300: "#2C3D24",
        400: "#16B364",
      },
      grey: {
        25: "#FAFAF9",
        50: "#EBECF2",
        75: "#FBFBFB",
        100: "#BABDCC",
        150: "#F5F5F4",
        200: "#A0A0AB",
        300: "#3F3F46",
        400: "#26272B",
      },
      red: {
        100: "#F8DCE3",
        200: "#44111C",
      },
    },
    fontSize: {
      xs: ["12px", { lineHeight: "20px", letterSpacing: "0.02em" }],
      sm: ["14px", { lineHeight: "20px", letterSpacing: "0.01em" }],
      lg: ["18px", { lineHeight: "24px", letterSpacing: "0.01em" }],
      xl: ["20px", { lineHeight: "28px", letterSpacing: "0.01em" }],
      "2xl": ["24px", { lineHeight: "32px", letterSpacing: "0.01em" }],
    },
    fontFamily: {
      satoshi: ["Satoshi", "sans-serif"],
      outfit: ["Outfit", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      mulish: ["Mulish", "sans-serif"],
    },
    extend: {
      keyframes: {
        slideDownAndFade: {
          from: { opacity: 0, transform: "translateY(-2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: "translateX(2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: "translateY(2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: "translateX(-2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
