import matriculas from '../model/matriculas.js'
 
class RepositoryMatriculas {
 
    async find() {
 
        const registros = await matriculas.findAll()
 
        return registros
 
    }
 
    async findById(id) {
 
        const registro = await matriculas.findByPk(id)
 
        return registro
 
    }
 
    async Create(dados) {
 
        const registroCreate = await matriculas.create(dados)
 
        return registroCreate
 
    }
 
    async Update(id, dados) {
 
        const registroAlterar = await matriculas.findByPk(id)
 
        if (!registroAlterar) {
 
            throw new Error("Matrícula não encontrado(a)")
 
        }
 
        await registroAlterar.update(dados)
 
        return registroAlterar
 
    }
 
    async Delete(id) {
 
        const registroDeletar = await matriculas.findByPk(id)
 
        if (!registroDeletar) {
 
            throw new Error("Matrícula não encontrado(a)")
 
        }
 
        await registroDeletar.destroy()
 
        return registroDeletar
 
    }
 
}
 
export default new RepositoryMatriculas()
 