const Drinks = require('../models/drinksModel')

module.exports = app => {
    app.get('/drinks', (req,res) => {
        Drinks.selectAll(req, res)
    })

    app.get('/drinks/:id', (req, res) => {
        Drinks.selectById(req,res)
    })

    app.post('/drinks', (req, res) => {
        Drinks.create(req.body, res)
    })

    app.put('/drinks/:id', (req, res) => {
        Drinks.update(req, res)
    })

    app.delete('/drinks/:id', (req,res) => {
        Drinks.delete(req,res)
    })
}