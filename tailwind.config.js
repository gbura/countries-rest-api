/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'dark-blue': 'hsl(209, 23%, 22%)',
				'dark-mode-background': 'hsl(207, 26%, 17%)',
				'light-mode-text': 'hsl(200, 15%, 8%)',
				'dark-gray': 'hsl(0, 0%, 52%)',
				'very-light-gray': 'hsl(0, 0%, 98%)',
			},
		},
		fontFamily: {
			NunitoSans: ['Nunito Sans, sans-serif'],
		},
		container: {
			padding: '2rem',
			center: true,
		},
		screens: {
			sm: '375px',
			md: '768px',
			lg: '1200px',
			xl: '1440px',
		},
	},
	plugins: [],
}
