import database from "../config/database.js";

class Matriculas {

    constructor() {

        this.model = database.db.define("academia", {

            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },

            nome: {
                type: database.db.Sequelize.STRING
            },

            endereco: {
                type: database.db.Sequelize.STRING
            },

            telefone: {
                type: database.db.Sequelize.STRING
            },

            email: {
                type: database.db.Sequelize.STRING
            }

        })

    }

}

export default new Matriculas().model
