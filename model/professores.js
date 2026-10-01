
import { DataTypes } from 'sequelize'
import database from '../config/database.js'

const professores = database.define('professores', {

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING
    },

    telefone: {
        type: DataTypes.STRING
    },

    especialidade: {
        type: DataTypes.STRING
    },

    academiaId: {
        type: DataTypes.INTEGER
    }

})

export default professores