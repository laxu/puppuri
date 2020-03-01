import json from '@rollup/plugin-json';
import {terser} from 'rollup-plugin-terser';

const isProduction = !process.env.ROLLUP_WATCH;

module.exports = {
	input: 'src/index.js',
	plugins: [json(), isProduction && terser()],
	output: {
		name: 'puppuri',
		file: 'dist/bundle.min.js',
		format: 'iife',
		sourcemap: true,
	}
};