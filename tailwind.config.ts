import type { Config } from "tailwindcss";
const font = require("./src/constants/font");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: font,
      spacing: {
        // 기본적으로 rem 단위로 설정되어 있으므로 직접 px 단위로 설정
        "4": "4px",
        "8": "8px",
        "12": "12px",
        "14": "14px",
        "16": "16px",
        "20": "20px",
        "24": "24px",
        "32": "32px",
      },
    },
  },
  plugins: [],
};
export default config;
