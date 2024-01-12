import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary1: '#4B34E4',
				primary2: '#EE346B',
			},
			fontSize: {
				clampHeroTitle: 'clamp(3.875rem, 1.6053rem + 9.0789vw, 12.5rem)',
			},
		},
	},
	plugins: [],
}
export default config
