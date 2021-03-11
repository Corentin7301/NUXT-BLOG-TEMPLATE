<template>
<div class="copyright">
 <p>© Copyright <a :href="`email:${this.$global.authorEmail}`" target="_blank">{{ this.$global.copyright }}</a> {{ new Date().getFullYear() }}</p>
</div>
</template>

<style lang="scss" scoped>
.copyright {
      width: 100%;
p {
    text-align: center;
    font-size: 10px;
    margin-top: 50px;
    letter-spacing: 0.15em;
    text-transform: initial;
  }

a {
  color: $primaryColor;
  transition: 0.2s;

  &:hover {
    color: $whiteColor;
    transition: 0.3s;
  }
}
}
</style>
