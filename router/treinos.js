import express from 'express'
import ControllerTreinos from '../controller/treinos.js'
import authMiddleware from '../middleware/auth.js'
const router = express.Router()

router.get('/treinos',authMiddleware, ControllerTreinos.Buscar)

router.get('/treinos/:id', ControllerTreinos.Detalhe)

router.post('/treinos', ControllerTreinos.Criar)

router.put('/treinos/:id', ControllerTreinos.Alterar)

router.delete('/treinos/:id', ControllerTreinos.Deletar)

export default router
