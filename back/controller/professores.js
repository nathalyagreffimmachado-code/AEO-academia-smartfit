import professores from '../model/professores.js'
import ServiceProfessores from '../service/professores.js'

class ControllerProfessores {

    async Buscar(req, res) {
        try {
            const Professores = await ServiceProfessores.Buscar()

            res.status(200).send({ professores })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Detalhe(req, res) {
        try {
            // session === usuario logado
            const id = req.session.id
            const professores = await ServiceProfessores.Detalhe(id)

            res.status(200).send({ professores })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Criar(req, res) {
        try {
            const { nome, email, matricula } = req.body

            await ServiceProfessores.Criar(nome, email, matricula)

            res.status(201).send({ message: "Professor criado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Alterar(req, res) {
        try {
            const id = req.session.id
            const { nome, email, matricula } = req.body

            await ServiceProfessores.Alterar(id, nome, email, matricula)
        
            res.status(200).send({ message: "Professor alterado!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Deletar(req, res) {
        try {
            const id = req.session.id

            await ServiceProfessores.Deletar(id)

            res.status(204).send({ message: "Professor deletado!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Login(req, res) {
        try {
            const { nome, email, matricula } = req.body
    
            const token = await ServiceProfessores.Login(nome, email, matricula)

            res.status(200).send({ token })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }


}

export default new ControllerProfessores()