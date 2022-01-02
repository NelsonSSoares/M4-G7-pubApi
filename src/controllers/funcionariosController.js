const Funcionario = require('../models/funcionariosModel');

module.exports = app => {


    app.get("/funcionarios", (req,res)=> {
        console.log(req)
        Funcionario.selectAll(req, res);
    })

    app.get("/funcionarios/:id", (req, res)=> {
        Funcionario.selectById(req,res)
    })

    app.post("/funcionarios", (req, res) => {
        Funcionario.create(req.body, res);
    })

    app.put("/funcionarios/:id", (req, res) => {
        Funcionario.update(req, res);
    })

    app.delete("/funcionarios/:id", (req,res)=>{
        Funcionario.delete(req,res);
    })

    app.post("/funcionarios/login", (req, res) =>{
        Funcionario.login(req.body, res);
    })



}