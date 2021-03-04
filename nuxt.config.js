const create = async (feed) => {
  feed.options = {
    title: 'Blog Corentin PERROUX',
    link: 'https://blog.corentinperroux.fr/feed.xml',
    // link: 'http://localhost:3000/feed.xml',
    description: 'Blog Corentin PERROUX'
  }

  const {
    $content
  } = require('@nuxt/content')
  const posts = await $content('articles').fetch()

  feed.addCategory('Nuxt.js')

  feed.addContributor({
    name: 'Corentin PERROUX',
    email: 'corentin7301@gmail.com',
    link: 'https://blog.corentinperroux.fr'
  })

  for (const post of posts) {

    feed.addItem({
      title: post.title,
      slug: post.slug,
      description: post.description,
      link: `https://blog.corentinperroux.fr/articles/${post.slug}`,
      // link: `http://localhost:3000/articles/${post.slug}`,
      content: post.bodyText

    })
  }
}

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
        content: "Blog Corentin PERROUX"
      },


      {
        property: "og:site_name",
        content: "Blog Corentin PERROUX"
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: `https://blog.corentinperroux.fr`,
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Blog Corentin PERROUX",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Blog Corentin PERROUX",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://res.cloudinary.com/corentin7301/image/upload/v1614777566/blog/img-head_odujcj.jpg",
      },
      {
        property: "og:image:width",
        content: "740"
      },
      {
        property: "og:image:height",
        content: "300"
      },

      {
        name: "twitter:site",
        content: "@corentinperroux"
      },
      // { name: "twitter:card", content: "summary_large_image" }, 
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://blog.corentinperroux.fr",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Blog Corentin PERROUX",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "Blog Corentin PERROUX",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://res.cloudinary.com/corentin7301/image/upload/v1614777566/blog/img-head_odujcj.jpg",
      },

    ],

    link: [

      {
        hid: "canonical",
        rel: "canonical",
        href: "https://blog.corentinperroux.fr",
      },

      {
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
  buildModules: [
    '@nuxtjs/google-analytics'
  ],

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    },
  },


  modules: [
    '@nuxtjs/style-resources',
    '@nuxt/content',
    '@nuxtjs/dayjs',
    '@nuxtjs/cloudinary',
    '@nuxtjs/feed',
    '@nuxtjs/markdownit',


    // always at the end of array
    '@nuxtjs/sitemap',

  ],

  feed: [{
    create,
    path: '/feed.xml',
    cacheTime: 1000 * 60 * 15,
    type: 'rss2',
    data: ["articles"]
  }, ],



  sitemap: {
    hostname: 'https://blog.corentinperroux.fr',
    routes: async () => {
      const {
        $content
      } = require('@nuxt/content')

      const articles = await $content('articles').only(['path', 'createdAt']).fetch()
      const dynamicArticles = articles.map((article) => {
        return {
          url: article.path,
          priority: 1,
          lastmod: article.createdAt
        }
      })
      const staticPages = [
        // "/contact",
        // ...
      ]
      return [...dynamicArticles, ...staticPages]
    },
  },


  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    // use: ['markdown-it-div', 'markdown-it-attrs'],
  },


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
  generate: {},
  layoutTransition: {
    name: 'layout-transition',
    mode: 'out-in'
  },
  pageTransition: {
    name: 'page-transition',
    mode: 'out-in',
  },

  hooks: {
    'content:file:beforeInsert': (document) => {
      const md = require('markdown-it')();
      if (document.extension === '.md') {
        const { text } = require('reading-time')(document.text)
  
        document.readingTime = text
  
        const mdToHtml = md.render(document.text)
        document.bodyText = mdToHtml
      }
    }
  }
}
