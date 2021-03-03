<template>
  <div class="container">
    <div class="article-content">
      <nuxt-content :document="page" />
    </div>
    <Menu :toc="page.toc" />
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
    padding: 10px;
    min-height: 100vh;
    max-width: 100vw;
    background-color: $black;
    color: $white;
    text-decoration: none;
    position: relative;

    .article-content {
      width: 100%;
    }



    .article-content .nuxt-content {
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

      code {
        color: $orange;
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
        border: solid 1px $orange;
        border-radius: 5px;
        background-color: #1E1E1E;
        width: 80%;
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
  }

  @media screen and (min-width: 1216px) {
    .container {
      display: flex;
      padding: 0;

      .article-content {
        width: 75%;
        margin-right: 50px;
      }
    }
  }

</style>
