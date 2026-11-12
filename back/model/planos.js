import database from "../config/database.js";

class User {
    constructor() {
        this.model = database.db.define("planos", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            descricao_plano: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            preco: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            tipo_do_plano: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            }
        })        
    }
}

export default new User().model