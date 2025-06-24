<script setup >
import TelaEntrada from './components/TelaEntrada.vue'
import TelaSaida from "./components/TelaSaida.vue";
import Calculos from "./views/Calculos.vue";
import CardSaida from "./views/CardSaida.vue";
import CardSaldo from "./views/CardSaldo.vue";

import { ref, computed,provide , watch } from 'vue'



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


const totalSaidas = computed(() => {
  return itensDeSaida.value.reduce((soma, item) => soma + Number(item.valor), 0)
})

const resultadoSub = computed(() => {
  return ganhoValor.value - totalSaidas.value
})


// Disponibiliza os dados para os filhos
provide('dadosEntrada', {
  ganhoValor,
  kmRodado,
  horasTrabalhadas,
  qtdeViagem,
  resultadosEntrada,

})

provide('dadosSaida', {
  tipoGasto,
  valorSaida,
  dataSaida,
  itensDeSaida,
  totalSaidas

})

provide('saldo', resultadoSub)


// Estado de qual tipo está selecionado
const tipoSelecionado = ref('entrada')

// Computa o componente atual com base na seleção
const componenteAtual = computed(() => {
  return tipoSelecionado.value === 'entrada' ? TelaEntrada : TelaSaida
})


</script>

<template>
  <div class="containerPrincipal">

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
    <div class="cardResultados">
      <CardSaida  v-if="totalSaidas > 0" />
      <CardSaldo v-if=" resultadosEntrada" />
    </div>


    <!-- Renderiza o componente de acordo com a seleção,  -->

      <component :is="componenteAtual" />

  </div>
  <Calculos v-if="tipoSelecionado === 'entrada'"/>
  </div>
</template>

<style scoped>


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

.containerPrincipal {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  width: 100%;
  padding: 2rem 0;
}

.titulo {
  text-align: center;
  color: white;
  padding: 2rem 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.titulo h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.titulo h3 {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.9;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.botoes {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

button {
  padding: 12px 24px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  background: #f8f9fa;
  color: #495057;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

button.ativo {
  background: #4c6ef5;
  color: white;
  box-shadow: 0 4px 6px rgba(76, 110, 245, 0.2);
}

.cardResultados {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .container {
    margin: 1rem;
    padding: 1.5rem;
  }

  .titulo h1 {
    font-size: 2rem;
  }

  .cardResultados {
    flex-direction: column;
    align-items: center;
  }
}

</style>
