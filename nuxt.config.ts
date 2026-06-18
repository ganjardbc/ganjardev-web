// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Ganjar Hadiatna | Software Engineer, AI Explorer, Product Builder',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Insights about AI, software engineering, product development, and building digital businesses.' },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://ganjar.dev' },
        { property: 'og:title', content: 'Ganjar Hadiatna | Software Engineer, AI Explorer, Product Builder' },
        { property: 'og:description', content: 'Insights about AI, software engineering, product development, and building digital businesses.' },
        { property: 'og:image', content: 'https://ganjar.dev/og-image.png' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://ganjar.dev' },
        { name: 'twitter:title', content: 'Ganjar Hadiatna | Software Engineer, AI Explorer, Product Builder' },
        { name: 'twitter:description', content: 'Insights about AI, software engineering, product development, and building digital businesses.' },
        { name: 'twitter:image', content: 'https://ganjar.dev/og-image.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Inter:wght@100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap' }
      ],
      script: [
        {
          textContent: `
            (function() {
              const theme = localStorage.getItem('theme') || 'dark';
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            })();
          `,
          type: 'text/javascript'
        }
      ]
    }
  }
})

