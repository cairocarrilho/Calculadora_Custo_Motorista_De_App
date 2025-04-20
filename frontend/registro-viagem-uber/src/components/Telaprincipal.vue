<script setup>
// defineProps({
//   msg: String,
// })
import {computed, ref} from 'vue'

  const ganhoValor = ref(0)
  const kmRodado = ref(0)

  const calculo =  computed(()=>{

   const soma = ganhoValor.value / kmRodado.value

  return soma
})

</script>

<template>
  <div class="container">

    <h1>Calculadora de custo </h1>
    <h2>Motoristas de Aplicativo </h2>

    <form>

    <div class="card">
      <label>Data do Lançamento</label>
      <input type="date">
    </div>

    <div class="card">
        <label>Ganho do Dia</label>
        <input type="number" v-model="ganhoValor" placeholder="Informe o valor do ganho" >
    </div>

    <div class="card">
      <label>Km rodado</label>
      <input type="number" v-model="kmRodado" placeholder="Informe o KM rodado">
    </div>


    <div class="card">
      <label>Horas Trabalhadas</label>
      <input type="number" placeholder="Informe as horas trabalhadas ">
    </div>

  </form>

  <div>
    <p>Ganho digitado: {{ ganhoValor }}</p>
    <p>KM digitado: {{ kmRodado }}</p>
  </div>

</div>

  {{"R$ " + calculo.toFixed(2)}}

</template>

<style >
.container{
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
  padding: 20px;
  gap: 10px;
  margin-top: 15px
}
.container .card{
  display: flex;
  margin-top: 10px;
}

.card{
  display: flex;
  flex-direction: column;
  gap: 10px;
}

</style>
