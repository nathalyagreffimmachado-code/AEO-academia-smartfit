
import ServiceMatricula from '../repository/matricula.js'

class ServiceTreinos {

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
            const id = req.params.id
            const treinos = await ServiceTreinos.Detalhe(id)

            res.status(200).send({ treinos })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Criar(req, res) {
        try {
            const { email, senha, nome } = req.body

            await ServiceTreinos.Criar(email, senha, nome)

            res.status(201).send({ message: "Treino criada com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Alterar(req, res) {
        try {
            const id = req.params.id
            const { email, senha, nome } = req.body

            await ServiceTreinos.Alterar(id, email, senha, nome)

            res.status(200).send({ message: "Treino alterada com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Deletar(req, res) {
        try {
            const id = req.params.id

            await ServiceTreinos.Deletar(id)

            res.status(200).send({ message: "Treinos deletada com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Login(req, res) {
        try {
            const { email, senha } = req.body

            const token = await ServiceTreinos.Login(email, senha)

            res.status(200).send({ token })
        } catch (error) {
            res.status(401).send({ message: error.message })
        }
    }

}

export default new ServiceTreinos()
