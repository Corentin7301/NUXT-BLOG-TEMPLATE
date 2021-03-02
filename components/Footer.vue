<template>
  <div id="footer">
    <h2 @click="scrolltop()">Corentin perroux</h2>
    <div class="footer-component">
      <social-share />
    </div>
    <Copyright />

  </div>
</template>

<script>
  export default {
    name: "component-footer",
    data() {
      return {};
    },
    methods: {
      scrolltop() {
        window.scrollTo(0, 0)
      }
    },
  };

</script>

<style lang="scss" scoped>


  #footer {
    height: 400px;
    background: #242424;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.20em;
    margin-top: 50px;
    padding-top: 20px;
    text-transform: uppercase;

    h2 {
      letter-spacing: 0.35em;
      font-size: 16px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        transition: 0.3s;
        opacity: 0.5;
      }
    }
    
    .footer-component {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    }


  // DESKTOP
  @media screen and (min-width: 1216px) {
    #footer {
      height: 450px;
      width: 100%;

      .footer-component {
        flex-direction: row;
      }
    }
  }

</style>
