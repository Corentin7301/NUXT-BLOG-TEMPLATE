
export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'Template NUXT',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Template NUXT starter kit description' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css'
      },
      {
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap'
      },
      {
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap'
      }
    ]
  },
  css: ['~/assets/scss/main.scss','~/assets/scss/colors.scss','~/assets/scss/utility.scss'
  ],
  plugins: [
  ],
  // auto import des comp.
  components: true,
  buildModules: [
  ],
  modules: [
    '@nuxtjs/style-resources',
    '@nuxt/content'
  ],
  content: {
    // Options
  },
  styleResources: {
    scss: ['~/assets/scss/*.scss']
  },
  build: {
  }
}
