const Funcionario = require('../models/funcionariosModel');

module.exports = app => {


    app.get("/func/", (req,res)=> {
        Funcionario.selectAll(req, res);
    })

    app.get("/func/:id", (req, res)=> {
        Funcionario.selectById(req,res)
    })

    app.post("/func/create", (req, res) => {
        Funcionario.create(req.body, res);
    })

    app.put("/func/update/:id", (req, res) => {
        Funcionario.update(req, res);
    })

    app.post("/func/login", (req, res) =>{
        Funcionario.login(req.body, res);
    })

    app.delete("/func/delete/:id", (req,res)=>{
        Funcionario.delete(req,res);
    })


}