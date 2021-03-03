<template>
  <div class="menu">
    <ul>
      <li v-for="link of toc" :key="link.id" :class="{ 'toc2': link.depth === 2, 'toc3': link.depth === 3 }">
        <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      toc: {
        type: Array,
        required: true
      }
    }
  }

</script>

<style lang="scss">
  .menu {
    display: none;
  }

  @media screen and (min-width: 1216px) {
    .menu {
      display: block;

      .toc2 {
        color: $orange;
        margin: 7px 0 5px 0;
        transition: 0.5s;
        font-size: 12px;

        &:hover {
          color: $white;
          transition: 0.3s;
        }
      }

      .toc3 {
        margin: 5px 0 5px 15px;
        transition: 0.5s;
        font-size: 10px;

        &:hover {
          color: $orange;
          transition: 0.3s;
        }
      }
    }
  }

</style>
