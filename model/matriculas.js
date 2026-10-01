import { DataTypes } from 'sequelize'
import database from '../config/database.js'

const matriculas = database.define('matriculas', {

    aluno: {
        type: DataTypes.STRING,
        allowNull: false
    },

    planoId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    dataInicio: {
        type: DataTypes.DATEONLY
    },

    status: {
        type: DataTypes.STRING,
        defaultValue: 'ativa'
    },

    academiaId: {
        type: DataTypes.INTEGER
    }

})

export default matriculas