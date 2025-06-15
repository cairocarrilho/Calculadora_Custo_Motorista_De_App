<script setup>
import { inject } from 'vue'

const saldo = inject('saldo')
const resultadosEntrada = inject('dadosEntrada')
</script>

<template>
  <div class="card" v-if="resultadosEntrada">
    <h4>Saldo</h4>
    <p>R$ {{ saldo}}</p>
  </div>
</template>

<style scoped>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

.card {
  width: 115px;
  height: 150px;
  background: green;
  padding: 15px;
  border-radius: 10px;
  margin-top: 20px;
  text-align: center;
  font-weight: bolder;
}
</style>