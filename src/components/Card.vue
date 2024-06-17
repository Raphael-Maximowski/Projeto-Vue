<template>
  <div>
    <div class="title">
      <!-- Puxa o nome da Array Requisição  -->
      <h5 class="card-title">{{ requisition.name }}</h5>
    </div>
    <div class="card">
      <!-- Puxa a Imagem da Array Requisição  -->
      <img :src="requisition.thumbnail.path + '.' + requisition.thumbnail.extension"/>
      <div class="card-body">
        
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Card',
  // Cria a Array Principal, a qual é exportada para Cada Menu, e lá Preenchido com cada Rota de API
  props: {
    requisition: {
      type: Object,
      required: true,
    },
  }, 
  
}
</script>

<style>
      
     .card {
            position: relative;
            width: 18rem;
            height: 20rem;
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            transition: transform 0.2s;
            margin: 0;
        }
        .card:hover {
            transform: translateY(-5px);
        }
        .card img {
            width: 100%;
            height: 100%;
        }
        .card-body {
            position: absolute;
            display: flex;
            justify-content: center;
            bottom: 0;
            left: 0;
            width: 100%;
            color: white;
      
        }
        .card-title {
            
            font-size: 1.25rem;
            color: black;
            padding: 5px 10px;
            border-radius: 10px;
        }
        .card-text {
            font-size: 1rem;
        }

        .title {
            text-align: center;
        }

        * {
            font-family: Arial, Helvetica, sans-serif;
        }
</style>
