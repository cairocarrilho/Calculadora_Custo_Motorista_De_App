<script setup>

import { inject, computed } from 'vue'

const {
  ganhoValor,
  kmRodado,
  horasTrabalhadas,
  qtdeViagem,
  resultadosEntrada
} = inject('dadosEntrada')

const resultadoSub = inject('saldo')


const calculoKm =  computed(()=>{
  return (resultadoSub.value / kmRodado.value).toFixed(2)
})

const ganhoPorHora = computed(()=>{
  return (resultadoSub.value / horasTrabalhadas.value).toFixed(2)
})

const ganhoPorCorrida = computed(()=>{
  return (resultadoSub.value / qtdeViagem.value).toFixed(2)
})




</script>

<template>

  <div class="calculos-container">
    <div v-if="resultadosEntrada" class="card_resultado">
      <div class="result">Ganho por KM: R$ {{ calculoKm}}</div>
      <div class="result">Ganho por Corrida:<br> R$ {{ ganhoPorCorrida }}</div>
      <div class="result">Ganho por Hora:<br> R$ {{ ganhoPorHora}}</div>
    </div>

  </div>






</template>

<style scoped>

.calculos-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
}

.card_resultado{
  display: flex;
  gap: 5px;
 align-items: center;



}
.result{
  padding: 10px 10px;
  width: 100px;
  height: 100px;
  border: 1px solid darkblue;
  border-radius: 5px;
  text-align: center;
  justify-content: center;
  align-content: center;


}

</style>