import express from 'express'
import ControllerProfessores from '../controller/professores.js'
import authMiddleware from '../middleware/auth.js'
const router = express.Router()

router.get('/professores', authMiddleware, ControllerProfessores.Buscar)

router.get('/professores/:id', ControllerProfessores.Detalhe)

router.post('/professores', ControllerProfessores.Criar)

router.put('/professores/:id', ControllerProfessores.Alterar)

router.delete('/professores/:id', ControllerProfessores.Deletar)

export default router
