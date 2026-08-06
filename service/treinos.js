let treinos = []
let id = 1

function criarTreino(nome, tipo) {
  const treino = { id: id++, nome, tipo }
  treinos.push(treino)
  return treino
}

function listar() {
  return treinos
}

export { criarTreino, listar }