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
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #e9ecef;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

label {
  display: block;
  color: #495057;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

input, select {
  width: 90%;
  padding: 0.75rem 1rem;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  font-size: 1rem;
  color: #495057;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

input:focus, select:focus {
  outline: none;
  border-color: #4c6ef5;
  box-shadow: 0 0 0 3px rgba(76, 110, 245, 0.1);
}

select {
  background-color: white;
  cursor: pointer;
}

hr {
  border: none;
  height: 1px;
  background-color: #e9ecef;
  margin: 1rem 0;
}

.azul {
  width: 100%;
  background: linear-gradient(135deg, #4c6ef5 0%, #3b5bdb 100%);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.9rem;
  box-shadow: 0 4px 6px rgba(76, 110, 245, 0.2);
  margin-bottom: 1rem;
}

.azul:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(76, 110, 245, 0.3);
}

.azul:active {
  transform: translateY(0);
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

/* Estilos específicos para o select de tipo de gasto */
select option {
  padding: 0.5rem;
}

/* Estilização para campos numéricos */
input[type="number"] {
  -moz-appearance: textfield;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Responsividade */
@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  form {
    padding: 1.5rem;
  }

  .card {
    padding: 1rem;
  }

  input, select, .azul, input[type="submit"] {
    font-size: 16px; /* Previne zoom em iOS */
  }
}

/* Animação de entrada para novos cards */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: slideDown 0.3s ease-out;
}


</style>