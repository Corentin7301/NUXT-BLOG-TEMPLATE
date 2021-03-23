<template>
  <div id="containerPageArticle">
    <client-only>
    <div class="flex flex-col items-center">
      <input autofocus type="text" name="searchbar" id="searchbar" placeholder="Recherche" v-model="searchbar"
        class="p-2 w-72 mb-5 rounded-md text-primaryColor border-solid border-2 border-primaryColor focus:outline-primaryColor">
    </div>
    <div>
      <h2 v-if="this.$global.blog.displayNumberOfArticles === true" class=" ml-2.5 lg:ml-28">
        Nombre d'articles : {{ articlesResults.length }}
      </h2>
    </div>
      <ArticleList :articles="articlesResults" :total="articlesResults.length"/>

    </client-only>
  </div>
</template>

<script>
  import getContent from "@/utils/getContent"
  import Fuse from 'fuse.js'
  export default {
    head() {
      return {
        title: this.$global.blogTitle,
        meta: [{
          hid: 'description',
          name: 'description',
          content: this.$global.blogMetaDescription
        }],
      }
    },
    data() {
      return {
        searchbar: "",
      }
    },
    computed: {
      articlesResults() {
        return this.searchbar ? this.results : this.articlesFuse._docs
      },
      results() {
        return this.articlesFuse.search(this.searchbar).map((article) => {
          return { ...article.item }
          })
        }
      },
    async asyncData({
      $content,
      params,
      error
    }) {
      const content = await getContent($content, params, error);

      const options = {
        keys: [
          "title",
          "description"
        ]
      }
      const articlesFuse = new Fuse(content.allArticles, options)

      return {
        articlesFuse
      };
    },

  }

</script>
