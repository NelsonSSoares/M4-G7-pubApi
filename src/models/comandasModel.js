const ComandasDAO = require('../dao/ComandasDAO')

class ComandasModel {

    selectAll = async (req, res) => {
        try {
            const result = await ComandasDAO.selectAllComandas()
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }

    selectById = async (req, res) =>{
        const id = req.params.id

        try {
            const result = await ComandasDAO.selectComandaByID(id)

            if (result) {
                res.status(200).json(result)
            } else {
                res.status(404).json({msg: 'Comanda não encontrada.'})
            }
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }

    create = async (comanda, res) => {
        try {
            const result = await ComandasDAO.insertComanda(comanda)
            res.status(201).json({ msg: result })
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }

    update = async (req, res) => {
        const id = req.params.id

        try {
            const comanda = await ComandasDAO.selectComandaByID(id)

            if (comanda) {
                const result = await ComandasDAO.updateComanda(id, req.body)
                res.status(200).json({ msg: result })
            } else {
                res.status(404).json({msg: 'Comanda não encontrada.'})
            }
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }

    delete = async (req, res) => {
        const id = req.params.id

        try {
            const comanda = await ComandasDAO.selectComandaByID(id)

            if (comanda) {
                const result = await ComandasDAO.deleteComanda(id)
                res.status(200).json({ msg: result })
            } else {
                res.status(404).json({ msg: 'Comanda não encontrada.' })
            }
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }
}

module.exports = new ComandasModel()