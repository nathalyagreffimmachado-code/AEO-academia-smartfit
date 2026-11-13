import api from './api'

// Criar plano
export const createPlano = async (descricao_plano, preco, tipo_do_plano) => {
  const body = { descricao_plano, preco, tipo_do_plano }
  const response = await api.post('/v1/plano/create', body)
  return response.data
}

// Buscar todos os planos (usada na página de planos)
export const buscarPlano = async () => {
  const response = await api.get('/v1/plano/buscar')
  return response.data
}

// Buscar um plano pelo id
export const buscarPlanoId = async (id) => {
  const response = await api.get(`/v1/plano/buscarId/${id}`)
  return response.data
}

// Atualizar plano
export const updatePlano = async (id, descricao_plano, preco, tipo_do_plano) => {
  const body = { id, descricao_plano, preco, tipo_do_plano }
  const response = await api.put('/v1/plano/update', body)
  return response.data
}

// Deletar plano
export const deletarPlano = async (id) => {
  const response = await api.delete(`/v1/plano/delete/${id}`)
  return response.data
}