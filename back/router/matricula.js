import express from "express"
import ControllerMatricula from "../controller/matricula.js"
import authMiddleware from "../middleware/auth.js"

const router = express.Router()

router.get('/buscar', authMiddleware, ControllerMatricula.Buscar)
router.get('/detalhe/:id', authMiddleware, ControllerMatricula.Detalhe)
router.post('/criar', ControllerMatricula.Criar)
router.put('/alterar/:id', authMiddleware, ControllerMatricula.Alterar)
router.delete('/deletar/:id', authMiddleware, ControllerMatricula.Deletar)

export default router
