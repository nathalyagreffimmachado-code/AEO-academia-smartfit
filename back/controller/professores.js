import ServiceProfessores from '../service/professores.js'

class ControllerProfessores {

    async Buscar(req, res) {
        try {
            const professor = await ServiceProfessor.Buscar()

            res.status(200).send({ professor })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Detalhe(req, res) {
        try {
            // session === usuario logado
            const id = req.session.id
            const professor = await ServiceProfessor.Detalhe(id)

            res.status(200).send({ professor })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Criar(req, res) {
        try {
            const { nome, email, matricula } = req.body

            await ServiceUser.Criar(nome, email, matricula)

            res.status(201).send({ message: "Professor criado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Alterar(req, res) {
        try {
            const id = req.session.id
            const { nome, email, matricula } = req.body

            await ServiceUser.Alterar(id, nome, email, matricula)
        
            res.status(200).send({ message: "Professor alterado!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Deletar(req, res) {
        try {
            const id = req.session.id

            await ServiceProfessor.Deletar(id)

            res.status(204).send({ message: "Professor deletado!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Login(req, res) {
        try {
            const { nome, email, matricula } = req.body
    
            const token = await ServiceProfessor.Login(nome, email, matricula)

            res.status(200).send({ token })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }


}

export default new ControllerProfessores()