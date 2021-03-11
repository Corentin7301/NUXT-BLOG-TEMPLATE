<template>
<div :class="displayShow" @click="scrolltop()">
  <slot />
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
      // fixed || hidden
      displayShow() {
        if (this.scrollY < this.hideFrom) {
          return "hidden"
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
      .fixed {
        position: fixed;
        width: 25px;
        height: 25px;
        bottom: 50px;
        right: 30px;
        z-index: 99;
        cursor: pointer;
        color: $primaryColor;
      }
</style>
