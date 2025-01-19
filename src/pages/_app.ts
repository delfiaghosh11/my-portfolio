import type { App } from 'vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, md } from 'vuetify/iconsets/md';
import 'vuetify/styles';

export default function setup(app: App) {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    icons: {
      defaultSet: 'md',
      aliases,
      sets: {
        md,
      },
    },
  });
  app.use(vuetify);
}
