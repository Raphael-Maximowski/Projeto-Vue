<template>
  <div>
    <NavBar />
    <router-view> </router-view>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
import CardsHq from './components/CardsHq.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    CardsHq
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
