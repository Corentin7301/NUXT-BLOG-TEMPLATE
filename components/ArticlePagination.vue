<template>
  <div class=" flex justify-end mr-5 mb-3">

    <pre class=" mx-0.5 mr-4">Page {{currentPage}}/{{ totalPages }}</pre>



    <div v-if="currentPage === 1" class=" cursor-not-allowed">
      <i class="fas fa-chevron-left mx-2.5"></i>
    </div>

    <nuxt-link v-else :to="{ name: 'articles-page-page', params: { page: prevPage } }">
      <i class="fas fa-chevron-left mx-2.5"></i>
    </nuxt-link>


    <div v-if="currentPage === 1" class="cursor-not-allowed">
      <pre class="mx-0.5">1</pre>
    </div>

    <nuxt-link v-else :to="{ name: 'articles-page-page', params: { page: 1 } }">
      <pre class="mx-0.5">1</pre>
    </nuxt-link>

    <pre class="mx-0.5">...</pre>

    <div v-if="currentPage === totalPages" class="cursor-not-allowed">
      {{ totalPages }}
    </div>

    <nuxt-link v-else :to="{ name: 'articles-page-page', params: { page: totalPages } }">
      {{ totalPages }}
    </nuxt-link>

    <div v-if="currentPage === totalPages" class="cursor-not-allowed">
      <i class="fas fa-chevron-right mx-2.5"></i>
    </div>

    <nuxt-link v-else :to="{ name: 'articles-page-page', params: { page: nextPage } }">
      <i class="fas fa-chevron-right mx-2.5"></i>
    </nuxt-link>


  </div>
</template>

<script>
  export default {
    props: {
      total: {
        type: Number,
        default: 0,
      },
      perPage: {
        type: Number,
        default() {
          return this.$global.blog.articleCountPerPage
        },
      },
    },
    computed: {
      totalPages() {
        return Math.ceil(this.total / this.perPage);
      },
      currentPage() {
        return parseInt(this.$route.params.page) || 1;
      },
      prevPage() {
        return this.currentPage > 1 ? this.currentPage - 1 : 1;
      },
      nextPage() {
        return this.currentPage < this.totalPages ?
          this.currentPage + 1 :
          this.totalPages;
      },
    },
  };

</script>

