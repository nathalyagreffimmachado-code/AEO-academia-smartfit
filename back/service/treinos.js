
import ServiceTreinos from '../service/treinos.js'

class ServiceTreinos {

    async Buscar() {
        return ServiceTreinos.Buscar()
    }

    async Detalhe(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        return ServiceTreinos.Detalhe(id)
    }

    async Criar(nome, descricao, matricula, duracao) {
        if (!nome || !descricao || !matricula || !duracao) {
            throw new Error("Favor informar todos os parametros")
        }

        await ServiceTreinos.Criar(nome, descricao, matricula, duracao)
    }

    async Alterar(id, nome, descricao, matricula, duracao) {
        if (!id || !nome || !descricao || !matricula || !duracao) {
            throw new Error("Favor informar todos os parametros")
        }

        await ServiceTreinos.Alterar(id, nome, descricao, matricula, duracao)
    }

    async Deletar(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        await ServiceTreinos.Deletar(id)
    }

}

export default new ServiceTreinos()
