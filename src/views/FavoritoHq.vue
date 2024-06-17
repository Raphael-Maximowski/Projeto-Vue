<template>
    <NavBar />
        <div>
            <Card v-for="favorite in getFavorites" :key="favorite.id" :character="favorite" />
        </div>
    <Footer />
</template>
<script>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
import Card from '../components/Card.vue'
import { mapGetters } from 'vuex';

export default {
    name: 'Favorito',
    components: {
        NavBar,
        Footer,
        Card
    },
    computed: {
        ...mapGetters(['getFavorites'])
    }
}
</script>
<style >

</style>