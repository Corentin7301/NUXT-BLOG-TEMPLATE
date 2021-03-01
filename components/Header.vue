<template>
  <div class="header">
    <h1>
      <nuxt-link to="/">Corentin perroux</nuxt-link>
    </h1>
    <h2>blog</h2>
    <svg class="w-6 h-6 top" :class="displayShow" @click="scrolltop()" fill="none" stroke="currentColor"
      viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7">
      </path>
    </svg>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        scrollY: 0,
        // will be hide after 350 px scroll down
        hideFrom: 350
      }
    },
    methods: {
      setScrollY() {
        this.scrollY = window.scrollY;
      },
      scrolltop() {
        window.scrollTo(0, 0)
      },
    },
    computed: {
      // fixed || none
      displayShow() {
        if (this.scrollY < this.hideFrom) {
          return "none"
        } else {
          return "fixed"
        }

      }
    },
    mounted() {
      window.addEventListener('scroll', (event) => {
        this.setScrollY()
      })
    }
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
      color: $orange;
      font-size: 11px;
      font-weight: 400;
      letter-spacing: 0.45em;
    }

    button {
      margin-top: 20px;
      background: none;
      border: none;
      cursor: pointer;
      transition: 0.2s;

      img {
        width: 30px;
        margin: 5px;
      }

      &:focus {
        outline: none;
      }
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

      button {
        display: none;
      }

      .fixed {
        position: fixed;
        width: 25px;
        height: 25px;
        bottom: 50px;
        right: 30px;
        z-index: 99;
        cursor: pointer;
      }

      .none {
        display: none;
      }
    }
  }

</style>
