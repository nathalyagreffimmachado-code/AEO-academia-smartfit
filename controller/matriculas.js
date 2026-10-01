import ServiceMatriculas from '../service/matriculas.js'

class ControllerMatriculas {

    Buscar(req, res) {

        try {

            const matriculas = ServiceMatriculas.Buscar()

            res.send({ mensagem: matriculas })

        } catch (error) {

            res.status(500).send({
                mensagem: error.message
            })

        }
    }

    Detalhe(req, res) {

        try {

            const id = req.params.id

            const matricula = ServiceMatriculas.Detalhe(id)

            res.send({ mensagem: matricula })

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
                aluno,
                plano,
                dataInicio,
                dataFim,
                status
            } = req.body

            ServiceMatriculas.Criar({
                id,
                aluno,
                plano,
                dataInicio,
                dataFim,
                status
            })

            res.send({
                mensagem: "Matrícula criada com sucesso"
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
                aluno,
                plano,
                dataInicio,
                dataFim,
                status
            } = req.body

            ServiceMatriculas.Alterar(id, {
                aluno,
                plano,
                dataInicio,
                dataFim,
                status
            })

            res.send({
                mensagem: "Matrícula alterada com sucesso"
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

            ServiceMatriculas.Deletar(id)

            res.send({
                mensagem: "Matrícula deletada com sucesso"
            })

        } catch (error) {

            res.status(500).send({
                mensagem: error.message
            })

        }
    }
}

export default new ControllerMatriculas()
