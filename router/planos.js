import express from 'express'
import { criarPlano, listar } from '../service/planos.js'
const router = express.Router()

router.post("/plano", (req, res) => {
  try {
    const { nome, preco } = req.body
    const resultado = criarPlano(nome, preco)

    res.status(200).send({ message: resultado })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

router.get("/plano", (req, res) => {
  try {
    const resultado = listar()

    res.status(200).send({ message: resultado })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

export default router