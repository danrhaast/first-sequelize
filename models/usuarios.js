const database = require('./db')

const Usuarios = database.sequelize.define('usuarios', {
    nome: {
        type: database.Sequelize.STRING
    },
    email: {
        type: database.Sequelize.STRING
    },
    dataNasc: {
        type: database.Sequelize.DataTypes.DATEONLY,
        allowNull: false
    },
    senha: {
        type: database.Sequelize.STRING
    },
    genero: {
        type: database.Sequelize.STRING
    }
})

// Usuarios.sync({force: true})

module.exports = Usuarios