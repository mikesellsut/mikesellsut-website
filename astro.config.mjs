import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mikesellsut.com',
  integrations: [tailwind(), sitemap({
    // Private, link-only pages under /p/ are never listed in the sitemap.
    filter: (page) => !new URL(page).pathname.startsWith('/p/'),
  })],
});
