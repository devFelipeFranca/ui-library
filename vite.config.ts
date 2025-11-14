import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default defineConfig({
	plugins: [react(), vanillaExtractPlugin()],
	build: {
		lib: {
			entry: 'src/index.ts',
			name: 'MyUILibrary',
			fileName: 'index',
			formats: ['es', 'cjs'],
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
		},
	},
})


