
const Sequelize = require('sequelize')
const sequelize = new Sequelize('testeNodejs', 'root', 'voucomeraminey', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function() {
    try {
        console.log('Conectado com sucesso')
    }
    catch {
        console.log('Falha ao se conectar:' +error)
    }
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};