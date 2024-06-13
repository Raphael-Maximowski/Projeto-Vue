<script setup>
import CardsHq from '@/components/CardsHq.vue';
import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <div class="container">
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
    <div class="col">
      <CardsHq />
    </div>
  </div>
  </div>
</template>
<style >
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



@media only screen and ((min-width: 375px) and (max-width: 700px)){
  .row {
    flex: 1 0 100%;
    
   
  }
  
}

@media only screen and ((min-width: 701px) and (max-width: 900px)){
  .row {
    flex: 1 0 50%;
  }
  
}


@media only screen and ((min-width: 901px) and (max-width: 1200px)){
  .row {
    flex: 1 0 33.33%;
  }
}

</style>
