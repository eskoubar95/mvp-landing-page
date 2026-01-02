import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	server: {
		port: 4000,
		open: true,
		headers: {
			'X-Robots-Tag': 'noindex, nofollow',
		},
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: undefined,
			},
		},
	},
})

