import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dance-pattern': "url('/images/dance-pattern.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:'#5E6DF1'
      },
    },
  },
  plugins: [],
} satisfies Config;
