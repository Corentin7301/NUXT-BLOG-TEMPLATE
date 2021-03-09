<template>
  <div class="header">
    <h1>
      <nuxt-link to="/">CREATOR</nuxt-link>
    </h1>
    <h2>blog</h2>
    <scroll-to-top>
      <svg class="w-6 h-6 top" fill="none" stroke="currentColor"
    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7">
    </path>
  </svg>
    </scroll-to-top>
  </div>
</template>

<script>
import ScrollToTop from './ScrollToTop.vue'
  export default {
  components: { ScrollToTop },
    
  }

</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;

    h1 {
      margin-top: 20px;
      text-align: center;
      font-size: 20px;
      letter-spacing: 0.25em;
    }

    h2 {
      margin: 10px 0 40px 0px;
      color: $green;
      font-size: 11px;
      font-weight: 400;
      letter-spacing: 0.45em;
    }

  }

  // DESKTOP
  @media screen and (min-width: 1216px) {
    .header {

      h1 {
        margin: 40px 0 15px 0px;
      }

      h2 {
        margin: 0 0 60px 0px;
      }

    }
  }

</style>
