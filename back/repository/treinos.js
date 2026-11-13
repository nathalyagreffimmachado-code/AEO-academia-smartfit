import treinos from '../model/treinos.js'
 
class RepositoryTreinos {
   
    async find() {
        const treinos = await treinos.findAll()
 
        return treinos
    }
 
    async findById(id) {
        const treinosDetalhe = await treinos.findByPk(id)
 
        return treinosDetalhe
    }
 
    async Create(nome, descricao, matricula, duracao) {
        const treinosCreate = await treinos.create({ nome, descricao, matricula, duracao})
 
        return treinosCreate
    }
 
    async Update(id, nome, descricao, matricula, duracao) {
        const treinosAlterar = await treinos.findByPk(id)
 
        if(!treinosAlterar){
            throw new Error("Treino não encontrado")
        }
 
        treinosAlterar.nome = nome
        treinosAlterar.descricao = descricao
        treinosAlterar.matricula = matricula
        treinosAlterar.duracao = duracao
 
        await treinosAlterar.save()
 
        return treinosAlterar
    }
 
    async Delete(id) {
        const treinosDeletar = await treinos.findByPk(id)
 
        if(!treinosDeletar){
            throw new Error("Treino não encontrado")
        }
 
        await treinosDeletar.destroy()
 
        return treinosDeletar
    }
}
 
export default new RepositoryTreinos()