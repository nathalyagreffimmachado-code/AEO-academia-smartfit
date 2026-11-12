import api from './api'

export const createTreinos = async (nome,descricao,matricula,duracao) => {
    const body = {nome,descricao,matricula,duracao}
    const response = await api.post('/v1/treino/create',body,{
        headers:{ 'Content-Type': 'application/json'}
    })

    return response.data
}

export const buscarTreinos = async (nome,descricao,matricula,duracao) => {
    const body = {nome,descricao,matricula,duracao}
    const response = await api.post('/v1/treino/buscar',body,{
        headers:{ 'Content-Type': 'application/json'}
    })

    return response.data
}

export const busarTreinos = async (nome,descricao,matricula,duracao) => {
    const body = {nome,descricao,matricula,duracao}
    const response = await api.post('/v1/treino/buscarId',body,{
        headers:{ 'Content-Type': 'application/json'}
    })

    return response.data
}



export const updateTreinos = async (nome,descricao,matricula,duracao) => {
    const body = {nome,descricao,matricula,duracao}
    const response = await api.post('/v1/treino/update',body,{
        headers:{ 'Content-Type': 'application/json'}
    })

    return response.data
}

export const deletarTreinos = async (nome,descricao,matricula,duracao) => {
    const body = {nome,descricao,matricula,duracao}
    const response = await api.post('/v1/treino/delete',body,{
        headers:{ 'Content-Type': 'application/json'}
    })

    return response.data
}

