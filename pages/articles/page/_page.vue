<template>
  <div class="containerPageArticle">
    <div>
      <h2 v-if="this.$global.blog.displayNumberOfArticles === true" class=" ml-2.5 lg:ml-28">
        Nombre d'articles : {{ allArticles.length }}
      </h2>
    </div>
    <ArticleList :articles="paginatedArticles" :total="allArticles.length" />

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
    async asyncData({
      $content,
      app,
      params,
      error
    }) {
      const content = await getContent($content, params, error);
      return {
        allArticles: content.allArticles,
        paginatedArticles: content.paginatedArticles,
      };
    },
  }

</script>