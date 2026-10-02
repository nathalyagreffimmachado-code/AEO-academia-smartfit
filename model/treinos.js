import database from "../config/database.js";

class Treinos {

    constructor() {

        this.model = database.db.define("academia", {

            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },

            treinodebraco: {
                type: database.db.Sequelize.STRING
            },

            treinodepernas: {
                type: database.db.Sequelize.STRING
            },

            treinodecostas: {
                type: database.db.Sequelize.STRING
            },

        
        })

    }

}

export default new Treinos().model
