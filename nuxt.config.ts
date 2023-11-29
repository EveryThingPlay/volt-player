import {defineNuxtConfig} from 'nuxt/config';

export default defineNuxtConfig({
	devtools: {enabled: true},
	modules: [
		'@pinia/nuxt',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/eslint-module',
	],
	eslint: {
		/* Module options */
	},
});
