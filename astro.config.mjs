import { defineConfig } from 'astro/config';
import vuetifyPlugin from 'vite-plugin-vuetify';

import netlify from '@astrojs/netlify';
import vue from '@astrojs/vue';

/**
 * Vuetify integration for Astro
 * @param {import('astro/config').Options} options
 * @returns {import('astro/config').AstroIntegration}
 */
function vuetify() {
  return {
    name: 'my-astro-vuetify-integration',
    hooks: {
      'astro:config:setup': ({ updateConfig }) => {
        updateConfig({
          vite: {
            ssr: {
              noExternal: ['vuetify'],
            },
            plugins: [vuetifyPlugin()],
          },
        });
      },
    },
  };
}

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [
    vue({
      appEntrypoint: '/src/pages/_app',
    }),
    vuetify(),
  ],
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
  },
  devToolbar: {
    enabled: true,
  },
});
