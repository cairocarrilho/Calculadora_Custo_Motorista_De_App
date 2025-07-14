import {prisma} from '../db/prismaClient.js'

export const criarEntradaGanhos = async (userData) => {
     return await prisma.entradas.create({
         data: userData,

     });
};

export const listarEntradas = async () => {
    return await prisma.entradas.findMany()
};

export const alterarEntrada = async (id, novosDados) => {
    return await prisma.entradas.update({
        where: {id: id},
        data: {
            ganho: novosDados.ganho,
            km_rodado: novosDados.km_rodado,
            horas_trabalhadas: novosDados.horas_trabalhadas,
            qtde_viagem: novosDados.qtde_viagem,


        }
    })
}

