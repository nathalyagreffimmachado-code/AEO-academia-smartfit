import ServicePlanos from '../service/planos.js'

class ControllerPlanos {

    Buscar(req, res) {
        try {
            const planos = ServicePlanos.Buscar()

            res.send({ mensagem: planos })

        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    Detalhe(req, res) {
        try {
            const id = req.params.id

            const planos = ServicePlanos.Detalhe(id)

            res.send({ mensagem: planos })

        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    Criar(req, res) {
        try {
            const { id, nome, valor, duracao, descricao } = req.body

            ServicePlanos.Criar({ id, nome, valor, duracao, descricao })

            res.send({
                mensagem: "Plano criado com sucesso"
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

            const { nome, valor, duracao, descricao } = req.body

            ServicePlanos.Alterar(id, {
                nome,
                valor,
                duracao,
                descricao
            })

            res.send({
                mensagem: "Plano alterado com sucesso"
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

            ServicePlanos.Deletar(id)

            res.send({
                mensagem: "Plano deletado com sucesso"
            })

        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }
}

export default new ControllerPlanos()