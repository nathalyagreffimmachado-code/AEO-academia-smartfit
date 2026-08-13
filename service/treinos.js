let treinos = [
  { id: 1, nome: "Treino A - Peito e Tríceps", tipo: "Musculação" },
  { id: 2, nome: "Treino B - Costas e Bíceps", tipo: "Musculação" },
  { id: 3, nome: "WOD do Dia", tipo: "Crossfit" },
  { id: 4, nome: "Treino de Resistência", tipo: "Natação" }
]
let id = 5

function criarTreino(nome, tipo) {
  const treino = { id: id++, nome, tipo }
  treinos.push(treino)
  return treino
}

function listar() {
  return treinos
}

export { criarTreino, listar }