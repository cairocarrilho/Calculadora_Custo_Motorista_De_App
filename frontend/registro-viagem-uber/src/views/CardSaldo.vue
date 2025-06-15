<script setup>
import {computed, inject} from 'vue'

const { ganhoValor} = inject('dadosEntrada')

const {totalSaidas} = inject('dadosSaida')


const saldo = computed(() => {
  return ganhoValor.value - totalSaidas.value
})



</script>

<template>
  <div class="card" >
    <h4>Saldo</h4>
    <p>R$ {{ saldo.toFixed(2) }}</p>
  </div>
</template>

<style scoped>
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