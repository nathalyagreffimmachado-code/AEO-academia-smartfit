import RepositoryProfessores from '../repository/professores.js'

class ServiceProfessores {

    // Core - Regra de Negocio

    async Buscar() {

        return RepositoryProfessores.find()

    }

    async Detalhe(id) {

        if (!id) {

            throw new Error("Favor informar o ID")

        }

        const professor = await RepositoryProfessores.findById(id)

        if (!professor) {

            throw new Error(`ID ${id} do professor não encontrado`)

        }

        return professor

    }

    async Criar(nome, especialidade, telefone, email) {

        if (!nome || !especialidade || !telefone || !email) {

            throw new Error("Favor informar todos os dados")

        }

        const professor = await RepositoryProfessores.Create(
            nome,
            especialidade,
            telefone,
            email
        )

        return professor

    }

    async Alterar(id, nome, especialidade, telefone, email) {

        if (!id || !nome || !especialidade || !telefone || !email) {

            throw new Error("Favor informar os dados")

        }

        const professorAlterado = await RepositoryProfessores.Update(
            id,
            nome,
            especialidade,
            telefone,
            email
        )

        return professorAlterado

    }

    async Deletar(id) {

        if (!id) {

            throw new Error("Favor informar o ID")

        }

        const professor = await RepositoryProfessores.Delete(id)

        return professor

    }

}

export default new ServiceProfessores()
