const Comandas = require('../models/comandasModel');

module.exports = app => {


    app.get("/comandas/", (req,res)=> {
       Comandas.selectAll(req, res);
    })

    app.get("/comandas/:id", (req, res)=> {
       Comandas.selectById(req,res)
    })

    app.post("/comandas", (req, res) => {
       Comandas.create(req.body, res);
    })

    app.put("/comandas/:id", (req, res) => {
       Comandas.update(req, res);
    })

    app.delete("/comandas/:id", (req,res)=>{
        Comandas.delete(req,res);
    })
}