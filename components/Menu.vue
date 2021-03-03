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

<style>

</style>
