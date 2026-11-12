
import database from "../config/database.js";

class User {
    constructor() {
        this.model = database.db.define("treinos", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            descricao: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            matricula: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            duracao: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            }
        })
    }
}

export default new User().model
