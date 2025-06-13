<script setup>
import {computed, ref, inject} from 'vue'

const {
  tipoGasto,
  valorSaida,
  dataSaida,
  itensDeSaida
} = inject('dadosSaida')


// const descGasto = ref('')
// const tipoGasto = ref('alimentacao')
// const valorSaida = ref(0)
// const dataSaida = ref('')



const totalSaidas = computed(() => {
  return itensDeSaida.value.reduce((soma, item) => soma + Number(item.valor), 0)
})

const cadastrarSaida = ()=>{

  if(dataSaida.value === '' && valorSaida.value === 0) {
    if (!confirm("Confirma salvar com valores zerados?")) return
  }

  // Adiciona no array
  itensDeSaida.value.push({
    data: dataSaida.value,
    valor: valorSaida.value,
    tipo: tipoGasto.value
  })

  // Limpa o formulário

  valorSaida.value = 0
  tipoGasto.value = 'alimentacao'
  dataSaida.value = ''


}


</script>

<template>

  <div class="container">
    <form @submit.prevent="cadastrarSaida">
      <h3>Saida</h3>

      <div class="card">
        <label>Data do Lançamento</label>
        <input type="date" v-model="dataSaida">
      </div>


      <div class="card">
        <label>Valor da Saida</label>
        <input type="number"
               v-model="valorSaida"
               placeholder="Informe o valor da Saida"
               inputmode="decimal"
               step="0.01"
        />
        </div>
        <!--inputmode="decimal" ativa o teclado numérico com ponto (em celulares) Em navegadores em português (pt-BR), usuário pode digitar com vírgula,e o Vue converterá corretamente se o valor for válido -->
        <!-- step="0.01"  permite valores decimais como 25.50 -->

      <div class="card">
        <label for="tipoGasto">Tipo de Gasto</label>
        <select v-model="tipoGasto" id="tipoGasto">
          <option value="alimentacao">Alimentação</option>
          <option value="Etanol">Combustivel Etanol</option>
          <option value="Gasolina">Combustivel Gasolina</option>
        </select>
      </div>


      <input type="submit" value="Cadastrar">

    </form>

    <div v-if="itensDeSaida.length > 0">
      <h4>Gastos cadastrados:</h4>
      <ul>
        <li v-for="(item, index) in itensDeSaida" :key="index">
          {{ item.data }} -  : R$ {{ item.valor }} ({{ item.tipo }})
        </li>
      </ul>

      <p><strong>Total de Gastos:</strong> R$ {{ totalSaidas.toFixed(2) }}</p>
    </div>
  </div>

</template>

<style scoped>

</style>