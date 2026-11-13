
import RepositoryProfessores from '../repository/professores.js'

class ServiceProfessores {

    async Buscar() {
        return RepositoryProfessores.Buscar()
    }

    async Detalhe(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        return RepositoryProfessores.Detalhe(id)
    }

    async Criar(nome, email, matricula) {
        if (!nome || !email || !matricula) {
            throw new Error("Favor informar todos os parametros")
        }

        await RepositoryProfessores.Criar(nome, email, matricula)
    }

    async Alterar(id, nome, email, matricula) {
        if (!id || !nome || !email || !matricula) {
            throw new Error("Favor informar todos os parametros")
        }

        await RepositoryProfessores.Alterar(id, nome, email, matricula)
    }

    async Deletar(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        await RepositoryProfessores.Deletar(id)
    }

}

export default new ServiceProfessores()
