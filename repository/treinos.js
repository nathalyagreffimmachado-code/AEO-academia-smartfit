import treinos from '../model/treinos.js'
 
class RepositoryTreinos {
 
    async find() {
 
        const registros = await treinos.findAll()
 
        return registros
 
    }
 
    async findById(id) {
 
        const registro = await treinos.findByPk(id)
 
        return registro
 
    }
 
    async Create(dados) {
 
        const registroCreate = await treinos.create(dados)
 
        return registroCreate
 
    }
 
    async Update(id, dados) {
 
        const registroAlterar = await treinos.findByPk(id)
 
        if (!registroAlterar) {
 
            throw new Error("Treino não encontrado(a)")
 
        }
 
        await registroAlterar.update(dados)
 
        return registroAlterar
 
    }
 
    async Delete(id) {
 
        const registroDeletar = await treinos.findByPk(id)
 
        if (!registroDeletar) {
 
            throw new Error("Treino não encontrado(a)")
 
        }
 
        await registroDeletar.destroy()
 
        return registroDeletar
 
    }
 
}
 
export default new RepositoryTreinos()
 