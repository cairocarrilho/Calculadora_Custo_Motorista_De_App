<script setup >
import TelaEntrada from './components/TelaEntrada.vue'
import TelaSaida from "./components/TelaSaida.vue";

import { ref, computed } from 'vue'

// Estado de qual tipo está selecionado
const tipoSelecionado = ref('entrada')

// Computa o componente atual com base na seleção
const componenteAtual = computed(() => {
  return tipoSelecionado.value === 'entrada' ? TelaEntrada : TelaSaida
})


</script>

<template>
  <div>
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





</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.botoes {
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
