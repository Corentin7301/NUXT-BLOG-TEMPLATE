<template>
  <div class="containerPageArticle">
    <div>
      <h2>
        Nombre d'articles : {{ allArticles.length }}
      </h2>
    </div>
    <ArticleList :articles="paginatedArticles" :total="allArticles.length" />
    
  </div>
</template>

<script>
  import getContent from "@/utils/getContent"
  export default {
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

<style lang="scss" scoped>
.containerPageArticle {
  h2 {
    margin-left: 10px;
  }
}
  @media screen and (min-width: 1216px) {

.containerPageArticle {
  h2 {
    margin-left: 105px;
  }
}
  }
</style>
