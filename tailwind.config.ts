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
        primary_light: '#8A96FF',
        success: '#00C97B',
        secondary: '#4E4B66',
        secondary_bold: '#14142B',
        input: '#EFF0F6'
      },
      theme: {
        fontFamily: {
          montserrat: ['var(--font-montserrat)', 'sans-serif'],
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
