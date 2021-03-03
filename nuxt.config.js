export default {
  // ssr: false,
  // target: 'static',
  head: {
    title: 'Blog Corentin PERROUX',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Blog Corentin PERROUX'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap'
      }
    ]
  },
  css: ['~/assets/scss/main.scss', '~/assets/scss/colors.scss', '~/assets/scss/utility.scss', '~/assets/scss/scrollbar.scss', '~/assets/scss/transition.scss'],
  plugins: [],
  // auto import des comp.
  components: true,
  buildModules: [],
  modules: [
    '@nuxtjs/style-resources',
    '@nuxt/content',
    '@nuxtjs/dayjs',
    '@nuxtjs/cloudinary'
  ],
  // Optional
  dayjs: {
    locales: ['fr'],
    defaultLocale: 'fr',
  },

  cloudinary: {
    cloudName: 'corentin7301',
    apiKey: '446663536317113',
    apiSecret: 'MSjOmtsE0AXPfRgVBnTPnsjbp5M',
    useComponent: true
  },

  content: {
    // Options
  },
  styleResources: {
    scss: ['~/assets/scss/*.scss']
  },
  build: {},
  generate: {

  }
}
