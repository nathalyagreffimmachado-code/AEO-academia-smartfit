import ServiceAcademia from '../service/academia.js'
 
class ControllerAcademia {
 
    async Buscar(req, res) {
 
        try {
 
            const academias = await ServiceAcademia.Buscar()
 
            res.status(200).json(academias)
 
        } catch (error) {
 
            res.status(500).json({ erro: error.message })
 
        }
 
    }
 
    async Detalhe(req, res) {
 
        try {
 
            const { id } = req.params
 
            const academia = await ServiceAcademia.Detalhe(id)
 
            res.status(200).json(academia)
 
        } catch (error) {
 
            res.status(404).json({ erro: error.message })
 
        }
 
    }
 
    async Criar(req, res) {
 
        try {
 
            const { nome, endereco, telefone, email } = req.body
 
            const academia = await ServiceAcademia.Criar(nome, endereco, telefone, email)
 
            res.status(201).json(academia)
 
        } catch (error) {
 
            res.status(400).json({ erro: error.message })
 
        }
 
    }
 
    async Alterar(req, res) {
 
        try {
 
            const { id } = req.params
            const { nome, endereco, telefone, email } = req.body
 
            const academia = await ServiceAcademia.Alterar(id, nome, endereco, telefone, email)
 
            res.status(200).json(academia)
 
        } catch (error) {
 
            res.status(400).json({ erro: error.message })
 
        }
 
    }
 
    async Deletar(req, res) {
 
        try {
 
            const { id } = req.params
 
            const academia = await ServiceAcademia.Deletar(id)
 
            res.status(200).json(academia)
 
        } catch (error) {
 
            res.status(400).json({ erro: error.message })
 
        }
 
    }
 
}
 
export default new ControllerAcademia()
 