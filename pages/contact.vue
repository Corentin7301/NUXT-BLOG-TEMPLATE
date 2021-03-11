<template>
  <div class="container containerContact">
    <h1>CONTACT</h1>
    <form name="contact" action="" netlify netlify-honeypot="bot-field">
      <h2>Formulaire de contact</h2>
      <label class="hidden">Champs anti robots : <input name="bot-field" /></label>
      <label for="name"><input type="name" name="name" id="name" placeholder="Nom" v-model="name"></label>
      <label for="email"><input type="email" name="email" id="email" placeholder="Email" v-model="email"></label>
      <label for="content"><textarea id="formContent" name="content" v-model="content" placeholder="Contenu du message"></textarea></label>
      <Button type="submit">Envoyer</Button>
    </form>
  </div>
</template>

<script>
export default {
  head() { 
      return {
        title: "CONTACT",
        meta: [{
        hid: 'description',
        name: 'description',
        content: this.$global.contactMetaDescription
      }],
     }
    },
  data() {
    return {
      name:"",
      email:"",
      content:"",
    }
  },
}
</script>

<style lang="scss" scoped>
  .containerContact {
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100vw;
    min-height: 80vh;

    h1 {
      margin-bottom: 100px;
    }

    form {
      display: flex;
      flex-direction: column;
      
      h2 {
        margin-bottom: 20px;
      }

      input, textarea {
        background: none;
        color: $whiteColor;
        border: solid 1px $primaryColor;
        border-radius: 5px;
        padding: 7px;
        width: 300px;
        margin-bottom: 20px;

        &::placeholder {
          color: $whiteColor;
        }

        &:focus {
          border: solid 1px $primaryColor;
        }
      }
      textarea {
        height: 200px;
        width: 300px;
        font-family: 'Quicksand', sans-serif;
      }
    }
  }

  @media screen and (min-width: 1216px) {
    .containerContact {
      padding: 0;

      form {
      align-self: flex-start;
        textarea {
          width: 500px;
        }
      }
    }
  }

</style>
