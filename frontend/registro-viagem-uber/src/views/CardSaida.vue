<script setup >
import {inject} from 'vue';

const{ totalSaidas } = inject('dadosSaida');


</script>

<template>
  <div class="card">
    <h4>Total de Saídas</h4>
    <p>R$ {{ totalSaidas.toFixed(2) }}</p>
  </div>
</template>

<style scoped>
.card {
  width: 115px;
  height: 150px;
  padding: 15px;
  border-radius: 10px;
  margin-top: 20px;
  text-align: center;
  background: red;
  font-weight: bolder;
}
</style>

