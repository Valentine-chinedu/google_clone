const tailwindcss = require("tailwindcss");

module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontSize: {
				xxs: ".35rem",
			},
			spacing: {
				100: "33rem",
			},
			inset: {
				18: "4.5rem",
			},
		},
	},
	variants: {
		extend: {
			dropShadow: ["hover", "focus"],
			borderWidth: ["hover", "focus"],
		},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
