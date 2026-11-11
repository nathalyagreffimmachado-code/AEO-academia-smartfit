import ServiceTreinos from '../service/treinos.js'

class ControllerTreinos {

    async Buscar(req, res) {
        try {
            const treinos = await ServiceTreinos.Buscar()

            res.status(200).send({ treinos })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Detalhe(req, res) {
        try {
            // session === usuario logado
            const id = req.session.id
            const treinos = await ServiceTreinos.Detalhe(id)

            res.status(200).send({ treinos })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Criar(req, res) {
        try {
            const { nome, descricao, matricula, duracao } = req.body

            await ServiceUser.Criar(nome, descricao, matricula, duracao)

            res.status(201).send({ message: "Treinos criado!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Alterar(req, res) {
        try {
            const id = req.session.id
            const { nome, descricao, matricula, duracao } = req.body

            await ServiceTreinos.Alterar(id, nome, descricao, matricula, duracao)
        
            res.status(200).send({ message: "Usuário alterado!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Deletar(req, res) {
        try {
            const id = req.session.id

            await ServiceTreinos.Deletar(id)

            res.status(204).send({ message: "Usuário deletado!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Login(req, res) {
        try {
            const { nome, descricao, matricula, duracao } = req.body
    
            const token = await ServiceUser.Login(nome, descricao, matricula, duracao)

            res.status(200).send({ token })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }


}

export default new ControllerTreinos()