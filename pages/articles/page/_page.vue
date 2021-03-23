<template>
  <div class="containerPageArticle">
    <div>
      <h2 v-if="this.$global.blog.displayNumberOfArticles === true" class=" ml-2.5 lg:ml-28">
        Nombre d'articles : {{ allArticles.length }}
      </h2>
      <div class="flex flex-col items-center">

        <input autofocus type="text" name="searchbar" id="searchbar" placeholder="Recherche" v-model="searchbar"
          class="p-2 w-72 mb-5 rounded-md text-primaryColor border-solid border-2 border-primaryColor focus:outline-primaryColor">
      </div>
    </div>
    <ArticleList :articles="articlesSearched" :total="allArticles.length" />

  </div>
</template>

<script>
  import getContent from "@/utils/getContent"
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
        searchbar: '',
        articlesSearched: [],
      }
    },
    async asyncData({
      $content,
      app,
      params,
      error
    }) {
      const content = await getContent($content, params, error);
      return {
        initialArticleNumber: content.allArticles,
        allArticles: content.allArticles,
        paginatedArticles: content.paginatedArticles,
      };
    },
    methods: {
      mutateArticlesResult() {
        return this.articlesSearched = this.paginatedArticles
        }
    },
    watch: {
      async searchbar(searchbar) {
        if (!searchbar) {
          this.articlesSearched = this.paginatedArticles
          this.allArticles = this.initialArticleNumber
          return
        }
        this.articlesSearched = await this.$content("articles")
          .only(['title', 'slug', 'description', 'createdAt', 'urlImage'])
          .sortBy("createdAt", "desc")
          .limit(this.$global.blog.articleCountPerPage)
          .search(searchbar)
          .fetch();
          this.allArticles = this.articlesSearched
      }
    },
    mounted() {
      this.mutateArticlesResult()
    },
  }

</script>
