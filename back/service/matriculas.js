import RepositoryMatricula from '../repository/matricula.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const SECRET = 'batata123'
const SALT = 12

class ServiceMatricula {

    async Buscar() {
        return RepositoryMatricula.Buscar()
    }

    async Detalhe(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        return RepositoryMatricula.Detalhe(id)
    }

    async Criar(email, senha, nome) {
        if (!email || !senha || !nome) {
            throw new Error("Favor informar todos os parametros")
        }

        const cryptPass = await bcrypt.hash(senha, SALT)

        await RepositoryMatricula.Criar(email, cryptPass, nome)
    }

    async Alterar(id, email, senha, nome) {
        if (!id || !email || !nome) {
            throw new Error("Favor informar todos os parametros")
        }

        const cryptPass = !senha
            ? undefined
            : await bcrypt.hash(senha, SALT)

        await RepositoryMatricula.Alterar(id, email, cryptPass, nome)
    }

    async Deletar(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        await RepositoryMatricula.Deletar(id)
    }

    async Login(email, senha) {
        if (!email || !senha) {
            throw new Error("Email ou senha inválido")
        }

        const matricula = await RepositoryMatricula.BuscarEmail(email)

        if (
            !matricula ||
            !(await bcrypt.compare(String(senha), matricula.senha))
        ) {
            throw new Error("Email ou senha inválido")
        }

        return jwt.sign(
            {
                id: matricula.id,
                email: matricula.email
            },
            SECRET,
            {
                expiresIn: 60
            }
        )
    }

}

export default new ServiceMatricula()
