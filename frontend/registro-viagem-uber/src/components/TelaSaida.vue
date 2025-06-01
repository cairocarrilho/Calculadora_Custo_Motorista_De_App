<script setup>
import {computed, ref, inject} from 'vue'

const descGasto = ref('');
const valorSaida = ref(0);
const tipoGasto = ref('alimentacao')

const cadastrarSaida = ()=>{
  if(descGasto.value !== '' && valorSaida.value !== 0) {
    alert("cadastrado com sucesso")
  }
}


</script>

<template>

  <div class="container">
    <form>
      <h3>Saida</h3>

      <div class="card">
        <label>Data do Lançamento</label>
        <input type="date">
      </div>

      <div class="card">
        <label>Descrição do Gasto</label>
        <input type="text" v-model="descGasto" placeholder="Descrição do Gasto" >
      </div>

      <div class="card">
        <label>Valor da Saida</label>
        <input type="number" v-model="valorSaida" placeholder="Informe o valor da Saida">
      </div>


      <div class="card">
        <label for="tipoGasto">Tipo de Gasto</label>
        <select v-model="tipoGasto" id="tipoGasto">
          <option value="alimentacao">Alimentação  </option>
          <option value="Etanol">Combustivel Etanol  </option>
          <option value="Gasolina">Combustivel Gasolina  </option>
        </select>
      </div>

      <input type="submit" @click.prevent="cadastrarSaida" value="Cadastrar">

    </form>


  </div>

</template>

<style scoped>

</style>