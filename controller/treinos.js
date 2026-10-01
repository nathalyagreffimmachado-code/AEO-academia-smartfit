import ServiceTreinos from '../service/treinos.js'

class ControllerTreinos {

    Buscar(req, res) {

        try {

            const treinos = ServiceTreinos.Buscar()

            req.send({ mensagem: treinos })

        } catch (error) {

            res.status(500).send({
                mensagem: error.message
            })

        }
    }

    Detalhe(req, res) {

        try {

            const id = req.params.id

            const treinos = ServiceTreinos.Detalhe(id)

            res.send({ mensagem: treinos })

        } catch (error) {

            res.status(500).send({
                mensagem: error.message
            })

        }
    }

    Criar(req, res) {

        try {

            const { id, nome, objetivos, duracao,  descricao } = req.body

            ServiceTreinos.Criar({ id, nome, objetivos, duracao,  descricao })

            res.send({
                mensagem: "Treino criado com sucesso"
            })

        } catch (error) {

            res.status(500).send({
                mensagem: error.message
            })

        }
    }

    Alterar(req, res) {

        try {

            const id = req.params.id

            const { nome, objetivos, duracao, descricao } = req.body

            ServiceTreinos.Alterar(id, { nome, objetivos, duracao, descricao  })

            res.send({
                mensagem: "Treino alterado com sucesso"
            })

        } catch (error) {

            res.status(500).send({
                mensagem: error.message
            })

        }
    }

    Deletar(req, res) {

        try {

            const id = req.params.id

            ServiceTreinos.Deletar(id)

            res.send({
                mensagem: "Treino deletado com sucesso"
            })

        } catch (error) {

            res.status(500).send({
                mensagem: error.message
            })

        }
    }
}

export default new ControllerTreinos()
