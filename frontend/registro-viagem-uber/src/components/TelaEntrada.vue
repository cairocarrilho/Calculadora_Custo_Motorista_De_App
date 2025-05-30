<script setup>

import {computed, ref} from 'vue'

  const ganhoValor = ref(0);
  const kmRodado = ref(0);
  const horasTrabalhadas = ref(0);
  const qtdeViagem = ref(0);
  const resultados = ref(false);




  const calculoKm =  computed(()=>{
      return (ganhoValor.value / kmRodado.value).toFixed(2)
  })

  const ganhoPorHora = computed(()=>{
    return (ganhoValor.value / horasTrabalhadas.value).toFixed(2)
  })

const ganhoPorCorrida = computed(()=>{
  return ganhoValor.value == 0 ? 0 : (ganhoValor.value / qtdeViagem.value).toFixed(2)
})

const cadastrarEntrada =()=>{

     if(ganhoValor.value !== 0 && kmRodado.value !== 0 && horasTrabalhadas.value !== 0 && qtdeViagem.value!== 0) {
       resultados.value = true;


     }

}

</script>

<template>
  <div class="container">
    <form>
      <h3>Entrada</h3>

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
      <input type="number"  v-model="horasTrabalhadas" placeholder="Informe as horas trabalhadas ">
    </div>

      <div class="card">
        <label>Quantidade de Viagens</label>
        <input type="number"  v-model="qtdeViagem" placeholder="Informe quantas viagem foram feitas">
      </div>

      <input @click.prevent="cadastrarEntrada" type="submit" value="Cadastrar">

  </form>

</div>
  <!-- Mostra a lista SOMENTE se houver entradas -->

  <h3>Resultado:</h3>
  <div v-if="resultados" class="card_resultado">

    <div class="result">Ganho por KM: R$ {{ calculoKm }}</div>
    <div class="result">Ganho por KM: R$ {{ ganhoPorCorrida }}</div>
    <div class="result">Ganho por Hora: R$ {{ ganhoPorHora }}</div>
  </div>

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
  padding: 10px;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
}
input, select{
  padding: 10px;
  border-radius: 5px;
  border: 1px solid green;
}
.card_resultado{
  display: flex;
  gap: 10px;

}
 .result{
   padding: 10px 10px;
   width: 100px;
   height: 100px;
   border: 1px solid red;
   border-radius: 5px;
   text-align: center;
   margin: auto;
 }

</style>
