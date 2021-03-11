<template>
  <div class="social-share">
    <!-- FACEBOOK SHARE -->
    <ShareNetwork network="facebook" :url="`https://SITE-LINK/articles/${page.slug}`" :title="page.title"
      :description="page.description" quote="" hashtags="">
      <i class="fab fa-facebook-square"></i>
    </ShareNetwork>
    <!-- LINKEDIN SHARE -->
    <ShareNetwork network="linkedin" :url="`https://SITE-LINK/articles/${page.slug}`" :title="page.title"
      :description="page.description">
      <i class="fab fa-linkedin"></i>
    </ShareNetwork>
    <!-- TWITTER SHARE -->
    <ShareNetwork network="twitter" :url="`https://SITE-LINK/articles/${page.slug}`" :title="page.title"
      :description="page.description">
      <i class="fab fa-twitter-square"></i>
    </ShareNetwork>
    <!-- EMAIL SHARE -->
    <ShareNetwork network="email" :url="`https://SITE-LINK/articles/${page.slug}`" :title="page.title"
      :description="page.description">
      <i class="fas fa-envelope"></i>
    </ShareNetwork>
    <ShareNetwork network="sms" :url="`https://SITE-LINK/articles/${page.slug}`" :title="page.title"
      :description="page.description">
      <i class="fas fa-phone-square-alt sms"></i>
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
  .social-share {
    text-align: right;
    position: initial;
    top: 40px;

    i {
      font-size: 20px;
      margin: 0 2px 15px 2px;
      color: $primaryColor;
      transition: 0.3s;

      &:hover {
      color: $whiteColor;
      transition: 0.2s;
      }
    }
  }

  @media screen and (min-width: 1216px) {
    .social-share {
      position: sticky;
      top: 20px;
    }

    .sms {
      display: none;
    }
  }

</style>
