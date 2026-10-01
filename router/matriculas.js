import express from 'express'
import ControllerMatriculas from '../controller/matriculas.js'

const router = express.Router()

router.get('/matriculas', ControllerMatriculas.Buscar)

router.get('/matriculas/:id', ControllerMatriculas.Detalhe)

router.post('/matriculas', ControllerMatriculas.Criar)

router.put('/matriculas/:id', ControllerMatriculas.Alterar)

router.delete('/matriculas/:id', ControllerMatriculas.Deletar)

export default router
