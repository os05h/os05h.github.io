/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			"Mindaro": "#d9ed92",
			"LightGreen": "#b5e48c",
			"LightGreen2": "#99d98c",
			"Emerald": "#76c893",
			"Keppel": "#52b69a",
			"Verdigris": "#34a0a4",
			"BondiBlue": "#168aad",
			"Cerulean": "#1a759f",
			"LapisLazuli": "#1e6091",
			"IndigoDye": "#184e77",
			"OffWhite": "#eff7ff",
			"White": "#ffffff",
			"Black": "#000000",
		},
	},
	darkMode: 'selector',
	plugins: [],
}
