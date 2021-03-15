<template>
  <div class=" text-right top-8 lg:sticky lg:top-5">
    <!-- FACEBOOK SHARE -->
    <ShareNetwork network="facebook" :url="`${this.$global.siteUrl}articles/${page.slug}`" :title="page.title"
      :description="page.description" quote="" hashtags="">
      <i class="fab fa-facebook-square socialShare"></i>
    </ShareNetwork>
    <!-- LINKEDIN SHARE -->
    <ShareNetwork network="linkedin" :url="`${this.$global.siteUrl}articles/${page.slug}`" :title="page.title"
      :description="page.description">
      <i class="fab fa-linkedin socialShare"></i>
    </ShareNetwork>
    <!-- TWITTER SHARE -->
    <ShareNetwork network="twitter" :url="`${this.$global.siteUrl}articles/${page.slug}`" :title="page.title"
      :description="page.description">
      <i class="fab fa-twitter-square socialShare"></i>
    </ShareNetwork>
    <!-- EMAIL SHARE -->
    <ShareNetwork network="email" :url="`$this.$global.siteUrl}articles/${page.slug}`" :title="page.title"
      :description="page.description">
      <i class="fas fa-envelope socialShare"></i>
    </ShareNetwork>
    <ShareNetwork network="sms" :url="`${this.$global.siteUrl}articles/${page.slug}`" :title="page.title"
      :description="page.description">
      <i class="fas fa-phone-square-alt lg:hidden socialShare"></i>
    </ShareNetwork>
  </div>
</template>

<script>
  export default {
    props: [
      'page',
    ]
  }

</script>

<style lang="scss" scoped>

  .socialShare {
    @apply text-xl mt-0 mr-0 mb-4 ml-1 text-primaryColor transition-all
  }

  .socialShare:hover {
    @apply text-lightColor
  }

</style>
