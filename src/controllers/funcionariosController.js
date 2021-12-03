const Funcionario = require('../models/funcionariosModel');

module.exports = app => {


    app.get("/func", (req,res)=> {
        console.log(req)
        Funcionario.selectAll(req, res);
    })

    app.get("/func/:id", (req, res)=> {
        Funcionario.selectById(req,res)
    })

    app.post("/func", (req, res) => {
        Funcionario.create(req.body, res);
    })

    app.put("/func/:id", (req, res) => {
        Funcionario.update(req, res);
    })

    app.delete("/func/:id", (req,res)=>{
        Funcionario.delete(req,res);
    })

    app.post("/func/login", (req, res) =>{
        Funcionario.login(req.body, res);
    })



}