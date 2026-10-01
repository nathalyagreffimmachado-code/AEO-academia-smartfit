import ServiceProfessores from '../service/professores.js'

class ControllerProfessores {

    Buscar(req, res) {

        try {

            const professores = ServiceProfessores.Buscar()

            res.send({ mensagem: professores })

        } catch (error) {

            res.status(500).send({
                mensagem: error.message
            })

        }
    }

    Detalhe(req, res) {

        try {

            const id = req.params.id

            const professor = ServiceProfessores.Detalhe(id)

            res.send({ mensagem: professor })

        } catch (error) {

            res.status(500).send({
                mensagem: error.message
            })

        }
    }

    Criar(req, res) {

        try {

            const {
                id,
                nome,
                especialidade,
                telefone,
                email
            } = req.body

            ServiceProfessores.Criar({
                id,
                nome,
                especialidade,
                telefone,
                email
            })

            res.send({
                mensagem: "Professor criado com sucesso"
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

            const {
                nome,
                especialidade,
                telefone,
                email
            } = req.body

            ServiceProfessores.Alterar(id, {
                nome,
                especialidade,
                telefone,
                email
            })

            res.send({
                mensagem: "Professor alterado com sucesso"
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

            ServiceProfessores.Deletar(id)

            res.send({
                mensagem: "Professor deletado com sucesso"
            })

        } catch (error) {

            res.status(500).send({
                mensagem: error.message
            })

        }
    }
}

export default new ControllerProfessores()
