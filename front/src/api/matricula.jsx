import api from './api'

export const createMatricula = async (email,senha,nome) => {
    const body = {email,senha,nome}
    const response = await api.post('/v1/matricula/create',body,{
        headers:{ 'Content-Type': 'application/json'}
    })

    return response.data
}

export const buscarMatricula = async (email,senha,nome) => {
    const body = {email,senha,nome}
    const response = await api.post('/v1/matricula/buscar',body,{
        headers:{ 'Content-Type': 'application/json'}
    })

    return response.data
}

export const busarMatricula = async (email,senha,nome) => {
    const body = {email,senha,nome}
    const response = await api.post('/v1/matricula/buscarId',body,{
        headers:{ 'Content-Type': 'application/json'}
    })

    return response.data
}



export const updateMatricula = async (email,senha,nome) => {
    const body = {email,senha,nome}
    const response = await api.post('/v1/matricula/update',body,{
        headers:{ 'Content-Type': 'application/json'}
    })

    return response.data
}

export const deletarMatricula = async (email,senha,nome) => {
    const body = {email,senha,nome}
    const response = await api.post('/v1/matricula/delete',body,{
        headers:{ 'Content-Type': 'application/json'}
    })

    return response.data
}

