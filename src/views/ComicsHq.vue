<script>
import CardsHq from '@/components/CardsHq.vue';
import { getComics } from "../service/HttpService.js";

export default {
  components: { 
    CardsHq
  },

  data() {
    return {
      comics: []
    }
  },

  methods: {
    async GetInfo1() {
      const response = await getComics();
      console.log(response);
      this.comics = response.data.data.results;
      console.log(this.comics);
    }
  },

  created() {
    this.GetInfo1();
  }

}
</script>

<template>
  <div id="main">
    <div class="comic" v-for="(comic, index) in comics" v-bind:key="index">
       <router-link :to="{ name: 'CharacterDetail', params: { id: comic.id } }">
      <CardsHq :character="comic"/>
      </router-link>
    </div>
  </div>

</template>
<style>

#main {
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center
}

.card {
  margin: 0.3vw 3vw 3vw 3vw;
  border-radius: 20px;
  
}

.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
}


.row {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  margin: 20px;
  justify-content: space-around;

}


.text-center {
  text-align: center;
}



@media only screen and ((min-width: 375px) and (max-width: 700px)) {
  .row {
    flex: 1 0 100%;


  }

}

@media only screen and ((min-width: 701px) and (max-width: 900px)) {
  .row {
    flex: 1 0 50%;
  }

}


@media only screen and ((min-width: 901px) and (max-width: 1200px)) {
  .row {
    flex: 1 0 33.33%;
  }
}
</style>
