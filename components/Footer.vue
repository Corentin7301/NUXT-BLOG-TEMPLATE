<template>
  <div id="footer">
    <h2 @click="scrolltop()">Corentin perroux</h2>
    <div class="footer-component">
      <div class="footer-col">
        <nuxt-link v-for="item in menu" :key="item.name" :to="item.page" class="menu_footer">{{item.name}}</nuxt-link>
      </div>
      <div class="footer-col">
        <social-share />
      </div>
    </div>
    <Copyright />

  </div>
</template>

<script>
  export default {
    name: "footer",
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
      };
    },
    methods: {
      scrolltop() {
        window.scrollTo(0, 0)
      }
    },
  };

</script>

<style lang="scss" scoped>
  #footer {
    height: 450px;
    background: #242424;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.20em;
    margin-top: 50px;
    padding-top: 20px;

    h2 {
      letter-spacing: 0.35em;
      margin: 0 0 40px 0;
      font-size: 16px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        transition: 0.3s;
        opacity: 0.5;
      }
    }

    .footer-component {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .footer-col {
      flex: 0 1 40%;
      display: flex;
      flex-direction: column;
      text-align: center;

      a {
        color: white;
        font-size: 15px;
        font-weight: 400;
        margin-bottom: 20px;
        letter-spacing: 0.20em;


        &:last-child {
          margin-bottom: 0;
        }
      }

      .menu_footer:hover,
      .nuxt-link-exact-active {
        color: $orange;
      }
    }
  }


  // DESKTOP
  @media screen and (min-width: 1216px) {
    #footer {
      height: 320px;
      width: 100%;

      .footer-component {
        flex-direction: row;
      }

      .footer-col {
        flex: 0 1 50%;

        a {
          font-size: 20px;
        }
      }
    }
  }

</style>
