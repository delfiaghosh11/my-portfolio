import { defineConfig } from 'astro/config';
import deno from '@deno/astro-adapter';

import vue from '@astrojs/vue';

export default defineConfig({
  output: 'server',
  adapter: deno(),
  integrations: [vue()],
});
