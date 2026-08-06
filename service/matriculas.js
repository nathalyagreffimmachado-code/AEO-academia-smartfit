let matriculas = [
  { id: 1, nome: "João Silva", curso: "Musculação" },
  { id: 2, nome: "Maria Souza", curso: "Crossfit" },
  { id: 3, nome: "Pedro Lima", curso: "Natação" }
]
let id = 4

function matricular(nome, curso) {
  const aluno = { id: id++, nome, curso }
  matriculas.push(aluno)
  return aluno
}

function listar() {
  return matriculas
}

export { matricular, listar }