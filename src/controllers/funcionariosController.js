const Funcionario = require('../models/funcionariosModel');

module.exports = app => {
    app.post("/func/registrar", (req, res) => {
        Funcionario.registrar(req.body, res)
    })

    app.post('/func/upload', (req, res) => {
        Funcionario.upload(req, res)
    })

    app.post('/func/login', (req, res) =>{
        Funcionario.login(req.body, res)
    })

    app.get('/func/:id', (req, res) =>{
        Funcionario.lista(req.params.id, res)
    })

    app.get('/func/func', (req, res) =>{
        Funcionario.filtrar(req.query, res)
    })

}