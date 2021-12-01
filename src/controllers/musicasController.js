const Musica = require('../models/musicasModel')

module.exports = app => {
    app.get('/musicas', (req,res) => {
        Musica.selectAll(req, res)
    })

    app.get('/musicas/:id', (req, res) => {
        Musica.selectById(req,res)
    })

    app.post('/musicas', (req, res) => {
        Musica.create(req.body, res)
    })

    app.put('/musicas/:id', (req, res) => {
        Musica.update(req, res)
    })

    app.delete('/musicas/:id', (req,res) => {
        Musica.delete(req,res)
    })
}