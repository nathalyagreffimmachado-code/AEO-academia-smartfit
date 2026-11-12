
import Serviceplanos from '../service/planos.js'
import ServiceAlunos from '../service/alunos.js'

class ControllerPlanos {

    async Buscar(req, res) {
        try {
            const planos = await Serviceplanos.Buscar()

            res.status(200).send({ planos })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Detalhe(req, res) {
        try {
            const id = req.params.id
            const plano = await Serviceplanos.Detalhe(id)

            res.status(200).send({ plano })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Criar(req, res) {
        try {
            const { descricao_plano, preco, tipo_do_plano } = req.body

            await Serviceplanos.Criar(descricao_plano, preco, tipo_do_plano)

            res.status(201).send({ message: "Plano criado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Alterar(req, res) {
        try {
            const id = req.params.id
            const { descricao_plano, preco, tipo_do_plano } = req.body

            await Serviceplanos.Alterar(id, descricao_plano, preco, tipo_do_plano)

            res.status(200).send({ message: "Plano alterado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Deletar(req, res) {
        try {
            const id = req.params.id

            await Serviceplanos.Deletar(id)

            res.status(200).send({ message: "Plano deletado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async BuscarAlunos(req, res) {
        try {
            const alunos = await ServiceAlunos.Buscar()

            res.status(200).send({ alunos })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async DetalheAluno(req, res) {
        try {
            const id = req.params.id
            const aluno = await ServiceAlunos.Detalhe(id)

            res.status(200).send({ aluno })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async CriarAluno(req, res) {
        try {
            const { descricao_plano, preco, tipo_do_plano } = req.body

            await ServiceAlunos.Criar(descricao_plano, preco, tipo_do_plano)

            res.status(201).send({ message: "Aluno criado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async AlterarAluno(req, res) {
        try {
            const id = req.params.id
            const { descricao_plano, preco, tipo_do_plano } = req.body

            await ServiceAlunos.Alterar(id, descricao_plano, preco, tipo_do_plano)

            res.status(200).send({ message: "Aluno alterado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async DeletarAluno(req, res) {
        try {
            const id = req.params.id

            await ServiceAlunos.Deletar(id)

            res.status(200).send({ message: "Aluno deletado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

}

export default new ControllerPlanos()
