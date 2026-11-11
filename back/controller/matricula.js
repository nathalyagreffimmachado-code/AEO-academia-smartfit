import ServiceMatriculas from '../service/matriculas.js'

class ControllerMatriculas {

    async Buscar(req, res) {
        try {
            const matriculas = await ServiceMatriculas.Buscar()

            res.status(200).send({ matriculas })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Detalhe(req, res) {
        try {
            // session === usuario logado
            const id = req.session.id
            const matriculas = await ServiceMatriculas.Detalhe(id)

            res.status(200).send({ matriculas })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Criar(req, res) {
        try {
            const { email, senha, nome  } = req.body

            await ServiceMatriculas.Criar(email, senha, nome)

            res.status(201).send({ message: "Matricula criado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Alterar(req, res) {
        try {
            const id = req.session.id
            const { email, senha, nome } = req.body

            await ServiceMatriculas.Alterar(id, email, senha, nome)
        
            res.status(200).send({ message: "Matricula alterado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Deletar(req, res) {
        try {
            const id = req.session.id

            await ServiceMatriculas.Deletar(id)

            res.status(204).send({ message: "Matricula deletada!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Login(req, res) {
        try {
            const { email, senha, nome } = req.body
    
            const token = await ServiceMatriculas.Login(email, senha, nome)

            res.status(200).send({ token })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }


}

export default new ControllerMatriculas()