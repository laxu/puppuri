import json from '@rollup/plugin-json';
import {terser} from 'rollup-plugin-terser';

module.exports = {
	input: 'index.js',
	plugins: [json()],
	output: [
		{
			name: 'puppuri',
			file: 'bundle.js',
			format: 'iife',
		},
		{
			file: 'bundle.min.js',
			format: 'iife',
			name: 'version',
			plugins: [terser()]
		}
		
	]
};