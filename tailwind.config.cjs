
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{js,jsx}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],

	theme: {
		colors: {
			primary: {
				'purple-50': '#EFECFC',
				'purple-100': '#DFD9F8',
				'purple-200': '#CFC7F5',
				'purple-300': '#B0A1EE',
				'purple-400': '#907BE7',
				'purple-500': '#785FE2',
				'purple-600': '#6043DD',
				'purple-700': '#563CC7',
				'purple-800': '#4832A6',
				'purple-900': '#35257A',
				'green-50': '#D1F9F3',
				'green-100': '#BBF6EE',
				'green-200': '#8DF1E2',
				'green-300': '#5FEBD6',
				'green-400': '#32E5CB',
				'green-500': '#1BE2C5',
				'green-600': '#18CBB1',
				'green-700': '#16B59E',
				'green-800': '#139E8A',
				'green-900': '#108876',
			},
			neutrals: {
				'00': '#FFFFFF',
				50: '#F0F2F5',
				100: '#E5E8EF',
				200: '#D6DBE8',
				300: '#C2C8D7',
				400: '#A6ACBD',
				500: '#8B93A9',
				600: '#6B748E',
				700: '#505A78',
				800: '#3E4761',
				900: '#212A43',
				1000: '#000000',
			},
			dark: {
				'background-00': '#202F49',
				'accent-00': '#161A3E',
				'popup-00': '#0D102C',
			},
			light: {
				'background-00': '#EDF0F5',
				'accent-00': '#FFFFFF',
				'popup-00': '#FFFFFF',
			},

		},
		fontFamily: {
			baloo: 'Baloo, sans-serif',
			public: 'Public, serif',
		},
		extend: {
			screens: {
				'tall': { 'raw': '(max-height: 820px)' },
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1440px',
				'3xl': '1536px',
				'4xl': '1920px',
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};