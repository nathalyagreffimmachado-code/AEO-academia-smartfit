import RepositoryPlanos from '../repository/planos.js'

class ServicePlanos {

    async Buscar() {
        return ServicePlanos.Buscar()
    }

    async Detalhe(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        return ServicePlanos.Detalhe(id)
    }

    async Criar(descricao_plano, preco, tipo_do_plano) {
        if (!descricao_plano || !preco || !tipo_do_plano) {
            throw new Error("Favor informar todos os parametros")
        }

        await ServicePlanos.Criar(
            descricao_plano,
            preco,
            tipo_do_plano
        )
    }

    async Alterar(id, descricao_plano, preco, tipo_do_plano) {
        if (!id || !descricao_plano || !preco || !tipo_do_plano) {
            throw new Error("Favor informar todos os parametros")
        }

        await ServicePlanos.Alterar(
            id,
            descricao_plano,
            preco,
            tipo_do_plano
        )
    }

    async Deletar(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        await ServicePlanos.Deletar(id)
    }

}

export default new ServicePlanos()
