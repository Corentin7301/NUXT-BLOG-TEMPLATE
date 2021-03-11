<template>
  <div class="pagination">

    <pre class="numberPage">Page {{currentPage}}/{{ totalPages }}</pre>



    <div v-if="currentPage === 1" class="forbidden">
      <i class="fas fa-chevron-left"></i>
    </div>

    <nuxt-link v-else :to="{ name: 'articles-page-page', params: { page: prevPage } }">
      <i class="fas fa-chevron-left"></i>
    </nuxt-link>


    <div v-if="currentPage === 1" class="forbidden">
      <pre>1</pre>
    </div>

    <nuxt-link v-else :to="{ name: 'articles-page-page', params: { page: 1 } }">
      <pre>1</pre>
    </nuxt-link>

    <pre>...</pre>

    <div v-if="currentPage === totalPages" class="forbidden">
      {{ totalPages }}
    </div>

    <nuxt-link v-else :to="{ name: 'articles-page-page', params: { page: totalPages } }">
      {{ totalPages }}
    </nuxt-link>

    <div v-if="currentPage === totalPages" class="forbidden">
      <i class="fas fa-chevron-right"></i>
    </div>

    <nuxt-link v-else :to="{ name: 'articles-page-page', params: { page: nextPage } }">
      <i class="fas fa-chevron-right"></i>
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

<style lang="scss">
  .pagination {
    display: flex;
    justify-content: flex-end;
    margin: 0 20px 10px 0;

    pre {
      margin: 0 2px;
    }

    .numberPage {
      margin-right: 15px;
    }

    i {
      margin: 0 10px;
    }

    .forbidden {
      cursor: not-allowed;
    }
  }

</style>
