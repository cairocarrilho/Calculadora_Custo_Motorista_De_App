<script setup>

import {inject, ref} from 'vue'



const {
  ganhoValor,
  kmRodado,
  horasTrabalhadas,
  qtdeViagem,
  resultadosEntrada,

} = inject('dadosEntrada') // injeto eles do elementos pai para ser usado

const saldo = inject('saldo')




const cadastrarEntrada =()=>{
  if(ganhoValor.value !== 0 && kmRodado.value !== 0 && horasTrabalhadas.value !== 0 && qtdeViagem.value !== 0) {
    resultadosEntrada.value = true;
  }
}



</script>

<template>
  <div class="container">
    <form @submit.prevent="cadastrarEntrada">
      <h3>Entrada</h3>

    <div class="card">
      <label>Data do Lançamento</label>
      <input type="date">
    </div>

    <div class="card">
        <label>Ganho do Dia</label>
        <input type="number" v-model="ganhoValor" placeholder="Informe o valor do ganho" >
    </div>

    <div class="card">
      <label>Km rodado</label>
      <input type="number" v-model="kmRodado" placeholder="Informe o KM rodado">
    </div>


    <div class="card">
      <label>Horas Trabalhadas</label>
      <input type="number"  v-model="horasTrabalhadas" placeholder="Informe as horas trabalhadas ">
    </div>

      <div class="card">
        <label>Quantidade de Viagens</label>
        <input type="number"  v-model="qtdeViagem" placeholder="Informe quantas viagem foram feitas">
      </div>

      <input type="submit" value="Cadastrar" />


    </form>

</div>

</template>

<style >

.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: auto;
  padding: 1.5rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

form h3 {
  color: #2b3442;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.5rem;
}

form h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #4c6ef5, #6e8ffa);
  border-radius: 2px;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 12px;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
}

.card:focus-within {
  border-color: #4c6ef5;
  box-shadow: 0 0 0 3px rgba(76, 110, 245, 0.1);
}

label {
  color: #495057;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

input {
  padding: 0.75rem 1rem;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  font-size: 1rem;
  color: #495057;
  transition: all 0.3s ease;
  width: 90%;
}

input:focus {
  outline: none;
  border-color: #4c6ef5;
  box-shadow: 0 0 0 3px rgba(76, 110, 245, 0.1);
}

input[type="date"] {
  color: #495057;
  font-family: inherit;
}

input[type="number"] {
  -moz-appearance: textfield;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input::placeholder {
  color: #adb5bd;
}

input[type="submit"] {
  background: linear-gradient(135deg, #40c057 0%, #2f9e44 100%);
  color: white;
  font-weight: 600;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 6px rgba(64, 192, 87, 0.2);
  width: 100%;
}

input[type="submit"]:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(64, 192, 87, 0.3);
}

input[type="submit"]:active {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .container {
    width: 100%;
    padding: 1rem;
  }

  form {
    padding: 1.5rem;
  }

  .card {
    padding: 0.75rem;
  }

  input {
    font-size: 16px; /* Previne zoom em dispositivos iOS */
  }
}


</style>
