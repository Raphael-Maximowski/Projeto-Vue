<script>
import Card from '../../components/Card.vue';
import { getComics } from "../../service/HttpService.js";
import NavBar from '../../components/NavBar.vue'
import Footer from '../../components/Footer.vue'

// Importando os Cards
export default {
  components: { 
    Card,
    NavBar,
    Footer
  },

// Criando Array que Recebe as Requisições 
  data() {
    return {
      requisition: [],
      avoid : "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
    }
  },

  // Método para Requisitar
  methods: {
    async GetInfo() {
      const response = await getComics(); // Response Recebe os Valores de cada ID 
      console.log(response)
      this.requisition = response.data.data.results; // Atribui o Valor de cada ID na Array Principal
    }
  },

  // Chama o Método e o Requisita até chegar no Limite definido na API
  created() {
    this.GetInfo();
  }

}
</script>

<template>
<NavBar/>
  <div id="main">
    <!-- Loop para Puxar A quantidade de Cards na Array Requisiton  -->
    <div class="comic" v-for="(requisition, index) in requisition" :key="index">
      <router-link :to="{ name: 'ComicDetail', params: { id: requisition.id } }">
        <!-- Condicionamento para Imagens sem Fundo (! (Negação) - Caminho da API - Verifica se a String do Caminho está incluido no Void) -->
        <div v-if="!requisition.thumbnail.path.includes(avoid)"> 
          <Card :requisition="requisition"/>
        </div>
      </router-link>
    </div>
  </div>
  <Footer/>
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
