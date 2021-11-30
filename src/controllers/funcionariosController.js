const Funcionario = require('../models/funcionariosModel');

module.exports = app => {



    app.post("/func/create", (req, res) => {
        Funcionario.create(req.body, res)
    })

    app.post('/func/update/:id', (req, res) => {
        Funcionario.update(req, res)
    })

    app.post('/func/login', (req, res) =>{
        Funcionario.login(req.body, res)
    })

    
}