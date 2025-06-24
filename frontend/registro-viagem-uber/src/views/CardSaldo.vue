<script setup>
import { inject } from 'vue'

const saldo = inject('saldo')
const resultadosEntrada = inject('dadosEntrada')
</script>

<template>
  <div class="card" v-if="resultadosEntrada">
    <h4>Saldo</h4>
    <p>R$ {{ saldo.toLocaleString('pt-BR',{minimumFractionDigits: 2, maximumFractionDigits:2 })}}</p>
  </div>
</template>

<style scoped>


  .card {
    width: 160px;
    height: auto;
    min-height: 160px;
    background: linear-gradient(135deg, #38ef7d 0%, #11998e 100%);
    padding: 1.25rem;
    border-radius: 12px;
    margin-top: 1rem;
    text-align: center;
    box-shadow: 0 4px 15px rgba(17, 153, 142, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.75rem;
  }

  .card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(17, 153, 142, 0.3);
  }

  .card h4 {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .card p {
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    .card {
      width: 100%;
      max-width: 200px;
      min-height: 120px;
    }
  }

</style>