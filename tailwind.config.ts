import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
			},
			backgroundImage: {
				"dance-pattern": "url('/images/dance-pattern.jpg')"
			},
			colors: {
				primary:"#d7d8"
			}
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
