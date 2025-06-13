<script setup >
import TelaEntrada from './components/TelaEntrada.vue'
import TelaSaida from "./components/TelaSaida.vue";
import Calculos from "./components/Calculos.vue";

import { ref, computed,provide  } from 'vue'

//Entrada
const ganhoValor = ref(0);
const kmRodado = ref(0);
const horasTrabalhadas = ref(0);
const qtdeViagem = ref(0);
const resultadosEntrada = ref(false);




// Saida
const valorSaida = ref(0);
const tipoGasto = ref('alimentacao')
const dataSaida =  ref('')
const itensDeSaida = ref([])



// Disponibiliza os dados para os filhos
provide('dadosEntrada', {
  ganhoValor,
  kmRodado,
  horasTrabalhadas,
  qtdeViagem,
  resultadosEntrada
})

provide('dadosSaida', {
  tipoGasto,
  valorSaida,
  dataSaida,
  itensDeSaida
})



// Estado de qual tipo está selecionado
const tipoSelecionado = ref('entrada')

// Computa o componente atual com base na seleção
const componenteAtual = computed(() => {
  return tipoSelecionado.value === 'entrada' ? TelaEntrada : TelaSaida
})


</script>

<template>
  <div class="titulo">
    <h1>Calculadora de Custo</h1>
    <h3>Motorista de app</h3>
  </div>
  <div class="container">
    <!-- Botões para trocar entre Entrada e Saída -->
    <div class="botoes">
      <button
          :class="{ ativo: tipoSelecionado === 'entrada' }"
          @click="tipoSelecionado = 'entrada'"
      >
        Entrada
      </button>
      <button
          :class="{ ativo: tipoSelecionado === 'saida' }"
          @click="tipoSelecionado = 'saida'"
      >
        Saída
      </button>
    </div>

    <!-- Renderiza o componente de acordo com a seleção,  -->
    <component :is="componenteAtual" />
  </div>
  <Calculos v-if="tipoSelecionado === 'entrada'"/>

</template>

<style scoped>
.titulo{
  text-align: center;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.botoes {
  margin: auto;
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid #ccc;
  background: #f0f0f0;
  transition: background 0.3s;
}

button.ativo {
  background-color: #3498db;
  color: white;
  border-color: #2980b9;
}

</style>
