<template>
  <div class="containerArticleList">
    <div class="nuxtLinksContainer">
      <NuxtLink class="blog" v-for="infoPage of articles" :key="infoPage.slug"
        :to="{ name: 'articles-slug', params: { slug: infoPage.slug } }">
        <img :src="infoPage.urlImage" :alt="infoPage.title">
        <h2>{{ infoPage.title }}</h2>
        <h3>{{ infoPage.description }}</h3>
        <code>Posté le : {{$dayjs( infoPage.createdAt ).format("DD/MM/YYYY")}}</code>
      </NuxtLink>
    </div>
      
      <ArticlePagination v-if="total > 9" :total="total" />
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

<style lang="scss">
  .containerArticleList {
    margin: 0 auto;
    padding: 10px;

    .nuxtLinksContainer {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;


      .blog {
        margin: 30px;
        cursor: pointer;
        width: 300px;
        
        &:first-child {
          margin-top: 10px;
        }

        img {
          width: 100%;
          border-radius: 5px;
        }

        h2 {
          font-size: 35px;
          color: $green;
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
  }

  @media screen and (min-width: 1216px) {
    .containerArticleList {
      padding: 0;
      min-height: 100vh;

      .nuxtLinksContainer {
        align-items: start;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;

        .blog {
          margin: 50px;
          width: 500px;

          &:first-child {
            margin: 50px;
          }
        }
      }
    }
  }

</style>
