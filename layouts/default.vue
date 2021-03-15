<template>
  <div id="layout" class="font-quicksand font-medium tracking-widest no-underline text-whiteColor">
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