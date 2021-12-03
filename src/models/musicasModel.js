const MusicasDAO = require('../dao/musicasDAO')

class MusicasModel {

    selectAll = async (req, res) => {
        try {
            const result = await MusicasDAO.selectAllMusicas()
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }

    selectById = async (req, res) =>{
        const id = req.params.id

        try {
            const result = await MusicasDAO.selectMusicaByID(id)

            if (result) {
                res.status(200).json(result)
            } else {
                res.status(404).json({msg: 'Música não encontrada.'})
            }
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }

    create = async (musica, res) => {
        try {
            const result = await MusicasDAO.insertMusica(musica)
            res.status(201).json({ msg: result })
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }

    update = async (req, res) => {
        const id = req.params.id

        try {
            const musica = await MusicasDAO.selectMusicaByID(id)

            if (musica) {
                const result = await MusicasDAO.updateMusica(id, req.body)
                res.status(200).json({ msg: result })
            } else {
                res.status(404).json({msg: 'Música não encontrada.'})
            }
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }

    delete = async (req, res) => {
        const id = req.params.id

        try {
            const musica = await MusicasDAO.selectMusicaByID(id)

            if (musica) {
                const result = await MusicasDAO.deleteMusica(id)
                res.status(200).json({ msg: result })
            } else {
                res.status(404).json({ msg: 'Música não encontrada.' })
            }
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }
}

module.exports = new MusicasModel()