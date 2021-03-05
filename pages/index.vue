<template>
  <div class="containerIndex">
    <nuxt-link class="articles" v-for="infoPage in infoPage" :key="infoPage.slug" :to="`/articles/${infoPage.slug}`">
      <img :src="infoPage.urlImage" :alt="infoPage.title">
      <h2>{{ infoPage.title }}</h2>
      <h3>{{ infoPage.description }}</h3>
      <code>Posté le : {{$dayjs( infoPage.createdAt ).format("DD/MM/YYYY")}}</code>
    </nuxt-link>
    <div class="article-content">
      <nuxt-content :document="infoPage" />
    </div>
    <Menu :toc="infoPage.toc" />
  </div>
</template>

<script>
  export default {
    layout: "home",

    head: {
      title: "Blog Corentin PERROUX",
      meta: [{
        hid: 'description',
        name: 'description',
        content: "Blog Corentin PERROUX"
      }],
    },

    
    async asyncData({
      $content
    }) {
      const infoPage = await $content('articles').only(['title', 'slug', 'description', 'createdAt', 'urlImage'])
        .fetch()
      return {
        infoPage
      }
    },

    methods: {
      moveTo(slug) {
        this.$router.push(`/${slug}`)
      }
    },

  }

</script>

<style lang="scss">
  .containerIndex {
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;


    .articles {
      margin: 50px;
      cursor: pointer;
      width: 300px;

      img {
        width: 100%;
        border-radius: 5px;
      }

      h2 {
        font-size: 35px;
        color: $orange;
        margin: 10px 0 5px 0;
      }

      h3 {
        font-size: 20px;
        margin: 5px 0;
      }

      code {
        font-size: 15px;
        margin: 5px 0;
      }
    }
  }

  @media screen and (min-width: 1216px) {
    .containerIndex {
      padding: 0;
      align-items: start;

      .articles {
        margin: 50px;
        width: 500px;
      }
    }
  }

</style>
