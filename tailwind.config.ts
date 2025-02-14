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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "success-50": "rgba(235, 254, 244, 1)",
        "grey-200": "rgba(220, 220, 220, 1)",
        "success-900": "rgba(10, 191, 126, 1)",
        "blue-custom-500": "rgba(49, 117, 255, 1)",
      },
      fontFamily: {
        general: [
          "GeneralSans-Regular",
          "GeneralSans-Medium",
          "GeneralSans-Bold",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
