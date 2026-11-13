
import ServiceProfessores from '../service/professores.js'

class ServiceProfessores {

    async Buscar() {
        return ServiceProfessores.Buscar()
    }

    async Detalhe(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        return ServiceProfessores.Detalhe(id)
    }

    async Criar(nome, email, matricula) {
        if (!nome || !email || !matricula) {
            throw new Error("Favor informar todos os parametros")
        }

        await ServiceProfessores.Criar(nome, email, matricula)
    }

    async Alterar(id, nome, email, matricula) {
        if (!id || !nome || !email || !matricula) {
            throw new Error("Favor informar todos os parametros")
        }

        await ServiceProfessores.Alterar(id, nome, email, matricula)
    }

    async Deletar(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        await ServiceProfessores.Deletar(id)
    }

}

export default new ServiceProfessores()
