import planos from '../model/planos.js'
 
class RepositoryPlanos {
 
    async find() {
 
        const registros = await planos.findAll()
 
        return registros
 
    }
 
    async findById(id) {
 
        const registro = await planos.findByPk(id)
 
        return registro
 
    }
 
    async Create(dados) {
 
        const registroCreate = await planos.create(dados)
 
        return registroCreate
 
    }
 
    async Update(id, dados) {
 
        const registroAlterar = await planos.findByPk(id)
 
        if (!registroAlterar) {
 
            throw new Error("Plano não encontrado(a)")
 
        }
 
        await registroAlterar.update(dados)
 
        return registroAlterar
 
    }
 
    async Delete(id) {
 
        const registroDeletar = await planos.findByPk(id)
 
        if (!registroDeletar) {
 
            throw new Error("Plano não encontrado(a)")
 
        }
 
        await registroDeletar.destroy()
 
        return registroDeletar
 
    }
 
}
 
export default new RepositoryPlanos()
 