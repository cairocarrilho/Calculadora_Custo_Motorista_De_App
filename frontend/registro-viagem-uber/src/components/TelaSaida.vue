<script setup>
import {computed, ref} from 'vue'

const descGasto = ref('');
const valorSaida = ref(0);


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
        <label for="fruta">Tipo de Gasto</label>
        <select v-model="tipoGasto" id="fruta">
          <option  selected>Selecione o Tipo de Gasto  </option>
          <option  :value="alimentação">Alimentação  </option>
          <option  :value="etanol">combustivel Etanol  </option>
          <option :value="gasolina">combustivel Gasolina  </option>
        </select>
      </div>

    </form>


  </div>

</template>

<style scoped>

</style>