<script setup>
import {inject, ref} from 'vue'



const {
  tipoGasto,
  valorSaida,
  dataSaida,
  itensDeSaida,

} = inject('dadosSaida')

const saidasTemporarias = ref([
  { dataSaida: '', valorSaida: 0, tipoGasto: 'alimentacao' }
])


const cadastrarOutraSaida = () =>{
  saidasTemporarias.value.push({
    data: dataSaida,
    valor: valorSaida,
    tipo: tipoGasto
  })
}
const cadastrarSaida = ()=>{

  for (const saida of saidasTemporarias.value) {
    if (saida.data === '' && saida.valor === 0) {
      if (!confirm("Confirma salvar uma saída com valores zerados?")) return
    }

    itensDeSaida.value.push({
      data: saida.data,
      valor: saida.valor,
      tipo: saida.tipo
    })
  }

  // Limpa os campos após cadastrar
  saidasTemporarias.value = [
    { data: '', valor: 0, tipo: 'alimentacao' }
  ]

}


</script>

<template>


    <div class="container">
      <form @submit.prevent="cadastrarSaida">
        <h3>Saída</h3>

        <div
            class="card"
            v-for="(saida, index) in saidasTemporarias"
            :key="index"
        >
          <label>Data do Lançamento</label>
          <input type="date" v-model="saida.data" />

          <label>Valor da Saída</label>
          <input
              type="number"
              v-model="saida.valor"
              placeholder="Informe o valor da Saída"
              inputmode="decimal"
              step="0.01"
          />

          <label for="tipoGasto">Tipo de Gasto</label>
          <select v-model="saida.tipo">
            <option value="alimentacao">Alimentação</option>
            <option value="Etanol">Combustível Etanol</option>
            <option value="Gasolina">Combustível Gasolina</option>
          </select>

          <hr />
        </div>

        <button type="button" @click="cadastrarOutraSaida" class="azul">
          Adicionar outra saída
        </button>

        <input type="submit" value="Cadastrar" />
      </form>
    </div>
</template>

<style scoped>
.azul{

  width: 100%;
  background-color: blue;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  gap:10px;

}

</style>