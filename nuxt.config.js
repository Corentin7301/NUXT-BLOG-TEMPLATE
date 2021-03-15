import global from './blog.config.json'


const create = async (feed) => {
  feed.options = {
    title: global.siteUrl,
      // FOR PRODUCTION
    link: `${global.siteUrl}/feed.xml`,
      // FOR DEV
    // link: 'http://localhost:3000/feed.xml',
    description: global.siteMetaDescription
  }

  const {
    $content
  } = require('@nuxt/content')
  const posts = await $content('articles').fetch()

  feed.addCategory('Nuxt.js')

  feed.addContributor({
    name: global.author,
    email: global.authorEmail,
    link: global.siteUrl
  })

  for (const post of posts) {

    feed.addItem({
      title: post.title,
      slug: post.slug,
      description: post.description,
      link: `${global.siteUrl}/articles/${post.slug}`,
      content: post.bodyText

    })
  }
}

export default {
  // ssr: false,
  // target: 'static',
  head: {
    title: global.siteName,
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
        content: global.siteMetaDescription
      },


      {
        property: "og:site_name",
        content: global.siteName
      },
      {
        hid: "og:type",
        property: "og:type",
        content: global.siteType
      },
      {
        hid: "og:url",
        property: "og:url",
        content: global.siteUrl,
      },
      {
        hid: "og:title",
        property: "og:title",
        content: global.siteName,
      },
      {
        hid: "og:description",
        property: "og:description",
        content: global.siteMetaDescription,
      },
      {
        hid: "og:image",
        property: "og:image",
        content: global.mainImage,
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
        content: global.twitterAccount
      },
      // { name: "twitter:card", content: "summary_large_image" }, 
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: global.twitterUrl,
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: global.siteName,
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: global.siteMetaDescription,
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: global.twitterCardImage,
      },

    ],

    link: [

      {
        rel: 'icon',
        type: 'image/x-icon',
        // CHANGE FAVICON NAME HERE
        href: '/favicon.svg'
      },
      {
        hid: "canonical",
        rel: "canonical",
        href: global.siteUrl,
      },

      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap'
      }
    ]
  },
  css: ['~/assets/css/main.css', '~/assets/css/colors.css', '~/assets/css/utility.css', '~/assets/css/scrollbar.css', '~/assets/css/transition.css', '~/assets/css/tailwind.css'],
  plugins: [
    { src: '@/plugins/variables.js' },
  ],
  // auto import des comp.
  components: true,
  buildModules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/tailwindcss',
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
    '@nuxt/content',
    '@nuxtjs/dayjs',
    '@nuxtjs/cloudinary',
    '@nuxtjs/feed',
    '@nuxtjs/markdownit',
    'vue-social-sharing/nuxt',


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
    hostname: global.siteUrl,
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
      // ADD STATIC PAGES IN SITEMAP HERE
      const staticPages = [
        "/contact",
        // ...
      ]
      return [...dynamicArticles, ...staticPages]
    },
  },


  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
        // for add div and attributes in md file
    // use: ['markdown-it-div', 'markdown-it-attrs'],
  },

  // CHANGE DATE COUNTRY HERE
  dayjs: {
    locales: ['fr'],
    defaultLocale: 'fr',
  },

  cloudinary: {
    cloudName: process.env.CLOUD_NAME,
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
    useComponent: true
  },

  content: {
    // Options
  },
  styleResources: {
    // scss: ['~/assets/scss/*.scss'],
    css: ['~assets/css/*.css']
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
