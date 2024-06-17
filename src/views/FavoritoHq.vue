<template>
    <div>
    <NavBar />
        <div class="fav">
            <Card v-for="favorite in getFavorites" :key="favorite.id" :requisition="favorite" />
        </div>
    <Footer />
    </div>
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
<style scoped>
    .fav {
        width: 100vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: center
    }
</style>