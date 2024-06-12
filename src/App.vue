<template>
  <div>
    <NavBar />
    <router-view> </router-view>
    <button>Next</button>
    <Footer />
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
import CardsHq from './components/CardsHq.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    CardsHq,
    Footer
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
