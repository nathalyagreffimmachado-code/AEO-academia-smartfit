import express from "express"
import ControllerTreinos from "../controller/treinos.js"
import authMiddleware from "../middleware/auth.js"

const router = express.Router()

router.get('/buscar', authMiddleware, ControllerTreinos.Buscar)
router.get('/detalhe/:id', authMiddleware, ControllerTreinos.Detalhe)
router.post('/criar', ControllerTreinos.Criar)
router.put('/alterar/:id', authMiddleware, ControllerTreinos.Alterar)
router.delete('/deletar/:id', authMiddleware, ControllerTreinos.Deletar)

export default router
