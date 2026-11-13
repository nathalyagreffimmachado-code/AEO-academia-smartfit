import express from "express"
import ControllerPlanos from "../controller/planos.js"
import authMiddleware from "../middleware/auth.js"

const router = express.Router()

router.get('/buscar', authMiddleware, ControllerPlanos.Buscar)
router.get('/detalhe/:id', authMiddleware, ControllerPlanos.Detalhe)
router.post('/criar', ControllerPlanos.Criar)
router.put('/alterar/:id', authMiddleware, ControllerPlanos.Alterar)
router.delete('/deletar/:id', authMiddleware, ControllerPlanos.Deletar)

export default router
