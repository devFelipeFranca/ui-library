import { defineConfig } from 'tsup'
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin'

export default defineConfig({
	entry: ['src/index.ts'],
	format: ['esm', 'cjs'],
	dts: true,
	external: ['react', 'react-dom'],
	sourcemap: true,
	clean: true,
	esbuildPlugins: [vanillaExtractPlugin()],
	outExtension({ format }) {
		return {
			js: format === 'cjs' ? '.cjs' : '.js',
		}
	},
})


