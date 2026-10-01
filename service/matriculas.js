import RepositoryMatriculas from '../repository/matriculas.js'

class ServiceMatriculas {

    // Core - Regra de Negocio

    async Buscar() {

        return RepositoryMatriculas.find()

    }

    async Detalhe(id) {

        if (!id) {

            throw new Error("Favor informar o ID")

        }

        const matricula = await RepositoryMatriculas.findById(id)

        if (!matricula) {

            throw new Error(`ID ${id} da matrícula não encontrada`)

        }

        return matricula

    }

    async Criar(aluno, plano, dataInicio, dataFim, status) {

        if (!aluno || !plano || !dataInicio || !dataFim || !status) {

            throw new Error("Favor informar todos os dados")

        }

        const matricula = await RepositoryMatriculas.Create(
            aluno,
            plano,
            dataInicio,
            dataFim,
            status
        )

        return matricula

    }

    async Alterar(id, aluno, plano, dataInicio, dataFim, status) {

        if (!id || !aluno || !plano || !dataInicio || !dataFim || !status) {

            throw new Error("Favor informar os dados")

        }

        const matriculaAlterada = await RepositoryMatriculas.Update(
            id,
            aluno,
            plano,
            dataInicio,
            dataFim,
            status
        )

        return matriculaAlterada

    }

    async Deletar(id) {

        if (!id) {

            throw new Error("Favor informar o ID")

        }

        const matricula = await RepositoryMatriculas.Delete(id)

        return matricula

    }

}

export default new ServiceMatriculas()
