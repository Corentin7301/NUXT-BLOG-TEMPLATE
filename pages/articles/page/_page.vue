<template>
  <div>
    <div class="flex justify-center">
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

<style>

</style>
