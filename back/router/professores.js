import express from "express"
import ControllerProfessores from "../controller/professores.js"
import authMiddleware from "../middleware/auth.js"

const router = express.Router()

router.get('/buscar', authMiddleware, ControllerProfessores.Buscar)
router.get('/detalhe/:id', authMiddleware, ControllerProfessores.Detalhe)
router.post('/criar', ControllerProfessores.Criar)
router.put('/alterar/:id', authMiddleware, ControllerProfessores.Alterar)
router.delete('/deletar/:id', authMiddleware, ControllerProfessores.Deletar)

export default router
