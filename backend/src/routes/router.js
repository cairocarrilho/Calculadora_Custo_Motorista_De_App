import {Router} from 'express';
import{routerEntrada} from "./routerEntrada.js";

const router = Router();


router.use("/entrada",routerEntrada)



export  {router};