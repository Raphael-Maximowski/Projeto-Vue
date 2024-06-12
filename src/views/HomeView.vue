<script setup>
import CardsHq from '@/components/CardsHq.vue';
import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <div class="container text-center">
  <div class="row">
    <div class="col">
      <CardsHq />
    </div>
    <div class="col">
      <CardsHq />
    </div>
    <div class="col">
      <CardsHq />
    </div>
  </div>
  <div class="row">
    <div class="col">
      <CardsHq />
    </div>
    <div class="col">
      <CardsHq />
    </div>
    <div class="col">
      <CardsHq />
    </div>
  </div>
  </div>
</template>
<style >
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Estilos para a linha */
.row {
  display: flex;
  width: 100%;
  margin-bottom: 10px;
}

/* Estilos para as colunas */
.col {
  flex: 1;
  padding: 10px;
  box-sizing: border-box;
  margin: 10px;
}

/* Estilos adicionais para a centralização de texto */
.text-center {
  text-align: center;
}
@media (max-width: 768px) {
  .col {
    flex: 1 0 45%;
  }
}

@media (max-width: 480px) {
  .col {
    flex: 1 0 100%;
  }
}


</style>
