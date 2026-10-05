import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// Supply the real public origin at build time; never publish an invented domain.
export default defineConfig(({ mode }) => {
  const { VITE_SITE_URL } = loadEnv(mode, process.cwd(), '')
  let origin = ''
  if (VITE_SITE_URL) {
    const url = new URL(VITE_SITE_URL)
    if (url.protocol !== 'https:' && url.protocol !== 'http:') {
      throw new Error('VITE_SITE_URL debe ser una URL pública HTTP o HTTPS.')
    }
    origin = url.href.replace(/\/$/, '')
  }
  return {
    plugins: [vue(), {
      name: 'portfolio-seo',
      transformIndexHtml: {
        order: 'pre',
        handler: () => origin ? [
          { tag: 'link', attrs: { rel: 'canonical', href: `${origin}/` }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:url', content: `${origin}/` }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:image', content: `${origin}/social-preview.png` }, injectTo: 'head' },
          { tag: 'meta', attrs: { name: 'twitter:image', content: `${origin}/social-preview.png` }, injectTo: 'head' },
        ] : [],
      },
    }],
  }
})
