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
          return "fixedElement"
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
      .fixedElement {
        @apply fixed w-6 h-6 bottom-12 right-8 z-50 cursor-pointer text-primaryColor
      }
</style>
