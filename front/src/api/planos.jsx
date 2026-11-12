import api from './api'

export const createPlano = async (descricao_plano,preco,tipo_do_plano) => {
    const body = {descricao_plano,preco,tipo_do_plano}
    const response = await api.post('/v1/plano/create',body,{
        headers:{ 'Content-Type': 'application/json'}
    })

    return response.data
}

export const buscarPlano = async (descricao_plano,preco,tipo_do_plano) => {
    const body = {descricao_plano,preco,tipo_do_plano}
    const response = await api.post('/v1/plano/buscar',body,{
        headers:{ 'Content-Type': 'application/json'}
    })

    return response.data
}

export const busarPlano = async (descricao_plano,preco,tipo_do_plano) => {
    const body = {descricao_plano,preco,tipo_do_plano}
    const response = await api.post('/v1/plano/buscarId',body,{
        headers:{ 'Content-Type': 'application/json'}
    })

    return response.data
}



export const updatePlano = async (descricao_plano,preco,tipo_do_plano) => {
    const body = {descricao_plano,preco,tipo_do_plano}
    const response = await api.post('/v1/plano/update',body,{
        headers:{ 'Content-Type': 'application/json'}
    })

    return response.data
}

export const deletarPlano = async (descricao_plano,preco,tipo_do_plano) => {
    const body = {descricao_plano,preco,tipo_do_plano}
    const response = await api.post('/v1/plano/delete',body,{
        headers:{ 'Content-Type': 'application/json'}
    })

    return response.data
}

