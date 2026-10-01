import RepositoryPlanos from '../repository/planos.js'

class ServicePlanos {

    // Core - Regra de Negocio

    async Buscar() {

        return RepositoryPlanos.find()

    }

    async Detalhe(id) {

        if (!id) {

            throw new Error("Favor informar o ID")

        }

        const plano = await RepositoryPlanos.findById(id)

        if (!plano) {

            throw new Error(`ID ${id} do plano não encontrado`)

        }

        return plano

    }

    async Criar(nome, valor, duracao, descricao) {

        if (!nome || !valor || !duracao || !descricao) {

            throw new Error("Favor informar todos os dados")

        }

        const plano = await RepositoryPlanos.Create(
            nome,
            valor,
            duracao,
            descricao
        )

        return plano

    }

    async Alterar(id, nome, valor, duracao, descricao) {

        if (!id || !nome || !valor || !duracao || !descricao) {

            throw new Error("Favor informar os dados")

        }

        const planoAlterado = await RepositoryPlanos.Update(
            id,
            nome,
            valor,
            duracao,
            descricao
        )

        return planoAlterado

    }

    async Deletar(id) {

        if (!id) {

            throw new Error("Favor informar o ID")

        }

        const plano = await RepositoryPlanos.Delete(id)

        return plano

    }

}

export default new ServicePlanos()
