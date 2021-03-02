<template>
  <div id="social">

    <div class="social_footer">
      <h3>websites</h3>
      <div id="websites">
        <div class="link">
          <h4>portfolio :</h4>
          <a href="https://portfolio.corentinperroux.fr" target="_blank">
            https://portfolio.corentinperroux.fr
          </a>
        </div>
        <div class="link">
          <h4>photographie :</h4>
          <a href="https://corentinperroux.fr" target="_blank">
            https://corentinperroux.fr
          </a>
        </div>

      </div>
      <h3>contact</h3>
      <div id="links">
        <div class="link">
          <h4>Email :</h4>
          <a href="mailto:corentin7301@gmail.com" target="_blank">
            corentin7301@gmail.com
          </a>
        </div>
        <div class="link">
          <h4>Téléphone :</h4>
          <a href="tel:0652977046" target="_blank">
            06.52.97.70.46
          </a>
        </div>
        <div class="link">
          <h4>Linkedin :</h4>
          <a href="https://www.linkedin.com/in/corentinperroux/" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
        <div class="link">
          <h4>Github :</h4>
          <a href="https://github.com/Corentin7301" target="_blank">
            <i class="fab fa-github-square"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "socialShare",

    data() {
      return {

      }
    },
    methods: {},
    computed: {

    },
  }

</script>

<style lang="scss" scoped>
  #social {
    width: 100%;
    text-align: center;
    padding: 10px;

    .social_footer {
      display: flex;
      flex-direction: column;
      h3 {
        margin-top: 20px;
      }

      #links,
      #websites {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        margin: 20px 0 0 50px;
        text-align: left;


        .link {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;


          h4,
          a {
            font-weight: 400;
          }

          h4 {
            text-transform: uppercase;
            color: $orange;
          }

          a {
            text-transform: none;
            font-size: 14px;
            margin-left: 10px;
          }
        }
      }
    }
  }

  // DESKTOP
  @media screen and (min-width: 1216px) {
    #social {
      width: 100%;

      .social_footer {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;

        #links {
          width: 30%;

          h4 {
            text-transform: uppercase;
            color: $orange;
            font-size: 18px;
          }

          a {
            text-transform: none;
            font-size: 17px;
          }
        }
      }
    }
  }

</style>
