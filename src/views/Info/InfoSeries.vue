
<template>
    <main>
        <NavBar />
        <div id="flex">
            <div id="imagem">
                <div id="insideImage"><img :src="requisition.thumbnail.path + '.' + requisition.thumbnail.extension"/></div>
            </div>
            <div id="desc">
                <div id="boxContent">
                    <h2>{{requisition.title}}</h2>
                    <div v-if= "this?.requisition.description == this.avoid">Nenhuma descrição foi encontrada no nosso banco de dados . . .</div>
                </div>
            </div>
        </div>
        <Footer />
    </main>
    </template>
    
    <script>
    import { getSerie } from '@/service/HttpService';
    import NavBar from '../../components/NavBar.vue';
    import Footer from '../../components/Footer.vue';

    export default {
        components: {
            NavBar,
            Footer
        },
      props: ['id'],
      data() {
        return {
            requisition: [],
            avoid: ""
        };
      },
      async created() {
        await this.fetchSeries();
      },
      methods: {
        async fetchSeries() {
          try {
            const response = await getSerie(this.id);
            this.requisition = response.data.data.results[0];
          } catch (error) {
            console.error('Erro ao obter dados do personagem:', error);
          }
        }
      }
    };
    </script>
    
    <style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    
    
    @media only screen and ((min-width: 375px)
    and (max-width: 700px)){
    
        main {
        height: 100vh;
    }
    
        #imagem {
            width: 60vw;
            height: 60vh;
            margin: 0vw 15vw;
            margin-top: 4em;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.181);
        }
    
        #imagem img {
            width: 60vw;
            height: 60vh;
            border-radius: 20px; 
        }
    
        #desc h2 {
            margin-top: 1em;
            margin-left: 15vw;
            padding-bottom: 0.5em;
            font-size: 5vw;
        }
    
        #desc p {
            margin-left: 15vw;
            text-align: justify;
            width: 60vw;
            font-size: 2.8vw;
        }
    }
    
    @media only screen and ((min-width: 701px) and (max-width: 900px)){
        #flex {
            display: flex;
        }
        #imagem {
            width: 40vw;
            height: 40em;
            display: flex;
            justify-content: center;
            align-items: center;
        }  
    
        #insideImage {
            width: 30vw;
            height: 30em;
            border-radius: 20px;
            box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.181);
        }
    
        #insideImage img{
            width: 30vw;
            height: 30em;
            border-radius: 20px;
        }
        #desc {
            width: 60vw;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    
        #boxContent {
            width: 50vw;
            height: 30em;
        }
    
        #boxContent h2 {
            margin-bottom: 1em;
            font-size: 3vw;
            font-weight: bolder;
        }
    
        #boxContent p {
            font-size: 2.5vw;
            text-align: justify;
        }
    }
    
    @media only screen and ((min-width: 901px) and (max-width: 1100px)){
        #flex {
            display: flex;
        }
        #imagem {
            width: 40vw;
            height: 40em;
            display: flex;
            justify-content: center;
            align-items: center;
        }  
    
        #insideImage {
            width: 30vw;
            height: 30em;
            background-position: center;
            background-size: cover;
            border-radius: 20px;
            box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.181);
    
        }
    
        #insideImage img {
            width: 30vw;
            height: 30em;  
            border-radius: 20px;
        }
    
        #desc {
            width: 60vw;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    
        #boxContent {
            width: 50vw;
            height: 30em;
        }
    
        #boxContent h2 {
            margin-bottom: 1em;
            font-size: 2.5vw;
            font-weight: bolder;
        }
    
        #boxContent p {
            font-size: 20px;
            text-align: justify;
        }
    }
    
    @media only screen and (min-width: 1101px){
        #flex {
            display: flex;
        }
        #imagem {
            width: 40vw;
            height: 40em;
            display: flex;
            justify-content: center;
            align-items: center;
        }  
    
        #insideImage {
            width: 30vw;
            height: 30em;
            background-position: center;
            background-size: cover;
            border-radius: 20px;
            box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.181);
        }
    
        #insideImage img {
            width: 30vw;
            height: 30em;    
            border-radius: 20px;
        }
    
        #desc {
            width: 60vw;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    
        #boxContent {
            width: 50vw;
            height: 30em;
        }
    
        #boxContent h2 {
            margin-bottom: 1em;
            font-size: 40px;
            font-weight: bolder;
        }
    
        #boxContent p {
            font-size: 25px;
            text-align: justify;
        }
    }
    
    
    </style>
    