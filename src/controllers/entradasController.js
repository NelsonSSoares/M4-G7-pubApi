const Entradas = require('../models/entradasModel');

module.exports = app => {


    app.get("/entradas/", (req,res)=> {
       Entradas.selectAll(req, res);
    })

    app.get("/entradas/:id", (req, res)=> {
       Entradas.selectById(req,res)
    })

    app.post("/entradas/create", (req, res) => {
       Entradas.create(req.body, res);
    })

    app.post("/entradas/update/:id", (req, res) => {
       Entradas.update(req, res);
    })

    app.delete("/entradas/delete/:id", (req,res)=>{
        Entradas.delete(req,res);
    })

    
}