import { DataTypes } from 'sequelize'
import database from '../config/database.js'

const treinos = database.define('treinos', {

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    descricao: {
        type: DataTypes.STRING
    },

    nivel: {
        type: DataTypes.STRING
    },

    professorId: {
        type: DataTypes.INTEGER
    },

    academiaId: {
        type: DataTypes.INTEGER
    }

})

export default treinos