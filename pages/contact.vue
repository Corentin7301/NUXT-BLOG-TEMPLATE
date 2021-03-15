<template>
  <div class="container my-0 mx-auto p-2.5 flex flex-col items-center w-6/12 lg:p-0">
    <h1 class="mb-11">CONTACT</h1>
    <div class=" lg:flex lg:justify-between lg:w-full">

    <form name="contact" action="" netlify netlify-honeypot="bot-field" class="flex flex-col lg:self-start">
      <h2 class="mb-5">Formulaire de contact</h2>
      <label class="hidden">Champs anti robots : <input name="bot-field" /></label>
      <label for="name"><input type="name" name="name" id="name" placeholder="Nom" v-model="name"
          class="inputsContact"></label>
      <label for="email"><input type="email" name="email" id="email" placeholder="Email" v-model="email"
          class="inputsContact"></label>
      <label for="content"><textarea id="formContent" name="content" v-model="content" placeholder="Contenu du message"
          class="inputsContact h-52 w-80 font-quicksand lg:w-1/3"></textarea></label>
      <Button type="submit">Envoyer</Button>
    </form>
    <img :src="this.$global.mainImage" :alt="this.$global.siteName" class=" hidden rounded-xl lg:block">
    </div>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: this.$global.contactTitle,
        meta: [{
          hid: 'description',
          name: 'description',
          content: this.$global.contactMetaDescription
        }],
      }
    },
    data() {
      return {
        name: "",
        email: "",
        content: "",
      }
    },
  }

</script>

<style scoped>
  .inputsContact {
    @apply p-2 w-72 mb-5 rounded-md text-primaryColor border-solid border-2 border-primaryColor
  }

  .inputsContact:focus {
    @apply outline-primaryColor
  }

</style>
