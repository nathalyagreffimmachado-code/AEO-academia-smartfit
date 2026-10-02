import express from 'express'
import ControllerPlanos from '../controller/planos.js'
import authMiddleware from '../middleware/auth.js'
const router = express.Router()

router.get('/planos', authMiddleware, ControllerPlanos.Buscar)

router.get('/planos/:id', ControllerPlanos.Detalhe)

router.post('/planos', ControllerPlanos.Criar)

router.put('/planos/:id', ControllerPlanos.Alterar)

router.delete('/planos/:id', ControllerPlanos.Deletar)

export default router
