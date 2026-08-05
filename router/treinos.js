import express from 'express'
import { treinos } from '../service/treino.js'
const router = express.Router()

router.post("/treino", (req, res) => {
  try {
    const { nome, tipo } = req.body
    const resultado = criarTreino(nome, tipo)

    res.status(200).send({
      message: resultado
    })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

router.get("/treino", (req, res) => {
  try {
    const resultado = listar()

    res.status(200).send({ message: resultado })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

export default router