import {Router} from 'express';
import {Entrada}  from '../controllers/entradaController.js';
const routerEntrada = Router();
const entrada = new Entrada();


routerEntrada.post('/', entrada.criandoEntradas)
routerEntrada.get('/', entrada.listandoGanhos)
routerEntrada.put('/:id', entrada.alterandoEntrada)



export  {routerEntrada};