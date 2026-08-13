import express from 'express'
import matricula from './router/matriculas.js'
import planos from './router/planos.js'
import treinos from './router/treinos.js'
import professores from './router/professores.js'

const app = express()
app.use(express.json())

app.use(matricula)
app.use(planos)
app.use(treinos)
app.use(professores)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})