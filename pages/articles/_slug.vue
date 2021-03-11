<template>
  <div class="container">
    <social-share :page="page" />
    <div class="content">
      <nuxt-content :document="page" class="nuxt-content" />
      <ArticleToc :toc="page.toc" />
    </div>
    <social-share :page="page" class="social-share-bottom"/>
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

    async asyncData({ $content, params }) {
      const slug = params.slug
      const page = await $content('articles', slug).fetch()
      return {
        page
      }
    },
  }

</script>

<style lang="scss">
  .container {
    margin: 0 auto;
    padding: 10px;
    max-width: 100vw;
    text-decoration: none;
    position: relative;
    display: flex;
    flex-direction: column;

    .content {
      display: flex;

      .nuxt-content {
        width: 100%;

        h1 {
          color: $primaryColor;
          margin-bottom: 32px;
          font-size: 45px;
        }

        h2 {
          color: $primaryColor;
          margin: 40px 0 25px 0;
          font-size: 30px;
        }

        h3 {
          color: $primaryColor;
          margin: 30px 0 15px 0;
          font-size: 20px;

        }

        h4 {
          color: $primaryColor;
          margin: 30px 0 15px 0;

        }

        p {
          margin: 15px 0;
          line-height: 28px;
        }

        code {
          color: $primaryColor;
          font-family: 'DM Mono', monospace;
        }

        pre {
          padding-left: 30px;
          background-color: #ebebeb;
          border-radius: 5px;
          margin: 15px 0;

          code {
            line-height: 15px;
            font-family: 'DM Mono', monospace;
          }
        }

        img {
          margin: 30px 0;
          padding: 10px;
          border: solid 1px $primaryColor;
          border-radius: 5px;
          background-color: #1E1E1E;
          width: 90%;
        }

        a {
          color: $primaryColor;
          transition: 0.5s;

          &:hover {
            color: $whiteColor;
            transition: 0.3s;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1216px) {
    .container {
      display: flex;
      padding: 0;

      .content {
        width: 75%;
        margin-right: 50px;

        .nuxt-content {
          width: 900px;
          img {
            width: 80%;
          }
        }
      }
      .social-share-bottom {
        display: none;
      }
    }
  }

</style>
