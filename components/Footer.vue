<template>
  <div id="footer">
    <Copyright />
  </div>
</template>

<script>
  export default {
    name: "component-footer"
  };

</script>

<style lang="scss" scoped>


  #footer {
    height: 100px;
    background: #2f495e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }


  // DESKTOP
  @media screen and (min-width: 1216px) {
    #footer {
      height: 100px;
      width: 100%;
    }
  }

</style>
