<script>
import CardsHq from '@/components/CardsHq.vue';
import { getCreators } from "../service/HttpService.js";

export default {
  components: { 
    CardsHq
  },

  data() {
    return {
      creators: []
    }
  },

  methods: {
    async GetInfo2() {
      const response = await getCreators();
      console.log(response);
      this.creators = response.data.data.results;
      console.log(this.creators);
    }
  },

  created() {
    this.GetInfo2();
  }

}
</script>

<template>
  <div id="main">
    <div class="creator" v-for="(creator, index) in creators" v-bind:key="index">
       <router-link :to="{ name: 'CharacterDetail', params: { id: creator.id } }">
      <CardsHq :character="creator"/>
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
