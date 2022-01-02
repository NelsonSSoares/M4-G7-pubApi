const Bebidas = require('../models/bebidasModel')

module.exports = app => {
    app.get('/bebidas', (req,res) => {
        Bebidas.selectAll(req, res)
    })

    app.get('/bebidas/:id', (req, res) => {
        Bebidas.selectById(req,res)
    })

    app.post('/bebidas', (req, res) => {
        Bebidas.create(req.body, res)
    })

    app.put('/bebidas/:id', (req, res) => {
        Bebidas.update(req, res)
    })

    app.delete('/bebidas/:id', (req,res) => {
        Bebidas.delete(req,res)
    })
}