<template>
    <div>
     <button @click="addFavoriteAction(item)" class="star-button"></button>
    </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    name: 'ButtonFav',
    props: {
        item: {}
    },
    methods: {
    ...mapActions(['addFavoriteAction'])
    }

}
</script>
<style >
    .star-button {
        display: inline-block;
        padding: 10px 20px;
        font-size: 16px;
        color: white;
        background-color: #ff0000;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        height: 30px;
        top: -280px;
        right: -100px;

       
    }

    .star-button::before {
        content: '★';
        font-size: 20px;
        position: absolute;
        left: 10px; /* Adjust the position as needed */
        top: 40%;
        transform: translateY(-50%);
    }

</style>