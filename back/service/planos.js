
import ServicePlanosPlanos from '../service/planos.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const SECRET = 'batata123'
const SALT = 12

class ServicePlanos {

    async Buscar() {
        return ServicePlanosPlanos.Buscar()
    }

    async Detalhe(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        return ServicePlanosPlanos.Detalhe(id)
    }

    async Criar(descricao_plano, preco, tipo_do_plano) {
        if (!descricao_plano || !preco || !tipo_do_plano) {
            throw new Error("Favor informar todos os parametros")
        }

        await ServicePlanosPlanos.Criar(
            descricao_plano,
            preco,
            tipo_do_plano
        )
    }

    async Alterar(id, descricao_plano, preco, tipo_do_plano) {
        if (!id || !descricao_plano || !preco || !tipo_do_plano) {
            throw new Error("Favor informar todos os parametros")
        }

        await ServicePlanosPlanos.Alterar(
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

        await ServicePlanosPlanos.Deletar(id)
    }

}

export default new ServicePlanos()
