const Comidas = require('../models/comidaModel')

module.exports = app => {


    app.get("/comidas", (req,res)=> {
        console.log(req)
        Comidas.selectAll(req, res);
    })

    app.get("/comidas/:id", (req, res)=> {
        Comidas.selectById(req,res)
    })

    app.post("/comidas", (req, res) => {
        Comidas.create(req.body, res);
    })

    app.post("/comidas/:id", (req, res) => {
        Comidas.update(req, res);
    })

    app.delete("/comidas/:id", (req,res)=>{
        Comidas.delete(req,res);
    })

    
}