<template>
  <div class="containerIndex">
    <h1>PAGE ACCUEIL</h1>
  </div>
</template>

<script>
  export default {
    layout: "home",

    head: {
      title: "BLOG-TEMPLATE",
      meta: [{
        hid: 'description',
        name: 'description',
        content: "BLOG-TEMPLATE"
      }],
    },
  }

</script>

<style lang="scss">
  .containerIndex {
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
  }

  @media screen and (min-width: 1216px) {
    .containerIndex {
      padding: 0;
      align-items: start;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

</style>
