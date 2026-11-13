
import Planos from '../model/planos.js'

class RepositoryPlanos {

    async find() {
        const planos = await Planos.findAll()

        return planos
    }

    async findById(id) {
        const planosDetalhe = await Planos.findByPk(id)

        return planosDetalhe
    }

    async Create(descricao_plano, preco, tipo_do_plano) {
        const planosCreate = await Planos.create({
            descricao_plano,
            preco,
            tipo_do_plano
        })

        return planosCreate
    }

    async Update(id, descricao_plano, preco, tipo_do_plano) {
        const planosAlterar = await Planos.findByPk(id)

        if (!planosAlterar) {
            throw new Error("Plano não encontrado")
        }

        planosAlterar.descricao_plano = descricao_plano
        planosAlterar.preco = preco
        planosAlterar.tipo_do_plano = tipo_do_plano

        await planosAlterar.save()

        return planosAlterar
    }

    async Delete(id) {
        const planosDeletar = await Planos.findByPk(id)

        if (!planosDeletar) {
            throw new Error("Plano não encontrado")
        }

        await planosDeletar.destroy()

        return planosDeletar
    }
}

export default new RepositoryPlanos()
