/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#EFF6FF',
					100: '#DBEAFE',
					500: '#3B82F6',
					600: '#2563EB',
					700: '#1D4ED8',
				},
				gray: {
					50: '#F9FAFB',
					100: '#F3F4F6',
					500: '#6B7280',
					700: '#374151',
					900: '#111827',
				},
				success: {
					500: '#10B981',
					600: '#059669',
				},
				error: {
					500: '#EF4444',
					600: '#DC2626',
				},
				warning: {
					400: '#FBBF24',
					500: '#F59E0B',
				}
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
			},
		},
	},
	plugins: [],
}

