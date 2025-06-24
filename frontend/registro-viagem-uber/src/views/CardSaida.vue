<script setup >
import {inject} from 'vue';

const{ totalSaidas } = inject('dadosSaida');


</script>

<template>
  <div class="card" :class="{ 'high-value': totalSaidas > 1000 }">
    <h4>Total de Saídas</h4>
    <p>R$ {{ totalSaidas.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2}) }}</p>
  </div>
</template>


<style scoped>
.card {
  width: 160px;
  height: auto;
  min-height: 160px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5253 100%);
  padding: 1.25rem;
  border-radius: 12px;
  margin-top: 1rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(238, 82, 83, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
  pointer-events: none;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(238, 82, 83, 0.3);
}

.card h4 {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
}

.card p {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
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

.card {
  animation: fadeInUp 0.5s ease-out;
}

/* Responsividade */
@media (max-width: 768px) {
  .card {
    width: 100%;
    max-width: 200px;
    min-height: 120px;
  }
}

/* Opcional: Adicionar ícone de aviso quando o valor for alto */
.card.high-value::after {
  content: '⚠️';
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 1rem;
  opacity: 0.8;
}

</style>

