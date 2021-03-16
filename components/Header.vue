<template>
  <div class=" flex flex-col items-center justify-center uppercase">
    <h1 class=" mt-5 text-center text-xl tracking-widest  lg:mt-10 lg:mb-4">
      <nuxt-link to="/" class=" transition-all hover:text-lightColor">{{ this.$global.author }}</nuxt-link>
    </h1>
    <h2 class=" mt-3 mb-10 text-xs font-normal text-center lg:mt-0 lg:mb-16">{{this.$global.siteSubname}}</h2>
    <NavBar />
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
