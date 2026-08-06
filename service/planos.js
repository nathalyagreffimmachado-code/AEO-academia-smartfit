let planos = []
let id = 1

function criarPlano(nome, preco) {
  const plano = { id: id++, nome, preco }
  planos.push(plano)
  return plano
}

function listar() {
  return planos
}

export { criarPlano, listar }