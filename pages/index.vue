<template>
  <div class="container">
    <div class="article-content">
      <nuxt-content :document="page" />
    </div>
    <div class="menu">
      <ul>
        <li v-for="link of page.toc" :key="link.id" :class="{ 'toc2': link.depth === 2, 'toc3': link.depth === 3 }">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData({
      $content
    }) {
      const page = await $content('articles/git-workflow').fetch()

      return {
        page
      }
    },

  }

</script>

<style lang="scss">
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    background-color: $black;
    color: $white;
    text-decoration: none;
    position: relative;

    .article-content {
      width: 75%;
    }



    .article-content .nuxt-content-container .nuxt-content {
      h1 {
        color: $orange;
        margin-bottom: 32px;
        font-size: 45px;
      }

      h2 {
        color: $orange;
        margin: 40px 0 25px 0;
        font-size: 30px;
      }

      h3 {
        color: $orange;
        margin: 30px 0 15px 0;
        font-size: 20px;

      }

      h4 {
        color: $orange;
        margin: 30px 0 15px 0;

      }

      p {
        margin: 15px 0;
        line-height: 28px;
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
        border: solid 1px $orange;
        border-radius: 5px;
        background-color: #1E1E1E;
      }

      a {
        color: $orange;
        transition: 0.5s;

        &:hover {
          color: $white;
          transition: 0.3s;
        }
      }
    }


    .menu {
      position: fixed;
      right: 80px;
      width: 340px;
      top: 100px;

      .toc2 {
        color: $orange;
        margin: 10px 0;
        transition: 0.5s;
        font-size: 14px;

        &:hover {
          color: $white;
          transition: 0.3s;
        }
      }

      .toc3 {
        margin: 10px 0 10px 15px;
        transition: 0.5s;
        font-size: 12px;

        &:hover {
          color: $orange;
          transition: 0.3s;
        }
      }
    }

  }

</style>
