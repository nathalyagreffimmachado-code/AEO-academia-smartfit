import { Router } from 'express'
import ControllerAcademia from '../controller/academia.js'
 
const router = Router()
 
router.get('/', ControllerAcademia.Buscar)
router.get('/:id', ControllerAcademia.Detalhe)
router.post('/', ControllerAcademia.Criar)
router.put('/:id', ControllerAcademia.Alterar)
router.delete('/:id', ControllerAcademia.Deletar)
 
export default router
 