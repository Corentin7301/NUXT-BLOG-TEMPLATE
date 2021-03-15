<template>
  <div class=" my-0 mx-auto lg:p-0 lg:min-h-screen">
    <div class="flex items-center flex-col w-full first:mt-3 lg:items-start lg:flex-row lg:flex-wrap lg:justify-center">
      <NuxtLink class=" m-8 cursor-pointer w-80 lg:m-12 lg:w-3/12 lg:first:m-12" v-for="infoPage of articles" :key="infoPage.slug"
        :to="{ name: 'articles-slug', params: { slug: infoPage.slug } }">
        <img :src="infoPage.urlImage" :alt="infoPage.title" class=" w-full rounded-md">
        <h2 class=" text-4xl mt-3 mb-1 text-primaryColor">{{ infoPage.title }}</h2>
        <h3 class=" text-base my-1">{{ infoPage.description }}</h3>
        <code class=" text-base my-1">Posté le : {{$dayjs( infoPage.createdAt ).format("DD/MM/YYYY")}}</code>
      </NuxtLink>
    </div>
      
      <ArticlePagination v-if="total > this.$global.blog.articleCountPerPage" :total="total" />
  </div>
</template>

<script>
  export default {
    props: {
      articles: {
        type: Array,
        default: Array,
      },
      total: {
        type: Number,
        default: 0,
      },
    },
  };

</script>
