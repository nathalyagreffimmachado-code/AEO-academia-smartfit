import api from './api'

export const createProfessores = async (nome,email,matricula) => {
    const body = {nome,email,matricula}
    const response = await api.post('/v1/professores/create',body,{
        headers:{ 'Content-Type': 'application/json'}
    })

    return response.data
}

export const buscarProfessores = async (nome,email,matricula) => {
    const body = {nome,email,matricula}
    const response = await api.post('/v1/professores/buscar',body,{
        headers:{ 'Content-Type': 'application/json'}
    })

    return response.data
}

export const busarProfessores = async (nome,email,matricula) => {
    const body = {nome,email,matricula}
    const response = await api.post('/v1/professores/buscarId',body,{
        headers:{ 'Content-Type': 'application/json'}
    })

    return response.data
}



export const updateProfessores = async (nome,email,matricula) => {
    const body = {nome,email,matricula}
    const response = await api.post('/v1/professores/update',body,{
        headers:{ 'Content-Type': 'application/json'}
    })

    return response.data
}

export const deletarProfessores = async (nome,email,matricula) => {
    const body = {nome,email,matricula}
    const response = await api.post('/v1/professores/delete',body,{
        headers:{ 'Content-Type': 'application/json'}
    })

    return response.data
}

