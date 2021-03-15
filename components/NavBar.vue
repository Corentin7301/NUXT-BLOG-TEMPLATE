<template>
<div class=" mb-12">
  <nuxt-link v-for="item in items" :key="item.name" :to="item.page" class=" mx-5 text-xl transition-all normal-case hover:text-primaryColor" :exact="item.exactActiveClass">{{item.name}}</nuxt-link>
</div>
</template>

<script>
export default {
    data() {
      return {
        items: [{
          name: 'Accueil',
          page: '/',
          exactActiveClass: 'exact'
        },
        {
            name: 'Blog',
          page: '/articles',
            exactActiveLink: ''
        },
        {
            name: 'Contact',
          page: '/contact',
            exactActiveLink: 'exact'
        }, 
        ]
      }
    },
}
</script>