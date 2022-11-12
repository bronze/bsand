import {defineConfig} from 'astro/config';
import UnoCSS from 'unocss/astro';

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS(), sitemap(), image(), prefetch()]
});