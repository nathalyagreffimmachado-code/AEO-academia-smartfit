import professores from '../model/professores.js'

class RepositoryProfessores {

    async find() {
        return await professores.findAll()
    }

    async findById(id) {
        return await professores.findByPk(id)
    }

    async Create(campo1, campo2) {
        return await professores.create({ campo1, campo2 })
    }

    async Update(id, campo1, campo2) {
        const registro = await professores.findByPk(id)

        if (!registro) {
            throw new Error("Professor não encontrado")
        }

        registro.campo1 = campo1
        registro.campo2 = campo2
        await registro.save()

        return registro
    }

    async Delete(id) {
        const registro = await professores.findByPk(id)

        if (!registro) {
            throw new Error("Professor não encontrado")
        }

        await registro.destroy()

        return registro
    }

}

export default new RepositoryProfessores()