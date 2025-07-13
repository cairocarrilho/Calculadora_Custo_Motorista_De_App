import {prisma} from '../db/prismaClient.js'

export const criarEntradaGanhos = async (userData) => {
     return await prisma.entradas.create({
         data: userData,

     });
};

export const listarEntradas = async () => {
    return await prisma.entradas.findMany()
}
