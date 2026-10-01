import RepositoryTreinos from '../repository/treinos.js'

class ServiceTreinos {

    // Core - Regra de Negocio

    async Buscar() {

        return RepositoryTreinos.find()

    }

    async Detalhe(id) {

        if (!id) {

            throw new Error("Favor informar o ID")

        }

        const treino = await RepositoryTreinos.findById(id)

        if (!treino) {

            throw new Error(`ID ${id} do treino não encontrado`)

        }

        return treino

    }

    async Criar(nome, objetivo, duracao, descricao) {

        if (!nome || !objetivo || !duracao || !descricao) {

            throw new Error("Favor informar todos os dados")

        }

        const treino = await RepositoryTreinos.Create(
            nome,
            objetivo,
            duracao,
            descricao
        )

        return treino

    }

    async Alterar(id, nome, objetivo, duracao, descricao) {

        if (!id || !nome || !objetivo || !duracao || !descricao) {

            throw new Error("Favor informar os dados")

        }

        const treinoAlterado = await RepositoryTreinos.Update(
            id,
            nome,
            objetivo,
            duracao,
            descricao
        )

        return treinoAlterado

    }

    async Deletar(id) {

        if (!id) {

            throw new Error("Favor informar o ID")

        }

        const treino = await RepositoryTreinos.Delete(id)

        return treino

    }

}

export default new ServiceTreinos()
