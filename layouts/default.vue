<template>
  <div id="layout">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import blogConfig from "@/blog.config.json"
export default {
  data() {
    return {
      blogConfig,
    }
  },
}
</script>

<style lang="scss" scoped>
  #layout {
    background-color: $gray;
    font-family: 'Quicksand', sans-serif;
    letter-spacing: 1.5px;
    color: $white;
    text-decoration: none;
  }

</style>
