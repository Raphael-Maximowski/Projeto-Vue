<template>
  <div>
    <NavBar />
    <router-view> </router-view>
    <Footer />
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
import Card from './components/Card.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Card,
    Footer
  },
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
