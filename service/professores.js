let professores = []
let id = 1

function criarProfessor(nome, materia) {
  const professor = { id: id++, nome, materia }
  professores.push(professor)
  return professor
}

function listar() {
  return professores
}

export { criarProfessor, listar }