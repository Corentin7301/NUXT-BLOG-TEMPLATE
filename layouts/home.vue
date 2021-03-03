<template>
  <div id="layout">
    <div class="img_head">
      <cld-image public-id="blog/img-head_odujcj.jpg" width="100%" loading="lazy"
        fetchFormat="auto" quality="auto" alt="Corentin-PERROUX" id="img_head" responsive />
    </div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
  #layout {
    background-color: $black;
    font-family: 'Montserrat', sans-serif;
    color: $white;

    .img_head {
      margin-bottom: 20px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;

      #img_head {
        width: 100%;
      }
    }

    @media screen and (min-width: 1216px) {
      .img_head {
        margin: 0;
      }
    }
  }

</style>
