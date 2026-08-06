import express from 'express'
import { criarProfessor, listar } from '../service/professores.js'
const router = express.Router()

router.post("/professor", (req, res) => {
  try {
    const { nome, materia } = req.body
    const resultado = criarProfessor(nome, materia)

    res.status(200).send({
      message: resultado
    })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

router.get("/professor", (req, res) => {
  try {
    const resultado = listar()

    res.status(200).send({ message: resultado })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

export default router