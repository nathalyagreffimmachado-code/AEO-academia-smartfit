let planos = [
  { id: 1, nome: "Plano Mensal", preco: 99.90 },
  { id: 2, nome: "Plano Trimestral", preco: 259.90 },
  { id: 3, nome: "Plano Semestral", preco: 469.90 },
  { id: 4, nome: "Plano Anual", preco: 899.90 },
  { id: 5, nome: "Plano Black (Ilimitado)", preco: 149.90 }
]
let id = 6

function criarPlano(nome, preco) {
  const plano = { id: id++, nome, preco }
  planos.push(plano)
  return plano
}

function listar() {
  return planos
}

export { criarPlano, listar }