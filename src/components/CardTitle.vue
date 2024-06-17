<template>
    <div>
      <div class="title">
        <!-- Puxa o nome da Array Requisição  -->
        <h5 class="card-title">{{ requisition.title }}</h5>
      </div>
      <div class="card">
        <!-- Puxa a Imagem da Array Requisição  -->
        <img :src="requisition.thumbnail.path + '.' + requisition.thumbnail.extension"/>
        <div class="card-body">
          <button class="star-button"></button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardTitle',
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
        top: -270px;
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
              background-color: rgba(255, 255, 255, 0.744);
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
  