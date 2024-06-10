<script setup>
import CardsHq from '@/components/CardsHq.vue';
import NavBar from '@/components/NavBar.vue';
</script>

<template>
  
 <div class="container-fluid">
  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <div class="row">
    <div class="col-md-8"><CardsHq /></div>
    <div class="col-6 col-md-4"><CardsHq /></div>
    <div class="col-6 col-md-4"><CardsHq /></div>
  </div>

  <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
  <div class="row">
    <div class="col-6 col-md-4"><CardsHq /></div>
    <div class="col-6 col-md-4"><CardsHq /></div>
    <div class="col-6 col-md-4"><CardsHq /></div>
   
  </div>

</div>
</template>
<style >
.row {
  width: 100%;
  height: 100%;
}
</style>
