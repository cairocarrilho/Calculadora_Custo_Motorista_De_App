<script setup>

import { inject, computed } from 'vue'

const {
  ganhoValor,
  kmRodado,
  horasTrabalhadas,
  qtdeViagem,
  resultadosEntrada
} = inject('dadosEntrada')

const resultadoSub = inject('saldo')
const {totalSaidas} = inject('dadosSaida')


const calculoKm =  computed(()=>{
  return (ganhoValor.value / kmRodado.value).toFixed(2)
})

const ganhoPorHora = computed(()=>{
  return (resultadoSub.value / horasTrabalhadas.value).toFixed(2)
})

const ganhoPorCorrida = computed(()=>{
  return (resultadoSub.value / qtdeViagem.value).toFixed(2)
})

const custoPorKm = computed(()=>{
  return (totalSaidas.value / kmRodado.value).toFixed(2)
})

const lucroPorKM = computed(()=>{
  return (resultadoSub.value / kmRodado.value).toFixed(2)
})




</script>

<template>
  <div class="calculos-container">
    <div v-if="resultadosEntrada" class="card_resultado" key="0">
      <div class="result">
        <span>Ganho por KM</span>
        <span>R$ {{ calculoKm }}</span>
      </div>
      <div class="result">
        <span>Ganho por Corrida</span>
        <span>R$ {{ ganhoPorCorrida }}</span>
      </div>
      <div class="result">
        <span>Ganho por Hora</span>
        <span>R$ {{ ganhoPorHora }}</span>
      </div>
      <div class="result">
        <span>Custo por KM</span>
        <span>R$ {{ custoPorKm }}</span>
      </div>
      <div class="result">
        <span>Lucro por KM</span>
        <span>R$ {{ lucroPorKM }}</span>
      </div>

    </div>
  </div>

</template>

<style scoped>
.calculos-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  padding: 1rem;
}

.card_resultado {
  display: flex;
  gap: 1.5rem;
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: center;
}

.result {
  width: 180px;
  min-height: 140px;
  padding: 1.25rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.result::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #4c6ef5, #6e8ffa);
}

.result:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

/* Adicione classes para os diferentes tipos de resultado */
.result span:first-child {
  font-size: 0.9rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
  font-weight: 500;
  text-align: center;
}

.result span:last-child {
  font-size: 1.5rem;
  color: #2b3442;
  font-weight: 600;
  text-align: center;
}

/* Media Queries para responsividade */
@media (max-width: 768px) {
  .card_resultado {
    gap: 1rem;
  }

  .result {
    width: 150px;
    min-height: 120px;
    padding: 1rem;
  }
}

/* Animação de entrada */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card_resultado {
  animation: fadeInUp 0.5s ease-out;
}


</style>