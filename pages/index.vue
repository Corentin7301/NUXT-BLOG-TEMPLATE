<template>
  <div class="container containerIndex">
    <img src="@/assets/img/nuxt-blog-template.jpg" alt="nuxt-blog-template">
  </div>
</template>

<script>
  export default {

    head() { 
      return {
        title: this.$global.siteName,
        meta: [{
        hid: 'description',
        name: 'description',
        content: this.$global.siteMetaDescription
      }],
     }
    }
  }

</script>

<style lang="scss">
  .containerIndex {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 70%;
      border-radius: 10px;
    }
  }

  @media screen and (min-width: 1216px) {
    .containerIndex {
      padding: 0;
      align-items: start;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

</style>
