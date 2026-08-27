import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://kim-hyunjin.github.io',
  base: '/hjkl/',
  compressHTML: true,

	vite: {
		plugins: [tailwindcss()],
	},
});
