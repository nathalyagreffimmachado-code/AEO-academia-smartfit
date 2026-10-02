import database from "../config/database.js";

class Planos {

    constructor() {

        this.model = database.db.define("academia", {

            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },

            mensal: {
                type: database.db.Sequelize.STRING
            },

            trimestral: {
                type: database.db.Sequelize.STRING
            },

            anual: {
                type: database.db.Sequelize.STRING
            },

           
        })

    }

}

export default new Planos().model
