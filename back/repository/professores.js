import professores from '../model/professores.js'
 
class RepositoryProfessores {
   
    async find() {
        const professores = await professores.findAll()
 
        return professores
    }
 
    async findById(id) {
        const professoresDetalhe = await professores.findByPk(id)
 
        return professoresDetalhe
    }
 
    async Create(nome, email, matricula) {
        const professoresCreate = await professores.create({ nome, email, matricula})
 
        return professoresCreate
    }
 
    async Update(id, nome, email, matricula) {
        const professoresAlterar = await professores.findByPk(id)
 
        if(!professoresAlterar){
            throw new Error("Professor não encontrado")
        }
 
        professoresAlterar.nome = nome
        professoresAlterar.email = email
        professoresAlterar.matricula = matricula
 
        await professoresAlterar.save()
 
        return professoresAlterar
    }
 
    async Delete(id) {
        const professoresDeletar = await professores.findByPk(id)
 
        if(!professoresDeletar){
            throw new Error("Professor não encontrado")
        }
 
        await professoresDeletar.destroy()
 
        return professoresDeletar
    }
}
 
export default new RepositoryProfessores()