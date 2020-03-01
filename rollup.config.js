import json from '@rollup/plugin-json';

module.exports = {
  input: 'index.js',
  plugins: [json()],
  output: {
  	name: 'puppuri',
    file: 'bundle.js',
    format: 'iife'
  }
};