// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://docs.ana.st',
  base: '/',
  integrations: [
      starlight({
          title: {
			'en': 'AnA Documentation',
			'ko': 'AnA 문서',
		  },
          customCss: [
              './src/styles/global.css'
          ],
          logo: {
              dark: './src/assets/logowt-dark.svg',
              light: './src/assets/logowt-light.svg',
              replacesTitle: true,
          },
          social: [
              { icon: 'github', label: 'GitHub', href: 'https://github.com/sunrin-ana' },
              { icon: 'youtube', label: 'YouTube', href: 'https://youtube.com/@sunrin-ana' },
              { icon: 'instagram', label: 'Instagram', href: 'https://instagram.com/sunrin_ana' },
              { icon: 'facebook', label: 'Facebook', href: 'https://facebook.com/sunrin-ana' }
          ],
          defaultLocale: 'ko',
          sidebar: [
              {
                  label: 'An Apply',
                  autogenerate: { directory: 'anapply' },
              },
              {
                  label: 'Solve, AnA!',
                  autogenerate: { directory: 'solve-ana' },
              },
              {
                  label: 'AnA Management System',
                  autogenerate: { directory: 'ams' },
              },
              {
                  label: 'AnA Proxy',
                  autogenerate: { directory: 'ana-proxy' },
              },
              {
                  label: 'An Assignment',
                  autogenerate: { directory: 'anassignment' },
              },
              {
                  label: 'An Account',
                  autogenerate: { directory: 'anaccount' },
              },
              {
                  label: 'AnAlog',
                  autogenerate: { directory: 'analog' },
              },
              {
                  label: 'An Answer',
                  autogenerate: { directory: 'ananswer' },
              },
              {
                  label: 'ana.st',
                  autogenerate: { directory: 'ana-st' },
              },
          ],
      }),
	],

  i18n: {
      locales: ['ko'],
      defaultLocale: 'ko',
      routing: {
          prefixDefaultLocale: false
      }
	},

  vite: {
    plugins: [tailwindcss()]
  }
});