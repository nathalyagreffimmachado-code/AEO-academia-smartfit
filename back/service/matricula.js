import ServiceMatricula from '../service/matricula.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const SECRET = 'batata123'
const SALT = 12

class ServiceMatricula {

    async Buscar() {
        return ServiceMatricula.Buscar()
    }

    async Detalhe(id) {
        if(!id) {
            throw new Error("Favor informar o ID")
        }

        return ServiceMatricula.Detalhe(id)
    }

    async Criar(email, senha, nome) {
        if(!email || !senha || !nome) {
            throw new Error("Favor informar todos os parametros")
        }

        const cryptPass = await bcrypt.hash(senha, SALT)

        await ServiceMatricula.Criar(nome, email, cryptPass)
    }

    async Alterar(id, email, senha, nome ) {
        if(!id || !nome || !senha || !nome) {
            throw new Error("Favor informar todos os parametros")
        }
        
        const cryptPass = !senha
            ? undefined
            : await bcrypt.hash(senha, SALT)

        await ServiceMatricula.Alterar(id, email, senha, nome, cryptPass)
    }

    async Deletar(id) {
        if(!id) {
            throw new Error("Favor informar o ID")
        }

        await ServiceMatricula.Deletar(id)
    }

    async Login(email, senha, nome) {
        if(!email || !senha || !nome) {
            throw new Error("Email ou senha inválido")
        }

        const matricula = await ServiceMatricula.BuscarEmail(email)

        if(
            !matricula 
            || !(await bcrypt.compare(String(senha), matricula.senha))
        ){
            throw new Error("Email ou senha inválido")
        }

        // token
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