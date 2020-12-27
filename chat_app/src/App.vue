<template>
  <div class="container">
    <!-- <Container /> -->
    <router-view></router-view>

  </div>
</template>

<script>
// import Container from './components/Container.vue'


export default {
  name: 'App',
  components: {
  

  }
}

</script>

<style scopped>
.container{
  width: 100%;
  /* margin: 0; */
  padding: 0;
}
router-view{
  width: 100%;
  margin: 0;
}

</style>
