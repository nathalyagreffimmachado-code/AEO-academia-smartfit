let professores = [
  { id: 1, nome: "Carlos Mendes", materia: "Musculação" },
  { id: 2, nome: "Ana Paula", materia: "Crossfit" },
  { id: 3, nome: "Rafael Torres", materia: "Natação" },
  { id: 4, nome: "Juliana Costa", materia: "Yoga" }
]
let id = 5

function criarProfessor(nome, materia) {
  const professor = { id: id++, nome, materia }
  professores.push(professor)
  return professor
}

function listar() {
  return professores
}

export { criarProfessor, listar }