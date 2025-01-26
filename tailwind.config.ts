import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        "tokyonight-storm": {
          primary: "#7aa2f7",
          secondary: "#bb9af7",
          accent: "#565F89",
          neutral: "#1a1b26",
          "base-100": "#24283b",
          "base-200": "#1f2335",
          "base-300": "#15161e",
          info: "#7dcfff",
          success: "#9ece6a",
          warning: "#ff9d65",
          error: "#f7768e",
        },
      },
    ],
  },
  plugins: [typography, daisyui],
} satisfies Config;
