import academia from '../model/academia.js'

class RepositoryAcademia {

    async find() {

        const academias = await academia.findAll()

        return academias

    }

    async findById(id) {

        const academiaDetalhe = await academia.findByPk(id)

        return academiaDetalhe

    }

    async Create(nome, endereco, telefone, email) {

        const academiaCreate = await academia.create({
            nome,
            endereco,
            telefone,
            email
        })

        return academiaCreate

    }

    async Update(id, nome, endereco, telefone, email) {

        const academiaAlterar = await academia.findByPk(id)

        if (!academiaAlterar) {

            throw new Error("Academia não encontrada")

        }

        academiaAlterar.nome = nome
        academiaAlterar.endereco = endereco
        academiaAlterar.telefone = telefone
        academiaAlterar.email = email

        await academiaAlterar.save()

        return academiaAlterar

    }

    async Delete(id) {

        const academiaDeletar = await academia.findByPk(id)

        if (!academiaDeletar) {

            throw new Error("Academia não encontrada")

        }

        await academiaDeletar.destroy()

        return academiaDeletar

    }

}

export default new RepositoryAcademia()
