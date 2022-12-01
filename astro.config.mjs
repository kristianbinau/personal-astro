import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import node from "@astrojs/node";

// https://astro.build/config
import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  integrations: [lit(), tailwind(), partytown(), sitemap(), vue(), svelte(), solidJs(), react()],
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
});