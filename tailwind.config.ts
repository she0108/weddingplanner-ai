import type { Config } from "tailwindcss";

const px0_100: { [key: number]: string } = {
  ...Array.from(Array(101)).map((_, i) => `${i}px`),
};
const px0_50_5: { [key: string]: string } = Object.fromEntries(
  Array.from(Array(101)).map((_, i) => [`${i / 2}`, `${i / 2}px`])
);
const px0_400: { [key: number]: string } = {
  ...Array.from(Array(401)).map((_, i) => `${i}px`),
};
const px0_800: { [key: number]: string } = {
  ...Array.from(Array(801)).map((_, i) => `${i}px`),
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: px0_100,
      width: px0_400,
      height: px0_800,
      fontSize: px0_100,
      fontWeight: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
      borderWidth: px0_50_5,
      borderRadius: px0_100,
      lineHeight: px0_100,
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        float: "float 2s ease-in-out infinite",
      },
    },
    colors: {
      white: "#FFFFFF",
      ivory: "#FBF6F1",
      beige: "#ECE5E0",
      brown: {
        100: "#F4F1F1",
        200: "#DDD4D4",
        300: "#C6B8B8",
        400: "#B09C9C",
        500: "#997F7F",
        600: "#806666",
        700: "#634F4F",
      },
      pink: {
        100: "#FEE1E1",
        200: "#FEE1E1",
        300: "#FDD2D2",
        400: "#FDC3C3",
        500: "#FCB4B4",
      },
    },
  },
  plugins: [],
};
export default config;
