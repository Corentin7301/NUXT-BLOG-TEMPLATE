<template>
<div class="navbar">
  <nuxt-link v-for="item in items" :key="item.name" :to="item.page" class="menu-navbar" :exact="item.exactActiveClass">{{item.name}}</nuxt-link>
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

<style lang="scss">
.navbar {
    margin-bottom: 100px;
    a {
      margin: 0 20px;
      font-size: 20px;
      transition: 0.3s;
      text-transform: initial;

      &:hover {
        transition: 0.2s;
        color: $primaryColor;
      }
    }
     .nuxt-link-active {
         color: $primaryColor;
     }
}
</style>