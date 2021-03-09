<template>
  <div class="containerContact">
    <h1>PAGE CONTACT</h1>
    <form name="contact" action="" netlify netlify-honeypot="bot-field">
      <label class="hidden">Champs anti robots : <input name="bot-field" /></label>
      <label for="name"><input type="name" name="name" id="name" placeholder="Nom"></label>
      <label for="email"><input type="email" name="email" id="email" placeholder="Email"></label>
      <label for="content"><input type="content" name="content" id="contentContent" placeholder="Contenu"></label>
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .containerContact {
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
  }

  @media screen and (min-width: 1216px) {
    .containerContact {
      padding: 0;
      align-items: start;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

</style>
