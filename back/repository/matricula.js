
import Matricula from "../model/matricula.js"

class RepositoryMatricula {

    async Buscar() {
        return Matricula.findAll()
    }

    async Detalhe(id) {
        return Matricula.findByPk(id)
    }

    async BuscarAluno(nome) {
        return Matricula.findOne({ where: { nome } })
    }

    async Criar(email, senha, nome) {
        await Matricula.create({ email, senha, nome })
    }

    async Alterar(id, email, senha, nome) {
        const matricula = await Matricula.findByPk(id)

        if (!matricula) {
            throw new Error("Matrícula não encontrada")
        }

        matricula.email = email || matricula.email
        matricula.senha = senha || matricula.senha
        matricula.nome = nome || matricula.nome

        await matricula.save()
    }

    async Deletar(id) {
        const matricula = await Matricula.findByPk(id)

        if (!matricula) {
            throw new Error("Matrícula não encontrada")
        }

        await matricula.destroy()
    }

}

export default new RepositoryMatricula()
