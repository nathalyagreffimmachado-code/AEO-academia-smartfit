import express from 'express'
import { matriculas } from '../router/matriculas.js'
const router = express.Router()

router.post("/matricula", (req, res) => {
  try {
    const { nome, curso } = req.body
    const resultado = matricular(nome, curso)

    res.status(200).send({
      message: resultado
    })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

router.get("/matricula", (req, res) => {
  try {
    const resultado = listar()

    res.status(200).send({ message: resultado })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

export default router