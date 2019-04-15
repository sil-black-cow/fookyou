<style lang="scss">
  .dish {
    background-color: grey;
    width           : 100%;
    color           : red;
    font-weight     : bold;

    .knife {
      background-color: pink;
      color: blue; 
    }

  }
</style>
    
<template>
  <div class="dish">
    {{ dish }}
    <div class="knife">
      {{dish}}
    </div>
  </div>
</template>

<script>

  export default {

    data () {
      return {
        dish: "hamberger"
      }
    }
    
  }

</script>