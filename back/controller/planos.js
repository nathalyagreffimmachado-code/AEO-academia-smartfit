import ServicePlanos from '../service/planos.js'

class ControllerPlanos {

    async Buscar(req, res) {
        try {
            const planos = await ServicePlanos.Buscar()

            res.status(200).send({ planos })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Detalhe(req, res) {
        try {
            const id = req.params.id
            const plano = await ServicePlanos.Detalhe(id)

            res.status(200).send({ plano })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Criar(req, res) {
        try {
            const { descricao_plano, preco, tipo_do_plano } = req.body

            await ServicePlanos.Criar(descricao_plano, preco, tipo_do_plano)

            res.status(201).send({ message: "Plano criado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Alterar(req, res) {
        try {
            const id = req.params.id
            const { descricao_plano, preco, tipo_do_plano } = req.body

            await ServicePlanos.Alterar(id, descricao_plano, preco, tipo_do_plano)

            res.status(200).send({ message: "Plano alterado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Deletar(req, res) {
        try {
            const id = req.params.id

            await ServicePlanos.Deletar(id)

            res.status(200).send({ message: "Plano deletado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

}

export default new ControllerPlanos()
