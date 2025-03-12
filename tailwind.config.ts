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
				primary: "#5E6DF1",
				primaryDark: "#4550AF",
				dark: "#14142B",
				body: "#4E4B66",
				bodyLight: "#6E7191",
				placeholder: "#A0A3BD",
				gray: "#D9DBE9",
				lightGray: "#EFF0F6",
				white: "#fff",
				success:"#22c55e"
			}
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
