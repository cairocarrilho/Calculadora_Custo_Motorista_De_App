import {prisma} from '../db/prismaClient.js'

export const criarEntradaGanhos = async (userData) => {
     return await prisma.entradas.create({
         data: userData,

     });
};

export const listarEntradas = async () => {
    return await prisma.entradas.findMany()
};

export const alterarEntrada = async (id, userData) => {
    return await prisma.entradas.update({
        where: {id: id},
        data: {
            ganho: userData.ganho,
            km_rodado: userData.km_rodado,
            horas_trabalhadas: userData.horas_trabalhadas,
            qtde_viagem: userData.qtde_viagem,
        }
    });
}

export const deletarEntrada = async (id) => {
    return await prisma.entradas.delete({
        where: {id: id}
    })
}

