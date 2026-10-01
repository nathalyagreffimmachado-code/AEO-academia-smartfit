import express from 'express'
import ControllerProfessores from '../controller/professores.js'

const router = express.Router()

router.get('/professores', ControllerProfessores.Buscar)

router.get('/professores/:id', ControllerProfessores.Detalhe)

router.post('/professores', ControllerProfessores.Criar)

router.put('/professores/:id', ControllerProfessores.Alterar)

router.delete('/professores/:id', ControllerProfessores.Deletar)

export default router
