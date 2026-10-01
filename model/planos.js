import { DataTypes } from 'sequelize'
import database from '../config/database.js'

const planos = database.define('planos', {

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    descricao: {
        type: DataTypes.STRING
    },

    valor: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },

    duracaoMeses: {
        type: DataTypes.INTEGER
    },

    academiaId: {
        type: DataTypes.INTEGER
    }

})

export default planos