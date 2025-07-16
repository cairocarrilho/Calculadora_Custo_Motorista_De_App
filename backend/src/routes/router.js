import {Router} from 'express';
import{routerEntrada} from "./routerEntrada.js";

const router = Router();


router.use("/entrada",routerEntrada)
router.use("/alterar", routerEntrada)
router.use("/deletar", routerEntrada)


export  {router};