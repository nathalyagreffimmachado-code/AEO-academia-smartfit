
import planos from '../controller/planos.js'
import ServiceAlunos from '../service/alunos.js'

class RepositoryPlanos {

    async find() {
        const planos = await planos.findAll()

        return planos
    }

    async findById(id) {
        const planosDetalhe = await planos.findByPk(id)

        return planosDetalhe
    }

    async Create(alunos) {
        const planosCreate = await planos.create({ alunos })

        return planosCreate
    }

    async Update(id, alunos) {
        const planosAlterar = await planos.findByPk(id)

        if (!planosAlterar) {
            throw new Error("Plano não encontrado")
        }

        planosAlterar.alunos = alunos

        await planosAlterar.save()

        return planosAlterar
    }

    async Delete(id) {
        const planosDeletar = await planos.findByPk(id)

        if (!planosDeletar) {
            throw new Error("Plano não encontrado")
        }

        await planosDeletar.destroy()

        return planosDeletar
    }
}

export default new RepositoryPlanos()
