import { Router } from 'express'
import ControllerAcademia from '../controller/academia.js'
import authMiddleware from '../middleware/auth.js'
 
const router = Router()
 
router.get('/buscar',authMiddleware, ControllerAcademia.Buscar)
router.get('/detalhe/:id', ControllerAcademia.Detalhe)
router.post('/criar', ControllerAcademia.Criar)
router.put('/alterar', ControllerAcademia.Alterar)
router.delete('/:deletar', ControllerAcademia.Deletar)
 
export default router
 