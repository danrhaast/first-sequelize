
const dotenv = require('dotenv')
dotenv.config()

const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    process.env.SEQUELIZE_DATABASE,
    process.env.SEQUELIZE_USERNAME,
    process.env.SEQUELIZE_PASSWORD,
    {
        host: process.env.SEQUELIZE_HOST || 'localhost',
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
    Sequelize,
    sequelize
};