<template>
  <div class="container my-0 mx-auto p-2.5 flex flex-col items-center w-6/12 h-full lg:p-0">
    <h1 class="mb-11">CONTACT</h1>
    <div class=" lg:flex lg:justify-between lg:items-center lg:w-full">

      <form method="post" name="contact" action="/thanks.html" id="contactForm" netlify
        netlify-honeypot="bot-field" ref="formTag" class="flex flex-col">
        <h2 class="mb-5">Formulaire de contact</h2>
        <label class="hidden">Champs anti robots : <input name="bot-field" /></label>
        <label for="name"><input type="text" name="name" id="name" placeholder="Nom" v-model="name" class="inputsContact" required></label>
        <label for="email"><input type="email" name="email" id="email"  placeholder="Email" v-model="email" class="inputsContact" required></label>
        <label for="content"><textarea name="content" id="formContent"  placeholder="Contenu du message" v-model="content"
            class="inputsContact h-52 w-80 font-quicksand lg:w-1/3"></textarea></label><br />
        <input type="submit" @click.prevent="sendForm" class=" py-2.5 w-52 bg-primaryColor text-lightColor transition-all cursor-pointer border-none rounded-md hover:bg-lightColor hover:text-primaryColor">
      </form>

      <img :src="this.$global.mainImage" :alt="this.$global.siteName" class=" hidden rounded-xl w-3/5 lg:block">
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
    methods:{
      
        async sendForm() {
            let formName = this.$refs.formTag.getAttribute('name');
        
            let formData = new FormData();
            formData.append('name', this.name);
            formData.append('email', this.email);
            formData.append('content', this.content);
            formData.append('form-name', formName);
            let resp = await fetch('/', {
                method:'POST',
                body:formData
            });
            
            this.$router.push('thanks');
            
        },
    }
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
