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
        'payment-pattern': "url('/images/payment.png')",
      },
      colors: {
        primary: '#5E6DF1',
        primary_bold: '#5E6DF1',
        primary_light:'#8A96FF'
      },
    },
  },
  plugins: [],
} satisfies Config;
