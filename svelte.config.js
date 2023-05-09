import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		
		paths: {
			base: dev ? '' : '/negate',
		},

		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			preprocess: false,
			strict: true
		})
	}
};

export default config;
