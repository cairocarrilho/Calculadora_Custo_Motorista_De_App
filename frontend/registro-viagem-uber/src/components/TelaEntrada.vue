<script setup>

import { inject } from 'vue'


const {
  ganhoValor,
  kmRodado,
  horasTrabalhadas,
  qtdeViagem,
  resultadosEntrada
} = inject('dadosEntrada') // injeto eles do elementos pai para ser usado


const cadastrarEntrada =()=>{

  if(ganhoValor.value !== 0 && kmRodado.value !== 0 && horasTrabalhadas.value !== 0 && qtdeViagem.value!== 0) {
    resultadosEntrada.value = true;
  }

}



</script>

<template>
  <div class="container">
    <form @submit.prevent="cadastrarEntrada">
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

      <input type="submit" value="Cadastrar" />


    </form>

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

form{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
form input[type='submit']{
  width: 100%;
  background-color: green;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  gap:10px;
}


</style>
