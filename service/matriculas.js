let matriculas = []
let id = 1

function matricular(nome, curso) {
  const aluno = { id: id++, nome, curso }
  matriculas.push(aluno)
  return aluno
}

function listar() {
  return matriculas
}

export { matricular, listar }