import {criarEntradaGanhos, listarEntradas,alterarEntrada} from '../services/entradaServices.js'

export class Entrada{
   async criandoEntradas (req, res){
         try{
            const ganhosEntrada = await criarEntradaGanhos(req.body)
            res.status(201).json(ganhosEntrada)
        } catch(err){
            console.error(err)
            res.status(500).json({ error: 'Erro ao criar entrada'})
        }
    };

   async listandoGanhos (req, res){
        try{
            const listaGanhos = await listarEntradas()
            res.status(200).json(listaGanhos)
        } catch(err){
            console.error(err)
            res.status(500).json({ error: 'Erro ao listar ganhos'})
        }
    };

   async alterandoEntrada (req, res){
       const { id } = req.params;
      const { data, ganho, km_rodado, horas_trabalhadas, qtde_viagem } = req.body;
        try{
            const alterarGanhos = await alterarEntrada(req.params.id, req.body)
            res.status(200).json(alterarGanhos)
        } catch(err){
            console.error(err)
            res.status(500).json({ error: 'Erro ao alterar Entrada'})
        }
   }
}