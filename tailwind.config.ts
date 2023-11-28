import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        "custom-gradient":
          "linear-gradient(90deg, rgba(72, 84, 97, 1) 0%, rgba(203, 213, 224, 1) 100%)",
        "light-gradient":
          "linear-gradient(90deg, rgba(245, 245, 245, 1) 0%, rgba(211, 211, 211, 1) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
