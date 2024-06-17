<script>
import Card from '../../components/Card.vue';
import { getEvents } from "../../service/HttpService.js";
import NavBar from '../../components/NavBar.vue';
import Footer from '../../components/Footer.vue';
import CardTitle from '../../components/CardTitle.vue';
import CardFullName from '../../components/CardFullName.vue';
import Pages from '../../components/Pages.vue';
import ButtonFav from '../../components/ButtonFav.vue';


// Importando os Cards
export default {
  components: { 
    Card,
    CardFullName,
    CardTitle,
    NavBar,
    Footer,
    Pages,
    ButtonFav
  },

// Criando Array que Recebe as Requisições 
  data() {
    return {
      requisition: [],
      avoid :  "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
    }
  },

  // Método para Requisitar
  methods: {
    async GetInfo() {
      const response = await getEvents(); // Response Recebe os Valores de cada ID 
      this.requisition = response.data.data.results; // Atribui o Valor de cada ID na Array Principal
      console.log(this.requisition)
    }
  },

  // Chama o Método e o Requisita até chegar no Limite definido na API
  created() {
    this.GetInfo();
  }

}
</script>

<template>
  <NavBar />
  <div id="main">
    <!-- Loop para Puxar A quantidade de Cards na Array Requisiton  -->
    <div class="events" v-for="(requisition, index) in requisition" :key="index">
      <router-link :to="{ name: 'EventsDetail', params: { id: requisition.id } }">
        <!-- Condicionamento para Imagens sem Fundo (! (Negação) - Caminho da API - Verifica se a String do Caminho está incluido no Void) -->
        <div v-if="requisition.name">
          <div v-if="!requisition.thumbnail.path.includes(avoid)"> 
          <Card :requisition="requisition"/>
          </div>
        </div>
        <div v-else-if="requisition.title">
          <div v-if="!requisition.thumbnail.path.includes(avoid)"> 
           <CardTitle :requisition="requisition"/>
          </div>
        </div>
        <div v-else-if="requisition.firstName">
          <div v-if="!requisition.thumbnail.path.includes(avoid)"> 
            <CardFullName :requisition="requisition"/>
          </div>
        </div>
      </router-link>
      <div v-if="!requisition.thumbnail.path.includes(avoid)"> 
      <ButtonFav :item="requisition" />
      </div>
    </div>
  </div>
  <Footer />
</template>


<style>

a {
  color: white;
  text-decoration: none;
}

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
