<template>
  <div class=" hidden lg:block lg:ml-10">
      <p v-for="link in toc" :key="link.id" :class="{ 'toc2': link.depth === 2, 'toc3': link.depth === 3 }" class=" w-64">
        <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
      </p>
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
      .toc2 {
        @apply text-primaryColor mt-2 mb-1 transition-all text-sm 
      }

      .toc2:hover {
        @apply text-lightColor
      }

      .toc3 {
        @apply mt-1 mb-1 ml-4 transition-all text-xs
      }
      
      .toc3:hover {
       @apply text-primaryColor
      }

</style>
