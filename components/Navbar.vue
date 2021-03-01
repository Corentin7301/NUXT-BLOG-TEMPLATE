<template>
  <nav>
    <nuxt-link v-for="item in menu" :key="item.name" :to="item.page" class="menu">{{item.name}}</nuxt-link>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        menu: [{
            name: 'accueil',
            page: '/'
          },
          {
            name: 'photographie animaliere',
            page: '/animaliere'
          },
          {
            name: 'photographie de portrait',
            page: '/portrait'
          },
          {
            name: 'photographie artistique',
            page: '/artistique'
          }
        ]
      }
    }
  }

</script>

<style lang="scss" scoped>
  nav {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 4px;
  }

  a {
    text-decoration: inherit;
    color: inherit;
  }

  .menu {
    font-size: 15px;
    margin: 10px;
  }

  .menu:hover,
  .nuxt-link-exact-active {
    color: $orange;
  }

  // DESKTOP
  @media screen and (min-width: 1216px) {
    nav {
      font-size: 15px;
      flex-direction: row;

      .menu {
        margin: 40px;
      }
    }
  }

</style>
