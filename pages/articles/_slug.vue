<template>
  <div class="container">
    <social-share :page="page" />
    <div class="flex lg:w-full mr-12">
      <nuxt-content :document="page" class="nuxt-content w-full" />
      <ArticleToc :toc="page.toc" />
    </div>
    <social-share :page="page" class=" lg:hidden" />
  </div>
</template>

<script>
  export default {

    head() {
      return {
        title: `${this.page.title}`,
        meta: [{
            hid: 'description',
            name: 'description',
            content: `${this.page.description}`
          },
          {
            hid: "og:url",
            property: "og:url",
            content: `https://BLOG-LINK/articles/${this.page.slug}`,
          },
          {
            hid: "og:title",
            property: "og:title",
            content: `${this.page.title}`,
          },
          {
            hid: "og:description",
            property: "og:description",
            content: `${this.page.description}`,
          },
          {
            hid: "og:image",
            property: "og:image",
            content: `${this.page.urlImage}`,
          },
          {
            property: "article:published_time",
            content: this.page.createdAt,
          },
          {
            property: "article:modified_time",
            content: this.page.updatedAt,
          },
          {
            property: "article:tag",
            content: this.page.tags ? this.article.tags.toString() : `${this.page.title}`,
          },
          // { name: "twitter:card", content: "summary_large_image" }, 
          {
            hid: "twitter:url",
            name: "twitter:url",
            content: `https://BLOG-LINK/articles/${this.page.slug}`,
          },
          {
            hid: "twitter:title",
            name: "twitter:title",
            content: `${this.page.title}`,
          },
          {
            hid: "twitter:description",
            name: "twitter:description",
            content: `${this.page.description}`,
          },
          {
            hid: "twitter:image",
            name: "twitter:image",
            content: `${this.page.urlImage}`,
          },

          {
            property: "article:published_time",
            content: this.page.createdAt,
          },
          {
            property: "article:modified_time",
            content: this.page.updatedAt,
          },
          {
            property: "article:tag",
            content: this.page.slug,
          },
          {
            name: "twitter:label1",
            content: "Ecrit par "
          },
          {
            name: "twitter:data1",
            content: "CREATOR"
          },
          {
            name: "twitter:label2",
            content: "Titre : "
          },
          {
            name: "twitter:data2",
            content: this.page.slug,
          }
        ],
        link: [{
          hid: "canonical",
          rel: "canonical",
          href: `https://BLOG-LINK/articles/${this.page.slug}`,
        }, ],
      }
    },

    async asyncData({
      $content,
      params
    }) {
      const slug = params.slug
      const page = await $content('articles', slug).fetch()
      return {
        page
      }
    },
  }

</script>

<style>


  .nuxt-content h1 {
    @apply text-primaryColor mb-8 text-5xl
  }

  .nuxt-content h2 {
    @apply text-primaryColor mt-10 mb-6 text-3xl
  }

  .nuxt-content h3 {
    @apply text-primaryColor mt-8 mb-4 text-xl
  }

  .nuxt-content h4 {
    @apply text-primaryColor mt-8 mb-4
  }

  .nuxt-content p {
    @apply my-4 leading-7 font-normal
  }

  .nuxt-content code {
    @apply text-primaryColor font-dmMono
  }

  .nuxt-content pre {
    @apply text-whiteColor pl-8 my-4 rounded-md
  }

  .nuxt-content img {
    @apply bg-backgroundColor my-8 p-3 border-primaryColor rounded-md w-11/12 lg:w-4/5
  }

  .nuxt-content a {
    @apply text-primaryColor transition-all
  }

  .nuxt-content a:hover {
    @apply text-whiteColor
  }

</style>
