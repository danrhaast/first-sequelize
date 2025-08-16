const { error } = require('console')
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


const Usuarios = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    dataNasc: {
        type: Sequelize.DATE
    },
    senha: {
        type: Sequelize.STRING
    },
    genero: {
        type: Sequelize.STRING
    }
})

Usuarios.sync({force: true})

//Usuarios.create({
   // nome: 'Daniel',
    //email: 'daniel@gmail.com',
    //dataNasc: '2005-04-26',
    //senha: '654321'

 //})

const Produtos = sequelize.define('produtos', {
    nome: {
        type: Sequelize.STRING
    },
    preco: {
        type: Sequelize.DECIMAL(10, 2)
    },
    descricao: {
        type: Sequelize.STRING
    },
    imagem: {
        type: Sequelize.STRING
    },
    quantidade: {
        type: Sequelize.INTEGER
    },
    categoria: {
        type: Sequelize.STRING
    }

})

