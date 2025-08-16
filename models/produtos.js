const database = require('./db')

const Produtos = database.sequelize.define('produtos', {
    nome: {
        type: database.Sequelize.STRING
    },
    descricao: {
        type: database.Sequelize.STRING
    },
    codigo: {
        type: database.Sequelize.NUMBER
    },
    categoria: {
        type: database.Sequelize.STRING
    },
})

// Usuarios.sync({force: true})

module.exports = Produtos