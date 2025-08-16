const express = require('express')
const app = express()
const path = require('path')
const { error } = require('console')
const expressEjsLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const { METHODS } = require('http')
const Usuarios = require('./models/usuarios')
const dayjs = require('dayjs')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(expressEjsLayouts)
app.set('layout', 'layout/main')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get('/', function(req, res) {
    res.render('home', {title: 'Bem-vindo à Página!'});
})

app.get('/form', function(req, res) {
    res.render('form', {title: 'Formulário de Cadastro'});
})

app.get('/usuarios', function(req, res){
    Usuarios.findAll({order: [['id', 'DESC']]}).then(function(usuarios) {
        res.render('usuarios', {usuarios: usuarios, title: 'Página de Usuários', dayjs: dayjs})
    })
})

app.post('/cadastro', function(req, res){
    Usuarios.create({
        id: req.body.id,
        nome: req.body.nome,
        email: req.body.email,
        dataNasc: req.body.dataNasc,
        genero: req.body.genero,
        senha: req.body.senha
        
    }).then(function (){
        res.redirect('usuarios');
    }).catch(function (error){
        res.send('Ocorreu um erro ao cadastrar usuário' +error)
    })
})


app.get('/deletar/:id', function(req, res){
    Usuarios.destroy({where: {'id': req.params.id}}).then(function (){
        res.send('Usuário deletado com sucesso')
    }).catch(function(error) {
        res.send('Este usuário não existe' +error)
    })
})

app.get('/atualizar/:id', async (req, res) => {
    try {
      const usuario = await Usuarios.findByPk(req.params.id);
  
      if (!usuario) {
        return res.send('Usuário não encontrado' +error);
      }
  
      res.render('editar', { usuario, title: 'Atualização do Usuário' });
    } catch (error) {
      res.send('Erro ao carregar dados do usuário' +error);
    }
  });

  
  app.post('/atualizar/:id', (req, res) => {
    Usuarios.update(
      {
        nome: req.body.nome,
        email: req.body.email,
        dataNasc: req.body.dataNasc,
        genero: req.body.genero,
        senha: req.body.senha
      },
      { where: { id: req.params.id } }
    )
    .then(([linhasAtualizadas]) => {
      if (linhasAtualizadas === 0) {
        return res.send('Usuário não encontrado para atualização.');
      }
      res.redirect('/usuarios'); // redireciona sem parâmetros extras
    })
    .catch(error => {
      res.send('Erro ao atualizar usuário: ' + error);
    });
  });
  
  


app.listen(8030, function () {
    console.log('Servidor rodando na porta 8030')
})